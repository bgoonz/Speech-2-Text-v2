(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  [
    function (e, t) {
      var n,
        r,
        i = (e.exports = {});
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function l(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout)
          return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" === typeof setTimeout ? setTimeout : o;
        } catch (e) {
          n = o;
        }
        try {
          r = "function" === typeof clearTimeout ? clearTimeout : a;
        } catch (e) {
          r = a;
        }
      })();
      var u,
        s = [],
        c = !1,
        f = -1;
      function d() {
        c &&
          u &&
          ((c = !1), u.length ? (s = u.concat(s)) : (f = -1), s.length && p());
      }
      function p() {
        if (!c) {
          var e = l(d);
          c = !0;
          for (var t = s.length; t; ) {
            for (u = s, s = []; ++f < t; ) u && u[f].run();
            (f = -1), (t = s.length);
          }
          (u = null),
            (c = !1),
            (function (e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === a || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function h(e, t) {
        (this.fun = e), (this.array = t);
      }
      function m() {}
      (i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        s.push(new h(e, t)), 1 !== s.length || c || l(p);
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = m),
        (i.addListener = m),
        (i.once = m),
        (i.off = m),
        (i.removeListener = m),
        (i.removeAllListeners = m),
        (i.emit = m),
        (i.prependListener = m),
        (i.prependOnceListener = m),
        (i.listeners = function (e) {
          return [];
        }),
        (i.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        var r = n(52),
          i = n(53),
          o = n(54);
        function a() {
          return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function l(e, t) {
          if (a() < t) throw new RangeError("Invalid typed array length");
          return (
            u.TYPED_ARRAY_SUPPORT
              ? ((e = new Uint8Array(t)).__proto__ = u.prototype)
              : (null === e && (e = new u(t)), (e.length = t)),
            e
          );
        }
        function u(e, t, n) {
          if (!u.TYPED_ARRAY_SUPPORT && !(this instanceof u))
            return new u(e, t, n);
          if ("number" === typeof e) {
            if ("string" === typeof t)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return f(this, e);
          }
          return s(this, e, t, n);
        }
        function s(e, t, n, r) {
          if ("number" === typeof t)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer
            ? (function (e, t, n, r) {
                if ((t.byteLength, n < 0 || t.byteLength < n))
                  throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0))
                  throw new RangeError("'length' is out of bounds");
                t =
                  void 0 === n && void 0 === r
                    ? new Uint8Array(t)
                    : void 0 === r
                    ? new Uint8Array(t, n)
                    : new Uint8Array(t, n, r);
                u.TYPED_ARRAY_SUPPORT
                  ? ((e = t).__proto__ = u.prototype)
                  : (e = d(e, t));
                return e;
              })(e, t, n, r)
            : "string" === typeof t
            ? (function (e, t, n) {
                ("string" === typeof n && "" !== n) || (n = "utf8");
                if (!u.isEncoding(n))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var r = 0 | h(t, n),
                  i = (e = l(e, r)).write(t, n);
                i !== r && (e = e.slice(0, i));
                return e;
              })(e, t, n)
            : (function (e, t) {
                if (u.isBuffer(t)) {
                  var n = 0 | p(t.length);
                  return 0 === (e = l(e, n)).length
                    ? e
                    : (t.copy(e, 0, 0, n), e);
                }
                if (t) {
                  if (
                    ("undefined" !== typeof ArrayBuffer &&
                      t.buffer instanceof ArrayBuffer) ||
                    "length" in t
                  )
                    return "number" !== typeof t.length || (r = t.length) !== r
                      ? l(e, 0)
                      : d(e, t);
                  if ("Buffer" === t.type && o(t.data)) return d(e, t.data);
                }
                var r;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(e, t);
        }
        function c(e) {
          if ("number" !== typeof e)
            throw new TypeError('"size" argument must be a number');
          if (e < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function f(e, t) {
          if ((c(t), (e = l(e, t < 0 ? 0 : 0 | p(t))), !u.TYPED_ARRAY_SUPPORT))
            for (var n = 0; n < t; ++n) e[n] = 0;
          return e;
        }
        function d(e, t) {
          var n = t.length < 0 ? 0 : 0 | p(t.length);
          e = l(e, n);
          for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
          return e;
        }
        function p(e) {
          if (e >= a())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                a().toString(16) +
                " bytes"
            );
          return 0 | e;
        }
        function h(e, t) {
          if (u.isBuffer(e)) return e.length;
          if (
            "undefined" !== typeof ArrayBuffer &&
            "function" === typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
          )
            return e.byteLength;
          "string" !== typeof e && (e = "" + e);
          var n = e.length;
          if (0 === n) return 0;
          for (var r = !1; ; )
            switch (t) {
              case "ascii":
              case "latin1":
              case "binary":
                return n;
              case "utf8":
              case "utf-8":
              case void 0:
                return B(e).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * n;
              case "hex":
                return n >>> 1;
              case "base64":
                return z(e).length;
              default:
                if (r) return B(e).length;
                (t = ("" + t).toLowerCase()), (r = !0);
            }
        }
        function m(e, t, n) {
          var r = e[t];
          (e[t] = e[n]), (e[n] = r);
        }
        function y(e, t, n, r, i) {
          if (0 === e.length) return -1;
          if (
            ("string" === typeof n
              ? ((r = n), (n = 0))
              : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
            (n = +n),
            isNaN(n) && (n = i ? 0 : e.length - 1),
            n < 0 && (n = e.length + n),
            n >= e.length)
          ) {
            if (i) return -1;
            n = e.length - 1;
          } else if (n < 0) {
            if (!i) return -1;
            n = 0;
          }
          if (("string" === typeof t && (t = u.from(t, r)), u.isBuffer(t)))
            return 0 === t.length ? -1 : g(e, t, n, r, i);
          if ("number" === typeof t)
            return (
              (t &= 255),
              u.TYPED_ARRAY_SUPPORT &&
              "function" === typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(e, t, n)
                  : Uint8Array.prototype.lastIndexOf.call(e, t, n)
                : g(e, [t], n, r, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function g(e, t, n, r, i) {
          var o,
            a = 1,
            l = e.length,
            u = t.length;
          if (
            void 0 !== r &&
            ("ucs2" === (r = String(r).toLowerCase()) ||
              "ucs-2" === r ||
              "utf16le" === r ||
              "utf-16le" === r)
          ) {
            if (e.length < 2 || t.length < 2) return -1;
            (a = 2), (l /= 2), (u /= 2), (n /= 2);
          }
          function s(e, t) {
            return 1 === a ? e[t] : e.readUInt16BE(t * a);
          }
          if (i) {
            var c = -1;
            for (o = n; o < l; o++)
              if (s(e, o) === s(t, -1 === c ? 0 : o - c)) {
                if ((-1 === c && (c = o), o - c + 1 === u)) return c * a;
              } else -1 !== c && (o -= o - c), (c = -1);
          } else
            for (n + u > l && (n = l - u), o = n; o >= 0; o--) {
              for (var f = !0, d = 0; d < u; d++)
                if (s(e, o + d) !== s(t, d)) {
                  f = !1;
                  break;
                }
              if (f) return o;
            }
          return -1;
        }
        function b(e, t, n, r) {
          n = Number(n) || 0;
          var i = e.length - n;
          r ? (r = Number(r)) > i && (r = i) : (r = i);
          var o = t.length;
          if (o % 2 !== 0) throw new TypeError("Invalid hex string");
          r > o / 2 && (r = o / 2);
          for (var a = 0; a < r; ++a) {
            var l = parseInt(t.substr(2 * a, 2), 16);
            if (isNaN(l)) return a;
            e[n + a] = l;
          }
          return a;
        }
        function v(e, t, n, r) {
          return W(B(t, e.length - n), e, n, r);
        }
        function w(e, t, n, r) {
          return W(
            (function (e) {
              for (var t = [], n = 0; n < e.length; ++n)
                t.push(255 & e.charCodeAt(n));
              return t;
            })(t),
            e,
            n,
            r
          );
        }
        function _(e, t, n, r) {
          return w(e, t, n, r);
        }
        function S(e, t, n, r) {
          return W(z(t), e, n, r);
        }
        function E(e, t, n, r) {
          return W(
            (function (e, t) {
              for (
                var n, r, i, o = [], a = 0;
                a < e.length && !((t -= 2) < 0);
                ++a
              )
                (n = e.charCodeAt(a)),
                  (r = n >> 8),
                  (i = n % 256),
                  o.push(i),
                  o.push(r);
              return o;
            })(t, e.length - n),
            e,
            n,
            r
          );
        }
        function k(e, t, n) {
          return 0 === t && n === e.length
            ? r.fromByteArray(e)
            : r.fromByteArray(e.slice(t, n));
        }
        function T(e, t, n) {
          n = Math.min(e.length, n);
          for (var r = [], i = t; i < n; ) {
            var o,
              a,
              l,
              u,
              s = e[i],
              c = null,
              f = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
            if (i + f <= n)
              switch (f) {
                case 1:
                  s < 128 && (c = s);
                  break;
                case 2:
                  128 === (192 & (o = e[i + 1])) &&
                    (u = ((31 & s) << 6) | (63 & o)) > 127 &&
                    (c = u);
                  break;
                case 3:
                  (o = e[i + 1]),
                    (a = e[i + 2]),
                    128 === (192 & o) &&
                      128 === (192 & a) &&
                      (u = ((15 & s) << 12) | ((63 & o) << 6) | (63 & a)) >
                        2047 &&
                      (u < 55296 || u > 57343) &&
                      (c = u);
                  break;
                case 4:
                  (o = e[i + 1]),
                    (a = e[i + 2]),
                    (l = e[i + 3]),
                    128 === (192 & o) &&
                      128 === (192 & a) &&
                      128 === (192 & l) &&
                      (u =
                        ((15 & s) << 18) |
                        ((63 & o) << 12) |
                        ((63 & a) << 6) |
                        (63 & l)) > 65535 &&
                      u < 1114112 &&
                      (c = u);
              }
            null === c
              ? ((c = 65533), (f = 1))
              : c > 65535 &&
                ((c -= 65536),
                r.push(((c >>> 10) & 1023) | 55296),
                (c = 56320 | (1023 & c))),
              r.push(c),
              (i += f);
          }
          return (function (e) {
            var t = e.length;
            if (t <= x) return String.fromCharCode.apply(String, e);
            var n = "",
              r = 0;
            for (; r < t; )
              n += String.fromCharCode.apply(String, e.slice(r, (r += x)));
            return n;
          })(r);
        }
        (t.Buffer = u),
          (t.SlowBuffer = function (e) {
            +e != e && (e = 0);
            return u.alloc(+e);
          }),
          (t.INSPECT_MAX_BYTES = 50),
          (u.TYPED_ARRAY_SUPPORT =
            void 0 !== e.TYPED_ARRAY_SUPPORT
              ? e.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var e = new Uint8Array(1);
                    return (
                      (e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === e.foo() &&
                        "function" === typeof e.subarray &&
                        0 === e.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (t.kMaxLength = a()),
          (u.poolSize = 8192),
          (u._augment = function (e) {
            return (e.__proto__ = u.prototype), e;
          }),
          (u.from = function (e, t, n) {
            return s(null, e, t, n);
          }),
          u.TYPED_ARRAY_SUPPORT &&
            ((u.prototype.__proto__ = Uint8Array.prototype),
            (u.__proto__ = Uint8Array),
            "undefined" !== typeof Symbol &&
              Symbol.species &&
              u[Symbol.species] === u &&
              Object.defineProperty(u, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (u.alloc = function (e, t, n) {
            return (function (e, t, n, r) {
              return (
                c(t),
                t <= 0
                  ? l(e, t)
                  : void 0 !== n
                  ? "string" === typeof r
                    ? l(e, t).fill(n, r)
                    : l(e, t).fill(n)
                  : l(e, t)
              );
            })(null, e, t, n);
          }),
          (u.allocUnsafe = function (e) {
            return f(null, e);
          }),
          (u.allocUnsafeSlow = function (e) {
            return f(null, e);
          }),
          (u.isBuffer = function (e) {
            return !(null == e || !e._isBuffer);
          }),
          (u.compare = function (e, t) {
            if (!u.isBuffer(e) || !u.isBuffer(t))
              throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (
              var n = e.length, r = t.length, i = 0, o = Math.min(n, r);
              i < o;
              ++i
            )
              if (e[i] !== t[i]) {
                (n = e[i]), (r = t[i]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (u.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (u.concat = function (e, t) {
            if (!o(e))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === e.length) return u.alloc(0);
            var n;
            if (void 0 === t)
              for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var r = u.allocUnsafe(t),
              i = 0;
            for (n = 0; n < e.length; ++n) {
              var a = e[n];
              if (!u.isBuffer(a))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              a.copy(r, i), (i += a.length);
            }
            return r;
          }),
          (u.byteLength = h),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function () {
            var e = this.length;
            if (e % 2 !== 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) m(this, t, t + 1);
            return this;
          }),
          (u.prototype.swap32 = function () {
            var e = this.length;
            if (e % 4 !== 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4)
              m(this, t, t + 3), m(this, t + 1, t + 2);
            return this;
          }),
          (u.prototype.swap64 = function () {
            var e = this.length;
            if (e % 8 !== 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8)
              m(this, t, t + 7),
                m(this, t + 1, t + 6),
                m(this, t + 2, t + 5),
                m(this, t + 3, t + 4);
            return this;
          }),
          (u.prototype.toString = function () {
            var e = 0 | this.length;
            return 0 === e
              ? ""
              : 0 === arguments.length
              ? T(this, 0, e)
              : function (e, t, n) {
                  var r = !1;
                  if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                    return "";
                  if (
                    ((void 0 === n || n > this.length) && (n = this.length),
                    n <= 0)
                  )
                    return "";
                  if ((n >>>= 0) <= (t >>>= 0)) return "";
                  for (e || (e = "utf8"); ; )
                    switch (e) {
                      case "hex":
                        return O(this, t, n);
                      case "utf8":
                      case "utf-8":
                        return T(this, t, n);
                      case "ascii":
                        return R(this, t, n);
                      case "latin1":
                      case "binary":
                        return C(this, t, n);
                      case "base64":
                        return k(this, t, n);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return P(this, t, n);
                      default:
                        if (r) throw new TypeError("Unknown encoding: " + e);
                        (e = (e + "").toLowerCase()), (r = !0);
                    }
                }.apply(this, arguments);
          }),
          (u.prototype.equals = function (e) {
            if (!u.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === u.compare(this, e);
          }),
          (u.prototype.inspect = function () {
            var e = "",
              n = t.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((e = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
                this.length > n && (e += " ... ")),
              "<Buffer " + e + ">"
            );
          }),
          (u.prototype.compare = function (e, t, n, r, i) {
            if (!u.isBuffer(e))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === t && (t = 0),
              void 0 === n && (n = e ? e.length : 0),
              void 0 === r && (r = 0),
              void 0 === i && (i = this.length),
              t < 0 || n > e.length || r < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (r >= i && t >= n) return 0;
            if (r >= i) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            for (
              var o = (i >>>= 0) - (r >>>= 0),
                a = (n >>>= 0) - (t >>>= 0),
                l = Math.min(o, a),
                s = this.slice(r, i),
                c = e.slice(t, n),
                f = 0;
              f < l;
              ++f
            )
              if (s[f] !== c[f]) {
                (o = s[f]), (a = c[f]);
                break;
              }
            return o < a ? -1 : a < o ? 1 : 0;
          }),
          (u.prototype.includes = function (e, t, n) {
            return -1 !== this.indexOf(e, t, n);
          }),
          (u.prototype.indexOf = function (e, t, n) {
            return y(this, e, t, n, !0);
          }),
          (u.prototype.lastIndexOf = function (e, t, n) {
            return y(this, e, t, n, !1);
          }),
          (u.prototype.write = function (e, t, n, r) {
            if (void 0 === t) (r = "utf8"), (n = this.length), (t = 0);
            else if (void 0 === n && "string" === typeof t)
              (r = t), (n = this.length), (t = 0);
            else {
              if (!isFinite(t))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (t |= 0),
                isFinite(n)
                  ? ((n |= 0), void 0 === r && (r = "utf8"))
                  : ((r = n), (n = void 0));
            }
            var i = this.length - t;
            if (
              ((void 0 === n || n > i) && (n = i),
              (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var o = !1; ; )
              switch (r) {
                case "hex":
                  return b(this, e, t, n);
                case "utf8":
                case "utf-8":
                  return v(this, e, t, n);
                case "ascii":
                  return w(this, e, t, n);
                case "latin1":
                case "binary":
                  return _(this, e, t, n);
                case "base64":
                  return S(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return E(this, e, t, n);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + r);
                  (r = ("" + r).toLowerCase()), (o = !0);
              }
          }),
          (u.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        var x = 4096;
        function R(e, t, n) {
          var r = "";
          n = Math.min(e.length, n);
          for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
          return r;
        }
        function C(e, t, n) {
          var r = "";
          n = Math.min(e.length, n);
          for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
          return r;
        }
        function O(e, t, n) {
          var r = e.length;
          (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
          for (var i = "", o = t; o < n; ++o) i += F(e[o]);
          return i;
        }
        function P(e, t, n) {
          for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2)
            i += String.fromCharCode(r[o] + 256 * r[o + 1]);
          return i;
        }
        function M(e, t, n) {
          if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
          if (e + t > n)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function A(e, t, n, r, i, o) {
          if (!u.isBuffer(e))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t > i || t < o)
            throw new RangeError('"value" argument is out of bounds');
          if (n + r > e.length) throw new RangeError("Index out of range");
        }
        function j(e, t, n, r) {
          t < 0 && (t = 65535 + t + 1);
          for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i)
            e[n + i] =
              (t & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
        }
        function N(e, t, n, r) {
          t < 0 && (t = 4294967295 + t + 1);
          for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i)
            e[n + i] = (t >>> (8 * (r ? i : 3 - i))) & 255;
        }
        function L(e, t, n, r, i, o) {
          if (n + r > e.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("Index out of range");
        }
        function D(e, t, n, r, o) {
          return o || L(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4;
        }
        function I(e, t, n, r, o) {
          return o || L(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8;
        }
        (u.prototype.slice = function (e, t) {
          var n,
            r = this.length;
          if (
            ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            (t = void 0 === t ? r : ~~t) < 0
              ? (t += r) < 0 && (t = 0)
              : t > r && (t = r),
            t < e && (t = e),
            u.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(e, t)).__proto__ = u.prototype;
          else {
            var i = t - e;
            n = new u(i, void 0);
            for (var o = 0; o < i; ++o) n[o] = this[o + e];
          }
          return n;
        }),
          (u.prototype.readUIntLE = function (e, t, n) {
            (e |= 0), (t |= 0), n || M(e, t, this.length);
            for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
              r += this[e + o] * i;
            return r;
          }),
          (u.prototype.readUIntBE = function (e, t, n) {
            (e |= 0), (t |= 0), n || M(e, t, this.length);
            for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); )
              r += this[e + --t] * i;
            return r;
          }),
          (u.prototype.readUInt8 = function (e, t) {
            return t || M(e, 1, this.length), this[e];
          }),
          (u.prototype.readUInt16LE = function (e, t) {
            return t || M(e, 2, this.length), this[e] | (this[e + 1] << 8);
          }),
          (u.prototype.readUInt16BE = function (e, t) {
            return t || M(e, 2, this.length), (this[e] << 8) | this[e + 1];
          }),
          (u.prototype.readUInt32LE = function (e, t) {
            return (
              t || M(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
          (u.prototype.readUInt32BE = function (e, t) {
            return (
              t || M(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
          (u.prototype.readIntLE = function (e, t, n) {
            (e |= 0), (t |= 0), n || M(e, t, this.length);
            for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
              r += this[e + o] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
          }),
          (u.prototype.readIntBE = function (e, t, n) {
            (e |= 0), (t |= 0), n || M(e, t, this.length);
            for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256); )
              o += this[e + --r] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
          }),
          (u.prototype.readInt8 = function (e, t) {
            return (
              t || M(e, 1, this.length),
              128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            );
          }),
          (u.prototype.readInt16LE = function (e, t) {
            t || M(e, 2, this.length);
            var n = this[e] | (this[e + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt16BE = function (e, t) {
            t || M(e, 2, this.length);
            var n = this[e + 1] | (this[e] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt32LE = function (e, t) {
            return (
              t || M(e, 4, this.length),
              this[e] |
                (this[e + 1] << 8) |
                (this[e + 2] << 16) |
                (this[e + 3] << 24)
            );
          }),
          (u.prototype.readInt32BE = function (e, t) {
            return (
              t || M(e, 4, this.length),
              (this[e] << 24) |
                (this[e + 1] << 16) |
                (this[e + 2] << 8) |
                this[e + 3]
            );
          }),
          (u.prototype.readFloatLE = function (e, t) {
            return t || M(e, 4, this.length), i.read(this, e, !0, 23, 4);
          }),
          (u.prototype.readFloatBE = function (e, t) {
            return t || M(e, 4, this.length), i.read(this, e, !1, 23, 4);
          }),
          (u.prototype.readDoubleLE = function (e, t) {
            return t || M(e, 8, this.length), i.read(this, e, !0, 52, 8);
          }),
          (u.prototype.readDoubleBE = function (e, t) {
            return t || M(e, 8, this.length), i.read(this, e, !1, 52, 8);
          }),
          (u.prototype.writeUIntLE = function (e, t, n, r) {
            ((e = +e), (t |= 0), (n |= 0), r) ||
              A(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var i = 1,
              o = 0;
            for (this[t] = 255 & e; ++o < n && (i *= 256); )
              this[t + o] = (e / i) & 255;
            return t + n;
          }),
          (u.prototype.writeUIntBE = function (e, t, n, r) {
            ((e = +e), (t |= 0), (n |= 0), r) ||
              A(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var i = n - 1,
              o = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
              this[t + i] = (e / o) & 255;
            return t + n;
          }),
          (u.prototype.writeUInt8 = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || A(this, e, t, 1, 255, 0),
              u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (u.prototype.writeUInt16LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || A(this, e, t, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : j(this, e, t, !0),
              t + 2
            );
          }),
          (u.prototype.writeUInt16BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || A(this, e, t, 2, 65535, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : j(this, e, t, !1),
              t + 2
            );
          }),
          (u.prototype.writeUInt32LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || A(this, e, t, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = 255 & e))
                : N(this, e, t, !0),
              t + 4
            );
          }),
          (u.prototype.writeUInt32BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || A(this, e, t, 4, 4294967295, 0),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : N(this, e, t, !1),
              t + 4
            );
          }),
          (u.prototype.writeIntLE = function (e, t, n, r) {
            if (((e = +e), (t |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              A(this, e, t, n, i - 1, -i);
            }
            var o = 0,
              a = 1,
              l = 0;
            for (this[t] = 255 & e; ++o < n && (a *= 256); )
              e < 0 && 0 === l && 0 !== this[t + o - 1] && (l = 1),
                (this[t + o] = (((e / a) >> 0) - l) & 255);
            return t + n;
          }),
          (u.prototype.writeIntBE = function (e, t, n, r) {
            if (((e = +e), (t |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              A(this, e, t, n, i - 1, -i);
            }
            var o = n - 1,
              a = 1,
              l = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (a *= 256); )
              e < 0 && 0 === l && 0 !== this[t + o + 1] && (l = 1),
                (this[t + o] = (((e / a) >> 0) - l) & 255);
            return t + n;
          }),
          (u.prototype.writeInt8 = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || A(this, e, t, 1, 127, -128),
              u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
              e < 0 && (e = 255 + e + 1),
              (this[t] = 255 & e),
              t + 1
            );
          }),
          (u.prototype.writeInt16LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || A(this, e, t, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
                : j(this, e, t, !0),
              t + 2
            );
          }),
          (u.prototype.writeInt16BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || A(this, e, t, 2, 32767, -32768),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
                : j(this, e, t, !1),
              t + 2
            );
          }),
          (u.prototype.writeInt32LE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || A(this, e, t, 4, 2147483647, -2147483648),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  (this[t + 2] = e >>> 16),
                  (this[t + 3] = e >>> 24))
                : N(this, e, t, !0),
              t + 4
            );
          }),
          (u.prototype.writeInt32BE = function (e, t, n) {
            return (
              (e = +e),
              (t |= 0),
              n || A(this, e, t, 4, 2147483647, -2147483648),
              e < 0 && (e = 4294967295 + e + 1),
              u.TYPED_ARRAY_SUPPORT
                ? ((this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e))
                : N(this, e, t, !1),
              t + 4
            );
          }),
          (u.prototype.writeFloatLE = function (e, t, n) {
            return D(this, e, t, !0, n);
          }),
          (u.prototype.writeFloatBE = function (e, t, n) {
            return D(this, e, t, !1, n);
          }),
          (u.prototype.writeDoubleLE = function (e, t, n) {
            return I(this, e, t, !0, n);
          }),
          (u.prototype.writeDoubleBE = function (e, t, n) {
            return I(this, e, t, !1, n);
          }),
          (u.prototype.copy = function (e, t, n, r) {
            if (
              (n || (n = 0),
              r || 0 === r || (r = this.length),
              t >= e.length && (t = e.length),
              t || (t = 0),
              r > 0 && r < n && (r = n),
              r === n)
            )
              return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
              e.length - t < r - n && (r = e.length - t + n);
            var i,
              o = r - n;
            if (this === e && n < t && t < r)
              for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
            else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < o; ++i) e[i + t] = this[i + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
            return o;
          }),
          (u.prototype.fill = function (e, t, n, r) {
            if ("string" === typeof e) {
              if (
                ("string" === typeof t
                  ? ((r = t), (t = 0), (n = this.length))
                  : "string" === typeof n && ((r = n), (n = this.length)),
                1 === e.length)
              ) {
                var i = e.charCodeAt(0);
                i < 256 && (e = i);
              }
              if (void 0 !== r && "string" !== typeof r)
                throw new TypeError("encoding must be a string");
              if ("string" === typeof r && !u.isEncoding(r))
                throw new TypeError("Unknown encoding: " + r);
            } else "number" === typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n)
              throw new RangeError("Out of range index");
            if (n <= t) return this;
            var o;
            if (
              ((t >>>= 0),
              (n = void 0 === n ? this.length : n >>> 0),
              e || (e = 0),
              "number" === typeof e)
            )
              for (o = t; o < n; ++o) this[o] = e;
            else {
              var a = u.isBuffer(e) ? e : B(new u(e, r).toString()),
                l = a.length;
              for (o = 0; o < n - t; ++o) this[o + t] = a[o % l];
            }
            return this;
          });
        var U = /[^+\/0-9A-Za-z-_]/g;
        function F(e) {
          return e < 16 ? "0" + e.toString(16) : e.toString(16);
        }
        function B(e, t) {
          var n;
          t = t || 1 / 0;
          for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
            if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
              if (!i) {
                if (n > 56319) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (a + 1 === r) {
                  (t -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = n;
                continue;
              }
              if (n < 56320) {
                (t -= 3) > -1 && o.push(239, 191, 189), (i = n);
                continue;
              }
              n = 65536 + (((i - 55296) << 10) | (n - 56320));
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), n < 128)) {
              if ((t -= 1) < 0) break;
              o.push(n);
            } else if (n < 2048) {
              if ((t -= 2) < 0) break;
              o.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((t -= 3) < 0) break;
              o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error("Invalid code point");
              if ((t -= 4) < 0) break;
              o.push(
                (n >> 18) | 240,
                ((n >> 12) & 63) | 128,
                ((n >> 6) & 63) | 128,
                (63 & n) | 128
              );
            }
          }
          return o;
        }
        function z(e) {
          return r.toByteArray(
            (function (e) {
              if (
                (e = (function (e) {
                  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
                })(e).replace(U, "")).length < 2
              )
                return "";
              for (; e.length % 4 !== 0; ) e += "=";
              return e;
            })(e)
          );
        }
        function W(e, t, n, r) {
          for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i)
            t[i + n] = e[i];
          return i;
        }
      }.call(this, n(4)));
    },
    function (e, t) {
      "function" === typeof Object.create
        ? (e.exports = function (e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })));
          })
        : (e.exports = function (e, t) {
            if (t) {
              e.super_ = t;
              var n = function () {};
              (n.prototype = t.prototype),
                (e.prototype = new n()),
                (e.prototype.constructor = e);
            }
          });
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(43);
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" === typeof window && (n = window);
      }
      e.exports = n;
    },
    function (e, t, n) {
      (function (e) {
        var r =
            Object.getOwnPropertyDescriptors ||
            function (e) {
              for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++)
                n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
              return n;
            },
          i = /%[sdj%]/g;
        (t.format = function (e) {
          if (!g(e)) {
            for (var t = [], n = 0; n < arguments.length; n++)
              t.push(l(arguments[n]));
            return t.join(" ");
          }
          n = 1;
          for (
            var r = arguments,
              o = r.length,
              a = String(e).replace(i, function (e) {
                if ("%%" === e) return "%";
                if (n >= o) return e;
                switch (e) {
                  case "%s":
                    return String(r[n++]);
                  case "%d":
                    return Number(r[n++]);
                  case "%j":
                    try {
                      return JSON.stringify(r[n++]);
                    } catch (t) {
                      return "[Circular]";
                    }
                  default:
                    return e;
                }
              }),
              u = r[n];
            n < o;
            u = r[++n]
          )
            m(u) || !w(u) ? (a += " " + u) : (a += " " + l(u));
          return a;
        }),
          (t.deprecate = function (n, r) {
            if ("undefined" !== typeof e && !0 === e.noDeprecation) return n;
            if ("undefined" === typeof e)
              return function () {
                return t.deprecate(n, r).apply(this, arguments);
              };
            var i = !1;
            return function () {
              if (!i) {
                if (e.throwDeprecation) throw new Error(r);
                e.traceDeprecation ? console.trace(r) : console.error(r),
                  (i = !0);
              }
              return n.apply(this, arguments);
            };
          });
        var o,
          a = {};
        function l(e, n) {
          var r = { seen: [], stylize: s };
          return (
            arguments.length >= 3 && (r.depth = arguments[2]),
            arguments.length >= 4 && (r.colors = arguments[3]),
            h(n) ? (r.showHidden = n) : n && t._extend(r, n),
            b(r.showHidden) && (r.showHidden = !1),
            b(r.depth) && (r.depth = 2),
            b(r.colors) && (r.colors = !1),
            b(r.customInspect) && (r.customInspect = !0),
            r.colors && (r.stylize = u),
            c(r, e, r.depth)
          );
        }
        function u(e, t) {
          var n = l.styles[t];
          return n
            ? "\x1b[" +
                l.colors[n][0] +
                "m" +
                e +
                "\x1b[" +
                l.colors[n][1] +
                "m"
            : e;
        }
        function s(e, t) {
          return e;
        }
        function c(e, n, r) {
          if (
            e.customInspect &&
            n &&
            E(n.inspect) &&
            n.inspect !== t.inspect &&
            (!n.constructor || n.constructor.prototype !== n)
          ) {
            var i = n.inspect(r, e);
            return g(i) || (i = c(e, i, r)), i;
          }
          var o = (function (e, t) {
            if (b(t)) return e.stylize("undefined", "undefined");
            if (g(t)) {
              var n =
                "'" +
                JSON.stringify(t)
                  .replace(/^"|"$/g, "")
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"') +
                "'";
              return e.stylize(n, "string");
            }
            if (y(t)) return e.stylize("" + t, "number");
            if (h(t)) return e.stylize("" + t, "boolean");
            if (m(t)) return e.stylize("null", "null");
          })(e, n);
          if (o) return o;
          var a = Object.keys(n),
            l = (function (e) {
              var t = {};
              return (
                e.forEach(function (e, n) {
                  t[e] = !0;
                }),
                t
              );
            })(a);
          if (
            (e.showHidden && (a = Object.getOwnPropertyNames(n)),
            S(n) &&
              (a.indexOf("message") >= 0 || a.indexOf("description") >= 0))
          )
            return f(n);
          if (0 === a.length) {
            if (E(n)) {
              var u = n.name ? ": " + n.name : "";
              return e.stylize("[Function" + u + "]", "special");
            }
            if (v(n))
              return e.stylize(RegExp.prototype.toString.call(n), "regexp");
            if (_(n)) return e.stylize(Date.prototype.toString.call(n), "date");
            if (S(n)) return f(n);
          }
          var s,
            w = "",
            k = !1,
            T = ["{", "}"];
          (p(n) && ((k = !0), (T = ["[", "]"])), E(n)) &&
            (w = " [Function" + (n.name ? ": " + n.name : "") + "]");
          return (
            v(n) && (w = " " + RegExp.prototype.toString.call(n)),
            _(n) && (w = " " + Date.prototype.toUTCString.call(n)),
            S(n) && (w = " " + f(n)),
            0 !== a.length || (k && 0 != n.length)
              ? r < 0
                ? v(n)
                  ? e.stylize(RegExp.prototype.toString.call(n), "regexp")
                  : e.stylize("[Object]", "special")
                : (e.seen.push(n),
                  (s = k
                    ? (function (e, t, n, r, i) {
                        for (var o = [], a = 0, l = t.length; a < l; ++a)
                          R(t, String(a))
                            ? o.push(d(e, t, n, r, String(a), !0))
                            : o.push("");
                        return (
                          i.forEach(function (i) {
                            i.match(/^\d+$/) || o.push(d(e, t, n, r, i, !0));
                          }),
                          o
                        );
                      })(e, n, r, l, a)
                    : a.map(function (t) {
                        return d(e, n, r, l, t, k);
                      })),
                  e.seen.pop(),
                  (function (e, t, n) {
                    if (
                      e.reduce(function (e, t) {
                        return (
                          0,
                          t.indexOf("\n") >= 0 && 0,
                          e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                        );
                      }, 0) > 60
                    )
                      return (
                        n[0] +
                        ("" === t ? "" : t + "\n ") +
                        " " +
                        e.join(",\n  ") +
                        " " +
                        n[1]
                      );
                    return n[0] + t + " " + e.join(", ") + " " + n[1];
                  })(s, w, T))
              : T[0] + w + T[1]
          );
        }
        function f(e) {
          return "[" + Error.prototype.toString.call(e) + "]";
        }
        function d(e, t, n, r, i, o) {
          var a, l, u;
          if (
            ((u = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get
              ? (l = u.set
                  ? e.stylize("[Getter/Setter]", "special")
                  : e.stylize("[Getter]", "special"))
              : u.set && (l = e.stylize("[Setter]", "special")),
            R(r, i) || (a = "[" + i + "]"),
            l ||
              (e.seen.indexOf(u.value) < 0
                ? (l = m(n)
                    ? c(e, u.value, null)
                    : c(e, u.value, n - 1)).indexOf("\n") > -1 &&
                  (l = o
                    ? l
                        .split("\n")
                        .map(function (e) {
                          return "  " + e;
                        })
                        .join("\n")
                        .substr(2)
                    : "\n" +
                      l
                        .split("\n")
                        .map(function (e) {
                          return "   " + e;
                        })
                        .join("\n"))
                : (l = e.stylize("[Circular]", "special"))),
            b(a))
          ) {
            if (o && i.match(/^\d+$/)) return l;
            (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
              ? ((a = a.substr(1, a.length - 2)), (a = e.stylize(a, "name")))
              : ((a = a
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (a = e.stylize(a, "string")));
          }
          return a + ": " + l;
        }
        function p(e) {
          return Array.isArray(e);
        }
        function h(e) {
          return "boolean" === typeof e;
        }
        function m(e) {
          return null === e;
        }
        function y(e) {
          return "number" === typeof e;
        }
        function g(e) {
          return "string" === typeof e;
        }
        function b(e) {
          return void 0 === e;
        }
        function v(e) {
          return w(e) && "[object RegExp]" === k(e);
        }
        function w(e) {
          return "object" === typeof e && null !== e;
        }
        function _(e) {
          return w(e) && "[object Date]" === k(e);
        }
        function S(e) {
          return w(e) && ("[object Error]" === k(e) || e instanceof Error);
        }
        function E(e) {
          return "function" === typeof e;
        }
        function k(e) {
          return Object.prototype.toString.call(e);
        }
        function T(e) {
          return e < 10 ? "0" + e.toString(10) : e.toString(10);
        }
        (t.debuglog = function (n) {
          if (
            (b(o) &&
              (o =
                Object({ NODE_ENV: "production", PUBLIC_URL: "" }).NODE_DEBUG ||
                ""),
            (n = n.toUpperCase()),
            !a[n])
          )
            if (new RegExp("\\b" + n + "\\b", "i").test(o)) {
              var r = e.pid;
              a[n] = function () {
                var e = t.format.apply(t, arguments);
                console.error("%s %d: %s", n, r, e);
              };
            } else a[n] = function () {};
          return a[n];
        }),
          (t.inspect = l),
          (l.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39],
          }),
          (l.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red",
          }),
          (t.isArray = p),
          (t.isBoolean = h),
          (t.isNull = m),
          (t.isNullOrUndefined = function (e) {
            return null == e;
          }),
          (t.isNumber = y),
          (t.isString = g),
          (t.isSymbol = function (e) {
            return "symbol" === typeof e;
          }),
          (t.isUndefined = b),
          (t.isRegExp = v),
          (t.isObject = w),
          (t.isDate = _),
          (t.isError = S),
          (t.isFunction = E),
          (t.isPrimitive = function (e) {
            return (
              null === e ||
              "boolean" === typeof e ||
              "number" === typeof e ||
              "string" === typeof e ||
              "symbol" === typeof e ||
              "undefined" === typeof e
            );
          }),
          (t.isBuffer = n(63));
        var x = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        function R(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        (t.log = function () {
          console.log(
            "%s - %s",
            (function () {
              var e = new Date(),
                t = [
                  T(e.getHours()),
                  T(e.getMinutes()),
                  T(e.getSeconds()),
                ].join(":");
              return [e.getDate(), x[e.getMonth()], t].join(" ");
            })(),
            t.format.apply(t, arguments)
          );
        }),
          (t.inherits = n(64)),
          (t._extend = function (e, t) {
            if (!t || !w(t)) return e;
            for (var n = Object.keys(t), r = n.length; r--; ) e[n[r]] = t[n[r]];
            return e;
          });
        var C =
          "undefined" !== typeof Symbol
            ? Symbol("util.promisify.custom")
            : void 0;
        function O(e, t) {
          if (!e) {
            var n = new Error("Promise was rejected with a falsy value");
            (n.reason = e), (e = n);
          }
          return t(e);
        }
        (t.promisify = function (e) {
          if ("function" !== typeof e)
            throw new TypeError(
              'The "original" argument must be of type Function'
            );
          if (C && e[C]) {
            var t;
            if ("function" !== typeof (t = e[C]))
              throw new TypeError(
                'The "util.promisify.custom" argument must be of type Function'
              );
            return (
              Object.defineProperty(t, C, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
              t
            );
          }
          function t() {
            for (
              var t,
                n,
                r = new Promise(function (e, r) {
                  (t = e), (n = r);
                }),
                i = [],
                o = 0;
              o < arguments.length;
              o++
            )
              i.push(arguments[o]);
            i.push(function (e, r) {
              e ? n(e) : t(r);
            });
            try {
              e.apply(this, i);
            } catch (a) {
              n(a);
            }
            return r;
          }
          return (
            Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
            C &&
              Object.defineProperty(t, C, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
            Object.defineProperties(t, r(e))
          );
        }),
          (t.promisify.custom = C),
          (t.callbackify = function (t) {
            if ("function" !== typeof t)
              throw new TypeError(
                'The "original" argument must be of type Function'
              );
            function n() {
              for (var n = [], r = 0; r < arguments.length; r++)
                n.push(arguments[r]);
              var i = n.pop();
              if ("function" !== typeof i)
                throw new TypeError(
                  "The last argument must be of type Function"
                );
              var o = this,
                a = function () {
                  return i.apply(o, arguments);
                };
              t.apply(this, n).then(
                function (t) {
                  e.nextTick(a, null, t);
                },
                function (t) {
                  e.nextTick(O, t, a);
                }
              );
            }
            return (
              Object.setPrototypeOf(n, Object.getPrototypeOf(t)),
              Object.defineProperties(n, r(t)),
              n
            );
          });
      }.call(this, n(0)));
    },
    function (e, t, n) {
      ((t = e.exports = n(27)).Stream = t),
        (t.Readable = t),
        (t.Writable = n(31)),
        (t.Duplex = n(10)),
        (t.Transform = n(32)),
        (t.PassThrough = n(71)),
        (t.finished = n(15)),
        (t.pipeline = n(72));
    },
    function (e, t, n) {
      "use strict";
      var r = {};
      function i(e, t, n) {
        n || (n = Error);
        var i = (function (e) {
          var n, r;
          function i(n, r, i) {
            return (
              e.call(
                this,
                (function (e, n, r) {
                  return "string" === typeof t ? t : t(e, n, r);
                })(n, r, i)
              ) || this
            );
          }
          return (
            (r = e),
            ((n = i).prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (n.__proto__ = r),
            i
          );
        })(n);
        (i.prototype.name = n.name), (i.prototype.code = e), (r[e] = i);
      }
      function o(e, t) {
        if (Array.isArray(e)) {
          var n = e.length;
          return (
            (e = e.map(function (e) {
              return String(e);
            })),
            n > 2
              ? "one of "
                  .concat(t, " ")
                  .concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1]
              : 2 === n
              ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
              : "of ".concat(t, " ").concat(e[0])
          );
        }
        return "of ".concat(t, " ").concat(String(e));
      }
      i(
        "ERR_INVALID_OPT_VALUE",
        function (e, t) {
          return 'The value "' + t + '" is invalid for option "' + e + '"';
        },
        TypeError
      ),
        i(
          "ERR_INVALID_ARG_TYPE",
          function (e, t, n) {
            var r, i, a, l;
            if (
              ("string" === typeof t &&
              ((i = "not "), t.substr(!a || a < 0 ? 0 : +a, i.length) === i)
                ? ((r = "must not be"), (t = t.replace(/^not /, "")))
                : (r = "must be"),
              (function (e, t, n) {
                return (
                  (void 0 === n || n > e.length) && (n = e.length),
                  e.substring(n - t.length, n) === t
                );
              })(e, " argument"))
            )
              l = "The ".concat(e, " ").concat(r, " ").concat(o(t, "type"));
            else {
              var u = (function (e, t, n) {
                return (
                  "number" !== typeof n && (n = 0),
                  !(n + t.length > e.length) && -1 !== e.indexOf(t, n)
                );
              })(e, ".")
                ? "property"
                : "argument";
              l = 'The "'
                .concat(e, '" ')
                .concat(u, " ")
                .concat(r, " ")
                .concat(o(t, "type"));
            }
            return (l += ". Received type ".concat(typeof n));
          },
          TypeError
        ),
        i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        i("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
          return "The " + e + " method is not implemented";
        }),
        i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        i("ERR_STREAM_DESTROYED", function (e) {
          return "Cannot call " + e + " after a stream was destroyed";
        }),
        i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        i("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        i(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError
        ),
        i(
          "ERR_UNKNOWN_ENCODING",
          function (e) {
            return "Unknown encoding: " + e;
          },
          TypeError
        ),
        i(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event"
        ),
        (e.exports.codes = r);
    },
    function (e, t, n) {
      "use strict";
      (function (t) {
        var r =
          Object.keys ||
          function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return t;
          };
        e.exports = s;
        var i = n(19),
          o = n(23);
        n(2)(s, i);
        for (var a = r(o.prototype), l = 0; l < a.length; l++) {
          var u = a[l];
          s.prototype[u] || (s.prototype[u] = o.prototype[u]);
        }
        function s(e) {
          if (!(this instanceof s)) return new s(e);
          i.call(this, e),
            o.call(this, e),
            (this.allowHalfOpen = !0),
            e &&
              (!1 === e.readable && (this.readable = !1),
              !1 === e.writable && (this.writable = !1),
              !1 === e.allowHalfOpen &&
                ((this.allowHalfOpen = !1), this.once("end", c)));
        }
        function c() {
          this._writableState.ended || t.nextTick(f, this);
        }
        function f(e) {
          e.end();
        }
        Object.defineProperty(s.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
          Object.defineProperty(s.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(s.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(s.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                this._readableState.destroyed &&
                this._writableState.destroyed
              );
            },
            set: function (e) {
              void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                ((this._readableState.destroyed = e),
                (this._writableState.destroyed = e));
            },
          });
      }.call(this, n(0)));
    },
    function (e, t, n) {
      "use strict";
      var r = {};
      function i(e, t, n) {
        n || (n = Error);
        var i = (function (e) {
          var n, r;
          function i(n, r, i) {
            return (
              e.call(
                this,
                (function (e, n, r) {
                  return "string" === typeof t ? t : t(e, n, r);
                })(n, r, i)
              ) || this
            );
          }
          return (
            (r = e),
            ((n = i).prototype = Object.create(r.prototype)),
            (n.prototype.constructor = n),
            (n.__proto__ = r),
            i
          );
        })(n);
        (i.prototype.name = n.name), (i.prototype.code = e), (r[e] = i);
      }
      function o(e, t) {
        if (Array.isArray(e)) {
          var n = e.length;
          return (
            (e = e.map(function (e) {
              return String(e);
            })),
            n > 2
              ? "one of "
                  .concat(t, " ")
                  .concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1]
              : 2 === n
              ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
              : "of ".concat(t, " ").concat(e[0])
          );
        }
        return "of ".concat(t, " ").concat(String(e));
      }
      i(
        "ERR_INVALID_OPT_VALUE",
        function (e, t) {
          return 'The value "' + t + '" is invalid for option "' + e + '"';
        },
        TypeError
      ),
        i(
          "ERR_INVALID_ARG_TYPE",
          function (e, t, n) {
            var r, i, a, l;
            if (
              ("string" === typeof t &&
              ((i = "not "), t.substr(!a || a < 0 ? 0 : +a, i.length) === i)
                ? ((r = "must not be"), (t = t.replace(/^not /, "")))
                : (r = "must be"),
              (function (e, t, n) {
                return (
                  (void 0 === n || n > e.length) && (n = e.length),
                  e.substring(n - t.length, n) === t
                );
              })(e, " argument"))
            )
              l = "The ".concat(e, " ").concat(r, " ").concat(o(t, "type"));
            else {
              var u = (function (e, t, n) {
                return (
                  "number" !== typeof n && (n = 0),
                  !(n + t.length > e.length) && -1 !== e.indexOf(t, n)
                );
              })(e, ".")
                ? "property"
                : "argument";
              l = 'The "'
                .concat(e, '" ')
                .concat(u, " ")
                .concat(r, " ")
                .concat(o(t, "type"));
            }
            return (l += ". Received type ".concat(typeof n));
          },
          TypeError
        ),
        i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        i("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
          return "The " + e + " method is not implemented";
        }),
        i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        i("ERR_STREAM_DESTROYED", function (e) {
          return "Cannot call " + e + " after a stream was destroyed";
        }),
        i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        i("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        i(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError
        ),
        i(
          "ERR_UNKNOWN_ENCODING",
          function (e) {
            return "Unknown encoding: " + e;
          },
          TypeError
        ),
        i(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event"
        ),
        (e.exports.codes = r);
    },
    function (e, t, n) {
      "use strict";
      (function (t) {
        var r =
          Object.keys ||
          function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return t;
          };
        e.exports = s;
        var i = n(27),
          o = n(31);
        n(2)(s, i);
        for (var a = r(o.prototype), l = 0; l < a.length; l++) {
          var u = a[l];
          s.prototype[u] || (s.prototype[u] = o.prototype[u]);
        }
        function s(e) {
          if (!(this instanceof s)) return new s(e);
          i.call(this, e),
            o.call(this, e),
            (this.allowHalfOpen = !0),
            e &&
              (!1 === e.readable && (this.readable = !1),
              !1 === e.writable && (this.writable = !1),
              !1 === e.allowHalfOpen &&
                ((this.allowHalfOpen = !1), this.once("end", c)));
        }
        function c() {
          this._writableState.ended || t.nextTick(f, this);
        }
        function f(e) {
          e.end();
        }
        Object.defineProperty(s.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
          Object.defineProperty(s.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(s.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(s.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                this._readableState.destroyed &&
                this._writableState.destroyed
              );
            },
            set: function (e) {
              void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                ((this._readableState.destroyed = e),
                (this._writableState.destroyed = e));
            },
          });
      }.call(this, n(0)));
    },
    function (e, t, n) {
      "use strict";
      var r,
        i = "object" === typeof Reflect ? Reflect : null,
        o =
          i && "function" === typeof i.apply
            ? i.apply
            : function (e, t, n) {
                return Function.prototype.apply.call(e, t, n);
              };
      r =
        i && "function" === typeof i.ownKeys
          ? i.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var a =
        Number.isNaN ||
        function (e) {
          return e !== e;
        };
      function l() {
        l.init.call(this);
      }
      (e.exports = l),
        (l.EventEmitter = l),
        (l.prototype._events = void 0),
        (l.prototype._eventsCount = 0),
        (l.prototype._maxListeners = void 0);
      var u = 10;
      function s(e) {
        return void 0 === e._maxListeners
          ? l.defaultMaxListeners
          : e._maxListeners;
      }
      function c(e, t, n, r) {
        var i, o, a, l;
        if ("function" !== typeof n)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof n
          );
        if (
          (void 0 === (o = e._events)
            ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (e.emit("newListener", t, n.listener ? n.listener : n),
                (o = e._events)),
              (a = o[t])),
          void 0 === a)
        )
          (a = o[t] = n), ++e._eventsCount;
        else if (
          ("function" === typeof a
            ? (a = o[t] = r ? [n, a] : [a, n])
            : r
            ? a.unshift(n)
            : a.push(n),
          (i = s(e)) > 0 && a.length > i && !a.warned)
        ) {
          a.warned = !0;
          var u = new Error(
            "Possible EventEmitter memory leak detected. " +
              a.length +
              " " +
              String(t) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (u.name = "MaxListenersExceededWarning"),
            (u.emitter = e),
            (u.type = t),
            (u.count = a.length),
            (l = u),
            console && console.warn && console.warn(l);
        }
        return e;
      }
      function f(e, t, n) {
        var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
          i = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e.push(arguments[t]);
            this.fired ||
              (this.target.removeListener(this.type, this.wrapFn),
              (this.fired = !0),
              o(this.listener, this.target, e));
          }.bind(r);
        return (i.listener = n), (r.wrapFn = i), i;
      }
      function d(e, t, n) {
        var r = e._events;
        if (void 0 === r) return [];
        var i = r[t];
        return void 0 === i
          ? []
          : "function" === typeof i
          ? n
            ? [i.listener || i]
            : [i]
          : n
          ? (function (e) {
              for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n];
              return t;
            })(i)
          : h(i, i.length);
      }
      function p(e) {
        var t = this._events;
        if (void 0 !== t) {
          var n = t[e];
          if ("function" === typeof n) return 1;
          if (void 0 !== n) return n.length;
        }
        return 0;
      }
      function h(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
        return n;
      }
      Object.defineProperty(l, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return u;
        },
        set: function (e) {
          if ("number" !== typeof e || e < 0 || a(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          u = e;
        },
      }),
        (l.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (l.prototype.setMaxListeners = function (e) {
          if ("number" !== typeof e || e < 0 || a(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (l.prototype.getMaxListeners = function () {
          return s(this);
        }),
        (l.prototype.emit = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t.push(arguments[n]);
          var r = "error" === e,
            i = this._events;
          if (void 0 !== i) r = r && void 0 === i.error;
          else if (!r) return !1;
          if (r) {
            var a;
            if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
            var l = new Error(
              "Unhandled error." + (a ? " (" + a.message + ")" : "")
            );
            throw ((l.context = a), l);
          }
          var u = i[e];
          if (void 0 === u) return !1;
          if ("function" === typeof u) o(u, this, t);
          else {
            var s = u.length,
              c = h(u, s);
            for (n = 0; n < s; ++n) o(c[n], this, t);
          }
          return !0;
        }),
        (l.prototype.addListener = function (e, t) {
          return c(this, e, t, !1);
        }),
        (l.prototype.on = l.prototype.addListener),
        (l.prototype.prependListener = function (e, t) {
          return c(this, e, t, !0);
        }),
        (l.prototype.once = function (e, t) {
          if ("function" !== typeof t)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof t
            );
          return this.on(e, f(this, e, t)), this;
        }),
        (l.prototype.prependOnceListener = function (e, t) {
          if ("function" !== typeof t)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof t
            );
          return this.prependListener(e, f(this, e, t)), this;
        }),
        (l.prototype.removeListener = function (e, t) {
          var n, r, i, o, a;
          if ("function" !== typeof t)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof t
            );
          if (void 0 === (r = this._events)) return this;
          if (void 0 === (n = r[e])) return this;
          if (n === t || n.listener === t)
            0 === --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete r[e],
                r.removeListener &&
                  this.emit("removeListener", e, n.listener || t));
          else if ("function" !== typeof n) {
            for (i = -1, o = n.length - 1; o >= 0; o--)
              if (n[o] === t || n[o].listener === t) {
                (a = n[o].listener), (i = o);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? n.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(n, i),
              1 === n.length && (r[e] = n[0]),
              void 0 !== r.removeListener &&
                this.emit("removeListener", e, a || t);
          }
          return this;
        }),
        (l.prototype.off = l.prototype.removeListener),
        (l.prototype.removeAllListeners = function (e) {
          var t, n, r;
          if (void 0 === (n = this._events)) return this;
          if (void 0 === n.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== n[e] &&
                  (0 === --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete n[e]),
              this
            );
          if (0 === arguments.length) {
            var i,
              o = Object.keys(n);
            for (r = 0; r < o.length; ++r)
              "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" === typeof (t = n[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
          return this;
        }),
        (l.prototype.listeners = function (e) {
          return d(this, e, !0);
        }),
        (l.prototype.rawListeners = function (e) {
          return d(this, e, !1);
        }),
        (l.listenerCount = function (e, t) {
          return "function" === typeof e.listenerCount
            ? e.listenerCount(t)
            : p.call(e, t);
        }),
        (l.prototype.listenerCount = p),
        (l.prototype.eventNames = function () {
          return this._eventsCount > 0 ? r(this._events) : [];
        });
    },
    function (e, t, n) {
      "use strict";
      var r = n(59).Buffer,
        i =
          r.isEncoding ||
          function (e) {
            switch ((e = "" + e) && e.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function o(e) {
        var t;
        switch (
          ((this.encoding = (function (e) {
            var t = (function (e) {
              if (!e) return "utf8";
              for (var t; ; )
                switch (e) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return e;
                  default:
                    if (t) return;
                    (e = ("" + e).toLowerCase()), (t = !0);
                }
            })(e);
            if ("string" !== typeof t && (r.isEncoding === i || !i(e)))
              throw new Error("Unknown encoding: " + e);
            return t || e;
          })(e)),
          this.encoding)
        ) {
          case "utf16le":
            (this.text = u), (this.end = s), (t = 4);
            break;
          case "utf8":
            (this.fillLast = l), (t = 4);
            break;
          case "base64":
            (this.text = c), (this.end = f), (t = 3);
            break;
          default:
            return (this.write = d), void (this.end = p);
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = r.allocUnsafe(t));
      }
      function a(e) {
        return e <= 127
          ? 0
          : e >> 5 === 6
          ? 2
          : e >> 4 === 14
          ? 3
          : e >> 3 === 30
          ? 4
          : e >> 6 === 2
          ? -1
          : -2;
      }
      function l(e) {
        var t = this.lastTotal - this.lastNeed,
          n = (function (e, t, n) {
            if (128 !== (192 & t[0])) return (e.lastNeed = 0), "\ufffd";
            if (e.lastNeed > 1 && t.length > 1) {
              if (128 !== (192 & t[1])) return (e.lastNeed = 1), "\ufffd";
              if (e.lastNeed > 2 && t.length > 2 && 128 !== (192 & t[2]))
                return (e.lastNeed = 2), "\ufffd";
            }
          })(this, e);
        return void 0 !== n
          ? n
          : this.lastNeed <= e.length
          ? (e.copy(this.lastChar, t, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (e.copy(this.lastChar, t, 0, e.length),
            void (this.lastNeed -= e.length));
      }
      function u(e, t) {
        if ((e.length - t) % 2 === 0) {
          var n = e.toString("utf16le", t);
          if (n) {
            var r = n.charCodeAt(n.length - 1);
            if (r >= 55296 && r <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1]),
                n.slice(0, -1)
              );
          }
          return n;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = e[e.length - 1]),
          e.toString("utf16le", t, e.length - 1)
        );
      }
      function s(e) {
        var t = e && e.length ? this.write(e) : "";
        if (this.lastNeed) {
          var n = this.lastTotal - this.lastNeed;
          return t + this.lastChar.toString("utf16le", 0, n);
        }
        return t;
      }
      function c(e, t) {
        var n = (e.length - t) % 3;
        return 0 === n
          ? e.toString("base64", t)
          : ((this.lastNeed = 3 - n),
            (this.lastTotal = 3),
            1 === n
              ? (this.lastChar[0] = e[e.length - 1])
              : ((this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1])),
            e.toString("base64", t, e.length - n));
      }
      function f(e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed
          ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
          : t;
      }
      function d(e) {
        return e.toString(this.encoding);
      }
      function p(e) {
        return e && e.length ? this.write(e) : "";
      }
      (t.StringDecoder = o),
        (o.prototype.write = function (e) {
          if (0 === e.length) return "";
          var t, n;
          if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e))) return "";
            (n = this.lastNeed), (this.lastNeed = 0);
          } else n = 0;
          return n < e.length
            ? t
              ? t + this.text(e, n)
              : this.text(e, n)
            : t || "";
        }),
        (o.prototype.end = function (e) {
          var t = e && e.length ? this.write(e) : "";
          return this.lastNeed ? t + "\ufffd" : t;
        }),
        (o.prototype.text = function (e, t) {
          var n = (function (e, t, n) {
            var r = t.length - 1;
            if (r < n) return 0;
            var i = a(t[r]);
            if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
            if (--r < n || -2 === i) return 0;
            if ((i = a(t[r])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
            if (--r < n || -2 === i) return 0;
            if ((i = a(t[r])) >= 0)
              return i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i;
            return 0;
          })(this, e, t);
          if (!this.lastNeed) return e.toString("utf8", t);
          this.lastTotal = n;
          var r = e.length - (n - this.lastNeed);
          return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r);
        }),
        (o.prototype.fillLast = function (e) {
          if (this.lastNeed <= e.length)
            return (
              e.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
            (this.lastNeed -= e.length);
        });
    },
    function (e, t, n) {
      "use strict";
      (function (t) {
        e.exports = function (e) {
          return (
            (e = e || this),
            new Promise(function (n, r) {
              var i = [];
              e.on("data", function (e) {
                i.push(e);
              })
                .on("end", function () {
                  n(t.isBuffer(i[0]) ? t.concat(i).toString() : i);
                })
                .on("error", r);
            })
          );
        };
      }.call(this, n(1).Buffer));
    },
    function (e, t, n) {
      "use strict";
      var r = n(7).codes.ERR_STREAM_PREMATURE_CLOSE;
      function i() {}
      e.exports = function e(t, n, o) {
        if ("function" === typeof n) return e(t, null, n);
        n || (n = {}),
          (o = (function (e) {
            var t = !1;
            return function () {
              if (!t) {
                t = !0;
                for (
                  var n = arguments.length, r = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  r[i] = arguments[i];
                e.apply(this, r);
              }
            };
          })(o || i));
        var a = n.readable || (!1 !== n.readable && t.readable),
          l = n.writable || (!1 !== n.writable && t.writable),
          u = function () {
            t.writable || c();
          },
          s = t._writableState && t._writableState.finished,
          c = function () {
            (l = !1), (s = !0), a || o.call(t);
          },
          f = t._readableState && t._readableState.endEmitted,
          d = function () {
            (a = !1), (f = !0), l || o.call(t);
          },
          p = function (e) {
            o.call(t, e);
          },
          h = function () {
            var e;
            return a && !f
              ? ((t._readableState && t._readableState.ended) || (e = new r()),
                o.call(t, e))
              : l && !s
              ? ((t._writableState && t._writableState.ended) || (e = new r()),
                o.call(t, e))
              : void 0;
          },
          m = function () {
            t.req.on("finish", c);
          };
        return (
          (function (e) {
            return e.setHeader && "function" === typeof e.abort;
          })(t)
            ? (t.on("complete", c),
              t.on("abort", h),
              t.req ? m() : t.on("request", m))
            : l && !t._writableState && (t.on("end", u), t.on("close", u)),
          t.on("end", d),
          t.on("finish", c),
          !1 !== n.error && t.on("error", p),
          t.on("close", h),
          function () {
            t.removeListener("complete", c),
              t.removeListener("abort", h),
              t.removeListener("request", m),
              t.req && t.req.removeListener("finish", c),
              t.removeListener("end", u),
              t.removeListener("close", u),
              t.removeListener("finish", c),
              t.removeListener("end", d),
              t.removeListener("error", p),
              t.removeListener("close", h);
          }
        );
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(9).codes.ERR_STREAM_PREMATURE_CLOSE;
      function i() {}
      e.exports = function e(t, n, o) {
        if ("function" === typeof n) return e(t, null, n);
        n || (n = {}),
          (o = (function (e) {
            var t = !1;
            return function () {
              if (!t) {
                t = !0;
                for (
                  var n = arguments.length, r = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  r[i] = arguments[i];
                e.apply(this, r);
              }
            };
          })(o || i));
        var a = n.readable || (!1 !== n.readable && t.readable),
          l = n.writable || (!1 !== n.writable && t.writable),
          u = function () {
            t.writable || c();
          },
          s = t._writableState && t._writableState.finished,
          c = function () {
            (l = !1), (s = !0), a || o.call(t);
          },
          f = t._readableState && t._readableState.endEmitted,
          d = function () {
            (a = !1), (f = !0), l || o.call(t);
          },
          p = function (e) {
            o.call(t, e);
          },
          h = function () {
            var e;
            return a && !f
              ? ((t._readableState && t._readableState.ended) || (e = new r()),
                o.call(t, e))
              : l && !s
              ? ((t._writableState && t._writableState.ended) || (e = new r()),
                o.call(t, e))
              : void 0;
          },
          m = function () {
            t.req.on("finish", c);
          };
        return (
          (function (e) {
            return e.setHeader && "function" === typeof e.abort;
          })(t)
            ? (t.on("complete", c),
              t.on("abort", h),
              t.req ? m() : t.on("request", m))
            : l && !t._writableState && (t.on("end", u), t.on("close", u)),
          t.on("end", d),
          t.on("finish", c),
          !1 !== n.error && t.on("error", p),
          t.on("close", h),
          function () {
            t.removeListener("complete", c),
              t.removeListener("abort", h),
              t.removeListener("request", m),
              t.req && t.req.removeListener("finish", c),
              t.removeListener("end", u),
              t.removeListener("close", u),
              t.removeListener("finish", c),
              t.removeListener("end", d),
              t.removeListener("error", p),
              t.removeListener("close", h);
          }
        );
      };
    },
    function (e, t, n) {
      var r = n(82);
      e.exports = function (e, t) {
        return (
          (e = e || {}),
          Object.keys(t).forEach(function (n) {
            "undefined" === typeof e[n] && (e[n] = r(t[n]));
          }),
          e
        );
      };
    },
    function (e, t, n) {
      (function (t) {
        var n = (function () {
          "use strict";
          function e(e, t) {
            return null != t && e instanceof t;
          }
          var n, r, i;
          try {
            n = Map;
          } catch (u) {
            n = function () {};
          }
          try {
            r = Set;
          } catch (u) {
            r = function () {};
          }
          try {
            i = Promise;
          } catch (u) {
            i = function () {};
          }
          function o(a, u, s, c, f) {
            "object" === typeof u &&
              ((s = u.depth),
              (c = u.prototype),
              (f = u.includeNonEnumerable),
              (u = u.circular));
            var d = [],
              p = [],
              h = "undefined" != typeof t;
            return (
              "undefined" == typeof u && (u = !0),
              "undefined" == typeof s && (s = 1 / 0),
              (function a(s, m) {
                if (null === s) return null;
                if (0 === m) return s;
                var y, g;
                if ("object" != typeof s) return s;
                if (e(s, n)) y = new n();
                else if (e(s, r)) y = new r();
                else if (e(s, i))
                  y = new i(function (e, t) {
                    s.then(
                      function (t) {
                        e(a(t, m - 1));
                      },
                      function (e) {
                        t(a(e, m - 1));
                      }
                    );
                  });
                else if (o.__isArray(s)) y = [];
                else if (o.__isRegExp(s))
                  (y = new RegExp(s.source, l(s))),
                    s.lastIndex && (y.lastIndex = s.lastIndex);
                else if (o.__isDate(s)) y = new Date(s.getTime());
                else {
                  if (h && t.isBuffer(s))
                    return (
                      (y = t.allocUnsafe
                        ? t.allocUnsafe(s.length)
                        : new t(s.length)),
                      s.copy(y),
                      y
                    );
                  e(s, Error)
                    ? (y = Object.create(s))
                    : "undefined" == typeof c
                    ? ((g = Object.getPrototypeOf(s)), (y = Object.create(g)))
                    : ((y = Object.create(c)), (g = c));
                }
                if (u) {
                  var b = d.indexOf(s);
                  if (-1 != b) return p[b];
                  d.push(s), p.push(y);
                }
                for (var v in (e(s, n) &&
                  s.forEach(function (e, t) {
                    var n = a(t, m - 1),
                      r = a(e, m - 1);
                    y.set(n, r);
                  }),
                e(s, r) &&
                  s.forEach(function (e) {
                    var t = a(e, m - 1);
                    y.add(t);
                  }),
                s)) {
                  var w;
                  g && (w = Object.getOwnPropertyDescriptor(g, v)),
                    (w && null == w.set) || (y[v] = a(s[v], m - 1));
                }
                if (Object.getOwnPropertySymbols) {
                  var _ = Object.getOwnPropertySymbols(s);
                  for (v = 0; v < _.length; v++) {
                    var S = _[v];
                    (!(k = Object.getOwnPropertyDescriptor(s, S)) ||
                      k.enumerable ||
                      f) &&
                      ((y[S] = a(s[S], m - 1)),
                      k.enumerable ||
                        Object.defineProperty(y, S, { enumerable: !1 }));
                  }
                }
                if (f) {
                  var E = Object.getOwnPropertyNames(s);
                  for (v = 0; v < E.length; v++) {
                    var k,
                      T = E[v];
                    ((k = Object.getOwnPropertyDescriptor(s, T)) &&
                      k.enumerable) ||
                      ((y[T] = a(s[T], m - 1)),
                      Object.defineProperty(y, T, { enumerable: !1 }));
                  }
                }
                return y;
              })(a, s)
            );
          }
          function a(e) {
            return Object.prototype.toString.call(e);
          }
          function l(e) {
            var t = "";
            return (
              e.global && (t += "g"),
              e.ignoreCase && (t += "i"),
              e.multiline && (t += "m"),
              t
            );
          }
          return (
            (o.clonePrototype = function (e) {
              if (null === e) return null;
              var t = function () {};
              return (t.prototype = e), new t();
            }),
            (o.__objToStr = a),
            (o.__isDate = function (e) {
              return "object" === typeof e && "[object Date]" === a(e);
            }),
            (o.__isArray = function (e) {
              return "object" === typeof e && "[object Array]" === a(e);
            }),
            (o.__isRegExp = function (e) {
              return "object" === typeof e && "[object RegExp]" === a(e);
            }),
            (o.__getRegExpFlags = l),
            o
          );
        })();
        e.exports && (e.exports = n);
      }.call(this, n(1).Buffer));
    },
    function (e, t, n) {
      "use strict";
      var r = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (i) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, t) {
            for (
              var n,
                a,
                l = (function (e) {
                  if (null === e || void 0 === e)
                    throw new TypeError(
                      "Object.assign cannot be called with null or undefined"
                    );
                  return Object(e);
                })(e),
                u = 1;
              u < arguments.length;
              u++
            ) {
              for (var s in (n = Object(arguments[u])))
                i.call(n, s) && (l[s] = n[s]);
              if (r) {
                a = r(n);
                for (var c = 0; c < a.length; c++)
                  o.call(n, a[c]) && (l[a[c]] = n[a[c]]);
              }
            }
            return l;
          };
    },
    function (e, t, n) {
      "use strict";
      (function (t, r) {
        var i;
        (e.exports = k), (k.ReadableState = E);
        n(11).EventEmitter;
        var o = function (e, t) {
            return e.listeners(t).length;
          },
          a = n(20),
          l = n(1).Buffer,
          u = t.Uint8Array || function () {};
        var s,
          c = n(55);
        s = c && c.debuglog ? c.debuglog("stream") : function () {};
        var f,
          d,
          p = n(56),
          h = n(21),
          m = n(22).getHighWaterMark,
          y = n(7).codes,
          g = y.ERR_INVALID_ARG_TYPE,
          b = y.ERR_STREAM_PUSH_AFTER_EOF,
          v = y.ERR_METHOD_NOT_IMPLEMENTED,
          w = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
          _ = n(58).emitExperimentalWarning;
        n(2)(k, a);
        var S = ["error", "close", "destroy", "pause", "resume"];
        function E(e, t, r) {
          (i = i || n(8)),
            (e = e || {}),
            "boolean" !== typeof r && (r = t instanceof i),
            (this.objectMode = !!e.objectMode),
            r && (this.objectMode = this.objectMode || !!e.readableObjectMode),
            (this.highWaterMark = m(this, e, "readableHighWaterMark", r)),
            (this.buffer = new p()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.paused = !0),
            (this.emitClose = !1 !== e.emitClose),
            (this.destroyed = !1),
            (this.defaultEncoding = e.defaultEncoding || "utf8"),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            e.encoding &&
              (f || (f = n(12).StringDecoder),
              (this.decoder = new f(e.encoding)),
              (this.encoding = e.encoding));
        }
        function k(e) {
          if (((i = i || n(8)), !(this instanceof k))) return new k(e);
          var t = this instanceof i;
          (this._readableState = new E(e, this, t)),
            (this.readable = !0),
            e &&
              ("function" === typeof e.read && (this._read = e.read),
              "function" === typeof e.destroy && (this._destroy = e.destroy)),
            a.call(this);
        }
        function T(e, t, n, r, i) {
          s("readableAddChunk", t);
          var o,
            a = e._readableState;
          if (null === t)
            (a.reading = !1),
              (function (e, t) {
                if (t.ended) return;
                if (t.decoder) {
                  var n = t.decoder.end();
                  n &&
                    n.length &&
                    (t.buffer.push(n),
                    (t.length += t.objectMode ? 1 : n.length));
                }
                (t.ended = !0),
                  t.sync
                    ? O(e)
                    : ((t.needReadable = !1),
                      t.emittedReadable || ((t.emittedReadable = !0), P(e)));
              })(e, a);
          else if (
            (i ||
              (o = (function (e, t) {
                var n;
                (r = t),
                  l.isBuffer(r) ||
                    r instanceof u ||
                    "string" === typeof t ||
                    void 0 === t ||
                    e.objectMode ||
                    (n = new g("chunk", ["string", "Buffer", "Uint8Array"], t));
                var r;
                return n;
              })(a, t)),
            o)
          )
            e.emit("error", o);
          else if (a.objectMode || (t && t.length > 0))
            if (
              ("string" === typeof t ||
                a.objectMode ||
                Object.getPrototypeOf(t) === l.prototype ||
                (t = (function (e) {
                  return l.from(e);
                })(t)),
              r)
            )
              a.endEmitted ? e.emit("error", new w()) : x(e, a, t, !0);
            else if (a.ended) e.emit("error", new b());
            else {
              if (a.destroyed) return !1;
              (a.reading = !1),
                a.decoder && !n
                  ? ((t = a.decoder.write(t)),
                    a.objectMode || 0 !== t.length ? x(e, a, t, !1) : M(e, a))
                  : x(e, a, t, !1);
            }
          else r || ((a.reading = !1), M(e, a));
          return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
        }
        function x(e, t, n, r) {
          t.flowing && 0 === t.length && !t.sync
            ? ((t.awaitDrain = 0), e.emit("data", n))
            : ((t.length += t.objectMode ? 1 : n.length),
              r ? t.buffer.unshift(n) : t.buffer.push(n),
              t.needReadable && O(e)),
            M(e, t);
        }
        Object.defineProperty(k.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function (e) {
            this._readableState && (this._readableState.destroyed = e);
          },
        }),
          (k.prototype.destroy = h.destroy),
          (k.prototype._undestroy = h.undestroy),
          (k.prototype._destroy = function (e, t) {
            t(e);
          }),
          (k.prototype.push = function (e, t) {
            var n,
              r = this._readableState;
            return (
              r.objectMode
                ? (n = !0)
                : "string" === typeof e &&
                  ((t = t || r.defaultEncoding) !== r.encoding &&
                    ((e = l.from(e, t)), (t = "")),
                  (n = !0)),
              T(this, e, t, !1, n)
            );
          }),
          (k.prototype.unshift = function (e) {
            return T(this, e, null, !0, !1);
          }),
          (k.prototype.isPaused = function () {
            return !1 === this._readableState.flowing;
          }),
          (k.prototype.setEncoding = function (e) {
            return (
              f || (f = n(12).StringDecoder),
              (this._readableState.decoder = new f(e)),
              (this._readableState.encoding =
                this._readableState.decoder.encoding),
              this
            );
          });
        var R = 8388608;
        function C(e, t) {
          return e <= 0 || (0 === t.length && t.ended)
            ? 0
            : t.objectMode
            ? 1
            : e !== e
            ? t.flowing && t.length
              ? t.buffer.head.data.length
              : t.length
            : (e > t.highWaterMark &&
                (t.highWaterMark = (function (e) {
                  return (
                    e >= R
                      ? (e = R)
                      : (e--,
                        (e |= e >>> 1),
                        (e |= e >>> 2),
                        (e |= e >>> 4),
                        (e |= e >>> 8),
                        (e |= e >>> 16),
                        e++),
                    e
                  );
                })(e)),
              e <= t.length
                ? e
                : t.ended
                ? t.length
                : ((t.needReadable = !0), 0));
        }
        function O(e) {
          var t = e._readableState;
          (t.needReadable = !1),
            t.emittedReadable ||
              (s("emitReadable", t.flowing),
              (t.emittedReadable = !0),
              r.nextTick(P, e));
        }
        function P(e) {
          var t = e._readableState;
          s("emitReadable_", t.destroyed, t.length, t.ended),
            t.destroyed || (!t.length && !t.ended) || e.emit("readable"),
            (t.needReadable =
              !t.flowing && !t.ended && t.length <= t.highWaterMark),
            D(e);
        }
        function M(e, t) {
          t.readingMore || ((t.readingMore = !0), r.nextTick(A, e, t));
        }
        function A(e, t) {
          for (
            ;
            !t.reading &&
            !t.ended &&
            (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

          ) {
            var n = t.length;
            if ((s("maybeReadMore read 0"), e.read(0), n === t.length)) break;
          }
          t.readingMore = !1;
        }
        function j(e) {
          var t = e._readableState;
          (t.readableListening = e.listenerCount("readable") > 0),
            t.resumeScheduled && !t.paused
              ? (t.flowing = !0)
              : e.listenerCount("data") > 0 && e.resume();
        }
        function N(e) {
          s("readable nexttick read 0"), e.read(0);
        }
        function L(e, t) {
          s("resume", t.reading),
            t.reading || e.read(0),
            (t.resumeScheduled = !1),
            e.emit("resume"),
            D(e),
            t.flowing && !t.reading && e.read(0);
        }
        function D(e) {
          var t = e._readableState;
          for (s("flow", t.flowing); t.flowing && null !== e.read(); );
        }
        function I(e, t) {
          return 0 === t.length
            ? null
            : (t.objectMode
                ? (n = t.buffer.shift())
                : !e || e >= t.length
                ? ((n = t.decoder
                    ? t.buffer.join("")
                    : 1 === t.buffer.length
                    ? t.buffer.first()
                    : t.buffer.concat(t.length)),
                  t.buffer.clear())
                : (n = t.buffer.consume(e, t.decoder)),
              n);
          var n;
        }
        function U(e) {
          var t = e._readableState;
          s("endReadable", t.endEmitted),
            t.endEmitted || ((t.ended = !0), r.nextTick(F, t, e));
        }
        function F(e, t) {
          s("endReadableNT", e.endEmitted, e.length),
            e.endEmitted ||
              0 !== e.length ||
              ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
        }
        function B(e, t) {
          for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        }
        (k.prototype.read = function (e) {
          s("read", e), (e = parseInt(e, 10));
          var t = this._readableState,
            n = e;
          if (
            (0 !== e && (t.emittedReadable = !1),
            0 === e &&
              t.needReadable &&
              ((0 !== t.highWaterMark
                ? t.length >= t.highWaterMark
                : t.length > 0) ||
                t.ended))
          )
            return (
              s("read: emitReadable", t.length, t.ended),
              0 === t.length && t.ended ? U(this) : O(this),
              null
            );
          if (0 === (e = C(e, t)) && t.ended)
            return 0 === t.length && U(this), null;
          var r,
            i = t.needReadable;
          return (
            s("need readable", i),
            (0 === t.length || t.length - e < t.highWaterMark) &&
              s("length less than watermark", (i = !0)),
            t.ended || t.reading
              ? s("reading or ended", (i = !1))
              : i &&
                (s("do read"),
                (t.reading = !0),
                (t.sync = !0),
                0 === t.length && (t.needReadable = !0),
                this._read(t.highWaterMark),
                (t.sync = !1),
                t.reading || (e = C(n, t))),
            null === (r = e > 0 ? I(e, t) : null)
              ? ((t.needReadable = !0), (e = 0))
              : ((t.length -= e), (t.awaitDrain = 0)),
            0 === t.length &&
              (t.ended || (t.needReadable = !0), n !== e && t.ended && U(this)),
            null !== r && this.emit("data", r),
            r
          );
        }),
          (k.prototype._read = function (e) {
            this.emit("error", new v("_read()"));
          }),
          (k.prototype.pipe = function (e, t) {
            var n = this,
              i = this._readableState;
            switch (i.pipesCount) {
              case 0:
                i.pipes = e;
                break;
              case 1:
                i.pipes = [i.pipes, e];
                break;
              default:
                i.pipes.push(e);
            }
            (i.pipesCount += 1), s("pipe count=%d opts=%j", i.pipesCount, t);
            var a =
              (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? u : y;
            function l(t, r) {
              s("onunpipe"),
                t === n &&
                  r &&
                  !1 === r.hasUnpiped &&
                  ((r.hasUnpiped = !0),
                  s("cleanup"),
                  e.removeListener("close", h),
                  e.removeListener("finish", m),
                  e.removeListener("drain", c),
                  e.removeListener("error", p),
                  e.removeListener("unpipe", l),
                  n.removeListener("end", u),
                  n.removeListener("end", y),
                  n.removeListener("data", d),
                  (f = !0),
                  !i.awaitDrain ||
                    (e._writableState && !e._writableState.needDrain) ||
                    c());
            }
            function u() {
              s("onend"), e.end();
            }
            i.endEmitted ? r.nextTick(a) : n.once("end", a), e.on("unpipe", l);
            var c = (function (e) {
              return function () {
                var t = e._readableState;
                s("pipeOnDrain", t.awaitDrain),
                  t.awaitDrain && t.awaitDrain--,
                  0 === t.awaitDrain &&
                    o(e, "data") &&
                    ((t.flowing = !0), D(e));
              };
            })(n);
            e.on("drain", c);
            var f = !1;
            function d(t) {
              s("ondata");
              var r = e.write(t);
              s("dest.write", r),
                !1 === r &&
                  (((1 === i.pipesCount && i.pipes === e) ||
                    (i.pipesCount > 1 && -1 !== B(i.pipes, e))) &&
                    !f &&
                    (s("false write response, pause", i.awaitDrain),
                    i.awaitDrain++),
                  n.pause());
            }
            function p(t) {
              s("onerror", t),
                y(),
                e.removeListener("error", p),
                0 === o(e, "error") && e.emit("error", t);
            }
            function h() {
              e.removeListener("finish", m), y();
            }
            function m() {
              s("onfinish"), e.removeListener("close", h), y();
            }
            function y() {
              s("unpipe"), n.unpipe(e);
            }
            return (
              n.on("data", d),
              (function (e, t, n) {
                if ("function" === typeof e.prependListener)
                  return e.prependListener(t, n);
                e._events && e._events[t]
                  ? Array.isArray(e._events[t])
                    ? e._events[t].unshift(n)
                    : (e._events[t] = [n, e._events[t]])
                  : e.on(t, n);
              })(e, "error", p),
              e.once("close", h),
              e.once("finish", m),
              e.emit("pipe", n),
              i.flowing || (s("pipe resume"), n.resume()),
              e
            );
          }),
          (k.prototype.unpipe = function (e) {
            var t = this._readableState,
              n = { hasUnpiped: !1 };
            if (0 === t.pipesCount) return this;
            if (1 === t.pipesCount)
              return e && e !== t.pipes
                ? this
                : (e || (e = t.pipes),
                  (t.pipes = null),
                  (t.pipesCount = 0),
                  (t.flowing = !1),
                  e && e.emit("unpipe", this, n),
                  this);
            if (!e) {
              var r = t.pipes,
                i = t.pipesCount;
              (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
              for (var o = 0; o < i; o++)
                r[o].emit("unpipe", this, { hasUnpiped: !1 });
              return this;
            }
            var a = B(t.pipes, e);
            return -1 === a
              ? this
              : (t.pipes.splice(a, 1),
                (t.pipesCount -= 1),
                1 === t.pipesCount && (t.pipes = t.pipes[0]),
                e.emit("unpipe", this, n),
                this);
          }),
          (k.prototype.on = function (e, t) {
            var n = a.prototype.on.call(this, e, t),
              i = this._readableState;
            return (
              "data" === e
                ? ((i.readableListening = this.listenerCount("readable") > 0),
                  !1 !== i.flowing && this.resume())
                : "readable" === e &&
                  (i.endEmitted ||
                    i.readableListening ||
                    ((i.readableListening = i.needReadable = !0),
                    (i.flowing = !1),
                    (i.emittedReadable = !1),
                    s("on readable", i.length, i.reading),
                    i.length ? O(this) : i.reading || r.nextTick(N, this))),
              n
            );
          }),
          (k.prototype.addListener = k.prototype.on),
          (k.prototype.removeListener = function (e, t) {
            var n = a.prototype.removeListener.call(this, e, t);
            return "readable" === e && r.nextTick(j, this), n;
          }),
          (k.prototype.removeAllListeners = function (e) {
            var t = a.prototype.removeAllListeners.apply(this, arguments);
            return ("readable" !== e && void 0 !== e) || r.nextTick(j, this), t;
          }),
          (k.prototype.resume = function () {
            var e = this._readableState;
            return (
              e.flowing ||
                (s("resume"),
                (e.flowing = !e.readableListening),
                (function (e, t) {
                  t.resumeScheduled ||
                    ((t.resumeScheduled = !0), r.nextTick(L, e, t));
                })(this, e)),
              (e.paused = !1),
              this
            );
          }),
          (k.prototype.pause = function () {
            return (
              s("call pause flowing=%j", this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (s("pause"),
                (this._readableState.flowing = !1),
                this.emit("pause")),
              (this._readableState.paused = !0),
              this
            );
          }),
          (k.prototype.wrap = function (e) {
            var t = this,
              n = this._readableState,
              r = !1;
            for (var i in (e.on("end", function () {
              if ((s("wrapped end"), n.decoder && !n.ended)) {
                var e = n.decoder.end();
                e && e.length && t.push(e);
              }
              t.push(null);
            }),
            e.on("data", function (i) {
              (s("wrapped data"),
              n.decoder && (i = n.decoder.write(i)),
              !n.objectMode || (null !== i && void 0 !== i)) &&
                (n.objectMode || (i && i.length)) &&
                (t.push(i) || ((r = !0), e.pause()));
            }),
            e))
              void 0 === this[i] &&
                "function" === typeof e[i] &&
                (this[i] = (function (t) {
                  return function () {
                    return e[t].apply(e, arguments);
                  };
                })(i));
            for (var o = 0; o < S.length; o++)
              e.on(S[o], this.emit.bind(this, S[o]));
            return (
              (this._read = function (t) {
                s("wrapped _read", t), r && ((r = !1), e.resume());
              }),
              this
            );
          }),
          "function" === typeof Symbol &&
            (k.prototype[Symbol.asyncIterator] = function () {
              return (
                _("Readable[Symbol.asyncIterator]"),
                void 0 === d && (d = n(60)),
                d(this)
              );
            }),
          Object.defineProperty(k.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._readableState.highWaterMark;
            },
          }),
          Object.defineProperty(k.prototype, "readableBuffer", {
            enumerable: !1,
            get: function () {
              return this._readableState && this._readableState.buffer;
            },
          }),
          Object.defineProperty(k.prototype, "readableFlowing", {
            enumerable: !1,
            get: function () {
              return this._readableState.flowing;
            },
            set: function (e) {
              this._readableState && (this._readableState.flowing = e);
            },
          }),
          (k._fromList = I),
          Object.defineProperty(k.prototype, "readableLength", {
            enumerable: !1,
            get: function () {
              return this._readableState.length;
            },
          });
      }.call(this, n(4), n(0)));
    },
    function (e, t, n) {
      e.exports = n(11).EventEmitter;
    },
    function (e, t, n) {
      "use strict";
      (function (t) {
        function n(e, t) {
          i(e, t), r(e);
        }
        function r(e) {
          (e._writableState && !e._writableState.emitClose) ||
            (e._readableState && !e._readableState.emitClose) ||
            e.emit("close");
        }
        function i(e, t) {
          e.emit("error", t);
        }
        e.exports = {
          destroy: function (e, o) {
            var a = this,
              l = this._readableState && this._readableState.destroyed,
              u = this._writableState && this._writableState.destroyed;
            return l || u
              ? (o
                  ? o(e)
                  : !e ||
                    (this._writableState && this._writableState.errorEmitted) ||
                    t.nextTick(i, this, e),
                this)
              : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(e || null, function (e) {
                  !o && e
                    ? (t.nextTick(n, a, e),
                      a._writableState && (a._writableState.errorEmitted = !0))
                    : o
                    ? (t.nextTick(r, a), o(e))
                    : t.nextTick(r, a);
                }),
                this);
          },
          undestroy: function () {
            this._readableState &&
              ((this._readableState.destroyed = !1),
              (this._readableState.reading = !1),
              (this._readableState.ended = !1),
              (this._readableState.endEmitted = !1)),
              this._writableState &&
                ((this._writableState.destroyed = !1),
                (this._writableState.ended = !1),
                (this._writableState.ending = !1),
                (this._writableState.finalCalled = !1),
                (this._writableState.prefinished = !1),
                (this._writableState.finished = !1),
                (this._writableState.errorEmitted = !1));
          },
        };
      }.call(this, n(0)));
    },
    function (e, t, n) {
      "use strict";
      var r = n(7).codes.ERR_INVALID_OPT_VALUE;
      e.exports = {
        getHighWaterMark: function (e, t, n, i) {
          var o = (function (e, t, n) {
            return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null;
          })(t, i, n);
          if (null != o) {
            if (!isFinite(o) || Math.floor(o) !== o || o < 0)
              throw new r(i ? n : "highWaterMark", o);
            return Math.floor(o);
          }
          return e.objectMode ? 16 : 16384;
        },
      };
    },
    function (e, t, n) {
      "use strict";
      (function (t, r) {
        function i(e) {
          var t = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function () {
              !(function (e, t, n) {
                var r = e.entry;
                e.entry = null;
                for (; r; ) {
                  var i = r.callback;
                  t.pendingcb--, i(n), (r = r.next);
                }
                t.corkedRequestsFree.next = e;
              })(t, e);
            });
        }
        var o;
        (e.exports = k), (k.WritableState = E);
        var a = { deprecate: n(24) },
          l = n(20),
          u = n(1).Buffer,
          s = t.Uint8Array || function () {};
        var c,
          f = n(21),
          d = n(22).getHighWaterMark,
          p = n(7).codes,
          h = p.ERR_INVALID_ARG_TYPE,
          m = p.ERR_METHOD_NOT_IMPLEMENTED,
          y = p.ERR_MULTIPLE_CALLBACK,
          g = p.ERR_STREAM_CANNOT_PIPE,
          b = p.ERR_STREAM_DESTROYED,
          v = p.ERR_STREAM_NULL_VALUES,
          w = p.ERR_STREAM_WRITE_AFTER_END,
          _ = p.ERR_UNKNOWN_ENCODING;
        function S() {}
        function E(e, t, a) {
          (o = o || n(8)),
            (e = e || {}),
            "boolean" !== typeof a && (a = t instanceof o),
            (this.objectMode = !!e.objectMode),
            a && (this.objectMode = this.objectMode || !!e.writableObjectMode),
            (this.highWaterMark = d(this, e, "writableHighWaterMark", a)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var l = !1 === e.decodeStrings;
          (this.decodeStrings = !l),
            (this.defaultEncoding = e.defaultEncoding || "utf8"),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function (e) {
              !(function (e, t) {
                var n = e._writableState,
                  i = n.sync,
                  o = n.writecb;
                if ("function" !== typeof o) throw new y();
                if (
                  ((function (e) {
                    (e.writing = !1),
                      (e.writecb = null),
                      (e.length -= e.writelen),
                      (e.writelen = 0);
                  })(n),
                  t)
                )
                  !(function (e, t, n, i, o) {
                    --t.pendingcb,
                      n
                        ? (r.nextTick(o, i),
                          r.nextTick(P, e, t),
                          (e._writableState.errorEmitted = !0),
                          e.emit("error", i))
                        : (o(i),
                          (e._writableState.errorEmitted = !0),
                          e.emit("error", i),
                          P(e, t));
                  })(e, n, i, t, o);
                else {
                  var a = C(n) || e.destroyed;
                  a ||
                    n.corked ||
                    n.bufferProcessing ||
                    !n.bufferedRequest ||
                    R(e, n),
                    i ? r.nextTick(x, e, n, a, o) : x(e, n, a, o);
                }
              })(t, e);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.emitClose = !1 !== e.emitClose),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new i(this));
        }
        function k(e) {
          var t = this instanceof (o = o || n(8));
          if (!t && !c.call(k, this)) return new k(e);
          (this._writableState = new E(e, this, t)),
            (this.writable = !0),
            e &&
              ("function" === typeof e.write && (this._write = e.write),
              "function" === typeof e.writev && (this._writev = e.writev),
              "function" === typeof e.destroy && (this._destroy = e.destroy),
              "function" === typeof e.final && (this._final = e.final)),
            l.call(this);
        }
        function T(e, t, n, r, i, o, a) {
          (t.writelen = r),
            (t.writecb = a),
            (t.writing = !0),
            (t.sync = !0),
            t.destroyed
              ? t.onwrite(new b("write"))
              : n
              ? e._writev(i, t.onwrite)
              : e._write(i, o, t.onwrite),
            (t.sync = !1);
        }
        function x(e, t, n, r) {
          n ||
            (function (e, t) {
              0 === t.length &&
                t.needDrain &&
                ((t.needDrain = !1), e.emit("drain"));
            })(e, t),
            t.pendingcb--,
            r(),
            P(e, t);
        }
        function R(e, t) {
          t.bufferProcessing = !0;
          var n = t.bufferedRequest;
          if (e._writev && n && n.next) {
            var r = t.bufferedRequestCount,
              o = new Array(r),
              a = t.corkedRequestsFree;
            a.entry = n;
            for (var l = 0, u = !0; n; )
              (o[l] = n), n.isBuf || (u = !1), (n = n.next), (l += 1);
            (o.allBuffers = u),
              T(e, t, !0, t.length, o, "", a.finish),
              t.pendingcb++,
              (t.lastBufferedRequest = null),
              a.next
                ? ((t.corkedRequestsFree = a.next), (a.next = null))
                : (t.corkedRequestsFree = new i(t)),
              (t.bufferedRequestCount = 0);
          } else {
            for (; n; ) {
              var s = n.chunk,
                c = n.encoding,
                f = n.callback;
              if (
                (T(e, t, !1, t.objectMode ? 1 : s.length, s, c, f),
                (n = n.next),
                t.bufferedRequestCount--,
                t.writing)
              )
                break;
            }
            null === n && (t.lastBufferedRequest = null);
          }
          (t.bufferedRequest = n), (t.bufferProcessing = !1);
        }
        function C(e) {
          return (
            e.ending &&
            0 === e.length &&
            null === e.bufferedRequest &&
            !e.finished &&
            !e.writing
          );
        }
        function O(e, t) {
          e._final(function (n) {
            t.pendingcb--,
              n && e.emit("error", n),
              (t.prefinished = !0),
              e.emit("prefinish"),
              P(e, t);
          });
        }
        function P(e, t) {
          var n = C(t);
          return (
            n &&
              (!(function (e, t) {
                t.prefinished ||
                  t.finalCalled ||
                  ("function" !== typeof e._final || t.destroyed
                    ? ((t.prefinished = !0), e.emit("prefinish"))
                    : (t.pendingcb++,
                      (t.finalCalled = !0),
                      r.nextTick(O, e, t)));
              })(e, t),
              0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
            n
          );
        }
        n(2)(k, l),
          (E.prototype.getBuffer = function () {
            for (var e = this.bufferedRequest, t = []; e; )
              t.push(e), (e = e.next);
            return t;
          }),
          (function () {
            try {
              Object.defineProperty(E.prototype, "buffer", {
                get: a.deprecate(
                  function () {
                    return this.getBuffer();
                  },
                  "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                  "DEP0003"
                ),
              });
            } catch (e) {}
          })(),
          "function" === typeof Symbol &&
          Symbol.hasInstance &&
          "function" === typeof Function.prototype[Symbol.hasInstance]
            ? ((c = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(k, Symbol.hasInstance, {
                value: function (e) {
                  return (
                    !!c.call(this, e) ||
                    (this === k && e && e._writableState instanceof E)
                  );
                },
              }))
            : (c = function (e) {
                return e instanceof this;
              }),
          (k.prototype.pipe = function () {
            this.emit("error", new g());
          }),
          (k.prototype.write = function (e, t, n) {
            var i,
              o = this._writableState,
              a = !1,
              l = !o.objectMode && ((i = e), u.isBuffer(i) || i instanceof s);
            return (
              l &&
                !u.isBuffer(e) &&
                (e = (function (e) {
                  return u.from(e);
                })(e)),
              "function" === typeof t && ((n = t), (t = null)),
              l ? (t = "buffer") : t || (t = o.defaultEncoding),
              "function" !== typeof n && (n = S),
              o.ending
                ? (function (e, t) {
                    var n = new w();
                    e.emit("error", n), r.nextTick(t, n);
                  })(this, n)
                : (l ||
                    (function (e, t, n, i) {
                      var o;
                      return (
                        null === n
                          ? (o = new v())
                          : "string" === typeof n ||
                            t.objectMode ||
                            (o = new h("chunk", ["string", "Buffer"], n)),
                        !o || (e.emit("error", o), r.nextTick(i, o), !1)
                      );
                    })(this, o, e, n)) &&
                  (o.pendingcb++,
                  (a = (function (e, t, n, r, i, o) {
                    if (!n) {
                      var a = (function (e, t, n) {
                        e.objectMode ||
                          !1 === e.decodeStrings ||
                          "string" !== typeof t ||
                          (t = u.from(t, n));
                        return t;
                      })(t, r, i);
                      r !== a && ((n = !0), (i = "buffer"), (r = a));
                    }
                    var l = t.objectMode ? 1 : r.length;
                    t.length += l;
                    var s = t.length < t.highWaterMark;
                    s || (t.needDrain = !0);
                    if (t.writing || t.corked) {
                      var c = t.lastBufferedRequest;
                      (t.lastBufferedRequest = {
                        chunk: r,
                        encoding: i,
                        isBuf: n,
                        callback: o,
                        next: null,
                      }),
                        c
                          ? (c.next = t.lastBufferedRequest)
                          : (t.bufferedRequest = t.lastBufferedRequest),
                        (t.bufferedRequestCount += 1);
                    } else T(e, t, !1, l, r, i, o);
                    return s;
                  })(this, o, l, e, t, n))),
              a
            );
          }),
          (k.prototype.cork = function () {
            this._writableState.corked++;
          }),
          (k.prototype.uncork = function () {
            var e = this._writableState;
            e.corked &&
              (e.corked--,
              e.writing ||
                e.corked ||
                e.bufferProcessing ||
                !e.bufferedRequest ||
                R(this, e));
          }),
          (k.prototype.setDefaultEncoding = function (e) {
            if (
              ("string" === typeof e && (e = e.toLowerCase()),
              !(
                [
                  "hex",
                  "utf8",
                  "utf-8",
                  "ascii",
                  "binary",
                  "base64",
                  "ucs2",
                  "ucs-2",
                  "utf16le",
                  "utf-16le",
                  "raw",
                ].indexOf((e + "").toLowerCase()) > -1
              ))
            )
              throw new _(e);
            return (this._writableState.defaultEncoding = e), this;
          }),
          Object.defineProperty(k.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(k.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
          (k.prototype._write = function (e, t, n) {
            n(new m("_write()"));
          }),
          (k.prototype._writev = null),
          (k.prototype.end = function (e, t, n) {
            var i = this._writableState;
            return (
              "function" === typeof e
                ? ((n = e), (e = null), (t = null))
                : "function" === typeof t && ((n = t), (t = null)),
              null !== e && void 0 !== e && this.write(e, t),
              i.corked && ((i.corked = 1), this.uncork()),
              i.ending ||
                (function (e, t, n) {
                  (t.ending = !0),
                    P(e, t),
                    n && (t.finished ? r.nextTick(n) : e.once("finish", n));
                  (t.ended = !0), (e.writable = !1);
                })(this, i, n),
              this
            );
          }),
          Object.defineProperty(k.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(k.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function (e) {
              this._writableState && (this._writableState.destroyed = e);
            },
          }),
          (k.prototype.destroy = f.destroy),
          (k.prototype._undestroy = f.undestroy),
          (k.prototype._destroy = function (e, t) {
            t(e);
          });
      }.call(this, n(4), n(0)));
    },
    function (e, t, n) {
      (function (t) {
        function n(e) {
          try {
            if (!t.localStorage) return !1;
          } catch (r) {
            return !1;
          }
          var n = t.localStorage[e];
          return null != n && "true" === String(n).toLowerCase();
        }
        e.exports = function (e, t) {
          if (n("noDeprecation")) return e;
          var r = !1;
          return function () {
            if (!r) {
              if (n("throwDeprecation")) throw new Error(t);
              n("traceDeprecation") ? console.trace(t) : console.warn(t),
                (r = !0);
            }
            return e.apply(this, arguments);
          };
        };
      }.call(this, n(4)));
    },
    function (e, t, n) {
      "use strict";
      e.exports = c;
      var r = n(7).codes,
        i = r.ERR_METHOD_NOT_IMPLEMENTED,
        o = r.ERR_MULTIPLE_CALLBACK,
        a = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        l = r.ERR_TRANSFORM_WITH_LENGTH_0,
        u = n(8);
      function s(e, t) {
        var n = this._transformState;
        n.transforming = !1;
        var r = n.writecb;
        if (null === r) return this.emit("error", new o());
        (n.writechunk = null),
          (n.writecb = null),
          null != t && this.push(t),
          r(e);
        var i = this._readableState;
        (i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
      }
      function c(e) {
        if (!(this instanceof c)) return new c(e);
        u.call(this, e),
          (this._transformState = {
            afterTransform: s.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          e &&
            ("function" === typeof e.transform &&
              (this._transform = e.transform),
            "function" === typeof e.flush && (this._flush = e.flush)),
          this.on("prefinish", f);
      }
      function f() {
        var e = this;
        "function" !== typeof this._flush || this._readableState.destroyed
          ? d(this, null, null)
          : this._flush(function (t, n) {
              d(e, t, n);
            });
      }
      function d(e, t, n) {
        if (t) return e.emit("error", t);
        if ((null != n && e.push(n), e._writableState.length)) throw new l();
        if (e._transformState.transforming) throw new a();
        return e.push(null);
      }
      n(2)(c, u),
        (c.prototype.push = function (e, t) {
          return (
            (this._transformState.needTransform = !1),
            u.prototype.push.call(this, e, t)
          );
        }),
        (c.prototype._transform = function (e, t, n) {
          n(new i("_transform()"));
        }),
        (c.prototype._write = function (e, t, n) {
          var r = this._transformState;
          if (
            ((r.writecb = n),
            (r.writechunk = e),
            (r.writeencoding = t),
            !r.transforming)
          ) {
            var i = this._readableState;
            (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
          }
        }),
        (c.prototype._read = function (e) {
          var t = this._transformState;
          null === t.writechunk || t.transforming
            ? (t.needTransform = !0)
            : ((t.transforming = !0),
              this._transform(t.writechunk, t.writeencoding, t.afterTransform));
        }),
        (c.prototype._destroy = function (e, t) {
          u.prototype._destroy.call(this, e, function (e) {
            t(e);
          });
        });
    },
    function (e, t, n) {
      (function (t) {
        var n = Object.prototype.toString,
          r =
            "function" === typeof t.alloc &&
            "function" === typeof t.allocUnsafe &&
            "function" === typeof t.from;
        e.exports = function (e, i, o) {
          if ("number" === typeof e)
            throw new TypeError('"value" argument must not be a number');
          return (
            (a = e),
            "ArrayBuffer" === n.call(a).slice(8, -1)
              ? (function (e, n, i) {
                  n >>>= 0;
                  var o = e.byteLength - n;
                  if (o < 0) throw new RangeError("'offset' is out of bounds");
                  if (void 0 === i) i = o;
                  else if ((i >>>= 0) > o)
                    throw new RangeError("'length' is out of bounds");
                  return r
                    ? t.from(e.slice(n, n + i))
                    : new t(new Uint8Array(e.slice(n, n + i)));
                })(e, i, o)
              : "string" === typeof e
              ? (function (e, n) {
                  if (
                    (("string" === typeof n && "" !== n) || (n = "utf8"),
                    !t.isEncoding(n))
                  )
                    throw new TypeError(
                      '"encoding" must be a valid string encoding'
                    );
                  return r ? t.from(e, n) : new t(e, n);
                })(e, i)
              : r
              ? t.from(e)
              : new t(e)
          );
          var a;
        };
      }.call(this, n(1).Buffer));
    },
    function (e, t, n) {
      "use strict";
      (function (t, r) {
        var i;
        (e.exports = k), (k.ReadableState = E);
        n(11).EventEmitter;
        var o = function (e, t) {
            return e.listeners(t).length;
          },
          a = n(28),
          l = n(1).Buffer,
          u = t.Uint8Array || function () {};
        var s,
          c = n(66);
        s = c && c.debuglog ? c.debuglog("stream") : function () {};
        var f,
          d,
          p = n(67),
          h = n(29),
          m = n(30).getHighWaterMark,
          y = n(9).codes,
          g = y.ERR_INVALID_ARG_TYPE,
          b = y.ERR_STREAM_PUSH_AFTER_EOF,
          v = y.ERR_METHOD_NOT_IMPLEMENTED,
          w = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,
          _ = n(69).emitExperimentalWarning;
        n(2)(k, a);
        var S = ["error", "close", "destroy", "pause", "resume"];
        function E(e, t, r) {
          (i = i || n(10)),
            (e = e || {}),
            "boolean" !== typeof r && (r = t instanceof i),
            (this.objectMode = !!e.objectMode),
            r && (this.objectMode = this.objectMode || !!e.readableObjectMode),
            (this.highWaterMark = m(this, e, "readableHighWaterMark", r)),
            (this.buffer = new p()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.paused = !0),
            (this.emitClose = !1 !== e.emitClose),
            (this.destroyed = !1),
            (this.defaultEncoding = e.defaultEncoding || "utf8"),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            e.encoding &&
              (f || (f = n(12).StringDecoder),
              (this.decoder = new f(e.encoding)),
              (this.encoding = e.encoding));
        }
        function k(e) {
          if (((i = i || n(10)), !(this instanceof k))) return new k(e);
          var t = this instanceof i;
          (this._readableState = new E(e, this, t)),
            (this.readable = !0),
            e &&
              ("function" === typeof e.read && (this._read = e.read),
              "function" === typeof e.destroy && (this._destroy = e.destroy)),
            a.call(this);
        }
        function T(e, t, n, r, i) {
          s("readableAddChunk", t);
          var o,
            a = e._readableState;
          if (null === t)
            (a.reading = !1),
              (function (e, t) {
                if (t.ended) return;
                if (t.decoder) {
                  var n = t.decoder.end();
                  n &&
                    n.length &&
                    (t.buffer.push(n),
                    (t.length += t.objectMode ? 1 : n.length));
                }
                (t.ended = !0),
                  t.sync
                    ? O(e)
                    : ((t.needReadable = !1),
                      t.emittedReadable || ((t.emittedReadable = !0), P(e)));
              })(e, a);
          else if (
            (i ||
              (o = (function (e, t) {
                var n;
                (r = t),
                  l.isBuffer(r) ||
                    r instanceof u ||
                    "string" === typeof t ||
                    void 0 === t ||
                    e.objectMode ||
                    (n = new g("chunk", ["string", "Buffer", "Uint8Array"], t));
                var r;
                return n;
              })(a, t)),
            o)
          )
            e.emit("error", o);
          else if (a.objectMode || (t && t.length > 0))
            if (
              ("string" === typeof t ||
                a.objectMode ||
                Object.getPrototypeOf(t) === l.prototype ||
                (t = (function (e) {
                  return l.from(e);
                })(t)),
              r)
            )
              a.endEmitted ? e.emit("error", new w()) : x(e, a, t, !0);
            else if (a.ended) e.emit("error", new b());
            else {
              if (a.destroyed) return !1;
              (a.reading = !1),
                a.decoder && !n
                  ? ((t = a.decoder.write(t)),
                    a.objectMode || 0 !== t.length ? x(e, a, t, !1) : M(e, a))
                  : x(e, a, t, !1);
            }
          else r || ((a.reading = !1), M(e, a));
          return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
        }
        function x(e, t, n, r) {
          t.flowing && 0 === t.length && !t.sync
            ? ((t.awaitDrain = 0), e.emit("data", n))
            : ((t.length += t.objectMode ? 1 : n.length),
              r ? t.buffer.unshift(n) : t.buffer.push(n),
              t.needReadable && O(e)),
            M(e, t);
        }
        Object.defineProperty(k.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function (e) {
            this._readableState && (this._readableState.destroyed = e);
          },
        }),
          (k.prototype.destroy = h.destroy),
          (k.prototype._undestroy = h.undestroy),
          (k.prototype._destroy = function (e, t) {
            t(e);
          }),
          (k.prototype.push = function (e, t) {
            var n,
              r = this._readableState;
            return (
              r.objectMode
                ? (n = !0)
                : "string" === typeof e &&
                  ((t = t || r.defaultEncoding) !== r.encoding &&
                    ((e = l.from(e, t)), (t = "")),
                  (n = !0)),
              T(this, e, t, !1, n)
            );
          }),
          (k.prototype.unshift = function (e) {
            return T(this, e, null, !0, !1);
          }),
          (k.prototype.isPaused = function () {
            return !1 === this._readableState.flowing;
          }),
          (k.prototype.setEncoding = function (e) {
            return (
              f || (f = n(12).StringDecoder),
              (this._readableState.decoder = new f(e)),
              (this._readableState.encoding =
                this._readableState.decoder.encoding),
              this
            );
          });
        var R = 8388608;
        function C(e, t) {
          return e <= 0 || (0 === t.length && t.ended)
            ? 0
            : t.objectMode
            ? 1
            : e !== e
            ? t.flowing && t.length
              ? t.buffer.head.data.length
              : t.length
            : (e > t.highWaterMark &&
                (t.highWaterMark = (function (e) {
                  return (
                    e >= R
                      ? (e = R)
                      : (e--,
                        (e |= e >>> 1),
                        (e |= e >>> 2),
                        (e |= e >>> 4),
                        (e |= e >>> 8),
                        (e |= e >>> 16),
                        e++),
                    e
                  );
                })(e)),
              e <= t.length
                ? e
                : t.ended
                ? t.length
                : ((t.needReadable = !0), 0));
        }
        function O(e) {
          var t = e._readableState;
          (t.needReadable = !1),
            t.emittedReadable ||
              (s("emitReadable", t.flowing),
              (t.emittedReadable = !0),
              r.nextTick(P, e));
        }
        function P(e) {
          var t = e._readableState;
          s("emitReadable_", t.destroyed, t.length, t.ended),
            t.destroyed || (!t.length && !t.ended) || e.emit("readable"),
            (t.needReadable =
              !t.flowing && !t.ended && t.length <= t.highWaterMark),
            D(e);
        }
        function M(e, t) {
          t.readingMore || ((t.readingMore = !0), r.nextTick(A, e, t));
        }
        function A(e, t) {
          for (
            ;
            !t.reading &&
            !t.ended &&
            (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

          ) {
            var n = t.length;
            if ((s("maybeReadMore read 0"), e.read(0), n === t.length)) break;
          }
          t.readingMore = !1;
        }
        function j(e) {
          var t = e._readableState;
          (t.readableListening = e.listenerCount("readable") > 0),
            t.resumeScheduled && !t.paused
              ? (t.flowing = !0)
              : e.listenerCount("data") > 0 && e.resume();
        }
        function N(e) {
          s("readable nexttick read 0"), e.read(0);
        }
        function L(e, t) {
          s("resume", t.reading),
            t.reading || e.read(0),
            (t.resumeScheduled = !1),
            e.emit("resume"),
            D(e),
            t.flowing && !t.reading && e.read(0);
        }
        function D(e) {
          var t = e._readableState;
          for (s("flow", t.flowing); t.flowing && null !== e.read(); );
        }
        function I(e, t) {
          return 0 === t.length
            ? null
            : (t.objectMode
                ? (n = t.buffer.shift())
                : !e || e >= t.length
                ? ((n = t.decoder
                    ? t.buffer.join("")
                    : 1 === t.buffer.length
                    ? t.buffer.first()
                    : t.buffer.concat(t.length)),
                  t.buffer.clear())
                : (n = t.buffer.consume(e, t.decoder)),
              n);
          var n;
        }
        function U(e) {
          var t = e._readableState;
          s("endReadable", t.endEmitted),
            t.endEmitted || ((t.ended = !0), r.nextTick(F, t, e));
        }
        function F(e, t) {
          s("endReadableNT", e.endEmitted, e.length),
            e.endEmitted ||
              0 !== e.length ||
              ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
        }
        function B(e, t) {
          for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        }
        (k.prototype.read = function (e) {
          s("read", e), (e = parseInt(e, 10));
          var t = this._readableState,
            n = e;
          if (
            (0 !== e && (t.emittedReadable = !1),
            0 === e &&
              t.needReadable &&
              ((0 !== t.highWaterMark
                ? t.length >= t.highWaterMark
                : t.length > 0) ||
                t.ended))
          )
            return (
              s("read: emitReadable", t.length, t.ended),
              0 === t.length && t.ended ? U(this) : O(this),
              null
            );
          if (0 === (e = C(e, t)) && t.ended)
            return 0 === t.length && U(this), null;
          var r,
            i = t.needReadable;
          return (
            s("need readable", i),
            (0 === t.length || t.length - e < t.highWaterMark) &&
              s("length less than watermark", (i = !0)),
            t.ended || t.reading
              ? s("reading or ended", (i = !1))
              : i &&
                (s("do read"),
                (t.reading = !0),
                (t.sync = !0),
                0 === t.length && (t.needReadable = !0),
                this._read(t.highWaterMark),
                (t.sync = !1),
                t.reading || (e = C(n, t))),
            null === (r = e > 0 ? I(e, t) : null)
              ? ((t.needReadable = !0), (e = 0))
              : ((t.length -= e), (t.awaitDrain = 0)),
            0 === t.length &&
              (t.ended || (t.needReadable = !0), n !== e && t.ended && U(this)),
            null !== r && this.emit("data", r),
            r
          );
        }),
          (k.prototype._read = function (e) {
            this.emit("error", new v("_read()"));
          }),
          (k.prototype.pipe = function (e, t) {
            var n = this,
              i = this._readableState;
            switch (i.pipesCount) {
              case 0:
                i.pipes = e;
                break;
              case 1:
                i.pipes = [i.pipes, e];
                break;
              default:
                i.pipes.push(e);
            }
            (i.pipesCount += 1), s("pipe count=%d opts=%j", i.pipesCount, t);
            var a =
              (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr ? u : y;
            function l(t, r) {
              s("onunpipe"),
                t === n &&
                  r &&
                  !1 === r.hasUnpiped &&
                  ((r.hasUnpiped = !0),
                  s("cleanup"),
                  e.removeListener("close", h),
                  e.removeListener("finish", m),
                  e.removeListener("drain", c),
                  e.removeListener("error", p),
                  e.removeListener("unpipe", l),
                  n.removeListener("end", u),
                  n.removeListener("end", y),
                  n.removeListener("data", d),
                  (f = !0),
                  !i.awaitDrain ||
                    (e._writableState && !e._writableState.needDrain) ||
                    c());
            }
            function u() {
              s("onend"), e.end();
            }
            i.endEmitted ? r.nextTick(a) : n.once("end", a), e.on("unpipe", l);
            var c = (function (e) {
              return function () {
                var t = e._readableState;
                s("pipeOnDrain", t.awaitDrain),
                  t.awaitDrain && t.awaitDrain--,
                  0 === t.awaitDrain &&
                    o(e, "data") &&
                    ((t.flowing = !0), D(e));
              };
            })(n);
            e.on("drain", c);
            var f = !1;
            function d(t) {
              s("ondata");
              var r = e.write(t);
              s("dest.write", r),
                !1 === r &&
                  (((1 === i.pipesCount && i.pipes === e) ||
                    (i.pipesCount > 1 && -1 !== B(i.pipes, e))) &&
                    !f &&
                    (s("false write response, pause", i.awaitDrain),
                    i.awaitDrain++),
                  n.pause());
            }
            function p(t) {
              s("onerror", t),
                y(),
                e.removeListener("error", p),
                0 === o(e, "error") && e.emit("error", t);
            }
            function h() {
              e.removeListener("finish", m), y();
            }
            function m() {
              s("onfinish"), e.removeListener("close", h), y();
            }
            function y() {
              s("unpipe"), n.unpipe(e);
            }
            return (
              n.on("data", d),
              (function (e, t, n) {
                if ("function" === typeof e.prependListener)
                  return e.prependListener(t, n);
                e._events && e._events[t]
                  ? Array.isArray(e._events[t])
                    ? e._events[t].unshift(n)
                    : (e._events[t] = [n, e._events[t]])
                  : e.on(t, n);
              })(e, "error", p),
              e.once("close", h),
              e.once("finish", m),
              e.emit("pipe", n),
              i.flowing || (s("pipe resume"), n.resume()),
              e
            );
          }),
          (k.prototype.unpipe = function (e) {
            var t = this._readableState,
              n = { hasUnpiped: !1 };
            if (0 === t.pipesCount) return this;
            if (1 === t.pipesCount)
              return e && e !== t.pipes
                ? this
                : (e || (e = t.pipes),
                  (t.pipes = null),
                  (t.pipesCount = 0),
                  (t.flowing = !1),
                  e && e.emit("unpipe", this, n),
                  this);
            if (!e) {
              var r = t.pipes,
                i = t.pipesCount;
              (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
              for (var o = 0; o < i; o++)
                r[o].emit("unpipe", this, { hasUnpiped: !1 });
              return this;
            }
            var a = B(t.pipes, e);
            return -1 === a
              ? this
              : (t.pipes.splice(a, 1),
                (t.pipesCount -= 1),
                1 === t.pipesCount && (t.pipes = t.pipes[0]),
                e.emit("unpipe", this, n),
                this);
          }),
          (k.prototype.on = function (e, t) {
            var n = a.prototype.on.call(this, e, t),
              i = this._readableState;
            return (
              "data" === e
                ? ((i.readableListening = this.listenerCount("readable") > 0),
                  !1 !== i.flowing && this.resume())
                : "readable" === e &&
                  (i.endEmitted ||
                    i.readableListening ||
                    ((i.readableListening = i.needReadable = !0),
                    (i.flowing = !1),
                    (i.emittedReadable = !1),
                    s("on readable", i.length, i.reading),
                    i.length ? O(this) : i.reading || r.nextTick(N, this))),
              n
            );
          }),
          (k.prototype.addListener = k.prototype.on),
          (k.prototype.removeListener = function (e, t) {
            var n = a.prototype.removeListener.call(this, e, t);
            return "readable" === e && r.nextTick(j, this), n;
          }),
          (k.prototype.removeAllListeners = function (e) {
            var t = a.prototype.removeAllListeners.apply(this, arguments);
            return ("readable" !== e && void 0 !== e) || r.nextTick(j, this), t;
          }),
          (k.prototype.resume = function () {
            var e = this._readableState;
            return (
              e.flowing ||
                (s("resume"),
                (e.flowing = !e.readableListening),
                (function (e, t) {
                  t.resumeScheduled ||
                    ((t.resumeScheduled = !0), r.nextTick(L, e, t));
                })(this, e)),
              (e.paused = !1),
              this
            );
          }),
          (k.prototype.pause = function () {
            return (
              s("call pause flowing=%j", this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (s("pause"),
                (this._readableState.flowing = !1),
                this.emit("pause")),
              (this._readableState.paused = !0),
              this
            );
          }),
          (k.prototype.wrap = function (e) {
            var t = this,
              n = this._readableState,
              r = !1;
            for (var i in (e.on("end", function () {
              if ((s("wrapped end"), n.decoder && !n.ended)) {
                var e = n.decoder.end();
                e && e.length && t.push(e);
              }
              t.push(null);
            }),
            e.on("data", function (i) {
              (s("wrapped data"),
              n.decoder && (i = n.decoder.write(i)),
              !n.objectMode || (null !== i && void 0 !== i)) &&
                (n.objectMode || (i && i.length)) &&
                (t.push(i) || ((r = !0), e.pause()));
            }),
            e))
              void 0 === this[i] &&
                "function" === typeof e[i] &&
                (this[i] = (function (t) {
                  return function () {
                    return e[t].apply(e, arguments);
                  };
                })(i));
            for (var o = 0; o < S.length; o++)
              e.on(S[o], this.emit.bind(this, S[o]));
            return (
              (this._read = function (t) {
                s("wrapped _read", t), r && ((r = !1), e.resume());
              }),
              this
            );
          }),
          "function" === typeof Symbol &&
            (k.prototype[Symbol.asyncIterator] = function () {
              return (
                _("Readable[Symbol.asyncIterator]"),
                void 0 === d && (d = n(70)),
                d(this)
              );
            }),
          Object.defineProperty(k.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._readableState.highWaterMark;
            },
          }),
          Object.defineProperty(k.prototype, "readableBuffer", {
            enumerable: !1,
            get: function () {
              return this._readableState && this._readableState.buffer;
            },
          }),
          Object.defineProperty(k.prototype, "readableFlowing", {
            enumerable: !1,
            get: function () {
              return this._readableState.flowing;
            },
            set: function (e) {
              this._readableState && (this._readableState.flowing = e);
            },
          }),
          (k._fromList = I),
          Object.defineProperty(k.prototype, "readableLength", {
            enumerable: !1,
            get: function () {
              return this._readableState.length;
            },
          });
      }.call(this, n(4), n(0)));
    },
    function (e, t, n) {
      e.exports = n(11).EventEmitter;
    },
    function (e, t, n) {
      "use strict";
      (function (t) {
        function n(e, t) {
          i(e, t), r(e);
        }
        function r(e) {
          (e._writableState && !e._writableState.emitClose) ||
            (e._readableState && !e._readableState.emitClose) ||
            e.emit("close");
        }
        function i(e, t) {
          e.emit("error", t);
        }
        e.exports = {
          destroy: function (e, o) {
            var a = this,
              l = this._readableState && this._readableState.destroyed,
              u = this._writableState && this._writableState.destroyed;
            return l || u
              ? (o
                  ? o(e)
                  : !e ||
                    (this._writableState && this._writableState.errorEmitted) ||
                    t.nextTick(i, this, e),
                this)
              : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(e || null, function (e) {
                  !o && e
                    ? (t.nextTick(n, a, e),
                      a._writableState && (a._writableState.errorEmitted = !0))
                    : o
                    ? (t.nextTick(r, a), o(e))
                    : t.nextTick(r, a);
                }),
                this);
          },
          undestroy: function () {
            this._readableState &&
              ((this._readableState.destroyed = !1),
              (this._readableState.reading = !1),
              (this._readableState.ended = !1),
              (this._readableState.endEmitted = !1)),
              this._writableState &&
                ((this._writableState.destroyed = !1),
                (this._writableState.ended = !1),
                (this._writableState.ending = !1),
                (this._writableState.finalCalled = !1),
                (this._writableState.prefinished = !1),
                (this._writableState.finished = !1),
                (this._writableState.errorEmitted = !1));
          },
        };
      }.call(this, n(0)));
    },
    function (e, t, n) {
      "use strict";
      var r = n(9).codes.ERR_INVALID_OPT_VALUE;
      e.exports = {
        getHighWaterMark: function (e, t, n, i) {
          var o = (function (e, t, n) {
            return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null;
          })(t, i, n);
          if (null != o) {
            if (!isFinite(o) || Math.floor(o) !== o || o < 0)
              throw new r(i ? n : "highWaterMark", o);
            return Math.floor(o);
          }
          return e.objectMode ? 16 : 16384;
        },
      };
    },
    function (e, t, n) {
      "use strict";
      (function (t, r) {
        function i(e) {
          var t = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function () {
              !(function (e, t, n) {
                var r = e.entry;
                e.entry = null;
                for (; r; ) {
                  var i = r.callback;
                  t.pendingcb--, i(n), (r = r.next);
                }
                t.corkedRequestsFree.next = e;
              })(t, e);
            });
        }
        var o;
        (e.exports = k), (k.WritableState = E);
        var a = { deprecate: n(24) },
          l = n(28),
          u = n(1).Buffer,
          s = t.Uint8Array || function () {};
        var c,
          f = n(29),
          d = n(30).getHighWaterMark,
          p = n(9).codes,
          h = p.ERR_INVALID_ARG_TYPE,
          m = p.ERR_METHOD_NOT_IMPLEMENTED,
          y = p.ERR_MULTIPLE_CALLBACK,
          g = p.ERR_STREAM_CANNOT_PIPE,
          b = p.ERR_STREAM_DESTROYED,
          v = p.ERR_STREAM_NULL_VALUES,
          w = p.ERR_STREAM_WRITE_AFTER_END,
          _ = p.ERR_UNKNOWN_ENCODING;
        function S() {}
        function E(e, t, a) {
          (o = o || n(10)),
            (e = e || {}),
            "boolean" !== typeof a && (a = t instanceof o),
            (this.objectMode = !!e.objectMode),
            a && (this.objectMode = this.objectMode || !!e.writableObjectMode),
            (this.highWaterMark = d(this, e, "writableHighWaterMark", a)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var l = !1 === e.decodeStrings;
          (this.decodeStrings = !l),
            (this.defaultEncoding = e.defaultEncoding || "utf8"),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function (e) {
              !(function (e, t) {
                var n = e._writableState,
                  i = n.sync,
                  o = n.writecb;
                if ("function" !== typeof o) throw new y();
                if (
                  ((function (e) {
                    (e.writing = !1),
                      (e.writecb = null),
                      (e.length -= e.writelen),
                      (e.writelen = 0);
                  })(n),
                  t)
                )
                  !(function (e, t, n, i, o) {
                    --t.pendingcb,
                      n
                        ? (r.nextTick(o, i),
                          r.nextTick(P, e, t),
                          (e._writableState.errorEmitted = !0),
                          e.emit("error", i))
                        : (o(i),
                          (e._writableState.errorEmitted = !0),
                          e.emit("error", i),
                          P(e, t));
                  })(e, n, i, t, o);
                else {
                  var a = C(n) || e.destroyed;
                  a ||
                    n.corked ||
                    n.bufferProcessing ||
                    !n.bufferedRequest ||
                    R(e, n),
                    i ? r.nextTick(x, e, n, a, o) : x(e, n, a, o);
                }
              })(t, e);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.emitClose = !1 !== e.emitClose),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new i(this));
        }
        function k(e) {
          var t = this instanceof (o = o || n(10));
          if (!t && !c.call(k, this)) return new k(e);
          (this._writableState = new E(e, this, t)),
            (this.writable = !0),
            e &&
              ("function" === typeof e.write && (this._write = e.write),
              "function" === typeof e.writev && (this._writev = e.writev),
              "function" === typeof e.destroy && (this._destroy = e.destroy),
              "function" === typeof e.final && (this._final = e.final)),
            l.call(this);
        }
        function T(e, t, n, r, i, o, a) {
          (t.writelen = r),
            (t.writecb = a),
            (t.writing = !0),
            (t.sync = !0),
            t.destroyed
              ? t.onwrite(new b("write"))
              : n
              ? e._writev(i, t.onwrite)
              : e._write(i, o, t.onwrite),
            (t.sync = !1);
        }
        function x(e, t, n, r) {
          n ||
            (function (e, t) {
              0 === t.length &&
                t.needDrain &&
                ((t.needDrain = !1), e.emit("drain"));
            })(e, t),
            t.pendingcb--,
            r(),
            P(e, t);
        }
        function R(e, t) {
          t.bufferProcessing = !0;
          var n = t.bufferedRequest;
          if (e._writev && n && n.next) {
            var r = t.bufferedRequestCount,
              o = new Array(r),
              a = t.corkedRequestsFree;
            a.entry = n;
            for (var l = 0, u = !0; n; )
              (o[l] = n), n.isBuf || (u = !1), (n = n.next), (l += 1);
            (o.allBuffers = u),
              T(e, t, !0, t.length, o, "", a.finish),
              t.pendingcb++,
              (t.lastBufferedRequest = null),
              a.next
                ? ((t.corkedRequestsFree = a.next), (a.next = null))
                : (t.corkedRequestsFree = new i(t)),
              (t.bufferedRequestCount = 0);
          } else {
            for (; n; ) {
              var s = n.chunk,
                c = n.encoding,
                f = n.callback;
              if (
                (T(e, t, !1, t.objectMode ? 1 : s.length, s, c, f),
                (n = n.next),
                t.bufferedRequestCount--,
                t.writing)
              )
                break;
            }
            null === n && (t.lastBufferedRequest = null);
          }
          (t.bufferedRequest = n), (t.bufferProcessing = !1);
        }
        function C(e) {
          return (
            e.ending &&
            0 === e.length &&
            null === e.bufferedRequest &&
            !e.finished &&
            !e.writing
          );
        }
        function O(e, t) {
          e._final(function (n) {
            t.pendingcb--,
              n && e.emit("error", n),
              (t.prefinished = !0),
              e.emit("prefinish"),
              P(e, t);
          });
        }
        function P(e, t) {
          var n = C(t);
          return (
            n &&
              (!(function (e, t) {
                t.prefinished ||
                  t.finalCalled ||
                  ("function" !== typeof e._final || t.destroyed
                    ? ((t.prefinished = !0), e.emit("prefinish"))
                    : (t.pendingcb++,
                      (t.finalCalled = !0),
                      r.nextTick(O, e, t)));
              })(e, t),
              0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
            n
          );
        }
        n(2)(k, l),
          (E.prototype.getBuffer = function () {
            for (var e = this.bufferedRequest, t = []; e; )
              t.push(e), (e = e.next);
            return t;
          }),
          (function () {
            try {
              Object.defineProperty(E.prototype, "buffer", {
                get: a.deprecate(
                  function () {
                    return this.getBuffer();
                  },
                  "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                  "DEP0003"
                ),
              });
            } catch (e) {}
          })(),
          "function" === typeof Symbol &&
          Symbol.hasInstance &&
          "function" === typeof Function.prototype[Symbol.hasInstance]
            ? ((c = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(k, Symbol.hasInstance, {
                value: function (e) {
                  return (
                    !!c.call(this, e) ||
                    (this === k && e && e._writableState instanceof E)
                  );
                },
              }))
            : (c = function (e) {
                return e instanceof this;
              }),
          (k.prototype.pipe = function () {
            this.emit("error", new g());
          }),
          (k.prototype.write = function (e, t, n) {
            var i,
              o = this._writableState,
              a = !1,
              l = !o.objectMode && ((i = e), u.isBuffer(i) || i instanceof s);
            return (
              l &&
                !u.isBuffer(e) &&
                (e = (function (e) {
                  return u.from(e);
                })(e)),
              "function" === typeof t && ((n = t), (t = null)),
              l ? (t = "buffer") : t || (t = o.defaultEncoding),
              "function" !== typeof n && (n = S),
              o.ending
                ? (function (e, t) {
                    var n = new w();
                    e.emit("error", n), r.nextTick(t, n);
                  })(this, n)
                : (l ||
                    (function (e, t, n, i) {
                      var o;
                      return (
                        null === n
                          ? (o = new v())
                          : "string" === typeof n ||
                            t.objectMode ||
                            (o = new h("chunk", ["string", "Buffer"], n)),
                        !o || (e.emit("error", o), r.nextTick(i, o), !1)
                      );
                    })(this, o, e, n)) &&
                  (o.pendingcb++,
                  (a = (function (e, t, n, r, i, o) {
                    if (!n) {
                      var a = (function (e, t, n) {
                        e.objectMode ||
                          !1 === e.decodeStrings ||
                          "string" !== typeof t ||
                          (t = u.from(t, n));
                        return t;
                      })(t, r, i);
                      r !== a && ((n = !0), (i = "buffer"), (r = a));
                    }
                    var l = t.objectMode ? 1 : r.length;
                    t.length += l;
                    var s = t.length < t.highWaterMark;
                    s || (t.needDrain = !0);
                    if (t.writing || t.corked) {
                      var c = t.lastBufferedRequest;
                      (t.lastBufferedRequest = {
                        chunk: r,
                        encoding: i,
                        isBuf: n,
                        callback: o,
                        next: null,
                      }),
                        c
                          ? (c.next = t.lastBufferedRequest)
                          : (t.bufferedRequest = t.lastBufferedRequest),
                        (t.bufferedRequestCount += 1);
                    } else T(e, t, !1, l, r, i, o);
                    return s;
                  })(this, o, l, e, t, n))),
              a
            );
          }),
          (k.prototype.cork = function () {
            this._writableState.corked++;
          }),
          (k.prototype.uncork = function () {
            var e = this._writableState;
            e.corked &&
              (e.corked--,
              e.writing ||
                e.corked ||
                e.bufferProcessing ||
                !e.bufferedRequest ||
                R(this, e));
          }),
          (k.prototype.setDefaultEncoding = function (e) {
            if (
              ("string" === typeof e && (e = e.toLowerCase()),
              !(
                [
                  "hex",
                  "utf8",
                  "utf-8",
                  "ascii",
                  "binary",
                  "base64",
                  "ucs2",
                  "ucs-2",
                  "utf16le",
                  "utf-16le",
                  "raw",
                ].indexOf((e + "").toLowerCase()) > -1
              ))
            )
              throw new _(e);
            return (this._writableState.defaultEncoding = e), this;
          }),
          Object.defineProperty(k.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(k.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
          (k.prototype._write = function (e, t, n) {
            n(new m("_write()"));
          }),
          (k.prototype._writev = null),
          (k.prototype.end = function (e, t, n) {
            var i = this._writableState;
            return (
              "function" === typeof e
                ? ((n = e), (e = null), (t = null))
                : "function" === typeof t && ((n = t), (t = null)),
              null !== e && void 0 !== e && this.write(e, t),
              i.corked && ((i.corked = 1), this.uncork()),
              i.ending ||
                (function (e, t, n) {
                  (t.ending = !0),
                    P(e, t),
                    n && (t.finished ? r.nextTick(n) : e.once("finish", n));
                  (t.ended = !0), (e.writable = !1);
                })(this, i, n),
              this
            );
          }),
          Object.defineProperty(k.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(k.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function (e) {
              this._writableState && (this._writableState.destroyed = e);
            },
          }),
          (k.prototype.destroy = f.destroy),
          (k.prototype._undestroy = f.undestroy),
          (k.prototype._destroy = function (e, t) {
            t(e);
          });
      }.call(this, n(4), n(0)));
    },
    function (e, t, n) {
      "use strict";
      e.exports = c;
      var r = n(9).codes,
        i = r.ERR_METHOD_NOT_IMPLEMENTED,
        o = r.ERR_MULTIPLE_CALLBACK,
        a = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        l = r.ERR_TRANSFORM_WITH_LENGTH_0,
        u = n(10);
      function s(e, t) {
        var n = this._transformState;
        n.transforming = !1;
        var r = n.writecb;
        if (null === r) return this.emit("error", new o());
        (n.writechunk = null),
          (n.writecb = null),
          null != t && this.push(t),
          r(e);
        var i = this._readableState;
        (i.reading = !1),
          (i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark);
      }
      function c(e) {
        if (!(this instanceof c)) return new c(e);
        u.call(this, e),
          (this._transformState = {
            afterTransform: s.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          e &&
            ("function" === typeof e.transform &&
              (this._transform = e.transform),
            "function" === typeof e.flush && (this._flush = e.flush)),
          this.on("prefinish", f);
      }
      function f() {
        var e = this;
        "function" !== typeof this._flush || this._readableState.destroyed
          ? d(this, null, null)
          : this._flush(function (t, n) {
              d(e, t, n);
            });
      }
      function d(e, t, n) {
        if (t) return e.emit("error", t);
        if ((null != n && e.push(n), e._writableState.length)) throw new l();
        if (e._transformState.transforming) throw new a();
        return e.push(null);
      }
      n(2)(c, u),
        (c.prototype.push = function (e, t) {
          return (
            (this._transformState.needTransform = !1),
            u.prototype.push.call(this, e, t)
          );
        }),
        (c.prototype._transform = function (e, t, n) {
          n(new i("_transform()"));
        }),
        (c.prototype._write = function (e, t, n) {
          var r = this._transformState;
          if (
            ((r.writecb = n),
            (r.writechunk = e),
            (r.writeencoding = t),
            !r.transforming)
          ) {
            var i = this._readableState;
            (r.needTransform || i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
          }
        }),
        (c.prototype._read = function (e) {
          var t = this._transformState;
          null === t.writechunk || t.transforming
            ? (t.needTransform = !0)
            : ((t.transforming = !0),
              this._transform(t.writechunk, t.writeencoding, t.afterTransform));
        }),
        (c.prototype._destroy = function (e, t) {
          u.prototype._destroy.call(this, e, function (e) {
            t(e);
          });
        });
    },
    function (e, t, n) {
      "use strict";
      var r = Object.prototype.toString;
      e.exports = function (e) {
        var t = r.call(e),
          n = "[object Arguments]" === t;
        return (
          n ||
            (n =
              "[object Array]" !== t &&
              null !== e &&
              "object" === typeof e &&
              "number" === typeof e.length &&
              e.length >= 0 &&
              "[object Function]" === r.call(e.callee)),
          n
        );
      };
    },
    function (e, t, n) {
      "use strict";
      !(function e() {
        if (
          "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = n(44));
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function i(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      }
      n.d(t, "a", function () {
        return i;
      });
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return (r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    ,
    function (e, t, n) {
      "use strict";
      var r,
        i = n(49),
        o = n(50),
        a = n(65),
        l = n(81),
        u = n(83),
        s = n(84)(),
        c = n(91),
        f = n(6).Writable,
        d = n(92),
        p = n(93),
        h = new f({
          write: function (e, t, n) {
            n();
          },
          objectMode: !0,
          decodeStrings: !1,
        });
      (e.exports = function (e) {
        if (!e || (!e.token && !e.access_token))
          throw new Error(
            "WatsonSpeechToText: missing required parameter: opts.token (CF) or opts.access_token (RC)"
          );
        e.outputElement && !1 !== e.objectMode && (e.objectMode = !0),
          e.extractResults && (e.objectMode = !0),
          e.resultsBySpeaker && ((e.objectMode = !0), (e.speaker_labels = !0)),
          (e.format = !1 !== e.format),
          "undefined" === typeof e.smart_formatting &&
            (e.smart_formatting = e.format);
        var t,
          n = s(
            { "content-type": "audio/l16;rate=16000", interim_results: !0 },
            e
          ),
          f = new a(n),
          m = [f],
          y = f,
          g = e.keepMicrophone;
        g && r
          ? (r.unpipe(h), (t = r))
          : ((t = new o({ objectMode: !0, bufferSize: e.bufferSize })),
            (e.mediaStream
              ? Promise.resolve(e.mediaStream)
              : i({ video: !1, audio: !0 })
            )
              .then(function (e) {
                t.setStream(e), g && (r = t);
              })
              .catch(function (e) {
                y.emit("error", e), "NotSupportedError" === e.name && y.end();
              }));
        var b = new l({ writableObjectMode: !0 });
        function v() {
          t.unpipe(b), t.pipe(h), b.end();
        }
        return (
          t.pipe(b).pipe(f),
          m.push(t, b),
          g
            ? (f.on("end", v), f.on("stop", v))
            : (f.on("end", t.stop.bind(t)), f.on("stop", t.stop.bind(t))),
          e.resultsBySpeaker && ((y = y.pipe(new p(e))), m.push(y)),
          e.format && ((y = y.pipe(new u(e))), m.push(y)),
          e.outputElement && m.push(y.pipe(new c(e))),
          e.extractResults && ((y = y.pipe(new d())), m.push(y)),
          m.forEach(function (e) {
            e !== y && e.on("error", y.emit.bind(y, "error"));
          }),
          y !== f && (y.stop = f.stop.bind(f)),
          (y.recognizeStream = f),
          y
        );
      }),
        (e.exports.isSupported = i.isSupported);
    },
    function (e, t, n) {
      "use strict";
      function r(e) {
        return (r =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e) {
        return (i =
          "function" === typeof Symbol && "symbol" === r(Symbol.iterator)
            ? function (e) {
                return r(e);
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : r(e);
              })(e);
      }
      function o(e, t) {
        return !t || ("object" !== i(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      n.d(t, "a", function () {
        return o;
      });
    },
    function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (r =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function i(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t);
      }
      n.d(t, "a", function () {
        return i;
      });
    },
    ,
    function (e, t, n) {
      "use strict";
      var r = n(18),
        i = "function" === typeof Symbol && Symbol.for,
        o = i ? Symbol.for("react.element") : 60103,
        a = i ? Symbol.for("react.portal") : 60106,
        l = i ? Symbol.for("react.fragment") : 60107,
        u = i ? Symbol.for("react.strict_mode") : 60108,
        s = i ? Symbol.for("react.profiler") : 60114,
        c = i ? Symbol.for("react.provider") : 60109,
        f = i ? Symbol.for("react.context") : 60110,
        d = i ? Symbol.for("react.concurrent_mode") : 60111,
        p = i ? Symbol.for("react.forward_ref") : 60112,
        h = i ? Symbol.for("react.suspense") : 60113,
        m = i ? Symbol.for("react.memo") : 60115,
        y = i ? Symbol.for("react.lazy") : 60116,
        g = "function" === typeof Symbol && Symbol.iterator;
      function b(e) {
        for (
          var t = arguments.length - 1,
            n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            r = 0;
          r < t;
          r++
        )
          n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        !(function (e, t, n, r, i, o, a, l) {
          if (!e) {
            if (((e = void 0), void 0 === t))
              e = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
              );
            else {
              var u = [n, r, i, o, a, l],
                s = 0;
              (e = Error(
                t.replace(/%s/g, function () {
                  return u[s++];
                })
              )).name = "Invariant Violation";
            }
            throw ((e.framesToPop = 1), e);
          }
        })(
          !1,
          "Minified React error #" +
            e +
            "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
          n
        );
      }
      var v = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        w = {};
      function _(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = w),
          (this.updater = n || v);
      }
      function S() {}
      function E(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = w),
          (this.updater = n || v);
      }
      (_.prototype.isReactComponent = {}),
        (_.prototype.setState = function (e, t) {
          "object" !== typeof e &&
            "function" !== typeof e &&
            null != e &&
            b("85"),
            this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (_.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (S.prototype = _.prototype);
      var k = (E.prototype = new S());
      (k.constructor = E), r(k, _.prototype), (k.isPureReactComponent = !0);
      var T = { current: null },
        x = { current: null },
        R = Object.prototype.hasOwnProperty,
        C = { key: !0, ref: !0, __self: !0, __source: !0 };
      function O(e, t, n) {
        var r = void 0,
          i = {},
          a = null,
          l = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (a = "" + t.key),
          t))
            R.call(t, r) && !C.hasOwnProperty(r) && (i[r] = t[r]);
        var u = arguments.length - 2;
        if (1 === u) i.children = n;
        else if (1 < u) {
          for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in (u = e.defaultProps)) void 0 === i[r] && (i[r] = u[r]);
        return {
          $$typeof: o,
          type: e,
          key: a,
          ref: l,
          props: i,
          _owner: x.current,
        };
      }
      function P(e) {
        return "object" === typeof e && null !== e && e.$$typeof === o;
      }
      var M = /\/+/g,
        A = [];
      function j(e, t, n, r) {
        if (A.length) {
          var i = A.pop();
          return (
            (i.result = e),
            (i.keyPrefix = t),
            (i.func = n),
            (i.context = r),
            (i.count = 0),
            i
          );
        }
        return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
      }
      function N(e) {
        (e.result = null),
          (e.keyPrefix = null),
          (e.func = null),
          (e.context = null),
          (e.count = 0),
          10 > A.length && A.push(e);
      }
      function L(e, t, n) {
        return null == e
          ? 0
          : (function e(t, n, r, i) {
              var l = typeof t;
              ("undefined" !== l && "boolean" !== l) || (t = null);
              var u = !1;
              if (null === t) u = !0;
              else
                switch (l) {
                  case "string":
                  case "number":
                    u = !0;
                    break;
                  case "object":
                    switch (t.$$typeof) {
                      case o:
                      case a:
                        u = !0;
                    }
                }
              if (u) return r(i, t, "" === n ? "." + D(t, 0) : n), 1;
              if (((u = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
                for (var s = 0; s < t.length; s++) {
                  var c = n + D((l = t[s]), s);
                  u += e(l, c, r, i);
                }
              else if (
                ((c =
                  null === t || "object" !== typeof t
                    ? null
                    : "function" === typeof (c = (g && t[g]) || t["@@iterator"])
                    ? c
                    : null),
                "function" === typeof c)
              )
                for (t = c.call(t), s = 0; !(l = t.next()).done; )
                  u += e((l = l.value), (c = n + D(l, s++)), r, i);
              else
                "object" === l &&
                  b(
                    "31",
                    "[object Object]" === (r = "" + t)
                      ? "object with keys {" + Object.keys(t).join(", ") + "}"
                      : r,
                    ""
                  );
              return u;
            })(e, "", t, n);
      }
      function D(e, t) {
        return "object" === typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                ("" + e).replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })(e.key)
          : t.toString(36);
      }
      function I(e, t) {
        e.func.call(e.context, t, e.count++);
      }
      function U(e, t, n) {
        var r = e.result,
          i = e.keyPrefix;
        (e = e.func.call(e.context, t, e.count++)),
          Array.isArray(e)
            ? F(e, r, n, function (e) {
                return e;
              })
            : null != e &&
              (P(e) &&
                (e = (function (e, t) {
                  return {
                    $$typeof: o,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner,
                  };
                })(
                  e,
                  i +
                    (!e.key || (t && t.key === e.key)
                      ? ""
                      : ("" + e.key).replace(M, "$&/") + "/") +
                    n
                )),
              r.push(e));
      }
      function F(e, t, n, r, i) {
        var o = "";
        null != n && (o = ("" + n).replace(M, "$&/") + "/"),
          L(e, U, (t = j(t, o, r, i))),
          N(t);
      }
      function B() {
        var e = T.current;
        return null === e && b("321"), e;
      }
      var z = {
          Children: {
            map: function (e, t, n) {
              if (null == e) return e;
              var r = [];
              return F(e, r, null, t, n), r;
            },
            forEach: function (e, t, n) {
              if (null == e) return e;
              L(e, I, (t = j(null, null, t, n))), N(t);
            },
            count: function (e) {
              return L(
                e,
                function () {
                  return null;
                },
                null
              );
            },
            toArray: function (e) {
              var t = [];
              return (
                F(e, t, null, function (e) {
                  return e;
                }),
                t
              );
            },
            only: function (e) {
              return P(e) || b("143"), e;
            },
          },
          createRef: function () {
            return { current: null };
          },
          Component: _,
          PureComponent: E,
          createContext: function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: f,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: c, _context: e }),
              (e.Consumer = e)
            );
          },
          forwardRef: function (e) {
            return { $$typeof: p, render: e };
          },
          lazy: function (e) {
            return { $$typeof: y, _ctor: e, _status: -1, _result: null };
          },
          memo: function (e, t) {
            return { $$typeof: m, type: e, compare: void 0 === t ? null : t };
          },
          useCallback: function (e, t) {
            return B().useCallback(e, t);
          },
          useContext: function (e, t) {
            return B().useContext(e, t);
          },
          useEffect: function (e, t) {
            return B().useEffect(e, t);
          },
          useImperativeHandle: function (e, t, n) {
            return B().useImperativeHandle(e, t, n);
          },
          useDebugValue: function () {},
          useLayoutEffect: function (e, t) {
            return B().useLayoutEffect(e, t);
          },
          useMemo: function (e, t) {
            return B().useMemo(e, t);
          },
          useReducer: function (e, t, n) {
            return B().useReducer(e, t, n);
          },
          useRef: function (e) {
            return B().useRef(e);
          },
          useState: function (e) {
            return B().useState(e);
          },
          Fragment: l,
          StrictMode: u,
          Suspense: h,
          createElement: O,
          cloneElement: function (e, t, n) {
            (null === e || void 0 === e) && b("267", e);
            var i = void 0,
              a = r({}, e.props),
              l = e.key,
              u = e.ref,
              s = e._owner;
            if (null != t) {
              void 0 !== t.ref && ((u = t.ref), (s = x.current)),
                void 0 !== t.key && (l = "" + t.key);
              var c = void 0;
              for (i in (e.type &&
                e.type.defaultProps &&
                (c = e.type.defaultProps),
              t))
                R.call(t, i) &&
                  !C.hasOwnProperty(i) &&
                  (a[i] = void 0 === t[i] && void 0 !== c ? c[i] : t[i]);
            }
            if (1 === (i = arguments.length - 2)) a.children = n;
            else if (1 < i) {
              c = Array(i);
              for (var f = 0; f < i; f++) c[f] = arguments[f + 2];
              a.children = c;
            }
            return {
              $$typeof: o,
              type: e.type,
              key: l,
              ref: u,
              props: a,
              _owner: s,
            };
          },
          createFactory: function (e) {
            var t = O.bind(null, e);
            return (t.type = e), t;
          },
          isValidElement: P,
          version: "16.8.6",
          unstable_ConcurrentMode: d,
          unstable_Profiler: s,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            ReactCurrentDispatcher: T,
            ReactCurrentOwner: x,
            assign: r,
          },
        },
        W = { default: z },
        H = (W && z) || W;
      e.exports = H.default || H;
    },
    function (e, t, n) {
      "use strict";
      var r = n(3),
        i = n(18),
        o = n(45);
      function a(e) {
        for (
          var t = arguments.length - 1,
            n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            r = 0;
          r < t;
          r++
        )
          n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        !(function (e, t, n, r, i, o, a, l) {
          if (!e) {
            if (((e = void 0), void 0 === t))
              e = Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
              );
            else {
              var u = [n, r, i, o, a, l],
                s = 0;
              (e = Error(
                t.replace(/%s/g, function () {
                  return u[s++];
                })
              )).name = "Invariant Violation";
            }
            throw ((e.framesToPop = 1), e);
          }
        })(
          !1,
          "Minified React error #" +
            e +
            "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
          n
        );
      }
      r || a("227");
      var l = !1,
        u = null,
        s = !1,
        c = null,
        f = {
          onError: function (e) {
            (l = !0), (u = e);
          },
        };
      function d(e, t, n, r, i, o, a, s, c) {
        (l = !1),
          (u = null),
          function (e, t, n, r, i, o, a, l, u) {
            var s = Array.prototype.slice.call(arguments, 3);
            try {
              t.apply(n, s);
            } catch (c) {
              this.onError(c);
            }
          }.apply(f, arguments);
      }
      var p = null,
        h = {};
      function m() {
        if (p)
          for (var e in h) {
            var t = h[e],
              n = p.indexOf(e);
            if ((-1 < n || a("96", e), !g[n]))
              for (var r in (t.extractEvents || a("97", e),
              (g[n] = t),
              (n = t.eventTypes))) {
                var i = void 0,
                  o = n[r],
                  l = t,
                  u = r;
                b.hasOwnProperty(u) && a("99", u), (b[u] = o);
                var s = o.phasedRegistrationNames;
                if (s) {
                  for (i in s) s.hasOwnProperty(i) && y(s[i], l, u);
                  i = !0;
                } else
                  o.registrationName
                    ? (y(o.registrationName, l, u), (i = !0))
                    : (i = !1);
                i || a("98", r, e);
              }
          }
      }
      function y(e, t, n) {
        v[e] && a("100", e), (v[e] = t), (w[e] = t.eventTypes[n].dependencies);
      }
      var g = [],
        b = {},
        v = {},
        w = {},
        _ = null,
        S = null,
        E = null;
      function k(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = E(n)),
          (function (e, t, n, r, i, o, f, p, h) {
            if ((d.apply(this, arguments), l)) {
              if (l) {
                var m = u;
                (l = !1), (u = null);
              } else a("198"), (m = void 0);
              s || ((s = !0), (c = m));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function T(e, t) {
        return (
          null == t && a("30"),
          null == e
            ? t
            : Array.isArray(e)
            ? Array.isArray(t)
              ? (e.push.apply(e, t), e)
              : (e.push(t), e)
            : Array.isArray(t)
            ? [e].concat(t)
            : [e, t]
        );
      }
      function x(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
      }
      var R = null;
      function C(e) {
        if (e) {
          var t = e._dispatchListeners,
            n = e._dispatchInstances;
          if (Array.isArray(t))
            for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
              k(e, t[r], n[r]);
          else t && k(e, t, n);
          (e._dispatchListeners = null),
            (e._dispatchInstances = null),
            e.isPersistent() || e.constructor.release(e);
        }
      }
      var O = {
        injectEventPluginOrder: function (e) {
          p && a("101"), (p = Array.prototype.slice.call(e)), m();
        },
        injectEventPluginsByName: function (e) {
          var t,
            n = !1;
          for (t in e)
            if (e.hasOwnProperty(t)) {
              var r = e[t];
              (h.hasOwnProperty(t) && h[t] === r) ||
                (h[t] && a("102", t), (h[t] = r), (n = !0));
            }
          n && m();
        },
      };
      function P(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var r = _(n);
        if (!r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
            (r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        return e
          ? null
          : (n && "function" !== typeof n && a("231", t, typeof n), n);
      }
      function M(e) {
        if (
          (null !== e && (R = T(R, e)),
          (e = R),
          (R = null),
          e && (x(e, C), R && a("95"), s))
        )
          throw ((e = c), (s = !1), (c = null), e);
      }
      var A = Math.random().toString(36).slice(2),
        j = "__reactInternalInstance$" + A,
        N = "__reactEventHandlers$" + A;
      function L(e) {
        if (e[j]) return e[j];
        for (; !e[j]; ) {
          if (!e.parentNode) return null;
          e = e.parentNode;
        }
        return 5 === (e = e[j]).tag || 6 === e.tag ? e : null;
      }
      function D(e) {
        return !(e = e[j]) || (5 !== e.tag && 6 !== e.tag) ? null : e;
      }
      function I(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        a("33");
      }
      function U(e) {
        return e[N] || null;
      }
      function F(e) {
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function B(e, t, n) {
        (t = P(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
          ((n._dispatchListeners = T(n._dispatchListeners, t)),
          (n._dispatchInstances = T(n._dispatchInstances, e)));
      }
      function z(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
          for (var t = e._targetInst, n = []; t; ) n.push(t), (t = F(t));
          for (t = n.length; 0 < t--; ) B(n[t], "captured", e);
          for (t = 0; t < n.length; t++) B(n[t], "bubbled", e);
        }
      }
      function W(e, t, n) {
        e &&
          n &&
          n.dispatchConfig.registrationName &&
          (t = P(e, n.dispatchConfig.registrationName)) &&
          ((n._dispatchListeners = T(n._dispatchListeners, t)),
          (n._dispatchInstances = T(n._dispatchInstances, e)));
      }
      function H(e) {
        e && e.dispatchConfig.registrationName && W(e._targetInst, null, e);
      }
      function q(e) {
        x(e, z);
      }
      var V = !(
        "undefined" === typeof window ||
        !window.document ||
        !window.document.createElement
      );
      function Y(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var $ = {
          animationend: Y("Animation", "AnimationEnd"),
          animationiteration: Y("Animation", "AnimationIteration"),
          animationstart: Y("Animation", "AnimationStart"),
          transitionend: Y("Transition", "TransitionEnd"),
        },
        K = {},
        Q = {};
      function G(e) {
        if (K[e]) return K[e];
        if (!$[e]) return e;
        var t,
          n = $[e];
        for (t in n) if (n.hasOwnProperty(t) && t in Q) return (K[e] = n[t]);
        return e;
      }
      V &&
        ((Q = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete $.animationend.animation,
          delete $.animationiteration.animation,
          delete $.animationstart.animation),
        "TransitionEvent" in window || delete $.transitionend.transition);
      var X = G("animationend"),
        J = G("animationiteration"),
        Z = G("animationstart"),
        ee = G("transitionend"),
        te =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
          ),
        ne = null,
        re = null,
        ie = null;
      function oe() {
        if (ie) return ie;
        var e,
          t,
          n = re,
          r = n.length,
          i = "value" in ne ? ne.value : ne.textContent,
          o = i.length;
        for (e = 0; e < r && n[e] === i[e]; e++);
        var a = r - e;
        for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
        return (ie = i.slice(e, 1 < t ? 1 - t : void 0));
      }
      function ae() {
        return !0;
      }
      function le() {
        return !1;
      }
      function ue(e, t, n, r) {
        for (var i in ((this.dispatchConfig = e),
        (this._targetInst = t),
        (this.nativeEvent = n),
        (e = this.constructor.Interface)))
          e.hasOwnProperty(i) &&
            ((t = e[i])
              ? (this[i] = t(n))
              : "target" === i
              ? (this.target = r)
              : (this[i] = n[i]));
        return (
          (this.isDefaultPrevented = (
            null != n.defaultPrevented
              ? n.defaultPrevented
              : !1 === n.returnValue
          )
            ? ae
            : le),
          (this.isPropagationStopped = le),
          this
        );
      }
      function se(e, t, n, r) {
        if (this.eventPool.length) {
          var i = this.eventPool.pop();
          return this.call(i, e, t, n, r), i;
        }
        return new this(e, t, n, r);
      }
      function ce(e) {
        e instanceof this || a("279"),
          e.destructor(),
          10 > this.eventPool.length && this.eventPool.push(e);
      }
      function fe(e) {
        (e.eventPool = []), (e.getPooled = se), (e.release = ce);
      }
      i(ue.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = ae));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = ae));
        },
        persist: function () {
          this.isPersistent = ae;
        },
        isPersistent: le,
        destructor: function () {
          var e,
            t = this.constructor.Interface;
          for (e in t) this[e] = null;
          (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
            (this.isPropagationStopped = this.isDefaultPrevented = le),
            (this._dispatchInstances = this._dispatchListeners = null);
        },
      }),
        (ue.Interface = {
          type: null,
          target: null,
          currentTarget: function () {
            return null;
          },
          eventPhase: null,
          bubbles: null,
          cancelable: null,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: null,
          isTrusted: null,
        }),
        (ue.extend = function (e) {
          function t() {}
          function n() {
            return r.apply(this, arguments);
          }
          var r = this;
          t.prototype = r.prototype;
          var o = new t();
          return (
            i(o, n.prototype),
            (n.prototype = o),
            (n.prototype.constructor = n),
            (n.Interface = i({}, r.Interface, e)),
            (n.extend = r.extend),
            fe(n),
            n
          );
        }),
        fe(ue);
      var de = ue.extend({ data: null }),
        pe = ue.extend({ data: null }),
        he = [9, 13, 27, 32],
        me = V && "CompositionEvent" in window,
        ye = null;
      V && "documentMode" in document && (ye = document.documentMode);
      var ge = V && "TextEvent" in window && !ye,
        be = V && (!me || (ye && 8 < ye && 11 >= ye)),
        ve = String.fromCharCode(32),
        we = {
          beforeInput: {
            phasedRegistrationNames: {
              bubbled: "onBeforeInput",
              captured: "onBeforeInputCapture",
            },
            dependencies: ["compositionend", "keypress", "textInput", "paste"],
          },
          compositionEnd: {
            phasedRegistrationNames: {
              bubbled: "onCompositionEnd",
              captured: "onCompositionEndCapture",
            },
            dependencies:
              "blur compositionend keydown keypress keyup mousedown".split(" "),
          },
          compositionStart: {
            phasedRegistrationNames: {
              bubbled: "onCompositionStart",
              captured: "onCompositionStartCapture",
            },
            dependencies:
              "blur compositionstart keydown keypress keyup mousedown".split(
                " "
              ),
          },
          compositionUpdate: {
            phasedRegistrationNames: {
              bubbled: "onCompositionUpdate",
              captured: "onCompositionUpdateCapture",
            },
            dependencies:
              "blur compositionupdate keydown keypress keyup mousedown".split(
                " "
              ),
          },
        },
        _e = !1;
      function Se(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== he.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "blur":
            return !0;
          default:
            return !1;
        }
      }
      function Ee(e) {
        return "object" === typeof (e = e.detail) && "data" in e
          ? e.data
          : null;
      }
      var ke = !1;
      var Te = {
          eventTypes: we,
          extractEvents: function (e, t, n, r) {
            var i = void 0,
              o = void 0;
            if (me)
              e: {
                switch (e) {
                  case "compositionstart":
                    i = we.compositionStart;
                    break e;
                  case "compositionend":
                    i = we.compositionEnd;
                    break e;
                  case "compositionupdate":
                    i = we.compositionUpdate;
                    break e;
                }
                i = void 0;
              }
            else
              ke
                ? Se(e, n) && (i = we.compositionEnd)
                : "keydown" === e &&
                  229 === n.keyCode &&
                  (i = we.compositionStart);
            return (
              i
                ? (be &&
                    "ko" !== n.locale &&
                    (ke || i !== we.compositionStart
                      ? i === we.compositionEnd && ke && (o = oe())
                      : ((re = "value" in (ne = r) ? ne.value : ne.textContent),
                        (ke = !0))),
                  (i = de.getPooled(i, t, n, r)),
                  o ? (i.data = o) : null !== (o = Ee(n)) && (i.data = o),
                  q(i),
                  (o = i))
                : (o = null),
              (e = ge
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return Ee(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((_e = !0), ve);
                      case "textInput":
                        return (e = t.data) === ve && _e ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (ke)
                      return "compositionend" === e || (!me && Se(e, t))
                        ? ((e = oe()), (ie = re = ne = null), (ke = !1), e)
                        : null;
                    switch (e) {
                      case "paste":
                        return null;
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case "compositionend":
                        return be && "ko" !== t.locale ? null : t.data;
                      default:
                        return null;
                    }
                  })(e, n))
                ? (((t = pe.getPooled(we.beforeInput, t, n, r)).data = e), q(t))
                : (t = null),
              null === o ? t : null === t ? o : [o, t]
            );
          },
        },
        xe = null,
        Re = null,
        Ce = null;
      function Oe(e) {
        if ((e = S(e))) {
          "function" !== typeof xe && a("280");
          var t = _(e.stateNode);
          xe(e.stateNode, e.type, t);
        }
      }
      function Pe(e) {
        Re ? (Ce ? Ce.push(e) : (Ce = [e])) : (Re = e);
      }
      function Me() {
        if (Re) {
          var e = Re,
            t = Ce;
          if (((Ce = Re = null), Oe(e), t))
            for (e = 0; e < t.length; e++) Oe(t[e]);
        }
      }
      function Ae(e, t) {
        return e(t);
      }
      function je(e, t, n) {
        return e(t, n);
      }
      function Ne() {}
      var Le = !1;
      function De(e, t) {
        if (Le) return e(t);
        Le = !0;
        try {
          return Ae(e, t);
        } finally {
          (Le = !1), (null !== Re || null !== Ce) && (Ne(), Me());
        }
      }
      var Ie = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function Ue(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Ie[e.type] : "textarea" === t;
      }
      function Fe(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      function Be(e) {
        if (!V) return !1;
        var t = (e = "on" + e) in document;
        return (
          t ||
            ((t = document.createElement("div")).setAttribute(e, "return;"),
            (t = "function" === typeof t[e])),
          t
        );
      }
      function ze(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function We(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = ze(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (
              !e.hasOwnProperty(t) &&
              "undefined" !== typeof n &&
              "function" === typeof n.get &&
              "function" === typeof n.set
            ) {
              var i = n.get,
                o = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return i.call(this);
                  },
                  set: function (e) {
                    (r = "" + e), o.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = "" + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function He(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return (
          e && (r = ze(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      var qe = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      qe.hasOwnProperty("ReactCurrentDispatcher") ||
        (qe.ReactCurrentDispatcher = { current: null });
      var Ve = /^(.*)[\\\/]/,
        Ye = "function" === typeof Symbol && Symbol.for,
        $e = Ye ? Symbol.for("react.element") : 60103,
        Ke = Ye ? Symbol.for("react.portal") : 60106,
        Qe = Ye ? Symbol.for("react.fragment") : 60107,
        Ge = Ye ? Symbol.for("react.strict_mode") : 60108,
        Xe = Ye ? Symbol.for("react.profiler") : 60114,
        Je = Ye ? Symbol.for("react.provider") : 60109,
        Ze = Ye ? Symbol.for("react.context") : 60110,
        et = Ye ? Symbol.for("react.concurrent_mode") : 60111,
        tt = Ye ? Symbol.for("react.forward_ref") : 60112,
        nt = Ye ? Symbol.for("react.suspense") : 60113,
        rt = Ye ? Symbol.for("react.memo") : 60115,
        it = Ye ? Symbol.for("react.lazy") : 60116,
        ot = "function" === typeof Symbol && Symbol.iterator;
      function at(e) {
        return null === e || "object" !== typeof e
          ? null
          : "function" === typeof (e = (ot && e[ot]) || e["@@iterator"])
          ? e
          : null;
      }
      function lt(e) {
        if (null == e) return null;
        if ("function" === typeof e) return e.displayName || e.name || null;
        if ("string" === typeof e) return e;
        switch (e) {
          case et:
            return "ConcurrentMode";
          case Qe:
            return "Fragment";
          case Ke:
            return "Portal";
          case Xe:
            return "Profiler";
          case Ge:
            return "StrictMode";
          case nt:
            return "Suspense";
        }
        if ("object" === typeof e)
          switch (e.$$typeof) {
            case Ze:
              return "Context.Consumer";
            case Je:
              return "Context.Provider";
            case tt:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ""),
                e.displayName ||
                  ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case rt:
              return lt(e.type);
            case it:
              if ((e = 1 === e._status ? e._result : null)) return lt(e);
          }
        return null;
      }
      function ut(e) {
        var t = "";
        do {
          e: switch (e.tag) {
            case 3:
            case 4:
            case 6:
            case 7:
            case 10:
            case 9:
              var n = "";
              break e;
            default:
              var r = e._debugOwner,
                i = e._debugSource,
                o = lt(e.type);
              (n = null),
                r && (n = lt(r.type)),
                (r = o),
                (o = ""),
                i
                  ? (o =
                      " (at " +
                      i.fileName.replace(Ve, "") +
                      ":" +
                      i.lineNumber +
                      ")")
                  : n && (o = " (created by " + n + ")"),
                (n = "\n    in " + (r || "Unknown") + o);
          }
          (t += n), (e = e.return);
        } while (e);
        return t;
      }
      var st =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        ct = Object.prototype.hasOwnProperty,
        ft = {},
        dt = {};
      function pt(e, t, n, r, i) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = i),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t);
      }
      var ht = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          ht[e] = new pt(e, 0, !1, e, null);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          ht[t] = new pt(t, 1, !1, e[1], null);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            ht[e] = new pt(e, 2, !1, e.toLowerCase(), null);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          ht[e] = new pt(e, 2, !1, e, null);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            ht[e] = new pt(e, 3, !1, e.toLowerCase(), null);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          ht[e] = new pt(e, 3, !0, e, null);
        }),
        ["capture", "download"].forEach(function (e) {
          ht[e] = new pt(e, 4, !1, e, null);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          ht[e] = new pt(e, 6, !1, e, null);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          ht[e] = new pt(e, 5, !1, e.toLowerCase(), null);
        });
      var mt = /[\-:]([a-z])/g;
      function yt(e) {
        return e[1].toUpperCase();
      }
      function gt(e, t, n, r) {
        var i = ht.hasOwnProperty(t) ? ht[t] : null;
        (null !== i
          ? 0 === i.type
          : !r &&
            2 < t.length &&
            ("o" === t[0] || "O" === t[0]) &&
            ("n" === t[1] || "N" === t[1])) ||
          ((function (e, t, n, r) {
            if (
              null === t ||
              "undefined" === typeof t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, i, r) && (n = null),
          r || null === i
            ? (function (e) {
                return (
                  !!ct.call(dt, e) ||
                  (!ct.call(ft, e) &&
                    (st.test(e) ? (dt[e] = !0) : ((ft[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (i = i.type) || (4 === i && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      function bt(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return e;
          default:
            return "";
        }
      }
      function vt(e, t) {
        var n = t.checked;
        return i({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function wt(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = bt(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              "checkbox" === t.type || "radio" === t.type
                ? null != t.checked
                : null != t.value,
          });
      }
      function _t(e, t) {
        null != (t = t.checked) && gt(e, "checked", t, !1);
      }
      function St(e, t) {
        _t(e, t);
        var n = bt(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return void e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? kt(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            kt(e, t.type, bt(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked);
      }
      function Et(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (
            !(
              ("submit" !== r && "reset" !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        "" !== (n = e.name) && (e.name = ""),
          (e.defaultChecked = !e.defaultChecked),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n);
      }
      function kt(e, t, n) {
        ("number" === t && e.ownerDocument.activeElement === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(mt, yt);
          ht[t] = new pt(t, 1, !1, e, null);
        }),
        "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(mt, yt);
            ht[t] = new pt(t, 1, !1, e, "http://www.w3.org/1999/xlink");
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(mt, yt);
          ht[t] = new pt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace");
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          ht[e] = new pt(e, 1, !1, e.toLowerCase(), null);
        });
      var Tt = {
        change: {
          phasedRegistrationNames: {
            bubbled: "onChange",
            captured: "onChangeCapture",
          },
          dependencies:
            "blur change click focus input keydown keyup selectionchange".split(
              " "
            ),
        },
      };
      function xt(e, t, n) {
        return (
          ((e = ue.getPooled(Tt.change, e, t, n)).type = "change"),
          Pe(n),
          q(e),
          e
        );
      }
      var Rt = null,
        Ct = null;
      function Ot(e) {
        M(e);
      }
      function Pt(e) {
        if (He(I(e))) return e;
      }
      function Mt(e, t) {
        if ("change" === e) return t;
      }
      var At = !1;
      function jt() {
        Rt && (Rt.detachEvent("onpropertychange", Nt), (Ct = Rt = null));
      }
      function Nt(e) {
        "value" === e.propertyName && Pt(Ct) && De(Ot, (e = xt(Ct, e, Fe(e))));
      }
      function Lt(e, t, n) {
        "focus" === e
          ? (jt(), (Ct = n), (Rt = t).attachEvent("onpropertychange", Nt))
          : "blur" === e && jt();
      }
      function Dt(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Pt(Ct);
      }
      function It(e, t) {
        if ("click" === e) return Pt(t);
      }
      function Ut(e, t) {
        if ("input" === e || "change" === e) return Pt(t);
      }
      V &&
        (At =
          Be("input") && (!document.documentMode || 9 < document.documentMode));
      var Ft = {
          eventTypes: Tt,
          _isInputEventSupported: At,
          extractEvents: function (e, t, n, r) {
            var i = t ? I(t) : window,
              o = void 0,
              a = void 0,
              l = i.nodeName && i.nodeName.toLowerCase();
            if (
              ("select" === l || ("input" === l && "file" === i.type)
                ? (o = Mt)
                : Ue(i)
                ? At
                  ? (o = Ut)
                  : ((o = Dt), (a = Lt))
                : (l = i.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (o = It),
              o && (o = o(e, t)))
            )
              return xt(o, n, r);
            a && a(e, i, t),
              "blur" === e &&
                (e = i._wrapperState) &&
                e.controlled &&
                "number" === i.type &&
                kt(i, "number", i.value);
          },
        },
        Bt = ue.extend({ view: null, detail: null }),
        zt = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function Wt(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = zt[e]) && !!t[e];
      }
      function Ht() {
        return Wt;
      }
      var qt = 0,
        Vt = 0,
        Yt = !1,
        $t = !1,
        Kt = Bt.extend({
          screenX: null,
          screenY: null,
          clientX: null,
          clientY: null,
          pageX: null,
          pageY: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          getModifierState: Ht,
          button: null,
          buttons: null,
          relatedTarget: function (e) {
            return (
              e.relatedTarget ||
              (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            );
          },
          movementX: function (e) {
            if ("movementX" in e) return e.movementX;
            var t = qt;
            return (
              (qt = e.screenX),
              Yt ? ("mousemove" === e.type ? e.screenX - t : 0) : ((Yt = !0), 0)
            );
          },
          movementY: function (e) {
            if ("movementY" in e) return e.movementY;
            var t = Vt;
            return (
              (Vt = e.screenY),
              $t ? ("mousemove" === e.type ? e.screenY - t : 0) : (($t = !0), 0)
            );
          },
        }),
        Qt = Kt.extend({
          pointerId: null,
          width: null,
          height: null,
          pressure: null,
          tangentialPressure: null,
          tiltX: null,
          tiltY: null,
          twist: null,
          pointerType: null,
          isPrimary: null,
        }),
        Gt = {
          mouseEnter: {
            registrationName: "onMouseEnter",
            dependencies: ["mouseout", "mouseover"],
          },
          mouseLeave: {
            registrationName: "onMouseLeave",
            dependencies: ["mouseout", "mouseover"],
          },
          pointerEnter: {
            registrationName: "onPointerEnter",
            dependencies: ["pointerout", "pointerover"],
          },
          pointerLeave: {
            registrationName: "onPointerLeave",
            dependencies: ["pointerout", "pointerover"],
          },
        },
        Xt = {
          eventTypes: Gt,
          extractEvents: function (e, t, n, r) {
            var i = "mouseover" === e || "pointerover" === e,
              o = "mouseout" === e || "pointerout" === e;
            if ((i && (n.relatedTarget || n.fromElement)) || (!o && !i))
              return null;
            if (
              ((i =
                r.window === r
                  ? r
                  : (i = r.ownerDocument)
                  ? i.defaultView || i.parentWindow
                  : window),
              o
                ? ((o = t),
                  (t = (t = n.relatedTarget || n.toElement) ? L(t) : null))
                : (o = null),
              o === t)
            )
              return null;
            var a = void 0,
              l = void 0,
              u = void 0,
              s = void 0;
            "mouseout" === e || "mouseover" === e
              ? ((a = Kt),
                (l = Gt.mouseLeave),
                (u = Gt.mouseEnter),
                (s = "mouse"))
              : ("pointerout" !== e && "pointerover" !== e) ||
                ((a = Qt),
                (l = Gt.pointerLeave),
                (u = Gt.pointerEnter),
                (s = "pointer"));
            var c = null == o ? i : I(o);
            if (
              ((i = null == t ? i : I(t)),
              ((e = a.getPooled(l, o, n, r)).type = s + "leave"),
              (e.target = c),
              (e.relatedTarget = i),
              ((n = a.getPooled(u, t, n, r)).type = s + "enter"),
              (n.target = i),
              (n.relatedTarget = c),
              (r = t),
              o && r)
            )
              e: {
                for (i = r, s = 0, a = t = o; a; a = F(a)) s++;
                for (a = 0, u = i; u; u = F(u)) a++;
                for (; 0 < s - a; ) (t = F(t)), s--;
                for (; 0 < a - s; ) (i = F(i)), a--;
                for (; s--; ) {
                  if (t === i || t === i.alternate) break e;
                  (t = F(t)), (i = F(i));
                }
                t = null;
              }
            else t = null;
            for (
              i = t, t = [];
              o && o !== i && (null === (s = o.alternate) || s !== i);

            )
              t.push(o), (o = F(o));
            for (
              o = [];
              r && r !== i && (null === (s = r.alternate) || s !== i);

            )
              o.push(r), (r = F(r));
            for (r = 0; r < t.length; r++) W(t[r], "bubbled", e);
            for (r = o.length; 0 < r--; ) W(o[r], "captured", n);
            return [e, n];
          },
        };
      function Jt(e, t) {
        return (
          (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t)
        );
      }
      var Zt = Object.prototype.hasOwnProperty;
      function en(e, t) {
        if (Jt(e, t)) return !0;
        if (
          "object" !== typeof e ||
          null === e ||
          "object" !== typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
          if (!Zt.call(t, n[r]) || !Jt(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      function tn(e) {
        var t = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          if (0 !== (2 & t.effectTag)) return 1;
          for (; t.return; ) if (0 !== (2 & (t = t.return).effectTag)) return 1;
        }
        return 3 === t.tag ? 2 : 3;
      }
      function nn(e) {
        2 !== tn(e) && a("188");
      }
      function rn(e) {
        if (
          !(e = (function (e) {
            var t = e.alternate;
            if (!t) return 3 === (t = tn(e)) && a("188"), 1 === t ? null : e;
            for (var n = e, r = t; ; ) {
              var i = n.return,
                o = i ? i.alternate : null;
              if (!i || !o) break;
              if (i.child === o.child) {
                for (var l = i.child; l; ) {
                  if (l === n) return nn(i), e;
                  if (l === r) return nn(i), t;
                  l = l.sibling;
                }
                a("188");
              }
              if (n.return !== r.return) (n = i), (r = o);
              else {
                l = !1;
                for (var u = i.child; u; ) {
                  if (u === n) {
                    (l = !0), (n = i), (r = o);
                    break;
                  }
                  if (u === r) {
                    (l = !0), (r = i), (n = o);
                    break;
                  }
                  u = u.sibling;
                }
                if (!l) {
                  for (u = o.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  l || a("189");
                }
              }
              n.alternate !== r && a("190");
            }
            return 3 !== n.tag && a("188"), n.stateNode.current === n ? e : t;
          })(e))
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      var on = ue.extend({
          animationName: null,
          elapsedTime: null,
          pseudoElement: null,
        }),
        an = ue.extend({
          clipboardData: function (e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
        ln = Bt.extend({ relatedTarget: null });
      function un(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      var sn = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        cn = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        },
        fn = Bt.extend({
          key: function (e) {
            if (e.key) {
              var t = sn[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = un(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? cn[e.keyCode] || "Unidentified"
              : "";
          },
          location: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          repeat: null,
          locale: null,
          getModifierState: Ht,
          charCode: function (e) {
            return "keypress" === e.type ? un(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type
              ? un(e)
              : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
          },
        }),
        dn = Kt.extend({ dataTransfer: null }),
        pn = Bt.extend({
          touches: null,
          targetTouches: null,
          changedTouches: null,
          altKey: null,
          metaKey: null,
          ctrlKey: null,
          shiftKey: null,
          getModifierState: Ht,
        }),
        hn = ue.extend({
          propertyName: null,
          elapsedTime: null,
          pseudoElement: null,
        }),
        mn = Kt.extend({
          deltaX: function (e) {
            return "deltaX" in e
              ? e.deltaX
              : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: null,
          deltaMode: null,
        }),
        yn = [
          ["abort", "abort"],
          [X, "animationEnd"],
          [J, "animationIteration"],
          [Z, "animationStart"],
          ["canplay", "canPlay"],
          ["canplaythrough", "canPlayThrough"],
          ["drag", "drag"],
          ["dragenter", "dragEnter"],
          ["dragexit", "dragExit"],
          ["dragleave", "dragLeave"],
          ["dragover", "dragOver"],
          ["durationchange", "durationChange"],
          ["emptied", "emptied"],
          ["encrypted", "encrypted"],
          ["ended", "ended"],
          ["error", "error"],
          ["gotpointercapture", "gotPointerCapture"],
          ["load", "load"],
          ["loadeddata", "loadedData"],
          ["loadedmetadata", "loadedMetadata"],
          ["loadstart", "loadStart"],
          ["lostpointercapture", "lostPointerCapture"],
          ["mousemove", "mouseMove"],
          ["mouseout", "mouseOut"],
          ["mouseover", "mouseOver"],
          ["playing", "playing"],
          ["pointermove", "pointerMove"],
          ["pointerout", "pointerOut"],
          ["pointerover", "pointerOver"],
          ["progress", "progress"],
          ["scroll", "scroll"],
          ["seeking", "seeking"],
          ["stalled", "stalled"],
          ["suspend", "suspend"],
          ["timeupdate", "timeUpdate"],
          ["toggle", "toggle"],
          ["touchmove", "touchMove"],
          [ee, "transitionEnd"],
          ["waiting", "waiting"],
          ["wheel", "wheel"],
        ],
        gn = {},
        bn = {};
      function vn(e, t) {
        var n = e[0],
          r = "on" + ((e = e[1])[0].toUpperCase() + e.slice(1));
        (t = {
          phasedRegistrationNames: { bubbled: r, captured: r + "Capture" },
          dependencies: [n],
          isInteractive: t,
        }),
          (gn[e] = t),
          (bn[n] = t);
      }
      [
        ["blur", "blur"],
        ["cancel", "cancel"],
        ["click", "click"],
        ["close", "close"],
        ["contextmenu", "contextMenu"],
        ["copy", "copy"],
        ["cut", "cut"],
        ["auxclick", "auxClick"],
        ["dblclick", "doubleClick"],
        ["dragend", "dragEnd"],
        ["dragstart", "dragStart"],
        ["drop", "drop"],
        ["focus", "focus"],
        ["input", "input"],
        ["invalid", "invalid"],
        ["keydown", "keyDown"],
        ["keypress", "keyPress"],
        ["keyup", "keyUp"],
        ["mousedown", "mouseDown"],
        ["mouseup", "mouseUp"],
        ["paste", "paste"],
        ["pause", "pause"],
        ["play", "play"],
        ["pointercancel", "pointerCancel"],
        ["pointerdown", "pointerDown"],
        ["pointerup", "pointerUp"],
        ["ratechange", "rateChange"],
        ["reset", "reset"],
        ["seeked", "seeked"],
        ["submit", "submit"],
        ["touchcancel", "touchCancel"],
        ["touchend", "touchEnd"],
        ["touchstart", "touchStart"],
        ["volumechange", "volumeChange"],
      ].forEach(function (e) {
        vn(e, !0);
      }),
        yn.forEach(function (e) {
          vn(e, !1);
        });
      var wn = {
          eventTypes: gn,
          isInteractiveTopLevelEventType: function (e) {
            return void 0 !== (e = bn[e]) && !0 === e.isInteractive;
          },
          extractEvents: function (e, t, n, r) {
            var i = bn[e];
            if (!i) return null;
            switch (e) {
              case "keypress":
                if (0 === un(n)) return null;
              case "keydown":
              case "keyup":
                e = fn;
                break;
              case "blur":
              case "focus":
                e = ln;
                break;
              case "click":
                if (2 === n.button) return null;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                e = Kt;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                e = dn;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                e = pn;
                break;
              case X:
              case J:
              case Z:
                e = on;
                break;
              case ee:
                e = hn;
                break;
              case "scroll":
                e = Bt;
                break;
              case "wheel":
                e = mn;
                break;
              case "copy":
              case "cut":
              case "paste":
                e = an;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                e = Qt;
                break;
              default:
                e = ue;
            }
            return q((t = e.getPooled(i, t, n, r))), t;
          },
        },
        _n = wn.isInteractiveTopLevelEventType,
        Sn = [];
      function En(e) {
        var t = e.targetInst,
          n = t;
        do {
          if (!n) {
            e.ancestors.push(n);
            break;
          }
          var r;
          for (r = n; r.return; ) r = r.return;
          if (!(r = 3 !== r.tag ? null : r.stateNode.containerInfo)) break;
          e.ancestors.push(n), (n = L(r));
        } while (n);
        for (n = 0; n < e.ancestors.length; n++) {
          t = e.ancestors[n];
          var i = Fe(e.nativeEvent);
          r = e.topLevelType;
          for (var o = e.nativeEvent, a = null, l = 0; l < g.length; l++) {
            var u = g[l];
            u && (u = u.extractEvents(r, t, o, i)) && (a = T(a, u));
          }
          M(a);
        }
      }
      var kn = !0;
      function Tn(e, t) {
        if (!t) return null;
        var n = (_n(e) ? Rn : Cn).bind(null, e);
        t.addEventListener(e, n, !1);
      }
      function xn(e, t) {
        if (!t) return null;
        var n = (_n(e) ? Rn : Cn).bind(null, e);
        t.addEventListener(e, n, !0);
      }
      function Rn(e, t) {
        je(Cn, e, t);
      }
      function Cn(e, t) {
        if (kn) {
          var n = Fe(t);
          if (
            (null === (n = L(n)) ||
              "number" !== typeof n.tag ||
              2 === tn(n) ||
              (n = null),
            Sn.length)
          ) {
            var r = Sn.pop();
            (r.topLevelType = e),
              (r.nativeEvent = t),
              (r.targetInst = n),
              (e = r);
          } else
            e = {
              topLevelType: e,
              nativeEvent: t,
              targetInst: n,
              ancestors: [],
            };
          try {
            De(En, e);
          } finally {
            (e.topLevelType = null),
              (e.nativeEvent = null),
              (e.targetInst = null),
              (e.ancestors.length = 0),
              10 > Sn.length && Sn.push(e);
          }
        }
      }
      var On = {},
        Pn = 0,
        Mn = "_reactListenersID" + ("" + Math.random()).slice(2);
      function An(e) {
        return (
          Object.prototype.hasOwnProperty.call(e, Mn) ||
            ((e[Mn] = Pn++), (On[e[Mn]] = {})),
          On[e[Mn]]
        );
      }
      function jn(e) {
        if (
          "undefined" ===
          typeof (e =
            e || ("undefined" !== typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function Nn(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function Ln(e, t) {
        var n,
          r = Nn(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = Nn(r);
        }
      }
      function Dn() {
        for (var e = window, t = jn(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = "string" === typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = jn((e = t.contentWindow).document);
        }
        return t;
      }
      function In(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        );
      }
      function Un(e) {
        var t = Dn(),
          n = e.focusedElem,
          r = e.selectionRange;
        if (
          t !== n &&
          n &&
          n.ownerDocument &&
          (function e(t, n) {
            return (
              !(!t || !n) &&
              (t === n ||
                ((!t || 3 !== t.nodeType) &&
                  (n && 3 === n.nodeType
                    ? e(t, n.parentNode)
                    : "contains" in t
                    ? t.contains(n)
                    : !!t.compareDocumentPosition &&
                      !!(16 & t.compareDocumentPosition(n)))))
            );
          })(n.ownerDocument.documentElement, n)
        ) {
          if (null !== r && In(n))
            if (
              ((t = r.start),
              void 0 === (e = r.end) && (e = t),
              "selectionStart" in n)
            )
              (n.selectionStart = t),
                (n.selectionEnd = Math.min(e, n.value.length));
            else if (
              (e =
                ((t = n.ownerDocument || document) && t.defaultView) || window)
                .getSelection
            ) {
              e = e.getSelection();
              var i = n.textContent.length,
                o = Math.min(r.start, i);
              (r = void 0 === r.end ? o : Math.min(r.end, i)),
                !e.extend && o > r && ((i = r), (r = o), (o = i)),
                (i = Ln(n, o));
              var a = Ln(n, r);
              i &&
                a &&
                (1 !== e.rangeCount ||
                  e.anchorNode !== i.node ||
                  e.anchorOffset !== i.offset ||
                  e.focusNode !== a.node ||
                  e.focusOffset !== a.offset) &&
                ((t = t.createRange()).setStart(i.node, i.offset),
                e.removeAllRanges(),
                o > r
                  ? (e.addRange(t), e.extend(a.node, a.offset))
                  : (t.setEnd(a.node, a.offset), e.addRange(t)));
            }
          for (t = [], e = n; (e = e.parentNode); )
            1 === e.nodeType &&
              t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
          for (
            "function" === typeof n.focus && n.focus(), n = 0;
            n < t.length;
            n++
          )
            ((e = t[n]).element.scrollLeft = e.left),
              (e.element.scrollTop = e.top);
        }
      }
      var Fn = V && "documentMode" in document && 11 >= document.documentMode,
        Bn = {
          select: {
            phasedRegistrationNames: {
              bubbled: "onSelect",
              captured: "onSelectCapture",
            },
            dependencies:
              "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
                " "
              ),
          },
        },
        zn = null,
        Wn = null,
        Hn = null,
        qn = !1;
      function Vn(e, t) {
        var n =
          t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return qn || null == zn || zn !== jn(n)
          ? null
          : ("selectionStart" in (n = zn) && In(n)
              ? (n = { start: n.selectionStart, end: n.selectionEnd })
              : (n = {
                  anchorNode: (n = (
                    (n.ownerDocument && n.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: n.anchorOffset,
                  focusNode: n.focusNode,
                  focusOffset: n.focusOffset,
                }),
            Hn && en(Hn, n)
              ? null
              : ((Hn = n),
                ((e = ue.getPooled(Bn.select, Wn, e, t)).type = "select"),
                (e.target = zn),
                q(e),
                e));
      }
      var Yn = {
        eventTypes: Bn,
        extractEvents: function (e, t, n, r) {
          var i,
            o =
              r.window === r
                ? r.document
                : 9 === r.nodeType
                ? r
                : r.ownerDocument;
          if (!(i = !o)) {
            e: {
              (o = An(o)), (i = w.onSelect);
              for (var a = 0; a < i.length; a++) {
                var l = i[a];
                if (!o.hasOwnProperty(l) || !o[l]) {
                  o = !1;
                  break e;
                }
              }
              o = !0;
            }
            i = !o;
          }
          if (i) return null;
          switch (((o = t ? I(t) : window), e)) {
            case "focus":
              (Ue(o) || "true" === o.contentEditable) &&
                ((zn = o), (Wn = t), (Hn = null));
              break;
            case "blur":
              Hn = Wn = zn = null;
              break;
            case "mousedown":
              qn = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              return (qn = !1), Vn(n, r);
            case "selectionchange":
              if (Fn) break;
            case "keydown":
            case "keyup":
              return Vn(n, r);
          }
          return null;
        },
      };
      function $n(e, t) {
        return (
          (e = i({ children: void 0 }, t)),
          (t = (function (e) {
            var t = "";
            return (
              r.Children.forEach(e, function (e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }
      function Kn(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
          for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== i && (e[n].selected = i),
              i && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + bt(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n)
              return (
                (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
              );
            null !== t || e[i].disabled || (t = e[i]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function Qn(e, t) {
        return (
          null != t.dangerouslySetInnerHTML && a("91"),
          i({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          })
        );
      }
      function Gn(e, t) {
        var n = t.value;
        null == n &&
          ((n = t.defaultValue),
          null != (t = t.children) &&
            (null != n && a("92"),
            Array.isArray(t) && (1 >= t.length || a("93"), (t = t[0])),
            (n = t)),
          null == n && (n = "")),
          (e._wrapperState = { initialValue: bt(n) });
      }
      function Xn(e, t) {
        var n = bt(t.value),
          r = bt(t.defaultValue);
        null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r);
      }
      function Jn(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && (e.value = t);
      }
      O.injectEventPluginOrder(
        "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
          " "
        )
      ),
        (_ = U),
        (S = D),
        (E = I),
        O.injectEventPluginsByName({
          SimpleEventPlugin: wn,
          EnterLeaveEventPlugin: Xt,
          ChangeEventPlugin: Ft,
          SelectEventPlugin: Yn,
          BeforeInputEventPlugin: Te,
        });
      var Zn = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg",
      };
      function er(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function tr(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? er(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
      }
      var nr,
        rr = void 0,
        ir =
          ((nr = function (e, t) {
            if (e.namespaceURI !== Zn.svg || "innerHTML" in e) e.innerHTML = t;
            else {
              for (
                (rr = rr || document.createElement("div")).innerHTML =
                  "<svg>" + t + "</svg>",
                  t = rr.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return nr(e, t);
                });
              }
            : nr);
      function or(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var ar = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        lr = ["Webkit", "ms", "Moz", "O"];
      function ur(e, t, n) {
        return null == t || "boolean" === typeof t || "" === t
          ? ""
          : n ||
            "number" !== typeof t ||
            0 === t ||
            (ar.hasOwnProperty(e) && ar[e])
          ? ("" + t).trim()
          : t + "px";
      }
      function sr(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              i = ur(n, t[n], r);
            "float" === n && (n = "cssFloat"),
              r ? e.setProperty(n, i) : (e[n] = i);
          }
      }
      Object.keys(ar).forEach(function (e) {
        lr.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ar[t] = ar[e]);
        });
      });
      var cr = i(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
      function fr(e, t) {
        t &&
          (cr[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML) &&
            a("137", e, ""),
          null != t.dangerouslySetInnerHTML &&
            (null != t.children && a("60"),
            ("object" === typeof t.dangerouslySetInnerHTML &&
              "__html" in t.dangerouslySetInnerHTML) ||
              a("61")),
          null != t.style && "object" !== typeof t.style && a("62", ""));
      }
      function dr(e, t) {
        if (-1 === e.indexOf("-")) return "string" === typeof t.is;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      function pr(e, t) {
        var n = An(
          (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
        );
        t = w[t];
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          if (!n.hasOwnProperty(i) || !n[i]) {
            switch (i) {
              case "scroll":
                xn("scroll", e);
                break;
              case "focus":
              case "blur":
                xn("focus", e), xn("blur", e), (n.blur = !0), (n.focus = !0);
                break;
              case "cancel":
              case "close":
                Be(i) && xn(i, e);
                break;
              case "invalid":
              case "submit":
              case "reset":
                break;
              default:
                -1 === te.indexOf(i) && Tn(i, e);
            }
            n[i] = !0;
          }
        }
      }
      function hr() {}
      var mr = null,
        yr = null;
      function gr(e, t) {
        switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!t.autoFocus;
        }
        return !1;
      }
      function br(e, t) {
        return (
          "textarea" === e ||
          "option" === e ||
          "noscript" === e ||
          "string" === typeof t.children ||
          "number" === typeof t.children ||
          ("object" === typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var vr = "function" === typeof setTimeout ? setTimeout : void 0,
        wr = "function" === typeof clearTimeout ? clearTimeout : void 0,
        _r = o.unstable_scheduleCallback,
        Sr = o.unstable_cancelCallback;
      function Er(e) {
        for (e = e.nextSibling; e && 1 !== e.nodeType && 3 !== e.nodeType; )
          e = e.nextSibling;
        return e;
      }
      function kr(e) {
        for (e = e.firstChild; e && 1 !== e.nodeType && 3 !== e.nodeType; )
          e = e.nextSibling;
        return e;
      }
      new Set();
      var Tr = [],
        xr = -1;
      function Rr(e) {
        0 > xr || ((e.current = Tr[xr]), (Tr[xr] = null), xr--);
      }
      function Cr(e, t) {
        (Tr[++xr] = e.current), (e.current = t);
      }
      var Or = {},
        Pr = { current: Or },
        Mr = { current: !1 },
        Ar = Or;
      function jr(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Or;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var i,
          o = {};
        for (i in n) o[i] = t[i];
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          o
        );
      }
      function Nr(e) {
        return null !== (e = e.childContextTypes) && void 0 !== e;
      }
      function Lr(e) {
        Rr(Mr), Rr(Pr);
      }
      function Dr(e) {
        Rr(Mr), Rr(Pr);
      }
      function Ir(e, t, n) {
        Pr.current !== Or && a("168"), Cr(Pr, t), Cr(Mr, n);
      }
      function Ur(e, t, n) {
        var r = e.stateNode;
        if (
          ((e = t.childContextTypes), "function" !== typeof r.getChildContext)
        )
          return n;
        for (var o in (r = r.getChildContext()))
          o in e || a("108", lt(t) || "Unknown", o);
        return i({}, n, r);
      }
      function Fr(e) {
        var t = e.stateNode;
        return (
          (t = (t && t.__reactInternalMemoizedMergedChildContext) || Or),
          (Ar = Pr.current),
          Cr(Pr, t),
          Cr(Mr, Mr.current),
          !0
        );
      }
      function Br(e, t, n) {
        var r = e.stateNode;
        r || a("169"),
          n
            ? ((t = Ur(e, t, Ar)),
              (r.__reactInternalMemoizedMergedChildContext = t),
              Rr(Mr),
              Rr(Pr),
              Cr(Pr, t))
            : Rr(Mr),
          Cr(Mr, n);
      }
      var zr = null,
        Wr = null;
      function Hr(e) {
        return function (t) {
          try {
            return e(t);
          } catch (n) {}
        };
      }
      function qr(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.contextDependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = r),
          (this.effectTag = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childExpirationTime = this.expirationTime = 0),
          (this.alternate = null);
      }
      function Vr(e, t, n, r) {
        return new qr(e, t, n, r);
      }
      function Yr(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function $r(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Vr(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.effectTag = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childExpirationTime = e.childExpirationTime),
          (n.expirationTime = e.expirationTime),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (n.contextDependencies = e.contextDependencies),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Kr(e, t, n, r, i, o) {
        var l = 2;
        if (((r = e), "function" === typeof e)) Yr(e) && (l = 1);
        else if ("string" === typeof e) l = 5;
        else
          e: switch (e) {
            case Qe:
              return Qr(n.children, i, o, t);
            case et:
              return Gr(n, 3 | i, o, t);
            case Ge:
              return Gr(n, 2 | i, o, t);
            case Xe:
              return (
                ((e = Vr(12, n, t, 4 | i)).elementType = Xe),
                (e.type = Xe),
                (e.expirationTime = o),
                e
              );
            case nt:
              return (
                ((e = Vr(13, n, t, i)).elementType = nt),
                (e.type = nt),
                (e.expirationTime = o),
                e
              );
            default:
              if ("object" === typeof e && null !== e)
                switch (e.$$typeof) {
                  case Je:
                    l = 10;
                    break e;
                  case Ze:
                    l = 9;
                    break e;
                  case tt:
                    l = 11;
                    break e;
                  case rt:
                    l = 14;
                    break e;
                  case it:
                    (l = 16), (r = null);
                    break e;
                }
              a("130", null == e ? e : typeof e, "");
          }
        return (
          ((t = Vr(l, n, t, i)).elementType = e),
          (t.type = r),
          (t.expirationTime = o),
          t
        );
      }
      function Qr(e, t, n, r) {
        return ((e = Vr(7, e, r, t)).expirationTime = n), e;
      }
      function Gr(e, t, n, r) {
        return (
          (e = Vr(8, e, r, t)),
          (t = 0 === (1 & t) ? Ge : et),
          (e.elementType = t),
          (e.type = t),
          (e.expirationTime = n),
          e
        );
      }
      function Xr(e, t, n) {
        return ((e = Vr(6, e, null, t)).expirationTime = n), e;
      }
      function Jr(e, t, n) {
        return (
          ((t = Vr(
            4,
            null !== e.children ? e.children : [],
            e.key,
            t
          )).expirationTime = n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function Zr(e, t) {
        e.didError = !1;
        var n = e.earliestPendingTime;
        0 === n
          ? (e.earliestPendingTime = e.latestPendingTime = t)
          : n < t
          ? (e.earliestPendingTime = t)
          : e.latestPendingTime > t && (e.latestPendingTime = t),
          ni(t, e);
      }
      function ei(e, t) {
        (e.didError = !1), e.latestPingedTime >= t && (e.latestPingedTime = 0);
        var n = e.earliestPendingTime,
          r = e.latestPendingTime;
        n === t
          ? (e.earliestPendingTime = r === t ? (e.latestPendingTime = 0) : r)
          : r === t && (e.latestPendingTime = n),
          (n = e.earliestSuspendedTime),
          (r = e.latestSuspendedTime),
          0 === n
            ? (e.earliestSuspendedTime = e.latestSuspendedTime = t)
            : n < t
            ? (e.earliestSuspendedTime = t)
            : r > t && (e.latestSuspendedTime = t),
          ni(t, e);
      }
      function ti(e, t) {
        var n = e.earliestPendingTime;
        return (
          n > t && (t = n), (e = e.earliestSuspendedTime) > t && (t = e), t
        );
      }
      function ni(e, t) {
        var n = t.earliestSuspendedTime,
          r = t.latestSuspendedTime,
          i = t.earliestPendingTime,
          o = t.latestPingedTime;
        0 === (i = 0 !== i ? i : o) && (0 === e || r < e) && (i = r),
          0 !== (e = i) && n > e && (e = n),
          (t.nextExpirationTimeToWorkOn = i),
          (t.expirationTime = e);
      }
      function ri(e, t) {
        if (e && e.defaultProps)
          for (var n in ((t = i({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
        return t;
      }
      var ii = new r.Component().refs;
      function oi(e, t, n, r) {
        (n =
          null === (n = n(r, (t = e.memoizedState))) || void 0 === n
            ? t
            : i({}, t, n)),
          (e.memoizedState = n),
          null !== (r = e.updateQueue) &&
            0 === e.expirationTime &&
            (r.baseState = n);
      }
      var ai = {
        isMounted: function (e) {
          return !!(e = e._reactInternalFiber) && 2 === tn(e);
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternalFiber;
          var r = Sl(),
            i = Go((r = Qa(r, e)));
          (i.payload = t),
            void 0 !== n && null !== n && (i.callback = n),
            Ha(),
            Jo(e, i),
            Ja(e, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternalFiber;
          var r = Sl(),
            i = Go((r = Qa(r, e)));
          (i.tag = qo),
            (i.payload = t),
            void 0 !== n && null !== n && (i.callback = n),
            Ha(),
            Jo(e, i),
            Ja(e, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternalFiber;
          var n = Sl(),
            r = Go((n = Qa(n, e)));
          (r.tag = Vo),
            void 0 !== t && null !== t && (r.callback = t),
            Ha(),
            Jo(e, r),
            Ja(e, n);
        },
      };
      function li(e, t, n, r, i, o, a) {
        return "function" === typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, o, a)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !en(n, r) ||
              !en(i, o);
      }
      function ui(e, t, n) {
        var r = !1,
          i = Or,
          o = t.contextType;
        return (
          "object" === typeof o && null !== o
            ? (o = Wo(o))
            : ((i = Nr(t) ? Ar : Pr.current),
              (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                ? jr(e, i)
                : Or)),
          (t = new t(n, o)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = ai),
          (e.stateNode = t),
          (t._reactInternalFiber = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              i),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          t
        );
      }
      function si(e, t, n, r) {
        (e = t.state),
          "function" === typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" === typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && ai.enqueueReplaceState(t, t.state, null);
      }
      function ci(e, t, n, r) {
        var i = e.stateNode;
        (i.props = n), (i.state = e.memoizedState), (i.refs = ii);
        var o = t.contextType;
        "object" === typeof o && null !== o
          ? (i.context = Wo(o))
          : ((o = Nr(t) ? Ar : Pr.current), (i.context = jr(e, o))),
          null !== (o = e.updateQueue) &&
            (na(e, o, n, i, r), (i.state = e.memoizedState)),
          "function" === typeof (o = t.getDerivedStateFromProps) &&
            (oi(e, t, o, n), (i.state = e.memoizedState)),
          "function" === typeof t.getDerivedStateFromProps ||
            "function" === typeof i.getSnapshotBeforeUpdate ||
            ("function" !== typeof i.UNSAFE_componentWillMount &&
              "function" !== typeof i.componentWillMount) ||
            ((t = i.state),
            "function" === typeof i.componentWillMount &&
              i.componentWillMount(),
            "function" === typeof i.UNSAFE_componentWillMount &&
              i.UNSAFE_componentWillMount(),
            t !== i.state && ai.enqueueReplaceState(i, i.state, null),
            null !== (o = e.updateQueue) &&
              (na(e, o, n, i, r), (i.state = e.memoizedState))),
          "function" === typeof i.componentDidMount && (e.effectTag |= 4);
      }
      var fi = Array.isArray;
      function di(e, t, n) {
        if (
          null !== (e = n.ref) &&
          "function" !== typeof e &&
          "object" !== typeof e
        ) {
          if (n._owner) {
            n = n._owner;
            var r = void 0;
            n && (1 !== n.tag && a("309"), (r = n.stateNode)), r || a("147", e);
            var i = "" + e;
            return null !== t &&
              null !== t.ref &&
              "function" === typeof t.ref &&
              t.ref._stringRef === i
              ? t.ref
              : (((t = function (e) {
                  var t = r.refs;
                  t === ii && (t = r.refs = {}),
                    null === e ? delete t[i] : (t[i] = e);
                })._stringRef = i),
                t);
          }
          "string" !== typeof e && a("284"), n._owner || a("290", e);
        }
        return e;
      }
      function pi(e, t) {
        "textarea" !== e.type &&
          a(
            "31",
            "[object Object]" === Object.prototype.toString.call(t)
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : t,
            ""
          );
      }
      function hi(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r
              ? ((r.nextEffect = n), (t.lastEffect = n))
              : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.effectTag = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; )
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }
        function i(e, t, n) {
          return ((e = $r(e, t)).index = 0), (e.sibling = null), e;
        }
        function o(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.effectTag = 2), n)
                  : r
                : ((t.effectTag = 2), n)
              : n
          );
        }
        function l(t) {
          return e && null === t.alternate && (t.effectTag = 2), t;
        }
        function u(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Xr(n, e.mode, r)).return = e), t)
            : (((t = i(t, n)).return = e), t);
        }
        function s(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = i(t, n.props)).ref = di(e, t, n)), (r.return = e), r)
            : (((r = Kr(n.type, n.key, n.props, null, e.mode, r)).ref = di(
                e,
                t,
                n
              )),
              (r.return = e),
              r);
        }
        function c(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Jr(n, e.mode, r)).return = e), t)
            : (((t = i(t, n.children || [])).return = e), t);
        }
        function f(e, t, n, r, o) {
          return null === t || 7 !== t.tag
            ? (((t = Qr(n, e.mode, r, o)).return = e), t)
            : (((t = i(t, n)).return = e), t);
        }
        function d(e, t, n) {
          if ("string" === typeof t || "number" === typeof t)
            return ((t = Xr("" + t, e.mode, n)).return = e), t;
          if ("object" === typeof t && null !== t) {
            switch (t.$$typeof) {
              case $e:
                return (
                  ((n = Kr(t.type, t.key, t.props, null, e.mode, n)).ref = di(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case Ke:
                return ((t = Jr(t, e.mode, n)).return = e), t;
            }
            if (fi(t) || at(t))
              return ((t = Qr(t, e.mode, n, null)).return = e), t;
            pi(e, t);
          }
          return null;
        }
        function p(e, t, n, r) {
          var i = null !== t ? t.key : null;
          if ("string" === typeof n || "number" === typeof n)
            return null !== i ? null : u(e, t, "" + n, r);
          if ("object" === typeof n && null !== n) {
            switch (n.$$typeof) {
              case $e:
                return n.key === i
                  ? n.type === Qe
                    ? f(e, t, n.props.children, r, i)
                    : s(e, t, n, r)
                  : null;
              case Ke:
                return n.key === i ? c(e, t, n, r) : null;
            }
            if (fi(n) || at(n)) return null !== i ? null : f(e, t, n, r, null);
            pi(e, n);
          }
          return null;
        }
        function h(e, t, n, r, i) {
          if ("string" === typeof r || "number" === typeof r)
            return u(t, (e = e.get(n) || null), "" + r, i);
          if ("object" === typeof r && null !== r) {
            switch (r.$$typeof) {
              case $e:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === Qe
                    ? f(t, e, r.props.children, i, r.key)
                    : s(t, e, r, i)
                );
              case Ke:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  i
                );
            }
            if (fi(r) || at(r)) return f(t, (e = e.get(n) || null), r, i, null);
            pi(t, r);
          }
          return null;
        }
        function m(i, a, l, u) {
          for (
            var s = null, c = null, f = a, m = (a = 0), y = null;
            null !== f && m < l.length;
            m++
          ) {
            f.index > m ? ((y = f), (f = null)) : (y = f.sibling);
            var g = p(i, f, l[m], u);
            if (null === g) {
              null === f && (f = y);
              break;
            }
            e && f && null === g.alternate && t(i, f),
              (a = o(g, a, m)),
              null === c ? (s = g) : (c.sibling = g),
              (c = g),
              (f = y);
          }
          if (m === l.length) return n(i, f), s;
          if (null === f) {
            for (; m < l.length; m++)
              (f = d(i, l[m], u)) &&
                ((a = o(f, a, m)),
                null === c ? (s = f) : (c.sibling = f),
                (c = f));
            return s;
          }
          for (f = r(i, f); m < l.length; m++)
            (y = h(f, i, m, l[m], u)) &&
              (e &&
                null !== y.alternate &&
                f.delete(null === y.key ? m : y.key),
              (a = o(y, a, m)),
              null === c ? (s = y) : (c.sibling = y),
              (c = y));
          return (
            e &&
              f.forEach(function (e) {
                return t(i, e);
              }),
            s
          );
        }
        function y(i, l, u, s) {
          var c = at(u);
          "function" !== typeof c && a("150"),
            null == (u = c.call(u)) && a("151");
          for (
            var f = (c = null), m = l, y = (l = 0), g = null, b = u.next();
            null !== m && !b.done;
            y++, b = u.next()
          ) {
            m.index > y ? ((g = m), (m = null)) : (g = m.sibling);
            var v = p(i, m, b.value, s);
            if (null === v) {
              m || (m = g);
              break;
            }
            e && m && null === v.alternate && t(i, m),
              (l = o(v, l, y)),
              null === f ? (c = v) : (f.sibling = v),
              (f = v),
              (m = g);
          }
          if (b.done) return n(i, m), c;
          if (null === m) {
            for (; !b.done; y++, b = u.next())
              null !== (b = d(i, b.value, s)) &&
                ((l = o(b, l, y)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b));
            return c;
          }
          for (m = r(i, m); !b.done; y++, b = u.next())
            null !== (b = h(m, i, y, b.value, s)) &&
              (e &&
                null !== b.alternate &&
                m.delete(null === b.key ? y : b.key),
              (l = o(b, l, y)),
              null === f ? (c = b) : (f.sibling = b),
              (f = b));
          return (
            e &&
              m.forEach(function (e) {
                return t(i, e);
              }),
            c
          );
        }
        return function (e, r, o, u) {
          var s =
            "object" === typeof o &&
            null !== o &&
            o.type === Qe &&
            null === o.key;
          s && (o = o.props.children);
          var c = "object" === typeof o && null !== o;
          if (c)
            switch (o.$$typeof) {
              case $e:
                e: {
                  for (c = o.key, s = r; null !== s; ) {
                    if (s.key === c) {
                      if (
                        7 === s.tag ? o.type === Qe : s.elementType === o.type
                      ) {
                        n(e, s.sibling),
                          ((r = i(
                            s,
                            o.type === Qe ? o.props.children : o.props
                          )).ref = di(e, s, o)),
                          (r.return = e),
                          (e = r);
                        break e;
                      }
                      n(e, s);
                      break;
                    }
                    t(e, s), (s = s.sibling);
                  }
                  o.type === Qe
                    ? (((r = Qr(o.props.children, e.mode, u, o.key)).return =
                        e),
                      (e = r))
                    : (((u = Kr(o.type, o.key, o.props, null, e.mode, u)).ref =
                        di(e, r, o)),
                      (u.return = e),
                      (e = u));
                }
                return l(e);
              case Ke:
                e: {
                  for (s = o.key; null !== r; ) {
                    if (r.key === s) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === o.containerInfo &&
                        r.stateNode.implementation === o.implementation
                      ) {
                        n(e, r.sibling),
                          ((r = i(r, o.children || [])).return = e),
                          (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = Jr(o, e.mode, u)).return = e), (e = r);
                }
                return l(e);
            }
          if ("string" === typeof o || "number" === typeof o)
            return (
              (o = "" + o),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = i(r, o)).return = e), (e = r))
                : (n(e, r), ((r = Xr(o, e.mode, u)).return = e), (e = r)),
              l(e)
            );
          if (fi(o)) return m(e, r, o, u);
          if (at(o)) return y(e, r, o, u);
          if ((c && pi(e, o), "undefined" === typeof o && !s))
            switch (e.tag) {
              case 1:
              case 0:
                a("152", (u = e.type).displayName || u.name || "Component");
            }
          return n(e, r);
        };
      }
      var mi = hi(!0),
        yi = hi(!1),
        gi = {},
        bi = { current: gi },
        vi = { current: gi },
        wi = { current: gi };
      function _i(e) {
        return e === gi && a("174"), e;
      }
      function Si(e, t) {
        Cr(wi, t), Cr(vi, e), Cr(bi, gi);
        var n = t.nodeType;
        switch (n) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : tr(null, "");
            break;
          default:
            t = tr(
              (t = (n = 8 === n ? t.parentNode : t).namespaceURI || null),
              (n = n.tagName)
            );
        }
        Rr(bi), Cr(bi, t);
      }
      function Ei(e) {
        Rr(bi), Rr(vi), Rr(wi);
      }
      function ki(e) {
        _i(wi.current);
        var t = _i(bi.current),
          n = tr(t, e.type);
        t !== n && (Cr(vi, e), Cr(bi, n));
      }
      function Ti(e) {
        vi.current === e && (Rr(bi), Rr(vi));
      }
      var xi = 0,
        Ri = 2,
        Ci = 4,
        Oi = 8,
        Pi = 16,
        Mi = 32,
        Ai = 64,
        ji = 128,
        Ni = qe.ReactCurrentDispatcher,
        Li = 0,
        Di = null,
        Ii = null,
        Ui = null,
        Fi = null,
        Bi = null,
        zi = null,
        Wi = 0,
        Hi = null,
        qi = 0,
        Vi = !1,
        Yi = null,
        $i = 0;
      function Ki() {
        a("321");
      }
      function Qi(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!Jt(e[n], t[n])) return !1;
        return !0;
      }
      function Gi(e, t, n, r, i, o) {
        if (
          ((Li = o),
          (Di = t),
          (Ui = null !== e ? e.memoizedState : null),
          (Ni.current = null === Ui ? so : co),
          (t = n(r, i)),
          Vi)
        ) {
          do {
            (Vi = !1),
              ($i += 1),
              (Ui = null !== e ? e.memoizedState : null),
              (zi = Fi),
              (Hi = Bi = Ii = null),
              (Ni.current = co),
              (t = n(r, i));
          } while (Vi);
          (Yi = null), ($i = 0);
        }
        return (
          (Ni.current = uo),
          ((e = Di).memoizedState = Fi),
          (e.expirationTime = Wi),
          (e.updateQueue = Hi),
          (e.effectTag |= qi),
          (e = null !== Ii && null !== Ii.next),
          (Li = 0),
          (zi = Bi = Fi = Ui = Ii = Di = null),
          (Wi = 0),
          (Hi = null),
          (qi = 0),
          e && a("300"),
          t
        );
      }
      function Xi() {
        (Ni.current = uo),
          (Li = 0),
          (zi = Bi = Fi = Ui = Ii = Di = null),
          (Wi = 0),
          (Hi = null),
          (qi = 0),
          (Vi = !1),
          (Yi = null),
          ($i = 0);
      }
      function Ji() {
        var e = {
          memoizedState: null,
          baseState: null,
          queue: null,
          baseUpdate: null,
          next: null,
        };
        return null === Bi ? (Fi = Bi = e) : (Bi = Bi.next = e), Bi;
      }
      function Zi() {
        if (null !== zi)
          (zi = (Bi = zi).next), (Ui = null !== (Ii = Ui) ? Ii.next : null);
        else {
          null === Ui && a("310");
          var e = {
            memoizedState: (Ii = Ui).memoizedState,
            baseState: Ii.baseState,
            queue: Ii.queue,
            baseUpdate: Ii.baseUpdate,
            next: null,
          };
          (Bi = null === Bi ? (Fi = e) : (Bi.next = e)), (Ui = Ii.next);
        }
        return Bi;
      }
      function eo(e, t) {
        return "function" === typeof t ? t(e) : t;
      }
      function to(e) {
        var t = Zi(),
          n = t.queue;
        if ((null === n && a("311"), (n.lastRenderedReducer = e), 0 < $i)) {
          var r = n.dispatch;
          if (null !== Yi) {
            var i = Yi.get(n);
            if (void 0 !== i) {
              Yi.delete(n);
              var o = t.memoizedState;
              do {
                (o = e(o, i.action)), (i = i.next);
              } while (null !== i);
              return (
                Jt(o, t.memoizedState) || (So = !0),
                (t.memoizedState = o),
                t.baseUpdate === n.last && (t.baseState = o),
                (n.lastRenderedState = o),
                [o, r]
              );
            }
          }
          return [t.memoizedState, r];
        }
        r = n.last;
        var l = t.baseUpdate;
        if (
          ((o = t.baseState),
          null !== l
            ? (null !== r && (r.next = null), (r = l.next))
            : (r = null !== r ? r.next : null),
          null !== r)
        ) {
          var u = (i = null),
            s = r,
            c = !1;
          do {
            var f = s.expirationTime;
            f < Li
              ? (c || ((c = !0), (u = l), (i = o)), f > Wi && (Wi = f))
              : (o = s.eagerReducer === e ? s.eagerState : e(o, s.action)),
              (l = s),
              (s = s.next);
          } while (null !== s && s !== r);
          c || ((u = l), (i = o)),
            Jt(o, t.memoizedState) || (So = !0),
            (t.memoizedState = o),
            (t.baseUpdate = u),
            (t.baseState = i),
            (n.lastRenderedState = o);
        }
        return [t.memoizedState, n.dispatch];
      }
      function no(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === Hi
            ? ((Hi = { lastEffect: null }).lastEffect = e.next = e)
            : null === (t = Hi.lastEffect)
            ? (Hi.lastEffect = e.next = e)
            : ((n = t.next), (t.next = e), (e.next = n), (Hi.lastEffect = e)),
          e
        );
      }
      function ro(e, t, n, r) {
        var i = Ji();
        (qi |= e),
          (i.memoizedState = no(t, n, void 0, void 0 === r ? null : r));
      }
      function io(e, t, n, r) {
        var i = Zi();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== Ii) {
          var a = Ii.memoizedState;
          if (((o = a.destroy), null !== r && Qi(r, a.deps)))
            return void no(xi, n, o, r);
        }
        (qi |= e), (i.memoizedState = no(t, n, o, r));
      }
      function oo(e, t) {
        return "function" === typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null !== t && void 0 !== t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function ao() {}
      function lo(e, t, n) {
        25 > $i || a("301");
        var r = e.alternate;
        if (e === Di || (null !== r && r === Di))
          if (
            ((Vi = !0),
            (e = {
              expirationTime: Li,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            }),
            null === Yi && (Yi = new Map()),
            void 0 === (n = Yi.get(t)))
          )
            Yi.set(t, e);
          else {
            for (t = n; null !== t.next; ) t = t.next;
            t.next = e;
          }
        else {
          Ha();
          var i = Sl(),
            o = {
              expirationTime: (i = Qa(i, e)),
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            l = t.last;
          if (null === l) o.next = o;
          else {
            var u = l.next;
            null !== u && (o.next = u), (l.next = o);
          }
          if (
            ((t.last = o),
            0 === e.expirationTime &&
              (null === r || 0 === r.expirationTime) &&
              null !== (r = t.lastRenderedReducer))
          )
            try {
              var s = t.lastRenderedState,
                c = r(s, n);
              if (((o.eagerReducer = r), (o.eagerState = c), Jt(c, s))) return;
            } catch (f) {}
          Ja(e, i);
        }
      }
      var uo = {
          readContext: Wo,
          useCallback: Ki,
          useContext: Ki,
          useEffect: Ki,
          useImperativeHandle: Ki,
          useLayoutEffect: Ki,
          useMemo: Ki,
          useReducer: Ki,
          useRef: Ki,
          useState: Ki,
          useDebugValue: Ki,
        },
        so = {
          readContext: Wo,
          useCallback: function (e, t) {
            return (Ji().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: Wo,
          useEffect: function (e, t) {
            return ro(516, ji | Ai, e, t);
          },
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              ro(4, Ci | Mi, oo.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return ro(4, Ci | Mi, e, t);
          },
          useMemo: function (e, t) {
            var n = Ji();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            var r = Ji();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue =
                {
                  last: null,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }).dispatch =
                lo.bind(null, Di, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (e = { current: e }), (Ji().memoizedState = e);
          },
          useState: function (e) {
            var t = Ji();
            return (
              "function" === typeof e && (e = e()),
              (t.memoizedState = t.baseState = e),
              (e = (e = t.queue =
                {
                  last: null,
                  dispatch: null,
                  lastRenderedReducer: eo,
                  lastRenderedState: e,
                }).dispatch =
                lo.bind(null, Di, e)),
              [t.memoizedState, e]
            );
          },
          useDebugValue: ao,
        },
        co = {
          readContext: Wo,
          useCallback: function (e, t) {
            var n = Zi();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && Qi(t, r[1])
              ? r[0]
              : ((n.memoizedState = [e, t]), e);
          },
          useContext: Wo,
          useEffect: function (e, t) {
            return io(516, ji | Ai, e, t);
          },
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null !== n && void 0 !== n ? n.concat([e]) : null),
              io(4, Ci | Mi, oo.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return io(4, Ci | Mi, e, t);
          },
          useMemo: function (e, t) {
            var n = Zi();
            t = void 0 === t ? null : t;
            var r = n.memoizedState;
            return null !== r && null !== t && Qi(t, r[1])
              ? r[0]
              : ((e = e()), (n.memoizedState = [e, t]), e);
          },
          useReducer: to,
          useRef: function () {
            return Zi().memoizedState;
          },
          useState: function (e) {
            return to(eo);
          },
          useDebugValue: ao,
        },
        fo = null,
        po = null,
        ho = !1;
      function mo(e, t) {
        var n = Vr(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.type = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (n.effectTag = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function yo(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) && ((e.stateNode = t), !0)
            );
          case 6:
            return (
              null !==
                (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), !0)
            );
          case 13:
          default:
            return !1;
        }
      }
      function go(e) {
        if (ho) {
          var t = po;
          if (t) {
            var n = t;
            if (!yo(e, t)) {
              if (!(t = Er(n)) || !yo(e, t))
                return (e.effectTag |= 2), (ho = !1), void (fo = e);
              mo(fo, n);
            }
            (fo = e), (po = kr(t));
          } else (e.effectTag |= 2), (ho = !1), (fo = e);
        }
      }
      function bo(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 18 !== e.tag;

        )
          e = e.return;
        fo = e;
      }
      function vo(e) {
        if (e !== fo) return !1;
        if (!ho) return bo(e), (ho = !0), !1;
        var t = e.type;
        if (
          5 !== e.tag ||
          ("head" !== t && "body" !== t && !br(t, e.memoizedProps))
        )
          for (t = po; t; ) mo(e, t), (t = Er(t));
        return bo(e), (po = fo ? Er(e.stateNode) : null), !0;
      }
      function wo() {
        (po = fo = null), (ho = !1);
      }
      var _o = qe.ReactCurrentOwner,
        So = !1;
      function Eo(e, t, n, r) {
        t.child = null === e ? yi(t, null, n, r) : mi(t, e.child, n, r);
      }
      function ko(e, t, n, r, i) {
        n = n.render;
        var o = t.ref;
        return (
          zo(t, i),
          (r = Gi(e, t, n, r, o, i)),
          null === e || So
            ? ((t.effectTag |= 1), Eo(e, t, r, i), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.effectTag &= -517),
              e.expirationTime <= i && (e.expirationTime = 0),
              jo(e, t, i))
        );
      }
      function To(e, t, n, r, i, o) {
        if (null === e) {
          var a = n.type;
          return "function" !== typeof a ||
            Yr(a) ||
            void 0 !== a.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Kr(n.type, null, r, null, t.mode, o)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = a), xo(e, t, a, r, i, o));
        }
        return (
          (a = e.child),
          i < o &&
          ((i = a.memoizedProps),
          (n = null !== (n = n.compare) ? n : en)(i, r) && e.ref === t.ref)
            ? jo(e, t, o)
            : ((t.effectTag |= 1),
              ((e = $r(a, r)).ref = t.ref),
              (e.return = t),
              (t.child = e))
        );
      }
      function xo(e, t, n, r, i, o) {
        return null !== e &&
          en(e.memoizedProps, r) &&
          e.ref === t.ref &&
          ((So = !1), i < o)
          ? jo(e, t, o)
          : Co(e, t, n, r, o);
      }
      function Ro(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.effectTag |= 128);
      }
      function Co(e, t, n, r, i) {
        var o = Nr(n) ? Ar : Pr.current;
        return (
          (o = jr(t, o)),
          zo(t, i),
          (n = Gi(e, t, n, r, o, i)),
          null === e || So
            ? ((t.effectTag |= 1), Eo(e, t, n, i), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.effectTag &= -517),
              e.expirationTime <= i && (e.expirationTime = 0),
              jo(e, t, i))
        );
      }
      function Oo(e, t, n, r, i) {
        if (Nr(n)) {
          var o = !0;
          Fr(t);
        } else o = !1;
        if ((zo(t, i), null === t.stateNode))
          null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            ui(t, n, r),
            ci(t, n, r, i),
            (r = !0);
        else if (null === e) {
          var a = t.stateNode,
            l = t.memoizedProps;
          a.props = l;
          var u = a.context,
            s = n.contextType;
          "object" === typeof s && null !== s
            ? (s = Wo(s))
            : (s = jr(t, (s = Nr(n) ? Ar : Pr.current)));
          var c = n.getDerivedStateFromProps,
            f =
              "function" === typeof c ||
              "function" === typeof a.getSnapshotBeforeUpdate;
          f ||
            ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
              "function" !== typeof a.componentWillReceiveProps) ||
            ((l !== r || u !== s) && si(t, a, r, s)),
            ($o = !1);
          var d = t.memoizedState;
          u = a.state = d;
          var p = t.updateQueue;
          null !== p && (na(t, p, r, a, i), (u = t.memoizedState)),
            l !== r || d !== u || Mr.current || $o
              ? ("function" === typeof c &&
                  (oi(t, n, c, r), (u = t.memoizedState)),
                (l = $o || li(t, n, l, r, d, u, s))
                  ? (f ||
                      ("function" !== typeof a.UNSAFE_componentWillMount &&
                        "function" !== typeof a.componentWillMount) ||
                      ("function" === typeof a.componentWillMount &&
                        a.componentWillMount(),
                      "function" === typeof a.UNSAFE_componentWillMount &&
                        a.UNSAFE_componentWillMount()),
                    "function" === typeof a.componentDidMount &&
                      (t.effectTag |= 4))
                  : ("function" === typeof a.componentDidMount &&
                      (t.effectTag |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = u)),
                (a.props = r),
                (a.state = u),
                (a.context = s),
                (r = l))
              : ("function" === typeof a.componentDidMount &&
                  (t.effectTag |= 4),
                (r = !1));
        } else
          (a = t.stateNode),
            (l = t.memoizedProps),
            (a.props = t.type === t.elementType ? l : ri(t.type, l)),
            (u = a.context),
            "object" === typeof (s = n.contextType) && null !== s
              ? (s = Wo(s))
              : (s = jr(t, (s = Nr(n) ? Ar : Pr.current))),
            (f =
              "function" === typeof (c = n.getDerivedStateFromProps) ||
              "function" === typeof a.getSnapshotBeforeUpdate) ||
              ("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof a.componentWillReceiveProps) ||
              ((l !== r || u !== s) && si(t, a, r, s)),
            ($o = !1),
            (u = t.memoizedState),
            (d = a.state = u),
            null !== (p = t.updateQueue) &&
              (na(t, p, r, a, i), (d = t.memoizedState)),
            l !== r || u !== d || Mr.current || $o
              ? ("function" === typeof c &&
                  (oi(t, n, c, r), (d = t.memoizedState)),
                (c = $o || li(t, n, l, r, u, d, s))
                  ? (f ||
                      ("function" !== typeof a.UNSAFE_componentWillUpdate &&
                        "function" !== typeof a.componentWillUpdate) ||
                      ("function" === typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, d, s),
                      "function" === typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, d, s)),
                    "function" === typeof a.componentDidUpdate &&
                      (t.effectTag |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate &&
                      (t.effectTag |= 256))
                  : ("function" !== typeof a.componentDidUpdate ||
                      (l === e.memoizedProps && u === e.memoizedState) ||
                      (t.effectTag |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && u === e.memoizedState) ||
                      (t.effectTag |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = d)),
                (a.props = r),
                (a.state = d),
                (a.context = s),
                (r = c))
              : ("function" !== typeof a.componentDidUpdate ||
                  (l === e.memoizedProps && u === e.memoizedState) ||
                  (t.effectTag |= 4),
                "function" !== typeof a.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && u === e.memoizedState) ||
                  (t.effectTag |= 256),
                (r = !1));
        return Po(e, t, n, r, o, i);
      }
      function Po(e, t, n, r, i, o) {
        Ro(e, t);
        var a = 0 !== (64 & t.effectTag);
        if (!r && !a) return i && Br(t, n, !1), jo(e, t, o);
        (r = t.stateNode), (_o.current = t);
        var l =
          a && "function" !== typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.effectTag |= 1),
          null !== e && a
            ? ((t.child = mi(t, e.child, null, o)),
              (t.child = mi(t, null, l, o)))
            : Eo(e, t, l, o),
          (t.memoizedState = r.state),
          i && Br(t, n, !0),
          t.child
        );
      }
      function Mo(e) {
        var t = e.stateNode;
        t.pendingContext
          ? Ir(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && Ir(0, t.context, !1),
          Si(e, t.containerInfo);
      }
      function Ao(e, t, n) {
        var r = t.mode,
          i = t.pendingProps,
          o = t.memoizedState;
        if (0 === (64 & t.effectTag)) {
          o = null;
          var a = !1;
        } else
          (o = { timedOutAt: null !== o ? o.timedOutAt : 0 }),
            (a = !0),
            (t.effectTag &= -65);
        if (null === e)
          if (a) {
            var l = i.fallback;
            (e = Qr(null, r, 0, null)),
              0 === (1 & t.mode) &&
                (e.child = null !== t.memoizedState ? t.child.child : t.child),
              (r = Qr(l, r, n, null)),
              (e.sibling = r),
              ((n = e).return = r.return = t);
          } else n = r = yi(t, null, i.children, n);
        else
          null !== e.memoizedState
            ? ((l = (r = e.child).sibling),
              a
                ? ((n = i.fallback),
                  (i = $r(r, r.pendingProps)),
                  0 === (1 & t.mode) &&
                    (a = null !== t.memoizedState ? t.child.child : t.child) !==
                      r.child &&
                    (i.child = a),
                  (r = i.sibling = $r(l, n, l.expirationTime)),
                  (n = i),
                  (i.childExpirationTime = 0),
                  (n.return = r.return = t))
                : (n = r = mi(t, r.child, i.children, n)))
            : ((l = e.child),
              a
                ? ((a = i.fallback),
                  ((i = Qr(null, r, 0, null)).child = l),
                  0 === (1 & t.mode) &&
                    (i.child =
                      null !== t.memoizedState ? t.child.child : t.child),
                  ((r = i.sibling = Qr(a, r, n, null)).effectTag |= 2),
                  (n = i),
                  (i.childExpirationTime = 0),
                  (n.return = r.return = t))
                : (r = n = mi(t, l, i.children, n))),
            (t.stateNode = e.stateNode);
        return (t.memoizedState = o), (t.child = n), r;
      }
      function jo(e, t, n) {
        if (
          (null !== e && (t.contextDependencies = e.contextDependencies),
          t.childExpirationTime < n)
        )
          return null;
        if ((null !== e && t.child !== e.child && a("153"), null !== t.child)) {
          for (
            n = $r((e = t.child), e.pendingProps, e.expirationTime),
              t.child = n,
              n.return = t;
            null !== e.sibling;

          )
            (e = e.sibling),
              ((n = n.sibling =
                $r(e, e.pendingProps, e.expirationTime)).return = t);
          n.sibling = null;
        }
        return t.child;
      }
      function No(e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
          if (e.memoizedProps !== t.pendingProps || Mr.current) So = !0;
          else if (r < n) {
            switch (((So = !1), t.tag)) {
              case 3:
                Mo(t), wo();
                break;
              case 5:
                ki(t);
                break;
              case 1:
                Nr(t.type) && Fr(t);
                break;
              case 4:
                Si(t, t.stateNode.containerInfo);
                break;
              case 10:
                Fo(t, t.memoizedProps.value);
                break;
              case 13:
                if (null !== t.memoizedState)
                  return 0 !== (r = t.child.childExpirationTime) && r >= n
                    ? Ao(e, t, n)
                    : null !== (t = jo(e, t, n))
                    ? t.sibling
                    : null;
            }
            return jo(e, t, n);
          }
        } else So = !1;
        switch (((t.expirationTime = 0), t.tag)) {
          case 2:
            (r = t.elementType),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (e = t.pendingProps);
            var i = jr(t, Pr.current);
            if (
              (zo(t, n),
              (i = Gi(null, t, r, e, i, n)),
              (t.effectTag |= 1),
              "object" === typeof i &&
                null !== i &&
                "function" === typeof i.render &&
                void 0 === i.$$typeof)
            ) {
              if (((t.tag = 1), Xi(), Nr(r))) {
                var o = !0;
                Fr(t);
              } else o = !1;
              t.memoizedState =
                null !== i.state && void 0 !== i.state ? i.state : null;
              var l = r.getDerivedStateFromProps;
              "function" === typeof l && oi(t, r, l, e),
                (i.updater = ai),
                (t.stateNode = i),
                (i._reactInternalFiber = t),
                ci(t, r, e, n),
                (t = Po(null, t, r, !0, o, n));
            } else (t.tag = 0), Eo(null, t, i, n), (t = t.child);
            return t;
          case 16:
            switch (
              ((i = t.elementType),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (o = t.pendingProps),
              (e = (function (e) {
                var t = e._result;
                switch (e._status) {
                  case 1:
                    return t;
                  case 2:
                  case 0:
                    throw t;
                  default:
                    switch (
                      ((e._status = 0),
                      (t = (t = e._ctor)()).then(
                        function (t) {
                          0 === e._status &&
                            ((t = t.default), (e._status = 1), (e._result = t));
                        },
                        function (t) {
                          0 === e._status && ((e._status = 2), (e._result = t));
                        }
                      ),
                      e._status)
                    ) {
                      case 1:
                        return e._result;
                      case 2:
                        throw e._result;
                    }
                    throw ((e._result = t), t);
                }
              })(i)),
              (t.type = e),
              (i = t.tag =
                (function (e) {
                  if ("function" === typeof e) return Yr(e) ? 1 : 0;
                  if (void 0 !== e && null !== e) {
                    if ((e = e.$$typeof) === tt) return 11;
                    if (e === rt) return 14;
                  }
                  return 2;
                })(e)),
              (o = ri(e, o)),
              (l = void 0),
              i)
            ) {
              case 0:
                l = Co(null, t, e, o, n);
                break;
              case 1:
                l = Oo(null, t, e, o, n);
                break;
              case 11:
                l = ko(null, t, e, o, n);
                break;
              case 14:
                l = To(null, t, e, ri(e.type, o), r, n);
                break;
              default:
                a("306", e, "");
            }
            return l;
          case 0:
            return (
              (r = t.type),
              (i = t.pendingProps),
              Co(e, t, r, (i = t.elementType === r ? i : ri(r, i)), n)
            );
          case 1:
            return (
              (r = t.type),
              (i = t.pendingProps),
              Oo(e, t, r, (i = t.elementType === r ? i : ri(r, i)), n)
            );
          case 3:
            return (
              Mo(t),
              null === (r = t.updateQueue) && a("282"),
              (i = null !== (i = t.memoizedState) ? i.element : null),
              na(t, r, t.pendingProps, null, n),
              (r = t.memoizedState.element) === i
                ? (wo(), (t = jo(e, t, n)))
                : ((i = t.stateNode),
                  (i = (null === e || null === e.child) && i.hydrate) &&
                    ((po = kr(t.stateNode.containerInfo)),
                    (fo = t),
                    (i = ho = !0)),
                  i
                    ? ((t.effectTag |= 2), (t.child = yi(t, null, r, n)))
                    : (Eo(e, t, r, n), wo()),
                  (t = t.child)),
              t
            );
          case 5:
            return (
              ki(t),
              null === e && go(t),
              (r = t.type),
              (i = t.pendingProps),
              (o = null !== e ? e.memoizedProps : null),
              (l = i.children),
              br(r, i)
                ? (l = null)
                : null !== o && br(r, o) && (t.effectTag |= 16),
              Ro(e, t),
              1 !== n && 1 & t.mode && i.hidden
                ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
                : (Eo(e, t, l, n), (t = t.child)),
              t
            );
          case 6:
            return null === e && go(t), null;
          case 13:
            return Ao(e, t, n);
          case 4:
            return (
              Si(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = mi(t, null, r, n)) : Eo(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (i = t.pendingProps),
              ko(e, t, r, (i = t.elementType === r ? i : ri(r, i)), n)
            );
          case 7:
            return Eo(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Eo(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              if (
                ((r = t.type._context),
                (i = t.pendingProps),
                (l = t.memoizedProps),
                Fo(t, (o = i.value)),
                null !== l)
              ) {
                var u = l.value;
                if (
                  0 ===
                  (o = Jt(u, o)
                    ? 0
                    : 0 |
                      ("function" === typeof r._calculateChangedBits
                        ? r._calculateChangedBits(u, o)
                        : 1073741823))
                ) {
                  if (l.children === i.children && !Mr.current) {
                    t = jo(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                    var s = u.contextDependencies;
                    if (null !== s) {
                      l = u.child;
                      for (var c = s.first; null !== c; ) {
                        if (c.context === r && 0 !== (c.observedBits & o)) {
                          1 === u.tag && (((c = Go(n)).tag = Vo), Jo(u, c)),
                            u.expirationTime < n && (u.expirationTime = n),
                            null !== (c = u.alternate) &&
                              c.expirationTime < n &&
                              (c.expirationTime = n),
                            (c = n);
                          for (var f = u.return; null !== f; ) {
                            var d = f.alternate;
                            if (f.childExpirationTime < c)
                              (f.childExpirationTime = c),
                                null !== d &&
                                  d.childExpirationTime < c &&
                                  (d.childExpirationTime = c);
                            else {
                              if (!(null !== d && d.childExpirationTime < c))
                                break;
                              d.childExpirationTime = c;
                            }
                            f = f.return;
                          }
                          s.expirationTime < n && (s.expirationTime = n);
                          break;
                        }
                        c = c.next;
                      }
                    } else
                      l = 10 === u.tag && u.type === t.type ? null : u.child;
                    if (null !== l) l.return = u;
                    else
                      for (l = u; null !== l; ) {
                        if (l === t) {
                          l = null;
                          break;
                        }
                        if (null !== (u = l.sibling)) {
                          (u.return = l.return), (l = u);
                          break;
                        }
                        l = l.return;
                      }
                    u = l;
                  }
              }
              Eo(e, t, i.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (i = t.type),
              (r = (o = t.pendingProps).children),
              zo(t, n),
              (r = r((i = Wo(i, o.unstable_observedBits)))),
              (t.effectTag |= 1),
              Eo(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (o = ri((i = t.type), t.pendingProps)),
              To(e, t, i, (o = ri(i.type, o)), r, n)
            );
          case 15:
            return xo(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (i = t.pendingProps),
              (i = t.elementType === r ? i : ri(r, i)),
              null !== e &&
                ((e.alternate = null),
                (t.alternate = null),
                (t.effectTag |= 2)),
              (t.tag = 1),
              Nr(r) ? ((e = !0), Fr(t)) : (e = !1),
              zo(t, n),
              ui(t, r, i),
              ci(t, r, i, n),
              Po(null, t, r, !0, e, n)
            );
        }
        a("156");
      }
      var Lo = { current: null },
        Do = null,
        Io = null,
        Uo = null;
      function Fo(e, t) {
        var n = e.type._context;
        Cr(Lo, n._currentValue), (n._currentValue = t);
      }
      function Bo(e) {
        var t = Lo.current;
        Rr(Lo), (e.type._context._currentValue = t);
      }
      function zo(e, t) {
        (Do = e), (Uo = Io = null);
        var n = e.contextDependencies;
        null !== n && n.expirationTime >= t && (So = !0),
          (e.contextDependencies = null);
      }
      function Wo(e, t) {
        return (
          Uo !== e &&
            !1 !== t &&
            0 !== t &&
            (("number" === typeof t && 1073741823 !== t) ||
              ((Uo = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === Io
              ? (null === Do && a("308"),
                (Io = t),
                (Do.contextDependencies = { first: t, expirationTime: 0 }))
              : (Io = Io.next = t)),
          e._currentValue
        );
      }
      var Ho = 0,
        qo = 1,
        Vo = 2,
        Yo = 3,
        $o = !1;
      function Ko(e) {
        return {
          baseState: e,
          firstUpdate: null,
          lastUpdate: null,
          firstCapturedUpdate: null,
          lastCapturedUpdate: null,
          firstEffect: null,
          lastEffect: null,
          firstCapturedEffect: null,
          lastCapturedEffect: null,
        };
      }
      function Qo(e) {
        return {
          baseState: e.baseState,
          firstUpdate: e.firstUpdate,
          lastUpdate: e.lastUpdate,
          firstCapturedUpdate: null,
          lastCapturedUpdate: null,
          firstEffect: null,
          lastEffect: null,
          firstCapturedEffect: null,
          lastCapturedEffect: null,
        };
      }
      function Go(e) {
        return {
          expirationTime: e,
          tag: Ho,
          payload: null,
          callback: null,
          next: null,
          nextEffect: null,
        };
      }
      function Xo(e, t) {
        null === e.lastUpdate
          ? (e.firstUpdate = e.lastUpdate = t)
          : ((e.lastUpdate.next = t), (e.lastUpdate = t));
      }
      function Jo(e, t) {
        var n = e.alternate;
        if (null === n) {
          var r = e.updateQueue,
            i = null;
          null === r && (r = e.updateQueue = Ko(e.memoizedState));
        } else
          (r = e.updateQueue),
            (i = n.updateQueue),
            null === r
              ? null === i
                ? ((r = e.updateQueue = Ko(e.memoizedState)),
                  (i = n.updateQueue = Ko(n.memoizedState)))
                : (r = e.updateQueue = Qo(i))
              : null === i && (i = n.updateQueue = Qo(r));
        null === i || r === i
          ? Xo(r, t)
          : null === r.lastUpdate || null === i.lastUpdate
          ? (Xo(r, t), Xo(i, t))
          : (Xo(r, t), (i.lastUpdate = t));
      }
      function Zo(e, t) {
        var n = e.updateQueue;
        null ===
        (n = null === n ? (e.updateQueue = Ko(e.memoizedState)) : ea(e, n))
          .lastCapturedUpdate
          ? (n.firstCapturedUpdate = n.lastCapturedUpdate = t)
          : ((n.lastCapturedUpdate.next = t), (n.lastCapturedUpdate = t));
      }
      function ea(e, t) {
        var n = e.alternate;
        return (
          null !== n && t === n.updateQueue && (t = e.updateQueue = Qo(t)), t
        );
      }
      function ta(e, t, n, r, o, a) {
        switch (n.tag) {
          case qo:
            return "function" === typeof (e = n.payload) ? e.call(a, r, o) : e;
          case Yo:
            e.effectTag = (-2049 & e.effectTag) | 64;
          case Ho:
            if (
              null ===
                (o =
                  "function" === typeof (e = n.payload)
                    ? e.call(a, r, o)
                    : e) ||
              void 0 === o
            )
              break;
            return i({}, r, o);
          case Vo:
            $o = !0;
        }
        return r;
      }
      function na(e, t, n, r, i) {
        $o = !1;
        for (
          var o = (t = ea(e, t)).baseState,
            a = null,
            l = 0,
            u = t.firstUpdate,
            s = o;
          null !== u;

        ) {
          var c = u.expirationTime;
          c < i
            ? (null === a && ((a = u), (o = s)), l < c && (l = c))
            : ((s = ta(e, 0, u, s, n, r)),
              null !== u.callback &&
                ((e.effectTag |= 32),
                (u.nextEffect = null),
                null === t.lastEffect
                  ? (t.firstEffect = t.lastEffect = u)
                  : ((t.lastEffect.nextEffect = u), (t.lastEffect = u)))),
            (u = u.next);
        }
        for (c = null, u = t.firstCapturedUpdate; null !== u; ) {
          var f = u.expirationTime;
          f < i
            ? (null === c && ((c = u), null === a && (o = s)), l < f && (l = f))
            : ((s = ta(e, 0, u, s, n, r)),
              null !== u.callback &&
                ((e.effectTag |= 32),
                (u.nextEffect = null),
                null === t.lastCapturedEffect
                  ? (t.firstCapturedEffect = t.lastCapturedEffect = u)
                  : ((t.lastCapturedEffect.nextEffect = u),
                    (t.lastCapturedEffect = u)))),
            (u = u.next);
        }
        null === a && (t.lastUpdate = null),
          null === c ? (t.lastCapturedUpdate = null) : (e.effectTag |= 32),
          null === a && null === c && (o = s),
          (t.baseState = o),
          (t.firstUpdate = a),
          (t.firstCapturedUpdate = c),
          (e.expirationTime = l),
          (e.memoizedState = s);
      }
      function ra(e, t, n) {
        null !== t.firstCapturedUpdate &&
          (null !== t.lastUpdate &&
            ((t.lastUpdate.next = t.firstCapturedUpdate),
            (t.lastUpdate = t.lastCapturedUpdate)),
          (t.firstCapturedUpdate = t.lastCapturedUpdate = null)),
          ia(t.firstEffect, n),
          (t.firstEffect = t.lastEffect = null),
          ia(t.firstCapturedEffect, n),
          (t.firstCapturedEffect = t.lastCapturedEffect = null);
      }
      function ia(e, t) {
        for (; null !== e; ) {
          var n = e.callback;
          if (null !== n) {
            e.callback = null;
            var r = t;
            "function" !== typeof n && a("191", n), n.call(r);
          }
          e = e.nextEffect;
        }
      }
      function oa(e, t) {
        return { value: e, source: t, stack: ut(t) };
      }
      function aa(e) {
        e.effectTag |= 4;
      }
      var la = void 0,
        ua = void 0,
        sa = void 0,
        ca = void 0;
      (la = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (ua = function () {}),
        (sa = function (e, t, n, r, o) {
          var a = e.memoizedProps;
          if (a !== r) {
            var l = t.stateNode;
            switch ((_i(bi.current), (e = null), n)) {
              case "input":
                (a = vt(l, a)), (r = vt(l, r)), (e = []);
                break;
              case "option":
                (a = $n(l, a)), (r = $n(l, r)), (e = []);
                break;
              case "select":
                (a = i({}, a, { value: void 0 })),
                  (r = i({}, r, { value: void 0 })),
                  (e = []);
                break;
              case "textarea":
                (a = Qn(l, a)), (r = Qn(l, r)), (e = []);
                break;
              default:
                "function" !== typeof a.onClick &&
                  "function" === typeof r.onClick &&
                  (l.onclick = hr);
            }
            fr(n, r), (l = n = void 0);
            var u = null;
            for (n in a)
              if (!r.hasOwnProperty(n) && a.hasOwnProperty(n) && null != a[n])
                if ("style" === n) {
                  var s = a[n];
                  for (l in s)
                    s.hasOwnProperty(l) && (u || (u = {}), (u[l] = ""));
                } else
                  "dangerouslySetInnerHTML" !== n &&
                    "children" !== n &&
                    "suppressContentEditableWarning" !== n &&
                    "suppressHydrationWarning" !== n &&
                    "autoFocus" !== n &&
                    (v.hasOwnProperty(n)
                      ? e || (e = [])
                      : (e = e || []).push(n, null));
            for (n in r) {
              var c = r[n];
              if (
                ((s = null != a ? a[n] : void 0),
                r.hasOwnProperty(n) && c !== s && (null != c || null != s))
              )
                if ("style" === n)
                  if (s) {
                    for (l in s)
                      !s.hasOwnProperty(l) ||
                        (c && c.hasOwnProperty(l)) ||
                        (u || (u = {}), (u[l] = ""));
                    for (l in c)
                      c.hasOwnProperty(l) &&
                        s[l] !== c[l] &&
                        (u || (u = {}), (u[l] = c[l]));
                  } else u || (e || (e = []), e.push(n, u)), (u = c);
                else
                  "dangerouslySetInnerHTML" === n
                    ? ((c = c ? c.__html : void 0),
                      (s = s ? s.__html : void 0),
                      null != c && s !== c && (e = e || []).push(n, "" + c))
                    : "children" === n
                    ? s === c ||
                      ("string" !== typeof c && "number" !== typeof c) ||
                      (e = e || []).push(n, "" + c)
                    : "suppressContentEditableWarning" !== n &&
                      "suppressHydrationWarning" !== n &&
                      (v.hasOwnProperty(n)
                        ? (null != c && pr(o, n), e || s === c || (e = []))
                        : (e = e || []).push(n, c));
            }
            u && (e = e || []).push("style", u),
              (o = e),
              (t.updateQueue = o) && aa(t);
          }
        }),
        (ca = function (e, t, n, r) {
          n !== r && aa(t);
        });
      var fa = "function" === typeof WeakSet ? WeakSet : Set;
      function da(e, t) {
        var n = t.source,
          r = t.stack;
        null === r && null !== n && (r = ut(n)),
          null !== n && lt(n.type),
          (t = t.value),
          null !== e && 1 === e.tag && lt(e.type);
        try {
          console.error(t);
        } catch (i) {
          setTimeout(function () {
            throw i;
          });
        }
      }
      function pa(e) {
        var t = e.ref;
        if (null !== t)
          if ("function" === typeof t)
            try {
              t(null);
            } catch (n) {
              Ka(e, n);
            }
          else t.current = null;
      }
      function ha(e, t, n) {
        if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
          var r = (n = n.next);
          do {
            if ((r.tag & e) !== xi) {
              var i = r.destroy;
              (r.destroy = void 0), void 0 !== i && i();
            }
            (r.tag & t) !== xi && ((i = r.create), (r.destroy = i())),
              (r = r.next);
          } while (r !== n);
        }
      }
      function ma(e) {
        switch (("function" === typeof Wr && Wr(e), e.tag)) {
          case 0:
          case 11:
          case 14:
          case 15:
            var t = e.updateQueue;
            if (null !== t && null !== (t = t.lastEffect)) {
              var n = (t = t.next);
              do {
                var r = n.destroy;
                if (void 0 !== r) {
                  var i = e;
                  try {
                    r();
                  } catch (o) {
                    Ka(i, o);
                  }
                }
                n = n.next;
              } while (n !== t);
            }
            break;
          case 1:
            if (
              (pa(e),
              "function" === typeof (t = e.stateNode).componentWillUnmount)
            )
              try {
                (t.props = e.memoizedProps),
                  (t.state = e.memoizedState),
                  t.componentWillUnmount();
              } catch (o) {
                Ka(e, o);
              }
            break;
          case 5:
            pa(e);
            break;
          case 4:
            ba(e);
        }
      }
      function ya(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function ga(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (ya(t)) {
              var n = t;
              break e;
            }
            t = t.return;
          }
          a("160"), (n = void 0);
        }
        var r = (t = void 0);
        switch (n.tag) {
          case 5:
            (t = n.stateNode), (r = !1);
            break;
          case 3:
          case 4:
            (t = n.stateNode.containerInfo), (r = !0);
            break;
          default:
            a("161");
        }
        16 & n.effectTag && (or(t, ""), (n.effectTag &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || ya(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (
            n.sibling.return = n.return, n = n.sibling;
            5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

          ) {
            if (2 & n.effectTag) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.effectTag)) {
            n = n.stateNode;
            break e;
          }
        }
        for (var i = e; ; ) {
          if (5 === i.tag || 6 === i.tag)
            if (n)
              if (r) {
                var o = t,
                  l = i.stateNode,
                  u = n;
                8 === o.nodeType
                  ? o.parentNode.insertBefore(l, u)
                  : o.insertBefore(l, u);
              } else t.insertBefore(i.stateNode, n);
            else
              r
                ? ((l = t),
                  (u = i.stateNode),
                  8 === l.nodeType
                    ? (o = l.parentNode).insertBefore(u, l)
                    : (o = l).appendChild(u),
                  (null !== (l = l._reactRootContainer) && void 0 !== l) ||
                    null !== o.onclick ||
                    (o.onclick = hr))
                : t.appendChild(i.stateNode);
          else if (4 !== i.tag && null !== i.child) {
            (i.child.return = i), (i = i.child);
            continue;
          }
          if (i === e) break;
          for (; null === i.sibling; ) {
            if (null === i.return || i.return === e) return;
            i = i.return;
          }
          (i.sibling.return = i.return), (i = i.sibling);
        }
      }
      function ba(e) {
        for (var t = e, n = !1, r = void 0, i = void 0; ; ) {
          if (!n) {
            n = t.return;
            e: for (;;) {
              switch ((null === n && a("160"), n.tag)) {
                case 5:
                  (r = n.stateNode), (i = !1);
                  break e;
                case 3:
                case 4:
                  (r = n.stateNode.containerInfo), (i = !0);
                  break e;
              }
              n = n.return;
            }
            n = !0;
          }
          if (5 === t.tag || 6 === t.tag) {
            e: for (var o = t, l = o; ; )
              if ((ma(l), null !== l.child && 4 !== l.tag))
                (l.child.return = l), (l = l.child);
              else {
                if (l === o) break;
                for (; null === l.sibling; ) {
                  if (null === l.return || l.return === o) break e;
                  l = l.return;
                }
                (l.sibling.return = l.return), (l = l.sibling);
              }
            i
              ? ((o = r),
                (l = t.stateNode),
                8 === o.nodeType
                  ? o.parentNode.removeChild(l)
                  : o.removeChild(l))
              : r.removeChild(t.stateNode);
          } else if (4 === t.tag) {
            if (null !== t.child) {
              (r = t.stateNode.containerInfo),
                (i = !0),
                (t.child.return = t),
                (t = t.child);
              continue;
            }
          } else if ((ma(t), null !== t.child)) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return;
            4 === (t = t.return).tag && (n = !1);
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      function va(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ha(Ci, Oi, t);
            break;
          case 1:
            break;
          case 5:
            var n = t.stateNode;
            if (null != n) {
              var r = t.memoizedProps;
              e = null !== e ? e.memoizedProps : r;
              var i = t.type,
                o = t.updateQueue;
              (t.updateQueue = null),
                null !== o &&
                  (function (e, t, n, r, i) {
                    (e[N] = i),
                      "input" === n &&
                        "radio" === i.type &&
                        null != i.name &&
                        _t(e, i),
                      dr(n, r),
                      (r = dr(n, i));
                    for (var o = 0; o < t.length; o += 2) {
                      var a = t[o],
                        l = t[o + 1];
                      "style" === a
                        ? sr(e, l)
                        : "dangerouslySetInnerHTML" === a
                        ? ir(e, l)
                        : "children" === a
                        ? or(e, l)
                        : gt(e, a, l, r);
                    }
                    switch (n) {
                      case "input":
                        St(e, i);
                        break;
                      case "textarea":
                        Xn(e, i);
                        break;
                      case "select":
                        (t = e._wrapperState.wasMultiple),
                          (e._wrapperState.wasMultiple = !!i.multiple),
                          null != (n = i.value)
                            ? Kn(e, !!i.multiple, n, !1)
                            : t !== !!i.multiple &&
                              (null != i.defaultValue
                                ? Kn(e, !!i.multiple, i.defaultValue, !0)
                                : Kn(
                                    e,
                                    !!i.multiple,
                                    i.multiple ? [] : "",
                                    !1
                                  ));
                    }
                  })(n, o, i, e, r);
            }
            break;
          case 6:
            null === t.stateNode && a("162"),
              (t.stateNode.nodeValue = t.memoizedProps);
            break;
          case 3:
          case 12:
            break;
          case 13:
            if (
              ((n = t.memoizedState),
              (r = void 0),
              (e = t),
              null === n
                ? (r = !1)
                : ((r = !0),
                  (e = t.child),
                  0 === n.timedOutAt && (n.timedOutAt = Sl())),
              null !== e &&
                (function (e, t) {
                  for (var n = e; ; ) {
                    if (5 === n.tag) {
                      var r = n.stateNode;
                      if (t) r.style.display = "none";
                      else {
                        r = n.stateNode;
                        var i = n.memoizedProps.style;
                        (i =
                          void 0 !== i &&
                          null !== i &&
                          i.hasOwnProperty("display")
                            ? i.display
                            : null),
                          (r.style.display = ur("display", i));
                      }
                    } else if (6 === n.tag)
                      n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                    else {
                      if (13 === n.tag && null !== n.memoizedState) {
                        ((r = n.child.sibling).return = n), (n = r);
                        continue;
                      }
                      if (null !== n.child) {
                        (n.child.return = n), (n = n.child);
                        continue;
                      }
                    }
                    if (n === e) break;
                    for (; null === n.sibling; ) {
                      if (null === n.return || n.return === e) return;
                      n = n.return;
                    }
                    (n.sibling.return = n.return), (n = n.sibling);
                  }
                })(e, r),
              null !== (n = t.updateQueue))
            ) {
              t.updateQueue = null;
              var l = t.stateNode;
              null === l && (l = t.stateNode = new fa()),
                n.forEach(function (e) {
                  var n = function (e, t) {
                    var n = e.stateNode;
                    null !== n && n.delete(t),
                      (t = Qa((t = Sl()), e)),
                      null !== (e = Xa(e, t)) &&
                        (Zr(e, t), 0 !== (t = e.expirationTime) && El(e, t));
                  }.bind(null, t, e);
                  l.has(e) || (l.add(e), e.then(n, n));
                });
            }
            break;
          case 17:
            break;
          default:
            a("163");
        }
      }
      var wa = "function" === typeof WeakMap ? WeakMap : Map;
      function _a(e, t, n) {
        ((n = Go(n)).tag = Yo), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            Al(r), da(e, t);
          }),
          n
        );
      }
      function Sa(e, t, n) {
        (n = Go(n)).tag = Yo;
        var r = e.type.getDerivedStateFromError;
        if ("function" === typeof r) {
          var i = t.value;
          n.payload = function () {
            return r(i);
          };
        }
        var o = e.stateNode;
        return (
          null !== o &&
            "function" === typeof o.componentDidCatch &&
            (n.callback = function () {
              "function" !== typeof r &&
                (null === Ua ? (Ua = new Set([this])) : Ua.add(this));
              var n = t.value,
                i = t.stack;
              da(e, t),
                this.componentDidCatch(n, {
                  componentStack: null !== i ? i : "",
                });
            }),
          n
        );
      }
      function Ea(e) {
        switch (e.tag) {
          case 1:
            Nr(e.type) && Lr();
            var t = e.effectTag;
            return 2048 & t ? ((e.effectTag = (-2049 & t) | 64), e) : null;
          case 3:
            return (
              Ei(),
              Dr(),
              0 !== (64 & (t = e.effectTag)) && a("285"),
              (e.effectTag = (-2049 & t) | 64),
              e
            );
          case 5:
            return Ti(e), null;
          case 13:
            return 2048 & (t = e.effectTag)
              ? ((e.effectTag = (-2049 & t) | 64), e)
              : null;
          case 18:
            return null;
          case 4:
            return Ei(), null;
          case 10:
            return Bo(e), null;
          default:
            return null;
        }
      }
      var ka = qe.ReactCurrentDispatcher,
        Ta = qe.ReactCurrentOwner,
        xa = 1073741822,
        Ra = !1,
        Ca = null,
        Oa = null,
        Pa = 0,
        Ma = -1,
        Aa = !1,
        ja = null,
        Na = !1,
        La = null,
        Da = null,
        Ia = null,
        Ua = null;
      function Fa() {
        if (null !== Ca)
          for (var e = Ca.return; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 1:
                var n = t.type.childContextTypes;
                null !== n && void 0 !== n && Lr();
                break;
              case 3:
                Ei(), Dr();
                break;
              case 5:
                Ti(t);
                break;
              case 4:
                Ei();
                break;
              case 10:
                Bo(t);
            }
            e = e.return;
          }
        (Oa = null), (Pa = 0), (Ma = -1), (Aa = !1), (Ca = null);
      }
      function Ba() {
        for (; null !== ja; ) {
          var e = ja.effectTag;
          if ((16 & e && or(ja.stateNode, ""), 128 & e)) {
            var t = ja.alternate;
            null !== t &&
              null !== (t = t.ref) &&
              ("function" === typeof t ? t(null) : (t.current = null));
          }
          switch (14 & e) {
            case 2:
              ga(ja), (ja.effectTag &= -3);
              break;
            case 6:
              ga(ja), (ja.effectTag &= -3), va(ja.alternate, ja);
              break;
            case 4:
              va(ja.alternate, ja);
              break;
            case 8:
              ba((e = ja)),
                (e.return = null),
                (e.child = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                null !== (e = e.alternate) &&
                  ((e.return = null),
                  (e.child = null),
                  (e.memoizedState = null),
                  (e.updateQueue = null));
          }
          ja = ja.nextEffect;
        }
      }
      function za() {
        for (; null !== ja; ) {
          if (256 & ja.effectTag)
            e: {
              var e = ja.alternate,
                t = ja;
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  ha(Ri, xi, t);
                  break e;
                case 1:
                  if (256 & t.effectTag && null !== e) {
                    var n = e.memoizedProps,
                      r = e.memoizedState;
                    (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                      t.elementType === t.type ? n : ri(t.type, n),
                      r
                    )),
                      (e.__reactInternalSnapshotBeforeUpdate = t);
                  }
                  break e;
                case 3:
                case 5:
                case 6:
                case 4:
                case 17:
                  break e;
                default:
                  a("163");
              }
            }
          ja = ja.nextEffect;
        }
      }
      function Wa(e, t) {
        for (; null !== ja; ) {
          var n = ja.effectTag;
          if (36 & n) {
            var r = ja.alternate,
              i = ja,
              o = t;
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                ha(Pi, Mi, i);
                break;
              case 1:
                var l = i.stateNode;
                if (4 & i.effectTag)
                  if (null === r) l.componentDidMount();
                  else {
                    var u =
                      i.elementType === i.type
                        ? r.memoizedProps
                        : ri(i.type, r.memoizedProps);
                    l.componentDidUpdate(
                      u,
                      r.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                null !== (r = i.updateQueue) && ra(0, r, l);
                break;
              case 3:
                if (null !== (r = i.updateQueue)) {
                  if (((l = null), null !== i.child))
                    switch (i.child.tag) {
                      case 5:
                        l = i.child.stateNode;
                        break;
                      case 1:
                        l = i.child.stateNode;
                    }
                  ra(0, r, l);
                }
                break;
              case 5:
                (o = i.stateNode),
                  null === r &&
                    4 & i.effectTag &&
                    gr(i.type, i.memoizedProps) &&
                    o.focus();
                break;
              case 6:
              case 4:
              case 12:
              case 13:
              case 17:
                break;
              default:
                a("163");
            }
          }
          128 & n &&
            null !== (i = ja.ref) &&
            ((o = ja.stateNode),
            "function" === typeof i ? i(o) : (i.current = o)),
            512 & n && (La = e),
            (ja = ja.nextEffect);
        }
      }
      function Ha() {
        null !== Da && Sr(Da), null !== Ia && Ia();
      }
      function qa(e, t) {
        (Na = Ra = !0), e.current === t && a("177");
        var n = e.pendingCommitExpirationTime;
        0 === n && a("261"), (e.pendingCommitExpirationTime = 0);
        var r = t.expirationTime,
          i = t.childExpirationTime;
        for (
          (function (e, t) {
            if (((e.didError = !1), 0 === t))
              (e.earliestPendingTime = 0),
                (e.latestPendingTime = 0),
                (e.earliestSuspendedTime = 0),
                (e.latestSuspendedTime = 0),
                (e.latestPingedTime = 0);
            else {
              t < e.latestPingedTime && (e.latestPingedTime = 0);
              var n = e.latestPendingTime;
              0 !== n &&
                (n > t
                  ? (e.earliestPendingTime = e.latestPendingTime = 0)
                  : e.earliestPendingTime > t &&
                    (e.earliestPendingTime = e.latestPendingTime)),
                0 === (n = e.earliestSuspendedTime)
                  ? Zr(e, t)
                  : t < e.latestSuspendedTime
                  ? ((e.earliestSuspendedTime = 0),
                    (e.latestSuspendedTime = 0),
                    (e.latestPingedTime = 0),
                    Zr(e, t))
                  : t > n && Zr(e, t);
            }
            ni(0, e);
          })(e, i > r ? i : r),
            Ta.current = null,
            r = void 0,
            1 < t.effectTag
              ? null !== t.lastEffect
                ? ((t.lastEffect.nextEffect = t), (r = t.firstEffect))
                : (r = t)
              : (r = t.firstEffect),
            mr = kn,
            yr = (function () {
              var e = Dn();
              if (In(e)) {
                if (("selectionStart" in e))
                  var t = { start: e.selectionStart, end: e.selectionEnd };
                else
                  e: {
                    var n =
                      (t = ((t = e.ownerDocument) && t.defaultView) || window)
                        .getSelection && t.getSelection();
                    if (n && 0 !== n.rangeCount) {
                      t = n.anchorNode;
                      var r = n.anchorOffset,
                        i = n.focusNode;
                      n = n.focusOffset;
                      try {
                        t.nodeType, i.nodeType;
                      } catch (p) {
                        t = null;
                        break e;
                      }
                      var o = 0,
                        a = -1,
                        l = -1,
                        u = 0,
                        s = 0,
                        c = e,
                        f = null;
                      t: for (;;) {
                        for (
                          var d;
                          c !== t ||
                            (0 !== r && 3 !== c.nodeType) ||
                            (a = o + r),
                            c !== i ||
                              (0 !== n && 3 !== c.nodeType) ||
                              (l = o + n),
                            3 === c.nodeType && (o += c.nodeValue.length),
                            null !== (d = c.firstChild);

                        )
                          (f = c), (c = d);
                        for (;;) {
                          if (c === e) break t;
                          if (
                            (f === t && ++u === r && (a = o),
                            f === i && ++s === n && (l = o),
                            null !== (d = c.nextSibling))
                          )
                            break;
                          f = (c = f).parentNode;
                        }
                        c = d;
                      }
                      t = -1 === a || -1 === l ? null : { start: a, end: l };
                    } else t = null;
                  }
                t = t || { start: 0, end: 0 };
              } else t = null;
              return { focusedElem: e, selectionRange: t };
            })(),
            kn = !1,
            ja = r;
          null !== ja;

        ) {
          i = !1;
          var l = void 0;
          try {
            za();
          } catch (s) {
            (i = !0), (l = s);
          }
          i &&
            (null === ja && a("178"),
            Ka(ja, l),
            null !== ja && (ja = ja.nextEffect));
        }
        for (ja = r; null !== ja; ) {
          (i = !1), (l = void 0);
          try {
            Ba();
          } catch (s) {
            (i = !0), (l = s);
          }
          i &&
            (null === ja && a("178"),
            Ka(ja, l),
            null !== ja && (ja = ja.nextEffect));
        }
        for (
          Un(yr), yr = null, kn = !!mr, mr = null, e.current = t, ja = r;
          null !== ja;

        ) {
          (i = !1), (l = void 0);
          try {
            Wa(e, n);
          } catch (s) {
            (i = !0), (l = s);
          }
          i &&
            (null === ja && a("178"),
            Ka(ja, l),
            null !== ja && (ja = ja.nextEffect));
        }
        if (null !== r && null !== La) {
          var u = function (e, t) {
            Ia = Da = La = null;
            var n = il;
            il = !0;
            do {
              if (512 & t.effectTag) {
                var r = !1,
                  i = void 0;
                try {
                  var o = t;
                  ha(ji, xi, o), ha(xi, Ai, o);
                } catch (u) {
                  (r = !0), (i = u);
                }
                r && Ka(t, i);
              }
              t = t.nextEffect;
            } while (null !== t);
            (il = n),
              0 !== (n = e.expirationTime) && El(e, n),
              cl || il || Cl(1073741823, !1);
          }.bind(null, e, r);
          (Da = o.unstable_runWithPriority(
            o.unstable_NormalPriority,
            function () {
              return _r(u);
            }
          )),
            (Ia = u);
        }
        (Ra = Na = !1),
          "function" === typeof zr && zr(t.stateNode),
          (n = t.expirationTime),
          0 === (t = (t = t.childExpirationTime) > n ? t : n) && (Ua = null),
          (function (e, t) {
            (e.expirationTime = t), (e.finishedWork = null);
          })(e, t);
      }
      function Va(e) {
        for (;;) {
          var t = e.alternate,
            n = e.return,
            r = e.sibling;
          if (0 === (1024 & e.effectTag)) {
            Ca = e;
            e: {
              var o = t,
                l = Pa,
                u = (t = e).pendingProps;
              switch (t.tag) {
                case 2:
                case 16:
                  break;
                case 15:
                case 0:
                  break;
                case 1:
                  Nr(t.type) && Lr();
                  break;
                case 3:
                  Ei(),
                    Dr(),
                    (u = t.stateNode).pendingContext &&
                      ((u.context = u.pendingContext),
                      (u.pendingContext = null)),
                    (null !== o && null !== o.child) ||
                      (vo(t), (t.effectTag &= -3)),
                    ua(t);
                  break;
                case 5:
                  Ti(t);
                  var s = _i(wi.current);
                  if (((l = t.type), null !== o && null != t.stateNode))
                    sa(o, t, l, u, s), o.ref !== t.ref && (t.effectTag |= 128);
                  else if (u) {
                    var c = _i(bi.current);
                    if (vo(t)) {
                      o = (u = t).stateNode;
                      var f = u.type,
                        d = u.memoizedProps,
                        p = s;
                      switch (((o[j] = u), (o[N] = d), (l = void 0), (s = f))) {
                        case "iframe":
                        case "object":
                          Tn("load", o);
                          break;
                        case "video":
                        case "audio":
                          for (f = 0; f < te.length; f++) Tn(te[f], o);
                          break;
                        case "source":
                          Tn("error", o);
                          break;
                        case "img":
                        case "image":
                        case "link":
                          Tn("error", o), Tn("load", o);
                          break;
                        case "form":
                          Tn("reset", o), Tn("submit", o);
                          break;
                        case "details":
                          Tn("toggle", o);
                          break;
                        case "input":
                          wt(o, d), Tn("invalid", o), pr(p, "onChange");
                          break;
                        case "select":
                          (o._wrapperState = { wasMultiple: !!d.multiple }),
                            Tn("invalid", o),
                            pr(p, "onChange");
                          break;
                        case "textarea":
                          Gn(o, d), Tn("invalid", o), pr(p, "onChange");
                      }
                      for (l in (fr(s, d), (f = null), d))
                        d.hasOwnProperty(l) &&
                          ((c = d[l]),
                          "children" === l
                            ? "string" === typeof c
                              ? o.textContent !== c && (f = ["children", c])
                              : "number" === typeof c &&
                                o.textContent !== "" + c &&
                                (f = ["children", "" + c])
                            : v.hasOwnProperty(l) && null != c && pr(p, l));
                      switch (s) {
                        case "input":
                          We(o), Et(o, d, !0);
                          break;
                        case "textarea":
                          We(o), Jn(o);
                          break;
                        case "select":
                        case "option":
                          break;
                        default:
                          "function" === typeof d.onClick && (o.onclick = hr);
                      }
                      (l = f), (u.updateQueue = l), (u = null !== l) && aa(t);
                    } else {
                      (d = t),
                        (p = l),
                        (o = u),
                        (f = 9 === s.nodeType ? s : s.ownerDocument),
                        c === Zn.html && (c = er(p)),
                        c === Zn.html
                          ? "script" === p
                            ? (((o = f.createElement("div")).innerHTML =
                                "<script></script>"),
                              (f = o.removeChild(o.firstChild)))
                            : "string" === typeof o.is
                            ? (f = f.createElement(p, { is: o.is }))
                            : ((f = f.createElement(p)),
                              "select" === p &&
                                ((p = f),
                                o.multiple
                                  ? (p.multiple = !0)
                                  : o.size && (p.size = o.size)))
                          : (f = f.createElementNS(c, p)),
                        ((o = f)[j] = d),
                        (o[N] = u),
                        la(o, t, !1, !1),
                        (p = o);
                      var h = s,
                        m = dr((f = l), (d = u));
                      switch (f) {
                        case "iframe":
                        case "object":
                          Tn("load", p), (s = d);
                          break;
                        case "video":
                        case "audio":
                          for (s = 0; s < te.length; s++) Tn(te[s], p);
                          s = d;
                          break;
                        case "source":
                          Tn("error", p), (s = d);
                          break;
                        case "img":
                        case "image":
                        case "link":
                          Tn("error", p), Tn("load", p), (s = d);
                          break;
                        case "form":
                          Tn("reset", p), Tn("submit", p), (s = d);
                          break;
                        case "details":
                          Tn("toggle", p), (s = d);
                          break;
                        case "input":
                          wt(p, d),
                            (s = vt(p, d)),
                            Tn("invalid", p),
                            pr(h, "onChange");
                          break;
                        case "option":
                          s = $n(p, d);
                          break;
                        case "select":
                          (p._wrapperState = { wasMultiple: !!d.multiple }),
                            (s = i({}, d, { value: void 0 })),
                            Tn("invalid", p),
                            pr(h, "onChange");
                          break;
                        case "textarea":
                          Gn(p, d),
                            (s = Qn(p, d)),
                            Tn("invalid", p),
                            pr(h, "onChange");
                          break;
                        default:
                          s = d;
                      }
                      fr(f, s), (c = void 0);
                      var y = f,
                        g = p,
                        b = s;
                      for (c in b)
                        if (b.hasOwnProperty(c)) {
                          var w = b[c];
                          "style" === c
                            ? sr(g, w)
                            : "dangerouslySetInnerHTML" === c
                            ? null != (w = w ? w.__html : void 0) && ir(g, w)
                            : "children" === c
                            ? "string" === typeof w
                              ? ("textarea" !== y || "" !== w) && or(g, w)
                              : "number" === typeof w && or(g, "" + w)
                            : "suppressContentEditableWarning" !== c &&
                              "suppressHydrationWarning" !== c &&
                              "autoFocus" !== c &&
                              (v.hasOwnProperty(c)
                                ? null != w && pr(h, c)
                                : null != w && gt(g, c, w, m));
                        }
                      switch (f) {
                        case "input":
                          We(p), Et(p, d, !1);
                          break;
                        case "textarea":
                          We(p), Jn(p);
                          break;
                        case "option":
                          null != d.value &&
                            p.setAttribute("value", "" + bt(d.value));
                          break;
                        case "select":
                          ((s = p).multiple = !!d.multiple),
                            null != (p = d.value)
                              ? Kn(s, !!d.multiple, p, !1)
                              : null != d.defaultValue &&
                                Kn(s, !!d.multiple, d.defaultValue, !0);
                          break;
                        default:
                          "function" === typeof s.onClick && (p.onclick = hr);
                      }
                      (u = gr(l, u)) && aa(t), (t.stateNode = o);
                    }
                    null !== t.ref && (t.effectTag |= 128);
                  } else null === t.stateNode && a("166");
                  break;
                case 6:
                  o && null != t.stateNode
                    ? ca(o, t, o.memoizedProps, u)
                    : ("string" !== typeof u &&
                        null === t.stateNode &&
                        a("166"),
                      (o = _i(wi.current)),
                      _i(bi.current),
                      vo(t)
                        ? ((l = (u = t).stateNode),
                          (o = u.memoizedProps),
                          (l[j] = u),
                          (u = l.nodeValue !== o) && aa(t))
                        : ((l = t),
                          ((u = (
                            9 === o.nodeType ? o : o.ownerDocument
                          ).createTextNode(u))[j] = t),
                          (l.stateNode = u)));
                  break;
                case 11:
                  break;
                case 13:
                  if (((u = t.memoizedState), 0 !== (64 & t.effectTag))) {
                    (t.expirationTime = l), (Ca = t);
                    break e;
                  }
                  (u = null !== u),
                    (l = null !== o && null !== o.memoizedState),
                    null !== o &&
                      !u &&
                      l &&
                      null !== (o = o.child.sibling) &&
                      (null !== (s = t.firstEffect)
                        ? ((t.firstEffect = o), (o.nextEffect = s))
                        : ((t.firstEffect = t.lastEffect = o),
                          (o.nextEffect = null)),
                      (o.effectTag = 8)),
                    (u || l) && (t.effectTag |= 4);
                  break;
                case 7:
                case 8:
                case 12:
                  break;
                case 4:
                  Ei(), ua(t);
                  break;
                case 10:
                  Bo(t);
                  break;
                case 9:
                case 14:
                  break;
                case 17:
                  Nr(t.type) && Lr();
                  break;
                case 18:
                  break;
                default:
                  a("156");
              }
              Ca = null;
            }
            if (((t = e), 1 === Pa || 1 !== t.childExpirationTime)) {
              for (u = 0, l = t.child; null !== l; )
                (o = l.expirationTime) > u && (u = o),
                  (s = l.childExpirationTime) > u && (u = s),
                  (l = l.sibling);
              t.childExpirationTime = u;
            }
            if (null !== Ca) return Ca;
            null !== n &&
              0 === (1024 & n.effectTag) &&
              (null === n.firstEffect && (n.firstEffect = e.firstEffect),
              null !== e.lastEffect &&
                (null !== n.lastEffect &&
                  (n.lastEffect.nextEffect = e.firstEffect),
                (n.lastEffect = e.lastEffect)),
              1 < e.effectTag &&
                (null !== n.lastEffect
                  ? (n.lastEffect.nextEffect = e)
                  : (n.firstEffect = e),
                (n.lastEffect = e)));
          } else {
            if (null !== (e = Ea(e))) return (e.effectTag &= 1023), e;
            null !== n &&
              ((n.firstEffect = n.lastEffect = null), (n.effectTag |= 1024));
          }
          if (null !== r) return r;
          if (null === n) break;
          e = n;
        }
        return null;
      }
      function Ya(e) {
        var t = No(e.alternate, e, Pa);
        return (
          (e.memoizedProps = e.pendingProps),
          null === t && (t = Va(e)),
          (Ta.current = null),
          t
        );
      }
      function $a(e, t) {
        Ra && a("243"), Ha(), (Ra = !0);
        var n = ka.current;
        ka.current = uo;
        var r = e.nextExpirationTimeToWorkOn;
        (r === Pa && e === Oa && null !== Ca) ||
          (Fa(),
          (Pa = r),
          (Ca = $r((Oa = e).current, null)),
          (e.pendingCommitExpirationTime = 0));
        for (var i = !1; ; ) {
          try {
            if (t) for (; null !== Ca && !xl(); ) Ca = Ya(Ca);
            else for (; null !== Ca; ) Ca = Ya(Ca);
          } catch (g) {
            if (((Uo = Io = Do = null), Xi(), null === Ca)) (i = !0), Al(g);
            else {
              null === Ca && a("271");
              var o = Ca,
                l = o.return;
              if (null !== l) {
                e: {
                  var u = e,
                    s = l,
                    c = o,
                    f = g;
                  if (
                    ((l = Pa),
                    (c.effectTag |= 1024),
                    (c.firstEffect = c.lastEffect = null),
                    null !== f &&
                      "object" === typeof f &&
                      "function" === typeof f.then)
                  ) {
                    var d = f;
                    f = s;
                    var p = -1,
                      h = -1;
                    do {
                      if (13 === f.tag) {
                        var m = f.alternate;
                        if (null !== m && null !== (m = m.memoizedState)) {
                          h = 10 * (1073741822 - m.timedOutAt);
                          break;
                        }
                        "number" === typeof (m = f.pendingProps.maxDuration) &&
                          (0 >= m ? (p = 0) : (-1 === p || m < p) && (p = m));
                      }
                      f = f.return;
                    } while (null !== f);
                    f = s;
                    do {
                      if (
                        ((m = 13 === f.tag) &&
                          (m =
                            void 0 !== f.memoizedProps.fallback &&
                            null === f.memoizedState),
                        m)
                      ) {
                        if (
                          (null === (s = f.updateQueue)
                            ? ((s = new Set()).add(d), (f.updateQueue = s))
                            : s.add(d),
                          0 === (1 & f.mode))
                        ) {
                          (f.effectTag |= 64),
                            (c.effectTag &= -1957),
                            1 === c.tag &&
                              (null === c.alternate
                                ? (c.tag = 17)
                                : (((l = Go(1073741823)).tag = Vo), Jo(c, l))),
                            (c.expirationTime = 1073741823);
                          break e;
                        }
                        s = l;
                        var y = (c = u).pingCache;
                        null === y
                          ? ((y = c.pingCache = new wa()),
                            (m = new Set()),
                            y.set(d, m))
                          : void 0 === (m = y.get(d)) &&
                            ((m = new Set()), y.set(d, m)),
                          m.has(s) ||
                            (m.add(s),
                            (c = Ga.bind(null, c, d, s)),
                            d.then(c, c)),
                          -1 === p
                            ? (u = 1073741823)
                            : (-1 === h &&
                                (h = 10 * (1073741822 - ti(u, l)) - 5e3),
                              (u = h + p)),
                          0 <= u && Ma < u && (Ma = u),
                          (f.effectTag |= 2048),
                          (f.expirationTime = l);
                        break e;
                      }
                      f = f.return;
                    } while (null !== f);
                    f = Error(
                      (lt(c.type) || "A React component") +
                        " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                        ut(c)
                    );
                  }
                  (Aa = !0), (f = oa(f, c)), (u = s);
                  do {
                    switch (u.tag) {
                      case 3:
                        (u.effectTag |= 2048),
                          (u.expirationTime = l),
                          Zo(u, (l = _a(u, f, l)));
                        break e;
                      case 1:
                        if (
                          ((p = f),
                          (h = u.type),
                          (c = u.stateNode),
                          0 === (64 & u.effectTag) &&
                            ("function" === typeof h.getDerivedStateFromError ||
                              (null !== c &&
                                "function" === typeof c.componentDidCatch &&
                                (null === Ua || !Ua.has(c)))))
                        ) {
                          (u.effectTag |= 2048),
                            (u.expirationTime = l),
                            Zo(u, (l = Sa(u, p, l)));
                          break e;
                        }
                    }
                    u = u.return;
                  } while (null !== u);
                }
                Ca = Va(o);
                continue;
              }
              (i = !0), Al(g);
            }
          }
          break;
        }
        if (((Ra = !1), (ka.current = n), (Uo = Io = Do = null), Xi(), i))
          (Oa = null), (e.finishedWork = null);
        else if (null !== Ca) e.finishedWork = null;
        else {
          if (
            (null === (n = e.current.alternate) && a("281"), (Oa = null), Aa)
          ) {
            if (
              ((i = e.latestPendingTime),
              (o = e.latestSuspendedTime),
              (l = e.latestPingedTime),
              (0 !== i && i < r) || (0 !== o && o < r) || (0 !== l && l < r))
            )
              return ei(e, r), void _l(e, n, r, e.expirationTime, -1);
            if (!e.didError && t)
              return (
                (e.didError = !0),
                (r = e.nextExpirationTimeToWorkOn = r),
                (t = e.expirationTime = 1073741823),
                void _l(e, n, r, t, -1)
              );
          }
          t && -1 !== Ma
            ? (ei(e, r),
              (t = 10 * (1073741822 - ti(e, r))) < Ma && (Ma = t),
              (t = 10 * (1073741822 - Sl())),
              (t = Ma - t),
              _l(e, n, r, e.expirationTime, 0 > t ? 0 : t))
            : ((e.pendingCommitExpirationTime = r), (e.finishedWork = n));
        }
      }
      function Ka(e, t) {
        for (var n = e.return; null !== n; ) {
          switch (n.tag) {
            case 1:
              var r = n.stateNode;
              if (
                "function" === typeof n.type.getDerivedStateFromError ||
                ("function" === typeof r.componentDidCatch &&
                  (null === Ua || !Ua.has(r)))
              )
                return (
                  Jo(n, (e = Sa(n, (e = oa(t, e)), 1073741823))),
                  void Ja(n, 1073741823)
                );
              break;
            case 3:
              return (
                Jo(n, (e = _a(n, (e = oa(t, e)), 1073741823))),
                void Ja(n, 1073741823)
              );
          }
          n = n.return;
        }
        3 === e.tag &&
          (Jo(e, (n = _a(e, (n = oa(t, e)), 1073741823))), Ja(e, 1073741823));
      }
      function Qa(e, t) {
        var n = o.unstable_getCurrentPriorityLevel(),
          r = void 0;
        if (0 === (1 & t.mode)) r = 1073741823;
        else if (Ra && !Na) r = Pa;
        else {
          switch (n) {
            case o.unstable_ImmediatePriority:
              r = 1073741823;
              break;
            case o.unstable_UserBlockingPriority:
              r = 1073741822 - 10 * (1 + (((1073741822 - e + 15) / 10) | 0));
              break;
            case o.unstable_NormalPriority:
              r = 1073741822 - 25 * (1 + (((1073741822 - e + 500) / 25) | 0));
              break;
            case o.unstable_LowPriority:
            case o.unstable_IdlePriority:
              r = 1;
              break;
            default:
              a("313");
          }
          null !== Oa && r === Pa && --r;
        }
        return (
          n === o.unstable_UserBlockingPriority &&
            (0 === ll || r < ll) &&
            (ll = r),
          r
        );
      }
      function Ga(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          null !== Oa && Pa === n
            ? (Oa = null)
            : ((t = e.earliestSuspendedTime),
              (r = e.latestSuspendedTime),
              0 !== t &&
                n <= t &&
                n >= r &&
                ((e.didError = !1),
                (0 === (t = e.latestPingedTime) || t > n) &&
                  (e.latestPingedTime = n),
                ni(n, e),
                0 !== (n = e.expirationTime) && El(e, n)));
      }
      function Xa(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return,
          i = null;
        if (null === r && 3 === e.tag) i = e.stateNode;
        else
          for (; null !== r; ) {
            if (
              ((n = r.alternate),
              r.childExpirationTime < t && (r.childExpirationTime = t),
              null !== n &&
                n.childExpirationTime < t &&
                (n.childExpirationTime = t),
              null === r.return && 3 === r.tag)
            ) {
              i = r.stateNode;
              break;
            }
            r = r.return;
          }
        return i;
      }
      function Ja(e, t) {
        null !== (e = Xa(e, t)) &&
          (!Ra && 0 !== Pa && t > Pa && Fa(),
          Zr(e, t),
          (Ra && !Na && Oa === e) || El(e, e.expirationTime),
          gl > yl && ((gl = 0), a("185")));
      }
      function Za(e, t, n, r, i) {
        return o.unstable_runWithPriority(
          o.unstable_ImmediatePriority,
          function () {
            return e(t, n, r, i);
          }
        );
      }
      var el = null,
        tl = null,
        nl = 0,
        rl = void 0,
        il = !1,
        ol = null,
        al = 0,
        ll = 0,
        ul = !1,
        sl = null,
        cl = !1,
        fl = !1,
        dl = null,
        pl = o.unstable_now(),
        hl = 1073741822 - ((pl / 10) | 0),
        ml = hl,
        yl = 50,
        gl = 0,
        bl = null;
      function vl() {
        hl = 1073741822 - (((o.unstable_now() - pl) / 10) | 0);
      }
      function wl(e, t) {
        if (0 !== nl) {
          if (t < nl) return;
          null !== rl && o.unstable_cancelCallback(rl);
        }
        (nl = t),
          (e = o.unstable_now() - pl),
          (rl = o.unstable_scheduleCallback(Rl, {
            timeout: 10 * (1073741822 - t) - e,
          }));
      }
      function _l(e, t, n, r, i) {
        (e.expirationTime = r),
          0 !== i || xl()
            ? 0 < i &&
              (e.timeoutHandle = vr(
                function (e, t, n) {
                  (e.pendingCommitExpirationTime = n),
                    (e.finishedWork = t),
                    vl(),
                    (ml = hl),
                    Ol(e, n);
                }.bind(null, e, t, n),
                i
              ))
            : ((e.pendingCommitExpirationTime = n), (e.finishedWork = t));
      }
      function Sl() {
        return il
          ? ml
          : (kl(), (0 !== al && 1 !== al) || (vl(), (ml = hl)), ml);
      }
      function El(e, t) {
        null === e.nextScheduledRoot
          ? ((e.expirationTime = t),
            null === tl
              ? ((el = tl = e), (e.nextScheduledRoot = e))
              : ((tl = tl.nextScheduledRoot = e).nextScheduledRoot = el))
          : t > e.expirationTime && (e.expirationTime = t),
          il ||
            (cl
              ? fl && ((ol = e), (al = 1073741823), Pl(e, 1073741823, !1))
              : 1073741823 === t
              ? Cl(1073741823, !1)
              : wl(e, t));
      }
      function kl() {
        var e = 0,
          t = null;
        if (null !== tl)
          for (var n = tl, r = el; null !== r; ) {
            var i = r.expirationTime;
            if (0 === i) {
              if (
                ((null === n || null === tl) && a("244"),
                r === r.nextScheduledRoot)
              ) {
                el = tl = r.nextScheduledRoot = null;
                break;
              }
              if (r === el)
                (el = i = r.nextScheduledRoot),
                  (tl.nextScheduledRoot = i),
                  (r.nextScheduledRoot = null);
              else {
                if (r === tl) {
                  ((tl = n).nextScheduledRoot = el),
                    (r.nextScheduledRoot = null);
                  break;
                }
                (n.nextScheduledRoot = r.nextScheduledRoot),
                  (r.nextScheduledRoot = null);
              }
              r = n.nextScheduledRoot;
            } else {
              if ((i > e && ((e = i), (t = r)), r === tl)) break;
              if (1073741823 === e) break;
              (n = r), (r = r.nextScheduledRoot);
            }
          }
        (ol = t), (al = e);
      }
      var Tl = !1;
      function xl() {
        return !!Tl || (!!o.unstable_shouldYield() && (Tl = !0));
      }
      function Rl() {
        try {
          if (!xl() && null !== el) {
            vl();
            var e = el;
            do {
              var t = e.expirationTime;
              0 !== t && hl <= t && (e.nextExpirationTimeToWorkOn = hl),
                (e = e.nextScheduledRoot);
            } while (e !== el);
          }
          Cl(0, !0);
        } finally {
          Tl = !1;
        }
      }
      function Cl(e, t) {
        if ((kl(), t))
          for (
            vl(), ml = hl;
            null !== ol && 0 !== al && e <= al && !(Tl && hl > al);

          )
            Pl(ol, al, hl > al), kl(), vl(), (ml = hl);
        else for (; null !== ol && 0 !== al && e <= al; ) Pl(ol, al, !1), kl();
        if (
          (t && ((nl = 0), (rl = null)),
          0 !== al && wl(ol, al),
          (gl = 0),
          (bl = null),
          null !== dl)
        )
          for (e = dl, dl = null, t = 0; t < e.length; t++) {
            var n = e[t];
            try {
              n._onComplete();
            } catch (r) {
              ul || ((ul = !0), (sl = r));
            }
          }
        if (ul) throw ((e = sl), (sl = null), (ul = !1), e);
      }
      function Ol(e, t) {
        il && a("253"), (ol = e), (al = t), Pl(e, t, !1), Cl(1073741823, !1);
      }
      function Pl(e, t, n) {
        if ((il && a("245"), (il = !0), n)) {
          var r = e.finishedWork;
          null !== r
            ? Ml(e, r, t)
            : ((e.finishedWork = null),
              -1 !== (r = e.timeoutHandle) && ((e.timeoutHandle = -1), wr(r)),
              $a(e, n),
              null !== (r = e.finishedWork) &&
                (xl() ? (e.finishedWork = r) : Ml(e, r, t)));
        } else
          null !== (r = e.finishedWork)
            ? Ml(e, r, t)
            : ((e.finishedWork = null),
              -1 !== (r = e.timeoutHandle) && ((e.timeoutHandle = -1), wr(r)),
              $a(e, n),
              null !== (r = e.finishedWork) && Ml(e, r, t));
        il = !1;
      }
      function Ml(e, t, n) {
        var r = e.firstBatch;
        if (
          null !== r &&
          r._expirationTime >= n &&
          (null === dl ? (dl = [r]) : dl.push(r), r._defer)
        )
          return (e.finishedWork = t), void (e.expirationTime = 0);
        (e.finishedWork = null),
          e === bl ? gl++ : ((bl = e), (gl = 0)),
          o.unstable_runWithPriority(o.unstable_ImmediatePriority, function () {
            qa(e, t);
          });
      }
      function Al(e) {
        null === ol && a("246"),
          (ol.expirationTime = 0),
          ul || ((ul = !0), (sl = e));
      }
      function jl(e, t) {
        var n = cl;
        cl = !0;
        try {
          return e(t);
        } finally {
          (cl = n) || il || Cl(1073741823, !1);
        }
      }
      function Nl(e, t) {
        if (cl && !fl) {
          fl = !0;
          try {
            return e(t);
          } finally {
            fl = !1;
          }
        }
        return e(t);
      }
      function Ll(e, t, n) {
        cl || il || 0 === ll || (Cl(ll, !1), (ll = 0));
        var r = cl;
        cl = !0;
        try {
          return o.unstable_runWithPriority(
            o.unstable_UserBlockingPriority,
            function () {
              return e(t, n);
            }
          );
        } finally {
          (cl = r) || il || Cl(1073741823, !1);
        }
      }
      function Dl(e, t, n, r, i) {
        var o = t.current;
        e: if (n) {
          t: {
            (2 === tn((n = n._reactInternalFiber)) && 1 === n.tag) || a("170");
            var l = n;
            do {
              switch (l.tag) {
                case 3:
                  l = l.stateNode.context;
                  break t;
                case 1:
                  if (Nr(l.type)) {
                    l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              l = l.return;
            } while (null !== l);
            a("171"), (l = void 0);
          }
          if (1 === n.tag) {
            var u = n.type;
            if (Nr(u)) {
              n = Ur(n, u, l);
              break e;
            }
          }
          n = l;
        } else n = Or;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          (t = i),
          ((i = Go(r)).payload = { element: e }),
          null !== (t = void 0 === t ? null : t) && (i.callback = t),
          Ha(),
          Jo(o, i),
          Ja(o, r),
          r
        );
      }
      function Il(e, t, n, r) {
        var i = t.current;
        return Dl(e, t, n, (i = Qa(Sl(), i)), r);
      }
      function Ul(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
          case 5:
          default:
            return e.child.stateNode;
        }
      }
      function Fl(e) {
        var t = 1073741822 - 25 * (1 + (((1073741822 - Sl() + 500) / 25) | 0));
        t >= xa && (t = xa - 1),
          (this._expirationTime = xa = t),
          (this._root = e),
          (this._callbacks = this._next = null),
          (this._hasChildren = this._didComplete = !1),
          (this._children = null),
          (this._defer = !0);
      }
      function Bl() {
        (this._callbacks = null),
          (this._didCommit = !1),
          (this._onCommit = this._onCommit.bind(this));
      }
      function zl(e, t, n) {
        (e = {
          current: (t = Vr(3, null, null, t ? 3 : 0)),
          containerInfo: e,
          pendingChildren: null,
          pingCache: null,
          earliestPendingTime: 0,
          latestPendingTime: 0,
          earliestSuspendedTime: 0,
          latestSuspendedTime: 0,
          latestPingedTime: 0,
          didError: !1,
          pendingCommitExpirationTime: 0,
          finishedWork: null,
          timeoutHandle: -1,
          context: null,
          pendingContext: null,
          hydrate: n,
          nextExpirationTimeToWorkOn: 0,
          expirationTime: 0,
          firstBatch: null,
          nextScheduledRoot: null,
        }),
          (this._internalRoot = t.stateNode = e);
      }
      function Wl(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              " react-mount-point-unstable " !== e.nodeValue))
        );
      }
      function Hl(e, t, n, r, i) {
        var o = n._reactRootContainer;
        if (o) {
          if ("function" === typeof i) {
            var a = i;
            i = function () {
              var e = Ul(o._internalRoot);
              a.call(e);
            };
          }
          null != e
            ? o.legacy_renderSubtreeIntoContainer(e, t, i)
            : o.render(t, i);
        } else {
          if (
            ((o = n._reactRootContainer =
              (function (e, t) {
                if (
                  (t ||
                    (t = !(
                      !(t = e
                        ? 9 === e.nodeType
                          ? e.documentElement
                          : e.firstChild
                        : null) ||
                      1 !== t.nodeType ||
                      !t.hasAttribute("data-reactroot")
                    )),
                  !t)
                )
                  for (var n; (n = e.lastChild); ) e.removeChild(n);
                return new zl(e, !1, t);
              })(n, r)),
            "function" === typeof i)
          ) {
            var l = i;
            i = function () {
              var e = Ul(o._internalRoot);
              l.call(e);
            };
          }
          Nl(function () {
            null != e
              ? o.legacy_renderSubtreeIntoContainer(e, t, i)
              : o.render(t, i);
          });
        }
        return Ul(o._internalRoot);
      }
      function ql(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        return (
          Wl(t) || a("200"),
          (function (e, t, n) {
            var r =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: Ke,
              key: null == r ? null : "" + r,
              children: e,
              containerInfo: t,
              implementation: n,
            };
          })(e, t, null, n)
        );
      }
      (xe = function (e, t, n) {
        switch (t) {
          case "input":
            if ((St(e, n), (t = n.name), "radio" === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = U(r);
                  i || a("90"), He(r), St(r, i);
                }
              }
            }
            break;
          case "textarea":
            Xn(e, n);
            break;
          case "select":
            null != (t = n.value) && Kn(e, !!n.multiple, t, !1);
        }
      }),
        (Fl.prototype.render = function (e) {
          this._defer || a("250"),
            (this._hasChildren = !0),
            (this._children = e);
          var t = this._root._internalRoot,
            n = this._expirationTime,
            r = new Bl();
          return Dl(e, t, null, n, r._onCommit), r;
        }),
        (Fl.prototype.then = function (e) {
          if (this._didComplete) e();
          else {
            var t = this._callbacks;
            null === t && (t = this._callbacks = []), t.push(e);
          }
        }),
        (Fl.prototype.commit = function () {
          var e = this._root._internalRoot,
            t = e.firstBatch;
          if (((this._defer && null !== t) || a("251"), this._hasChildren)) {
            var n = this._expirationTime;
            if (t !== this) {
              this._hasChildren &&
                ((n = this._expirationTime = t._expirationTime),
                this.render(this._children));
              for (var r = null, i = t; i !== this; ) (r = i), (i = i._next);
              null === r && a("251"),
                (r._next = i._next),
                (this._next = t),
                (e.firstBatch = this);
            }
            (this._defer = !1),
              Ol(e, n),
              (t = this._next),
              (this._next = null),
              null !== (t = e.firstBatch = t) &&
                t._hasChildren &&
                t.render(t._children);
          } else (this._next = null), (this._defer = !1);
        }),
        (Fl.prototype._onComplete = function () {
          if (!this._didComplete) {
            this._didComplete = !0;
            var e = this._callbacks;
            if (null !== e) for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }),
        (Bl.prototype.then = function (e) {
          if (this._didCommit) e();
          else {
            var t = this._callbacks;
            null === t && (t = this._callbacks = []), t.push(e);
          }
        }),
        (Bl.prototype._onCommit = function () {
          if (!this._didCommit) {
            this._didCommit = !0;
            var e = this._callbacks;
            if (null !== e)
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                "function" !== typeof n && a("191", n), n();
              }
          }
        }),
        (zl.prototype.render = function (e, t) {
          var n = this._internalRoot,
            r = new Bl();
          return (
            null !== (t = void 0 === t ? null : t) && r.then(t),
            Il(e, n, null, r._onCommit),
            r
          );
        }),
        (zl.prototype.unmount = function (e) {
          var t = this._internalRoot,
            n = new Bl();
          return (
            null !== (e = void 0 === e ? null : e) && n.then(e),
            Il(null, t, null, n._onCommit),
            n
          );
        }),
        (zl.prototype.legacy_renderSubtreeIntoContainer = function (e, t, n) {
          var r = this._internalRoot,
            i = new Bl();
          return (
            null !== (n = void 0 === n ? null : n) && i.then(n),
            Il(t, r, e, i._onCommit),
            i
          );
        }),
        (zl.prototype.createBatch = function () {
          var e = new Fl(this),
            t = e._expirationTime,
            n = this._internalRoot,
            r = n.firstBatch;
          if (null === r) (n.firstBatch = e), (e._next = null);
          else {
            for (n = null; null !== r && r._expirationTime >= t; )
              (n = r), (r = r._next);
            (e._next = r), null !== n && (n._next = e);
          }
          return e;
        }),
        (Ae = jl),
        (je = Ll),
        (Ne = function () {
          il || 0 === ll || (Cl(ll, !1), (ll = 0));
        });
      var Vl = {
        createPortal: ql,
        findDOMNode: function (e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternalFiber;
          return (
            void 0 === t &&
              ("function" === typeof e.render
                ? a("188")
                : a("268", Object.keys(e))),
            (e = null === (e = rn(t)) ? null : e.stateNode)
          );
        },
        hydrate: function (e, t, n) {
          return Wl(t) || a("200"), Hl(null, e, t, !0, n);
        },
        render: function (e, t, n) {
          return Wl(t) || a("200"), Hl(null, e, t, !1, n);
        },
        unstable_renderSubtreeIntoContainer: function (e, t, n, r) {
          return (
            Wl(n) || a("200"),
            (null == e || void 0 === e._reactInternalFiber) && a("38"),
            Hl(e, t, n, !1, r)
          );
        },
        unmountComponentAtNode: function (e) {
          return (
            Wl(e) || a("40"),
            !!e._reactRootContainer &&
              (Nl(function () {
                Hl(null, null, e, !1, function () {
                  e._reactRootContainer = null;
                });
              }),
              !0)
          );
        },
        unstable_createPortal: function () {
          return ql.apply(void 0, arguments);
        },
        unstable_batchedUpdates: jl,
        unstable_interactiveUpdates: Ll,
        flushSync: function (e, t) {
          il && a("187");
          var n = cl;
          cl = !0;
          try {
            return Za(e, t);
          } finally {
            (cl = n), Cl(1073741823, !1);
          }
        },
        unstable_createRoot: function (e, t) {
          return (
            Wl(e) || a("299", "unstable_createRoot"),
            new zl(e, !0, null != t && !0 === t.hydrate)
          );
        },
        unstable_flushControlled: function (e) {
          var t = cl;
          cl = !0;
          try {
            Za(e);
          } finally {
            (cl = t) || il || Cl(1073741823, !1);
          }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          Events: [
            D,
            I,
            U,
            O.injectEventPluginsByName,
            b,
            q,
            function (e) {
              x(e, H);
            },
            Pe,
            Me,
            Cn,
            M,
          ],
        },
      };
      !(function (e) {
        var t = e.findFiberByHostInstance;
        (function (e) {
          if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
          var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (t.isDisabled || !t.supportsFiber) return !0;
          try {
            var n = t.inject(e);
            (zr = Hr(function (e) {
              return t.onCommitFiberRoot(n, e);
            })),
              (Wr = Hr(function (e) {
                return t.onCommitFiberUnmount(n, e);
              }));
          } catch (r) {}
        })(
          i({}, e, {
            overrideProps: null,
            currentDispatcherRef: qe.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = rn(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance: function (e) {
              return t ? t(e) : null;
            },
          })
        );
      })({
        findFiberByHostInstance: L,
        bundleType: 0,
        version: "16.8.6",
        rendererPackageName: "react-dom",
      });
      var Yl = { default: Vl },
        $l = (Yl && Vl) || Yl;
      e.exports = $l.default || $l;
    },
    function (e, t, n) {
      "use strict";
      e.exports = n(46);
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = null,
          r = !1,
          i = 3,
          o = -1,
          a = -1,
          l = !1,
          u = !1;
        function s() {
          if (!l) {
            var e = n.expirationTime;
            u ? E() : (u = !0), S(d, e);
          }
        }
        function c() {
          var e = n,
            t = n.next;
          if (n === t) n = null;
          else {
            var r = n.previous;
            (n = r.next = t), (t.previous = r);
          }
          (e.next = e.previous = null),
            (r = e.callback),
            (t = e.expirationTime),
            (e = e.priorityLevel);
          var o = i,
            l = a;
          (i = e), (a = t);
          try {
            var u = r();
          } finally {
            (i = o), (a = l);
          }
          if ("function" === typeof u)
            if (
              ((u = {
                callback: u,
                priorityLevel: e,
                expirationTime: t,
                next: null,
                previous: null,
              }),
              null === n)
            )
              n = u.next = u.previous = u;
            else {
              (r = null), (e = n);
              do {
                if (e.expirationTime >= t) {
                  r = e;
                  break;
                }
                e = e.next;
              } while (e !== n);
              null === r ? (r = n) : r === n && ((n = u), s()),
                ((t = r.previous).next = r.previous = u),
                (u.next = r),
                (u.previous = t);
            }
        }
        function f() {
          if (-1 === o && null !== n && 1 === n.priorityLevel) {
            l = !0;
            try {
              do {
                c();
              } while (null !== n && 1 === n.priorityLevel);
            } finally {
              (l = !1), null !== n ? s() : (u = !1);
            }
          }
        }
        function d(e) {
          l = !0;
          var i = r;
          r = e;
          try {
            if (e)
              for (; null !== n; ) {
                var o = t.unstable_now();
                if (!(n.expirationTime <= o)) break;
                do {
                  c();
                } while (null !== n && n.expirationTime <= o);
              }
            else if (null !== n)
              do {
                c();
              } while (null !== n && !k());
          } finally {
            (l = !1), (r = i), null !== n ? s() : (u = !1), f();
          }
        }
        var p,
          h,
          m = Date,
          y = "function" === typeof setTimeout ? setTimeout : void 0,
          g = "function" === typeof clearTimeout ? clearTimeout : void 0,
          b =
            "function" === typeof requestAnimationFrame
              ? requestAnimationFrame
              : void 0,
          v =
            "function" === typeof cancelAnimationFrame
              ? cancelAnimationFrame
              : void 0;
        function w(e) {
          (p = b(function (t) {
            g(h), e(t);
          })),
            (h = y(function () {
              v(p), e(t.unstable_now());
            }, 100));
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var _ = performance;
          t.unstable_now = function () {
            return _.now();
          };
        } else
          t.unstable_now = function () {
            return m.now();
          };
        var S,
          E,
          k,
          T = null;
        if (
          ("undefined" !== typeof window
            ? (T = window)
            : "undefined" !== typeof e && (T = e),
          T && T._schedMock)
        ) {
          var x = T._schedMock;
          (S = x[0]), (E = x[1]), (k = x[2]), (t.unstable_now = x[3]);
        } else if (
          "undefined" === typeof window ||
          "function" !== typeof MessageChannel
        ) {
          var R = null,
            C = function (e) {
              if (null !== R)
                try {
                  R(e);
                } finally {
                  R = null;
                }
            };
          (S = function (e) {
            null !== R ? setTimeout(S, 0, e) : ((R = e), setTimeout(C, 0, !1));
          }),
            (E = function () {
              R = null;
            }),
            (k = function () {
              return !1;
            });
        } else {
          "undefined" !== typeof console &&
            ("function" !== typeof b &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              ),
            "function" !== typeof v &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
              ));
          var O = null,
            P = !1,
            M = -1,
            A = !1,
            j = !1,
            N = 0,
            L = 33,
            D = 33;
          k = function () {
            return N <= t.unstable_now();
          };
          var I = new MessageChannel(),
            U = I.port2;
          I.port1.onmessage = function () {
            P = !1;
            var e = O,
              n = M;
            (O = null), (M = -1);
            var r = t.unstable_now(),
              i = !1;
            if (0 >= N - r) {
              if (!(-1 !== n && n <= r))
                return A || ((A = !0), w(F)), (O = e), void (M = n);
              i = !0;
            }
            if (null !== e) {
              j = !0;
              try {
                e(i);
              } finally {
                j = !1;
              }
            }
          };
          var F = function e(t) {
            if (null !== O) {
              w(e);
              var n = t - N + D;
              n < D && L < D
                ? (8 > n && (n = 8), (D = n < L ? L : n))
                : (L = n),
                (N = t + D),
                P || ((P = !0), U.postMessage(void 0));
            } else A = !1;
          };
          (S = function (e, t) {
            (O = e),
              (M = t),
              j || 0 > t ? U.postMessage(void 0) : A || ((A = !0), w(F));
          }),
            (E = function () {
              (O = null), (P = !1), (M = -1);
            });
        }
        (t.unstable_ImmediatePriority = 1),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_NormalPriority = 3),
          (t.unstable_IdlePriority = 5),
          (t.unstable_LowPriority = 4),
          (t.unstable_runWithPriority = function (e, n) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var r = i,
              a = o;
            (i = e), (o = t.unstable_now());
            try {
              return n();
            } finally {
              (i = r), (o = a), f();
            }
          }),
          (t.unstable_next = function (e) {
            switch (i) {
              case 1:
              case 2:
              case 3:
                var n = 3;
                break;
              default:
                n = i;
            }
            var r = i,
              a = o;
            (i = n), (o = t.unstable_now());
            try {
              return e();
            } finally {
              (i = r), (o = a), f();
            }
          }),
          (t.unstable_scheduleCallback = function (e, r) {
            var a = -1 !== o ? o : t.unstable_now();
            if (
              "object" === typeof r &&
              null !== r &&
              "number" === typeof r.timeout
            )
              r = a + r.timeout;
            else
              switch (i) {
                case 1:
                  r = a + -1;
                  break;
                case 2:
                  r = a + 250;
                  break;
                case 5:
                  r = a + 1073741823;
                  break;
                case 4:
                  r = a + 1e4;
                  break;
                default:
                  r = a + 5e3;
              }
            if (
              ((e = {
                callback: e,
                priorityLevel: i,
                expirationTime: r,
                next: null,
                previous: null,
              }),
              null === n)
            )
              (n = e.next = e.previous = e), s();
            else {
              a = null;
              var l = n;
              do {
                if (l.expirationTime > r) {
                  a = l;
                  break;
                }
                l = l.next;
              } while (l !== n);
              null === a ? (a = n) : a === n && ((n = e), s()),
                ((r = a.previous).next = a.previous = e),
                (e.next = a),
                (e.previous = r);
            }
            return e;
          }),
          (t.unstable_cancelCallback = function (e) {
            var t = e.next;
            if (null !== t) {
              if (t === e) n = null;
              else {
                e === n && (n = t);
                var r = e.previous;
                (r.next = t), (t.previous = r);
              }
              e.next = e.previous = null;
            }
          }),
          (t.unstable_wrapCallback = function (e) {
            var n = i;
            return function () {
              var r = i,
                a = o;
              (i = n), (o = t.unstable_now());
              try {
                return e.apply(this, arguments);
              } finally {
                (i = r), (o = a), f();
              }
            };
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return i;
          }),
          (t.unstable_shouldYield = function () {
            return !r && ((null !== n && n.expirationTime < a) || k());
          }),
          (t.unstable_continueExecution = function () {
            null !== n && s();
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_getFirstCallbackNode = function () {
            return n;
          });
      }.call(this, n(4)));
    },
    ,
    ,
    function (e, t, n) {
      var r;
      !(function (n) {
        "use strict";
        function i() {
          (this.name = "NotSupportedError"),
            (this.message = "getUserMedia is not implemented in this browser");
        }
        function o() {
          this.then = function () {
            return this;
          };
          var e = new i();
          this.catch = function (t) {
            setTimeout(function () {
              t(e);
            });
          };
        }
        i.prototype = Error.prototype;
        var a = "undefined" !== typeof Promise,
          l = "undefined" !== typeof navigator,
          u =
            l && navigator.mediaDevices && navigator.mediaDevices.getUserMedia,
          s =
            l &&
            (navigator.getUserMedia ||
              navigator.webkitGetUserMedia ||
              navigator.mozGetUserMedia ||
              navigator.msGetUserMedia);
        function c(e) {
          return a
            ? u
              ? navigator.mediaDevices.getUserMedia(e)
              : new Promise(function (t, n) {
                  if (!s) return n(new i());
                  s.call(navigator, e, t, n);
                })
            : new o();
        }
        (c.NotSupportedError = i),
          (c.isSupported = !(!a || (!u && !s))),
          void 0 ===
            (r = function () {
              return c;
            }.apply(t, [])) || (e.exports = r);
      })();
    },
    function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(51),
          i = n(5),
          o = n(26);
        function a(e) {
          if ("undefined" !== typeof MediaStream && e instanceof MediaStream) {
            var n = e;
            (e = arguments[1] || {}).stream = n;
          }
          e = e || {};
          var i = "undefined" === typeof window.AudioContext ? 4096 : null;
          i = e.bufferSize || i;
          r.call(this, e);
          var a = this,
            l = !0;
          function u(t) {
            l &&
              a.push(
                e.objectMode
                  ? t.inputBuffer
                  : o(t.inputBuffer.getChannelData(0).buffer)
              );
          }
          var s,
            c = window.AudioContext || window.webkitAudioContext,
            f = (this.context = e.context || new c()),
            d = f.createScriptProcessor(i, 1, 1);
          d.connect(f.destination),
            (this.setStream = function (e) {
              (this.stream = e),
                (s = f.createMediaStreamSource(e)).connect(d),
                (d.onaudioprocess = u);
            }),
            e.stream && this.setStream(n),
            (this.stop = function () {
              if ("closed" !== f.state) {
                try {
                  this.stream.getTracks()[0].stop();
                } catch (e) {}
                d.disconnect(), s && s.disconnect();
                try {
                  f.close();
                } catch (e) {}
                (l = !1), a.push(null), a.emit("close");
              }
            }),
            t.nextTick(function () {
              a.emit("format", {
                channels: 1,
                bitDepth: 32,
                sampleRate: f.sampleRate,
                signed: !0,
                float: !0,
              });
            });
        }
        i.inherits(a, r),
          (a.prototype._read = function () {}),
          (a.toRaw = function (e) {
            return new Float32Array(e.buffer);
          }),
          (e.exports = a);
      }.call(this, n(0)));
    },
    function (e, t, n) {
      ((t = e.exports = n(19)).Stream = t),
        (t.Readable = t),
        (t.Writable = n(23)),
        (t.Duplex = n(8)),
        (t.Transform = n(25)),
        (t.PassThrough = n(61)),
        (t.finished = n(14)),
        (t.pipeline = n(62));
    },
    function (e, t, n) {
      "use strict";
      (t.byteLength = function (e) {
        var t = s(e),
          n = t[0],
          r = t[1];
        return (3 * (n + r)) / 4 - r;
      }),
        (t.toByteArray = function (e) {
          for (
            var t,
              n = s(e),
              r = n[0],
              a = n[1],
              l = new o(
                (function (e, t, n) {
                  return (3 * (t + n)) / 4 - n;
                })(0, r, a)
              ),
              u = 0,
              c = a > 0 ? r - 4 : r,
              f = 0;
            f < c;
            f += 4
          )
            (t =
              (i[e.charCodeAt(f)] << 18) |
              (i[e.charCodeAt(f + 1)] << 12) |
              (i[e.charCodeAt(f + 2)] << 6) |
              i[e.charCodeAt(f + 3)]),
              (l[u++] = (t >> 16) & 255),
              (l[u++] = (t >> 8) & 255),
              (l[u++] = 255 & t);
          2 === a &&
            ((t = (i[e.charCodeAt(f)] << 2) | (i[e.charCodeAt(f + 1)] >> 4)),
            (l[u++] = 255 & t));
          1 === a &&
            ((t =
              (i[e.charCodeAt(f)] << 10) |
              (i[e.charCodeAt(f + 1)] << 4) |
              (i[e.charCodeAt(f + 2)] >> 2)),
            (l[u++] = (t >> 8) & 255),
            (l[u++] = 255 & t));
          return l;
        }),
        (t.fromByteArray = function (e) {
          for (
            var t, n = e.length, i = n % 3, o = [], a = 0, l = n - i;
            a < l;
            a += 16383
          )
            o.push(c(e, a, a + 16383 > l ? l : a + 16383));
          1 === i
            ? ((t = e[n - 1]), o.push(r[t >> 2] + r[(t << 4) & 63] + "=="))
            : 2 === i &&
              ((t = (e[n - 2] << 8) + e[n - 1]),
              o.push(r[t >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63] + "="));
          return o.join("");
        });
      for (
        var r = [],
          i = [],
          o = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
          a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          l = 0,
          u = a.length;
        l < u;
        ++l
      )
        (r[l] = a[l]), (i[a.charCodeAt(l)] = l);
      function s(e) {
        var t = e.length;
        if (t % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("=");
        return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
      }
      function c(e, t, n) {
        for (var i, o, a = [], l = t; l < n; l += 3)
          (i =
            ((e[l] << 16) & 16711680) +
            ((e[l + 1] << 8) & 65280) +
            (255 & e[l + 2])),
            a.push(
              r[((o = i) >> 18) & 63] +
                r[(o >> 12) & 63] +
                r[(o >> 6) & 63] +
                r[63 & o]
            );
        return a.join("");
      }
      (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
    },
    function (e, t) {
      (t.read = function (e, t, n, r, i) {
        var o,
          a,
          l = 8 * i - r - 1,
          u = (1 << l) - 1,
          s = u >> 1,
          c = -7,
          f = n ? i - 1 : 0,
          d = n ? -1 : 1,
          p = e[t + f];
        for (
          f += d, o = p & ((1 << -c) - 1), p >>= -c, c += l;
          c > 0;
          o = 256 * o + e[t + f], f += d, c -= 8
        );
        for (
          a = o & ((1 << -c) - 1), o >>= -c, c += r;
          c > 0;
          a = 256 * a + e[t + f], f += d, c -= 8
        );
        if (0 === o) o = 1 - s;
        else {
          if (o === u) return a ? NaN : (1 / 0) * (p ? -1 : 1);
          (a += Math.pow(2, r)), (o -= s);
        }
        return (p ? -1 : 1) * a * Math.pow(2, o - r);
      }),
        (t.write = function (e, t, n, r, i, o) {
          var a,
            l,
            u,
            s = 8 * o - i - 1,
            c = (1 << s) - 1,
            f = c >> 1,
            d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = r ? 0 : o - 1,
            h = r ? 1 : -1,
            m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((l = isNaN(t) ? 1 : 0), (a = c))
                : ((a = Math.floor(Math.log(t) / Math.LN2)),
                  t * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                  (t += a + f >= 1 ? d / u : d * Math.pow(2, 1 - f)) * u >= 2 &&
                    (a++, (u /= 2)),
                  a + f >= c
                    ? ((l = 0), (a = c))
                    : a + f >= 1
                    ? ((l = (t * u - 1) * Math.pow(2, i)), (a += f))
                    : ((l = t * Math.pow(2, f - 1) * Math.pow(2, i)), (a = 0)));
            i >= 8;
            e[n + p] = 255 & l, p += h, l /= 256, i -= 8
          );
          for (
            a = (a << i) | l, s += i;
            s > 0;
            e[n + p] = 255 & a, p += h, a /= 256, s -= 8
          );
          e[n + p - h] |= 128 * m;
        });
    },
    function (e, t) {
      var n = {}.toString;
      e.exports =
        Array.isArray ||
        function (e) {
          return "[object Array]" == n.call(e);
        };
    },
    ,
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var i = n(1).Buffer,
        o = n(57).inspect,
        a = (o && o.custom) || "inspect";
      e.exports = (function () {
        function e() {
          (this.head = null), (this.tail = null), (this.length = 0);
        }
        var t = e.prototype;
        return (
          (t.push = function (e) {
            var t = { data: e, next: null };
            this.length > 0 ? (this.tail.next = t) : (this.head = t),
              (this.tail = t),
              ++this.length;
          }),
          (t.unshift = function (e) {
            var t = { data: e, next: this.head };
            0 === this.length && (this.tail = t),
              (this.head = t),
              ++this.length;
          }),
          (t.shift = function () {
            if (0 !== this.length) {
              var e = this.head.data;
              return (
                1 === this.length
                  ? (this.head = this.tail = null)
                  : (this.head = this.head.next),
                --this.length,
                e
              );
            }
          }),
          (t.clear = function () {
            (this.head = this.tail = null), (this.length = 0);
          }),
          (t.join = function (e) {
            if (0 === this.length) return "";
            for (var t = this.head, n = "" + t.data; (t = t.next); )
              n += e + t.data;
            return n;
          }),
          (t.concat = function (e) {
            if (0 === this.length) return i.alloc(0);
            for (
              var t, n, r, o = i.allocUnsafe(e >>> 0), a = this.head, l = 0;
              a;

            )
              (t = a.data),
                (n = o),
                (r = l),
                i.prototype.copy.call(t, n, r),
                (l += a.data.length),
                (a = a.next);
            return o;
          }),
          (t.consume = function (e, t) {
            var n;
            return (
              e < this.head.data.length
                ? ((n = this.head.data.slice(0, e)),
                  (this.head.data = this.head.data.slice(e)))
                : (n =
                    e === this.head.data.length
                      ? this.shift()
                      : t
                      ? this._getString(e)
                      : this._getBuffer(e)),
              n
            );
          }),
          (t.first = function () {
            return this.head.data;
          }),
          (t._getString = function (e) {
            var t = this.head,
              n = 1,
              r = t.data;
            for (e -= r.length; (t = t.next); ) {
              var i = t.data,
                o = e > i.length ? i.length : e;
              if (
                (o === i.length ? (r += i) : (r += i.slice(0, e)),
                0 === (e -= o))
              ) {
                o === i.length
                  ? (++n,
                    t.next
                      ? (this.head = t.next)
                      : (this.head = this.tail = null))
                  : ((this.head = t), (t.data = i.slice(o)));
                break;
              }
              ++n;
            }
            return (this.length -= n), r;
          }),
          (t._getBuffer = function (e) {
            var t = i.allocUnsafe(e),
              n = this.head,
              r = 1;
            for (n.data.copy(t), e -= n.data.length; (n = n.next); ) {
              var o = n.data,
                a = e > o.length ? o.length : e;
              if ((o.copy(t, t.length - e, 0, a), 0 === (e -= a))) {
                a === o.length
                  ? (++r,
                    n.next
                      ? (this.head = n.next)
                      : (this.head = this.tail = null))
                  : ((this.head = n), (n.data = o.slice(a)));
                break;
              }
              ++r;
            }
            return (this.length -= r), t;
          }),
          (t[a] = function (e, t) {
            return o(
              this,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                  "function" === typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                      Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                      })
                    )),
                    i.forEach(function (t) {
                      r(e, t, n[t]);
                    });
                }
                return e;
              })({}, t, { depth: 0, customInspect: !1 })
            );
          }),
          e
        );
      })();
    },
    ,
    function (e, t, n) {
      "use strict";
      (function (t) {
        var n = new Set();
        e.exports.emitExperimentalWarning = t.emitWarning
          ? function (e) {
              if (!n.has(e)) {
                var r =
                  e +
                  " is an experimental feature. This feature could change at any time";
                n.add(e), t.emitWarning(r, "ExperimentalWarning");
              }
            }
          : function () {};
      }.call(this, n(0)));
    },
    function (e, t, n) {
      var r = n(1),
        i = r.Buffer;
      function o(e, t) {
        for (var n in e) t[n] = e[n];
      }
      function a(e, t, n) {
        return i(e, t, n);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (e.exports = r)
        : (o(r, t), (t.Buffer = a)),
        o(i, a),
        (a.from = function (e, t, n) {
          if ("number" === typeof e)
            throw new TypeError("Argument must not be a number");
          return i(e, t, n);
        }),
        (a.alloc = function (e, t, n) {
          if ("number" !== typeof e)
            throw new TypeError("Argument must be a number");
          var r = i(e);
          return (
            void 0 !== t
              ? "string" === typeof n
                ? r.fill(t, n)
                : r.fill(t)
              : r.fill(0),
            r
          );
        }),
        (a.allocUnsafe = function (e) {
          if ("number" !== typeof e)
            throw new TypeError("Argument must be a number");
          return i(e);
        }),
        (a.allocUnsafeSlow = function (e) {
          if ("number" !== typeof e)
            throw new TypeError("Argument must be a number");
          return r.SlowBuffer(e);
        });
    },
    function (e, t, n) {
      "use strict";
      (function (t) {
        var r;
        function i(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var o = n(14),
          a = Symbol("lastResolve"),
          l = Symbol("lastReject"),
          u = Symbol("error"),
          s = Symbol("ended"),
          c = Symbol("lastPromise"),
          f = Symbol("handlePromise"),
          d = Symbol("stream");
        function p(e, t) {
          return { value: e, done: t };
        }
        function h(e) {
          var t = e[a];
          if (null !== t) {
            var n = e[d].read();
            null !== n &&
              ((e[c] = null), (e[a] = null), (e[l] = null), t(p(n, !1)));
          }
        }
        var m = Object.getPrototypeOf(function () {}),
          y = Object.setPrototypeOf(
            (i(
              (r = {
                get stream() {
                  return this[d];
                },
                next: function () {
                  var e = this,
                    n = this[u];
                  if (null !== n) return Promise.reject(n);
                  if (this[s]) return Promise.resolve(p(void 0, !0));
                  if (this[d].destroyed)
                    return new Promise(function (n, r) {
                      t.nextTick(function () {
                        e[u] ? r(e[u]) : n(p(void 0, !0));
                      });
                    });
                  var r,
                    i = this[c];
                  if (i)
                    r = new Promise(
                      (function (e, t) {
                        return function (n, r) {
                          e.then(function () {
                            t[s] ? n(p(void 0, !0)) : t[f](n, r);
                          }, r);
                        };
                      })(i, this)
                    );
                  else {
                    var o = this[d].read();
                    if (null !== o) return Promise.resolve(p(o, !1));
                    r = new Promise(this[f]);
                  }
                  return (this[c] = r), r;
                },
              }),
              Symbol.asyncIterator,
              function () {
                return this;
              }
            ),
            i(r, "return", function () {
              var e = this;
              return new Promise(function (t, n) {
                e[d].destroy(null, function (e) {
                  e ? n(e) : t(p(void 0, !0));
                });
              });
            }),
            r),
            m
          );
        e.exports = function (e) {
          var n,
            r = Object.create(
              y,
              (i((n = {}), d, { value: e, writable: !0 }),
              i(n, a, { value: null, writable: !0 }),
              i(n, l, { value: null, writable: !0 }),
              i(n, u, { value: null, writable: !0 }),
              i(n, s, { value: e._readableState.endEmitted, writable: !0 }),
              i(n, f, {
                value: function (e, t) {
                  var n = r[d].read();
                  n
                    ? ((r[c] = null), (r[a] = null), (r[l] = null), e(p(n, !1)))
                    : ((r[a] = e), (r[l] = t));
                },
                writable: !0,
              }),
              n)
            );
          return (
            (r[c] = null),
            o(e, function (e) {
              if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                var t = r[l];
                return (
                  null !== t &&
                    ((r[c] = null), (r[a] = null), (r[l] = null), t(e)),
                  void (r[u] = e)
                );
              }
              var n = r[a];
              null !== n &&
                ((r[c] = null), (r[a] = null), (r[l] = null), n(p(void 0, !0))),
                (r[s] = !0);
            }),
            e.on(
              "readable",
              function (e) {
                t.nextTick(h, e);
              }.bind(null, r)
            ),
            r
          );
        };
      }.call(this, n(0)));
    },
    function (e, t, n) {
      "use strict";
      e.exports = i;
      var r = n(25);
      function i(e) {
        if (!(this instanceof i)) return new i(e);
        r.call(this, e);
      }
      n(2)(i, r),
        (i.prototype._transform = function (e, t, n) {
          n(null, e);
        });
    },
    function (e, t, n) {
      "use strict";
      var r;
      var i = n(7).codes,
        o = i.ERR_MISSING_ARGS,
        a = i.ERR_STREAM_DESTROYED;
      function l(e) {
        if (e) throw e;
      }
      function u(e) {
        e();
      }
      function s(e, t) {
        return e.pipe(t);
      }
      e.exports = function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var c,
          f = (function (e) {
            return e.length
              ? "function" !== typeof e[e.length - 1]
                ? l
                : e.pop()
              : l;
          })(t);
        if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
          throw new o("streams");
        var d = t.map(function (e, i) {
          var o = i < t.length - 1;
          return (function (e, t, i, o) {
            o = (function (e) {
              var t = !1;
              return function () {
                t || ((t = !0), e.apply(void 0, arguments));
              };
            })(o);
            var l = !1;
            e.on("close", function () {
              l = !0;
            }),
              void 0 === r && (r = n(14)),
              r(e, { readable: t, writable: i }, function (e) {
                if (e) return o(e);
                (l = !0), o();
              });
            var u = !1;
            return function (t) {
              if (!l && !u)
                return (
                  (u = !0),
                  (function (e) {
                    return e.setHeader && "function" === typeof e.abort;
                  })(e)
                    ? e.abort()
                    : "function" === typeof e.destroy
                    ? e.destroy()
                    : void o(t || new a("pipe"))
                );
            };
          })(e, o, i > 0, function (e) {
            c || (c = e), e && d.forEach(u), o || (d.forEach(u), f(c));
          });
        });
        return t.reduce(s);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          e &&
          "object" === typeof e &&
          "function" === typeof e.copy &&
          "function" === typeof e.fill &&
          "function" === typeof e.readUInt8
        );
      };
    },
    function (e, t) {
      "function" === typeof Object.create
        ? (e.exports = function (e, t) {
            (e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          })
        : (e.exports = function (e, t) {
            e.super_ = t;
            var n = function () {};
            (n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e);
          });
    },
    function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(6).Duplex,
          i = n(5),
          o = n(73),
          a = n(75).w3cwebsocket,
          l = n(78),
          u = n(80),
          s = [
            "action",
            "customization_weight",
            "processing_metrics",
            "processing_metrics_interval",
            "audio_metrics",
            "inactivity_timeout",
            "timestamps",
            "word_confidence",
            "content-type",
            "interim_results",
            "keywords",
            "keywords_threshold",
            "max_alternatives",
            "word_alternatives_threshold",
            "profanity_filter",
            "smart_formatting",
            "speaker_labels",
            "grammar_name",
            "redaction",
          ],
          c = [
            "model",
            "X-Watson-Learning-Opt-Out",
            "watson-token",
            "language_customization_id",
            "customization_id",
            "acoustic_customization_id",
            "access_token",
            "base_model_version",
            "x-watson-metadata",
          ];
        function f(e) {
          e.objectMode && ((e.readableObjectMode = !0), delete e.objectMode),
            r.call(this, e),
            (this.options = e),
            (this.listening = !1),
            (this.initialized = !1),
            (this.finished = !1),
            this.on("newListener", function (t) {
              e.silent ||
                ("results" === t || "result" === t || "speaker_labels" === t
                  ? console.log(
                      new Error(
                        "Watson Speech to Text RecognizeStream: the " +
                          t +
                          " event was deprecated. Please set {objectMode: true} and listen for the 'data' event instead. Pass {silent: true} to disable this message."
                      )
                    )
                  : "connection-close" === t
                  ? console.log(
                      new Error(
                        "Watson Speech to Text RecognizeStream: the " +
                          t +
                          " event was deprecated. Please listen for the 'close' event instead. Pass {silent: true} to disable this message."
                      )
                    )
                  : "connect" === t &&
                    console.log(
                      new Error(
                        "Watson Speech to Text RecognizeStream: the " +
                          t +
                          " event was deprecated. Please listen for the 'open' event instead. Pass {silent: true} to disable this message."
                      )
                    ));
            });
        }
        i.inherits(f, r),
          (f.WEBSOCKET_CONNECTION_ERROR = "WebSocket connection error"),
          (f.prototype.initialize = function () {
            var e = this.options;
            e.token && !e["watson-token"] && (e["watson-token"] = e.token),
              e.content_type &&
                !e["content-type"] &&
                (e["content-type"] = e.content_type),
              e["X-WDC-PL-OPT-OUT"] &&
                !e["X-Watson-Learning-Opt-Out"] &&
                (e["X-Watson-Learning-Opt-Out"] = e["X-WDC-PL-OPT-OUT"]),
              e.customization_id &&
                !e.language_customization_id &&
                ((e.language_customization_id = e.customization_id),
                delete e.customization_id);
            var t = i._extend(
                "language_customization_id" in e
                  ? o(e, c)
                  : { model: "en-US_BroadbandModel" },
                o(e, c)
              ),
              n = u.stringify(t),
              r =
                (
                  e.url || "wss://stream.watsonplatform.net/speech-to-text/api"
                ).replace(/^http/, "ws") +
                "/v1/recognize?" +
                n,
              l = o(e, s);
            l.action = "start";
            var d = this,
              p = (this.socket = new a(r, null, null, e.headers, null));
            function h(e, t, n) {
              n ? (n.message = e + " " + n.message) : (n = new Error(e)),
                (n.raw = t),
                d.emit("error", n);
            }
            d.on("finish", d.finish.bind(d)),
              (p.onerror = function (e) {
                d.listening = !1;
                var t = new Error("WebSocket connection error");
                (t.name = f.WEBSOCKET_CONNECTION_ERROR),
                  (t.event = e),
                  d.emit("error", t),
                  d.push(null);
              }),
              (this.socket.onopen = function () {
                d.sendJSON(l), d.emit("open");
              }),
              (this.socket.onclose = function (e) {
                (d.listening = !1),
                  d.push(null),
                  d.emit("close", e.code, e.reason);
              }),
              (p.onmessage = function (t) {
                if ("string" !== typeof t.data)
                  return h("Unexpected binary data received from server", t);
                var n;
                try {
                  n = JSON.parse(t.data);
                } catch (r) {
                  return h("Invalid JSON received from service:", t, r);
                }
                d.emit("message", t, n),
                  n.error
                    ? h(n.error, t)
                    : "listening" === n.state
                    ? d.listening
                      ? ((d.listening = !1), p.close())
                      : ((d.listening = !0), d.emit("listening"))
                    : e.readableObjectMode
                    ? d.push(n)
                    : Array.isArray(n.results) &&
                      n.results.forEach(function (e) {
                        e.final &&
                          e.alternatives &&
                          d.push(e.alternatives[0].transcript, "utf8");
                      });
              }),
              (this.initialized = !0);
          }),
          (f.prototype.sendJSON = function (e) {
            return (
              this.emit("send-json", e), this.socket.send(JSON.stringify(e))
            );
          }),
          (f.prototype.sendData = function (e) {
            return this.emit("send-data", e), this.socket.send(e);
          }),
          (f.prototype._read = function () {}),
          (f.ERROR_UNRECOGNIZED_FORMAT = "UNRECOGNIZED_FORMAT"),
          (f.prototype._write = function (e, t, n) {
            var r = this;
            if (!r.finished)
              if (this.initialized) r.sendData(e), this.afterSend(n);
              else {
                if (!this.options["content-type"]) {
                  var i = f.getContentType(e);
                  if (!i) {
                    var o = new Error(
                      "Unable to determine content-type from file header, please specify manually."
                    );
                    return (
                      (o.name = f.ERROR_UNRECOGNIZED_FORMAT),
                      this.emit("error", o),
                      void this.push(null)
                    );
                  }
                  this.options["content-type"] = i;
                }
                this.initialize(),
                  this.once("open", function () {
                    r.sendData(e), r.afterSend(n);
                  });
              }
          }),
          (f.prototype.afterSend = function (e) {
            this.socket.bufferedAmount <=
            (this._writableState.highWaterMark || 0)
              ? t.nextTick(e)
              : setTimeout(this.afterSend.bind(this, e), 10);
          }),
          (f.prototype.stop = function () {
            this.emit("stop"), this.finish();
          }),
          (f.prototype.finish = function () {
            if (!this.finished) {
              this.finished = !0;
              var e = this,
                t = { action: "stop" };
              e.socket && e.socket.readyState === e.socket.OPEN
                ? e.sendJSON(t)
                : this.once("open", function () {
                    e.sendJSON(t);
                  });
            }
          }),
          (f.prototype.promise = n(13)),
          (f.getContentType = function (e) {
            return l.fromHeader(e);
          }),
          (e.exports = f);
      }.call(this, n(0)));
    },
    ,
    function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var i = n(1).Buffer,
        o = n(68).inspect,
        a = (o && o.custom) || "inspect";
      e.exports = (function () {
        function e() {
          (this.head = null), (this.tail = null), (this.length = 0);
        }
        var t = e.prototype;
        return (
          (t.push = function (e) {
            var t = { data: e, next: null };
            this.length > 0 ? (this.tail.next = t) : (this.head = t),
              (this.tail = t),
              ++this.length;
          }),
          (t.unshift = function (e) {
            var t = { data: e, next: this.head };
            0 === this.length && (this.tail = t),
              (this.head = t),
              ++this.length;
          }),
          (t.shift = function () {
            if (0 !== this.length) {
              var e = this.head.data;
              return (
                1 === this.length
                  ? (this.head = this.tail = null)
                  : (this.head = this.head.next),
                --this.length,
                e
              );
            }
          }),
          (t.clear = function () {
            (this.head = this.tail = null), (this.length = 0);
          }),
          (t.join = function (e) {
            if (0 === this.length) return "";
            for (var t = this.head, n = "" + t.data; (t = t.next); )
              n += e + t.data;
            return n;
          }),
          (t.concat = function (e) {
            if (0 === this.length) return i.alloc(0);
            for (
              var t, n, r, o = i.allocUnsafe(e >>> 0), a = this.head, l = 0;
              a;

            )
              (t = a.data),
                (n = o),
                (r = l),
                i.prototype.copy.call(t, n, r),
                (l += a.data.length),
                (a = a.next);
            return o;
          }),
          (t.consume = function (e, t) {
            var n;
            return (
              e < this.head.data.length
                ? ((n = this.head.data.slice(0, e)),
                  (this.head.data = this.head.data.slice(e)))
                : (n =
                    e === this.head.data.length
                      ? this.shift()
                      : t
                      ? this._getString(e)
                      : this._getBuffer(e)),
              n
            );
          }),
          (t.first = function () {
            return this.head.data;
          }),
          (t._getString = function (e) {
            var t = this.head,
              n = 1,
              r = t.data;
            for (e -= r.length; (t = t.next); ) {
              var i = t.data,
                o = e > i.length ? i.length : e;
              if (
                (o === i.length ? (r += i) : (r += i.slice(0, e)),
                0 === (e -= o))
              ) {
                o === i.length
                  ? (++n,
                    t.next
                      ? (this.head = t.next)
                      : (this.head = this.tail = null))
                  : ((this.head = t), (t.data = i.slice(o)));
                break;
              }
              ++n;
            }
            return (this.length -= n), r;
          }),
          (t._getBuffer = function (e) {
            var t = i.allocUnsafe(e),
              n = this.head,
              r = 1;
            for (n.data.copy(t), e -= n.data.length; (n = n.next); ) {
              var o = n.data,
                a = e > o.length ? o.length : e;
              if ((o.copy(t, t.length - e, 0, a), 0 === (e -= a))) {
                a === o.length
                  ? (++r,
                    n.next
                      ? (this.head = n.next)
                      : (this.head = this.tail = null))
                  : ((this.head = n), (n.data = o.slice(a)));
                break;
              }
              ++r;
            }
            return (this.length -= r), t;
          }),
          (t[a] = function (e, t) {
            return o(
              this,
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                  "function" === typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                      Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                      })
                    )),
                    i.forEach(function (t) {
                      r(e, t, n[t]);
                    });
                }
                return e;
              })({}, t, { depth: 0, customInspect: !1 })
            );
          }),
          e
        );
      })();
    },
    ,
    function (e, t, n) {
      "use strict";
      (function (t) {
        var n = new Set();
        e.exports.emitExperimentalWarning = t.emitWarning
          ? function (e) {
              if (!n.has(e)) {
                var r =
                  e +
                  " is an experimental feature. This feature could change at any time";
                n.add(e), t.emitWarning(r, "ExperimentalWarning");
              }
            }
          : function () {};
      }.call(this, n(0)));
    },
    function (e, t, n) {
      "use strict";
      (function (t) {
        var r;
        function i(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var o = n(15),
          a = Symbol("lastResolve"),
          l = Symbol("lastReject"),
          u = Symbol("error"),
          s = Symbol("ended"),
          c = Symbol("lastPromise"),
          f = Symbol("handlePromise"),
          d = Symbol("stream");
        function p(e, t) {
          return { value: e, done: t };
        }
        function h(e) {
          var t = e[a];
          if (null !== t) {
            var n = e[d].read();
            null !== n &&
              ((e[c] = null), (e[a] = null), (e[l] = null), t(p(n, !1)));
          }
        }
        var m = Object.getPrototypeOf(function () {}),
          y = Object.setPrototypeOf(
            (i(
              (r = {
                get stream() {
                  return this[d];
                },
                next: function () {
                  var e = this,
                    n = this[u];
                  if (null !== n) return Promise.reject(n);
                  if (this[s]) return Promise.resolve(p(void 0, !0));
                  if (this[d].destroyed)
                    return new Promise(function (n, r) {
                      t.nextTick(function () {
                        e[u] ? r(e[u]) : n(p(void 0, !0));
                      });
                    });
                  var r,
                    i = this[c];
                  if (i)
                    r = new Promise(
                      (function (e, t) {
                        return function (n, r) {
                          e.then(function () {
                            t[s] ? n(p(void 0, !0)) : t[f](n, r);
                          }, r);
                        };
                      })(i, this)
                    );
                  else {
                    var o = this[d].read();
                    if (null !== o) return Promise.resolve(p(o, !1));
                    r = new Promise(this[f]);
                  }
                  return (this[c] = r), r;
                },
              }),
              Symbol.asyncIterator,
              function () {
                return this;
              }
            ),
            i(r, "return", function () {
              var e = this;
              return new Promise(function (t, n) {
                e[d].destroy(null, function (e) {
                  e ? n(e) : t(p(void 0, !0));
                });
              });
            }),
            r),
            m
          );
        e.exports = function (e) {
          var n,
            r = Object.create(
              y,
              (i((n = {}), d, { value: e, writable: !0 }),
              i(n, a, { value: null, writable: !0 }),
              i(n, l, { value: null, writable: !0 }),
              i(n, u, { value: null, writable: !0 }),
              i(n, s, { value: e._readableState.endEmitted, writable: !0 }),
              i(n, f, {
                value: function (e, t) {
                  var n = r[d].read();
                  n
                    ? ((r[c] = null), (r[a] = null), (r[l] = null), e(p(n, !1)))
                    : ((r[a] = e), (r[l] = t));
                },
                writable: !0,
              }),
              n)
            );
          return (
            (r[c] = null),
            o(e, function (e) {
              if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                var t = r[l];
                return (
                  null !== t &&
                    ((r[c] = null), (r[a] = null), (r[l] = null), t(e)),
                  void (r[u] = e)
                );
              }
              var n = r[a];
              null !== n &&
                ((r[c] = null), (r[a] = null), (r[l] = null), n(p(void 0, !0))),
                (r[s] = !0);
            }),
            e.on(
              "readable",
              function (e) {
                t.nextTick(h, e);
              }.bind(null, r)
            ),
            r
          );
        };
      }.call(this, n(0)));
    },
    function (e, t, n) {
      "use strict";
      e.exports = i;
      var r = n(32);
      function i(e) {
        if (!(this instanceof i)) return new i(e);
        r.call(this, e);
      }
      n(2)(i, r),
        (i.prototype._transform = function (e, t, n) {
          n(null, e);
        });
    },
    function (e, t, n) {
      "use strict";
      var r;
      var i = n(9).codes,
        o = i.ERR_MISSING_ARGS,
        a = i.ERR_STREAM_DESTROYED;
      function l(e) {
        if (e) throw e;
      }
      function u(e) {
        e();
      }
      function s(e, t) {
        return e.pipe(t);
      }
      e.exports = function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        var c,
          f = (function (e) {
            return e.length
              ? "function" !== typeof e[e.length - 1]
                ? l
                : e.pop()
              : l;
          })(t);
        if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
          throw new o("streams");
        var d = t.map(function (e, i) {
          var o = i < t.length - 1;
          return (function (e, t, i, o) {
            o = (function (e) {
              var t = !1;
              return function () {
                t || ((t = !0), e.apply(void 0, arguments));
              };
            })(o);
            var l = !1;
            e.on("close", function () {
              l = !0;
            }),
              void 0 === r && (r = n(15)),
              r(e, { readable: t, writable: i }, function (e) {
                if (e) return o(e);
                (l = !0), o();
              });
            var u = !1;
            return function (t) {
              if (!l && !u)
                return (
                  (u = !0),
                  (function (e) {
                    return e.setHeader && "function" === typeof e.abort;
                  })(e)
                    ? e.abort()
                    : "function" === typeof e.destroy
                    ? e.destroy()
                    : void o(t || new a("pipe"))
                );
            };
          })(e, o, i > 0, function (e) {
            c || (c = e), e && d.forEach(u), o || (d.forEach(u), f(c));
          });
        });
        return t.reduce(s);
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(74);
      e.exports = function (e, t) {
        if (!r(e) && "function" !== typeof e) return {};
        var n = {};
        if ("string" === typeof t) return t in e && (n[t] = e[t]), n;
        for (var i = t.length, o = -1; ++o < i; ) {
          var a = t[o];
          a in e && (n[a] = e[a]);
        }
        return n;
      };
    },
    function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        return null != e && "object" === typeof e && !1 === Array.isArray(e);
      };
    },
    function (e, t, n) {
      var r = (function () {
          return this;
        })(),
        i = r.WebSocket || r.MozWebSocket,
        o = n(76);
      function a(e, t) {
        return t ? new i(e, t) : new i(e);
      }
      i &&
        ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function (e) {
          Object.defineProperty(a, e, {
            get: function () {
              return i[e];
            },
          });
        }),
        (e.exports = { w3cwebsocket: i ? a : null, version: o });
    },
    function (e, t, n) {
      e.exports = n(77).version;
    },
    function (e) {
      e.exports = {
        name: "websocket",
        description:
          "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
        keywords: [
          "websocket",
          "websockets",
          "socket",
          "networking",
          "comet",
          "push",
          "RFC-6455",
          "realtime",
          "server",
          "client",
        ],
        author:
          "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
        contributors: [
          "I\xf1aki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)",
        ],
        version: "1.0.29",
        repository: {
          type: "git",
          url: "https://github.com/theturtle32/WebSocket-Node.git",
        },
        homepage: "https://github.com/theturtle32/WebSocket-Node",
        engines: { node: ">=0.10.0" },
        dependencies: {
          debug: "^2.2.0",
          nan: "^2.11.0",
          gulp: "^4.0.2",
          "typedarray-to-buffer": "^3.1.5",
          yaeti: "^0.0.6",
        },
        devDependencies: {
          "buffer-equal": "^1.0.0",
          faucet: "^0.0.1",
          "gulp-jshint": "^2.0.4",
          "jshint-stylish": "^2.2.1",
          jshint: "^2.0.0",
          tape: "^4.9.1",
        },
        config: { verbose: !1 },
        scripts: {
          install: "(node-gyp rebuild 2> builderror.log) || (exit 0)",
          test: "faucet test/unit",
          gulp: "gulp",
        },
        main: "index",
        directories: { lib: "./lib" },
        browser: "lib/browser.js",
        license: "Apache-2.0",
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(79).extname,
        i = {
          fLaC: "audio/flac",
          RIFF: "audio/wav",
          OggS: "audio/ogg",
          ID3: "audio/mp3",
          "\x1aE\u07e3": "audio/webm",
        };
      t.fromHeader = function (e) {
        var t = e.slice(0, 4).toString().substr(0, 4);
        return i[t] || i[t.substr(0, 3)];
      };
      var o = {
        ".mp3": "audio/mp3",
        ".wav": "audio/wav",
        ".flac": "audio/flac",
        ".ogg": "audio/ogg",
        ".oga": "audio/ogg",
        ".opus": "audio/ogg; codec=opus",
        ".webm": "audio/webm",
      };
      t.fromFilename = function (e) {
        var t = r(("string" === typeof e && e) || e.name || "");
        return o[t];
      };
    },
    function (e, t, n) {
      (function (e) {
        function n(e, t) {
          for (var n = 0, r = e.length - 1; r >= 0; r--) {
            var i = e[r];
            "." === i
              ? e.splice(r, 1)
              : ".." === i
              ? (e.splice(r, 1), n++)
              : n && (e.splice(r, 1), n--);
          }
          if (t) for (; n--; n) e.unshift("..");
          return e;
        }
        function r(e, t) {
          if (e.filter) return e.filter(t);
          for (var n = [], r = 0; r < e.length; r++)
            t(e[r], r, e) && n.push(e[r]);
          return n;
        }
        (t.resolve = function () {
          for (
            var t = "", i = !1, o = arguments.length - 1;
            o >= -1 && !i;
            o--
          ) {
            var a = o >= 0 ? arguments[o] : e.cwd();
            if ("string" !== typeof a)
              throw new TypeError("Arguments to path.resolve must be strings");
            a && ((t = a + "/" + t), (i = "/" === a.charAt(0)));
          }
          return (
            (i ? "/" : "") +
              (t = n(
                r(t.split("/"), function (e) {
                  return !!e;
                }),
                !i
              ).join("/")) || "."
          );
        }),
          (t.normalize = function (e) {
            var o = t.isAbsolute(e),
              a = "/" === i(e, -1);
            return (
              (e = n(
                r(e.split("/"), function (e) {
                  return !!e;
                }),
                !o
              ).join("/")) ||
                o ||
                (e = "."),
              e && a && (e += "/"),
              (o ? "/" : "") + e
            );
          }),
          (t.isAbsolute = function (e) {
            return "/" === e.charAt(0);
          }),
          (t.join = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return t.normalize(
              r(e, function (e, t) {
                if ("string" !== typeof e)
                  throw new TypeError("Arguments to path.join must be strings");
                return e;
              }).join("/")
            );
          }),
          (t.relative = function (e, n) {
            function r(e) {
              for (var t = 0; t < e.length && "" === e[t]; t++);
              for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
              return t > n ? [] : e.slice(t, n - t + 1);
            }
            (e = t.resolve(e).substr(1)), (n = t.resolve(n).substr(1));
            for (
              var i = r(e.split("/")),
                o = r(n.split("/")),
                a = Math.min(i.length, o.length),
                l = a,
                u = 0;
              u < a;
              u++
            )
              if (i[u] !== o[u]) {
                l = u;
                break;
              }
            var s = [];
            for (u = l; u < i.length; u++) s.push("..");
            return (s = s.concat(o.slice(l))).join("/");
          }),
          (t.sep = "/"),
          (t.delimiter = ":"),
          (t.dirname = function (e) {
            if (("string" !== typeof e && (e += ""), 0 === e.length))
              return ".";
            for (
              var t = e.charCodeAt(0),
                n = 47 === t,
                r = -1,
                i = !0,
                o = e.length - 1;
              o >= 1;
              --o
            )
              if (47 === (t = e.charCodeAt(o))) {
                if (!i) {
                  r = o;
                  break;
                }
              } else i = !1;
            return -1 === r
              ? n
                ? "/"
                : "."
              : n && 1 === r
              ? "/"
              : e.slice(0, r);
          }),
          (t.basename = function (e, t) {
            var n = (function (e) {
              "string" !== typeof e && (e += "");
              var t,
                n = 0,
                r = -1,
                i = !0;
              for (t = e.length - 1; t >= 0; --t)
                if (47 === e.charCodeAt(t)) {
                  if (!i) {
                    n = t + 1;
                    break;
                  }
                } else -1 === r && ((i = !1), (r = t + 1));
              return -1 === r ? "" : e.slice(n, r);
            })(e);
            return (
              t &&
                n.substr(-1 * t.length) === t &&
                (n = n.substr(0, n.length - t.length)),
              n
            );
          }),
          (t.extname = function (e) {
            "string" !== typeof e && (e += "");
            for (
              var t = -1, n = 0, r = -1, i = !0, o = 0, a = e.length - 1;
              a >= 0;
              --a
            ) {
              var l = e.charCodeAt(a);
              if (47 !== l)
                -1 === r && ((i = !1), (r = a + 1)),
                  46 === l
                    ? -1 === t
                      ? (t = a)
                      : 1 !== o && (o = 1)
                    : -1 !== t && (o = -1);
              else if (!i) {
                n = a + 1;
                break;
              }
            }
            return -1 === t ||
              -1 === r ||
              0 === o ||
              (1 === o && t === r - 1 && t === n + 1)
              ? ""
              : e.slice(t, r);
          });
        var i =
          "b" === "ab".substr(-1)
            ? function (e, t, n) {
                return e.substr(t, n);
              }
            : function (e, t, n) {
                return t < 0 && (t = e.length + t), e.substr(t, n);
              };
      }.call(this, n(0)));
    },
    function (e, t, n) {
      "use strict";
      t.stringify = function (e) {
        return Object.keys(e)
          .map(function (t) {
            return (
              t + "=" + ("watson-token" === t ? e[t] : encodeURIComponent(e[t]))
            );
          })
          .join("&");
      };
    },
    function (e, t, n) {
      "use strict";
      (function (t) {
        var r = n(6).Transform,
          i = n(5),
          o = n(16),
          a = n(26);
        function l(e) {
          (e = this.options = o(e, { sourceSampleRate: 48e3, downsample: !0 })),
            r.call(this, e),
            (this.bufferUnusedSamples = []),
            e.objectMode || e.writableObjectMode
              ? (this._transform = this.handleFirstAudioBuffer)
              : ((this._transform = this.transformBuffer),
                t.nextTick(this.emitFormat.bind(this)));
        }
        i.inherits(l, r),
          (l.prototype.emitFormat = function () {
            this.emit("format", {
              channels: 1,
              bitDepth: 16,
              sampleRate: this.options.downsample
                ? 16e3
                : this.options.sourceSampleRate,
              signed: !0,
              float: !1,
            });
          }),
          (l.prototype.downsample = function (e) {
            var t,
              n,
              r = null,
              i = e.length,
              o = this.bufferUnusedSamples.length;
            if (o > 0) {
              for (r = new Float32Array(o + i), t = 0; t < o; ++t)
                r[t] = this.bufferUnusedSamples[t];
              for (t = 0; t < i; ++t) r[o + t] = e[t];
            } else r = e;
            var a = [
                -0.037935, -89024e-8, 0.040173, 0.019989, 0.0047792, -0.058675,
                -0.056487, -0.0040653, 0.14527, 0.26927, 0.33913, 0.26927,
                0.14527, -0.0040653, -0.056487, -0.058675, 0.0047792, 0.019989,
                0.040173, -89024e-8, -0.037935,
              ],
              l = this.options.sourceSampleRate / 16e3,
              u = Math.floor((r.length - a.length) / l) + 1,
              s = new Float32Array(u);
            for (t = 0; t < s.length; t++) {
              n = Math.round(l * t);
              for (var c = 0, f = 0; f < a.length; ++f) c += r[n + f] * a[f];
              s[t] = c;
            }
            var d = Math.round(l * t),
              p = r.length - d;
            if (p > 0)
              for (
                this.bufferUnusedSamples = new Float32Array(p), t = 0;
                t < p;
                ++t
              )
                this.bufferUnusedSamples[t] = r[d + t];
            else this.bufferUnusedSamples = new Float32Array(0);
            return s;
          }),
          (l.prototype.floatTo16BitPCM = function (e) {
            for (
              var t = new DataView(new ArrayBuffer(2 * e.length)), n = 0;
              n < e.length;
              n++
            ) {
              var r = e[n] < 0 ? 32768 : 32767;
              t.setInt16(2 * n, (e[n] * r) | 0, !0);
            }
            return a(t.buffer);
          }),
          (l.prototype.handleFirstAudioBuffer = function (e, t, n) {
            (this.options.sourceSampleRate = e.sampleRate),
              this.emitFormat(),
              (this._transform = this.transformAudioBuffer),
              this._transform(e, t, n);
          }),
          (l.prototype.transformAudioBuffer = function (e, t, n) {
            var r = e.getChannelData(0);
            this.options.downsample && (r = this.downsample(r)),
              this.push(this.floatTo16BitPCM(r)),
              n();
          }),
          (l.prototype.transformBuffer = function (e, t, n) {
            var r = new Float32Array(e.buffer);
            this.options.downsample && (r = this.downsample(r)),
              this.push(this.floatTo16BitPCM(r)),
              n();
          }),
          (e.exports = l);
      }.call(this, n(0)));
    },
    function (e, t, n) {
      (function (t) {
        var n = (function () {
          "use strict";
          function e(n, i, o, a) {
            "object" === typeof i &&
              ((o = i.depth), (a = i.prototype), i.filter, (i = i.circular));
            var l = [],
              u = [],
              s = "undefined" != typeof t;
            return (
              "undefined" == typeof i && (i = !0),
              "undefined" == typeof o && (o = 1 / 0),
              (function n(o, c) {
                if (null === o) return null;
                if (0 == c) return o;
                var f, d;
                if ("object" != typeof o) return o;
                if (e.__isArray(o)) f = [];
                else if (e.__isRegExp(o))
                  (f = new RegExp(o.source, r(o))),
                    o.lastIndex && (f.lastIndex = o.lastIndex);
                else if (e.__isDate(o)) f = new Date(o.getTime());
                else {
                  if (s && t.isBuffer(o))
                    return (
                      (f = t.allocUnsafe
                        ? t.allocUnsafe(o.length)
                        : new t(o.length)),
                      o.copy(f),
                      f
                    );
                  "undefined" == typeof a
                    ? ((d = Object.getPrototypeOf(o)), (f = Object.create(d)))
                    : ((f = Object.create(a)), (d = a));
                }
                if (i) {
                  var p = l.indexOf(o);
                  if (-1 != p) return u[p];
                  l.push(o), u.push(f);
                }
                for (var h in o) {
                  var m;
                  d && (m = Object.getOwnPropertyDescriptor(d, h)),
                    (m && null == m.set) || (f[h] = n(o[h], c - 1));
                }
                return f;
              })(n, o)
            );
          }
          function n(e) {
            return Object.prototype.toString.call(e);
          }
          function r(e) {
            var t = "";
            return (
              e.global && (t += "g"),
              e.ignoreCase && (t += "i"),
              e.multiline && (t += "m"),
              t
            );
          }
          return (
            (e.clonePrototype = function (e) {
              if (null === e) return null;
              var t = function () {};
              return (t.prototype = e), new t();
            }),
            (e.__objToStr = n),
            (e.__isDate = function (e) {
              return "object" === typeof e && "[object Date]" === n(e);
            }),
            (e.__isArray = function (e) {
              return "object" === typeof e && "[object Array]" === n(e);
            }),
            (e.__isRegExp = function (e) {
              return "object" === typeof e && "[object RegExp]" === n(e);
            }),
            (e.__getRegExpFlags = r),
            e
          );
        })();
        e.exports && (e.exports = n);
      }.call(this, n(1).Buffer));
    },
    function (e, t, n) {
      "use strict";
      var r = n(6).Transform,
        i = n(5),
        o = n(17),
        a = n(16);
      function l(e) {
        (this.options = a(e, { model: "", hesitation: "", decodeStrings: !1 })),
          r.call(this, this.options),
          (this.isJaCn =
            "ja-JP" === this.options.model.substring(0, 5) ||
            "zh-CN" === this.options.model.substring(0, 5)),
          (this._transform = this.options.objectMode
            ? this.transformObject
            : this.transformString);
      }
      i.inherits(l, r);
      var u = /%HESITATION ?/g,
        s = /([a-z])\1{2,}/gi,
        c = /D_[^\s]+/g;
      (l.prototype.clean = function (e) {
        return (
          (e = e
            .replace(
              u,
              this.options.hesitation
                ? this.options.hesitation.trim() + " "
                : this.options.hesitation
            )
            .replace(s, "")
            .replace(c, "")),
          this.isJaCn && (e = e.replace(/ /g, "")),
          e.trim() + " "
        );
      }),
        (l.prototype.capitalize = function (e) {
          return e.charAt(0).toUpperCase() + e.substring(1);
        }),
        (l.prototype.period = function (e) {
          return (e = e.trim())
            ? "\u2026" === e.substr(-1)
              ? e + " "
              : e + (this.isJaCn ? "\u3002" : ". ")
            : " ";
        }),
        (l.prototype.transformString = function (e, t, n) {
          this.push(this.formatString(e.toString())), n();
        }),
        (l.prototype.transformObject = function (e, t, n) {
          this.push(this.formatResult(e)), n();
        }),
        (l.prototype.formatString = function (e, t) {
          return (e = this.capitalize(this.clean(e))), t ? e : this.period(e);
        }),
        (l.prototype.formatResult = function (e) {
          return (
            (e = o(e)),
            Array.isArray(e.results) &&
              e.results.forEach(function (t, n) {
                var r = t.final || n !== e.results.length - 1;
                t.alternatives = t.alternatives.map(function (e) {
                  return (
                    (e.transcript = this.formatString(e.transcript, !r)),
                    e.timestamps &&
                      (e.timestamps = e.timestamps
                        .map(function (e, t, n) {
                          return (
                            (e[0] = this.clean(e[0])),
                            0 === t && (e[0] = this.capitalize(e[0])),
                            t === n.length - 1 &&
                              r &&
                              (e[0] = this.period(e[0])),
                            e
                          );
                        }, this)
                        .filter(function (e) {
                          return e[0];
                        })),
                    e
                  );
                }, this);
              }, this),
            e
          );
        }),
        (l.prototype.promise = n(13)),
        (e.exports = l);
    },
    function (e, t, n) {
      "use strict";
      var r = n(85);
      e.exports = function () {
        return Object.assign
          ? (function () {
              if (!Object.assign) return !1;
              for (
                var e = "abcdefghijklmnopqrst", t = e.split(""), n = {}, r = 0;
                r < t.length;
                ++r
              )
                n[t[r]] = t[r];
              var i = Object.assign({}, n),
                o = "";
              for (var a in i) o += a;
              return e !== o;
            })()
            ? r
            : (function () {
                if (!Object.assign || !Object.preventExtensions) return !1;
                var e = Object.preventExtensions({ 1: 2 });
                try {
                  Object.assign(e, "xy");
                } catch (t) {
                  return "y" === e[1];
                }
                return !1;
              })()
            ? r
            : Object.assign
          : r;
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(86),
        i = n(88),
        o = n(90)(),
        a = Object,
        l = i.call(Function.call, Array.prototype.push),
        u = i.call(Function.call, Object.prototype.propertyIsEnumerable),
        s = o ? Object.getOwnPropertySymbols : null;
      e.exports = function (e, t) {
        if ("undefined" === typeof (n = e) || null === n)
          throw new TypeError("target must be an object");
        var n,
          i,
          c,
          f,
          d,
          p,
          h,
          m,
          y = a(e);
        for (i = 1; i < arguments.length; ++i) {
          (c = a(arguments[i])), (d = r(c));
          var g = o && (Object.getOwnPropertySymbols || s);
          if (g)
            for (p = g(c), f = 0; f < p.length; ++f)
              (m = p[f]), u(c, m) && l(d, m);
          for (f = 0; f < d.length; ++f)
            (h = c[(m = d[f])]), u(c, m) && (y[m] = h);
        }
        return y;
      };
    },
    function (e, t, n) {
      "use strict";
      var r = Array.prototype.slice,
        i = n(33),
        o = Object.keys,
        a = o
          ? function (e) {
              return o(e);
            }
          : n(87),
        l = Object.keys;
      (a.shim = function () {
        Object.keys
          ? (function () {
              var e = Object.keys(arguments);
              return e && e.length === arguments.length;
            })(1, 2) ||
            (Object.keys = function (e) {
              return i(e) ? l(r.call(e)) : l(e);
            })
          : (Object.keys = a);
        return Object.keys || a;
      }),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r;
      if (!Object.keys) {
        var i = Object.prototype.hasOwnProperty,
          o = Object.prototype.toString,
          a = n(33),
          l = Object.prototype.propertyIsEnumerable,
          u = !l.call({ toString: null }, "toString"),
          s = l.call(function () {}, "prototype"),
          c = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor",
          ],
          f = function (e) {
            var t = e.constructor;
            return t && t.prototype === e;
          },
          d = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0,
          },
          p = (function () {
            if ("undefined" === typeof window) return !1;
            for (var e in window)
              try {
                if (
                  !d["$" + e] &&
                  i.call(window, e) &&
                  null !== window[e] &&
                  "object" === typeof window[e]
                )
                  try {
                    f(window[e]);
                  } catch (t) {
                    return !0;
                  }
              } catch (t) {
                return !0;
              }
            return !1;
          })();
        r = function (e) {
          var t = null !== e && "object" === typeof e,
            n = "[object Function]" === o.call(e),
            r = a(e),
            l = t && "[object String]" === o.call(e),
            d = [];
          if (!t && !n && !r)
            throw new TypeError("Object.keys called on a non-object");
          var h = s && n;
          if (l && e.length > 0 && !i.call(e, 0))
            for (var m = 0; m < e.length; ++m) d.push(String(m));
          if (r && e.length > 0)
            for (var y = 0; y < e.length; ++y) d.push(String(y));
          else
            for (var g in e)
              (h && "prototype" === g) || !i.call(e, g) || d.push(String(g));
          if (u)
            for (
              var b = (function (e) {
                  if ("undefined" === typeof window || !p) return f(e);
                  try {
                    return f(e);
                  } catch (t) {
                    return !1;
                  }
                })(e),
                v = 0;
              v < c.length;
              ++v
            )
              (b && "constructor" === c[v]) || !i.call(e, c[v]) || d.push(c[v]);
          return d;
        };
      }
      e.exports = r;
    },
    function (e, t, n) {
      "use strict";
      var r = n(89);
      e.exports = Function.prototype.bind || r;
    },
    function (e, t, n) {
      "use strict";
      var r = Array.prototype.slice,
        i = Object.prototype.toString;
      e.exports = function (e) {
        var t = this;
        if ("function" !== typeof t || "[object Function]" !== i.call(t))
          throw new TypeError(
            "Function.prototype.bind called on incompatible " + t
          );
        for (
          var n,
            o = r.call(arguments, 1),
            a = Math.max(0, t.length - o.length),
            l = [],
            u = 0;
          u < a;
          u++
        )
          l.push("$" + u);
        if (
          ((n = Function(
            "binder",
            "return function (" +
              l.join(",") +
              "){ return binder.apply(this,arguments); }"
          )(function () {
            if (this instanceof n) {
              var i = t.apply(this, o.concat(r.call(arguments)));
              return Object(i) === i ? i : this;
            }
            return t.apply(e, o.concat(r.call(arguments)));
          })),
          t.prototype)
        ) {
          var s = function () {};
          (s.prototype = t.prototype),
            (n.prototype = new s()),
            (s.prototype = null);
        }
        return n;
      };
    },
    function (e, t, n) {
      "use strict";
      e.exports = function () {
        if (
          "function" !== typeof Symbol ||
          "function" !== typeof Object.getOwnPropertySymbols
        )
          return !1;
        if ("symbol" === typeof Symbol.iterator) return !0;
        var e = {},
          t = Symbol("test"),
          n = Object(t);
        if ("string" === typeof t) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
        for (t in ((e[t] = 42), e)) return !1;
        if ("function" === typeof Object.keys && 0 !== Object.keys(e).length)
          return !1;
        if (
          "function" === typeof Object.getOwnPropertyNames &&
          0 !== Object.getOwnPropertyNames(e).length
        )
          return !1;
        var r = Object.getOwnPropertySymbols(e);
        if (1 !== r.length || r[0] !== t) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
        if ("function" === typeof Object.getOwnPropertyDescriptor) {
          var i = Object.getOwnPropertyDescriptor(e, t);
          if (42 !== i.value || !0 !== i.enumerable) return !1;
        }
        return !0;
      };
    },
    function (e, t, n) {
      "use strict";
      var r = n(6).Writable,
        i = n(5),
        o = n(16);
      function a(e) {
        if (
          ((this.options = e =
            o(e, { decodeStrings: !1, property: null, clear: !0 })),
          (this.el =
            "string" === typeof e.outputElement
              ? document.querySelector(e.outputElement)
              : e.outputElement),
          !this.el)
        )
          throw new Error(
            "Watson Speech to Text WritableElementStream: missing outputElement"
          );
        r.call(this, e);
        (this.prop =
          e.property ||
          { INPUT: "value", TEXTAREA: "value" }[this.el.nodeName] ||
          "textContent"),
          e.clear && (this.el[this.prop] = ""),
          e.objectMode
            ? ((this.finalizedText = this.el[this.prop]),
              (this._write = this.writeObject))
            : (this._write = this.writeString);
      }
      i.inherits(a, r),
        (a.prototype.writeString = function (e, t, n) {
          (this.el[this.prop] += e), n();
        }),
        (a.prototype.writeObject = function (e, t, n) {
          Array.isArray(e.results) &&
            e.results.forEach(function (e) {
              e.final
                ? ((this.finalizedText += e.alternatives[0].transcript),
                  (this.el[this.prop] = this.finalizedText))
                : (this.el[this.prop] =
                    this.finalizedText + e.alternatives[0].transcript);
            }, this),
            n();
        }),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = n(6).Transform,
        i = n(5),
        o = n(17);
      function a(e) {
        ((e = e || {}).objectMode = !0), r.call(this, e);
      }
      i.inherits(a, r),
        (a.prototype._transform = function (e, t, n) {
          Array.isArray(e.results)
            ? e.results.forEach(function (t) {
                var n = o(t);
                (n.index = e.result_index), this.push(n);
              }, this)
            : this.push(e),
            n();
        }),
        (a.prototype.promise = n(13)),
        (e.exports = a);
    },
    function (e, t, n) {
      "use strict";
      var r = n(6).Transform,
        i = n(5),
        o = n(94),
        a = n(95),
        l = n(17);
      function u(e) {
        ((e = e || {}).objectMode = !0),
          (this.options = e),
          r.call(this, e),
          (this.results = []),
          (this.speaker_labels = []),
          (this.mismatchErrorEmitted = !1),
          (this.extraLabels = !1);
      }
      i.inherits(u, r),
        (u.prototype.isFinal = function () {
          return (
            this.speaker_labels.length &&
            this.speaker_labels[this.speaker_labels.length - 1].final
          );
        });
      (u.ERROR_MISMATCH = "MISMATCH"),
        (u.prototype.buildMessage = function () {
          var e = this.isFinal();
          this.extraLabels = !1;
          var t = 0,
            n = -1,
            r = this.speaker_labels.map(function (e) {
              var r = this.results[t];
              n++;
              var i = r.alternatives[0].timestamps[n];
              if (
                (i ||
                  ((n = 0),
                  t++,
                  (i =
                    (r = this.results[t]) && r.alternatives[0].timestamps[n])),
                !i)
              )
                return (this.extraLabels = !0), null;
              if (i[1] !== e.from || i[2] !== e.to) {
                if (!this.mismatchErrorEmitted) {
                  var o = new Error(
                    "Mismatch between speaker_label and word timestamp"
                  );
                  (o.name = u.ERROR_MISMATCH),
                    (o.speaker_label = e),
                    (o.timestamp = i),
                    (o.speaker_labels = this.speaker_labels),
                    (o.results = this.results),
                    this.emit("error", o),
                    (this.mismatchErrorEmitted = !0);
                }
                return null;
              }
              return { timestamp: i, speaker: e.speaker, result: r };
            }, this);
          if (!this.extraLabels) {
            var i = (r = r.filter(function (e) {
              return e;
            })).reduce(function (e, t) {
              var n = e[e.length - 1];
              return (
                n && n.speaker === t.speaker && n.result === t.result
                  ? n.timestamps.push(t.timestamp)
                  : ((n = {
                      speaker: t.speaker,
                      timestamps: [t.timestamp],
                      result: t.result,
                    }),
                    e.push(n)),
                e
              );
            }, []);
            return {
              results: i.map(function (t, n) {
                var r,
                  o = i[n - 1] || {};
                (r =
                  t.result === o.result
                    ? { alternatives: [{}] }
                    : l(t.result)).speaker = t.speaker;
                var a = r.alternatives[0];
                (a.transcript =
                  t.timestamps
                    .map(function (e) {
                      return e[0];
                    })
                    .join(" ") + " "),
                  (a.timestamps = t.timestamps),
                  (r.final = e);
                var u = t.timestamps[0][1],
                  s = t.timestamps[t.timestamps.length - 1][2];
                if (t.result.word_alternatives) {
                  var c = t.result.word_alternatives.filter(function (e) {
                    return e.start_time >= u && e.end_time <= s;
                  });
                  r.word_alternatives = c;
                }
                var f = t.result.keywords_result;
                if (f) {
                  var d = {};
                  Object.keys(f).forEach(function (e) {
                    var t = f[e].filter(function (e) {
                      return e.start_time >= u && e.end_time <= s;
                    });
                    t.length && (d[e] = t);
                  }),
                    (r.keywords_result = d);
                }
                return r;
              }),
              result_index: 0,
            };
          }
        }),
        (u.prototype.handleResults = function (e) {
          if (a(e)) {
            var t = new Error(
              "SpeakerStream requires that timestamps and speaker_labels be enabled"
            );
            return (t.name = a.ERROR_NO_TIMESTAMPS), void this.emit("error", t);
          }
          e.results
            .filter(function (e) {
              return e.final;
            })
            .forEach(function (e) {
              this.results.push(e);
            }, this);
        }),
        (u.speakerLabelsSorter = function (e, t) {
          return e.from === t.from
            ? e.to === t.to
              ? 0
              : e.to < t.to
              ? -1
              : 1
            : e.from < t.from
            ? -1
            : 1;
        }),
        (u.prototype.handleSpeakerLabels = function (e) {
          var t = e.speaker_labels;
          o(this.speaker_labels, t, function (e, t) {
            return e.from === t.from && e.to === t.to;
          }),
            this.speaker_labels.push.apply(
              this.speaker_labels,
              e.speaker_labels
            ),
            this.speaker_labels.sort(u.speakerLabelsSorter);
        }),
        (u.prototype._transform = function (e, t, n) {
          var r;
          Array.isArray(e.results) &&
            (this.handleResults(e),
            this.options.speakerlessInterim &&
              e.results.length &&
              !1 === e.results[0].final &&
              ((r = this.buildMessage()).results = r.results.concat(e.results)),
            this.extraLabels &&
              e.results.length &&
              !0 === e.results[0].final &&
              (r = this.buildMessage())),
            Array.isArray(e.speaker_labels) &&
              (this.handleSpeakerLabels(e), (r = this.buildMessage())),
            r && this.push(r),
            n();
        }),
        (u.prototype._flush = function (e) {
          var t = this.results
            .map(function (e) {
              return e.alternatives[0].timestamps;
            })
            .reduce(function (e, t) {
              return e.concat(t);
            }, []);
          if (t.length !== this.speaker_labels.length) {
            var n;
            n =
              t.length && !this.speaker_labels.length
                ? "No speaker_labels found. SpeakerStream requires speaker_labels to be enabled."
                : "Mismatch between number of word timestamps (" +
                  t.length +
                  ") and number of speaker_labels (" +
                  this.speaker_labels.length +
                  ") - some data may be lost.";
            var r = new Error(n);
            (r.name = u.ERROR_MISMATCH),
              (r.speaker_labels = this.speaker_labels),
              (r.results = this.results),
              this.emit("error", r);
          }
          e();
        }),
        (u.prototype.promise = n(13)),
        (e.exports = u);
    },
    function (e, t) {
      function n(e, t, n) {
        if (t !== t)
          return (function (e, t, n, r) {
            for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
              if (t(e[o], o, e)) return o;
            return -1;
          })(e, i, n);
        for (var r = n - 1, o = e.length; ++r < o; ) if (e[r] === t) return r;
        return -1;
      }
      function r(e, t, n, r) {
        for (var i = n - 1, o = e.length; ++i < o; ) if (r(e[i], t)) return i;
        return -1;
      }
      function i(e) {
        return e !== e;
      }
      var o = Array.prototype.splice;
      function a(e, t, i, a) {
        var l,
          u = a ? r : n,
          s = -1,
          c = t.length,
          f = e;
        for (
          e === t &&
            (t = (function (e, t) {
              var n = -1,
                r = e.length;
              t || (t = Array(r));
              for (; ++n < r; ) t[n] = e[n];
              return t;
            })(t)),
            i &&
              (f = (function (e, t) {
                for (var n = -1, r = e ? e.length : 0, i = Array(r); ++n < r; )
                  i[n] = t(e[n], n, e);
                return i;
              })(
                e,
                ((l = i),
                function (e) {
                  return l(e);
                })
              ));
          ++s < c;

        )
          for (
            var d = 0, p = t[s], h = i ? i(p) : p;
            (d = u(f, h, d, a)) > -1;

          )
            f !== e && o.call(f, d, 1), o.call(e, d, 1);
        return e;
      }
      e.exports = function (e, t, n) {
        return e && e.length && t && t.length ? a(e, t, void 0, n) : e;
      };
    },
    function (e, t, n) {
      "use strict";
      (e.exports = function (e) {
        return e.results.some(function (e) {
          var t = e.alternatives && e.alternatives[0];
          return !(
            !t ||
            ((!t.transcript.trim() || t.timestamps) && t.timestamps.length)
          );
        });
      }),
        (e.exports.ERROR_NO_TIMESTAMPS = "NO_TIMESTAMPS");
    },
  ],
]);
//# sourceMappingURL=2.92f4f62a.chunk.js.map
