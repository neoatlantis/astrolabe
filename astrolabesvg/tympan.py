#!/usr/bin/env python3
from math import sin, cos, asin, acos, pi

from .constants import *
from .mathfunc import *
from .svg import SVG


def Tympan(self, latitude):
    """Generates the tymphan"""
    svg = SVG()
    projected_r_max = self.projected_r_max
    projected_r_in = self.projected_r_in
    
    zenith = (latitude, 0.0) # longitude is always positioned at 0
    zenithVec1 = latlng2xyz(zenith)
    equatorVec2 = (0, 1.0, 0) # a vector on east
    azinorthVec3 = cross_product(zenithVec1, equatorVec2) # azimuth north vector

    x_of_southern_tropic, y_of_southern_tropic, z_of_southern_tropic =\
        latlng2xyz((LATITUDE_OF_SOUTHERN_TROPIC, 0))

    # draw 3 circles: equator, southern/northern tropic

    projected_equator = projectionLatlng((0, 0))
    svg.circle(0, 0, projected_equator[0], "circle-equator")
    svg.circle(0, 0, projected_r_max, "circle-southern-tropic")
    svg.circle(0, 0, projected_r_in, "circle-northern-tropic")

    # draw altitude circles in horizontal coordinates

    for altitudeDeg in [0, 10, 20, 30, 40, 50, 60, 70, 80, -18, -12, -6]:
        altitude = altitudeDeg / 180.0 * pi
        R = cos(altitude)
        v1, v2 = zoom_vector(equatorVec2, R), zoom_vector(azinorthVec3, R)
        v3 = zoom_vector(zenithVec1, sin(altitude))
        svgPoints = []
        for theta in linspace(-pi/2, pi*3/2, 360):
            pointXYZ = add_vector(circle_parametric(v1, v2, theta), v3)
            if pointXYZ[2] < z_of_southern_tropic: continue # that goes outside
            projectedXYZ = projectionXYZ(pointXYZ)
            svgPoints.append(projectedXYZ)
        svg.polyline(svgPoints, "tympan-mesh")

    # draw azimuth circles in horizontal coordinates

    for azimuthDeg in range(0, 360, 10):
        theta = (90 - azimuthDeg) / 180 * pi
        azimuthVec = circle_parametric(equatorVec2, azinorthVec3, theta)
        svgPoints = []
        for altitude in linspace(0, pi, 360):
            pointXYZ = circle_parametric(azimuthVec, zenithVec1, altitude)
            if pointXYZ[2] < z_of_southern_tropic: continue # that goes outside
            projectedXYZ = projectionXYZ(pointXYZ)
            svgPoints.append(projectedXYZ)
        svg.polyline(svgPoints, "tympan-mesh")

    # draw time division and text outside the disk
    drawR1 = projected_r_max + DISK_EXTENSION
    drawR2 = drawR1 + DISK_TIMERING_THICKNESS
    drawRT = drawR1 + DISK_TIMERING_THICKNESS * 0.25
    svg.circle(0, 0, drawR1)
    svg.circle(0, 0, drawR2)
    
    for i in range(0, 24):
        theta = i * 15 / 180 * pi

        # time division
        endVector1 = (drawR1 * cos(theta), drawR1 * sin(theta))
        endVector2 = (drawR2 * cos(theta), drawR2 * sin(theta))
        svg.line(endVector1[0], endVector1[1], endVector2[0], endVector2[1])

        # hours text
        textAngle = theta + pi + pi/24
        svg._raw("""
            <text transform="translate({},{}) rotate({})" text-anchor="middle" textLength="1.5em">{}</text>
        """.format(
            svg.ratio(drawRT * cos(textAngle)),
            svg.ratio(drawRT * sin(textAngle)),
            (textAngle + pi/2) / pi * 180,
            i
        ))

    # additional text field on tympan
    svg._raw("""
        <text x="0" y="{}" transform="rotate(90)" text-anchor="middle">
            <tspan class="tympan-text1" x="0" dy="1.2em"></tspan>
            <tspan class="tympan-text2" x="0" dy="1.2em"></tspan>
        </text>
    """.format(
        svg.ratio(2.2)
    ))

    return svg
