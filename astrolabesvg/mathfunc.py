#!/usr/bin/env python3

from math import sin, cos, asin, acos, pi

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
    assert n > 1
    ret = []
    t = x0
    d = (x1 - x0) / (n-1)
    for i in range(0, n):
        ret.append(t)
        t += d
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
