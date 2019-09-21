	(function () {
		var __name__ = '__main__';
		var sin = __init__ (__world__.math).sin;
		var cos = __init__ (__world__.math).cos;
		var asin = __init__ (__world__.math).asin;
		var acos = __init__ (__world__.math).acos;
		var pi = __init__ (__world__.math).pi;
		var LATITUDE_OF_NORTHERN_TROPIC = (23.43673 / 180) * pi;
		var LATITUDE_OF_SOUTHERN_TROPIC = (-(23.43673) / 180) * pi;
		var DISK_EXTENSION = 0.15;
		var DISK_TIMERING_THICKNESS = 0.25;
		var latlng2xyz = function (latlng) {
			var __left0__ = latlng;
			var lat = __left0__ [0];
			var lng = __left0__ [1];
			var z = sin (lat);
			var x = cos (lat) * cos (lng);
			var y = cos (lat) * sin (lng);
			return tuple ([x, y, z]);
		};
		var sphere_angle = function (latlng1, latlng2) {
			var __left0__ = latlng2xyz (latlng1);
			var x1 = __left0__ [0];
			var y1 = __left0__ [1];
			var z1 = __left0__ [2];
			var __left0__ = latlng2xyz (latlng2);
			var x2 = __left0__ [0];
			var y2 = __left0__ [1];
			var z2 = __left0__ [2];
			return 2 * asin (Math.pow ((Math.pow (x2 - x1, 2) + Math.pow (y2 - y1, 2)) + Math.pow (z2 - z1, 2), 0.5) / 2);
		};
		var projectionXYZ = function (xyz) {
			var __left0__ = xyz;
			var x1 = __left0__ [0];
			var y1 = __left0__ [1];
			var z1 = __left0__ [2];
			var __left0__ = tuple ([0, 0, -(1)]);
			var x0 = __left0__ [0];
			var y0 = __left0__ [1];
			var z0 = __left0__ [2];
			var z2 = 1;
			var k = (z2 - z0) / (z1 - z0);
			var x2 = x0 + k * (x1 - x0);
			var y2 = y0 + k * (y1 - y0);
			return tuple ([x2, y2]);
		};
		var projectionLatlng = function (latlng) {
			return projectionXYZ (latlng2xyz (latlng));
		};
		var bisect = function (func, x0, x1) {
			var y0 = func (x0);
			var y1 = func (x1);
			if (y0 * y1 > 0) {
				var __except0__ = Exception ('func(x0) and func(x1) must have different signs.');
				__except0__.__cause__ = null;
				throw __except0__;
			}
			while (abs (x1 - x0) > 1e-10) {
				var x01 = (x0 + x1) / 2;
				var y01 = func (x01);
				if (y01 * y0 <= 0) {
					var x1 = x01;
					var y1 = y01;
				}
				else {
					var x0 = x01;
					var y0 = y01;
				}
			}
			return tuple ([x01, y01]);
		};
		var add_vector = function () {
			var vecs = tuple ([].slice.apply (arguments).slice (0));
			return tuple ([sum ((function () {
				var __accu0__ = [];
				for (var e of vecs) {
					__accu0__.append (e [0]);
				}
				return __accu0__;
			}) ()), sum ((function () {
				var __accu0__ = [];
				for (var e of vecs) {
					__accu0__.append (e [1]);
				}
				return __accu0__;
			}) ()), sum ((function () {
				var __accu0__ = [];
				for (var e of vecs) {
					__accu0__.append (e [2]);
				}
				return __accu0__;
			}) ())]);
		};
		var zoom_vector = function (xyz, k) {
			return tuple ([xyz [0] * k, xyz [1] * k, xyz [2] * k]);
		};
		var cross_product = function (xyz1, xyz2) {
			var __left0__ = xyz1;
			var x1 = __left0__ [0];
			var y1 = __left0__ [1];
			var z1 = __left0__ [2];
			var __left0__ = xyz2;
			var x2 = __left0__ [0];
			var y2 = __left0__ [1];
			var z2 = __left0__ [2];
			return tuple ([y1 * z2 - y2 * z1, -(x1 * z2 - z1 * x2), x1 * y2 - x2 * y1]);
		};
		var linspace = function (x0, x1, n) {
			var ret = list ([]);
			var t = x0;
			var d = (x1 - x0) / n;
			while (t < x1) {
				ret.append (t);
				t += d;
			}
			ret.append (x1);
			return ret;
		};
		var circle_parametric = function (vector1, vector2, angle) {
			var cosangle = cos (angle);
			var sinangle = sin (angle);
			return tuple ([vector1 [0] * cosangle + vector2 [0] * sinangle, vector1 [1] * cosangle + vector2 [1] * sinangle, vector1 [2] * cosangle + vector2 [2] * sinangle]);
		};
		var SVG = __class__ ('SVG', [object], {
			__module__: __name__,
			get __init__ () {return __get__ (this, function (self, ratio) {
				if (typeof ratio == 'undefined' || (ratio != null && ratio .hasOwnProperty ("__kwargtrans__"))) {;
					var ratio = 80;
				};
				self._entries = list ([]);
				self.ratio = (function __lambda__ (f) {
					return f * ratio;
				});
			});},
			get _line () {return __get__ (this, function (self, x1, y1, x2, y2, className) {
				self._entries.append ('\n            <line class="{}" x1="{}" x2="{}" y1="{}" y2="{}" stroke="black" fill="none" />\n        '.format (className, x1, x2, y1, y2));
			});},
			get line () {return __get__ (this, function (self, x1, y1, x2, y2, className) {
				if (typeof className == 'undefined' || (className != null && className .hasOwnProperty ("__kwargtrans__"))) {;
					var className = '';
				};
				self._line (self.ratio (x1), self.ratio (y1), self.ratio (x2), self.ratio (y2), __kwargtrans__ ({className: className}));
			});},
			get _circle () {return __get__ (this, function (self, x, y, radius, className) {
				if (typeof className == 'undefined' || (className != null && className .hasOwnProperty ("__kwargtrans__"))) {;
					var className = '';
				};
				self._entries.append ('\n            <circle class="{}" cx="{}" cy="{}" r="{}" stroke="black" stroke-width="1" fill="none" />\n        '.format (className, x, y, radius));
			});},
			get circle () {return __get__ (this, function (self, x, y, radius, className) {
				if (typeof className == 'undefined' || (className != null && className .hasOwnProperty ("__kwargtrans__"))) {;
					var className = '';
				};
				self._circle (self.ratio (x), self.ratio (y), self.ratio (radius), className);
			});},
			get polyline () {return __get__ (this, function (self, xyn, className) {
				if (typeof className == 'undefined' || (className != null && className .hasOwnProperty ("__kwargtrans__"))) {;
					var className = '';
				};
				var points = ' '.join ((function () {
					var __accu0__ = [];
					for (var [x, y] of xyn) {
						__accu0__.append ('{},{}'.format (self.ratio (x), self.ratio (y)));
					}
					return __accu0__;
				}) ());
				self._entries.append ('<polyline class="{}" fill="none" stroke="black"\n            points="{}" />'.format (className, points));
			});},
			get _raw () {return __get__ (this, function (self, add) {
				self._entries.append (add);
			});},
			get toString () {return __get__ (this, function (self) {
				var size = 3.7;
				var viewBox = '{} {} {} {}'.format (self.ratio (-(size)), self.ratio (-(size)), self.ratio (2 * size), self.ratio (2 * size));
				return '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="{}">\n            {}</svg>'.format (viewBox, '\n'.join (self._entries));
			});}
		});
		var __left0__ = projectionLatlng (tuple ([LATITUDE_OF_SOUTHERN_TROPIC, 0]));
		var projected_r_max = __left0__ [0];
		var _ = __left0__ [1];
		var __left0__ = projectionLatlng (tuple ([LATITUDE_OF_NORTHERN_TROPIC, 0]));
		var projected_r_in = __left0__ [0];
		var __ = __left0__ [1];
		var Tympan = function (latitude) {
			var svg = SVG ();
			var zenith = tuple ([latitude, 0.0]);
			var zenithVec1 = latlng2xyz (zenith);
			var equatorVec2 = tuple ([0, 1.0, 0]);
			var azinorthVec3 = cross_product (zenithVec1, equatorVec2);
			var __left0__ = latlng2xyz (tuple ([LATITUDE_OF_SOUTHERN_TROPIC, 0]));
			var x_of_southern_tropic = __left0__ [0];
			var y_of_southern_tropic = __left0__ [1];
			var z_of_southern_tropic = __left0__ [2];
			var projected_equator = projectionLatlng (tuple ([0, 0]));
			svg.circle (0, 0, projected_equator [0], 'circle-equator');
			svg.circle (0, 0, projected_r_max, 'circle-southern-tropic');
			svg.circle (0, 0, projected_r_in, 'circle-northern-tropic');
			for (var altitudeDeg of list ([0, 10, 20, 30, 40, 50, 60, 70, 80, -(18), -(12), -(6)])) {
				var altitude = (altitudeDeg / 180.0) * pi;
				var R = cos (altitude);
				var __left0__ = tuple ([zoom_vector (equatorVec2, R), zoom_vector (azinorthVec3, R)]);
				var v1 = __left0__ [0];
				var v2 = __left0__ [1];
				var v3 = zoom_vector (zenithVec1, sin (altitude));
				var svgPoints = list ([]);
				for (var theta of linspace (-(pi) / 2, (pi * 3) / 2, 360)) {
					var pointXYZ = add_vector (circle_parametric (v1, v2, theta), v3);
					if (pointXYZ [2] < z_of_southern_tropic) {
						continue;
					}
					var projectedXYZ = projectionXYZ (pointXYZ);
					svgPoints.append (projectedXYZ);
				}
				svg.polyline (svgPoints);
			}
			for (var azimuthDeg = 0; azimuthDeg < 360; azimuthDeg += 10) {
				var theta = ((90 - azimuthDeg) / 180) * pi;
				var azimuthVec = circle_parametric (equatorVec2, azinorthVec3, theta);
				var svgPoints = list ([]);
				for (var altitude of linspace (0, pi, 360)) {
					var pointXYZ = circle_parametric (azimuthVec, zenithVec1, altitude);
					if (pointXYZ [2] < z_of_southern_tropic) {
						continue;
					}
					var projectedXYZ = projectionXYZ (pointXYZ);
					svgPoints.append (projectedXYZ);
				}
				svg.polyline (svgPoints);
			}
			var drawR1 = projected_r_max + DISK_EXTENSION;
			var drawR2 = drawR1 + DISK_TIMERING_THICKNESS;
			svg.circle (0, 0, drawR1);
			svg.circle (0, 0, drawR2);
			for (var theta of linspace (0, 2 * pi, 24)) {
				var endVector1 = tuple ([drawR1 * cos (theta), drawR1 * sin (theta)]);
				var endVector2 = tuple ([drawR2 * cos (theta), drawR2 * sin (theta)]);
				svg.line (endVector1 [0], endVector1 [1], endVector2 [0], endVector2 [1]);
			}
			return svg.toString ();
		};
		var getSunArrow1Angle = function (solarEclipticLongitudeInDegrees) {
			var projected_ecliptic_center = (projected_r_max - projected_r_in) / 2;
			var projected_ecliptic_radius = (projected_r_max + projected_r_in) / 2;
			var getRFromEcliptic = function (theta) {
				var a = 1;
				var b = (-(2) * projected_ecliptic_center) * cos (theta);
				var c = Math.pow (projected_ecliptic_center, 2) - Math.pow (projected_ecliptic_radius, 2);
				var R = (-(b) + Math.pow (Math.pow (b, 2) - (4 * a) * c, 0.5)) / (2 * a);
				return R;
			};
			var ecllng = (solarEclipticLongitudeInDegrees / 180) * pi + pi / 2;
			var R = getRFromEcliptic (ecllng);
			var angle1 = asin ((projected_ecliptic_center * sin (ecllng)) / projected_ecliptic_radius);
			var retAngle = angle1 + ecllng;
			return 90 - (retAngle / pi) * 180.0;
		};
		var getSunArrow2Angle = function (solarEclipticLongitudeInDegrees) {
			return -(solarEclipticLongitudeInDegrees);
		};
		var getReteAngle = function (solarEclipticLongitudeInDegrees, siderealTimeIn24Hours) {
			return (siderealTimeIn24Hours * 15 + solarEclipticLongitudeInDegrees) + 180;
		};
		var Rete = function () {
			var svg = SVG ();
			var projected_ecliptic_center = (projected_r_max - projected_r_in) / 2;
			var projected_ecliptic_radius = (projected_r_max + projected_r_in) / 2;
			svg.circle (projected_ecliptic_center, 0, projected_ecliptic_radius, 'circle-ecliptic');
			var getRFromEcliptic = function (theta) {
				var a = 1;
				var b = (-(2) * projected_ecliptic_center) * cos (theta);
				var c = Math.pow (projected_ecliptic_center, 2) - Math.pow (projected_ecliptic_radius, 2);
				var R = (-(b) + Math.pow (Math.pow (b, 2) - (4 * a) * c, 0.5)) / (2 * a);
				return R;
			};
			for (var t = 0; t < 360; t += 5) {
				var theta = (t / 180) * pi + (3 * pi) / 2;
				var R = getRFromEcliptic (theta);
				var endVector1 = tuple ([(R - 0.1) * cos (theta), (R - 0.1) * sin (theta)]);
				if (t == 0) {
					var endVector2 = tuple ([projected_r_max * cos (theta), projected_r_max * sin (theta)]);
				}
				else if (__mod__ (t, 15) == 0) {
					var endVector2 = tuple ([(R + 0.1) * cos (theta), (R + 0.1) * sin (theta)]);
				}
				else {
					var endVector2 = tuple ([R * cos (theta), R * sin (theta)]);
				}
				svg.line (endVector1 [0], endVector1 [1], endVector2 [0], endVector2 [1]);
			}
			var theta = (3 * pi) / 2;
			var R = getRFromEcliptic (theta);
			svg._raw ('\n    <g transform="translate({} 0)">\n\n    <g class="sun-arrow-1">\n    <circle cx="0" cy="0" r="{}" stroke-width="10" visibility="visible" opacity="0.4" />\n    <circle cx="0" cy="-{}" r="5" stroke-width="0" fill="red" />\n    <circle cx="0" cy="-{}" r="9" stroke-width="1" fill="none" />\n    </g>\n\n    </g>\n\n    <g class="sun-arrow-2">\n        <circle cx="0" cy="-{}" r="5" stroke-width="0" fill="red" />\n        <circle cx="0" cy="-{}" r="9" stroke-width="1" fill="none" />\n    </g>\n    '.format (svg.ratio (projected_ecliptic_center), svg.ratio (projected_ecliptic_radius), svg.ratio (projected_ecliptic_radius), svg.ratio (projected_ecliptic_radius), svg.ratio (projected_r_max + DISK_EXTENSION), svg.ratio (projected_r_max + DISK_EXTENSION)));
			return svg.toString ();
		};
		__pragma__ ('<use>' +
			'math' +
		'</use>')
		__pragma__ ('<all>')
			__all__.DISK_EXTENSION = DISK_EXTENSION;
			__all__.DISK_TIMERING_THICKNESS = DISK_TIMERING_THICKNESS;
			__all__.LATITUDE_OF_NORTHERN_TROPIC = LATITUDE_OF_NORTHERN_TROPIC;
			__all__.LATITUDE_OF_SOUTHERN_TROPIC = LATITUDE_OF_SOUTHERN_TROPIC;
			__all__.Rete = Rete;
			__all__.SVG = SVG;
			__all__.Tympan = Tympan;
			__all__._ = _;
			__all__.__ = __;
			__all__.__name__ = __name__;
			__all__.acos = acos;
			__all__.add_vector = add_vector;
			__all__.asin = asin;
			__all__.bisect = bisect;
			__all__.circle_parametric = circle_parametric;
			__all__.cos = cos;
			__all__.cross_product = cross_product;
			__all__.getReteAngle = getReteAngle;
			__all__.getSunArrow1Angle = getSunArrow1Angle;
			__all__.getSunArrow2Angle = getSunArrow2Angle;
			__all__.latlng2xyz = latlng2xyz;
			__all__.linspace = linspace;
			__all__.pi = pi;
			__all__.projected_r_in = projected_r_in;
			__all__.projected_r_max = projected_r_max;
			__all__.projectionLatlng = projectionLatlng;
			__all__.projectionXYZ = projectionXYZ;
			__all__.sin = sin;
			__all__.sphere_angle = sphere_angle;
			__all__.zoom_vector = zoom_vector;
		__pragma__ ('</all>')
	}) ();
