#!/usr/bin/env python3

from math import sin, cos, asin, acos, pi

LATITUDE_OF_NORTHERN_TROPIC = (23.43673 / 180 * pi)
LATITUDE_OF_SOUTHERN_TROPIC = (-23.43673 / 180 * pi)
DISK_EXTENSION = 0.15
DISK_TIMERING_THICKNESS = 0.25


def latlng2xyz(latlng):
    lat, lng = latlng
    z = sin(lat)
    x = cos(lat) * cos(lng)
    y = cos(lat) * sin(lng)
    return (x, y, z)

def sphere_angle(latlng1, latlng2):
    x1, y1, z1 = latlng2xyz(latlng1)
    x2, y2, z2 = latlng2xyz(latlng2)
    return 2 * asin((((x2-x1)**2+(y2-y1)**2+(z2-z1)**2)**0.5) / 2)

def projectionXYZ(xyz):
    """Imagine a X-Y plane in touch with sphere at north pole, project
    from south pole any point given by xyz on sphere to that plane."""
    x1, y1, z1 = xyz
    x0, y0, z0 = 0, 0, -1
    z2 = 1
    k = (z2-z0)/(z1-z0)
    # (z2-z0)/(z1-z0) = (x2-x0)/(x1-x0) = (y2-y0) / (y1-y0) = k
    x2 = x0 + k * (x1-x0)
    y2 = y0 + k * (y1-y0)
    return (x2, y2)

def projectionLatlng(latlng):
    """Imagine a X-Y plane in touch with sphere at north pole, project
    from south pole any point given by latlng on sphere to that plane."""
    return projectionXYZ(latlng2xyz(latlng))


def bisect(func, x0, x1):
    assert x0 < x1
    y0 = func(x0)
    y1 = func(x1)
    if y0 * y1 > 0:
        raise Exception("func(x0) and func(x1) must have different signs.")
    while abs(x1 - x0) > 1e-10:
        x01 = (x0 + x1) / 2
        y01 = func(x01)
        if y01 * y0 <= 0:
            x1 = x01
            y1 = y01
        else:
            x0 = x01
            y0 = y01
    return x01, y01

def add_vector(*vecs):
    return (
        sum([e[0] for e in vecs]),
        sum([e[1] for e in vecs]),
        sum([e[2] for e in vecs])
    )

def zoom_vector(xyz, k):
    return (xyz[0] * k, xyz[1] * k, xyz[2] * k)

def cross_product(xyz1, xyz2):
    """
    | i     j       k  |
    | x1    y1      z1 |
    | x2    y2      z2 |
    """
    x1, y1, z1 = xyz1
    x2, y2, z2 = xyz2
    return (
        (y1*z2 - y2*z1),
        - (x1*z2 - z1*x2),
        (x1*y2 - x2*y1)
    )

def linspace(x0, x1, n):
    assert x0 < x1 and n > 0
    ret = []
    t = x0
    d = (x1 - x0) / n
    while t < x1:
        ret.append(t)
        t += d
    ret.append(x1)
    return ret



def circle_parametric(vector1, vector2, angle):
    """Both vector1 and vector2 have a length of 1 and are separated by 90
    degrees. Given an angle, return vector=vector1 * cos(angle) + vector2 *
    sin(angle), which is a point on a circle that is drawn by this 2 vectors.
    """
    cosangle = cos(angle)
    sinangle = sin(angle)
    return (
        vector1[0] * cosangle + vector2[0] * sinangle,
        vector1[1] * cosangle + vector2[1] * sinangle,
        vector1[2] * cosangle + vector2[2] * sinangle
    )

##############################################################################

class SVG:

    def __init__(self, ratio=80):
        self._entries = []
        self.ratio = lambda f: f * ratio

    def _line(self, x1, y1, x2, y2, className):
        self._entries.append("""
            <line class="{}" x1="{}" x2="{}" y1="{}" y2="{}" stroke="black" fill="none" />
        """.format(className, x1, x2, y1, y2))

    def line(self, x1, y1, x2, y2, className=""):
        self._line(
            self.ratio(x1),
            self.ratio(y1),
            self.ratio(x2),
            self.ratio(y2),
            className=className
        )

    def _circle(self, x, y, radius, className=""):
        self._entries.append("""
            <circle class="{}" cx="{}" cy="{}" r="{}" stroke="black" stroke-width="1" fill="none" />
        """.format(className, x, y, radius))
    
    def circle(self, x, y, radius, className=""):
        self._circle(
            self.ratio(x), self.ratio(y), self.ratio(radius), className)

    def polyline(self, xyn, className=""):
        points = " ".join(["{},{}".format(self.ratio(x), self.ratio(y)) for x, y in xyn])
        self._entries.append("""<polyline class="{}" fill="none" stroke="black"
            points="{}" />""".format(className, points))

    def _raw(self, add):
        self._entries.append(add)

    def toString(self):
        size = 3.7
        viewBox = "{} {} {} {}".format(   
            self.ratio(-size),
            self.ratio(-size),
            self.ratio(2*size),
            self.ratio(2*size)
        )
        return """<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="{}">
            {}</svg>""".format(
                viewBox,
                "\n".join(self._entries)
            )

##############################################################################

projected_r_max, _ = projectionLatlng((LATITUDE_OF_SOUTHERN_TROPIC, 0))
projected_r_in, __ = projectionLatlng((LATITUDE_OF_NORTHERN_TROPIC, 0))

def Tympan(latitude):
    """Generates the tymphan"""
    svg = SVG()
    
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
        svg.polyline(svgPoints)

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
        svg.polyline(svgPoints)

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

    return svg.toString()



##############################################################################

def getSunArrow1Angle(solarEclipticLongitudeInDegrees):
    """Returns an angle used for setting the element "svg.sun-arrow" rotation
    that can make the sun appears at the correct position given by a ecliptic
    longitude. The reason for needing such a function, is that the ecliptic on
    rete is a circle eccentric to the main center (0,0). The sun, or its
    ecliptic longitude, however should be presented on a circle concentric to
    (0,0).
    """
    projected_ecliptic_center = (projected_r_max - projected_r_in) / 2
    projected_ecliptic_radius = (projected_r_max + projected_r_in) / 2
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

def getSunArrow2Angle(solarEclipticLongitudeInDegrees):
    return -solarEclipticLongitudeInDegrees

def getReteAngle(solarEclipticLongitudeInDegrees, siderealTimeIn24Hours):
    return siderealTimeIn24Hours * 15 + solarEclipticLongitudeInDegrees + 180


    




def Rete():
    svg = SVG()

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
    
    # draw divisions on the ecliptic

    for t in range(0, 360, 5):
        theta = t / 180 * pi + 3*pi/2
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

    # adds an element for repesenting the sun on ecliptic
    theta = 3 * pi / 2
    R = getRFromEcliptic(theta)

    svg._raw("""
    <g transform="translate({} 0)">

    <g class="sun-arrow-1">
    <circle cx="0" cy="0" r="{}" stroke-width="10" visibility="visible" opacity="0.4" />
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


    return svg.toString()



