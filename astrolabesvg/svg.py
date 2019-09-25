#!/usr/bin/env python3

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
