#!/usr/bin/env python3

from math import sin, cos, asin, acos, pi

from .stardata import CONSTELLATIONS
from .constants import *
from .svg import SVG
from .mathfunc import *
from .tympan import Tympan
from .rete import Rete


class Astrolabe:

    def __init__(self):
        projected_r_max, _ = projectionLatlng((LATITUDE_OF_SOUTHERN_TROPIC, 0))
        projected_r_in, __ = projectionLatlng((LATITUDE_OF_NORTHERN_TROPIC, 0))

        self.projected_ecliptic_center = (projected_r_max - projected_r_in) / 2
        self.projected_ecliptic_radius = (projected_r_max + projected_r_in) / 2
        self.projected_r_max = projected_r_max
        self.projected_r_in = projected_r_in

    def getSVG(self, latitude):
        mainSVG = SVG()
        subsvg = Tympan(self, latitude)
        mainSVG._raw("""<g class="tympan">{}</g>""".format(subsvg._toString()))
        subsvg = Rete(self)
        mainSVG._raw("""<g class="rete">{}</g>""".format(subsvg._toString()))
        return mainSVG.toString()

    def getSunArrow1Angle(self, solarEclipticLongitudeInDegrees):
        """Returns an angle used for setting the element "svg.sun-arrow"
        rotation that can make the sun appears at the correct position given by
        a ecliptic longitude. The reason for needing such a function, is that
        the ecliptic on rete is a circle eccentric to the main center (0,0).
        The sun, or its ecliptic longitude, however should be presented on a
        circle concentric to (0,0).  """
        projected_ecliptic_center = self.projected_ecliptic_center
        projected_ecliptic_radius = self.projected_ecliptic_radius
        def getRFromEcliptic(theta):
            # R^2 + pec^2 - per^2 = 2 * R * pec * cos(theta)
            # R^2 - 2*pec*cos(theta) * R + (pec^2-per^2) = 0
            a = 1
            b = -2 * projected_ecliptic_center * cos(theta)
            c = projected_ecliptic_center**2 - projected_ecliptic_radius**2
            R = (-b + (b**2-4*a*c)**0.5) / (2 * a)
            return R
        ecllng = solarEclipticLongitudeInDegrees / 180 * pi + pi / 2
        R = getRFromEcliptic(ecllng)
        
        #sin(angle1) / eccentric = sin(ecllng) / projected_ecliptic_radius
        angle1 = asin(
            projected_ecliptic_center * sin(ecllng) / projected_ecliptic_radius)
        retAngle = angle1 + ecllng
        return 90 - retAngle / pi * 180.0

    def getSunArrow2Angle(self, solarEclipticLongitudeInDegrees):
        return -solarEclipticLongitudeInDegrees

    def getReteAngle(self, solarEclipticLongitudeInDegrees, siderealTimeIn24Hours):
        return siderealTimeIn24Hours * 15 + solarEclipticLongitudeInDegrees + 270
