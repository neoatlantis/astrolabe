"use strict";
// Transcrypt'ed from Python, 2019-09-25 10:03:13
function astrolabesvg () {
    var __symbols__ = ['__py3.6__', '__esv6__'];
    var __all__ = {};
    var __world__ = __all__;
    var __nest__ = function (headObject, tailNames, value) {
        var current = headObject;
        if (tailNames != '') {
            var tailChain = tailNames.split ('.');
            var firstNewIndex = tailChain.length;
            for (var index = 0; index < tailChain.length; index++) {
                if (!current.hasOwnProperty (tailChain [index])) {
                    firstNewIndex = index;
                    break;
                }
                current = current [tailChain [index]];
            }
            for (var index = firstNewIndex; index < tailChain.length; index++) {
                current [tailChain [index]] = {};
                current = current [tailChain [index]];
            }
        }
        for (var attrib in value) {
            current [attrib] = value [attrib];
        }
    };
    __all__.__nest__ = __nest__;
    var __init__ = function (module) {
        if (!module.__inited__) {
            module.__all__.__init__ (module.__all__);
            module.__inited__ = true;
        }
        return module.__all__;
    };
    __all__.__init__ = __init__;
    var __proxy__ = false;
    var __get__ = function (self, func, quotedFuncName) {
        if (self) {
            if (self.hasOwnProperty ('__class__') || typeof self == 'string' || self instanceof String) {
                if (quotedFuncName) {
                    Object.defineProperty (self, quotedFuncName, {
                        value: function () {
                            var args = [] .slice.apply (arguments);
                            return func.apply (null, [self] .concat (args));
                        },
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                }
                return function () {
                    var args = [] .slice.apply (arguments);
                    return func.apply (null, [self] .concat (args));
                };
            }
            else {
                return func;
            }
        }
        else {
            return func;
        }
    }
    __all__.__get__ = __get__;
    var __getcm__ = function (self, func, quotedFuncName) {
        if (self.hasOwnProperty ('__class__')) {
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self.__class__] .concat (args));
            };
        }
        else {
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self] .concat (args));
            };
        }
    }
    __all__.__getcm__ = __getcm__;
    var __getsm__ = function (self, func, quotedFuncName) {
        return func;
    }
    __all__.__getsm__ = __getsm__;
    var py_metatype = {
        __name__: 'type',
        __bases__: [],
        __new__: function (meta, name, bases, attribs) {
            var cls = function () {
                var args = [] .slice.apply (arguments);
                return cls.__new__ (args);
            };
            for (var index = bases.length - 1; index >= 0; index--) {
                var base = bases [index];
                for (var attrib in base) {
                    var descrip = Object.getOwnPropertyDescriptor (base, attrib);
                    Object.defineProperty (cls, attrib, descrip);
                }
                for (let symbol of Object.getOwnPropertySymbols (base)) {
                    let descrip = Object.getOwnPropertyDescriptor (base, symbol);
                    Object.defineProperty (cls, symbol, descrip);
                }
            }
            cls.__metaclass__ = meta;
            cls.__name__ = name.startsWith ('py_') ? name.slice (3) : name;
            cls.__bases__ = bases;
            for (var attrib in attribs) {
                var descrip = Object.getOwnPropertyDescriptor (attribs, attrib);
                Object.defineProperty (cls, attrib, descrip);
            }
            for (let symbol of Object.getOwnPropertySymbols (attribs)) {
                let descrip = Object.getOwnPropertyDescriptor (attribs, symbol);
                Object.defineProperty (cls, symbol, descrip);
            }
            return cls;
        }
    };
    py_metatype.__metaclass__ = py_metatype;
    __all__.py_metatype = py_metatype;
    var object = {
        __init__: function (self) {},
        __metaclass__: py_metatype,
        __name__: 'object',
        __bases__: [],
        __new__: function (args) {
            var instance = Object.create (this, {__class__: {value: this, enumerable: true}});
            if ('__getattr__' in this || '__setattr__' in this) {
                instance = new Proxy (instance, {
                    get: function (target, name) {
                        let result = target [name];
                        if (result == undefined) {
                            return target.__getattr__ (name);
                        }
                        else {
                            return result;
                        }
                    },
                    set: function (target, name, value) {
                        try {
                            target.__setattr__ (name, value);
                        }
                        catch (exception) {
                            target [name] = value;
                        }
                        return true;
                    }
                })
            }
            this.__init__.apply (null, [instance] .concat (args));
            return instance;
        }
    };
    __all__.object = object;
    var __class__ = function (name, bases, attribs, meta) {
        if (meta === undefined) {
            meta = bases [0] .__metaclass__;
        }
        return meta.__new__ (meta, name, bases, attribs);
    }
    __all__.__class__ = __class__;
    var __pragma__ = function () {};
    __all__.__pragma__ = __pragma__;
	__nest__ (
		__all__,
		'org.transcrypt.__base__', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'org.transcrypt.__base__';
					var __Envir__ = __class__ ('__Envir__', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							self.interpreter_name = 'python';
							self.transpiler_name = 'transcrypt';
							self.transpiler_version = '3.6.101';
							self.target_subdir = '__javascript__';
						});}
					});
					var __envir__ = __Envir__ ();
					__pragma__ ('<all>')
						__all__.__Envir__ = __Envir__;
						__all__.__envir__ = __envir__;
						__all__.__name__ = __name__;
					__pragma__ ('</all>')
				}
			}
		}
	);

	__nest__ (
		__all__,
		'org.transcrypt.__standard__', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'org.transcrypt.__standard__';
					var Exception = __class__ ('Exception', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							var kwargs = dict ();
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
										}
									}
									delete kwargs.__kwargtrans__;
								}
								var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
							}
							else {
								var args = tuple ();
							}
							self.__args__ = args;
							try {
								self.stack = kwargs.error.stack;
							}
							catch (__except0__) {
								self.stack = 'No stack trace available';
							}
						});},
						get __repr__ () {return __get__ (this, function (self) {
							if (len (self.__args__)) {
								return '{}{}'.format (self.__class__.__name__, repr (tuple (self.__args__)));
							}
							else {
								return '{}()'.format (self.__class__.__name__);
							}
						});},
						get __str__ () {return __get__ (this, function (self) {
							if (len (self.__args__) > 1) {
								return str (tuple (self.__args__));
							}
							else if (len (self.__args__)) {
								return str (self.__args__ [0]);
							}
							else {
								return '';
							}
						});}
					});
					var IterableError = __class__ ('IterableError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, error) {
							Exception.__init__ (self, "Can't iterate over non-iterable", __kwargtrans__ ({error: error}));
						});}
					});
					var StopIteration = __class__ ('StopIteration', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, error) {
							Exception.__init__ (self, 'Iterator exhausted', __kwargtrans__ ({error: error}));
						});}
					});
					var ValueError = __class__ ('ValueError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var KeyError = __class__ ('KeyError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var AssertionError = __class__ ('AssertionError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							if (message) {
								Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
							}
							else {
								Exception.__init__ (self, __kwargtrans__ ({error: error}));
							}
						});}
					});
					var NotImplementedError = __class__ ('NotImplementedError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var IndexError = __class__ ('IndexError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var AttributeError = __class__ ('AttributeError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var py_TypeError = __class__ ('py_TypeError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var Warning = __class__ ('Warning', [Exception], {
						__module__: __name__,
					});
					var UserWarning = __class__ ('UserWarning', [Warning], {
						__module__: __name__,
					});
					var DeprecationWarning = __class__ ('DeprecationWarning', [Warning], {
						__module__: __name__,
					});
					var RuntimeWarning = __class__ ('RuntimeWarning', [Warning], {
						__module__: __name__,
					});
					var __sort__ = function (iterable, key, reverse) {
						if (typeof key == 'undefined' || (key != null && key .hasOwnProperty ("__kwargtrans__"))) {;
							var key = null;
						};
						if (typeof reverse == 'undefined' || (reverse != null && reverse .hasOwnProperty ("__kwargtrans__"))) {;
							var reverse = false;
						};
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
										case 'key': var key = __allkwargs0__ [__attrib0__]; break;
										case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						if (key) {
							iterable.sort ((function __lambda__ (a, b) {
								if (arguments.length) {
									var __ilastarg0__ = arguments.length - 1;
									if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
										var __allkwargs0__ = arguments [__ilastarg0__--];
										for (var __attrib0__ in __allkwargs0__) {
											switch (__attrib0__) {
												case 'a': var a = __allkwargs0__ [__attrib0__]; break;
												case 'b': var b = __allkwargs0__ [__attrib0__]; break;
											}
										}
									}
								}
								else {
								}
								return (key (a) > key (b) ? 1 : -(1));
							}));
						}
						else {
							iterable.sort ();
						}
						if (reverse) {
							iterable.reverse ();
						}
					};
					var sorted = function (iterable, key, reverse) {
						if (typeof key == 'undefined' || (key != null && key .hasOwnProperty ("__kwargtrans__"))) {;
							var key = null;
						};
						if (typeof reverse == 'undefined' || (reverse != null && reverse .hasOwnProperty ("__kwargtrans__"))) {;
							var reverse = false;
						};
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
										case 'key': var key = __allkwargs0__ [__attrib0__]; break;
										case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						if (py_typeof (iterable) == dict) {
							var result = copy (iterable.py_keys ());
						}
						else {
							var result = copy (iterable);
						}
						__sort__ (result, key, reverse);
						return result;
					};
					var map = function (func, iterable) {
						return (function () {
							var __accu0__ = [];
							for (var item of iterable) {
								__accu0__.append (func (item));
							}
							return __accu0__;
						}) ();
					};
					var filter = function (func, iterable) {
						if (func == null) {
							var func = bool;
						}
						return (function () {
							var __accu0__ = [];
							for (var item of iterable) {
								if (func (item)) {
									__accu0__.append (item);
								}
							}
							return __accu0__;
						}) ();
					};
					var __Terminal__ = __class__ ('__Terminal__', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							self.buffer = '';
							try {
								self.element = document.getElementById ('__terminal__');
							}
							catch (__except0__) {
								self.element = null;
							}
							if (self.element) {
								self.element.style.overflowX = 'auto';
								self.element.style.boxSizing = 'border-box';
								self.element.style.padding = '5px';
								self.element.innerHTML = '_';
							}
						});},
						get print () {return __get__ (this, function (self) {
							var sep = ' ';
							var end = '\n';
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											case 'sep': var sep = __allkwargs0__ [__attrib0__]; break;
											case 'end': var end = __allkwargs0__ [__attrib0__]; break;
										}
									}
								}
								var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
							}
							else {
								var args = tuple ();
							}
							self.buffer = '{}{}{}'.format (self.buffer, sep.join ((function () {
								var __accu0__ = [];
								for (var arg of args) {
									__accu0__.append (str (arg));
								}
								return __accu0__;
							}) ()), end).__getslice__ (-(4096), null, 1);
							if (self.element) {
								self.element.innerHTML = self.buffer.py_replace ('\n', '<br>').py_replace (' ', '&nbsp');
								self.element.scrollTop = self.element.scrollHeight;
							}
							else {
								console.log (sep.join ((function () {
									var __accu0__ = [];
									for (var arg of args) {
										__accu0__.append (str (arg));
									}
									return __accu0__;
								}) ()));
							}
						});},
						get input () {return __get__ (this, function (self, question) {
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											case 'question': var question = __allkwargs0__ [__attrib0__]; break;
										}
									}
								}
							}
							else {
							}
							self.print ('{}'.format (question), __kwargtrans__ ({end: ''}));
							var answer = window.prompt ('\n'.join (self.buffer.py_split ('\n').__getslice__ (-(16), null, 1)));
							self.print (answer);
							return answer;
						});}
					});
					var __terminal__ = __Terminal__ ();
					__pragma__ ('<all>')
						__all__.AssertionError = AssertionError;
						__all__.AttributeError = AttributeError;
						__all__.DeprecationWarning = DeprecationWarning;
						__all__.Exception = Exception;
						__all__.IndexError = IndexError;
						__all__.IterableError = IterableError;
						__all__.KeyError = KeyError;
						__all__.NotImplementedError = NotImplementedError;
						__all__.RuntimeWarning = RuntimeWarning;
						__all__.StopIteration = StopIteration;
						__all__.py_TypeError = py_TypeError;
						__all__.UserWarning = UserWarning;
						__all__.ValueError = ValueError;
						__all__.Warning = Warning;
						__all__.__Terminal__ = __Terminal__;
						__all__.__name__ = __name__;
						__all__.__sort__ = __sort__;
						__all__.__terminal__ = __terminal__;
						__all__.filter = filter;
						__all__.map = map;
						__all__.sorted = sorted;
					__pragma__ ('</all>')
				}
			}
		}
	);

    var __call__ = function (/* <callee>, <this>, <params>* */) {
        var args = [] .slice.apply (arguments);
        if (typeof args [0] == 'object' && '__call__' in args [0]) {
            return args [0] .__call__ .apply (args [1], args.slice (2));
        }
        else {
            return args [0] .apply (args [1], args.slice (2));
        }
    };
    __all__.__call__ = __call__;
    __nest__ (__all__, '', __init__ (__all__.org.transcrypt.__base__));
    var __envir__ = __all__.__envir__;
    __nest__ (__all__, '', __init__ (__all__.org.transcrypt.__standard__));
    var Exception = __all__.Exception;
    var IterableError = __all__.IterableError;
    var StopIteration = __all__.StopIteration;
    var ValueError = __all__.ValueError;
    var KeyError = __all__.KeyError;
    var AssertionError = __all__.AssertionError;
    var NotImplementedError = __all__.NotImplementedError;
    var IndexError = __all__.IndexError;
    var AttributeError = __all__.AttributeError;
    var py_TypeError = __all__.py_TypeError;
    var Warning = __all__.Warning;
    var UserWarning = __all__.UserWarning;
    var DeprecationWarning = __all__.DeprecationWarning;
    var RuntimeWarning = __all__.RuntimeWarning;
    var __sort__ = __all__.__sort__;
    var sorted = __all__.sorted;
    var map = __all__.map;
    var filter = __all__.filter;
    __all__.print = __all__.__terminal__.print;
    __all__.input = __all__.__terminal__.input;
    var __terminal__ = __all__.__terminal__;
    var print = __all__.print;
    var input = __all__.input;
    __envir__.executor_name = __envir__.transpiler_name;
    var __main__ = {__file__: ''};
    __all__.main = __main__;
    var __except__ = null;
    __all__.__except__ = __except__;
    var __kwargtrans__ = function (anObject) {
        anObject.__kwargtrans__ = null;
        anObject.constructor = Object;
        return anObject;
    }
    __all__.__kwargtrans__ = __kwargtrans__;
    var __globals__ = function (anObject) {
        if (isinstance (anObject, dict)) {
            return anObject;
        }
        else {
            return dict (anObject)
        }
    }
    __all__.__globals__ = __globals__
    var __super__ = function (aClass, methodName) {
        for (let base of aClass.__bases__) {
            if (methodName in base) {
               return base [methodName];
            }
        }
        throw new Exception ('Superclass method not found');
    }
    __all__.__super__ = __super__
    var property = function (getter, setter) {
        if (!setter) {
            setter = function () {};
        }
        return {get: function () {return getter (this)}, set: function (value) {setter (this, value)}, enumerable: true};
    }
    __all__.property = property;
    var __setProperty__ = function (anObject, name, descriptor) {
        if (!anObject.hasOwnProperty (name)) {
            Object.defineProperty (anObject, name, descriptor);
        }
    }
    __all__.__setProperty__ = __setProperty__
    function assert (condition, message) {
        if (!condition) {
            throw AssertionError (message, new Error ());
        }
    }
    __all__.assert = assert;
    var __merge__ = function (object0, object1) {
        var result = {};
        for (var attrib in object0) {
            result [attrib] = object0 [attrib];
        }
        for (var attrib in object1) {
            result [attrib] = object1 [attrib];
        }
        return result;
    };
    __all__.__merge__ = __merge__;
    var dir = function (obj) {
        var aList = [];
        for (var aKey in obj) {
            aList.push (aKey.startsWith ('py_') ? aKey.slice (3) : aKey);
        }
        aList.sort ();
        return aList;
    };
    __all__.dir = dir;
    var setattr = function (obj, name, value) {
        obj [name] = value;
    };
    __all__.setattr = setattr;
    var getattr = function (obj, name) {
        return name in obj ? obj [name] : obj ['py_' + name];
    };
    __all__.getattr = getattr;
    var hasattr = function (obj, name) {
        try {
            return name in obj || 'py_' + name in obj;
        }
        catch (exception) {
            return false;
        }
    };
    __all__.hasattr = hasattr;
    var delattr = function (obj, name) {
        if (name in obj) {
            delete obj [name];
        }
        else {
            delete obj ['py_' + name];
        }
    };
    __all__.delattr = (delattr);
    var __in__ = function (element, container) {
        if (container === undefined || container === null) {
            return false;
        }
        if (container.__contains__ instanceof Function) {
            return container.__contains__ (element);
        }
        else {
            return (
                container.indexOf ?
                container.indexOf (element) > -1 :
                container.hasOwnProperty (element)
            );
        }
    };
    __all__.__in__ = __in__;
    var __specialattrib__ = function (attrib) {
        return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor' || attrib.startswith ('py_');
    };
    __all__.__specialattrib__ = __specialattrib__;
    var len = function (anObject) {
        if (anObject === undefined || anObject === null) {
            return 0;
        }
        if (anObject.__len__ instanceof Function) {
            return anObject.__len__ ();
        }
        if (anObject.length !== undefined) {
            return anObject.length;
        }
        var length = 0;
        for (var attr in anObject) {
            if (!__specialattrib__ (attr)) {
                length++;
            }
        }
        return length;
    };
    __all__.len = len;
    function __i__ (any) {
        return py_typeof (any) == dict ? any.py_keys () : any;
    }
    function __k__ (keyed, key) {
        var result = keyed [key];
        if (typeof result == 'undefined') {
            if (keyed instanceof Array)
                if (key == +key && key >= 0 && keyed.length > key)
                    return result;
                else
                    throw IndexError (key, new Error());
            else
                throw KeyError (key, new Error());
        }
        return result;
    }
    function __t__ (target) {
        return (
            target === undefined || target === null ? false :
            ['boolean', 'number'] .indexOf (typeof target) >= 0 ? target :
            target.__bool__ instanceof Function ? (target.__bool__ () ? target : false) :
            target.__len__ instanceof Function ?  (target.__len__ () !== 0 ? target : false) :
            target instanceof Function ? target :
            len (target) !== 0 ? target :
            false
        );
    }
    __all__.__t__ = __t__;
    var float = function (any) {
        if (any == 'inf') {
            return Infinity;
        }
        else if (any == '-inf') {
            return -Infinity;
        }
        else if (any == 'nan') {
            return NaN;
        }
        else if (isNaN (parseFloat (any))) {
            if (any === false) {
                return 0;
            }
            else if (any === true) {
                return 1;
            }
            else {
                throw ValueError ("could not convert string to float: '" + str(any) + "'", new Error ());
            }
        }
        else {
            return +any;
        }
    };
    float.__name__ = 'float';
    float.__bases__ = [object];
    __all__.float = float;
    var int = function (any) {
        return float (any) | 0
    };
    int.__name__ = 'int';
    int.__bases__ = [object];
    __all__.int = int;
    var bool = function (any) {
        return !!__t__ (any);
    };
    bool.__name__ = 'bool';
    bool.__bases__ = [int];
    __all__.bool = bool;
    var py_typeof = function (anObject) {
        var aType = typeof anObject;
        if (aType == 'object') {
            try {
                return '__class__' in anObject ? anObject.__class__ : object;
            }
            catch (exception) {
                return aType;
            }
        }
        else {
            return (
                aType == 'boolean' ? bool :
                aType == 'string' ? str :
                aType == 'number' ? (anObject % 1 == 0 ? int : float) :
                null
            );
        }
    };
    __all__.py_typeof = py_typeof;
    var issubclass = function (aClass, classinfo) {
        if (classinfo instanceof Array) {
            for (let aClass2 of classinfo) {
                if (issubclass (aClass, aClass2)) {
                    return true;
                }
            }
            return false;
        }
        try {
            var aClass2 = aClass;
            if (aClass2 == classinfo) {
                return true;
            }
            else {
                var bases = [].slice.call (aClass2.__bases__);
                while (bases.length) {
                    aClass2 = bases.shift ();
                    if (aClass2 == classinfo) {
                        return true;
                    }
                    if (aClass2.__bases__.length) {
                        bases = [].slice.call (aClass2.__bases__).concat (bases);
                    }
                }
                return false;
            }
        }
        catch (exception) {
            return aClass == classinfo || classinfo == object;
        }
    };
    __all__.issubclass = issubclass;
    var isinstance = function (anObject, classinfo) {
        try {
            return '__class__' in anObject ? issubclass (anObject.__class__, classinfo) : issubclass (py_typeof (anObject), classinfo);
        }
        catch (exception) {
            return issubclass (py_typeof (anObject), classinfo);
        }
    };
    __all__.isinstance = isinstance;
    var callable = function (anObject) {
        return anObject && typeof anObject == 'object' && '__call__' in anObject ? true : typeof anObject === 'function';
    };
    __all__.callable = callable;
    var repr = function (anObject) {
        try {
            return anObject.__repr__ ();
        }
        catch (exception) {
            try {
                return anObject.__str__ ();
            }
            catch (exception) {
                try {
                    if (anObject == null) {
                        return 'None';
                    }
                    else if (anObject.constructor == Object) {
                        var result = '{';
                        var comma = false;
                        for (var attrib in anObject) {
                            if (!__specialattrib__ (attrib)) {
                                if (attrib.isnumeric ()) {
                                    var attribRepr = attrib;
                                }
                                else {
                                    var attribRepr = '\'' + attrib + '\'';
                                }
                                if (comma) {
                                    result += ', ';
                                }
                                else {
                                    comma = true;
                                }
                                result += attribRepr + ': ' + repr (anObject [attrib]);
                            }
                        }
                        result += '}';
                        return result;
                    }
                    else {
                        return typeof anObject == 'boolean' ? anObject.toString () .capitalize () : anObject.toString ();
                    }
                }
                catch (exception) {
                    return '<object of type: ' + typeof anObject + '>';
                }
            }
        }
    };
    __all__.repr = repr;
    var chr = function (charCode) {
        return String.fromCharCode (charCode);
    };
    __all__.chr = chr;
    var ord = function (aChar) {
        return aChar.charCodeAt (0);
    };
    __all__.ord = ord;
    var max = function (nrOrSeq) {
        return arguments.length == 1 ? Math.max (...nrOrSeq) : Math.max (...arguments);
    };
    __all__.max = max;
    var min = function (nrOrSeq) {
        return arguments.length == 1 ? Math.min (...nrOrSeq) : Math.min (...arguments);
    };
    __all__.min = min;
    var abs = Math.abs;
    __all__.abs = abs;
    var round = function (number, ndigits) {
        if (ndigits) {
            var scale = Math.pow (10, ndigits);
            number *= scale;
        }
        var rounded = Math.round (number);
        if (rounded - number == 0.5 && rounded % 2) {
            rounded -= 1;
        }
        if (ndigits) {
            rounded /= scale;
        }
        return rounded;
    };
    __all__.round = round;
    function __jsUsePyNext__ () {
        try {
            var result = this.__next__ ();
            return {value: result, done: false};
        }
        catch (exception) {
            return {value: undefined, done: true};
        }
    }
    function __pyUseJsNext__ () {
        var result = this.next ();
        if (result.done) {
            throw StopIteration (new Error ());
        }
        else {
            return result.value;
        }
    }
    function py_iter (iterable) {
        if (typeof iterable == 'string' || '__iter__' in iterable) {
            var result = iterable.__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('selector' in iterable) {
            var result = list (iterable) .__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('next' in iterable) {
            var result = iterable
            if (! ('__next__' in result)) {
                result.__next__ = __pyUseJsNext__;
            }
        }
        else if (Symbol.iterator in iterable) {
            var result = iterable [Symbol.iterator] ();
            result.__next__ = __pyUseJsNext__;
        }
        else {
            throw IterableError (new Error ());
        }
        result [Symbol.iterator] = function () {return result;};
        return result;
    }
    function py_next (iterator) {
        try {
            var result = iterator.__next__ ();
        }
        catch (exception) {
            var result = iterator.next ();
            if (result.done) {
                throw StopIteration (new Error ());
            }
            else {
                return result.value;
            }
        }
        if (result == undefined) {
            throw StopIteration (new Error ());
        }
        else {
            return result;
        }
    }
    function __PyIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __PyIterator__.prototype.__next__ = function () {
        if (this.index < this.iterable.length) {
            return this.iterable [this.index++];
        }
        else {
            throw StopIteration (new Error ());
        }
    };
    function __JsIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __JsIterator__.prototype.next = function () {
        if (this.index < this.iterable.py_keys.length) {
            return {value: this.index++, done: false};
        }
        else {
            return {value: undefined, done: true};
        }
    };
    var py_reversed = function (iterable) {
        iterable = iterable.slice ();
        iterable.reverse ();
        return iterable;
    };
    __all__.py_reversed = py_reversed;
    var zip = function () {
        var args = [] .slice.call (arguments);
        for (var i = 0; i < args.length; i++) {
            if (typeof args [i] == 'string') {
                args [i] = args [i] .split ('');
            }
            else if (!Array.isArray (args [i])) {
                args [i] = Array.from (args [i]);
            }
        }
        var shortest = args.length == 0 ? [] : args.reduce (
            function (array0, array1) {
                return array0.length < array1.length ? array0 : array1;
            }
        );
        return shortest.map (
            function (current, index) {
                return args.map (
                    function (current) {
                        return current [index];
                    }
                );
            }
        );
    };
    __all__.zip = zip;
    function range (start, stop, step) {
        if (stop == undefined) {
            stop = start;
            start = 0;
        }
        if (step == undefined) {
            step = 1;
        }
        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }
        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
        return result;
    };
    __all__.range = range;
    function any (iterable) {
        for (let item of iterable) {
            if (bool (item)) {
                return true;
            }
        }
        return false;
    }
    function all (iterable) {
        for (let item of iterable) {
            if (! bool (item)) {
                return false;
            }
        }
        return true;
    }
    function sum (iterable) {
        let result = 0;
        for (let item of iterable) {
            result += item;
        }
        return result;
    }
    __all__.any = any;
    __all__.all = all;
    __all__.sum = sum;
    function enumerate (iterable) {
        return zip (range (len (iterable)), iterable);
    }
    __all__.enumerate = enumerate;
    function copy (anObject) {
        if (anObject == null || typeof anObject == "object") {
            return anObject;
        }
        else {
            var result = {};
            for (var attrib in obj) {
                if (anObject.hasOwnProperty (attrib)) {
                    result [attrib] = anObject [attrib];
                }
            }
            return result;
        }
    }
    __all__.copy = copy;
    function deepcopy (anObject) {
        if (anObject == null || typeof anObject == "object") {
            return anObject;
        }
        else {
            var result = {};
            for (var attrib in obj) {
                if (anObject.hasOwnProperty (attrib)) {
                    result [attrib] = deepcopy (anObject [attrib]);
                }
            }
            return result;
        }
    }
    __all__.deepcopy = deepcopy;
    function list (iterable) {
        var instance = iterable ? Array.from (iterable) : [];
        return instance;
    }
    __all__.list = list;
    Array.prototype.__class__ = list;
    list.__name__ = 'list';
    list.__bases__ = [object];
    Array.prototype.__iter__ = function () {return new __PyIterator__ (this);};
    Array.prototype.__getslice__ = function (start, stop, step) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        else if (stop > this.length) {
            stop = this.length;
        }
        var result = list ([]);
        for (var index = start; index < stop; index += step) {
            result.push (this [index]);
        }
        return result;
    };
    Array.prototype.__setslice__ = function (start, stop, step, source) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        if (step == null) {
            Array.prototype.splice.apply (this, [start, stop - start] .concat (source));
        }
        else {
            var sourceIndex = 0;
            for (var targetIndex = start; targetIndex < stop; targetIndex += step) {
                this [targetIndex] = source [sourceIndex++];
            }
        }
    };
    Array.prototype.__repr__ = function () {
        if (this.__class__ == set && !this.length) {
            return 'set()';
        }
        var result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
        for (var index = 0; index < this.length; index++) {
            if (index) {
                result += ', ';
            }
            result += repr (this [index]);
        }
        if (this.__class__ == tuple && this.length == 1) {
            result += ',';
        }
        result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';;
        return result;
    };
    Array.prototype.__str__ = Array.prototype.__repr__;
    Array.prototype.append = function (element) {
        this.push (element);
    };
    Array.prototype.py_clear = function () {
        this.length = 0;
    };
    Array.prototype.extend = function (aList) {
        this.push.apply (this, aList);
    };
    Array.prototype.insert = function (index, element) {
        this.splice (index, 0, element);
    };
    Array.prototype.remove = function (element) {
        var index = this.indexOf (element);
        if (index == -1) {
            throw ValueError ("list.remove(x): x not in list", new Error ());
        }
        this.splice (index, 1);
    };
    Array.prototype.index = function (element) {
        return this.indexOf (element);
    };
    Array.prototype.py_pop = function (index) {
        if (index == undefined) {
            return this.pop ();
        }
        else {
            return this.splice (index, 1) [0];
        }
    };
    Array.prototype.py_sort = function () {
        __sort__.apply  (null, [this].concat ([] .slice.apply (arguments)));
    };
    Array.prototype.__add__ = function (aList) {
        return list (this.concat (aList));
    };
    Array.prototype.__mul__ = function (scalar) {
        var result = this;
        for (var i = 1; i < scalar; i++) {
            result = result.concat (this);
        }
        return result;
    };
    Array.prototype.__rmul__ = Array.prototype.__mul__;
    function tuple (iterable) {
        var instance = iterable ? [] .slice.apply (iterable) : [];
        instance.__class__ = tuple;
        return instance;
    }
    __all__.tuple = tuple;
    tuple.__name__ = 'tuple';
    tuple.__bases__ = [object];
    function set (iterable) {
        var instance = [];
        if (iterable) {
            for (var index = 0; index < iterable.length; index++) {
                instance.add (iterable [index]);
            }
        }
        instance.__class__ = set;
        return instance;
    }
    __all__.set = set;
    set.__name__ = 'set';
    set.__bases__ = [object];
    Array.prototype.__bindexOf__ = function (element) {
        element += '';
        var mindex = 0;
        var maxdex = this.length - 1;
        while (mindex <= maxdex) {
            var index = (mindex + maxdex) / 2 | 0;
            var middle = this [index] + '';
            if (middle < element) {
                mindex = index + 1;
            }
            else if (middle > element) {
                maxdex = index - 1;
            }
            else {
                return index;
            }
        }
        return -1;
    };
    Array.prototype.add = function (element) {
        if (this.indexOf (element) == -1) {
            this.push (element);
        }
    };
    Array.prototype.discard = function (element) {
        var index = this.indexOf (element);
        if (index != -1) {
            this.splice (index, 1);
        }
    };
    Array.prototype.isdisjoint = function (other) {
        this.sort ();
        for (var i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) != -1) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.issuperset = function (other) {
        this.sort ();
        for (var i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) == -1) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.issubset = function (other) {
        return set (other.slice ()) .issuperset (this);
    };
    Array.prototype.union = function (other) {
        var result = set (this.slice () .sort ());
        for (var i = 0; i < other.length; i++) {
            if (result.__bindexOf__ (other [i]) == -1) {
                result.push (other [i]);
            }
        }
        return result;
    };
    Array.prototype.intersection = function (other) {
        this.sort ();
        var result = set ();
        for (var i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) != -1) {
                result.push (other [i]);
            }
        }
        return result;
    };
    Array.prototype.difference = function (other) {
        var sother = set (other.slice () .sort ());
        var result = set ();
        for (var i = 0; i < this.length; i++) {
            if (sother.__bindexOf__ (this [i]) == -1) {
                result.push (this [i]);
            }
        }
        return result;
    };
    Array.prototype.symmetric_difference = function (other) {
        return this.union (other) .difference (this.intersection (other));
    };
    Array.prototype.py_update = function () {
        var updated = [] .concat.apply (this.slice (), arguments) .sort ();
        this.py_clear ();
        for (var i = 0; i < updated.length; i++) {
            if (updated [i] != updated [i - 1]) {
                this.push (updated [i]);
            }
        }
    };
    Array.prototype.__eq__ = function (other) {
        if (this.length != other.length) {
            return false;
        }
        if (this.__class__ == set) {
            this.sort ();
            other.sort ();
        }
        for (var i = 0; i < this.length; i++) {
            if (this [i] != other [i]) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.__ne__ = function (other) {
        return !this.__eq__ (other);
    };
    Array.prototype.__le__ = function (other) {
        return this.issubset (other);
    };
    Array.prototype.__ge__ = function (other) {
        return this.issuperset (other);
    };
    Array.prototype.__lt__ = function (other) {
        return this.issubset (other) && !this.issuperset (other);
    };
    Array.prototype.__gt__ = function (other) {
        return this.issuperset (other) && !this.issubset (other);
    };
    function bytearray (bytable, encoding) {
        if (bytable == undefined) {
            return new Uint8Array (0);
        }
        else {
            var aType = py_typeof (bytable);
            if (aType == int) {
                return new Uint8Array (bytable);
            }
            else if (aType == str) {
                var aBytes = new Uint8Array (len (bytable));
                for (var i = 0; i < len (bytable); i++) {
                    aBytes [i] = bytable.charCodeAt (i);
                }
                return aBytes;
            }
            else if (aType == list || aType == tuple) {
                return new Uint8Array (bytable);
            }
            else {
                throw py_TypeError;
            }
        }
    }
    var bytes = bytearray;
    __all__.bytearray = bytearray;
    __all__.bytes = bytearray;
    Uint8Array.prototype.__add__ = function (aBytes) {
        var result = new Uint8Array (this.length + aBytes.length);
        result.set (this);
        result.set (aBytes, this.length);
        return result;
    };
    Uint8Array.prototype.__mul__ = function (scalar) {
        var result = new Uint8Array (scalar * this.length);
        for (var i = 0; i < scalar; i++) {
            result.set (this, i * this.length);
        }
        return result;
    };
    Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
    function str (stringable) {
        if (typeof stringable === 'number')
            return stringable.toString();
        else {
            try {
                return stringable.__str__ ();
            }
            catch (exception) {
                try {
                    return repr (stringable);
                }
                catch (exception) {
                    return String (stringable);
                }
            }
        }
    };
    __all__.str = str;
    String.prototype.__class__ = str;
    str.__name__ = 'str';
    str.__bases__ = [object];
    String.prototype.__iter__ = function () {new __PyIterator__ (this);};
    String.prototype.__repr__ = function () {
        return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .py_replace ('\t', '\\t') .py_replace ('\n', '\\n');
    };
    String.prototype.__str__ = function () {
        return this;
    };
    String.prototype.capitalize = function () {
        return this.charAt (0).toUpperCase () + this.slice (1);
    };
    String.prototype.endswith = function (suffix) {
        if (suffix instanceof Array) {
            for (var i=0;i<suffix.length;i++) {
                if (this.slice (-suffix[i].length) == suffix[i])
                    return true;
            }
        } else
            return suffix == '' || this.slice (-suffix.length) == suffix;
        return false;
    };
    String.prototype.find  = function (sub, start) {
        return this.indexOf (sub, start);
    };
    String.prototype.__getslice__ = function (start, stop, step) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        var result = '';
        if (step == 1) {
            result = this.substring (start, stop);
        }
        else {
            for (var index = start; index < stop; index += step) {
                result = result.concat (this.charAt(index));
            }
        }
        return result;
    };
    __setProperty__ (String.prototype, 'format', {
        get: function () {return __get__ (this, function (self) {
            var args = tuple ([] .slice.apply (arguments).slice (1));
            var autoIndex = 0;
            return self.replace (/\{(\w*)\}/g, function (match, key) {
                if (key == '') {
                    key = autoIndex++;
                }
                if (key == +key) {
                    return args [key] == undefined ? match : str (args [key]);
                }
                else {
                    for (var index = 0; index < args.length; index++) {
                        if (typeof args [index] == 'object' && args [index][key] != undefined) {
                            return str (args [index][key]);
                        }
                    }
                    return match;
                }
            });
        });},
        enumerable: true
    });
    String.prototype.isalnum = function () {
        return /^[0-9a-zA-Z]{1,}$/.test(this)
    }
    String.prototype.isalpha = function () {
        return /^[a-zA-Z]{1,}$/.test(this)
    }
    String.prototype.isdecimal = function () {
        return /^[0-9]{1,}$/.test(this)
    }
    String.prototype.isdigit = function () {
        return this.isdecimal()
    }
    String.prototype.islower = function () {
        return /^[a-z]{1,}$/.test(this)
    }
    String.prototype.isupper = function () {
        return /^[A-Z]{1,}$/.test(this)
    }
    String.prototype.isspace = function () {
        return /^[\s]{1,}$/.test(this)
    }
    String.prototype.isnumeric = function () {
        return !isNaN (parseFloat (this)) && isFinite (this);
    };
    String.prototype.join = function (strings) {
        strings = Array.from (strings);
        return strings.join (this);
    };
    String.prototype.lower = function () {
        return this.toLowerCase ();
    };
    String.prototype.py_replace = function (old, aNew, maxreplace) {
        return this.split (old, maxreplace) .join (aNew);
    };
    String.prototype.lstrip = function () {
        return this.replace (/^\s*/g, '');
    };
    String.prototype.rfind = function (sub, start) {
        return this.lastIndexOf (sub, start);
    };
    String.prototype.rsplit = function (sep, maxsplit) {
        if (sep == undefined || sep == null) {
            sep = /\s+/;
            var stripped = this.strip ();
        }
        else {
            var stripped = this;
        }
        if (maxsplit == undefined || maxsplit == -1) {
            return stripped.split (sep);
        }
        else {
            var result = stripped.split (sep);
            if (maxsplit < result.length) {
                var maxrsplit = result.length - maxsplit;
                return [result.slice (0, maxrsplit) .join (sep)] .concat (result.slice (maxrsplit));
            }
            else {
                return result;
            }
        }
    };
    String.prototype.rstrip = function () {
        return this.replace (/\s*$/g, '');
    };
    String.prototype.py_split = function (sep, maxsplit) {
        if (sep == undefined || sep == null) {
            sep = /\s+/;
            var stripped = this.strip ();
        }
        else {
            var stripped = this;
        }
        if (maxsplit == undefined || maxsplit == -1) {
            return stripped.split (sep);
        }
        else {
            var result = stripped.split (sep);
            if (maxsplit < result.length) {
                return result.slice (0, maxsplit).concat ([result.slice (maxsplit).join (sep)]);
            }
            else {
                return result;
            }
        }
    };
    String.prototype.startswith = function (prefix) {
        if (prefix instanceof Array) {
            for (var i=0;i<prefix.length;i++) {
                if (this.indexOf (prefix [i]) == 0)
                    return true;
            }
        } else
            return this.indexOf (prefix) == 0;
        return false;
    };
    String.prototype.strip = function () {
        return this.trim ();
    };
    String.prototype.upper = function () {
        return this.toUpperCase ();
    };
    String.prototype.__mul__ = function (scalar) {
        var result = '';
        for (var i = 0; i < scalar; i++) {
            result = result + this;
        }
        return result;
    };
    String.prototype.__rmul__ = String.prototype.__mul__;
    function __contains__ (element) {
        return this.hasOwnProperty (element);
    }
    function __keys__ () {
        var keys = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                keys.push (attrib);
            }
        }
        return keys;
    }
    function __items__ () {
        var items = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                items.push ([attrib, this [attrib]]);
            }
        }
        return items;
    }
    function __del__ (key) {
        delete this [key];
    }
    function __clear__ () {
        for (var attrib in this) {
            delete this [attrib];
        }
    }
    function __getdefault__ (aKey, aDefault) {
        var result = this [aKey];
        if (result == undefined) {
            result = this ['py_' + aKey]
        }
        return result == undefined ? (aDefault == undefined ? null : aDefault) : result;
    }
    function __setdefault__ (aKey, aDefault) {
        var result = this [aKey];
        if (result != undefined) {
            return result;
        }
        var val = aDefault == undefined ? null : aDefault;
        this [aKey] = val;
        return val;
    }
    function __pop__ (aKey, aDefault) {
        var result = this [aKey];
        if (result != undefined) {
            delete this [aKey];
            return result;
        } else {
            if ( aDefault === undefined ) {
                throw KeyError (aKey, new Error());
            }
        }
        return aDefault;
    }
    function __popitem__ () {
        var aKey = Object.keys (this) [0];
        if (aKey == null) {
            throw KeyError ("popitem(): dictionary is empty", new Error ());
        }
        var result = tuple ([aKey, this [aKey]]);
        delete this [aKey];
        return result;
    }
    function __update__ (aDict) {
        for (var aKey in aDict) {
            this [aKey] = aDict [aKey];
        }
    }
    function __values__ () {
        var values = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                values.push (this [attrib]);
            }
        }
        return values;
    }
    function __dgetitem__ (aKey) {
        return this [aKey];
    }
    function __dsetitem__ (aKey, aValue) {
        this [aKey] = aValue;
    }
    function dict (objectOrPairs) {
        var instance = {};
        if (!objectOrPairs || objectOrPairs instanceof Array) {
            if (objectOrPairs) {
                for (var index = 0; index < objectOrPairs.length; index++) {
                    var pair = objectOrPairs [index];
                    if ( !(pair instanceof Array) || pair.length != 2) {
                        throw ValueError(
                            "dict update sequence element #" + index +
                            " has length " + pair.length +
                            "; 2 is required", new Error());
                    }
                    var key = pair [0];
                    var val = pair [1];
                    if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                         if (!isinstance (objectOrPairs, dict)) {
                             val = dict (val);
                         }
                    }
                    instance [key] = val;
                }
            }
        }
        else {
            if (isinstance (objectOrPairs, dict)) {
                var aKeys = objectOrPairs.py_keys ();
                for (var index = 0; index < aKeys.length; index++ ) {
                    var key = aKeys [index];
                    instance [key] = objectOrPairs [key];
                }
            } else if (objectOrPairs instanceof Object) {
                instance = objectOrPairs;
            } else {
                throw ValueError ("Invalid type of object for dict creation", new Error ());
            }
        }
        __setProperty__ (instance, '__class__', {value: dict, enumerable: false, writable: true});
        __setProperty__ (instance, '__contains__', {value: __contains__, enumerable: false});
        __setProperty__ (instance, 'py_keys', {value: __keys__, enumerable: false});
        __setProperty__ (instance, '__iter__', {value: function () {new __PyIterator__ (this.py_keys ());}, enumerable: false});
        __setProperty__ (instance, Symbol.iterator, {value: function () {new __JsIterator__ (this.py_keys ());}, enumerable: false});
        __setProperty__ (instance, 'py_items', {value: __items__, enumerable: false});
        __setProperty__ (instance, 'py_del', {value: __del__, enumerable: false});
        __setProperty__ (instance, 'py_clear', {value: __clear__, enumerable: false});
        __setProperty__ (instance, 'py_get', {value: __getdefault__, enumerable: false});
        __setProperty__ (instance, 'py_setdefault', {value: __setdefault__, enumerable: false});
        __setProperty__ (instance, 'py_pop', {value: __pop__, enumerable: false});
        __setProperty__ (instance, 'py_popitem', {value: __popitem__, enumerable: false});
        __setProperty__ (instance, 'py_update', {value: __update__, enumerable: false});
        __setProperty__ (instance, 'py_values', {value: __values__, enumerable: false});
        __setProperty__ (instance, '__getitem__', {value: __dgetitem__, enumerable: false});
        __setProperty__ (instance, '__setitem__', {value: __dsetitem__, enumerable: false});
        return instance;
    }
    __all__.dict = dict;
    dict.__name__ = 'dict';
    dict.__bases__ = [object];
    function __setdoc__ (docString) {
        this.__doc__ = docString;
        return this;
    }
    __setProperty__ (Function.prototype, '__setdoc__', {value: __setdoc__, enumerable: false});
    var __jsmod__ = function (a, b) {
        if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rmod__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return a % b;
        }
    };
    __all__.__jsmod__ = __jsmod__;
    var __mod__ = function (a, b) {
        if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rmod__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return ((a % b) + b) % b;
        }
    };
    __all__.mod = __mod__;
    var __pow__ = function (a, b) {
        if (typeof a == 'object' && '__pow__' in a) {
            return a.__pow__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rpow__ (a);
        }
        else {
            return Math.pow (a, b);
        }
    };
    __all__.pow = __pow__;
    var __neg__ = function (a) {
        if (typeof a == 'object' && '__neg__' in a) {
            return a.__neg__ ();
        }
        else {
            return -a;
        }
    };
    __all__.__neg__ = __neg__;
    var __matmul__ = function (a, b) {
        return a.__matmul__ (b);
    };
    __all__.__matmul__ = __matmul__;
    var __mul__ = function (a, b) {
        if (typeof a == 'object' && '__mul__' in a) {
            return a.__mul__ (b);
        }
        else if (typeof b == 'object' && '__rmul__' in b) {
            return b.__rmul__ (a);
        }
        else if (typeof a == 'string') {
            return a.__mul__ (b);
        }
        else if (typeof b == 'string') {
            return b.__rmul__ (a);
        }
        else {
            return a * b;
        }
    };
    __all__.__mul__ = __mul__;
    var __truediv__ = function (a, b) {
        if (typeof a == 'object' && '__truediv__' in a) {
            return a.__truediv__ (b);
        }
        else if (typeof b == 'object' && '__rtruediv__' in b) {
            return b.__rtruediv__ (a);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return b.__rdiv__ (a);
        }
        else {
            return a / b;
        }
    };
    __all__.__truediv__ = __truediv__;
    var __floordiv__ = function (a, b) {
        if (typeof a == 'object' && '__floordiv__' in a) {
            return a.__floordiv__ (b);
        }
        else if (typeof b == 'object' && '__rfloordiv__' in b) {
            return b.__rfloordiv__ (a);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return b.__rdiv__ (a);
        }
        else {
            return Math.floor (a / b);
        }
    };
    __all__.__floordiv__ = __floordiv__;
    var __add__ = function (a, b) {
        if (typeof a == 'object' && '__add__' in a) {
            return a.__add__ (b);
        }
        else if (typeof b == 'object' && '__radd__' in b) {
            return b.__radd__ (a);
        }
        else {
            return a + b;
        }
    };
    __all__.__add__ = __add__;
    var __sub__ = function (a, b) {
        if (typeof a == 'object' && '__sub__' in a) {
            return a.__sub__ (b);
        }
        else if (typeof b == 'object' && '__rsub__' in b) {
            return b.__rsub__ (a);
        }
        else {
            return a - b;
        }
    };
    __all__.__sub__ = __sub__;
    var __lshift__ = function (a, b) {
        if (typeof a == 'object' && '__lshift__' in a) {
            return a.__lshift__ (b);
        }
        else if (typeof b == 'object' && '__rlshift__' in b) {
            return b.__rlshift__ (a);
        }
        else {
            return a << b;
        }
    };
    __all__.__lshift__ = __lshift__;
    var __rshift__ = function (a, b) {
        if (typeof a == 'object' && '__rshift__' in a) {
            return a.__rshift__ (b);
        }
        else if (typeof b == 'object' && '__rrshift__' in b) {
            return b.__rrshift__ (a);
        }
        else {
            return a >> b;
        }
    };
    __all__.__rshift__ = __rshift__;
    var __or__ = function (a, b) {
        if (typeof a == 'object' && '__or__' in a) {
            return a.__or__ (b);
        }
        else if (typeof b == 'object' && '__ror__' in b) {
            return b.__ror__ (a);
        }
        else {
            return a | b;
        }
    };
    __all__.__or__ = __or__;
    var __xor__ = function (a, b) {
        if (typeof a == 'object' && '__xor__' in a) {
            return a.__xor__ (b);
        }
        else if (typeof b == 'object' && '__rxor__' in b) {
            return b.__rxor__ (a);
        }
        else {
            return a ^ b;
        }
    };
    __all__.__xor__ = __xor__;
    var __and__ = function (a, b) {
        if (typeof a == 'object' && '__and__' in a) {
            return a.__and__ (b);
        }
        else if (typeof b == 'object' && '__rand__' in b) {
            return b.__rand__ (a);
        }
        else {
            return a & b;
        }
    };
    __all__.__and__ = __and__;
    var __eq__ = function (a, b) {
        if (typeof a == 'object' && '__eq__' in a) {
            return a.__eq__ (b);
        }
        else {
            return a == b;
        }
    };
    __all__.__eq__ = __eq__;
    var __ne__ = function (a, b) {
        if (typeof a == 'object' && '__ne__' in a) {
            return a.__ne__ (b);
        }
        else {
            return a != b
        }
    };
    __all__.__ne__ = __ne__;
    var __lt__ = function (a, b) {
        if (typeof a == 'object' && '__lt__' in a) {
            return a.__lt__ (b);
        }
        else {
            return a < b;
        }
    };
    __all__.__lt__ = __lt__;
    var __le__ = function (a, b) {
        if (typeof a == 'object' && '__le__' in a) {
            return a.__le__ (b);
        }
        else {
            return a <= b;
        }
    };
    __all__.__le__ = __le__;
    var __gt__ = function (a, b) {
        if (typeof a == 'object' && '__gt__' in a) {
            return a.__gt__ (b);
        }
        else {
            return a > b;
        }
    };
    __all__.__gt__ = __gt__;
    var __ge__ = function (a, b) {
        if (typeof a == 'object' && '__ge__' in a) {
            return a.__ge__ (b);
        }
        else {
            return a >= b;
        }
    };
    __all__.__ge__ = __ge__;
    var __imatmul__ = function (a, b) {
        if ('__imatmul__' in a) {
            return a.__imatmul__ (b);
        }
        else {
            return a.__matmul__ (b);
        }
    };
    __all__.__imatmul__ = __imatmul__;
    var __ipow__ = function (a, b) {
        if (typeof a == 'object' && '__pow__' in a) {
            return a.__ipow__ (b);
        }
        else if (typeof a == 'object' && '__ipow__' in a) {
            return a.__pow__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rpow__ (a);
        }
        else {
            return Math.pow (a, b);
        }
    };
    __all__.ipow = __ipow__;
    var __ijsmod__ = function (a, b) {
        if (typeof a == 'object' && '__imod__' in a) {
            return a.__ismod__ (b);
        }
        else if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return a % b;
        }
    };
    __all__.ijsmod__ = __ijsmod__;
    var __imod__ = function (a, b) {
        if (typeof a == 'object' && '__imod__' in a) {
            return a.__imod__ (b);
        }
        else if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rmod__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return ((a % b) + b) % b;
        }
    };
    __all__.imod = __imod__;
    var __imul__ = function (a, b) {
        if (typeof a == 'object' && '__imul__' in a) {
            return a.__imul__ (b);
        }
        else if (typeof a == 'object' && '__mul__' in a) {
            return a = a.__mul__ (b);
        }
        else if (typeof b == 'object' && '__rmul__' in b) {
            return a = b.__rmul__ (a);
        }
        else if (typeof a == 'string') {
            return a = a.__mul__ (b);
        }
        else if (typeof b == 'string') {
            return a = b.__rmul__ (a);
        }
        else {
            return a *= b;
        }
    };
    __all__.__imul__ = __imul__;
    var __idiv__ = function (a, b) {
        if (typeof a == 'object' && '__idiv__' in a) {
            return a.__idiv__ (b);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a = a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return a = b.__rdiv__ (a);
        }
        else {
            return a /= b;
        }
    };
    __all__.__idiv__ = __idiv__;
    var __iadd__ = function (a, b) {
        if (typeof a == 'object' && '__iadd__' in a) {
            return a.__iadd__ (b);
        }
        else if (typeof a == 'object' && '__add__' in a) {
            return a = a.__add__ (b);
        }
        else if (typeof b == 'object' && '__radd__' in b) {
            return a = b.__radd__ (a);
        }
        else {
            return a += b;
        }
    };
    __all__.__iadd__ = __iadd__;
    var __isub__ = function (a, b) {
        if (typeof a == 'object' && '__isub__' in a) {
            return a.__isub__ (b);
        }
        else if (typeof a == 'object' && '__sub__' in a) {
            return a = a.__sub__ (b);
        }
        else if (typeof b == 'object' && '__rsub__' in b) {
            return a = b.__rsub__ (a);
        }
        else {
            return a -= b;
        }
    };
    __all__.__isub__ = __isub__;
    var __ilshift__ = function (a, b) {
        if (typeof a == 'object' && '__ilshift__' in a) {
            return a.__ilshift__ (b);
        }
        else if (typeof a == 'object' && '__lshift__' in a) {
            return a = a.__lshift__ (b);
        }
        else if (typeof b == 'object' && '__rlshift__' in b) {
            return a = b.__rlshift__ (a);
        }
        else {
            return a <<= b;
        }
    };
    __all__.__ilshift__ = __ilshift__;
    var __irshift__ = function (a, b) {
        if (typeof a == 'object' && '__irshift__' in a) {
            return a.__irshift__ (b);
        }
        else if (typeof a == 'object' && '__rshift__' in a) {
            return a = a.__rshift__ (b);
        }
        else if (typeof b == 'object' && '__rrshift__' in b) {
            return a = b.__rrshift__ (a);
        }
        else {
            return a >>= b;
        }
    };
    __all__.__irshift__ = __irshift__;
    var __ior__ = function (a, b) {
        if (typeof a == 'object' && '__ior__' in a) {
            return a.__ior__ (b);
        }
        else if (typeof a == 'object' && '__or__' in a) {
            return a = a.__or__ (b);
        }
        else if (typeof b == 'object' && '__ror__' in b) {
            return a = b.__ror__ (a);
        }
        else {
            return a |= b;
        }
    };
    __all__.__ior__ = __ior__;
    var __ixor__ = function (a, b) {
        if (typeof a == 'object' && '__ixor__' in a) {
            return a.__ixor__ (b);
        }
        else if (typeof a == 'object' && '__xor__' in a) {
            return a = a.__xor__ (b);
        }
        else if (typeof b == 'object' && '__rxor__' in b) {
            return a = b.__rxor__ (a);
        }
        else {
            return a ^= b;
        }
    };
    __all__.__ixor__ = __ixor__;
    var __iand__ = function (a, b) {
        if (typeof a == 'object' && '__iand__' in a) {
            return a.__iand__ (b);
        }
        else if (typeof a == 'object' && '__and__' in a) {
            return a = a.__and__ (b);
        }
        else if (typeof b == 'object' && '__rand__' in b) {
            return a = b.__rand__ (a);
        }
        else {
            return a &= b;
        }
    };
    __all__.__iand__ = __iand__;
    var __getitem__ = function (container, key) {
        if (typeof container == 'object' && '__getitem__' in container) {
            return container.__getitem__ (key);
        }
        else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
            return container [container.length + key];
        }
        else {
            return container [key];
        }
    };
    __all__.__getitem__ = __getitem__;
    var __setitem__ = function (container, key, value) {
        if (typeof container == 'object' && '__setitem__' in container) {
            container.__setitem__ (key, value);
        }
        else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
            container [container.length + key] = value;
        }
        else {
            container [key] = value;
        }
    };
    __all__.__setitem__ = __setitem__;
    var __getslice__ = function (container, lower, upper, step) {
        if (typeof container == 'object' && '__getitem__' in container) {
            return container.__getitem__ ([lower, upper, step]);
        }
        else {
            return container.__getslice__ (lower, upper, step);
        }
    };
    __all__.__getslice__ = __getslice__;
    var __setslice__ = function (container, lower, upper, step, value) {
        if (typeof container == 'object' && '__setitem__' in container) {
            container.__setitem__ ([lower, upper, step], value);
        }
        else {
            container.__setslice__ (lower, upper, step, value);
        }
    };
    __all__.__setslice__ = __setslice__;
	__nest__ (
		__all__,
		'math', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'math';
					var pi = Math.PI;
					var e = Math.E;
					var exp = Math.exp;
					var expm1 = function (x) {
						return Math.exp (x) - 1;
					};
					var log = function (x, base) {
						return (base === undefined ? Math.log (x) : Math.log (x) / Math.log (base));
					};
					var log1p = function (x) {
						return Math.log (x + 1);
					};
					var log2 = function (x) {
						return Math.log (x) / Math.LN2;
					};
					var log10 = function (x) {
						return Math.log (x) / Math.LN10;
					};
					var pow = Math.pow;
					var sqrt = Math.sqrt;
					var sin = Math.sin;
					var cos = Math.cos;
					var tan = Math.tan;
					var asin = Math.asin;
					var acos = Math.acos;
					var atan = Math.atan;
					var atan2 = Math.atan2;
					var hypot = Math.hypot;
					var degrees = function (x) {
						return (x * 180) / Math.PI;
					};
					var radians = function (x) {
						return (x * Math.PI) / 180;
					};
					var sinh = Math.sinh;
					var cosh = Math.cosh;
					var tanh = Math.tanh;
					var asinh = Math.asinh;
					var acosh = Math.acosh;
					var atanh = Math.atanh;
					var floor = Math.floor;
					var ceil = Math.ceil;
					var trunc = Math.trunc;
					var isnan = isNaN;
					var inf = Infinity;
					var nan = NaN;
					__pragma__ ('<all>')
						__all__.__name__ = __name__;
						__all__.acos = acos;
						__all__.acosh = acosh;
						__all__.asin = asin;
						__all__.asinh = asinh;
						__all__.atan = atan;
						__all__.atan2 = atan2;
						__all__.atanh = atanh;
						__all__.ceil = ceil;
						__all__.cos = cos;
						__all__.cosh = cosh;
						__all__.degrees = degrees;
						__all__.e = e;
						__all__.exp = exp;
						__all__.expm1 = expm1;
						__all__.floor = floor;
						__all__.hypot = hypot;
						__all__.inf = inf;
						__all__.isnan = isnan;
						__all__.log = log;
						__all__.log10 = log10;
						__all__.log1p = log1p;
						__all__.log2 = log2;
						__all__.nan = nan;
						__all__.pi = pi;
						__all__.pow = pow;
						__all__.radians = radians;
						__all__.sin = sin;
						__all__.sinh = sinh;
						__all__.sqrt = sqrt;
						__all__.tan = tan;
						__all__.tanh = tanh;
						__all__.trunc = trunc;
					__pragma__ ('</all>')
				}
			}
		}
	);

	__nest__ (
		__all__,
		'stardata', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'stardata';
					var CONSTELLATIONS = list ([dict ({'name': '仙后座', 'lines': list ([list ([dict ({'name': '11Bet Cas', 'Vmag': 2.27, 'alias': 'BD+58    3;SAO21133', 'RA': 0.1529722222222222, 'DE': 59.14972222222222, 'mark': ''}), dict ({'name': '18Alp Cas', 'Vmag': 2.23, 'alias': 'BD+55  139;SAO21609', 'RA': 0.6751388888888888, 'DE': 56.53722222222222, 'mark': ''}), dict ({'name': '27Gam Cas', 'Vmag': 2.47, 'alias': 'BD+59  144;SAO11482', 'RA': 0.9451388888888889, 'DE': 60.71666666666667, 'mark': ''}), dict ({'name': '37Del Cas', 'Vmag': 2.68, 'alias': 'BD+59  248;SAO22268', 'RA': 1.4302777777777778, 'DE': 60.23527777777778, 'mark': ''}), dict ({'name': '45Eps Cas', 'Vmag': 3.38, 'alias': 'BD+62  320;SAO12031', 'RA': 1.9065833333333333, 'DE': 63.669999999999995, 'mark': ''})])])}), dict ({'name': '猎户座', 'lines': list ([list ([dict ({'name': '19Bet Ori', 'Vmag': 0.12, 'alias': 'BD-08 1063;SAO131907', 'RA': 5.242305555555555, 'DE': -(7.798333333333333), 'mark': tuple (['参宿七', 'Rigel'])}), dict ({'name': '20Tau Ori', 'Vmag': 3.6, 'alias': 'BD-07 1028;SAO131952', 'RA': 5.293444444444444, 'DE': -(5.155555555555556), 'mark': ''}), dict ({'name': '28Eta Ori', 'Vmag': 3.36, 'alias': 'BD-02 1235;SAO132071', 'RA': 5.407944444444444, 'DE': -(1.6030555555555557), 'mark': ''}), dict ({'name': '34Del Ori', 'Vmag': 6.85, 'alias': 'BD-00  982;SAO132221', 'RA': 5.533472222222222, 'DE': 0.28444444444444444, 'mark': ''}), dict ({'name': '24Gam Ori', 'Vmag': 1.64, 'alias': 'BD+06  919;SAO112740', 'RA': 5.418861111111111, 'DE': 6.349722222222222, 'mark': tuple (['参宿五', 'Bellatrix'])}), dict ({'name': '39Lam Ori', 'Vmag': 3.54, 'alias': 'BD+09  879;SAO112921', 'RA': 5.585638888888888, 'DE': 9.934166666666666, 'mark': ''}), dict ({'name': '58Alp Ori', 'Vmag': 0.5, 'alias': 'BD+07 1055;SAO113271', 'RA': 5.919527777777778, 'DE': 7.406944444444445, 'mark': tuple (['参宿四', 'Betelgeuse'])}), dict ({'name': '50Zet Ori', 'Vmag': 2.05, 'alias': 'BD-02 1338;SAO132444', 'RA': 5.679305555555556, 'DE': -(0.05722222222222221), 'mark': ''}), dict ({'name': '53Kap Ori', 'Vmag': 2.06, 'alias': 'BD-09 1235;SAO132542', 'RA': 5.795944444444444, 'DE': -(8.330277777777779), 'mark': ''})]), list ([dict ({'name': '24Gam Ori', 'Vmag': 1.64, 'alias': 'BD+06  919;SAO112740', 'RA': 5.418861111111111, 'DE': 6.349722222222222, 'mark': tuple (['参宿五', 'Bellatrix'])}), dict ({'name': '58Alp Ori', 'Vmag': 0.5, 'alias': 'BD+07 1055;SAO113271', 'RA': 5.919527777777778, 'DE': 7.406944444444445, 'mark': tuple (['参宿四', 'Betelgeuse'])})]), list ([dict ({'name': '34Del Ori', 'Vmag': 6.85, 'alias': 'BD-00  982;SAO132221', 'RA': 5.533472222222222, 'DE': 0.28444444444444444, 'mark': ''}), dict ({'name': '46Eps Ori', 'Vmag': 1.7, 'alias': 'BD-01  969;SAO132346', 'RA': 5.603555555555555, 'DE': -(0.7980555555555556), 'mark': tuple (['参宿二', 'Alnilam'])}), dict ({'name': '50Zet Ori', 'Vmag': 2.05, 'alias': 'BD-02 1338;SAO132444', 'RA': 5.679305555555556, 'DE': -(0.05722222222222221), 'mark': ''})]), list ([dict ({'name': '58Alp Ori', 'Vmag': 0.5, 'alias': 'BD+07 1055;SAO113271', 'RA': 5.919527777777778, 'DE': 7.406944444444445, 'mark': tuple (['参宿四', 'Betelgeuse'])}), dict ({'name': '61Mu  Ori', 'Vmag': 4.12, 'alias': 'BD+09 1064;SAO113389', 'RA': 6.039722222222222, 'DE': 9.647499999999999, 'mark': ''}), dict ({'name': '67Nu  Ori', 'Vmag': 4.42, 'alias': 'BD+14 1152;SAO95259', 'RA': 6.126194444444444, 'DE': 14.768333333333334, 'mark': ''})])])}), dict ({'name': '大熊座', 'lines': list ([list ([dict ({'name': '85Eta UMa', 'Vmag': 1.86, 'alias': 'BD+50 2027;SAO44752', 'RA': 13.792333333333334, 'DE': 49.31333333333333, 'mark': tuple (['瑶光', 'Alkaid'])}), dict ({'name': '79Zet UMa', 'Vmag': 2.27, 'alias': 'BD+55 1598;SAO28737', 'RA': 13.39875, 'DE': 54.92527777777777, 'mark': ''}), dict ({'name': '77Eps UMa', 'Vmag': 1.77, 'alias': 'BD+56 1627;SAO28553', 'RA': 12.900472222222223, 'DE': 55.959722222222226, 'mark': tuple (['玉衡', 'Alioth'])}), dict ({'name': '69Del UMa', 'Vmag': 3.31, 'alias': 'BD+57 1363;SAO28315', 'RA': 12.257111111111112, 'DE': 57.0325, 'mark': ''}), dict ({'name': '64Gam UMa', 'Vmag': 2.44, 'alias': 'BD+54 1475;SAO28179', 'RA': 11.897166666666665, 'DE': 53.69472222222222, 'mark': ''}), dict ({'name': '48Bet UMa', 'Vmag': 2.37, 'alias': 'BD+57 1302;SAO27876', 'RA': 11.030694444444446, 'DE': 56.3825, 'mark': ''}), dict ({'name': '50Alp UMa', 'Vmag': 1.79, 'alias': 'BD+62 1161;SAO15384', 'RA': 11.062138888888889, 'DE': 61.75083333333333, 'mark': tuple (['天枢', 'Dubhe'])})]), list ([dict ({'name': '50Alp UMa', 'Vmag': 1.79, 'alias': 'BD+62 1161;SAO15384', 'RA': 11.062138888888889, 'DE': 61.75083333333333, 'mark': tuple (['天枢', 'Dubhe'])}), dict ({'name': '69Del UMa', 'Vmag': 3.31, 'alias': 'BD+57 1363;SAO28315', 'RA': 12.257111111111112, 'DE': 57.0325, 'mark': ''}), dict ({'name': '23    UMa', 'Vmag': 3.67, 'alias': 'BD+63  845;SAO14908', 'RA': 9.525472222222223, 'DE': 63.06194444444444, 'mark': ''}), dict ({'name': '1Omi UMa', 'Vmag': 3.36, 'alias': 'BD+61 1054;SAO14573', 'RA': 8.504416666666666, 'DE': 60.71805555555556, 'mark': ''}), dict ({'name': '29Ups UMa', 'Vmag': 3.8, 'alias': 'BD+59 1268;SAO27401', 'RA': 9.849833333333335, 'DE': 59.03861111111111, 'mark': ''}), dict ({'name': '30Phi UMa', 'Vmag': 4.59, 'alias': 'BD+54 1331;SAO27408', 'RA': 9.868444444444444, 'DE': 54.06444444444444, 'mark': ''}), dict ({'name': '48Bet UMa', 'Vmag': 2.37, 'alias': 'BD+57 1302;SAO27876', 'RA': 11.030694444444446, 'DE': 56.3825, 'mark': ''})]), list ([dict ({'name': '30Phi UMa', 'Vmag': 4.59, 'alias': 'BD+54 1331;SAO27408', 'RA': 9.868444444444444, 'DE': 54.06444444444444, 'mark': ''}), dict ({'name': '25The UMa', 'Vmag': 3.17, 'alias': 'BD+52 1401;SAO27289', 'RA': 9.547611111111111, 'DE': 51.67722222222222, 'mark': ''}), dict ({'name': '9Iot UMa', 'Vmag': 3.14, 'alias': 'BD+48 1707;SAO42630', 'RA': 8.986777777777776, 'DE': 48.041666666666664, 'mark': ''})]), list ([dict ({'name': '25The UMa', 'Vmag': 3.17, 'alias': 'BD+52 1401;SAO27289', 'RA': 9.547611111111111, 'DE': 51.67722222222222, 'mark': ''}), dict ({'name': '12Kap UMa', 'Vmag': 3.6, 'alias': 'BD+47 1633;SAO42661', 'RA': 9.060416666666667, 'DE': 47.156666666666666, 'mark': ''})]), list ([dict ({'name': '64Gam UMa', 'Vmag': 2.44, 'alias': 'BD+54 1475;SAO28179', 'RA': 11.897166666666665, 'DE': 53.69472222222222, 'mark': ''}), dict ({'name': '63Chi UMa', 'Vmag': 3.71, 'alias': 'BD+48 1966;SAO43886', 'RA': 11.7675, 'DE': 47.779444444444444, 'mark': ''}), dict ({'name': '52Psi UMa', 'Vmag': 3.01, 'alias': 'BD+45 1897;SAO43629', 'RA': 11.161055555555556, 'DE': 44.49861111111111, 'mark': ''}), dict ({'name': '34Mu  UMa', 'Vmag': 3.05, 'alias': 'BD+42 2115;SAO43310', 'RA': 10.37213888888889, 'DE': 41.49944444444444, 'mark': ''})]), list ([dict ({'name': '52Psi UMa', 'Vmag': 3.01, 'alias': 'BD+45 1897;SAO43629', 'RA': 11.161055555555556, 'DE': 44.49861111111111, 'mark': ''}), dict ({'name': '33Lam UMa', 'Vmag': 3.45, 'alias': 'BD+43 2005;SAO43268', 'RA': 10.284944444444445, 'DE': 42.91444444444444, 'mark': ''})])])}), dict ({'name': '小熊座', 'lines': list ([list ([dict ({'name': '1Alp UMi', 'Vmag': 2.02, 'alias': 'BD+88    8;SAO308', 'RA': 2.530194444444444, 'DE': 89.26416666666667, 'mark': ''}), dict ({'name': '23Del UMi', 'Vmag': 4.36, 'alias': 'BD+86  269;SAO2937', 'RA': 17.53691666666667, 'DE': 86.58638888888889, 'mark': ''}), dict ({'name': '22Eps UMi', 'Vmag': 4.23, 'alias': 'BD+82  498;SAO2770', 'RA': 16.76613888888889, 'DE': 82.03722222222223, 'mark': ''}), dict ({'name': '16Zet UMi', 'Vmag': 4.32, 'alias': 'BD+78  527;SAO8328', 'RA': 15.734305555555554, 'DE': 77.79444444444444, 'mark': ''}), dict ({'name': '7Bet UMi', 'Vmag': 2.08, 'alias': 'BD+74  595;SAO8102', 'RA': 14.845083333333333, 'DE': 74.15555555555557, 'mark': ''}), dict ({'name': '13Gam UMi', 'Vmag': 3.05, 'alias': 'BD+72  679;SAO8220', 'RA': 15.345472222222222, 'DE': 71.83388888888888, 'mark': ''}), dict ({'name': '21Eta UMi', 'Vmag': 4.95, 'alias': 'BD+76  596;SAO8470', 'RA': 16.29175, 'DE': 75.75527777777778, 'mark': ''}), dict ({'name': '16Zet UMi', 'Vmag': 4.32, 'alias': 'BD+78  527;SAO8328', 'RA': 15.734305555555554, 'DE': 77.79444444444444, 'mark': ''})])])}), dict ({'name': '三角座', 'lines': list ([list ([dict ({'name': '2Alp Tri', 'Vmag': 3.41, 'alias': 'BD+28  312;SAO74996', 'RA': 1.8846944444444444, 'DE': 29.578888888888887, 'mark': ''}), dict ({'name': '4Bet Tri', 'Vmag': 3.0, 'alias': 'BD+34  381;SAO55306', 'RA': 2.1590555555555553, 'DE': 34.98722222222222, 'mark': ''}), dict ({'name': '9Gam Tri', 'Vmag': 4.01, 'alias': 'BD+33  397;SAO55427', 'RA': 2.2885833333333334, 'DE': 33.84722222222222, 'mark': ''}), dict ({'name': '2Alp Tri', 'Vmag': 3.41, 'alias': 'BD+28  312;SAO74996', 'RA': 1.8846944444444444, 'DE': 29.578888888888887, 'mark': ''})])])}), dict ({'name': '英仙座', 'lines': list ([list ([dict ({'name': '15Eta Per', 'Vmag': 3.76, 'alias': 'BD+55  714;SAO23655', 'RA': 2.8449444444444447, 'DE': 55.89555555555555, 'mark': ''}), dict ({'name': '23Gam Per', 'Vmag': 2.93, 'alias': 'BD+52  654;SAO23789', 'RA': 3.0799444444444446, 'DE': 53.506388888888885, 'mark': ''}), dict ({'name': '33Alp Per', 'Vmag': 1.79, 'alias': 'BD+49  917;SAO38787', 'RA': 3.405388888888889, 'DE': 49.861111111111114, 'mark': tuple (['天船三', 'Mirfak'])}), dict ({'name': '39Del Per', 'Vmag': 3.01, 'alias': 'BD+47  876;SAO39053', 'RA': 3.715416666666667, 'DE': 47.7875, 'mark': ''}), dict ({'name': '45Eps Per', 'Vmag': 2.89, 'alias': 'BD+39  895;SAO56840', 'RA': 3.9642222222222223, 'DE': 40.01027777777778, 'mark': ''}), dict ({'name': '46Xi  Per', 'Vmag': 4.04, 'alias': 'BD+35  775;SAO56856', 'RA': 3.9827500000000002, 'DE': 35.79111111111111, 'mark': ''}), dict ({'name': '44Zet Per', 'Vmag': 2.85, 'alias': 'BD+31  666;SAO56799', 'RA': 3.9021944444444445, 'DE': 31.88361111111111, 'mark': ''}), dict ({'name': '38Omi Per', 'Vmag': 3.83, 'alias': 'BD+31  642;SAO56673', 'RA': 3.738638888888889, 'DE': 32.288333333333334, 'mark': ''})]), list ([dict ({'name': '33Alp Per', 'Vmag': 1.79, 'alias': 'BD+49  917;SAO38787', 'RA': 3.405388888888889, 'DE': 49.861111111111114, 'mark': tuple (['天船三', 'Mirfak'])}), dict ({'name': '26Bet Per', 'Vmag': 2.12, 'alias': 'BD+40  673;SAO38592', 'RA': 3.136138888888889, 'DE': 40.955555555555556, 'mark': ''}), dict ({'name': '25Rho Per', 'Vmag': 3.39, 'alias': 'BD+38  630;SAO56138', 'RA': 3.086277777777778, 'DE': 38.84027777777778, 'mark': ''}), dict ({'name': '16    Per', 'Vmag': 4.23, 'alias': 'BD+37  646;SAO55928', 'RA': 2.8430833333333334, 'DE': 38.31861111111112, 'mark': ''})])])}), dict ({'name': '白羊座', 'lines': list ([list ([dict ({'name': '41    Ari', 'Vmag': 3.63, 'alias': 'BD+26  471;SAO75596', 'RA': 2.833055555555555, 'DE': 27.260555555555555, 'mark': ''}), dict ({'name': '13Alp Ari', 'Vmag': 2.0, 'alias': 'BD+22  306;SAO75151', 'RA': 2.1195555555555554, 'DE': 23.4625, 'mark': tuple (['娄宿三', 'Hamal'])}), dict ({'name': '6Bet Ari', 'Vmag': 2.64, 'alias': 'BD+20  306;SAO75012', 'RA': 1.9106666666666665, 'DE': 20.808055555555555, 'mark': ''}), dict ({'name': '5Gam1Ari', 'Vmag': 4.83, 'alias': 'BD+18  243;SAO92680', 'RA': 1.8921666666666666, 'DE': 19.295833333333334, 'mark': ''})])])}), dict ({'name': '双鱼座', 'lines': list ([list ([dict ({'name': '85Phi Psc', 'Vmag': 4.65, 'alias': 'BD+23  158;SAO74571', 'RA': 1.229138888888889, 'DE': 24.58361111111111, 'mark': ''}), dict ({'name': '90Ups Psc', 'Vmag': 4.76, 'alias': 'BD+26  220;SAO74637', 'RA': 1.3244444444444445, 'DE': 27.264166666666668, 'mark': ''}), dict ({'name': '69Sig Psc', 'Vmag': 5.5, 'alias': 'BD+31  168;SAO54374', 'RA': 1.0469722222222224, 'DE': 31.804444444444446, 'mark': ''}), dict ({'name': '85Phi Psc', 'Vmag': 4.65, 'alias': 'BD+23  158;SAO74571', 'RA': 1.229138888888889, 'DE': 24.58361111111111, 'mark': ''}), dict ({'name': '99Eta Psc', 'Vmag': 3.62, 'alias': 'BD+14  231;SAO92484', 'RA': 1.524722222222222, 'DE': 15.345833333333333, 'mark': ''}), dict ({'name': '110Omi Psc', 'Vmag': 4.26, 'alias': 'BD+08  273;SAO110110', 'RA': 1.7565555555555556, 'DE': 9.157777777777778, 'mark': ''}), dict ({'name': '113Alp Psc', 'Vmag': 5.23, 'alias': 'BD+02  317;SAO', 'RA': 2.034111111111111, 'DE': 2.763611111111111, 'mark': ''}), dict ({'name': '111Xi  Psc', 'Vmag': 4.62, 'alias': 'BD+02  290;SAO110206', 'RA': 1.8925833333333333, 'DE': 3.1875, 'mark': ''}), dict ({'name': '106Nu  Psc', 'Vmag': 4.44, 'alias': 'BD+04  293;SAO110065', 'RA': 1.6905277777777779, 'DE': 5.4875, 'mark': ''}), dict ({'name': '71Eps Psc', 'Vmag': 4.28, 'alias': 'BD+07  153;SAO109627', 'RA': 1.0490555555555556, 'DE': 7.89, 'mark': ''}), dict ({'name': '62    Psc', 'Vmag': 5.93, 'alias': 'BD+06  105;SAO109470', 'RA': 0.8048333333333334, 'DE': 7.3, 'mark': ''}), dict ({'name': '41    Psc', 'Vmag': 5.37, 'alias': 'BD+07   36;SAO109152', 'RA': 0.34330555555555553, 'DE': 8.190277777777778, 'mark': ''}), dict ({'name': '28Ome Psc', 'Vmag': 4.01, 'alias': 'BD+06 5227;SAO128513', 'RA': 23.98852777777778, 'DE': 6.863333333333333, 'mark': ''}), dict ({'name': '17Iot Psc', 'Vmag': 4.13, 'alias': 'BD+04 5035;SAO128310', 'RA': 23.66583333333333, 'DE': 5.626388888888889, 'mark': ''}), dict ({'name': '18Lam Psc', 'Vmag': 4.5, 'alias': 'BD+00 5037;SAO128336', 'RA': 23.700777777777777, 'DE': 1.78, 'mark': ''}), dict ({'name': '8Kap Psc', 'Vmag': 4.94, 'alias': 'BD+00 4998;SAO128186', 'RA': 23.448888888888888, 'DE': 1.2555555555555555, 'mark': ''}), dict ({'name': '6Gam Psc', 'Vmag': 3.69, 'alias': 'BD+02 4648;SAO128085', 'RA': 23.286083333333334, 'DE': 3.2822222222222224, 'mark': ''}), dict ({'name': '10The Psc', 'Vmag': 4.28, 'alias': 'BD+05 5173;SAO128196', 'RA': 23.46613888888889, 'DE': 6.378888888888889, 'mark': ''}), dict ({'name': '17Iot Psc', 'Vmag': 4.13, 'alias': 'BD+04 5035;SAO128310', 'RA': 23.66583333333333, 'DE': 5.626388888888889, 'mark': ''})])])}), dict ({'name': '天琴座', 'lines': list ([list ([dict ({'name': '3Alp Lyr', 'Vmag': 0.03, 'alias': 'BD+38 3238;SAO67174', 'RA': 18.615638888888892, 'DE': 38.78361111111111, 'mark': tuple (['织女一', 'Vega'])}), dict ({'name': '6Zet1Lyr', 'Vmag': 4.36, 'alias': 'BD+37 3222;SAO67321', 'RA': 18.746222222222222, 'DE': 37.605000000000004, 'mark': ''}), dict ({'name': '12Del2Lyr', 'Vmag': 4.3, 'alias': 'BD+36 3319;SAO67559', 'RA': 18.908388888888886, 'DE': 36.89888888888889, 'mark': ''}), dict ({'name': '14Gam Lyr', 'Vmag': 3.24, 'alias': 'BD+32 3286;SAO67663', 'RA': 18.982388888888888, 'DE': 32.68944444444444, 'mark': ''}), dict ({'name': '10Bet Lyr', 'Vmag': 3.45, 'alias': 'BD+33 3223;SAO67451', 'RA': 18.834666666666667, 'DE': 33.36277777777778, 'mark': ''}), dict ({'name': '6Zet1Lyr', 'Vmag': 4.36, 'alias': 'BD+37 3222;SAO67321', 'RA': 18.746222222222222, 'DE': 37.605000000000004, 'mark': ''})])])}), dict ({'name': '天鹅座', 'lines': list ([list ([dict ({'name': '78Mu 1Cyg', 'Vmag': 4.73, 'alias': 'BD+28 4169;SAO89940', 'RA': 21.735722222222222, 'DE': 28.74277777777778, 'mark': ''}), dict ({'name': '64Zet Cyg', 'Vmag': 3.2, 'alias': 'BD+29 4348;SAO71070', 'RA': 21.21561111111111, 'DE': 30.22694444444444, 'mark': ''}), dict ({'name': '53Eps Cyg', 'Vmag': 2.46, 'alias': 'BD+33 4018;SAO70474', 'RA': 20.770194444444442, 'DE': 33.97027777777778, 'mark': ''}), dict ({'name': '37Gam Cyg', 'Vmag': 2.2, 'alias': 'BD+39 4159;SAO49528', 'RA': 20.370472222222222, 'DE': 40.25666666666667, 'mark': ''}), dict ({'name': '18Del Cyg', 'Vmag': 2.87, 'alias': 'BD+44 3234;SAO48796', 'RA': 19.749583333333334, 'DE': 45.130833333333335, 'mark': ''}), dict ({'name': '10Iot2Cyg', 'Vmag': 3.79, 'alias': 'BD+51 2605;SAO31702', 'RA': 19.495083333333334, 'DE': 51.72972222222222, 'mark': ''}), dict ({'name': '1Kap Cyg', 'Vmag': 3.77, 'alias': 'BD+53 2216;SAO31537', 'RA': 19.28505555555556, 'DE': 53.368611111111115, 'mark': ''})]), list ([dict ({'name': '50Alp Cyg', 'Vmag': 1.25, 'alias': 'BD+44 3541;SAO49941', 'RA': 20.690527777777778, 'DE': 45.280277777777776, 'mark': tuple (['天津四', 'Deneb'])}), dict ({'name': '37Gam Cyg', 'Vmag': 2.2, 'alias': 'BD+39 4159;SAO49528', 'RA': 20.370472222222222, 'DE': 40.25666666666667, 'mark': ''}), dict ({'name': '21Eta Cyg', 'Vmag': 3.89, 'alias': 'BD+34 3798;SAO69116', 'RA': 19.938444444444446, 'DE': 35.083333333333336, 'mark': ''}), dict ({'name': '6Bet1Cyg', 'Vmag': 3.08, 'alias': 'BD+27 3410;SAO87301', 'RA': 19.512027777777778, 'DE': 27.959722222222222, 'mark': ''})])])}), dict ({'name': '仙女座', 'lines': list ([list ([dict ({'name': '57Gam1And', 'Vmag': 2.26, 'alias': 'BD+41  395;SAO37734', 'RA': 2.065, 'DE': 42.32972222222222, 'mark': ''}), dict ({'name': '43Bet And', 'Vmag': 2.06, 'alias': 'BD+34  198;SAO54471', 'RA': 1.1621944444444443, 'DE': 35.620555555555555, 'mark': ''}), dict ({'name': '31Del And', 'Vmag': 3.27, 'alias': 'BD+30   91;SAO54058', 'RA': 0.6554722222222222, 'DE': 30.860833333333336, 'mark': ''}), dict ({'name': '21Alp And', 'Vmag': 2.06, 'alias': 'BD+28    4;SAO73765', 'RA': 0.13980555555555554, 'DE': 29.090555555555554, 'mark': ''})]), list ([dict ({'name': '35Nu  And', 'Vmag': 4.53, 'alias': 'BD+40  171;SAO36699', 'RA': 0.8302222222222222, 'DE': 41.07888888888889, 'mark': ''}), dict ({'name': '37Mu  And', 'Vmag': 3.87, 'alias': 'BD+37  175;SAO54281', 'RA': 0.9458888888888889, 'DE': 38.49944444444444, 'mark': ''}), dict ({'name': '43Bet And', 'Vmag': 2.06, 'alias': 'BD+34  198;SAO54471', 'RA': 1.1621944444444443, 'DE': 35.620555555555555, 'mark': ''})])])}), dict ({'name': '飞马座', 'lines': list ([list ([dict ({'name': '27Pi 1Peg', 'Vmag': 5.58, 'alias': 'BD+32 4349;SAO72064', 'RA': 22.153777777777776, 'DE': 33.17222222222222, 'mark': ''}), dict ({'name': '44Eta Peg', 'Vmag': 2.94, 'alias': 'BD+29 4741;SAO90734', 'RA': 22.716694444444443, 'DE': 30.22138888888889, 'mark': ''}), dict ({'name': '53Bet Peg', 'Vmag': 2.42, 'alias': 'BD+27 4480;SAO90981', 'RA': 23.062916666666666, 'DE': 28.08277777777778, 'mark': ''}), dict ({'name': '21Alp And', 'Vmag': 2.06, 'alias': 'BD+28    4;SAO73765', 'RA': 0.13980555555555554, 'DE': 29.090555555555554, 'mark': ''}), dict ({'name': '88Gam Peg', 'Vmag': 2.83, 'alias': 'BD+14   14;SAO91781', 'RA': 0.22061111111111112, 'DE': 15.18361111111111, 'mark': ''}), dict ({'name': '54Alp Peg', 'Vmag': 2.49, 'alias': 'BD+14 4926;SAO108378', 'RA': 23.079361111111112, 'DE': 15.205277777777777, 'mark': ''}), dict ({'name': '46Xi  Peg', 'Vmag': 4.19, 'alias': 'BD+11 4875;SAO108165', 'RA': 22.778222222222222, 'DE': 12.172777777777776, 'mark': ''}), dict ({'name': '42Zet Peg', 'Vmag': 3.4, 'alias': 'BD+10 4797;SAO108103', 'RA': 22.691027777777776, 'DE': 10.831388888888888, 'mark': ''}), dict ({'name': '26The Peg', 'Vmag': 3.53, 'alias': 'BD+05 4961;SAO127340', 'RA': 22.17, 'DE': 6.197777777777778, 'mark': ''}), dict ({'name': '8Eps Peg', 'Vmag': 2.39, 'alias': 'BD+09 4891;SAO127029', 'RA': 21.736444444444444, 'DE': 9.875, 'mark': ''})]), list ([dict ({'name': '54Alp Peg', 'Vmag': 2.49, 'alias': 'BD+14 4926;SAO108378', 'RA': 23.079361111111112, 'DE': 15.205277777777777, 'mark': ''}), dict ({'name': '53Bet Peg', 'Vmag': 2.42, 'alias': 'BD+27 4480;SAO90981', 'RA': 23.062916666666666, 'DE': 28.08277777777778, 'mark': ''}), dict ({'name': '48Mu  Peg', 'Vmag': 3.48, 'alias': 'BD+23 4615;SAO90816', 'RA': 22.833388888888887, 'DE': 24.601666666666667, 'mark': ''}), dict ({'name': '47Lam Peg', 'Vmag': 3.95, 'alias': 'BD+22 4709;SAO90775', 'RA': 22.77552777777778, 'DE': 23.565555555555555, 'mark': ''}), dict ({'name': '24Iot Peg', 'Vmag': 3.76, 'alias': 'BD+24 4533;SAO90238', 'RA': 22.116861111111113, 'DE': 25.345, 'mark': ''}), dict ({'name': '10Kap Peg', 'Vmag': 4.13, 'alias': 'BD+24 4463;SAO89949', 'RA': 21.744083333333336, 'DE': 25.645, 'mark': ''})])])}), dict ({'name': '狐狸座', 'lines': list ([list ([dict ({'name': '6Alp Vul', 'Vmag': 4.44, 'alias': 'BD+24 3759;SAO87261', 'RA': 19.478416666666664, 'DE': 24.665, 'mark': ''}), dict ({'name': '15    Vul', 'Vmag': 4.64, 'alias': 'BD+27 3587;SAO88071', 'RA': 20.018361111111112, 'DE': 27.753611111111113, 'mark': ''})])])}), dict ({'name': '天箭座', 'lines': list ([list ([dict ({'name': '16Eta Sge', 'Vmag': 5.1, 'alias': 'BD+19 4277;SAO105659', 'RA': 20.08597222222222, 'DE': 19.991111111111113, 'mark': ''}), dict ({'name': '12Gam Sge', 'Vmag': 3.47, 'alias': 'BD+19 4229;SAO105500', 'RA': 19.979277777777774, 'DE': 19.492222222222225, 'mark': ''}), dict ({'name': '7Del Sge', 'Vmag': 3.82, 'alias': 'BD+18 4240;SAO105259', 'RA': 19.789805555555557, 'DE': 18.534166666666668, 'mark': ''}), dict ({'name': '5Alp Sge', 'Vmag': 4.37, 'alias': 'BD+17 4042;SAO105120', 'RA': 19.668277777777778, 'DE': 18.01388888888889, 'mark': ''})]), list ([dict ({'name': '7Del Sge', 'Vmag': 3.82, 'alias': 'BD+18 4240;SAO105259', 'RA': 19.789805555555557, 'DE': 18.534166666666668, 'mark': ''}), dict ({'name': '6Bet Sge', 'Vmag': 4.37, 'alias': 'BD+17 4048;SAO105133', 'RA': 19.68413888888889, 'DE': 17.47611111111111, 'mark': ''})])])}), dict ({'name': '武仙座', 'lines': list ([list ([dict ({'name': '1Chi Her', 'Vmag': 4.62, 'alias': 'BD+42 2648;SAO45772', 'RA': 15.877916666666668, 'DE': 42.45166666666667, 'mark': ''}), dict ({'name': '22Tau Her', 'Vmag': 3.89, 'alias': 'BD+46 2169;SAO46028', 'RA': 16.329, 'DE': 46.31333333333333, 'mark': ''}), dict ({'name': '35Sig Her', 'Vmag': 4.2, 'alias': 'BD+42 2724;SAO46161', 'RA': 16.56838888888889, 'DE': 42.43694444444444, 'mark': ''}), dict ({'name': '44Eta Her', 'Vmag': 3.53, 'alias': 'BD+39 3029;SAO65504', 'RA': 16.714944444444445, 'DE': 38.92222222222222, 'mark': ''}), dict ({'name': '40Zet Her', 'Vmag': 2.81, 'alias': 'BD+31 2884;SAO65485', 'RA': 16.688111111111112, 'DE': 31.603055555555557, 'mark': ''}), dict ({'name': '27Bet Her', 'Vmag': 2.77, 'alias': 'BD+21 2934;SAO84411', 'RA': 16.503666666666668, 'DE': 21.489722222222223, 'mark': ''}), dict ({'name': '20Gam Her', 'Vmag': 3.75, 'alias': 'BD+19 3086;SAO102107', 'RA': 16.365333333333336, 'DE': 19.153055555555554, 'mark': ''})]), list ([dict ({'name': '85Iot Her', 'Vmag': 3.8, 'alias': 'BD+46 2349;SAO46872', 'RA': 17.65775, 'DE': 46.006388888888885, 'mark': ''}), dict ({'name': '91The Her', 'Vmag': 3.86, 'alias': 'BD+37 2982;SAO66485', 'RA': 17.937555555555555, 'DE': 37.25055555555556, 'mark': ''}), dict ({'name': '75Rho Her', 'Vmag': 5.47, 'alias': 'BD+37 2878;SAO66000', 'RA': 17.39463888888889, 'DE': 37.14666666666667, 'mark': ''}), dict ({'name': '69    Her', 'Vmag': 4.65, 'alias': 'BD+37 2864;SAO65921', 'RA': 17.29452777777778, 'DE': 37.291666666666664, 'mark': ''}), dict ({'name': '67Pi  Her', 'Vmag': 3.16, 'alias': 'BD+36 2844;SAO65890', 'RA': 17.250777777777778, 'DE': 36.80916666666666, 'mark': ''}), dict ({'name': '58Eps Her', 'Vmag': 3.92, 'alias': 'BD+31 2947;SAO65716', 'RA': 17.004833333333334, 'DE': 30.92638888888889, 'mark': ''}), dict ({'name': '76Lam Her', 'Vmag': 4.41, 'alias': 'BD+26 3034;SAO85163', 'RA': 17.512305555555557, 'DE': 26.110555555555557, 'mark': ''})]), list ([dict ({'name': '44Eta Her', 'Vmag': 3.53, 'alias': 'BD+39 3029;SAO65504', 'RA': 16.714944444444445, 'DE': 38.92222222222222, 'mark': ''}), dict ({'name': '67Pi  Her', 'Vmag': 3.16, 'alias': 'BD+36 2844;SAO65890', 'RA': 17.250777777777778, 'DE': 36.80916666666666, 'mark': ''})]), list ([dict ({'name': '40Zet Her', 'Vmag': 2.81, 'alias': 'BD+31 2884;SAO65485', 'RA': 16.688111111111112, 'DE': 31.603055555555557, 'mark': ''}), dict ({'name': '58Eps Her', 'Vmag': 3.92, 'alias': 'BD+31 2947;SAO65716', 'RA': 17.004833333333334, 'DE': 30.92638888888889, 'mark': ''})]), list ([dict ({'name': '103Omi Her', 'Vmag': 3.83, 'alias': 'BD+28 2925;SAO85750', 'RA': 18.125722222222223, 'DE': 28.7625, 'mark': ''}), dict ({'name': '92Xi  Her', 'Vmag': 3.7, 'alias': 'BD+29 3156;SAO85590', 'RA': 17.96275, 'DE': 29.247777777777777, 'mark': ''}), dict ({'name': '86Mu  Her', 'Vmag': 3.42, 'alias': 'BD+27 2888;SAO85397', 'RA': 17.774305555555554, 'DE': 27.720555555555553, 'mark': ''}), dict ({'name': '76Lam Her', 'Vmag': 4.41, 'alias': 'BD+26 3034;SAO85163', 'RA': 17.512305555555557, 'DE': 26.110555555555557, 'mark': ''}), dict ({'name': '65Del Her', 'Vmag': 3.14, 'alias': 'BD+25 3221;SAO84951', 'RA': 17.250527777777776, 'DE': 24.839166666666664, 'mark': ''})])])}), dict ({'name': '牧夫座', 'lines': list ([list ([dict ({'name': '30Zet Boo', 'Vmag': 4.83, 'alias': 'BD+14 2770;SAO101145', 'RA': 14.685805555555556, 'DE': 13.728333333333333, 'mark': ''}), dict ({'name': '16Alp Boo', 'Vmag': -(0.04), 'alias': 'BD+19 2777;SAO100944', 'RA': 14.261027777777779, 'DE': 19.1825, 'mark': tuple (['大角', 'Arcturus'])}), dict ({'name': '36Eps Boo', 'Vmag': 5.12, 'alias': 'BD+27 2417;SAO', 'RA': 14.749777777777776, 'DE': 27.075, 'mark': ''}), dict ({'name': '49Del Boo', 'Vmag': 3.47, 'alias': 'BD+33 2561;SAO64589', 'RA': 15.25838888888889, 'DE': 33.31472222222222, 'mark': ''}), dict ({'name': '42Bet Boo', 'Vmag': 3.5, 'alias': 'BD+40 2840;SAO45337', 'RA': 15.032444444444446, 'DE': 40.39055555555556, 'mark': ''}), dict ({'name': '27Gam Boo', 'Vmag': 3.03, 'alias': 'BD+38 2565;SAO64203', 'RA': 14.534638888888889, 'DE': 38.30833333333333, 'mark': ''}), dict ({'name': '25Rho Boo', 'Vmag': 3.58, 'alias': 'BD+31 2628;SAO64202', 'RA': 14.5305, 'DE': 30.37138888888889, 'mark': ''}), dict ({'name': '16Alp Boo', 'Vmag': -(0.04), 'alias': 'BD+19 2777;SAO100944', 'RA': 14.261027777777779, 'DE': 19.1825, 'mark': tuple (['大角', 'Arcturus'])}), dict ({'name': '8Eta Boo', 'Vmag': 2.68, 'alias': 'BD+19 2725;SAO100766', 'RA': 13.911416666666668, 'DE': 18.397777777777776, 'mark': ''}), dict ({'name': '5Ups Boo', 'Vmag': 4.07, 'alias': 'BD+16 2564;SAO100725', 'RA': 13.82461111111111, 'DE': 15.797777777777778, 'mark': ''})])])}), dict ({'name': '室女座', 'lines': list ([list ([dict ({'name': '107Mu  Vir', 'Vmag': 3.88, 'alias': 'BD-05 3936;SAO140090', 'RA': 14.717666666666666, 'DE': -(4.341666666666666), 'mark': ''}), dict ({'name': '99Iot Vir', 'Vmag': 4.08, 'alias': 'BD-05 3843;SAO139824', 'RA': 14.266916666666667, 'DE': -(5.999444444444444), 'mark': ''}), dict ({'name': '98Kap Vir', 'Vmag': 4.19, 'alias': 'BD-09 3878;SAO158427', 'RA': 14.214944444444443, 'DE': -(9.726388888888888), 'mark': ''}), dict ({'name': '67Alp Vir', 'Vmag': 0.98, 'alias': 'BD-10 3672;SAO157923', 'RA': 13.419888888888888, 'DE': -(10.838611111111112), 'mark': tuple (['角宿一', 'Spica'])}), dict ({'name': '79Zet Vir', 'Vmag': 3.37, 'alias': 'BD+00 3076;SAO139420', 'RA': 13.578222222222221, 'DE': 0.5958333333333333, 'mark': ''}), dict ({'name': '43Del Vir', 'Vmag': 3.38, 'alias': 'BD+04 2669;SAO119674', 'RA': 12.926722222222221, 'DE': 3.3975, 'mark': ''}), dict ({'name': '29Gam Vir', 'Vmag': 3.65, 'alias': 'BD-00 2601;SAO138917', 'RA': 12.694333333333333, 'DE': -(0.5505555555555556), 'mark': ''}), dict ({'name': '13    Vir', 'Vmag': 5.9, 'alias': 'BD+00 2920;SAO138710', 'RA': 12.311194444444444, 'DE': 0.7872222222222223, 'mark': ''}), dict ({'name': '3Nu  Vir', 'Vmag': 4.03, 'alias': 'BD+07 2479;SAO119035', 'RA': 11.764333333333333, 'DE': 6.529444444444445, 'mark': ''})]), list ([dict ({'name': '109    Vir', 'Vmag': 3.72, 'alias': 'BD+02 2862;SAO120648', 'RA': 14.770805555555556, 'DE': 1.8927777777777777, 'mark': ''}), dict ({'name': '93Tau Vir', 'Vmag': 4.26, 'alias': 'BD+02 2761;SAO120238', 'RA': 14.027444444444445, 'DE': 1.5444444444444443, 'mark': ''}), dict ({'name': '79Zet Vir', 'Vmag': 3.37, 'alias': 'BD+00 3076;SAO139420', 'RA': 13.578222222222221, 'DE': 0.5958333333333333, 'mark': ''})]), list ([dict ({'name': '47Eps Vir', 'Vmag': 2.83, 'alias': 'BD+11 2529;SAO100384', 'RA': 13.036277777777778, 'DE': 10.959166666666667, 'mark': ''}), dict ({'name': '43Del Vir', 'Vmag': 3.38, 'alias': 'BD+04 2669;SAO119674', 'RA': 12.926722222222221, 'DE': 3.3975, 'mark': ''})]), list ([dict ({'name': '67Alp Vir', 'Vmag': 0.98, 'alias': 'BD-10 3672;SAO157923', 'RA': 13.419888888888888, 'DE': -(10.838611111111112), 'mark': tuple (['角宿一', 'Spica'])}), dict ({'name': '29Gam Vir', 'Vmag': 3.65, 'alias': 'BD-00 2601;SAO138917', 'RA': 12.694333333333333, 'DE': -(0.5505555555555556), 'mark': ''})])])}), dict ({'name': '金牛座', 'lines': list ([list ([dict ({'name': '123Zet Tau', 'Vmag': 3.0, 'alias': 'BD+21  908;SAO77336', 'RA': 5.627416666666667, 'DE': 21.1425, 'mark': ''}), dict ({'name': '87Alp Tau', 'Vmag': 0.85, 'alias': 'BD+16  629;SAO94027', 'RA': 4.5986666666666665, 'DE': 16.509166666666665, 'mark': tuple (['毕宿五', 'Aldebaran'])}), dict ({'name': '78The2Tau', 'Vmag': 3.4, 'alias': 'BD+15  632;SAO93957', 'RA': 4.477694444444444, 'DE': 15.870833333333334, 'mark': ''}), dict ({'name': '54Gam Tau', 'Vmag': 3.65, 'alias': 'BD+15  612;SAO93868', 'RA': 4.329888888888888, 'DE': 15.627500000000001, 'mark': ''}), dict ({'name': '61Del1Tau', 'Vmag': 3.76, 'alias': 'BD+17  712;SAO93897', 'RA': 4.38225, 'DE': 17.5425, 'mark': ''}), dict ({'name': '74Eps Tau', 'Vmag': 3.53, 'alias': 'BD+18  640;SAO93954', 'RA': 4.476944444444444, 'DE': 19.18027777777778, 'mark': ''}), dict ({'name': '94Tau Tau', 'Vmag': 4.28, 'alias': 'BD+22  739;SAO76721', 'RA': 4.704083333333333, 'DE': 22.956944444444442, 'mark': ''}), dict ({'name': '112Bet Tau', 'Vmag': 1.65, 'alias': 'BD+28  795;SAO77168', 'RA': 5.438194444444445, 'DE': 28.6075, 'mark': tuple (['五车五', 'Elnath'])})]), list ([dict ({'name': '61Del1Tau', 'Vmag': 3.76, 'alias': 'BD+17  712;SAO93897', 'RA': 4.38225, 'DE': 17.5425, 'mark': ''}), dict ({'name': '27    Tau', 'Vmag': 3.63, 'alias': 'BD+23  557;SAO76228', 'RA': 3.8193611111111108, 'DE': 24.053333333333335, 'mark': ''})]), list ([dict ({'name': '54Gam Tau', 'Vmag': 3.65, 'alias': 'BD+15  612;SAO93868', 'RA': 4.329888888888888, 'DE': 15.627500000000001, 'mark': ''}), dict ({'name': '35Lam Tau', 'Vmag': 3.47, 'alias': 'BD+12  539;SAO93719', 'RA': 4.011333333333333, 'DE': 12.490277777777777, 'mark': ''}), dict ({'name': '1Omi Tau', 'Vmag': 3.6, 'alias': 'BD+08  511;SAO111172', 'RA': 3.4135555555555555, 'DE': 9.02888888888889, 'mark': ''})])])}), dict ({'name': '御夫座', 'lines': list ([list ([dict ({'name': '112Bet Tau', 'Vmag': 1.65, 'alias': 'BD+28  795;SAO77168', 'RA': 5.438194444444445, 'DE': 28.6075, 'mark': tuple (['五车五', 'Elnath'])}), dict ({'name': '37The Aur', 'Vmag': 2.62, 'alias': 'BD+37 1380;SAO58636', 'RA': 5.995361111111111, 'DE': 37.212500000000006, 'mark': ''}), dict ({'name': '34Bet Aur', 'Vmag': 1.9, 'alias': 'BD+44 1328;SAO40750', 'RA': 5.992138888888889, 'DE': 44.9475, 'mark': tuple (['五车三', 'Menkalinan'])}), dict ({'name': '13Alp Aur', 'Vmag': 0.08, 'alias': 'BD+45 1077;SAO40186', 'RA': 5.2781666666666665, 'DE': 45.99805555555556, 'mark': tuple (['五车二', 'Capella'])}), dict ({'name': '8Zet Aur', 'Vmag': 3.75, 'alias': 'BD+40 1142;SAO39966', 'RA': 5.041305555555556, 'DE': 41.075833333333335, 'mark': ''}), dict ({'name': '3Iot Aur', 'Vmag': 2.69, 'alias': 'BD+32  855;SAO57522', 'RA': 4.949888888888889, 'DE': 33.16611111111111, 'mark': ''}), dict ({'name': '112Bet Tau', 'Vmag': 1.65, 'alias': 'BD+28  795;SAO77168', 'RA': 5.438194444444445, 'DE': 28.6075, 'mark': tuple (['五车五', 'Elnath'])})])])}), dict ({'name': '天猫座', 'lines': list ([list ([dict ({'name': '40Alp Lyn', 'Vmag': 3.13, 'alias': 'BD+35 1979;SAO61414', 'RA': 9.350916666666667, 'DE': 34.3925, 'mark': ''}), dict ({'name': '38    Lyn', 'Vmag': 3.82, 'alias': 'BD+37 1965;SAO61391', 'RA': 9.314083333333334, 'DE': 36.802499999999995, 'mark': ''}), dict ({'name': '', 'Vmag': 4.56, 'alias': 'BD+39 2200;SAO61254', 'RA': 9.108833333333333, 'DE': 38.452222222222225, 'mark': ''}), dict ({'name': '', 'Vmag': 3.97, 'alias': 'BD+42 1956;SAO42642', 'RA': 9.010666666666667, 'DE': 41.782777777777774, 'mark': ''}), dict ({'name': '31    Lyn', 'Vmag': 4.25, 'alias': 'BD+43 1815;SAO42319', 'RA': 8.380583333333334, 'DE': 43.18805555555555, 'mark': ''}), dict ({'name': '21    Lyn', 'Vmag': 4.64, 'alias': 'BD+49 1623;SAO41764', 'RA': 7.445222222222222, 'DE': 49.21138888888889, 'mark': ''}), dict ({'name': '15    Lyn', 'Vmag': 4.35, 'alias': 'BD+58  982;SAO26051', 'RA': 6.954583333333334, 'DE': 58.4225, 'mark': ''}), dict ({'name': '2    Lyn', 'Vmag': 4.48, 'alias': 'BD+59  959;SAO25665', 'RA': 6.327055555555555, 'DE': 59.01083333333333, 'mark': ''})])])}), dict ({'name': '天龙座', 'lines': list ([list ([dict ({'name': '1Lam Dra', 'Vmag': 3.84, 'alias': 'BD+70  665;SAO15532', 'RA': 11.52338888888889, 'DE': 69.33111111111111, 'mark': ''}), dict ({'name': '5Kap Dra', 'Vmag': 3.87, 'alias': 'BD+70  703;SAO7593', 'RA': 12.558055555555557, 'DE': 69.78833333333333, 'mark': ''}), dict ({'name': '11Alp Dra', 'Vmag': 3.65, 'alias': 'BD+65  978;SAO16273', 'RA': 14.073138888888888, 'DE': 64.37583333333333, 'mark': ''}), dict ({'name': '12Iot Dra', 'Vmag': 3.29, 'alias': 'BD+59 1654;SAO29520', 'RA': 15.4155, 'DE': 58.96611111111111, 'mark': ''}), dict ({'name': '13The Dra', 'Vmag': 4.01, 'alias': 'BD+58 1608;SAO29765', 'RA': 16.03147222222222, 'DE': 58.56527777777777, 'mark': ''}), dict ({'name': '14Eta Dra', 'Vmag': 2.74, 'alias': 'BD+61 1591;SAO17074', 'RA': 16.39986111111111, 'DE': 61.51416666666667, 'mark': ''}), dict ({'name': '22Zet Dra', 'Vmag': 3.17, 'alias': 'BD+65 1170;SAO17365', 'RA': 17.146444444444445, 'DE': 65.71472222222222, 'mark': ''}), dict ({'name': '44Chi Dra', 'Vmag': 3.57, 'alias': 'BD+72  839;SAO9087', 'RA': 18.350944444444448, 'DE': 72.73277777777778, 'mark': ''}), dict ({'name': '60Tau Dra', 'Vmag': 4.45, 'alias': 'BD+73  857;SAO9366', 'RA': 19.259166666666665, 'DE': 73.35555555555555, 'mark': ''}), dict ({'name': '63Eps Dra', 'Vmag': 3.83, 'alias': 'BD+69 1070;SAO9540', 'RA': 19.80288888888889, 'DE': 70.26777777777778, 'mark': ''}), dict ({'name': '57Del Dra', 'Vmag': 3.07, 'alias': 'BD+67 1129;SAO18222', 'RA': 19.20925, 'DE': 67.66166666666668, 'mark': ''}), dict ({'name': '32Xi  Dra', 'Vmag': 3.75, 'alias': 'BD+56 2033;SAO30631', 'RA': 17.892138888888887, 'DE': 56.87277777777778, 'mark': ''}), dict ({'name': '33Gam Dra', 'Vmag': 2.23, 'alias': 'BD+51 2282;SAO30653', 'RA': 17.943444444444445, 'DE': 51.48888888888889, 'mark': ''}), dict ({'name': '23Bet Dra', 'Vmag': 2.79, 'alias': 'BD+52 2065;SAO30429', 'RA': 17.50722222222222, 'DE': 52.30138888888889, 'mark': ''}), dict ({'name': '25Nu 2Dra', 'Vmag': 4.87, 'alias': 'BD+55 1945;SAO30450', 'RA': 17.53777777777778, 'DE': 55.17305555555555, 'mark': ''}), dict ({'name': '32Xi  Dra', 'Vmag': 3.75, 'alias': 'BD+56 2033;SAO30631', 'RA': 17.892138888888887, 'DE': 56.87277777777778, 'mark': ''})])])}), dict ({'name': '天鹰座', 'lines': list ([list ([dict ({'name': '50Gam Aql', 'Vmag': 2.72, 'alias': 'BD+10 4043;SAO105223', 'RA': 19.771, 'DE': 10.613333333333333, 'mark': ''}), dict ({'name': '53Alp Aql', 'Vmag': 0.77, 'alias': 'BD+08 4236;SAO125122', 'RA': 19.84638888888889, 'DE': 8.868333333333334, 'mark': tuple (['河鼓二', 'Altair'])}), dict ({'name': '60Bet Aql', 'Vmag': 3.71, 'alias': 'BD+06 4357;SAO125235', 'RA': 19.92188888888889, 'DE': 6.406666666666667, 'mark': ''})]), list ([dict ({'name': '13Eps Aql', 'Vmag': 4.02, 'alias': 'BD+14 3736;SAO104318', 'RA': 18.993722222222225, 'DE': 15.068333333333333, 'mark': ''}), dict ({'name': '17Zet Aql', 'Vmag': 2.99, 'alias': 'BD+13 3899;SAO104461', 'RA': 19.090166666666665, 'DE': 13.863333333333333, 'mark': ''}), dict ({'name': '30Del Aql', 'Vmag': 3.36, 'alias': 'BD+02 3879;SAO124603', 'RA': 19.424972222222223, 'DE': 3.1147222222222224, 'mark': ''}), dict ({'name': '55Eta Aql', 'Vmag': 3.9, 'alias': 'BD+00 4337;SAO125159', 'RA': 19.874555555555556, 'DE': 1.0055555555555555, 'mark': ''}), dict ({'name': '65The Aql', 'Vmag': 3.23, 'alias': 'BD-01 3911;SAO144150', 'RA': 20.18841666666667, 'DE': 0.8213888888888888, 'mark': ''})]), list ([dict ({'name': '53Alp Aql', 'Vmag': 0.77, 'alias': 'BD+08 4236;SAO125122', 'RA': 19.84638888888889, 'DE': 8.868333333333334, 'mark': tuple (['河鼓二', 'Altair'])}), dict ({'name': '30Del Aql', 'Vmag': 3.36, 'alias': 'BD+02 3879;SAO124603', 'RA': 19.424972222222223, 'DE': 3.1147222222222224, 'mark': ''}), dict ({'name': '16Lam Aql', 'Vmag': 3.44, 'alias': 'BD-05 4876;SAO143021', 'RA': 19.10413888888889, 'DE': -(3.1175), 'mark': ''})])])}), dict ({'name': '蝎虎座', 'lines': list ([list ([dict ({'name': '1    Lac', 'Vmag': 4.13, 'alias': 'BD+37 4526;SAO72191', 'RA': 22.266166666666667, 'DE': 37.74888888888889, 'mark': ''}), dict ({'name': '6    Lac', 'Vmag': 4.51, 'alias': 'BD+42 4420;SAO52079', 'RA': 22.50813888888889, 'DE': 43.123333333333335, 'mark': ''}), dict ({'name': '5    Lac', 'Vmag': 4.36, 'alias': 'BD+46 3719;SAO52055', 'RA': 22.492166666666666, 'DE': 47.706944444444446, 'mark': ''}), dict ({'name': '4    Lac', 'Vmag': 4.57, 'alias': 'BD+48 3715;SAO51970', 'RA': 22.40861111111111, 'DE': 49.47638888888889, 'mark': ''}), dict ({'name': '3Bet Lac', 'Vmag': 4.43, 'alias': 'BD+51 3358;SAO34395', 'RA': 22.392666666666667, 'DE': 52.22916666666667, 'mark': ''}), dict ({'name': '7Alp Lac', 'Vmag': 3.77, 'alias': 'BD+49 3875;SAO34542', 'RA': 22.521527777777777, 'DE': 50.2825, 'mark': ''}), dict ({'name': '5    Lac', 'Vmag': 4.36, 'alias': 'BD+46 3719;SAO52055', 'RA': 22.492166666666666, 'DE': 47.706944444444446, 'mark': ''})])])}), dict ({'name': '仙王座', 'lines': list ([list ([dict ({'name': '8Bet Cep', 'Vmag': 3.23, 'alias': 'BD+69 1173;SAO10057', 'RA': 21.477666666666664, 'DE': 70.56083333333333, 'mark': ''}), dict ({'name': '35Gam Cep', 'Vmag': 3.21, 'alias': 'BD+76  928;SAO10818', 'RA': 23.655777777777775, 'DE': 77.6325, 'mark': ''}), dict ({'name': '32Iot Cep', 'Vmag': 3.52, 'alias': 'BD+65 1814;SAO20268', 'RA': 22.828, 'DE': 66.20055555555555, 'mark': ''}), dict ({'name': '8Bet Cep', 'Vmag': 3.23, 'alias': 'BD+69 1173;SAO10057', 'RA': 21.477666666666664, 'DE': 70.56083333333333, 'mark': ''}), dict ({'name': '5Alp Cep', 'Vmag': 2.44, 'alias': 'BD+61 2111;SAO19302', 'RA': 21.30966666666667, 'DE': 62.58555555555556, 'mark': ''}), dict ({'name': '21Zet Cep', 'Vmag': 3.35, 'alias': 'BD+57 2475;SAO34137', 'RA': 22.18091666666667, 'DE': 58.20111111111111, 'mark': ''}), dict ({'name': '32Iot Cep', 'Vmag': 3.52, 'alias': 'BD+65 1814;SAO20268', 'RA': 22.828, 'DE': 66.20055555555555, 'mark': ''})])])}), dict ({'name': '鹿豹座', 'lines': list ([list ([dict ({'name': '', 'Vmag': 5.05, 'alias': 'BD+79  169;SAO5496', 'RA': 5.375972222222222, 'DE': 79.23111111111112, 'mark': ''}), dict ({'name': 'Gam Cam', 'Vmag': 4.63, 'alias': 'BD+70  259;SAO5006', 'RA': 3.8393055555555557, 'DE': 71.33222222222221, 'mark': ''}), dict ({'name': '', 'Vmag': 4.21, 'alias': 'BD+59  660;SAO24054', 'RA': 3.484472222222222, 'DE': 59.94027777777777, 'mark': ''}), dict ({'name': '9Alp Cam', 'Vmag': 4.29, 'alias': 'BD+66  358;SAO13298', 'RA': 4.900833333333334, 'DE': 66.34277777777777, 'mark': ''}), dict ({'name': 'Gam Cam', 'Vmag': 4.63, 'alias': 'BD+70  259;SAO5006', 'RA': 3.8393055555555557, 'DE': 71.33222222222221, 'mark': ''})])])}), dict ({'name': '小狮座', 'lines': list ([list ([dict ({'name': '10    LMi', 'Vmag': 4.55, 'alias': 'BD+37 2004;SAO61570', 'RA': 9.570388888888889, 'DE': 36.3975, 'mark': ''}), dict ({'name': '21    LMi', 'Vmag': 4.48, 'alias': 'BD+35 2110;SAO61874', 'RA': 10.123833333333334, 'DE': 35.24472222222222, 'mark': ''}), dict ({'name': '46    LMi', 'Vmag': 3.83, 'alias': 'BD+34 2172;SAO62297', 'RA': 10.888527777777778, 'DE': 34.215, 'mark': ''}), dict ({'name': '31Bet LMi', 'Vmag': 4.21, 'alias': 'BD+37 2080;SAO62053', 'RA': 10.464722222222221, 'DE': 36.70722222222223, 'mark': ''}), dict ({'name': '21    LMi', 'Vmag': 4.48, 'alias': 'BD+35 2110;SAO61874', 'RA': 10.123833333333334, 'DE': 35.24472222222222, 'mark': ''})])])}), dict ({'name': '狮子座', 'lines': list ([list ([dict ({'name': '32Alp Leo', 'Vmag': 1.35, 'alias': 'BD+12 2149;SAO98967', 'RA': 10.139527777777777, 'DE': 11.967222222222222, 'mark': tuple (['轩辕十四', 'Regulus'])}), dict ({'name': '70The Leo', 'Vmag': 3.34, 'alias': 'BD+16 2234;SAO99512', 'RA': 11.237333333333332, 'DE': 15.429444444444444, 'mark': ''}), dict ({'name': '94Bet Leo', 'Vmag': 2.14, 'alias': 'BD+15 2383;SAO99809', 'RA': 11.817666666666666, 'DE': 14.571944444444444, 'mark': ''}), dict ({'name': '68Del Leo', 'Vmag': 2.56, 'alias': 'BD+21 2298;SAO81727', 'RA': 11.235138888888889, 'DE': 20.52361111111111, 'mark': ''}), dict ({'name': '41Gam1Leo', 'Vmag': 2.61, 'alias': 'BD+20 2467;SAO81298', 'RA': 10.33286111111111, 'DE': 19.841666666666665, 'mark': ''}), dict ({'name': '36Zet Leo', 'Vmag': 3.44, 'alias': 'BD+24 2209;SAO81265', 'RA': 10.278166666666667, 'DE': 23.41722222222222, 'mark': ''}), dict ({'name': '24Mu  Leo', 'Vmag': 3.88, 'alias': 'BD+26 2019;SAO81064', 'RA': 9.87938888888889, 'DE': 26.006944444444443, 'mark': ''}), dict ({'name': '17Eps Leo', 'Vmag': 2.98, 'alias': 'BD+24 2129;SAO81004', 'RA': 9.764194444444444, 'DE': 23.774166666666666, 'mark': ''})]), list ([dict ({'name': '68Del Leo', 'Vmag': 2.56, 'alias': 'BD+21 2298;SAO81727', 'RA': 11.235138888888889, 'DE': 20.52361111111111, 'mark': ''}), dict ({'name': '70The Leo', 'Vmag': 3.34, 'alias': 'BD+16 2234;SAO99512', 'RA': 11.237333333333332, 'DE': 15.429444444444444, 'mark': ''})]), list ([dict ({'name': '41Gam1Leo', 'Vmag': 2.61, 'alias': 'BD+20 2467;SAO81298', 'RA': 10.33286111111111, 'DE': 19.841666666666665, 'mark': ''}), dict ({'name': '30Eta Leo', 'Vmag': 3.52, 'alias': 'BD+17 2171;SAO98955', 'RA': 10.122222222222224, 'DE': 16.762777777777778, 'mark': ''}), dict ({'name': '32Alp Leo', 'Vmag': 1.35, 'alias': 'BD+12 2149;SAO98967', 'RA': 10.139527777777777, 'DE': 11.967222222222222, 'mark': tuple (['轩辕十四', 'Regulus'])})])])}), dict ({'name': '海豚座', 'lines': list ([list ([dict ({'name': '2Eps Del', 'Vmag': 4.03, 'alias': 'BD+10 4321;SAO106230', 'RA': 20.553555555555555, 'DE': 11.303333333333335, 'mark': ''}), dict ({'name': '6Bet Del', 'Vmag': 3.63, 'alias': 'BD+14 4369;SAO106316', 'RA': 20.625833333333333, 'DE': 14.595277777777778, 'mark': ''}), dict ({'name': '11Del Del', 'Vmag': 4.43, 'alias': 'BD+14 4403;SAO106425', 'RA': 20.724305555555553, 'DE': 15.074444444444444, 'mark': ''}), dict ({'name': '12Gam2Del', 'Vmag': 4.27, 'alias': 'BD+15 4255;SAO106476', 'RA': 20.777638888888887, 'DE': 16.124166666666667, 'mark': ''}), dict ({'name': '9Alp Del', 'Vmag': 3.77, 'alias': 'BD+15 4222;SAO106357', 'RA': 20.660638888888887, 'DE': 15.911944444444444, 'mark': ''}), dict ({'name': '6Bet Del', 'Vmag': 3.63, 'alias': 'BD+14 4369;SAO106316', 'RA': 20.625833333333333, 'DE': 14.595277777777778, 'mark': ''})])])}), dict ({'name': '小马座', 'lines': list ([list ([dict ({'name': '5Gam Equ', 'Vmag': 4.69, 'alias': 'BD+09 4732;SAO126593', 'RA': 21.172361111111112, 'DE': 10.131666666666668, 'mark': ''}), dict ({'name': '7Del Equ', 'Vmag': 4.49, 'alias': 'BD+09 4746;SAO126643', 'RA': 21.24136111111111, 'DE': 10.006944444444445, 'mark': ''}), dict ({'name': '10Bet Equ', 'Vmag': 5.16, 'alias': 'BD+06 4811;SAO126749', 'RA': 21.381555555555558, 'DE': 6.811111111111111, 'mark': ''}), dict ({'name': '8Alp Equ', 'Vmag': 3.92, 'alias': 'BD+04 4635;SAO126662', 'RA': 21.26372222222222, 'DE': 5.247777777777777, 'mark': ''}), dict ({'name': '5Gam Equ', 'Vmag': 4.69, 'alias': 'BD+09 4732;SAO126593', 'RA': 21.172361111111112, 'DE': 10.131666666666668, 'mark': ''})])])}), dict ({'name': '蛇夫座', 'lines': list ([list ([dict ({'name': '51    Oph', 'Vmag': 4.81, 'alias': 'CD-2313412;SAO185470', 'RA': 17.52361111111111, 'DE': -(22.037222222222223), 'mark': ''}), dict ({'name': '35Eta Oph', 'Vmag': 2.43, 'alias': 'BD-15 4467;SAO160332', 'RA': 17.172972222222224, 'DE': -(14.275277777777777), 'mark': ''}), dict ({'name': '60Bet Oph', 'Vmag': 2.77, 'alias': 'BD+04 3489;SAO122671', 'RA': 17.724555555555554, 'DE': 4.567222222222222, 'mark': ''}), dict ({'name': '55Alp Oph', 'Vmag': 2.08, 'alias': 'BD+12 3252;SAO102932', 'RA': 17.58225, 'DE': 12.56, 'mark': ''}), dict ({'name': '27Kap Oph', 'Vmag': 3.2, 'alias': 'BD+09 3298;SAO121962', 'RA': 16.96113888888889, 'DE': 9.375, 'mark': ''}), dict ({'name': '2Eps Oph', 'Vmag': 3.24, 'alias': 'BD-04 4086;SAO141086', 'RA': 16.30536111111111, 'DE': -(3.3074999999999997), 'mark': ''}), dict ({'name': '13Zet Oph', 'Vmag': 2.56, 'alias': 'BD-10 4350;SAO160006', 'RA': 16.619305555555556, 'DE': -(9.432777777777778), 'mark': ''}), dict ({'name': '35Eta Oph', 'Vmag': 2.43, 'alias': 'BD-15 4467;SAO160332', 'RA': 17.172972222222224, 'DE': -(14.275277777777777), 'mark': ''})])])}), dict ({'name': '巨蛇座', 'lines': list ([list ([dict ({'name': '63The1Ser', 'Vmag': 4.62, 'alias': 'BD+04 3916;SAO124068', 'RA': 18.937, 'DE': 4.203611111111111, 'mark': ''}), dict ({'name': '58Eta Ser', 'Vmag': 3.26, 'alias': 'BD-02 4599;SAO142241', 'RA': 18.35516666666667, 'DE': -(1.1011111111111112), 'mark': ''}), dict ({'name': '56Omi Ser', 'Vmag': 4.26, 'alias': 'BD-12 4808;SAO160747', 'RA': 17.69025, 'DE': -(11.124722222222221), 'mark': ''}), dict ({'name': '55Xi  Ser', 'Vmag': 3.54, 'alias': 'BD-15 4621;SAO160700', 'RA': 17.626444444444445, 'DE': -(14.60138888888889), 'mark': ''}), dict ({'name': '53Nu  Ser', 'Vmag': 4.33, 'alias': 'BD-12 4722;SAO160479', 'RA': 17.34713888888889, 'DE': -(11.153055555555556), 'mark': ''})]), list ([dict ({'name': '32Mu  Ser', 'Vmag': 3.53, 'alias': 'BD-02 4052;SAO140787', 'RA': 15.827, 'DE': -(2.5697222222222225), 'mark': ''}), dict ({'name': '37Eps Ser', 'Vmag': 3.71, 'alias': 'BD+04 3069;SAO121218', 'RA': 15.846944444444444, 'DE': 4.477777777777778, 'mark': ''}), dict ({'name': '24Alp Ser', 'Vmag': 2.65, 'alias': 'BD+06 3088;SAO121157', 'RA': 15.737805555555555, 'DE': 6.4255555555555555, 'mark': ''}), dict ({'name': '13Del Ser', 'Vmag': 3.8, 'alias': 'BD+11 2821;SAO101623', 'RA': 15.580027777777778, 'DE': 10.5375, 'mark': ''}), dict ({'name': '28Bet Ser', 'Vmag': 3.67, 'alias': 'BD+15 2911;SAO101725', 'RA': 15.769805555555557, 'DE': 15.421944444444444, 'mark': ''}), dict ({'name': '35Kap Ser', 'Vmag': 4.09, 'alias': 'BD+18 3074;SAO101752', 'RA': 15.812333333333335, 'DE': 18.141666666666666, 'mark': ''}), dict ({'name': '41Gam Ser', 'Vmag': 3.85, 'alias': 'BD+16 2849;SAO101826', 'RA': 15.940888888888889, 'DE': 15.661666666666667, 'mark': ''}), dict ({'name': '28Bet Ser', 'Vmag': 3.67, 'alias': 'BD+15 2911;SAO101725', 'RA': 15.769805555555557, 'DE': 15.421944444444444, 'mark': ''})])])}), dict ({'name': '盾牌座', 'lines': list ([list ([dict ({'name': '', 'Vmag': 5.1, 'alias': 'BD-15 5143;SAO161964', 'RA': 18.91197222222222, 'DE': -(14.396944444444445), 'mark': ''}), dict ({'name': 'Gam Sct', 'Vmag': 4.7, 'alias': 'BD-14 5071;SAO161520', 'RA': 18.48663888888889, 'DE': -(13.434166666666666), 'mark': ''}), dict ({'name': 'Alp Sct', 'Vmag': 3.85, 'alias': 'BD-08 4638;SAO142408', 'RA': 18.586777777777776, 'DE': -(7.755833333333333), 'mark': ''}), dict ({'name': 'Bet Sct', 'Vmag': 4.22, 'alias': 'BD-04 4582;SAO142618', 'RA': 18.786250000000003, 'DE': -(3.252222222222222), 'mark': ''}), dict ({'name': '', 'Vmag': 5.2, 'alias': 'BD-05 4760;SAO142620', 'RA': 18.79138888888889, 'DE': -(4.295), 'mark': ''}), dict ({'name': '', 'Vmag': 5.1, 'alias': 'BD-15 5143;SAO161964', 'RA': 18.91197222222222, 'DE': -(14.396944444444445), 'mark': ''})])])}), dict ({'name': '巨蟹座', 'lines': list ([list ([dict ({'name': '65Alp Cnc', 'Vmag': 4.25, 'alias': 'BD+12 1948;SAO98267', 'RA': 8.974777777777778, 'DE': 11.857777777777777, 'mark': ''}), dict ({'name': '47Del Cnc', 'Vmag': 3.94, 'alias': 'BD+18 2027;SAO98087', 'RA': 8.74475, 'DE': 18.154166666666665, 'mark': ''}), dict ({'name': '43Gam Cnc', 'Vmag': 4.66, 'alias': 'BD+21 1895;SAO80378', 'RA': 8.721416666666666, 'DE': 21.46861111111111, 'mark': ''}), dict ({'name': '48Iot Cnc', 'Vmag': 6.57, 'alias': 'BD+29 1823;SAO80415', 'RA': 8.777777777777779, 'DE': 28.76527777777778, 'mark': ''})]), list ([dict ({'name': '47Del Cnc', 'Vmag': 3.94, 'alias': 'BD+18 2027;SAO98087', 'RA': 8.74475, 'DE': 18.154166666666665, 'mark': ''}), dict ({'name': '17Bet Cnc', 'Vmag': 3.52, 'alias': 'BD+09 1917;SAO116569', 'RA': 8.275250000000002, 'DE': 9.185555555555556, 'mark': ''})]), list ([dict ({'name': '43Gam Cnc', 'Vmag': 4.66, 'alias': 'BD+21 1895;SAO80378', 'RA': 8.721416666666666, 'DE': 21.46861111111111, 'mark': ''}), dict ({'name': '18Chi Cnc', 'Vmag': 5.14, 'alias': 'BD+27 1589;SAO80104', 'RA': 8.334416666666668, 'DE': 27.217777777777776, 'mark': ''})])])}), dict ({'name': '北冕座', 'lines': list ([list ([dict ({'name': '14Iot CrB', 'Vmag': 4.99, 'alias': 'BD+30 2738;SAO84152', 'RA': 16.024055555555556, 'DE': 29.851111111111113, 'mark': ''}), dict ({'name': '13Eps CrB', 'Vmag': 4.15, 'alias': 'BD+27 2558;SAO84098', 'RA': 15.959805555555555, 'DE': 26.87777777777778, 'mark': ''}), dict ({'name': '10Del CrB', 'Vmag': 4.63, 'alias': 'BD+26 2737;SAO84019', 'RA': 15.826583333333334, 'DE': 26.06833333333333, 'mark': ''}), dict ({'name': '8Gam CrB', 'Vmag': 3.84, 'alias': 'BD+26 2722;SAO83958', 'RA': 15.712388888888889, 'DE': 26.295555555555556, 'mark': ''}), dict ({'name': '5Alp CrB', 'Vmag': 2.23, 'alias': 'BD+27 2512;SAO83893', 'RA': 15.578138888888889, 'DE': 26.71472222222222, 'mark': ''}), dict ({'name': '3Bet CrB', 'Vmag': 3.68, 'alias': 'BD+29 2670;SAO83831', 'RA': 15.463805555555554, 'DE': 29.105833333333333, 'mark': ''}), dict ({'name': '4The CrB', 'Vmag': 4.14, 'alias': 'BD+31 2750;SAO64769', 'RA': 15.548833333333333, 'DE': 31.359166666666667, 'mark': ''})])])}), dict ({'name': '猎犬座', 'lines': list ([list ([dict ({'name': '12Alp2CVn', 'Vmag': 2.9, 'alias': 'BD+39 2580;SAO63257', 'RA': 12.933805555555557, 'DE': 38.318333333333335, 'mark': ''}), dict ({'name': '8Bet CVn', 'Vmag': 4.26, 'alias': 'BD+42 2321;SAO44230', 'RA': 12.562361111111112, 'DE': 41.3575, 'mark': ''})])])}), dict ({'name': '后发座', 'lines': list ([list ([dict ({'name': '42Alp Com', 'Vmag': 5.22, 'alias': 'BD+18 2697;SAO100443', 'RA': 13.166472222222222, 'DE': 17.529444444444444, 'mark': ''}), dict ({'name': '43Bet Com', 'Vmag': 4.26, 'alias': 'BD+28 2193;SAO82706', 'RA': 13.197888888888889, 'DE': 27.878055555555555, 'mark': ''}), dict ({'name': '15Gam Com', 'Vmag': 4.36, 'alias': 'BD+29 2288;SAO82313', 'RA': 12.448972222222222, 'DE': 28.26833333333333, 'mark': ''})])])}), dict ({'name': '双子座', 'lines': list ([list ([dict ({'name': '31Xi  Gem', 'Vmag': 3.36, 'alias': 'BD+13 1396;SAO96074', 'RA': 6.754833333333333, 'DE': 12.895555555555555, 'mark': ''}), dict ({'name': '54Lam Gem', 'Vmag': 3.58, 'alias': 'BD+16 1443;SAO96746', 'RA': 7.301555555555556, 'DE': 16.540277777777778, 'mark': ''}), dict ({'name': '55Del Gem', 'Vmag': 3.53, 'alias': 'BD+22 1645;SAO79294', 'RA': 7.335388888888889, 'DE': 21.98222222222222, 'mark': ''}), dict ({'name': '69Ups Gem', 'Vmag': 4.06, 'alias': 'BD+27 1424;SAO79533', 'RA': 7.598694444444444, 'DE': 26.895833333333332, 'mark': ''}), dict ({'name': '60Iot Gem', 'Vmag': 3.79, 'alias': 'BD+28 1385;SAO79374', 'RA': 7.428777777777778, 'DE': 27.798055555555557, 'mark': ''}), dict ({'name': '46Tau Gem', 'Vmag': 4.41, 'alias': 'BD+30 1439;SAO59858', 'RA': 7.185666666666667, 'DE': 30.24527777777778, 'mark': ''}), dict ({'name': '27Eps Gem', 'Vmag': 2.98, 'alias': 'BD+25 1406;SAO78682', 'RA': 6.732194444444445, 'DE': 25.13111111111111, 'mark': ''}), dict ({'name': '13Mu  Gem', 'Vmag': 2.88, 'alias': 'BD+22 1304;SAO78297', 'RA': 6.382666666666666, 'DE': 22.51361111111111, 'mark': ''}), dict ({'name': '7Eta Gem', 'Vmag': 3.28, 'alias': 'BD+22 1241;SAO78135', 'RA': 6.247944444444444, 'DE': 22.506666666666668, 'mark': ''}), dict ({'name': '1    Gem', 'Vmag': 4.16, 'alias': 'BD+23 1170;SAO77915', 'RA': 6.068666666666666, 'DE': 23.263333333333332, 'mark': ''})]), list ([dict ({'name': '24Gam Gem', 'Vmag': 1.93, 'alias': 'BD+16 1223;SAO95912', 'RA': 6.628527777777778, 'DE': 16.399166666666666, 'mark': tuple (['井宿三', 'Alhena'])}), dict ({'name': '43Zet Gem', 'Vmag': 3.79, 'alias': 'BD+20 1687;SAO79031', 'RA': 7.068472222222222, 'DE': 20.57027777777778, 'mark': ''}), dict ({'name': '55Del Gem', 'Vmag': 3.53, 'alias': 'BD+22 1645;SAO79294', 'RA': 7.335388888888889, 'DE': 21.98222222222222, 'mark': ''})]), list ([dict ({'name': '77Kap Gem', 'Vmag': 3.57, 'alias': 'BD+24 1759;SAO79653', 'RA': 7.740777777777778, 'DE': 24.398055555555555, 'mark': ''}), dict ({'name': '69Ups Gem', 'Vmag': 4.06, 'alias': 'BD+27 1424;SAO79533', 'RA': 7.598694444444444, 'DE': 26.895833333333332, 'mark': ''}), dict ({'name': '78Bet Gem', 'Vmag': 1.14, 'alias': 'BD+28 1463;SAO79666', 'RA': 7.75525, 'DE': 28.02611111111111, 'mark': tuple (['北河三', 'Pollux'])})]), list ([dict ({'name': '66Alp Gem', 'Vmag': 2.88, 'alias': 'BD+32 1581;SAO60198', 'RA': 7.576666666666666, 'DE': 31.88861111111111, 'mark': tuple (['北河二', 'Castor'])}), dict ({'name': '46Tau Gem', 'Vmag': 4.41, 'alias': 'BD+30 1439;SAO59858', 'RA': 7.185666666666667, 'DE': 30.24527777777778, 'mark': ''}), dict ({'name': '34The Gem', 'Vmag': 3.6, 'alias': 'BD+34 1481;SAO59570', 'RA': 6.879805555555556, 'DE': 33.961111111111116, 'mark': ''})]), list ([dict ({'name': '27Eps Gem', 'Vmag': 2.98, 'alias': 'BD+25 1406;SAO78682', 'RA': 6.732194444444445, 'DE': 25.13111111111111, 'mark': ''}), dict ({'name': '18Nu  Gem', 'Vmag': 4.15, 'alias': 'BD+20 1441;SAO78423', 'RA': 6.482722222222223, 'DE': 20.21222222222222, 'mark': ''})])])}), dict ({'name': '天秤座', 'lines': list ([list ([dict ({'name': '46The Lib', 'Vmag': 4.15, 'alias': 'BD-16 4174;SAO159563', 'RA': 15.897083333333333, 'DE': -(15.270555555555555), 'mark': ''}), dict ({'name': '38Gam Lib', 'Vmag': 3.91, 'alias': 'BD-14 4237;SAO159370', 'RA': 15.592111111111112, 'DE': -(13.210555555555556), 'mark': ''}), dict ({'name': '27Bet Lib', 'Vmag': 2.61, 'alias': 'BD-08 3935;SAO140430', 'RA': 15.283444444444445, 'DE': -(8.616944444444444), 'mark': ''}), dict ({'name': '9Alp2Lib', 'Vmag': 2.75, 'alias': 'BD-15 3966;SAO158840', 'RA': 14.847972222222223, 'DE': -(15.958333333333334), 'mark': ''}), dict ({'name': '20Sig Lib', 'Vmag': 3.29, 'alias': 'CD-2411834;SAO183139', 'RA': 15.067833333333333, 'DE': -(24.718055555555555), 'mark': ''}), dict ({'name': '38Gam Lib', 'Vmag': 3.91, 'alias': 'BD-14 4237;SAO159370', 'RA': 15.592111111111112, 'DE': -(13.210555555555556), 'mark': ''})])])}), dict ({'name': '六分仪座', 'lines': list ([list ([dict ({'name': '15Alp Sex', 'Vmag': 4.49, 'alias': 'BD+00 2615;SAO137366', 'RA': 10.132305555555556, 'DE': 0.37166666666666665, 'mark': ''}), dict ({'name': '30Bet Sex', 'Vmag': 5.09, 'alias': 'BD+00 2663;SAO137608', 'RA': 10.504861111111111, 'DE': 0.6369444444444444, 'mark': ''})])])}), dict ({'name': '小犬座', 'lines': list ([list ([dict ({'name': '10Alp CMi', 'Vmag': 0.38, 'alias': 'BD+05 1739;SAO115756', 'RA': 7.655027777777778, 'DE': 5.2250000000000005, 'mark': tuple (['南河三', 'Procyon'])}), dict ({'name': '3Bet CMi', 'Vmag': 2.9, 'alias': 'BD+08 1774;SAO115456', 'RA': 7.452500000000001, 'DE': 8.289444444444444, 'mark': ''})])])}), dict ({'name': '麒麟座', 'lines': list ([list ([dict ({'name': '', 'Vmag': 5.73, 'alias': 'BD+02 1139;SAO113507', 'RA': 6.149416666666667, 'DE': 2.4994444444444444, 'mark': ''}), dict ({'name': '8Eps Mon', 'Vmag': 4.44, 'alias': 'BD+04 1236;SAO113810', 'RA': 6.396138888888889, 'DE': 4.592777777777777, 'mark': ''}), dict ({'name': '22Del Mon', 'Vmag': 4.15, 'alias': 'BD-00 1636;SAO134330', 'RA': 7.19775, 'DE': 0.49277777777777776, 'mark': ''}), dict ({'name': '29Zet Mon', 'Vmag': 4.34, 'alias': 'BD-02 2450;SAO135551', 'RA': 8.143222222222223, 'DE': -(1.016111111111111), 'mark': ''}), dict ({'name': '26Alp Mon', 'Vmag': 3.93, 'alias': 'BD-09 2172;SAO134986', 'RA': 7.687444444444445, 'DE': -(8.448888888888888), 'mark': ''})]), list ([dict ({'name': '22Del Mon', 'Vmag': 4.15, 'alias': 'BD-00 1636;SAO134330', 'RA': 7.19775, 'DE': 0.49277777777777776, 'mark': ''}), dict ({'name': '11Bet Mon', 'Vmag': 4.6, 'alias': 'BD-06 1574;SAO133316', 'RA': 6.480277777777778, 'DE': -(6.967222222222222), 'mark': ''}), dict ({'name': '5Gam Mon', 'Vmag': 3.98, 'alias': 'BD-06 1469;SAO133012', 'RA': 6.247583333333333, 'DE': -(5.7252777777777775), 'mark': ''})])])}), dict ({'name': '玉兔座', 'lines': list ([list ([dict ({'name': '18The Lep', 'Vmag': 4.67, 'alias': 'BD-14 1331;SAO151110', 'RA': 6.102583333333333, 'DE': -(13.064722222222223), 'mark': ''}), dict ({'name': '16Eta Lep', 'Vmag': 3.71, 'alias': 'BD-14 1286;SAO150957', 'RA': 5.940083333333334, 'DE': -(13.832222222222223), 'mark': ''}), dict ({'name': '14Zet Lep', 'Vmag': 3.55, 'alias': 'BD-14 1232;SAO150801', 'RA': 5.782583333333333, 'DE': -(13.178055555555556), 'mark': ''}), dict ({'name': '11Alp Lep', 'Vmag': 2.58, 'alias': 'BD-17 1166;SAO150547', 'RA': 5.5455, 'DE': -(16.177777777777777), 'mark': ''}), dict ({'name': '9Bet Lep', 'Vmag': 2.84, 'alias': 'BD-20 1096;SAO170457', 'RA': 5.47075, 'DE': -(19.240555555555556), 'mark': ''}), dict ({'name': '2Eps Lep', 'Vmag': 3.19, 'alias': 'BD-22 1000;SAO170051', 'RA': 5.091027777777778, 'DE': -(21.628888888888888), 'mark': ''}), dict ({'name': '5Mu  Lep', 'Vmag': 3.31, 'alias': 'BD-16 1072;SAO150237', 'RA': 5.215527777777778, 'DE': -(15.794444444444444), 'mark': ''}), dict ({'name': '4Kap Lep', 'Vmag': 4.36, 'alias': 'BD-13 1092;SAO150239', 'RA': 5.220527777777778, 'DE': -(11.05861111111111), 'mark': ''}), dict ({'name': '3Iot Lep', 'Vmag': 4.45, 'alias': 'BD-12 1095;SAO150223', 'RA': 5.2049722222222226, 'DE': -(10.130833333333333), 'mark': ''})]), list ([dict ({'name': '5Mu  Lep', 'Vmag': 3.31, 'alias': 'BD-16 1072;SAO150237', 'RA': 5.215527777777778, 'DE': -(15.794444444444444), 'mark': ''}), dict ({'name': '6Lam Lep', 'Vmag': 4.29, 'alias': 'BD-13 1127;SAO150340', 'RA': 5.32625, 'DE': -(12.823333333333334), 'mark': ''}), dict ({'name': '7Nu  Lep', 'Vmag': 5.3, 'alias': 'BD-12 1132;SAO150345', 'RA': 5.333083333333333, 'DE': -(11.684444444444443), 'mark': ''})]), list ([dict ({'name': '5Mu  Lep', 'Vmag': 3.31, 'alias': 'BD-16 1072;SAO150237', 'RA': 5.215527777777778, 'DE': -(15.794444444444444), 'mark': ''}), dict ({'name': '11Alp Lep', 'Vmag': 2.58, 'alias': 'BD-17 1166;SAO150547', 'RA': 5.5455, 'DE': -(16.177777777777777), 'mark': ''}), dict ({'name': '15Del Lep', 'Vmag': 3.81, 'alias': 'BD-20 1211;SAO170926', 'RA': 5.855361111111111, 'DE': -(19.120833333333334), 'mark': ''}), dict ({'name': '13Gam Lep', 'Vmag': 3.6, 'alias': 'BD-22 1211;SAO170759', 'RA': 5.741055555555556, 'DE': -(21.551666666666666), 'mark': ''}), dict ({'name': '9Bet Lep', 'Vmag': 2.84, 'alias': 'BD-20 1096;SAO170457', 'RA': 5.47075, 'DE': -(19.240555555555556), 'mark': ''})])])}), dict ({'name': '宝瓶座', 'lines': list ([list ([dict ({'name': '98    Aqr', 'Vmag': 3.97, 'alias': 'BD-20 6587;SAO191858', 'RA': 23.382833333333334, 'DE': -(19.899444444444445), 'mark': ''}), dict ({'name': '91Psi1Aqr', 'Vmag': 4.21, 'alias': 'BD-09 6156;SAO146598', 'RA': 23.26486111111111, 'DE': -(8.912222222222221), 'mark': ''}), dict ({'name': '73Lam Aqr', 'Vmag': 3.74, 'alias': 'BD-08 5968;SAO146362', 'RA': 22.876916666666666, 'DE': -(6.420277777777778), 'mark': ''}), dict ({'name': '62Eta Aqr', 'Vmag': 4.02, 'alias': 'BD-00 4384;SAO146181', 'RA': 22.589277777777777, 'DE': 0.11750000000000001, 'mark': ''}), dict ({'name': '55Zet1Aqr', 'Vmag': 4.59, 'alias': 'BD-00 4365;SAO146107', 'RA': 22.48047222222222, 'DE': 0.020277777777777777, 'mark': ''}), dict ({'name': '48Gam Aqr', 'Vmag': 3.84, 'alias': 'BD-02 5741;SAO146044', 'RA': 22.360944444444446, 'DE': -(0.6127777777777778), 'mark': ''}), dict ({'name': '34Alp Aqr', 'Vmag': 2.96, 'alias': 'BD-01 4246;SAO145862', 'RA': 22.09638888888889, 'DE': 0.3197222222222222, 'mark': ''}), dict ({'name': '43The Aqr', 'Vmag': 4.16, 'alias': 'BD-08 5845;SAO145991', 'RA': 22.280555555555555, 'DE': -(6.216666666666667), 'mark': ''}), dict ({'name': '57Sig Aqr', 'Vmag': 4.82, 'alias': 'BD-11 5850;SAO165134', 'RA': 22.51077777777778, 'DE': -(9.321944444444446), 'mark': ''}), dict ({'name': '71Tau2Aqr', 'Vmag': 4.01, 'alias': 'BD-14 6354;SAO165321', 'RA': 22.826527777777777, 'DE': -(12.407499999999999), 'mark': ''}), dict ({'name': '76Del Aqr', 'Vmag': 3.27, 'alias': 'BD-16 6173;SAO165375', 'RA': 22.910833333333333, 'DE': -(14.179166666666667), 'mark': ''}), dict ({'name': '88    Aqr', 'Vmag': 3.66, 'alias': 'BD-21 6368;SAO191683', 'RA': 23.157444444444444, 'DE': -(20.8275), 'mark': ''})]), list ([dict ({'name': '43The Aqr', 'Vmag': 4.16, 'alias': 'BD-08 5845;SAO145991', 'RA': 22.280555555555555, 'DE': -(6.216666666666667), 'mark': ''}), dict ({'name': '38    Aqr', 'Vmag': 5.46, 'alias': 'BD-12 6196;SAO164910', 'RA': 22.177083333333336, 'DE': -(10.434999999999999), 'mark': ''}), dict ({'name': '33Iot Aqr', 'Vmag': 4.27, 'alias': 'BD-14 6209;SAO164861', 'RA': 22.107277777777778, 'DE': -(12.130277777777778), 'mark': ''})]), list ([dict ({'name': '34Alp Aqr', 'Vmag': 2.96, 'alias': 'BD-01 4246;SAO145862', 'RA': 22.09638888888889, 'DE': 0.3197222222222222, 'mark': ''}), dict ({'name': '22Bet Aqr', 'Vmag': 2.91, 'alias': 'BD-06 5770;SAO145457', 'RA': 21.525972222222222, 'DE': -(4.428888888888889), 'mark': ''}), dict ({'name': '6Mu  Aqr', 'Vmag': 4.73, 'alias': 'BD-09 5598;SAO144895', 'RA': 20.877555555555556, 'DE': -(7.016666666666667), 'mark': ''}), dict ({'name': '2Eps Aqr', 'Vmag': 3.77, 'alias': 'BD-10 5506;SAO144810', 'RA': 20.794611111111113, 'DE': -(8.504166666666668), 'mark': ''})])])}), dict ({'name': '鲸鱼座', 'lines': list ([list ([dict ({'name': '8Iot Cet', 'Vmag': 3.56, 'alias': 'BD-09   48;SAO128694', 'RA': 0.32380555555555557, 'DE': -(7.176111111111111), 'mark': ''}), dict ({'name': '16Bet Cet', 'Vmag': 2.04, 'alias': 'BD-18  115;SAO147420', 'RA': 0.7265, 'DE': -(16.013333333333332), 'mark': ''}), dict ({'name': '31Eta Cet', 'Vmag': 3.45, 'alias': 'BD-10  240;SAO147632', 'RA': 1.1431666666666667, 'DE': -(9.817777777777778), 'mark': ''}), dict ({'name': '45The Cet', 'Vmag': 3.6, 'alias': 'BD-08  244;SAO129274', 'RA': 1.400388888888889, 'DE': -(7.816666666666666), 'mark': ''}), dict ({'name': '55Zet Cet', 'Vmag': 3.73, 'alias': 'BD-11  359;SAO148059', 'RA': 1.8576666666666668, 'DE': -(9.665), 'mark': ''}), dict ({'name': '72Rho Cet', 'Vmag': 4.89, 'alias': 'BD-12  451;SAO148385', 'RA': 2.4324999999999997, 'DE': -(11.709444444444445), 'mark': ''}), dict ({'name': '83Eps Cet', 'Vmag': 4.84, 'alias': 'BD-12  501;SAO148528', 'RA': 2.6593888888888886, 'DE': -(10.127777777777776), 'mark': ''}), dict ({'name': '68Omi Cet', 'Vmag': 3.04, 'alias': 'BD-03  353;SAO129825', 'RA': 2.3224166666666664, 'DE': -(1.0225), 'mark': ''}), dict ({'name': '82Del Cet', 'Vmag': 4.07, 'alias': 'BD-00  406;SAO110665', 'RA': 2.6580555555555554, 'DE': 0.3286111111111111, 'mark': ''}), dict ({'name': '86Gam Cet', 'Vmag': 3.47, 'alias': 'BD+02  422;SAO110707', 'RA': 2.7216666666666667, 'DE': 3.2358333333333333, 'mark': ''}), dict ({'name': '92Alp Cet', 'Vmag': 2.53, 'alias': 'BD+03  419;SAO110920', 'RA': 3.038, 'DE': 4.089722222222222, 'mark': ''}), dict ({'name': '91Lam Cet', 'Vmag': 4.7, 'alias': 'BD+08  455;SAO110889', 'RA': 2.99525, 'DE': 8.9075, 'mark': ''}), dict ({'name': '87Mu  Cet', 'Vmag': 4.27, 'alias': 'BD+09  359;SAO110723', 'RA': 2.7490277777777776, 'DE': 10.114166666666666, 'mark': ''}), dict ({'name': '73Xi 2Cet', 'Vmag': 4.28, 'alias': 'BD+07  388;SAO110543', 'RA': 2.4693055555555556, 'DE': 8.459999999999999, 'mark': ''}), dict ({'name': '65Xi 1Cet', 'Vmag': 4.37, 'alias': 'BD+08  345;SAO110408', 'RA': 2.216666666666667, 'DE': 8.846666666666668, 'mark': ''})]), list ([dict ({'name': '73Xi 2Cet', 'Vmag': 4.28, 'alias': 'BD+07  388;SAO110543', 'RA': 2.4693055555555556, 'DE': 8.459999999999999, 'mark': ''}), dict ({'name': '78Nu  Cet', 'Vmag': 4.86, 'alias': 'BD+04  418;SAO110635', 'RA': 2.597916666666667, 'DE': 5.593333333333333, 'mark': ''}), dict ({'name': '86Gam Cet', 'Vmag': 3.47, 'alias': 'BD+02  422;SAO110707', 'RA': 2.7216666666666667, 'DE': 3.2358333333333333, 'mark': ''})]), list ([dict ({'name': '16Bet Cet', 'Vmag': 2.04, 'alias': 'BD-18  115;SAO147420', 'RA': 0.7265, 'DE': -(16.013333333333332), 'mark': ''}), dict ({'name': '52Tau Cet', 'Vmag': 3.5, 'alias': 'BD-16  295;SAO147986', 'RA': 1.7344722222222222, 'DE': -(14.0625), 'mark': ''}), dict ({'name': '76Sig Cet', 'Vmag': 4.75, 'alias': 'BD-15  449;SAO148445', 'RA': 2.534777777777778, 'DE': -(14.75527777777778), 'mark': ''}), dict ({'name': '89Pi  Cet', 'Vmag': 4.25, 'alias': 'BD-14  519;SAO148575', 'RA': 2.735388888888889, 'DE': -(12.141388888888889), 'mark': ''}), dict ({'name': '83Eps Cet', 'Vmag': 4.84, 'alias': 'BD-12  501;SAO148528', 'RA': 2.6593888888888886, 'DE': -(10.127777777777776), 'mark': ''})])])}), dict ({'name': '乌鸦座', 'lines': list ([list ([dict ({'name': '1Alp Crv', 'Vmag': 4.02, 'alias': 'CD-2410174;SAO180505', 'RA': 12.140222222222222, 'DE': -(23.271111111111114), 'mark': ''}), dict ({'name': '2Eps Crv', 'Vmag': 3.0, 'alias': 'BD-21 3487;SAO180531', 'RA': 12.16875, 'DE': -(21.380277777777778), 'mark': ''}), dict ({'name': '4Gam Crv', 'Vmag': 2.59, 'alias': 'BD-16 3424;SAO157176', 'RA': 12.263444444444444, 'DE': -(16.458055555555553), 'mark': ''}), dict ({'name': '7Del Crv', 'Vmag': 2.95, 'alias': 'BD-15 3482;SAO157323', 'RA': 12.49775, 'DE': -(15.484444444444444), 'mark': ''}), dict ({'name': '8Eta Crv', 'Vmag': 4.31, 'alias': 'BD-15 3489;SAO157345', 'RA': 12.5345, 'DE': -(15.803888888888888), 'mark': ''})]), list ([dict ({'name': '2Eps Crv', 'Vmag': 3.0, 'alias': 'BD-21 3487;SAO180531', 'RA': 12.16875, 'DE': -(21.380277777777778), 'mark': ''}), dict ({'name': '9Bet Crv', 'Vmag': 2.65, 'alias': 'BD-22 3401;SAO180915', 'RA': 12.57311111111111, 'DE': -(22.603333333333335), 'mark': ''}), dict ({'name': '7Del Crv', 'Vmag': 2.95, 'alias': 'BD-15 3482;SAO157323', 'RA': 12.49775, 'DE': -(15.484444444444444), 'mark': ''})])])}), dict ({'name': '巨爵座', 'lines': list ([list ([dict ({'name': '12Del Crt', 'Vmag': 3.56, 'alias': 'BD-13 3345;SAO156605', 'RA': 11.32236111111111, 'DE': -(13.221388888888889), 'mark': ''}), dict ({'name': '15Gam Crt', 'Vmag': 4.08, 'alias': 'BD-16 3244;SAO156661', 'RA': 11.414694444444445, 'DE': -(16.316111111111113), 'mark': ''}), dict ({'name': '27Zet Crt', 'Vmag': 4.73, 'alias': 'BD-17 3460;SAO156869', 'RA': 11.746055555555555, 'DE': -(17.649166666666666), 'mark': ''}), dict ({'name': '30Eta Crt', 'Vmag': 5.18, 'alias': 'BD-16 3358;SAO156988', 'RA': 11.933583333333333, 'DE': -(16.84916666666667), 'mark': ''}), dict ({'name': '21The Crt', 'Vmag': 4.7, 'alias': 'BD-08 3202;SAO138296', 'RA': 11.61136111111111, 'DE': -(8.197777777777777), 'mark': ''}), dict ({'name': '14Eps Crt', 'Vmag': 4.83, 'alias': 'BD-10 3260;SAO156658', 'RA': 11.410166666666667, 'DE': -(9.140555555555556), 'mark': ''}), dict ({'name': '12Del Crt', 'Vmag': 3.56, 'alias': 'BD-13 3345;SAO156605', 'RA': 11.32236111111111, 'DE': -(13.221388888888889), 'mark': ''}), dict ({'name': '7Alp Crt', 'Vmag': 4.08, 'alias': 'BD-17 3273;SAO156375', 'RA': 10.99625, 'DE': -(17.70111111111111), 'mark': ''}), dict ({'name': '11Bet Crt', 'Vmag': 4.48, 'alias': 'BD-22 3095;SAO179624', 'RA': 11.194305555555555, 'DE': -(21.174166666666668), 'mark': ''}), dict ({'name': '15Gam Crt', 'Vmag': 4.08, 'alias': 'BD-16 3244;SAO156661', 'RA': 11.414694444444445, 'DE': -(16.316111111111113), 'mark': ''})])])}), dict ({'name': '摩羯座', 'lines': list ([list ([dict ({'name': '49Del Cap', 'Vmag': 2.87, 'alias': 'BD-16 5943;SAO164644', 'RA': 21.784000000000002, 'DE': -(15.872777777777777), 'mark': ''}), dict ({'name': '40Gam Cap', 'Vmag': 3.68, 'alias': 'BD-17 6340;SAO164560', 'RA': 21.668194444444445, 'DE': -(15.337777777777777), 'mark': ''}), dict ({'name': '32Iot Cap', 'Vmag': 4.28, 'alias': 'BD-17 6245;SAO164346', 'RA': 21.37077777777778, 'DE': -(15.165555555555555), 'mark': ''}), dict ({'name': '34Zet Cap', 'Vmag': 3.74, 'alias': 'BD-2215388;SAO190341', 'RA': 21.444444444444446, 'DE': -(21.588611111111113), 'mark': ''}), dict ({'name': '23The Cap', 'Vmag': 4.07, 'alias': 'BD-17 6174;SAO164132', 'RA': 21.09911111111111, 'DE': -(16.767222222222223), 'mark': ''}), dict ({'name': '9Bet Cap', 'Vmag': 3.08, 'alias': 'BD-15 5629;SAO163481', 'RA': 20.350194444444448, 'DE': -(13.21861111111111), 'mark': ''}), dict ({'name': '16Psi Cap', 'Vmag': 4.14, 'alias': 'CD-2515018;SAO189664', 'RA': 20.76825, 'DE': -(24.729166666666668), 'mark': ''})]), list ([dict ({'name': '9Bet Cap', 'Vmag': 3.08, 'alias': 'BD-15 5629;SAO163481', 'RA': 20.350194444444448, 'DE': -(13.21861111111111), 'mark': ''}), dict ({'name': '6Alp2Cap', 'Vmag': 3.57, 'alias': 'BD-12 5685;SAO163427', 'RA': 20.300916666666666, 'DE': -(11.455277777777779), 'mark': ''})]), list ([dict ({'name': '32Iot Cap', 'Vmag': 4.28, 'alias': 'BD-17 6245;SAO164346', 'RA': 21.37077777777778, 'DE': -(15.165555555555555), 'mark': ''}), dict ({'name': '23The Cap', 'Vmag': 4.07, 'alias': 'BD-17 6174;SAO164132', 'RA': 21.09911111111111, 'DE': -(16.767222222222223), 'mark': ''})]), list ([dict ({'name': '23The Cap', 'Vmag': 4.07, 'alias': 'BD-17 6174;SAO164132', 'RA': 21.09911111111111, 'DE': -(16.767222222222223), 'mark': ''}), dict ({'name': '18Ome Cap', 'Vmag': 4.11, 'alias': 'CD-2715082;SAO189781', 'RA': 20.863694444444445, 'DE': -(25.08083333333333), 'mark': ''})])])}), dict ({'name': '大犬座', 'lines': list ([list ([dict ({'name': '31Eta CMa', 'Vmag': 2.45, 'alias': 'CD-29 4328;SAO173651', 'RA': 7.401583333333334, 'DE': -(28.696944444444444), 'mark': ''}), dict ({'name': '28Ome CMa', 'Vmag': 3.85, 'alias': 'CD-26 4073;SAO173282', 'RA': 7.246861111111111, 'DE': -(25.227222222222224), 'mark': ''}), dict ({'name': '25Del CMa', 'Vmag': 1.84, 'alias': 'CD-26 3916;SAO173047', 'RA': 7.139861111111111, 'DE': -(25.606666666666666), 'mark': ''}), dict ({'name': '22Sig CMa', 'Vmag': 3.47, 'alias': 'CD-27 3544;SAO172797', 'RA': 7.028638888888889, 'DE': -(26.065277777777776), 'mark': ''}), dict ({'name': '21Eps CMa', 'Vmag': 1.5, 'alias': 'CD-28 3666;SAO172676', 'RA': 6.977083333333334, 'DE': -(27.02777777777778), 'mark': ''}), dict ({'name': '13Kap CMa', 'Vmag': 3.96, 'alias': 'CD-32 3404;SAO197258', 'RA': 6.830694444444444, 'DE': -(31.49138888888889), 'mark': ''})]), list ([dict ({'name': '25Del CMa', 'Vmag': 1.84, 'alias': 'CD-26 3916;SAO173047', 'RA': 7.139861111111111, 'DE': -(25.606666666666666), 'mark': ''}), dict ({'name': '24Omi2CMa', 'Vmag': 3.02, 'alias': 'CD-23 4797;SAO172839', 'RA': 7.050416666666666, 'DE': -(22.166666666666668), 'mark': ''}), dict ({'name': '9Alp CMa', 'Vmag': -(1.46), 'alias': 'BD-16 1591;SAO151881', 'RA': 6.752472222222222, 'DE': -(15.283888888888889), 'mark': tuple (['天狼', 'Sirius'])}), dict ({'name': '7Nu 2CMa', 'Vmag': 3.95, 'alias': 'BD-19 1502;SAO151702', 'RA': 6.6113888888888885, 'DE': -(18.74416666666667), 'mark': ''}), dict ({'name': '', 'Vmag': 6.91, 'alias': 'CD-23 4553;SAO172546', 'RA': 6.903611111111111, 'DE': -(22.071666666666665), 'mark': ''}), dict ({'name': '22Sig CMa', 'Vmag': 3.47, 'alias': 'CD-27 3544;SAO172797', 'RA': 7.028638888888889, 'DE': -(26.065277777777776), 'mark': ''})]), list ([dict ({'name': '21Eps CMa', 'Vmag': 1.5, 'alias': 'CD-28 3666;SAO172676', 'RA': 6.977083333333334, 'DE': -(27.02777777777778), 'mark': ''}), dict ({'name': '1Zet CMa', 'Vmag': 3.02, 'alias': 'CD-30 3038;SAO196698', 'RA': 6.338555555555555, 'DE': -(29.936666666666667), 'mark': ''})]), list ([dict ({'name': '2Bet CMa', 'Vmag': 1.98, 'alias': 'BD-17 1467;SAO151428', 'RA': 6.378333333333333, 'DE': -(16.04416666666667), 'mark': tuple (['军市一', 'Mirzam'])}), dict ({'name': '7Nu 2CMa', 'Vmag': 3.95, 'alias': 'BD-19 1502;SAO151702', 'RA': 6.6113888888888885, 'DE': -(18.74416666666667), 'mark': ''}), dict ({'name': '5Xi 2CMa', 'Vmag': 4.54, 'alias': 'BD-22 1458;SAO171982', 'RA': 6.5842777777777775, 'DE': -(21.03527777777778), 'mark': ''})]), list ([dict ({'name': '9Alp CMa', 'Vmag': -(1.46), 'alias': 'BD-16 1591;SAO151881', 'RA': 6.752472222222222, 'DE': -(15.283888888888889), 'mark': tuple (['天狼', 'Sirius'])}), dict ({'name': '20Iot CMa', 'Vmag': 4.37, 'alias': 'BD-16 1661;SAO152126', 'RA': 6.935611111111111, 'DE': -(16.945833333333333), 'mark': ''}), dict ({'name': '23Gam CMa', 'Vmag': 4.12, 'alias': 'BD-15 1625;SAO152303', 'RA': 7.0626388888888885, 'DE': -(14.366666666666667), 'mark': ''}), dict ({'name': '14The CMa', 'Vmag': 4.07, 'alias': 'BD-11 1681;SAO152071', 'RA': 6.903166666666667, 'DE': -(11.961388888888889), 'mark': ''}), dict ({'name': '20Iot CMa', 'Vmag': 4.37, 'alias': 'BD-16 1661;SAO152126', 'RA': 6.935611111111111, 'DE': -(16.945833333333333), 'mark': ''})])])}), dict ({'name': '长蛇座', 'lines': list ([list ([dict ({'name': '46Gam Hya', 'Vmag': 3.0, 'alias': 'BD-22 3554;SAO181543', 'RA': 13.315361111111113, 'DE': -(22.828333333333333), 'mark': ''}), dict ({'name': '45Psi Hya', 'Vmag': 4.95, 'alias': 'BD-22 3515;SAO181410', 'RA': 13.150916666666667, 'DE': -(22.881944444444443), 'mark': ''}), dict ({'name': 'Bet Hya', 'Vmag': 4.28, 'alias': 'CD-33 8018;SAO202901', 'RA': 11.881833333333335, 'DE': -(32.091944444444444), 'mark': ''}), dict ({'name': 'Xi  Hya', 'Vmag': 3.54, 'alias': 'CD-31 9083;SAO202558', 'RA': 11.550027777777778, 'DE': -(30.14222222222222), 'mark': ''}), dict ({'name': 'Nu  Hya', 'Vmag': 3.11, 'alias': 'BD-15 3138;SAO156256', 'RA': 10.827083333333333, 'DE': -(15.806388888888888), 'mark': ''}), dict ({'name': '42Mu  Hya', 'Vmag': 3.81, 'alias': 'BD-16 3052;SAO155980', 'RA': 10.434833333333334, 'DE': -(15.163611111111111), 'mark': ''}), dict ({'name': '41Lam Hya', 'Vmag': 3.61, 'alias': 'BD-11 2820;SAO155785', 'RA': 10.176472222222221, 'DE': -(11.645833333333334), 'mark': ''}), dict ({'name': '39Ups1Hya', 'Vmag': 4.12, 'alias': 'BD-14 2963;SAO155542', 'RA': 9.857972222222221, 'DE': -(13.153333333333332), 'mark': ''}), dict ({'name': '30Alp Hya', 'Vmag': 1.98, 'alias': 'BD-08 2680;SAO136871', 'RA': 9.459777777777777, 'DE': -(7.341388888888889), 'mark': tuple (['星宿一', 'Alphard'])}), dict ({'name': '31Tau1Hya', 'Vmag': 4.6, 'alias': 'BD-02 2901;SAO136895', 'RA': 9.485805555555554, 'DE': -(1.2311111111111113), 'mark': ''}), dict ({'name': '32Tau2Hya', 'Vmag': 4.57, 'alias': 'BD-00 2211;SAO136932', 'RA': 9.533027777777779, 'DE': -(0.815), 'mark': ''}), dict ({'name': '22The Hya', 'Vmag': 3.88, 'alias': 'BD+02 2167;SAO117527', 'RA': 9.239416666666665, 'DE': 2.3141666666666665, 'mark': ''}), dict ({'name': '16Zet Hya', 'Vmag': 3.11, 'alias': 'BD+06 2060;SAO117264', 'RA': 8.923222222222222, 'DE': 5.945555555555556, 'mark': ''}), dict ({'name': '13Rho Hya', 'Vmag': 4.36, 'alias': 'BD+06 2040;SAO117146', 'RA': 8.807222222222222, 'DE': 5.837777777777777, 'mark': ''}), dict ({'name': '7Eta Hya', 'Vmag': 4.3, 'alias': 'BD+03 2039;SAO117050', 'RA': 8.720416666666667, 'DE': 3.3986111111111112, 'mark': ''}), dict ({'name': '5Sig Hya', 'Vmag': 4.44, 'alias': 'BD+03 2026;SAO116988', 'RA': 8.645944444444444, 'DE': 3.341388888888889, 'mark': ''}), dict ({'name': '4Del Hya', 'Vmag': 4.16, 'alias': 'BD+06 2001;SAO116965', 'RA': 8.627611111111111, 'DE': 5.703611111111111, 'mark': ''}), dict ({'name': '11Eps Hya', 'Vmag': 3.38, 'alias': 'BD+06 2036;SAO117112', 'RA': 8.779611111111112, 'DE': 6.4188888888888895, 'mark': ''}), dict ({'name': '13Rho Hya', 'Vmag': 4.36, 'alias': 'BD+06 2040;SAO117146', 'RA': 8.807222222222222, 'DE': 5.837777777777777, 'mark': ''})])])})]);
					__pragma__ ('<all>')
						__all__.CONSTELLATIONS = CONSTELLATIONS;
						__all__.__name__ = __name__;
					__pragma__ ('</all>')
				}
			}
		}
	);

	(function () {
		var __name__ = '__main__';
		var sin = __init__ (__world__.math).sin;
		var cos = __init__ (__world__.math).cos;
		var asin = __init__ (__world__.math).asin;
		var acos = __init__ (__world__.math).acos;
		var pi = __init__ (__world__.math).pi;
		var CONSTELLATIONS = __init__ (__world__.stardata).CONSTELLATIONS;
		var LATITUDE_OF_NORTHERN_TROPIC = (23.43673 / 180) * pi;
		var LATITUDE_OF_SOUTHERN_TROPIC = (-(23.43673) / 180) * pi;
		var DISK_EXTENSION = 0.25;
		var DISK_TIMERING_THICKNESS = 0.2;
		var SOLAR_TERMS = list (['立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪', '冬至', '小寒', '大寒']);
		var STARMARK_ADJUST = dict ({'50Alp UMa': tuple ([0, +(0.15)]), '85Eta UMa': tuple ([0, -(0.03)]), '77Eps UMa': tuple ([0, -(0.03)]), '32Alp Leo': tuple ([+(0.08), -(0.03)]), '58Alp Ori': tuple ([-(0.13), +(0.05)]), '24Gam Ori': tuple ([+(0.12), +(0.05)]), '19Bet Ori': tuple ([+(0.1), +(0.05)]), '46Eps Ori': tuple ([-(0.12), +(0.03)]), '16Alp Boo': tuple ([0, -(0.03)]), '3Alp Lyr': tuple ([0.13, -(0.03)]), '53Alp Aql': tuple ([-(0.13), +(0.02)]), '13Alp Aur': tuple ([+(0.13), +(0.18)]), '34Bet Aur': tuple ([-(0.22), 0]), '66Alp Gem': tuple ([-(0.22), +(0.1)]), '78Bet Gem': tuple ([-(0.2), +(0.06)]), '24Gam Gem': tuple ([+(0.14), +(0.05)]), '112Bet Tau': tuple ([-(0.18), +(0.07)]), '9Alp CMa': tuple ([+(0.02), +(0.1)]), '2Bet CMa': tuple ([+(0.04), +(0.01)]), '30Alp Hya': tuple ([+(0.05), 0])});
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
			var d = (x1 - x0) / (n - 1);
			for (var i = 0; i < n; i++) {
				ret.append (t);
				t += d;
			}
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
				svg.polyline (svgPoints, 'tympan-mesh');
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
				svg.polyline (svgPoints, 'tympan-mesh');
			}
			var drawR1 = projected_r_max + DISK_EXTENSION;
			var drawR2 = drawR1 + DISK_TIMERING_THICKNESS;
			var drawRT = drawR1 + DISK_TIMERING_THICKNESS * 0.25;
			svg.circle (0, 0, drawR1);
			svg.circle (0, 0, drawR2);
			for (var i = 0; i < 24; i++) {
				var theta = ((i * 15) / 180) * pi;
				var endVector1 = tuple ([drawR1 * cos (theta), drawR1 * sin (theta)]);
				var endVector2 = tuple ([drawR2 * cos (theta), drawR2 * sin (theta)]);
				svg.line (endVector1 [0], endVector1 [1], endVector2 [0], endVector2 [1]);
				var textAngle = (theta + pi) + pi / 24;
				svg._raw ('\n            <text transform="translate({},{}) rotate({})" text-anchor="middle" textLength="1.5em">{}</text>\n        '.format (svg.ratio (drawRT * cos (textAngle)), svg.ratio (drawRT * sin (textAngle)), ((textAngle + pi / 2) / pi) * 180, i));
			}
			svg._raw ('\n        <text x="0" y="{}" transform="rotate(90)" text-anchor="middle">\n            <tspan class="tympan-text1" x="0" dy="1.2em"></tspan>\n            <tspan class="tympan-text2" x="0" dy="1.2em"></tspan>\n        </text>\n    '.format (svg.ratio (2.2)));
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
			var outerR1 = projected_r_max;
			var outerR2 = outerR1 + DISK_EXTENSION;
			var outerRM = (outerR1 + outerR2) / 2;
			var outerRT = outerR1 + DISK_EXTENSION * 0.25;
			var solarTermsIndex = 0;
			for (var t = 0; t < 24; t++) {
				var theta = ((pi / 12) * t + pi / 2) - (3 * pi) / 12;
				var endVector1 = tuple ([outerR1 * cos (theta), outerR1 * sin (theta)]);
				if (__mod__ (t, 2) == 1) {
					var endVector2 = tuple ([outerR2 * cos (theta), outerR2 * sin (theta)]);
				}
				else {
					var endVector2 = tuple ([outerRM * cos (theta), outerRM * sin (theta)]);
				}
				svg.line (endVector1 [0], endVector1 [1], endVector2 [0], endVector2 [1]);
				var textAngle = 2 * pi - theta;
				svg._raw ('\n            <text transform="translate({},{}) rotate({})" text-anchor="middle" textLength="2.5em">{}</text>\n        '.format (svg.ratio (outerRT * cos (textAngle)), svg.ratio (outerRT * sin (textAngle)), ((textAngle + pi / 2) / pi) * 180, SOLAR_TERMS [t]));
			}
			var theta = (3 * pi) / 2;
			var R = getRFromEcliptic (theta);
			svg._raw ('\n    <g transform="translate({} 0)">\n\n    <g class="sun-arrow-1">\n    <circle cx="0" cy="0" r="{}" stroke-width="10" visibility="visible" opacity="0.4" fill="none"/>\n    <circle cx="0" cy="-{}" r="5" stroke-width="0" fill="red" />\n    <circle cx="0" cy="-{}" r="9" stroke-width="1" fill="none" />\n    </g>\n\n    </g>\n\n    <g class="sun-arrow-2">\n        <circle cx="0" cy="-{}" r="5" stroke-width="0" fill="red" />\n        <circle cx="0" cy="-{}" r="9" stroke-width="1" fill="none" />\n    </g>\n    '.format (svg.ratio (projected_ecliptic_center), svg.ratio (projected_ecliptic_radius), svg.ratio (projected_ecliptic_radius), svg.ratio (projected_ecliptic_radius), svg.ratio (projected_r_max + DISK_EXTENSION), svg.ratio (projected_r_max + DISK_EXTENSION)));
			drawStars (svg);
			return svg.toString ();
		};
		var drawStars = function (reteSVG) {
			var svg = reteSVG;
			var drawnStars = list ([]);
			var drawStar = function (star) {
				if (__in__ (star ['name'], drawnStars)) {
					return ;
				}
				var projectRA = (2 * pi - ((star ['RA'] * 15) / 180) * pi) + (pi * 3) / 2;
				var point = projectionLatlng (tuple ([(star ['DE'] / 180) * pi, projectRA]));
				var Vmag = star ['Vmag'];
				if (Vmag <= 0) {
					var size = 0.04;
				}
				else if (Vmag <= 1) {
					var size = 0.03;
				}
				else if (Vmag <= 2) {
					var size = 0.02;
				}
				else if (Vmag < 3) {
					var size = 0.01;
				}
				else {
					return ;
				}
				svg.circle (point [0], point [1], size, 'star');
				if (star ['mark']) {
					var deltaRA = 0;
					var deltaDE = -(0.03);
					if (__in__ (star ['name'], STARMARK_ADJUST)) {
						deltaRA += STARMARK_ADJUST [star ['name']] [0];
						deltaDE += STARMARK_ADJUST [star ['name']] [1];
					}
					var pointText = projectionLatlng (tuple ([(star ['DE'] / 180) * pi + deltaDE, projectRA + deltaRA]));
					var starname = star ['mark'] [0];
					svg._raw ('<text\n                transform="translate({},{}) rotate({})"\n                class="starname"\n                text-anchor="middle">{}</text>'.format (svg.ratio (pointText [0]), svg.ratio (pointText [1]), (((projectRA + deltaRA) + pi / 2) / pi) * 180, starname));
					print (starname, star ['name']);
				}
				drawnStars.append (star ['name']);
			};
			var drawLine = function (star0, star1) {
				var n = 10;
				var ra0 = ((star0 ['RA'] * 15) / 180) * pi;
				var dec0 = (star0 ['DE'] / 180) * pi;
				var ra1 = ((star1 ['RA'] * 15) / 180) * pi;
				var dec1 = (star1 ['DE'] / 180) * pi;
				if (ra0 > ra1) {
					var t = dec1;
					var dec1 = dec0;
					var dec0 = t;
					var t = ra1;
					var ra1 = ra0;
					var ra0 = t;
				}
				if (ra1 - ra0 > pi) {
					ra0 += 2 * pi;
					var t = dec1;
					var dec1 = dec0;
					var dec0 = t;
					var t = ra1;
					var ra1 = ra0;
					var ra0 = t;
				}
				var ra_n = linspace (ra0, ra1, n);
				var dec_n = linspace (dec0, dec1, n);
				var points = list ([]);
				for (var i = 0; i < n; i++) {
					var __left0__ = tuple ([ra_n [i], dec_n [i]]);
					var ra_i = __left0__ [0];
					var dec_i = __left0__ [1];
					if (dec_i < LATITUDE_OF_SOUTHERN_TROPIC) {
						continue;
					}
					var point = projectionLatlng (tuple ([dec_i, (2 * pi - ra_i) + (pi * 3) / 2]));
					points.append (point);
				}
				svg.polyline (points, 'constellation-line');
			};
			for (var constellation of CONSTELLATIONS) {
				for (var line of constellation ['lines']) {
					for (var i = 0; i < len (line) - 1; i++) {
						drawStar (line [i]);
						drawLine (line [i], line [i + 1]);
						drawStar (line [i + 1]);
					}
				}
			}
			return svg;
		};
		__pragma__ ('<use>' +
			'math' +
			'stardata' +
		'</use>')
		__pragma__ ('<all>')
			__all__.CONSTELLATIONS = CONSTELLATIONS;
			__all__.DISK_EXTENSION = DISK_EXTENSION;
			__all__.DISK_TIMERING_THICKNESS = DISK_TIMERING_THICKNESS;
			__all__.LATITUDE_OF_NORTHERN_TROPIC = LATITUDE_OF_NORTHERN_TROPIC;
			__all__.LATITUDE_OF_SOUTHERN_TROPIC = LATITUDE_OF_SOUTHERN_TROPIC;
			__all__.Rete = Rete;
			__all__.SOLAR_TERMS = SOLAR_TERMS;
			__all__.STARMARK_ADJUST = STARMARK_ADJUST;
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
			__all__.drawStars = drawStars;
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
    return __all__;
}
