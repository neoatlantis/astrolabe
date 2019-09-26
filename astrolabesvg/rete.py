#!/usr/bin/env python3

from math import sin, cos, asin, acos, pi

from .stardata import CONSTELLATIONS
from .constants import *
from .mathfunc import *
from .svg import SVG

def Rete(self):
    svg = SVG()
    projected_r_max = self.projected_r_max
    projected_r_in = self.projected_r_in

    #svg.circle(0, 0, projected_r_max + DISK_EXTENSION)
    
    projected_ecliptic_center = (projected_r_max - projected_r_in) / 2
    projected_ecliptic_radius = (projected_r_max + projected_r_in) / 2

    # draw the circle of ecliptic
    svg.circle(projected_ecliptic_center, 0, projected_ecliptic_radius, "circle-ecliptic")

    def getRFromEcliptic(theta):
        # R^2 + pec^2 - per^2 = 2 * R * pec * cos(theta)
        # R^2 - 2*pec*cos(theta) * R + (pec^2-per^2) = 0
        a = 1
        b = -2 * projected_ecliptic_center * cos(theta)
        c = projected_ecliptic_center**2 - projected_ecliptic_radius**2
        R = (-b + (b**2-4*a*c)**0.5) / (2 * a)
        return R
    
    # draw divisions on the ecliptic,solarterms on the outside ring

    for t in range(0, 360, 5):
        theta = t / 180 * pi + 3*pi/2

        # on ecliptic
        
        R = getRFromEcliptic(theta)
        # R is the radius from center to a point on ecliptic circle, which
        # point is given by an centric angle theta
        endVector1 = ((R-0.1) * cos(theta), (R-0.1) * sin(theta))
        if t == 0:
            endVector2 = (projected_r_max * cos(theta), projected_r_max * sin(theta))
        else:
            if t % 15 == 0:
                endVector2 = ((R+0.1) * cos(theta), (R+0.1) * sin(theta))
            else:
                endVector2 = (R * cos(theta), R * sin(theta))
        svg.line(endVector1[0], endVector1[1], endVector2[0], endVector2[1])

    # solar terms division
    outerR1 = projected_r_max
    outerR2 = outerR1 + DISK_EXTENSION
    outerRM = (outerR1 + outerR2) / 2
    outerRT = outerR1 + DISK_EXTENSION * 0.25
    solarTermsIndex = 0
    
    for t in range(0, 24):
        theta = pi / 12 * t + pi/2 - 3 * pi / 12 

        endVector1 = (outerR1 * cos(theta), outerR1 * sin(theta))
        # if solar term is a midpoint(中气), draw to full extension, otherwise
        # draw to half extension
        if t % 2 == 1:
            endVector2 = (outerR2 * cos(theta), outerR2 * sin(theta))
        else:
            endVector2 = (outerRM * cos(theta), outerRM * sin(theta))
        svg.line(endVector1[0], endVector1[1], endVector2[0], endVector2[1])

        # solar terms text
        textAngle = 2*pi - theta # - pi / 24 * 6# + pi
        svg._raw("""
            <text transform="translate({},{}) rotate({})" text-anchor="middle" textLength="2.5em">{}</text>
        """.format(
            svg.ratio(outerRT * cos(textAngle)),
            svg.ratio(outerRT * sin(textAngle)),
            (textAngle + pi/2) / pi * 180,
            SOLAR_TERMS[t]
        ))



    # adds an element for repesenting the sun on ecliptic
    theta = 3 * pi / 2
    R = getRFromEcliptic(theta)

    svg._raw("""
    <g transform="translate({} 0)">

    <g class="sun-arrow-1">
    <circle cx="0" cy="0" r="{}" stroke-width="10" visibility="visible" opacity="0.4" fill="none"/>
    <circle cx="0" cy="-{}" r="5" stroke-width="0" fill="red" />
    <circle cx="0" cy="-{}" r="9" stroke-width="1" fill="none" />
    </g>

    </g>

    <g class="sun-arrow-2">
        <circle cx="0" cy="-{}" r="5" stroke-width="0" fill="red" />
        <circle cx="0" cy="-{}" r="9" stroke-width="1" fill="none" />
    </g>
    """.format(
        svg.ratio(projected_ecliptic_center),
        svg.ratio(projected_ecliptic_radius),
        svg.ratio(projected_ecliptic_radius),
        svg.ratio(projected_ecliptic_radius),
        svg.ratio(projected_r_max + DISK_EXTENSION),
        svg.ratio(projected_r_max + DISK_EXTENSION)
    ))

    drawStars(svg)

    return svg


##############################################################################

def drawStars(reteSVG):
    svg = reteSVG

    drawnStars = []
    def drawStar(star):
        starRA = star["RA"] * 15 / 180 * pi
        starDE = star["DE"] / 180 * pi

        if star["name"] in drawnStars: return
        if starDE < LATITUDE_OF_SOUTHERN_TROPIC: return
        projectRA = pi*3/2 - starRA
        point = projectionLatlng((starDE, projectRA))
        Vmag = star["Vmag"]
        if Vmag <= 0:
            size = 0.04
        elif Vmag <= 1:
            size = 0.03
        elif Vmag <= 2:
            size = 0.02
        elif Vmag < 3:
            size = 0.01
        else:
            return
        svg.circle(point[0], point[1], size, "star")

        if star["mark"]:
            deltaRA = 0 
            deltaDE = -0.03
            if star["name"] in STARMARK_ADJUST:
                deltaRA += STARMARK_ADJUST[star["name"]][0]
                deltaDE += STARMARK_ADJUST[star["name"]][1]
            pointText = projectionLatlng((
                starDE + deltaDE,
                projectRA + deltaRA
            ))

            starname = star["mark"][0]
            svg._raw("""<text
                transform="translate({},{}) rotate({})"
                class="starname"
                text-anchor="middle">{}</text>""".format(
                svg.ratio(pointText[0]), svg.ratio(pointText[1]),
                (projectRA + deltaRA + pi/2) / pi * 180,
                starname
            ))
            print(starname, star["name"])

        drawnStars.append(star["name"])

    def drawLine(star0, star1):
#        LATITUDE_OF_SOUTHERN_TROPIC
        n = 10
        ra0 = star0["RA"] * 15 / 180 * pi
        dec0 = star0["DE"] / 180 * pi
        ra1 = star1["RA"] * 15 / 180 * pi
        dec1 = star1["DE"] / 180 * pi

        if ra0 > ra1:
            # swap ra0 and ra1
            t = dec1
            dec1 = dec0
            dec0 = t
            t = ra1
            ra1 = ra0
            ra0 = t

        # ra0 < ra1
        if ra1 - ra0 > pi:
            ra0 += 2*pi
            t = dec1
            dec1 = dec0
            dec0 = t
            t = ra1
            ra1 = ra0
            ra0 = t

            
        ra_n = linspace(ra0, ra1, n)
        dec_n = linspace(dec0, dec1, n)

        points = []
        for i in range(0, n):
            ra_i, dec_i = ra_n[i], dec_n[i]
            if dec_i < LATITUDE_OF_SOUTHERN_TROPIC: continue
            point = projectionLatlng((
                dec_i,
                2*pi - ra_i + pi*3/2
            ))
            points.append(point)
        svg.polyline(points, "constellation-line")

    for constellation in CONSTELLATIONS:
        for line in constellation["lines"]:
            for i in range(0, len(line) - 1):
                drawStar(line[i])
                drawLine(line[i], line[i+1])
                drawStar(line[i+1])
    return svg
