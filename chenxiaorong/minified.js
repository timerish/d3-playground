(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND",
                f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports,
            function(e) {
                var n = t[o][1][e];
                return s(n ? n: e)
            },
            l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1 : [function(require, module, exports) { !
        function() {
            var d3 = {
                version: "3.5.12"
            };
            var d3_arraySlice = [].slice,
            d3_array = function(list) {
                return d3_arraySlice.call(list)
            };
            var d3_document = this.document;
            function d3_documentElement(node) {
                return node && (node.ownerDocument || node.document || node).documentElement
            }
            function d3_window(node) {
                return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView)
            }
            if (d3_document) {
                try {
                    d3_array(d3_document.documentElement.childNodes)[0].nodeType
                } catch(e) {
                    d3_array = function(list) {
                        var i = list.length,
                        array = new Array(i);
                        while (i--) array[i] = list[i];
                        return array
                    }
                }
            }
            if (!Date.now) Date.now = function() {
                return + new Date
            };
            if (d3_document) {
                try {
                    d3_document.createElement("DIV").style.setProperty("opacity", 0, "")
                } catch(error) {
                    var d3_element_prototype = this.Element.prototype,
                    d3_element_setAttribute = d3_element_prototype.setAttribute,
                    d3_element_setAttributeNS = d3_element_prototype.setAttributeNS,
                    d3_style_prototype = this.CSSStyleDeclaration.prototype,
                    d3_style_setProperty = d3_style_prototype.setProperty;
                    d3_element_prototype.setAttribute = function(name, value) {
                        d3_element_setAttribute.call(this, name, value + "")
                    };
                    d3_element_prototype.setAttributeNS = function(space, local, value) {
                        d3_element_setAttributeNS.call(this, space, local, value + "")
                    };
                    d3_style_prototype.setProperty = function(name, value, priority) {
                        d3_style_setProperty.call(this, name, value + "", priority)
                    }
                }
            }
            d3.ascending = d3_ascending;
            function d3_ascending(a, b) {
                return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN
            }
            d3.descending = function(a, b) {
                return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN
            };
            d3.min = function(array, f) {
                var i = -1,
                n = array.length,
                a, b;
                if (arguments.length === 1) {
                    while (++i < n) if ((b = array[i]) != null && b >= b) {
                        a = b;
                        break
                    }
                    while (++i < n) if ((b = array[i]) != null && a > b) a = b
                } else {
                    while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
                        a = b;
                        break
                    }
                    while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b
                }
                return a
            };
            d3.max = function(array, f) {
                var i = -1,
                n = array.length,
                a, b;
                if (arguments.length === 1) {
                    while (++i < n) if ((b = array[i]) != null && b >= b) {
                        a = b;
                        break
                    }
                    while (++i < n) if ((b = array[i]) != null && b > a) a = b
                } else {
                    while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
                        a = b;
                        break
                    }
                    while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b
                }
                return a
            };
            d3.extent = function(array, f) {
                var i = -1,
                n = array.length,
                a, b, c;
                if (arguments.length === 1) {
                    while (++i < n) if ((b = array[i]) != null && b >= b) {
                        a = c = b;
                        break
                    }
                    while (++i < n) if ((b = array[i]) != null) {
                        if (a > b) a = b;
                        if (c < b) c = b
                    }
                } else {
                    while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
                        a = c = b;
                        break
                    }
                    while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
                        if (a > b) a = b;
                        if (c < b) c = b
                    }
                }
                return [a, c]
            };
            function d3_number(x) {
                return x === null ? NaN: +x
            }
            function d3_numeric(x) {
                return ! isNaN(x)
            }
            d3.sum = function(array, f) {
                var s = 0,
                n = array.length,
                a, i = -1;
                if (arguments.length === 1) {
                    while (++i < n) if (d3_numeric(a = +array[i])) s += a
                } else {
                    while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a
                }
                return s
            };
            d3.mean = function(array, f) {
                var s = 0,
                n = array.length,
                a, i = -1,
                j = n;
                if (arguments.length === 1) {
                    while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a;
                    else--j
                } else {
                    while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a;
                    else--j
                }
                if (j) return s / j
            };
            d3.quantile = function(values, p) {
                var H = (values.length - 1) * p + 1,
                h = Math.floor(H),
                v = +values[h - 1],
                e = H - h;
                return e ? v + e * (values[h] - v) : v
            };
            d3.median = function(array, f) {
                var numbers = [],
                n = array.length,
                a,
                i = -1;
                if (arguments.length === 1) {
                    while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a)
                } else {
                    while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a)
                }
                if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5)
            };
            d3.variance = function(array, f) {
                var n = array.length,
                m = 0,
                a, d, s = 0,
                i = -1,
                j = 0;
                if (arguments.length === 1) {
                    while (++i < n) {
                        if (d3_numeric(a = d3_number(array[i]))) {
                            d = a - m;
                            m += d / ++j;
                            s += d * (a - m)
                        }
                    }
                } else {
                    while (++i < n) {
                        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
                            d = a - m;
                            m += d / ++j;
                            s += d * (a - m)
                        }
                    }
                }
                if (j > 1) return s / (j - 1)
            };
            d3.deviation = function() {
                var v = d3.variance.apply(this, arguments);
                return v ? Math.sqrt(v) : v
            };
            function d3_bisector(compare) {
                return {
                    left: function(a, x, lo, hi) {
                        if (arguments.length < 3) lo = 0;
                        if (arguments.length < 4) hi = a.length;
                        while (lo < hi) {
                            var mid = lo + hi >>> 1;
                            if (compare(a[mid], x) < 0) lo = mid + 1;
                            else hi = mid
                        }
                        return lo
                    },
                    right: function(a, x, lo, hi) {
                        if (arguments.length < 3) lo = 0;
                        if (arguments.length < 4) hi = a.length;
                        while (lo < hi) {
                            var mid = lo + hi >>> 1;
                            if (compare(a[mid], x) > 0) hi = mid;
                            else lo = mid + 1
                        }
                        return lo
                    }
                }
            }
            var d3_bisect = d3_bisector(d3_ascending);
            d3.bisectLeft = d3_bisect.left;
            d3.bisect = d3.bisectRight = d3_bisect.right;
            d3.bisector = function(f) {
                return d3_bisector(f.length === 1 ?
                function(d, x) {
                    return d3_ascending(f(d), x)
                }: f)
            };
            d3.shuffle = function(array, i0, i1) {
                if ((m = arguments.length) < 3) {
                    i1 = array.length;
                    if (m < 2) i0 = 0
                }
                var m = i1 - i0,
                t, i;
                while (m) {
                    i = Math.random() * m--|0;
                    t = array[m + i0],
                    array[m + i0] = array[i + i0],
                    array[i + i0] = t
                }
                return array
            };
            d3.permute = function(array, indexes) {
                var i = indexes.length,
                permutes = new Array(i);
                while (i--) permutes[i] = array[indexes[i]];
                return permutes
            };
            d3.pairs = function(array) {
                var i = 0,
                n = array.length - 1,
                p0, p1 = array[0],
                pairs = new Array(n < 0 ? 0 : n);
                while (i < n) pairs[i] = [p0 = p1, p1 = array[++i]];
                return pairs
            };
            d3.zip = function() {
                if (! (n = arguments.length)) return [];
                for (var i = -1,
                m = d3.min(arguments, d3_zipLength), zips = new Array(m); ++i < m;) {
                    for (var j = -1,
                    n, zip = zips[i] = new Array(n); ++j < n;) {
                        zip[j] = arguments[j][i]
                    }
                }
                return zips
            };
            function d3_zipLength(d) {
                return d.length
            }
            d3.transpose = function(matrix) {
                return d3.zip.apply(d3, matrix)
            };
            d3.keys = function(map) {
                var keys = [];
                for (var key in map) keys.push(key);
                return keys
            };
            d3.values = function(map) {
                var values = [];
                for (var key in map) values.push(map[key]);
                return values
            };
            d3.entries = function(map) {
                var entries = [];
                for (var key in map) entries.push({
                    key: key,
                    value: map[key]
                });
                return entries
            };
            d3.merge = function(arrays) {
                var n = arrays.length,
                m, i = -1,
                j = 0,
                merged, array;
                while (++i < n) j += arrays[i].length;
                merged = new Array(j);
                while (--n >= 0) {
                    array = arrays[n];
                    m = array.length;
                    while (--m >= 0) {
                        merged[--j] = array[m]
                    }
                }
                return merged
            };
            var abs = Math.abs;
            d3.range = function(start, stop, step) {
                if (arguments.length < 3) {
                    step = 1;
                    if (arguments.length < 2) {
                        stop = start;
                        start = 0
                    }
                }
                if ((stop - start) / step === Infinity) throw new Error("infinite range");
                var range = [],
                k = d3_range_integerScale(abs(step)),
                i = -1,
                j;
                start *= k,
                stop *= k,
                step *= k;
                if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k);
                else while ((j = start + step * ++i) < stop) range.push(j / k);
                return range
            };
            function d3_range_integerScale(x) {
                var k = 1;
                while (x * k % 1) k *= 10;
                return k
            }
            function d3_class(ctor, properties) {
                for (var key in properties) {
                    Object.defineProperty(ctor.prototype, key, {
                        value: properties[key],
                        enumerable: false
                    })
                }
            }
            d3.map = function(object, f) {
                var map = new d3_Map;
                if (object instanceof d3_Map) {
                    object.forEach(function(key, value) {
                        map.set(key, value)
                    })
                } else if (Array.isArray(object)) {
                    var i = -1,
                    n = object.length,
                    o;
                    if (arguments.length === 1) while (++i < n) map.set(i, object[i]);
                    else while (++i < n) map.set(f.call(object, o = object[i], i), o)
                } else {
                    for (var key in object) map.set(key, object[key])
                }
                return map
            };
            function d3_Map() {
                this._ = Object.create(null)
            }
            var d3_map_proto = "__proto__",
            d3_map_zero = "\x00";
            d3_class(d3_Map, {
                has: d3_map_has,
                get: function(key) {
                    return this._[d3_map_escape(key)]
                },
                set: function(key, value) {
                    return this._[d3_map_escape(key)] = value
                },
                remove: d3_map_remove,
                keys: d3_map_keys,
                values: function() {
                    var values = [];
                    for (var key in this._) values.push(this._[key]);
                    return values
                },
                entries: function() {
                    var entries = [];
                    for (var key in this._) entries.push({
                        key: d3_map_unescape(key),
                        value: this._[key]
                    });
                    return entries
                },
                size: d3_map_size,
                empty: d3_map_empty,
                forEach: function(f) {
                    for (var key in this._) f.call(this, d3_map_unescape(key), this._[key])
                }
            });
            function d3_map_escape(key) {
                return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key: key
            }
            function d3_map_unescape(key) {
                return (key += "")[0] === d3_map_zero ? key.slice(1) : key
            }
            function d3_map_has(key) {
                return d3_map_escape(key) in this._
            }
            function d3_map_remove(key) {
                return (key = d3_map_escape(key)) in this._ && delete this._[key]
            }
            function d3_map_keys() {
                var keys = [];
                for (var key in this._) keys.push(d3_map_unescape(key));
                return keys
            }
            function d3_map_size() {
                var size = 0;
                for (var key in this._)++size;
                return size
            }
            function d3_map_empty() {
                for (var key in this._) return false;
                return true
            }
            d3.nest = function() {
                var nest = {},
                keys = [],
                sortKeys = [],
                sortValues,
                rollup;
                function map(mapType, array, depth) {
                    if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
                    var i = -1,
                    n = array.length,
                    key = keys[depth++],
                    keyValue,
                    object,
                    setter,
                    valuesByKey = new d3_Map,
                    values;
                    while (++i < n) {
                        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
                            values.push(object)
                        } else {
                            valuesByKey.set(keyValue, [object])
                        }
                    }
                    if (mapType) {
                        object = mapType();
                        setter = function(keyValue, values) {
                            object.set(keyValue, map(mapType, values, depth))
                        }
                    } else {
                        object = {};
                        setter = function(keyValue, values) {
                            object[keyValue] = map(mapType, values, depth)
                        }
                    }
                    valuesByKey.forEach(setter);
                    return object
                }
                function entries(map, depth) {
                    if (depth >= keys.length) return map;
                    var array = [],
                    sortKey = sortKeys[depth++];
                    map.forEach(function(key, keyMap) {
                        array.push({
                            key: key,
                            values: entries(keyMap, depth)
                        })
                    });
                    return sortKey ? array.sort(function(a, b) {
                        return sortKey(a.key, b.key)
                    }) : array
                }
                nest.map = function(array, mapType) {
                    return map(mapType, array, 0)
                };
                nest.entries = function(array) {
                    return entries(map(d3.map, array, 0), 0)
                };
                nest.key = function(d) {
                    keys.push(d);
                    return nest
                };
                nest.sortKeys = function(order) {
                    sortKeys[keys.length - 1] = order;
                    return nest
                };
                nest.sortValues = function(order) {
                    sortValues = order;
                    return nest
                };
                nest.rollup = function(f) {
                    rollup = f;
                    return nest
                };
                return nest
            };
            d3.set = function(array) {
                var set = new d3_Set;
                if (array) for (var i = 0,
                n = array.length; i < n; ++i) set.add(array[i]);
                return set
            };
            function d3_Set() {
                this._ = Object.create(null)
            }
            d3_class(d3_Set, {
                has: d3_map_has,
                add: function(key) {
                    this._[d3_map_escape(key += "")] = true;
                    return key
                },
                remove: d3_map_remove,
                values: d3_map_keys,
                size: d3_map_size,
                empty: d3_map_empty,
                forEach: function(f) {
                    for (var key in this._) f.call(this, d3_map_unescape(key))
                }
            });
            d3.behavior = {};
            function d3_identity(d) {
                return d
            }
            d3.rebind = function(target, source) {
                var i = 1,
                n = arguments.length,
                method;
                while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
                return target
            };
            function d3_rebind(target, source, method) {
                return function() {
                    var value = method.apply(source, arguments);
                    return value === source ? target: value
                }
            }
            function d3_vendorSymbol(object, name) {
                if (name in object) return name;
                name = name.charAt(0).toUpperCase() + name.slice(1);
                for (var i = 0,
                n = d3_vendorPrefixes.length; i < n; ++i) {
                    var prefixName = d3_vendorPrefixes[i] + name;
                    if (prefixName in object) return prefixName
                }
            }
            var d3_vendorPrefixes = ["webkit", "ms", "moz", "Moz", "o", "O"];
            function d3_noop() {}
            d3.dispatch = function() {
                var dispatch = new d3_dispatch,
                i = -1,
                n = arguments.length;
                while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
                return dispatch
            };
            function d3_dispatch() {}
            d3_dispatch.prototype.on = function(type, listener) {
                var i = type.indexOf("."),
                name = "";
                if (i >= 0) {
                    name = type.slice(i + 1);
                    type = type.slice(0, i)
                }
                if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
                if (arguments.length === 2) {
                    if (listener == null) for (type in this) {
                        if (this.hasOwnProperty(type)) this[type].on(name, null)
                    }
                    return this
                }
            };
            function d3_dispatch_event(dispatch) {
                var listeners = [],
                listenerByName = new d3_Map;
                function event() {
                    var z = listeners,
                    i = -1,
                    n = z.length,
                    l;
                    while (++i < n) if (l = z[i].on) l.apply(this, arguments);
                    return dispatch
                }
                event.on = function(name, listener) {
                    var l = listenerByName.get(name),
                    i;
                    if (arguments.length < 2) return l && l.on;
                    if (l) {
                        l.on = null;
                        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
                        listenerByName.remove(name)
                    }
                    if (listener) listeners.push(listenerByName.set(name, {
                        on: listener
                    }));
                    return dispatch
                };
                return event
            }
            d3.event = null;
            function d3_eventPreventDefault() {
                d3.event.preventDefault()
            }
            function d3_eventSource() {
                var e = d3.event,
                s;
                while (s = e.sourceEvent) e = s;
                return e
            }
            function d3_eventDispatch(target) {
                var dispatch = new d3_dispatch,
                i = 0,
                n = arguments.length;
                while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
                dispatch.of = function(thiz, argumentz) {
                    return function(e1) {
                        try {
                            var e0 = e1.sourceEvent = d3.event;
                            e1.target = target;
                            d3.event = e1;
                            dispatch[e1.type].apply(thiz, argumentz)
                        } finally {
                            d3.event = e0
                        }
                    }
                };
                return dispatch
            }
            d3.requote = function(s) {
                return s.replace(d3_requote_re, "\\$&")
            };
            var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
            var d3_subclass = {}.__proto__ ?
            function(object, prototype) {
                object.__proto__ = prototype
            }: function(object, prototype) {
                for (var property in prototype) object[property] = prototype[property]
            };
            function d3_selection(groups) {
                d3_subclass(groups, d3_selectionPrototype);
                return groups
            }
            var d3_select = function(s, n) {
                return n.querySelector(s)
            },
            d3_selectAll = function(s, n) {
                return n.querySelectorAll(s)
            },
            d3_selectMatches = function(n, s) {
                var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
                d3_selectMatches = function(n, s) {
                    return d3_selectMatcher.call(n, s)
                };
                return d3_selectMatches(n, s)
            };
            if (typeof Sizzle === "function") {
                d3_select = function(s, n) {
                    return Sizzle(s, n)[0] || null
                };
                d3_selectAll = Sizzle;
                d3_selectMatches = Sizzle.matchesSelector
            }
            d3.selection = function() {
                return d3.select(d3_document.documentElement)
            };
            var d3_selectionPrototype = d3.selection.prototype = [];
            d3_selectionPrototype.select = function(selector) {
                var subgroups = [],
                subgroup,
                subnode,
                group,
                node;
                selector = d3_selection_selector(selector);
                for (var j = -1,
                m = this.length; ++j < m;) {
                    subgroups.push(subgroup = []);
                    subgroup.parentNode = (group = this[j]).parentNode;
                    for (var i = -1,
                    n = group.length; ++i < n;) {
                        if (node = group[i]) {
                            subgroup.push(subnode = selector.call(node, node.__data__, i, j));
                            if (subnode && "__data__" in node) subnode.__data__ = node.__data__
                        } else {
                            subgroup.push(null)
                        }
                    }
                }
                return d3_selection(subgroups)
            };
            function d3_selection_selector(selector) {
                return typeof selector === "function" ? selector: function() {
                    return d3_select(selector, this)
                }
            }
            d3_selectionPrototype.selectAll = function(selector) {
                var subgroups = [],
                subgroup,
                node;
                selector = d3_selection_selectorAll(selector);
                for (var j = -1,
                m = this.length; ++j < m;) {
                    for (var group = this[j], i = -1, n = group.length; ++i < n;) {
                        if (node = group[i]) {
                            subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
                            subgroup.parentNode = node
                        }
                    }
                }
                return d3_selection(subgroups)
            };
            function d3_selection_selectorAll(selector) {
                return typeof selector === "function" ? selector: function() {
                    return d3_selectAll(selector, this)
                }
            }
            var d3_nsPrefix = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: "http://www.w3.org/1999/xhtml",
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            };
            d3.ns = {
                prefix: d3_nsPrefix,
                qualify: function(name) {
                    var i = name.indexOf(":"),
                    prefix = name;
                    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
                    return d3_nsPrefix.hasOwnProperty(prefix) ? {
                        space: d3_nsPrefix[prefix],
                        local: name
                    }: name
                }
            };
            d3_selectionPrototype.attr = function(name, value) {
                if (arguments.length < 2) {
                    if (typeof name === "string") {
                        var node = this.node();
                        name = d3.ns.qualify(name);
                        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name)
                    }
                    for (value in name) this.each(d3_selection_attr(value, name[value]));
                    return this
                }
                return this.each(d3_selection_attr(name, value))
            };
            function d3_selection_attr(name, value) {
                name = d3.ns.qualify(name);
                function attrNull() {
                    this.removeAttribute(name)
                }
                function attrNullNS() {
                    this.removeAttributeNS(name.space, name.local)
                }
                function attrConstant() {
                    this.setAttribute(name, value)
                }
                function attrConstantNS() {
                    this.setAttributeNS(name.space, name.local, value)
                }
                function attrFunction() {
                    var x = value.apply(this, arguments);
                    if (x == null) this.removeAttribute(name);
                    else this.setAttribute(name, x)
                }
                function attrFunctionNS() {
                    var x = value.apply(this, arguments);
                    if (x == null) this.removeAttributeNS(name.space, name.local);
                    else this.setAttributeNS(name.space, name.local, x)
                }
                return value == null ? name.local ? attrNullNS: attrNull: typeof value === "function" ? name.local ? attrFunctionNS: attrFunction: name.local ? attrConstantNS: attrConstant
            }
            function d3_collapse(s) {
                return s.trim().replace(/\s+/g, " ")
            }
            d3_selectionPrototype.classed = function(name, value) {
                if (arguments.length < 2) {
                    if (typeof name === "string") {
                        var node = this.node(),
                        n = (name = d3_selection_classes(name)).length,
                        i = -1;
                        if (value = node.classList) {
                            while (++i < n) if (!value.contains(name[i])) return false
                        } else {
                            value = node.getAttribute("class");
                            while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false
                        }
                        return true
                    }
                    for (value in name) this.each(d3_selection_classed(value, name[value]));
                    return this
                }
                return this.each(d3_selection_classed(name, value))
            };
            function d3_selection_classedRe(name) {
                return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g")
            }
            function d3_selection_classes(name) {
                return (name + "").trim().split(/^|\s+/)
            }
            function d3_selection_classed(name, value) {
                name = d3_selection_classes(name).map(d3_selection_classedName);
                var n = name.length;
                function classedConstant() {
                    var i = -1;
                    while (++i < n) name[i](this, value)
                }
                function classedFunction() {
                    var i = -1,
                    x = value.apply(this, arguments);
                    while (++i < n) name[i](this, x)
                }
                return typeof value === "function" ? classedFunction: classedConstant
            }
            function d3_selection_classedName(name) {
                var re = d3_selection_classedRe(name);
                return function(node, value) {
                    if (c = node.classList) return value ? c.add(name) : c.remove(name);
                    var c = node.getAttribute("class") || "";
                    if (value) {
                        re.lastIndex = 0;
                        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name))
                    } else {
                        node.setAttribute("class", d3_collapse(c.replace(re, " ")))
                    }
                }
            }
            d3_selectionPrototype.style = function(name, value, priority) {
                var n = arguments.length;
                if (n < 3) {
                    if (typeof name !== "string") {
                        if (n < 2) value = "";
                        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
                        return this
                    }
                    if (n < 2) {
                        var node = this.node();
                        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name)
                    }
                    priority = ""
                }
                return this.each(d3_selection_style(name, value, priority))
            };
            function d3_selection_style(name, value, priority) {
                function styleNull() {
                    this.style.removeProperty(name)
                }
                function styleConstant() {
                    this.style.setProperty(name, value, priority)
                }
                function styleFunction() {
                    var x = value.apply(this, arguments);
                    if (x == null) this.style.removeProperty(name);
                    else this.style.setProperty(name, x, priority)
                }
                return value == null ? styleNull: typeof value === "function" ? styleFunction: styleConstant
            }
            d3_selectionPrototype.property = function(name, value) {
                if (arguments.length < 2) {
                    if (typeof name === "string") return this.node()[name];
                    for (value in name) this.each(d3_selection_property(value, name[value]));
                    return this
                }
                return this.each(d3_selection_property(name, value))
            };
            function d3_selection_property(name, value) {
                function propertyNull() {
                    delete this[name]
                }
                function propertyConstant() {
                    this[name] = value
                }
                function propertyFunction() {
                    var x = value.apply(this, arguments);
                    if (x == null) delete this[name];
                    else this[name] = x
                }
                return value == null ? propertyNull: typeof value === "function" ? propertyFunction: propertyConstant
            }
            d3_selectionPrototype.text = function(value) {
                return arguments.length ? this.each(typeof value === "function" ?
                function() {
                    var v = value.apply(this, arguments);
                    this.textContent = v == null ? "": v
                }: value == null ?
                function() {
                    this.textContent = ""
                }: function() {
                    this.textContent = value
                }) : this.node().textContent
            };
            d3_selectionPrototype.html = function(value) {
                return arguments.length ? this.each(typeof value === "function" ?
                function() {
                    var v = value.apply(this, arguments);
                    this.innerHTML = v == null ? "": v
                }: value == null ?
                function() {
                    this.innerHTML = ""
                }: function() {
                    this.innerHTML = value
                }) : this.node().innerHTML
            };
            d3_selectionPrototype.append = function(name) {
                name = d3_selection_creator(name);
                return this.select(function() {
                    return this.appendChild(name.apply(this, arguments))
                })
            };
            function d3_selection_creator(name) {
                function create() {
                    var document = this.ownerDocument,
                    namespace = this.namespaceURI;
                    return namespace ? document.createElementNS(namespace, name) : document.createElement(name)
                }
                function createNS() {
                    return this.ownerDocument.createElementNS(name.space, name.local)
                }
                return typeof name === "function" ? name: (name = d3.ns.qualify(name)).local ? createNS: create
            }
            d3_selectionPrototype.insert = function(name, before) {
                name = d3_selection_creator(name);
                before = d3_selection_selector(before);
                return this.select(function() {
                    return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null)
                })
            };
            d3_selectionPrototype.remove = function() {
                return this.each(d3_selectionRemove)
            };
            function d3_selectionRemove() {
                var parent = this.parentNode;
                if (parent) parent.removeChild(this)
            }
            d3_selectionPrototype.data = function(value, key) {
                var i = -1,
                n = this.length,
                group, node;
                if (!arguments.length) {
                    value = new Array(n = (group = this[0]).length);
                    while (++i < n) {
                        if (node = group[i]) {
                            value[i] = node.__data__
                        }
                    }
                    return value
                }
                function bind(group, groupData) {
                    var i, n = group.length,
                    m = groupData.length,
                    n0 = Math.min(n, m),
                    updateNodes = new Array(m),
                    enterNodes = new Array(m),
                    exitNodes = new Array(n),
                    node,
                    nodeData;
                    if (key) {
                        var nodeByKeyValue = new d3_Map,
                        keyValues = new Array(n),
                        keyValue;
                        for (i = -1; ++i < n;) {
                            if (node = group[i]) {
                                if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
                                    exitNodes[i] = node
                                } else {
                                    nodeByKeyValue.set(keyValue, node)
                                }
                                keyValues[i] = keyValue
                            }
                        }
                        for (i = -1; ++i < m;) {
                            if (! (node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
                                enterNodes[i] = d3_selection_dataNode(nodeData)
                            } else if (node !== true) {
                                updateNodes[i] = node;
                                node.__data__ = nodeData
                            }
                            nodeByKeyValue.set(keyValue, true)
                        }
                        for (i = -1; ++i < n;) {
                            if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
                                exitNodes[i] = group[i]
                            }
                        }
                    } else {
                        for (i = -1; ++i < n0;) {
                            node = group[i];
                            nodeData = groupData[i];
                            if (node) {
                                node.__data__ = nodeData;
                                updateNodes[i] = node
                            } else {
                                enterNodes[i] = d3_selection_dataNode(nodeData)
                            }
                        }
                        for (; i < m; ++i) {
                            enterNodes[i] = d3_selection_dataNode(groupData[i])
                        }
                        for (; i < n; ++i) {
                            exitNodes[i] = group[i]
                        }
                    }
                    enterNodes.update = updateNodes;
                    enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
                    enter.push(enterNodes);
                    update.push(updateNodes);
                    exit.push(exitNodes)
                }
                var enter = d3_selection_enter([]),
                update = d3_selection([]),
                exit = d3_selection([]);
                if (typeof value === "function") {
                    while (++i < n) {
                        bind(group = this[i], value.call(group, group.parentNode.__data__, i))
                    }
                } else {
                    while (++i < n) {
                        bind(group = this[i], value)
                    }
                }
                update.enter = function() {
                    return enter
                };
                update.exit = function() {
                    return exit
                };
                return update
            };
            function d3_selection_dataNode(data) {
                return {
                    __data__: data
                }
            }
            d3_selectionPrototype.datum = function(value) {
                return arguments.length ? this.property("__data__", value) : this.property("__data__")
            };
            d3_selectionPrototype.filter = function(filter) {
                var subgroups = [],
                subgroup,
                group,
                node;
                if (typeof filter !== "function") filter = d3_selection_filter(filter);
                for (var j = 0,
                m = this.length; j < m; j++) {
                    subgroups.push(subgroup = []);
                    subgroup.parentNode = (group = this[j]).parentNode;
                    for (var i = 0,
                    n = group.length; i < n; i++) {
                        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
                            subgroup.push(node)
                        }
                    }
                }
                return d3_selection(subgroups)
            };
            function d3_selection_filter(selector) {
                return function() {
                    return d3_selectMatches(this, selector)
                }
            }
            d3_selectionPrototype.order = function() {
                for (var j = -1,
                m = this.length; ++j < m;) {
                    for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
                        if (node = group[i]) {
                            if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
                            next = node
                        }
                    }
                }
                return this
            };
            d3_selectionPrototype.sort = function(comparator) {
                comparator = d3_selection_sortComparator.apply(this, arguments);
                for (var j = -1,
                m = this.length; ++j < m;) this[j].sort(comparator);
                return this.order()
            };
            function d3_selection_sortComparator(comparator) {
                if (!arguments.length) comparator = d3_ascending;
                return function(a, b) {
                    return a && b ? comparator(a.__data__, b.__data__) : !a - !b
                }
            }
            d3_selectionPrototype.each = function(callback) {
                return d3_selection_each(this,
                function(node, i, j) {
                    callback.call(node, node.__data__, i, j)
                })
            };
            function d3_selection_each(groups, callback) {
                for (var j = 0,
                m = groups.length; j < m; j++) {
                    for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
                        if (node = group[i]) callback(node, i, j)
                    }
                }
                return groups
            }
            d3_selectionPrototype.call = function(callback) {
                var args = d3_array(arguments);
                callback.apply(args[0] = this, args);
                return this
            };
            d3_selectionPrototype.empty = function() {
                return ! this.node()
            };
            d3_selectionPrototype.node = function() {
                for (var j = 0,
                m = this.length; j < m; j++) {
                    for (var group = this[j], i = 0, n = group.length; i < n; i++) {
                        var node = group[i];
                        if (node) return node
                    }
                }
                return null
            };
            d3_selectionPrototype.size = function() {
                var n = 0;
                d3_selection_each(this,
                function() {++n
                });
                return n
            };
            function d3_selection_enter(selection) {
                d3_subclass(selection, d3_selection_enterPrototype);
                return selection
            }
            var d3_selection_enterPrototype = [];
            d3.selection.enter = d3_selection_enter;
            d3.selection.enter.prototype = d3_selection_enterPrototype;
            d3_selection_enterPrototype.append = d3_selectionPrototype.append;
            d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
            d3_selection_enterPrototype.node = d3_selectionPrototype.node;
            d3_selection_enterPrototype.call = d3_selectionPrototype.call;
            d3_selection_enterPrototype.size = d3_selectionPrototype.size;
            d3_selection_enterPrototype.select = function(selector) {
                var subgroups = [],
                subgroup,
                subnode,
                upgroup,
                group,
                node;
                for (var j = -1,
                m = this.length; ++j < m;) {
                    upgroup = (group = this[j]).update;
                    subgroups.push(subgroup = []);
                    subgroup.parentNode = group.parentNode;
                    for (var i = -1,
                    n = group.length; ++i < n;) {
                        if (node = group[i]) {
                            subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
                            subnode.__data__ = node.__data__
                        } else {
                            subgroup.push(null)
                        }
                    }
                }
                return d3_selection(subgroups)
            };
            d3_selection_enterPrototype.insert = function(name, before) {
                if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
                return d3_selectionPrototype.insert.call(this, name, before)
            };
            function d3_selection_enterInsertBefore(enter) {
                var i0, j0;
                return function(d, i, j) {
                    var group = enter[j].update,
                    n = group.length,
                    node;
                    if (j != j0) j0 = j,
                    i0 = 0;
                    if (i >= i0) i0 = i + 1;
                    while (! (node = group[i0]) && ++i0 < n);
                    return node
                }
            }
            d3.select = function(node) {
                var group;
                if (typeof node === "string") {
                    group = [d3_select(node, d3_document)];
                    group.parentNode = d3_document.documentElement
                } else {
                    group = [node];
                    group.parentNode = d3_documentElement(node)
                }
                return d3_selection([group])
            };
            d3.selectAll = function(nodes) {
                var group;
                if (typeof nodes === "string") {
                    group = d3_array(d3_selectAll(nodes, d3_document));
                    group.parentNode = d3_document.documentElement
                } else {
                    group = d3_array(nodes);
                    group.parentNode = null
                }
                return d3_selection([group])
            };
            d3_selectionPrototype.on = function(type, listener, capture) {
                var n = arguments.length;
                if (n < 3) {
                    if (typeof type !== "string") {
                        if (n < 2) listener = false;
                        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
                        return this
                    }
                    if (n < 2) return (n = this.node()["__on" + type]) && n._;
                    capture = false
                }
                return this.each(d3_selection_on(type, listener, capture))
            };
            function d3_selection_on(type, listener, capture) {
                var name = "__on" + type,
                i = type.indexOf("."),
                wrap = d3_selection_onListener;
                if (i > 0) type = type.slice(0, i);
                var filter = d3_selection_onFilters.get(type);
                if (filter) type = filter,
                wrap = d3_selection_onFilter;
                function onRemove() {
                    var l = this[name];
                    if (l) {
                        this.removeEventListener(type, l, l.$);
                        delete this[name]
                    }
                }
                function onAdd() {
                    var l = wrap(listener, d3_array(arguments));
                    onRemove.call(this);
                    this.addEventListener(type, this[name] = l, l.$ = capture);
                    l._ = listener
                }
                function removeAll() {
                    var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"),
                    match;
                    for (var name in this) {
                        if (match = name.match(re)) {
                            var l = this[name];
                            this.removeEventListener(match[1], l, l.$);
                            delete this[name]
                        }
                    }
                }
                return i ? listener ? onAdd: onRemove: listener ? d3_noop: removeAll
            }
            var d3_selection_onFilters = d3.map({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            });
            if (d3_document) {
                d3_selection_onFilters.forEach(function(k) {
                    if ("on" + k in d3_document) d3_selection_onFilters.remove(k)
                })
            }
            function d3_selection_onListener(listener, argumentz) {
                return function(e) {
                    var o = d3.event;
                    d3.event = e;
                    argumentz[0] = this.__data__;
                    try {
                        listener.apply(this, argumentz)
                    } finally {
                        d3.event = o
                    }
                }
            }
            function d3_selection_onFilter(listener, argumentz) {
                var l = d3_selection_onListener(listener, argumentz);
                return function(e) {
                    var target = this,
                    related = e.relatedTarget;
                    if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
                        l.call(target, e)
                    }
                }
            }
            var d3_event_dragSelect, d3_event_dragId = 0;
            function d3_event_dragSuppress(node) {
                var name = ".dragsuppress-" + ++d3_event_dragId,
                click = "click" + name,
                w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
                if (d3_event_dragSelect == null) {
                    d3_event_dragSelect = "onselectstart" in node ? false: d3_vendorSymbol(node.style, "userSelect")
                }
                if (d3_event_dragSelect) {
                    var style = d3_documentElement(node).style,
                    select = style[d3_event_dragSelect];
                    style[d3_event_dragSelect] = "none"
                }
                return function(suppressClick) {
                    w.on(name, null);
                    if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
                    if (suppressClick) {
                        var off = function() {
                            w.on(click, null)
                        };
                        w.on(click,
                        function() {
                            d3_eventPreventDefault();
                            off()
                        },
                        true);
                        setTimeout(off, 0)
                    }
                }
            }
            d3.mouse = function(container) {
                return d3_mousePoint(container, d3_eventSource())
            };
            var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
            function d3_mousePoint(container, e) {
                if (e.changedTouches) e = e.changedTouches[0];
                var svg = container.ownerSVGElement || container;
                if (svg.createSVGPoint) {
                    var point = svg.createSVGPoint();
                    if (d3_mouse_bug44083 < 0) {
                        var window = d3_window(container);
                        if (window.scrollX || window.scrollY) {
                            svg = d3.select("body").append("svg").style({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                margin: 0,
                                padding: 0,
                                border: "none"
                            },
                            "important");
                            var ctm = svg[0][0].getScreenCTM();
                            d3_mouse_bug44083 = !(ctm.f || ctm.e);
                            svg.remove()
                        }
                    }
                    if (d3_mouse_bug44083) point.x = e.pageX,
                    point.y = e.pageY;
                    else point.x = e.clientX,
                    point.y = e.clientY;
                    point = point.matrixTransform(container.getScreenCTM().inverse());
                    return [point.x, point.y]
                }
                var rect = container.getBoundingClientRect();
                return [e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop]
            }
            d3.touch = function(container, touches, identifier) {
                if (arguments.length < 3) identifier = touches,
                touches = d3_eventSource().changedTouches;
                if (touches) for (var i = 0,
                n = touches.length,
                touch; i < n; ++i) {
                    if ((touch = touches[i]).identifier === identifier) {
                        return d3_mousePoint(container, touch)
                    }
                }
            };
            d3.behavior.drag = function() {
                var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"),
                origin = null,
                mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"),
                touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
                function drag() {
                    this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart)
                }
                function dragstart(id, position, subject, move, end) {
                    return function() {
                        var that = this,
                        target = d3.event.target,
                        parent = that.parentNode,
                        dispatch = event.of(that, arguments),
                        dragged = 0,
                        dragId = id(),
                        dragName = ".drag" + (dragId == null ? "": "-" + dragId),
                        dragOffset,
                        dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended),
                        dragRestore = d3_event_dragSuppress(target),
                        position0 = position(parent, dragId);
                        if (origin) {
                            dragOffset = origin.apply(that, arguments);
                            dragOffset = [dragOffset.x - position0[0], dragOffset.y - position0[1]]
                        } else {
                            dragOffset = [0, 0]
                        }
                        dispatch({
                            type: "dragstart"
                        });
                        function moved() {
                            var position1 = position(parent, dragId),
                            dx,
                            dy;
                            if (!position1) return;
                            dx = position1[0] - position0[0];
                            dy = position1[1] - position0[1];
                            dragged |= dx | dy;
                            position0 = position1;
                            dispatch({
                                type: "drag",
                                x: position1[0] + dragOffset[0],
                                y: position1[1] + dragOffset[1],
                                dx: dx,
                                dy: dy
                            })
                        }
                        function ended() {
                            if (!position(parent, dragId)) return;
                            dragSubject.on(move + dragName, null).on(end + dragName, null);
                            dragRestore(dragged);
                            dispatch({
                                type: "dragend"
                            })
                        }
                    }
                }
                drag.origin = function(x) {
                    if (!arguments.length) return origin;
                    origin = x;
                    return drag
                };
                return d3.rebind(drag, event, "on")
            };
            function d3_behavior_dragTouchId() {
                return d3.event.changedTouches[0].identifier
            }
            d3.touches = function(container, touches) {
                if (arguments.length < 2) touches = d3_eventSource().touches;
                return touches ? d3_array(touches).map(function(touch) {
                    var point = d3_mousePoint(container, touch);
                    point.identifier = touch.identifier;
                    return point
                }) : []
            };
            varε = 1e-6,
            ε2 = ε * ε,
            π = Math.PI,
            τ = 2 * π,
            τε = τ - ε,
            halfπ = π / 2,
            d3_radians = π / 180,
            d3_degrees = 180 / π;
            function d3_sgn(x) {
                return x > 0 ? 1 : x < 0 ? -1 : 0
            }
            function d3_cross2d(a, b, c) {
                return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0])
            }
            function d3_acos(x) {
                return x > 1 ? 0 : x < -1 ? π: Math.acos(x)
            }
            function d3_asin(x) {
                return x > 1 ? halfπ: x < -1 ? -halfπ: Math.asin(x)
            }
            function d3_sinh(x) {
                return ((x = Math.exp(x)) - 1 / x) / 2
            }
            function d3_cosh(x) {
                return ((x = Math.exp(x)) + 1 / x) / 2
            }
            function d3_tanh(x) {
                return ((x = Math.exp(2 * x)) - 1) / (x + 1)
            }
            function d3_haversin(x) {
                return (x = Math.sin(x / 2)) * x
            }
            varρ = Math.SQRT2,
            ρ2 = 2,
            ρ4 = 4;
            d3.interpolateZoom = function(p0, p1) {
                var ux0 = p0[0],
                uy0 = p0[1],
                w0 = p0[2],
                ux1 = p1[0],
                uy1 = p1[1],
                w1 = p1[2],
                dx = ux1 - ux0,
                dy = uy1 - uy0,
                d2 = dx * dx + dy * dy,
                i,
                S;
                if (d2 < ε2) {
                    S = Math.log(w1 / w0) / ρ;
                    i = function(t) {
                        return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S)]
                    }
                } else {
                    var d1 = Math.sqrt(d2),
                    b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1),
                    b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1),
                    r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
                    r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
                    S = (r1 - r0) / ρ;
                    i = function(t) {
                        var s = t * S,
                        coshr0 = d3_cosh(r0),
                        u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
                        return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0)]
                    }
                }
                i.duration = S * 1e3;
                return i
            };
            d3.behavior.zoom = function() {
                var view = {
                    x: 0,
                    y: 0,
                    k: 1
                },
                translate0,
                center0,
                center,
                size = [960, 500],
                scaleExtent = d3_behavior_zoomInfinity,
                duration = 250,
                zooming = 0,
                mousedown = "mousedown.zoom",
                mousemove = "mousemove.zoom",
                mouseup = "mouseup.zoom",
                mousewheelTimer,
                touchstart = "touchstart.zoom",
                touchtime,
                event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"),
                x0,
                x1,
                y0,
                y1;
                if (!d3_behavior_zoomWheel) {
                    d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
                        return - d3.event.deltaY * (d3.event.deltaMode ? 120 : 1)
                    },
                    "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
                        return d3.event.wheelDelta
                    },
                    "mousewheel") : (d3_behavior_zoomDelta = function() {
                        return - d3.event.detail
                    },
                    "MozMousePixelScroll")
                }
                function zoom(g) {
                    g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted)
                }
                zoom.event = function(g) {
                    g.each(function() {
                        var dispatch = event.of(this, arguments),
                        view1 = view;
                        if (d3_transitionInheritId) {
                            d3.select(this).transition().each("start.zoom",
                            function() {
                                view = this.__chart__ || {
                                    x: 0,
                                    y: 0,
                                    k: 1
                                };
                                zoomstarted(dispatch)
                            }).tween("zoom:zoom",
                            function() {
                                var dx = size[0],
                                dy = size[1],
                                cx = center0 ? center0[0] : dx / 2,
                                cy = center0 ? center0[1] : dy / 2,
                                i = d3.interpolateZoom([(cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k], [(cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k]);
                                return function(t) {
                                    var l = i(t),
                                    k = dx / l[2];
                                    this.__chart__ = view = {
                                        x: cx - l[0] * k,
                                        y: cy - l[1] * k,
                                        k: k
                                    };
                                    zoomed(dispatch)
                                }
                            }).each("interrupt.zoom",
                            function() {
                                zoomended(dispatch)
                            }).each("end.zoom",
                            function() {
                                zoomended(dispatch)
                            })
                        } else {
                            this.__chart__ = view;
                            zoomstarted(dispatch);
                            zoomed(dispatch);
                            zoomended(dispatch)
                        }
                    })
                };
                zoom.translate = function(_) {
                    if (!arguments.length) return [view.x, view.y];
                    view = {
                        x: +_[0],
                        y: +_[1],
                        k: view.k
                    };
                    rescale();
                    return zoom
                };
                zoom.scale = function(_) {
                    if (!arguments.length) return view.k;
                    view = {
                        x: view.x,
                        y: view.y,
                        k: null
                    };
                    scaleTo( + _);
                    rescale();
                    return zoom
                };
                zoom.scaleExtent = function(_) {
                    if (!arguments.length) return scaleExtent;
                    scaleExtent = _ == null ? d3_behavior_zoomInfinity: [ + _[0], +_[1]];
                    return zoom
                };
                zoom.center = function(_) {
                    if (!arguments.length) return center;
                    center = _ && [ + _[0], +_[1]];
                    return zoom
                };
                zoom.size = function(_) {
                    if (!arguments.length) return size;
                    size = _ && [ + _[0], +_[1]];
                    return zoom
                };
                zoom.duration = function(_) {
                    if (!arguments.length) return duration;
                    duration = +_;
                    return zoom
                };
                zoom.x = function(z) {
                    if (!arguments.length) return x1;
                    x1 = z;
                    x0 = z.copy();
                    view = {
                        x: 0,
                        y: 0,
                        k: 1
                    };
                    return zoom
                };
                zoom.y = function(z) {
                    if (!arguments.length) return y1;
                    y1 = z;
                    y0 = z.copy();
                    view = {
                        x: 0,
                        y: 0,
                        k: 1
                    };
                    return zoom
                };
                function location(p) {
                    return [(p[0] - view.x) / view.k, (p[1] - view.y) / view.k]
                }
                function point(l) {
                    return [l[0] * view.k + view.x, l[1] * view.k + view.y]
                }
                function scaleTo(s) {
                    view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s))
                }
                function translateTo(p, l) {
                    l = point(l);
                    view.x += p[0] - l[0];
                    view.y += p[1] - l[1]
                }
                function zoomTo(that, p, l, k) {
                    that.__chart__ = {
                        x: view.x,
                        y: view.y,
                        k: view.k
                    };
                    scaleTo(Math.pow(2, k));
                    translateTo(center0 = p, l);
                    that = d3.select(that);
                    if (duration > 0) that = that.transition().duration(duration);
                    that.call(zoom.event)
                }
                function rescale() {
                    if (x1) x1.domain(x0.range().map(function(x) {
                        return (x - view.x) / view.k
                    }).map(x0.invert));
                    if (y1) y1.domain(y0.range().map(function(y) {
                        return (y - view.y) / view.k
                    }).map(y0.invert))
                }
                function zoomstarted(dispatch) {
                    if (!zooming++) dispatch({
                        type: "zoomstart"
                    })
                }
                function zoomed(dispatch) {
                    rescale();
                    dispatch({
                        type: "zoom",
                        scale: view.k,
                        translate: [view.x, view.y]
                    })
                }
                function zoomended(dispatch) {
                    if (!--zooming) dispatch({
                        type: "zoomend"
                    }),
                    center0 = null
                }
                function mousedowned() {
                    var that = this,
                    dispatch = event.of(that, arguments),
                    dragged = 0,
                    subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended),
                    location0 = location(d3.mouse(that)),
                    dragRestore = d3_event_dragSuppress(that);
                    d3_selection_interrupt.call(that);
                    zoomstarted(dispatch);
                    function moved() {
                        dragged = 1;
                        translateTo(d3.mouse(that), location0);
                        zoomed(dispatch)
                    }
                    function ended() {
                        subject.on(mousemove, null).on(mouseup, null);
                        dragRestore(dragged);
                        zoomended(dispatch)
                    }
                }
                function touchstarted() {
                    var that = this,
                    dispatch = event.of(that, arguments),
                    locations0 = {},
                    distance0 = 0,
                    scale0,
                    zoomName = ".zoom-" + d3.event.changedTouches[0].identifier,
                    touchmove = "touchmove" + zoomName,
                    touchend = "touchend" + zoomName,
                    targets = [],
                    subject = d3.select(that),
                    dragRestore = d3_event_dragSuppress(that);
                    started();
                    zoomstarted(dispatch);
                    subject.on(mousedown, null).on(touchstart, started);
                    function relocate() {
                        var touches = d3.touches(that);
                        scale0 = view.k;
                        touches.forEach(function(t) {
                            if (t.identifier in locations0) locations0[t.identifier] = location(t)
                        });
                        return touches
                    }
                    function started() {
                        var target = d3.event.target;
                        d3.select(target).on(touchmove, moved).on(touchend, ended);
                        targets.push(target);
                        var changed = d3.event.changedTouches;
                        for (var i = 0,
                        n = changed.length; i < n; ++i) {
                            locations0[changed[i].identifier] = null
                        }
                        var touches = relocate(),
                        now = Date.now();
                        if (touches.length === 1) {
                            if (now - touchtime < 500) {
                                var p = touches[0];
                                zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
                                d3_eventPreventDefault()
                            }
                            touchtime = now
                        } else if (touches.length > 1) {
                            var p = touches[0],
                            q = touches[1],
                            dx = p[0] - q[0],
                            dy = p[1] - q[1];
                            distance0 = dx * dx + dy * dy
                        }
                    }
                    function moved() {
                        var touches = d3.touches(that),
                        p0,
                        l0,
                        p1,
                        l1;
                        d3_selection_interrupt.call(that);
                        for (var i = 0,
                        n = touches.length; i < n; ++i, l1 = null) {
                            p1 = touches[i];
                            if (l1 = locations0[p1.identifier]) {
                                if (l0) break;
                                p0 = p1,
                                l0 = l1
                            }
                        }
                        if (l1) {
                            var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1,
                            scale1 = distance0 && Math.sqrt(distance1 / distance0);
                            p0 = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
                            l0 = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
                            scaleTo(scale1 * scale0)
                        }
                        touchtime = null;
                        translateTo(p0, l0);
                        zoomed(dispatch)
                    }
                    function ended() {
                        if (d3.event.touches.length) {
                            var changed = d3.event.changedTouches;
                            for (var i = 0,
                            n = changed.length; i < n; ++i) {
                                delete locations0[changed[i].identifier]
                            }
                            for (var identifier in locations0) {
                                return void relocate()
                            }
                        }
                        d3.selectAll(targets).on(zoomName, null);
                        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
                        dragRestore();
                        zoomended(dispatch)
                    }
                }
                function mousewheeled() {
                    var dispatch = event.of(this, arguments);
                    if (mousewheelTimer) clearTimeout(mousewheelTimer);
                    else d3_selection_interrupt.call(this),
                    translate0 = location(center0 = center || d3.mouse(this)),
                    zoomstarted(dispatch);
                    mousewheelTimer = setTimeout(function() {
                        mousewheelTimer = null;
                        zoomended(dispatch)
                    },
                    50);
                    d3_eventPreventDefault();
                    scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
                    translateTo(center0, translate0);
                    zoomed(dispatch)
                }
                function dblclicked() {
                    var p = d3.mouse(this),
                    k = Math.log(view.k) / Math.LN2;
                    zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1)
                }
                return d3.rebind(zoom, event, "on")
            };
            var d3_behavior_zoomInfinity = [0, Infinity],
            d3_behavior_zoomDelta,
            d3_behavior_zoomWheel;
            d3.color = d3_color;
            function d3_color() {}
            d3_color.prototype.toString = function() {
                return this.rgb() + ""
            };
            d3.hsl = d3_hsl;
            function d3_hsl(h, s, l) {
                return this instanceof d3_hsl ? void(this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l)
            }
            var d3_hslPrototype = d3_hsl.prototype = new d3_color;
            d3_hslPrototype.brighter = function(k) {
                k = Math.pow(.7, arguments.length ? k: 1);
                return new d3_hsl(this.h, this.s, this.l / k)
            };
            d3_hslPrototype.darker = function(k) {
                k = Math.pow(.7, arguments.length ? k: 1);
                return new d3_hsl(this.h, this.s, k * this.l)
            };
            d3_hslPrototype.rgb = function() {
                return d3_hsl_rgb(this.h, this.s, this.l)
            };
            function d3_hsl_rgb(h, s, l) {
                var m1, m2;
                h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
                s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
                l = l < 0 ? 0 : l > 1 ? 1 : l;
                m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
                m1 = 2 * l - m2;
                function v(h) {
                    if (h > 360) h -= 360;
                    else if (h < 0) h += 360;
                    if (h < 60) return m1 + (m2 - m1) * h / 60;
                    if (h < 180) return m2;
                    if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
                    return m1
                }
                function vv(h) {
                    return Math.round(v(h) * 255)
                }
                return new d3_rgb(vv(h + 120), vv(h), vv(h - 120))
            }
            d3.hcl = d3_hcl;
            function d3_hcl(h, c, l) {
                return this instanceof d3_hcl ? void(this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l)
            }
            var d3_hclPrototype = d3_hcl.prototype = new d3_color;
            d3_hclPrototype.brighter = function(k) {
                return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k: 1)))
            };
            d3_hclPrototype.darker = function(k) {
                return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k: 1)))
            };
            d3_hclPrototype.rgb = function() {
                return d3_hcl_lab(this.h, this.c, this.l).rgb()
            };
            function d3_hcl_lab(h, c, l) {
                if (isNaN(h)) h = 0;
                if (isNaN(c)) c = 0;
                return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c)
            }
            d3.lab = d3_lab;
            function d3_lab(l, a, b) {
                return this instanceof d3_lab ? void(this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b)
            }
            var d3_lab_K = 18;
            var d3_lab_X = .95047,
            d3_lab_Y = 1,
            d3_lab_Z = 1.08883;
            var d3_labPrototype = d3_lab.prototype = new d3_color;
            d3_labPrototype.brighter = function(k) {
                return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k: 1)), this.a, this.b)
            };
            d3_labPrototype.darker = function(k) {
                return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k: 1)), this.a, this.b)
            };
            d3_labPrototype.rgb = function() {
                return d3_lab_rgb(this.l, this.a, this.b)
            };
            function d3_lab_rgb(l, a, b) {
                var y = (l + 16) / 116,
                x = y + a / 500,
                z = y - b / 200;
                x = d3_lab_xyz(x) * d3_lab_X;
                y = d3_lab_xyz(y) * d3_lab_Y;
                z = d3_lab_xyz(z) * d3_lab_Z;
                return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb( - .969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z))
            }
            function d3_lab_hcl(l, a, b) {
                return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l)
            }
            function d3_lab_xyz(x) {
                return x > .206893034 ? x * x * x: (x - 4 / 29) / 7.787037
            }
            function d3_xyz_lab(x) {
                return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29
            }
            function d3_xyz_rgb(r) {
                return Math.round(255 * (r <= .00304 ? 12.92 * r: 1.055 * Math.pow(r, 1 / 2.4) - .055))
            }
            d3.rgb = d3_rgb;
            function d3_rgb(r, g, b) {
                return this instanceof d3_rgb ? void(this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b)
            }
            function d3_rgbNumber(value) {
                return new d3_rgb(value >> 16, value >> 8 & 255, value & 255)
            }
            function d3_rgbString(value) {
                return d3_rgbNumber(value) + ""
            }
            var d3_rgbPrototype = d3_rgb.prototype = new d3_color;
            d3_rgbPrototype.brighter = function(k) {
                k = Math.pow(.7, arguments.length ? k: 1);
                var r = this.r,
                g = this.g,
                b = this.b,
                i = 30;
                if (!r && !g && !b) return new d3_rgb(i, i, i);
                if (r && r < i) r = i;
                if (g && g < i) g = i;
                if (b && b < i) b = i;
                return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k))
            };
            d3_rgbPrototype.darker = function(k) {
                k = Math.pow(.7, arguments.length ? k: 1);
                return new d3_rgb(k * this.r, k * this.g, k * this.b)
            };
            d3_rgbPrototype.hsl = function() {
                return d3_rgb_hsl(this.r, this.g, this.b)
            };
            d3_rgbPrototype.toString = function() {
                return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b)
            };
            function d3_rgb_hex(v) {
                return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16)
            }
            function d3_rgb_parse(format, rgb, hsl) {
                var r = 0,
                g = 0,
                b = 0,
                m1, m2, color;
                m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
                if (m1) {
                    m2 = m1[2].split(",");
                    switch (m1[1]) {
                    case "hsl":
                        {
                            return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100)
                        }
                    case "rgb":
                        {
                            return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]))
                        }
                    }
                }
                if (color = d3_rgb_names.get(format)) {
                    return rgb(color.r, color.g, color.b)
                }
                if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
                    if (format.length === 4) {
                        r = (color & 3840) >> 4;
                        r = r >> 4 | r;
                        g = color & 240;
                        g = g >> 4 | g;
                        b = color & 15;
                        b = b << 4 | b
                    } else if (format.length === 7) {
                        r = (color & 16711680) >> 16;
                        g = (color & 65280) >> 8;
                        b = color & 255
                    }
                }
                return rgb(r, g, b)
            }
            function d3_rgb_hsl(r, g, b) {
                var min = Math.min(r /= 255, g /= 255, b /= 255),
                max = Math.max(r, g, b),
                d = max - min,
                h,
                s,
                l = (max + min) / 2;
                if (d) {
                    s = l < .5 ? d / (max + min) : d / (2 - max - min);
                    if (r == max) h = (g - b) / d + (g < b ? 6 : 0);
                    else if (g == max) h = (b - r) / d + 2;
                    else h = (r - g) / d + 4;
                    h *= 60
                } else {
                    h = NaN;
                    s = l > 0 && l < 1 ? 0 : h
                }
                return new d3_hsl(h, s, l)
            }
            function d3_rgb_lab(r, g, b) {
                r = d3_rgb_xyz(r);
                g = d3_rgb_xyz(g);
                b = d3_rgb_xyz(b);
                var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X),
                y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y),
                z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
                return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z))
            }
            function d3_rgb_xyz(r) {
                return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)
            }
            function d3_rgb_parseNumber(c) {
                var f = parseFloat(c);
                return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f
            }
            var d3_rgb_names = d3.map({
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            });
            d3_rgb_names.forEach(function(key, value) {
                d3_rgb_names.set(key, d3_rgbNumber(value))
            });
            function d3_functor(v) {
                return typeof v === "function" ? v: function() {
                    return v
                }
            }
            d3.functor = d3_functor;
            d3.xhr = d3_xhrType(d3_identity);
            function d3_xhrType(response) {
                return function(url, mimeType, callback) {
                    if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType,
                    mimeType = null;
                    return d3_xhr(url, mimeType, response, callback)
                }
            }
            function d3_xhr(url, mimeType, response, callback) {
                var xhr = {},
                dispatch = d3.dispatch("beforesend", "progress", "load", "error"),
                headers = {},
                request = new XMLHttpRequest,
                responseType = null;
                if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest;
                "onload" in request ? request.onload = request.onerror = respond: request.onreadystatechange = function() {
                    request.readyState > 3 && respond()
                };
                function respond() {
                    var status = request.status,
                    result;
                    if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
                        try {
                            result = response.call(xhr, request)
                        } catch(e) {
                            dispatch.error.call(xhr, e);
                            return
                        }
                        dispatch.load.call(xhr, result)
                    } else {
                        dispatch.error.call(xhr, request)
                    }
                }
                request.onprogress = function(event) {
                    var o = d3.event;
                    d3.event = event;
                    try {
                        dispatch.progress.call(xhr, request)
                    } finally {
                        d3.event = o
                    }
                };
                xhr.header = function(name, value) {
                    name = (name + "").toLowerCase();
                    if (arguments.length < 2) return headers[name];
                    if (value == null) delete headers[name];
                    else headers[name] = value + "";
                    return xhr
                };
                xhr.mimeType = function(value) {
                    if (!arguments.length) return mimeType;
                    mimeType = value == null ? null: value + "";
                    return xhr
                };
                xhr.responseType = function(value) {
                    if (!arguments.length) return responseType;
                    responseType = value;
                    return xhr
                };
                xhr.response = function(value) {
                    response = value;
                    return xhr
                }; ["get", "post"].forEach(function(method) {
                    xhr[method] = function() {
                        return xhr.send.apply(xhr, [method].concat(d3_array(arguments)))
                    }
                });
                xhr.send = function(method, data, callback) {
                    if (arguments.length === 2 && typeof data === "function") callback = data,
                    data = null;
                    request.open(method, url, true);
                    if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
                    if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
                    if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
                    if (responseType != null) request.responseType = responseType;
                    if (callback != null) xhr.on("error", callback).on("load",
                    function(request) {
                        callback(null, request)
                    });
                    dispatch.beforesend.call(xhr, request);
                    request.send(data == null ? null: data);
                    return xhr
                };
                xhr.abort = function() {
                    request.abort();
                    return xhr
                };
                d3.rebind(xhr, dispatch, "on");
                return callback == null ? xhr: xhr.get(d3_xhr_fixCallback(callback))
            }
            function d3_xhr_fixCallback(callback) {
                return callback.length === 1 ?
                function(error, request) {
                    callback(error == null ? request: null)
                }: callback
            }
            function d3_xhrHasResponse(request) {
                var type = request.responseType;
                return type && type !== "text" ? request.response: request.responseText
            }
            d3.dsv = function(delimiter, mimeType) {
                var reFormat = new RegExp('["' + delimiter + "\n]"),
                delimiterCode = delimiter.charCodeAt(0);
                function dsv(url, row, callback) {
                    if (arguments.length < 3) callback = row,
                    row = null;
                    var xhr = d3_xhr(url, mimeType, row == null ? response: typedResponse(row), callback);
                    xhr.row = function(_) {
                        return arguments.length ? xhr.response((row = _) == null ? response: typedResponse(_)) : row
                    };
                    return xhr
                }
                function response(request) {
                    return dsv.parse(request.responseText)
                }
                function typedResponse(f) {
                    return function(request) {
                        return dsv.parse(request.responseText, f)
                    }
                }
                dsv.parse = function(text, f) {
                    var o;
                    return dsv.parseRows(text,
                    function(row, i) {
                        if (o) return o(row, i - 1);
                        var a = new Function("d", "return {" + row.map(function(name, i) {
                            return JSON.stringify(name) + ": d[" + i + "]"
                        }).join(",") + "}");
                        o = f ?
                        function(row, i) {
                            return f(a(row), i)
                        }: a
                    })
                };
                dsv.parseRows = function(text, f) {
                    var EOL = {},
                    EOF = {},
                    rows = [],
                    N = text.length,
                    I = 0,
                    n = 0,
                    t,
                    eol;
                    function token() {
                        if (I >= N) return EOF;
                        if (eol) return eol = false,
                        EOL;
                        var j = I;
                        if (text.charCodeAt(j) === 34) {
                            var i = j;
                            while (i++<N) {
                                if (text.charCodeAt(i) === 34) {
                                    if (text.charCodeAt(i + 1) !== 34) break; ++i
                                }
                            }
                            I = i + 2;
                            var c = text.charCodeAt(i + 1);
                            if (c === 13) {
                                eol = true;
                                if (text.charCodeAt(i + 2) === 10)++I
                            } else if (c === 10) {
                                eol = true
                            }
                            return text.slice(j + 1, i).replace(/""/g, '"')
                        }
                        while (I < N) {
                            var c = text.charCodeAt(I++),
                            k = 1;
                            if (c === 10) eol = true;
                            else if (c === 13) {
                                eol = true;
                                if (text.charCodeAt(I) === 10)++I,
                                ++k
                            } else if (c !== delimiterCode) continue;
                            return text.slice(j, I - k)
                        }
                        return text.slice(j)
                    }
                    while ((t = token()) !== EOF) {
                        var a = [];
                        while (t !== EOL && t !== EOF) {
                            a.push(t);
                            t = token()
                        }
                        if (f && (a = f(a, n++)) == null) continue;
                        rows.push(a)
                    }
                    return rows
                };
                dsv.format = function(rows) {
                    if (Array.isArray(rows[0])) return dsv.formatRows(rows);
                    var fieldSet = new d3_Set,
                    fields = [];
                    rows.forEach(function(row) {
                        for (var field in row) {
                            if (!fieldSet.has(field)) {
                                fields.push(fieldSet.add(field))
                            }
                        }
                    });
                    return [fields.map(formatValue).join(delimiter)].concat(rows.map(function(row) {
                        return fields.map(function(field) {
                            return formatValue(row[field])
                        }).join(delimiter)
                    })).join("\n")
                };
                dsv.formatRows = function(rows) {
                    return rows.map(formatRow).join("\n")
                };
                function formatRow(row) {
                    return row.map(formatValue).join(delimiter)
                }
                function formatValue(text) {
                    return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"': text
                }
                return dsv
            };
            d3.csv = d3.dsv(",", "text/csv");
            d3.tsv = d3.dsv("	", "text/tab-separated-values");
            var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] ||
            function(callback) {
                setTimeout(callback, 17)
            };
            d3.timer = function() {
                d3_timer.apply(this, arguments)
            };
            function d3_timer(callback, delay, then) {
                var n = arguments.length;
                if (n < 2) delay = 0;
                if (n < 3) then = Date.now();
                var time = then + delay,
                timer = {
                    c: callback,
                    t: time,
                    n: null
                };
                if (d3_timer_queueTail) d3_timer_queueTail.n = timer;
                else d3_timer_queueHead = timer;
                d3_timer_queueTail = timer;
                if (!d3_timer_interval) {
                    d3_timer_timeout = clearTimeout(d3_timer_timeout);
                    d3_timer_interval = 1;
                    d3_timer_frame(d3_timer_step)
                }
                return timer
            }
            function d3_timer_step() {
                var now = d3_timer_mark(),
                delay = d3_timer_sweep() - now;
                if (delay > 24) {
                    if (isFinite(delay)) {
                        clearTimeout(d3_timer_timeout);
                        d3_timer_timeout = setTimeout(d3_timer_step, delay)
                    }
                    d3_timer_interval = 0
                } else {
                    d3_timer_interval = 1;
                    d3_timer_frame(d3_timer_step)
                }
            }
            d3.timer.flush = function() {
                d3_timer_mark();
                d3_timer_sweep()
            };
            function d3_timer_mark() {
                var now = Date.now(),
                timer = d3_timer_queueHead;
                while (timer) {
                    if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
                    timer = timer.n
                }
                return now
            }
            function d3_timer_sweep() {
                var t0, t1 = d3_timer_queueHead,
                time = Infinity;
                while (t1) {
                    if (t1.c) {
                        if (t1.t < time) time = t1.t;
                        t1 = (t0 = t1).n
                    } else {
                        t1 = t0 ? t0.n = t1.n: d3_timer_queueHead = t1.n
                    }
                }
                d3_timer_queueTail = t0;
                return time
            }
            function d3_format_precision(x, p) {
                return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1)
            }
            d3.round = function(x, n) {
                return n ? Math.round(x * (n = Math.pow(10, n))) / n: Math.round(x)
            };
            var d3_formatPrefixes = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(d3_formatPrefix);
            d3.formatPrefix = function(value, precision) {
                var i = 0;
                if (value = +value) {
                    if (value < 0) value *= -1;
                    if (precision) value = d3.round(value, d3_format_precision(value, precision));
                    i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
                    i = Math.max( - 24, Math.min(24, Math.floor((i - 1) / 3) * 3))
                }
                return d3_formatPrefixes[8 + i / 3]
            };
            function d3_formatPrefix(d, i) {
                var k = Math.pow(10, abs(8 - i) * 3);
                return {
                    scale: i > 8 ?
                    function(d) {
                        return d / k
                    }: function(d) {
                        return d * k
                    },
                    symbol: d
                }
            }
            function d3_locale_numberFormat(locale) {
                var locale_decimal = locale.decimal,
                locale_thousands = locale.thousands,
                locale_grouping = locale.grouping,
                locale_currency = locale.currency,
                formatGroup = locale_grouping && locale_thousands ?
                function(value, width) {
                    var i = value.length,
                    t = [],
                    j = 0,
                    g = locale_grouping[0],
                    length = 0;
                    while (i > 0 && g > 0) {
                        if (length + g + 1 > width) g = Math.max(1, width - length);
                        t.push(value.substring(i -= g, i + g));
                        if ((length += g + 1) > width) break;
                        g = locale_grouping[j = (j + 1) % locale_grouping.length]
                    }
                    return t.reverse().join(locale_thousands)
                }: d3_identity;
                return function(specifier) {
                    var match = d3_format_re.exec(specifier),
                    fill = match[1] || " ",
                    align = match[2] || ">",
                    sign = match[3] || "-",
                    symbol = match[4] || "",
                    zfill = match[5],
                    width = +match[6],
                    comma = match[7],
                    precision = match[8],
                    type = match[9],
                    scale = 1,
                    prefix = "",
                    suffix = "",
                    integer = false,
                    exponent = true;
                    if (precision) precision = +precision.substring(1);
                    if (zfill || fill === "0" && align === "=") {
                        zfill = fill = "0";
                        align = "="
                    }
                    switch (type) {
                    case "n":
                        comma = true;
                        type = "g";
                        break;
                    case "%":
                        scale = 100;
                        suffix = "%";
                        type = "f";
                        break;
                    case "p":
                        scale = 100;
                        suffix = "%";
                        type = "r";
                        break;
                    case "b":
                    case "o":
                    case "x":
                    case "X":
                        if (symbol === "#") prefix = "0" + type.toLowerCase();
                    case "c":
                        exponent = false;
                    case "d":
                        integer = true;
                        precision = 0;
                        break;
                    case "s":
                        scale = -1;
                        type = "r";
                        break
                    }
                    if (symbol === "$") prefix = locale_currency[0],
                    suffix = locale_currency[1];
                    if (type == "r" && !precision) type = "g";
                    if (precision != null) {
                        if (type == "g") precision = Math.max(1, Math.min(21, precision));
                        else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision))
                    }
                    type = d3_format_types.get(type) || d3_format_typeDefault;
                    var zcomma = zfill && comma;
                    return function(value) {
                        var fullSuffix = suffix;
                        if (integer && value % 1) return "";
                        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "": sign;
                        if (scale < 0) {
                            var unit = d3.formatPrefix(value, precision);
                            value = unit.scale(value);
                            fullSuffix = unit.symbol + suffix
                        } else {
                            value *= scale
                        }
                        value = type(value, precision);
                        var i = value.lastIndexOf("."),
                        before,
                        after;
                        if (i < 0) {
                            var j = exponent ? value.lastIndexOf("e") : -1;
                            if (j < 0) before = value,
                            after = "";
                            else before = value.substring(0, j),
                            after = value.substring(j)
                        } else {
                            before = value.substring(0, i);
                            after = locale_decimal + value.substring(i + 1)
                        }
                        if (!zfill && comma) before = formatGroup(before, Infinity);
                        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length),
                        padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
                        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length: Infinity);
                        negative += prefix;
                        value = before + after;
                        return (align === "<" ? negative + value + padding: align === ">" ? padding + negative + value: align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value: padding + value)) + fullSuffix
                    }
                }
            }
            var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
            var d3_format_types = d3.map({
                b: function(x) {
                    return x.toString(2)
                },
                c: function(x) {
                    return String.fromCharCode(x)
                },
                o: function(x) {
                    return x.toString(8)
                },
                x: function(x) {
                    return x.toString(16)
                },
                X: function(x) {
                    return x.toString(16).toUpperCase()
                },
                g: function(x, p) {
                    return x.toPrecision(p)
                },
                e: function(x, p) {
                    return x.toExponential(p)
                },
                f: function(x, p) {
                    return x.toFixed(p)
                },
                r: function(x, p) {
                    return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))))
                }
            });
            function d3_format_typeDefault(x) {
                return x + ""
            }
            var d3_time = d3.time = {},
            d3_date = Date;
            function d3_date_utc() {
                this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
            }
            d3_date_utc.prototype = {
                getDate: function() {
                    return this._.getUTCDate()
                },
                getDay: function() {
                    return this._.getUTCDay()
                },
                getFullYear: function() {
                    return this._.getUTCFullYear()
                },
                getHours: function() {
                    return this._.getUTCHours()
                },
                getMilliseconds: function() {
                    return this._.getUTCMilliseconds()
                },
                getMinutes: function() {
                    return this._.getUTCMinutes()
                },
                getMonth: function() {
                    return this._.getUTCMonth()
                },
                getSeconds: function() {
                    return this._.getUTCSeconds()
                },
                getTime: function() {
                    return this._.getTime()
                },
                getTimezoneOffset: function() {
                    return 0
                },
                valueOf: function() {
                    return this._.valueOf()
                },
                setDate: function() {
                    d3_time_prototype.setUTCDate.apply(this._, arguments)
                },
                setDay: function() {
                    d3_time_prototype.setUTCDay.apply(this._, arguments)
                },
                setFullYear: function() {
                    d3_time_prototype.setUTCFullYear.apply(this._, arguments)
                },
                setHours: function() {
                    d3_time_prototype.setUTCHours.apply(this._, arguments)
                },
                setMilliseconds: function() {
                    d3_time_prototype.setUTCMilliseconds.apply(this._, arguments)
                },
                setMinutes: function() {
                    d3_time_prototype.setUTCMinutes.apply(this._, arguments)
                },
                setMonth: function() {
                    d3_time_prototype.setUTCMonth.apply(this._, arguments)
                },
                setSeconds: function() {
                    d3_time_prototype.setUTCSeconds.apply(this._, arguments)
                },
                setTime: function() {
                    d3_time_prototype.setTime.apply(this._, arguments)
                }
            };
            var d3_time_prototype = Date.prototype;
            function d3_time_interval(local, step, number) {
                function round(date) {
                    var d0 = local(date),
                    d1 = offset(d0, 1);
                    return date - d0 < d1 - date ? d0: d1
                }
                function ceil(date) {
                    step(date = local(new d3_date(date - 1)), 1);
                    return date
                }
                function offset(date, k) {
                    step(date = new d3_date( + date), k);
                    return date
                }
                function range(t0, t1, dt) {
                    var time = ceil(t0),
                    times = [];
                    if (dt > 1) {
                        while (time < t1) {
                            if (! (number(time) % dt)) times.push(new Date( + time));
                            step(time, 1)
                        }
                    } else {
                        while (time < t1) times.push(new Date( + time)),
                        step(time, 1)
                    }
                    return times
                }
                function range_utc(t0, t1, dt) {
                    try {
                        d3_date = d3_date_utc;
                        var utc = new d3_date_utc;
                        utc._ = t0;
                        return range(utc, t1, dt)
                    } finally {
                        d3_date = Date
                    }
                }
                local.floor = local;
                local.round = round;
                local.ceil = ceil;
                local.offset = offset;
                local.range = range;
                var utc = local.utc = d3_time_interval_utc(local);
                utc.floor = utc;
                utc.round = d3_time_interval_utc(round);
                utc.ceil = d3_time_interval_utc(ceil);
                utc.offset = d3_time_interval_utc(offset);
                utc.range = range_utc;
                return local
            }
            function d3_time_interval_utc(method) {
                return function(date, k) {
                    try {
                        d3_date = d3_date_utc;
                        var utc = new d3_date_utc;
                        utc._ = date;
                        return method(utc, k)._
                    } finally {
                        d3_date = Date
                    }
                }
            }
            d3_time.year = d3_time_interval(function(date) {
                date = d3_time.day(date);
                date.setMonth(0, 1);
                return date
            },
            function(date, offset) {
                date.setFullYear(date.getFullYear() + offset)
            },
            function(date) {
                return date.getFullYear()
            });
            d3_time.years = d3_time.year.range;
            d3_time.years.utc = d3_time.year.utc.range;
            d3_time.day = d3_time_interval(function(date) {
                var day = new d3_date(2e3, 0);
                day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
                return day
            },
            function(date, offset) {
                date.setDate(date.getDate() + offset)
            },
            function(date) {
                return date.getDate() - 1
            });
            d3_time.days = d3_time.day.range;
            d3_time.days.utc = d3_time.day.utc.range;
            d3_time.dayOfYear = function(date) {
                var year = d3_time.year(date);
                return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5)
            }; ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function(day, i) {
                i = 7 - i;
                var interval = d3_time[day] = d3_time_interval(function(date) { (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
                    return date
                },
                function(date, offset) {
                    date.setDate(date.getDate() + Math.floor(offset) * 7)
                },
                function(date) {
                    var day = d3_time.year(date).getDay();
                    return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i)
                });
                d3_time[day + "s"] = interval.range;
                d3_time[day + "s"].utc = interval.utc.range;
                d3_time[day + "OfYear"] = function(date) {
                    var day = d3_time.year(date).getDay();
                    return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7)
                }
            });
            d3_time.week = d3_time.sunday;
            d3_time.weeks = d3_time.sunday.range;
            d3_time.weeks.utc = d3_time.sunday.utc.range;
            d3_time.weekOfYear = d3_time.sundayOfYear;
            function d3_locale_timeFormat(locale) {
                var locale_dateTime = locale.dateTime,
                locale_date = locale.date,
                locale_time = locale.time,
                locale_periods = locale.periods,
                locale_days = locale.days,
                locale_shortDays = locale.shortDays,
                locale_months = locale.months,
                locale_shortMonths = locale.shortMonths;
                function d3_time_format(template) {
                    var n = template.length;
                    function format(date) {
                        var string = [],
                        i = -1,
                        j = 0,
                        c,
                        p,
                        f;
                        while (++i < n) {
                            if (template.charCodeAt(i) === 37) {
                                string.push(template.slice(j, i));
                                if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
                                if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " ": "0": p);
                                string.push(c);
                                j = i + 1
                            }
                        }
                        string.push(template.slice(j, i));
                        return string.join("")
                    }
                    format.parse = function(string) {
                        var d = {
                            y: 1900,
                            m: 0,
                            d: 1,
                            H: 0,
                            M: 0,
                            S: 0,
                            L: 0,
                            Z: null
                        },
                        i = d3_time_parse(d, template, string, 0);
                        if (i != string.length) return null;
                        if ("p" in d) d.H = d.H % 12 + d.p * 12;
                        var localZ = d.Z != null && d3_date !== d3_date_utc,
                        date = new(localZ ? d3_date_utc: d3_date);
                        if ("j" in d) date.setFullYear(d.y, 0, d.j);
                        else if ("W" in d || "U" in d) {
                            if (! ("w" in d)) d.w = "W" in d ? 1 : 0;
                            date.setFullYear(d.y, 0, 1);
                            date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7)
                        } else date.setFullYear(d.y, d.m, d.d);
                        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
                        return localZ ? date._: date
                    };
                    format.toString = function() {
                        return template
                    };
                    return format
                }
                function d3_time_parse(date, template, string, j) {
                    var c, p, t, i = 0,
                    n = template.length,
                    m = string.length;
                    while (i < n) {
                        if (j >= m) return - 1;
                        c = template.charCodeAt(i++);
                        if (c === 37) {
                            t = template.charAt(i++);
                            p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
                            if (!p || (j = p(date, string, j)) < 0) return - 1
                        } else if (c != string.charCodeAt(j++)) {
                            return - 1
                        }
                    }
                    return j
                }
                d3_time_format.utc = function(template) {
                    var local = d3_time_format(template);
                    function format(date) {
                        try {
                            d3_date = d3_date_utc;
                            var utc = new d3_date;
                            utc._ = date;
                            return local(utc);
                        } finally {
                            d3_date = Date
                        }
                    }
                    format.parse = function(string) {
                        try {
                            d3_date = d3_date_utc;
                            var date = local.parse(string);
                            return date && date._
                        } finally {
                            d3_date = Date
                        }
                    };
                    format.toString = local.toString;
                    return format
                };
                d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
                var d3_time_periodLookup = d3.map(),
                d3_time_dayRe = d3_time_formatRe(locale_days),
                d3_time_dayLookup = d3_time_formatLookup(locale_days),
                d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays),
                d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays),
                d3_time_monthRe = d3_time_formatRe(locale_months),
                d3_time_monthLookup = d3_time_formatLookup(locale_months),
                d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths),
                d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
                locale_periods.forEach(function(p, i) {
                    d3_time_periodLookup.set(p.toLowerCase(), i)
                });
                var d3_time_formats = {
                    a: function(d) {
                        return locale_shortDays[d.getDay()]
                    },
                    A: function(d) {
                        return locale_days[d.getDay()]
                    },
                    b: function(d) {
                        return locale_shortMonths[d.getMonth()]
                    },
                    B: function(d) {
                        return locale_months[d.getMonth()]
                    },
                    c: d3_time_format(locale_dateTime),
                    d: function(d, p) {
                        return d3_time_formatPad(d.getDate(), p, 2)
                    },
                    e: function(d, p) {
                        return d3_time_formatPad(d.getDate(), p, 2)
                    },
                    H: function(d, p) {
                        return d3_time_formatPad(d.getHours(), p, 2)
                    },
                    I: function(d, p) {
                        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2)
                    },
                    j: function(d, p) {
                        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3)
                    },
                    L: function(d, p) {
                        return d3_time_formatPad(d.getMilliseconds(), p, 3)
                    },
                    m: function(d, p) {
                        return d3_time_formatPad(d.getMonth() + 1, p, 2)
                    },
                    M: function(d, p) {
                        return d3_time_formatPad(d.getMinutes(), p, 2)
                    },
                    p: function(d) {
                        return locale_periods[ + (d.getHours() >= 12)]
                    },
                    S: function(d, p) {
                        return d3_time_formatPad(d.getSeconds(), p, 2)
                    },
                    U: function(d, p) {
                        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2)
                    },
                    w: function(d) {
                        return d.getDay()
                    },
                    W: function(d, p) {
                        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2)
                    },
                    x: d3_time_format(locale_date),
                    X: d3_time_format(locale_time),
                    y: function(d, p) {
                        return d3_time_formatPad(d.getFullYear() % 100, p, 2)
                    },
                    Y: function(d, p) {
                        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4)
                    },
                    Z: d3_time_zone,
                    "%": function() {
                        return "%"
                    }
                };
                var d3_time_parsers = {
                    a: d3_time_parseWeekdayAbbrev,
                    A: d3_time_parseWeekday,
                    b: d3_time_parseMonthAbbrev,
                    B: d3_time_parseMonth,
                    c: d3_time_parseLocaleFull,
                    d: d3_time_parseDay,
                    e: d3_time_parseDay,
                    H: d3_time_parseHour24,
                    I: d3_time_parseHour24,
                    j: d3_time_parseDayOfYear,
                    L: d3_time_parseMilliseconds,
                    m: d3_time_parseMonthNumber,
                    M: d3_time_parseMinutes,
                    p: d3_time_parseAmPm,
                    S: d3_time_parseSeconds,
                    U: d3_time_parseWeekNumberSunday,
                    w: d3_time_parseWeekdayNumber,
                    W: d3_time_parseWeekNumberMonday,
                    x: d3_time_parseLocaleDate,
                    X: d3_time_parseLocaleTime,
                    y: d3_time_parseYear,
                    Y: d3_time_parseFullYear,
                    Z: d3_time_parseZone,
                    "%": d3_time_parseLiteralPercent
                };
                function d3_time_parseWeekdayAbbrev(date, string, i) {
                    d3_time_dayAbbrevRe.lastIndex = 0;
                    var n = d3_time_dayAbbrevRe.exec(string.slice(i));
                    return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1
                }
                function d3_time_parseWeekday(date, string, i) {
                    d3_time_dayRe.lastIndex = 0;
                    var n = d3_time_dayRe.exec(string.slice(i));
                    return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1
                }
                function d3_time_parseMonthAbbrev(date, string, i) {
                    d3_time_monthAbbrevRe.lastIndex = 0;
                    var n = d3_time_monthAbbrevRe.exec(string.slice(i));
                    return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1
                }
                function d3_time_parseMonth(date, string, i) {
                    d3_time_monthRe.lastIndex = 0;
                    var n = d3_time_monthRe.exec(string.slice(i));
                    return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1
                }
                function d3_time_parseLocaleFull(date, string, i) {
                    return d3_time_parse(date, d3_time_formats.c.toString(), string, i)
                }
                function d3_time_parseLocaleDate(date, string, i) {
                    return d3_time_parse(date, d3_time_formats.x.toString(), string, i)
                }
                function d3_time_parseLocaleTime(date, string, i) {
                    return d3_time_parse(date, d3_time_formats.X.toString(), string, i)
                }
                function d3_time_parseAmPm(date, string, i) {
                    var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
                    return n == null ? -1 : (date.p = n, i)
                }
                return d3_time_format
            }
            var d3_time_formatPads = {
                "-": "",
                _: " ",
                0 : "0"
            },
            d3_time_numberRe = /^\s*\d+/,
            d3_time_percentRe = /^%/;
            function d3_time_formatPad(value, fill, width) {
                var sign = value < 0 ? "-": "",
                string = (sign ? -value: value) + "",
                length = string.length;
                return sign + (length < width ? new Array(width - length + 1).join(fill) + string: string)
            }
            function d3_time_formatRe(names) {
                return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i")
            }
            function d3_time_formatLookup(names) {
                var map = new d3_Map,
                i = -1,
                n = names.length;
                while (++i < n) map.set(names[i].toLowerCase(), i);
                return map
            }
            function d3_time_parseWeekdayNumber(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.slice(i, i + 1));
                return n ? (date.w = +n[0], i + n[0].length) : -1
            }
            function d3_time_parseWeekNumberSunday(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.slice(i));
                return n ? (date.U = +n[0], i + n[0].length) : -1
            }
            function d3_time_parseWeekNumberMonday(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.slice(i));
                return n ? (date.W = +n[0], i + n[0].length) : -1
            }
            function d3_time_parseFullYear(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.slice(i, i + 4));
                return n ? (date.y = +n[0], i + n[0].length) : -1
            }
            function d3_time_parseYear(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.slice(i, i + 2));
                return n ? (date.y = d3_time_expandYear( + n[0]), i + n[0].length) : -1
            }
            function d3_time_parseZone(date, string, i) {
                return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, i + 5) : -1
            }
            function d3_time_expandYear(d) {
                return d + (d > 68 ? 1900 : 2e3)
            }
            function d3_time_parseMonthNumber(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.slice(i, i + 2));
                return n ? (date.m = n[0] - 1, i + n[0].length) : -1
            }
            function d3_time_parseDay(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.slice(i, i + 2));
                return n ? (date.d = +n[0], i + n[0].length) : -1
            }
            function d3_time_parseDayOfYear(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.slice(i, i + 3));
                return n ? (date.j = +n[0], i + n[0].length) : -1
            }
            function d3_time_parseHour24(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.slice(i, i + 2));
                return n ? (date.H = +n[0], i + n[0].length) : -1
            }
            function d3_time_parseMinutes(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.slice(i, i + 2));
                return n ? (date.M = +n[0], i + n[0].length) : -1
            }
            function d3_time_parseSeconds(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.slice(i, i + 2));
                return n ? (date.S = +n[0], i + n[0].length) : -1
            }
            function d3_time_parseMilliseconds(date, string, i) {
                d3_time_numberRe.lastIndex = 0;
                var n = d3_time_numberRe.exec(string.slice(i, i + 3));
                return n ? (date.L = +n[0], i + n[0].length) : -1
            }
            function d3_time_zone(d) {
                var z = d.getTimezoneOffset(),
                zs = z > 0 ? "-": "+",
                zh = abs(z) / 60 | 0,
                zm = abs(z) % 60;
                return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2)
            }
            function d3_time_parseLiteralPercent(date, string, i) {
                d3_time_percentRe.lastIndex = 0;
                var n = d3_time_percentRe.exec(string.slice(i, i + 1));
                return n ? i + n[0].length: -1
            }
            function d3_time_formatMulti(formats) {
                var n = formats.length,
                i = -1;
                while (++i < n) formats[i][0] = this(formats[i][0]);
                return function(date) {
                    var i = 0,
                    f = formats[i];
                    while (!f[1](date)) f = formats[++i];
                    return f[0](date)
                }
            }
            d3.locale = function(locale) {
                return {
                    numberFormat: d3_locale_numberFormat(locale),
                    timeFormat: d3_locale_timeFormat(locale)
                }
            };
            var d3_locale_enUS = d3.locale({
                decimal: ".",
                thousands: ",",
                grouping: [3],
                currency: ["$", ""],
                dateTime: "%a %b %e %X %Y",
                date: "%m/%d/%Y",
                time: "%H:%M:%S",
                periods: ["AM", "PM"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            });
            d3.format = d3_locale_enUS.numberFormat;
            d3.geo = {};
            function d3_adder() {}
            d3_adder.prototype = {
                s: 0,
                t: 0,
                add: function(y) {
                    d3_adderSum(y, this.t, d3_adderTemp);
                    d3_adderSum(d3_adderTemp.s, this.s, this);
                    if (this.s) this.t += d3_adderTemp.t;
                    else this.s = d3_adderTemp.t
                },
                reset: function() {
                    this.s = this.t = 0
                },
                valueOf: function() {
                    return this.s
                }
            };
            var d3_adderTemp = new d3_adder;
            function d3_adderSum(a, b, o) {
                var x = o.s = a + b,
                bv = x - a,
                av = x - bv;
                o.t = a - av + (b - bv)
            }
            d3.geo.stream = function(object, listener) {
                if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
                    d3_geo_streamObjectType[object.type](object, listener)
                } else {
                    d3_geo_streamGeometry(object, listener)
                }
            };
            function d3_geo_streamGeometry(geometry, listener) {
                if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
                    d3_geo_streamGeometryType[geometry.type](geometry, listener)
                }
            }
            var d3_geo_streamObjectType = {
                Feature: function(feature, listener) {
                    d3_geo_streamGeometry(feature.geometry, listener)
                },
                FeatureCollection: function(object, listener) {
                    var features = object.features,
                    i = -1,
                    n = features.length;
                    while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener)
                }
            };
            var d3_geo_streamGeometryType = {
                Sphere: function(object, listener) {
                    listener.sphere()
                },
                Point: function(object, listener) {
                    object = object.coordinates;
                    listener.point(object[0], object[1], object[2])
                },
                MultiPoint: function(object, listener) {
                    var coordinates = object.coordinates,
                    i = -1,
                    n = coordinates.length;
                    while (++i < n) object = coordinates[i],
                    listener.point(object[0], object[1], object[2])
                },
                LineString: function(object, listener) {
                    d3_geo_streamLine(object.coordinates, listener, 0)
                },
                MultiLineString: function(object, listener) {
                    var coordinates = object.coordinates,
                    i = -1,
                    n = coordinates.length;
                    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0)
                },
                Polygon: function(object, listener) {
                    d3_geo_streamPolygon(object.coordinates, listener)
                },
                MultiPolygon: function(object, listener) {
                    var coordinates = object.coordinates,
                    i = -1,
                    n = coordinates.length;
                    while (++i < n) d3_geo_streamPolygon(coordinates[i], listener)
                },
                GeometryCollection: function(object, listener) {
                    var geometries = object.geometries,
                    i = -1,
                    n = geometries.length;
                    while (++i < n) d3_geo_streamGeometry(geometries[i], listener)
                }
            };
            function d3_geo_streamLine(coordinates, listener, closed) {
                var i = -1,
                n = coordinates.length - closed,
                coordinate;
                listener.lineStart();
                while (++i < n) coordinate = coordinates[i],
                listener.point(coordinate[0], coordinate[1], coordinate[2]);
                listener.lineEnd()
            }
            function d3_geo_streamPolygon(coordinates, listener) {
                var i = -1,
                n = coordinates.length;
                listener.polygonStart();
                while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
                listener.polygonEnd()
            }
            d3.geo.area = function(object) {
                d3_geo_areaSum = 0;
                d3.geo.stream(object, d3_geo_area);
                return d3_geo_areaSum
            };
            var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder;
            var d3_geo_area = {
                sphere: function() {
                    d3_geo_areaSum += 4 * π
                },
                point: d3_noop,
                lineStart: d3_noop,
                lineEnd: d3_noop,
                polygonStart: function() {
                    d3_geo_areaRingSum.reset();
                    d3_geo_area.lineStart = d3_geo_areaRingStart
                },
                polygonEnd: function() {
                    var area = 2 * d3_geo_areaRingSum;
                    d3_geo_areaSum += area < 0 ? 4 * π + area: area;
                    d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop
                }
            };
            function d3_geo_areaRingStart() {
                varλ00, φ00, λ0, cosφ0, sinφ0;
                d3_geo_area.point = function(λ, φ) {
                    d3_geo_area.point = nextPoint;λ0 = (λ00 = λ) * d3_radians,
                    cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4),
                    sinφ0 = Math.sin(φ)
                };
                function nextPoint(λ, φ) {λ *= d3_radians;φ = φ * d3_radians / 2 + π / 4;
                    var dλ = λ - λ0,
                    sdλ = dλ >= 0 ? 1 : -1,
                    adλ = sdλ * dλ,
                    cosφ = Math.cos(φ),
                    sinφ = Math.sin(φ),
                    k = sinφ0 * sinφ,
                    u = cosφ0 * cosφ + k * Math.cos(adλ),
                    v = k * sdλ * Math.sin(adλ);
                    d3_geo_areaRingSum.add(Math.atan2(v, u));λ0 = λ,
                    cosφ0 = cosφ,
                    sinφ0 = sinφ
                }
                d3_geo_area.lineEnd = function() {
                    nextPoint(λ00, φ00)
                }
            }
            function d3_geo_cartesian(spherical) {
                varλ = spherical[0],
                φ = spherical[1],
                cosφ = Math.cos(φ);
                return [cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ)]
            }
            function d3_geo_cartesianDot(a, b) {
                return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
            }
            function d3_geo_cartesianCross(a, b) {
                return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
            }
            function d3_geo_cartesianAdd(a, b) {
                a[0] += b[0];
                a[1] += b[1];
                a[2] += b[2]
            }
            function d3_geo_cartesianScale(vector, k) {
                return [vector[0] * k, vector[1] * k, vector[2] * k]
            }
            function d3_geo_cartesianNormalize(d) {
                var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
                d[0] /= l;
                d[1] /= l;
                d[2] /= l
            }
            function d3_geo_spherical(cartesian) {
                return [Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2])]
            }
            function d3_geo_sphericalEqual(a, b) {
                return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε
            }
            d3.geo.bounds = function() {
                varλ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
                var bound = {
                    point: point,
                    lineStart: lineStart,
                    lineEnd: lineEnd,
                    polygonStart: function() {
                        bound.point = ringPoint;
                        bound.lineStart = ringStart;
                        bound.lineEnd = ringEnd;
                        dλSum = 0;
                        d3_geo_area.polygonStart()
                    },
                    polygonEnd: function() {
                        d3_geo_area.polygonEnd();
                        bound.point = point;
                        bound.lineStart = lineStart;
                        bound.lineEnd = lineEnd;
                        if (d3_geo_areaRingSum < 0)λ0 = -(λ1 = 180),
                        φ0 = -(φ1 = 90);
                        else if (dλSum > ε)φ1 = 90;
                        else if (dλSum < -ε)φ0 = -90;
                        range[0] = λ0,
                        range[1] = λ1
                    }
                };
                function point(λ, φ) {
                    ranges.push(range = [λ0 = λ, λ1 = λ]);
                    if (φ < φ0)φ0 = φ;
                    if (φ > φ1)φ1 = φ
                }
                function linePoint(λ, φ) {
                    var p = d3_geo_cartesian([λ * d3_radians, φ * d3_radians]);
                    if (p0) {
                        var normal = d3_geo_cartesianCross(p0, p),
                        equatorial = [normal[1], -normal[0], 0],
                        inflection = d3_geo_cartesianCross(equatorial, normal);
                        d3_geo_cartesianNormalize(inflection);
                        inflection = d3_geo_spherical(inflection);
                        var dλ = λ - λ_,
                        s = dλ > 0 ? 1 : -1,
                        λi = inflection[0] * d3_degrees * s,
                        antimeridian = abs(dλ) > 180;
                        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
                            varφi = inflection[1] * d3_degrees;
                            if (φi > φ1)φ1 = φi
                        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
                            varφi = -inflection[1] * d3_degrees;
                            if (φi < φ0)φ0 = φi
                        } else {
                            if (φ < φ0)φ0 = φ;
                            if (φ > φ1)φ1 = φ
                        }
                        if (antimeridian) {
                            if (λ < λ_) {
                                if (angle(λ0, λ) > angle(λ0, λ1))λ1 = λ
                            } else {
                                if (angle(λ, λ1) > angle(λ0, λ1))λ0 = λ
                            }
                        } else {
                            if (λ1 >= λ0) {
                                if (λ < λ0)λ0 = λ;
                                if (λ > λ1)λ1 = λ
                            } else {
                                if (λ > λ_) {
                                    if (angle(λ0, λ) > angle(λ0, λ1))λ1 = λ
                                } else {
                                    if (angle(λ, λ1) > angle(λ0, λ1))λ0 = λ
                                }
                            }
                        }
                    } else {
                        point(λ, φ)
                    }
                    p0 = p,
                    λ_ = λ
                }
                function lineStart() {
                    bound.point = linePoint
                }
                function lineEnd() {
                    range[0] = λ0,
                    range[1] = λ1;
                    bound.point = point;
                    p0 = null
                }
                function ringPoint(λ, φ) {
                    if (p0) {
                        var dλ = λ - λ_;
                        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ
                    } elseλ__ = λ,
                    φ__ = φ;
                    d3_geo_area.point(λ, φ);
                    linePoint(λ, φ)
                }
                function ringStart() {
                    d3_geo_area.lineStart()
                }
                function ringEnd() {
                    ringPoint(λ__, φ__);
                    d3_geo_area.lineEnd();
                    if (abs(dλSum) > ε)λ0 = -(λ1 = 180);
                    range[0] = λ0,
                    range[1] = λ1;
                    p0 = null
                }
                function angle(λ0, λ1) {
                    return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1
                }
                function compareRanges(a, b) {
                    return a[0] - b[0]
                }
                function withinRange(x, range) {
                    return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x
                }
                return function(feature) {φ1 = λ1 = -(λ0 = φ0 = Infinity);
                    ranges = [];
                    d3.geo.stream(feature, bound);
                    var n = ranges.length;
                    if (n) {
                        ranges.sort(compareRanges);
                        for (var i = 1,
                        a = ranges[0], b, merged = [a]; i < n; ++i) {
                            b = ranges[i];
                            if (withinRange(b[0], a) || withinRange(b[1], a)) {
                                if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
                                if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0]
                            } else {
                                merged.push(a = b)
                            }
                        }
                        var best = -Infinity,
                        dλ;
                        for (var n = merged.length - 1,
                        i = 0,
                        a = merged[n], b; i <= n; a = b, ++i) {
                            b = merged[i];
                            if ((dλ = angle(a[1], b[0])) > best) best = dλ,
                            λ0 = b[0],
                            λ1 = a[1]
                        }
                    }
                    ranges = range = null;
                    returnλ0 === Infinity || φ0 === Infinity ? [[NaN, NaN], [NaN, NaN]] : [[λ0, φ0], [λ1, φ1]]
                }
            } ();
            d3.geo.centroid = function(object) {
                d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
                d3.geo.stream(object, d3_geo_centroid);
                var x = d3_geo_centroidX2,
                y = d3_geo_centroidY2,
                z = d3_geo_centroidZ2,
                m = x * x + y * y + z * z;
                if (m < ε2) {
                    x = d3_geo_centroidX1,
                    y = d3_geo_centroidY1,
                    z = d3_geo_centroidZ1;
                    if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0,
                    y = d3_geo_centroidY0,
                    z = d3_geo_centroidZ0;
                    m = x * x + y * y + z * z;
                    if (m < ε2) return [NaN, NaN]
                }
                return [Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees]
            };
            var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
            var d3_geo_centroid = {
                sphere: d3_noop,
                point: d3_geo_centroidPoint,
                lineStart: d3_geo_centroidLineStart,
                lineEnd: d3_geo_centroidLineEnd,
                polygonStart: function() {
                    d3_geo_centroid.lineStart = d3_geo_centroidRingStart
                },
                polygonEnd: function() {
                    d3_geo_centroid.lineStart = d3_geo_centroidLineStart
                }
            };
            function d3_geo_centroidPoint(λ, φ) {λ *= d3_radians;
                var cosφ = Math.cos(φ *= d3_radians);
                d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ))
            }
            function d3_geo_centroidPointXYZ(x, y, z) {++d3_geo_centroidW0;
                d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
                d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
                d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0
            }
            function d3_geo_centroidLineStart() {
                var x0, y0, z0;
                d3_geo_centroid.point = function(λ, φ) {λ *= d3_radians;
                    var cosφ = Math.cos(φ *= d3_radians);
                    x0 = cosφ * Math.cos(λ);
                    y0 = cosφ * Math.sin(λ);
                    z0 = Math.sin(φ);
                    d3_geo_centroid.point = nextPoint;
                    d3_geo_centroidPointXYZ(x0, y0, z0)
                };
                function nextPoint(λ, φ) {λ *= d3_radians;
                    var cosφ = Math.cos(φ *= d3_radians),
                    x = cosφ * Math.cos(λ),
                    y = cosφ * Math.sin(λ),
                    z = Math.sin(φ),
                    w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
                    d3_geo_centroidW1 += w;
                    d3_geo_centroidX1 += w * (x0 + (x0 = x));
                    d3_geo_centroidY1 += w * (y0 + (y0 = y));
                    d3_geo_centroidZ1 += w * (z0 + (z0 = z));
                    d3_geo_centroidPointXYZ(x0, y0, z0)
                }
            }
            function d3_geo_centroidLineEnd() {
                d3_geo_centroid.point = d3_geo_centroidPoint
            }
            function d3_geo_centroidRingStart() {
                varλ00, φ00, x0, y0, z0;
                d3_geo_centroid.point = function(λ, φ) {λ00 = λ,
                    φ00 = φ;
                    d3_geo_centroid.point = nextPoint;λ *= d3_radians;
                    var cosφ = Math.cos(φ *= d3_radians);
                    x0 = cosφ * Math.cos(λ);
                    y0 = cosφ * Math.sin(λ);
                    z0 = Math.sin(φ);
                    d3_geo_centroidPointXYZ(x0, y0, z0)
                };
                d3_geo_centroid.lineEnd = function() {
                    nextPoint(λ00, φ00);
                    d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
                    d3_geo_centroid.point = d3_geo_centroidPoint
                };
                function nextPoint(λ, φ) {λ *= d3_radians;
                    var cosφ = Math.cos(φ *= d3_radians),
                    x = cosφ * Math.cos(λ),
                    y = cosφ * Math.sin(λ),
                    z = Math.sin(φ),
                    cx = y0 * z - z0 * y,
                    cy = z0 * x - x0 * z,
                    cz = x0 * y - y0 * x,
                    m = Math.sqrt(cx * cx + cy * cy + cz * cz),
                    u = x0 * x + y0 * y + z0 * z,
                    v = m && -d3_acos(u) / m,
                    w = Math.atan2(m, u);
                    d3_geo_centroidX2 += v * cx;
                    d3_geo_centroidY2 += v * cy;
                    d3_geo_centroidZ2 += v * cz;
                    d3_geo_centroidW1 += w;
                    d3_geo_centroidX1 += w * (x0 + (x0 = x));
                    d3_geo_centroidY1 += w * (y0 + (y0 = y));
                    d3_geo_centroidZ1 += w * (z0 + (z0 = z));
                    d3_geo_centroidPointXYZ(x0, y0, z0)
                }
            }
            function d3_geo_compose(a, b) {
                function compose(x, y) {
                    return x = a(x, y),
                    b(x[0], x[1])
                }
                if (a.invert && b.invert) compose.invert = function(x, y) {
                    return x = b.invert(x, y),
                    x && a.invert(x[0], x[1])
                };
                return compose
            }
            function d3_true() {
                return true
            }
            function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
                var subject = [],
                clip = [];
                segments.forEach(function(segment) {
                    if ((n = segment.length - 1) <= 0) return;
                    var n, p0 = segment[0],
                    p1 = segment[n];
                    if (d3_geo_sphericalEqual(p0, p1)) {
                        listener.lineStart();
                        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
                        listener.lineEnd();
                        return
                    }
                    var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true),
                    b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
                    a.o = b;
                    subject.push(a);
                    clip.push(b);
                    a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
                    b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
                    a.o = b;
                    subject.push(a);
                    clip.push(b)
                });
                clip.sort(compare);
                d3_geo_clipPolygonLinkCircular(subject);
                d3_geo_clipPolygonLinkCircular(clip);
                if (!subject.length) return;
                for (var i = 0,
                entry = clipStartInside,
                n = clip.length; i < n; ++i) {
                    clip[i].e = entry = !entry
                }
                var start = subject[0],
                points,
                point;
                while (1) {
                    var current = start,
                    isSubject = true;
                    while (current.v) if ((current = current.n) === start) return;
                    points = current.z;
                    listener.lineStart();
                    do {
                        current.v = current.o.v = true;
                        if (current.e) {
                            if (isSubject) {
                                for (var i = 0,
                                n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1])
                            } else {
                                interpolate(current.x, current.n.x, 1, listener)
                            }
                            current = current.n
                        } else {
                            if (isSubject) {
                                points = current.p.z;
                                for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1])
                            } else {
                                interpolate(current.x, current.p.x, -1, listener)
                            }
                            current = current.p
                        }
                        current = current.o;
                        points = current.z;
                        isSubject = !isSubject
                    } while (! current . v );
                    listener.lineEnd()
                }
            }
            function d3_geo_clipPolygonLinkCircular(array) {
                if (! (n = array.length)) return;
                var n, i = 0,
                a = array[0],
                b;
                while (++i < n) {
                    a.n = b = array[i];
                    b.p = a;
                    a = b
                }
                a.n = b = array[0];
                b.p = a
            }
            function d3_geo_clipPolygonIntersection(point, points, other, entry) {
                this.x = point;
                this.z = points;
                this.o = other;
                this.e = entry;
                this.v = false;
                this.n = this.p = null
            }
            function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
                return function(rotate, listener) {
                    var line = clipLine(listener),
                    rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
                    var clip = {
                        point: point,
                        lineStart: lineStart,
                        lineEnd: lineEnd,
                        polygonStart: function() {
                            clip.point = pointRing;
                            clip.lineStart = ringStart;
                            clip.lineEnd = ringEnd;
                            segments = [];
                            polygon = []
                        },
                        polygonEnd: function() {
                            clip.point = point;
                            clip.lineStart = lineStart;
                            clip.lineEnd = lineEnd;
                            segments = d3.merge(segments);
                            var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
                            if (segments.length) {
                                if (!polygonStarted) listener.polygonStart(),
                                polygonStarted = true;
                                d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener)
                            } else if (clipStartInside) {
                                if (!polygonStarted) listener.polygonStart(),
                                polygonStarted = true;
                                listener.lineStart();
                                interpolate(null, null, 1, listener);
                                listener.lineEnd()
                            }
                            if (polygonStarted) listener.polygonEnd(),
                            polygonStarted = false;
                            segments = polygon = null
                        },
                        sphere: function() {
                            listener.polygonStart();
                            listener.lineStart();
                            interpolate(null, null, 1, listener);
                            listener.lineEnd();
                            listener.polygonEnd()
                        }
                    };
                    function point(λ, φ) {
                        var point = rotate(λ, φ);
                        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ)
                    }
                    function pointLine(λ, φ) {
                        var point = rotate(λ, φ);
                        line.point(point[0], point[1])
                    }
                    function lineStart() {
                        clip.point = pointLine;
                        line.lineStart()
                    }
                    function lineEnd() {
                        clip.point = point;
                        line.lineEnd()
                    }
                    var segments;
                    var buffer = d3_geo_clipBufferListener(),
                    ringListener = clipLine(buffer),
                    polygonStarted = false,
                    polygon,
                    ring;
                    function pointRing(λ, φ) {
                        ring.push([λ, φ]);
                        var point = rotate(λ, φ);
                        ringListener.point(point[0], point[1])
                    }
                    function ringStart() {
                        ringListener.lineStart();
                        ring = []
                    }
                    function ringEnd() {
                        pointRing(ring[0][0], ring[0][1]);
                        ringListener.lineEnd();
                        var clean = ringListener.clean(),
                        ringSegments = buffer.buffer(),
                        segment,
                        n = ringSegments.length;
                        ring.pop();
                        polygon.push(ring);
                        ring = null;
                        if (!n) return;
                        if (clean & 1) {
                            segment = ringSegments[0];
                            var n = segment.length - 1,
                            i = -1,
                            point;
                            if (n > 0) {
                                if (!polygonStarted) listener.polygonStart(),
                                polygonStarted = true;
                                listener.lineStart();
                                while (++i < n) listener.point((point = segment[i])[0], point[1]);
                                listener.lineEnd()
                            }
                            return
                        }
                        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
                        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1))
                    }
                    return clip
                }
            }
            function d3_geo_clipSegmentLength1(segment) {
                return segment.length > 1
            }
            function d3_geo_clipBufferListener() {
                var lines = [],
                line;
                return {
                    lineStart: function() {
                        lines.push(line = [])
                    },
                    point: function(λ, φ) {
                        line.push([λ, φ])
                    },
                    lineEnd: d3_noop,
                    buffer: function() {
                        var buffer = lines;
                        lines = [];
                        line = null;
                        return buffer
                    },
                    rejoin: function() {
                        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()))
                    }
                }
            }
            function d3_geo_clipSort(a, b) {
                return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε: halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε: halfπ - b[1])
            }
            var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ - π, -π / 2]);
            function d3_geo_clipAntimeridianLine(listener) {
                varλ0 = NaN,
                φ0 = NaN,
                sλ0 = NaN,
                clean;
                return {
                    lineStart: function() {
                        listener.lineStart();
                        clean = 1
                    },
                    point: function(λ1, φ1) {
                        var sλ1 = λ1 > 0 ? π: -π,
                        dλ = abs(λ1 - λ0);
                        if (abs(dλ - π) < ε) {
                            listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ: -halfπ);
                            listener.point(sλ0, φ0);
                            listener.lineEnd();
                            listener.lineStart();
                            listener.point(sλ1, φ0);
                            listener.point(λ1, φ0);
                            clean = 0
                        } else if (sλ0 !== sλ1 && dλ >= π) {
                            if (abs(λ0 - sλ0) < ε)λ0 -= sλ0 * ε;
                            if (abs(λ1 - sλ1) < ε)λ1 -= sλ1 * ε;φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
                            listener.point(sλ0, φ0);
                            listener.lineEnd();
                            listener.lineStart();
                            listener.point(sλ1, φ0);
                            clean = 0
                        }
                        listener.point(λ0 = λ1, φ0 = φ1);
                        sλ0 = sλ1
                    },
                    lineEnd: function() {
                        listener.lineEnd();λ0 = φ0 = NaN
                    },
                    clean: function() {
                        return 2 - clean
                    }
                }
            }
            function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
                var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
                return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2
            }
            function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
                varφ;
                if (from == null) {φ = direction * halfπ;
                    listener.point( - π, φ);
                    listener.point(0, φ);
                    listener.point(π, φ);
                    listener.point(π, 0);
                    listener.point(π, -φ);
                    listener.point(0, -φ);
                    listener.point( - π, -φ);
                    listener.point( - π, 0);
                    listener.point( - π, φ)
                } else if (abs(from[0] - to[0]) > ε) {
                    var s = from[0] < to[0] ? π: -π;φ = direction * s / 2;
                    listener.point( - s, φ);
                    listener.point(0, φ);
                    listener.point(s, φ)
                } else {
                    listener.point(to[0], to[1])
                }
            }
            function d3_geo_pointInPolygon(point, polygon) {
                var meridian = point[0],
                parallel = point[1],
                meridianNormal = [Math.sin(meridian), -Math.cos(meridian), 0],
                polarAngle = 0,
                winding = 0;
                d3_geo_areaRingSum.reset();
                for (var i = 0,
                n = polygon.length; i < n; ++i) {
                    var ring = polygon[i],
                    m = ring.length;
                    if (!m) continue;
                    var point0 = ring[0],
                    λ0 = point0[0],
                    φ0 = point0[1] / 2 + π / 4,
                    sinφ0 = Math.sin(φ0),
                    cosφ0 = Math.cos(φ0),
                    j = 1;
                    while (true) {
                        if (j === m) j = 0;
                        point = ring[j];
                        varλ = point[0],
                        φ = point[1] / 2 + π / 4,
                        sinφ = Math.sin(φ),
                        cosφ = Math.cos(φ),
                        dλ = λ - λ0,
                        sdλ = dλ >= 0 ? 1 : -1,
                        adλ = sdλ * dλ,
                        antimeridian = adλ > π,
                        k = sinφ0 * sinφ;
                        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
                        polarAngle += antimeridian ? dλ + sdλ * τ: dλ;
                        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
                            var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
                            d3_geo_cartesianNormalize(arc);
                            var intersection = d3_geo_cartesianCross(meridianNormal, arc);
                            d3_geo_cartesianNormalize(intersection);
                            varφarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
                            if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
                                winding += antimeridian ^ dλ >= 0 ? 1 : -1
                            }
                        }
                        if (!j++) break;λ0 = λ,
                        sinφ0 = sinφ,
                        cosφ0 = cosφ,
                        point0 = point
                    }
                }
                return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < 0) ^ winding & 1
            }
            function d3_geo_clipCircle(radius) {
                var cr = Math.cos(radius),
                smallRadius = cr > 0,
                notHemisphere = abs(cr) > ε,
                interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
                return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [ - π, radius - π]);
                function visible(λ, φ) {
                    return Math.cos(λ) * Math.cos(φ) > cr
                }
                function clipLine(listener) {
                    var point0, c0, v0, v00, clean;
                    return {
                        lineStart: function() {
                            v00 = v0 = false;
                            clean = 1
                        },
                        point: function(λ, φ) {
                            var point1 = [λ, φ],
                            point2,
                            v = visible(λ, φ),
                            c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π: -π), φ) : 0;
                            if (!point0 && (v00 = v0 = v)) listener.lineStart();
                            if (v !== v0) {
                                point2 = intersect(point0, point1);
                                if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
                                    point1[0] += ε;
                                    point1[1] += ε;
                                    v = visible(point1[0], point1[1])
                                }
                            }
                            if (v !== v0) {
                                clean = 0;
                                if (v) {
                                    listener.lineStart();
                                    point2 = intersect(point1, point0);
                                    listener.point(point2[0], point2[1])
                                } else {
                                    point2 = intersect(point0, point1);
                                    listener.point(point2[0], point2[1]);
                                    listener.lineEnd()
                                }
                                point0 = point2
                            } else if (notHemisphere && point0 && smallRadius ^ v) {
                                var t;
                                if (! (c & c0) && (t = intersect(point1, point0, true))) {
                                    clean = 0;
                                    if (smallRadius) {
                                        listener.lineStart();
                                        listener.point(t[0][0], t[0][1]);
                                        listener.point(t[1][0], t[1][1]);
                                        listener.lineEnd()
                                    } else {
                                        listener.point(t[1][0], t[1][1]);
                                        listener.lineEnd();
                                        listener.lineStart();
                                        listener.point(t[0][0], t[0][1])
                                    }
                                }
                            }
                            if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
                                listener.point(point1[0], point1[1])
                            }
                            point0 = point1,
                            v0 = v,
                            c0 = c
                        },
                        lineEnd: function() {
                            if (v0) listener.lineEnd();
                            point0 = null
                        },
                        clean: function() {
                            return clean | (v00 && v0) << 1
                        }
                    }
                }
                function intersect(a, b, two) {
                    var pa = d3_geo_cartesian(a),
                    pb = d3_geo_cartesian(b);
                    var n1 = [1, 0, 0],
                    n2 = d3_geo_cartesianCross(pa, pb),
                    n2n2 = d3_geo_cartesianDot(n2, n2),
                    n1n2 = n2[0],
                    determinant = n2n2 - n1n2 * n1n2;
                    if (!determinant) return ! two && a;
                    var c1 = cr * n2n2 / determinant,
                    c2 = -cr * n1n2 / determinant,
                    n1xn2 = d3_geo_cartesianCross(n1, n2),
                    A = d3_geo_cartesianScale(n1, c1),
                    B = d3_geo_cartesianScale(n2, c2);
                    d3_geo_cartesianAdd(A, B);
                    var u = n1xn2,
                    w = d3_geo_cartesianDot(A, u),
                    uu = d3_geo_cartesianDot(u, u),
                    t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
                    if (t2 < 0) return;
                    var t = Math.sqrt(t2),
                    q = d3_geo_cartesianScale(u, ( - w - t) / uu);
                    d3_geo_cartesianAdd(q, A);
                    q = d3_geo_spherical(q);
                    if (!two) return q;
                    varλ0 = a[0],
                    λ1 = b[0],
                    φ0 = a[1],
                    φ1 = b[1],
                    z;
                    if (λ1 < λ0) z = λ0,
                    λ0 = λ1,
                    λ1 = z;
                    varδλ = λ1 - λ0,
                    polar = abs(δλ - π) < ε,
                    meridian = polar || δλ < ε;
                    if (!polar && φ1 < φ0) z = φ0,
                    φ0 = φ1,
                    φ1 = z;
                    if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
                        var q1 = d3_geo_cartesianScale(u, ( - w + t) / uu);
                        d3_geo_cartesianAdd(q1, A);
                        return [q, d3_geo_spherical(q1)]
                    }
                }
                function code(λ, φ) {
                    var r = smallRadius ? radius: π - radius,
                    code = 0;
                    if (λ < -r) code |= 1;
                    else if (λ > r) code |= 2;
                    if (φ < -r) code |= 4;
                    else if (φ > r) code |= 8;
                    return code
                }
            }
            function d3_geom_clipLine(x0, y0, x1, y1) {
                return function(line) {
                    var a = line.a,
                    b = line.b,
                    ax = a.x,
                    ay = a.y,
                    bx = b.x,
                    by = b.y,
                    t0 = 0,
                    t1 = 1,
                    dx = bx - ax,
                    dy = by - ay,
                    r;
                    r = x0 - ax;
                    if (!dx && r > 0) return;
                    r /= dx;
                    if (dx < 0) {
                        if (r < t0) return;
                        if (r < t1) t1 = r
                    } else if (dx > 0) {
                        if (r > t1) return;
                        if (r > t0) t0 = r
                    }
                    r = x1 - ax;
                    if (!dx && r < 0) return;
                    r /= dx;
                    if (dx < 0) {
                        if (r > t1) return;
                        if (r > t0) t0 = r
                    } else if (dx > 0) {
                        if (r < t0) return;
                        if (r < t1) t1 = r
                    }
                    r = y0 - ay;
                    if (!dy && r > 0) return;
                    r /= dy;
                    if (dy < 0) {
                        if (r < t0) return;
                        if (r < t1) t1 = r
                    } else if (dy > 0) {
                        if (r > t1) return;
                        if (r > t0) t0 = r
                    }
                    r = y1 - ay;
                    if (!dy && r < 0) return;
                    r /= dy;
                    if (dy < 0) {
                        if (r > t1) return;
                        if (r > t0) t0 = r
                    } else if (dy > 0) {
                        if (r < t0) return;
                        if (r < t1) t1 = r
                    }
                    if (t0 > 0) line.a = {
                        x: ax + t0 * dx,
                        y: ay + t0 * dy
                    };
                    if (t1 < 1) line.b = {
                        x: ax + t1 * dx,
                        y: ay + t1 * dy
                    };
                    return line
                }
            }
            var d3_geo_clipExtentMAX = 1e9;
            d3.geo.clipExtent = function() {
                var x0, y0, x1, y1, stream, clip, clipExtent = {
                    stream: function(output) {
                        if (stream) stream.valid = false;
                        stream = clip(output);
                        stream.valid = true;
                        return stream
                    },
                    extent: function(_) {
                        if (!arguments.length) return [[x0, y0], [x1, y1]];
                        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
                        if (stream) stream.valid = false,
                        stream = null;
                        return clipExtent
                    }
                };
                return clipExtent.extent([[0, 0], [960, 500]])
            };
            function d3_geo_clipExtent(x0, y0, x1, y1) {
                return function(listener) {
                    var listener_ = listener,
                    bufferListener = d3_geo_clipBufferListener(),
                    clipLine = d3_geom_clipLine(x0, y0, x1, y1),
                    segments,
                    polygon,
                    ring;
                    var clip = {
                        point: point,
                        lineStart: lineStart,
                        lineEnd: lineEnd,
                        polygonStart: function() {
                            listener = bufferListener;
                            segments = [];
                            polygon = [];
                            clean = true
                        },
                        polygonEnd: function() {
                            listener = listener_;
                            segments = d3.merge(segments);
                            var clipStartInside = insidePolygon([x0, y1]),
                            inside = clean && clipStartInside,
                            visible = segments.length;
                            if (inside || visible) {
                                listener.polygonStart();
                                if (inside) {
                                    listener.lineStart();
                                    interpolate(null, null, 1, listener);
                                    listener.lineEnd()
                                }
                                if (visible) {
                                    d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener)
                                }
                                listener.polygonEnd()
                            }
                            segments = polygon = ring = null
                        }
                    };
                    function insidePolygon(p) {
                        var wn = 0,
                        n = polygon.length,
                        y = p[1];
                        for (var i = 0; i < n; ++i) {
                            for (var j = 1,
                            v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
                                b = v[j];
                                if (a[1] <= y) {
                                    if (b[1] > y && d3_cross2d(a, b, p) > 0)++wn
                                } else {
                                    if (b[1] <= y && d3_cross2d(a, b, p) < 0)--wn
                                }
                                a = b
                            }
                        }
                        return wn !== 0
                    }
                    function interpolate(from, to, direction, listener) {
                        var a = 0,
                        a1 = 0;
                        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
                            do {
                                listener.point(a === 0 || a === 3 ? x0: x1, a > 1 ? y1: y0)
                            } while (( a = ( a + direction + 4 ) % 4) !== a1)
                        } else {
                            listener.point(to[0], to[1])
                        }
                    }
                    function pointVisible(x, y) {
                        return x0 <= x && x <= x1 && y0 <= y && y <= y1
                    }
                    function point(x, y) {
                        if (pointVisible(x, y)) listener.point(x, y)
                    }
                    var x__, y__, v__, x_, y_, v_, first, clean;
                    function lineStart() {
                        clip.point = linePoint;
                        if (polygon) polygon.push(ring = []);
                        first = true;
                        v_ = false;
                        x_ = y_ = NaN
                    }
                    function lineEnd() {
                        if (segments) {
                            linePoint(x__, y__);
                            if (v__ && v_) bufferListener.rejoin();
                            segments.push(bufferListener.buffer())
                        }
                        clip.point = point;
                        if (v_) listener.lineEnd()
                    }
                    function linePoint(x, y) {
                        x = Math.max( - d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
                        y = Math.max( - d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
                        var v = pointVisible(x, y);
                        if (polygon) ring.push([x, y]);
                        if (first) {
                            x__ = x,
                            y__ = y,
                            v__ = v;
                            first = false;
                            if (v) {
                                listener.lineStart();
                                listener.point(x, y)
                            }
                        } else {
                            if (v && v_) listener.point(x, y);
                            else {
                                var l = {
                                    a: {
                                        x: x_,
                                        y: y_
                                    },
                                    b: {
                                        x: x,
                                        y: y
                                    }
                                };
                                if (clipLine(l)) {
                                    if (!v_) {
                                        listener.lineStart();
                                        listener.point(l.a.x, l.a.y)
                                    }
                                    listener.point(l.b.x, l.b.y);
                                    if (!v) listener.lineEnd();
                                    clean = false
                                } else if (v) {
                                    listener.lineStart();
                                    listener.point(x, y);
                                    clean = false
                                }
                            }
                        }
                        x_ = x,
                        y_ = y,
                        v_ = v
                    }
                    return clip
                };
                function corner(p, direction) {
                    return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2
                }
                function compare(a, b) {
                    return comparePoints(a.x, b.x)
                }
                function comparePoints(a, b) {
                    var ca = corner(a, 1),
                    cb = corner(b, 1);
                    return ca !== cb ? ca - cb: ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0]
                }
            }
            function d3_geo_conic(projectAt) {
                varφ0 = 0,
                φ1 = π / 3,
                m = d3_geo_projectionMutator(projectAt),
                p = m(φ0, φ1);
                p.parallels = function(_) {
                    if (!arguments.length) return [φ0 / π * 180, φ1 / π * 180];
                    return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180)
                };
                return p
            }
            function d3_geo_conicEqualArea(φ0, φ1) {
                var sinφ0 = Math.sin(φ0),
                n = (sinφ0 + Math.sin(φ1)) / 2,
                C = 1 + sinφ0 * (2 * n - sinφ0),
                ρ0 = Math.sqrt(C) / n;
                function forward(λ, φ) {
                    varρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
                    return [ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ)]
                }
                forward.invert = function(x, y) {
                    varρ0_y = ρ0 - y;
                    return [Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n))]
                };
                return forward
            } (d3.geo.conicEqualArea = function() {
                return d3_geo_conic(d3_geo_conicEqualArea)
            }).raw = d3_geo_conicEqualArea;
            d3.geo.albers = function() {
                return d3.geo.conicEqualArea().rotate([96, 0]).center([ - .6, 38.7]).parallels([29.5, 45.5]).scale(1070)
            };
            d3.geo.albersUsa = function() {
                var lower48 = d3.geo.albers();
                var alaska = d3.geo.conicEqualArea().rotate([154, 0]).center([ - 2, 58.5]).parallels([55, 65]);
                var hawaii = d3.geo.conicEqualArea().rotate([157, 0]).center([ - 3, 19.9]).parallels([8, 18]);
                var point, pointStream = {
                    point: function(x, y) {
                        point = [x, y]
                    }
                },
                lower48Point,
                alaskaPoint,
                hawaiiPoint;
                function albersUsa(coordinates) {
                    var x = coordinates[0],
                    y = coordinates[1];
                    point = null; (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
                    return point
                }
                albersUsa.invert = function(coordinates) {
                    var k = lower48.scale(),
                    t = lower48.translate(),
                    x = (coordinates[0] - t[0]) / k,
                    y = (coordinates[1] - t[1]) / k;
                    return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska: y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii: lower48).invert(coordinates)
                };
                albersUsa.stream = function(stream) {
                    var lower48Stream = lower48.stream(stream),
                    alaskaStream = alaska.stream(stream),
                    hawaiiStream = hawaii.stream(stream);
                    return {
                        point: function(x, y) {
                            lower48Stream.point(x, y);
                            alaskaStream.point(x, y);
                            hawaiiStream.point(x, y)
                        },
                        sphere: function() {
                            lower48Stream.sphere();
                            alaskaStream.sphere();
                            hawaiiStream.sphere()
                        },
                        lineStart: function() {
                            lower48Stream.lineStart();
                            alaskaStream.lineStart();
                            hawaiiStream.lineStart()
                        },
                        lineEnd: function() {
                            lower48Stream.lineEnd();
                            alaskaStream.lineEnd();
                            hawaiiStream.lineEnd()
                        },
                        polygonStart: function() {
                            lower48Stream.polygonStart();
                            alaskaStream.polygonStart();
                            hawaiiStream.polygonStart()
                        },
                        polygonEnd: function() {
                            lower48Stream.polygonEnd();
                            alaskaStream.polygonEnd();
                            hawaiiStream.polygonEnd()
                        }
                    }
                };
                albersUsa.precision = function(_) {
                    if (!arguments.length) return lower48.precision();
                    lower48.precision(_);
                    alaska.precision(_);
                    hawaii.precision(_);
                    return albersUsa
                };
                albersUsa.scale = function(_) {
                    if (!arguments.length) return lower48.scale();
                    lower48.scale(_);
                    alaska.scale(_ * .35);
                    hawaii.scale(_);
                    return albersUsa.translate(lower48.translate())
                };
                albersUsa.translate = function(_) {
                    if (!arguments.length) return lower48.translate();
                    var k = lower48.scale(),
                    x = +_[0],
                    y = +_[1];
                    lower48Point = lower48.translate(_).clipExtent([[x - .455 * k, y - .238 * k], [x + .455 * k, y + .238 * k]]).stream(pointStream).point;
                    alaskaPoint = alaska.translate([x - .307 * k, y + .201 * k]).clipExtent([[x - .425 * k + ε, y + .12 * k + ε], [x - .214 * k - ε, y + .234 * k - ε]]).stream(pointStream).point;
                    hawaiiPoint = hawaii.translate([x - .205 * k, y + .212 * k]).clipExtent([[x - .214 * k + ε, y + .166 * k + ε], [x - .115 * k - ε, y + .234 * k - ε]]).stream(pointStream).point;
                    return albersUsa
                };
                return albersUsa.scale(1070)
            };
            var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
                point: d3_noop,
                lineStart: d3_noop,
                lineEnd: d3_noop,
                polygonStart: function() {
                    d3_geo_pathAreaPolygon = 0;
                    d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart
                },
                polygonEnd: function() {
                    d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
                    d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2)
                }
            };
            function d3_geo_pathAreaRingStart() {
                var x00, y00, x0, y0;
                d3_geo_pathArea.point = function(x, y) {
                    d3_geo_pathArea.point = nextPoint;
                    x00 = x0 = x,
                    y00 = y0 = y
                };
                function nextPoint(x, y) {
                    d3_geo_pathAreaPolygon += y0 * x - x0 * y;
                    x0 = x,
                    y0 = y
                }
                d3_geo_pathArea.lineEnd = function() {
                    nextPoint(x00, y00)
                }
            }
            var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
            var d3_geo_pathBounds = {
                point: d3_geo_pathBoundsPoint,
                lineStart: d3_noop,
                lineEnd: d3_noop,
                polygonStart: d3_noop,
                polygonEnd: d3_noop
            };
            function d3_geo_pathBoundsPoint(x, y) {
                if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
                if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
                if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
                if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y
            }
            function d3_geo_pathBuffer() {
                var pointCircle = d3_geo_pathBufferCircle(4.5),
                buffer = [];
                var stream = {
                    point: point,
                    lineStart: function() {
                        stream.point = pointLineStart
                    },
                    lineEnd: lineEnd,
                    polygonStart: function() {
                        stream.lineEnd = lineEndPolygon
                    },
                    polygonEnd: function() {
                        stream.lineEnd = lineEnd;
                        stream.point = point
                    },
                    pointRadius: function(_) {
                        pointCircle = d3_geo_pathBufferCircle(_);
                        return stream
                    },
                    result: function() {
                        if (buffer.length) {
                            var result = buffer.join("");
                            buffer = [];
                            return result
                        }
                    }
                };
                function point(x, y) {
                    buffer.push("M", x, ",", y, pointCircle)
                }
                function pointLineStart(x, y) {
                    buffer.push("M", x, ",", y);
                    stream.point = pointLine
                }
                function pointLine(x, y) {
                    buffer.push("L", x, ",", y)
                }
                function lineEnd() {
                    stream.point = point
                }
                function lineEndPolygon() {
                    buffer.push("Z")
                }
                return stream
            }
            function d3_geo_pathBufferCircle(radius) {
                return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z"
            }
            var d3_geo_pathCentroid = {
                point: d3_geo_pathCentroidPoint,
                lineStart: d3_geo_pathCentroidLineStart,
                lineEnd: d3_geo_pathCentroidLineEnd,
                polygonStart: function() {
                    d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart
                },
                polygonEnd: function() {
                    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
                    d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
                    d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd
                }
            };
            function d3_geo_pathCentroidPoint(x, y) {
                d3_geo_centroidX0 += x;
                d3_geo_centroidY0 += y; ++d3_geo_centroidZ0
            }
            function d3_geo_pathCentroidLineStart() {
                var x0, y0;
                d3_geo_pathCentroid.point = function(x, y) {
                    d3_geo_pathCentroid.point = nextPoint;
                    d3_geo_pathCentroidPoint(x0 = x, y0 = y)
                };
                function nextPoint(x, y) {
                    var dx = x - x0,
                    dy = y - y0,
                    z = Math.sqrt(dx * dx + dy * dy);
                    d3_geo_centroidX1 += z * (x0 + x) / 2;
                    d3_geo_centroidY1 += z * (y0 + y) / 2;
                    d3_geo_centroidZ1 += z;
                    d3_geo_pathCentroidPoint(x0 = x, y0 = y)
                }
            }
            function d3_geo_pathCentroidLineEnd() {
                d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint
            }
            function d3_geo_pathCentroidRingStart() {
                var x00, y00, x0, y0;
                d3_geo_pathCentroid.point = function(x, y) {
                    d3_geo_pathCentroid.point = nextPoint;
                    d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y)
                };
                function nextPoint(x, y) {
                    var dx = x - x0,
                    dy = y - y0,
                    z = Math.sqrt(dx * dx + dy * dy);
                    d3_geo_centroidX1 += z * (x0 + x) / 2;
                    d3_geo_centroidY1 += z * (y0 + y) / 2;
                    d3_geo_centroidZ1 += z;
                    z = y0 * x - x0 * y;
                    d3_geo_centroidX2 += z * (x0 + x);
                    d3_geo_centroidY2 += z * (y0 + y);
                    d3_geo_centroidZ2 += z * 3;
                    d3_geo_pathCentroidPoint(x0 = x, y0 = y)
                }
                d3_geo_pathCentroid.lineEnd = function() {
                    nextPoint(x00, y00)
                }
            }
            function d3_geo_pathContext(context) {
                var pointRadius = 4.5;
                var stream = {
                    point: point,
                    lineStart: function() {
                        stream.point = pointLineStart
                    },
                    lineEnd: lineEnd,
                    polygonStart: function() {
                        stream.lineEnd = lineEndPolygon
                    },
                    polygonEnd: function() {
                        stream.lineEnd = lineEnd;
                        stream.point = point
                    },
                    pointRadius: function(_) {
                        pointRadius = _;
                        return stream
                    },
                    result: d3_noop
                };
                function point(x, y) {
                    context.moveTo(x + pointRadius, y);
                    context.arc(x, y, pointRadius, 0, τ)
                }
                function pointLineStart(x, y) {
                    context.moveTo(x, y);
                    stream.point = pointLine
                }
                function pointLine(x, y) {
                    context.lineTo(x, y)
                }
                function lineEnd() {
                    stream.point = point
                }
                function lineEndPolygon() {
                    context.closePath()
                }
                return stream
            }
            function d3_geo_resample(project) {
                varδ2 = .5,
                cosMinDistance = Math.cos(30 * d3_radians),
                maxDepth = 16;
                function resample(stream) {
                    return (maxDepth ? resampleRecursive: resampleNone)(stream)
                }
                function resampleNone(stream) {
                    return d3_geo_transformPoint(stream,
                    function(x, y) {
                        x = project(x, y);
                        stream.point(x[0], x[1])
                    })
                }
                function resampleRecursive(stream) {
                    varλ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
                    var resample = {
                        point: point,
                        lineStart: lineStart,
                        lineEnd: lineEnd,
                        polygonStart: function() {
                            stream.polygonStart();
                            resample.lineStart = ringStart
                        },
                        polygonEnd: function() {
                            stream.polygonEnd();
                            resample.lineStart = lineStart
                        }
                    };
                    function point(x, y) {
                        x = project(x, y);
                        stream.point(x[0], x[1])
                    }
                    function lineStart() {
                        x0 = NaN;
                        resample.point = linePoint;
                        stream.lineStart()
                    }
                    function linePoint(λ, φ) {
                        var c = d3_geo_cartesian([λ, φ]),
                        p = project(λ, φ);
                        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
                        stream.point(x0, y0)
                    }
                    function lineEnd() {
                        resample.point = point;
                        stream.lineEnd()
                    }
                    function ringStart() {
                        lineStart();
                        resample.point = ringPoint;
                        resample.lineEnd = ringEnd
                    }
                    function ringPoint(λ, φ) {
                        linePoint(λ00 = λ, φ00 = φ),
                        x00 = x0,
                        y00 = y0,
                        a00 = a0,
                        b00 = b0,
                        c00 = c0;
                        resample.point = linePoint
                    }
                    function ringEnd() {
                        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
                        resample.lineEnd = lineEnd;
                        lineEnd()
                    }
                    return resample
                }
                function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
                    var dx = x1 - x0,
                    dy = y1 - y0,
                    d2 = dx * dx + dy * dy;
                    if (d2 > 4 * δ2 && depth--) {
                        var a = a0 + a1,
                        b = b0 + b1,
                        c = c0 + c1,
                        m = Math.sqrt(a * a + b * b + c * c),
                        φ2 = Math.asin(c /= m),
                        λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a),
                        p = project(λ2, φ2),
                        x2 = p[0],
                        y2 = p[1],
                        dx2 = x2 - x0,
                        dy2 = y2 - y0,
                        dz = dy * dx2 - dx * dy2;
                        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
                            resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
                            stream.point(x2, y2);
                            resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream)
                        }
                    }
                }
                resample.precision = function(_) {
                    if (!arguments.length) return Math.sqrt(δ2);
                    maxDepth = (δ2 = _ * _) > 0 && 16;
                    return resample
                };
                return resample
            }
            d3.geo.path = function() {
                var pointRadius = 4.5,
                projection, context, projectStream, contextStream, cacheStream;
                function path(object) {
                    if (object) {
                        if (typeof pointRadius === "function") contextStream.pointRadius( + pointRadius.apply(this, arguments));
                        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
                        d3.geo.stream(object, cacheStream)
                    }
                    return contextStream.result()
                }
                path.area = function(object) {
                    d3_geo_pathAreaSum = 0;
                    d3.geo.stream(object, projectStream(d3_geo_pathArea));
                    return d3_geo_pathAreaSum
                };
                path.centroid = function(object) {
                    d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
                    d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
                    return d3_geo_centroidZ2 ? [d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2] : d3_geo_centroidZ1 ? [d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1] : d3_geo_centroidZ0 ? [d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0] : [NaN, NaN]
                };
                path.bounds = function(object) {
                    d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
                    d3.geo.stream(object, projectStream(d3_geo_pathBounds));
                    return [[d3_geo_pathBoundsX0, d3_geo_pathBoundsY0], [d3_geo_pathBoundsX1, d3_geo_pathBoundsY1]]
                };
                path.projection = function(_) {
                    if (!arguments.length) return projection;
                    projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
                    return reset()
                };
                path.context = function(_) {
                    if (!arguments.length) return context;
                    contextStream = (context = _) == null ? new d3_geo_pathBuffer: new d3_geo_pathContext(_);
                    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
                    return reset()
                };
                path.pointRadius = function(_) {
                    if (!arguments.length) return pointRadius;
                    pointRadius = typeof _ === "function" ? _: (contextStream.pointRadius( + _), +_);
                    return path
                };
                function reset() {
                    cacheStream = null;
                    return path
                }
                return path.projection(d3.geo.albersUsa()).context(null)
            };
            function d3_geo_pathProjectStream(project) {
                var resample = d3_geo_resample(function(x, y) {
                    return project([x * d3_degrees, y * d3_degrees])
                });
                return function(stream) {
                    return d3_geo_projectionRadians(resample(stream))
                }
            }
            d3.geo.transform = function(methods) {
                return {
                    stream: function(stream) {
                        var transform = new d3_geo_transform(stream);
                        for (var k in methods) transform[k] = methods[k];
                        return transform
                    }
                }
            };
            function d3_geo_transform(stream) {
                this.stream = stream
            }
            d3_geo_transform.prototype = {
                point: function(x, y) {
                    this.stream.point(x, y)
                },
                sphere: function() {
                    this.stream.sphere()
                },
                lineStart: function() {
                    this.stream.lineStart()
                },
                lineEnd: function() {
                    this.stream.lineEnd()
                },
                polygonStart: function() {
                    this.stream.polygonStart()
                },
                polygonEnd: function() {
                    this.stream.polygonEnd()
                }
            };
            function d3_geo_transformPoint(stream, point) {
                return {
                    point: point,
                    sphere: function() {
                        stream.sphere()
                    },
                    lineStart: function() {
                        stream.lineStart()
                    },
                    lineEnd: function() {
                        stream.lineEnd()
                    },
                    polygonStart: function() {
                        stream.polygonStart()
                    },
                    polygonEnd: function() {
                        stream.polygonEnd()
                    }
                }
            }
            d3.geo.projection = d3_geo_projection;
            d3.geo.projectionMutator = d3_geo_projectionMutator;
            function d3_geo_projection(project) {
                return d3_geo_projectionMutator(function() {
                    return project
                })()
            }
            function d3_geo_projectionMutator(projectAt) {
                var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
                    x = project(x, y);
                    return [x[0] * k + δx, δy - x[1] * k]
                }),
                k = 150,
                x = 480,
                y = 250,
                λ = 0,
                φ = 0,
                δλ = 0,
                δφ = 0,
                δγ = 0,
                δx,
                δy,
                preclip = d3_geo_clipAntimeridian,
                postclip = d3_identity,
                clipAngle = null,
                clipExtent = null,
                stream;
                function projection(point) {
                    point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
                    return [point[0] * k + δx, δy - point[1] * k]
                }
                function invert(point) {
                    point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
                    return point && [point[0] * d3_degrees, point[1] * d3_degrees]
                }
                projection.stream = function(output) {
                    if (stream) stream.valid = false;
                    stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
                    stream.valid = true;
                    return stream
                };
                projection.clipAngle = function(_) {
                    if (!arguments.length) return clipAngle;
                    preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
                    return invalidate()
                };
                projection.clipExtent = function(_) {
                    if (!arguments.length) return clipExtent;
                    clipExtent = _;
                    postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
                    return invalidate()
                };
                projection.scale = function(_) {
                    if (!arguments.length) return k;
                    k = +_;
                    return reset()
                };
                projection.translate = function(_) {
                    if (!arguments.length) return [x, y];
                    x = +_[0];
                    y = +_[1];
                    return reset()
                };
                projection.center = function(_) {
                    if (!arguments.length) return [λ * d3_degrees, φ * d3_degrees];λ = _[0] % 360 * d3_radians;φ = _[1] % 360 * d3_radians;
                    return reset()
                };
                projection.rotate = function(_) {
                    if (!arguments.length) return [δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees];δλ = _[0] % 360 * d3_radians;δφ = _[1] % 360 * d3_radians;δγ = _.length > 2 ? _[2] % 360 * d3_radians: 0;
                    return reset()
                };
                d3.rebind(projection, projectResample, "precision");
                function reset() {
                    projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
                    var center = project(λ, φ);δx = x - center[0] * k;δy = y + center[1] * k;
                    return invalidate()
                }
                function invalidate() {
                    if (stream) stream.valid = false,
                    stream = null;
                    return projection
                }
                return function() {
                    project = projectAt.apply(this, arguments);
                    projection.invert = project.invert && invert;
                    return reset()
                }
            }
            function d3_geo_projectionRadians(stream) {
                return d3_geo_transformPoint(stream,
                function(x, y) {
                    stream.point(x * d3_radians, y * d3_radians)
                })
            }
            function d3_geo_equirectangular(λ, φ) {
                return [λ, φ]
            } (d3.geo.equirectangular = function() {
                return d3_geo_projection(d3_geo_equirectangular)
            }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
            d3.geo.rotation = function(rotate) {
                rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians: 0);
                function forward(coordinates) {
                    coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
                    return coordinates[0] *= d3_degrees,
                    coordinates[1] *= d3_degrees,
                    coordinates
                }
                forward.invert = function(coordinates) {
                    coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
                    return coordinates[0] *= d3_degrees,
                    coordinates[1] *= d3_degrees,
                    coordinates
                };
                return forward
            };
            function d3_geo_identityRotation(λ, φ) {
                return [λ > π ? λ - τ: λ < -π ? λ + τ: λ, φ]
            }
            d3_geo_identityRotation.invert = d3_geo_equirectangular;
            function d3_geo_rotation(δλ, δφ, δγ) {
                returnδλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ (δλ), d3_geo_rotationφγ (δφ, δγ)) : d3_geo_rotationλ (δλ) : δφ || δγ ? d3_geo_rotationφγ (δφ, δγ) : d3_geo_identityRotation
            }
            function d3_geo_forwardRotationλ (δλ) {
                return function(λ, φ) {
                    returnλ += δλ,
                    [λ > π ? λ - τ: λ < -π ? λ + τ: λ, φ]
                }
            }
            function d3_geo_rotationλ (δλ) {
                var rotation = d3_geo_forwardRotationλ (δλ);
                rotation.invert = d3_geo_forwardRotationλ ( - δλ);
                return rotation
            }
            function d3_geo_rotationφγ (δφ, δγ) {
                var cosδφ = Math.cos(δφ),
                sinδφ = Math.sin(δφ),
                cosδγ = Math.cos(δγ),
                sinδγ = Math.sin(δγ);
                function rotation(λ, φ) {
                    var cosφ = Math.cos(φ),
                    x = Math.cos(λ) * cosφ,
                    y = Math.sin(λ) * cosφ,
                    z = Math.sin(φ),
                    k = z * cosδφ + x * sinδφ;
                    return [Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ)]
                }
                rotation.invert = function(λ, φ) {
                    var cosφ = Math.cos(φ),
                    x = Math.cos(λ) * cosφ,
                    y = Math.sin(λ) * cosφ,
                    z = Math.sin(φ),
                    k = z * cosδγ - y * sinδγ;
                    return [Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ)]
                };
                return rotation
            }
            d3.geo.circle = function() {
                var origin = [0, 0],
                angle,
                precision = 6,
                interpolate;
                function circle() {
                    var center = typeof origin === "function" ? origin.apply(this, arguments) : origin,
                    rotate = d3_geo_rotation( - center[0] * d3_radians, -center[1] * d3_radians, 0).invert,
                    ring = [];
                    interpolate(null, null, 1, {
                        point: function(x, y) {
                            ring.push(x = rotate(x, y));
                            x[0] *= d3_degrees,
                            x[1] *= d3_degrees
                        }
                    });
                    return {
                        type: "Polygon",
                        coordinates: [ring]
                    }
                }
                circle.origin = function(x) {
                    if (!arguments.length) return origin;
                    origin = x;
                    return circle
                };
                circle.angle = function(x) {
                    if (!arguments.length) return angle;
                    interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
                    return circle
                };
                circle.precision = function(_) {
                    if (!arguments.length) return precision;
                    interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
                    return circle
                };
                return circle.angle(90)
            };
            function d3_geo_circleInterpolate(radius, precision) {
                var cr = Math.cos(radius),
                sr = Math.sin(radius);
                return function(from, to, direction, listener) {
                    var step = direction * precision;
                    if (from != null) {
                        from = d3_geo_circleAngle(cr, from);
                        to = d3_geo_circleAngle(cr, to);
                        if (direction > 0 ? from < to: from > to) from += direction * τ
                    } else {
                        from = radius + direction * τ;
                        to = radius - .5 * step
                    }
                    for (var point, t = from; direction > 0 ? t > to: t < to; t -= step) {
                        listener.point((point = d3_geo_spherical([cr, -sr * Math.cos(t), -sr * Math.sin(t)]))[0], point[1])
                    }
                }
            }
            function d3_geo_circleAngle(cr, point) {
                var a = d3_geo_cartesian(point);
                a[0] -= cr;
                d3_geo_cartesianNormalize(a);
                var angle = d3_acos( - a[1]);
                return (( - a[2] < 0 ? -angle: angle) + 2 * Math.PI - ε) % (2 * Math.PI)
            }
            d3.geo.distance = function(a, b) {
                varΔλ = (b[0] - a[0]) * d3_radians,
                φ0 = a[1] * d3_radians,
                φ1 = b[1] * d3_radians,
                sinΔλ = Math.sin(Δλ),
                cosΔλ = Math.cos(Δλ),
                sinφ0 = Math.sin(φ0),
                cosφ0 = Math.cos(φ0),
                sinφ1 = Math.sin(φ1),
                cosφ1 = Math.cos(φ1),
                t;
                return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ)
            };
            d3.geo.graticule = function() {
                var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10,
                dy = dx,
                DX = 90,
                DY = 360,
                x, y, X, Y, precision = 2.5;
                function graticule() {
                    return {
                        type: "MultiLineString",
                        coordinates: lines()
                    }
                }
                function lines() {
                    return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
                        return abs(x % DX) > ε
                    }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
                        return abs(y % DY) > ε
                    }).map(y))
                }
                graticule.lines = function() {
                    return lines().map(function(coordinates) {
                        return {
                            type: "LineString",
                            coordinates: coordinates
                        }
                    })
                };
                graticule.outline = function() {
                    return {
                        type: "Polygon",
                        coordinates: [X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))]
                    }
                };
                graticule.extent = function(_) {
                    if (!arguments.length) return graticule.minorExtent();
                    return graticule.majorExtent(_).minorExtent(_)
                };
                graticule.majorExtent = function(_) {
                    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
                    X0 = +_[0][0],
                    X1 = +_[1][0];
                    Y0 = +_[0][1],
                    Y1 = +_[1][1];
                    if (X0 > X1) _ = X0,
                    X0 = X1,
                    X1 = _;
                    if (Y0 > Y1) _ = Y0,
                    Y0 = Y1,
                    Y1 = _;
                    return graticule.precision(precision)
                };
                graticule.minorExtent = function(_) {
                    if (!arguments.length) return [[x0, y0], [x1, y1]];
                    x0 = +_[0][0],
                    x1 = +_[1][0];
                    y0 = +_[0][1],
                    y1 = +_[1][1];
                    if (x0 > x1) _ = x0,
                    x0 = x1,
                    x1 = _;
                    if (y0 > y1) _ = y0,
                    y0 = y1,
                    y1 = _;
                    return graticule.precision(precision)
                };
                graticule.step = function(_) {
                    if (!arguments.length) return graticule.minorStep();
                    return graticule.majorStep(_).minorStep(_)
                };
                graticule.majorStep = function(_) {
                    if (!arguments.length) return [DX, DY];
                    DX = +_[0],
                    DY = +_[1];
                    return graticule
                };
                graticule.minorStep = function(_) {
                    if (!arguments.length) return [dx, dy];
                    dx = +_[0],
                    dy = +_[1];
                    return graticule
                };
                graticule.precision = function(_) {
                    if (!arguments.length) return precision;
                    precision = +_;
                    x = d3_geo_graticuleX(y0, y1, 90);
                    y = d3_geo_graticuleY(x0, x1, precision);
                    X = d3_geo_graticuleX(Y0, Y1, 90);
                    Y = d3_geo_graticuleY(X0, X1, precision);
                    return graticule
                };
                return graticule.majorExtent([[ - 180, -90 + ε], [180, 90 - ε]]).minorExtent([[ - 180, -80 - ε], [180, 80 + ε]])
            };
            function d3_geo_graticuleX(y0, y1, dy) {
                var y = d3.range(y0, y1 - ε, dy).concat(y1);
                return function(x) {
                    return y.map(function(y) {
                        return [x, y]
                    })
                }
            }
            function d3_geo_graticuleY(x0, x1, dx) {
                var x = d3.range(x0, x1 - ε, dx).concat(x1);
                return function(y) {
                    return x.map(function(x) {
                        return [x, y]
                    })
                }
            }
            function d3_source(d) {
                return d.source
            }
            function d3_target(d) {
                return d.target
            }
            d3.geo.greatArc = function() {
                var source = d3_source,
                source_, target = d3_target,
                target_;
                function greatArc() {
                    return {
                        type: "LineString",
                        coordinates: [source_ || source.apply(this, arguments), target_ || target.apply(this, arguments)]
                    }
                }
                greatArc.distance = function() {
                    return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments))
                };
                greatArc.source = function(_) {
                    if (!arguments.length) return source;
                    source = _,
                    source_ = typeof _ === "function" ? null: _;
                    return greatArc
                };
                greatArc.target = function(_) {
                    if (!arguments.length) return target;
                    target = _,
                    target_ = typeof _ === "function" ? null: _;
                    return greatArc
                };
                greatArc.precision = function() {
                    return arguments.length ? greatArc: 0
                };
                return greatArc
            };
            d3.geo.interpolate = function(source, target) {
                return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians)
            };
            function d3_geo_interpolate(x0, y0, x1, y1) {
                var cy0 = Math.cos(y0),
                sy0 = Math.sin(y0),
                cy1 = Math.cos(y1),
                sy1 = Math.sin(y1),
                kx0 = cy0 * Math.cos(x0),
                ky0 = cy0 * Math.sin(x0),
                kx1 = cy1 * Math.cos(x1),
                ky1 = cy1 * Math.sin(x1),
                d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))),
                k = 1 / Math.sin(d);
                var interpolate = d ?
                function(t) {
                    var B = Math.sin(t *= d) * k,
                    A = Math.sin(d - t) * k,
                    x = A * kx0 + B * kx1,
                    y = A * ky0 + B * ky1,
                    z = A * sy0 + B * sy1;
                    return [Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees]
                }: function() {
                    return [x0 * d3_degrees, y0 * d3_degrees]
                };
                interpolate.distance = d;
                return interpolate
            }
            d3.geo.length = function(object) {
                d3_geo_lengthSum = 0;
                d3.geo.stream(object, d3_geo_length);
                return d3_geo_lengthSum
            };
            var d3_geo_lengthSum;
            var d3_geo_length = {
                sphere: d3_noop,
                point: d3_noop,
                lineStart: d3_geo_lengthLineStart,
                lineEnd: d3_noop,
                polygonStart: d3_noop,
                polygonEnd: d3_noop
            };
            function d3_geo_lengthLineStart() {
                varλ0, sinφ0, cosφ0;
                d3_geo_length.point = function(λ, φ) {λ0 = λ * d3_radians,
                    sinφ0 = Math.sin(φ *= d3_radians),
                    cosφ0 = Math.cos(φ);
                    d3_geo_length.point = nextPoint
                };
                d3_geo_length.lineEnd = function() {
                    d3_geo_length.point = d3_geo_length.lineEnd = d3_noop
                };
                function nextPoint(λ, φ) {
                    var sinφ = Math.sin(φ *= d3_radians),
                    cosφ = Math.cos(φ),
                    t = abs((λ *= d3_radians) - λ0),
                    cosΔλ = Math.cos(t);
                    d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);λ0 = λ,
                    sinφ0 = sinφ,
                    cosφ0 = cosφ
                }
            }
            function d3_geo_azimuthal(scale, angle) {
                function azimuthal(λ, φ) {
                    var cosλ = Math.cos(λ),
                    cosφ = Math.cos(φ),
                    k = scale(cosλ * cosφ);
                    return [k * cosφ * Math.sin(λ), k * Math.sin(φ)]
                }
                azimuthal.invert = function(x, y) {
                    varρ = Math.sqrt(x * x + y * y),
                    c = angle(ρ),
                    sinc = Math.sin(c),
                    cosc = Math.cos(c);
                    return [Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ)]
                };
                return azimuthal
            }
            var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
                return Math.sqrt(2 / (1 + cosλcosφ))
            },
            function(ρ) {
                return 2 * Math.asin(ρ / 2)
            }); (d3.geo.azimuthalEqualArea = function() {
                return d3_geo_projection(d3_geo_azimuthalEqualArea)
            }).raw = d3_geo_azimuthalEqualArea;
            var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
                var c = Math.acos(cosλcosφ);
                return c && c / Math.sin(c)
            },
            d3_identity); (d3.geo.azimuthalEquidistant = function() {
                return d3_geo_projection(d3_geo_azimuthalEquidistant)
            }).raw = d3_geo_azimuthalEquidistant;
            function d3_geo_conicConformal(φ0, φ1) {
                var cosφ0 = Math.cos(φ0),
                t = function(φ) {
                    return Math.tan(π / 4 + φ / 2)
                },
                n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)),
                F = cosφ0 * Math.pow(t(φ0), n) / n;
                if (!n) return d3_geo_mercator;
                function forward(λ, φ) {
                    if (F > 0) {
                        if (φ < -halfπ + ε)φ = -halfπ + ε
                    } else {
                        if (φ > halfπ - ε)φ = halfπ - ε
                    }
                    varρ = F / Math.pow(t(φ), n);
                    return [ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ)]
                }
                forward.invert = function(x, y) {
                    varρ0_y = F - y,
                    ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
                    return [Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ]
                };
                return forward
            } (d3.geo.conicConformal = function() {
                return d3_geo_conic(d3_geo_conicConformal)
            }).raw = d3_geo_conicConformal;
            function d3_geo_conicEquidistant(φ0, φ1) {
                var cosφ0 = Math.cos(φ0),
                n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0),
                G = cosφ0 / n + φ0;
                if (abs(n) < ε) return d3_geo_equirectangular;
                function forward(λ, φ) {
                    varρ = G - φ;
                    return [ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ)]
                }
                forward.invert = function(x, y) {
                    varρ0_y = G - y;
                    return [Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y)]
                };
                return forward
            } (d3.geo.conicEquidistant = function() {
                return d3_geo_conic(d3_geo_conicEquidistant)
            }).raw = d3_geo_conicEquidistant;
            var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
                return 1 / cosλcosφ
            },
            Math.atan); (d3.geo.gnomonic = function() {
                return d3_geo_projection(d3_geo_gnomonic)
            }).raw = d3_geo_gnomonic;
            function d3_geo_mercator(λ, φ) {
                return [λ, Math.log(Math.tan(π / 4 + φ / 2))]
            }
            d3_geo_mercator.invert = function(x, y) {
                return [x, 2 * Math.atan(Math.exp(y)) - halfπ]
            };
            function d3_geo_mercatorProjection(project) {
                var m = d3_geo_projection(project),
                scale = m.scale,
                translate = m.translate,
                clipExtent = m.clipExtent,
                clipAuto;
                m.scale = function() {
                    var v = scale.apply(m, arguments);
                    return v === m ? clipAuto ? m.clipExtent(null) : m: v
                };
                m.translate = function() {
                    var v = translate.apply(m, arguments);
                    return v === m ? clipAuto ? m.clipExtent(null) : m: v
                };
                m.clipExtent = function(_) {
                    var v = clipExtent.apply(m, arguments);
                    if (v === m) {
                        if (clipAuto = _ == null) {
                            var k = π * scale(),
                            t = translate();
                            clipExtent([[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]])
                        }
                    } else if (clipAuto) {
                        v = null
                    }
                    return v
                };
                return m.clipExtent(null)
            } (d3.geo.mercator = function() {
                return d3_geo_mercatorProjection(d3_geo_mercator)
            }).raw = d3_geo_mercator;
            var d3_geo_orthographic = d3_geo_azimuthal(function() {
                return 1
            },
            Math.asin); (d3.geo.orthographic = function() {
                return d3_geo_projection(d3_geo_orthographic)
            }).raw = d3_geo_orthographic;
            var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
                return 1 / (1 + cosλcosφ)
            },
            function(ρ) {
                return 2 * Math.atan(ρ)
            }); (d3.geo.stereographic = function() {
                return d3_geo_projection(d3_geo_stereographic)
            }).raw = d3_geo_stereographic;
            function d3_geo_transverseMercator(λ, φ) {
                return [Math.log(Math.tan(π / 4 + φ / 2)), -λ]
            }
            d3_geo_transverseMercator.invert = function(x, y) {
                return [ - y, 2 * Math.atan(Math.exp(x)) - halfπ]
            }; (d3.geo.transverseMercator = function() {
                var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator),
                center = projection.center,
                rotate = projection.rotate;
                projection.center = function(_) {
                    return _ ? center([ - _[1], _[0]]) : (_ = center(), [_[1], -_[0]])
                };
                projection.rotate = function(_) {
                    return _ ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90])
                };
                return rotate([0, 0, 90])
            }).raw = d3_geo_transverseMercator;
            d3.geom = {};
            function d3_geom_pointX(d) {
                return d[0]
            }
            function d3_geom_pointY(d) {
                return d[1]
            }
            d3.geom.hull = function(vertices) {
                var x = d3_geom_pointX,
                y = d3_geom_pointY;
                if (arguments.length) return hull(vertices);
                function hull(data) {
                    if (data.length < 3) return [];
                    var fx = d3_functor(x),
                    fy = d3_functor(y),
                    i,
                    n = data.length,
                    points = [],
                    flippedPoints = [];
                    for (i = 0; i < n; i++) {
                        points.push([ + fx.call(this, data[i], i), +fy.call(this, data[i], i), i])
                    }
                    points.sort(d3_geom_hullOrder);
                    for (i = 0; i < n; i++) flippedPoints.push([points[i][0], -points[i][1]]);
                    var upper = d3_geom_hullUpper(points),
                    lower = d3_geom_hullUpper(flippedPoints);
                    var skipLeft = lower[0] === upper[0],
                    skipRight = lower[lower.length - 1] === upper[upper.length - 1],
                    polygon = [];
                    for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
                    for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
                    return polygon
                }
                hull.x = function(_) {
                    return arguments.length ? (x = _, hull) : x
                };
                hull.y = function(_) {
                    return arguments.length ? (y = _, hull) : y
                };
                return hull
            };
            function d3_geom_hullUpper(points) {
                var n = points.length,
                hull = [0, 1],
                hs = 2;
                for (var i = 2; i < n; i++) {
                    while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0)--hs;
                    hull[hs++] = i
                }
                return hull.slice(0, hs)
            }
            function d3_geom_hullOrder(a, b) {
                return a[0] - b[0] || a[1] - b[1]
            }
            d3.geom.polygon = function(coordinates) {
                d3_subclass(coordinates, d3_geom_polygonPrototype);
                return coordinates
            };
            var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
            d3_geom_polygonPrototype.area = function() {
                var i = -1,
                n = this.length,
                a, b = this[n - 1],
                area = 0;
                while (++i < n) {
                    a = b;
                    b = this[i];
                    area += a[1] * b[0] - a[0] * b[1]
                }
                return area * .5
            };
            d3_geom_polygonPrototype.centroid = function(k) {
                var i = -1,
                n = this.length,
                x = 0,
                y = 0,
                a, b = this[n - 1],
                c;
                if (!arguments.length) k = -1 / (6 * this.area());
                while (++i < n) {
                    a = b;
                    b = this[i];
                    c = a[0] * b[1] - b[0] * a[1];
                    x += (a[0] + b[0]) * c;
                    y += (a[1] + b[1]) * c
                }
                return [x * k, y * k]
            };
            d3_geom_polygonPrototype.clip = function(subject) {
                var input, closed = d3_geom_polygonClosed(subject),
                i = -1,
                n = this.length - d3_geom_polygonClosed(this),
                j,
                m,
                a = this[n - 1],
                b,
                c,
                d;
                while (++i < n) {
                    input = subject.slice();
                    subject.length = 0;
                    b = this[i];
                    c = input[(m = input.length - closed) - 1];
                    j = -1;
                    while (++j < m) {
                        d = input[j];
                        if (d3_geom_polygonInside(d, a, b)) {
                            if (!d3_geom_polygonInside(c, a, b)) {
                                subject.push(d3_geom_polygonIntersect(c, d, a, b))
                            }
                            subject.push(d)
                        } else if (d3_geom_polygonInside(c, a, b)) {
                            subject.push(d3_geom_polygonIntersect(c, d, a, b))
                        }
                        c = d
                    }
                    if (closed) subject.push(subject[0]);
                    a = b
                }
                return subject
            };
            function d3_geom_polygonInside(p, a, b) {
                return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0])
            }
            function d3_geom_polygonIntersect(c, d, a, b) {
                var x1 = c[0],
                x3 = a[0],
                x21 = d[0] - x1,
                x43 = b[0] - x3,
                y1 = c[1],
                y3 = a[1],
                y21 = d[1] - y1,
                y43 = b[1] - y3,
                ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
                return [x1 + ua * x21, y1 + ua * y21]
            }
            function d3_geom_polygonClosed(coordinates) {
                var a = coordinates[0],
                b = coordinates[coordinates.length - 1];
                return ! (a[0] - b[0] || a[1] - b[1])
            }
            var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [],
            d3_geom_voronoiFirstCircle,
            d3_geom_voronoiCircles,
            d3_geom_voronoiCirclePool = [];
            function d3_geom_voronoiBeach() {
                d3_geom_voronoiRedBlackNode(this);
                this.edge = this.site = this.circle = null
            }
            function d3_geom_voronoiCreateBeach(site) {
                var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach;
                beach.site = site;
                return beach
            }
            function d3_geom_voronoiDetachBeach(beach) {
                d3_geom_voronoiDetachCircle(beach);
                d3_geom_voronoiBeaches.remove(beach);
                d3_geom_voronoiBeachPool.push(beach);
                d3_geom_voronoiRedBlackNode(beach)
            }
            function d3_geom_voronoiRemoveBeach(beach) {
                var circle = beach.circle,
                x = circle.x,
                y = circle.cy,
                vertex = {
                    x: x,
                    y: y
                },
                previous = beach.P,
                next = beach.N,
                disappearing = [beach];
                d3_geom_voronoiDetachBeach(beach);
                var lArc = previous;
                while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
                    previous = lArc.P;
                    disappearing.unshift(lArc);
                    d3_geom_voronoiDetachBeach(lArc);
                    lArc = previous
                }
                disappearing.unshift(lArc);
                d3_geom_voronoiDetachCircle(lArc);
                var rArc = next;
                while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
                    next = rArc.N;
                    disappearing.push(rArc);
                    d3_geom_voronoiDetachBeach(rArc);
                    rArc = next
                }
                disappearing.push(rArc);
                d3_geom_voronoiDetachCircle(rArc);
                var nArcs = disappearing.length,
                iArc;
                for (iArc = 1; iArc < nArcs; ++iArc) {
                    rArc = disappearing[iArc];
                    lArc = disappearing[iArc - 1];
                    d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex)
                }
                lArc = disappearing[0];
                rArc = disappearing[nArcs - 1];
                rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
                d3_geom_voronoiAttachCircle(lArc);
                d3_geom_voronoiAttachCircle(rArc)
            }
            function d3_geom_voronoiAddBeach(site) {
                var x = site.x,
                directrix = site.y,
                lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
                while (node) {
                    dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
                    if (dxl > ε) node = node.L;
                    else {
                        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
                        if (dxr > ε) {
                            if (!node.R) {
                                lArc = node;
                                break
                            }
                            node = node.R
                        } else {
                            if (dxl > -ε) {
                                lArc = node.P;
                                rArc = node
                            } else if (dxr > -ε) {
                                lArc = node;
                                rArc = node.N
                            } else {
                                lArc = rArc = node
                            }
                            break
                        }
                    }
                }
                var newArc = d3_geom_voronoiCreateBeach(site);
                d3_geom_voronoiBeaches.insert(lArc, newArc);
                if (!lArc && !rArc) return;
                if (lArc === rArc) {
                    d3_geom_voronoiDetachCircle(lArc);
                    rArc = d3_geom_voronoiCreateBeach(lArc.site);
                    d3_geom_voronoiBeaches.insert(newArc, rArc);
                    newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
                    d3_geom_voronoiAttachCircle(lArc);
                    d3_geom_voronoiAttachCircle(rArc);
                    return
                }
                if (!rArc) {
                    newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
                    return
                }
                d3_geom_voronoiDetachCircle(lArc);
                d3_geom_voronoiDetachCircle(rArc);
                var lSite = lArc.site,
                ax = lSite.x,
                ay = lSite.y,
                bx = site.x - ax,
                by = site.y - ay,
                rSite = rArc.site,
                cx = rSite.x - ax,
                cy = rSite.y - ay,
                d = 2 * (bx * cy - by * cx),
                hb = bx * bx + by * by,
                hc = cx * cx + cy * cy,
                vertex = {
                    x: (cy * hb - by * hc) / d + ax,
                    y: (bx * hc - cx * hb) / d + ay
                };
                d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
                newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
                rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
                d3_geom_voronoiAttachCircle(lArc);
                d3_geom_voronoiAttachCircle(rArc)
            }
            function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
                var site = arc.site,
                rfocx = site.x,
                rfocy = site.y,
                pby2 = rfocy - directrix;
                if (!pby2) return rfocx;
                var lArc = arc.P;
                if (!lArc) return - Infinity;
                site = lArc.site;
                var lfocx = site.x,
                lfocy = site.y,
                plby2 = lfocy - directrix;
                if (!plby2) return lfocx;
                var hl = lfocx - rfocx,
                aby2 = 1 / pby2 - 1 / plby2,
                b = hl / plby2;
                if (aby2) return ( - b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / ( - 2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
                return (rfocx + lfocx) / 2
            }
            function d3_geom_voronoiRightBreakPoint(arc, directrix) {
                var rArc = arc.N;
                if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
                var site = arc.site;
                return site.y === directrix ? site.x: Infinity
            }
            function d3_geom_voronoiCell(site) {
                this.site = site;
                this.edges = []
            }
            d3_geom_voronoiCell.prototype.prepare = function() {
                var halfEdges = this.edges,
                iHalfEdge = halfEdges.length,
                edge;
                while (iHalfEdge--) {
                    edge = halfEdges[iHalfEdge].edge;
                    if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1)
                }
                halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
                return halfEdges.length
            };
            function d3_geom_voronoiCloseCells(extent) {
                var x0 = extent[0][0],
                x1 = extent[1][0],
                y0 = extent[0][1],
                y1 = extent[1][1],
                x2,
                y2,
                x3,
                y3,
                cells = d3_geom_voronoiCells,
                iCell = cells.length,
                cell,
                iHalfEdge,
                halfEdges,
                nHalfEdges,
                start,
                end;
                while (iCell--) {
                    cell = cells[iCell];
                    if (!cell || !cell.prepare()) continue;
                    halfEdges = cell.edges;
                    nHalfEdges = halfEdges.length;
                    iHalfEdge = 0;
                    while (iHalfEdge < nHalfEdges) {
                        end = halfEdges[iHalfEdge].end(),
                        x3 = end.x,
                        y3 = end.y;
                        start = halfEdges[++iHalfEdge % nHalfEdges].start(),
                        x2 = start.x,
                        y2 = start.y;
                        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
                            halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
                                x: x0,
                                y: abs(x2 - x0) < ε ? y2: y1
                            }: abs(y3 - y1) < ε && x1 - x3 > ε ? {
                                x: abs(y2 - y1) < ε ? x2: x1,
                                y: y1
                            }: abs(x3 - x1) < ε && y3 - y0 > ε ? {
                                x: x1,
                                y: abs(x2 - x1) < ε ? y2: y0
                            }: abs(y3 - y0) < ε && x3 - x0 > ε ? {
                                x: abs(y2 - y0) < ε ? x2: x0,
                                y: y0
                            }: null), cell.site, null)); ++nHalfEdges
                        }
                    }
                }
            }
            function d3_geom_voronoiHalfEdgeOrder(a, b) {
                return b.angle - a.angle
            }
            function d3_geom_voronoiCircle() {
                d3_geom_voronoiRedBlackNode(this);
                this.x = this.y = this.arc = this.site = this.cy = null
            }
            function d3_geom_voronoiAttachCircle(arc) {
                var lArc = arc.P,
                rArc = arc.N;
                if (!lArc || !rArc) return;
                var lSite = lArc.site,
                cSite = arc.site,
                rSite = rArc.site;
                if (lSite === rSite) return;
                var bx = cSite.x,
                by = cSite.y,
                ax = lSite.x - bx,
                ay = lSite.y - by,
                cx = rSite.x - bx,
                cy = rSite.y - by;
                var d = 2 * (ax * cy - ay * cx);
                if (d >= -ε2) return;
                var ha = ax * ax + ay * ay,
                hc = cx * cx + cy * cy,
                x = (cy * ha - ay * hc) / d,
                y = (ax * hc - cx * ha) / d,
                cy = y + by;
                var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle;
                circle.arc = arc;
                circle.site = cSite;
                circle.x = x + bx;
                circle.y = cy + Math.sqrt(x * x + y * y);
                circle.cy = cy;
                arc.circle = circle;
                var before = null,
                node = d3_geom_voronoiCircles._;
                while (node) {
                    if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
                        if (node.L) node = node.L;
                        else {
                            before = node.P;
                            break
                        }
                    } else {
                        if (node.R) node = node.R;
                        else {
                            before = node;
                            break
                        }
                    }
                }
                d3_geom_voronoiCircles.insert(before, circle);
                if (!before) d3_geom_voronoiFirstCircle = circle
            }
            function d3_geom_voronoiDetachCircle(arc) {
                var circle = arc.circle;
                if (circle) {
                    if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
                    d3_geom_voronoiCircles.remove(circle);
                    d3_geom_voronoiCirclePool.push(circle);
                    d3_geom_voronoiRedBlackNode(circle);
                    arc.circle = null
                }
            }
            function d3_geom_voronoiClipEdges(extent) {
                var edges = d3_geom_voronoiEdges,
                clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]),
                i = edges.length,
                e;
                while (i--) {
                    e = edges[i];
                    if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
                        e.a = e.b = null;
                        edges.splice(i, 1)
                    }
                }
            }
            function d3_geom_voronoiConnectEdge(edge, extent) {
                var vb = edge.b;
                if (vb) return true;
                var va = edge.a,
                x0 = extent[0][0],
                x1 = extent[1][0],
                y0 = extent[0][1],
                y1 = extent[1][1],
                lSite = edge.l,
                rSite = edge.r,
                lx = lSite.x,
                ly = lSite.y,
                rx = rSite.x,
                ry = rSite.y,
                fx = (lx + rx) / 2,
                fy = (ly + ry) / 2,
                fm,
                fb;
                if (ry === ly) {
                    if (fx < x0 || fx >= x1) return;
                    if (lx > rx) {
                        if (!va) va = {
                            x: fx,
                            y: y0
                        };
                        else if (va.y >= y1) return;
                        vb = {
                            x: fx,
                            y: y1
                        }
                    } else {
                        if (!va) va = {
                            x: fx,
                            y: y1
                        };
                        else if (va.y < y0) return;
                        vb = {
                            x: fx,
                            y: y0
                        }
                    }
                } else {
                    fm = (lx - rx) / (ry - ly);
                    fb = fy - fm * fx;
                    if (fm < -1 || fm > 1) {
                        if (lx > rx) {
                            if (!va) va = {
                                x: (y0 - fb) / fm,
                                y: y0
                            };
                            else if (va.y >= y1) return;
                            vb = {
                                x: (y1 - fb) / fm,
                                y: y1
                            }
                        } else {
                            if (!va) va = {
                                x: (y1 - fb) / fm,
                                y: y1
                            };
                            else if (va.y < y0) return;
                            vb = {
                                x: (y0 - fb) / fm,
                                y: y0
                            }
                        }
                    } else {
                        if (ly < ry) {
                            if (!va) va = {
                                x: x0,
                                y: fm * x0 + fb
                            };
                            else if (va.x >= x1) return;
                            vb = {
                                x: x1,
                                y: fm * x1 + fb
                            }
                        } else {
                            if (!va) va = {
                                x: x1,
                                y: fm * x1 + fb
                            };
                            else if (va.x < x0) return;
                            vb = {
                                x: x0,
                                y: fm * x0 + fb
                            }
                        }
                    }
                }
                edge.a = va;
                edge.b = vb;
                return true
            }
            function d3_geom_voronoiEdge(lSite, rSite) {
                this.l = lSite;
                this.r = rSite;
                this.a = this.b = null
            }
            function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
                var edge = new d3_geom_voronoiEdge(lSite, rSite);
                d3_geom_voronoiEdges.push(edge);
                if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
                if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
                d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
                d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
                return edge
            }
            function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
                var edge = new d3_geom_voronoiEdge(lSite, null);
                edge.a = va;
                edge.b = vb;
                d3_geom_voronoiEdges.push(edge);
                return edge
            }
            function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
                if (!edge.a && !edge.b) {
                    edge.a = vertex;
                    edge.l = lSite;
                    edge.r = rSite
                } else if (edge.l === rSite) {
                    edge.b = vertex
                } else {
                    edge.a = vertex
                }
            }
            function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
                var va = edge.a,
                vb = edge.b;
                this.edge = edge;
                this.site = lSite;
                this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y)
            }
            d3_geom_voronoiHalfEdge.prototype = {
                start: function() {
                    return this.edge.l === this.site ? this.edge.a: this.edge.b
                },
                end: function() {
                    return this.edge.l === this.site ? this.edge.b: this.edge.a
                }
            };
            function d3_geom_voronoiRedBlackTree() {
                this._ = null
            }
            function d3_geom_voronoiRedBlackNode(node) {
                node.U = node.C = node.L = node.R = node.P = node.N = null
            }
            d3_geom_voronoiRedBlackTree.prototype = {
                insert: function(after, node) {
                    var parent, grandpa, uncle;
                    if (after) {
                        node.P = after;
                        node.N = after.N;
                        if (after.N) after.N.P = node;
                        after.N = node;
                        if (after.R) {
                            after = after.R;
                            while (after.L) after = after.L;
                            after.L = node
                        } else {
                            after.R = node
                        }
                        parent = after
                    } else if (this._) {
                        after = d3_geom_voronoiRedBlackFirst(this._);
                        node.P = null;
                        node.N = after;
                        after.P = after.L = node;
                        parent = after
                    } else {
                        node.P = node.N = null;
                        this._ = node;
                        parent = null
                    }
                    node.L = node.R = null;
                    node.U = parent;
                    node.C = true;
                    after = node;
                    while (parent && parent.C) {
                        grandpa = parent.U;
                        if (parent === grandpa.L) {
                            uncle = grandpa.R;
                            if (uncle && uncle.C) {
                                parent.C = uncle.C = false;
                                grandpa.C = true;
                                after = grandpa
                            } else {
                                if (after === parent.R) {
                                    d3_geom_voronoiRedBlackRotateLeft(this, parent);
                                    after = parent;
                                    parent = after.U
                                }
                                parent.C = false;
                                grandpa.C = true;
                                d3_geom_voronoiRedBlackRotateRight(this, grandpa)
                            }
                        } else {
                            uncle = grandpa.L;
                            if (uncle && uncle.C) {
                                parent.C = uncle.C = false;
                                grandpa.C = true;
                                after = grandpa
                            } else {
                                if (after === parent.L) {
                                    d3_geom_voronoiRedBlackRotateRight(this, parent);
                                    after = parent;
                                    parent = after.U
                                }
                                parent.C = false;
                                grandpa.C = true;
                                d3_geom_voronoiRedBlackRotateLeft(this, grandpa)
                            }
                        }
                        parent = after.U
                    }
                    this._.C = false
                },
                remove: function(node) {
                    if (node.N) node.N.P = node.P;
                    if (node.P) node.P.N = node.N;
                    node.N = node.P = null;
                    var parent = node.U,
                    sibling, left = node.L,
                    right = node.R,
                    next, red;
                    if (!left) next = right;
                    else if (!right) next = left;
                    else next = d3_geom_voronoiRedBlackFirst(right);
                    if (parent) {
                        if (parent.L === node) parent.L = next;
                        else parent.R = next
                    } else {
                        this._ = next
                    }
                    if (left && right) {
                        red = next.C;
                        next.C = node.C;
                        next.L = left;
                        left.U = next;
                        if (next !== right) {
                            parent = next.U;
                            next.U = node.U;
                            node = next.R;
                            parent.L = node;
                            next.R = right;
                            right.U = next
                        } else {
                            next.U = parent;
                            parent = next;
                            node = next.R
                        }
                    } else {
                        red = node.C;
                        node = next
                    }
                    if (node) node.U = parent;
                    if (red) return;
                    if (node && node.C) {
                        node.C = false;
                        return
                    }
                    do {
                        if (node === this._) break;
                        if (node === parent.L) {
                            sibling = parent.R;
                            if (sibling.C) {
                                sibling.C = false;
                                parent.C = true;
                                d3_geom_voronoiRedBlackRotateLeft(this, parent);
                                sibling = parent.R
                            }
                            if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                                if (!sibling.R || !sibling.R.C) {
                                    sibling.L.C = false;
                                    sibling.C = true;
                                    d3_geom_voronoiRedBlackRotateRight(this, sibling);
                                    sibling = parent.R
                                }
                                sibling.C = parent.C;
                                parent.C = sibling.R.C = false;
                                d3_geom_voronoiRedBlackRotateLeft(this, parent);
                                node = this._;
                                break
                            }
                        } else {
                            sibling = parent.L;
                            if (sibling.C) {
                                sibling.C = false;
                                parent.C = true;
                                d3_geom_voronoiRedBlackRotateRight(this, parent);
                                sibling = parent.L
                            }
                            if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                                if (!sibling.L || !sibling.L.C) {
                                    sibling.R.C = false;
                                    sibling.C = true;
                                    d3_geom_voronoiRedBlackRotateLeft(this, sibling);
                                    sibling = parent.L
                                }
                                sibling.C = parent.C;
                                parent.C = sibling.L.C = false;
                                d3_geom_voronoiRedBlackRotateRight(this, parent);
                                node = this._;
                                break
                            }
                        }
                        sibling.C = true;
                        node = parent;
                        parent = parent.U
                    } while (! node . C );
                    if (node) node.C = false
                }
            };
            function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
                var p = node,
                q = node.R,
                parent = p.U;
                if (parent) {
                    if (parent.L === p) parent.L = q;
                    else parent.R = q
                } else {
                    tree._ = q
                }
                q.U = parent;
                p.U = q;
                p.R = q.L;
                if (p.R) p.R.U = p;
                q.L = p
            }
            function d3_geom_voronoiRedBlackRotateRight(tree, node) {
                var p = node,
                q = node.L,
                parent = p.U;
                if (parent) {
                    if (parent.L === p) parent.L = q;
                    else parent.R = q
                } else {
                    tree._ = q
                }
                q.U = parent;
                p.U = q;
                p.L = q.R;
                if (p.L) p.L.U = p;
                q.R = p
            }
            function d3_geom_voronoiRedBlackFirst(node) {
                while (node.L) node = node.L;
                return node
            }
            function d3_geom_voronoi(sites, bbox) {
                var site = sites.sort(d3_geom_voronoiVertexOrder).pop(),
                x0,
                y0,
                circle;
                d3_geom_voronoiEdges = [];
                d3_geom_voronoiCells = new Array(sites.length);
                d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree;
                d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree;
                while (true) {
                    circle = d3_geom_voronoiFirstCircle;
                    if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
                        if (site.x !== x0 || site.y !== y0) {
                            d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
                            d3_geom_voronoiAddBeach(site);
                            x0 = site.x,
                            y0 = site.y
                        }
                        site = sites.pop()
                    } else if (circle) {
                        d3_geom_voronoiRemoveBeach(circle.arc)
                    } else {
                        break
                    }
                }
                if (bbox) d3_geom_voronoiClipEdges(bbox),
                d3_geom_voronoiCloseCells(bbox);
                var diagram = {
                    cells: d3_geom_voronoiCells,
                    edges: d3_geom_voronoiEdges
                };
                d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
                return diagram
            }
            function d3_geom_voronoiVertexOrder(a, b) {
                return b.y - a.y || b.x - a.x
            }
            d3.geom.voronoi = function(points) {
                var x = d3_geom_pointX,
                y = d3_geom_pointY,
                fx = x,
                fy = y,
                clipExtent = d3_geom_voronoiClipExtent;
                if (points) return voronoi(points);
                function voronoi(data) {
                    var polygons = new Array(data.length),
                    x0 = clipExtent[0][0],
                    y0 = clipExtent[0][1],
                    x1 = clipExtent[1][0],
                    y1 = clipExtent[1][1];
                    d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
                        var edges = cell.edges,
                        site = cell.site,
                        polygon = polygons[i] = edges.length ? edges.map(function(e) {
                            var s = e.start();
                            return [s.x, s.y]
                        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [[x0, y1], [x1, y1], [x1, y0], [x0, y0]] : [];
                        polygon.point = data[i]
                    });
                    return polygons
                }
                function sites(data) {
                    return data.map(function(d, i) {
                        return {
                            x: Math.round(fx(d, i) / ε) * ε,
                            y: Math.round(fy(d, i) / ε) * ε,
                            i: i
                        }
                    })
                }
                voronoi.links = function(data) {
                    return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
                        return edge.l && edge.r
                    }).map(function(edge) {
                        return {
                            source: data[edge.l.i],
                            target: data[edge.r.i]
                        }
                    })
                };
                voronoi.triangles = function(data) {
                    var triangles = [];
                    d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
                        var site = cell.site,
                        edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder),
                        j = -1,
                        m = edges.length,
                        e0,
                        s0,
                        e1 = edges[m - 1].edge,
                        s1 = e1.l === site ? e1.r: e1.l;
                        while (++j < m) {
                            e0 = e1;
                            s0 = s1;
                            e1 = edges[j].edge;
                            s1 = e1.l === site ? e1.r: e1.l;
                            if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
                                triangles.push([data[i], data[s0.i], data[s1.i]])
                            }
                        }
                    });
                    return triangles
                };
                voronoi.x = function(_) {
                    return arguments.length ? (fx = d3_functor(x = _), voronoi) : x
                };
                voronoi.y = function(_) {
                    return arguments.length ? (fy = d3_functor(y = _), voronoi) : y
                };
                voronoi.clipExtent = function(_) {
                    if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null: clipExtent;
                    clipExtent = _ == null ? d3_geom_voronoiClipExtent: _;
                    return voronoi
                };
                voronoi.size = function(_) {
                    if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null: clipExtent && clipExtent[1];
                    return voronoi.clipExtent(_ && [[0, 0], _])
                };
                return voronoi
            };
            var d3_geom_voronoiClipExtent = [[ - 1e6, -1e6], [1e6, 1e6]];
            function d3_geom_voronoiTriangleArea(a, b, c) {
                return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y)
            }
            d3.geom.delaunay = function(vertices) {
                return d3.geom.voronoi().triangles(vertices)
            };
            d3.geom.quadtree = function(points, x1, y1, x2, y2) {
                var x = d3_geom_pointX,
                y = d3_geom_pointY,
                compat;
                if (compat = arguments.length) {
                    x = d3_geom_quadtreeCompatX;
                    y = d3_geom_quadtreeCompatY;
                    if (compat === 3) {
                        y2 = y1;
                        x2 = x1;
                        y1 = x1 = 0
                    }
                    return quadtree(points)
                }
                function quadtree(data) {
                    var d, fx = d3_functor(x),
                    fy = d3_functor(y),
                    xs,
                    ys,
                    i,
                    n,
                    x1_,
                    y1_,
                    x2_,
                    y2_;
                    if (x1 != null) {
                        x1_ = x1,
                        y1_ = y1,
                        x2_ = x2,
                        y2_ = y2
                    } else {
                        x2_ = y2_ = -(x1_ = y1_ = Infinity);
                        xs = [],
                        ys = [];
                        n = data.length;
                        if (compat) for (i = 0; i < n; ++i) {
                            d = data[i];
                            if (d.x < x1_) x1_ = d.x;
                            if (d.y < y1_) y1_ = d.y;
                            if (d.x > x2_) x2_ = d.x;
                            if (d.y > y2_) y2_ = d.y;
                            xs.push(d.x);
                            ys.push(d.y)
                        } else for (i = 0; i < n; ++i) {
                            var x_ = +fx(d = data[i], i),
                            y_ = +fy(d, i);
                            if (x_ < x1_) x1_ = x_;
                            if (y_ < y1_) y1_ = y_;
                            if (x_ > x2_) x2_ = x_;
                            if (y_ > y2_) y2_ = y_;
                            xs.push(x_);
                            ys.push(y_)
                        }
                    }
                    var dx = x2_ - x1_,
                    dy = y2_ - y1_;
                    if (dx > dy) y2_ = y1_ + dx;
                    else x2_ = x1_ + dy;
                    function insert(n, d, x, y, x1, y1, x2, y2) {
                        if (isNaN(x) || isNaN(y)) return;
                        if (n.leaf) {
                            var nx = n.x,
                            ny = n.y;
                            if (nx != null) {
                                if (abs(nx - x) + abs(ny - y) < .01) {
                                    insertChild(n, d, x, y, x1, y1, x2, y2)
                                } else {
                                    var nPoint = n.point;
                                    n.x = n.y = n.point = null;
                                    insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
                                    insertChild(n, d, x, y, x1, y1, x2, y2)
                                }
                            } else {
                                n.x = x,
                                n.y = y,
                                n.point = d
                            }
                        } else {
                            insertChild(n, d, x, y, x1, y1, x2, y2)
                        }
                    }
                    function insertChild(n, d, x, y, x1, y1, x2, y2) {
                        var xm = (x1 + x2) * .5,
                        ym = (y1 + y2) * .5,
                        right = x >= xm,
                        below = y >= ym,
                        i = below << 1 | right;
                        n.leaf = false;
                        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
                        if (right) x1 = xm;
                        else x2 = xm;
                        if (below) y1 = ym;
                        else y2 = ym;
                        insert(n, d, x, y, x1, y1, x2, y2)
                    }
                    var root = d3_geom_quadtreeNode();
                    root.add = function(d) {
                        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_)
                    };
                    root.visit = function(f) {
                        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_)
                    };
                    root.find = function(point) {
                        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_)
                    };
                    i = -1;
                    if (x1 == null) {
                        while (++i < n) {
                            insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_)
                        }--i
                    } else data.forEach(root.add);
                    xs = ys = data = d = null;
                    return root
                }
                quadtree.x = function(_) {
                    return arguments.length ? (x = _, quadtree) : x
                };
                quadtree.y = function(_) {
                    return arguments.length ? (y = _, quadtree) : y
                };
                quadtree.extent = function(_) {
                    if (!arguments.length) return x1 == null ? null: [[x1, y1], [x2, y2]];
                    if (_ == null) x1 = y1 = x2 = y2 = null;
                    else x1 = +_[0][0],
                    y1 = +_[0][1],
                    x2 = +_[1][0],
                    y2 = +_[1][1];
                    return quadtree
                };
                quadtree.size = function(_) {
                    if (!arguments.length) return x1 == null ? null: [x2 - x1, y2 - y1];
                    if (_ == null) x1 = y1 = x2 = y2 = null;
                    else x1 = y1 = 0,
                    x2 = +_[0],
                    y2 = +_[1];
                    return quadtree
                };
                return quadtree
            };
            function d3_geom_quadtreeCompatX(d) {
                return d.x
            }
            function d3_geom_quadtreeCompatY(d) {
                return d.y
            }
            function d3_geom_quadtreeNode() {
                return {
                    leaf: true,
                    nodes: [],
                    point: null,
                    x: null,
                    y: null
                }
            }
            function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
                if (!f(node, x1, y1, x2, y2)) {
                    var sx = (x1 + x2) * .5,
                    sy = (y1 + y2) * .5,
                    children = node.nodes;
                    if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
                    if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
                    if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
                    if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2)
                }
            }
            function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
                var minDistance2 = Infinity,
                closestPoint; (function find(node, x1, y1, x2, y2) {
                    if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
                    if (point = node.point) {
                        var point, dx = x - node.x,
                        dy = y - node.y,
                        distance2 = dx * dx + dy * dy;
                        if (distance2 < minDistance2) {
                            var distance = Math.sqrt(minDistance2 = distance2);
                            x0 = x - distance,
                            y0 = y - distance;
                            x3 = x + distance,
                            y3 = y + distance;
                            closestPoint = point
                        }
                    }
                    var children = node.nodes,
                    xm = (x1 + x2) * .5,
                    ym = (y1 + y2) * .5,
                    right = x >= xm,
                    below = y >= ym;
                    for (var i = below << 1 | right,
                    j = i + 4; i < j; ++i) {
                        if (node = children[i & 3]) switch (i & 3) {
                        case 0:
                            find(node, x1, y1, xm, ym);
                            break;
                        case 1:
                            find(node, xm, y1, x2, ym);
                            break;
                        case 2:
                            find(node, x1, ym, xm, y2);
                            break;
                        case 3:
                            find(node, xm, ym, x2, y2);
                            break
                        }
                    }
                })(root, x0, y0, x3, y3);
                return closestPoint
            }
            d3.interpolateRgb = d3_interpolateRgb;
            function d3_interpolateRgb(a, b) {
                a = d3.rgb(a);
                b = d3.rgb(b);
                var ar = a.r,
                ag = a.g,
                ab = a.b,
                br = b.r - ar,
                bg = b.g - ag,
                bb = b.b - ab;
                return function(t) {
                    return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t))
                }
            }
            d3.interpolateObject = d3_interpolateObject;
            function d3_interpolateObject(a, b) {
                var i = {},
                c = {},
                k;
                for (k in a) {
                    if (k in b) {
                        i[k] = d3_interpolate(a[k], b[k])
                    } else {
                        c[k] = a[k]
                    }
                }
                for (k in b) {
                    if (! (k in a)) {
                        c[k] = b[k]
                    }
                }
                return function(t) {
                    for (k in i) c[k] = i[k](t);
                    return c
                }
            }
            d3.interpolateNumber = d3_interpolateNumber;
            function d3_interpolateNumber(a, b) {
                a = +a,
                b = +b;
                return function(t) {
                    return a * (1 - t) + b * t
                }
            }
            d3.interpolateString = d3_interpolateString;
            function d3_interpolateString(a, b) {
                var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0,
                am, bm, bs, i = -1,
                s = [],
                q = [];
                a = a + "",
                b = b + "";
                while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
                    if ((bs = bm.index) > bi) {
                        bs = b.slice(bi, bs);
                        if (s[i]) s[i] += bs;
                        else s[++i] = bs
                    }
                    if ((am = am[0]) === (bm = bm[0])) {
                        if (s[i]) s[i] += bm;
                        else s[++i] = bm
                    } else {
                        s[++i] = null;
                        q.push({
                            i: i,
                            x: d3_interpolateNumber(am, bm)
                        })
                    }
                    bi = d3_interpolate_numberB.lastIndex
                }
                if (bi < b.length) {
                    bs = b.slice(bi);
                    if (s[i]) s[i] += bs;
                    else s[++i] = bs
                }
                return s.length < 2 ? q[0] ? (b = q[0].x,
                function(t) {
                    return b(t) + ""
                }) : function() {
                    return b
                }: (b = q.length,
                function(t) {
                    for (var i = 0,
                    o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
                    return s.join("")
                })
            }
            var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
            d3.interpolate = d3_interpolate;
            function d3_interpolate(a, b) {
                var i = d3.interpolators.length,
                f;
                while (--i >= 0 && !(f = d3.interpolators[i](a, b)));
                return f
            }
            d3.interpolators = [function(a, b) {
                var t = typeof b;
                return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb: d3_interpolateString: b instanceof d3_color ? d3_interpolateRgb: Array.isArray(b) ? d3_interpolateArray: t === "object" && isNaN(b) ? d3_interpolateObject: d3_interpolateNumber)(a, b)
            }];
            d3.interpolateArray = d3_interpolateArray;
            function d3_interpolateArray(a, b) {
                var x = [],
                c = [],
                na = a.length,
                nb = b.length,
                n0 = Math.min(a.length, b.length),
                i;
                for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
                for (; i < na; ++i) c[i] = a[i];
                for (; i < nb; ++i) c[i] = b[i];
                return function(t) {
                    for (i = 0; i < n0; ++i) c[i] = x[i](t);
                    return c
                }
            }
            var d3_ease_default = function() {
                return d3_identity
            };
            var d3_ease = d3.map({
                linear: d3_ease_default,
                poly: d3_ease_poly,
                quad: function() {
                    return d3_ease_quad
                },
                cubic: function() {
                    return d3_ease_cubic
                },
                sin: function() {
                    return d3_ease_sin
                },
                exp: function() {
                    return d3_ease_exp
                },
                circle: function() {
                    return d3_ease_circle
                },
                elastic: d3_ease_elastic,
                back: d3_ease_back,
                bounce: function() {
                    return d3_ease_bounce
                }
            });
            var d3_ease_mode = d3.map({
                "in": d3_identity,
                out: d3_ease_reverse,
                "in-out": d3_ease_reflect,
                "out-in": function(f) {
                    return d3_ease_reflect(d3_ease_reverse(f))
                }
            });
            d3.ease = function(name) {
                var i = name.indexOf("-"),
                t = i >= 0 ? name.slice(0, i) : name,
                m = i >= 0 ? name.slice(i + 1) : "in";
                t = d3_ease.get(t) || d3_ease_default;
                m = d3_ease_mode.get(m) || d3_identity;
                return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))))
            };
            function d3_ease_clamp(f) {
                return function(t) {
                    return t <= 0 ? 0 : t >= 1 ? 1 : f(t)
                }
            }
            function d3_ease_reverse(f) {
                return function(t) {
                    return 1 - f(1 - t)
                }
            }
            function d3_ease_reflect(f) {
                return function(t) {
                    return.5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t))
                }
            }
            function d3_ease_quad(t) {
                return t * t
            }
            function d3_ease_cubic(t) {
                return t * t * t
            }
            function d3_ease_cubicInOut(t) {
                if (t <= 0) return 0;
                if (t >= 1) return 1;
                var t2 = t * t,
                t3 = t2 * t;
                return 4 * (t < .5 ? t3: 3 * (t - t2) + t3 - .75)
            }
            function d3_ease_poly(e) {
                return function(t) {
                    return Math.pow(t, e)
                }
            }
            function d3_ease_sin(t) {
                return 1 - Math.cos(t * halfπ)
            }
            function d3_ease_exp(t) {
                return Math.pow(2, 10 * (t - 1))
            }
            function d3_ease_circle(t) {
                return 1 - Math.sqrt(1 - t * t)
            }
            function d3_ease_elastic(a, p) {
                var s;
                if (arguments.length < 2) p = .45;
                if (arguments.length) s = p / τ * Math.asin(1 / a);
                else a = 1,
                s = p / 4;
                return function(t) {
                    return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p)
                }
            }
            function d3_ease_back(s) {
                if (!s) s = 1.70158;
                return function(t) {
                    return t * t * ((s + 1) * t - s)
                }
            }
            function d3_ease_bounce(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t: t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }
            d3.interpolateHcl = d3_interpolateHcl;
            function d3_interpolateHcl(a, b) {
                a = d3.hcl(a);
                b = d3.hcl(b);
                var ah = a.h,
                ac = a.c,
                al = a.l,
                bh = b.h - ah,
                bc = b.c - ac,
                bl = b.l - al;
                if (isNaN(bc)) bc = 0,
                ac = isNaN(ac) ? b.c: ac;
                if (isNaN(bh)) bh = 0,
                ah = isNaN(ah) ? b.h: ah;
                else if (bh > 180) bh -= 360;
                else if (bh < -180) bh += 360;
                return function(t) {
                    return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + ""
                }
            }
            d3.interpolateHsl = d3_interpolateHsl;
            function d3_interpolateHsl(a, b) {
                a = d3.hsl(a);
                b = d3.hsl(b);
                var ah = a.h,
                as = a.s,
                al = a.l,
                bh = b.h - ah,
                bs = b.s - as,
                bl = b.l - al;
                if (isNaN(bs)) bs = 0,
                as = isNaN(as) ? b.s: as;
                if (isNaN(bh)) bh = 0,
                ah = isNaN(ah) ? b.h: ah;
                else if (bh > 180) bh -= 360;
                else if (bh < -180) bh += 360;
                return function(t) {
                    return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + ""
                }
            }
            d3.interpolateLab = d3_interpolateLab;
            function d3_interpolateLab(a, b) {
                a = d3.lab(a);
                b = d3.lab(b);
                var al = a.l,
                aa = a.a,
                ab = a.b,
                bl = b.l - al,
                ba = b.a - aa,
                bb = b.b - ab;
                return function(t) {
                    return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + ""
                }
            }
            d3.interpolateRound = d3_interpolateRound;
            function d3_interpolateRound(a, b) {
                b -= a;
                return function(t) {
                    return Math.round(a + b * t)
                }
            }
            d3.transform = function(string) {
                var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
                return (d3.transform = function(string) {
                    if (string != null) {
                        g.setAttribute("transform", string);
                        var t = g.transform.baseVal.consolidate()
                    }
                    return new d3_transform(t ? t.matrix: d3_transformIdentity)
                })(string)
            };
            function d3_transform(m) {
                var r0 = [m.a, m.b],
                r1 = [m.c, m.d],
                kx = d3_transformNormalize(r0),
                kz = d3_transformDot(r0, r1),
                ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
                if (r0[0] * r1[1] < r1[0] * r0[1]) {
                    r0[0] *= -1;
                    r0[1] *= -1;
                    kx *= -1;
                    kz *= -1
                }
                this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2( - r1[0], r1[1])) * d3_degrees;
                this.translate = [m.e, m.f];
                this.scale = [kx, ky];
                this.skew = ky ? Math.atan2(kz, ky) * d3_degrees: 0
            }
            d3_transform.prototype.toString = function() {
                return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
            };
            function d3_transformDot(a, b) {
                return a[0] * b[0] + a[1] * b[1]
            }
            function d3_transformNormalize(a) {
                var k = Math.sqrt(d3_transformDot(a, a));
                if (k) {
                    a[0] /= k;
                    a[1] /= k
                }
                return k
            }
            function d3_transformCombine(a, b, k) {
                a[0] += k * b[0];
                a[1] += k * b[1];
                return a
            }
            var d3_transformIdentity = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: 0,
                f: 0
            };
            d3.interpolateTransform = d3_interpolateTransform;
            function d3_interpolateTransformPop(s) {
                return s.length ? s.pop() + ",": ""
            }
            function d3_interpolateTranslate(ta, tb, s, q) {
                if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
                    var i = s.push("translate(", null, ",", null, ")");
                    q.push({
                        i: i - 4,
                        x: d3_interpolateNumber(ta[0], tb[0])
                    },
                    {
                        i: i - 2,
                        x: d3_interpolateNumber(ta[1], tb[1])
                    })
                } else if (tb[0] || tb[1]) {
                    s.push("translate(" + tb + ")")
                }
            }
            function d3_interpolateRotate(ra, rb, s, q) {
                if (ra !== rb) {
                    if (ra - rb > 180) rb += 360;
                    else if (rb - ra > 180) ra += 360;
                    q.push({
                        i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
                        x: d3_interpolateNumber(ra, rb)
                    })
                } else if (rb) {
                    s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")")
                }
            }
            function d3_interpolateSkew(wa, wb, s, q) {
                if (wa !== wb) {
                    q.push({
                        i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
                        x: d3_interpolateNumber(wa, wb)
                    })
                } else if (wb) {
                    s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")")
                }
            }
            function d3_interpolateScale(ka, kb, s, q) {
                if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
                    var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
                    q.push({
                        i: i - 4,
                        x: d3_interpolateNumber(ka[0], kb[0])
                    },
                    {
                        i: i - 2,
                        x: d3_interpolateNumber(ka[1], kb[1])
                    })
                } else if (kb[0] !== 1 || kb[1] !== 1) {
                    s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")")
                }
            }
            function d3_interpolateTransform(a, b) {
                var s = [],
                q = [];
                a = d3.transform(a),
                b = d3.transform(b);
                d3_interpolateTranslate(a.translate, b.translate, s, q);
                d3_interpolateRotate(a.rotate, b.rotate, s, q);
                d3_interpolateSkew(a.skew, b.skew, s, q);
                d3_interpolateScale(a.scale, b.scale, s, q);
                a = b = null;
                return function(t) {
                    var i = -1,
                    n = q.length,
                    o;
                    while (++i < n) s[(o = q[i]).i] = o.x(t);
                    return s.join("")
                }
            }
            function d3_uninterpolateNumber(a, b) {
                b = (b -= a = +a) || 1 / b;
                return function(x) {
                    return (x - a) / b
                }
            }
            function d3_uninterpolateClamp(a, b) {
                b = (b -= a = +a) || 1 / b;
                return function(x) {
                    return Math.max(0, Math.min(1, (x - a) / b))
                }
            }
            d3.layout = {};
            d3.layout.bundle = function() {
                return function(links) {
                    var paths = [],
                    i = -1,
                    n = links.length;
                    while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
                    return paths
                }
            };
            function d3_layout_bundlePath(link) {
                var start = link.source,
                end = link.target,
                lca = d3_layout_bundleLeastCommonAncestor(start, end),
                points = [start];
                while (start !== lca) {
                    start = start.parent;
                    points.push(start)
                }
                var k = points.length;
                while (end !== lca) {
                    points.splice(k, 0, end);
                    end = end.parent
                }
                return points
            }
            function d3_layout_bundleAncestors(node) {
                var ancestors = [],
                parent = node.parent;
                while (parent != null) {
                    ancestors.push(node);
                    node = parent;
                    parent = parent.parent
                }
                ancestors.push(node);
                return ancestors
            }
            function d3_layout_bundleLeastCommonAncestor(a, b) {
                if (a === b) return a;
                var aNodes = d3_layout_bundleAncestors(a),
                bNodes = d3_layout_bundleAncestors(b),
                aNode = aNodes.pop(),
                bNode = bNodes.pop(),
                sharedNode = null;
                while (aNode === bNode) {
                    sharedNode = aNode;
                    aNode = aNodes.pop();
                    bNode = bNodes.pop()
                }
                return sharedNode
            }
            d3.layout.chord = function() {
                var chord = {},
                chords, groups, matrix, n, padding = 0,
                sortGroups, sortSubgroups, sortChords;
                function relayout() {
                    var subgroups = {},
                    groupSums = [],
                    groupIndex = d3.range(n),
                    subgroupIndex = [],
                    k,
                    x,
                    x0,
                    i,
                    j;
                    chords = [];
                    groups = [];
                    k = 0,
                    i = -1;
                    while (++i < n) {
                        x = 0,
                        j = -1;
                        while (++j < n) {
                            x += matrix[i][j]
                        }
                        groupSums.push(x);
                        subgroupIndex.push(d3.range(n));
                        k += x
                    }
                    if (sortGroups) {
                        groupIndex.sort(function(a, b) {
                            return sortGroups(groupSums[a], groupSums[b])
                        })
                    }
                    if (sortSubgroups) {
                        subgroupIndex.forEach(function(d, i) {
                            d.sort(function(a, b) {
                                return sortSubgroups(matrix[i][a], matrix[i][b])
                            })
                        })
                    }
                    k = (τ - padding * n) / k;
                    x = 0,
                    i = -1;
                    while (++i < n) {
                        x0 = x,
                        j = -1;
                        while (++j < n) {
                            var di = groupIndex[i],
                            dj = subgroupIndex[di][j],
                            v = matrix[di][dj],
                            a0 = x,
                            a1 = x += v * k;
                            subgroups[di + "-" + dj] = {
                                index: di,
                                subindex: dj,
                                startAngle: a0,
                                endAngle: a1,
                                value: v
                            }
                        }
                        groups[di] = {
                            index: di,
                            startAngle: x0,
                            endAngle: x,
                            value: groupSums[di]
                        };
                        x += padding
                    }
                    i = -1;
                    while (++i < n) {
                        j = i - 1;
                        while (++j < n) {
                            var source = subgroups[i + "-" + j],
                            target = subgroups[j + "-" + i];
                            if (source.value || target.value) {
                                chords.push(source.value < target.value ? {
                                    source: target,
                                    target: source
                                }: {
                                    source: source,
                                    target: target
                                })
                            }
                        }
                    }
                    if (sortChords) resort()
                }
                function resort() {
                    chords.sort(function(a, b) {
                        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2)
                    })
                }
                chord.matrix = function(x) {
                    if (!arguments.length) return matrix;
                    n = (matrix = x) && matrix.length;
                    chords = groups = null;
                    return chord
                };
                chord.padding = function(x) {
                    if (!arguments.length) return padding;
                    padding = x;
                    chords = groups = null;
                    return chord
                };
                chord.sortGroups = function(x) {
                    if (!arguments.length) return sortGroups;
                    sortGroups = x;
                    chords = groups = null;
                    return chord
                };
                chord.sortSubgroups = function(x) {
                    if (!arguments.length) return sortSubgroups;
                    sortSubgroups = x;
                    chords = null;
                    return chord
                };
                chord.sortChords = function(x) {
                    if (!arguments.length) return sortChords;
                    sortChords = x;
                    if (chords) resort();
                    return chord
                };
                chord.chords = function() {
                    if (!chords) relayout();
                    return chords
                };
                chord.groups = function() {
                    if (!groups) relayout();
                    return groups
                };
                return chord
            };
            d3.layout.force = function() {
                var force = {},
                event = d3.dispatch("start", "tick", "end"),
                timer,
                size = [1, 1],
                drag,
                alpha,
                friction = .9,
                linkDistance = d3_layout_forceLinkDistance,
                linkStrength = d3_layout_forceLinkStrength,
                charge = -30,
                chargeDistance2 = d3_layout_forceChargeDistance2,
                gravity = .1,
                theta2 = .64,
                nodes = [],
                links = [],
                distances,
                strengths,
                charges;
                function repulse(node) {
                    return function(quad, x1, _, x2) {
                        if (quad.point !== node) {
                            var dx = quad.cx - node.x,
                            dy = quad.cy - node.y,
                            dw = x2 - x1,
                            dn = dx * dx + dy * dy;
                            if (dw * dw / theta2 < dn) {
                                if (dn < chargeDistance2) {
                                    var k = quad.charge / dn;
                                    node.px -= dx * k;
                                    node.py -= dy * k
                                }
                                return true
                            }
                            if (quad.point && dn && dn < chargeDistance2) {
                                var k = quad.pointCharge / dn;
                                node.px -= dx * k;
                                node.py -= dy * k
                            }
                        }
                        return ! quad.charge
                    }
                }
                force.tick = function() {
                    if ((alpha *= .99) < .005) {
                        timer = null;
                        event.end({
                            type: "end",
                            alpha: alpha = 0
                        });
                        return true
                    }
                    var n = nodes.length,
                    m = links.length,
                    q, i, o, s, t, l, k, x, y;
                    for (i = 0; i < m; ++i) {
                        o = links[i];
                        s = o.source;
                        t = o.target;
                        x = t.x - s.x;
                        y = t.y - s.y;
                        if (l = x * x + y * y) {
                            l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
                            x *= l;
                            y *= l;
                            t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
                            t.y -= y * k;
                            s.x += x * (k = 1 - k);
                            s.y += y * k
                        }
                    }
                    if (k = alpha * gravity) {
                        x = size[0] / 2;
                        y = size[1] / 2;
                        i = -1;
                        if (k) while (++i < n) {
                            o = nodes[i];
                            o.x += (x - o.x) * k;
                            o.y += (y - o.y) * k
                        }
                    }
                    if (charge) {
                        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
                        i = -1;
                        while (++i < n) {
                            if (! (o = nodes[i]).fixed) {
                                q.visit(repulse(o))
                            }
                        }
                    }
                    i = -1;
                    while (++i < n) {
                        o = nodes[i];
                        if (o.fixed) {
                            o.x = o.px;
                            o.y = o.py
                        } else {
                            o.x -= (o.px - (o.px = o.x)) * friction;
                            o.y -= (o.py - (o.py = o.y)) * friction
                        }
                    }
                    event.tick({
                        type: "tick",
                        alpha: alpha
                    })
                };
                force.nodes = function(x) {
                    if (!arguments.length) return nodes;
                    nodes = x;
                    return force
                };
                force.links = function(x) {
                    if (!arguments.length) return links;
                    links = x;
                    return force
                };
                force.size = function(x) {
                    if (!arguments.length) return size;
                    size = x;
                    return force
                };
                force.linkDistance = function(x) {
                    if (!arguments.length) return linkDistance;
                    linkDistance = typeof x === "function" ? x: +x;
                    return force
                };
                force.distance = force.linkDistance;
                force.linkStrength = function(x) {
                    if (!arguments.length) return linkStrength;
                    linkStrength = typeof x === "function" ? x: +x;
                    return force
                };
                force.friction = function(x) {
                    if (!arguments.length) return friction;
                    friction = +x;
                    return force
                };
                force.charge = function(x) {
                    if (!arguments.length) return charge;
                    charge = typeof x === "function" ? x: +x;
                    return force
                };
                force.chargeDistance = function(x) {
                    if (!arguments.length) return Math.sqrt(chargeDistance2);
                    chargeDistance2 = x * x;
                    return force
                };
                force.gravity = function(x) {
                    if (!arguments.length) return gravity;
                    gravity = +x;
                    return force
                };
                force.theta = function(x) {
                    if (!arguments.length) return Math.sqrt(theta2);
                    theta2 = x * x;
                    return force
                };
                force.alpha = function(x) {
                    if (!arguments.length) return alpha;
                    x = +x;
                    if (alpha) {
                        if (x > 0) {
                            alpha = x
                        } else {
                            timer.c = null,
                            timer.t = NaN,
                            timer = null;
                            event.end({
                                type: "end",
                                alpha: alpha = 0
                            })
                        }
                    } else if (x > 0) {
                        event.start({
                            type: "start",
                            alpha: alpha = x
                        });
                        timer = d3_timer(force.tick)
                    }
                    return force
                };
                force.start = function() {
                    var i, n = nodes.length,
                    m = links.length,
                    w = size[0],
                    h = size[1],
                    neighbors,
                    o;
                    for (i = 0; i < n; ++i) { (o = nodes[i]).index = i;
                        o.weight = 0
                    }
                    for (i = 0; i < m; ++i) {
                        o = links[i];
                        if (typeof o.source == "number") o.source = nodes[o.source];
                        if (typeof o.target == "number") o.target = nodes[o.target]; ++o.source.weight; ++o.target.weight
                    }
                    for (i = 0; i < n; ++i) {
                        o = nodes[i];
                        if (isNaN(o.x)) o.x = position("x", w);
                        if (isNaN(o.y)) o.y = position("y", h);
                        if (isNaN(o.px)) o.px = o.x;
                        if (isNaN(o.py)) o.py = o.y
                    }
                    distances = [];
                    if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i);
                    else for (i = 0; i < m; ++i) distances[i] = linkDistance;
                    strengths = [];
                    if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i);
                    else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
                    charges = [];
                    if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i);
                    else for (i = 0; i < n; ++i) charges[i] = charge;
                    function position(dimension, size) {
                        if (!neighbors) {
                            neighbors = new Array(n);
                            for (j = 0; j < n; ++j) {
                                neighbors[j] = []
                            }
                            for (j = 0; j < m; ++j) {
                                var o = links[j];
                                neighbors[o.source.index].push(o.target);
                                neighbors[o.target.index].push(o.source)
                            }
                        }
                        var candidates = neighbors[i],
                        j = -1,
                        l = candidates.length,
                        x;
                        while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
                        return Math.random() * size
                    }
                    return force.resume()
                };
                force.resume = function() {
                    return force.alpha(.1)
                };
                force.stop = function() {
                    return force.alpha(0)
                };
                force.drag = function() {
                    if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
                    if (!arguments.length) return drag;
                    this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag)
                };
                function dragmove(d) {
                    d.px = d3.event.x,
                    d.py = d3.event.y;
                    force.resume()
                }
                return d3.rebind(force, event, "on")
            };
            function d3_layout_forceDragstart(d) {
                d.fixed |= 2
            }
            function d3_layout_forceDragend(d) {
                d.fixed &= ~6
            }
            function d3_layout_forceMouseover(d) {
                d.fixed |= 4;
                d.px = d.x,
                d.py = d.y
            }
            function d3_layout_forceMouseout(d) {
                d.fixed &= ~4
            }
            function d3_layout_forceAccumulate(quad, alpha, charges) {
                var cx = 0,
                cy = 0;
                quad.charge = 0;
                if (!quad.leaf) {
                    var nodes = quad.nodes,
                    n = nodes.length,
                    i = -1,
                    c;
                    while (++i < n) {
                        c = nodes[i];
                        if (c == null) continue;
                        d3_layout_forceAccumulate(c, alpha, charges);
                        quad.charge += c.charge;
                        cx += c.charge * c.cx;
                        cy += c.charge * c.cy
                    }
                }
                if (quad.point) {
                    if (!quad.leaf) {
                        quad.point.x += Math.random() - .5;
                        quad.point.y += Math.random() - .5
                    }
                    var k = alpha * charges[quad.point.index];
                    quad.charge += quad.pointCharge = k;
                    cx += k * quad.point.x;
                    cy += k * quad.point.y
                }
                quad.cx = cx / quad.charge;
                quad.cy = cy / quad.charge
            }
            var d3_layout_forceLinkDistance = 20,
            d3_layout_forceLinkStrength = 1,
            d3_layout_forceChargeDistance2 = Infinity;
            d3.layout.hierarchy = function() {
                var sort = d3_layout_hierarchySort,
                children = d3_layout_hierarchyChildren,
                value = d3_layout_hierarchyValue;
                function hierarchy(root) {
                    var stack = [root],
                    nodes = [],
                    node;
                    root.depth = 0;
                    while ((node = stack.pop()) != null) {
                        nodes.push(node);
                        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
                            var n, childs, child;
                            while (--n >= 0) {
                                stack.push(child = childs[n]);
                                child.parent = node;
                                child.depth = node.depth + 1
                            }
                            if (value) node.value = 0;
                            node.children = childs
                        } else {
                            if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
                            delete node.children
                        }
                    }
                    d3_layout_hierarchyVisitAfter(root,
                    function(node) {
                        var childs, parent;
                        if (sort && (childs = node.children)) childs.sort(sort);
                        if (value && (parent = node.parent)) parent.value += node.value
                    });
                    return nodes
                }
                hierarchy.sort = function(x) {
                    if (!arguments.length) return sort;
                    sort = x;
                    return hierarchy
                };
                hierarchy.children = function(x) {
                    if (!arguments.length) return children;
                    children = x;
                    return hierarchy
                };
                hierarchy.value = function(x) {
                    if (!arguments.length) return value;
                    value = x;
                    return hierarchy
                };
                hierarchy.revalue = function(root) {
                    if (value) {
                        d3_layout_hierarchyVisitBefore(root,
                        function(node) {
                            if (node.children) node.value = 0
                        });
                        d3_layout_hierarchyVisitAfter(root,
                        function(node) {
                            var parent;
                            if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
                            if (parent = node.parent) parent.value += node.value
                        })
                    }
                    return root
                };
                return hierarchy
            };
            function d3_layout_hierarchyRebind(object, hierarchy) {
                d3.rebind(object, hierarchy, "sort", "children", "value");
                object.nodes = object;
                object.links = d3_layout_hierarchyLinks;
                return object
            }
            function d3_layout_hierarchyVisitBefore(node, callback) {
                var nodes = [node];
                while ((node = nodes.pop()) != null) {
                    callback(node);
                    if ((children = node.children) && (n = children.length)) {
                        var n, children;
                        while (--n >= 0) nodes.push(children[n])
                    }
                }
            }
            function d3_layout_hierarchyVisitAfter(node, callback) {
                var nodes = [node],
                nodes2 = [];
                while ((node = nodes.pop()) != null) {
                    nodes2.push(node);
                    if ((children = node.children) && (n = children.length)) {
                        var i = -1,
                        n, children;
                        while (++i < n) nodes.push(children[i])
                    }
                }
                while ((node = nodes2.pop()) != null) {
                    callback(node)
                }
            }
            function d3_layout_hierarchyChildren(d) {
                return d.children
            }
            function d3_layout_hierarchyValue(d) {
                return d.value
            }
            function d3_layout_hierarchySort(a, b) {
                return b.value - a.value
            }
            function d3_layout_hierarchyLinks(nodes) {
                return d3.merge(nodes.map(function(parent) {
                    return (parent.children || []).map(function(child) {
                        return {
                            source: parent,
                            target: child
                        }
                    })
                }))
            }
            d3.layout.partition = function() {
                var hierarchy = d3.layout.hierarchy(),
                size = [1, 1];
                function position(node, x, dx, dy) {
                    var children = node.children;
                    node.x = x;
                    node.y = node.depth * dy;
                    node.dx = dx;
                    node.dy = dy;
                    if (children && (n = children.length)) {
                        var i = -1,
                        n, c, d;
                        dx = node.value ? dx / node.value: 0;
                        while (++i < n) {
                            position(c = children[i], x, d = c.value * dx, dy);
                            x += d
                        }
                    }
                }
                function depth(node) {
                    var children = node.children,
                    d = 0;
                    if (children && (n = children.length)) {
                        var i = -1,
                        n;
                        while (++i < n) d = Math.max(d, depth(children[i]))
                    }
                    return 1 + d
                }
                function partition(d, i) {
                    var nodes = hierarchy.call(this, d, i);
                    position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
                    return nodes
                }
                partition.size = function(x) {
                    if (!arguments.length) return size;
                    size = x;
                    return partition
                };
                return d3_layout_hierarchyRebind(partition, hierarchy)
            };
            d3.layout.pie = function() {
                var value = Number,
                sort = d3_layout_pieSortByValue,
                startAngle = 0,
                endAngle = τ,
                padAngle = 0;
                function pie(data) {
                    var n = data.length,
                    values = data.map(function(d, i) {
                        return + value.call(pie, d, i)
                    }),
                    a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle),
                    da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a,
                    p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)),
                    pa = p * (da < 0 ? -1 : 1),
                    sum = d3.sum(values),
                    k = sum ? (da - n * pa) / sum: 0,
                    index = d3.range(n),
                    arcs = [],
                    v;
                    if (sort != null) index.sort(sort === d3_layout_pieSortByValue ?
                    function(i, j) {
                        return values[j] - values[i]
                    }: function(i, j) {
                        return sort(data[i], data[j])
                    });
                    index.forEach(function(i) {
                        arcs[i] = {
                            data: data[i],
                            value: v = values[i],
                            startAngle: a,
                            endAngle: a += v * k + pa,
                            padAngle: p
                        }
                    });
                    return arcs
                }
                pie.value = function(_) {
                    if (!arguments.length) return value;
                    value = _;
                    return pie
                };
                pie.sort = function(_) {
                    if (!arguments.length) return sort;
                    sort = _;
                    return pie
                };
                pie.startAngle = function(_) {
                    if (!arguments.length) return startAngle;
                    startAngle = _;
                    return pie
                };
                pie.endAngle = function(_) {
                    if (!arguments.length) return endAngle;
                    endAngle = _;
                    return pie
                };
                pie.padAngle = function(_) {
                    if (!arguments.length) return padAngle;
                    padAngle = _;
                    return pie
                };
                return pie
            };
            var d3_layout_pieSortByValue = {};
            d3.layout.stack = function() {
                var values = d3_identity,
                order = d3_layout_stackOrderDefault,
                offset = d3_layout_stackOffsetZero,
                out = d3_layout_stackOut,
                x = d3_layout_stackX,
                y = d3_layout_stackY;
                function stack(data, index) {
                    if (! (n = data.length)) return data;
                    var series = data.map(function(d, i) {
                        return values.call(stack, d, i)
                    });
                    var points = series.map(function(d) {
                        return d.map(function(v, i) {
                            return [x.call(stack, v, i), y.call(stack, v, i)]
                        })
                    });
                    var orders = order.call(stack, points, index);
                    series = d3.permute(series, orders);
                    points = d3.permute(points, orders);
                    var offsets = offset.call(stack, points, index);
                    var m = series[0].length,
                    n,
                    i,
                    j,
                    o;
                    for (j = 0; j < m; ++j) {
                        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
                        for (i = 1; i < n; ++i) {
                            out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1])
                        }
                    }
                    return data
                }
                stack.values = function(x) {
                    if (!arguments.length) return values;
                    values = x;
                    return stack
                };
                stack.order = function(x) {
                    if (!arguments.length) return order;
                    order = typeof x === "function" ? x: d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
                    return stack
                };
                stack.offset = function(x) {
                    if (!arguments.length) return offset;
                    offset = typeof x === "function" ? x: d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
                    return stack
                };
                stack.x = function(z) {
                    if (!arguments.length) return x;
                    x = z;
                    return stack
                };
                stack.y = function(z) {
                    if (!arguments.length) return y;
                    y = z;
                    return stack
                };
                stack.out = function(z) {
                    if (!arguments.length) return out;
                    out = z;
                    return stack
                };
                return stack
            };
            function d3_layout_stackX(d) {
                return d.x
            }
            function d3_layout_stackY(d) {
                return d.y
            }
            function d3_layout_stackOut(d, y0, y) {
                d.y0 = y0;
                d.y = y
            }
            var d3_layout_stackOrders = d3.map({
                "inside-out": function(data) {
                    var n = data.length,
                    i, j, max = data.map(d3_layout_stackMaxIndex),
                    sums = data.map(d3_layout_stackReduceSum),
                    index = d3.range(n).sort(function(a, b) {
                        return max[a] - max[b]
                    }),
                    top = 0,
                    bottom = 0,
                    tops = [],
                    bottoms = [];
                    for (i = 0; i < n; ++i) {
                        j = index[i];
                        if (top < bottom) {
                            top += sums[j];
                            tops.push(j)
                        } else {
                            bottom += sums[j];
                            bottoms.push(j)
                        }
                    }
                    return bottoms.reverse().concat(tops)
                },
                reverse: function(data) {
                    return d3.range(data.length).reverse()
                },
                "default": d3_layout_stackOrderDefault
            });
            var d3_layout_stackOffsets = d3.map({
                silhouette: function(data) {
                    var n = data.length,
                    m = data[0].length,
                    sums = [],
                    max = 0,
                    i,
                    j,
                    o,
                    y0 = [];
                    for (j = 0; j < m; ++j) {
                        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
                        if (o > max) max = o;
                        sums.push(o)
                    }
                    for (j = 0; j < m; ++j) {
                        y0[j] = (max - sums[j]) / 2
                    }
                    return y0
                },
                wiggle: function(data) {
                    var n = data.length,
                    x = data[0],
                    m = x.length,
                    i,
                    j,
                    k,
                    s1,
                    s2,
                    s3,
                    dx,
                    o,
                    o0,
                    y0 = [];
                    y0[0] = o = o0 = 0;
                    for (j = 1; j < m; ++j) {
                        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
                        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
                            for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
                                s3 += (data[k][j][1] - data[k][j - 1][1]) / dx
                            }
                            s2 += s3 * data[i][j][1]
                        }
                        y0[j] = o -= s1 ? s2 / s1 * dx: 0;
                        if (o < o0) o0 = o
                    }
                    for (j = 0; j < m; ++j) y0[j] -= o0;
                    return y0
                },
                expand: function(data) {
                    var n = data.length,
                    m = data[0].length,
                    k = 1 / n,
                    i,
                    j,
                    o,
                    y0 = [];
                    for (j = 0; j < m; ++j) {
                        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
                        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o;
                        else for (i = 0; i < n; i++) data[i][j][1] = k
                    }
                    for (j = 0; j < m; ++j) y0[j] = 0;
                    return y0
                },
                zero: d3_layout_stackOffsetZero
            });
            function d3_layout_stackOrderDefault(data) {
                return d3.range(data.length)
            }
            function d3_layout_stackOffsetZero(data) {
                var j = -1,
                m = data[0].length,
                y0 = [];
                while (++j < m) y0[j] = 0;
                return y0
            }
            function d3_layout_stackMaxIndex(array) {
                var i = 1,
                j = 0,
                v = array[0][1],
                k,
                n = array.length;
                for (; i < n; ++i) {
                    if ((k = array[i][1]) > v) {
                        j = i;
                        v = k
                    }
                }
                return j
            }
            function d3_layout_stackReduceSum(d) {
                return d.reduce(d3_layout_stackSum, 0)
            }
            function d3_layout_stackSum(p, d) {
                return p + d[1]
            }
            d3.layout.histogram = function() {
                var frequency = true,
                valuer = Number,
                ranger = d3_layout_histogramRange,
                binner = d3_layout_histogramBinSturges;
                function histogram(data, i) {
                    var bins = [],
                    values = data.map(valuer, this),
                    range = ranger.call(this, values, i),
                    thresholds = binner.call(this, range, values, i),
                    bin,
                    i = -1,
                    n = values.length,
                    m = thresholds.length - 1,
                    k = frequency ? 1 : 1 / n,
                    x;
                    while (++i < m) {
                        bin = bins[i] = [];
                        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
                        bin.y = 0
                    }
                    if (m > 0) {
                        i = -1;
                        while (++i < n) {
                            x = values[i];
                            if (x >= range[0] && x <= range[1]) {
                                bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
                                bin.y += k;
                                bin.push(data[i])
                            }
                        }
                    }
                    return bins
                }
                histogram.value = function(x) {
                    if (!arguments.length) return valuer;
                    valuer = x;
                    return histogram
                };
                histogram.range = function(x) {
                    if (!arguments.length) return ranger;
                    ranger = d3_functor(x);
                    return histogram
                };
                histogram.bins = function(x) {
                    if (!arguments.length) return binner;
                    binner = typeof x === "number" ?
                    function(range) {
                        return d3_layout_histogramBinFixed(range, x)
                    }: d3_functor(x);
                    return histogram
                };
                histogram.frequency = function(x) {
                    if (!arguments.length) return frequency;
                    frequency = !!x;
                    return histogram
                };
                return histogram
            };
            function d3_layout_histogramBinSturges(range, values) {
                return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1))
            }
            function d3_layout_histogramBinFixed(range, n) {
                var x = -1,
                b = +range[0],
                m = (range[1] - b) / n,
                f = [];
                while (++x <= n) f[x] = m * x + b;
                return f
            }
            function d3_layout_histogramRange(values) {
                return [d3.min(values), d3.max(values)]
            }
            d3.layout.pack = function() {
                var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort),
                padding = 0,
                size = [1, 1],
                radius;
                function pack(d, i) {
                    var nodes = hierarchy.call(this, d, i),
                    root = nodes[0],
                    w = size[0],
                    h = size[1],
                    r = radius == null ? Math.sqrt: typeof radius === "function" ? radius: function() {
                        return radius
                    };
                    root.x = root.y = 0;
                    d3_layout_hierarchyVisitAfter(root,
                    function(d) {
                        d.r = +r(d.value)
                    });
                    d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
                    if (padding) {
                        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
                        d3_layout_hierarchyVisitAfter(root,
                        function(d) {
                            d.r += dr
                        });
                        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
                        d3_layout_hierarchyVisitAfter(root,
                        function(d) {
                            d.r -= dr
                        })
                    }
                    d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
                    return nodes
                }
                pack.size = function(_) {
                    if (!arguments.length) return size;
                    size = _;
                    return pack
                };
                pack.radius = function(_) {
                    if (!arguments.length) return radius;
                    radius = _ == null || typeof _ === "function" ? _: +_;
                    return pack
                };
                pack.padding = function(_) {
                    if (!arguments.length) return padding;
                    padding = +_;
                    return pack
                };
                return d3_layout_hierarchyRebind(pack, hierarchy)
            };
            function d3_layout_packSort(a, b) {
                return a.value - b.value
            }
            function d3_layout_packInsert(a, b) {
                var c = a._pack_next;
                a._pack_next = b;
                b._pack_prev = a;
                b._pack_next = c;
                c._pack_prev = b
            }
            function d3_layout_packSplice(a, b) {
                a._pack_next = b;
                b._pack_prev = a
            }
            function d3_layout_packIntersects(a, b) {
                var dx = b.x - a.x,
                dy = b.y - a.y,
                dr = a.r + b.r;
                return.999 * dr * dr > dx * dx + dy * dy
            }
            function d3_layout_packSiblings(node) {
                if (! (nodes = node.children) || !(n = nodes.length)) return;
                var nodes, xMin = Infinity,
                xMax = -Infinity,
                yMin = Infinity,
                yMax = -Infinity,
                a, b, c, i, j, k, n;
                function bound(node) {
                    xMin = Math.min(node.x - node.r, xMin);
                    xMax = Math.max(node.x + node.r, xMax);
                    yMin = Math.min(node.y - node.r, yMin);
                    yMax = Math.max(node.y + node.r, yMax)
                }
                nodes.forEach(d3_layout_packLink);
                a = nodes[0];
                a.x = -a.r;
                a.y = 0;
                bound(a);
                if (n > 1) {
                    b = nodes[1];
                    b.x = b.r;
                    b.y = 0;
                    bound(b);
                    if (n > 2) {
                        c = nodes[2];
                        d3_layout_packPlace(a, b, c);
                        bound(c);
                        d3_layout_packInsert(a, c);
                        a._pack_prev = c;
                        d3_layout_packInsert(c, b);
                        b = a._pack_next;
                        for (i = 3; i < n; i++) {
                            d3_layout_packPlace(a, b, c = nodes[i]);
                            var isect = 0,
                            s1 = 1,
                            s2 = 1;
                            for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
                                if (d3_layout_packIntersects(j, c)) {
                                    isect = 1;
                                    break
                                }
                            }
                            if (isect == 1) {
                                for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
                                    if (d3_layout_packIntersects(k, c)) {
                                        break
                                    }
                                }
                            }
                            if (isect) {
                                if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j);
                                else d3_layout_packSplice(a = k, b);
                                i--
                            } else {
                                d3_layout_packInsert(a, c);
                                b = c;
                                bound(c)
                            }
                        }
                    }
                }
                var cx = (xMin + xMax) / 2,
                cy = (yMin + yMax) / 2,
                cr = 0;
                for (i = 0; i < n; i++) {
                    c = nodes[i];
                    c.x -= cx;
                    c.y -= cy;
                    cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y))
                }
                node.r = cr;
                nodes.forEach(d3_layout_packUnlink)
            }
            function d3_layout_packLink(node) {
                node._pack_next = node._pack_prev = node
            }
            function d3_layout_packUnlink(node) {
                delete node._pack_next;
                delete node._pack_prev
            }
            function d3_layout_packTransform(node, x, y, k) {
                var children = node.children;
                node.x = x += k * node.x;
                node.y = y += k * node.y;
                node.r *= k;
                if (children) {
                    var i = -1,
                    n = children.length;
                    while (++i < n) d3_layout_packTransform(children[i], x, y, k)
                }
            }
            function d3_layout_packPlace(a, b, c) {
                var db = a.r + c.r,
                dx = b.x - a.x,
                dy = b.y - a.y;
                if (db && (dx || dy)) {
                    var da = b.r + c.r,
                    dc = dx * dx + dy * dy;
                    da *= da;
                    db *= db;
                    var x = .5 + (db - da) / (2 * dc),
                    y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
                    c.x = a.x + x * dx + y * dy;
                    c.y = a.y + x * dy - y * dx
                } else {
                    c.x = a.x + db;
                    c.y = a.y
                }
            }
            d3.layout.tree = function() {
                var hierarchy = d3.layout.hierarchy().sort(null).value(null),
                separation = d3_layout_treeSeparation,
                size = [1, 1],
                nodeSize = null;
                function tree(d, i) {
                    var nodes = hierarchy.call(this, d, i),
                    root0 = nodes[0],
                    root1 = wrapTree(root0);
                    d3_layout_hierarchyVisitAfter(root1, firstWalk),
                    root1.parent.m = -root1.z;
                    d3_layout_hierarchyVisitBefore(root1, secondWalk);
                    if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode);
                    else {
                        var left = root0,
                        right = root0,
                        bottom = root0;
                        d3_layout_hierarchyVisitBefore(root0,
                        function(node) {
                            if (node.x < left.x) left = node;
                            if (node.x > right.x) right = node;
                            if (node.depth > bottom.depth) bottom = node
                        });
                        var tx = separation(left, right) / 2 - left.x,
                        kx = size[0] / (right.x + separation(right, left) / 2 + tx),
                        ky = size[1] / (bottom.depth || 1);
                        d3_layout_hierarchyVisitBefore(root0,
                        function(node) {
                            node.x = (node.x + tx) * kx;
                            node.y = node.depth * ky
                        })
                    }
                    return nodes
                }
                function wrapTree(root0) {
                    var root1 = {
                        A: null,
                        children: [root0]
                    },
                    queue = [root1],
                    node1;
                    while ((node1 = queue.pop()) != null) {
                        for (var children = node1.children,
                        child, i = 0,
                        n = children.length; i < n; ++i) {
                            queue.push((children[i] = child = {
                                _: children[i],
                                parent: node1,
                                children: (child = children[i].children) && child.slice() || [],
                                A: null,
                                a: null,
                                z: 0,
                                m: 0,
                                c: 0,
                                s: 0,
                                t: null,
                                i: i
                            }).a = child)
                        }
                    }
                    return root1.children[0]
                }
                function firstWalk(v) {
                    var children = v.children,
                    siblings = v.parent.children,
                    w = v.i ? siblings[v.i - 1] : null;
                    if (children.length) {
                        d3_layout_treeShift(v);
                        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
                        if (w) {
                            v.z = w.z + separation(v._, w._);
                            v.m = v.z - midpoint
                        } else {
                            v.z = midpoint
                        }
                    } else if (w) {
                        v.z = w.z + separation(v._, w._)
                    }
                    v.parent.A = apportion(v, w, v.parent.A || siblings[0])
                }
                function secondWalk(v) {
                    v._.x = v.z + v.parent.m;
                    v.m += v.parent.m
                }
                function apportion(v, w, ancestor) {
                    if (w) {
                        var vip = v,
                        vop = v,
                        vim = w,
                        vom = vip.parent.children[0],
                        sip = vip.m,
                        sop = vop.m,
                        sim = vim.m,
                        som = vom.m,
                        shift;
                        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
                            vom = d3_layout_treeLeft(vom);
                            vop = d3_layout_treeRight(vop);
                            vop.a = v;
                            shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
                            if (shift > 0) {
                                d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
                                sip += shift;
                                sop += shift
                            }
                            sim += vim.m;
                            sip += vip.m;
                            som += vom.m;
                            sop += vop.m
                        }
                        if (vim && !d3_layout_treeRight(vop)) {
                            vop.t = vim;
                            vop.m += sim - sop
                        }
                        if (vip && !d3_layout_treeLeft(vom)) {
                            vom.t = vip;
                            vom.m += sip - som;
                            ancestor = v
                        }
                    }
                    return ancestor
                }
                function sizeNode(node) {
                    node.x *= size[0];
                    node.y = node.depth * size[1]
                }
                tree.separation = function(x) {
                    if (!arguments.length) return separation;
                    separation = x;
                    return tree
                };
                tree.size = function(x) {
                    if (!arguments.length) return nodeSize ? null: size;
                    nodeSize = (size = x) == null ? sizeNode: null;
                    return tree
                };
                tree.nodeSize = function(x) {
                    if (!arguments.length) return nodeSize ? size: null;
                    nodeSize = (size = x) == null ? null: sizeNode;
                    return tree
                };
                return d3_layout_hierarchyRebind(tree, hierarchy)
            };
            function d3_layout_treeSeparation(a, b) {
                return a.parent == b.parent ? 1 : 2
            }
            function d3_layout_treeLeft(v) {
                var children = v.children;
                return children.length ? children[0] : v.t
            }
            function d3_layout_treeRight(v) {
                var children = v.children,
                n;
                return (n = children.length) ? children[n - 1] : v.t
            }
            function d3_layout_treeMove(wm, wp, shift) {
                var change = shift / (wp.i - wm.i);
                wp.c -= change;
                wp.s += shift;
                wm.c += change;
                wp.z += shift;
                wp.m += shift
            }
            function d3_layout_treeShift(v) {
                var shift = 0,
                change = 0,
                children = v.children,
                i = children.length,
                w;
                while (--i >= 0) {
                    w = children[i];
                    w.z += shift;
                    w.m += shift;
                    shift += w.s + (change += w.c)
                }
            }
            function d3_layout_treeAncestor(vim, v, ancestor) {
                return vim.a.parent === v.parent ? vim.a: ancestor
            }
            d3.layout.cluster = function() {
                var hierarchy = d3.layout.hierarchy().sort(null).value(null),
                separation = d3_layout_treeSeparation,
                size = [1, 1],
                nodeSize = false;
                function cluster(d, i) {
                    var nodes = hierarchy.call(this, d, i),
                    root = nodes[0],
                    previousNode,
                    x = 0;
                    d3_layout_hierarchyVisitAfter(root,
                    function(node) {
                        var children = node.children;
                        if (children && children.length) {
                            node.x = d3_layout_clusterX(children);
                            node.y = d3_layout_clusterY(children)
                        } else {
                            node.x = previousNode ? x += separation(node, previousNode) : 0;
                            node.y = 0;
                            previousNode = node
                        }
                    });
                    var left = d3_layout_clusterLeft(root),
                    right = d3_layout_clusterRight(root),
                    x0 = left.x - separation(left, right) / 2,
                    x1 = right.x + separation(right, left) / 2;
                    d3_layout_hierarchyVisitAfter(root, nodeSize ?
                    function(node) {
                        node.x = (node.x - root.x) * size[0];
                        node.y = (root.y - node.y) * size[1]
                    }: function(node) {
                        node.x = (node.x - x0) / (x1 - x0) * size[0];
                        node.y = (1 - (root.y ? node.y / root.y: 1)) * size[1]
                    });
                    return nodes
                }
                cluster.separation = function(x) {
                    if (!arguments.length) return separation;
                    separation = x;
                    return cluster
                };
                cluster.size = function(x) {
                    if (!arguments.length) return nodeSize ? null: size;
                    nodeSize = (size = x) == null;
                    return cluster
                };
                cluster.nodeSize = function(x) {
                    if (!arguments.length) return nodeSize ? size: null;
                    nodeSize = (size = x) != null;
                    return cluster
                };
                return d3_layout_hierarchyRebind(cluster, hierarchy)
            };
            function d3_layout_clusterY(children) {
                return 1 + d3.max(children,
                function(child) {
                    return child.y
                })
            }
            function d3_layout_clusterX(children) {
                return children.reduce(function(x, child) {
                    return x + child.x
                },
                0) / children.length
            }
            function d3_layout_clusterLeft(node) {
                var children = node.children;
                return children && children.length ? d3_layout_clusterLeft(children[0]) : node
            }
            function d3_layout_clusterRight(node) {
                var children = node.children,
                n;
                return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node
            }
            d3.layout.treemap = function() {
                var hierarchy = d3.layout.hierarchy(),
                round = Math.round,
                size = [1, 1],
                padding = null,
                pad = d3_layout_treemapPadNull,
                sticky = false,
                stickies,
                mode = "squarify",
                ratio = .5 * (1 + Math.sqrt(5));
                function scale(children, k) {
                    var i = -1,
                    n = children.length,
                    child, area;
                    while (++i < n) {
                        area = (child = children[i]).value * (k < 0 ? 0 : k);
                        child.area = isNaN(area) || area <= 0 ? 0 : area
                    }
                }
                function squarify(node) {
                    var children = node.children;
                    if (children && children.length) {
                        var rect = pad(node),
                        row = [],
                        remaining = children.slice(),
                        child,
                        best = Infinity,
                        score,
                        u = mode === "slice" ? rect.dx: mode === "dice" ? rect.dy: mode === "slice-dice" ? node.depth & 1 ? rect.dy: rect.dx: Math.min(rect.dx, rect.dy),
                        n;
                        scale(remaining, rect.dx * rect.dy / node.value);
                        row.area = 0;
                        while ((n = remaining.length) > 0) {
                            row.push(child = remaining[n - 1]);
                            row.area += child.area;
                            if (mode !== "squarify" || (score = worst(row, u)) <= best) {
                                remaining.pop();
                                best = score
                            } else {
                                row.area -= row.pop().area;
                                position(row, u, rect, false);
                                u = Math.min(rect.dx, rect.dy);
                                row.length = row.area = 0;
                                best = Infinity
                            }
                        }
                        if (row.length) {
                            position(row, u, rect, true);
                            row.length = row.area = 0
                        }
                        children.forEach(squarify)
                    }
                }
                function stickify(node) {
                    var children = node.children;
                    if (children && children.length) {
                        var rect = pad(node),
                        remaining = children.slice(),
                        child,
                        row = [];
                        scale(remaining, rect.dx * rect.dy / node.value);
                        row.area = 0;
                        while (child = remaining.pop()) {
                            row.push(child);
                            row.area += child.area;
                            if (child.z != null) {
                                position(row, child.z ? rect.dx: rect.dy, rect, !remaining.length);
                                row.length = row.area = 0
                            }
                        }
                        children.forEach(stickify)
                    }
                }
                function worst(row, u) {
                    var s = row.area,
                    r, rmax = 0,
                    rmin = Infinity,
                    i = -1,
                    n = row.length;
                    while (++i < n) {
                        if (! (r = row[i].area)) continue;
                        if (r < rmin) rmin = r;
                        if (r > rmax) rmax = r
                    }
                    s *= s;
                    u *= u;
                    return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity
                }
                function position(row, u, rect, flush) {
                    var i = -1,
                    n = row.length,
                    x = rect.x,
                    y = rect.y,
                    v = u ? round(row.area / u) : 0,
                    o;
                    if (u == rect.dx) {
                        if (flush || v > rect.dy) v = rect.dy;
                        while (++i < n) {
                            o = row[i];
                            o.x = x;
                            o.y = y;
                            o.dy = v;
                            x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0)
                        }
                        o.z = true;
                        o.dx += rect.x + rect.dx - x;
                        rect.y += v;
                        rect.dy -= v
                    } else {
                        if (flush || v > rect.dx) v = rect.dx;
                        while (++i < n) {
                            o = row[i];
                            o.x = x;
                            o.y = y;
                            o.dx = v;
                            y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0)
                        }
                        o.z = false;
                        o.dy += rect.y + rect.dy - y;
                        rect.x += v;
                        rect.dx -= v
                    }
                }
                function treemap(d) {
                    var nodes = stickies || hierarchy(d),
                    root = nodes[0];
                    root.x = root.y = 0;
                    if (root.value) root.dx = size[0],
                    root.dy = size[1];
                    else root.dx = root.dy = 0;
                    if (stickies) hierarchy.revalue(root);
                    scale([root], root.dx * root.dy / root.value); (stickies ? stickify: squarify)(root);
                    if (sticky) stickies = nodes;
                    return nodes
                }
                treemap.size = function(x) {
                    if (!arguments.length) return size;
                    size = x;
                    return treemap
                };
                treemap.padding = function(x) {
                    if (!arguments.length) return padding;
                    function padFunction(node) {
                        var p = x.call(treemap, node, node.depth);
                        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [p, p, p, p] : p)
                    }
                    function padConstant(node) {
                        return d3_layout_treemapPad(node, x)
                    }
                    var type;
                    pad = (padding = x) == null ? d3_layout_treemapPadNull: (type = typeof x) === "function" ? padFunction: type === "number" ? (x = [x, x, x, x], padConstant) : padConstant;
                    return treemap
                };
                treemap.round = function(x) {
                    if (!arguments.length) return round != Number;
                    round = x ? Math.round: Number;
                    return treemap
                };
                treemap.sticky = function(x) {
                    if (!arguments.length) return sticky;
                    sticky = x;
                    stickies = null;
                    return treemap
                };
                treemap.ratio = function(x) {
                    if (!arguments.length) return ratio;
                    ratio = x;
                    return treemap
                };
                treemap.mode = function(x) {
                    if (!arguments.length) return mode;
                    mode = x + "";
                    return treemap
                };
                return d3_layout_hierarchyRebind(treemap, hierarchy)
            };
            function d3_layout_treemapPadNull(node) {
                return {
                    x: node.x,
                    y: node.y,
                    dx: node.dx,
                    dy: node.dy
                }
            }
            function d3_layout_treemapPad(node, padding) {
                var x = node.x + padding[3],
                y = node.y + padding[0],
                dx = node.dx - padding[1] - padding[3],
                dy = node.dy - padding[0] - padding[2];
                if (dx < 0) {
                    x += dx / 2;
                    dx = 0
                }
                if (dy < 0) {
                    y += dy / 2;
                    dy = 0
                }
                return {
                    x: x,
                    y: y,
                    dx: dx,
                    dy: dy
                }
            }
            d3.random = {
                normal: function(µ, σ) {
                    var n = arguments.length;
                    if (n < 2)σ = 1;
                    if (n < 1)µ = 0;
                    return function() {
                        var x, y, r;
                        do {
                            x = Math.random() * 2 - 1;
                            y = Math.random() * 2 - 1;
                            r = x * x + y * y
                        } while (! r || r > 1 );
                        returnµ + σ * x * Math.sqrt( - 2 * Math.log(r) / r)
                    }
                },
                logNormal: function() {
                    var random = d3.random.normal.apply(d3, arguments);
                    return function() {
                        return Math.exp(random())
                    }
                },
                bates: function(m) {
                    var random = d3.random.irwinHall(m);
                    return function() {
                        return random() / m
                    }
                },
                irwinHall: function(m) {
                    return function() {
                        for (var s = 0,
                        j = 0; j < m; j++) s += Math.random();
                        return s
                    }
                }
            };
            d3.scale = {};
            function d3_scaleExtent(domain) {
                var start = domain[0],
                stop = domain[domain.length - 1];
                return start < stop ? [start, stop] : [stop, start]
            }
            function d3_scaleRange(scale) {
                return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range())
            }
            function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
                var u = uninterpolate(domain[0], domain[1]),
                i = interpolate(range[0], range[1]);
                return function(x) {
                    return i(u(x))
                }
            }
            function d3_scale_nice(domain, nice) {
                var i0 = 0,
                i1 = domain.length - 1,
                x0 = domain[i0],
                x1 = domain[i1],
                dx;
                if (x1 < x0) {
                    dx = i0,
                    i0 = i1,
                    i1 = dx;
                    dx = x0,
                    x0 = x1,
                    x1 = dx
                }
                domain[i0] = nice.floor(x0);
                domain[i1] = nice.ceil(x1);
                return domain
            }
            function d3_scale_niceStep(step) {
                return step ? {
                    floor: function(x) {
                        return Math.floor(x / step) * step
                    },
                    ceil: function(x) {
                        return Math.ceil(x / step) * step
                    }
                }: d3_scale_niceIdentity
            }
            var d3_scale_niceIdentity = {
                floor: d3_identity,
                ceil: d3_identity
            };
            function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
                var u = [],
                i = [],
                j = 0,
                k = Math.min(domain.length, range.length) - 1;
                if (domain[k] < domain[0]) {
                    domain = domain.slice().reverse();
                    range = range.slice().reverse()
                }
                while (++j <= k) {
                    u.push(uninterpolate(domain[j - 1], domain[j]));
                    i.push(interpolate(range[j - 1], range[j]))
                }
                return function(x) {
                    var j = d3.bisect(domain, x, 1, k) - 1;
                    return i[j](u[j](x))
                }
            }
            d3.scale.linear = function() {
                return d3_scale_linear([0, 1], [0, 1], d3_interpolate, false)
            };
            function d3_scale_linear(domain, range, interpolate, clamp) {
                var output, input;
                function rescale() {
                    var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear: d3_scale_bilinear,
                    uninterpolate = clamp ? d3_uninterpolateClamp: d3_uninterpolateNumber;
                    output = linear(domain, range, uninterpolate, interpolate);
                    input = linear(range, domain, uninterpolate, d3_interpolate);
                    return scale
                }
                function scale(x) {
                    return output(x)
                }
                scale.invert = function(y) {
                    return input(y)
                };
                scale.domain = function(x) {
                    if (!arguments.length) return domain;
                    domain = x.map(Number);
                    return rescale()
                };
                scale.range = function(x) {
                    if (!arguments.length) return range;
                    range = x;
                    return rescale()
                };
                scale.rangeRound = function(x) {
                    return scale.range(x).interpolate(d3_interpolateRound)
                };
                scale.clamp = function(x) {
                    if (!arguments.length) return clamp;
                    clamp = x;
                    return rescale()
                };
                scale.interpolate = function(x) {
                    if (!arguments.length) return interpolate;
                    interpolate = x;
                    return rescale()
                };
                scale.ticks = function(m) {
                    return d3_scale_linearTicks(domain, m)
                };
                scale.tickFormat = function(m, format) {
                    return d3_scale_linearTickFormat(domain, m, format)
                };
                scale.nice = function(m) {
                    d3_scale_linearNice(domain, m);
                    return rescale()
                };
                scale.copy = function() {
                    return d3_scale_linear(domain, range, interpolate, clamp)
                };
                return rescale()
            }
            function d3_scale_linearRebind(scale, linear) {
                return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp")
            }
            function d3_scale_linearNice(domain, m) {
                d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
                d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
                return domain
            }
            function d3_scale_linearTickRange(domain, m) {
                if (m == null) m = 10;
                var extent = d3_scaleExtent(domain),
                span = extent[1] - extent[0],
                step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
                err = m / span * step;
                if (err <= .15) step *= 10;
                else if (err <= .35) step *= 5;
                else if (err <= .75) step *= 2;
                extent[0] = Math.ceil(extent[0] / step) * step;
                extent[1] = Math.floor(extent[1] / step) * step + step * .5;
                extent[2] = step;
                return extent
            }
            function d3_scale_linearTicks(domain, m) {
                return d3.range.apply(d3, d3_scale_linearTickRange(domain, m))
            }
            function d3_scale_linearTickFormat(domain, m, format) {
                var range = d3_scale_linearTickRange(domain, m);
                if (format) {
                    var match = d3_format_re.exec(format);
                    match.shift();
                    if (match[8] === "s") {
                        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
                        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
                        match[8] = "f";
                        format = d3.format(match.join(""));
                        return function(d) {
                            return format(prefix.scale(d)) + prefix.symbol
                        }
                    }
                    if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
                    format = match.join("")
                } else {
                    format = ",." + d3_scale_linearPrecision(range[2]) + "f"
                }
                return d3.format(format)
            }
            var d3_scale_linearFormatSignificant = {
                s: 1,
                g: 1,
                p: 1,
                r: 1,
                e: 1
            };
            function d3_scale_linearPrecision(value) {
                return - Math.floor(Math.log(value) / Math.LN10 + .01)
            }
            function d3_scale_linearFormatPrecision(type, range) {
                var p = d3_scale_linearPrecision(range[2]);
                return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2
            }
            d3.scale.log = function() {
                return d3_scale_log(d3.scale.linear().domain([0, 1]), 10, true, [1, 10])
            };
            function d3_scale_log(linear, base, positive, domain) {
                function log(x) {
                    return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base)
                }
                function pow(x) {
                    return positive ? Math.pow(base, x) : -Math.pow(base, -x)
                }
                function scale(x) {
                    return linear(log(x))
                }
                scale.invert = function(x) {
                    return pow(linear.invert(x))
                };
                scale.domain = function(x) {
                    if (!arguments.length) return domain;
                    positive = x[0] >= 0;
                    linear.domain((domain = x.map(Number)).map(log));
                    return scale
                };
                scale.base = function(_) {
                    if (!arguments.length) return base;
                    base = +_;
                    linear.domain(domain.map(log));
                    return scale
                };
                scale.nice = function() {
                    var niced = d3_scale_nice(domain.map(log), positive ? Math: d3_scale_logNiceNegative);
                    linear.domain(niced);
                    domain = niced.map(pow);
                    return scale
                };
                scale.ticks = function() {
                    var extent = d3_scaleExtent(domain),
                    ticks = [],
                    u = extent[0],
                    v = extent[1],
                    i = Math.floor(log(u)),
                    j = Math.ceil(log(v)),
                    n = base % 1 ? 2 : base;
                    if (isFinite(j - i)) {
                        if (positive) {
                            for (; i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
                            ticks.push(pow(i))
                        } else {
                            ticks.push(pow(i));
                            for (; i++<j;) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k)
                        }
                        for (i = 0; ticks[i] < u; i++) {}
                        for (j = ticks.length; ticks[j - 1] > v; j--) {}
                        ticks = ticks.slice(i, j)
                    }
                    return ticks
                };
                scale.tickFormat = function(n, format) {
                    if (!arguments.length) return d3_scale_logFormat;
                    if (arguments.length < 2) format = d3_scale_logFormat;
                    else if (typeof format !== "function") format = d3.format(format);
                    var k = Math.max(1, base * n / scale.ticks().length);
                    return function(d) {
                        var i = d / pow(Math.round(log(d)));
                        if (i * base < base - .5) i *= base;
                        return i <= k ? format(d) : ""
                    }
                };
                scale.copy = function() {
                    return d3_scale_log(linear.copy(), base, positive, domain)
                };
                return d3_scale_linearRebind(scale, linear)
            }
            var d3_scale_logFormat = d3.format(".0e"),
            d3_scale_logNiceNegative = {
                floor: function(x) {
                    return - Math.ceil( - x)
                },
                ceil: function(x) {
                    return - Math.floor( - x)
                }
            };
            d3.scale.pow = function() {
                return d3_scale_pow(d3.scale.linear(), 1, [0, 1])
            };
            function d3_scale_pow(linear, exponent, domain) {
                var powp = d3_scale_powPow(exponent),
                powb = d3_scale_powPow(1 / exponent);
                function scale(x) {
                    return linear(powp(x))
                }
                scale.invert = function(x) {
                    return powb(linear.invert(x))
                };
                scale.domain = function(x) {
                    if (!arguments.length) return domain;
                    linear.domain((domain = x.map(Number)).map(powp));
                    return scale
                };
                scale.ticks = function(m) {
                    return d3_scale_linearTicks(domain, m)
                };
                scale.tickFormat = function(m, format) {
                    return d3_scale_linearTickFormat(domain, m, format)
                };
                scale.nice = function(m) {
                    return scale.domain(d3_scale_linearNice(domain, m))
                };
                scale.exponent = function(x) {
                    if (!arguments.length) return exponent;
                    powp = d3_scale_powPow(exponent = x);
                    powb = d3_scale_powPow(1 / exponent);
                    linear.domain(domain.map(powp));
                    return scale
                };
                scale.copy = function() {
                    return d3_scale_pow(linear.copy(), exponent, domain)
                };
                return d3_scale_linearRebind(scale, linear)
            }
            function d3_scale_powPow(e) {
                return function(x) {
                    return x < 0 ? -Math.pow( - x, e) : Math.pow(x, e)
                }
            }
            d3.scale.sqrt = function() {
                return d3.scale.pow().exponent(.5)
            };
            d3.scale.ordinal = function() {
                return d3_scale_ordinal([], {
                    t: "range",
                    a: [[]]
                })
            };
            function d3_scale_ordinal(domain, ranger) {
                var index, range, rangeBand;
                function scale(x) {
                    return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length]
                }
                function steps(start, step) {
                    return d3.range(domain.length).map(function(i) {
                        return start + step * i
                    })
                }
                scale.domain = function(x) {
                    if (!arguments.length) return domain;
                    domain = [];
                    index = new d3_Map;
                    var i = -1,
                    n = x.length,
                    xi;
                    while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
                    return scale[ranger.t].apply(scale, ranger.a)
                };
                scale.range = function(x) {
                    if (!arguments.length) return range;
                    range = x;
                    rangeBand = 0;
                    ranger = {
                        t: "range",
                        a: arguments
                    };
                    return scale
                };
                scale.rangePoints = function(x, padding) {
                    if (arguments.length < 2) padding = 0;
                    var start = x[0],
                    stop = x[1],
                    step = domain.length < 2 ? (start = (start + stop) / 2, 0) : (stop - start) / (domain.length - 1 + padding);
                    range = steps(start + step * padding / 2, step);
                    rangeBand = 0;
                    ranger = {
                        t: "rangePoints",
                        a: arguments
                    };
                    return scale
                };
                scale.rangeRoundPoints = function(x, padding) {
                    if (arguments.length < 2) padding = 0;
                    var start = x[0],
                    stop = x[1],
                    step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 0) : (stop - start) / (domain.length - 1 + padding) | 0;
                    range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
                    rangeBand = 0;
                    ranger = {
                        t: "rangeRoundPoints",
                        a: arguments
                    };
                    return scale
                };
                scale.rangeBands = function(x, padding, outerPadding) {
                    if (arguments.length < 2) padding = 0;
                    if (arguments.length < 3) outerPadding = padding;
                    var reverse = x[1] < x[0],
                    start = x[reverse - 0],
                    stop = x[1 - reverse],
                    step = (stop - start) / (domain.length - padding + 2 * outerPadding);
                    range = steps(start + step * outerPadding, step);
                    if (reverse) range.reverse();
                    rangeBand = step * (1 - padding);
                    ranger = {
                        t: "rangeBands",
                        a: arguments
                    };
                    return scale
                };
                scale.rangeRoundBands = function(x, padding, outerPadding) {
                    if (arguments.length < 2) padding = 0;
                    if (arguments.length < 3) outerPadding = padding;
                    var reverse = x[1] < x[0],
                    start = x[reverse - 0],
                    stop = x[1 - reverse],
                    step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
                    range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
                    if (reverse) range.reverse();
                    rangeBand = Math.round(step * (1 - padding));
                    ranger = {
                        t: "rangeRoundBands",
                        a: arguments
                    };
                    return scale
                };
                scale.rangeBand = function() {
                    return rangeBand
                };
                scale.rangeExtent = function() {
                    return d3_scaleExtent(ranger.a[0])
                };
                scale.copy = function() {
                    return d3_scale_ordinal(domain, ranger)
                };
                return scale.domain(domain)
            }
            d3.scale.category10 = function() {
                return d3.scale.ordinal().range(d3_category10)
            };
            d3.scale.category20 = function() {
                return d3.scale.ordinal().range(d3_category20)
            };
            d3.scale.category20b = function() {
                return d3.scale.ordinal().range(d3_category20b)
            };
            d3.scale.category20c = function() {
                return d3.scale.ordinal().range(d3_category20c);
            };
            var d3_category10 = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(d3_rgbString);
            var d3_category20 = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(d3_rgbString);
            var d3_category20b = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(d3_rgbString);
            var d3_category20c = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(d3_rgbString);
            d3.scale.quantile = function() {
                return d3_scale_quantile([], [])
            };
            function d3_scale_quantile(domain, range) {
                var thresholds;
                function rescale() {
                    var k = 0,
                    q = range.length;
                    thresholds = [];
                    while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
                    return scale
                }
                function scale(x) {
                    if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)]
                }
                scale.domain = function(x) {
                    if (!arguments.length) return domain;
                    domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
                    return rescale()
                };
                scale.range = function(x) {
                    if (!arguments.length) return range;
                    range = x;
                    return rescale()
                };
                scale.quantiles = function() {
                    return thresholds
                };
                scale.invertExtent = function(y) {
                    y = range.indexOf(y);
                    return y < 0 ? [NaN, NaN] : [y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1]]
                };
                scale.copy = function() {
                    return d3_scale_quantile(domain, range)
                };
                return rescale()
            }
            d3.scale.quantize = function() {
                return d3_scale_quantize(0, 1, [0, 1])
            };
            function d3_scale_quantize(x0, x1, range) {
                var kx, i;
                function scale(x) {
                    return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))]
                }
                function rescale() {
                    kx = range.length / (x1 - x0);
                    i = range.length - 1;
                    return scale
                }
                scale.domain = function(x) {
                    if (!arguments.length) return [x0, x1];
                    x0 = +x[0];
                    x1 = +x[x.length - 1];
                    return rescale()
                };
                scale.range = function(x) {
                    if (!arguments.length) return range;
                    range = x;
                    return rescale()
                };
                scale.invertExtent = function(y) {
                    y = range.indexOf(y);
                    y = y < 0 ? NaN: y / kx + x0;
                    return [y, y + 1 / kx]
                };
                scale.copy = function() {
                    return d3_scale_quantize(x0, x1, range)
                };
                return rescale()
            }
            d3.scale.threshold = function() {
                return d3_scale_threshold([.5], [0, 1])
            };
            function d3_scale_threshold(domain, range) {
                function scale(x) {
                    if (x <= x) return range[d3.bisect(domain, x)]
                }
                scale.domain = function(_) {
                    if (!arguments.length) return domain;
                    domain = _;
                    return scale
                };
                scale.range = function(_) {
                    if (!arguments.length) return range;
                    range = _;
                    return scale
                };
                scale.invertExtent = function(y) {
                    y = range.indexOf(y);
                    return [domain[y - 1], domain[y]]
                };
                scale.copy = function() {
                    return d3_scale_threshold(domain, range)
                };
                return scale
            }
            d3.scale.identity = function() {
                return d3_scale_identity([0, 1])
            };
            function d3_scale_identity(domain) {
                function identity(x) {
                    return + x
                }
                identity.invert = identity;
                identity.domain = identity.range = function(x) {
                    if (!arguments.length) return domain;
                    domain = x.map(identity);
                    return identity
                };
                identity.ticks = function(m) {
                    return d3_scale_linearTicks(domain, m)
                };
                identity.tickFormat = function(m, format) {
                    return d3_scale_linearTickFormat(domain, m, format)
                };
                identity.copy = function() {
                    return d3_scale_identity(domain)
                };
                return identity
            }
            d3.svg = {};
            function d3_zero() {
                return 0
            }
            d3.svg.arc = function() {
                var innerRadius = d3_svg_arcInnerRadius,
                outerRadius = d3_svg_arcOuterRadius,
                cornerRadius = d3_zero,
                padRadius = d3_svg_arcAuto,
                startAngle = d3_svg_arcStartAngle,
                endAngle = d3_svg_arcEndAngle,
                padAngle = d3_svg_arcPadAngle;
                function arc() {
                    var r0 = Math.max(0, +innerRadius.apply(this, arguments)),
                    r1 = Math.max(0, +outerRadius.apply(this, arguments)),
                    a0 = startAngle.apply(this, arguments) - halfπ,
                    a1 = endAngle.apply(this, arguments) - halfπ,
                    da = Math.abs(a1 - a0),
                    cw = a0 > a1 ? 0 : 1;
                    if (r1 < r0) rc = r1,
                    r1 = r0,
                    r0 = rc;
                    if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
                    var rc, cr, rp, ap, p0 = 0,
                    p1 = 0,
                    x0, y0, x1, y1, x2, y2, x3, y3, path = [];
                    if (ap = ( + padAngle.apply(this, arguments) || 0) / 2) {
                        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
                        if (!cw) p1 *= -1;
                        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
                        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap))
                    }
                    if (r1) {
                        x0 = r1 * Math.cos(a0 + p1);
                        y0 = r1 * Math.sin(a0 + p1);
                        x1 = r1 * Math.cos(a1 - p1);
                        y1 = r1 * Math.sin(a1 - p1);
                        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
                        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
                            var h1 = (a0 + a1) / 2;
                            x0 = r1 * Math.cos(h1);
                            y0 = r1 * Math.sin(h1);
                            x1 = y1 = null
                        }
                    } else {
                        x0 = y0 = 0
                    }
                    if (r0) {
                        x2 = r0 * Math.cos(a1 - p0);
                        y2 = r0 * Math.sin(a1 - p0);
                        x3 = r0 * Math.cos(a0 + p0);
                        y3 = r0 * Math.sin(a0 + p0);
                        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
                        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
                            var h0 = (a0 + a1) / 2;
                            x2 = r0 * Math.cos(h0);
                            y2 = r0 * Math.sin(h0);
                            x3 = y3 = null
                        }
                    } else {
                        x2 = y2 = 0
                    }
                    if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
                        cr = r0 < r1 ^ cw ? 0 : 1;
                        var rc1 = rc,
                        rc0 = rc;
                        if (da < π) {
                            var oc = x3 == null ? [x2, y2] : x1 == null ? [x0, y0] : d3_geom_polygonIntersect([x0, y0], [x3, y3], [x1, y1], [x2, y2]),
                            ax = x0 - oc[0],
                            ay = y0 - oc[1],
                            bx = x1 - oc[0],
                            by = y1 - oc[1],
                            kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2),
                            lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
                            rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
                            rc1 = Math.min(rc, (r1 - lc) / (kc + 1))
                        }
                        if (x1 != null) {
                            var t30 = d3_svg_arcCornerTangents(x3 == null ? [x2, y2] : [x3, y3], [x0, y0], r1, rc1, cw),
                            t12 = d3_svg_arcCornerTangents([x1, y1], [x2, y2], r1, rc1, cw);
                            if (rc === rc1) {
                                path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0])
                            } else {
                                path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0])
                            }
                        } else {
                            path.push("M", x0, ",", y0)
                        }
                        if (x3 != null) {
                            var t03 = d3_svg_arcCornerTangents([x0, y0], [x3, y3], r0, -rc0, cw),
                            t21 = d3_svg_arcCornerTangents([x2, y2], x1 == null ? [x0, y0] : [x1, y1], r0, -rc0, cw);
                            if (rc === rc0) {
                                path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0])
                            } else {
                                path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0])
                            }
                        } else {
                            path.push("L", x2, ",", y2)
                        }
                    } else {
                        path.push("M", x0, ",", y0);
                        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
                        path.push("L", x2, ",", y2);
                        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3)
                    }
                    path.push("Z");
                    return path.join("")
                }
                function circleSegment(r1, cw) {
                    return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1
                }
                arc.innerRadius = function(v) {
                    if (!arguments.length) return innerRadius;
                    innerRadius = d3_functor(v);
                    return arc
                };
                arc.outerRadius = function(v) {
                    if (!arguments.length) return outerRadius;
                    outerRadius = d3_functor(v);
                    return arc
                };
                arc.cornerRadius = function(v) {
                    if (!arguments.length) return cornerRadius;
                    cornerRadius = d3_functor(v);
                    return arc
                };
                arc.padRadius = function(v) {
                    if (!arguments.length) return padRadius;
                    padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto: d3_functor(v);
                    return arc
                };
                arc.startAngle = function(v) {
                    if (!arguments.length) return startAngle;
                    startAngle = d3_functor(v);
                    return arc
                };
                arc.endAngle = function(v) {
                    if (!arguments.length) return endAngle;
                    endAngle = d3_functor(v);
                    return arc
                };
                arc.padAngle = function(v) {
                    if (!arguments.length) return padAngle;
                    padAngle = d3_functor(v);
                    return arc
                };
                arc.centroid = function() {
                    var r = ( + innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
                    a = ( + startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
                    return [Math.cos(a) * r, Math.sin(a) * r]
                };
                return arc
            };
            var d3_svg_arcAuto = "auto";
            function d3_svg_arcInnerRadius(d) {
                return d.innerRadius
            }
            function d3_svg_arcOuterRadius(d) {
                return d.outerRadius
            }
            function d3_svg_arcStartAngle(d) {
                return d.startAngle
            }
            function d3_svg_arcEndAngle(d) {
                return d.endAngle
            }
            function d3_svg_arcPadAngle(d) {
                return d && d.padAngle
            }
            function d3_svg_arcSweep(x0, y0, x1, y1) {
                return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1
            }
            function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
                var x01 = p0[0] - p1[0],
                y01 = p0[1] - p1[1],
                lo = (cw ? rc: -rc) / Math.sqrt(x01 * x01 + y01 * y01),
                ox = lo * y01,
                oy = -lo * x01,
                x1 = p0[0] + ox,
                y1 = p0[1] + oy,
                x2 = p1[0] + ox,
                y2 = p1[1] + oy,
                x3 = (x1 + x2) / 2,
                y3 = (y1 + y2) / 2,
                dx = x2 - x1,
                dy = y2 - y1,
                d2 = dx * dx + dy * dy,
                r = r1 - rc,
                D = x1 * y2 - x2 * y1,
                d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)),
                cx0 = (D * dy - dx * d) / d2,
                cy0 = ( - D * dx - dy * d) / d2,
                cx1 = (D * dy + dx * d) / d2,
                cy1 = ( - D * dx + dy * d) / d2,
                dx0 = cx0 - x3,
                dy0 = cy0 - y3,
                dx1 = cx1 - x3,
                dy1 = cy1 - y3;
                if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1,
                cy0 = cy1;
                return [[cx0 - ox, cy0 - oy], [cx0 * r1 / r, cy0 * r1 / r]]
            }
            function d3_svg_line(projection) {
                var x = d3_geom_pointX,
                y = d3_geom_pointY,
                defined = d3_true,
                interpolate = d3_svg_lineLinear,
                interpolateKey = interpolate.key,
                tension = .7;
                function line(data) {
                    var segments = [],
                    points = [],
                    i = -1,
                    n = data.length,
                    d,
                    fx = d3_functor(x),
                    fy = d3_functor(y);
                    function segment() {
                        segments.push("M", interpolate(projection(points), tension))
                    }
                    while (++i < n) {
                        if (defined.call(this, d = data[i], i)) {
                            points.push([ + fx.call(this, d, i), +fy.call(this, d, i)])
                        } else if (points.length) {
                            segment();
                            points = []
                        }
                    }
                    if (points.length) segment();
                    return segments.length ? segments.join("") : null
                }
                line.x = function(_) {
                    if (!arguments.length) return x;
                    x = _;
                    return line
                };
                line.y = function(_) {
                    if (!arguments.length) return y;
                    y = _;
                    return line
                };
                line.defined = function(_) {
                    if (!arguments.length) return defined;
                    defined = _;
                    return line
                };
                line.interpolate = function(_) {
                    if (!arguments.length) return interpolateKey;
                    if (typeof _ === "function") interpolateKey = interpolate = _;
                    else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
                    return line
                };
                line.tension = function(_) {
                    if (!arguments.length) return tension;
                    tension = _;
                    return line
                };
                return line
            }
            d3.svg.line = function() {
                return d3_svg_line(d3_identity)
            };
            var d3_svg_lineInterpolators = d3.map({
                linear: d3_svg_lineLinear,
                "linear-closed": d3_svg_lineLinearClosed,
                step: d3_svg_lineStep,
                "step-before": d3_svg_lineStepBefore,
                "step-after": d3_svg_lineStepAfter,
                basis: d3_svg_lineBasis,
                "basis-open": d3_svg_lineBasisOpen,
                "basis-closed": d3_svg_lineBasisClosed,
                bundle: d3_svg_lineBundle,
                cardinal: d3_svg_lineCardinal,
                "cardinal-open": d3_svg_lineCardinalOpen,
                "cardinal-closed": d3_svg_lineCardinalClosed,
                monotone: d3_svg_lineMonotone
            });
            d3_svg_lineInterpolators.forEach(function(key, value) {
                value.key = key;
                value.closed = /-closed$/.test(key)
            });
            function d3_svg_lineLinear(points) {
                return points.length > 1 ? points.join("L") : points + "Z"
            }
            function d3_svg_lineLinearClosed(points) {
                return points.join("L") + "Z"
            }
            function d3_svg_lineStep(points) {
                var i = 0,
                n = points.length,
                p = points[0],
                path = [p[0], ",", p[1]];
                while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
                if (n > 1) path.push("H", p[0]);
                return path.join("")
            }
            function d3_svg_lineStepBefore(points) {
                var i = 0,
                n = points.length,
                p = points[0],
                path = [p[0], ",", p[1]];
                while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
                return path.join("")
            }
            function d3_svg_lineStepAfter(points) {
                var i = 0,
                n = points.length,
                p = points[0],
                path = [p[0], ",", p[1]];
                while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
                return path.join("")
            }
            function d3_svg_lineCardinalOpen(points, tension) {
                return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension))
            }
            function d3_svg_lineCardinalClosed(points, tension) {
                return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), points), d3_svg_lineCardinalTangents([points[points.length - 2]].concat(points, [points[1]]), tension))
            }
            function d3_svg_lineCardinal(points, tension) {
                return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension))
            }
            function d3_svg_lineHermite(points, tangents) {
                if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
                    return d3_svg_lineLinear(points)
                }
                var quad = points.length != tangents.length,
                path = "",
                p0 = points[0],
                p = points[1],
                t0 = tangents[0],
                t = t0,
                pi = 1;
                if (quad) {
                    path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
                    p0 = points[1];
                    pi = 2
                }
                if (tangents.length > 1) {
                    t = tangents[1];
                    p = points[pi];
                    pi++;
                    path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
                    for (var i = 2; i < tangents.length; i++, pi++) {
                        p = points[pi];
                        t = tangents[i];
                        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1]
                    }
                }
                if (quad) {
                    var lp = points[pi];
                    path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1]
                }
                return path
            }
            function d3_svg_lineCardinalTangents(points, tension) {
                var tangents = [],
                a = (1 - tension) / 2,
                p0,
                p1 = points[0],
                p2 = points[1],
                i = 1,
                n = points.length;
                while (++i < n) {
                    p0 = p1;
                    p1 = p2;
                    p2 = points[i];
                    tangents.push([a * (p2[0] - p0[0]), a * (p2[1] - p0[1])])
                }
                return tangents
            }
            function d3_svg_lineBasis(points) {
                if (points.length < 3) return d3_svg_lineLinear(points);
                var i = 1,
                n = points.length,
                pi = points[0],
                x0 = pi[0],
                y0 = pi[1],
                px = [x0, x0, x0, (pi = points[1])[0]],
                py = [y0, y0, y0, pi[1]],
                path = [x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)];
                points.push(points[n - 1]);
                while (++i <= n) {
                    pi = points[i];
                    px.shift();
                    px.push(pi[0]);
                    py.shift();
                    py.push(pi[1]);
                    d3_svg_lineBasisBezier(path, px, py)
                }
                points.pop();
                path.push("L", pi);
                return path.join("")
            }
            function d3_svg_lineBasisOpen(points) {
                if (points.length < 4) return d3_svg_lineLinear(points);
                var path = [],
                i = -1,
                n = points.length,
                pi,
                px = [0],
                py = [0];
                while (++i < 3) {
                    pi = points[i];
                    px.push(pi[0]);
                    py.push(pi[1])
                }
                path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)); --i;
                while (++i < n) {
                    pi = points[i];
                    px.shift();
                    px.push(pi[0]);
                    py.shift();
                    py.push(pi[1]);
                    d3_svg_lineBasisBezier(path, px, py)
                }
                return path.join("")
            }
            function d3_svg_lineBasisClosed(points) {
                var path, i = -1,
                n = points.length,
                m = n + 4,
                pi, px = [],
                py = [];
                while (++i < 4) {
                    pi = points[i % n];
                    px.push(pi[0]);
                    py.push(pi[1])
                }
                path = [d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py)]; --i;
                while (++i < m) {
                    pi = points[i % n];
                    px.shift();
                    px.push(pi[0]);
                    py.shift();
                    py.push(pi[1]);
                    d3_svg_lineBasisBezier(path, px, py)
                }
                return path.join("")
            }
            function d3_svg_lineBundle(points, tension) {
                var n = points.length - 1;
                if (n) {
                    var x0 = points[0][0],
                    y0 = points[0][1],
                    dx = points[n][0] - x0,
                    dy = points[n][1] - y0,
                    i = -1,
                    p,
                    t;
                    while (++i <= n) {
                        p = points[i];
                        t = i / n;
                        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
                        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy)
                    }
                }
                return d3_svg_lineBasis(points)
            }
            function d3_svg_lineDot4(a, b) {
                return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
            }
            var d3_svg_lineBasisBezier1 = [0, 2 / 3, 1 / 3, 0],
            d3_svg_lineBasisBezier2 = [0, 1 / 3, 2 / 3, 0],
            d3_svg_lineBasisBezier3 = [0, 1 / 6, 2 / 3, 1 / 6];
            function d3_svg_lineBasisBezier(path, x, y) {
                path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y))
            }
            function d3_svg_lineSlope(p0, p1) {
                return (p1[1] - p0[1]) / (p1[0] - p0[0])
            }
            function d3_svg_lineFiniteDifferences(points) {
                var i = 0,
                j = points.length - 1,
                m = [],
                p0 = points[0],
                p1 = points[1],
                d = m[0] = d3_svg_lineSlope(p0, p1);
                while (++i < j) {
                    m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2
                }
                m[i] = d;
                return m
            }
            function d3_svg_lineMonotoneTangents(points) {
                var tangents = [],
                d,
                a,
                b,
                s,
                m = d3_svg_lineFiniteDifferences(points),
                i = -1,
                j = points.length - 1;
                while (++i < j) {
                    d = d3_svg_lineSlope(points[i], points[i + 1]);
                    if (abs(d) < ε) {
                        m[i] = m[i + 1] = 0
                    } else {
                        a = m[i] / d;
                        b = m[i + 1] / d;
                        s = a * a + b * b;
                        if (s > 9) {
                            s = d * 3 / Math.sqrt(s);
                            m[i] = s * a;
                            m[i + 1] = s * b
                        }
                    }
                }
                i = -1;
                while (++i <= j) {
                    s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
                    tangents.push([s || 0, m[i] * s || 0])
                }
                return tangents
            }
            function d3_svg_lineMonotone(points) {
                return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points))
            }
            d3.svg.line.radial = function() {
                var line = d3_svg_line(d3_svg_lineRadial);
                line.radius = line.x,
                delete line.x;
                line.angle = line.y,
                delete line.y;
                return line
            };
            function d3_svg_lineRadial(points) {
                var point, i = -1,
                n = points.length,
                r, a;
                while (++i < n) {
                    point = points[i];
                    r = point[0];
                    a = point[1] - halfπ;
                    point[0] = r * Math.cos(a);
                    point[1] = r * Math.sin(a)
                }
                return points
            }
            function d3_svg_area(projection) {
                var x0 = d3_geom_pointX,
                x1 = d3_geom_pointX,
                y0 = 0,
                y1 = d3_geom_pointY,
                defined = d3_true,
                interpolate = d3_svg_lineLinear,
                interpolateKey = interpolate.key,
                interpolateReverse = interpolate,
                L = "L",
                tension = .7;
                function area(data) {
                    var segments = [],
                    points0 = [],
                    points1 = [],
                    i = -1,
                    n = data.length,
                    d,
                    fx0 = d3_functor(x0),
                    fy0 = d3_functor(y0),
                    fx1 = x0 === x1 ?
                    function() {
                        return x
                    }: d3_functor(x1),
                    fy1 = y0 === y1 ?
                    function() {
                        return y
                    }: d3_functor(y1),
                    x,
                    y;
                    function segment() {
                        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z")
                    }
                    while (++i < n) {
                        if (defined.call(this, d = data[i], i)) {
                            points0.push([x = +fx0.call(this, d, i), y = +fy0.call(this, d, i)]);
                            points1.push([ + fx1.call(this, d, i), +fy1.call(this, d, i)])
                        } else if (points0.length) {
                            segment();
                            points0 = [];
                            points1 = []
                        }
                    }
                    if (points0.length) segment();
                    return segments.length ? segments.join("") : null
                }
                area.x = function(_) {
                    if (!arguments.length) return x1;
                    x0 = x1 = _;
                    return area
                };
                area.x0 = function(_) {
                    if (!arguments.length) return x0;
                    x0 = _;
                    return area
                };
                area.x1 = function(_) {
                    if (!arguments.length) return x1;
                    x1 = _;
                    return area
                };
                area.y = function(_) {
                    if (!arguments.length) return y1;
                    y0 = y1 = _;
                    return area
                };
                area.y0 = function(_) {
                    if (!arguments.length) return y0;
                    y0 = _;
                    return area
                };
                area.y1 = function(_) {
                    if (!arguments.length) return y1;
                    y1 = _;
                    return area
                };
                area.defined = function(_) {
                    if (!arguments.length) return defined;
                    defined = _;
                    return area
                };
                area.interpolate = function(_) {
                    if (!arguments.length) return interpolateKey;
                    if (typeof _ === "function") interpolateKey = interpolate = _;
                    else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
                    interpolateReverse = interpolate.reverse || interpolate;
                    L = interpolate.closed ? "M": "L";
                    return area
                };
                area.tension = function(_) {
                    if (!arguments.length) return tension;
                    tension = _;
                    return area
                };
                return area
            }
            d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
            d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
            d3.svg.area = function() {
                return d3_svg_area(d3_identity)
            };
            d3.svg.area.radial = function() {
                var area = d3_svg_area(d3_svg_lineRadial);
                area.radius = area.x,
                delete area.x;
                area.innerRadius = area.x0,
                delete area.x0;
                area.outerRadius = area.x1,
                delete area.x1;
                area.angle = area.y,
                delete area.y;
                area.startAngle = area.y0,
                delete area.y0;
                area.endAngle = area.y1,
                delete area.y1;
                return area
            };
            d3.svg.chord = function() {
                var source = d3_source,
                target = d3_target,
                radius = d3_svg_chordRadius,
                startAngle = d3_svg_arcStartAngle,
                endAngle = d3_svg_arcEndAngle;
                function chord(d, i) {
                    var s = subgroup(this, source, d, i),
                    t = subgroup(this, target, d, i);
                    return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z"
                }
                function subgroup(self, f, d, i) {
                    var subgroup = f.call(self, d, i),
                    r = radius.call(self, subgroup, i),
                    a0 = startAngle.call(self, subgroup, i) - halfπ,
                    a1 = endAngle.call(self, subgroup, i) - halfπ;
                    return {
                        r: r,
                        a0: a0,
                        a1: a1,
                        p0: [r * Math.cos(a0), r * Math.sin(a0)],
                        p1: [r * Math.cos(a1), r * Math.sin(a1)]
                    }
                }
                function equals(a, b) {
                    return a.a0 == b.a0 && a.a1 == b.a1
                }
                function arc(r, p, a) {
                    return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p
                }
                function curve(r0, p0, r1, p1) {
                    return "Q 0,0 " + p1
                }
                chord.radius = function(v) {
                    if (!arguments.length) return radius;
                    radius = d3_functor(v);
                    return chord
                };
                chord.source = function(v) {
                    if (!arguments.length) return source;
                    source = d3_functor(v);
                    return chord
                };
                chord.target = function(v) {
                    if (!arguments.length) return target;
                    target = d3_functor(v);
                    return chord
                };
                chord.startAngle = function(v) {
                    if (!arguments.length) return startAngle;
                    startAngle = d3_functor(v);
                    return chord
                };
                chord.endAngle = function(v) {
                    if (!arguments.length) return endAngle;
                    endAngle = d3_functor(v);
                    return chord
                };
                return chord
            };
            function d3_svg_chordRadius(d) {
                return d.radius
            }
            d3.svg.diagonal = function() {
                var source = d3_source,
                target = d3_target,
                projection = d3_svg_diagonalProjection;
                function diagonal(d, i) {
                    var p0 = source.call(this, d, i),
                    p3 = target.call(this, d, i),
                    m = (p0.y + p3.y) / 2,
                    p = [p0, {
                        x: p0.x,
                        y: m
                    },
                    {
                        x: p3.x,
                        y: m
                    },
                    p3];
                    p = p.map(projection);
                    return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3]
                }
                diagonal.source = function(x) {
                    if (!arguments.length) return source;
                    source = d3_functor(x);
                    return diagonal
                };
                diagonal.target = function(x) {
                    if (!arguments.length) return target;
                    target = d3_functor(x);
                    return diagonal
                };
                diagonal.projection = function(x) {
                    if (!arguments.length) return projection;
                    projection = x;
                    return diagonal
                };
                return diagonal
            };
            function d3_svg_diagonalProjection(d) {
                return [d.x, d.y]
            }
            d3.svg.diagonal.radial = function() {
                var diagonal = d3.svg.diagonal(),
                projection = d3_svg_diagonalProjection,
                projection_ = diagonal.projection;
                diagonal.projection = function(x) {
                    return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection
                };
                return diagonal
            };
            function d3_svg_diagonalRadialProjection(projection) {
                return function() {
                    var d = projection.apply(this, arguments),
                    r = d[0],
                    a = d[1] - halfπ;
                    return [r * Math.cos(a), r * Math.sin(a)]
                }
            }
            d3.svg.symbol = function() {
                var type = d3_svg_symbolType,
                size = d3_svg_symbolSize;
                function symbol(d, i) {
                    return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i))
                }
                symbol.type = function(x) {
                    if (!arguments.length) return type;
                    type = d3_functor(x);
                    return symbol
                };
                symbol.size = function(x) {
                    if (!arguments.length) return size;
                    size = d3_functor(x);
                    return symbol
                };
                return symbol
            };
            function d3_svg_symbolSize() {
                return 64
            }
            function d3_svg_symbolType() {
                return "circle"
            }
            function d3_svg_symbolCircle(size) {
                var r = Math.sqrt(size / π);
                return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z"
            }
            var d3_svg_symbols = d3.map({
                circle: d3_svg_symbolCircle,
                cross: function(size) {
                    var r = Math.sqrt(size / 5) / 2;
                    return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z"
                },
                diamond: function(size) {
                    var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)),
                    rx = ry * d3_svg_symbolTan30;
                    return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z"
                },
                square: function(size) {
                    var r = Math.sqrt(size) / 2;
                    return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z"
                },
                "triangle-down": function(size) {
                    var rx = Math.sqrt(size / d3_svg_symbolSqrt3),
                    ry = rx * d3_svg_symbolSqrt3 / 2;
                    return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z"
                },
                "triangle-up": function(size) {
                    var rx = Math.sqrt(size / d3_svg_symbolSqrt3),
                    ry = rx * d3_svg_symbolSqrt3 / 2;
                    return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z"
                }
            });
            d3.svg.symbolTypes = d3_svg_symbols.keys();
            var d3_svg_symbolSqrt3 = Math.sqrt(3),
            d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
            d3_selectionPrototype.transition = function(name) {
                var id = d3_transitionInheritId || ++d3_transitionId,
                ns = d3_transitionNamespace(name),
                subgroups = [],
                subgroup,
                node,
                transition = d3_transitionInherit || {
                    time: Date.now(),
                    ease: d3_ease_cubicInOut,
                    delay: 0,
                    duration: 250
                };
                for (var j = -1,
                m = this.length; ++j < m;) {
                    subgroups.push(subgroup = []);
                    for (var group = this[j], i = -1, n = group.length; ++i < n;) {
                        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
                        subgroup.push(node)
                    }
                }
                return d3_transition(subgroups, ns, id)
            };
            d3_selectionPrototype.interrupt = function(name) {
                return this.each(name == null ? d3_selection_interrupt: d3_selection_interruptNS(d3_transitionNamespace(name)))
            };
            var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
            function d3_selection_interruptNS(ns) {
                return function() {
                    var lock, activeId, active;
                    if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
                        active.timer.c = null;
                        active.timer.t = NaN;
                        if (--lock.count) delete lock[activeId];
                        else delete this[ns];
                        lock.active += .5;
                        active.event && active.event.interrupt.call(this, this.__data__, active.index)
                    }
                }
            }
            function d3_transition(groups, ns, id) {
                d3_subclass(groups, d3_transitionPrototype);
                groups.namespace = ns;
                groups.id = id;
                return groups
            }
            var d3_transitionPrototype = [],
            d3_transitionId = 0,
            d3_transitionInheritId,
            d3_transitionInherit;
            d3_transitionPrototype.call = d3_selectionPrototype.call;
            d3_transitionPrototype.empty = d3_selectionPrototype.empty;
            d3_transitionPrototype.node = d3_selectionPrototype.node;
            d3_transitionPrototype.size = d3_selectionPrototype.size;
            d3.transition = function(selection, name) {
                return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection: d3.selection().transition(selection)
            };
            d3.transition.prototype = d3_transitionPrototype;
            d3_transitionPrototype.select = function(selector) {
                var id = this.id,
                ns = this.namespace,
                subgroups = [],
                subgroup,
                subnode,
                node;
                selector = d3_selection_selector(selector);
                for (var j = -1,
                m = this.length; ++j < m;) {
                    subgroups.push(subgroup = []);
                    for (var group = this[j], i = -1, n = group.length; ++i < n;) {
                        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
                            if ("__data__" in node) subnode.__data__ = node.__data__;
                            d3_transitionNode(subnode, i, ns, id, node[ns][id]);
                            subgroup.push(subnode)
                        } else {
                            subgroup.push(null)
                        }
                    }
                }
                return d3_transition(subgroups, ns, id)
            };
            d3_transitionPrototype.selectAll = function(selector) {
                var id = this.id,
                ns = this.namespace,
                subgroups = [],
                subgroup,
                subnodes,
                node,
                subnode,
                transition;
                selector = d3_selection_selectorAll(selector);
                for (var j = -1,
                m = this.length; ++j < m;) {
                    for (var group = this[j], i = -1, n = group.length; ++i < n;) {
                        if (node = group[i]) {
                            transition = node[ns][id];
                            subnodes = selector.call(node, node.__data__, i, j);
                            subgroups.push(subgroup = []);
                            for (var k = -1,
                            o = subnodes.length; ++k < o;) {
                                if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
                                subgroup.push(subnode)
                            }
                        }
                    }
                }
                return d3_transition(subgroups, ns, id)
            };
            d3_transitionPrototype.filter = function(filter) {
                var subgroups = [],
                subgroup,
                group,
                node;
                if (typeof filter !== "function") filter = d3_selection_filter(filter);
                for (var j = 0,
                m = this.length; j < m; j++) {
                    subgroups.push(subgroup = []);
                    for (var group = this[j], i = 0, n = group.length; i < n; i++) {
                        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
                            subgroup.push(node)
                        }
                    }
                }
                return d3_transition(subgroups, this.namespace, this.id)
            };
            d3_transitionPrototype.tween = function(name, tween) {
                var id = this.id,
                ns = this.namespace;
                if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
                return d3_selection_each(this, tween == null ?
                function(node) {
                    node[ns][id].tween.remove(name)
                }: function(node) {
                    node[ns][id].tween.set(name, tween)
                })
            };
            function d3_transition_tween(groups, name, value, tween) {
                var id = groups.id,
                ns = groups.namespace;
                return d3_selection_each(groups, typeof value === "function" ?
                function(node, i, j) {
                    node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)))
                }: (value = tween(value),
                function(node) {
                    node[ns][id].tween.set(name, value)
                }))
            }
            d3_transitionPrototype.attr = function(nameNS, value) {
                if (arguments.length < 2) {
                    for (value in nameNS) this.attr(value, nameNS[value]);
                    return this
                }
                var interpolate = nameNS == "transform" ? d3_interpolateTransform: d3_interpolate,
                name = d3.ns.qualify(nameNS);
                function attrNull() {
                    this.removeAttribute(name)
                }
                function attrNullNS() {
                    this.removeAttributeNS(name.space, name.local)
                }
                function attrTween(b) {
                    return b == null ? attrNull: (b += "",
                    function() {
                        var a = this.getAttribute(name),
                        i;
                        return a !== b && (i = interpolate(a, b),
                        function(t) {
                            this.setAttribute(name, i(t))
                        })
                    })
                }
                function attrTweenNS(b) {
                    return b == null ? attrNullNS: (b += "",
                    function() {
                        var a = this.getAttributeNS(name.space, name.local),
                        i;
                        return a !== b && (i = interpolate(a, b),
                        function(t) {
                            this.setAttributeNS(name.space, name.local, i(t))
                        })
                    })
                }
                return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS: attrTween)
            };
            d3_transitionPrototype.attrTween = function(nameNS, tween) {
                var name = d3.ns.qualify(nameNS);
                function attrTween(d, i) {
                    var f = tween.call(this, d, i, this.getAttribute(name));
                    return f &&
                    function(t) {
                        this.setAttribute(name, f(t))
                    }
                }
                function attrTweenNS(d, i) {
                    var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
                    return f &&
                    function(t) {
                        this.setAttributeNS(name.space, name.local, f(t))
                    }
                }
                return this.tween("attr." + nameNS, name.local ? attrTweenNS: attrTween)
            };
            d3_transitionPrototype.style = function(name, value, priority) {
                var n = arguments.length;
                if (n < 3) {
                    if (typeof name !== "string") {
                        if (n < 2) value = "";
                        for (priority in name) this.style(priority, name[priority], value);
                        return this
                    }
                    priority = ""
                }
                function styleNull() {
                    this.style.removeProperty(name)
                }
                function styleString(b) {
                    return b == null ? styleNull: (b += "",
                    function() {
                        var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name),
                        i;
                        return a !== b && (i = d3_interpolate(a, b),
                        function(t) {
                            this.style.setProperty(name, i(t), priority)
                        })
                    })
                }
                return d3_transition_tween(this, "style." + name, value, styleString)
            };
            d3_transitionPrototype.styleTween = function(name, tween, priority) {
                if (arguments.length < 3) priority = "";
                function styleTween(d, i) {
                    var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
                    return f &&
                    function(t) {
                        this.style.setProperty(name, f(t), priority)
                    }
                }
                return this.tween("style." + name, styleTween)
            };
            d3_transitionPrototype.text = function(value) {
                return d3_transition_tween(this, "text", value, d3_transition_text)
            };
            function d3_transition_text(b) {
                if (b == null) b = "";
                return function() {
                    this.textContent = b
                }
            }
            d3_transitionPrototype.remove = function() {
                var ns = this.namespace;
                return this.each("end.transition",
                function() {
                    var p;
                    if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this)
                })
            };
            d3_transitionPrototype.ease = function(value) {
                var id = this.id,
                ns = this.namespace;
                if (arguments.length < 1) return this.node()[ns][id].ease;
                if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
                return d3_selection_each(this,
                function(node) {
                    node[ns][id].ease = value
                })
            };
            d3_transitionPrototype.delay = function(value) {
                var id = this.id,
                ns = this.namespace;
                if (arguments.length < 1) return this.node()[ns][id].delay;
                return d3_selection_each(this, typeof value === "function" ?
                function(node, i, j) {
                    node[ns][id].delay = +value.call(node, node.__data__, i, j)
                }: (value = +value,
                function(node) {
                    node[ns][id].delay = value
                }))
            };
            d3_transitionPrototype.duration = function(value) {
                var id = this.id,
                ns = this.namespace;
                if (arguments.length < 1) return this.node()[ns][id].duration;
                return d3_selection_each(this, typeof value === "function" ?
                function(node, i, j) {
                    node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j))
                }: (value = Math.max(1, value),
                function(node) {
                    node[ns][id].duration = value
                }))
            };
            d3_transitionPrototype.each = function(type, listener) {
                var id = this.id,
                ns = this.namespace;
                if (arguments.length < 2) {
                    var inherit = d3_transitionInherit,
                    inheritId = d3_transitionInheritId;
                    try {
                        d3_transitionInheritId = id;
                        d3_selection_each(this,
                        function(node, i, j) {
                            d3_transitionInherit = node[ns][id];
                            type.call(node, node.__data__, i, j)
                        })
                    } finally {
                        d3_transitionInherit = inherit;
                        d3_transitionInheritId = inheritId
                    }
                } else {
                    d3_selection_each(this,
                    function(node) {
                        var transition = node[ns][id]; (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener)
                    })
                }
                return this
            };
            d3_transitionPrototype.transition = function() {
                var id0 = this.id,
                id1 = ++d3_transitionId,
                ns = this.namespace,
                subgroups = [],
                subgroup,
                group,
                node,
                transition;
                for (var j = 0,
                m = this.length; j < m; j++) {
                    subgroups.push(subgroup = []);
                    for (var group = this[j], i = 0, n = group.length; i < n; i++) {
                        if (node = group[i]) {
                            transition = node[ns][id0];
                            d3_transitionNode(node, i, ns, id1, {
                                time: transition.time,
                                ease: transition.ease,
                                delay: transition.delay + transition.duration,
                                duration: transition.duration
                            })
                        }
                        subgroup.push(node)
                    }
                }
                return d3_transition(subgroups, ns, id1)
            };
            function d3_transitionNamespace(name) {
                return name == null ? "__transition__": "__transition_" + name + "__"
            }
            function d3_transitionNode(node, i, ns, id, inherit) {
                var lock = node[ns] || (node[ns] = {
                    active: 0,
                    count: 0
                }),
                transition = lock[id],
                time,
                timer,
                duration,
                ease,
                tweens;
                function schedule(elapsed) {
                    var delay = transition.delay;
                    timer.t = delay + time;
                    if (delay <= elapsed) return start(elapsed - delay);
                    timer.c = start
                }
                function start(elapsed) {
                    var activeId = lock.active,
                    active = lock[activeId];
                    if (active) {
                        active.timer.c = null;
                        active.timer.t = NaN; --lock.count;
                        delete lock[activeId];
                        active.event && active.event.interrupt.call(node, node.__data__, active.index)
                    }
                    for (var cancelId in lock) {
                        if ( + cancelId < id) {
                            var cancel = lock[cancelId];
                            cancel.timer.c = null;
                            cancel.timer.t = NaN; --lock.count;
                            delete lock[cancelId]
                        }
                    }
                    timer.c = tick;
                    d3_timer(function() {
                        if (timer.c && tick(elapsed || 1)) {
                            timer.c = null;
                            timer.t = NaN
                        }
                        return 1
                    },
                    0, time);
                    lock.active = id;
                    transition.event && transition.event.start.call(node, node.__data__, i);
                    tweens = [];
                    transition.tween.forEach(function(key, value) {
                        if (value = value.call(node, node.__data__, i)) {
                            tweens.push(value)
                        }
                    });
                    ease = transition.ease;
                    duration = transition.duration
                }
                function tick(elapsed) {
                    var t = elapsed / duration,
                    e = ease(t),
                    n = tweens.length;
                    while (n > 0) {
                        tweens[--n].call(node, e)
                    }
                    if (t >= 1) {
                        transition.event && transition.event.end.call(node, node.__data__, i);
                        if (--lock.count) delete lock[id];
                        else delete node[ns];
                        return 1
                    }
                }
                if (!transition) {
                    time = inherit.time;
                    timer = d3_timer(schedule, 0, time);
                    transition = lock[id] = {
                        tween: new d3_Map,
                        time: time,
                        timer: timer,
                        delay: inherit.delay,
                        duration: inherit.duration,
                        ease: inherit.ease,
                        index: i
                    };
                    inherit = null; ++lock.count
                }
            }
            d3.svg.axis = function() {
                var scale = d3.scale.linear(),
                orient = d3_svg_axisDefaultOrient,
                innerTickSize = 6,
                outerTickSize = 6,
                tickPadding = 3,
                tickArguments_ = [10],
                tickValues = null,
                tickFormat_;
                function axis(g) {
                    g.each(function() {
                        var g = d3.select(this);
                        var scale0 = this.__chart__ || scale,
                        scale1 = this.__chart__ = scale.copy();
                        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues,
                        tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity: tickFormat_,
                        tick = g.selectAll(".tick").data(ticks, scale1),
                        tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε),
                        tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(),
                        tickUpdate = d3.transition(tick.order()).style("opacity", 1),
                        tickSpacing = Math.max(innerTickSize, 0) + tickPadding,
                        tickTransform;
                        var range = d3_scaleRange(scale1),
                        path = g.selectAll(".domain").data([0]),
                        pathUpdate = (path.enter().append("path").attr("class", "domain"), d3.transition(path));
                        tickEnter.append("line");
                        tickEnter.append("text");
                        var lineEnter = tickEnter.select("line"),
                        lineUpdate = tickUpdate.select("line"),
                        text = tick.select("text").text(tickFormat),
                        textEnter = tickEnter.select("text"),
                        textUpdate = tickUpdate.select("text"),
                        sign = orient === "top" || orient === "left" ? -1 : 1,
                        x1,
                        x2,
                        y1,
                        y2;
                        if (orient === "bottom" || orient === "top") {
                            tickTransform = d3_svg_axisX,
                            x1 = "x",
                            y1 = "y",
                            x2 = "x2",
                            y2 = "y2";
                            text.attr("dy", sign < 0 ? "0em": ".71em").style("text-anchor", "middle");
                            pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize)
                        } else {
                            tickTransform = d3_svg_axisY,
                            x1 = "y",
                            y1 = "x",
                            x2 = "y2",
                            y2 = "x2";
                            text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end": "start");
                            pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize)
                        }
                        lineEnter.attr(y2, sign * innerTickSize);
                        textEnter.attr(y1, sign * tickSpacing);
                        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
                        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
                        if (scale1.rangeBand) {
                            var x = scale1,
                            dx = x.rangeBand() / 2;
                            scale0 = scale1 = function(d) {
                                return x(d) + dx
                            }
                        } else if (scale0.rangeBand) {
                            scale0 = scale1
                        } else {
                            tickExit.call(tickTransform, scale1, scale0)
                        }
                        tickEnter.call(tickTransform, scale0, scale1);
                        tickUpdate.call(tickTransform, scale1, scale1)
                    })
                }
                axis.scale = function(x) {
                    if (!arguments.length) return scale;
                    scale = x;
                    return axis
                };
                axis.orient = function(x) {
                    if (!arguments.length) return orient;
                    orient = x in d3_svg_axisOrients ? x + "": d3_svg_axisDefaultOrient;
                    return axis
                };
                axis.ticks = function() {
                    if (!arguments.length) return tickArguments_;
                    tickArguments_ = d3_array(arguments);
                    return axis
                };
                axis.tickValues = function(x) {
                    if (!arguments.length) return tickValues;
                    tickValues = x;
                    return axis
                };
                axis.tickFormat = function(x) {
                    if (!arguments.length) return tickFormat_;
                    tickFormat_ = x;
                    return axis
                };
                axis.tickSize = function(x) {
                    var n = arguments.length;
                    if (!n) return innerTickSize;
                    innerTickSize = +x;
                    outerTickSize = +arguments[n - 1];
                    return axis
                };
                axis.innerTickSize = function(x) {
                    if (!arguments.length) return innerTickSize;
                    innerTickSize = +x;
                    return axis
                };
                axis.outerTickSize = function(x) {
                    if (!arguments.length) return outerTickSize;
                    outerTickSize = +x;
                    return axis
                };
                axis.tickPadding = function(x) {
                    if (!arguments.length) return tickPadding;
                    tickPadding = +x;
                    return axis
                };
                axis.tickSubdivide = function() {
                    return arguments.length && axis
                };
                return axis
            };
            var d3_svg_axisDefaultOrient = "bottom",
            d3_svg_axisOrients = {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            };
            function d3_svg_axisX(selection, x0, x1) {
                selection.attr("transform",
                function(d) {
                    var v0 = x0(d);
                    return "translate(" + (isFinite(v0) ? v0: x1(d)) + ",0)"
                })
            }
            function d3_svg_axisY(selection, y0, y1) {
                selection.attr("transform",
                function(d) {
                    var v0 = y0(d);
                    return "translate(0," + (isFinite(v0) ? v0: y1(d)) + ")"
                })
            }
            d3.svg.brush = function() {
                var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"),
                x = null,
                y = null,
                xExtent = [0, 0],
                yExtent = [0, 0],
                xExtentDomain,
                yExtentDomain,
                xClamp = true,
                yClamp = true,
                resizes = d3_svg_brushResizes[0];
                function brush(g) {
                    g.each(function() {
                        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
                        var background = g.selectAll(".background").data([0]);
                        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
                        g.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                        var resize = g.selectAll(".resize").data(resizes, d3_identity);
                        resize.exit().remove();
                        resize.enter().append("g").attr("class",
                        function(d) {
                            return "resize " + d
                        }).style("cursor",
                        function(d) {
                            return d3_svg_brushCursor[d]
                        }).append("rect").attr("x",
                        function(d) {
                            return /[ew]$/.test(d) ? -3 : null
                        }).attr("y",
                        function(d) {
                            return /^[ns]/.test(d) ? -3 : null
                        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
                        resize.style("display", brush.empty() ? "none": null);
                        var gUpdate = d3.transition(g),
                        backgroundUpdate = d3.transition(background),
                        range;
                        if (x) {
                            range = d3_scaleRange(x);
                            backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
                            redrawX(gUpdate)
                        }
                        if (y) {
                            range = d3_scaleRange(y);
                            backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
                            redrawY(gUpdate)
                        }
                        redraw(gUpdate)
                    })
                }
                brush.event = function(g) {
                    g.each(function() {
                        var event_ = event.of(this, arguments),
                        extent1 = {
                            x: xExtent,
                            y: yExtent,
                            i: xExtentDomain,
                            j: yExtentDomain
                        },
                        extent0 = this.__chart__ || extent1;
                        this.__chart__ = extent1;
                        if (d3_transitionInheritId) {
                            d3.select(this).transition().each("start.brush",
                            function() {
                                xExtentDomain = extent0.i;
                                yExtentDomain = extent0.j;
                                xExtent = extent0.x;
                                yExtent = extent0.y;
                                event_({
                                    type: "brushstart"
                                })
                            }).tween("brush:brush",
                            function() {
                                var xi = d3_interpolateArray(xExtent, extent1.x),
                                yi = d3_interpolateArray(yExtent, extent1.y);
                                xExtentDomain = yExtentDomain = null;
                                return function(t) {
                                    xExtent = extent1.x = xi(t);
                                    yExtent = extent1.y = yi(t);
                                    event_({
                                        type: "brush",
                                        mode: "resize"
                                    })
                                }
                            }).each("end.brush",
                            function() {
                                xExtentDomain = extent1.i;
                                yExtentDomain = extent1.j;
                                event_({
                                    type: "brush",
                                    mode: "resize"
                                });
                                event_({
                                    type: "brushend"
                                })
                            })
                        } else {
                            event_({
                                type: "brushstart"
                            });
                            event_({
                                type: "brush",
                                mode: "resize"
                            });
                            event_({
                                type: "brushend"
                            })
                        }
                    })
                };
                function redraw(g) {
                    g.selectAll(".resize").attr("transform",
                    function(d) {
                        return "translate(" + xExtent[ + /e$/.test(d)] + "," + yExtent[ + /^s/.test(d)] + ")"
                    })
                }
                function redrawX(g) {
                    g.select(".extent").attr("x", xExtent[0]);
                    g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0])
                }
                function redrawY(g) {
                    g.select(".extent").attr("y", yExtent[0]);
                    g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0])
                }
                function brushstart() {
                    var target = this,
                    eventTarget = d3.select(d3.event.target),
                    event_ = event.of(target, arguments),
                    g = d3.select(target),
                    resizing = eventTarget.datum(),
                    resizingX = !/^(n|s)$/.test(resizing) && x,
                    resizingY = !/^(e|w)$/.test(resizing) && y,
                    dragging = eventTarget.classed("extent"),
                    dragRestore = d3_event_dragSuppress(target),
                    center,
                    origin = d3.mouse(target),
                    offset;
                    var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
                    if (d3.event.changedTouches) {
                        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend)
                    } else {
                        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend)
                    }
                    g.interrupt().selectAll("*").interrupt();
                    if (dragging) {
                        origin[0] = xExtent[0] - origin[0];
                        origin[1] = yExtent[0] - origin[1]
                    } else if (resizing) {
                        var ex = +/w$/.test(resizing),
                        ey = +/^n/.test(resizing);
                        offset = [xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1]];
                        origin[0] = xExtent[ex];
                        origin[1] = yExtent[ey]
                    } else if (d3.event.altKey) center = origin.slice();
                    g.style("pointer-events", "none").selectAll(".resize").style("display", null);
                    d3.select("body").style("cursor", eventTarget.style("cursor"));
                    event_({
                        type: "brushstart"
                    });
                    brushmove();
                    function keydown() {
                        if (d3.event.keyCode == 32) {
                            if (!dragging) {
                                center = null;
                                origin[0] -= xExtent[1];
                                origin[1] -= yExtent[1];
                                dragging = 2
                            }
                            d3_eventPreventDefault()
                        }
                    }
                    function keyup() {
                        if (d3.event.keyCode == 32 && dragging == 2) {
                            origin[0] += xExtent[1];
                            origin[1] += yExtent[1];
                            dragging = 0;
                            d3_eventPreventDefault()
                        }
                    }
                    function brushmove() {
                        var point = d3.mouse(target),
                        moved = false;
                        if (offset) {
                            point[0] += offset[0];
                            point[1] += offset[1]
                        }
                        if (!dragging) {
                            if (d3.event.altKey) {
                                if (!center) center = [(xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2];
                                origin[0] = xExtent[ + (point[0] < center[0])];
                                origin[1] = yExtent[ + (point[1] < center[1])]
                            } else center = null
                        }
                        if (resizingX && move1(point, x, 0)) {
                            redrawX(g);
                            moved = true
                        }
                        if (resizingY && move1(point, y, 1)) {
                            redrawY(g);
                            moved = true
                        }
                        if (moved) {
                            redraw(g);
                            event_({
                                type: "brush",
                                mode: dragging ? "move": "resize"
                            })
                        }
                    }
                    function move1(point, scale, i) {
                        var range = d3_scaleRange(scale),
                        r0 = range[0],
                        r1 = range[1],
                        position = origin[i],
                        extent = i ? yExtent: xExtent,
                        size = extent[1] - extent[0],
                        min,
                        max;
                        if (dragging) {
                            r0 -= position;
                            r1 -= size + position
                        }
                        min = (i ? yClamp: xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
                        if (dragging) {
                            max = (min += position) + size
                        } else {
                            if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
                            if (position < min) {
                                max = min;
                                min = position
                            } else {
                                max = position
                            }
                        }
                        if (extent[0] != min || extent[1] != max) {
                            if (i) yExtentDomain = null;
                            else xExtentDomain = null;
                            extent[0] = min;
                            extent[1] = max;
                            return true
                        }
                    }
                    function brushend() {
                        brushmove();
                        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none": null);
                        d3.select("body").style("cursor", null);
                        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
                        dragRestore();
                        event_({
                            type: "brushend"
                        })
                    }
                }
                brush.x = function(z) {
                    if (!arguments.length) return x;
                    x = z;
                    resizes = d3_svg_brushResizes[!x << 1 | !y];
                    return brush
                };
                brush.y = function(z) {
                    if (!arguments.length) return y;
                    y = z;
                    resizes = d3_svg_brushResizes[!x << 1 | !y];
                    return brush
                };
                brush.clamp = function(z) {
                    if (!arguments.length) return x && y ? [xClamp, yClamp] : x ? xClamp: y ? yClamp: null;
                    if (x && y) xClamp = !!z[0],
                    yClamp = !!z[1];
                    else if (x) xClamp = !!z;
                    else if (y) yClamp = !!z;
                    return brush
                };
                brush.extent = function(z) {
                    var x0, x1, y0, y1, t;
                    if (!arguments.length) {
                        if (x) {
                            if (xExtentDomain) {
                                x0 = xExtentDomain[0],
                                x1 = xExtentDomain[1]
                            } else {
                                x0 = xExtent[0],
                                x1 = xExtent[1];
                                if (x.invert) x0 = x.invert(x0),
                                x1 = x.invert(x1);
                                if (x1 < x0) t = x0,
                                x0 = x1,
                                x1 = t
                            }
                        }
                        if (y) {
                            if (yExtentDomain) {
                                y0 = yExtentDomain[0],
                                y1 = yExtentDomain[1]
                            } else {
                                y0 = yExtent[0],
                                y1 = yExtent[1];
                                if (y.invert) y0 = y.invert(y0),
                                y1 = y.invert(y1);
                                if (y1 < y0) t = y0,
                                y0 = y1,
                                y1 = t
                            }
                        }
                        return x && y ? [[x0, y0], [x1, y1]] : x ? [x0, x1] : y && [y0, y1]
                    }
                    if (x) {
                        x0 = z[0],
                        x1 = z[1];
                        if (y) x0 = x0[0],
                        x1 = x1[0];
                        xExtentDomain = [x0, x1];
                        if (x.invert) x0 = x(x0),
                        x1 = x(x1);
                        if (x1 < x0) t = x0,
                        x0 = x1,
                        x1 = t;
                        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [x0, x1]
                    }
                    if (y) {
                        y0 = z[0],
                        y1 = z[1];
                        if (x) y0 = y0[1],
                        y1 = y1[1];
                        yExtentDomain = [y0, y1];
                        if (y.invert) y0 = y(y0),
                        y1 = y(y1);
                        if (y1 < y0) t = y0,
                        y0 = y1,
                        y1 = t;
                        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [y0, y1]
                    }
                    return brush
                };
                brush.clear = function() {
                    if (!brush.empty()) {
                        xExtent = [0, 0],
                        yExtent = [0, 0];
                        xExtentDomain = yExtentDomain = null
                    }
                    return brush
                };
                brush.empty = function() {
                    return !! x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1]
                };
                return d3.rebind(brush, event, "on")
            };
            var d3_svg_brushCursor = {
                n: "ns-resize",
                e: "ew-resize",
                s: "ns-resize",
                w: "ew-resize",
                nw: "nwse-resize",
                ne: "nesw-resize",
                se: "nwse-resize",
                sw: "nesw-resize"
            };
            var d3_svg_brushResizes = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
            var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
            var d3_time_formatUtc = d3_time_format.utc;
            var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
            d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative: d3_time_formatIso;
            function d3_time_formatIsoNative(date) {
                return date.toISOString()
            }
            d3_time_formatIsoNative.parse = function(string) {
                var date = new Date(string);
                return isNaN(date) ? null: date
            };
            d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
            d3_time.second = d3_time_interval(function(date) {
                return new d3_date(Math.floor(date / 1e3) * 1e3)
            },
            function(date, offset) {
                date.setTime(date.getTime() + Math.floor(offset) * 1e3)
            },
            function(date) {
                return date.getSeconds()
            });
            d3_time.seconds = d3_time.second.range;
            d3_time.seconds.utc = d3_time.second.utc.range;
            d3_time.minute = d3_time_interval(function(date) {
                return new d3_date(Math.floor(date / 6e4) * 6e4)
            },
            function(date, offset) {
                date.setTime(date.getTime() + Math.floor(offset) * 6e4)
            },
            function(date) {
                return date.getMinutes()
            });
            d3_time.minutes = d3_time.minute.range;
            d3_time.minutes.utc = d3_time.minute.utc.range;
            d3_time.hour = d3_time_interval(function(date) {
                var timezone = date.getTimezoneOffset() / 60;
                return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5)
            },
            function(date, offset) {
                date.setTime(date.getTime() + Math.floor(offset) * 36e5)
            },
            function(date) {
                return date.getHours()
            });
            d3_time.hours = d3_time.hour.range;
            d3_time.hours.utc = d3_time.hour.utc.range;
            d3_time.month = d3_time_interval(function(date) {
                date = d3_time.day(date);
                date.setDate(1);
                return date
            },
            function(date, offset) {
                date.setMonth(date.getMonth() + offset)
            },
            function(date) {
                return date.getMonth()
            });
            d3_time.months = d3_time.month.range;
            d3_time.months.utc = d3_time.month.utc.range;
            function d3_time_scale(linear, methods, format) {
                function scale(x) {
                    return linear(x)
                }
                scale.invert = function(x) {
                    return d3_time_scaleDate(linear.invert(x))
                };
                scale.domain = function(x) {
                    if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
                    linear.domain(x);
                    return scale
                };
                function tickMethod(extent, count) {
                    var span = extent[1] - extent[0],
                    target = span / count,
                    i = d3.bisect(d3_time_scaleSteps, target);
                    return i == d3_time_scaleSteps.length ? [methods.year, d3_scale_linearTickRange(extent.map(function(d) {
                        return d / 31536e6
                    }), count)[2]] : !i ? [d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2]] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i]
                }
                scale.nice = function(interval, skip) {
                    var domain = scale.domain(),
                    extent = d3_scaleExtent(domain),
                    method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
                    if (method) interval = method[0],
                    skip = method[1];
                    function skipped(date) {
                        return ! isNaN(date) && !interval.range(date, d3_time_scaleDate( + date + 1), skip).length
                    }
                    return scale.domain(d3_scale_nice(domain, skip > 1 ? {
                        floor: function(date) {
                            while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
                            return date
                        },
                        ceil: function(date) {
                            while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate( + date + 1);
                            return date
                        }
                    }: interval))
                };
                scale.ticks = function(interval, skip) {
                    var extent = d3_scaleExtent(scale.domain()),
                    method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [{
                        range: interval
                    },
                    skip];
                    if (method) interval = method[0],
                    skip = method[1];
                    return interval.range(extent[0], d3_time_scaleDate( + extent[1] + 1), skip < 1 ? 1 : skip)
                };
                scale.tickFormat = function() {
                    return format
                };
                scale.copy = function() {
                    return d3_time_scale(linear.copy(), methods, format)
                };
                return d3_scale_linearRebind(scale, linear)
            }
            function d3_time_scaleDate(t) {
                return new Date(t)
            }
            var d3_time_scaleSteps = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6];
            var d3_time_scaleLocalMethods = [[d3_time.second, 1], [d3_time.second, 5], [d3_time.second, 15], [d3_time.second, 30], [d3_time.minute, 1], [d3_time.minute, 5], [d3_time.minute, 15], [d3_time.minute, 30], [d3_time.hour, 1], [d3_time.hour, 3], [d3_time.hour, 6], [d3_time.hour, 12], [d3_time.day, 1], [d3_time.day, 2], [d3_time.week, 1], [d3_time.month, 1], [d3_time.month, 3], [d3_time.year, 1]];
            var d3_time_scaleLocalFormat = d3_time_format.multi([[".%L",
            function(d) {
                return d.getMilliseconds()
            }], [":%S",
            function(d) {
                return d.getSeconds()
            }], ["%I:%M",
            function(d) {
                return d.getMinutes()
            }], ["%I %p",
            function(d) {
                return d.getHours()
            }], ["%a %d",
            function(d) {
                return d.getDay() && d.getDate() != 1
            }], ["%b %d",
            function(d) {
                return d.getDate() != 1
            }], ["%B",
            function(d) {
                return d.getMonth()
            }], ["%Y", d3_true]]);
            var d3_time_scaleMilliseconds = {
                range: function(start, stop, step) {
                    return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate)
                },
                floor: d3_identity,
                ceil: d3_identity
            };
            d3_time_scaleLocalMethods.year = d3_time.year;
            d3_time.scale = function() {
                return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat)
            };
            var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
                return [m[0].utc, m[1]]
            });
            var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([[".%L",
            function(d) {
                return d.getUTCMilliseconds()
            }], [":%S",
            function(d) {
                return d.getUTCSeconds()
            }], ["%I:%M",
            function(d) {
                return d.getUTCMinutes()
            }], ["%I %p",
            function(d) {
                return d.getUTCHours()
            }], ["%a %d",
            function(d) {
                return d.getUTCDay() && d.getUTCDate() != 1
            }], ["%b %d",
            function(d) {
                return d.getUTCDate() != 1
            }], ["%B",
            function(d) {
                return d.getUTCMonth()
            }], ["%Y", d3_true]]);
            d3_time_scaleUtcMethods.year = d3_time.year.utc;
            d3_time.scale.utc = function() {
                return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat)
            };
            d3.text = d3_xhrType(function(request) {
                return request.responseText
            });
            d3.json = function(url, callback) {
                return d3_xhr(url, "application/json", d3_json, callback)
            };
            function d3_json(request) {
                return JSON.parse(request.responseText)
            }
            d3.html = function(url, callback) {
                return d3_xhr(url, "text/html", d3_html, callback)
            };
            function d3_html(request) {
                var range = d3_document.createRange();
                range.selectNode(d3_document.body);
                return range.createContextualFragment(request.responseText)
            }
            d3.xml = d3_xhrType(function(request) {
                return request.responseXML
            });
            if (typeof define === "function" && define.amd) this.d3 = d3,
            define(d3);
            else if (typeof module === "object" && module.exports) module.exports = d3;
            else this.d3 = d3
        } ()
    },
    {}],
    2 : [function(require, module, exports) { (function(root, factory) {
            "use strict";
            if (typeof define === "function" && define.amd) {
                define(["exports"], factory)
            } else if (typeof exports !== "undefined") {
                factory(exports)
            } else {
                factory(root.esprima = {})
            }
        })(this,
        function(exports) {
            "use strict";
            var Token, TokenName, FnExprTokens, Syntax, PlaceHolders, Messages, Regex, source, strict, index, lineNumber, lineStart, hasLineTerminator, lastIndex, lastLineNumber, lastLineStart, startIndex, startLineNumber, startLineStart, scanning, length, lookahead, state, extra, isBindingElement, isAssignmentTarget, firstCoverInitializedNameError;
            Token = {
                BooleanLiteral: 1,
                EOF: 2,
                Identifier: 3,
                Keyword: 4,
                NullLiteral: 5,
                NumericLiteral: 6,
                Punctuator: 7,
                StringLiteral: 8,
                RegularExpression: 9,
                Template: 10
            };
            TokenName = {};
            TokenName[Token.BooleanLiteral] = "Boolean";
            TokenName[Token.EOF] = "<end>";
            TokenName[Token.Identifier] = "Identifier";
            TokenName[Token.Keyword] = "Keyword";
            TokenName[Token.NullLiteral] = "Null";
            TokenName[Token.NumericLiteral] = "Numeric";
            TokenName[Token.Punctuator] = "Punctuator";
            TokenName[Token.StringLiteral] = "String";
            TokenName[Token.RegularExpression] = "RegularExpression";
            TokenName[Token.Template] = "Template";
            FnExprTokens = ["(", "{", "[", "in", "typeof", "instanceof", "new", "return", "case", "delete", "throw", "void", "=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", ">>>=", "&=", "|=", "^=", ",", "+", "-", "*", "/", "%", "++", "--", "<<", ">>", ">>>", "&", "|", "^", "!", "~", "&&", "||", "?", ":", "===", "==", ">=", "<=", "<", ">", "!=", "!=="];
            Syntax = {
                AssignmentExpression: "AssignmentExpression",
                AssignmentPattern: "AssignmentPattern",
                ArrayExpression: "ArrayExpression",
                ArrayPattern: "ArrayPattern",
                ArrowFunctionExpression: "ArrowFunctionExpression",
                BlockStatement: "BlockStatement",
                BinaryExpression: "BinaryExpression",
                BreakStatement: "BreakStatement",
                CallExpression: "CallExpression",
                CatchClause: "CatchClause",
                ClassBody: "ClassBody",
                ClassDeclaration: "ClassDeclaration",
                ClassExpression: "ClassExpression",
                ConditionalExpression: "ConditionalExpression",
                ContinueStatement: "ContinueStatement",
                DoWhileStatement: "DoWhileStatement",
                DebuggerStatement: "DebuggerStatement",
                EmptyStatement: "EmptyStatement",
                ExportAllDeclaration: "ExportAllDeclaration",
                ExportDefaultDeclaration: "ExportDefaultDeclaration",
                ExportNamedDeclaration: "ExportNamedDeclaration",
                ExportSpecifier: "ExportSpecifier",
                ExpressionStatement: "ExpressionStatement",
                ForStatement: "ForStatement",
                ForOfStatement: "ForOfStatement",
                ForInStatement: "ForInStatement",
                FunctionDeclaration: "FunctionDeclaration",
                FunctionExpression: "FunctionExpression",
                Identifier: "Identifier",
                IfStatement: "IfStatement",
                ImportDeclaration: "ImportDeclaration",
                ImportDefaultSpecifier: "ImportDefaultSpecifier",
                ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
                ImportSpecifier: "ImportSpecifier",
                Literal: "Literal",
                LabeledStatement: "LabeledStatement",
                LogicalExpression: "LogicalExpression",
                MemberExpression: "MemberExpression",
                MetaProperty: "MetaProperty",
                MethodDefinition: "MethodDefinition",
                NewExpression: "NewExpression",
                ObjectExpression: "ObjectExpression",
                ObjectPattern: "ObjectPattern",
                Program: "Program",
                Property: "Property",
                RestElement: "RestElement",
                ReturnStatement: "ReturnStatement",
                SequenceExpression: "SequenceExpression",
                SpreadElement: "SpreadElement",
                Super: "Super",
                SwitchCase: "SwitchCase",
                SwitchStatement: "SwitchStatement",
                TaggedTemplateExpression: "TaggedTemplateExpression",
                TemplateElement: "TemplateElement",
                TemplateLiteral: "TemplateLiteral",
                ThisExpression: "ThisExpression",
                ThrowStatement: "ThrowStatement",
                TryStatement: "TryStatement",
                UnaryExpression: "UnaryExpression",
                UpdateExpression: "UpdateExpression",
                VariableDeclaration: "VariableDeclaration",
                VariableDeclarator: "VariableDeclarator",
                WhileStatement: "WhileStatement",
                WithStatement: "WithStatement",
                YieldExpression: "YieldExpression"
            };
            PlaceHolders = {
                ArrowParameterPlaceHolder: "ArrowParameterPlaceHolder"
            };
            Messages = {
                UnexpectedToken: "Unexpected token %0",
                UnexpectedNumber: "Unexpected number",
                UnexpectedString: "Unexpected string",
                UnexpectedIdentifier: "Unexpected identifier",
                UnexpectedReserved: "Unexpected reserved word",
                UnexpectedTemplate: "Unexpected quasi %0",
                UnexpectedEOS: "Unexpected end of input",
                NewlineAfterThrow: "Illegal newline after throw",
                InvalidRegExp: "Invalid regular expression",
                UnterminatedRegExp: "Invalid regular expression: missing /",
                InvalidLHSInAssignment: "Invalid left-hand side in assignment",
                InvalidLHSInForIn: "Invalid left-hand side in for-in",
                InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
                MultipleDefaultsInSwitch: "More than one default clause in switch statement",
                NoCatchOrFinally: "Missing catch or finally after try",
                UnknownLabel: "Undefined label '%0'",
                Redeclaration: "%0 '%1' has already been declared",
                IllegalContinue: "Illegal continue statement",
                IllegalBreak: "Illegal break statement",
                IllegalReturn: "Illegal return statement",
                StrictModeWith: "Strict mode code may not include a with statement",
                StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
                StrictVarName: "Variable name may not be eval or arguments in strict mode",
                StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
                StrictParamDupe: "Strict mode function may not have duplicate parameter names",
                StrictFunctionName: "Function name may not be eval or arguments in strict mode",
                StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
                StrictDelete: "Delete of an unqualified identifier in strict mode.",
                StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
                StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
                StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
                StrictReservedWord: "Use of future reserved word in strict mode",
                TemplateOctalLiteral: "Octal literals are not allowed in template strings.",
                ParameterAfterRestParameter: "Rest parameter must be last formal parameter",
                DefaultRestParameter: "Unexpected token =",
                ObjectPatternAsRestParameter: "Unexpected token {",
                DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals",
                ConstructorSpecialMethod: "Class constructor may not be an accessor",
                DuplicateConstructor: "A class may only have one constructor",
                StaticPrototype: "Classes may not have static property named prototype",
                MissingFromClause: "Unexpected token",
                NoAsAfterImportNamespace: "Unexpected token",
                InvalidModuleSpecifier: "Unexpected token",
                IllegalImportDeclaration: "Unexpected token",
                IllegalExportDeclaration: "Unexpected token",
                DuplicateBinding: "Duplicate binding %0"
            };
            Regex = {
                NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,
                NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
            };
            function assert(condition, message) {
                if (!condition) {
                    throw new Error("ASSERT: " + message)
                }
            }
            function isDecimalDigit(ch) {
                return ch >= 48 && ch <= 57
            }
            function isHexDigit(ch) {
                return "0123456789abcdefABCDEF".indexOf(ch) >= 0
            }
            function isOctalDigit(ch) {
                return "01234567".indexOf(ch) >= 0
            }
            function octalToDecimal(ch) {
                var octal = ch !== "0",
                code = "01234567".indexOf(ch);
                if (index < length && isOctalDigit(source[index])) {
                    octal = true;
                    code = code * 8 + "01234567".indexOf(source[index++]);
                    if ("0123".indexOf(ch) >= 0 && index < length && isOctalDigit(source[index])) {
                        code = code * 8 + "01234567".indexOf(source[index++])
                    }
                }
                return {
                    code: code,
                    octal: octal
                }
            }
            function isWhiteSpace(ch) {
                return ch === 32 || ch === 9 || ch === 11 || ch === 12 || ch === 160 || ch >= 5760 && [5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(ch) >= 0
            }
            function isLineTerminator(ch) {
                return ch === 10 || ch === 13 || ch === 8232 || ch === 8233
            }
            function fromCodePoint(cp) {
                return cp < 65536 ? String.fromCharCode(cp) : String.fromCharCode(55296 + (cp - 65536 >> 10)) + String.fromCharCode(56320 + (cp - 65536 & 1023))
            }
            function isIdentifierStart(ch) {
                return ch === 36 || ch === 95 || ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch === 92 || ch >= 128 && Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch))
            }
            function isIdentifierPart(ch) {
                return ch === 36 || ch === 95 || ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 48 && ch <= 57 || ch === 92 || ch >= 128 && Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch))
            }
            function isFutureReservedWord(id) {
                switch (id) {
                case "enum":
                case "export":
                case "import":
                case "super":
                    return true;
                default:
                    return false
                }
            }
            function isStrictModeReservedWord(id) {
                switch (id) {
                case "implements":
                case "interface":
                case "package":
                case "private":
                case "protected":
                case "public":
                case "static":
                case "yield":
                case "let":
                    return true;
                default:
                    return false
                }
            }
            function isRestrictedWord(id) {
                return id === "eval" || id === "arguments"
            }
            function isKeyword(id) {
                switch (id.length) {
                case 2:
                    return id === "if" || id === "in" || id === "do";
                case 3:
                    return id === "var" || id === "for" || id === "new" || id === "try" || id === "let";
                case 4:
                    return id === "this" || id === "else" || id === "case" || id === "void" || id === "with" || id === "enum";
                case 5:
                    return id === "while" || id === "break" || id === "catch" || id === "throw" || id === "const" || id === "yield" || id === "class" || id === "super";
                case 6:
                    return id === "return" || id === "typeof" || id === "delete" || id === "switch" || id === "export" || id === "import";
                case 7:
                    return id === "default" || id === "finally" || id === "extends";
                case 8:
                    return id === "function" || id === "continue" || id === "debugger";
                case 10:
                    return id === "instanceof";
                default:
                    return false
                }
            }
            function addComment(type, value, start, end, loc) {
                var comment;
                assert(typeof start === "number", "Comment must have valid position");
                state.lastCommentStart = start;
                comment = {
                    type: type,
                    value: value
                };
                if (extra.range) {
                    comment.range = [start, end]
                }
                if (extra.loc) {
                    comment.loc = loc
                }
                extra.comments.push(comment);
                if (extra.attachComment) {
                    extra.leadingComments.push(comment);
                    extra.trailingComments.push(comment)
                }
                if (extra.tokenize) {
                    comment.type = comment.type + "Comment";
                    if (extra.delegate) {
                        comment = extra.delegate(comment)
                    }
                    extra.tokens.push(comment)
                }
            }
            function skipSingleLineComment(offset) {
                var start, loc, ch, comment;
                start = index - offset;
                loc = {
                    start: {
                        line: lineNumber,
                        column: index - lineStart - offset
                    }
                };
                while (index < length) {
                    ch = source.charCodeAt(index); ++index;
                    if (isLineTerminator(ch)) {
                        hasLineTerminator = true;
                        if (extra.comments) {
                            comment = source.slice(start + offset, index - 1);
                            loc.end = {
                                line: lineNumber,
                                column: index - lineStart - 1
                            };
                            addComment("Line", comment, start, index - 1, loc)
                        }
                        if (ch === 13 && source.charCodeAt(index) === 10) {++index
                        }++lineNumber;
                        lineStart = index;
                        return
                    }
                }
                if (extra.comments) {
                    comment = source.slice(start + offset, index);
                    loc.end = {
                        line: lineNumber,
                        column: index - lineStart
                    };
                    addComment("Line", comment, start, index, loc)
                }
            }
            function skipMultiLineComment() {
                var start, loc, ch, comment;
                if (extra.comments) {
                    start = index - 2;
                    loc = {
                        start: {
                            line: lineNumber,
                            column: index - lineStart - 2
                        }
                    }
                }
                while (index < length) {
                    ch = source.charCodeAt(index);
                    if (isLineTerminator(ch)) {
                        if (ch === 13 && source.charCodeAt(index + 1) === 10) {++index
                        }
                        hasLineTerminator = true; ++lineNumber; ++index;
                        lineStart = index
                    } else if (ch === 42) {
                        if (source.charCodeAt(index + 1) === 47) {++index; ++index;
                            if (extra.comments) {
                                comment = source.slice(start + 2, index - 2);
                                loc.end = {
                                    line: lineNumber,
                                    column: index - lineStart
                                };
                                addComment("Block", comment, start, index, loc)
                            }
                            return
                        }++index
                    } else {++index
                    }
                }
                if (extra.comments) {
                    loc.end = {
                        line: lineNumber,
                        column: index - lineStart
                    };
                    comment = source.slice(start + 2, index);
                    addComment("Block", comment, start, index, loc)
                }
                tolerateUnexpectedToken()
            }
            function skipComment() {
                var ch, start;
                hasLineTerminator = false;
                start = index === 0;
                while (index < length) {
                    ch = source.charCodeAt(index);
                    if (isWhiteSpace(ch)) {++index
                    } else if (isLineTerminator(ch)) {
                        hasLineTerminator = true; ++index;
                        if (ch === 13 && source.charCodeAt(index) === 10) {++index
                        }++lineNumber;
                        lineStart = index;
                        start = true
                    } else if (ch === 47) {
                        ch = source.charCodeAt(index + 1);
                        if (ch === 47) {++index; ++index;
                            skipSingleLineComment(2);
                            start = true
                        } else if (ch === 42) {++index; ++index;
                            skipMultiLineComment()
                        } else {
                            break
                        }
                    } else if (start && ch === 45) {
                        if (source.charCodeAt(index + 1) === 45 && source.charCodeAt(index + 2) === 62) {
                            index += 3;
                            skipSingleLineComment(3)
                        } else {
                            break
                        }
                    } else if (ch === 60) {
                        if (source.slice(index + 1, index + 4) === "!--") {++index; ++index; ++index; ++index;
                            skipSingleLineComment(4)
                        } else {
                            break
                        }
                    } else {
                        break
                    }
                }
            }
            function scanHexEscape(prefix) {
                var i, len, ch, code = 0;
                len = prefix === "u" ? 4 : 2;
                for (i = 0; i < len; ++i) {
                    if (index < length && isHexDigit(source[index])) {
                        ch = source[index++];
                        code = code * 16 + "0123456789abcdef".indexOf(ch.toLowerCase())
                    } else {
                        return ""
                    }
                }
                return String.fromCharCode(code)
            }
            function scanUnicodeCodePointEscape() {
                var ch, code;
                ch = source[index];
                code = 0;
                if (ch === "}") {
                    throwUnexpectedToken()
                }
                while (index < length) {
                    ch = source[index++];
                    if (!isHexDigit(ch)) {
                        break
                    }
                    code = code * 16 + "0123456789abcdef".indexOf(ch.toLowerCase())
                }
                if (code > 1114111 || ch !== "}") {
                    throwUnexpectedToken()
                }
                return fromCodePoint(code)
            }
            function codePointAt(i) {
                var cp, first, second;
                cp = source.charCodeAt(i);
                if (cp >= 55296 && cp <= 56319) {
                    second = source.charCodeAt(i + 1);
                    if (second >= 56320 && second <= 57343) {
                        first = cp;
                        cp = (first - 55296) * 1024 + second - 56320 + 65536
                    }
                }
                return cp
            }
            function getComplexIdentifier() {
                var cp, ch, id;
                cp = codePointAt(index);
                id = fromCodePoint(cp);
                index += id.length;
                if (cp === 92) {
                    if (source.charCodeAt(index) !== 117) {
                        throwUnexpectedToken()
                    }++index;
                    if (source[index] === "{") {++index;
                        ch = scanUnicodeCodePointEscape()
                    } else {
                        ch = scanHexEscape("u");
                        cp = ch.charCodeAt(0);
                        if (!ch || ch === "\\" || !isIdentifierStart(cp)) {
                            throwUnexpectedToken()
                        }
                    }
                    id = ch
                }
                while (index < length) {
                    cp = codePointAt(index);
                    if (!isIdentifierPart(cp)) {
                        break
                    }
                    ch = fromCodePoint(cp);
                    id += ch;
                    index += ch.length;
                    if (cp === 92) {
                        id = id.substr(0, id.length - 1);
                        if (source.charCodeAt(index) !== 117) {
                            throwUnexpectedToken()
                        }++index;
                        if (source[index] === "{") {++index;
                            ch = scanUnicodeCodePointEscape()
                        } else {
                            ch = scanHexEscape("u");
                            cp = ch.charCodeAt(0);
                            if (!ch || ch === "\\" || !isIdentifierPart(cp)) {
                                throwUnexpectedToken()
                            }
                        }
                        id += ch
                    }
                }
                return id
            }
            function getIdentifier() {
                var start, ch;
                start = index++;
                while (index < length) {
                    ch = source.charCodeAt(index);
                    if (ch === 92) {
                        index = start;
                        return getComplexIdentifier()
                    } else if (ch >= 55296 && ch < 57343) {
                        index = start;
                        return getComplexIdentifier()
                    }
                    if (isIdentifierPart(ch)) {++index
                    } else {
                        break
                    }
                }
                return source.slice(start, index)
            }
            function scanIdentifier() {
                var start, id, type;
                start = index;
                id = source.charCodeAt(index) === 92 ? getComplexIdentifier() : getIdentifier();
                if (id.length === 1) {
                    type = Token.Identifier
                } else if (isKeyword(id)) {
                    type = Token.Keyword
                } else if (id === "null") {
                    type = Token.NullLiteral
                } else if (id === "true" || id === "false") {
                    type = Token.BooleanLiteral
                } else {
                    type = Token.Identifier
                }
                return {
                    type: type,
                    value: id,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    start: start,
                    end: index
                }
            }
            function scanPunctuator() {
                var token, str;
                token = {
                    type: Token.Punctuator,
                    value: "",
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    start: index,
                    end: index
                };
                str = source[index];
                switch (str) {
                case "(":
                    if (extra.tokenize) {
                        extra.openParenToken = extra.tokenValues.length
                    }++index;
                    break;
                case "{":
                    if (extra.tokenize) {
                        extra.openCurlyToken = extra.tokenValues.length
                    }
                    state.curlyStack.push("{"); ++index;
                    break;
                case ".":
                    ++index;
                    if (source[index] === "." && source[index + 1] === ".") {
                        index += 2;
                        str = "..."
                    }
                    break;
                case "}":
                    ++index;
                    state.curlyStack.pop();
                    break;
                case ")":
                case ";":
                case ",":
                case "[":
                case "]":
                case ":":
                case "?":
                case "~":
                    ++index;
                    break;
                default:
                    str = source.substr(index, 4);
                    if (str === ">>>=") {
                        index += 4
                    } else {
                        str = str.substr(0, 3);
                        if (str === "===" || str === "!==" || str === ">>>" || str === "<<=" || str === ">>=") {
                            index += 3
                        } else {
                            str = str.substr(0, 2);
                            if (str === "&&" || str === "||" || str === "==" || str === "!=" || str === "+=" || str === "-=" || str === "*=" || str === "/=" || str === "++" || str === "--" || str === "<<" || str === ">>" || str === "&=" || str === "|=" || str === "^=" || str === "%=" || str === "<=" || str === ">=" || str === "=>") {
                                index += 2
                            } else {
                                str = source[index];
                                if ("<>=!+-*%&|^/".indexOf(str) >= 0) {++index
                                }
                            }
                        }
                    }
                }
                if (index === token.start) {
                    throwUnexpectedToken()
                }
                token.end = index;
                token.value = str;
                return token
            }
            function scanHexLiteral(start) {
                var number = "";
                while (index < length) {
                    if (!isHexDigit(source[index])) {
                        break
                    }
                    number += source[index++]
                }
                if (number.length === 0) {
                    throwUnexpectedToken()
                }
                if (isIdentifierStart(source.charCodeAt(index))) {
                    throwUnexpectedToken()
                }
                return {
                    type: Token.NumericLiteral,
                    value: parseInt("0x" + number, 16),
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    start: start,
                    end: index
                }
            }
            function scanBinaryLiteral(start) {
                var ch, number;
                number = "";
                while (index < length) {
                    ch = source[index];
                    if (ch !== "0" && ch !== "1") {
                        break
                    }
                    number += source[index++]
                }
                if (number.length === 0) {
                    throwUnexpectedToken()
                }
                if (index < length) {
                    ch = source.charCodeAt(index);
                    if (isIdentifierStart(ch) || isDecimalDigit(ch)) {
                        throwUnexpectedToken()
                    }
                }
                return {
                    type: Token.NumericLiteral,
                    value: parseInt(number, 2),
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    start: start,
                    end: index
                }
            }
            function scanOctalLiteral(prefix, start) {
                var number, octal;
                if (isOctalDigit(prefix)) {
                    octal = true;
                    number = "0" + source[index++]
                } else {
                    octal = false; ++index;
                    number = ""
                }
                while (index < length) {
                    if (!isOctalDigit(source[index])) {
                        break
                    }
                    number += source[index++]
                }
                if (!octal && number.length === 0) {
                    throwUnexpectedToken()
                }
                if (isIdentifierStart(source.charCodeAt(index)) || isDecimalDigit(source.charCodeAt(index))) {
                    throwUnexpectedToken()
                }
                return {
                    type: Token.NumericLiteral,
                    value: parseInt(number, 8),
                    octal: octal,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    start: start,
                    end: index
                }
            }
            function isImplicitOctalLiteral() {
                var i, ch;
                for (i = index + 1; i < length; ++i) {
                    ch = source[i];
                    if (ch === "8" || ch === "9") {
                        return false
                    }
                    if (!isOctalDigit(ch)) {
                        return true
                    }
                }
                return true
            }
            function scanNumericLiteral() {
                var number, start, ch;
                ch = source[index];
                assert(isDecimalDigit(ch.charCodeAt(0)) || ch === ".", "Numeric literal must start with a decimal digit or a decimal point");
                start = index;
                number = "";
                if (ch !== ".") {
                    number = source[index++];
                    ch = source[index];
                    if (number === "0") {
                        if (ch === "x" || ch === "X") {++index;
                            return scanHexLiteral(start)
                        }
                        if (ch === "b" || ch === "B") {++index;
                            return scanBinaryLiteral(start)
                        }
                        if (ch === "o" || ch === "O") {
                            return scanOctalLiteral(ch, start)
                        }
                        if (isOctalDigit(ch)) {
                            if (isImplicitOctalLiteral()) {
                                return scanOctalLiteral(ch, start)
                            }
                        }
                    }
                    while (isDecimalDigit(source.charCodeAt(index))) {
                        number += source[index++]
                    }
                    ch = source[index]
                }
                if (ch === ".") {
                    number += source[index++];
                    while (isDecimalDigit(source.charCodeAt(index))) {
                        number += source[index++]
                    }
                    ch = source[index]
                }
                if (ch === "e" || ch === "E") {
                    number += source[index++];
                    ch = source[index];
                    if (ch === "+" || ch === "-") {
                        number += source[index++]
                    }
                    if (isDecimalDigit(source.charCodeAt(index))) {
                        while (isDecimalDigit(source.charCodeAt(index))) {
                            number += source[index++]
                        }
                    } else {
                        throwUnexpectedToken()
                    }
                }
                if (isIdentifierStart(source.charCodeAt(index))) {
                    throwUnexpectedToken()
                }
                return {
                    type: Token.NumericLiteral,
                    value: parseFloat(number),
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    start: start,
                    end: index
                }
            }
            function scanStringLiteral() {
                var str = "",
                quote, start, ch, unescaped, octToDec, octal = false;
                quote = source[index];
                assert(quote === "'" || quote === '"', "String literal must starts with a quote");
                start = index; ++index;
                while (index < length) {
                    ch = source[index++];
                    if (ch === quote) {
                        quote = "";
                        break
                    } else if (ch === "\\") {
                        ch = source[index++];
                        if (!ch || !isLineTerminator(ch.charCodeAt(0))) {
                            switch (ch) {
                            case "u":
                            case "x":
                                if (source[index] === "{") {++index;
                                    str += scanUnicodeCodePointEscape()
                                } else {
                                    unescaped = scanHexEscape(ch);
                                    if (!unescaped) {
                                        throw throwUnexpectedToken()
                                    }
                                    str += unescaped
                                }
                                break;
                            case "n":
                                str += "\n";
                                break;
                            case "r":
                                str += "\r";
                                break;
                            case "t":
                                str += "	";
                                break;
                            case "b":
                                str += "\b";
                                break;
                            case "f":
                                str += "\f";
                                break;
                            case "v":
                                str += "\x0B";
                                break;
                            case "8":
                            case "9":
                                str += ch;
                                tolerateUnexpectedToken();
                                break;
                            default:
                                if (isOctalDigit(ch)) {
                                    octToDec = octalToDecimal(ch);
                                    octal = octToDec.octal || octal;
                                    str += String.fromCharCode(octToDec.code)
                                } else {
                                    str += ch
                                }
                                break
                            }
                        } else {++lineNumber;
                            if (ch === "\r" && source[index] === "\n") {++index
                            }
                            lineStart = index
                        }
                    } else if (isLineTerminator(ch.charCodeAt(0))) {
                        break
                    } else {
                        str += ch
                    }
                }
                if (quote !== "") {
                    throwUnexpectedToken()
                }
                return {
                    type: Token.StringLiteral,
                    value: str,
                    octal: octal,
                    lineNumber: startLineNumber,
                    lineStart: startLineStart,
                    start: start,
                    end: index
                }
            }
            function scanTemplate() {
                var cooked = "",
                ch, start, rawOffset, terminated, head, tail, restore, unescaped;
                terminated = false;
                tail = false;
                start = index;
                head = source[index] === "`";
                rawOffset = 2; ++index;
                while (index < length) {
                    ch = source[index++];
                    if (ch === "`") {
                        rawOffset = 1;
                        tail = true;
                        terminated = true;
                        break
                    } else if (ch === "$") {
                        if (source[index] === "{") {
                            state.curlyStack.push("${"); ++index;
                            terminated = true;
                            break
                        }
                        cooked += ch
                    } else if (ch === "\\") {
                        ch = source[index++];
                        if (!isLineTerminator(ch.charCodeAt(0))) {
                            switch (ch) {
                            case "n":
                                cooked += "\n";
                                break;
                            case "r":
                                cooked += "\r";
                                break;
                            case "t":
                                cooked += "	";
                                break;
                            case "u":
                            case "x":
                                if (source[index] === "{") {++index;
                                    cooked += scanUnicodeCodePointEscape()
                                } else {
                                    restore = index;
                                    unescaped = scanHexEscape(ch);
                                    if (unescaped) {
                                        cooked += unescaped
                                    } else {
                                        index = restore;
                                        cooked += ch
                                    }
                                }
                                break;
                            case "b":
                                cooked += "\b";
                                break;
                            case "f":
                                cooked += "\f";
                                break;
                            case "v":
                                cooked += "\x0B";
                                break;
                            default:
                                if (ch === "0") {
                                    if (isDecimalDigit(source.charCodeAt(index))) {
                                        throwError(Messages.TemplateOctalLiteral)
                                    }
                                    cooked += "\x00"
                                } else if (isOctalDigit(ch)) {
                                    throwError(Messages.TemplateOctalLiteral)
                                } else {
                                    cooked += ch
                                }
                                break
                            }
                        } else {++lineNumber;
                            if (ch === "\r" && source[index] === "\n") {++index
                            }
                            lineStart = index
                        }
                    } else if (isLineTerminator(ch.charCodeAt(0))) {++lineNumber;
                        if (ch === "\r" && source[index] === "\n") {++index
                        }
                        lineStart = index;
                        cooked += "\n"
                    } else {
                        cooked += ch
                    }
                }
                if (!terminated) {
                    throwUnexpectedToken()
                }
                if (!head) {
                    state.curlyStack.pop()
                }
                return {
                    type: Token.Template,
                    value: {
                        cooked: cooked,
                        raw: source.slice(start + 1, index - rawOffset)
                    },
                    head: head,
                    tail: tail,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    start: start,
                    end: index
                }
            }
            function testRegExp(pattern, flags) {
                var astralSubstitute = "￿",
                tmp = pattern;
                if (flags.indexOf("u") >= 0) {
                    tmp = tmp.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,
                    function($0, $1, $2) {
                        var codePoint = parseInt($1 || $2, 16);
                        if (codePoint > 1114111) {
                            throwUnexpectedToken(null, Messages.InvalidRegExp)
                        }
                        if (codePoint <= 65535) {
                            return String.fromCharCode(codePoint)
                        }
                        return astralSubstitute
                    }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, astralSubstitute)
                }
                try {
                    RegExp(tmp)
                } catch(e) {
                    throwUnexpectedToken(null, Messages.InvalidRegExp)
                }
                try {
                    return new RegExp(pattern, flags)
                } catch(exception) {
                    return null
                }
            }
            function scanRegExpBody() {
                var ch, str, classMarker, terminated, body;
                ch = source[index];
                assert(ch === "/", "Regular expression literal must start with a slash");
                str = source[index++];
                classMarker = false;
                terminated = false;
                while (index < length) {
                    ch = source[index++];
                    str += ch;
                    if (ch === "\\") {
                        ch = source[index++];
                        if (isLineTerminator(ch.charCodeAt(0))) {
                            throwUnexpectedToken(null, Messages.UnterminatedRegExp)
                        }
                        str += ch
                    } else if (isLineTerminator(ch.charCodeAt(0))) {
                        throwUnexpectedToken(null, Messages.UnterminatedRegExp)
                    } else if (classMarker) {
                        if (ch === "]") {
                            classMarker = false
                        }
                    } else {
                        if (ch === "/") {
                            terminated = true;
                            break
                        } else if (ch === "[") {
                            classMarker = true
                        }
                    }
                }
                if (!terminated) {
                    throwUnexpectedToken(null, Messages.UnterminatedRegExp)
                }
                body = str.substr(1, str.length - 2);
                return {
                    value: body,
                    literal: str
                }
            }
            function scanRegExpFlags() {
                var ch, str, flags, restore;
                str = "";
                flags = "";
                while (index < length) {
                    ch = source[index];
                    if (!isIdentifierPart(ch.charCodeAt(0))) {
                        break
                    }++index;
                    if (ch === "\\" && index < length) {
                        ch = source[index];
                        if (ch === "u") {++index;
                            restore = index;
                            ch = scanHexEscape("u");
                            if (ch) {
                                flags += ch;
                                for (str += "\\u"; restore < index; ++restore) {
                                    str += source[restore]
                                }
                            } else {
                                index = restore;
                                flags += "u";
                                str += "\\u"
                            }
                            tolerateUnexpectedToken()
                        } else {
                            str += "\\";
                            tolerateUnexpectedToken()
                        }
                    } else {
                        flags += ch;
                        str += ch
                    }
                }
                return {
                    value: flags,
                    literal: str
                }
            }
            function scanRegExp() {
                var start, body, flags, value;
                scanning = true;
                lookahead = null;
                skipComment();
                start = index;
                body = scanRegExpBody();
                flags = scanRegExpFlags();
                value = testRegExp(body.value, flags.value);
                scanning = false;
                if (extra.tokenize) {
                    return {
                        type: Token.RegularExpression,
                        value: value,
                        regex: {
                            pattern: body.value,
                            flags: flags.value
                        },
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        start: start,
                        end: index
                    }
                }
                return {
                    literal: body.literal + flags.literal,
                    value: value,
                    regex: {
                        pattern: body.value,
                        flags: flags.value
                    },
                    start: start,
                    end: index
                }
            }
            function collectRegex() {
                var pos, loc, regex, token;
                skipComment();
                pos = index;
                loc = {
                    start: {
                        line: lineNumber,
                        column: index - lineStart
                    }
                };
                regex = scanRegExp();
                loc.end = {
                    line: lineNumber,
                    column: index - lineStart
                };
                if (!extra.tokenize) {
                    if (extra.tokens.length > 0) {
                        token = extra.tokens[extra.tokens.length - 1];
                        if (token.range[0] === pos && token.type === "Punctuator") {
                            if (token.value === "/" || token.value === "/=") {
                                extra.tokens.pop()
                            }
                        }
                    }
                    extra.tokens.push({
                        type: "RegularExpression",
                        value: regex.literal,
                        regex: regex.regex,
                        range: [pos, index],
                        loc: loc
                    })
                }
                return regex
            }
            function isIdentifierName(token) {
                return token.type === Token.Identifier || token.type === Token.Keyword || token.type === Token.BooleanLiteral || token.type === Token.NullLiteral
            }
            function advanceSlash() {
                var regex, previous, check;
                function testKeyword(value) {
                    return value && value.length > 1 && value[0] >= "a" && value[0] <= "z"
                }
                previous = extra.tokenValues[extra.tokens.length - 1];
                regex = previous !== null;
                switch (previous) {
                case "this":
                case "]":
                    regex = false;
                    break;
                case ")":
                    check = extra.tokenValues[extra.openParenToken - 1];
                    regex = check === "if" || check === "while" || check === "for" || check === "with";
                    break;
                case "}":
                    regex = false;
                    if (testKeyword(extra.tokenValues[extra.openCurlyToken - 3])) {
                        check = extra.tokenValues[extra.openCurlyToken - 4];
                        regex = check ? FnExprTokens.indexOf(check) < 0 : false
                    } else if (testKeyword(extra.tokenValues[extra.openCurlyToken - 4])) {
                        check = extra.tokenValues[extra.openCurlyToken - 5];
                        regex = check ? FnExprTokens.indexOf(check) < 0 : true
                    }
                }
                return regex ? collectRegex() : scanPunctuator()
            }
            function advance() {
                var cp, token;
                if (index >= length) {
                    return {
                        type: Token.EOF,
                        lineNumber: lineNumber,
                        lineStart: lineStart,
                        start: index,
                        end: index
                    }
                }
                cp = source.charCodeAt(index);
                if (isIdentifierStart(cp)) {
                    token = scanIdentifier();
                    if (strict && isStrictModeReservedWord(token.value)) {
                        token.type = Token.Keyword
                    }
                    return token
                }
                if (cp === 40 || cp === 41 || cp === 59) {
                    return scanPunctuator()
                }
                if (cp === 39 || cp === 34) {
                    return scanStringLiteral()
                }
                if (cp === 46) {
                    if (isDecimalDigit(source.charCodeAt(index + 1))) {
                        return scanNumericLiteral()
                    }
                    return scanPunctuator()
                }
                if (isDecimalDigit(cp)) {
                    return scanNumericLiteral()
                }
                if (extra.tokenize && cp === 47) {
                    return advanceSlash()
                }
                if (cp === 96 || cp === 125 && state.curlyStack[state.curlyStack.length - 1] === "${") {
                    return scanTemplate()
                }
                if (cp >= 55296 && cp < 57343) {
                    cp = codePointAt(index);
                    if (isIdentifierStart(cp)) {
                        return scanIdentifier()
                    }
                }
                return scanPunctuator()
            }
            function collectToken() {
                var loc, token, value, entry;
                loc = {
                    start: {
                        line: lineNumber,
                        column: index - lineStart
                    }
                };
                token = advance();
                loc.end = {
                    line: lineNumber,
                    column: index - lineStart
                };
                if (token.type !== Token.EOF) {
                    value = source.slice(token.start, token.end);
                    entry = {
                        type: TokenName[token.type],
                        value: value,
                        range: [token.start, token.end],
                        loc: loc
                    };
                    if (token.regex) {
                        entry.regex = {
                            pattern: token.regex.pattern,
                            flags: token.regex.flags
                        }
                    }
                    if (extra.tokenValues) {
                        extra.tokenValues.push(entry.type === "Punctuator" || entry.type === "Keyword" ? entry.value: null)
                    }
                    if (extra.tokenize) {
                        if (!extra.range) {
                            delete entry.range
                        }
                        if (!extra.loc) {
                            delete entry.loc
                        }
                        if (extra.delegate) {
                            entry = extra.delegate(entry)
                        }
                    }
                    extra.tokens.push(entry)
                }
                return token
            }
            function lex() {
                var token;
                scanning = true;
                lastIndex = index;
                lastLineNumber = lineNumber;
                lastLineStart = lineStart;
                skipComment();
                token = lookahead;
                startIndex = index;
                startLineNumber = lineNumber;
                startLineStart = lineStart;
                lookahead = typeof extra.tokens !== "undefined" ? collectToken() : advance();
                scanning = false;
                return token
            }
            function peek() {
                scanning = true;
                skipComment();
                lastIndex = index;
                lastLineNumber = lineNumber;
                lastLineStart = lineStart;
                startIndex = index;
                startLineNumber = lineNumber;
                startLineStart = lineStart;
                lookahead = typeof extra.tokens !== "undefined" ? collectToken() : advance();
                scanning = false
            }
            function Position() {
                this.line = startLineNumber;
                this.column = startIndex - startLineStart
            }
            function SourceLocation() {
                this.start = new Position;
                this.end = null
            }
            function WrappingSourceLocation(startToken) {
                this.start = {
                    line: startToken.lineNumber,
                    column: startToken.start - startToken.lineStart
                };
                this.end = null
            }
            function Node() {
                if (extra.range) {
                    this.range = [startIndex, 0]
                }
                if (extra.loc) {
                    this.loc = new SourceLocation
                }
            }
            function WrappingNode(startToken) {
                if (extra.range) {
                    this.range = [startToken.start, 0]
                }
                if (extra.loc) {
                    this.loc = new WrappingSourceLocation(startToken)
                }
            }
            WrappingNode.prototype = Node.prototype = {
                processComment: function() {
                    var lastChild, innerComments, leadingComments, trailingComments, bottomRight = extra.bottomRightStack,
                    i, comment, last = bottomRight[bottomRight.length - 1];
                    if (this.type === Syntax.Program) {
                        if (this.body.length > 0) {
                            return
                        }
                    }
                    if (this.type === Syntax.BlockStatement && this.body.length === 0) {
                        innerComments = [];
                        for (i = extra.leadingComments.length - 1; i >= 0; --i) {
                            comment = extra.leadingComments[i];
                            if (this.range[1] >= comment.range[1]) {
                                innerComments.unshift(comment);
                                extra.leadingComments.splice(i, 1);
                                extra.trailingComments.splice(i, 1)
                            }
                        }
                        if (innerComments.length) {
                            this.innerComments = innerComments;
                            return
                        }
                    }
                    if (extra.trailingComments.length > 0) {
                        trailingComments = [];
                        for (i = extra.trailingComments.length - 1; i >= 0; --i) {
                            comment = extra.trailingComments[i];
                            if (comment.range[0] >= this.range[1]) {
                                trailingComments.unshift(comment);
                                extra.trailingComments.splice(i, 1)
                            }
                        }
                        extra.trailingComments = []
                    } else {
                        if (last && last.trailingComments && last.trailingComments[0].range[0] >= this.range[1]) {
                            trailingComments = last.trailingComments;
                            delete last.trailingComments
                        }
                    }
                    while (last && last.range[0] >= this.range[0]) {
                        lastChild = bottomRight.pop();
                        last = bottomRight[bottomRight.length - 1]
                    }
                    if (lastChild) {
                        if (lastChild.leadingComments) {
                            leadingComments = [];
                            for (i = lastChild.leadingComments.length - 1; i >= 0; --i) {
                                comment = lastChild.leadingComments[i];
                                if (comment.range[1] <= this.range[0]) {
                                    leadingComments.unshift(comment);
                                    lastChild.leadingComments.splice(i, 1)
                                }
                            }
                            if (!lastChild.leadingComments.length) {
                                lastChild.leadingComments = undefined
                            }
                        }
                    } else if (extra.leadingComments.length > 0) {
                        leadingComments = [];
                        for (i = extra.leadingComments.length - 1; i >= 0; --i) {
                            comment = extra.leadingComments[i];
                            if (comment.range[1] <= this.range[0]) {
                                leadingComments.unshift(comment);
                                extra.leadingComments.splice(i, 1)
                            }
                        }
                    }
                    if (leadingComments && leadingComments.length > 0) {
                        this.leadingComments = leadingComments
                    }
                    if (trailingComments && trailingComments.length > 0) {
                        this.trailingComments = trailingComments
                    }
                    bottomRight.push(this)
                },
                finish: function() {
                    if (extra.range) {
                        this.range[1] = lastIndex
                    }
                    if (extra.loc) {
                        this.loc.end = {
                            line: lastLineNumber,
                            column: lastIndex - lastLineStart
                        };
                        if (extra.source) {
                            this.loc.source = extra.source
                        }
                    }
                    if (extra.attachComment) {
                        this.processComment()
                    }
                },
                finishArrayExpression: function(elements) {
                    this.type = Syntax.ArrayExpression;
                    this.elements = elements;
                    this.finish();
                    return this
                },
                finishArrayPattern: function(elements) {
                    this.type = Syntax.ArrayPattern;
                    this.elements = elements;
                    this.finish();
                    return this
                },
                finishArrowFunctionExpression: function(params, defaults, body, expression) {
                    this.type = Syntax.ArrowFunctionExpression;
                    this.id = null;
                    this.params = params;
                    this.defaults = defaults;
                    this.body = body;
                    this.generator = false;
                    this.expression = expression;
                    this.finish();
                    return this
                },
                finishAssignmentExpression: function(operator, left, right) {
                    this.type = Syntax.AssignmentExpression;
                    this.operator = operator;
                    this.left = left;
                    this.right = right;
                    this.finish();
                    return this
                },
                finishAssignmentPattern: function(left, right) {
                    this.type = Syntax.AssignmentPattern;
                    this.left = left;
                    this.right = right;
                    this.finish();
                    return this
                },
                finishBinaryExpression: function(operator, left, right) {
                    this.type = operator === "||" || operator === "&&" ? Syntax.LogicalExpression: Syntax.BinaryExpression;
                    this.operator = operator;
                    this.left = left;
                    this.right = right;
                    this.finish();
                    return this
                },
                finishBlockStatement: function(body) {
                    this.type = Syntax.BlockStatement;
                    this.body = body;
                    this.finish();
                    return this
                },
                finishBreakStatement: function(label) {
                    this.type = Syntax.BreakStatement;
                    this.label = label;
                    this.finish();
                    return this
                },
                finishCallExpression: function(callee, args) {
                    this.type = Syntax.CallExpression;
                    this.callee = callee;
                    this.arguments = args;
                    this.finish();
                    return this
                },
                finishCatchClause: function(param, body) {
                    this.type = Syntax.CatchClause;
                    this.param = param;
                    this.body = body;
                    this.finish();
                    return this
                },
                finishClassBody: function(body) {
                    this.type = Syntax.ClassBody;
                    this.body = body;
                    this.finish();
                    return this
                },
                finishClassDeclaration: function(id, superClass, body) {
                    this.type = Syntax.ClassDeclaration;
                    this.id = id;
                    this.superClass = superClass;
                    this.body = body;
                    this.finish();
                    return this
                },
                finishClassExpression: function(id, superClass, body) {
                    this.type = Syntax.ClassExpression;
                    this.id = id;
                    this.superClass = superClass;
                    this.body = body;
                    this.finish();
                    return this
                },
                finishConditionalExpression: function(test, consequent, alternate) {
                    this.type = Syntax.ConditionalExpression;
                    this.test = test;
                    this.consequent = consequent;
                    this.alternate = alternate;
                    this.finish();
                    return this
                },
                finishContinueStatement: function(label) {
                    this.type = Syntax.ContinueStatement;
                    this.label = label;
                    this.finish();
                    return this
                },
                finishDebuggerStatement: function() {
                    this.type = Syntax.DebuggerStatement;
                    this.finish();
                    return this
                },
                finishDoWhileStatement: function(body, test) {
                    this.type = Syntax.DoWhileStatement;
                    this.body = body;
                    this.test = test;
                    this.finish();
                    return this
                },
                finishEmptyStatement: function() {
                    this.type = Syntax.EmptyStatement;
                    this.finish();
                    return this
                },
                finishExpressionStatement: function(expression) {
                    this.type = Syntax.ExpressionStatement;
                    this.expression = expression;
                    this.finish();
                    return this
                },
                finishForStatement: function(init, test, update, body) {
                    this.type = Syntax.ForStatement;
                    this.init = init;
                    this.test = test;
                    this.update = update;
                    this.body = body;
                    this.finish();
                    return this
                },
                finishForOfStatement: function(left, right, body) {
                    this.type = Syntax.ForOfStatement;
                    this.left = left;
                    this.right = right;
                    this.body = body;
                    this.finish();
                    return this
                },
                finishForInStatement: function(left, right, body) {
                    this.type = Syntax.ForInStatement;
                    this.left = left;
                    this.right = right;
                    this.body = body;
                    this.each = false;
                    this.finish();
                    return this
                },
                finishFunctionDeclaration: function(id, params, defaults, body, generator) {
                    this.type = Syntax.FunctionDeclaration;
                    this.id = id;
                    this.params = params;
                    this.defaults = defaults;
                    this.body = body;
                    this.generator = generator;
                    this.expression = false;
                    this.finish();
                    return this
                },
                finishFunctionExpression: function(id, params, defaults, body, generator) {
                    this.type = Syntax.FunctionExpression;
                    this.id = id;
                    this.params = params;
                    this.defaults = defaults;
                    this.body = body;
                    this.generator = generator;
                    this.expression = false;
                    this.finish();
                    return this
                },
                finishIdentifier: function(name) {
                    this.type = Syntax.Identifier;
                    this.name = name;
                    this.finish();
                    return this
                },
                finishIfStatement: function(test, consequent, alternate) {
                    this.type = Syntax.IfStatement;
                    this.test = test;
                    this.consequent = consequent;
                    this.alternate = alternate;
                    this.finish();
                    return this
                },
                finishLabeledStatement: function(label, body) {
                    this.type = Syntax.LabeledStatement;
                    this.label = label;
                    this.body = body;
                    this.finish();
                    return this
                },
                finishLiteral: function(token) {
                    this.type = Syntax.Literal;
                    this.value = token.value;
                    this.raw = source.slice(token.start, token.end);
                    if (token.regex) {
                        this.regex = token.regex
                    }
                    this.finish();
                    return this
                },
                finishMemberExpression: function(accessor, object, property) {
                    this.type = Syntax.MemberExpression;
                    this.computed = accessor === "[";
                    this.object = object;
                    this.property = property;
                    this.finish();
                    return this
                },
                finishMetaProperty: function(meta, property) {
                    this.type = Syntax.MetaProperty;
                    this.meta = meta;
                    this.property = property;
                    this.finish();
                    return this
                },
                finishNewExpression: function(callee, args) {
                    this.type = Syntax.NewExpression;
                    this.callee = callee;
                    this.arguments = args;
                    this.finish();
                    return this
                },
                finishObjectExpression: function(properties) {
                    this.type = Syntax.ObjectExpression;
                    this.properties = properties;
                    this.finish();
                    return this
                },
                finishObjectPattern: function(properties) {
                    this.type = Syntax.ObjectPattern;
                    this.properties = properties;
                    this.finish();
                    return this
                },
                finishPostfixExpression: function(operator, argument) {
                    this.type = Syntax.UpdateExpression;
                    this.operator = operator;
                    this.argument = argument;
                    this.prefix = false;
                    this.finish();
                    return this
                },
                finishProgram: function(body, sourceType) {
                    this.type = Syntax.Program;
                    this.body = body;
                    this.sourceType = sourceType;
                    this.finish();
                    return this
                },
                finishProperty: function(kind, key, computed, value, method, shorthand) {
                    this.type = Syntax.Property;
                    this.key = key;
                    this.computed = computed;
                    this.value = value;
                    this.kind = kind;
                    this.method = method;
                    this.shorthand = shorthand;
                    this.finish();
                    return this
                },
                finishRestElement: function(argument) {
                    this.type = Syntax.RestElement;
                    this.argument = argument;
                    this.finish();
                    return this
                },
                finishReturnStatement: function(argument) {
                    this.type = Syntax.ReturnStatement;
                    this.argument = argument;
                    this.finish();
                    return this
                },
                finishSequenceExpression: function(expressions) {
                    this.type = Syntax.SequenceExpression;
                    this.expressions = expressions;
                    this.finish();
                    return this
                },
                finishSpreadElement: function(argument) {
                    this.type = Syntax.SpreadElement;
                    this.argument = argument;
                    this.finish();
                    return this
                },
                finishSwitchCase: function(test, consequent) {
                    this.type = Syntax.SwitchCase;
                    this.test = test;
                    this.consequent = consequent;
                    this.finish();
                    return this
                },
                finishSuper: function() {
                    this.type = Syntax.Super;
                    this.finish();
                    return this
                },
                finishSwitchStatement: function(discriminant, cases) {
                    this.type = Syntax.SwitchStatement;
                    this.discriminant = discriminant;
                    this.cases = cases;
                    this.finish();
                    return this
                },
                finishTaggedTemplateExpression: function(tag, quasi) {
                    this.type = Syntax.TaggedTemplateExpression;
                    this.tag = tag;
                    this.quasi = quasi;
                    this.finish();
                    return this
                },
                finishTemplateElement: function(value, tail) {
                    this.type = Syntax.TemplateElement;
                    this.value = value;
                    this.tail = tail;
                    this.finish();
                    return this
                },
                finishTemplateLiteral: function(quasis, expressions) {
                    this.type = Syntax.TemplateLiteral;
                    this.quasis = quasis;
                    this.expressions = expressions;
                    this.finish();
                    return this
                },
                finishThisExpression: function() {
                    this.type = Syntax.ThisExpression;
                    this.finish();
                    return this
                },
                finishThrowStatement: function(argument) {
                    this.type = Syntax.ThrowStatement;
                    this.argument = argument;
                    this.finish();
                    return this
                },
                finishTryStatement: function(block, handler, finalizer) {
                    this.type = Syntax.TryStatement;
                    this.block = block;
                    this.guardedHandlers = [];
                    this.handlers = handler ? [handler] : [];
                    this.handler = handler;
                    this.finalizer = finalizer;
                    this.finish();
                    return this
                },
                finishUnaryExpression: function(operator, argument) {
                    this.type = operator === "++" || operator === "--" ? Syntax.UpdateExpression: Syntax.UnaryExpression;
                    this.operator = operator;
                    this.argument = argument;
                    this.prefix = true;
                    this.finish();
                    return this
                },
                finishVariableDeclaration: function(declarations) {
                    this.type = Syntax.VariableDeclaration;
                    this.declarations = declarations;
                    this.kind = "var";
                    this.finish();
                    return this
                },
                finishLexicalDeclaration: function(declarations, kind) {
                    this.type = Syntax.VariableDeclaration;
                    this.declarations = declarations;
                    this.kind = kind;
                    this.finish();
                    return this
                },
                finishVariableDeclarator: function(id, init) {
                    this.type = Syntax.VariableDeclarator;
                    this.id = id;
                    this.init = init;
                    this.finish();
                    return this
                },
                finishWhileStatement: function(test, body) {
                    this.type = Syntax.WhileStatement;
                    this.test = test;
                    this.body = body;
                    this.finish();
                    return this
                },
                finishWithStatement: function(object, body) {
                    this.type = Syntax.WithStatement;
                    this.object = object;
                    this.body = body;
                    this.finish();
                    return this
                },
                finishExportSpecifier: function(local, exported) {
                    this.type = Syntax.ExportSpecifier;
                    this.exported = exported || local;
                    this.local = local;
                    this.finish();
                    return this
                },
                finishImportDefaultSpecifier: function(local) {
                    this.type = Syntax.ImportDefaultSpecifier;
                    this.local = local;
                    this.finish();
                    return this
                },
                finishImportNamespaceSpecifier: function(local) {
                    this.type = Syntax.ImportNamespaceSpecifier;
                    this.local = local;
                    this.finish();
                    return this
                },
                finishExportNamedDeclaration: function(declaration, specifiers, src) {
                    this.type = Syntax.ExportNamedDeclaration;
                    this.declaration = declaration;
                    this.specifiers = specifiers;
                    this.source = src;
                    this.finish();
                    return this
                },
                finishExportDefaultDeclaration: function(declaration) {
                    this.type = Syntax.ExportDefaultDeclaration;
                    this.declaration = declaration;
                    this.finish();
                    return this
                },
                finishExportAllDeclaration: function(src) {
                    this.type = Syntax.ExportAllDeclaration;
                    this.source = src;
                    this.finish();
                    return this
                },
                finishImportSpecifier: function(local, imported) {
                    this.type = Syntax.ImportSpecifier;
                    this.local = local || imported;
                    this.imported = imported;
                    this.finish();
                    return this
                },
                finishImportDeclaration: function(specifiers, src) {
                    this.type = Syntax.ImportDeclaration;
                    this.specifiers = specifiers;
                    this.source = src;
                    this.finish();
                    return this
                },
                finishYieldExpression: function(argument, delegate) {
                    this.type = Syntax.YieldExpression;
                    this.argument = argument;
                    this.delegate = delegate;
                    this.finish();
                    return this
                }
            };
            function recordError(error) {
                var e, existing;
                for (e = 0; e < extra.errors.length; e++) {
                    existing = extra.errors[e];
                    if (existing.index === error.index && existing.message === error.message) {
                        return
                    }
                }
                extra.errors.push(error)
            }
            function constructError(msg, column) {
                var error = new Error(msg);
                try {
                    throw error
                } catch(base) {
                    if (Object.create && Object.defineProperty) {
                        error = Object.create(base);
                        Object.defineProperty(error, "column", {
                            value: column
                        })
                    }
                } finally {
                    return error
                }
            }
            function createError(line, pos, description) {
                var msg, column, error;
                msg = "Line " + line + ": " + description;
                column = pos - (scanning ? lineStart: lastLineStart) + 1;
                error = constructError(msg, column);
                error.lineNumber = line;
                error.description = description;
                error.index = pos;
                return error
            }
            function throwError(messageFormat) {
                var args, msg;
                args = Array.prototype.slice.call(arguments, 1);
                msg = messageFormat.replace(/%(\d)/g,
                function(whole, idx) {
                    assert(idx < args.length, "Message reference must be in range");
                    return args[idx]
                });
                throw createError(lastLineNumber, lastIndex, msg)
            }
            function tolerateError(messageFormat) {
                var args, msg, error;
                args = Array.prototype.slice.call(arguments, 1);
                msg = messageFormat.replace(/%(\d)/g,
                function(whole, idx) {
                    assert(idx < args.length, "Message reference must be in range");
                    return args[idx]
                });
                error = createError(lineNumber, lastIndex, msg);
                if (extra.errors) {
                    recordError(error)
                } else {
                    throw error
                }
            }
            function unexpectedTokenError(token, message) {
                var value, msg = message || Messages.UnexpectedToken;
                if (token) {
                    if (!message) {
                        msg = token.type === Token.EOF ? Messages.UnexpectedEOS: token.type === Token.Identifier ? Messages.UnexpectedIdentifier: token.type === Token.NumericLiteral ? Messages.UnexpectedNumber: token.type === Token.StringLiteral ? Messages.UnexpectedString: token.type === Token.Template ? Messages.UnexpectedTemplate: Messages.UnexpectedToken;
                        if (token.type === Token.Keyword) {
                            if (isFutureReservedWord(token.value)) {
                                msg = Messages.UnexpectedReserved
                            } else if (strict && isStrictModeReservedWord(token.value)) {
                                msg = Messages.StrictReservedWord
                            }
                        }
                    }
                    value = token.type === Token.Template ? token.value.raw: token.value
                } else {
                    value = "ILLEGAL"
                }
                msg = msg.replace("%0", value);
                return token && typeof token.lineNumber === "number" ? createError(token.lineNumber, token.start, msg) : createError(scanning ? lineNumber: lastLineNumber, scanning ? index: lastIndex, msg)
            }
            function throwUnexpectedToken(token, message) {
                throw unexpectedTokenError(token, message)
            }
            function tolerateUnexpectedToken(token, message) {
                var error = unexpectedTokenError(token, message);
                if (extra.errors) {
                    recordError(error)
                } else {
                    throw error
                }
            }
            function expect(value) {
                var token = lex();
                if (token.type !== Token.Punctuator || token.value !== value) {
                    throwUnexpectedToken(token)
                }
            }
            function expectCommaSeparator() {
                var token;
                if (extra.errors) {
                    token = lookahead;
                    if (token.type === Token.Punctuator && token.value === ",") {
                        lex()
                    } else if (token.type === Token.Punctuator && token.value === ";") {
                        lex();
                        tolerateUnexpectedToken(token)
                    } else {
                        tolerateUnexpectedToken(token, Messages.UnexpectedToken)
                    }
                } else {
                    expect(",")
                }
            }
            function expectKeyword(keyword) {
                var token = lex();
                if (token.type !== Token.Keyword || token.value !== keyword) {
                    throwUnexpectedToken(token)
                }
            }
            function match(value) {
                return lookahead.type === Token.Punctuator && lookahead.value === value
            }
            function matchKeyword(keyword) {
                return lookahead.type === Token.Keyword && lookahead.value === keyword
            }
            function matchContextualKeyword(keyword) {
                return lookahead.type === Token.Identifier && lookahead.value === keyword
            }
            function matchAssign() {
                var op;
                if (lookahead.type !== Token.Punctuator) {
                    return false
                }
                op = lookahead.value;
                return op === "=" || op === "*=" || op === "/=" || op === "%=" || op === "+=" || op === "-=" || op === "<<=" || op === ">>=" || op === ">>>=" || op === "&=" || op === "^=" || op === "|="
            }
            function consumeSemicolon() {
                if (source.charCodeAt(startIndex) === 59 || match(";")) {
                    lex();
                    return
                }
                if (hasLineTerminator) {
                    return
                }
                lastIndex = startIndex;
                lastLineNumber = startLineNumber;
                lastLineStart = startLineStart;
                if (lookahead.type !== Token.EOF && !match("}")) {
                    throwUnexpectedToken(lookahead)
                }
            }
            function isolateCoverGrammar(parser) {
                var oldIsBindingElement = isBindingElement,
                oldIsAssignmentTarget = isAssignmentTarget,
                oldFirstCoverInitializedNameError = firstCoverInitializedNameError,
                result;
                isBindingElement = true;
                isAssignmentTarget = true;
                firstCoverInitializedNameError = null;
                result = parser();
                if (firstCoverInitializedNameError !== null) {
                    throwUnexpectedToken(firstCoverInitializedNameError)
                }
                isBindingElement = oldIsBindingElement;
                isAssignmentTarget = oldIsAssignmentTarget;
                firstCoverInitializedNameError = oldFirstCoverInitializedNameError;
                return result
            }
            function inheritCoverGrammar(parser) {
                var oldIsBindingElement = isBindingElement,
                oldIsAssignmentTarget = isAssignmentTarget,
                oldFirstCoverInitializedNameError = firstCoverInitializedNameError,
                result;
                isBindingElement = true;
                isAssignmentTarget = true;
                firstCoverInitializedNameError = null;
                result = parser();
                isBindingElement = isBindingElement && oldIsBindingElement;
                isAssignmentTarget = isAssignmentTarget && oldIsAssignmentTarget;
                firstCoverInitializedNameError = oldFirstCoverInitializedNameError || firstCoverInitializedNameError;
                return result
            }
            function parseArrayPattern(params, kind) {
                var node = new Node,
                elements = [],
                rest,
                restNode;
                expect("[");
                while (!match("]")) {
                    if (match(",")) {
                        lex();
                        elements.push(null)
                    } else {
                        if (match("...")) {
                            restNode = new Node;
                            lex();
                            params.push(lookahead);
                            rest = parseVariableIdentifier(kind);
                            elements.push(restNode.finishRestElement(rest));
                            break
                        } else {
                            elements.push(parsePatternWithDefault(params, kind))
                        }
                        if (!match("]")) {
                            expect(",")
                        }
                    }
                }
                expect("]");
                return node.finishArrayPattern(elements)
            }
            function parsePropertyPattern(params, kind) {
                var node = new Node,
                key, keyToken, computed = match("["),
                init;
                if (lookahead.type === Token.Identifier) {
                    keyToken = lookahead;
                    key = parseVariableIdentifier();
                    if (match("=")) {
                        params.push(keyToken);
                        lex();
                        init = parseAssignmentExpression();
                        return node.finishProperty("init", key, false, new WrappingNode(keyToken).finishAssignmentPattern(key, init), false, false)
                    } else if (!match(":")) {
                        params.push(keyToken);
                        return node.finishProperty("init", key, false, key, false, true)
                    }
                } else {
                    key = parseObjectPropertyKey()
                }
                expect(":");
                init = parsePatternWithDefault(params, kind);
                return node.finishProperty("init", key, computed, init, false, false)
            }
            function parseObjectPattern(params, kind) {
                var node = new Node,
                properties = [];
                expect("{");
                while (!match("}")) {
                    properties.push(parsePropertyPattern(params, kind));
                    if (!match("}")) {
                        expect(",")
                    }
                }
                lex();
                return node.finishObjectPattern(properties)
            }
            function parsePattern(params, kind) {
                if (match("[")) {
                    return parseArrayPattern(params, kind)
                } else if (match("{")) {
                    return parseObjectPattern(params, kind)
                } else if (matchKeyword("let")) {
                    if (kind === "const" || kind === "let") {
                        tolerateUnexpectedToken(lookahead, Messages.UnexpectedToken)
                    }
                }
                params.push(lookahead);
                return parseVariableIdentifier(kind)
            }
            function parsePatternWithDefault(params, kind) {
                var startToken = lookahead,
                pattern, previousAllowYield, right;
                pattern = parsePattern(params, kind);
                if (match("=")) {
                    lex();
                    previousAllowYield = state.allowYield;
                    state.allowYield = true;
                    right = isolateCoverGrammar(parseAssignmentExpression);
                    state.allowYield = previousAllowYield;
                    pattern = new WrappingNode(startToken).finishAssignmentPattern(pattern, right)
                }
                return pattern
            }
            function parseArrayInitializer() {
                var elements = [],
                node = new Node,
                restSpread;
                expect("[");
                while (!match("]")) {
                    if (match(",")) {
                        lex();
                        elements.push(null)
                    } else if (match("...")) {
                        restSpread = new Node;
                        lex();
                        restSpread.finishSpreadElement(inheritCoverGrammar(parseAssignmentExpression));
                        if (!match("]")) {
                            isAssignmentTarget = isBindingElement = false;
                            expect(",")
                        }
                        elements.push(restSpread)
                    } else {
                        elements.push(inheritCoverGrammar(parseAssignmentExpression));
                        if (!match("]")) {
                            expect(",")
                        }
                    }
                }
                lex();
                return node.finishArrayExpression(elements)
            }
            function parsePropertyFunction(node, paramInfo, isGenerator) {
                var previousStrict, body;
                isAssignmentTarget = isBindingElement = false;
                previousStrict = strict;
                body = isolateCoverGrammar(parseFunctionSourceElements);
                if (strict && paramInfo.firstRestricted) {
                    tolerateUnexpectedToken(paramInfo.firstRestricted, paramInfo.message)
                }
                if (strict && paramInfo.stricted) {
                    tolerateUnexpectedToken(paramInfo.stricted, paramInfo.message)
                }
                strict = previousStrict;
                return node.finishFunctionExpression(null, paramInfo.params, paramInfo.defaults, body, isGenerator)
            }
            function parsePropertyMethodFunction() {
                var params, method, node = new Node,
                previousAllowYield = state.allowYield;
                state.allowYield = false;
                params = parseParams();
                state.allowYield = previousAllowYield;
                state.allowYield = false;
                method = parsePropertyFunction(node, params, false);
                state.allowYield = previousAllowYield;
                return method
            }
            function parseObjectPropertyKey() {
                var token, node = new Node,
                expr;
                token = lex();
                switch (token.type) {
                case Token.StringLiteral:
                case Token.NumericLiteral:
                    if (strict && token.octal) {
                        tolerateUnexpectedToken(token, Messages.StrictOctalLiteral)
                    }
                    return node.finishLiteral(token);
                case Token.Identifier:
                case Token.BooleanLiteral:
                case Token.NullLiteral:
                case Token.Keyword:
                    return node.finishIdentifier(token.value);
                case Token.Punctuator:
                    if (token.value === "[") {
                        expr = isolateCoverGrammar(parseAssignmentExpression);
                        expect("]");
                        return expr
                    }
                    break
                }
                throwUnexpectedToken(token)
            }
            function lookaheadPropertyName() {
                switch (lookahead.type) {
                case Token.Identifier:
                case Token.StringLiteral:
                case Token.BooleanLiteral:
                case Token.NullLiteral:
                case Token.NumericLiteral:
                case Token.Keyword:
                    return true;
                case Token.Punctuator:
                    return lookahead.value === "["
                }
                return false
            }
            function tryParseMethodDefinition(token, key, computed, node) {
                var value, options, methodNode, params, previousAllowYield = state.allowYield;
                if (token.type === Token.Identifier) {
                    if (token.value === "get" && lookaheadPropertyName()) {
                        computed = match("[");
                        key = parseObjectPropertyKey();
                        methodNode = new Node;
                        expect("(");
                        expect(")");
                        state.allowYield = false;
                        value = parsePropertyFunction(methodNode, {
                            params: [],
                            defaults: [],
                            stricted: null,
                            firstRestricted: null,
                            message: null
                        },
                        false);
                        state.allowYield = previousAllowYield;
                        return node.finishProperty("get", key, computed, value, false, false)
                    } else if (token.value === "set" && lookaheadPropertyName()) {
                        computed = match("[");
                        key = parseObjectPropertyKey();
                        methodNode = new Node;
                        expect("(");
                        options = {
                            params: [],
                            defaultCount: 0,
                            defaults: [],
                            firstRestricted: null,
                            paramSet: {}
                        };
                        if (match(")")) {
                            tolerateUnexpectedToken(lookahead)
                        } else {
                            state.allowYield = false;
                            parseParam(options);
                            state.allowYield = previousAllowYield;
                            if (options.defaultCount === 0) {
                                options.defaults = []
                            }
                        }
                        expect(")");
                        state.allowYield = false;
                        value = parsePropertyFunction(methodNode, options, false);
                        state.allowYield = previousAllowYield;
                        return node.finishProperty("set", key, computed, value, false, false)
                    }
                } else if (token.type === Token.Punctuator && token.value === "*" && lookaheadPropertyName()) {
                    computed = match("[");
                    key = parseObjectPropertyKey();
                    methodNode = new Node;
                    state.allowYield = true;
                    params = parseParams();
                    state.allowYield = previousAllowYield;
                    state.allowYield = false;
                    value = parsePropertyFunction(methodNode, params, true);
                    state.allowYield = previousAllowYield;
                    return node.finishProperty("init", key, computed, value, true, false)
                }
                if (key && match("(")) {
                    value = parsePropertyMethodFunction();
                    return node.finishProperty("init", key, computed, value, true, false)
                }
                return null
            }
            function parseObjectProperty(hasProto) {
                var token = lookahead,
                node = new Node,
                computed, key, maybeMethod, proto, value;
                computed = match("[");
                if (match("*")) {
                    lex()
                } else {
                    key = parseObjectPropertyKey()
                }
                maybeMethod = tryParseMethodDefinition(token, key, computed, node);
                if (maybeMethod) {
                    return maybeMethod
                }
                if (!key) {
                    throwUnexpectedToken(lookahead)
                }
                if (!computed) {
                    proto = key.type === Syntax.Identifier && key.name === "__proto__" || key.type === Syntax.Literal && key.value === "__proto__";
                    if (hasProto.value && proto) {
                        tolerateError(Messages.DuplicateProtoProperty)
                    }
                    hasProto.value |= proto
                }
                if (match(":")) {
                    lex();
                    value = inheritCoverGrammar(parseAssignmentExpression);
                    return node.finishProperty("init", key, computed, value, false, false)
                }
                if (token.type === Token.Identifier) {
                    if (match("=")) {
                        firstCoverInitializedNameError = lookahead;
                        lex();
                        value = isolateCoverGrammar(parseAssignmentExpression);
                        return node.finishProperty("init", key, computed, new WrappingNode(token).finishAssignmentPattern(key, value), false, true)
                    }
                    return node.finishProperty("init", key, computed, key, false, true)
                }
                throwUnexpectedToken(lookahead)
            }
            function parseObjectInitializer() {
                var properties = [],
                hasProto = {
                    value: false
                },
                node = new Node;
                expect("{");
                while (!match("}")) {
                    properties.push(parseObjectProperty(hasProto));
                    if (!match("}")) {
                        expectCommaSeparator()
                    }
                }
                expect("}");
                return node.finishObjectExpression(properties)
            }
            function reinterpretExpressionAsPattern(expr) {
                var i;
                switch (expr.type) {
                case Syntax.Identifier:
                case Syntax.MemberExpression:
                case Syntax.RestElement:
                case Syntax.AssignmentPattern:
                    break;
                case Syntax.SpreadElement:
                    expr.type = Syntax.RestElement;
                    reinterpretExpressionAsPattern(expr.argument);
                    break;
                case Syntax.ArrayExpression:
                    expr.type = Syntax.ArrayPattern;
                    for (i = 0; i < expr.elements.length; i++) {
                        if (expr.elements[i] !== null) {
                            reinterpretExpressionAsPattern(expr.elements[i])
                        }
                    }
                    break;
                case Syntax.ObjectExpression:
                    expr.type = Syntax.ObjectPattern;
                    for (i = 0; i < expr.properties.length; i++) {
                        reinterpretExpressionAsPattern(expr.properties[i].value)
                    }
                    break;
                case Syntax.AssignmentExpression:
                    expr.type = Syntax.AssignmentPattern;
                    reinterpretExpressionAsPattern(expr.left);
                    break;
                default:
                    break
                }
            }
            function parseTemplateElement(option) {
                var node, token;
                if (lookahead.type !== Token.Template || option.head && !lookahead.head) {
                    throwUnexpectedToken()
                }
                node = new Node;
                token = lex();
                return node.finishTemplateElement({
                    raw: token.value.raw,
                    cooked: token.value.cooked
                },
                token.tail)
            }
            function parseTemplateLiteral() {
                var quasi, quasis, expressions, node = new Node;
                quasi = parseTemplateElement({
                    head: true
                });
                quasis = [quasi];
                expressions = [];
                while (!quasi.tail) {
                    expressions.push(parseExpression());
                    quasi = parseTemplateElement({
                        head: false
                    });
                    quasis.push(quasi)
                }
                return node.finishTemplateLiteral(quasis, expressions)
            }
            function parseGroupExpression() {
                var expr, expressions, startToken, i, params = [];
                expect("(");
                if (match(")")) {
                    lex();
                    if (!match("=>")) {
                        expect("=>")
                    }
                    return {
                        type: PlaceHolders.ArrowParameterPlaceHolder,
                        params: [],
                        rawParams: []
                    }
                }
                startToken = lookahead;
                if (match("...")) {
                    expr = parseRestElement(params);
                    expect(")");
                    if (!match("=>")) {
                        expect("=>")
                    }
                    return {
                        type: PlaceHolders.ArrowParameterPlaceHolder,
                        params: [expr]
                    }
                }
                isBindingElement = true;
                expr = inheritCoverGrammar(parseAssignmentExpression);
                if (match(",")) {
                    isAssignmentTarget = false;
                    expressions = [expr];
                    while (startIndex < length) {
                        if (!match(",")) {
                            break
                        }
                        lex();
                        if (match("...")) {
                            if (!isBindingElement) {
                                throwUnexpectedToken(lookahead)
                            }
                            expressions.push(parseRestElement(params));
                            expect(")");
                            if (!match("=>")) {
                                expect("=>")
                            }
                            isBindingElement = false;
                            for (i = 0; i < expressions.length; i++) {
                                reinterpretExpressionAsPattern(expressions[i])
                            }
                            return {
                                type: PlaceHolders.ArrowParameterPlaceHolder,
                                params: expressions
                            }
                        }
                        expressions.push(inheritCoverGrammar(parseAssignmentExpression))
                    }
                    expr = new WrappingNode(startToken).finishSequenceExpression(expressions)
                }
                expect(")");
                if (match("=>")) {
                    if (expr.type === Syntax.Identifier && expr.name === "yield") {
                        return {
                            type: PlaceHolders.ArrowParameterPlaceHolder,
                            params: [expr]
                        }
                    }
                    if (!isBindingElement) {
                        throwUnexpectedToken(lookahead)
                    }
                    if (expr.type === Syntax.SequenceExpression) {
                        for (i = 0; i < expr.expressions.length; i++) {
                            reinterpretExpressionAsPattern(expr.expressions[i])
                        }
                    } else {
                        reinterpretExpressionAsPattern(expr)
                    }
                    expr = {
                        type: PlaceHolders.ArrowParameterPlaceHolder,
                        params: expr.type === Syntax.SequenceExpression ? expr.expressions: [expr]
                    }
                }
                isBindingElement = false;
                return expr
            }
            function parsePrimaryExpression() {
                var type, token, expr, node;
                if (match("(")) {
                    isBindingElement = false;
                    return inheritCoverGrammar(parseGroupExpression)
                }
                if (match("[")) {
                    return inheritCoverGrammar(parseArrayInitializer)
                }
                if (match("{")) {
                    return inheritCoverGrammar(parseObjectInitializer)
                }
                type = lookahead.type;
                node = new Node;
                if (type === Token.Identifier) {
                    if (state.sourceType === "module" && lookahead.value === "await") {
                        tolerateUnexpectedToken(lookahead)
                    }
                    expr = node.finishIdentifier(lex().value)
                } else if (type === Token.StringLiteral || type === Token.NumericLiteral) {
                    isAssignmentTarget = isBindingElement = false;
                    if (strict && lookahead.octal) {
                        tolerateUnexpectedToken(lookahead, Messages.StrictOctalLiteral)
                    }
                    expr = node.finishLiteral(lex())
                } else if (type === Token.Keyword) {
                    if (!strict && state.allowYield && matchKeyword("yield")) {
                        return parseNonComputedProperty()
                    }
                    if (!strict && matchKeyword("let")) {
                        return node.finishIdentifier(lex().value)
                    }
                    isAssignmentTarget = isBindingElement = false;
                    if (matchKeyword("function")) {
                        return parseFunctionExpression()
                    }
                    if (matchKeyword("this")) {
                        lex();
                        return node.finishThisExpression()
                    }
                    if (matchKeyword("class")) {
                        return parseClassExpression()
                    }
                    throwUnexpectedToken(lex())
                } else if (type === Token.BooleanLiteral) {
                    isAssignmentTarget = isBindingElement = false;
                    token = lex();
                    token.value = token.value === "true";
                    expr = node.finishLiteral(token)
                } else if (type === Token.NullLiteral) {
                    isAssignmentTarget = isBindingElement = false;
                    token = lex();
                    token.value = null;
                    expr = node.finishLiteral(token)
                } else if (match("/") || match("/=")) {
                    isAssignmentTarget = isBindingElement = false;
                    index = startIndex;
                    if (typeof extra.tokens !== "undefined") {
                        token = collectRegex()
                    } else {
                        token = scanRegExp()
                    }
                    lex();
                    expr = node.finishLiteral(token)
                } else if (type === Token.Template) {
                    expr = parseTemplateLiteral()
                } else {
                    throwUnexpectedToken(lex())
                }
                return expr
            }
            function parseArguments() {
                var args = [],
                expr;
                expect("(");
                if (!match(")")) {
                    while (startIndex < length) {
                        if (match("...")) {
                            expr = new Node;
                            lex();
                            expr.finishSpreadElement(isolateCoverGrammar(parseAssignmentExpression))
                        } else {
                            expr = isolateCoverGrammar(parseAssignmentExpression)
                        }
                        args.push(expr);
                        if (match(")")) {
                            break
                        }
                        expectCommaSeparator()
                    }
                }
                expect(")");
                return args
            }
            function parseNonComputedProperty() {
                var token, node = new Node;
                token = lex();
                if (!isIdentifierName(token)) {
                    throwUnexpectedToken(token)
                }
                return node.finishIdentifier(token.value)
            }
            function parseNonComputedMember() {
                expect(".");
                return parseNonComputedProperty()
            }
            function parseComputedMember() {
                var expr;
                expect("[");
                expr = isolateCoverGrammar(parseExpression);
                expect("]");
                return expr
            }
            function parseNewExpression() {
                var callee, args, node = new Node;
                expectKeyword("new");
                if (match(".")) {
                    lex();
                    if (lookahead.type === Token.Identifier && lookahead.value === "target") {
                        if (state.inFunctionBody) {
                            lex();
                            return node.finishMetaProperty("new", "target")
                        }
                    }
                    throwUnexpectedToken(lookahead)
                }
                callee = isolateCoverGrammar(parseLeftHandSideExpression);
                args = match("(") ? parseArguments() : [];
                isAssignmentTarget = isBindingElement = false;
                return node.finishNewExpression(callee, args)
            }
            function parseLeftHandSideExpressionAllowCall() {
                var quasi, expr, args, property, startToken, previousAllowIn = state.allowIn;
                startToken = lookahead;
                state.allowIn = true;
                if (matchKeyword("super") && state.inFunctionBody) {
                    expr = new Node;
                    lex();
                    expr = expr.finishSuper();
                    if (!match("(") && !match(".") && !match("[")) {
                        throwUnexpectedToken(lookahead)
                    }
                } else {
                    expr = inheritCoverGrammar(matchKeyword("new") ? parseNewExpression: parsePrimaryExpression)
                }
                for (;;) {
                    if (match(".")) {
                        isBindingElement = false;
                        isAssignmentTarget = true;
                        property = parseNonComputedMember();
                        expr = new WrappingNode(startToken).finishMemberExpression(".", expr, property)
                    } else if (match("(")) {
                        isBindingElement = false;
                        isAssignmentTarget = false;
                        args = parseArguments();
                        expr = new WrappingNode(startToken).finishCallExpression(expr, args)
                    } else if (match("[")) {
                        isBindingElement = false;
                        isAssignmentTarget = true;
                        property = parseComputedMember();
                        expr = new WrappingNode(startToken).finishMemberExpression("[", expr, property)
                    } else if (lookahead.type === Token.Template && lookahead.head) {
                        quasi = parseTemplateLiteral();
                        expr = new WrappingNode(startToken).finishTaggedTemplateExpression(expr, quasi)
                    } else {
                        break
                    }
                }
                state.allowIn = previousAllowIn;
                return expr
            }
            function parseLeftHandSideExpression() {
                var quasi, expr, property, startToken;
                assert(state.allowIn, "callee of new expression always allow in keyword.");
                startToken = lookahead;
                if (matchKeyword("super") && state.inFunctionBody) {
                    expr = new Node;
                    lex();
                    expr = expr.finishSuper();
                    if (!match("[") && !match(".")) {
                        throwUnexpectedToken(lookahead)
                    }
                } else {
                    expr = inheritCoverGrammar(matchKeyword("new") ? parseNewExpression: parsePrimaryExpression)
                }
                for (;;) {
                    if (match("[")) {
                        isBindingElement = false;
                        isAssignmentTarget = true;
                        property = parseComputedMember();
                        expr = new WrappingNode(startToken).finishMemberExpression("[", expr, property)
                    } else if (match(".")) {
                        isBindingElement = false;
                        isAssignmentTarget = true;
                        property = parseNonComputedMember();
                        expr = new WrappingNode(startToken).finishMemberExpression(".", expr, property)
                    } else if (lookahead.type === Token.Template && lookahead.head) {
                        quasi = parseTemplateLiteral();
                        expr = new WrappingNode(startToken).finishTaggedTemplateExpression(expr, quasi)
                    } else {
                        break
                    }
                }
                return expr
            }
            function parsePostfixExpression() {
                var expr, token, startToken = lookahead;
                expr = inheritCoverGrammar(parseLeftHandSideExpressionAllowCall);
                if (!hasLineTerminator && lookahead.type === Token.Punctuator) {
                    if (match("++") || match("--")) {
                        if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                            tolerateError(Messages.StrictLHSPostfix)
                        }
                        if (!isAssignmentTarget) {
                            tolerateError(Messages.InvalidLHSInAssignment)
                        }
                        isAssignmentTarget = isBindingElement = false;
                        token = lex();
                        expr = new WrappingNode(startToken).finishPostfixExpression(token.value, expr)
                    }
                }
                return expr
            }
            function parseUnaryExpression() {
                var token, expr, startToken;
                if (lookahead.type !== Token.Punctuator && lookahead.type !== Token.Keyword) {
                    expr = parsePostfixExpression()
                } else if (match("++") || match("--")) {
                    startToken = lookahead;
                    token = lex();
                    expr = inheritCoverGrammar(parseUnaryExpression);
                    if (strict && expr.type === Syntax.Identifier && isRestrictedWord(expr.name)) {
                        tolerateError(Messages.StrictLHSPrefix)
                    }
                    if (!isAssignmentTarget) {
                        tolerateError(Messages.InvalidLHSInAssignment)
                    }
                    expr = new WrappingNode(startToken).finishUnaryExpression(token.value, expr);
                    isAssignmentTarget = isBindingElement = false
                } else if (match("+") || match("-") || match("~") || match("!")) {
                    startToken = lookahead;
                    token = lex();
                    expr = inheritCoverGrammar(parseUnaryExpression);
                    expr = new WrappingNode(startToken).finishUnaryExpression(token.value, expr);
                    isAssignmentTarget = isBindingElement = false
                } else if (matchKeyword("delete") || matchKeyword("void") || matchKeyword("typeof")) {
                    startToken = lookahead;
                    token = lex();
                    expr = inheritCoverGrammar(parseUnaryExpression);
                    expr = new WrappingNode(startToken).finishUnaryExpression(token.value, expr);
                    if (strict && expr.operator === "delete" && expr.argument.type === Syntax.Identifier) {
                        tolerateError(Messages.StrictDelete)
                    }
                    isAssignmentTarget = isBindingElement = false
                } else {
                    expr = parsePostfixExpression()
                }
                return expr
            }
            function binaryPrecedence(token, allowIn) {
                var prec = 0;
                if (token.type !== Token.Punctuator && token.type !== Token.Keyword) {
                    return 0
                }
                switch (token.value) {
                case "||":
                    prec = 1;
                    break;
                case "&&":
                    prec = 2;
                    break;
                case "|":
                    prec = 3;
                    break;
                case "^":
                    prec = 4;
                    break;
                case "&":
                    prec = 5;
                    break;
                case "==":
                case "!=":
                case "===":
                case "!==":
                    prec = 6;
                    break;
                case "<":
                case ">":
                case "<=":
                case ">=":
                case "instanceof":
                    prec = 7;
                    break;
                case "in":
                    prec = allowIn ? 7 : 0;
                    break;
                case "<<":
                case ">>":
                case ">>>":
                    prec = 8;
                    break;
                case "+":
                case "-":
                    prec = 9;
                    break;
                case "*":
                case "/":
                case "%":
                    prec = 11;
                    break;
                default:
                    break
                }
                return prec
            }
            function parseBinaryExpression() {
                var marker, markers, expr, token, prec, stack, right, operator, left, i;
                marker = lookahead;
                left = inheritCoverGrammar(parseUnaryExpression);
                token = lookahead;
                prec = binaryPrecedence(token, state.allowIn);
                if (prec === 0) {
                    return left
                }
                isAssignmentTarget = isBindingElement = false;
                token.prec = prec;
                lex();
                markers = [marker, lookahead];
                right = isolateCoverGrammar(parseUnaryExpression);
                stack = [left, token, right];
                while ((prec = binaryPrecedence(lookahead, state.allowIn)) > 0) {
                    while (stack.length > 2 && prec <= stack[stack.length - 2].prec) {
                        right = stack.pop();
                        operator = stack.pop().value;
                        left = stack.pop();
                        markers.pop();
                        expr = new WrappingNode(markers[markers.length - 1]).finishBinaryExpression(operator, left, right);
                        stack.push(expr)
                    }
                    token = lex();
                    token.prec = prec;
                    stack.push(token);
                    markers.push(lookahead);
                    expr = isolateCoverGrammar(parseUnaryExpression);
                    stack.push(expr)
                }
                i = stack.length - 1;
                expr = stack[i];
                markers.pop();
                while (i > 1) {
                    expr = new WrappingNode(markers.pop()).finishBinaryExpression(stack[i - 1].value, stack[i - 2], expr);
                    i -= 2
                }
                return expr
            }
            function parseConditionalExpression() {
                var expr, previousAllowIn, consequent, alternate, startToken;
                startToken = lookahead;
                expr = inheritCoverGrammar(parseBinaryExpression);
                if (match("?")) {
                    lex();
                    previousAllowIn = state.allowIn;
                    state.allowIn = true;
                    consequent = isolateCoverGrammar(parseAssignmentExpression);
                    state.allowIn = previousAllowIn;
                    expect(":");
                    alternate = isolateCoverGrammar(parseAssignmentExpression);
                    expr = new WrappingNode(startToken).finishConditionalExpression(expr, consequent, alternate);
                    isAssignmentTarget = isBindingElement = false
                }
                return expr
            }
            function parseConciseBody() {
                if (match("{")) {
                    return parseFunctionSourceElements()
                }
                return isolateCoverGrammar(parseAssignmentExpression)
            }
            function checkPatternParam(options, param) {
                var i;
                switch (param.type) {
                case Syntax.Identifier:
                    validateParam(options, param, param.name);
                    break;
                case Syntax.RestElement:
                    checkPatternParam(options, param.argument);
                    break;
                case Syntax.AssignmentPattern:
                    checkPatternParam(options, param.left);
                    break;
                case Syntax.ArrayPattern:
                    for (i = 0; i < param.elements.length; i++) {
                        if (param.elements[i] !== null) {
                            checkPatternParam(options, param.elements[i])
                        }
                    }
                    break;
                case Syntax.YieldExpression:
                    break;
                default:
                    assert(param.type === Syntax.ObjectPattern, "Invalid type");
                    for (i = 0; i < param.properties.length; i++) {
                        checkPatternParam(options, param.properties[i].value)
                    }
                    break
                }
            }
            function reinterpretAsCoverFormalsList(expr) {
                var i, len, param, params, defaults, defaultCount, options, token;
                defaults = [];
                defaultCount = 0;
                params = [expr];
                switch (expr.type) {
                case Syntax.Identifier:
                    break;
                case PlaceHolders.ArrowParameterPlaceHolder:
                    params = expr.params;
                    break;
                default:
                    return null
                }
                options = {
                    paramSet: {}
                };
                for (i = 0, len = params.length; i < len; i += 1) {
                    param = params[i];
                    switch (param.type) {
                    case Syntax.AssignmentPattern:
                        params[i] = param.left;
                        if (param.right.type === Syntax.YieldExpression) {
                            if (param.right.argument) {
                                throwUnexpectedToken(lookahead)
                            }
                            param.right.type = Syntax.Identifier;
                            param.right.name = "yield";
                            delete param.right.argument;
                            delete param.right.delegate
                        }
                        defaults.push(param.right); ++defaultCount;
                        checkPatternParam(options, param.left);
                        break;
                    default:
                        checkPatternParam(options, param);
                        params[i] = param;
                        defaults.push(null);
                        break
                    }
                }
                if (strict || !state.allowYield) {
                    for (i = 0, len = params.length; i < len; i += 1) {
                        param = params[i];
                        if (param.type === Syntax.YieldExpression) {
                            throwUnexpectedToken(lookahead)
                        }
                    }
                }
                if (options.message === Messages.StrictParamDupe) {
                    token = strict ? options.stricted: options.firstRestricted;
                    throwUnexpectedToken(token, options.message)
                }
                if (defaultCount === 0) {
                    defaults = []
                }
                return {
                    params: params,
                    defaults: defaults,
                    stricted: options.stricted,
                    firstRestricted: options.firstRestricted,
                    message: options.message
                }
            }
            function parseArrowFunctionExpression(options, node) {
                var previousStrict, previousAllowYield, body;
                if (hasLineTerminator) {
                    tolerateUnexpectedToken(lookahead)
                }
                expect("=>");
                previousStrict = strict;
                previousAllowYield = state.allowYield;
                state.allowYield = true;
                body = parseConciseBody();
                if (strict && options.firstRestricted) {
                    throwUnexpectedToken(options.firstRestricted, options.message)
                }
                if (strict && options.stricted) {
                    tolerateUnexpectedToken(options.stricted, options.message)
                }
                strict = previousStrict;
                state.allowYield = previousAllowYield;
                return node.finishArrowFunctionExpression(options.params, options.defaults, body, body.type !== Syntax.BlockStatement)
            }
            function parseYieldExpression() {
                var argument, expr, delegate, previousAllowYield;
                argument = null;
                expr = new Node;
                delegate = false;
                expectKeyword("yield");
                if (!hasLineTerminator) {
                    previousAllowYield = state.allowYield;
                    state.allowYield = false;
                    delegate = match("*");
                    if (delegate) {
                        lex();
                        argument = parseAssignmentExpression()
                    } else {
                        if (!match(";") && !match("}") && !match(")") && lookahead.type !== Token.EOF) {
                            argument = parseAssignmentExpression()
                        }
                    }
                    state.allowYield = previousAllowYield
                }
                return expr.finishYieldExpression(argument, delegate)
            }
            function parseAssignmentExpression() {
                var token, expr, right, list, startToken;
                startToken = lookahead;
                token = lookahead;
                if (!state.allowYield && matchKeyword("yield")) {
                    return parseYieldExpression()
                }
                expr = parseConditionalExpression();
                if (expr.type === PlaceHolders.ArrowParameterPlaceHolder || match("=>")) {
                    isAssignmentTarget = isBindingElement = false;
                    list = reinterpretAsCoverFormalsList(expr);
                    if (list) {
                        firstCoverInitializedNameError = null;
                        return parseArrowFunctionExpression(list, new WrappingNode(startToken))
                    }
                    return expr
                }
                if (matchAssign()) {
                    if (!isAssignmentTarget) {
                        tolerateError(Messages.InvalidLHSInAssignment)
                    }
                    if (strict && expr.type === Syntax.Identifier) {
                        if (isRestrictedWord(expr.name)) {
                            tolerateUnexpectedToken(token, Messages.StrictLHSAssignment)
                        }
                        if (isStrictModeReservedWord(expr.name)) {
                            tolerateUnexpectedToken(token, Messages.StrictReservedWord)
                        }
                    }
                    if (!match("=")) {
                        isAssignmentTarget = isBindingElement = false
                    } else {
                        reinterpretExpressionAsPattern(expr)
                    }
                    token = lex();
                    right = isolateCoverGrammar(parseAssignmentExpression);
                    expr = new WrappingNode(startToken).finishAssignmentExpression(token.value, expr, right);
                    firstCoverInitializedNameError = null
                }
                return expr
            }
            function parseExpression() {
                var expr, startToken = lookahead,
                expressions;
                expr = isolateCoverGrammar(parseAssignmentExpression);
                if (match(",")) {
                    expressions = [expr];
                    while (startIndex < length) {
                        if (!match(",")) {
                            break
                        }
                        lex();
                        expressions.push(isolateCoverGrammar(parseAssignmentExpression))
                    }
                    expr = new WrappingNode(startToken).finishSequenceExpression(expressions)
                }
                return expr
            }
            function parseStatementListItem() {
                if (lookahead.type === Token.Keyword) {
                    switch (lookahead.value) {
                    case "export":
                        if (state.sourceType !== "module") {
                            tolerateUnexpectedToken(lookahead, Messages.IllegalExportDeclaration)
                        }
                        return parseExportDeclaration();
                    case "import":
                        if (state.sourceType !== "module") {
                            tolerateUnexpectedToken(lookahead, Messages.IllegalImportDeclaration)
                        }
                        return parseImportDeclaration();
                    case "const":
                        return parseLexicalDeclaration({
                            inFor:
                            false
                        });
                    case "function":
                        return parseFunctionDeclaration(new Node);
                    case "class":
                        return parseClassDeclaration()
                    }
                }
                if (matchKeyword("let") && isLexicalDeclaration()) {
                    return parseLexicalDeclaration({
                        inFor: false
                    })
                }
                return parseStatement()
            }
            function parseStatementList() {
                var list = [];
                while (startIndex < length) {
                    if (match("}")) {
                        break
                    }
                    list.push(parseStatementListItem())
                }
                return list
            }
            function parseBlock() {
                var block, node = new Node;
                expect("{");
                block = parseStatementList();
                expect("}");
                return node.finishBlockStatement(block)
            }
            function parseVariableIdentifier(kind) {
                var token, node = new Node;
                token = lex();
                if (token.type === Token.Keyword && token.value === "yield") {
                    if (strict) {
                        tolerateUnexpectedToken(token, Messages.StrictReservedWord)
                    }
                    if (!state.allowYield) {
                        throwUnexpectedToken(token)
                    }
                } else if (token.type !== Token.Identifier) {
                    if (strict && token.type === Token.Keyword && isStrictModeReservedWord(token.value)) {
                        tolerateUnexpectedToken(token, Messages.StrictReservedWord)
                    } else {
                        if (strict || token.value !== "let" || kind !== "var") {
                            throwUnexpectedToken(token)
                        }
                    }
                } else if (state.sourceType === "module" && token.type === Token.Identifier && token.value === "await") {
                    tolerateUnexpectedToken(token)
                }
                return node.finishIdentifier(token.value)
            }
            function parseVariableDeclaration(options) {
                var init = null,
                id, node = new Node,
                params = [];
                id = parsePattern(params, "var");
                if (strict && isRestrictedWord(id.name)) {
                    tolerateError(Messages.StrictVarName)
                }
                if (match("=")) {
                    lex();
                    init = isolateCoverGrammar(parseAssignmentExpression)
                } else if (id.type !== Syntax.Identifier && !options.inFor) {
                    expect("=")
                }
                return node.finishVariableDeclarator(id, init)
            }
            function parseVariableDeclarationList(options) {
                var opt, list;
                opt = {
                    inFor: options.inFor
                };
                list = [parseVariableDeclaration(opt)];
                while (match(",")) {
                    lex();
                    list.push(parseVariableDeclaration(opt))
                }
                return list
            }
            function parseVariableStatement(node) {
                var declarations;
                expectKeyword("var");
                declarations = parseVariableDeclarationList({
                    inFor: false
                });
                consumeSemicolon();
                return node.finishVariableDeclaration(declarations)
            }
            function parseLexicalBinding(kind, options) {
                var init = null,
                id, node = new Node,
                params = [];
                id = parsePattern(params, kind);
                if (strict && id.type === Syntax.Identifier && isRestrictedWord(id.name)) {
                    tolerateError(Messages.StrictVarName)
                }
                if (kind === "const") {
                    if (!matchKeyword("in") && !matchContextualKeyword("of")) {
                        expect("=");
                        init = isolateCoverGrammar(parseAssignmentExpression)
                    }
                } else if (!options.inFor && id.type !== Syntax.Identifier || match("=")) {
                    expect("=");
                    init = isolateCoverGrammar(parseAssignmentExpression)
                }
                return node.finishVariableDeclarator(id, init)
            }
            function parseBindingList(kind, options) {
                var list = [parseLexicalBinding(kind, options)];
                while (match(",")) {
                    lex();
                    list.push(parseLexicalBinding(kind, options))
                }
                return list
            }
            function tokenizerState() {
                return {
                    index: index,
                    lineNumber: lineNumber,
                    lineStart: lineStart,
                    hasLineTerminator: hasLineTerminator,
                    lastIndex: lastIndex,
                    lastLineNumber: lastLineNumber,
                    lastLineStart: lastLineStart,
                    startIndex: startIndex,
                    startLineNumber: startLineNumber,
                    startLineStart: startLineStart,
                    lookahead: lookahead,
                    tokenCount: extra.tokens ? extra.tokens.length: 0
                }
            }
            function resetTokenizerState(ts) {
                index = ts.index;
                lineNumber = ts.lineNumber;
                lineStart = ts.lineStart;
                hasLineTerminator = ts.hasLineTerminator;
                lastIndex = ts.lastIndex;
                lastLineNumber = ts.lastLineNumber;
                lastLineStart = ts.lastLineStart;
                startIndex = ts.startIndex;
                startLineNumber = ts.startLineNumber;
                startLineStart = ts.startLineStart;
                lookahead = ts.lookahead;
                if (extra.tokens) {
                    extra.tokens.splice(ts.tokenCount, extra.tokens.length)
                }
            }
            function isLexicalDeclaration() {
                var lexical, ts;
                ts = tokenizerState();
                lex();
                lexical = lookahead.type === Token.Identifier || match("[") || match("{") || matchKeyword("let") || matchKeyword("yield");
                resetTokenizerState(ts);
                return lexical
            }
            function parseLexicalDeclaration(options) {
                var kind, declarations, node = new Node;
                kind = lex().value;
                assert(kind === "let" || kind === "const", "Lexical declaration must be either let or const");
                declarations = parseBindingList(kind, options);
                consumeSemicolon();
                return node.finishLexicalDeclaration(declarations, kind)
            }
            function parseRestElement(params) {
                var param, node = new Node;
                lex();
                if (match("{")) {
                    throwError(Messages.ObjectPatternAsRestParameter)
                }
                params.push(lookahead);
                param = parseVariableIdentifier();
                if (match("=")) {
                    throwError(Messages.DefaultRestParameter)
                }
                if (!match(")")) {
                    throwError(Messages.ParameterAfterRestParameter)
                }
                return node.finishRestElement(param)
            }
            function parseEmptyStatement(node) {
                expect(";");
                return node.finishEmptyStatement()
            }
            function parseExpressionStatement(node) {
                var expr = parseExpression();
                consumeSemicolon();
                return node.finishExpressionStatement(expr)
            }
            function parseIfStatement(node) {
                var test, consequent, alternate;
                expectKeyword("if");
                expect("(");
                test = parseExpression();
                expect(")");
                consequent = parseStatement();
                if (matchKeyword("else")) {
                    lex();
                    alternate = parseStatement()
                } else {
                    alternate = null
                }
                return node.finishIfStatement(test, consequent, alternate)
            }
            function parseDoWhileStatement(node) {
                var body, test, oldInIteration;
                expectKeyword("do");
                oldInIteration = state.inIteration;
                state.inIteration = true;
                body = parseStatement();
                state.inIteration = oldInIteration;
                expectKeyword("while");
                expect("(");
                test = parseExpression();
                expect(")");
                if (match(";")) {
                    lex()
                }
                return node.finishDoWhileStatement(body, test)
            }
            function parseWhileStatement(node) {
                var test, body, oldInIteration;
                expectKeyword("while");
                expect("(");
                test = parseExpression();
                expect(")");
                oldInIteration = state.inIteration;
                state.inIteration = true;
                body = parseStatement();
                state.inIteration = oldInIteration;
                return node.finishWhileStatement(test, body)
            }
            function parseForStatement(node) {
                var init, forIn, initSeq, initStartToken, test, update, left, right, kind, declarations, body, oldInIteration, previousAllowIn = state.allowIn;
                init = test = update = null;
                forIn = true;
                expectKeyword("for");
                expect("(");
                if (match(";")) {
                    lex()
                } else {
                    if (matchKeyword("var")) {
                        init = new Node;
                        lex();
                        state.allowIn = false;
                        declarations = parseVariableDeclarationList({
                            inFor: true
                        });
                        state.allowIn = previousAllowIn;
                        if (declarations.length === 1 && matchKeyword("in")) {
                            init = init.finishVariableDeclaration(declarations);
                            lex();
                            left = init;
                            right = parseExpression();
                            init = null
                        } else if (declarations.length === 1 && declarations[0].init === null && matchContextualKeyword("of")) {
                            init = init.finishVariableDeclaration(declarations);
                            lex();
                            left = init;
                            right = parseAssignmentExpression();
                            init = null;
                            forIn = false
                        } else {
                            init = init.finishVariableDeclaration(declarations);
                            expect(";")
                        }
                    } else if (matchKeyword("const") || matchKeyword("let")) {
                        init = new Node;
                        kind = lex().value;
                        if (!strict && lookahead.value === "in") {
                            init = init.finishIdentifier(kind);
                            lex();
                            left = init;
                            right = parseExpression();
                            init = null
                        } else {
                            state.allowIn = false;
                            declarations = parseBindingList(kind, {
                                inFor: true
                            });
                            state.allowIn = previousAllowIn;
                            if (declarations.length === 1 && declarations[0].init === null && matchKeyword("in")) {
                                init = init.finishLexicalDeclaration(declarations, kind);
                                lex();
                                left = init;
                                right = parseExpression();
                                init = null
                            } else if (declarations.length === 1 && declarations[0].init === null && matchContextualKeyword("of")) {
                                init = init.finishLexicalDeclaration(declarations, kind);
                                lex();
                                left = init;
                                right = parseAssignmentExpression();
                                init = null;
                                forIn = false
                            } else {
                                consumeSemicolon();
                                init = init.finishLexicalDeclaration(declarations, kind)
                            }
                        }
                    } else {
                        initStartToken = lookahead;
                        state.allowIn = false;
                        init = inheritCoverGrammar(parseAssignmentExpression);
                        state.allowIn = previousAllowIn;
                        if (matchKeyword("in")) {
                            if (!isAssignmentTarget) {
                                tolerateError(Messages.InvalidLHSInForIn)
                            }
                            lex();
                            reinterpretExpressionAsPattern(init);
                            left = init;
                            right = parseExpression();
                            init = null
                        } else if (matchContextualKeyword("of")) {
                            if (!isAssignmentTarget) {
                                tolerateError(Messages.InvalidLHSInForLoop)
                            }
                            lex();
                            reinterpretExpressionAsPattern(init);
                            left = init;
                            right = parseAssignmentExpression();
                            init = null;
                            forIn = false
                        } else {
                            if (match(",")) {
                                initSeq = [init];
                                while (match(",")) {
                                    lex();
                                    initSeq.push(isolateCoverGrammar(parseAssignmentExpression))
                                }
                                init = new WrappingNode(initStartToken).finishSequenceExpression(initSeq)
                            }
                            expect(";")
                        }
                    }
                }
                if (typeof left === "undefined") {
                    if (!match(";")) {
                        test = parseExpression()
                    }
                    expect(";");
                    if (!match(")")) {
                        update = parseExpression()
                    }
                }
                expect(")");
                oldInIteration = state.inIteration;
                state.inIteration = true;
                body = isolateCoverGrammar(parseStatement);
                state.inIteration = oldInIteration;
                return typeof left === "undefined" ? node.finishForStatement(init, test, update, body) : forIn ? node.finishForInStatement(left, right, body) : node.finishForOfStatement(left, right, body)
            }
            function parseContinueStatement(node) {
                var label = null,
                key;
                expectKeyword("continue");
                if (source.charCodeAt(startIndex) === 59) {
                    lex();
                    if (!state.inIteration) {
                        throwError(Messages.IllegalContinue)
                    }
                    return node.finishContinueStatement(null)
                }
                if (hasLineTerminator) {
                    if (!state.inIteration) {
                        throwError(Messages.IllegalContinue)
                    }
                    return node.finishContinueStatement(null)
                }
                if (lookahead.type === Token.Identifier) {
                    label = parseVariableIdentifier();
                    key = "$" + label.name;
                    if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
                        throwError(Messages.UnknownLabel, label.name)
                    }
                }
                consumeSemicolon();
                if (label === null && !state.inIteration) {
                    throwError(Messages.IllegalContinue)
                }
                return node.finishContinueStatement(label)
            }
            function parseBreakStatement(node) {
                var label = null,
                key;
                expectKeyword("break");
                if (source.charCodeAt(lastIndex) === 59) {
                    lex();
                    if (! (state.inIteration || state.inSwitch)) {
                        throwError(Messages.IllegalBreak)
                    }
                    return node.finishBreakStatement(null)
                }
                if (hasLineTerminator) {
                    if (! (state.inIteration || state.inSwitch)) {
                        throwError(Messages.IllegalBreak)
                    }
                } else if (lookahead.type === Token.Identifier) {
                    label = parseVariableIdentifier();
                    key = "$" + label.name;
                    if (!Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
                        throwError(Messages.UnknownLabel, label.name)
                    }
                }
                consumeSemicolon();
                if (label === null && !(state.inIteration || state.inSwitch)) {
                    throwError(Messages.IllegalBreak)
                }
                return node.finishBreakStatement(label)
            }
            function parseReturnStatement(node) {
                var argument = null;
                expectKeyword("return");
                if (!state.inFunctionBody) {
                    tolerateError(Messages.IllegalReturn)
                }
                if (source.charCodeAt(lastIndex) === 32) {
                    if (isIdentifierStart(source.charCodeAt(lastIndex + 1))) {
                        argument = parseExpression();
                        consumeSemicolon();
                        return node.finishReturnStatement(argument)
                    }
                }
                if (hasLineTerminator) {
                    return node.finishReturnStatement(null)
                }
                if (!match(";")) {
                    if (!match("}") && lookahead.type !== Token.EOF) {
                        argument = parseExpression()
                    }
                }
                consumeSemicolon();
                return node.finishReturnStatement(argument)
            }
            function parseWithStatement(node) {
                var object, body;
                if (strict) {
                    tolerateError(Messages.StrictModeWith)
                }
                expectKeyword("with");
                expect("(");
                object = parseExpression();
                expect(")");
                body = parseStatement();
                return node.finishWithStatement(object, body)
            }
            function parseSwitchCase() {
                var test, consequent = [],
                statement,
                node = new Node;
                if (matchKeyword("default")) {
                    lex();
                    test = null
                } else {
                    expectKeyword("case");
                    test = parseExpression()
                }
                expect(":");
                while (startIndex < length) {
                    if (match("}") || matchKeyword("default") || matchKeyword("case")) {
                        break
                    }
                    statement = parseStatementListItem();
                    consequent.push(statement)
                }
                return node.finishSwitchCase(test, consequent)
            }
            function parseSwitchStatement(node) {
                var discriminant, cases, clause, oldInSwitch, defaultFound;
                expectKeyword("switch");
                expect("(");
                discriminant = parseExpression();
                expect(")");
                expect("{");
                cases = [];
                if (match("}")) {
                    lex();
                    return node.finishSwitchStatement(discriminant, cases)
                }
                oldInSwitch = state.inSwitch;
                state.inSwitch = true;
                defaultFound = false;
                while (startIndex < length) {
                    if (match("}")) {
                        break
                    }
                    clause = parseSwitchCase();
                    if (clause.test === null) {
                        if (defaultFound) {
                            throwError(Messages.MultipleDefaultsInSwitch)
                        }
                        defaultFound = true
                    }
                    cases.push(clause)
                }
                state.inSwitch = oldInSwitch;
                expect("}");
                return node.finishSwitchStatement(discriminant, cases)
            }
            function parseThrowStatement(node) {
                var argument;
                expectKeyword("throw");
                if (hasLineTerminator) {
                    throwError(Messages.NewlineAfterThrow)
                }
                argument = parseExpression();
                consumeSemicolon();
                return node.finishThrowStatement(argument)
            }
            function parseCatchClause() {
                var param, params = [],
                paramMap = {},
                key,
                i,
                body,
                node = new Node;
                expectKeyword("catch");
                expect("(");
                if (match(")")) {
                    throwUnexpectedToken(lookahead)
                }
                param = parsePattern(params);
                for (i = 0; i < params.length; i++) {
                    key = "$" + params[i].value;
                    if (Object.prototype.hasOwnProperty.call(paramMap, key)) {
                        tolerateError(Messages.DuplicateBinding, params[i].value)
                    }
                    paramMap[key] = true
                }
                if (strict && isRestrictedWord(param.name)) {
                    tolerateError(Messages.StrictCatchVariable)
                }
                expect(")");
                body = parseBlock();
                return node.finishCatchClause(param, body)
            }
            function parseTryStatement(node) {
                var block, handler = null,
                finalizer = null;
                expectKeyword("try");
                block = parseBlock();
                if (matchKeyword("catch")) {
                    handler = parseCatchClause()
                }
                if (matchKeyword("finally")) {
                    lex();
                    finalizer = parseBlock()
                }
                if (!handler && !finalizer) {
                    throwError(Messages.NoCatchOrFinally)
                }
                return node.finishTryStatement(block, handler, finalizer)
            }
            function parseDebuggerStatement(node) {
                expectKeyword("debugger");
                consumeSemicolon();
                return node.finishDebuggerStatement()
            }
            function parseStatement() {
                var type = lookahead.type,
                expr, labeledBody, key, node;
                if (type === Token.EOF) {
                    throwUnexpectedToken(lookahead)
                }
                if (type === Token.Punctuator && lookahead.value === "{") {
                    return parseBlock()
                }
                isAssignmentTarget = isBindingElement = true;
                node = new Node;
                if (type === Token.Punctuator) {
                    switch (lookahead.value) {
                    case ";":
                        return parseEmptyStatement(node);
                    case "(":
                        return parseExpressionStatement(node);
                    default:
                        break
                    }
                } else if (type === Token.Keyword) {
                    switch (lookahead.value) {
                    case "break":
                        return parseBreakStatement(node);
                    case "continue":
                        return parseContinueStatement(node);
                    case "debugger":
                        return parseDebuggerStatement(node);
                    case "do":
                        return parseDoWhileStatement(node);
                    case "for":
                        return parseForStatement(node);
                    case "function":
                        return parseFunctionDeclaration(node);
                    case "if":
                        return parseIfStatement(node);
                    case "return":
                        return parseReturnStatement(node);
                    case "switch":
                        return parseSwitchStatement(node);
                    case "throw":
                        return parseThrowStatement(node);
                    case "try":
                        return parseTryStatement(node);
                    case "var":
                        return parseVariableStatement(node);
                    case "while":
                        return parseWhileStatement(node);
                    case "with":
                        return parseWithStatement(node);
                    default:
                        break
                    }
                }
                expr = parseExpression();
                if (expr.type === Syntax.Identifier && match(":")) {
                    lex();
                    key = "$" + expr.name;
                    if (Object.prototype.hasOwnProperty.call(state.labelSet, key)) {
                        throwError(Messages.Redeclaration, "Label", expr.name)
                    }
                    state.labelSet[key] = true;
                    labeledBody = parseStatement();
                    delete state.labelSet[key];
                    return node.finishLabeledStatement(expr, labeledBody)
                }
                consumeSemicolon();
                return node.finishExpressionStatement(expr)
            }
            function parseFunctionSourceElements() {
                var statement, body = [],
                token,
                directive,
                firstRestricted,
                oldLabelSet,
                oldInIteration,
                oldInSwitch,
                oldInFunctionBody,
                oldParenthesisCount,
                node = new Node;
                expect("{");
                while (startIndex < length) {
                    if (lookahead.type !== Token.StringLiteral) {
                        break
                    }
                    token = lookahead;
                    statement = parseStatementListItem();
                    body.push(statement);
                    if (statement.expression.type !== Syntax.Literal) {
                        break
                    }
                    directive = source.slice(token.start + 1, token.end - 1);
                    if (directive === "use strict") {
                        strict = true;
                        if (firstRestricted) {
                            tolerateUnexpectedToken(firstRestricted, Messages.StrictOctalLiteral)
                        }
                    } else {
                        if (!firstRestricted && token.octal) {
                            firstRestricted = token
                        }
                    }
                }
                oldLabelSet = state.labelSet;
                oldInIteration = state.inIteration;
                oldInSwitch = state.inSwitch;
                oldInFunctionBody = state.inFunctionBody;
                oldParenthesisCount = state.parenthesizedCount;
                state.labelSet = {};
                state.inIteration = false;
                state.inSwitch = false;
                state.inFunctionBody = true;
                state.parenthesizedCount = 0;
                while (startIndex < length) {
                    if (match("}")) {
                        break
                    }
                    body.push(parseStatementListItem())
                }
                expect("}");
                state.labelSet = oldLabelSet;
                state.inIteration = oldInIteration;
                state.inSwitch = oldInSwitch;
                state.inFunctionBody = oldInFunctionBody;
                state.parenthesizedCount = oldParenthesisCount;
                return node.finishBlockStatement(body)
            }
            function validateParam(options, param, name) {
                var key = "$" + name;
                if (strict) {
                    if (isRestrictedWord(name)) {
                        options.stricted = param;
                        options.message = Messages.StrictParamName
                    }
                    if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
                        options.stricted = param;
                        options.message = Messages.StrictParamDupe
                    }
                } else if (!options.firstRestricted) {
                    if (isRestrictedWord(name)) {
                        options.firstRestricted = param;
                        options.message = Messages.StrictParamName
                    } else if (isStrictModeReservedWord(name)) {
                        options.firstRestricted = param;
                        options.message = Messages.StrictReservedWord
                    } else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
                        options.stricted = param;
                        options.message = Messages.StrictParamDupe
                    }
                }
                options.paramSet[key] = true
            }
            function parseParam(options) {
                var token, param, params = [],
                i,
                def;
                token = lookahead;
                if (token.value === "...") {
                    param = parseRestElement(params);
                    validateParam(options, param.argument, param.argument.name);
                    options.params.push(param);
                    options.defaults.push(null);
                    return false
                }
                param = parsePatternWithDefault(params);
                for (i = 0; i < params.length; i++) {
                    validateParam(options, params[i], params[i].value)
                }
                if (param.type === Syntax.AssignmentPattern) {
                    def = param.right;
                    param = param.left; ++options.defaultCount
                }
                options.params.push(param);
                options.defaults.push(def);
                return ! match(")")
            }
            function parseParams(firstRestricted) {
                var options;
                options = {
                    params: [],
                    defaultCount: 0,
                    defaults: [],
                    firstRestricted: firstRestricted
                };
                expect("(");
                if (!match(")")) {
                    options.paramSet = {};
                    while (startIndex < length) {
                        if (!parseParam(options)) {
                            break
                        }
                        expect(",")
                    }
                }
                expect(")");
                if (options.defaultCount === 0) {
                    options.defaults = []
                }
                return {
                    params: options.params,
                    defaults: options.defaults,
                    stricted: options.stricted,
                    firstRestricted: options.firstRestricted,
                    message: options.message
                }
            }
            function parseFunctionDeclaration(node, identifierIsOptional) {
                var id = null,
                params = [],
                defaults = [],
                body,
                token,
                stricted,
                tmp,
                firstRestricted,
                message,
                previousStrict,
                isGenerator,
                previousAllowYield;
                previousAllowYield = state.allowYield;
                expectKeyword("function");
                isGenerator = match("*");
                if (isGenerator) {
                    lex()
                }
                if (!identifierIsOptional || !match("(")) {
                    token = lookahead;
                    id = parseVariableIdentifier();
                    if (strict) {
                        if (isRestrictedWord(token.value)) {
                            tolerateUnexpectedToken(token, Messages.StrictFunctionName)
                        }
                    } else {
                        if (isRestrictedWord(token.value)) {
                            firstRestricted = token;
                            message = Messages.StrictFunctionName
                        } else if (isStrictModeReservedWord(token.value)) {
                            firstRestricted = token;
                            message = Messages.StrictReservedWord
                        }
                    }
                }
                state.allowYield = !isGenerator;
                tmp = parseParams(firstRestricted);
                params = tmp.params;
                defaults = tmp.defaults;
                stricted = tmp.stricted;
                firstRestricted = tmp.firstRestricted;
                if (tmp.message) {
                    message = tmp.message
                }
                previousStrict = strict;
                body = parseFunctionSourceElements();
                if (strict && firstRestricted) {
                    throwUnexpectedToken(firstRestricted, message)
                }
                if (strict && stricted) {
                    tolerateUnexpectedToken(stricted, message)
                }
                strict = previousStrict;
                state.allowYield = previousAllowYield;
                return node.finishFunctionDeclaration(id, params, defaults, body, isGenerator)
            }
            function parseFunctionExpression() {
                var token, id = null,
                stricted, firstRestricted, message, tmp, params = [],
                defaults = [],
                body,
                previousStrict,
                node = new Node,
                isGenerator,
                previousAllowYield;
                previousAllowYield = state.allowYield;
                expectKeyword("function");
                isGenerator = match("*");
                if (isGenerator) {
                    lex()
                }
                state.allowYield = !isGenerator;
                if (!match("(")) {
                    token = lookahead;
                    id = !strict && !isGenerator && matchKeyword("yield") ? parseNonComputedProperty() : parseVariableIdentifier();
                    if (strict) {
                        if (isRestrictedWord(token.value)) {
                            tolerateUnexpectedToken(token, Messages.StrictFunctionName)
                        }
                    } else {
                        if (isRestrictedWord(token.value)) {
                            firstRestricted = token;
                            message = Messages.StrictFunctionName
                        } else if (isStrictModeReservedWord(token.value)) {
                            firstRestricted = token;
                            message = Messages.StrictReservedWord
                        }
                    }
                }
                tmp = parseParams(firstRestricted);
                params = tmp.params;
                defaults = tmp.defaults;
                stricted = tmp.stricted;
                firstRestricted = tmp.firstRestricted;
                if (tmp.message) {
                    message = tmp.message
                }
                previousStrict = strict;
                body = parseFunctionSourceElements();
                if (strict && firstRestricted) {
                    throwUnexpectedToken(firstRestricted, message)
                }
                if (strict && stricted) {
                    tolerateUnexpectedToken(stricted, message)
                }
                strict = previousStrict;
                state.allowYield = previousAllowYield;
                return node.finishFunctionExpression(id, params, defaults, body, isGenerator)
            }
            function parseClassBody() {
                var classBody, token, isStatic, hasConstructor = false,
                body, method, computed, key;
                classBody = new Node;
                expect("{");
                body = [];
                while (!match("}")) {
                    if (match(";")) {
                        lex()
                    } else {
                        method = new Node;
                        token = lookahead;
                        isStatic = false;
                        computed = match("[");
                        if (match("*")) {
                            lex()
                        } else {
                            key = parseObjectPropertyKey();
                            if (key.name === "static" && (lookaheadPropertyName() || match("*"))) {
                                token = lookahead;
                                isStatic = true;
                                computed = match("[");
                                if (match("*")) {
                                    lex()
                                } else {
                                    key = parseObjectPropertyKey()
                                }
                            }
                        }
                        method = tryParseMethodDefinition(token, key, computed, method);
                        if (method) {
                            method["static"] = isStatic;
                            if (method.kind === "init") {
                                method.kind = "method"
                            }
                            if (!isStatic) {
                                if (!method.computed && (method.key.name || method.key.value.toString()) === "constructor") {
                                    if (method.kind !== "method" || !method.method || method.value.generator) {
                                        throwUnexpectedToken(token, Messages.ConstructorSpecialMethod)
                                    }
                                    if (hasConstructor) {
                                        throwUnexpectedToken(token, Messages.DuplicateConstructor)
                                    } else {
                                        hasConstructor = true
                                    }
                                    method.kind = "constructor"
                                }
                            } else {
                                if (!method.computed && (method.key.name || method.key.value.toString()) === "prototype") {
                                    throwUnexpectedToken(token, Messages.StaticPrototype)
                                }
                            }
                            method.type = Syntax.MethodDefinition;
                            delete method.method;
                            delete method.shorthand;
                            body.push(method)
                        } else {
                            throwUnexpectedToken(lookahead)
                        }
                    }
                }
                lex();
                return classBody.finishClassBody(body)
            }
            function parseClassDeclaration(identifierIsOptional) {
                var id = null,
                superClass = null,
                classNode = new Node,
                classBody, previousStrict = strict;
                strict = true;
                expectKeyword("class");
                if (!identifierIsOptional || lookahead.type === Token.Identifier) {
                    id = parseVariableIdentifier()
                }
                if (matchKeyword("extends")) {
                    lex();
                    superClass = isolateCoverGrammar(parseLeftHandSideExpressionAllowCall)
                }
                classBody = parseClassBody();
                strict = previousStrict;
                return classNode.finishClassDeclaration(id, superClass, classBody)
            }
            function parseClassExpression() {
                var id = null,
                superClass = null,
                classNode = new Node,
                classBody, previousStrict = strict;
                strict = true;
                expectKeyword("class");
                if (lookahead.type === Token.Identifier) {
                    id = parseVariableIdentifier()
                }
                if (matchKeyword("extends")) {
                    lex();
                    superClass = isolateCoverGrammar(parseLeftHandSideExpressionAllowCall)
                }
                classBody = parseClassBody();
                strict = previousStrict;
                return classNode.finishClassExpression(id, superClass, classBody)
            }
            function parseModuleSpecifier() {
                var node = new Node;
                if (lookahead.type !== Token.StringLiteral) {
                    throwError(Messages.InvalidModuleSpecifier)
                }
                return node.finishLiteral(lex())
            }
            function parseExportSpecifier() {
                var exported, local, node = new Node,
                def;
                if (matchKeyword("default")) {
                    def = new Node;
                    lex();
                    local = def.finishIdentifier("default")
                } else {
                    local = parseVariableIdentifier()
                }
                if (matchContextualKeyword("as")) {
                    lex();
                    exported = parseNonComputedProperty()
                }
                return node.finishExportSpecifier(local, exported)
            }
            function parseExportNamedDeclaration(node) {
                var declaration = null,
                isExportFromIdentifier, src = null,
                specifiers = [];
                if (lookahead.type === Token.Keyword) {
                    switch (lookahead.value) {
                    case "let":
                    case "const":
                        declaration = parseLexicalDeclaration({
                            inFor: false
                        });
                        return node.finishExportNamedDeclaration(declaration, specifiers, null);
                    case "var":
                    case "class":
                    case "function":
                        declaration = parseStatementListItem();
                        return node.finishExportNamedDeclaration(declaration, specifiers, null)
                    }
                }
                expect("{");
                while (!match("}")) {
                    isExportFromIdentifier = isExportFromIdentifier || matchKeyword("default");
                    specifiers.push(parseExportSpecifier());
                    if (!match("}")) {
                        expect(",");
                        if (match("}")) {
                            break
                        }
                    }
                }
                expect("}");
                if (matchContextualKeyword("from")) {
                    lex();
                    src = parseModuleSpecifier();
                    consumeSemicolon()
                } else if (isExportFromIdentifier) {
                    throwError(lookahead.value ? Messages.UnexpectedToken: Messages.MissingFromClause, lookahead.value)
                } else {
                    consumeSemicolon()
                }
                return node.finishExportNamedDeclaration(declaration, specifiers, src)
            }
            function parseExportDefaultDeclaration(node) {
                var declaration = null,
                expression = null;
                expectKeyword("default");
                if (matchKeyword("function")) {
                    declaration = parseFunctionDeclaration(new Node, true);
                    return node.finishExportDefaultDeclaration(declaration)
                }
                if (matchKeyword("class")) {
                    declaration = parseClassDeclaration(true);
                    return node.finishExportDefaultDeclaration(declaration)
                }
                if (matchContextualKeyword("from")) {
                    throwError(Messages.UnexpectedToken, lookahead.value)
                }
                if (match("{")) {
                    expression = parseObjectInitializer()
                } else if (match("[")) {
                    expression = parseArrayInitializer()
                } else {
                    expression = parseAssignmentExpression()
                }
                consumeSemicolon();
                return node.finishExportDefaultDeclaration(expression)
            }
            function parseExportAllDeclaration(node) {
                var src;
                expect("*");
                if (!matchContextualKeyword("from")) {
                    throwError(lookahead.value ? Messages.UnexpectedToken: Messages.MissingFromClause, lookahead.value)
                }
                lex();
                src = parseModuleSpecifier();
                consumeSemicolon();
                return node.finishExportAllDeclaration(src)
            }
            function parseExportDeclaration() {
                var node = new Node;
                if (state.inFunctionBody) {
                    throwError(Messages.IllegalExportDeclaration)
                }
                expectKeyword("export");
                if (matchKeyword("default")) {
                    return parseExportDefaultDeclaration(node)
                }
                if (match("*")) {
                    return parseExportAllDeclaration(node)
                }
                return parseExportNamedDeclaration(node)
            }
            function parseImportSpecifier() {
                var local, imported, node = new Node;
                imported = parseNonComputedProperty();
                if (matchContextualKeyword("as")) {
                    lex();
                    local = parseVariableIdentifier()
                }
                return node.finishImportSpecifier(local, imported)
            }
            function parseNamedImports() {
                var specifiers = [];
                expect("{");
                while (!match("}")) {
                    specifiers.push(parseImportSpecifier());
                    if (!match("}")) {
                        expect(",");
                        if (match("}")) {
                            break
                        }
                    }
                }
                expect("}");
                return specifiers
            }
            function parseImportDefaultSpecifier() {
                var local, node = new Node;
                local = parseNonComputedProperty();
                return node.finishImportDefaultSpecifier(local)
            }
            function parseImportNamespaceSpecifier() {
                var local, node = new Node;
                expect("*");
                if (!matchContextualKeyword("as")) {
                    throwError(Messages.NoAsAfterImportNamespace)
                }
                lex();
                local = parseNonComputedProperty();
                return node.finishImportNamespaceSpecifier(local)
            }
            function parseImportDeclaration() {
                var specifiers = [],
                src,
                node = new Node;
                if (state.inFunctionBody) {
                    throwError(Messages.IllegalImportDeclaration)
                }
                expectKeyword("import");
                if (lookahead.type === Token.StringLiteral) {
                    src = parseModuleSpecifier()
                } else {
                    if (match("{")) {
                        specifiers = specifiers.concat(parseNamedImports())
                    } else if (match("*")) {
                        specifiers.push(parseImportNamespaceSpecifier())
                    } else if (isIdentifierName(lookahead) && !matchKeyword("default")) {
                        specifiers.push(parseImportDefaultSpecifier());
                        if (match(",")) {
                            lex();
                            if (match("*")) {
                                specifiers.push(parseImportNamespaceSpecifier())
                            } else if (match("{")) {
                                specifiers = specifiers.concat(parseNamedImports())
                            } else {
                                throwUnexpectedToken(lookahead)
                            }
                        }
                    } else {
                        throwUnexpectedToken(lex())
                    }
                    if (!matchContextualKeyword("from")) {
                        throwError(lookahead.value ? Messages.UnexpectedToken: Messages.MissingFromClause, lookahead.value)
                    }
                    lex();
                    src = parseModuleSpecifier()
                }
                consumeSemicolon();
                return node.finishImportDeclaration(specifiers, src)
            }
            function parseScriptBody() {
                var statement, body = [],
                token,
                directive,
                firstRestricted;
                while (startIndex < length) {
                    token = lookahead;
                    if (token.type !== Token.StringLiteral) {
                        break
                    }
                    statement = parseStatementListItem();
                    body.push(statement);
                    if (statement.expression.type !== Syntax.Literal) {
                        break
                    }
                    directive = source.slice(token.start + 1, token.end - 1);
                    if (directive === "use strict") {
                        strict = true;
                        if (firstRestricted) {
                            tolerateUnexpectedToken(firstRestricted, Messages.StrictOctalLiteral)
                        }
                    } else {
                        if (!firstRestricted && token.octal) {
                            firstRestricted = token
                        }
                    }
                }
                while (startIndex < length) {
                    statement = parseStatementListItem();
                    if (typeof statement === "undefined") {
                        break
                    }
                    body.push(statement)
                }
                return body
            }
            function parseProgram() {
                var body, node;
                peek();
                node = new Node;
                body = parseScriptBody();
                return node.finishProgram(body, state.sourceType)
            }
            function filterTokenLocation() {
                var i, entry, token, tokens = [];
                for (i = 0; i < extra.tokens.length; ++i) {
                    entry = extra.tokens[i];
                    token = {
                        type: entry.type,
                        value: entry.value
                    };
                    if (entry.regex) {
                        token.regex = {
                            pattern: entry.regex.pattern,
                            flags: entry.regex.flags
                        }
                    }
                    if (extra.range) {
                        token.range = entry.range
                    }
                    if (extra.loc) {
                        token.loc = entry.loc
                    }
                    tokens.push(token)
                }
                extra.tokens = tokens
            }
            function tokenize(code, options, delegate) {
                var toString, tokens;
                toString = String;
                if (typeof code !== "string" && !(code instanceof String)) {
                    code = toString(code)
                }
                source = code;
                index = 0;
                lineNumber = source.length > 0 ? 1 : 0;
                lineStart = 0;
                startIndex = index;
                startLineNumber = lineNumber;
                startLineStart = lineStart;
                length = source.length;
                lookahead = null;
                state = {
                    allowIn: true,
                    allowYield: true,
                    labelSet: {},
                    inFunctionBody: false,
                    inIteration: false,
                    inSwitch: false,
                    lastCommentStart: -1,
                    curlyStack: []
                };
                extra = {};
                options = options || {};
                options.tokens = true;
                extra.tokens = [];
                extra.tokenValues = [];
                extra.tokenize = true;
                extra.delegate = delegate;
                extra.openParenToken = -1;
                extra.openCurlyToken = -1;
                extra.range = typeof options.range === "boolean" && options.range;
                extra.loc = typeof options.loc === "boolean" && options.loc;
                if (typeof options.comment === "boolean" && options.comment) {
                    extra.comments = []
                }
                if (typeof options.tolerant === "boolean" && options.tolerant) {
                    extra.errors = []
                }
                try {
                    peek();
                    if (lookahead.type === Token.EOF) {
                        return extra.tokens
                    }
                    lex();
                    while (lookahead.type !== Token.EOF) {
                        try {
                            lex()
                        } catch(lexError) {
                            if (extra.errors) {
                                recordError(lexError);
                                break
                            } else {
                                throw lexError
                            }
                        }
                    }
                    tokens = extra.tokens;
                    if (typeof extra.errors !== "undefined") {
                        tokens.errors = extra.errors
                    }
                } catch(e) {
                    throw e
                } finally {
                    extra = {}
                }
                return tokens
            }
            function parse(code, options) {
                var program, toString;
                toString = String;
                if (typeof code !== "string" && !(code instanceof String)) {
                    code = toString(code)
                }
                source = code;
                index = 0;
                lineNumber = source.length > 0 ? 1 : 0;
                lineStart = 0;
                startIndex = index;
                startLineNumber = lineNumber;
                startLineStart = lineStart;
                length = source.length;
                lookahead = null;
                state = {
                    allowIn: true,
                    allowYield: true,
                    labelSet: {},
                    inFunctionBody: false,
                    inIteration: false,
                    inSwitch: false,
                    lastCommentStart: -1,
                    curlyStack: [],
                    sourceType: "script"
                };
                strict = false;
                extra = {};
                if (typeof options !== "undefined") {
                    extra.range = typeof options.range === "boolean" && options.range;
                    extra.loc = typeof options.loc === "boolean" && options.loc;
                    extra.attachComment = typeof options.attachComment === "boolean" && options.attachComment;
                    if (extra.loc && options.source !== null && options.source !== undefined) {
                        extra.source = toString(options.source)
                    }
                    if (typeof options.tokens === "boolean" && options.tokens) {
                        extra.tokens = []
                    }
                    if (typeof options.comment === "boolean" && options.comment) {
                        extra.comments = []
                    }
                    if (typeof options.tolerant === "boolean" && options.tolerant) {
                        extra.errors = []
                    }
                    if (extra.attachComment) {
                        extra.range = true;
                        extra.comments = [];
                        extra.bottomRightStack = [];
                        extra.trailingComments = [];
                        extra.leadingComments = []
                    }
                    if (options.sourceType === "module") {
                        state.sourceType = options.sourceType;
                        strict = true
                    }
                }
                try {
                    program = parseProgram();
                    if (typeof extra.comments !== "undefined") {
                        program.comments = extra.comments
                    }
                    if (typeof extra.tokens !== "undefined") {
                        filterTokenLocation();
                        program.tokens = extra.tokens
                    }
                    if (typeof extra.errors !== "undefined") {
                        program.errors = extra.errors
                    }
                } catch(e) {
                    throw e
                } finally {
                    extra = {}
                }
                return program
            }
            exports.version = "2.7.1";
            exports.tokenize = tokenize;
            exports.parse = parse;
            exports.Syntax = function() {
                var name, types = {};
                if (typeof Object.create === "function") {
                    types = Object.create(null)
                }
                for (name in Syntax) {
                    if (Syntax.hasOwnProperty(name)) {
                        types[name] = Syntax[name]
                    }
                }
                if (typeof Object.freeze === "function") {
                    Object.freeze(types)
                }
                return types
            } ()
        })
    },
    {}],
    3 : [function(require, module, exports) {
        module.exports = require("./lib/inherit")
    },
    {
        "./lib/inherit": 4
    }],
    4 : [function(require, module, exports) { (function(global) {
            var hasIntrospection = function() {
                "_"
            }.toString().indexOf("_") > -1,
            emptyBase = function() {},
            hasOwnProperty = Object.prototype.hasOwnProperty,
            objCreate = Object.create ||
            function(ptp) {
                var inheritance = function() {};
                inheritance.prototype = ptp;
                return new inheritance
            },
            objKeys = Object.keys ||
            function(obj) {
                var res = [];
                for (var i in obj) {
                    hasOwnProperty.call(obj, i) && res.push(i)
                }
                return res
            },
            extend = function(o1, o2) {
                for (var i in o2) {
                    hasOwnProperty.call(o2, i) && (o1[i] = o2[i])
                }
                return o1
            },
            toStr = Object.prototype.toString,
            isArray = Array.isArray ||
            function(obj) {
                return toStr.call(obj) === "[object Array]"
            },
            isFunction = function(obj) {
                return toStr.call(obj) === "[object Function]"
            },
            noOp = function() {},
            needCheckProps = true,
            testPropObj = {
                toString: ""
            };
            for (var i in testPropObj) {
                testPropObj.hasOwnProperty(i) && (needCheckProps = false)
            }
            var specProps = needCheckProps ? ["toString", "valueOf"] : null;
            function getPropList(obj) {
                var res = objKeys(obj);
                if (needCheckProps) {
                    var specProp, i = 0;
                    while (specProp = specProps[i++]) {
                        obj.hasOwnProperty(specProp) && res.push(specProp)
                    }
                }
                return res
            }
            function override(base, res, add) {
                var addList = getPropList(add),
                j = 0,
                len = addList.length,
                name,
                prop;
                while (j < len) {
                    if ((name = addList[j++]) === "__self") {
                        continue
                    }
                    prop = add[name];
                    if (isFunction(prop) && (!hasIntrospection || prop.toString().indexOf(".__base") > -1)) {
                        res[name] = function(name, prop) {
                            var baseMethod = base[name] ? base[name] : name === "__constructor" ? res.__self.__parent: noOp;
                            return function() {
                                var baseSaved = this.__base;
                                this.__base = baseMethod;
                                var res = prop.apply(this, arguments);
                                this.__base = baseSaved;
                                return res
                            }
                        } (name, prop)
                    } else {
                        res[name] = prop
                    }
                }
            }
            function applyMixins(mixins, res) {
                var i = 1,
                mixin;
                while (mixin = mixins[i++]) {
                    res ? isFunction(mixin) ? inherit.self(res, mixin.prototype, mixin) : inherit.self(res, mixin) : res = isFunction(mixin) ? inherit(mixins[0], mixin.prototype, mixin) : inherit(mixins[0], mixin)
                }
                return res || mixins[0]
            }
            function inherit() {
                var args = arguments,
                withMixins = isArray(args[0]),
                hasBase = withMixins || isFunction(args[0]),
                base = hasBase ? withMixins ? applyMixins(args[0]) : args[0] : emptyBase,
                props = args[hasBase ? 1 : 0] || {},
                staticProps = args[hasBase ? 2 : 1],
                res = props.__constructor || hasBase && base.prototype.__constructor ?
                function() {
                    return this.__constructor.apply(this, arguments)
                }: hasBase ?
                function() {
                    return base.apply(this, arguments)
                }: function() {};
                if (!hasBase) {
                    res.prototype = props;
                    res.prototype.__self = res.prototype.constructor = res;
                    return extend(res, staticProps)
                }
                extend(res, base);
                res.__parent = base;
                var basePtp = base.prototype,
                resPtp = res.prototype = objCreate(basePtp);
                resPtp.__self = resPtp.constructor = res;
                props && override(basePtp, resPtp, props);
                staticProps && override(base, res, staticProps);
                return res
            }
            inherit.self = function() {
                var args = arguments,
                withMixins = isArray(args[0]),
                base = withMixins ? applyMixins(args[0], args[0][0]) : args[0],
                props = args[1],
                staticProps = args[2],
                basePtp = base.prototype;
                props && override(basePtp, basePtp, props);
                staticProps && override(base, base, staticProps);
                return base
            };
            var defineAsGlobal = true;
            if (typeof exports === "object") {
                module.exports = inherit;
                defineAsGlobal = false
            }
            if (typeof modules === "object") {
                modules.define("inherit",
                function(provide) {
                    provide(inherit)
                });
                defineAsGlobal = false
            }
            if (typeof define === "function") {
                define(function(require, exports, module) {
                    module.exports = inherit
                });
                defineAsGlobal = false
            }
            defineAsGlobal && (global.inherit = inherit)
        })(this)
    },
    {}],
    5 : [function(require, module, exports) {
        "use strict";
        var yaml = require("./lib/js-yaml.js");
        module.exports = yaml
    },
    {
        "./lib/js-yaml.js": 6
    }],
    6 : [function(require, module, exports) {
        "use strict";
        var loader = require("./js-yaml/loader");
        var dumper = require("./js-yaml/dumper");
        function deprecated(name) {
            return function() {
                throw new Error("Function " + name + " is deprecated and cannot be used.")
            }
        }
        module.exports.Type = require("./js-yaml/type");
        module.exports.Schema = require("./js-yaml/schema");
        module.exports.FAILSAFE_SCHEMA = require("./js-yaml/schema/failsafe");
        module.exports.JSON_SCHEMA = require("./js-yaml/schema/json");
        module.exports.CORE_SCHEMA = require("./js-yaml/schema/core");
        module.exports.DEFAULT_SAFE_SCHEMA = require("./js-yaml/schema/default_safe");
        module.exports.DEFAULT_FULL_SCHEMA = require("./js-yaml/schema/default_full");
        module.exports.load = loader.load;
        module.exports.loadAll = loader.loadAll;
        module.exports.safeLoad = loader.safeLoad;
        module.exports.safeLoadAll = loader.safeLoadAll;
        module.exports.dump = dumper.dump;
        module.exports.safeDump = dumper.safeDump;
        module.exports.YAMLException = require("./js-yaml/exception");
        module.exports.MINIMAL_SCHEMA = require("./js-yaml/schema/failsafe");
        module.exports.SAFE_SCHEMA = require("./js-yaml/schema/default_safe");
        module.exports.DEFAULT_SCHEMA = require("./js-yaml/schema/default_full");
        module.exports.scan = deprecated("scan");
        module.exports.parse = deprecated("parse");
        module.exports.compose = deprecated("compose");
        module.exports.addConstructor = deprecated("addConstructor")
    },
    {
        "./js-yaml/dumper": 8,
        "./js-yaml/exception": 9,
        "./js-yaml/loader": 10,
        "./js-yaml/schema": 12,
        "./js-yaml/schema/core": 13,
        "./js-yaml/schema/default_full": 14,
        "./js-yaml/schema/default_safe": 15,
        "./js-yaml/schema/failsafe": 16,
        "./js-yaml/schema/json": 17,
        "./js-yaml/type": 18
    }],
    7 : [function(require, module, exports) {
        "use strict";
        function isNothing(subject) {
            return typeof subject === "undefined" || null === subject
        }
        function isObject(subject) {
            return typeof subject === "object" && null !== subject
        }
        function toArray(sequence) {
            if (Array.isArray(sequence)) {
                return sequence
            } else if (isNothing(sequence)) {
                return []
            }
            return [sequence]
        }
        function extend(target, source) {
            var index, length, key, sourceKeys;
            if (source) {
                sourceKeys = Object.keys(source);
                for (index = 0, length = sourceKeys.length; index < length; index += 1) {
                    key = sourceKeys[index];
                    target[key] = source[key]
                }
            }
            return target
        }
        function repeat(string, count) {
            var result = "",
            cycle;
            for (cycle = 0; cycle < count; cycle += 1) {
                result += string
            }
            return result
        }
        function isNegativeZero(number) {
            return 0 === number && Number.NEGATIVE_INFINITY === 1 / number
        }
        module.exports.isNothing = isNothing;
        module.exports.isObject = isObject;
        module.exports.toArray = toArray;
        module.exports.repeat = repeat;
        module.exports.isNegativeZero = isNegativeZero;
        module.exports.extend = extend
    },
    {}],
    8 : [function(require, module, exports) {
        "use strict";
        var common = require("./common");
        var YAMLException = require("./exception");
        var DEFAULT_FULL_SCHEMA = require("./schema/default_full");
        var DEFAULT_SAFE_SCHEMA = require("./schema/default_safe");
        var _toString = Object.prototype.toString;
        var _hasOwnProperty = Object.prototype.hasOwnProperty;
        var CHAR_TAB = 9;
        var CHAR_LINE_FEED = 10;
        var CHAR_CARRIAGE_RETURN = 13;
        var CHAR_SPACE = 32;
        var CHAR_EXCLAMATION = 33;
        var CHAR_DOUBLE_QUOTE = 34;
        var CHAR_SHARP = 35;
        var CHAR_PERCENT = 37;
        var CHAR_AMPERSAND = 38;
        var CHAR_SINGLE_QUOTE = 39;
        var CHAR_ASTERISK = 42;
        var CHAR_COMMA = 44;
        var CHAR_MINUS = 45;
        var CHAR_COLON = 58;
        var CHAR_GREATER_THAN = 62;
        var CHAR_QUESTION = 63;
        var CHAR_COMMERCIAL_AT = 64;
        var CHAR_LEFT_SQUARE_BRACKET = 91;
        var CHAR_RIGHT_SQUARE_BRACKET = 93;
        var CHAR_GRAVE_ACCENT = 96;
        var CHAR_LEFT_CURLY_BRACKET = 123;
        var CHAR_VERTICAL_LINE = 124;
        var CHAR_RIGHT_CURLY_BRACKET = 125;
        var ESCAPE_SEQUENCES = {};
        ESCAPE_SEQUENCES[0] = "\\0";
        ESCAPE_SEQUENCES[7] = "\\a";
        ESCAPE_SEQUENCES[8] = "\\b";
        ESCAPE_SEQUENCES[9] = "\\t";
        ESCAPE_SEQUENCES[10] = "\\n";
        ESCAPE_SEQUENCES[11] = "\\v";
        ESCAPE_SEQUENCES[12] = "\\f";
        ESCAPE_SEQUENCES[13] = "\\r";
        ESCAPE_SEQUENCES[27] = "\\e";
        ESCAPE_SEQUENCES[34] = '\\"';
        ESCAPE_SEQUENCES[92] = "\\\\";
        ESCAPE_SEQUENCES[133] = "\\N";
        ESCAPE_SEQUENCES[160] = "\\_";
        ESCAPE_SEQUENCES[8232] = "\\L";
        ESCAPE_SEQUENCES[8233] = "\\P";
        var DEPRECATED_BOOLEANS_SYNTAX = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"];
        function compileStyleMap(schema, map) {
            var result, keys, index, length, tag, style, type;
            if (null === map) {
                return {}
            }
            result = {};
            keys = Object.keys(map);
            for (index = 0, length = keys.length; index < length; index += 1) {
                tag = keys[index];
                style = String(map[tag]);
                if ("!!" === tag.slice(0, 2)) {
                    tag = "tag:yaml.org,2002:" + tag.slice(2)
                }
                type = schema.compiledTypeMap[tag];
                if (type && _hasOwnProperty.call(type.styleAliases, style)) {
                    style = type.styleAliases[style]
                }
                result[tag] = style
            }
            return result
        }
        function encodeHex(character) {
            var string, handle, length;
            string = character.toString(16).toUpperCase();
            if (character <= 255) {
                handle = "x";
                length = 2
            } else if (character <= 65535) {
                handle = "u";
                length = 4
            } else if (character <= 4294967295) {
                handle = "U";
                length = 8
            } else {
                throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF")
            }
            return "\\" + handle + common.repeat("0", length - string.length) + string
        }
        function State(options) {
            this.schema = options["schema"] || DEFAULT_FULL_SCHEMA;
            this.indent = Math.max(1, options["indent"] || 2);
            this.skipInvalid = options["skipInvalid"] || false;
            this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
            this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
            this.sortKeys = options["sortKeys"] || false;
            this.lineWidth = options["lineWidth"] || 80;
            this.implicitTypes = this.schema.compiledImplicit;
            this.explicitTypes = this.schema.compiledExplicit;
            this.tag = null;
            this.result = "";
            this.duplicates = [];
            this.usedDuplicates = null
        }
        function indentString(string, spaces) {
            var ind = common.repeat(" ", spaces),
            position = 0,
            next = -1,
            result = "",
            line,
            length = string.length;
            while (position < length) {
                next = string.indexOf("\n", position);
                if (next === -1) {
                    line = string.slice(position);
                    position = length
                } else {
                    line = string.slice(position, next + 1);
                    position = next + 1
                }
                if (line.length && line !== "\n") {
                    result += ind
                }
                result += line
            }
            return result
        }
        function generateNextLine(state, level) {
            return "\n" + common.repeat(" ", state.indent * level)
        }
        function testImplicitResolving(state, str) {
            var index, length, type;
            for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
                type = state.implicitTypes[index];
                if (type.resolve(str)) {
                    return true
                }
            }
            return false
        }
        function StringBuilder(source) {
            this.source = source;
            this.result = "";
            this.checkpoint = 0
        }
        StringBuilder.prototype.takeUpTo = function(position) {
            var er;
            if (position < this.checkpoint) {
                er = new Error("position should be > checkpoint");
                er.position = position;
                er.checkpoint = this.checkpoint;
                throw er
            }
            this.result += this.source.slice(this.checkpoint, position);
            this.checkpoint = position;
            return this
        };
        StringBuilder.prototype.escapeChar = function() {
            var character, esc;
            character = this.source.charCodeAt(this.checkpoint);
            esc = ESCAPE_SEQUENCES[character] || encodeHex(character);
            this.result += esc;
            this.checkpoint += 1;
            return this
        };
        StringBuilder.prototype.finish = function() {
            if (this.source.length > this.checkpoint) {
                this.takeUpTo(this.source.length)
            }
        };
        function writeScalar(state, object, level, iskey) {
            var simple, first, spaceWrap, folded, literal, single, double, sawLineFeed, linePosition, longestLine, indent, max, character, position, escapeSeq, hexEsc, previous, lineLength, modifier, trailingLineBreaks, result;
            if (0 === object.length) {
                state.dump = "''";
                return
            }
            if ( - 1 !== DEPRECATED_BOOLEANS_SYNTAX.indexOf(object)) {
                state.dump = "'" + object + "'";
                return
            }
            simple = true;
            first = object.length ? object.charCodeAt(0) : 0;
            spaceWrap = CHAR_SPACE === first || CHAR_SPACE === object.charCodeAt(object.length - 1);
            if (CHAR_MINUS === first || CHAR_QUESTION === first || CHAR_COMMERCIAL_AT === first || CHAR_GRAVE_ACCENT === first) {
                simple = false
            }
            if (spaceWrap) {
                simple = false;
                folded = false;
                literal = false
            } else {
                folded = !iskey;
                literal = !iskey
            }
            single = true;
            double = new StringBuilder(object);
            sawLineFeed = false;
            linePosition = 0;
            longestLine = 0;
            indent = state.indent * level;
            max = state.lineWidth;
            if (max === -1) {
                max = 9007199254740991
            }
            if (indent < 40) {
                max -= indent
            } else {
                max = 40
            }
            for (position = 0; position < object.length; position++) {
                character = object.charCodeAt(position);
                if (simple) {
                    if (!simpleChar(character)) {
                        simple = false
                    } else {
                        continue
                    }
                }
                if (single && character === CHAR_SINGLE_QUOTE) {
                    single = false
                }
                escapeSeq = ESCAPE_SEQUENCES[character];
                hexEsc = needsHexEscape(character);
                if (!escapeSeq && !hexEsc) {
                    continue
                }
                if (character !== CHAR_LINE_FEED && character !== CHAR_DOUBLE_QUOTE && character !== CHAR_SINGLE_QUOTE) {
                    folded = false;
                    literal = false
                } else if (character === CHAR_LINE_FEED) {
                    sawLineFeed = true;
                    single = false;
                    if (position > 0) {
                        previous = object.charCodeAt(position - 1);
                        if (previous === CHAR_SPACE) {
                            literal = false;
                            folded = false
                        }
                    }
                    if (folded) {
                        lineLength = position - linePosition;
                        linePosition = position;
                        if (lineLength > longestLine) {
                            longestLine = lineLength
                        }
                    }
                }
                if (character !== CHAR_DOUBLE_QUOTE) {
                    single = false
                }
                double.takeUpTo(position);
                double.escapeChar()
            }
            if (simple && testImplicitResolving(state, object)) {
                simple = false
            }
            modifier = "";
            if (folded || literal) {
                trailingLineBreaks = 0;
                if (object.charCodeAt(object.length - 1) === CHAR_LINE_FEED) {
                    trailingLineBreaks += 1;
                    if (object.charCodeAt(object.length - 2) === CHAR_LINE_FEED) {
                        trailingLineBreaks += 1
                    }
                }
                if (trailingLineBreaks === 0) {
                    modifier = "-"
                } else if (trailingLineBreaks === 2) {
                    modifier = "+"
                }
            }
            if (literal && longestLine < max) {
                folded = false
            }
            if (!sawLineFeed) {
                literal = false
            }
            if (simple) {
                state.dump = object
            } else if (single) {
                state.dump = "'" + object + "'"
            } else if (folded) {
                result = fold(object, max);
                state.dump = ">" + modifier + "\n" + indentString(result, indent)
            } else if (literal) {
                if (!modifier) {
                    object = object.replace(/\n$/, "")
                }
                state.dump = "|" + modifier + "\n" + indentString(object, indent)
            } else if (double) {
                double.finish();
                state.dump = '"' + double.result + '"'
            } else {
                throw new Error("Failed to dump scalar value")
            }
            return
        }
        function fold(object, max) {
            var result = "",
            position = 0,
            length = object.length,
            trailing = /\n+$/.exec(object),
            newLine;
            if (trailing) {
                length = trailing.index + 1
            }
            while (position < length) {
                newLine = object.indexOf("\n", position);
                if (newLine > length || newLine === -1) {
                    if (result) {
                        result += "\n\n"
                    }
                    result += foldLine(object.slice(position, length), max);
                    position = length
                } else {
                    if (result) {
                        result += "\n\n"
                    }
                    result += foldLine(object.slice(position, newLine), max);
                    position = newLine + 1
                }
            }
            if (trailing && trailing[0] !== "\n") {
                result += trailing[0]
            }
            return result
        }
        function foldLine(line, max) {
            if (line === "") {
                return line
            }
            var foldRe = /[^\s] [^\s]/g,
            result = "",
            prevMatch = 0,
            foldStart = 0,
            match = foldRe.exec(line),
            index,
            foldEnd,
            folded;
            while (match) {
                index = match.index;
                if (index - foldStart > max) {
                    if (prevMatch !== foldStart) {
                        foldEnd = prevMatch
                    } else {
                        foldEnd = index
                    }
                    if (result) {
                        result += "\n"
                    }
                    folded = line.slice(foldStart, foldEnd);
                    result += folded;
                    foldStart = foldEnd + 1
                }
                prevMatch = index + 1;
                match = foldRe.exec(line)
            }
            if (result) {
                result += "\n"
            }
            if (foldStart !== prevMatch && line.length - foldStart > max) {
                result += line.slice(foldStart, prevMatch) + "\n" + line.slice(prevMatch + 1)
            } else {
                result += line.slice(foldStart)
            }
            return result
        }
        function simpleChar(character) {
            return CHAR_TAB !== character && CHAR_LINE_FEED !== character && CHAR_CARRIAGE_RETURN !== character && CHAR_COMMA !== character && CHAR_LEFT_SQUARE_BRACKET !== character && CHAR_RIGHT_SQUARE_BRACKET !== character && CHAR_LEFT_CURLY_BRACKET !== character && CHAR_RIGHT_CURLY_BRACKET !== character && CHAR_SHARP !== character && CHAR_AMPERSAND !== character && CHAR_ASTERISK !== character && CHAR_EXCLAMATION !== character && CHAR_VERTICAL_LINE !== character && CHAR_GREATER_THAN !== character && CHAR_SINGLE_QUOTE !== character && CHAR_DOUBLE_QUOTE !== character && CHAR_PERCENT !== character && CHAR_COLON !== character && !ESCAPE_SEQUENCES[character] && !needsHexEscape(character)
        }
        function needsHexEscape(character) {
            return ! (32 <= character && character <= 126 || 133 === character || 160 <= character && character <= 55295 || 57344 <= character && character <= 65533 || 65536 <= character && character <= 1114111)
        }
        function writeFlowSequence(state, level, object) {
            var _result = "",
            _tag = state.tag,
            index, length;
            for (index = 0, length = object.length; index < length; index += 1) {
                if (writeNode(state, level, object[index], false, false)) {
                    if (0 !== index) {
                        _result += ", "
                    }
                    _result += state.dump
                }
            }
            state.tag = _tag;
            state.dump = "[" + _result + "]"
        }
        function writeBlockSequence(state, level, object, compact) {
            var _result = "",
            _tag = state.tag,
            index, length;
            for (index = 0, length = object.length; index < length; index += 1) {
                if (writeNode(state, level + 1, object[index], true, true)) {
                    if (!compact || 0 !== index) {
                        _result += generateNextLine(state, level)
                    }
                    _result += "- " + state.dump
                }
            }
            state.tag = _tag;
            state.dump = _result || "[]"
        }
        function writeFlowMapping(state, level, object) {
            var _result = "",
            _tag = state.tag,
            objectKeyList = Object.keys(object),
            index,
            length,
            objectKey,
            objectValue,
            pairBuffer;
            for (index = 0, length = objectKeyList.length; index < length; index += 1) {
                pairBuffer = "";
                if (0 !== index) {
                    pairBuffer += ", "
                }
                objectKey = objectKeyList[index];
                objectValue = object[objectKey];
                if (!writeNode(state, level, objectKey, false, false)) {
                    continue
                }
                if (state.dump.length > 1024) {
                    pairBuffer += "? "
                }
                pairBuffer += state.dump + ": ";
                if (!writeNode(state, level, objectValue, false, false)) {
                    continue
                }
                pairBuffer += state.dump;
                _result += pairBuffer
            }
            state.tag = _tag;
            state.dump = "{" + _result + "}"
        }
        function writeBlockMapping(state, level, object, compact) {
            var _result = "",
            _tag = state.tag,
            objectKeyList = Object.keys(object),
            index,
            length,
            objectKey,
            objectValue,
            explicitPair,
            pairBuffer;
            if (state.sortKeys === true) {
                objectKeyList.sort()
            } else if (typeof state.sortKeys === "function") {
                objectKeyList.sort(state.sortKeys)
            } else if (state.sortKeys) {
                throw new YAMLException("sortKeys must be a boolean or a function")
            }
            for (index = 0, length = objectKeyList.length; index < length; index += 1) {
                pairBuffer = "";
                if (!compact || 0 !== index) {
                    pairBuffer += generateNextLine(state, level)
                }
                objectKey = objectKeyList[index];
                objectValue = object[objectKey];
                if (!writeNode(state, level + 1, objectKey, true, true, true)) {
                    continue
                }
                explicitPair = null !== state.tag && "?" !== state.tag || state.dump && state.dump.length > 1024;
                if (explicitPair) {
                    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                        pairBuffer += "?"
                    } else {
                        pairBuffer += "? "
                    }
                }
                pairBuffer += state.dump;
                if (explicitPair) {
                    pairBuffer += generateNextLine(state, level)
                }
                if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
                    continue
                }
                if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                    pairBuffer += ":"
                } else {
                    pairBuffer += ": "
                }
                pairBuffer += state.dump;
                _result += pairBuffer
            }
            state.tag = _tag;
            state.dump = _result || "{}"
        }
        function detectType(state, object, explicit) {
            var _result, typeList, index, length, type, style;
            typeList = explicit ? state.explicitTypes: state.implicitTypes;
            for (index = 0, length = typeList.length; index < length; index += 1) {
                type = typeList[index];
                if ((type.instanceOf || type.predicate) && (!type.instanceOf || "object" === typeof object && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {
                    state.tag = explicit ? type.tag: "?";
                    if (type.represent) {
                        style = state.styleMap[type.tag] || type.defaultStyle;
                        if ("[object Function]" === _toString.call(type.represent)) {
                            _result = type.represent(object, style)
                        } else if (_hasOwnProperty.call(type.represent, style)) {
                            _result = type.represent[style](object, style)
                        } else {
                            throw new YAMLException("!<" + type.tag + '> tag resolver accepts not "' + style + '" style')
                        }
                        state.dump = _result
                    }
                    return true
                }
            }
            return false
        }
        function writeNode(state, level, object, block, compact, iskey) {
            state.tag = null;
            state.dump = object;
            if (!detectType(state, object, false)) {
                detectType(state, object, true)
            }
            var type = _toString.call(state.dump);
            if (block) {
                block = 0 > state.flowLevel || state.flowLevel > level
            }
            var objectOrArray = "[object Object]" === type || "[object Array]" === type,
            duplicateIndex, duplicate;
            if (objectOrArray) {
                duplicateIndex = state.duplicates.indexOf(object);
                duplicate = duplicateIndex !== -1
            }
            if (null !== state.tag && "?" !== state.tag || duplicate || 2 !== state.indent && level > 0) {
                compact = false
            }
            if (duplicate && state.usedDuplicates[duplicateIndex]) {
                state.dump = "*ref_" + duplicateIndex
            } else {
                if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
                    state.usedDuplicates[duplicateIndex] = true
                }
                if ("[object Object]" === type) {
                    if (block && 0 !== Object.keys(state.dump).length) {
                        writeBlockMapping(state, level, state.dump, compact);
                        if (duplicate) {
                            state.dump = "&ref_" + duplicateIndex + state.dump
                        }
                    } else {
                        writeFlowMapping(state, level, state.dump);
                        if (duplicate) {
                            state.dump = "&ref_" + duplicateIndex + " " + state.dump
                        }
                    }
                } else if ("[object Array]" === type) {
                    if (block && 0 !== state.dump.length) {
                        writeBlockSequence(state, level, state.dump, compact);
                        if (duplicate) {
                            state.dump = "&ref_" + duplicateIndex + state.dump
                        }
                    } else {
                        writeFlowSequence(state, level, state.dump);
                        if (duplicate) {
                            state.dump = "&ref_" + duplicateIndex + " " + state.dump
                        }
                    }
                } else if ("[object String]" === type) {
                    if ("?" !== state.tag) {
                        writeScalar(state, state.dump, level, iskey)
                    }
                } else {
                    if (state.skipInvalid) {
                        return false
                    }
                    throw new YAMLException("unacceptable kind of an object to dump " + type)
                }
                if (null !== state.tag && "?" !== state.tag) {
                    state.dump = "!<" + state.tag + "> " + state.dump
                }
            }
            return true
        }
        function getDuplicateReferences(object, state) {
            var objects = [],
            duplicatesIndexes = [],
            index,
            length;
            inspectNode(object, objects, duplicatesIndexes);
            for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
                state.duplicates.push(objects[duplicatesIndexes[index]])
            }
            state.usedDuplicates = new Array(length)
        }
        function inspectNode(object, objects, duplicatesIndexes) {
            var objectKeyList, index, length;
            if (null !== object && "object" === typeof object) {
                index = objects.indexOf(object);
                if ( - 1 !== index) {
                    if ( - 1 === duplicatesIndexes.indexOf(index)) {
                        duplicatesIndexes.push(index)
                    }
                } else {
                    objects.push(object);
                    if (Array.isArray(object)) {
                        for (index = 0, length = object.length; index < length; index += 1) {
                            inspectNode(object[index], objects, duplicatesIndexes)
                        }
                    } else {
                        objectKeyList = Object.keys(object);
                        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
                            inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes)
                        }
                    }
                }
            }
        }
        function dump(input, options) {
            options = options || {};
            var state = new State(options);
            getDuplicateReferences(input, state);
            if (writeNode(state, 0, input, true, true)) {
                return state.dump + "\n"
            }
            return ""
        }
        function safeDump(input, options) {
            return dump(input, common.extend({
                schema: DEFAULT_SAFE_SCHEMA
            },
            options))
        }
        module.exports.dump = dump;
        module.exports.safeDump = safeDump
    },
    {
        "./common": 7,
        "./exception": 9,
        "./schema/default_full": 14,
        "./schema/default_safe": 15
    }],
    9 : [function(require, module, exports) {
        "use strict";
        var inherits = require("inherit");
        function YAMLException(reason, mark) {
            Error.call(this);
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, this.constructor)
            } else {
                this.stack = (new Error).stack || ""
            }
            this.name = "YAMLException";
            this.reason = reason;
            this.mark = mark;
            this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : "")
        }
        inherits(YAMLException, Error);
        YAMLException.prototype.toString = function toString(compact) {
            var result = this.name + ": ";
            result += this.reason || "(unknown reason)";
            if (!compact && this.mark) {
                result += " " + this.mark.toString()
            }
            return result
        };
        module.exports = YAMLException
    },
    {
        inherit: 3
    }],
    10 : [function(require, module, exports) {
        "use strict";
        var common = require("./common");
        var YAMLException = require("./exception");
        var Mark = require("./mark");
        var DEFAULT_SAFE_SCHEMA = require("./schema/default_safe");
        var DEFAULT_FULL_SCHEMA = require("./schema/default_full");
        var _hasOwnProperty = Object.prototype.hasOwnProperty;
        var CONTEXT_FLOW_IN = 1;
        var CONTEXT_FLOW_OUT = 2;
        var CONTEXT_BLOCK_IN = 3;
        var CONTEXT_BLOCK_OUT = 4;
        var CHOMPING_CLIP = 1;
        var CHOMPING_STRIP = 2;
        var CHOMPING_KEEP = 3;
        var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
        var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
        var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
        var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
        var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
        function is_EOL(c) {
            return c === 10 || c === 13
        }
        function is_WHITE_SPACE(c) {
            return c === 9 || c === 32
        }
        function is_WS_OR_EOL(c) {
            return c === 9 || c === 32 || c === 10 || c === 13
        }
        function is_FLOW_INDICATOR(c) {
            return 44 === c || 91 === c || 93 === c || 123 === c || 125 === c
        }
        function fromHexCode(c) {
            var lc;
            if (48 <= c && c <= 57) {
                return c - 48
            }
            lc = c | 32;
            if (97 <= lc && lc <= 102) {
                return lc - 97 + 10
            }
            return - 1
        }
        function escapedHexLen(c) {
            if (c === 120) {
                return 2
            }
            if (c === 117) {
                return 4
            }
            if (c === 85) {
                return 8
            }
            return 0
        }
        function fromDecimalCode(c) {
            if (48 <= c && c <= 57) {
                return c - 48
            }
            return - 1
        }
        function simpleEscapeSequence(c) {
            return c === 48 ? "\x00": c === 97 ? "": c === 98 ? "\b": c === 116 ? "	": c === 9 ? "	": c === 110 ? "\n": c === 118 ? "\x0B": c === 102 ? "\f": c === 114 ? "\r": c === 101 ? "": c === 32 ? " ": c === 34 ? '"': c === 47 ? "/": c === 92 ? "\\": c === 78 ? "": c === 95 ? " ": c === 76 ? "\u2028": c === 80 ? "\u2029": ""
        }
        function charFromCodepoint(c) {
            if (c <= 65535) {
                return String.fromCharCode(c)
            }
            return String.fromCharCode((c - 65536 >> 10) + 55296, (c - 65536 & 1023) + 56320)
        }
        var simpleEscapeCheck = new Array(256);
        var simpleEscapeMap = new Array(256);
        for (var i = 0; i < 256; i++) {
            simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
            simpleEscapeMap[i] = simpleEscapeSequence(i)
        }
        function State(input, options) {
            this.input = input;
            this.filename = options["filename"] || null;
            this.schema = options["schema"] || DEFAULT_FULL_SCHEMA;
            this.onWarning = options["onWarning"] || null;
            this.legacy = options["legacy"] || false;
            this.implicitTypes = this.schema.compiledImplicit;
            this.typeMap = this.schema.compiledTypeMap;
            this.length = input.length;
            this.position = 0;
            this.line = 0;
            this.lineStart = 0;
            this.lineIndent = 0;
            this.documents = []
        }
        function generateError(state, message) {
            return new YAMLException(message, new Mark(state.filename, state.input, state.position, state.line, state.position - state.lineStart))
        }
        function throwError(state, message) {
            throw generateError(state, message)
        }
        function throwWarning(state, message) {
            if (state.onWarning) {
                state.onWarning.call(null, generateError(state, message))
            }
        }
        var directiveHandlers = {
            YAML: function handleYamlDirective(state, name, args) {
                var match, major, minor;
                if (null !== state.version) {
                    throwError(state, "duplication of %YAML directive")
                }
                if (1 !== args.length) {
                    throwError(state, "YAML directive accepts exactly one argument")
                }
                match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
                if (null === match) {
                    throwError(state, "ill-formed argument of the YAML directive")
                }
                major = parseInt(match[1], 10);
                minor = parseInt(match[2], 10);
                if (1 !== major) {
                    throwError(state, "unacceptable YAML version of the document")
                }
                state.version = args[0];
                state.checkLineBreaks = minor < 2;
                if (1 !== minor && 2 !== minor) {
                    throwWarning(state, "unsupported YAML version of the document")
                }
            },
            TAG: function handleTagDirective(state, name, args) {
                var handle, prefix;
                if (2 !== args.length) {
                    throwError(state, "TAG directive accepts exactly two arguments")
                }
                handle = args[0];
                prefix = args[1];
                if (!PATTERN_TAG_HANDLE.test(handle)) {
                    throwError(state, "ill-formed tag handle (first argument) of the TAG directive")
                }
                if (_hasOwnProperty.call(state.tagMap, handle)) {
                    throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle')
                }
                if (!PATTERN_TAG_URI.test(prefix)) {
                    throwError(state, "ill-formed tag prefix (second argument) of the TAG directive")
                }
                state.tagMap[handle] = prefix
            }
        };
        function captureSegment(state, start, end, checkJson) {
            var _position, _length, _character, _result;
            if (start < end) {
                _result = state.input.slice(start, end);
                if (checkJson) {
                    for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
                        _character = _result.charCodeAt(_position);
                        if (! (9 === _character || 32 <= _character && _character <= 1114111)) {
                            throwError(state, "expected valid JSON character")
                        }
                    }
                } else if (PATTERN_NON_PRINTABLE.test(_result)) {
                    throwError(state, "the stream contains non-printable characters")
                }
                state.result += _result
            }
        }
        function mergeMappings(state, destination, source) {
            var sourceKeys, key, index, quantity;
            if (!common.isObject(source)) {
                throwError(state, "cannot merge mappings; the provided source object is unacceptable")
            }
            sourceKeys = Object.keys(source);
            for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
                key = sourceKeys[index];
                if (!_hasOwnProperty.call(destination, key)) {
                    destination[key] = source[key]
                }
            }
        }
        function storeMappingPair(state, _result, keyTag, keyNode, valueNode) {
            var index, quantity;
            keyNode = String(keyNode);
            if (null === _result) {
                _result = {}
            }
            if ("tag:yaml.org,2002:merge" === keyTag) {
                if (Array.isArray(valueNode)) {
                    for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
                        mergeMappings(state, _result, valueNode[index])
                    }
                } else {
                    mergeMappings(state, _result, valueNode)
                }
            } else {
                _result[keyNode] = valueNode
            }
            return _result
        }
        function readLineBreak(state) {
            var ch;
            ch = state.input.charCodeAt(state.position);
            if (10 === ch) {
                state.position++
            } else if (13 === ch) {
                state.position++;
                if (10 === state.input.charCodeAt(state.position)) {
                    state.position++
                }
            } else {
                throwError(state, "a line break is expected")
            }
            state.line += 1;
            state.lineStart = state.position
        }
        function skipSeparationSpace(state, allowComments, checkIndent) {
            var lineBreaks = 0,
            ch = state.input.charCodeAt(state.position);
            while (0 !== ch) {
                while (is_WHITE_SPACE(ch)) {
                    ch = state.input.charCodeAt(++state.position)
                }
                if (allowComments && 35 === ch) {
                    do {
                        ch = state.input.charCodeAt(++state.position)
                    } while ( ch !== 10 && ch !== 13 && 0 !== ch )
                }
                if (is_EOL(ch)) {
                    readLineBreak(state);
                    ch = state.input.charCodeAt(state.position);
                    lineBreaks++;
                    state.lineIndent = 0;
                    while (32 === ch) {
                        state.lineIndent++;
                        ch = state.input.charCodeAt(++state.position)
                    }
                } else {
                    break
                }
            }
            if ( - 1 !== checkIndent && 0 !== lineBreaks && state.lineIndent < checkIndent) {
                throwWarning(state, "deficient indentation")
            }
            return lineBreaks
        }
        function testDocumentSeparator(state) {
            var _position = state.position,
            ch;
            ch = state.input.charCodeAt(_position);
            if ((45 === ch || 46 === ch) && state.input.charCodeAt(_position + 1) === ch && state.input.charCodeAt(_position + 2) === ch) {
                _position += 3;
                ch = state.input.charCodeAt(_position);
                if (ch === 0 || is_WS_OR_EOL(ch)) {
                    return true
                }
            }
            return false
        }
        function writeFoldedLines(state, count) {
            if (1 === count) {
                state.result += " "
            } else if (count > 1) {
                state.result += common.repeat("\n", count - 1)
            }
        }
        function readPlainScalar(state, nodeIndent, withinFlowCollection) {
            var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind,
            _result = state.result,
            ch;
            ch = state.input.charCodeAt(state.position);
            if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || 35 === ch || 38 === ch || 42 === ch || 33 === ch || 124 === ch || 62 === ch || 39 === ch || 34 === ch || 37 === ch || 64 === ch || 96 === ch) {
                return false
            }
            if (63 === ch || 45 === ch) {
                following = state.input.charCodeAt(state.position + 1);
                if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
                    return false
                }
            }
            state.kind = "scalar";
            state.result = "";
            captureStart = captureEnd = state.position;
            hasPendingContent = false;
            while (0 !== ch) {
                if (58 === ch) {
                    following = state.input.charCodeAt(state.position + 1);
                    if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
                        break
                    }
                } else if (35 === ch) {
                    preceding = state.input.charCodeAt(state.position - 1);
                    if (is_WS_OR_EOL(preceding)) {
                        break
                    }
                } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
                    break
                } else if (is_EOL(ch)) {
                    _line = state.line;
                    _lineStart = state.lineStart;
                    _lineIndent = state.lineIndent;
                    skipSeparationSpace(state, false, -1);
                    if (state.lineIndent >= nodeIndent) {
                        hasPendingContent = true;
                        ch = state.input.charCodeAt(state.position);
                        continue
                    } else {
                        state.position = captureEnd;
                        state.line = _line;
                        state.lineStart = _lineStart;
                        state.lineIndent = _lineIndent;
                        break
                    }
                }
                if (hasPendingContent) {
                    captureSegment(state, captureStart, captureEnd, false);
                    writeFoldedLines(state, state.line - _line);
                    captureStart = captureEnd = state.position;
                    hasPendingContent = false
                }
                if (!is_WHITE_SPACE(ch)) {
                    captureEnd = state.position + 1
                }
                ch = state.input.charCodeAt(++state.position)
            }
            captureSegment(state, captureStart, captureEnd, false);
            if (state.result) {
                return true
            }
            state.kind = _kind;
            state.result = _result;
            return false
        }
        function readSingleQuotedScalar(state, nodeIndent) {
            var ch, captureStart, captureEnd;
            ch = state.input.charCodeAt(state.position);
            if (39 !== ch) {
                return false
            }
            state.kind = "scalar";
            state.result = "";
            state.position++;
            captureStart = captureEnd = state.position;
            while (0 !== (ch = state.input.charCodeAt(state.position))) {
                if (39 === ch) {
                    captureSegment(state, captureStart, state.position, true);
                    ch = state.input.charCodeAt(++state.position);
                    if (39 === ch) {
                        captureStart = captureEnd = state.position;
                        state.position++
                    } else {
                        return true
                    }
                } else if (is_EOL(ch)) {
                    captureSegment(state, captureStart, captureEnd, true);
                    writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
                    captureStart = captureEnd = state.position
                } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
                    throwError(state, "unexpected end of the document within a single quoted scalar")
                } else {
                    state.position++;
                    captureEnd = state.position
                }
            }
            throwError(state, "unexpected end of the stream within a single quoted scalar")
        }
        function readDoubleQuotedScalar(state, nodeIndent) {
            var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
            ch = state.input.charCodeAt(state.position);
            if (34 !== ch) {
                return false
            }
            state.kind = "scalar";
            state.result = "";
            state.position++;
            captureStart = captureEnd = state.position;
            while (0 !== (ch = state.input.charCodeAt(state.position))) {
                if (34 === ch) {
                    captureSegment(state, captureStart, state.position, true);
                    state.position++;
                    return true
                } else if (92 === ch) {
                    captureSegment(state, captureStart, state.position, true);
                    ch = state.input.charCodeAt(++state.position);
                    if (is_EOL(ch)) {
                        skipSeparationSpace(state, false, nodeIndent)
                    } else if (ch < 256 && simpleEscapeCheck[ch]) {
                        state.result += simpleEscapeMap[ch];
                        state.position++
                    } else if ((tmp = escapedHexLen(ch)) > 0) {
                        hexLength = tmp;
                        hexResult = 0;
                        for (; hexLength > 0; hexLength--) {
                            ch = state.input.charCodeAt(++state.position);
                            if ((tmp = fromHexCode(ch)) >= 0) {
                                hexResult = (hexResult << 4) + tmp
                            } else {
                                throwError(state, "expected hexadecimal character")
                            }
                        }
                        state.result += charFromCodepoint(hexResult);
                        state.position++
                    } else {
                        throwError(state, "unknown escape sequence")
                    }
                    captureStart = captureEnd = state.position
                } else if (is_EOL(ch)) {
                    captureSegment(state, captureStart, captureEnd, true);
                    writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
                    captureStart = captureEnd = state.position
                } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
                    throwError(state, "unexpected end of the document within a double quoted scalar")
                } else {
                    state.position++;
                    captureEnd = state.position
                }
            }
            throwError(state, "unexpected end of the stream within a double quoted scalar")
        }
        function readFlowCollection(state, nodeIndent) {
            var readNext = true,
            _line, _tag = state.tag,
            _result, _anchor = state.anchor,
            following, terminator, isPair, isExplicitPair, isMapping, keyNode, keyTag, valueNode, ch;
            ch = state.input.charCodeAt(state.position);
            if (ch === 91) {
                terminator = 93;
                isMapping = false;
                _result = []
            } else if (ch === 123) {
                terminator = 125;
                isMapping = true;
                _result = {}
            } else {
                return false
            }
            if (null !== state.anchor) {
                state.anchorMap[state.anchor] = _result
            }
            ch = state.input.charCodeAt(++state.position);
            while (0 !== ch) {
                skipSeparationSpace(state, true, nodeIndent);
                ch = state.input.charCodeAt(state.position);
                if (ch === terminator) {
                    state.position++;
                    state.tag = _tag;
                    state.anchor = _anchor;
                    state.kind = isMapping ? "mapping": "sequence";
                    state.result = _result;
                    return true
                } else if (!readNext) {
                    throwError(state, "missed comma between flow collection entries")
                }
                keyTag = keyNode = valueNode = null;
                isPair = isExplicitPair = false;
                if (63 === ch) {
                    following = state.input.charCodeAt(state.position + 1);
                    if (is_WS_OR_EOL(following)) {
                        isPair = isExplicitPair = true;
                        state.position++;
                        skipSeparationSpace(state, true, nodeIndent)
                    }
                }
                _line = state.line;
                composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
                keyTag = state.tag;
                keyNode = state.result;
                skipSeparationSpace(state, true, nodeIndent);
                ch = state.input.charCodeAt(state.position);
                if ((isExplicitPair || state.line === _line) && 58 === ch) {
                    isPair = true;
                    ch = state.input.charCodeAt(++state.position);
                    skipSeparationSpace(state, true, nodeIndent);
                    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
                    valueNode = state.result
                }
                if (isMapping) {
                    storeMappingPair(state, _result, keyTag, keyNode, valueNode)
                } else if (isPair) {
                    _result.push(storeMappingPair(state, null, keyTag, keyNode, valueNode))
                } else {
                    _result.push(keyNode)
                }
                skipSeparationSpace(state, true, nodeIndent);
                ch = state.input.charCodeAt(state.position);
                if (44 === ch) {
                    readNext = true;
                    ch = state.input.charCodeAt(++state.position)
                } else {
                    readNext = false
                }
            }
            throwError(state, "unexpected end of the stream within a flow collection")
        }
        function readBlockScalar(state, nodeIndent) {
            var captureStart, folding, chomping = CHOMPING_CLIP,
            detectedIndent = false,
            textIndent = nodeIndent,
            emptyLines = 0,
            atMoreIndented = false,
            tmp, ch;
            ch = state.input.charCodeAt(state.position);
            if (ch === 124) {
                folding = false
            } else if (ch === 62) {
                folding = true
            } else {
                return false
            }
            state.kind = "scalar";
            state.result = "";
            while (0 !== ch) {
                ch = state.input.charCodeAt(++state.position);
                if (43 === ch || 45 === ch) {
                    if (CHOMPING_CLIP === chomping) {
                        chomping = 43 === ch ? CHOMPING_KEEP: CHOMPING_STRIP
                    } else {
                        throwError(state, "repeat of a chomping mode identifier")
                    }
                } else if ((tmp = fromDecimalCode(ch)) >= 0) {
                    if (tmp === 0) {
                        throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one")
                    } else if (!detectedIndent) {
                        textIndent = nodeIndent + tmp - 1;
                        detectedIndent = true
                    } else {
                        throwError(state, "repeat of an indentation width identifier")
                    }
                } else {
                    break
                }
            }
            if (is_WHITE_SPACE(ch)) {
                do {
                    ch = state.input.charCodeAt(++state.position)
                } while ( is_WHITE_SPACE ( ch ));
                if (35 === ch) {
                    do {
                        ch = state.input.charCodeAt(++state.position)
                    } while (! is_EOL ( ch ) && 0 !== ch)
                }
            }
            while (0 !== ch) {
                readLineBreak(state);
                state.lineIndent = 0;
                ch = state.input.charCodeAt(state.position);
                while ((!detectedIndent || state.lineIndent < textIndent) && 32 === ch) {
                    state.lineIndent++;
                    ch = state.input.charCodeAt(++state.position)
                }
                if (!detectedIndent && state.lineIndent > textIndent) {
                    textIndent = state.lineIndent
                }
                if (is_EOL(ch)) {
                    emptyLines++;
                    continue
                }
                if (state.lineIndent < textIndent) {
                    if (chomping === CHOMPING_KEEP) {
                        state.result += common.repeat("\n", emptyLines)
                    } else if (chomping === CHOMPING_CLIP) {
                        if (detectedIndent) {
                            state.result += "\n"
                        }
                    }
                    break
                }
                if (folding) {
                    if (is_WHITE_SPACE(ch)) {
                        atMoreIndented = true;
                        state.result += common.repeat("\n", emptyLines + 1)
                    } else if (atMoreIndented) {
                        atMoreIndented = false;
                        state.result += common.repeat("\n", emptyLines + 1)
                    } else if (0 === emptyLines) {
                        if (detectedIndent) {
                            state.result += " "
                        }
                    } else {
                        state.result += common.repeat("\n", emptyLines);
                    }
                } else if (detectedIndent) {
                    state.result += common.repeat("\n", emptyLines + 1)
                } else {
                    state.result += common.repeat("\n", emptyLines)
                }
                detectedIndent = true;
                emptyLines = 0;
                captureStart = state.position;
                while (!is_EOL(ch) && 0 !== ch) {
                    ch = state.input.charCodeAt(++state.position)
                }
                captureSegment(state, captureStart, state.position, false)
            }
            return true
        }
        function readBlockSequence(state, nodeIndent) {
            var _line, _tag = state.tag,
            _anchor = state.anchor,
            _result = [],
            following,
            detected = false,
            ch;
            if (null !== state.anchor) {
                state.anchorMap[state.anchor] = _result
            }
            ch = state.input.charCodeAt(state.position);
            while (0 !== ch) {
                if (45 !== ch) {
                    break
                }
                following = state.input.charCodeAt(state.position + 1);
                if (!is_WS_OR_EOL(following)) {
                    break
                }
                detected = true;
                state.position++;
                if (skipSeparationSpace(state, true, -1)) {
                    if (state.lineIndent <= nodeIndent) {
                        _result.push(null);
                        ch = state.input.charCodeAt(state.position);
                        continue
                    }
                }
                _line = state.line;
                composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
                _result.push(state.result);
                skipSeparationSpace(state, true, -1);
                ch = state.input.charCodeAt(state.position);
                if ((state.line === _line || state.lineIndent > nodeIndent) && 0 !== ch) {
                    throwError(state, "bad indentation of a sequence entry")
                } else if (state.lineIndent < nodeIndent) {
                    break
                }
            }
            if (detected) {
                state.tag = _tag;
                state.anchor = _anchor;
                state.kind = "sequence";
                state.result = _result;
                return true
            }
            return false
        }
        function readBlockMapping(state, nodeIndent, flowIndent) {
            var following, allowCompact, _line, _tag = state.tag,
            _anchor = state.anchor,
            _result = {},
            keyTag = null,
            keyNode = null,
            valueNode = null,
            atExplicitKey = false,
            detected = false,
            ch;
            if (null !== state.anchor) {
                state.anchorMap[state.anchor] = _result
            }
            ch = state.input.charCodeAt(state.position);
            while (0 !== ch) {
                following = state.input.charCodeAt(state.position + 1);
                _line = state.line;
                if ((63 === ch || 58 === ch) && is_WS_OR_EOL(following)) {
                    if (63 === ch) {
                        if (atExplicitKey) {
                            storeMappingPair(state, _result, keyTag, keyNode, null);
                            keyTag = keyNode = valueNode = null
                        }
                        detected = true;
                        atExplicitKey = true;
                        allowCompact = true
                    } else if (atExplicitKey) {
                        atExplicitKey = false;
                        allowCompact = true
                    } else {
                        throwError(state, "incomplete explicit mapping pair; a key node is missed")
                    }
                    state.position += 1;
                    ch = following
                } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
                    if (state.line === _line) {
                        ch = state.input.charCodeAt(state.position);
                        while (is_WHITE_SPACE(ch)) {
                            ch = state.input.charCodeAt(++state.position)
                        }
                        if (58 === ch) {
                            ch = state.input.charCodeAt(++state.position);
                            if (!is_WS_OR_EOL(ch)) {
                                throwError(state, "a whitespace character is expected after the key-value separator within a block mapping")
                            }
                            if (atExplicitKey) {
                                storeMappingPair(state, _result, keyTag, keyNode, null);
                                keyTag = keyNode = valueNode = null
                            }
                            detected = true;
                            atExplicitKey = false;
                            allowCompact = false;
                            keyTag = state.tag;
                            keyNode = state.result
                        } else if (detected) {
                            throwError(state, "can not read an implicit mapping pair; a colon is missed")
                        } else {
                            state.tag = _tag;
                            state.anchor = _anchor;
                            return true
                        }
                    } else if (detected) {
                        throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key")
                    } else {
                        state.tag = _tag;
                        state.anchor = _anchor;
                        return true
                    }
                } else {
                    break
                }
                if (state.line === _line || state.lineIndent > nodeIndent) {
                    if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
                        if (atExplicitKey) {
                            keyNode = state.result
                        } else {
                            valueNode = state.result
                        }
                    }
                    if (!atExplicitKey) {
                        storeMappingPair(state, _result, keyTag, keyNode, valueNode);
                        keyTag = keyNode = valueNode = null
                    }
                    skipSeparationSpace(state, true, -1);
                    ch = state.input.charCodeAt(state.position)
                }
                if (state.lineIndent > nodeIndent && 0 !== ch) {
                    throwError(state, "bad indentation of a mapping entry")
                } else if (state.lineIndent < nodeIndent) {
                    break
                }
            }
            if (atExplicitKey) {
                storeMappingPair(state, _result, keyTag, keyNode, null)
            }
            if (detected) {
                state.tag = _tag;
                state.anchor = _anchor;
                state.kind = "mapping";
                state.result = _result
            }
            return detected
        }
        function readTagProperty(state) {
            var _position, isVerbatim = false,
            isNamed = false,
            tagHandle, tagName, ch;
            ch = state.input.charCodeAt(state.position);
            if (33 !== ch) {
                return false
            }
            if (null !== state.tag) {
                throwError(state, "duplication of a tag property")
            }
            ch = state.input.charCodeAt(++state.position);
            if (60 === ch) {
                isVerbatim = true;
                ch = state.input.charCodeAt(++state.position)
            } else if (33 === ch) {
                isNamed = true;
                tagHandle = "!!";
                ch = state.input.charCodeAt(++state.position)
            } else {
                tagHandle = "!"
            }
            _position = state.position;
            if (isVerbatim) {
                do {
                    ch = state.input.charCodeAt(++state.position)
                } while ( 0 !== ch && 62 !== ch );
                if (state.position < state.length) {
                    tagName = state.input.slice(_position, state.position);
                    ch = state.input.charCodeAt(++state.position)
                } else {
                    throwError(state, "unexpected end of the stream within a verbatim tag")
                }
            } else {
                while (0 !== ch && !is_WS_OR_EOL(ch)) {
                    if (33 === ch) {
                        if (!isNamed) {
                            tagHandle = state.input.slice(_position - 1, state.position + 1);
                            if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                                throwError(state, "named tag handle cannot contain such characters")
                            }
                            isNamed = true;
                            _position = state.position + 1
                        } else {
                            throwError(state, "tag suffix cannot contain exclamation marks")
                        }
                    }
                    ch = state.input.charCodeAt(++state.position)
                }
                tagName = state.input.slice(_position, state.position);
                if (PATTERN_FLOW_INDICATORS.test(tagName)) {
                    throwError(state, "tag suffix cannot contain flow indicator characters")
                }
            }
            if (tagName && !PATTERN_TAG_URI.test(tagName)) {
                throwError(state, "tag name cannot contain such characters: " + tagName)
            }
            if (isVerbatim) {
                state.tag = tagName
            } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
                state.tag = state.tagMap[tagHandle] + tagName
            } else if ("!" === tagHandle) {
                state.tag = "!" + tagName
            } else if ("!!" === tagHandle) {
                state.tag = "tag:yaml.org,2002:" + tagName
            } else {
                throwError(state, 'undeclared tag handle "' + tagHandle + '"')
            }
            return true
        }
        function readAnchorProperty(state) {
            var _position, ch;
            ch = state.input.charCodeAt(state.position);
            if (38 !== ch) {
                return false
            }
            if (null !== state.anchor) {
                throwError(state, "duplication of an anchor property")
            }
            ch = state.input.charCodeAt(++state.position);
            _position = state.position;
            while (0 !== ch && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
                ch = state.input.charCodeAt(++state.position)
            }
            if (state.position === _position) {
                throwError(state, "name of an anchor node must contain at least one character")
            }
            state.anchor = state.input.slice(_position, state.position);
            return true
        }
        function readAlias(state) {
            var _position, alias, ch;
            ch = state.input.charCodeAt(state.position);
            if (42 !== ch) {
                return false
            }
            ch = state.input.charCodeAt(++state.position);
            _position = state.position;
            while (0 !== ch && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
                ch = state.input.charCodeAt(++state.position)
            }
            if (state.position === _position) {
                throwError(state, "name of an alias node must contain at least one character")
            }
            alias = state.input.slice(_position, state.position);
            if (!state.anchorMap.hasOwnProperty(alias)) {
                throwError(state, 'unidentified alias "' + alias + '"')
            }
            state.result = state.anchorMap[alias];
            skipSeparationSpace(state, true, -1);
            return true
        }
        function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
            var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1,
            atNewLine = false,
            hasContent = false,
            typeIndex, typeQuantity, type, flowIndent, blockIndent;
            state.tag = null;
            state.anchor = null;
            state.kind = null;
            state.result = null;
            allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
            if (allowToSeek) {
                if (skipSeparationSpace(state, true, -1)) {
                    atNewLine = true;
                    if (state.lineIndent > parentIndent) {
                        indentStatus = 1
                    } else if (state.lineIndent === parentIndent) {
                        indentStatus = 0
                    } else if (state.lineIndent < parentIndent) {
                        indentStatus = -1
                    }
                }
            }
            if (1 === indentStatus) {
                while (readTagProperty(state) || readAnchorProperty(state)) {
                    if (skipSeparationSpace(state, true, -1)) {
                        atNewLine = true;
                        allowBlockCollections = allowBlockStyles;
                        if (state.lineIndent > parentIndent) {
                            indentStatus = 1
                        } else if (state.lineIndent === parentIndent) {
                            indentStatus = 0
                        } else if (state.lineIndent < parentIndent) {
                            indentStatus = -1
                        }
                    } else {
                        allowBlockCollections = false
                    }
                }
            }
            if (allowBlockCollections) {
                allowBlockCollections = atNewLine || allowCompact
            }
            if (1 === indentStatus || CONTEXT_BLOCK_OUT === nodeContext) {
                if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
                    flowIndent = parentIndent
                } else {
                    flowIndent = parentIndent + 1
                }
                blockIndent = state.position - state.lineStart;
                if (1 === indentStatus) {
                    if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
                        hasContent = true
                    } else {
                        if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
                            hasContent = true
                        } else if (readAlias(state)) {
                            hasContent = true;
                            if (null !== state.tag || null !== state.anchor) {
                                throwError(state, "alias node should not have any properties")
                            }
                        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
                            hasContent = true;
                            if (null === state.tag) {
                                state.tag = "?"
                            }
                        }
                        if (null !== state.anchor) {
                            state.anchorMap[state.anchor] = state.result
                        }
                    }
                } else if (0 === indentStatus) {
                    hasContent = allowBlockCollections && readBlockSequence(state, blockIndent)
                }
            }
            if (null !== state.tag && "!" !== state.tag) {
                if ("?" === state.tag) {
                    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
                        type = state.implicitTypes[typeIndex];
                        if (type.resolve(state.result)) {
                            state.result = type.construct(state.result);
                            state.tag = type.tag;
                            if (null !== state.anchor) {
                                state.anchorMap[state.anchor] = state.result
                            }
                            break
                        }
                    }
                } else if (_hasOwnProperty.call(state.typeMap, state.tag)) {
                    type = state.typeMap[state.tag];
                    if (null !== state.result && type.kind !== state.kind) {
                        throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"')
                    }
                    if (!type.resolve(state.result)) {
                        throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag")
                    } else {
                        state.result = type.construct(state.result);
                        if (null !== state.anchor) {
                            state.anchorMap[state.anchor] = state.result
                        }
                    }
                } else {
                    throwError(state, "unknown tag !<" + state.tag + ">")
                }
            }
            return null !== state.tag || null !== state.anchor || hasContent
        }
        function readDocument(state) {
            var documentStart = state.position,
            _position, directiveName, directiveArgs, hasDirectives = false,
            ch;
            state.version = null;
            state.checkLineBreaks = state.legacy;
            state.tagMap = {};
            state.anchorMap = {};
            while (0 !== (ch = state.input.charCodeAt(state.position))) {
                skipSeparationSpace(state, true, -1);
                ch = state.input.charCodeAt(state.position);
                if (state.lineIndent > 0 || 37 !== ch) {
                    break
                }
                hasDirectives = true;
                ch = state.input.charCodeAt(++state.position);
                _position = state.position;
                while (0 !== ch && !is_WS_OR_EOL(ch)) {
                    ch = state.input.charCodeAt(++state.position)
                }
                directiveName = state.input.slice(_position, state.position);
                directiveArgs = [];
                if (directiveName.length < 1) {
                    throwError(state, "directive name must not be less than one character in length")
                }
                while (0 !== ch) {
                    while (is_WHITE_SPACE(ch)) {
                        ch = state.input.charCodeAt(++state.position)
                    }
                    if (35 === ch) {
                        do {
                            ch = state.input.charCodeAt(++state.position)
                        } while ( 0 !== ch && ! is_EOL ( ch ));
                        break
                    }
                    if (is_EOL(ch)) {
                        break
                    }
                    _position = state.position;
                    while (0 !== ch && !is_WS_OR_EOL(ch)) {
                        ch = state.input.charCodeAt(++state.position)
                    }
                    directiveArgs.push(state.input.slice(_position, state.position))
                }
                if (0 !== ch) {
                    readLineBreak(state)
                }
                if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
                    directiveHandlers[directiveName](state, directiveName, directiveArgs)
                } else {
                    throwWarning(state, 'unknown document directive "' + directiveName + '"')
                }
            }
            skipSeparationSpace(state, true, -1);
            if (0 === state.lineIndent && 45 === state.input.charCodeAt(state.position) && 45 === state.input.charCodeAt(state.position + 1) && 45 === state.input.charCodeAt(state.position + 2)) {
                state.position += 3;
                skipSeparationSpace(state, true, -1)
            } else if (hasDirectives) {
                throwError(state, "directives end mark is expected")
            }
            composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
            skipSeparationSpace(state, true, -1);
            if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
                throwWarning(state, "non-ASCII line breaks are interpreted as content")
            }
            state.documents.push(state.result);
            if (state.position === state.lineStart && testDocumentSeparator(state)) {
                if (46 === state.input.charCodeAt(state.position)) {
                    state.position += 3;
                    skipSeparationSpace(state, true, -1)
                }
                return
            }
            if (state.position < state.length - 1) {
                throwError(state, "end of the stream or a document separator is expected")
            } else {
                return
            }
        }
        function loadDocuments(input, options) {
            input = String(input);
            options = options || {};
            if (input.length !== 0) {
                if (10 !== input.charCodeAt(input.length - 1) && 13 !== input.charCodeAt(input.length - 1)) {
                    input += "\n"
                }
                if (input.charCodeAt(0) === 65279) {
                    input = input.slice(1)
                }
            }
            var state = new State(input, options);
            state.input += "\x00";
            while (32 === state.input.charCodeAt(state.position)) {
                state.lineIndent += 1;
                state.position += 1
            }
            while (state.position < state.length - 1) {
                readDocument(state)
            }
            return state.documents
        }
        function loadAll(input, iterator, options) {
            var documents = loadDocuments(input, options),
            index,
            length;
            for (index = 0, length = documents.length; index < length; index += 1) {
                iterator(documents[index])
            }
        }
        function load(input, options) {
            var documents = loadDocuments(input, options);
            if (0 === documents.length) {
                return undefined
            } else if (1 === documents.length) {
                return documents[0]
            }
            throw new YAMLException("expected a single document in the stream, but found more")
        }
        function safeLoadAll(input, output, options) {
            loadAll(input, output, common.extend({
                schema: DEFAULT_SAFE_SCHEMA
            },
            options))
        }
        function safeLoad(input, options) {
            return load(input, common.extend({
                schema: DEFAULT_SAFE_SCHEMA
            },
            options))
        }
        module.exports.loadAll = loadAll;
        module.exports.load = load;
        module.exports.safeLoadAll = safeLoadAll;
        module.exports.safeLoad = safeLoad
    },
    {
        "./common": 7,
        "./exception": 9,
        "./mark": 11,
        "./schema/default_full": 14,
        "./schema/default_safe": 15
    }],
    11 : [function(require, module, exports) {
        "use strict";
        var common = require("./common");
        function Mark(name, buffer, position, line, column) {
            this.name = name;
            this.buffer = buffer;
            this.position = position;
            this.line = line;
            this.column = column
        }
        Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
            var head, start, tail, end, snippet;
            if (!this.buffer) {
                return null
            }
            indent = indent || 4;
            maxLength = maxLength || 75;
            head = "";
            start = this.position;
            while (start > 0 && -1 === "\x00\r\n\u2028\u2029".indexOf(this.buffer.charAt(start - 1))) {
                start -= 1;
                if (this.position - start > maxLength / 2 - 1) {
                    head = " ... ";
                    start += 5;
                    break
                }
            }
            tail = "";
            end = this.position;
            while (end < this.buffer.length && -1 === "\x00\r\n\u2028\u2029".indexOf(this.buffer.charAt(end))) {
                end += 1;
                if (end - this.position > maxLength / 2 - 1) {
                    tail = " ... ";
                    end -= 5;
                    break
                }
            }
            snippet = this.buffer.slice(start, end);
            return common.repeat(" ", indent) + head + snippet + tail + "\n" + common.repeat(" ", indent + this.position - start + head.length) + "^"
        };
        Mark.prototype.toString = function toString(compact) {
            var snippet, where = "";
            if (this.name) {
                where += 'in "' + this.name + '" '
            }
            where += "at line " + (this.line + 1) + ", column " + (this.column + 1);
            if (!compact) {
                snippet = this.getSnippet();
                if (snippet) {
                    where += ":\n" + snippet
                }
            }
            return where
        };
        module.exports = Mark
    },
    {
        "./common": 7
    }],
    12 : [function(require, module, exports) {
        "use strict";
        var common = require("./common");
        var YAMLException = require("./exception");
        var Type = require("./type");
        function compileList(schema, name, result) {
            var exclude = [];
            schema.include.forEach(function(includedSchema) {
                result = compileList(includedSchema, name, result)
            });
            schema[name].forEach(function(currentType) {
                result.forEach(function(previousType, previousIndex) {
                    if (previousType.tag === currentType.tag) {
                        exclude.push(previousIndex)
                    }
                });
                result.push(currentType)
            });
            return result.filter(function(type, index) {
                return - 1 === exclude.indexOf(index)
            })
        }
        function compileMap() {
            var result = {},
            index, length;
            function collectType(type) {
                result[type.tag] = type
            }
            for (index = 0, length = arguments.length; index < length; index += 1) {
                arguments[index].forEach(collectType)
            }
            return result
        }
        function Schema(definition) {
            this.include = definition.include || [];
            this.implicit = definition.implicit || [];
            this.explicit = definition.explicit || [];
            this.implicit.forEach(function(type) {
                if (type.loadKind && "scalar" !== type.loadKind) {
                    throw new YAMLException("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")
                }
            });
            this.compiledImplicit = compileList(this, "implicit", []);
            this.compiledExplicit = compileList(this, "explicit", []);
            this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit)
        }
        Schema.DEFAULT = null;
        Schema.create = function createSchema() {
            var schemas, types;
            switch (arguments.length) {
            case 1:
                schemas = Schema.DEFAULT;
                types = arguments[0];
                break;
            case 2:
                schemas = arguments[0];
                types = arguments[1];
                break;
            default:
                throw new YAMLException("Wrong number of arguments for Schema.create function")
            }
            schemas = common.toArray(schemas);
            types = common.toArray(types);
            if (!schemas.every(function(schema) {
                return schema instanceof Schema
            })) {
                throw new YAMLException("Specified list of super schemas (or a single Schema object) contains a non-Schema object.")
            }
            if (!types.every(function(type) {
                return type instanceof Type
            })) {
                throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object.")
            }
            return new Schema({
                include: schemas,
                explicit: types
            })
        };
        module.exports = Schema
    },
    {
        "./common": 7,
        "./exception": 9,
        "./type": 18
    }],
    13 : [function(require, module, exports) {
        "use strict";
        var Schema = require("../schema");
        module.exports = new Schema({
            include: [require("./json")]
        })
    },
    {
        "../schema": 12,
        "./json": 17
    }],
    14 : [function(require, module, exports) {
        "use strict";
        var Schema = require("../schema");
        module.exports = Schema.DEFAULT = new Schema({
            include: [require("./default_safe")],
            explicit: [require("../type/js/undefined"), require("../type/js/regexp"), require("../type/js/function")]
        })
    },
    {
        "../schema": 12,
        "../type/js/function": 23,
        "../type/js/regexp": 24,
        "../type/js/undefined": 25,
        "./default_safe": 15
    }],
    15 : [function(require, module, exports) {
        "use strict";
        var Schema = require("../schema");
        module.exports = new Schema({
            include: [require("./core")],
            implicit: [require("../type/timestamp"), require("../type/merge")],
            explicit: [require("../type/binary"), require("../type/omap"), require("../type/pairs"), require("../type/set")]
        })
    },
    {
        "../schema": 12,
        "../type/binary": 19,
        "../type/merge": 27,
        "../type/omap": 29,
        "../type/pairs": 30,
        "../type/set": 32,
        "../type/timestamp": 34,
        "./core": 13
    }],
    16 : [function(require, module, exports) {
        "use strict";
        var Schema = require("../schema");
        module.exports = new Schema({
            explicit: [require("../type/str"), require("../type/seq"), require("../type/map")]
        })
    },
    {
        "../schema": 12,
        "../type/map": 26,
        "../type/seq": 31,
        "../type/str": 33
    }],
    17 : [function(require, module, exports) {
        "use strict";
        var Schema = require("../schema");
        module.exports = new Schema({
            include: [require("./failsafe")],
            implicit: [require("../type/null"), require("../type/bool"), require("../type/int"), require("../type/float")]
        })
    },
    {
        "../schema": 12,
        "../type/bool": 20,
        "../type/float": 21,
        "../type/int": 22,
        "../type/null": 28,
        "./failsafe": 16
    }],
    18 : [function(require, module, exports) {
        "use strict";
        var YAMLException = require("./exception");
        var TYPE_CONSTRUCTOR_OPTIONS = ["kind", "resolve", "construct", "instanceOf", "predicate", "represent", "defaultStyle", "styleAliases"];
        var YAML_NODE_KINDS = ["scalar", "sequence", "mapping"];
        function compileStyleAliases(map) {
            var result = {};
            if (null !== map) {
                Object.keys(map).forEach(function(style) {
                    map[style].forEach(function(alias) {
                        result[String(alias)] = style
                    })
                })
            }
            return result
        }
        function Type(tag, options) {
            options = options || {};
            Object.keys(options).forEach(function(name) {
                if ( - 1 === TYPE_CONSTRUCTOR_OPTIONS.indexOf(name)) {
                    throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.')
                }
            });
            this.tag = tag;
            this.kind = options["kind"] || null;
            this.resolve = options["resolve"] ||
            function() {
                return true
            };
            this.construct = options["construct"] ||
            function(data) {
                return data
            };
            this.instanceOf = options["instanceOf"] || null;
            this.predicate = options["predicate"] || null;
            this.represent = options["represent"] || null;
            this.defaultStyle = options["defaultStyle"] || null;
            this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
            if ( - 1 === YAML_NODE_KINDS.indexOf(this.kind)) {
                throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.')
            }
        }
        module.exports = Type
    },
    {
        "./exception": 9
    }],
    19 : [function(require, module, exports) {
        "use strict";
        var NodeBuffer = require("buffer").Buffer;
        var Type = require("../type");
        var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
        function resolveYamlBinary(data) {
            if (null === data) {
                return false
            }
            var code, idx, bitlen = 0,
            max = data.length,
            map = BASE64_MAP;
            for (idx = 0; idx < max; idx++) {
                code = map.indexOf(data.charAt(idx));
                if (code > 64) {
                    continue
                }
                if (code < 0) {
                    return false
                }
                bitlen += 6
            }
            return bitlen % 8 === 0
        }
        function constructYamlBinary(data) {
            var idx, tailbits, input = data.replace(/[\r\n=]/g, ""),
            max = input.length,
            map = BASE64_MAP,
            bits = 0,
            result = [];
            for (idx = 0; idx < max; idx++) {
                if (idx % 4 === 0 && idx) {
                    result.push(bits >> 16 & 255);
                    result.push(bits >> 8 & 255);
                    result.push(bits & 255)
                }
                bits = bits << 6 | map.indexOf(input.charAt(idx))
            }
            tailbits = max % 4 * 6;
            if (tailbits === 0) {
                result.push(bits >> 16 & 255);
                result.push(bits >> 8 & 255);
                result.push(bits & 255)
            } else if (tailbits === 18) {
                result.push(bits >> 10 & 255);
                result.push(bits >> 2 & 255)
            } else if (tailbits === 12) {
                result.push(bits >> 4 & 255)
            }
            if (NodeBuffer) {
                return new NodeBuffer(result)
            }
            return result
        }
        function representYamlBinary(object) {
            var result = "",
            bits = 0,
            idx, tail, max = object.length,
            map = BASE64_MAP;
            for (idx = 0; idx < max; idx++) {
                if (idx % 3 === 0 && idx) {
                    result += map[bits >> 18 & 63];
                    result += map[bits >> 12 & 63];
                    result += map[bits >> 6 & 63];
                    result += map[bits & 63]
                }
                bits = (bits << 8) + object[idx]
            }
            tail = max % 3;
            if (tail === 0) {
                result += map[bits >> 18 & 63];
                result += map[bits >> 12 & 63];
                result += map[bits >> 6 & 63];
                result += map[bits & 63]
            } else if (tail === 2) {
                result += map[bits >> 10 & 63];
                result += map[bits >> 4 & 63];
                result += map[bits << 2 & 63];
                result += map[64]
            } else if (tail === 1) {
                result += map[bits >> 2 & 63];
                result += map[bits << 4 & 63];
                result += map[64];
                result += map[64]
            }
            return result
        }
        function isBinary(object) {
            return NodeBuffer && NodeBuffer.isBuffer(object)
        }
        module.exports = new Type("tag:yaml.org,2002:binary", {
            kind: "scalar",
            resolve: resolveYamlBinary,
            construct: constructYamlBinary,
            predicate: isBinary,
            represent: representYamlBinary
        })
    },
    {
        "../type": 18,
        buffer: 37
    }],
    20 : [function(require, module, exports) {
        "use strict";
        var Type = require("../type");
        function resolveYamlBoolean(data) {
            if (null === data) {
                return false
            }
            var max = data.length;
            return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE")
        }
        function constructYamlBoolean(data) {
            return data === "true" || data === "True" || data === "TRUE"
        }
        function isBoolean(object) {
            return "[object Boolean]" === Object.prototype.toString.call(object)
        }
        module.exports = new Type("tag:yaml.org,2002:bool", {
            kind: "scalar",
            resolve: resolveYamlBoolean,
            construct: constructYamlBoolean,
            predicate: isBoolean,
            represent: {
                lowercase: function(object) {
                    return object ? "true": "false"
                },
                uppercase: function(object) {
                    return object ? "TRUE": "FALSE"
                },
                camelcase: function(object) {
                    return object ? "True": "False"
                }
            },
            defaultStyle: "lowercase"
        })
    },
    {
        "../type": 18
    }],
    21 : [function(require, module, exports) {
        "use strict";
        var common = require("../common");
        var Type = require("../type");
        var YAML_FLOAT_PATTERN = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)\\.[0-9_]*(?:[eE][-+][0-9]+)?" + "|\\.[0-9_]+(?:[eE][-+][0-9]+)?" + "|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*" + "|[-+]?\\.(?:inf|Inf|INF)" + "|\\.(?:nan|NaN|NAN))$");
        function resolveYamlFloat(data) {
            if (null === data) {
                return false
            }
            if (!YAML_FLOAT_PATTERN.test(data)) {
                return false
            }
            return true
        }
        function constructYamlFloat(data) {
            var value, sign, base, digits;
            value = data.replace(/_/g, "").toLowerCase();
            sign = "-" === value[0] ? -1 : 1;
            digits = [];
            if (0 <= "+-".indexOf(value[0])) {
                value = value.slice(1)
            }
            if (".inf" === value) {
                return 1 === sign ? Number.POSITIVE_INFINITY: Number.NEGATIVE_INFINITY
            } else if (".nan" === value) {
                return NaN
            } else if (0 <= value.indexOf(":")) {
                value.split(":").forEach(function(v) {
                    digits.unshift(parseFloat(v, 10))
                });
                value = 0;
                base = 1;
                digits.forEach(function(d) {
                    value += d * base;
                    base *= 60
                });
                return sign * value
            }
            return sign * parseFloat(value, 10)
        }
        var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
        function representYamlFloat(object, style) {
            var res;
            if (isNaN(object)) {
                switch (style) {
                case "lowercase":
                    return ".nan";
                case "uppercase":
                    return ".NAN";
                case "camelcase":
                    return ".NaN"
                }
            } else if (Number.POSITIVE_INFINITY === object) {
                switch (style) {
                case "lowercase":
                    return ".inf";
                case "uppercase":
                    return ".INF";
                case "camelcase":
                    return ".Inf"
                }
            } else if (Number.NEGATIVE_INFINITY === object) {
                switch (style) {
                case "lowercase":
                    return "-.inf";
                case "uppercase":
                    return "-.INF";
                case "camelcase":
                    return "-.Inf"
                }
            } else if (common.isNegativeZero(object)) {
                return "-0.0"
            }
            res = object.toString(10);
            return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res
        }
        function isFloat(object) {
            return "[object Number]" === Object.prototype.toString.call(object) && (0 !== object % 1 || common.isNegativeZero(object))
        }
        module.exports = new Type("tag:yaml.org,2002:float", {
            kind: "scalar",
            resolve: resolveYamlFloat,
            construct: constructYamlFloat,
            predicate: isFloat,
            represent: representYamlFloat,
            defaultStyle: "lowercase"
        })
    },
    {
        "../common": 7,
        "../type": 18
    }],
    22 : [function(require, module, exports) {
        "use strict";
        var common = require("../common");
        var Type = require("../type");
        function isHexCode(c) {
            return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102
        }
        function isOctCode(c) {
            return 48 <= c && c <= 55
        }
        function isDecCode(c) {
            return 48 <= c && c <= 57
        }
        function resolveYamlInteger(data) {
            if (null === data) {
                return false
            }
            var max = data.length,
            index = 0,
            hasDigits = false,
            ch;
            if (!max) {
                return false
            }
            ch = data[index];
            if (ch === "-" || ch === "+") {
                ch = data[++index]
            }
            if (ch === "0") {
                if (index + 1 === max) {
                    return true
                }
                ch = data[++index];
                if (ch === "b") {
                    index++;
                    for (; index < max; index++) {
                        ch = data[index];
                        if (ch === "_") {
                            continue
                        }
                        if (ch !== "0" && ch !== "1") {
                            return false
                        }
                        hasDigits = true
                    }
                    return hasDigits
                }
                if (ch === "x") {
                    index++;
                    for (; index < max; index++) {
                        ch = data[index];
                        if (ch === "_") {
                            continue
                        }
                        if (!isHexCode(data.charCodeAt(index))) {
                            return false
                        }
                        hasDigits = true
                    }
                    return hasDigits
                }
                for (; index < max; index++) {
                    ch = data[index];
                    if (ch === "_") {
                        continue
                    }
                    if (!isOctCode(data.charCodeAt(index))) {
                        return false
                    }
                    hasDigits = true
                }
                return hasDigits
            }
            for (; index < max; index++) {
                ch = data[index];
                if (ch === "_") {
                    continue
                }
                if (ch === ":") {
                    break
                }
                if (!isDecCode(data.charCodeAt(index))) {
                    return false
                }
                hasDigits = true
            }
            if (!hasDigits) {
                return false
            }
            if (ch !== ":") {
                return true
            }
            return /^(:[0-5]?[0-9])+$/.test(data.slice(index))
        }
        function constructYamlInteger(data) {
            var value = data,
            sign = 1,
            ch, base, digits = [];
            if (value.indexOf("_") !== -1) {
                value = value.replace(/_/g, "")
            }
            ch = value[0];
            if (ch === "-" || ch === "+") {
                if (ch === "-") {
                    sign = -1
                }
                value = value.slice(1);
                ch = value[0]
            }
            if ("0" === value) {
                return 0
            }
            if (ch === "0") {
                if (value[1] === "b") {
                    return sign * parseInt(value.slice(2), 2)
                }
                if (value[1] === "x") {
                    return sign * parseInt(value, 16)
                }
                return sign * parseInt(value, 8)
            }
            if (value.indexOf(":") !== -1) {
                value.split(":").forEach(function(v) {
                    digits.unshift(parseInt(v, 10))
                });
                value = 0;
                base = 1;
                digits.forEach(function(d) {
                    value += d * base;
                    base *= 60
                });
                return sign * value
            }
            return sign * parseInt(value, 10)
        }
        function isInteger(object) {
            return "[object Number]" === Object.prototype.toString.call(object) && (0 === object % 1 && !common.isNegativeZero(object))
        }
        module.exports = new Type("tag:yaml.org,2002:int", {
            kind: "scalar",
            resolve: resolveYamlInteger,
            construct: constructYamlInteger,
            predicate: isInteger,
            represent: {
                binary: function(object) {
                    return "0b" + object.toString(2)
                },
                octal: function(object) {
                    return "0" + object.toString(8)
                },
                decimal: function(object) {
                    return object.toString(10)
                },
                hexadecimal: function(object) {
                    return "0x" + object.toString(16).toUpperCase()
                }
            },
            defaultStyle: "decimal",
            styleAliases: {
                binary: [2, "bin"],
                octal: [8, "oct"],
                decimal: [10, "dec"],
                hexadecimal: [16, "hex"]
            }
        })
    },
    {
        "../common": 7,
        "../type": 18
    }],
    23 : [function(require, module, exports) {
        "use strict";
        var esprima;
        try {
            esprima = require("esprima")
        } catch(_) {
            if (typeof window !== "undefined") {
                esprima = window.esprima
            }
        }
        var Type = require("../../type");
        function resolveJavascriptFunction(data) {
            if (null === data) {
                return false
            }
            try {
                var source = "(" + data + ")",
                ast = esprima.parse(source, {
                    range: true
                });
                if ("Program" !== ast.type || 1 !== ast.body.length || "ExpressionStatement" !== ast.body[0].type || "FunctionExpression" !== ast.body[0].expression.type) {
                    return false
                }
                return true
            } catch(err) {
                return false
            }
        }
        function constructJavascriptFunction(data) {
            var source = "(" + data + ")",
            ast = esprima.parse(source, {
                range: true
            }),
            params = [],
            body;
            if ("Program" !== ast.type || 1 !== ast.body.length || "ExpressionStatement" !== ast.body[0].type || "FunctionExpression" !== ast.body[0].expression.type) {
                throw new Error("Failed to resolve function")
            }
            ast.body[0].expression.params.forEach(function(param) {
                params.push(param.name)
            });
            body = ast.body[0].expression.body.range;
            return new Function(params, source.slice(body[0] + 1, body[1] - 1))
        }
        function representJavascriptFunction(object) {
            return object.toString()
        }
        function isFunction(object) {
            return "[object Function]" === Object.prototype.toString.call(object)
        }
        module.exports = new Type("tag:yaml.org,2002:js/function", {
            kind: "scalar",
            resolve: resolveJavascriptFunction,
            construct: constructJavascriptFunction,
            predicate: isFunction,
            represent: representJavascriptFunction
        })
    },
    {
        "../../type": 18,
        esprima: 2
    }],
    24 : [function(require, module, exports) {
        "use strict";
        var Type = require("../../type");
        function resolveJavascriptRegExp(data) {
            if (null === data) {
                return false
            }
            if (0 === data.length) {
                return false
            }
            var regexp = data,
            tail = /\/([gim]*)$/.exec(data),
            modifiers = "";
            if ("/" === regexp[0]) {
                if (tail) {
                    modifiers = tail[1]
                }
                if (modifiers.length > 3) {
                    return false
                }
                if (regexp[regexp.length - modifiers.length - 1] !== "/") {
                    return false
                }
                regexp = regexp.slice(1, regexp.length - modifiers.length - 1)
            }
            try {
                return true
            } catch(error) {
                return false
            }
        }
        function constructJavascriptRegExp(data) {
            var regexp = data,
            tail = /\/([gim]*)$/.exec(data),
            modifiers = "";
            if ("/" === regexp[0]) {
                if (tail) {
                    modifiers = tail[1]
                }
                regexp = regexp.slice(1, regexp.length - modifiers.length - 1)
            }
            return new RegExp(regexp, modifiers)
        }
        function representJavascriptRegExp(object) {
            var result = "/" + object.source + "/";
            if (object.global) {
                result += "g"
            }
            if (object.multiline) {
                result += "m"
            }
            if (object.ignoreCase) {
                result += "i"
            }
            return result
        }
        function isRegExp(object) {
            return "[object RegExp]" === Object.prototype.toString.call(object)
        }
        module.exports = new Type("tag:yaml.org,2002:js/regexp", {
            kind: "scalar",
            resolve: resolveJavascriptRegExp,
            construct: constructJavascriptRegExp,
            predicate: isRegExp,
            represent: representJavascriptRegExp
        })
    },
    {
        "../../type": 18
    }],
    25 : [function(require, module, exports) {
        "use strict";
        var Type = require("../../type");
        function resolveJavascriptUndefined() {
            return true
        }
        function constructJavascriptUndefined() {
            return undefined
        }
        function representJavascriptUndefined() {
            return ""
        }
        function isUndefined(object) {
            return "undefined" === typeof object
        }
        module.exports = new Type("tag:yaml.org,2002:js/undefined", {
            kind: "scalar",
            resolve: resolveJavascriptUndefined,
            construct: constructJavascriptUndefined,
            predicate: isUndefined,
            represent: representJavascriptUndefined
        })
    },
    {
        "../../type": 18
    }],
    26 : [function(require, module, exports) {
        "use strict";
        var Type = require("../type");
        module.exports = new Type("tag:yaml.org,2002:map", {
            kind: "mapping",
            construct: function(data) {
                return null !== data ? data: {}
            }
        })
    },
    {
        "../type": 18
    }],
    27 : [function(require, module, exports) {
        "use strict";
        var Type = require("../type");
        function resolveYamlMerge(data) {
            return "<<" === data || null === data
        }
        module.exports = new Type("tag:yaml.org,2002:merge", {
            kind: "scalar",
            resolve: resolveYamlMerge
        })
    },
    {
        "../type": 18
    }],
    28 : [function(require, module, exports) {
        "use strict";
        var Type = require("../type");
        function resolveYamlNull(data) {
            if (null === data) {
                return true
            }
            var max = data.length;
            return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL")
        }
        function constructYamlNull() {
            return null
        }
        function isNull(object) {
            return null === object
        }
        module.exports = new Type("tag:yaml.org,2002:null", {
            kind: "scalar",
            resolve: resolveYamlNull,
            construct: constructYamlNull,
            predicate: isNull,
            represent: {
                canonical: function() {
                    return "~"
                },
                lowercase: function() {
                    return "null"
                },
                uppercase: function() {
                    return "NULL"
                },
                camelcase: function() {
                    return "Null"
                }
            },
            defaultStyle: "lowercase"
        })
    },
    {
        "../type": 18
    }],
    29 : [function(require, module, exports) {
        "use strict";
        var Type = require("../type");
        var _hasOwnProperty = Object.prototype.hasOwnProperty;
        var _toString = Object.prototype.toString;
        function resolveYamlOmap(data) {
            if (null === data) {
                return true
            }
            var objectKeys = [],
            index,
            length,
            pair,
            pairKey,
            pairHasKey,
            object = data;
            for (index = 0, length = object.length; index < length; index += 1) {
                pair = object[index];
                pairHasKey = false;
                if ("[object Object]" !== _toString.call(pair)) {
                    return false
                }
                for (pairKey in pair) {
                    if (_hasOwnProperty.call(pair, pairKey)) {
                        if (!pairHasKey) {
                            pairHasKey = true
                        } else {
                            return false
                        }
                    }
                }
                if (!pairHasKey) {
                    return false
                }
                if ( - 1 === objectKeys.indexOf(pairKey)) {
                    objectKeys.push(pairKey)
                } else {
                    return false
                }
            }
            return true
        }
        function constructYamlOmap(data) {
            return null !== data ? data: []
        }
        module.exports = new Type("tag:yaml.org,2002:omap", {
            kind: "sequence",
            resolve: resolveYamlOmap,
            construct: constructYamlOmap
        })
    },
    {
        "../type": 18
    }],
    30 : [function(require, module, exports) {
        "use strict";
        var Type = require("../type");
        var _toString = Object.prototype.toString;
        function resolveYamlPairs(data) {
            if (null === data) {
                return true
            }
            var index, length, pair, keys, result, object = data;
            result = new Array(object.length);
            for (index = 0, length = object.length; index < length; index += 1) {
                pair = object[index];
                if ("[object Object]" !== _toString.call(pair)) {
                    return false
                }
                keys = Object.keys(pair);
                if (1 !== keys.length) {
                    return false
                }
                result[index] = [keys[0], pair[keys[0]]]
            }
            return true
        }
        function constructYamlPairs(data) {
            if (null === data) {
                return []
            }
            var index, length, pair, keys, result, object = data;
            result = new Array(object.length);
            for (index = 0, length = object.length; index < length; index += 1) {
                pair = object[index];
                keys = Object.keys(pair);
                result[index] = [keys[0], pair[keys[0]]]
            }
            return result
        }
        module.exports = new Type("tag:yaml.org,2002:pairs", {
            kind: "sequence",
            resolve: resolveYamlPairs,
            construct: constructYamlPairs
        })
    },
    {
        "../type": 18
    }],
    31 : [function(require, module, exports) {
        "use strict";
        var Type = require("../type");
        module.exports = new Type("tag:yaml.org,2002:seq", {
            kind: "sequence",
            construct: function(data) {
                return null !== data ? data: []
            }
        })
    },
    {
        "../type": 18
    }],
    32 : [function(require, module, exports) {
        "use strict";
        var Type = require("../type");
        var _hasOwnProperty = Object.prototype.hasOwnProperty;
        function resolveYamlSet(data) {
            if (null === data) {
                return true
            }
            var key, object = data;
            for (key in object) {
                if (_hasOwnProperty.call(object, key)) {
                    if (null !== object[key]) {
                        return false
                    }
                }
            }
            return true
        }
        function constructYamlSet(data) {
            return null !== data ? data: {}
        }
        module.exports = new Type("tag:yaml.org,2002:set", {
            kind: "mapping",
            resolve: resolveYamlSet,
            construct: constructYamlSet
        })
    },
    {
        "../type": 18
    }],
    33 : [function(require, module, exports) {
        "use strict";
        var Type = require("../type");
        module.exports = new Type("tag:yaml.org,2002:str", {
            kind: "scalar",
            construct: function(data) {
                return null !== data ? data: ""
            }
        })
    },
    {
        "../type": 18
    }],
    34 : [function(require, module, exports) {
        "use strict";
        var Type = require("../type");
        var YAML_TIMESTAMP_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])" + "-([0-9][0-9]?)" + "-([0-9][0-9]?)" + "(?:(?:[Tt]|[ \\t]+)" + "([0-9][0-9]?)" + ":([0-9][0-9])" + ":([0-9][0-9])" + "(?:\\.([0-9]*))?" + "(?:[ \\t]*(Z|([-+])([0-9][0-9]?)" + "(?::([0-9][0-9]))?))?)?$");
        function resolveYamlTimestamp(data) {
            if (null === data) {
                return false
            }
            if (YAML_TIMESTAMP_REGEXP.exec(data) === null) {
                return false
            }
            return true
        }
        function constructYamlTimestamp(data) {
            var match, year, month, day, hour, minute, second, fraction = 0,
            delta = null,
            tz_hour, tz_minute, date;
            match = YAML_TIMESTAMP_REGEXP.exec(data);
            if (null === match) {
                throw new Error("Date resolve error")
            }
            year = +match[1];
            month = +match[2] - 1;
            day = +match[3];
            if (!match[4]) {
                return new Date(Date.UTC(year, month, day))
            }
            hour = +match[4];
            minute = +match[5];
            second = +match[6];
            if (match[7]) {
                fraction = match[7].slice(0, 3);
                while (fraction.length < 3) {
                    fraction += "0"
                }
                fraction = +fraction
            }
            if (match[9]) {
                tz_hour = +match[10];
                tz_minute = +(match[11] || 0);
                delta = (tz_hour * 60 + tz_minute) * 6e4;
                if ("-" === match[9]) {
                    delta = -delta
                }
            }
            date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
            if (delta) {
                date.setTime(date.getTime() - delta)
            }
            return date
        }
        function representYamlTimestamp(object) {
            return object.toISOString()
        }
        module.exports = new Type("tag:yaml.org,2002:timestamp", {
            kind: "scalar",
            resolve: resolveYamlTimestamp,
            construct: constructYamlTimestamp,
            instanceOf: Date,
            represent: representYamlTimestamp
        })
    },
    {
        "../type": 18
    }],
    35 : [function(require, module, exports) { (function(global) { (function() {
                var block = {
                    newline: /^\n+/,
                    code: /^( {4}[^\n]+\n*)+/,
                    fences: noop,
                    hr: /^( *[-*_]){3,} *(?:\n+|$)/,
                    heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
                    nptable: noop,
                    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                    blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
                    list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                    html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
                    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
                    table: noop,
                    paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
                    text: /^[^\n]+/
                };
                block.bullet = /(?:[*+-]|\d+\.)/;
                block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
                block.item = replace(block.item, "gm")(/bull/g, block.bullet)();
                block.list = replace(block.list)(/bull/g, block.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + block.def.source + ")")();
                block.blockquote = replace(block.blockquote)("def", block.def)();
                block._tag = "(?!(?:" + "a|em|strong|small|s|cite|q|dfn|abbr|data|time|code" + "|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo" + "|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";
                block.html = replace(block.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, block._tag)();
                block.paragraph = replace(block.paragraph)("hr", block.hr)("heading", block.heading)("lheading", block.lheading)("blockquote", block.blockquote)("tag", "<" + block._tag)("def", block.def)();
                block.normal = merge({},
                block);
                block.gfm = merge({},
                block.normal, {
                    fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
                    paragraph: /^/,
                    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
                });
                block.gfm.paragraph = replace(block.paragraph)("(?!", "(?!" + block.gfm.fences.source.replace("\\1", "\\2") + "|" + block.list.source.replace("\\1", "\\3") + "|")();
                block.tables = merge({},
                block.gfm, {
                    nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
                    table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
                });
                function Lexer(options) {
                    this.tokens = [];
                    this.tokens.links = {};
                    this.options = options || marked.defaults;
                    this.rules = block.normal;
                    if (this.options.gfm) {
                        if (this.options.tables) {
                            this.rules = block.tables
                        } else {
                            this.rules = block.gfm
                        }
                    }
                }
                Lexer.rules = block;
                Lexer.lex = function(src, options) {
                    var lexer = new Lexer(options);
                    return lexer.lex(src)
                };
                Lexer.prototype.lex = function(src) {
                    src = src.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n");
                    return this.token(src, true)
                };
                Lexer.prototype.token = function(src, top, bq) {
                    var src = src.replace(/^ +$/gm, ""),
                    next,
                    loose,
                    cap,
                    bull,
                    b,
                    item,
                    space,
                    i,
                    l;
                    while (src) {
                        if (cap = this.rules.newline.exec(src)) {
                            src = src.substring(cap[0].length);
                            if (cap[0].length > 1) {
                                this.tokens.push({
                                    type: "space"
                                })
                            }
                        }
                        if (cap = this.rules.code.exec(src)) {
                            src = src.substring(cap[0].length);
                            cap = cap[0].replace(/^ {4}/gm, "");
                            this.tokens.push({
                                type: "code",
                                text: !this.options.pedantic ? cap.replace(/\n+$/, "") : cap
                            });
                            continue
                        }
                        if (cap = this.rules.fences.exec(src)) {
                            src = src.substring(cap[0].length);
                            this.tokens.push({
                                type: "code",
                                lang: cap[2],
                                text: cap[3] || ""
                            });
                            continue
                        }
                        if (cap = this.rules.heading.exec(src)) {
                            src = src.substring(cap[0].length);
                            this.tokens.push({
                                type: "heading",
                                depth: cap[1].length,
                                text: cap[2]
                            });
                            continue
                        }
                        if (top && (cap = this.rules.nptable.exec(src))) {
                            src = src.substring(cap[0].length);
                            item = {
                                type: "table",
                                header: cap[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                                align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: cap[3].replace(/\n$/, "").split("\n")
                            };
                            for (i = 0; i < item.align.length; i++) {
                                if (/^ *-+: *$/.test(item.align[i])) {
                                    item.align[i] = "right"
                                } else if (/^ *:-+: *$/.test(item.align[i])) {
                                    item.align[i] = "center"
                                } else if (/^ *:-+ *$/.test(item.align[i])) {
                                    item.align[i] = "left"
                                } else {
                                    item.align[i] = null
                                }
                            }
                            for (i = 0; i < item.cells.length; i++) {
                                item.cells[i] = item.cells[i].split(/ *\| */)
                            }
                            this.tokens.push(item);
                            continue
                        }
                        if (cap = this.rules.lheading.exec(src)) {
                            src = src.substring(cap[0].length);
                            this.tokens.push({
                                type: "heading",
                                depth: cap[2] === "=" ? 1 : 2,
                                text: cap[1]
                            });
                            continue
                        }
                        if (cap = this.rules.hr.exec(src)) {
                            src = src.substring(cap[0].length);
                            this.tokens.push({
                                type: "hr"
                            });
                            continue
                        }
                        if (cap = this.rules.blockquote.exec(src)) {
                            src = src.substring(cap[0].length);
                            this.tokens.push({
                                type: "blockquote_start"
                            });
                            cap = cap[0].replace(/^ *> ?/gm, "");
                            this.token(cap, top, true);
                            this.tokens.push({
                                type: "blockquote_end"
                            });
                            continue
                        }
                        if (cap = this.rules.list.exec(src)) {
                            src = src.substring(cap[0].length);
                            bull = cap[2];
                            this.tokens.push({
                                type: "list_start",
                                ordered: bull.length > 1
                            });
                            cap = cap[0].match(this.rules.item);
                            next = false;
                            l = cap.length;
                            i = 0;
                            for (; i < l; i++) {
                                item = cap[i];
                                space = item.length;
                                item = item.replace(/^ *([*+-]|\d+\.) +/, "");
                                if (~item.indexOf("\n ")) {
                                    space -= item.length;
                                    item = !this.options.pedantic ? item.replace(new RegExp("^ {1," + space + "}", "gm"), "") : item.replace(/^ {1,4}/gm, "")
                                }
                                if (this.options.smartLists && i !== l - 1) {
                                    b = block.bullet.exec(cap[i + 1])[0];
                                    if (bull !== b && !(bull.length > 1 && b.length > 1)) {
                                        src = cap.slice(i + 1).join("\n") + src;
                                        i = l - 1
                                    }
                                }
                                loose = next || /\n\n(?!\s*$)/.test(item);
                                if (i !== l - 1) {
                                    next = item.charAt(item.length - 1) === "\n";
                                    if (!loose) loose = next
                                }
                                this.tokens.push({
                                    type: loose ? "loose_item_start": "list_item_start"
                                });
                                this.token(item, false, bq);
                                this.tokens.push({
                                    type: "list_item_end"
                                })
                            }
                            this.tokens.push({
                                type: "list_end"
                            });
                            continue
                        }
                        if (cap = this.rules.html.exec(src)) {
                            src = src.substring(cap[0].length);
                            this.tokens.push({
                                type: this.options.sanitize ? "paragraph": "html",
                                pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
                                text: cap[0]
                            });
                            continue
                        }
                        if (!bq && top && (cap = this.rules.def.exec(src))) {
                            src = src.substring(cap[0].length);
                            this.tokens.links[cap[1].toLowerCase()] = {
                                href: cap[2],
                                title: cap[3]
                            };
                            continue
                        }
                        if (top && (cap = this.rules.table.exec(src))) {
                            src = src.substring(cap[0].length);
                            item = {
                                type: "table",
                                header: cap[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                                align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: cap[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                            };
                            for (i = 0; i < item.align.length; i++) {
                                if (/^ *-+: *$/.test(item.align[i])) {
                                    item.align[i] = "right"
                                } else if (/^ *:-+: *$/.test(item.align[i])) {
                                    item.align[i] = "center"
                                } else if (/^ *:-+ *$/.test(item.align[i])) {
                                    item.align[i] = "left"
                                } else {
                                    item.align[i] = null
                                }
                            }
                            for (i = 0; i < item.cells.length; i++) {
                                item.cells[i] = item.cells[i].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */)
                            }
                            this.tokens.push(item);
                            continue
                        }
                        if (top && (cap = this.rules.paragraph.exec(src))) {
                            src = src.substring(cap[0].length);
                            this.tokens.push({
                                type: "paragraph",
                                text: cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1]
                            });
                            continue
                        }
                        if (cap = this.rules.text.exec(src)) {
                            src = src.substring(cap[0].length);
                            this.tokens.push({
                                type: "text",
                                text: cap[0]
                            });
                            continue
                        }
                        if (src) {
                            throw new Error("Infinite loop on byte: " + src.charCodeAt(0))
                        }
                    }
                    return this.tokens
                };
                var inline = {
                    escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
                    autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
                    url: noop,
                    tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
                    link: /^!?\[(inside)\]\(href\)/,
                    reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
                    nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
                    strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
                    em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
                    code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
                    br: /^ {2,}\n(?!\s*$)/,
                    del: noop,
                    text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
                };
                inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
                inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
                inline.link = replace(inline.link)("inside", inline._inside)("href", inline._href)();
                inline.reflink = replace(inline.reflink)("inside", inline._inside)();
                inline.normal = merge({},
                inline);
                inline.pedantic = merge({},
                inline.normal, {
                    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
                });
                inline.gfm = merge({},
                inline.normal, {
                    escape: replace(inline.escape)("])", "~|])")(),
                    url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
                    del: /^~~(?=\S)([\s\S]*?\S)~~/,
                    text: replace(inline.text)("]|", "~]|")("|", "|https?://|")()
                });
                inline.breaks = merge({},
                inline.gfm, {
                    br: replace(inline.br)("{2,}", "*")(),
                    text: replace(inline.gfm.text)("{2,}", "*")()
                });
                function InlineLexer(links, options) {
                    this.options = options || marked.defaults;
                    this.links = links;
                    this.rules = inline.normal;
                    this.renderer = this.options.renderer || new Renderer;
                    this.renderer.options = this.options;
                    if (!this.links) {
                        throw new Error("Tokens array requires a `links` property.")
                    }
                    if (this.options.gfm) {
                        if (this.options.breaks) {
                            this.rules = inline.breaks
                        } else {
                            this.rules = inline.gfm
                        }
                    } else if (this.options.pedantic) {
                        this.rules = inline.pedantic
                    }
                }
                InlineLexer.rules = inline;
                InlineLexer.output = function(src, links, options) {
                    var inline = new InlineLexer(links, options);
                    return inline.output(src)
                };
                InlineLexer.prototype.output = function(src) {
                    var out = "",
                    link, text, href, cap;
                    while (src) {
                        if (cap = this.rules.escape.exec(src)) {
                            src = src.substring(cap[0].length);
                            out += cap[1];
                            continue
                        }
                        if (cap = this.rules.autolink.exec(src)) {
                            src = src.substring(cap[0].length);
                            if (cap[2] === "@") {
                                text = cap[1].charAt(6) === ":" ? this.mangle(cap[1].substring(7)) : this.mangle(cap[1]);
                                href = this.mangle("mailto:") + text
                            } else {
                                text = escape(cap[1]);
                                href = text
                            }
                            out += this.renderer.link(href, null, text);
                            continue
                        }
                        if (!this.inLink && (cap = this.rules.url.exec(src))) {
                            src = src.substring(cap[0].length);
                            text = escape(cap[1]);
                            href = text;
                            out += this.renderer.link(href, null, text);
                            continue
                        }
                        if (cap = this.rules.tag.exec(src)) {
                            if (!this.inLink && /^<a /i.test(cap[0])) {
                                this.inLink = true
                            } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
                                this.inLink = false
                            }
                            src = src.substring(cap[0].length);
                            out += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
                            continue
                        }
                        if (cap = this.rules.link.exec(src)) {
                            src = src.substring(cap[0].length);
                            this.inLink = true;
                            out += this.outputLink(cap, {
                                href: cap[2],
                                title: cap[3]
                            });
                            this.inLink = false;
                            continue
                        }
                        if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
                            src = src.substring(cap[0].length);
                            link = (cap[2] || cap[1]).replace(/\s+/g, " ");
                            link = this.links[link.toLowerCase()];
                            if (!link || !link.href) {
                                out += cap[0].charAt(0);
                                src = cap[0].substring(1) + src;
                                continue
                            }
                            this.inLink = true;
                            out += this.outputLink(cap, link);
                            this.inLink = false;
                            continue
                        }
                        if (cap = this.rules.strong.exec(src)) {
                            src = src.substring(cap[0].length);
                            out += this.renderer.strong(this.output(cap[2] || cap[1]));
                            continue
                        }
                        if (cap = this.rules.em.exec(src)) {
                            src = src.substring(cap[0].length);
                            out += this.renderer.em(this.output(cap[2] || cap[1]));
                            continue
                        }
                        if (cap = this.rules.code.exec(src)) {
                            src = src.substring(cap[0].length);
                            out += this.renderer.codespan(escape(cap[2], true));
                            continue
                        }
                        if (cap = this.rules.br.exec(src)) {
                            src = src.substring(cap[0].length);
                            out += this.renderer.br();
                            continue
                        }
                        if (cap = this.rules.del.exec(src)) {
                            src = src.substring(cap[0].length);
                            out += this.renderer.del(this.output(cap[1]));
                            continue
                        }
                        if (cap = this.rules.text.exec(src)) {
                            src = src.substring(cap[0].length);
                            out += this.renderer.text(escape(this.smartypants(cap[0])));
                            continue
                        }
                        if (src) {
                            throw new Error("Infinite loop on byte: " + src.charCodeAt(0))
                        }
                    }
                    return out
                };
                InlineLexer.prototype.outputLink = function(cap, link) {
                    var href = escape(link.href),
                    title = link.title ? escape(link.title) : null;
                    return cap[0].charAt(0) !== "!" ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]))
                };
                InlineLexer.prototype.smartypants = function(text) {
                    if (!this.options.smartypants) return text;
                    return text.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…")
                };
                InlineLexer.prototype.mangle = function(text) {
                    if (!this.options.mangle) return text;
                    var out = "",
                    l = text.length,
                    i = 0,
                    ch;
                    for (; i < l; i++) {
                        ch = text.charCodeAt(i);
                        if (Math.random() > .5) {
                            ch = "x" + ch.toString(16)
                        }
                        out += "&#" + ch + ";"
                    }
                    return out
                };
                function Renderer(options) {
                    this.options = options || {}
                }
                Renderer.prototype.code = function(code, lang, escaped) {
                    if (this.options.highlight) {
                        var out = this.options.highlight(code, lang);
                        if (out != null && out !== code) {
                            escaped = true;
                            code = out
                        }
                    }
                    if (!lang) {
                        return "<pre><code>" + (escaped ? code: escape(code, true)) + "\n</code></pre>"
                    }
                    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code: escape(code, true)) + "\n</code></pre>\n"
                };
                Renderer.prototype.blockquote = function(quote) {
                    return "<blockquote>\n" + quote + "</blockquote>\n"
                };
                Renderer.prototype.html = function(html) {
                    return html
                };
                Renderer.prototype.heading = function(text, level, raw) {
                    return "<h" + level + ' id="' + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, "-") + '">' + text + "</h" + level + ">\n"
                };
                Renderer.prototype.hr = function() {
                    return this.options.xhtml ? "<hr/>\n": "<hr>\n"
                };
                Renderer.prototype.list = function(body, ordered) {
                    var type = ordered ? "ol": "ul";
                    return "<" + type + ">\n" + body + "</" + type + ">\n"
                };
                Renderer.prototype.listitem = function(text) {
                    return "<li>" + text + "</li>\n"
                };
                Renderer.prototype.paragraph = function(text) {
                    return "<p>" + text + "</p>\n"
                };
                Renderer.prototype.table = function(header, body) {
                    return "<table>\n" + "<thead>\n" + header + "</thead>\n" + "<tbody>\n" + body + "</tbody>\n" + "</table>\n"
                };
                Renderer.prototype.tablerow = function(content) {
                    return "<tr>\n" + content + "</tr>\n"
                };
                Renderer.prototype.tablecell = function(content, flags) {
                    var type = flags.header ? "th": "td";
                    var tag = flags.align ? "<" + type + ' style="text-align:' + flags.align + '">': "<" + type + ">";
                    return tag + content + "</" + type + ">\n"
                };
                Renderer.prototype.strong = function(text) {
                    return "<strong>" + text + "</strong>"
                };
                Renderer.prototype.em = function(text) {
                    return "<em>" + text + "</em>"
                };
                Renderer.prototype.codespan = function(text) {
                    return "<code>" + text + "</code>"
                };
                Renderer.prototype.br = function() {
                    return this.options.xhtml ? "<br/>": "<br>"
                };
                Renderer.prototype.del = function(text) {
                    return "<del>" + text + "</del>"
                };
                Renderer.prototype.link = function(href, title, text) {
                    if (this.options.sanitize) {
                        try {
                            var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, "").toLowerCase()
                        } catch(e) {
                            return ""
                        }
                        if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0) {
                            return ""
                        }
                    }
                    var out = '<a href="' + href + '"';
                    if (title) {
                        out += ' title="' + title + '"'
                    }
                    out += ">" + text + "</a>";
                    return out
                };
                Renderer.prototype.image = function(href, title, text) {
                    var out = '<img src="' + href + '" alt="' + text + '"';
                    if (title) {
                        out += ' title="' + title + '"'
                    }
                    out += this.options.xhtml ? "/>": ">";
                    return out
                };
                Renderer.prototype.text = function(text) {
                    return text
                };
                function Parser(options) {
                    this.tokens = [];
                    this.token = null;
                    this.options = options || marked.defaults;
                    this.options.renderer = this.options.renderer || new Renderer;
                    this.renderer = this.options.renderer;
                    this.renderer.options = this.options
                }
                Parser.parse = function(src, options, renderer) {
                    var parser = new Parser(options, renderer);
                    return parser.parse(src)
                };
                Parser.prototype.parse = function(src) {
                    this.inline = new InlineLexer(src.links, this.options, this.renderer);
                    this.tokens = src.reverse();
                    var out = "";
                    while (this.next()) {
                        out += this.tok()
                    }
                    return out
                };
                Parser.prototype.next = function() {
                    return this.token = this.tokens.pop()
                };
                Parser.prototype.peek = function() {
                    return this.tokens[this.tokens.length - 1] || 0
                };
                Parser.prototype.parseText = function() {
                    var body = this.token.text;
                    while (this.peek().type === "text") {
                        body += "\n" + this.next().text
                    }
                    return this.inline.output(body)
                };
                Parser.prototype.tok = function() {
                    switch (this.token.type) {
                    case "space":
                        {
                            return ""
                        }
                    case "hr":
                        {
                            return this.renderer.hr()
                        }
                    case "heading":
                        {
                            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text)
                        }
                    case "code":
                        {
                            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped)
                        }
                    case "table":
                        {
                            var header = "",
                            body = "",
                            i, row, cell, flags, j;
                            cell = "";
                            for (i = 0; i < this.token.header.length; i++) {
                                flags = {
                                    header: true,
                                    align: this.token.align[i]
                                };
                                cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), {
                                    header: true,
                                    align: this.token.align[i]
                                })
                            }
                            header += this.renderer.tablerow(cell);
                            for (i = 0; i < this.token.cells.length; i++) {
                                row = this.token.cells[i];
                                cell = "";
                                for (j = 0; j < row.length; j++) {
                                    cell += this.renderer.tablecell(this.inline.output(row[j]), {
                                        header: false,
                                        align: this.token.align[j]
                                    })
                                }
                                body += this.renderer.tablerow(cell)
                            }
                            return this.renderer.table(header, body)
                        }
                    case "blockquote_start":
                        {
                            var body = "";
                            while (this.next().type !== "blockquote_end") {
                                body += this.tok()
                            }
                            return this.renderer.blockquote(body)
                        }
                    case "list_start":
                        {
                            var body = "",
                            ordered = this.token.ordered;
                            while (this.next().type !== "list_end") {
                                body += this.tok()
                            }
                            return this.renderer.list(body, ordered)
                        }
                    case "list_item_start":
                        {
                            var body = "";
                            while (this.next().type !== "list_item_end") {
                                body += this.token.type === "text" ? this.parseText() : this.tok()
                            }
                            return this.renderer.listitem(body)
                        }
                    case "loose_item_start":
                        {
                            var body = "";
                            while (this.next().type !== "list_item_end") {
                                body += this.tok()
                            }
                            return this.renderer.listitem(body)
                        }
                    case "html":
                        {
                            var html = !this.token.pre && !this.options.pedantic ? this.inline.output(this.token.text) : this.token.text;
                            return this.renderer.html(html)
                        }
                    case "paragraph":
                        {
                            return this.renderer.paragraph(this.inline.output(this.token.text))
                        }
                    case "text":
                        {
                            return this.renderer.paragraph(this.parseText())
                        }
                    }
                };
                function escape(html, encode) {
                    return html.replace(!encode ? /&(?!#?\w+;)/g: /&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
                }
                function unescape(html) {
                    return html.replace(/&([#\w]+);/g,
                    function(_, n) {
                        n = n.toLowerCase();
                        if (n === "colon") return ":";
                        if (n.charAt(0) === "#") {
                            return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode( + n.substring(1))
                        }
                        return ""
                    })
                }
                function replace(regex, opt) {
                    regex = regex.source;
                    opt = opt || "";
                    return function self(name, val) {
                        if (!name) return new RegExp(regex, opt);
                        val = val.source || val;
                        val = val.replace(/(^|[^\[])\^/g, "$1");
                        regex = regex.replace(name, val);
                        return self
                    }
                }
                function noop() {}
                noop.exec = noop;
                function merge(obj) {
                    var i = 1,
                    target, key;
                    for (; i < arguments.length; i++) {
                        target = arguments[i];
                        for (key in target) {
                            if (Object.prototype.hasOwnProperty.call(target, key)) {
                                obj[key] = target[key]
                            }
                        }
                    }
                    return obj
                }
                function marked(src, opt, callback) {
                    if (callback || typeof opt === "function") {
                        if (!callback) {
                            callback = opt;
                            opt = null
                        }
                        opt = merge({},
                        marked.defaults, opt || {});
                        var highlight = opt.highlight,
                        tokens, pending, i = 0;
                        try {
                            tokens = Lexer.lex(src, opt)
                        } catch(e) {
                            return callback(e)
                        }
                        pending = tokens.length;
                        var done = function(err) {
                            if (err) {
                                opt.highlight = highlight;
                                return callback(err)
                            }
                            var out;
                            try {
                                out = Parser.parse(tokens, opt)
                            } catch(e) {
                                err = e
                            }
                            opt.highlight = highlight;
                            return err ? callback(err) : callback(null, out)
                        };
                        if (!highlight || highlight.length < 3) {
                            return done()
                        }
                        delete opt.highlight;
                        if (!pending) return done();
                        for (; i < tokens.length; i++) { (function(token) {
                                if (token.type !== "code") {
                                    return--pending || done()
                                }
                                return highlight(token.text, token.lang,
                                function(err, code) {
                                    if (err) return done(err);
                                    if (code == null || code === token.text) {
                                        return--pending || done()
                                    }
                                    token.text = code;
                                    token.escaped = true; --pending || done()
                                })
                            })(tokens[i])
                        }
                        return
                    }
                    try {
                        if (opt) opt = merge({},
                        marked.defaults, opt);
                        return Parser.parse(Lexer.lex(src, opt), opt)
                    } catch(e) {
                        e.message += "\nPlease report this to https://github.com/chjj/marked.";
                        if ((opt || marked.defaults).silent) {
                            return "<p>An error occured:</p><pre>" + escape(e.message + "", true) + "</pre>"
                        }
                        throw e
                    }
                }
                marked.options = marked.setOptions = function(opt) {
                    merge(marked.defaults, opt);
                    return marked
                };
                marked.defaults = {
                    gfm: true,
                    tables: true,
                    breaks: false,
                    pedantic: false,
                    sanitize: false,
                    sanitizer: null,
                    mangle: true,
                    smartLists: false,
                    silent: false,
                    highlight: null,
                    langPrefix: "lang-",
                    smartypants: false,
                    headerPrefix: "",
                    renderer: new Renderer,
                    xhtml: false
                };
                marked.Parser = Parser;
                marked.parser = Parser.parse;
                marked.Renderer = Renderer;
                marked.Lexer = Lexer;
                marked.lexer = Lexer.lex;
                marked.InlineLexer = InlineLexer;
                marked.inlineLexer = InlineLexer.output;
                marked.parse = marked;
                if (typeof module !== "undefined" && typeof exports === "object") {
                    module.exports = marked
                } else if (typeof define === "function" && define.amd) {
                    define(function() {
                        return marked
                    })
                } else {
                    this.marked = marked
                }
            }).call(function() {
                return this || (typeof window !== "undefined" ? window: global)
            } ())
        }).call(this, typeof global !== "undefined" ? global: typeof self !== "undefined" ? self: typeof window !== "undefined" ? window: {})
    },
    {}],
    36 : [function(require, module, exports) {
        d3 = require("d3");
        marked = require("marked");
        js_yaml = require("js-yaml");
        src = location.hash.replace(/^#/, "") || "main.js";
        body = d3.select("body");
        d3.text(src,
        function(e, d) {
            if (!e) {
                eval(d)
            } else {
                console.log(e)
            }
        })
    },
    {
        d3: 1,
        "js-yaml": 5,
        marked: 35
    }],
    37 : [function(require, module, exports) {},
    {}]
},
{},
[36]);
