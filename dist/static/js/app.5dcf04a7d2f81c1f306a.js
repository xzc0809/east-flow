webpackJsonp([1], {
  BfoZ: function (t, e) {
  }, JKkS: function (t, e) {
  }, NHnr: function (t, e, n) {
    'use strict'
    Object.defineProperty(e, '__esModule', {value: !0})
    var i = n('kV13'), o = n('VsiF'), s = n.n(o), r = n('hRKE'), a = n.n(r), l = n('IYkF'), u = n.n(l);
    (function () {
      void 0 === Math.sgn && (Math.sgn = function (t) {
        return 0 == t ? 0 : t > 0 ? 1 : -1
      })
      var t = function (t, e) {
        return {x: t.x - e.x, y: t.y - e.y}
      }, e = function (t, e) {
        return t.x * e.x + t.y * e.y
      }, n = function (t) {
        return Math.sqrt(t.x * t.x + t.y * t.y)
      }, i = function (t, e) {
        return {x: t.x * e, y: t.y * e}
      }, o = Math.pow(2, -65), s = function (e, i) {
        for (var o = [], s = r(e, i), l = i.length - 1, u = a(s, 2 * l - 1, o, 0), c = t(e, i[0]), d = n(c), p = 0, f = 0; f < u; f++) {
          c = t(e, h(i, l, o[f], null, null))
          var g = n(c)
          g < d && (d = g, p = o[f])
        }
        return c = t(e, i[l]), (g = n(c)) < d && (d = g, p = 1), {location: p, distance: d}
      }, r = function (n, o) {
        for (var s = o.length - 1, r = 2 * s - 1, a = [], l = [], u = [], c = [], h = [[1, .6, .3, .1], [.4, .6, .6, .4], [.1, .3, .6, 1]], d = 0; d <= s; d++) a[d] = t(o[d], n)
        for (d = 0; d <= s - 1; d++) l[d] = t(o[d + 1], o[d]), l[d] = i(l[d], 3)
        for (var p = 0; p <= s - 1; p++) for (var f = 0; f <= s; f++) u[p] || (u[p] = []), u[p][f] = e(l[p], a[f])
        for (d = 0; d <= r; d++) c[d] || (c[d] = []), c[d].y = 0, c[d].x = parseFloat(d) / r
        for (var g = s, m = s - 1, v = 0; v <= g + m; v++) {
          var b = Math.max(0, v - m), y = Math.min(v, g)
          for (d = b; d <= y; d++) {
            var P = v - d
            c[d + P].y += u[P][d] * h[P][d]
          }
        }
        return c
      }, a = function t (e, n, i, o) {
        var s, r, a = [], d = [], p = [], f = []
        switch (l(e, n)) {
          case 0:
            return 0
          case 1:
            if (o >= 64) return i[0] = (e[0].x + e[n].x) / 2, 1
            if (u(e, n)) return i[0] = c(e, n), 1
        }
        h(e, n, .5, a, d), s = t(a, n, p, o + 1), r = t(d, n, f, o + 1)
        for (var g = 0; g < s; g++) i[g] = p[g]
        for (g = 0; g < r; g++) i[g + s] = f[g]
        return s + r
      }, l = function (t, e) {
        var n, i, o = 0
        n = i = Math.sgn(t[0].y)
        for (var s = 1; s <= e; s++) (n = Math.sgn(t[s].y)) != i && o++, i = n
        return o
      }, u = function (t, e) {
        var n, i, s, r, a, l, u, c, h
        r = t[0].y - t[e].y, a = t[e].x - t[0].x, l = t[0].x * t[e].y - t[e].x * t[0].y, c = h = 0
        for (var d = 1; d < e; d++) {
          var p = r * t[d].x + a * t[d].y + l
          p > c ? c = p : p < h && (h = p)
        }
        return 0, 1, 0, n = (1 * (l - c) - 0 * (u = a)) * (1 / (0 * u - 1 * r)), i = (1 * (l - h) - 0 * (u = a)) * (1 / (0 * u - 1 * r)), s = Math.min(n, i), Math.max(n, i) - s < o ? 1 : 0
      }, c = function (t, e) {
        var n = t[e].x - t[0].x, i = t[e].y - t[0].y, o = t[0].x - 0
        return 0 + 1 * ((n * (t[0].y - 0) - i * o) * (1 / (0 * n - 1 * i)))
      }, h = function (t, e, n, i, o) {
        for (var s = [[]], r = 0; r <= e; r++) s[0][r] = t[r]
        for (var a = 1; a <= e; a++) for (r = 0; r <= e - a; r++) s[a] || (s[a] = []), s[a][r] || (s[a][r] = {}), s[a][r].x = (1 - n) * s[a - 1][r].x + n * s[a - 1][r + 1].x, s[a][r].y = (1 - n) * s[a - 1][r].y + n * s[a - 1][r + 1].y
        if (null != i) for (r = 0; r <= e; r++) i[r] = s[r][0]
        if (null != o) for (r = 0; r <= e; r++) o[r] = s[e - r][r]
        return s[e][0]
      }, d = {}, p = function (t, e) {
        for (var n = function (t) {
          var e = d[t]
          if (!e) {
            var n = function (t) {
              return function (e) {
                return t
              }
            }, i = function () {
              return function (t) {
                return t
              }
            }, o = function () {
              return function (t) {
                return 1 - t
              }
            }, s = function (t) {
              return function (e) {
                for (var n = 1, i = 0; i < t.length; i++) n *= t[i](e)
                return n
              }
            };
            (e = []).push(new function () {
              return function (e) {
                return Math.pow(e, t)
              }
            })
            for (var r = 1; r < t; r++) {
              for (var a = [new n(t)], l = 0; l < t - r; l++) a.push(new i)
              for (l = 0; l < r; l++) a.push(new o)
              e.push(new s(a))
            }
            e.push(new function () {
              return function (e) {
                return Math.pow(1 - e, t)
              }
            }), d[t] = e
          }
          return e
        }(t.length - 1), i = 0, o = 0, s = 0; s < t.length; s++) {
          i += t[s].x * n[s](e), o += t[s].y * n[s](e)
        }
        return {x: i, y: o}
      }, f = function (t, e) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
      }, g = function (t) {
        return t[0].x === t[1].x && t[0].y === t[1].y
      }, m = function (t, e, n) {
        if (g(t)) return {point: t[0], location: e}
        for (var i = p(t, e), o = 0, s = e, r = n > 0 ? 1 : -1, a = null; o < Math.abs(n);) a = p(t, s += .005 * r), o += f(a, i), i = a
        return {point: a, location: s}
      }, v = function (t, e) {
        var n = p(t, e), i = p(t.slice(0, t.length - 1), e), o = i.y - n.y, s = i.x - n.x
        return 0 === o ? 1 / 0 : Math.atan(o / s)
      }, b = function (t, e, n, i, o) {
        var s = i - e, r = t - n, a = t * (e - i) + e * (n - t), l = function (t) {
            return [y(t, 'x'), y(t, 'y')]
          }(o),
          u = [s * l[0][0] + r * l[1][0], s * l[0][1] + r * l[1][1], s * l[0][2] + r * l[1][2], s * l[0][3] + r * l[1][3] + a],
          c = function (t, e, n, i) {
            var o, s, r = e / t, a = n / t, l = i / t, u = (3 * a - Math.pow(r, 2)) / 9,
              c = (9 * r * a - 27 * l - 2 * Math.pow(r, 3)) / 54, h = Math.pow(u, 3) + Math.pow(c, 2), d = []
            if (h >= 0) {
              o = P(c + Math.sqrt(h)) * Math.pow(Math.abs(c + Math.sqrt(h)), 1 / 3), s = P(c - Math.sqrt(h)) * Math.pow(Math.abs(c - Math.sqrt(h)), 1 / 3), d[0] = -r / 3 + (o + s), d[1] = -r / 3 - (o + s) / 2, d[2] = -r / 3 - (o + s) / 2, 0 !== Math.abs(Math.sqrt(3) * (o - s) / 2) && (d[1] = -1, d[2] = -1)
            } else {
              var p = Math.acos(c / Math.sqrt(-Math.pow(u, 3)))
              d[0] = 2 * Math.sqrt(-u) * Math.cos(p / 3) - r / 3, d[1] = 2 * Math.sqrt(-u) * Math.cos((p + 2 * Math.PI) / 3) - r / 3, d[2] = 2 * Math.sqrt(-u) * Math.cos((p + 4 * Math.PI) / 3) - r / 3
            }
            for (var f = 0; f < 3; f++) (d[f] < 0 || d[f] > 1) && (d[f] = -1)
            return d
          }.apply(null, u), h = []
        if (null != c) {
          for (var d = 0; d < 3; d++) {
            var p, f = c[d], g = Math.pow(f, 2), m = Math.pow(f, 3),
              v = [l[0][0] * m + l[0][1] * g + l[0][2] * f + l[0][3], l[1][0] * m + l[1][1] * g + l[1][2] * f + l[1][3]]
            p = n - t != 0 ? (v[0] - t) / (n - t) : (v[1] - e) / (i - e), f >= 0 && f <= 1 && p >= 0 && p <= 1 && h.push(v)
          }
        }
        return h
      }

      function y (t, e) {
        return [-t[0][e] + 3 * t[1][e] + -3 * t[2][e] + t[3][e], 3 * t[0][e] - 6 * t[1][e] + 3 * t[2][e], -3 * t[0][e] + 3 * t[1][e], t[0][e]]
      }

      function P (t) {
        return t < 0 ? -1 : t > 0 ? 1 : 0
      }

      var x = this.jsBezier = {
        distanceFromCurve: s, gradientAtPoint: v, gradientAtPointAlongCurveFrom: function (t, e, n) {
          var i = m(t, e, n)
          return i.location > 1 && (i.location = 1), i.location < 0 && (i.location = 0), v(t, i.location)
        }, nearestPointOnCurve: function (t, e) {
          var n = s(t, e)
          return {point: h(e, e.length - 1, n.location, null, null), location: n.location}
        }, pointOnCurve: p, pointAlongCurveFrom: function (t, e, n) {
          return m(t, e, n).point
        }, perpendicularToCurveAt: function (t, e, n, i) {
          var o = m(t, e, i = null == i ? 0 : i), s = v(t, o.location), r = Math.atan(-1 / s), a = n / 2 * Math.sin(r),
            l = n / 2 * Math.cos(r)
          return [{x: o.point.x + l, y: o.point.y + a}, {x: o.point.x - l, y: o.point.y - a}]
        }, locationAlongCurveFrom: function (t, e, n) {
          return m(t, e, n).location
        }, getLength: function (t) {
          if (g(t)) return 0
          for (var e = p(t, 0), n = 0, i = 0, o = null; i < 1;) o = p(t, i += .005), n += f(o, e), e = o
          return n
        }, lineIntersection: b, boxIntersection: function (t, e, n, i, o) {
          var s = []
          return s.push.apply(s, b(t, e, t + n, e, o)), s.push.apply(s, b(t + n, e, t + n, e + i, o)), s.push.apply(s, b(t + n, e + i, t, e + i, o)), s.push.apply(s, b(t, e + i, t, e, o)), s
        }, boundingBoxIntersection: function (t, e) {
          var n = []
          return n.push.apply(n, b(t.x, t.y, t.x + t.w, t.y, e)), n.push.apply(n, b(t.x + t.w, t.y, t.x + t.w, t.y + t.h, e)), n.push.apply(n, b(t.x + t.w, t.y + t.h, t.x, t.y + t.h, e)), n.push.apply(n, b(t.x, t.y + t.h, t.x, t.y, e)), n
        }, version: '0.9.0'
      }
      'undefined' != typeof exports && (exports.jsBezier = x)
    }).call('undefined' != typeof window ? window : this), function () {
      var t = this.Biltong = {version: '0.4.0'}
      'undefined' != typeof exports && (exports.Biltong = t)
      var e = function (t) {
        return '[object Array]' === Object.prototype.toString.call(t)
      }, n = function (t, n, i) {
        return i(t = e(t) ? t : [t.x, t.y], n = e(n) ? n : [n.x, n.y])
      }, i = t.gradient = function (t, e) {
        return n(t, e, function (t, e) {
          return e[0] == t[0] ? e[1] > t[1] ? 1 / 0 : -1 / 0 : e[1] == t[1] ? e[0] > t[0] ? 0 : -0 : (e[1] - t[1]) / (e[0] - t[0])
        })
      }, o = (t.normal = function (t, e) {
        return -1 / i(t, e)
      }, t.lineLength = function (t, e) {
        return n(t, e, function (t, e) {
          return Math.sqrt(Math.pow(e[1] - t[1], 2) + Math.pow(e[0] - t[0], 2))
        })
      }, t.quadrant = function (t, e) {
        return n(t, e, function (t, e) {
          return e[0] > t[0] ? e[1] > t[1] ? 2 : 1 : e[0] == t[0] ? e[1] > t[1] ? 2 : 1 : e[1] > t[1] ? 3 : 4
        })
      }), s = (t.theta = function (t, e) {
        return n(t, e, function (t, e) {
          var n = i(t, e), s = Math.atan(n), r = o(t, e)
          return 4 != r && 3 != r || (s += Math.PI), s < 0 && (s += 2 * Math.PI), s
        })
      }, t.intersects = function (t, e) {
        var n = t.x, i = t.x + t.w, o = t.y, s = t.y + t.h, r = e.x, a = e.x + e.w, l = e.y, u = e.y + e.h
        return n <= r && r <= i && o <= l && l <= s || n <= a && a <= i && o <= l && l <= s || n <= r && r <= i && o <= u && u <= s || n <= a && r <= i && o <= u && u <= s || r <= n && n <= a && l <= o && o <= u || r <= i && i <= a && l <= o && o <= u || r <= n && n <= a && l <= s && s <= u || r <= i && n <= a && l <= s && s <= u
      }, t.encloses = function (t, e, n) {
        var i = t.x, o = t.x + t.w, s = t.y, r = t.y + t.h, a = e.x, l = e.x + e.w, u = e.y, c = e.y + e.h,
          h = function (t, e, i, o) {
            return n ? t <= e && i >= o : t < e && i > o
          }
        return h(i, a, o, l) && h(s, u, r, c)
      }, [null, [1, -1], [1, 1], [-1, 1], [-1, -1]]), r = [null, [-1, -1], [-1, 1], [1, 1], [1, -1]]
      t.pointOnLine = function (t, e, n) {
        var a = i(t, e), l = o(t, e), u = n > 0 ? s[l] : r[l], c = Math.atan(a), h = Math.abs(n * Math.sin(c)) * u[1],
          d = Math.abs(n * Math.cos(c)) * u[0]
        return {x: t.x + d, y: t.y + h}
      }, t.perpendicularLineTo = function (t, e, n) {
        var o = i(t, e), s = Math.atan(-1 / o), r = n / 2 * Math.sin(s), a = n / 2 * Math.cos(s)
        return [{x: e.x + a, y: e.y + r}, {x: e.x - a, y: e.y - r}]
      }
    }.call('undefined' != typeof window ? window : this), function () {
      function t (t, e, n, i, o, s, r, a) {
        return function () {
          var t = []
          return Array.prototype.push.apply(t, arguments), t.item = function (t) {
            return this[t]
          }, t
        }(function (t, e, n, i, o, s, r, a) {
          return new Touch({
            target: e,
            identifier: D(),
            pageX: n,
            pageY: i,
            screenX: o,
            screenY: s,
            clientX: r || o,
            clientY: a || s
          })
        }.apply(null, arguments))
      }

      var e = function (t, e, n) {
          for (var i = (n = n || t.parentNode).querySelectorAll(e), o = 0; o < i.length; o++) if (i[o] === t) return !0
          return !1
        }, n = function (t) {
          return 'string' == typeof t || t.constructor === String ? document.getElementById(t) : t
        }, i = function (t) {
          return t.srcElement || t.target
        }, o = function (t, e, n, i) {
          if (i) {
            if (void 0 !== t.path && t.path.indexOf) return {path: t.path, end: t.path.indexOf(n)}
            var o = {path: [], end: -1}
            return function t (e) {
              o.path.push(e), e === n ? o.end = o.path.length - 1 : null != e.parentNode && t(e.parentNode)
            }(e), o
          }
          return {path: [e], end: 1}
        }, s = function (t, e) {
          for (var n = 0, i = t.length; n < i && t[n] != e; n++)
          n < t.length && t.splice(n, 1)
        }, r = 1, a = function (t, e, n) {
          var i = r++
          return t.__ta = t.__ta || {}, t.__ta[e] = t.__ta[e] || {}, t.__ta[e][i] = n, n.__tauid = i, i
        }, l = function (t, e, n) {
          if (t.__ta && t.__ta[e] && delete t.__ta[e][n.__tauid], n.__taExtra) {
            for (var i = 0; i < n.__taExtra.length; i++) E(t, n.__taExtra[i][0], n.__taExtra[i][1])
            n.__taExtra.length = 0
          }
          n.__taUnstore && n.__taUnstore()
        }, u = function (t, n, s, r) {
          if (null == t) return s
          var a = t.split(','), l = function r (l) {
            r.__tauid = s.__tauid
            var u = i(l), c = u, h = o(l, u, n, null != t)
            if (-1 != h.end) {
              for (var d = 0; d < h.end; d++) {
                c = h.path[d]
                for (var p = 0; p < a.length; p++) e(c, a[p], n) && s.apply(c, arguments)
              }
            }
          }
          return c(s, r, l), l
        }, c = function (t, e, n) {
          t.__taExtra = t.__taExtra || [], t.__taExtra.push([e, n])
        }, h = function (t, e, n, i) {
          if (f && m[e]) {
            var o = u(i, t, n, m[e])
            j(t, m[e], o, n)
          }
          'focus' === e && null == t.getAttribute('tabindex') && t.setAttribute('tabindex', '1'), j(t, e, u(i, t, n, e), n)
        }, d = {tap: {touches: 1, taps: 1}, dbltap: {touches: 1, taps: 2}, contextmenu: {touches: 2, taps: 1}},
        p = function (t, e, n, i) {
          for (var o in n.__tamee[t]) n.__tamee[t].hasOwnProperty(o) && n.__tamee[t][o].apply(i, [e])
        }, f = 'ontouchstart' in document.documentElement, g = 'onmousedown' in document.documentElement,
        m = {mousedown: 'touchstart', mouseup: 'touchend', mousemove: 'touchmove'}, v = function () {
          var t = -1
          if ('Microsoft Internet Explorer' == navigator.appName) {
            var e = navigator.userAgent
            null != new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})').exec(e) && (t = parseFloat(RegExp.$1))
          }
          return t
        }(), b = v > -1 && v < 9, y = function (t, e) {
          if (null == t) return [0, 0]
          var n = _(t), i = x(n, 0)
          return [i[e + 'X'], i[e + 'Y']]
        }, P = function (t) {
          return null == t ? [0, 0] : b ? [t.clientX + document.documentElement.scrollLeft, t.clientY + document.documentElement.scrollTop] : y(t, 'page')
        }, x = function (t, e) {
          return t.item ? t.item(e) : t[e]
        }, _ = function (t) {
          return t.touches && t.touches.length > 0 ? t.touches : t.changedTouches && t.changedTouches.length > 0 ? t.changedTouches : t.targetTouches && t.targetTouches.length > 0 ? t.targetTouches : [t]
        }, C = function (t) {
          return _(t).length
        }, j = function (t, e, n, i) {
          if (a(t, e, n), i.__tauid = n.__tauid, t.addEventListener) {
            t.addEventListener(e, n, !1)
          } else if (t.attachEvent) {
            var o = e + n.__tauid
            t['e' + o] = n, t[o] = function () {
              t['e' + o] && t['e' + o](window.event)
            }, t.attachEvent('on' + e, t[o])
          }
        }, E = function t (e, i, o) {
          null != o && S(e, function () {
            var s = n(this)
            if (l(s, i, o), null != o.__tauid) {
              if (s.removeEventListener) {
                s.removeEventListener(i, o, !1), f && m[i] && s.removeEventListener(m[i], o, !1)
              } else if (this.detachEvent) {
                var r = i + o.__tauid
                s[r] && s.detachEvent('on' + i, s[r]), s[r] = null, s['e' + r] = null
              }
            }
            o.__taTouchProxy && t(e, o.__taTouchProxy[1], o.__taTouchProxy[0])
          })
        }, S = function (t, e) {
          if (null != t) {
            t = 'undefined' != typeof Window && 'unknown' != typeof t.top && t == t.top ? [t] : 'string' != typeof t && null == t.tagName && null != t.length ? t : 'string' == typeof t ? document.querySelectorAll(t) : [t]
            for (var n = 0; n < t.length; n++) e.apply(t[n])
          }
        }, D = function () {
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (t) {
            var e = 16 * Math.random() | 0
            return ('x' == t ? e : 3 & e | 8).toString(16)
          })
        }
      this.Mottle = function (r) {
        var l = (r = r || {}).clickThreshold || 250, c = r.dblClickThreshold || 450, v = new function () {
          var t = []
          return function (n, o, s, r) {
            if (!n.__tamee) {
              n.__tamee = {over: !1, mouseenter: [], mouseexit: []}
              var l = function (o) {
                var s = i(o);
                (null == r && s == n && !n.__tamee.over || e(s, r, n) && (null == s.__tamee || !s.__tamee.over)) && (p('mouseenter', o, n, s), s.__tamee = s.__tamee || {}, s.__tamee.over = !0, t.push(s))
              }, c = function (o) {
                for (var s = i(o), r = 0; r < t.length; r++) s != t[r] || e(o.relatedTarget || o.toElement, '*', s) || (s.__tamee.over = !1, t.splice(r, 1), p('mouseexit', o, n, s))
              }
              j(n, 'mouseover', u(r, n, l, 'mouseover'), l), j(n, 'mouseout', u(r, n, c, 'mouseout'), c)
            }
            s.__taUnstore = function () {
              delete n.__tamee[o][s.__tauid]
            }, a(n, o, s), n.__tamee[o][s.__tauid] = s
          }
        }, b = new function (t, n) {
          return function (r, a, l, u) {
            if ('contextmenu' == a && g) {
              h(r, a, l, u)
            } else {
              if (null == r.__taTapHandler) {
                var c = r.__taTapHandler = {tap: [], dbltap: [], contextmenu: [], down: !1, taps: 0, downSelectors: []},
                  p = function () {
                    c.down = !1
                  }, f = function () {
                    c.taps = 0
                  }
                h(r, 'mousedown', function (s) {
                  for (var a = i(s), l = o(s, a, r, null != u), h = !1, d = 0; d < l.end; d++) {
                    if (h) return
                    a = l.path[d]
                    for (var g = 0; g < c.downSelectors.length; g++) {
                      if (null == c.downSelectors[g] || e(a, c.downSelectors[g], r)) {
                        c.down = !0, setTimeout(p, t), setTimeout(f, n), h = !0
                        break
                      }
                    }
                  }
                }), h(r, 'mouseup', function (t) {
                  if (c.down) {
                    var n, s, a = i(t)
                    c.taps++
                    var l = C(t)
                    for (var u in d) {
                      if (d.hasOwnProperty(u)) {
                        var h = d[u]
                        if (h.touches === l && (1 === h.taps || h.taps === c.taps)) {
                          for (var p = 0; p < c[u].length; p++) {
                            s = o(t, a, r, null != c[u][p][1])
                            for (var f = 0; f < s.end; f++) {
                              if (n = s.path[f], null == c[u][p][1] || e(n, c[u][p][1], r)) {
                                c[u][p][0].apply(n, [t])
                                break
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                })
              }
              r.__taTapHandler.downSelectors.push(u), r.__taTapHandler[a].push([l, u]), l.__taUnstore = function () {
                s(r.__taTapHandler[a], l)
              }
            }
          }
        }(l, c), x = r.smartClicks, _ = function (t, e, o, r) {
          null != o && S(t, function () {
            var t = n(this)
            x && 'click' === e ? function (t, e, n, o) {
              null == t.__taSmartClicks && (h(t, 'mousedown', function (e) {
                t.__tad = P(e)
              }, o), h(t, 'mouseup', function (e) {
                t.__tau = P(e)
              }, o), h(t, 'click', function (e) {
                if (t.__tad && t.__tau && t.__tad[0] === t.__tau[0] && t.__tad[1] === t.__tau[1]) for (var n = 0; n < t.__taSmartClicks.length; n++) t.__taSmartClicks[n].apply(i(e), [e])
              }, o), t.__taSmartClicks = [])
              t.__taSmartClicks.push(n), n.__taUnstore = function () {
                s(t.__taSmartClicks, n)
              }
            }(t, 0, o, r) : 'tap' === e || 'dbltap' === e || 'contextmenu' === e ? b(t, e, o, r) : 'mouseenter' === e || 'mouseexit' == e ? v(t, e, o, r) : h(t, e, o, r)
          })
        }
        this.remove = function (t) {
          return S(t, function () {
            var t = n(this)
            if (t.__ta) for (var e in t.__ta) if (t.__ta.hasOwnProperty(e)) for (var i in t.__ta[e]) t.__ta[e].hasOwnProperty(i) && E(t, e, t.__ta[e][i])
            t.parentNode && t.parentNode.removeChild(t)
          }), this
        }, this.on = function (t, e, n, i) {
          var o = arguments[0], s = 4 == arguments.length ? arguments[2] : null, r = arguments[1],
            a = arguments[arguments.length - 1]
          return _(o, r, a, s), this
        }, this.off = function (t, e, n) {
          return E(t, e, n), this
        }, this.trigger = function (e, i, o, s) {
          var r = g && ('undefined' == typeof MouseEvent || null == o || o.constructor === MouseEvent),
            a = f && !g && m[i] ? m[i] : i, l = !(f && !g && m[i]), u = P(o), c = y(o, 'screen'), h = function (t) {
              return y(t, 'client')
            }(o)
          return S(e, function () {
            var e, d = n(this)
            o = o || {screenX: c[0], screenY: c[1], clientX: h[0], clientY: h[1]}
            var p = function (t) {
              s && (t.payload = s)
            }, g = {
              TouchEvent: function (e) {
                var n = t(window, d, 0, u[0], u[1], c[0], c[1], h[0], h[1]);
                (e.initTouchEvent || e.initEvent)(a, !0, !0, window, null, c[0], c[1], h[0], h[1], !1, !1, !1, !1, n, n, n, 1, 0)
              }, MouseEvents: function (t) {
                t.initMouseEvent(a, !0, !0, window, 0, c[0], c[1], h[0], h[1], !1, !1, !1, !1, 1, d)
              }
            }
            if (document.createEvent) {
              var v = !l && !r && f && m[i] ? 'TouchEvent' : 'MouseEvents'
              e = document.createEvent(v), g[v](e), p(e), d.dispatchEvent(e)
            } else {
              document.createEventObject && ((e = document.createEventObject()).eventType = e.eventName = a, e.screenX = c[0], e.screenY = c[1], e.clientX = h[0], e.clientY = h[1], p(e), d.fireEvent('on' + a, e))
            }
          }), this
        }
      }, this.Mottle.consume = function (t, e) {
        t.stopPropagation ? t.stopPropagation() : t.returnValue = !1, !e && t.preventDefault && t.preventDefault()
      }, this.Mottle.pageLocation = P, this.Mottle.setForceTouchEvents = function (t) {
        f = t
      }, this.Mottle.setForceMouseEvents = function (t) {
        g = t
      }, this.Mottle.version = '0.8.0', 'undefined' != typeof exports && (exports.Mottle = this.Mottle)
    }.call('undefined' == typeof window ? this : window), function () {
      var t = function (t, e, n) {
        return -1 === t.indexOf(e) && (n ? t.unshift(e) : t.push(e), !0)
      }, e = function (t, e) {
        var n = t.indexOf(e);
        -1 !== n && t.splice(n, 1)
      }, n = function (t) {
        return null != t && ('string' == typeof t || t.constructor === String)
      }, i = function (t, e, n) {
        for (var i = (n = n || t.parentNode).querySelectorAll(e), o = 0; o < i.length; o++) if (i[o] === t) return !0
        return !1
      }, o = function (t, e, n) {
        if (i(e, n, t)) return e
        for (var o = e.parentNode; null != o && o !== t;) {
          if (i(o, n, t)) return o
          o = o.parentNode
        }
      }, s = function () {
        var t = -1
        if ('Microsoft Internet Explorer' === navigator.appName) {
          var e = navigator.userAgent
          null != new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})').exec(e) && (t = parseFloat(RegExp.$1))
        }
        return t
      }(), r = s > -1 && s < 9, a = 9 === s, l = function (t) {
        if (r) return [t.clientX + document.documentElement.scrollLeft, t.clientY + document.documentElement.scrollTop]
        var e = c(t), n = u(e, 0)
        return a ? [n.pageX || n.clientX, n.pageY || n.clientY] : [n.pageX, n.pageY]
      }, u = function (t, e) {
        return t.item ? t.item(e) : t[e]
      }, c = function (t) {
        return t.touches && t.touches.length > 0 ? t.touches : t.changedTouches && t.changedTouches.length > 0 ? t.changedTouches : t.targetTouches && t.targetTouches.length > 0 ? t.targetTouches : [t]
      }, h = {
        delegatedDraggable: 'katavorio-delegated-draggable',
        draggable: 'katavorio-draggable',
        droppable: 'katavorio-droppable',
        drag: 'katavorio-drag',
        selected: 'katavorio-drag-selected',
        active: 'katavorio-drag-active',
        hover: 'katavorio-drag-hover',
        noSelect: 'katavorio-drag-no-select',
        ghostProxy: 'katavorio-ghost-proxy',
        clonedDrag: 'katavorio-clone-drag'
      }, d = ['stop', 'start', 'drag', 'drop', 'over', 'out', 'beforeStart'], p = function () {
      }, f = function () {
        return !0
      }, g = function (t, e, n) {
        for (var i = 0; i < t.length; i++) t[i] != n && e(t[i])
      }, m = function (t, e, n, i) {
        g(t, function (t) {
          t.setActive(e), e && t.updatePosition(), n && t.setHover(i, e)
        })
      }, v = function (t, e) {
        if (null != t) {
          t = n(t) || null != t.tagName || null == t.length ? [t] : t
          for (var i = 0; i < t.length; i++) e.apply(t[i], [t[i]])
        }
      }, b = function (t) {
        t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : t.returnValue = !1
      }, y = function (t, e, n, i) {
        this.params = e || {}, this.el = t, this.params.addClass(this.el, this._class), this.uuid = j()
        var o = !0
        return this.setEnabled = function (t) {
          o = t
        }, this.isEnabled = function () {
          return o
        }, this.toggleEnabled = function () {
          o = !o
        }, this.setScope = function (t) {
          this.scopes = t ? t.split(/\s+/) : [i]
        }, this.addScope = function (t) {
          var e = {}
          for (var n in v(this.scopes, function (t) {
            e[t] = !0
          }), v(t ? t.split(/\s+/) : [], function (t) {
            e[t] = !0
          }), this.scopes = [], e) {
            this.scopes.push(n)
          }
        }, this.removeScope = function (t) {
          var e = {}
          for (var n in v(this.scopes, function (t) {
            e[t] = !0
          }), v(t ? t.split(/\s+/) : [], function (t) {
            delete e[t]
          }), this.scopes = [], e) {
            this.scopes.push(n)
          }
        }, this.toggleScope = function (t) {
          var e = {}
          for (var n in v(this.scopes, function (t) {
            e[t] = !0
          }), v(t ? t.split(/\s+/) : [], function (t) {
            e[t] ? delete e[t] : e[t] = !0
          }), this.scopes = [], e) {
            this.scopes.push(n)
          }
        }, this.setScope(e.scope), this.k = e.katavorio, e.katavorio
      }, P = function () {
        return !0
      }, x = function () {
        return !1
      }, _ = function (t, e, s, r) {
        this._class = s.draggable
        var a = y.apply(this, arguments)
        this.rightButtonCanDrag = this.params.rightButtonCanDrag
        var u, c, d, p, g = [0, 0], v = null, _ = null, C = [0, 0], S = !1, D = [0, 0],
          w = !1 !== this.params.consumeStartEvent, I = this.el, A = this.params.clone,
          k = (this.params.scroll, !1 !== e.multipleDrop), O = !1,
          M = !0 === e.ghostProxy ? P : e.ghostProxy && 'function' == typeof e.ghostProxy ? e.ghostProxy : x, T = null,
          L = [], F = null, N = e.ghostProxyParent
        if (e.selector) {
          var B = t.getAttribute('katavorio-draggable')
          null == B && (B = '' + (new Date).getTime(), t.setAttribute('katavorio-draggable', B)), L.push(e)
        }
        var R, G = e.snapThreshold, U = function (t, e, n, i, o) {
          var s = e * Math.floor(t[0] / e), r = s + e,
            a = Math.abs(t[0] - s) <= i ? s : Math.abs(r - t[0]) <= i ? r : t[0], l = n * Math.floor(t[1] / n),
            u = l + n
          return [a, Math.abs(t[1] - l) <= o ? l : Math.abs(u - t[1]) <= o ? u : t[1]]
        }
        this.posses = [], this.posseRoles = {}, this.toGrid = function (t) {
          if (null == this.params.grid) return t
          var e = this.params.grid ? this.params.grid[0] / 2 : G || 5,
            n = this.params.grid ? this.params.grid[1] / 2 : G || 5
          return U(t, this.params.grid[0], this.params.grid[1], e, n)
        }, this.snap = function (t, e) {
          if (null != I) {
            t = t || (this.params.grid ? this.params.grid[0] : 10), e = e || (this.params.grid ? this.params.grid[1] : 10)
            var n = this.params.getPosition(I), i = this.params.grid ? this.params.grid[0] / 2 : G,
              o = this.params.grid ? this.params.grid[1] / 2 : G, s = U(n, t, e, i, o)
            return this.params.setPosition(I, s), s
          }
        }, this.setUseGhostProxy = function (t) {
          M = t ? P : x
        }
        var X, Y = function (t) {
          return !1 === e.allowNegative ? [Math.max(0, t[0]), Math.max(0, t[1])] : t
        }, H = function (t) {
          R = 'function' == typeof t ? t : t ? function (t, e, n, i) {
            return Y([Math.max(0, Math.min(n.w - i[0], t[0])), Math.max(0, Math.min(n.h - i[1], t[1]))])
          }.bind(this) : function (t) {
            return Y(t)
          }
        }.bind(this)
        H('function' == typeof this.params.constrain ? this.params.constrain : this.params.constrain || this.params.containment), this.setConstrain = function (t) {
          H(t)
        }, this.setRevert = function (t) {
          X = t
        }, this.params.revert && (X = this.params.revert)
        var W = {}, z = this.setFilter = function (e, o) {
          if (e) {
            var s = 'function' == typeof (r = e) ? (r._katavorioId = j(), r._katavorioId) : r
            W[s] = [function (o) {
              var s, r = o.srcElement || o.target
              return n(e) ? s = i(r, e, t) : 'function' == typeof e && (s = e(o, t)), s
            }, !1 !== o]
          }
          var r
        }
        this.addFilter = z, this.removeFilter = function (t) {
          var e = 'function' == typeof t ? t._katavorioId : t
          delete W[e]
        }
        this.clearAllFilters = function () {
          W = {}
        }, this.canDrag = this.params.canDrag || f
        var V, q = [], $ = []
        this.addSelector = function (t) {
          t.selector && L.push(t)
        }, this.downListener = function (t) {
          var e, n, r, u, c, d, p, f, m
          if (!t.defaultPrevented && ((this.rightButtonCanDrag || 3 !== t.which && 2 !== t.button) && this.isEnabled() && this.canDrag())) {
            if (function (t) {
              for (var e in W) {
                var n = W[e], i = n[0](t)
                if (n[1] && (i = !i), !i) return !1
              }
              return !0
            }(t) && function (t, e, n) {
              var o = t.srcElement || t.target
              return !i(o, n.getInputFilterSelector(), e)
            }(t, this.el, this.k)) {
              if (F = null, T = null, L.length > 0) {
                var y = function (t, e, n) {
                  for (var s = null, r = e.getAttribute('katavorio-draggable'), a = null != r ? '[katavorio-draggable=\'' + r + '\'] ' : '', l = 0; l < t.length; l++) {
                    if (null != (s = o(e, n, a + t[l].selector))) {
                      if (t[l].filter) {
                        var u = i(n, t[l].filter, s)
                        if (!0 === t[l].filterExclude && !u || u) return null
                      }
                      return [t[l], s]
                    }
                  }
                  return null
                }(L, this.el, t.target || t.srcElement)
                if (null != y && (F = y[0], T = y[1]), null == T) return
              } else {
                T = this.el
              }
              if (A) {
                if (I = T.cloneNode(!0), this.params.addClass(I, h.clonedDrag), I.setAttribute('id', null), I.style.position = 'absolute', null != this.params.parent) {
                  var P = this.params.getPosition(this.el)
                  I.style.left = P[0] + 'px', I.style.top = P[1] + 'px', this.params.parent.appendChild(I)
                } else {
                  var x = (e = T.getBoundingClientRect(), n = document.body, r = document.documentElement, u = window.pageYOffset || r.scrollTop || n.scrollTop, c = window.pageXOffset || r.scrollLeft || n.scrollLeft, d = r.clientTop || n.clientTop || 0, p = r.clientLeft || n.clientLeft || 0, f = e.top + u - d, m = e.left + c - p, {
                    top: Math.round(f),
                    left: Math.round(m)
                  })
                  I.style.left = x.left + 'px', I.style.top = x.top + 'px', document.body.appendChild(I)
                }
              } else {
                I = T
              }
              w && b(t), g = l(t), I && I.parentNode && (D = [I.parentNode.scrollLeft, I.parentNode.scrollTop]), this.params.bind(document, 'mousemove', this.moveListener), this.params.bind(document, 'mouseup', this.upListener), a.markSelection(this), a.markPosses(this), this.params.addClass(document.body, s.noSelect), K('beforeStart', {
                el: this.el,
                pos: v,
                e: t,
                drag: this
              })
            } else {
              this.params.consumeFilteredEvents && b(t)
            }
          }
        }.bind(this), this.moveListener = function (t) {
          if (g) {
            if (!S) {
              if (!1 !== K('start', {el: this.el, pos: v, e: t, drag: this})) {
                if (!g) return
                this.mark(!0), S = !0
              } else {
                this.abort()
              }
            }
            if (g) {
              $.length = 0
              var e = l(t), n = e[0] - g[0], i = e[1] - g[1], o = this.params.ignoreZoom ? 1 : a.getZoom()
              I && I.parentNode && (n += I.parentNode.scrollLeft - D[0], i += I.parentNode.scrollTop - D[1]), n /= o, i /= o, this.moveBy(n, i, t), a.updateSelection(n, i, this), a.updatePosses(n, i, this)
            }
          }
        }.bind(this), this.upListener = function (t) {
          g && (g = null, this.params.unbind(document, 'mousemove', this.moveListener), this.params.unbind(document, 'mouseup', this.upListener), this.params.removeClass(document.body, s.noSelect), this.unmark(t), a.unmarkSelection(this, t), a.unmarkPosses(this, t), this.stop(t), a.notifyPosseDragStop(this, t), S = !1, $.length = 0, A ? (I && I.parentNode && I.parentNode.removeChild(I), I = null) : X && !0 === X(I, this.params.getPosition(I)) && (this.params.setPosition(I, v), K('revert', I)))
        }.bind(this), this.getFilters = function () {
          return W
        }, this.abort = function () {
          null != g && this.upListener()
        }, this.getDragElement = function (t) {
          return t ? T || this.el : I || this.el
        }
        var J = {start: [], drag: [], stop: [], over: [], out: [], beforeStart: [], revert: []}
        e.events.start && J.start.push(e.events.start), e.events.beforeStart && J.beforeStart.push(e.events.beforeStart), e.events.stop && J.stop.push(e.events.stop), e.events.drag && J.drag.push(e.events.drag), e.events.revert && J.revert.push(e.events.revert), this.on = function (t, e) {
          J[t] && J[t].push(e)
        }, this.off = function (t, e) {
          if (J[t]) {
            for (var n = [], i = 0; i < J[t].length; i++) J[t][i] !== e && n.push(J[t][i])
            J[t] = n
          }
        }
        var Z, K = function (t, e) {
          var n = null
          if (F && F[t]) {
            n = F[t](e)
          } else if (J[t]) {
            for (var i = 0; i < J[t].length; i++) {
              try {
                var o = J[t][i](e)
                null != o && (n = o)
              } catch (t) {
              }
            }
          }
          return n
        }
        this.notifyStart = function (t) {
          K('start', {el: this.el, pos: this.params.getPosition(I), e: t, drag: this})
        }, this.stop = function (t, e) {
          if (e || S) {
            var n = [], i = a.getSelection(), o = this.params.getPosition(I)
            if (i.length > 0) {
              for (var s = 0; s < i.length; s++) {
                var r = this.params.getPosition(i[s].el)
                n.push([i[s].el, {left: r[0], top: r[1]}, i[s]])
              }
            } else {
              n.push([I, {left: o[0], top: o[1]}, this])
            }
            K('stop', {el: I, pos: Z || o, finalPos: o, e: t, drag: this, selection: n})
          }
        }, this.mark = function (t) {
          var e
          v = this.params.getPosition(I), _ = this.params.getPosition(I, !0), C = [_[0] - v[0], _[1] - v[1]], this.size = this.params.getSize(I), q = a.getMatchingDroppables(this), m(q, !0, !1, this), this.params.addClass(I, this.params.dragClass || s.drag), e = this.params.getConstrainingRectangle ? this.params.getConstrainingRectangle(I) : this.params.getSize(I.parentNode), V = {
            w: e[0],
            h: e[1]
          }, d = 0, p = 0, t && a.notifySelectionDragStart(this)
        }, this.unmark = function (t, n) {
          if (m(q, !1, !0, this), O && M(T, I) ? (Z = [I.offsetLeft - d, I.offsetTop - p], I.parentNode.removeChild(I), I = T) : Z = null, this.params.removeClass(I, this.params.dragClass || s.drag), q.length = 0, O = !1, !n) {
            $.length > 0 && Z && e.setPosition(T, Z), $.sort(E)
            for (var i = 0; i < $.length; i++) {
              if (!0 === $[i].drop(this, t)) break
            }
          }
        }, this.moveBy = function (t, n, i) {
          $.length = 0
          var o = this.toGrid([v[0] + t, v[1] + n]), s = R(o, I, V, this.size)
          if (M(this.el, I)) {
            if (o[0] !== s[0] || o[1] !== s[1]) {
              if (!O) {
                var r = T.cloneNode(!0)
                e.addClass(r, h.ghostProxy), N ? (N.appendChild(r), u = e.getPosition(T.parentNode, !0), c = e.getPosition(e.ghostProxyParent, !0), d = u[0] - c[0], p = u[1] - c[1]) : T.parentNode.appendChild(r), I = r, O = !0
              }
              s = o
            } else {
              O && (I.parentNode.removeChild(I), I = T, O = !1, u = null, c = null, d = 0, p = 0)
            }
          }
          var a = {x: s[0], y: s[1], w: this.size[0], h: this.size[1]},
            l = {x: a.x + C[0], y: a.y + C[1], w: a.w, h: a.h}, f = null
          this.params.setPosition(I, [s[0] + d, s[1] + p])
          for (var g = 0; g < q.length; g++) {
            var m = {x: q[g].pagePosition[0], y: q[g].pagePosition[1], w: q[g].size[0], h: q[g].size[1]}
            this.params.intersects(l, m) && (k || null == f || f === q[g].el) && q[g].canDrop(this) ? (f || (f = q[g].el), $.push(q[g]), q[g].setHover(this, !0, i)) : q[g].isHover() && q[g].setHover(this, !1, i)
          }
          K('drag', {el: this.el, pos: s, e: i, drag: this})
        }, this.destroy = function () {
          this.params.unbind(this.el, 'mousedown', this.downListener), this.params.unbind(document, 'mousemove', this.moveListener), this.params.unbind(document, 'mouseup', this.upListener), this.downListener = null, this.upListener = null, this.moveListener = null
        }, this.params.bind(this.el, 'mousedown', this.downListener), this.params.handle ? z(this.params.handle, !1) : z(this.params.filter, this.params.filterExclude)
      }, C = function (t, e, n, i) {
        this._class = n.droppable, this.params = e || {}, this.rank = e.rank || 0, this._activeClass = this.params.activeClass || n.active, this._hoverClass = this.params.hoverClass || n.hover, y.apply(this, arguments)
        var o = !1
        this.allowLoopback = !1 !== this.params.allowLoopback, this.setActive = function (t) {
          this.params[t ? 'addClass' : 'removeClass'](this.el, this._activeClass)
        }, this.updatePosition = function () {
          this.position = this.params.getPosition(this.el), this.pagePosition = this.params.getPosition(this.el, !0), this.size = this.params.getSize(this.el)
        }, this.canDrop = this.params.canDrop || function (t) {
          return !0
        }, this.isHover = function () {
          return o
        }, this.setHover = function (t, e, n) {
          (e || null == this.el._katavorioDragHover || this.el._katavorioDragHover === t.el._katavorio) && (this.params[e ? 'addClass' : 'removeClass'](this.el, this._hoverClass), this.el._katavorioDragHover = e ? t.el._katavorio : null, o !== e && this.params.events[e ? 'over' : 'out']({
            el: this.el,
            e: n,
            drag: t,
            drop: this
          }), o = e)
        }, this.drop = function (t, e) {
          return this.params.events.drop({drag: t, e: e, drop: this})
        }, this.destroy = function () {
          this._class = null, this._activeClass = null, this._hoverClass = null, o = null
        }
      }, j = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (t) {
          var e = 16 * Math.random() | 0
          return ('x' === t ? e : 3 & e | 8).toString(16)
        })
      }, E = function (t, e) {
        return t.rank < e.rank ? 1 : t.rank > e.rank ? -1 : 0
      }, S = function (t) {
        return null == t ? null : null == (t = 'string' == typeof t || t.constructor === String ? document.getElementById(t) : t) ? null : (t._katavorio = t._katavorio || j(), t)
      }
      this.Katavorio = function (i) {
        var o = [], s = {}
        this._dragsByScope = {}, this._dropsByScope = {}
        var r = 1, a = function (t, e) {
          v(t, function (t) {
            for (var n = 0; n < t.scopes.length; n++) e[t.scopes[n]] = e[t.scopes[n]] || [], e[t.scopes[n]].push(t)
          })
        }, l = function (t, e) {
          var n = 0
          return v(t, function (t) {
            for (var o = 0; o < t.scopes.length; o++) {
              if (e[t.scopes[o]]) {
                var s = i.indexOf(e[t.scopes[o]], t);
                -1 !== s && (e[t.scopes[o]].splice(s, 1), n++)
              }
            }
          }), n > 0
        }, u = (this.getMatchingDroppables = function (t) {
          for (var e = [], n = {}, i = 0; i < t.scopes.length; i++) {
            var o = this._dropsByScope[t.scopes[i]]
            if (o) for (var s = 0; s < o.length; s++) !o[s].canDrop(t) || n[o[s].uuid] || !o[s].allowLoopback && o[s].el === t.el || (n[o[s].uuid] = !0, e.push(o[s]))
          }
          return e.sort(E), e
        }, function (t) {
          t = t || {}
          var e, n = {events: {}}
          for (e in i) n[e] = i[e]
          for (e in t) n[e] = t[e]
          for (e = 0; e < d.length; e++) n.events[d[e]] = t[d[e]] || p
          return n.katavorio = this, n
        }.bind(this)), c = function (t, e) {
          for (var n = 0; n < d.length; n++) e[d[n]] && t.on(d[n], e[d[n]])
        }.bind(this), f = {}, m = i.css || {}, b = i.scope || 'katavorio-drag-scope'
        for (var y in h) f[y] = h[y]
        for (var y in m) f[y] = m[y]
        var P = i.inputFilterSelector || 'input,textarea,select,button,option'
        this.getInputFilterSelector = function () {
          return P
        }, this.setInputFilterSelector = function (t) {
          return P = t, this
        }, this.draggable = function (t, e) {
          var n = []
          return v(t, function (t) {
            if (null != (t = S(t))) {
              if (null == t._katavorioDrag) {
                var o = u(e)
                t._katavorioDrag = new _(t, o, f, b), a(t._katavorioDrag, this._dragsByScope), n.push(t._katavorioDrag), i.addClass(t, o.selector ? f.delegatedDraggable : f.draggable)
              } else {
                c(t._katavorioDrag, e)
              }
            }
          }.bind(this)), n
        }, this.droppable = function (t, e) {
          var n = []
          return v(t, function (t) {
            if (null != (t = S(t))) {
              var o = new C(t, u(e), f, b)
              t._katavorioDrop = t._katavorioDrop || [], t._katavorioDrop.push(o), a(o, this._dropsByScope), n.push(o), i.addClass(t, f.droppable)
            }
          }.bind(this)), n
        }, this.select = function (t) {
          return v(t, function () {
            var t = S(this)
            t && t._katavorioDrag && (s[t._katavorio] || (o.push(t._katavorioDrag), s[t._katavorio] = [t, o.length - 1], i.addClass(t, f.selected)))
          }), this
        }, this.deselect = function (t) {
          return v(t, function () {
            var t = S(this)
            if (t && t._katavorio && s[t._katavorio]) {
              for (var e = [], n = 0; n < o.length; n++) o[n].el !== t && e.push(o[n])
              o = e, delete s[t._katavorio], i.removeClass(t, f.selected)
            }
          }), this
        }, this.deselectAll = function () {
          for (var t in s) {
            var e = s[t]
            i.removeClass(e[0], f.selected)
          }
          o.length = 0, s = {}
        }, this.markSelection = function (t) {
          g(o, function (t) {
            t.mark()
          }, t)
        }, this.markPosses = function (t) {
          t.posses && v(t.posses, function (e) {
            t.posseRoles[e] && I[e] && g(I[e].members, function (t) {
              t.mark()
            }, t)
          })
        }, this.unmarkSelection = function (t, e) {
          g(o, function (t) {
            t.unmark(e)
          }, t)
        }, this.unmarkPosses = function (t, e) {
          t.posses && v(t.posses, function (n) {
            t.posseRoles[n] && I[n] && g(I[n].members, function (t) {
              t.unmark(e, !0)
            }, t)
          })
        }, this.getSelection = function () {
          return o.slice(0)
        }, this.updateSelection = function (t, e, n) {
          g(o, function (n) {
            n.moveBy(t, e)
          }, n)
        }
        var x = function (t, e) {
          e.posses && v(e.posses, function (n) {
            e.posseRoles[n] && I[n] && g(I[n].members, function (e) {
              t(e)
            }, e)
          })
        }
        this.updatePosses = function (t, e, n) {
          x(function (n) {
            n.moveBy(t, e)
          }, n)
        }, this.notifyPosseDragStop = function (t, e) {
          x(function (t) {
            t.stop(e, !0)
          }, t)
        }, this.notifySelectionDragStop = function (t, e) {
          g(o, function (t) {
            t.stop(e, !0)
          }, t)
        }, this.notifySelectionDragStart = function (t, e) {
          g(o, function (t) {
            t.notifyStart(e)
          }, t)
        }, this.setZoom = function (t) {
          r = t
        }, this.getZoom = function () {
          return r
        }
        var j = function (t, e, n, i) {
          v(t, function (t) {
            l(t, n), t[i](e), a(t, n)
          })
        }
        v(['set', 'add', 'remove', 'toggle'], function (t) {
          this[t + 'Scope'] = function (e, n) {
            j(e._katavorioDrag, n, this._dragsByScope, t + 'Scope'), j(e._katavorioDrop, n, this._dropsByScope, t + 'Scope')
          }.bind(this), this[t + 'DragScope'] = function (e, n) {
            j(e.constructor === _ ? e : e._katavorioDrag, n, this._dragsByScope, t + 'Scope')
          }.bind(this), this[t + 'DropScope'] = function (e, n) {
            j(e.constructor === C ? e : e._katavorioDrop, n, this._dropsByScope, t + 'Scope')
          }.bind(this)
        }.bind(this)), this.snapToGrid = function (t, e) {
          for (var n in this._dragsByScope) {
            g(this._dragsByScope[n], function (n) {
              n.snap(t, e)
            })
          }
        }, this.getDragsForScope = function (t) {
          return this._dragsByScope[t]
        }, this.getDropsForScope = function (t) {
          return this._dropsByScope[t]
        }
        var D = function (t, e, n) {
          if ((t = S(t))[e]) {
            var i = o.indexOf(t[e])
            i >= 0 && o.splice(i, 1), l(t[e], n) && v(t[e], function (t) {
              t.destroy()
            }), delete t[e]
          }
        }, w = function (t, e, n, i) {
          (t = S(t))[e] && t[e].off(n, i)
        }
        this.elementRemoved = function (t) {
          this.destroyDraggable(t), this.destroyDroppable(t)
        }, this.destroyDraggable = function (t, e, n) {
          1 === arguments.length ? D(t, '_katavorioDrag', this._dragsByScope) : w(t, '_katavorioDrag', e, n)
        }, this.destroyDroppable = function (t, e, n) {
          1 === arguments.length ? D(t, '_katavorioDrop', this._dropsByScope) : w(t, '_katavorioDrop', e, n)
        }, this.reset = function () {
          this._dragsByScope = {}, this._dropsByScope = {}, o = [], s = {}, I = {}
        }
        var I = {}, A = function (e, i, o) {
          var s, r = n(i) ? i : i.id, a = !!n(i) || !1 !== i.active,
            l = I[r] || (s = {name: r, members: []}, I[r] = s, s)
          return v(e, function (e) {
            if (e._katavorioDrag) {
              if (o && null != e._katavorioDrag.posseRoles[l.name]) return
              t(l.members, e._katavorioDrag), t(e._katavorioDrag.posses, l.name), e._katavorioDrag.posseRoles[l.name] = a
            }
          }), l
        }
        this.addToPosse = function (t, e) {
          for (var n = [], i = 1; i < arguments.length; i++) n.push(A(t, arguments[i]))
          return 1 === n.length ? n[0] : n
        }, this.setPosse = function (t, e) {
          for (var n = [], i = 1; i < arguments.length; i++) n.push(A(t, arguments[i], !0).name)
          return v(t, function (t) {
            if (t._katavorioDrag) {
              var e = function (t, e) {
                for (var n = [], i = 0; i < t.length; i++) -1 === e.indexOf(t[i]) && n.push(t[i])
                return n
              }(t._katavorioDrag.posses, n)
              Array.prototype.push.apply([], t._katavorioDrag.posses)
              for (var i = 0; i < e.length; i++) this.removeFromPosse(t, e[i])
            }
          }.bind(this)), 1 === n.length ? n[0] : n
        }, this.removeFromPosse = function (t, n) {
          if (arguments.length < 2) throw new TypeError('No posse id provided for remove operation')
          for (var i = 1; i < arguments.length; i++) {
            n = arguments[i], v(t, function (t) {
              if (t._katavorioDrag && t._katavorioDrag.posses) {
                var i = t._katavorioDrag
                v(n, function (t) {
                  e(I[t].members, i), e(i.posses, t), delete i.posseRoles[t]
                })
              }
            })
          }
        }, this.removeFromAllPosses = function (t) {
          v(t, function (t) {
            if (t._katavorioDrag && t._katavorioDrag.posses) {
              var n = t._katavorioDrag
              v(n.posses, function (t) {
                e(I[t].members, n)
              }), n.posses.length = 0, n.posseRoles = {}
            }
          })
        }, this.setPosseState = function (t, e, n) {
          var i = I[e]
          i && v(t, function (t) {
            t._katavorioDrag && t._katavorioDrag.posses && (t._katavorioDrag.posseRoles[i.name] = n)
          })
        }
      }, this.Katavorio.version = '1.0.0', 'undefined' != typeof exports && (exports.Katavorio = this.Katavorio)
    }.call('undefined' != typeof window ? window : this), function () {
      this.jsPlumbUtil = this.jsPlumbUtil || {}
      var t = this.jsPlumbUtil

      function e (t) {
        return '[object Array]' === Object.prototype.toString.call(t)
      }

      function n (t) {
        return 'string' == typeof t
      }

      function i (t) {
        return 'boolean' == typeof t
      }

      function o (t) {
        return null != t && '[object Object]' === Object.prototype.toString.call(t)
      }

      function s (t) {
        return '[object Date]' === Object.prototype.toString.call(t)
      }

      function r (t) {
        return '[object Function]' === Object.prototype.toString.call(t)
      }

      function a (t) {
        if (n(t)) return '' + t
        if (i(t)) return !!t
        if (s(t)) return new Date(t.getTime())
        if (r(t)) return t
        if (e(t)) {
          for (var l = [], u = 0; u < t.length; u++) l.push(a(t[u]))
          return l
        }
        if (o(t)) {
          var c = {}
          for (var h in t) c[h] = a(t[h])
          return c
        }
        return t
      }

      function l (t, s, r, l) {
        var u, c, h = {}, d = {}
        for (r = r || [], l = l || [], c = 0; c < r.length; c++) h[r[c]] = !0
        for (c = 0; c < l.length; c++) d[l[c]] = !0
        var p = a(t)
        for (c in s) if (null == p[c] || d[c]) p[c] = s[c] else if (n(s[c]) || i(s[c])) h[c] ? ((u = []).push.apply(u, e(p[c]) ? p[c] : [p[c]]), u.push.apply(u, i(s[c]) ? s[c] : [s[c]]), p[c] = u) : p[c] = s[c] else if (e(s[c])) u = [], e(p[c]) && u.push.apply(u, p[c]), u.push.apply(u, s[c]), p[c] = u else if (o(s[c])) for (var f in o(p[c]) || (p[c] = {}), s[c]) p[c][f] = s[c][f]
        return p
      }

      function u (t, e) {
        if (t) for (var n = 0; n < t.length; n++) if (e(t[n])) return n
        return -1
      }

      function c (t, e) {
        var n = t.indexOf(e)
        return n > -1 && t.splice(n, 1), -1 !== n
      }

      function h (t, e, n, i) {
        var o = t[e]
        return null == o && (o = [], t[e] = o), o[i ? 'unshift' : 'push'](n), o
      }

      function d () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (t) {
          var e = 16 * Math.random() | 0
          return ('x' === t ? e : 3 & e | 8).toString(16)
        })
      }

      function p () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n]
        if (t.logEnabled && 'undefined' != typeof console) {
          try {
            var i = arguments[arguments.length - 1]
            console.log(i)
          } catch (t) {
          }
        }
      }

      'undefined' != typeof exports && (exports.jsPlumbUtil = t), t.isArray = e, t.isNumber = function (t) {
        return '[object Number]' === Object.prototype.toString.call(t)
      }, t.isString = n, t.isBoolean = i, t.isNull = function (t) {
        return null == t
      }, t.isObject = o, t.isDate = s, t.isFunction = r, t.isNamedFunction = function (t) {
        return r(t) && null != t.name && t.name.length > 0
      }, t.isEmpty = function (t) {
        for (var e in t) if (t.hasOwnProperty(e)) return !1
        return !0
      }, t.clone = a, t.merge = l, t.replace = function (t, e, n) {
        if (null != t) {
          var i = t
          return e.replace(/([^\.])+/g, function (t, e, o, s) {
            var r = t.match(/([^\[0-9]+){1}(\[)([0-9+])/), a = function () {
              return i[r[1]] || (i[r[1]] = [], i[r[1]])
            }
            if (o + t.length >= s.length) {
              r ? a()[r[3]] = n : i[t] = n
            } else if (r) {
              var l = a()
              i = l[r[3]] || (l[r[3]] = {}, l[r[3]])
            } else {
              i = i[t] || (i[t] = {}, i[t])
            }
            return ''
          }), t
        }
      }, t.functionChain = function (t, e, n) {
        for (var i = 0; i < n.length; i++) {
          var o = n[i][0][n[i][1]].apply(n[i][0], n[i][2])
          if (o === e) return o
        }
        return t
      }, t.populate = function (t, i, s, a) {
        return function t (l) {
          if (null != l) {
            if (n(l)) {
              return function (t) {
                var e = t.match(/(\${.*?})/g)
                if (null != e) {
                  for (var n = 0; n < e.length; n++) {
                    var o = i[e[n].substring(2, e[n].length - 1)] || ''
                    null != o && (t = t.replace(e[n], o))
                  }
                }
                return t
              }(l)
            }
            if (!r(l) || a || null != s && 0 !== (l.name || '').indexOf(s)) {
              if (e(l)) {
                for (var u = [], c = 0; c < l.length; c++) u.push(t(l[c]))
                return u
              }
              if (o(l)) {
                var h = {}
                for (var d in l) h[d] = t(l[d])
                return h
              }
              return l
            }
            return l(i)
          }
        }(t)
      }, t.findWithFunction = u, t.removeWithFunction = function (t, e) {
        var n = u(t, e)
        return n > -1 && t.splice(n, 1), -1 !== n
      }, t.remove = c, t.addWithFunction = function (t, e, n) {
        -1 === u(t, n) && t.push(e)
      }, t.addToList = h, t.suggest = function (t, e, n) {
        return -1 === t.indexOf(e) && (n ? t.unshift(e) : t.push(e), !0)
      }, t.extend = function (t, n, i) {
        var o
        n = e(n) ? n : [n]
        var s = function (e) {
          for (var n = e.__proto__; null != n;) {
            if (null != n.prototype) {
              for (var i in n.prototype) n.prototype.hasOwnProperty(i) && !t.prototype.hasOwnProperty(i) && (t.prototype[i] = n.prototype[i])
              n = n.prototype.__proto__
            } else {
              n = null
            }
          }
        }
        for (o = 0; o < n.length; o++) {
          for (var r in n[o].prototype) n[o].prototype.hasOwnProperty(r) && !t.prototype.hasOwnProperty(r) && (t.prototype[r] = n[o].prototype[r])
          s(n[o])
        }
        var a = function (t, e) {
          return function () {
            for (o = 0; o < n.length; o++) n[o].prototype[t] && n[o].prototype[t].apply(this, arguments)
            return e.apply(this, arguments)
          }
        }, l = function (e) {
          for (var n in e) t.prototype[n] = a(n, e[n])
        }
        if (arguments.length > 2) for (o = 2; o < arguments.length; o++) l(arguments[o])
        return t
      }, t.uuid = d, t.fastTrim = function (t) {
        if (null == t) return null
        for (var e = t.replace(/^\s\s*/, ''), n = /\s/, i = e.length; n.test(e.charAt(--i));)
        return e.slice(0, i + 1)
      }, t.each = function (t, e) {
        t = null == t.length || 'string' == typeof t ? [t] : t
        for (var n = 0; n < t.length; n++) e(t[n])
      }, t.map = function (t, e) {
        for (var n = [], i = 0; i < t.length; i++) n.push(e(t[i]))
        return n
      }, t.mergeWithParents = function (t, e, n) {
        n = n || 'parent'
        var i = function (t) {
          return t ? e[t] : null
        }, o = function (t) {
          return t ? i(t[n]) : null
        }, s = function t (e) {
          if (null == e) return {}
          if ('string' == typeof e) return i(e)
          if (e.length) {
            for (var n = !1, o = 0, s = void 0; !n && o < e.length;) (s = t(e[o])) ? n = !0 : o++
            return s
          }
        }(t)
        return s ? function t (e, n) {
          if (null == e) return n
          var i = ['anchor', 'anchors', 'cssClass', 'connector', 'paintStyle', 'hoverPaintStyle', 'endpoint', 'endpoints']
          'override' === n.mergeStrategy && Array.prototype.push.apply(i, ['events', 'overlays'])
          var s = l(e, n, [], i)
          return t(o(e), s)
        }(o(s), s) : {}
      }, t.logEnabled = !0, t.log = p, t.wrap = function (t, e, n) {
        return function () {
          var i = null
          try {
            null != e && (i = e.apply(this, arguments))
          } catch (t) {
            p('jsPlumb function failed : ' + t)
          }
          if (null != t && (null == n || i !== n)) {
            try {
              i = t.apply(this, arguments)
            } catch (t) {
              p('wrapped function failed : ' + t)
            }
          }
          return i
        }
      }
      var f = function () {
        return function () {
          var t = this
          this._listeners = {}, this.eventsSuspended = !1, this.tick = !1, this.eventsToDieOn = {ready: !0}, this.queue = [], this.bind = function (e, n, i) {
            var o = function (e) {
              h(t._listeners, e, n, i), n.__jsPlumb = n.__jsPlumb || {}, n.__jsPlumb[d()] = e
            }
            if ('string' == typeof e) o(e) else if (null != e.length) for (var s = 0; s < e.length; s++) o(e[s])
            return t
          }, this.fire = function (t, e, n) {
            if (this.tick) {
              this.queue.unshift(arguments)
            } else {
              if (this.tick = !0, !this.eventsSuspended && this._listeners[t]) {
                var i = this._listeners[t].length, o = 0, s = !1, r = null
                if (!this.shouldFireEvent || this.shouldFireEvent(t, e, n)) {
                  for (; !s && o < i && !1 !== r;) {
                    if (this.eventsToDieOn[t]) {
                      this._listeners[t][o].apply(this, [e, n])
                    } else {
                      try {
                        r = this._listeners[t][o].apply(this, [e, n])
                      } catch (e) {
                        p('jsPlumb: fire failed for event ' + t + ' : ' + e)
                      }
                    }
                    o++, null != this._listeners && null != this._listeners[t] || (s = !0)
                  }
                }
              }
              this.tick = !1, this._drain()
            }
            return this
          }, this._drain = function () {
            var e = t.queue.pop()
            e && t.fire.apply(t, e)
          }, this.unbind = function (t, e) {
            if (0 === arguments.length) {
              this._listeners = {}
            } else if (1 === arguments.length) {
              if ('string' == typeof t) {
                delete this._listeners[t]
              } else if (t.__jsPlumb) {
                var n = void 0
                for (var i in t.__jsPlumb) n = t.__jsPlumb[i], c(this._listeners[n] || [], t)
              }
            } else {
              2 === arguments.length && c(this._listeners[t] || [], e)
            }
            return this
          }, this.getListener = function (e) {
            return t._listeners[e]
          }, this.setSuspendEvents = function (e) {
            t.eventsSuspended = e
          }, this.isSuspendEvents = function () {
            return t.eventsSuspended
          }, this.silently = function (e) {
            t.setSuspendEvents(!0)
            try {
              e()
            } catch (t) {
              p('Cannot execute silent function ' + t)
            }
            t.setSuspendEvents(!1)
          }, this.cleanupListeners = function () {
            for (var e in t._listeners) t._listeners[e] = null
          }
        }
      }()
      t.EventGenerator = f
    }.call('undefined' != typeof window ? window : this), function () {
      this.jsPlumbUtil.matchesSelector = function (t, e, n) {
        for (var i = (n = n || t.parentNode).querySelectorAll(e), o = 0; o < i.length; o++) if (i[o] === t) return !0
        return !1
      }, this.jsPlumbUtil.consume = function (t, e) {
        t.stopPropagation ? t.stopPropagation() : t.returnValue = !1, !e && t.preventDefault && t.preventDefault()
      }, this.jsPlumbUtil.sizeElement = function (t, e, n, i, o) {
        t && (t.style.height = o + 'px', t.height = o, t.style.width = i + 'px', t.width = i, t.style.left = e + 'px', t.style.top = n + 'px')
      }
    }.call('undefined' != typeof window ? window : this), function () {
      var t = {
        deriveAnchor: function (t, e, n, i) {
          return {top: ['TopRight', 'TopLeft'], bottom: ['BottomRight', 'BottomLeft']}[t][e]
        }
      }, e = function (t) {
        this.count = 0, this.instance = t, this.lists = {}, this.instance.addList = function (t, e) {
          return this.listManager.addList(t, e)
        }, this.instance.removeList = function (t) {
          this.listManager.removeList(t)
        }, this.instance.bind('manageElement', function (t) {
          for (var e = this.instance.getSelector(t.el, '[jtk-scrollable-list]'), n = 0; n < e.length; n++) this.addList(e[n])
        }.bind(this)), this.instance.bind('unmanageElement', function (t) {
          this.removeList(t.el)
        }), this.instance.bind('connection', function (t, e) {
          null == e && (this._maybeUpdateParentList(t.source), this._maybeUpdateParentList(t.target))
        }.bind(this))
      }
      this.jsPlumbListManager = e, e.prototype = {
        addList: function (e, i) {
          var o = this.instance.extend({}, t)
          i = this.instance.extend(o, i || {})
          var s = [this.instance.getInstanceIndex(), this.count++].join('_')
          this.lists[s] = new n(this.instance, e, i, s)
        }, removeList: function (t) {
          var e = this.lists[t._jsPlumbList]
          e && (e.destroy(), delete this.lists[t._jsPlumbList])
        }, _maybeUpdateParentList: function (t) {
          for (var e = t.parentNode, n = this.instance.getContainer(); null != e && e !== n;) {
            if (null != e._jsPlumbList && null != this.lists[e._jsPlumbList]) return void e._jsPlumbScrollHandler()
            e = e.parentNode
          }
        }
      }
      var n = function (t, e, n, i) {
        function o (t, e, i, o) {
          return n.anchor ? n.anchor : n.deriveAnchor(t, e, i, o)
        }

        function s (t, e, i, o) {
          return n.deriveEndpoint ? n.deriveEndpoint(t, e, i, o) : n.endpoint ? n.endpoint : i.type
        }

        e._jsPlumbList = i
        var r = function (n) {
          for (var i = t.getSelector(e, '.jtk-managed'), r = t.getId(e), a = 0; a < i.length; a++) {
            if (i[a].offsetTop < e.scrollTop) {
              i[a]._jsPlumbProxies || (i[a]._jsPlumbProxies = i[a]._jsPlumbProxies || [], t.select({source: i[a]}).each(function (n) {
                t.proxyConnection(n, 0, e, r, function () {
                  return s('top', 0, n.endpoints[0], n)
                }, function () {
                  return o('top', 0, n.endpoints[0], n)
                }), i[a]._jsPlumbProxies.push([n, 0])
              }), t.select({target: i[a]}).each(function (n) {
                t.proxyConnection(n, 1, e, r, function () {
                  return s('top', 1, n.endpoints[1], n)
                }, function () {
                  return o('top', 1, n.endpoints[1], n)
                }), i[a]._jsPlumbProxies.push([n, 1])
              }))
            } else if (i[a].offsetTop > e.scrollTop + e.offsetHeight) {
              i[a]._jsPlumbProxies || (i[a]._jsPlumbProxies = i[a]._jsPlumbProxies || [], t.select({source: i[a]}).each(function (n) {
                t.proxyConnection(n, 0, e, r, function () {
                  return s('bottom', 0, n.endpoints[0], n)
                }, function () {
                  return o('bottom', 0, n.endpoints[0], n)
                }), i[a]._jsPlumbProxies.push([n, 0])
              }), t.select({target: i[a]}).each(function (n) {
                t.proxyConnection(n, 1, e, r, function () {
                  return s('bottom', 1, n.endpoints[1], n)
                }, function () {
                  return o('bottom', 1, n.endpoints[1], n)
                }), i[a]._jsPlumbProxies.push([n, 1])
              }))
            } else if (i[a]._jsPlumbProxies) {
              for (var l = 0; l < i[a]._jsPlumbProxies.length; l++) t.unproxyConnection(i[a]._jsPlumbProxies[l][0], i[a]._jsPlumbProxies[l][1], r)
              delete i[a]._jsPlumbProxies
            }
            t.revalidate(i[a])
          }
          !function (e) {
            for (var n = e.parentNode, i = t.getContainer(); null != n && n !== i;) {
              if (t.hasClass(n, 'jtk-managed')) return void t.recalculateOffsets(n)
              n = n.parentNode
            }
          }(e)
        }
        t.setAttribute(e, 'jtk-scrollable-list', 'true'), e._jsPlumbScrollHandler = r, t.on(e, 'scroll', r), r(), this.destroy = function () {
          t.off(e, 'scroll', r), delete e._jsPlumbScrollHandler
          for (var n = t.getSelector(e, '.jtk-managed'), i = t.getId(e), o = 0; o < n.length; o++) {
            if (n[o]._jsPlumbProxies) {
              for (var s = 0; s < n[o]._jsPlumbProxies.length; s++) t.unproxyConnection(n[o]._jsPlumbProxies[s][0], n[o]._jsPlumbProxies[s][1], i)
              delete n[o]._jsPlumbProxies
            }
          }
        }
      }
    }.call('undefined' != typeof window ? window : this), function () {
      var t = this, e = t.jsPlumbUtil, n = function () {
          return '' + (new Date).getTime()
        }, i = function (t) {
          if (t._jsPlumb.paintStyle && t._jsPlumb.hoverPaintStyle) {
            var e = {}
            f.extend(e, t._jsPlumb.paintStyle), f.extend(e, t._jsPlumb.hoverPaintStyle), delete t._jsPlumb.hoverPaintStyle, e.gradient && t._jsPlumb.paintStyle.fill && delete e.gradient, t._jsPlumb.hoverPaintStyle = e
          }
        },
        o = ['tap', 'dbltap', 'click', 'dblclick', 'mouseover', 'mouseout', 'mousemove', 'mousedown', 'mouseup', 'contextmenu'],
        s = function (t) {
          return null == t ? null : t.split(' ')
        }, r = function (t, e, n) {
          for (var i in e) t[i] = n
        }, l = function (t, n, i) {
          if (t.getDefaultType) {
            var o = t.getTypeDescriptor(), s = {}, a = t.getDefaultType(), l = e.merge({}, a)
            r(s, a, '__default')
            for (var u = 0, c = t._jsPlumb.types.length; u < c; u++) {
              var h = t._jsPlumb.types[u]
              if ('__default' !== h) {
                var d = t._jsPlumb.instance.getType(h, o)
                if (null != d) {
                  var p = ['anchor', 'anchors', 'connector', 'paintStyle', 'hoverPaintStyle', 'endpoint', 'endpoints', 'connectorOverlays', 'connectorStyle', 'connectorHoverStyle', 'endpointStyle', 'endpointHoverStyle'],
                    f = []
                  'override' === d.mergeStrategy ? Array.prototype.push.apply(p, ['events', 'overlays', 'cssClass']) : f.push('cssClass'), l = e.merge(l, d, f, p), r(s, d, h)
                }
              }
            }
            n && (l = e.populate(l, n, '_')), t.applyType(l, i, s), i || t.repaint()
          }
        }, c = t.jsPlumbUIComponent = function (t) {
          e.EventGenerator.apply(this, arguments)
          var n = arguments, i = this.idPrefix + (new Date).getTime()
          this._jsPlumb = {
            instance: t._jsPlumb,
            parameters: t.parameters || {},
            paintStyle: null,
            hoverPaintStyle: null,
            paintStyleInUse: null,
            hover: !1,
            beforeDetach: t.beforeDetach,
            beforeDrop: t.beforeDrop,
            overlayPlacements: [],
            hoverClass: t.hoverClass || t._jsPlumb.Defaults.HoverClass,
            types: [],
            typeCache: {}
          }, this.cacheTypeItem = function (t, e, n) {
            this._jsPlumb.typeCache[n] = this._jsPlumb.typeCache[n] || {}, this._jsPlumb.typeCache[n][t] = e
          }, this.getCachedTypeItem = function (t, e) {
            return this._jsPlumb.typeCache[e] ? this._jsPlumb.typeCache[e][t] : null
          }, this.getId = function () {
            return i
          }
          var o = t.overlays || [], s = {}
          if (this.defaultOverlayKeys) {
            for (var r = 0; r < this.defaultOverlayKeys.length; r++) Array.prototype.push.apply(o, this._jsPlumb.instance.Defaults[this.defaultOverlayKeys[r]] || [])
            for (r = 0; r < o.length; r++) {
              var a = f.convertToFullOverlaySpec(o[r])
              s[a[1].id] = a
            }
          }
          var l = {
            overlays: s,
            parameters: t.parameters || {},
            scope: t.scope || this._jsPlumb.instance.getDefaultScope()
          }
          if (this.getDefaultType = function () {
            return l
          }, this.appendToDefaultType = function (t) {
            for (var e in t) l[e] = t[e]
          }, t.events) {
            for (var c in t.events) this.bind(c, t.events[c])
          }
          this.clone = function () {
            var t = u()(this.constructor.prototype)
            return this.constructor.apply(t, n), t
          }.bind(this), this.isDetachAllowed = function (t) {
            var n = !0
            if (this._jsPlumb.beforeDetach) {
              try {
                n = this._jsPlumb.beforeDetach(t)
              } catch (t) {
                e.log('jsPlumb: beforeDetach callback failed', t)
              }
            }
            return n
          }, this.isDropAllowed = function (t, n, i, o, s, r, a) {
            var l = this._jsPlumb.instance.checkCondition('beforeDrop', {
              sourceId: t,
              targetId: n,
              scope: i,
              connection: o,
              dropEndpoint: s,
              source: r,
              target: a
            })
            if (this._jsPlumb.beforeDrop) {
              try {
                l = this._jsPlumb.beforeDrop({
                  sourceId: t,
                  targetId: n,
                  scope: i,
                  connection: o,
                  dropEndpoint: s,
                  source: r,
                  target: a
                })
              } catch (t) {
                e.log('jsPlumb: beforeDrop callback failed', t)
              }
            }
            return l
          }
          var h = []
          this.setListenerComponent = function (t) {
            for (var e = 0; e < h.length; e++) h[e][3] = t
          }
        }, h = function (t, e) {
          var n = t._jsPlumb.types[e], i = t._jsPlumb.instance.getType(n, t.getTypeDescriptor())
          null != i && i.cssClass && t.canvas && t._jsPlumb.instance.removeClass(t.canvas, i.cssClass)
        }
      e.extend(t.jsPlumbUIComponent, e.EventGenerator, {
        getParameter: function (t) {
          return this._jsPlumb.parameters[t]
        }, setParameter: function (t, e) {
          this._jsPlumb.parameters[t] = e
        }, getParameters: function () {
          return this._jsPlumb.parameters
        }, setParameters: function (t) {
          this._jsPlumb.parameters = t
        }, getClass: function () {
          return f.getClass(this.canvas)
        }, hasClass: function (t) {
          return f.hasClass(this.canvas, t)
        }, addClass: function (t) {
          f.addClass(this.canvas, t)
        }, removeClass: function (t) {
          f.removeClass(this.canvas, t)
        }, updateClasses: function (t, e) {
          f.updateClasses(this.canvas, t, e)
        }, setType: function (t, e, n) {
          this.clearTypes(), this._jsPlumb.types = s(t) || [], l(this, e, n)
        }, getType: function () {
          return this._jsPlumb.types
        }, reapplyTypes: function (t, e) {
          l(this, t, e)
        }, hasType: function (t) {
          return -1 !== this._jsPlumb.types.indexOf(t)
        }, addType: function (t, e, n) {
          var i = s(t), o = !1
          if (null != i) {
            for (var r = 0, a = i.length; r < a; r++) this.hasType(i[r]) || (this._jsPlumb.types.push(i[r]), o = !0)
            o && l(this, e, n)
          }
        }, removeType: function (t, e, n) {
          var i = s(t), o = !1, r = function (t) {
            var e = this._jsPlumb.types.indexOf(t)
            return -1 !== e && (h(this, e), this._jsPlumb.types.splice(e, 1), !0)
          }.bind(this)
          if (null != i) {
            for (var a = 0, u = i.length; a < u; a++) o = r(i[a]) || o
            o && l(this, e, n)
          }
        }, clearTypes: function (t, e) {
          for (var n = this._jsPlumb.types.length, i = 0; i < n; i++) h(this, 0), this._jsPlumb.types.splice(0, 1)
          l(this, t, e)
        }, toggleType: function (t, e, n) {
          var i = s(t)
          if (null != i) {
            for (var o = 0, r = i.length; o < r; o++) {
              var a = this._jsPlumb.types.indexOf(i[o]);
              -1 !== a ? (h(this, a), this._jsPlumb.types.splice(a, 1)) : this._jsPlumb.types.push(i[o])
            }
            l(this, e, n)
          }
        }, applyType: function (t, e) {
          if (this.setPaintStyle(t.paintStyle, e), this.setHoverPaintStyle(t.hoverPaintStyle, e), t.parameters) for (var n in t.parameters) this.setParameter(n, t.parameters[n])
          this._jsPlumb.paintStyleInUse = this.getPaintStyle()
        }, setPaintStyle: function (t, e) {
          this._jsPlumb.paintStyle = t, this._jsPlumb.paintStyleInUse = this._jsPlumb.paintStyle, i(this), e || this.repaint()
        }, getPaintStyle: function () {
          return this._jsPlumb.paintStyle
        }, setHoverPaintStyle: function (t, e) {
          this._jsPlumb.hoverPaintStyle = t, i(this), e || this.repaint()
        }, getHoverPaintStyle: function () {
          return this._jsPlumb.hoverPaintStyle
        }, destroy: function (t) {
          (t || null == this.typeId) && (this.cleanupListeners(), this.clone = null, this._jsPlumb = null)
        }, isHover: function () {
          return this._jsPlumb.hover
        }, setHover: function (t, e, i) {
          if (this._jsPlumb && !this._jsPlumb.instance.currentlyDragging && !this._jsPlumb.instance.isHoverSuspended()) {
            this._jsPlumb.hover = t
            var o = t ? 'addClass' : 'removeClass'
            null != this.canvas && (null != this._jsPlumb.instance.hoverClass && this._jsPlumb.instance[o](this.canvas, this._jsPlumb.instance.hoverClass), null != this._jsPlumb.hoverClass && this._jsPlumb.instance[o](this.canvas, this._jsPlumb.hoverClass)), null != this._jsPlumb.hoverPaintStyle && (this._jsPlumb.paintStyleInUse = t ? this._jsPlumb.hoverPaintStyle : this._jsPlumb.paintStyle, this._jsPlumb.instance.isSuspendDrawing() || (i = i || n(), this.repaint({
              timestamp: i,
              recalc: !1
            }))), this.getAttachedElements && !e && function (t, e, n, i) {
              var o = t.getAttachedElements()
              if (o) for (var s = 0, r = o.length; s < r; s++) i && i === o[s] || o[s].setHover(e, !0, n)
            }(this, t, n(), this)
          }
        }
      })
      var d = 0, p = t.jsPlumbInstance = function (i) {
        this.version = '2.12.6', this.Defaults = {
          Anchor: 'Bottom',
          Anchors: [null, null],
          ConnectionsDetachable: !0,
          ConnectionOverlays: [],
          Connector: 'Bezier',
          Container: null,
          DoNotThrowErrors: !1,
          DragOptions: {},
          DropOptions: {},
          Endpoint: 'Dot',
          EndpointOverlays: [],
          Endpoints: [null, null],
          EndpointStyle: {fill: '#456'},
          EndpointStyles: [null, null],
          EndpointHoverStyle: null,
          EndpointHoverStyles: [null, null],
          HoverPaintStyle: null,
          LabelStyle: {color: 'black'},
          LogEnabled: !1,
          Overlays: [],
          MaxConnections: 1,
          PaintStyle: {'stroke-width': 4, stroke: '#456'},
          ReattachConnections: !1,
          RenderMode: 'svg',
          Scope: 'jsPlumb_DefaultScope'
        }, i && f.extend(this.Defaults, i), this.logEnabled = this.Defaults.LogEnabled, this._connectionTypes = {}, this._endpointTypes = {}, e.EventGenerator.apply(this)
        var s = this, r = function () {
          var t = d + 1
          return d++, t
        }(), l = s.bind, u = {}, h = 1, p = function (t) {
          if (null == t) return null
          if (3 === t.nodeType || 8 === t.nodeType) return {el: t, text: !0}
          var n = s.getElement(t)
          return {el: n, id: e.isString(t) && null == n ? t : X(n)}
        }
        for (var g in this.getInstanceIndex = function () {
          return r
        }, this.setZoom = function (t, e) {
          return h = t, s.fire('zoom', h), e && s.repaintEverything(), !0
        }, this.getZoom = function () {
          return h
        }, this.Defaults) {
          u[g] = this.Defaults[g]
        }
        var m, v = []
        this.unbindContainer = function () {
          if (null != m && v.length > 0) for (var t = 0; t < v.length; t++) s.off(m, v[t][0], v[t][1])
        }, this.setContainer = function (t) {
          this.unbindContainer(), t = this.getElement(t), this.select().each(function (e) {
            e.moveParent(t)
          }), this.selectEndpoints().each(function (e) {
            e.moveParent(t)
          })
          var e = m
          m = t, v.length = 0
          for (var n = {endpointclick: 'endpointClick', endpointdblclick: 'endpointDblClick'}, i = function (t, e, i) {
            var o = e.srcElement || e.target,
              r = (o && o.parentNode ? o.parentNode._jsPlumb : null) || (o ? o._jsPlumb : null) || (o && o.parentNode && o.parentNode.parentNode ? o.parentNode.parentNode._jsPlumb : null)
            if (r) {
              r.fire(t, r, e)
              var a = i && n[i + t] || t
              s.fire(a, r.component || r, e)
            }
          }, r = function (t, e, n) {
            v.push([t, n]), s.on(m, t, e, n)
          }, a = function (t) {
            r(t, '.jtk-connector', function (e) {
              i(t, e)
            }), r(t, '.jtk-endpoint', function (e) {
              i(t, e, 'endpoint')
            }), r(t, '.jtk-overlay', function (e) {
              i(t, e)
            })
          }, l = 0; l < o.length; l++) {
            a(o[l])
          }
          for (var u in C) {
            var c = C[u].el
            c.parentNode === e && (e.removeChild(c), m.appendChild(c))
          }
        }, this.getContainer = function () {
          return m
        }, this.bind = function (t, e) {
          'ready' === t && y ? e() : l.apply(s, [t, e])
        }, s.importDefaults = function (t) {
          for (var e in t) s.Defaults[e] = t[e]
          return t.Container && s.setContainer(t.Container), s
        }, s.restoreDefaults = function () {
          return s.Defaults = f.extend({}, u), s
        }
        var b = null, y = !1, P = [], x = {}, _ = {}, C = {}, j = {}, E = {}, S = !1, D = [], w = !1, I = null,
          A = this.Defaults.Scope, k = 1, O = function () {
            return '' + k++
          }, M = function (t, e) {
            m ? m.appendChild(t) : e ? this.getElement(e).appendChild(t) : this.appendToRoot(t)
          }.bind(this), T = function (t, e, i, o) {
            if (!w) {
              var r, a = X(t), l = s.getDragManager()
              l && (r = l.getElementsForDraggable(a)), null == i && (i = n())
              var u = et({elId: a, offset: e, recalc: !1, timestamp: i})
              if (r && u && u.o) {
                for (var c in r) {
                  et({
                    elId: r[c].id,
                    offset: {left: u.o.left + r[c].offset.left, top: u.o.top + r[c].offset.top},
                    recalc: !1,
                    timestamp: i
                  })
                }
              }
              if (s.anchorManager.redraw(a, e, i, null, o), r) for (var h in r) s.anchorManager.redraw(r[h].id, e, i, r[h].offset, o, !0)
            }
          }, L = function (t) {
            return _[t]
          }, F = function (t, n) {
            var i = f.extend({}, t)
            if (n && f.extend(i, n), i.source && (i.source.endpoint ? i.sourceEndpoint = i.source : i.source = s.getElement(i.source)), i.target && (i.target.endpoint ? i.targetEndpoint = i.target : i.target = s.getElement(i.target)), t.uuids && (i.sourceEndpoint = L(t.uuids[0]), i.targetEndpoint = L(t.uuids[1])), i.sourceEndpoint && i.sourceEndpoint.isFull()) {
              e.log(s, 'could not add connection; source endpoint is full')
            } else if (i.targetEndpoint && i.targetEndpoint.isFull()) {
              e.log(s, 'could not add connection; target endpoint is full')
            } else {
              if (!i.type && i.sourceEndpoint && (i.type = i.sourceEndpoint.connectionType), i.sourceEndpoint && i.sourceEndpoint.connectorOverlays) {
                i.overlays = i.overlays || []
                for (var o = 0, r = i.sourceEndpoint.connectorOverlays.length; o < r; o++) i.overlays.push(i.sourceEndpoint.connectorOverlays[o])
              }
              i.sourceEndpoint && i.sourceEndpoint.scope && (i.scope = i.sourceEndpoint.scope), !i['pointer-events'] && i.sourceEndpoint && i.sourceEndpoint.connectorPointerEvents && (i['pointer-events'] = i.sourceEndpoint.connectorPointerEvents)
              var a = function (t, e, n) {
                var o = function (t, e) {
                  var n = f.extend({}, t)
                  for (var i in e) e[i] && (n[i] = e[i])
                  return n
                }(e, {
                  anchor: i.anchors ? i.anchors[n] : i.anchor,
                  endpoint: i.endpoints ? i.endpoints[n] : i.endpoint,
                  paintStyle: i.endpointStyles ? i.endpointStyles[n] : i.endpointStyle,
                  hoverPaintStyle: i.endpointHoverStyles ? i.endpointHoverStyles[n] : i.endpointHoverStyle
                })
                return s.addEndpoint(t, o)
              }, l = function (t, e, n, o) {
                if (i[t] && !i[t].endpoint && !i[t + 'Endpoint'] && !i.newConnection) {
                  var s = n[X(i[t])]
                  if (s = s ? s[o] : null) {
                    if (!s.enabled) return !1
                    var r = f.extend({}, s.def)
                    delete r.label
                    var l = null != s.endpoint && s.endpoint._jsPlumb ? s.endpoint : a(i[t], r, e)
                    if (l.isFull()) return !1
                    i[t + 'Endpoint'] = l, !i.scope && r.scope && (i.scope = r.scope), s.uniqueEndpoint ? s.endpoint ? l.finalEndpoint = s.endpoint : (s.endpoint = l, l.setDeleteOnEmpty(!1)) : l.setDeleteOnEmpty(!0), 0 === e && s.def.connectorOverlays && (i.overlays = i.overlays || [], Array.prototype.push.apply(i.overlays, s.def.connectorOverlays))
                  }
                }
              }
              if (!1 !== l('source', 0, this.sourceEndpointDefinitions, i.type || 'default') && !1 !== l('target', 1, this.targetEndpointDefinitions, i.type || 'default')) {
                return i.sourceEndpoint && i.targetEndpoint && (function (t, e) {
                  for (var n = t.scope.split(/\s/), i = e.scope.split(/\s/), o = 0; o < n.length; o++) for (var s = 0; s < i.length; s++) if (i[s] === n[o]) return !0
                  return !1
                }(i.sourceEndpoint, i.targetEndpoint) || (i = null)), i
              }
            }
          }.bind(s), N = function t (e) {
            var n = s.Defaults.ConnectionType || s.getDefaultConnectionType()
            e._jsPlumb = s, e.newConnection = t, e.newEndpoint = R, e.endpointsByUUID = _, e.endpointsByElement = x, e.finaliseConnection = B, e.id = 'con_' + O()
            var i = new n(e)
            return i.isDetachable() && (i.endpoints[0].initDraggable('_jsPlumbSource'), i.endpoints[1].initDraggable('_jsPlumbTarget')), i
          }, B = s.finaliseConnection = function (t, e, n, i) {
            if (e = e || {}, t.suspendedEndpoint || P.push(t), t.pending = null, t.endpoints[0].isTemporarySource = !1, !1 !== i && s.anchorManager.newConnection(t), T(t.source), !e.doNotFireConnectionEvent && !1 !== e.fireEvent) {
              var o = {
                connection: t,
                source: t.source,
                target: t.target,
                sourceId: t.sourceId,
                targetId: t.targetId,
                sourceEndpoint: t.endpoints[0],
                targetEndpoint: t.endpoints[1]
              }
              s.fire('connection', o, n)
            }
          }, R = function t (e, n) {
            var i = s.Defaults.EndpointType || f.Endpoint, o = f.extend({}, e)
            o._jsPlumb = s, o.newConnection = N, o.newEndpoint = t, o.endpointsByUUID = _, o.endpointsByElement = x, o.fireDetachEvent = W, o.elementId = n || X(o.source)
            var r = new i(o)
            return r.id = 'ep_' + O(), tt(o.elementId, o.source), f.headless || s.getDragManager().endpointAdded(o.source, n), r
          }, G = function (t, e, n) {
            var i = x[t]
            if (i && i.length) {
              for (var o = 0, s = i.length; o < s; o++) {
                for (var r = 0, a = i[o].connections.length; r < a; r++) {
                  if (e(i[o].connections[r])) return
                }
                n && n(i[o])
              }
            }
          }, U = function (t, e, n) {
            e = 'block' === e
            var i = null
            n && (i = function (t) {
              t.setVisible(e, !0, !0)
            })
            var o = p(t)
            G(o.id, function (t) {
              if (e && n) {
                var i = t.sourceId === o.id ? 1 : 0
                t.endpoints[i].isVisible() && t.setVisible(!0)
              } else {
                t.setVisible(e)
              }
            }, i)
          }, X = function (t, n, i) {
            if (e.isString(t)) return t
            if (null == t) return null
            var o = s.getAttribute(t, 'id')
            return o && 'undefined' !== o || (2 === arguments.length && void 0 !== arguments[1] ? o = n : (1 === arguments.length || 3 === arguments.length && !arguments[2]) && (o = 'jsPlumb_' + r + '_' + O()), i || s.setAttribute(t, 'id', o)), o
          }
        this.setConnectionBeingDragged = function (t) {
          S = t
        }, this.isConnectionBeingDragged = function () {
          return S
        }, this.getManagedElements = function () {
          return C
        }, this.connectorClass = 'jtk-connector', this.connectorOutlineClass = 'jtk-connector-outline', this.connectedClass = 'jtk-connected', this.hoverClass = 'jtk-hover', this.endpointClass = 'jtk-endpoint', this.endpointConnectedClass = 'jtk-endpoint-connected', this.endpointFullClass = 'jtk-endpoint-full', this.endpointDropAllowedClass = 'jtk-endpoint-drop-allowed', this.endpointDropForbiddenClass = 'jtk-endpoint-drop-forbidden', this.overlayClass = 'jtk-overlay', this.draggingClass = 'jtk-dragging', this.elementDraggingClass = 'jtk-element-dragging', this.sourceElementDraggingClass = 'jtk-source-element-dragging', this.targetElementDraggingClass = 'jtk-target-element-dragging', this.endpointAnchorClassPrefix = 'jtk-endpoint-anchor', this.hoverSourceClass = 'jtk-source-hover', this.hoverTargetClass = 'jtk-target-hover', this.dragSelectClass = 'jtk-drag-select', this.Anchors = {}, this.Connectors = {svg: {}}, this.Endpoints = {svg: {}}, this.Overlays = {svg: {}}, this.ConnectorRenderers = {}, this.SVG = 'svg', this.addEndpoint = function (t, n, i) {
          i = i || {}
          var o = f.extend({}, i)
          f.extend(o, n), o.endpoint = o.endpoint || s.Defaults.Endpoint, o.paintStyle = o.paintStyle || s.Defaults.EndpointStyle
          for (var r = [], a = e.isArray(t) || null != t.length && !e.isString(t) ? t : [t], l = 0, u = a.length; l < u; l++) {
            o.source = s.getElement(a[l]), Q(o.source)
            var c = X(o.source), h = R(o, c), d = tt(c, o.source).info.o
            e.addToList(x, c, h), w || h.paint({
              anchorLoc: h.anchor.compute({
                xy: [d.left, d.top],
                wh: D[c],
                element: h,
                timestamp: I
              }), timestamp: I
            }), r.push(h)
          }
          return 1 === r.length ? r[0] : r
        }, this.addEndpoints = function (t, n, i) {
          for (var o = [], r = 0, a = n.length; r < a; r++) {
            var l = s.addEndpoint(t, n[r], i)
            e.isArray(l) ? Array.prototype.push.apply(o, l) : o.push(l)
          }
          return o
        }, this.animate = function (t, n, i) {
          if (!this.animationSupported) return !1
          i = i || {}
          var o = s.getElement(t), r = X(o), a = f.animEvents.step, l = f.animEvents.complete
          i[a] = e.wrap(i[a], function () {
            s.revalidate(r)
          }), i[l] = e.wrap(i[l], function () {
            s.revalidate(r)
          }), s.doAnimate(o, n, i)
        }, this.checkCondition = function (t, n) {
          var i = s.getListener(t), o = !0
          if (i && i.length > 0) {
            var r = Array.prototype.slice.call(arguments, 1)
            try {
              for (var a = 0, l = i.length; a < l; a++) o = o && i[a].apply(i[a], r)
            } catch (n) {
              e.log(s, 'cannot check condition [' + t + ']' + n)
            }
          }
          return o
        }, this.connect = function (t, n) {
          var i, o = F(t, n)
          if (o) {
            if (null == o.source && null == o.sourceEndpoint) return void e.log('Cannot establish connection - source does not exist')
            if (null == o.target && null == o.targetEndpoint) return void e.log('Cannot establish connection - target does not exist')
            Q(o.source), i = N(o), B(i, o)
          }
          return i
        }
        var Y = [{el: 'source', elId: 'sourceId', epDefs: 'sourceEndpointDefinitions'}, {
          el: 'target',
          elId: 'targetId',
          epDefs: 'targetEndpointDefinitions'
        }], H = function (t, e, n, i) {
          var o, s, r, a = Y[n], l = t[a.elId], u = (t[a.el], t.endpoints[n]), c = {
            index: n,
            originalSourceId: 0 === n ? l : t.sourceId,
            newSourceId: t.sourceId,
            originalTargetId: 1 === n ? l : t.targetId,
            newTargetId: t.targetId,
            connection: t
          }
          if (e.constructor === f.Endpoint) {
            (o = e).addConnection(t), e = o.element
          } else if (s = X(e), r = this[a.epDefs][s], s === t[a.elId]) {
            o = null
          } else if (r) {
            for (var h in r) {
              if (!r[h].enabled) return
              o = null != r[h].endpoint && r[h].endpoint._jsPlumb ? r[h].endpoint : this.addEndpoint(e, r[h].def), r[h].uniqueEndpoint && (r[h].endpoint = o), o.addConnection(t)
            }
          } else {
            o = t.makeEndpoint(0 === n, e, s)
          }
          return null != o && (u.detachFromConnection(t), t.endpoints[n] = o, t[a.el] = o.element, t[a.elId] = o.elementId, c[0 === n ? 'newSourceId' : 'newTargetId'] = o.elementId, z(c), i || t.repaint()), c.element = e, c
        }.bind(this)
        this.setSource = function (t, e, n) {
          var i = H(t, e, 0, n)
          this.anchorManager.sourceChanged(i.originalSourceId, i.newSourceId, t, i.el)
        }, this.setTarget = function (t, e, n) {
          var i = H(t, e, 1, n)
          this.anchorManager.updateOtherEndpoint(i.originalSourceId, i.originalTargetId, i.newTargetId, t)
        }, this.deleteEndpoint = function (t, e, n) {
          var i = 'string' == typeof t ? _[t] : t
          return i && s.deleteObject({endpoint: i, dontUpdateHover: e, deleteAttachedObjects: n}), s
        }, this.deleteEveryEndpoint = function () {
          var t = s.setSuspendDrawing(!0)
          for (var e in x) {
            var n = x[e]
            if (n && n.length) for (var i = 0, o = n.length; i < o; i++) s.deleteEndpoint(n[i], !0)
          }
          x = {}, C = {}, _ = {}, j = {}, E = {}, s.anchorManager.reset()
          var r = s.getDragManager()
          return r && r.reset(), t || s.setSuspendDrawing(!1), s
        }
        var W = function (t, e, n) {
          var i = s.Defaults.ConnectionType || s.getDefaultConnectionType(), o = t.constructor === i ? {
            connection: t,
            source: t.source,
            target: t.target,
            sourceId: t.sourceId,
            targetId: t.targetId,
            sourceEndpoint: t.endpoints[0],
            targetEndpoint: t.endpoints[1]
          } : t
          e && s.fire('connectionDetached', o, n), s.fire('internal.connectionDetached', o, n), s.anchorManager.connectionDetached(o)
        }, z = s.fireMoveEvent = function (t, e) {
          s.fire('connectionMoved', t, e)
        }
        this.unregisterEndpoint = function (t) {
          for (var e in t._jsPlumb.uuid && (_[t._jsPlumb.uuid] = null), s.anchorManager.deleteEndpoint(t), x) {
            var n = x[e]
            if (n) {
              for (var i = [], o = 0, r = n.length; o < r; o++) n[o] !== t && i.push(n[o])
              x[e] = i
            }
            x[e].length < 1 && delete x[e]
          }
        }
        this.deleteConnection = function (t, n) {
          return !(null == t || !(n = n || {}).force && !e.functionChain(!0, !1, [[t.endpoints[0], 'isDetachAllowed', [t]], [t.endpoints[1], 'isDetachAllowed', [t]], [t, 'isDetachAllowed', [t]], [s, 'checkCondition', ['beforeDetach', t]]])) && (t.setHover(!1), W(t, !t.pending && !1 !== n.fireEvent, n.originalEvent), t.endpoints[0].detachFromConnection(t), t.endpoints[1].detachFromConnection(t), e.removeWithFunction(P, function (e) {
            return t.id === e.id
          }), t.cleanup(), t.destroy(), !0)
        }, this.deleteEveryConnection = function (t) {
          t = t || {}
          var e = P.length, n = 0
          return s.batch(function () {
            for (var i = 0; i < e; i++) n += s.deleteConnection(P[0], t) ? 1 : 0
          }), n
        }, this.deleteConnectionsForElement = function (t, e) {
          e = e || {}, t = s.getElement(t)
          var n = X(t), i = x[n]
          if (i && i.length) for (var o = 0, r = i.length; o < r; o++) i[o].deleteEveryConnection(e)
          return s
        }, this.deleteObject = function (t) {
          var n = {endpoints: {}, connections: {}, endpointCount: 0, connectionCount: 0},
            i = !1 !== t.deleteAttachedObjects, o = function (e) {
              null != e && null == n.connections[e.id] && (t.dontUpdateHover || null == e._jsPlumb || e.setHover(!1), n.connections[e.id] = e, n.connectionCount++)
            }
          for (var r in t.connection ? o(t.connection) : function (e) {
            if (null != e && null == n.endpoints[e.id] && (t.dontUpdateHover || null == e._jsPlumb || e.setHover(!1), n.endpoints[e.id] = e, n.endpointCount++, i)) {
              for (var s = 0; s < e.connections.length; s++) {
                var r = e.connections[s]
                o(r)
              }
            }
          }(t.endpoint), n.connections) {
            var a = n.connections[r]
            if (a._jsPlumb) {
              e.removeWithFunction(P, function (t) {
                return a.id === t.id
              }), W(a, !1 !== t.fireEvent && !a.pending, t.originalEvent)
              var l = null == t.deleteAttachedObjects ? null : !t.deleteAttachedObjects
              a.endpoints[0].detachFromConnection(a, null, l), a.endpoints[1].detachFromConnection(a, null, l), a.cleanup(!0), a.destroy(!0)
            }
          }
          for (var u in n.endpoints) {
            var c = n.endpoints[u]
            c._jsPlumb && (s.unregisterEndpoint(c), c.cleanup(!0), c.destroy(!0))
          }
          return n
        }
        var V = function (t, e, n) {
          return function () {
            return function (t, e, n, i) {
              for (var o = 0, s = t.length; o < s; o++) t[o][e].apply(t[o], n)
              return i(t)
            }(t, e, arguments, n)
          }
        }, q = function (t, e) {
          return function () {
            return function (t, e, n) {
              for (var i = [], o = 0, s = t.length; o < s; o++) i.push([t[o][e].apply(t[o], n), t[o]])
              return i
            }(t, e, arguments)
          }
        }, $ = function (t, e) {
          var n = []
          if (t) {
            if ('string' == typeof t) {
              if ('*' === t) return t
              n.push(t)
            } else if (e) n = t else if (t.length) for (var i = 0, o = t.length; i < o; i++) n.push(p(t[i]).id) else n.push(p(t).id)
          }
          return n
        }, J = function (t, e, n) {
          return '*' === t || (t.length > 0 ? -1 !== t.indexOf(e) : !n)
        }
        this.getConnections = function (t, e) {
          t ? t.constructor === String && (t = {scope: t}) : t = {}
          for (var n = t.scope || s.getDefaultScope(), i = $(n, !0), o = $(t.source), r = $(t.target), a = !e && i.length > 1 ? {} : [], l = function (t, n) {
            if (!e && i.length > 1) {
              var o = a[t]
              null == o && (o = a[t] = []), o.push(n)
            } else {
              a.push(n)
            }
          }, u = 0, c = P.length; u < c; u++) {
            var h = P[u], d = h.proxies && h.proxies[0] ? h.proxies[0].originalEp.elementId : h.sourceId,
              p = h.proxies && h.proxies[1] ? h.proxies[1].originalEp.elementId : h.targetId
            J(i, h.scope) && J(o, d) && J(r, p) && l(h.scope, h)
          }
          return a
        }
        var Z = function (t, e) {
          var n, i, o = {
              length: t.length, each: function (t, e) {
                return function (n) {
                  for (var i = 0, o = t.length; i < o; i++) n(t[i])
                  return e(t)
                }
              }(t, e), get: function (t) {
                return function (e) {
                  return t[e]
                }
              }(t)
            },
            s = ['setHover', 'removeAllOverlays', 'setLabel', 'addClass', 'addOverlay', 'removeOverlay', 'removeOverlays', 'showOverlay', 'hideOverlay', 'showOverlays', 'hideOverlays', 'setPaintStyle', 'setHoverPaintStyle', 'setSuspendEvents', 'setParameter', 'setParameters', 'setVisible', 'repaint', 'addType', 'toggleType', 'removeType', 'removeClass', 'setType', 'bind', 'unbind'],
            r = ['getLabel', 'getOverlay', 'isHover', 'getParameter', 'getParameters', 'getPaintStyle', 'getHoverPaintStyle', 'isVisible', 'hasType', 'getType', 'isSuspendEvents']
          for (n = 0, i = s.length; n < i; n++) o[s[n]] = V(t, s[n], e)
          for (n = 0, i = r.length; n < i; n++) o[r[n]] = q(t, r[n])
          return o
        }
        this.select = function (t) {
          return (t = t || {}).scope = t.scope || '*', function t (e) {
            var n = Z(e, t)
            return f.extend(n, {
              setDetachable: V(e, 'setDetachable', t),
              setReattach: V(e, 'setReattach', t),
              setConnector: V(e, 'setConnector', t),
              delete: function () {
                for (var t = 0, n = e.length; t < n; t++) s.deleteConnection(e[t])
              },
              isDetachable: q(e, 'isDetachable'),
              isReattach: q(e, 'isReattach')
            })
          }(t.connections || s.getConnections(t, !0))
        }, this.selectEndpoints = function (t) {
          (t = t || {}).scope = t.scope || '*'
          var e = !t.element && !t.source && !t.target, n = e ? '*' : $(t.element), i = e ? '*' : $(t.source),
            o = e ? '*' : $(t.target), r = $(t.scope, !0), a = []
          for (var l in x) {
            var u = J(n, l, !0), c = J(i, l, !0), h = '*' !== i, d = J(o, l, !0), p = '*' !== o
            if (u || c || d) {
              t:for (var g = 0, m = x[l].length; g < m; g++) {
                var v = x[l][g]
                if (J(r, v.scope, !0)) {
                  var b = h && i.length > 0 && !v.isSource, y = p && o.length > 0 && !v.isTarget
                  if (b || y) continue t
                  a.push(v)
                }
              }
            }
          }
          return function t (e) {
            var n = Z(e, t)
            return f.extend(n, {
              setEnabled: V(e, 'setEnabled', t),
              setAnchor: V(e, 'setAnchor', t),
              isEnabled: q(e, 'isEnabled'),
              deleteEveryConnection: function () {
                for (var t = 0, n = e.length; t < n; t++) e[t].deleteEveryConnection()
              },
              delete: function () {
                for (var t = 0, n = e.length; t < n; t++) s.deleteEndpoint(e[t])
              }
            })
          }(a)
        }, this.getAllConnections = function () {
          return P
        }, this.getDefaultScope = function () {
          return A
        }, this.getEndpoint = L, this.getEndpoints = function (t) {
          return x[p(t).id] || []
        }, this.getDefaultEndpointType = function () {
          return f.Endpoint
        }, this.getDefaultConnectionType = function () {
          return f.Connection
        }, this.getId = X, this.draw = T, this.info = p, this.appendElement = M
        var K = !1
        this.isHoverSuspended = function () {
          return K
        }, this.setHoverSuspended = function (t) {
          K = t
        }, this.hide = function (t, e) {
          return U(t, 'none', e), s
        }, this.idstamp = O
        var Q = function (t) {
          if (!m && t) {
            var e = s.getElement(t)
            e.offsetParent && s.setContainer(e.offsetParent)
          }
        }, tt = s.manage = function (t, e, n) {
          return C[t] || (C[t] = {el: e, endpoints: [], connections: []}, C[t].info = et({
            elId: t,
            timestamp: I
          }), s.addClass(e, 'jtk-managed'), n || s.fire('manageElement', {id: t, info: C[t].info, el: e})), C[t]
        }, et = (s.unmanage = function (t) {
          if (C[t]) {
            var e = C[t].el
            s.removeClass(e, 'jtk-managed'), delete C[t], s.fire('unmanageElement', {id: t, el: e})
          }
        }, function (t) {
          var e, n = t.timestamp, i = t.recalc, o = t.offset, r = t.elId
          return w && !n && (n = I), !i && n && n === E[r] ? {
            o: t.offset || j[r],
            s: D[r]
          } : (i || !o && null == j[r] ? null != (e = C[r] ? C[r].el : null) && (D[r] = s.getSize(e), j[r] = s.getOffset(e), E[r] = n) : (j[r] = o || j[r], null == D[r] && null != (e = C[r].el) && (D[r] = s.getSize(e)), E[r] = n), j[r] && !j[r].right && (j[r].right = j[r].left + D[r][0], j[r].bottom = j[r].top + D[r][1], j[r].width = D[r][0], j[r].height = D[r][1], j[r].centerx = j[r].left + j[r].width / 2, j[r].centery = j[r].top + j[r].height / 2), {
            o: j[r],
            s: D[r]
          })
        })
        this.updateOffset = et, this.init = function () {
          y || (s.Defaults.Container && s.setContainer(s.Defaults.Container), s.anchorManager = new t.jsPlumb.AnchorManager({jsPlumbInstance: s}), y = !0, s.fire('ready', s))
        }.bind(this), this.log = b, this.jsPlumbUIComponent = c, this.makeAnchor = function () {
          var n, i = function (e, n) {
            if (t.jsPlumb.Anchors[e]) return new t.jsPlumb.Anchors[e](n)
            if (!s.Defaults.DoNotThrowErrors) throw{msg: 'jsPlumb: unknown anchor type \'' + e + '\''}
          }
          if (0 === arguments.length) return null
          var o = arguments[0], r = arguments[1], a = (arguments[2], null)
          if (o.compute && o.getOrientation) return o
          if ('string' == typeof o) {
            a = i(arguments[0], {
              elementId: r,
              jsPlumbInstance: s
            })
          } else if (e.isArray(o)) {
            if (e.isArray(o[0]) || e.isString(o[0])) {
              2 === o.length && e.isObject(o[1]) ? e.isString(o[0]) ? (n = t.jsPlumb.extend({
                elementId: r,
                jsPlumbInstance: s
              }, o[1]), a = i(o[0], n)) : (n = t.jsPlumb.extend({
                elementId: r,
                jsPlumbInstance: s,
                anchors: o[0]
              }, o[1]), a = new t.jsPlumb.DynamicAnchor(n)) : a = new f.DynamicAnchor({
                anchors: o,
                selector: null,
                elementId: r,
                jsPlumbInstance: s
              })
            } else {
              var l = {
                x: o[0],
                y: o[1],
                orientation: o.length >= 4 ? [o[2], o[3]] : [0, 0],
                offsets: o.length >= 6 ? [o[4], o[5]] : [0, 0],
                elementId: r,
                jsPlumbInstance: s,
                cssClass: 7 === o.length ? o[6] : null
              };
              (a = new t.jsPlumb.Anchor(l)).clone = function () {
                return new t.jsPlumb.Anchor(l)
              }
            }
          }
          return a.id || (a.id = 'anchor_' + O()), a
        }, this.makeAnchors = function (n, i, o) {
          for (var r = [], a = 0, l = n.length; a < l; a++) {
            'string' == typeof n[a] ? r.push(t.jsPlumb.Anchors[n[a]]({
              elementId: i,
              jsPlumbInstance: o
            })) : e.isArray(n[a]) && r.push(s.makeAnchor(n[a], i, o))
          }
          return r
        }, this.makeDynamicAnchor = function (e, n) {
          return new t.jsPlumb.DynamicAnchor({anchors: e, selector: n, elementId: null, jsPlumbInstance: s})
        }, this.targetEndpointDefinitions = {}, this.sourceEndpointDefinitions = {}
        var nt = function (n, i, o, r, a) {
          var l = new c(i), u = i._jsPlumb.EndpointDropHandler({
            jsPlumb: s, enabled: function () {
              return n.def.enabled
            }, isFull: function () {
              var t = s.select({target: n.id}).length
              return n.def.maxConnections > 0 && t >= n.def.maxConnections
            }, element: n.el, elementId: n.id, isSource: r, isTarget: a, addClass: function (t) {
              s.addClass(n.el, t)
            }, removeClass: function (t) {
              s.removeClass(n.el, t)
            }, onDrop: function (t) {
              t.endpoints[0].anchor.unlock()
            }, isDropAllowed: function () {
              return l.isDropAllowed.apply(l, arguments)
            }, isRedrop: function (t) {
              return null != t.suspendedElement && null != t.suspendedEndpoint && t.suspendedEndpoint.element === n.el
            }, getEndpoint: function (e) {
              var o = n.def.endpoint
              if (null == o || null == o._jsPlumb) {
                var r = s.deriveEndpointAndAnchorSpec(e.getType().join(' '), !0),
                  a = r.endpoints ? t.jsPlumb.extend(i, {endpoint: n.def.def.endpoint || r.endpoints[1]}) : i
                r.anchors && (a = t.jsPlumb.extend(a, {anchor: n.def.def.anchor || r.anchors[1]})), (o = s.addEndpoint(n.el, a))._mtNew = !0
              }
              if (i.uniqueEndpoint && (n.def.endpoint = o), o.setDeleteOnEmpty(!0), e.isDetachable() && o.initDraggable(), null != o.anchor.positionFinder) {
                var l = s.getUIPosition(arguments, s.getZoom()), u = s.getOffset(n.el), c = s.getSize(n.el),
                  h = null == l ? [0, 0] : o.anchor.positionFinder(l, u, c, o.anchor.constructorParams)
                o.anchor.x = h[0], o.anchor.y = h[1]
              }
              return o
            }, maybeCleanup: function (t) {
              t._mtNew && 0 === t.connections.length ? s.deleteObject({endpoint: t}) : delete t._mtNew
            }
          }), h = t.jsPlumb.dragEvents.drop
          return o.scope = o.scope || i.scope || s.Defaults.Scope, o[h] = e.wrap(o[h], u, !0), o.rank = i.rank || 0, a && (o[t.jsPlumb.dragEvents.over] = function () {
            return !0
          }), !1 === i.allowLoopback && (o.canDrop = function (t) {
            return t.getDragElement()._jsPlumbRelatedElement !== n.el
          }), s.initDroppable(n.el, o, 'internal'), u
        }
        this.makeTarget = function (e, n, i) {
          var o = t.jsPlumb.extend({_jsPlumb: this}, i)
          t.jsPlumb.extend(o, n)
          for (var r = o.maxConnections || -1, a = function (e) {
            var n = p(e), i = n.id, a = t.jsPlumb.extend({}, o.dropOptions || {}), l = o.connectionType || 'default'
            this.targetEndpointDefinitions[i] = this.targetEndpointDefinitions[i] || {}, Q(i), n.el._isJsPlumbGroup && null == a.rank && (a.rank = -1)
            var u = {def: t.jsPlumb.extend({}, o), uniqueEndpoint: o.uniqueEndpoint, maxConnections: r, enabled: !0}
            o.createEndpoint && (u.uniqueEndpoint = !0, u.endpoint = s.addEndpoint(e, u.def), u.endpoint.setDeleteOnEmpty(!1)), n.def = u, this.targetEndpointDefinitions[i][l] = u, nt(n, o, a, !0 === o.isSource, !0), n.el._katavorioDrop[n.el._katavorioDrop.length - 1].targetDef = u
          }.bind(this), l = e.length && e.constructor !== String ? e : [e], u = 0, c = l.length; u < c; u++) {
            a(l[u])
          }
          return this
        }, this.unmakeTarget = function (t, e) {
          var n = p(t)
          return s.destroyDroppable(n.el, 'internal'), e || delete this.targetEndpointDefinitions[n.id], this
        }, this.makeSource = function (n, i, o) {
          var r = t.jsPlumb.extend({_jsPlumb: this}, o)
          t.jsPlumb.extend(r, i)
          var a = r.connectionType || 'default', l = s.deriveEndpointAndAnchorSpec(a)
          r.endpoint = r.endpoint || l.endpoints[0], r.anchor = r.anchor || l.anchors[0]
          for (var u = r.maxConnections || -1, c = r.onMaxConnections, d = function (i) {
            var o = i.id, l = this.getElement(i.el)
            this.sourceEndpointDefinitions[o] = this.sourceEndpointDefinitions[o] || {}, Q(o)
            var d = {def: t.jsPlumb.extend({}, r), uniqueEndpoint: r.uniqueEndpoint, maxConnections: u, enabled: !0}
            r.createEndpoint && (d.uniqueEndpoint = !0, d.endpoint = s.addEndpoint(n, d.def), d.endpoint.setDeleteOnEmpty(!1)), this.sourceEndpointDefinitions[o][a] = d, i.def = d
            var p = t.jsPlumb.dragEvents.stop, f = t.jsPlumb.dragEvents.drag,
              g = t.jsPlumb.extend({}, r.dragOptions || {}), m = g.drag, v = g.stop, b = null, y = !1
            g.scope = g.scope || r.scope, g[f] = e.wrap(g[f], function () {
              m && m.apply(this, arguments), y = !1
            }), g[p] = e.wrap(g[p], function () {
              if (v && v.apply(this, arguments), this.currentlyDragging = !1, null != b._jsPlumb) {
                var t = r.anchor || this.Defaults.Anchor, e = b.anchor, n = b.connections[0],
                  i = this.makeAnchor(t, o, this), a = b.element
                if (null != i.positionFinder) {
                  var l = s.getOffset(a), u = this.getSize(a), c = {left: l.left + e.x * u[0], top: l.top + e.y * u[1]},
                    h = i.positionFinder(c, l, u, i.constructorParams)
                  i.x = h[0], i.y = h[1]
                }
                b.setAnchor(i, !0), b.repaint(), this.repaint(b.elementId), null != n && this.repaint(n.targetId)
              }
            }.bind(this))
            var P = function (n) {
              if (3 !== n.which && 2 !== n.button) {
                var d = this.sourceEndpointDefinitions[o][a]
                if (d.enabled) {
                  if (o = this.getId(this.getElement(i.el)), r.filter) {
                    if (!1 === (e.isString(r.filter) ? function (t, e, n, i, o) {
                      for (var s = t.target || t.srcElement, r = !1, a = i.getSelector(e, n), l = 0; l < a.length; l++) {
                        if (a[l] === s) {
                          r = !0
                          break
                        }
                      }
                      return o ? !r : r
                    }(n, i.el, r.filter, this, r.filterExclude) : r.filter(n, i.el))) {
                      return
                    }
                  }
                  var p = this.select({source: o}).length
                  if (d.maxConnections >= 0 && p >= d.maxConnections) {
                    return c && c({
                      element: i.el,
                      maxConnections: u
                    }, n), !1
                  }
                  var f = t.jsPlumb.getPositionOnElement(n, l, h), m = {}
                  t.jsPlumb.extend(m, d.def), m.isTemporarySource = !0, m.anchor = [f[0], f[1], 0, 0], m.dragOptions = g, d.def.scope && (m.scope = d.def.scope), b = this.addEndpoint(o, m), y = !0, b.setDeleteOnEmpty(!0), d.uniqueEndpoint && (d.endpoint ? b.finalEndpoint = d.endpoint : (d.endpoint = b, b.setDeleteOnEmpty(!1)))
                  var v = function t () {
                    s.off(b.canvas, 'mouseup', t), s.off(i.el, 'mouseup', t), y && (y = !1, s.deleteEndpoint(b))
                  }
                  s.on(b.canvas, 'mouseup', v), s.on(i.el, 'mouseup', v)
                  var P = {}
                  if (d.def.extract) {
                    for (var x in d.def.extract) {
                      var _ = (n.srcElement || n.target).getAttribute(x)
                      _ && (P[d.def.extract[x]] = _)
                    }
                  }
                  s.trigger(b.canvas, 'mousedown', n, P), e.consume(n)
                }
              }
            }.bind(this)
            this.on(i.el, 'mousedown', P), d.trigger = P, r.filter && (e.isString(r.filter) || e.isFunction(r.filter)) && s.setDragFilter(i.el, r.filter)
            var x = t.jsPlumb.extend({}, r.dropOptions || {})
            nt(i, r, x, !0, !0 === r.isTarget)
          }.bind(this), f = n.length && n.constructor !== String ? n : [n], g = 0, m = f.length; g < m; g++) {
            d(p(f[g]))
          }
          return this
        }, this.unmakeSource = function (t, e, n) {
          var i = p(t)
          s.destroyDroppable(i.el, 'internal')
          var o = this.sourceEndpointDefinitions[i.id]
          if (o) {
            for (var r in o) {
              if (null == e || e === r) {
                var a = o[r].trigger
                a && s.off(i.el, 'mousedown', a), n || delete this.sourceEndpointDefinitions[i.id][r]
              }
            }
          }
          return this
        }, this.unmakeEverySource = function () {
          for (var t in this.sourceEndpointDefinitions) s.unmakeSource(t, null, !0)
          return this.sourceEndpointDefinitions = {}, this
        }
        var it = function (t, n, i) {
          n = e.isArray(n) ? n : [n]
          var o = X(t)
          i = i || 'default'
          for (var s = 0; s < n.length; s++) {
            var r = this[n[s]][o]
            if (r && r[i]) return r[i].def.scope || this.Defaults.Scope
          }
        }.bind(this), ot = function (t, n, i, o) {
          i = e.isArray(i) ? i : [i]
          var s = X(t)
          o = o || 'default'
          for (var r = 0; r < i.length; r++) {
            var a = this[i[r]][s]
            a && a[o] && (a[o].def.scope = n)
          }
        }.bind(this)
        this.getScope = function (t, e) {
          return it(t, ['sourceEndpointDefinitions', 'targetEndpointDefinitions'])
        }, this.getSourceScope = function (t) {
          return it(t, 'sourceEndpointDefinitions')
        }, this.getTargetScope = function (t) {
          return it(t, 'targetEndpointDefinitions')
        }, this.setScope = function (t, e, n) {
          this.setSourceScope(t, e, n), this.setTargetScope(t, e, n)
        }, this.setSourceScope = function (t, e, n) {
          ot(t, e, 'sourceEndpointDefinitions', n), this.setDragScope(t, e)
        }, this.setTargetScope = function (t, e, n) {
          ot(t, e, 'targetEndpointDefinitions', n), this.setDropScope(t, e)
        }, this.unmakeEveryTarget = function () {
          for (var t in this.targetEndpointDefinitions) s.unmakeTarget(t, !0)
          return this.targetEndpointDefinitions = {}, this
        }
        var st = function (t, n, i, o, r) {
          var a, l, u, c = 'source' === t ? this.sourceEndpointDefinitions : this.targetEndpointDefinitions
          if (r = r || 'default', n.length && !e.isString(n)) {
            a = []
            for (var h = 0, d = n.length; h < d; h++) c[(l = p(n[h])).id] && c[l.id][r] && (a[h] = c[l.id][r].enabled, u = o ? !a[h] : i, c[l.id][r].enabled = u, s[u ? 'removeClass' : 'addClass'](l.el, 'jtk-' + t + '-disabled'))
          } else {
            var f = (l = p(n)).id
            c[f] && c[f][r] && (a = c[f][r].enabled, u = o ? !a : i, c[f][r].enabled = u, s[u ? 'removeClass' : 'addClass'](l.el, 'jtk-' + t + '-disabled'))
          }
          return a
        }.bind(this), rt = function (t, n) {
          return e.isString(t) || !t.length ? n.apply(this, [t]) : t.length ? n.apply(this, [t[0]]) : void 0
        }.bind(this)
        this.toggleSourceEnabled = function (t, e) {
          return st('source', t, null, !0, e), this.isSourceEnabled(t, e)
        }, this.setSourceEnabled = function (t, e, n) {
          return st('source', t, e, null, n)
        }, this.isSource = function (t, e) {
          return e = e || 'default', rt(t, function (t) {
            var n = this.sourceEndpointDefinitions[p(t).id]
            return null != n && null != n[e]
          }.bind(this))
        }, this.isSourceEnabled = function (t, e) {
          return e = e || 'default', rt(t, function (t) {
            var n = this.sourceEndpointDefinitions[p(t).id]
            return n && n[e] && !0 === n[e].enabled
          }.bind(this))
        }, this.toggleTargetEnabled = function (t, e) {
          return st('target', t, null, !0, e), this.isTargetEnabled(t, e)
        }, this.isTarget = function (t, e) {
          return e = e || 'default', rt(t, function (t) {
            var n = this.targetEndpointDefinitions[p(t).id]
            return null != n && null != n[e]
          }.bind(this))
        }, this.isTargetEnabled = function (t, e) {
          return e = e || 'default', rt(t, function (t) {
            var n = this.targetEndpointDefinitions[p(t).id]
            return n && n[e] && !0 === n[e].enabled
          }.bind(this))
        }, this.setTargetEnabled = function (t, e, n) {
          return st('target', t, e, null, n)
        }, this.ready = function (t) {
          s.bind('ready', t)
        }
        var at = function (t, e) {
          if ('object' === (void 0 === t ? 'undefined' : a()(t)) && t.length) for (var n = 0, i = t.length; n < i; n++) e(t[n]) else e(t)
          return s
        }
        this.repaint = function (t, e, n) {
          return at(t, function (t) {
            T(t, e, n)
          })
        }, this.revalidate = function (t, e, n) {
          return at(t, function (t) {
            var i = n ? t : s.getId(t)
            s.updateOffset({elId: i, recalc: !0, timestamp: e})
            var o = s.getDragManager()
            o && o.updateOffsets(i), s.repaint(t)
          })
        }, this.repaintEverything = function () {
          var t, e = n()
          for (t in x) s.updateOffset({elId: t, recalc: !0, timestamp: e})
          for (t in x) T(t, null, e)
          return this
        }, this.removeAllEndpoints = function (t, e, n) {
          n = n || []
          return function t (i) {
            var o, r, a = p(i), l = x[a.id]
            if (l) for (n.push(a), o = 0, r = l.length; o < r; o++) s.deleteEndpoint(l[o], !1)
            if (delete x[a.id], e && a.el && 3 !== a.el.nodeType && 8 !== a.el.nodeType) for (o = 0, r = a.el.childNodes.length; o < r; o++) t(a.el.childNodes[o])
          }(t), this
        }
        var lt = function (t, e) {
          s.removeAllEndpoints(t.id, !0, e)
          for (var n = s.getDragManager(), i = function (t) {
            n && n.elementRemoved(t.id), s.anchorManager.clearFor(t.id), s.anchorManager.removeFloatingConnection(t.id), s.isSource(t.el) && s.unmakeSource(t.el), s.isTarget(t.el) && s.unmakeTarget(t.el), s.destroyDraggable(t.el), s.destroyDroppable(t.el), delete s.floatingConnections[t.id], delete C[t.id], delete j[t.id], t.el && (s.removeElement(t.el), t.el._jsPlumb = null)
          }, o = 1; o < e.length; o++) {
            i(e[o])
          }
          i(t)
        }
        this.remove = function (t, e) {
          var n = p(t), i = []
          return n.text && n.el.parentNode ? n.el.parentNode.removeChild(n.el) : n.id && s.batch(function () {
            lt(n, i)
          }, !0 === e), s
        }, this.empty = function (t, e) {
          var n = []
          return s.batch(function () {
            !function t (e, i) {
              var o = p(e)
              if (o.text) {
                o.el.parentNode.removeChild(o.el)
              } else if (o.el) {
                for (; o.el.childNodes.length > 0;) t(o.el.childNodes[0])
                i || lt(o, n)
              }
            }(t, !0)
          }, !1 === e), s
        }, this.reset = function (t) {
          s.silently(function () {
            K = !1, s.removeAllGroups(), s.removeGroupManager(), s.deleteEveryEndpoint(), t || s.unbind(), this.targetEndpointDefinitions = {}, this.sourceEndpointDefinitions = {}, P.length = 0, this.doReset && this.doReset()
          }.bind(this))
        }
        var ut = function (t) {
          t.canvas && t.canvas.parentNode && t.canvas.parentNode.removeChild(t.canvas), t.cleanup(), t.destroy()
        }
        this.clear = function () {
          s.select().each(ut), s.selectEndpoints().each(ut), x = {}, _ = {}
        }, this.setDefaultScope = function (t) {
          return A = t, s
        }, this.deriveEndpointAndAnchorSpec = function (t, e) {
          for (var n = ((e ? '' : 'default ') + t).split(/[\s]/), i = null, o = null, r = null, a = null, l = 0; l < n.length; l++) {
            var u = s.getType(n[l], 'connection')
            u && (u.endpoints && (i = u.endpoints), u.endpoint && (o = u.endpoint), u.anchors && (a = u.anchors), u.anchor && (r = u.anchor))
          }
          return {endpoints: i || [o, o], anchors: a || [r, r]}
        }, this.setId = function (t, n, i) {
          var o
          e.isString(t) ? o = t : (t = this.getElement(t), o = this.getId(t))
          var s = this.getConnections({source: o, scope: '*'}, !0),
            r = this.getConnections({target: o, scope: '*'}, !0)
          n = '' + n, i ? t = this.getElement(n) : (t = this.getElement(o), this.setAttribute(t, 'id', n)), x[n] = x[o] || []
          for (var a = 0, l = x[n].length; a < l; a++) x[n][a].setElementId(n), x[n][a].setReferenceElement(t)
          delete x[o], this.sourceEndpointDefinitions[n] = this.sourceEndpointDefinitions[o], delete this.sourceEndpointDefinitions[o], this.targetEndpointDefinitions[n] = this.targetEndpointDefinitions[o], delete this.targetEndpointDefinitions[o], this.anchorManager.changeId(o, n)
          var u = this.getDragManager()
          u && u.changeId(o, n), C[n] = C[o], delete C[o]
          var c = function (e, i, o) {
            for (var s = 0, r = e.length; s < r; s++) e[s].endpoints[i].setElementId(n), e[s].endpoints[i].setReferenceElement(t), e[s][o + 'Id'] = n, e[s][o] = t
          }
          c(s, 0, 'source'), c(r, 1, 'target'), this.repaint(n)
        }, this.setDebugLog = function (t) {
          b = t
        }, this.setSuspendDrawing = function (t, e) {
          var n = w
          return w = t, I = t ? (new Date).getTime() : null, e && this.repaintEverything(), n
        }, this.isSuspendDrawing = function () {
          return w
        }, this.getSuspendedAt = function () {
          return I
        }, this.batch = function (t, n) {
          var i = this.isSuspendDrawing()
          i || this.setSuspendDrawing(!0)
          try {
            t()
          } catch (t) {
            e.log('Function run while suspended failed', t)
          }
          i || this.setSuspendDrawing(!1, !n)
        }, this.doWhileSuspended = this.batch, this.getCachedData = function (t) {
          var e = j[t]
          return e ? {o: e, s: D[t]} : et({elId: t})
        }, this.timestamp = n, this.show = function (t, e) {
          return U(t, 'block', e), s
        }, this.toggleVisible = function (t, e) {
          var n = null
          e && (n = function (t) {
            var e = t.isVisible()
            t.setVisible(!e)
          }), G(t, function (t) {
            var e = t.isVisible()
            t.setVisible(!e)
          }, n)
        }, this.addListener = this.bind
        var ct = []
        this.registerFloatingConnection = function (t, n, i) {
          ct[t.id] = n, e.addToList(x, t.id, i)
        }, this.getFloatingConnectionFor = function (t) {
          return ct[t]
        }, this.listManager = new t.jsPlumbListManager(this)
      }
      e.extend(t.jsPlumbInstance, e.EventGenerator, {
        setAttribute: function (t, e, n) {
          this.setAttribute(t, e, n)
        }, getAttribute: function (e, n) {
          return this.getAttribute(t.jsPlumb.getElement(e), n)
        }, convertToFullOverlaySpec: function (t) {
          return e.isString(t) && (t = [t, {}]), t[1].id = t[1].id || e.uuid(), t
        }, registerConnectionType: function (e, n) {
          if (this._connectionTypes[e] = t.jsPlumb.extend({}, n), n.overlays) {
            for (var i = {}, o = 0; o < n.overlays.length; o++) {
              var s = this.convertToFullOverlaySpec(n.overlays[o])
              i[s[1].id] = s
            }
            this._connectionTypes[e].overlays = i
          }
        }, registerConnectionTypes: function (t) {
          for (var e in t) this.registerConnectionType(e, t[e])
        }, registerEndpointType: function (e, n) {
          if (this._endpointTypes[e] = t.jsPlumb.extend({}, n), n.overlays) {
            for (var i = {}, o = 0; o < n.overlays.length; o++) {
              var s = this.convertToFullOverlaySpec(n.overlays[o])
              i[s[1].id] = s
            }
            this._endpointTypes[e].overlays = i
          }
        }, registerEndpointTypes: function (t) {
          for (var e in t) this.registerEndpointType(e, t[e])
        }, getType: function (t, e) {
          return 'connection' === e ? this._connectionTypes[t] : this._endpointTypes[t]
        }, setIdChanged: function (t, e) {
          this.setId(t, e, !0)
        }, setParent: function (t, e) {
          var n = this.getElement(t), i = this.getId(n), o = this.getElement(e), s = this.getId(o),
            r = this.getDragManager()
          n.parentNode.removeChild(n), o.appendChild(n), r && r.setParent(n, i, o, s)
        }, extend: function (t, e, n) {
          var i
          if (n) for (i = 0; i < n.length; i++) t[n[i]] = e[n[i]] else for (i in e) t[i] = e[i]
          return t
        }, floatingConnections: {}, getFloatingAnchorIndex: function (t) {
          return t.endpoints[0].isFloating() ? 0 : t.endpoints[1].isFloating() ? 1 : -1
        }, proxyConnection: function (t, e, n, i, o, s) {
          var r, a = t.endpoints[e].elementId, l = t.endpoints[e]
          t.proxies = t.proxies || [], (r = t.proxies[e] ? t.proxies[e].ep : this.addEndpoint(n, {
            endpoint: o(t, e),
            anchor: s(t, e),
            parameters: {isProxyEndpoint: !0}
          })).setDeleteOnEmpty(!0), t.proxies[e] = {
            ep: r,
            originalEp: l
          }, 0 === e ? this.anchorManager.sourceChanged(a, i, t, n) : (this.anchorManager.updateOtherEndpoint(t.endpoints[0].elementId, a, i, t), t.target = n, t.targetId = i), l.detachFromConnection(t, null, !0), r.connections = [t], t.endpoints[e] = r, l.setVisible(!1), t.setVisible(!0), this.revalidate(n)
        }, unproxyConnection: function (t, e, n) {
          if (null != t._jsPlumb && null != t.proxies && null != t.proxies[e]) {
            var i = t.proxies[e].originalEp.element, o = t.proxies[e].originalEp.elementId
            t.endpoints[e] = t.proxies[e].originalEp, 0 === e ? this.anchorManager.sourceChanged(n, o, t, i) : (this.anchorManager.updateOtherEndpoint(t.endpoints[0].elementId, n, o, t), t.target = i, t.targetId = o), t.proxies[e].ep.detachFromConnection(t, null), t.proxies[e].originalEp.addConnection(t), t.isVisible() && t.proxies[e].originalEp.setVisible(!0), delete t.proxies[e]
          }
        }
      })
      var f = new p
      t.jsPlumb = f, f.getInstance = function (t, e) {
        var n = new p(t)
        if (e) for (var i in e) n[i] = e[i]
        return n.init(), n
      }, f.each = function (t, e) {
        if (null != t) if ('string' == typeof t) e(f.getElement(t)) else if (null != t.length) for (var n = 0; n < t.length; n++) e(f.getElement(t[n])) else e(t)
      }, 'undefined' != typeof exports && (exports.jsPlumb = f)
    }.call('undefined' != typeof window ? window : this), function () {
      var t = this, e = t.jsPlumb, n = t.jsPlumbUtil
      e.OverlayCapableJsPlumbUIComponent = function (e) {
        t.jsPlumbUIComponent.apply(this, arguments), this._jsPlumb.overlays = {}, this._jsPlumb.overlayPositions = {}, e.label ? this.getDefaultType().overlays.__label = ['Label', {
          label: e.label,
          location: e.labelLocation || this.defaultLabelLocation || .5,
          labelStyle: e.labelStyle || this._jsPlumb.instance.Defaults.LabelStyle,
          id: '__label'
        }] : e.id && (this.getDefaultType().overlays.__label = ['Label', {
          label: e.label,
          location: e.labelLocation || this.defaultLabelLocation || .5,
          labelStyle: e.emptyLabelStyle || this._jsPlumb.instance.Defaults.emptyLabelStyle,
          id: '__label'
        }]), this.setListenerComponent = function (t) {
          if (this._jsPlumb) for (var e in this._jsPlumb.overlays) this._jsPlumb.overlays[e].setListenerComponent(t)
        }
      }, e.OverlayCapableJsPlumbUIComponent.applyType = function (t, e) {
        if (e.overlays) {
          var n, i = {}
          for (n in e.overlays) {
            var o = t._jsPlumb.overlays[e.overlays[n][1].id]
            if (o) {
              o.updateFrom(e.overlays[n][1]), i[e.overlays[n][1].id] = !0
            } else {
              var s = t.getCachedTypeItem('overlay', e.overlays[n][1].id)
              null != s ? (s.reattach(t._jsPlumb.instance, t), s.setVisible(!0), s.updateFrom(e.overlays[n][1]), t._jsPlumb.overlays[s.id] = s) : s = t.addOverlay(e.overlays[n], !0), i[s.id] = !0
            }
          }
          for (n in t._jsPlumb.overlays) null == i[t._jsPlumb.overlays[n].id] && t.removeOverlay(t._jsPlumb.overlays[n].id, !0)
        }
      }, n.extend(e.OverlayCapableJsPlumbUIComponent, t.jsPlumbUIComponent, {
        setHover: function (t, e) {
          if (this._jsPlumb && !this._jsPlumb.instance.isConnectionBeingDragged()) for (var n in this._jsPlumb.overlays) this._jsPlumb.overlays[n][t ? 'addClass' : 'removeClass'](this._jsPlumb.instance.hoverClass)
        }, addOverlay: function (t, i) {
          var o = function (t, i) {
            var o = null
            if (n.isArray(i)) {
              var s = i[0], r = e.extend({component: t, _jsPlumb: t._jsPlumb.instance}, i[1])
              3 === i.length && e.extend(r, i[2]), o = new (e.Overlays[t._jsPlumb.instance.getRenderMode()][s])(r)
            } else {
              o = i.constructor === String ? new (e.Overlays[t._jsPlumb.instance.getRenderMode()][i])({
                component: t,
                _jsPlumb: t._jsPlumb.instance
              }) : i
            }
            return o.id = o.id || n.uuid(), t.cacheTypeItem('overlay', o, o.id), t._jsPlumb.overlays[o.id] = o, o
          }(this, t)
          if (this.getData && 'Label' === o.type && n.isArray(t)) {
            var s = this.getData(), r = t[1]
            if (s) {
              var a = r.labelLocationAttribute || 'labelLocation', l = s ? s[a] : null
              l && (o.loc = l)
            }
          }
          return i || this.repaint(), o
        }, getOverlay: function (t) {
          return this._jsPlumb.overlays[t]
        }, getOverlays: function () {
          return this._jsPlumb.overlays
        }, hideOverlay: function (t) {
          var e = this.getOverlay(t)
          e && e.hide()
        }, hideOverlays: function () {
          for (var t in this._jsPlumb.overlays) this._jsPlumb.overlays[t].hide()
        }, showOverlay: function (t) {
          var e = this.getOverlay(t)
          e && e.show()
        }, showOverlays: function () {
          for (var t in this._jsPlumb.overlays) this._jsPlumb.overlays[t].show()
        }, removeAllOverlays: function (t) {
          for (var e in this._jsPlumb.overlays) this._jsPlumb.overlays[e].cleanup && this._jsPlumb.overlays[e].cleanup()
          this._jsPlumb.overlays = {}, this._jsPlumb.overlayPositions = null, this._jsPlumb.overlayPlacements = {}, t || this.repaint()
        }, removeOverlay: function (t, e) {
          var n = this._jsPlumb.overlays[t]
          n && (n.setVisible(!1), !e && n.cleanup && n.cleanup(), delete this._jsPlumb.overlays[t], this._jsPlumb.overlayPositions && delete this._jsPlumb.overlayPositions[t], this._jsPlumb.overlayPlacements && delete this._jsPlumb.overlayPlacements[t])
        }, removeOverlays: function () {
          for (var t = 0, e = arguments.length; t < e; t++) this.removeOverlay(arguments[t])
        }, moveParent: function (t) {
          if (this.bgCanvas && (this.bgCanvas.parentNode.removeChild(this.bgCanvas), t.appendChild(this.bgCanvas)), this.canvas && this.canvas.parentNode) {
            for (var e in this.canvas.parentNode.removeChild(this.canvas), t.appendChild(this.canvas), this._jsPlumb.overlays) {
              if (this._jsPlumb.overlays[e].isAppendedAtTopLevel) {
                var n = this._jsPlumb.overlays[e].getElement()
                n.parentNode.removeChild(n), t.appendChild(n)
              }
            }
          }
        }, getLabel: function () {
          var t = this.getOverlay('__label')
          return null != t ? t.getLabel() : null
        }, getLabelOverlay: function () {
          return this.getOverlay('__label')
        }, setLabel: function (t) {
          var n = this.getOverlay('__label')
          n ? t.constructor === String || t.constructor === Function ? n.setLabel(t) : (t.label || (t.label = ''), n.setLabel(t.label), t.location && n.setLocation(t.location)) : (n = function (t, n) {
            var i = {
              cssClass: n.cssClass,
              labelStyle: t.labelStyle,
              id: '__label',
              component: t,
              _jsPlumb: t._jsPlumb.instance
            }, o = e.extend(i, n)
            return new (e.Overlays[t._jsPlumb.instance.getRenderMode()].Label)(o)
          }(this, t.constructor === String || t.constructor === Function ? {label: t} : t), this._jsPlumb.overlays.__label = n)
          this._jsPlumb.instance.isSuspendDrawing() || this.repaint()
        }, cleanup: function (t) {
          for (var e in this._jsPlumb.overlays) this._jsPlumb.overlays[e].cleanup(t), this._jsPlumb.overlays[e].destroy(t)
          t && (this._jsPlumb.overlays = {}, this._jsPlumb.overlayPositions = null)
        }, setVisible: function (t) {
          this[t ? 'showOverlays' : 'hideOverlays']()
        }, setAbsoluteOverlayPosition: function (t, e) {
          this._jsPlumb.overlayPositions[t.id] = e
        }, getAbsoluteOverlayPosition: function (t) {
          return this._jsPlumb.overlayPositions ? this._jsPlumb.overlayPositions[t.id] : null
        }, _clazzManip: function (t, e, n) {
          if (!n) for (var i in this._jsPlumb.overlays) this._jsPlumb.overlays[i][t + 'Class'](e)
        }, addClass: function (t, e) {
          this._clazzManip('add', t, e)
        }, removeClass: function (t, e) {
          this._clazzManip('remove', t, e)
        }
      })
    }.call('undefined' != typeof window ? window : this), function () {
      var t = this.jsPlumb, e = this.jsPlumbUtil,
        n = ['connectorStyle', 'connectorHoverStyle', 'connectorOverlays', 'connector', 'connectionType', 'connectorClass', 'connectorHoverClass']
      t.Endpoint = function (i) {
        var o = i._jsPlumb, s = i.newConnection, r = i.newEndpoint
        this.idPrefix = '_jsplumb_e_', this.defaultLabelLocation = [.5, .5], this.defaultOverlayKeys = ['Overlays', 'EndpointOverlays'], t.OverlayCapableJsPlumbUIComponent.apply(this, arguments), this.appendToDefaultType({
          connectionType: i.connectionType,
          maxConnections: null == i.maxConnections ? this._jsPlumb.instance.Defaults.MaxConnections : i.maxConnections,
          paintStyle: i.endpointStyle || i.paintStyle || i.style || this._jsPlumb.instance.Defaults.EndpointStyle || t.Defaults.EndpointStyle,
          hoverPaintStyle: i.endpointHoverStyle || i.hoverPaintStyle || this._jsPlumb.instance.Defaults.EndpointHoverStyle || t.Defaults.EndpointHoverStyle,
          connectorStyle: i.connectorStyle,
          connectorHoverStyle: i.connectorHoverStyle,
          connectorClass: i.connectorClass,
          connectorHoverClass: i.connectorHoverClass,
          connectorOverlays: i.connectorOverlays,
          connector: i.connector,
          connectorTooltip: i.connectorTooltip
        }), this._jsPlumb.enabled = !(!1 === i.enabled), this._jsPlumb.visible = !0, this.element = t.getElement(i.source), this._jsPlumb.uuid = i.uuid, this._jsPlumb.floatingEndpoint = null
        this._jsPlumb.uuid && (i.endpointsByUUID[this._jsPlumb.uuid] = this), this.elementId = i.elementId, this.dragProxy = i.dragProxy, this._jsPlumb.connectionCost = i.connectionCost, this._jsPlumb.connectionsDirected = i.connectionsDirected, this._jsPlumb.currentAnchorClass = '', this._jsPlumb.events = {}
        var l = !0 === i.deleteOnEmpty
        this.setDeleteOnEmpty = function (t) {
          l = t
        }
        var u = function () {
          var e = o.endpointAnchorClassPrefix + '-' + this._jsPlumb.currentAnchorClass
          this._jsPlumb.currentAnchorClass = this.anchor.getCssClass()
          var n = o.endpointAnchorClassPrefix + (this._jsPlumb.currentAnchorClass ? '-' + this._jsPlumb.currentAnchorClass : '')
          this.removeClass(e), this.addClass(n), t.updateClasses(this.element, n, e)
        }.bind(this)
        this.prepareAnchor = function (t) {
          var e = this._jsPlumb.instance.makeAnchor(t, this.elementId, o)
          return e.bind('anchorChanged', function (t) {
            this.fire('anchorChanged', {endpoint: this, anchor: t}), u()
          }.bind(this)), e
        }, this.setPreparedAnchor = function (t, e) {
          return this._jsPlumb.instance.continuousAnchorFactory.clear(this.elementId), this.anchor = t, u(), e || this._jsPlumb.instance.repaint(this.elementId), this
        }, this.setAnchor = function (t, e) {
          var n = this.prepareAnchor(t)
          return this.setPreparedAnchor(n, e), this
        }
        var c = function (t) {
          if (this.connections.length > 0) for (var e = 0; e < this.connections.length; e++) this.connections[e].setHover(t, !1) else this.setHover(t)
        }.bind(this)
        this.bind('mouseover', function () {
          c(!0)
        }), this.bind('mouseout', function () {
          c(!1)
        }), i._transient || this._jsPlumb.instance.anchorManager.add(this, this.elementId), this.prepareEndpoint = function (n, s) {
          var r, a = function (e, n) {
            var i = o.getRenderMode()
            if (t.Endpoints[i][e]) return new t.Endpoints[i][e](n)
            if (!o.Defaults.DoNotThrowErrors) throw{msg: 'jsPlumb: unknown endpoint type \'' + e + '\''}
          }, l = {
            _jsPlumb: this._jsPlumb.instance,
            cssClass: i.cssClass,
            container: i.container,
            tooltip: i.tooltip,
            connectorTooltip: i.connectorTooltip,
            endpoint: this
          }
          return e.isString(n) ? r = a(n, l) : e.isArray(n) ? (l = e.merge(n[1], l), r = a(n[0], l)) : r = n.clone(), r.clone = function () {
            return e.isString(n) ? a(n, l) : e.isArray(n) ? (l = e.merge(n[1], l), a(n[0], l)) : void 0
          }.bind(this), r.typeId = s, r
        }, this.setEndpoint = function (t, e) {
          var n = this.prepareEndpoint(t)
          this.setPreparedEndpoint(n, !0)
        }, this.setPreparedEndpoint = function (t, e) {
          null != this.endpoint && (this.endpoint.cleanup(), this.endpoint.destroy()), this.endpoint = t, this.type = this.endpoint.type, this.canvas = this.endpoint.canvas
        }, t.extend(this, i, n), this.isSource = i.isSource || !1, this.isTemporarySource = i.isTemporarySource || !1, this.isTarget = i.isTarget || !1, this.connections = i.connections || [], this.connectorPointerEvents = i['connector-pointer-events'], this.scope = i.scope || o.getDefaultScope(), this.timestamp = null, this.reattachConnections = i.reattach || o.Defaults.ReattachConnections, this.connectionsDetachable = o.Defaults.ConnectionsDetachable, !1 !== i.connectionsDetachable && !1 !== i.detachable || (this.connectionsDetachable = !1), this.dragAllowedWhenFull = !1 !== i.dragAllowedWhenFull, i.onMaxConnections && this.bind('maxConnections', i.onMaxConnections), this.addConnection = function (t) {
          this.connections.push(t), this[(this.connections.length > 0 ? 'add' : 'remove') + 'Class'](o.endpointConnectedClass), this[(this.isFull() ? 'add' : 'remove') + 'Class'](o.endpointFullClass)
        }, this.detachFromConnection = function (t, e, n) {
          (e = null == e ? this.connections.indexOf(t) : e) >= 0 && (this.connections.splice(e, 1), this[(this.connections.length > 0 ? 'add' : 'remove') + 'Class'](o.endpointConnectedClass), this[(this.isFull() ? 'add' : 'remove') + 'Class'](o.endpointFullClass)), !n && l && 0 === this.connections.length && o.deleteObject({
            endpoint: this,
            fireEvent: !1,
            deleteAttachedObjects: !0 !== n
          })
        }, this.deleteEveryConnection = function (t) {
          for (var e = this.connections.length, n = 0; n < e; n++) o.deleteConnection(this.connections[0], t)
        }, this.detachFrom = function (t, e, n) {
          for (var i = [], s = 0; s < this.connections.length; s++) this.connections[s].endpoints[1] !== t && this.connections[s].endpoints[0] !== t || i.push(this.connections[s])
          for (var r = 0, a = i.length; r < a; r++) o.deleteConnection(i[0])
          return this
        }, this.getElement = function () {
          return this.element
        }, this.setElement = function (n) {
          var s = this._jsPlumb.instance.getId(n), r = this.elementId
          return e.removeWithFunction(i.endpointsByElement[this.elementId], function (t) {
            return t.id === this.id
          }.bind(this)), this.element = t.getElement(n), this.elementId = o.getId(this.element), o.anchorManager.rehomeEndpoint(this, r, this.element), o.dragManager.endpointAdded(this.element), e.addToList(i.endpointsByElement, s, this), this
        }, this.makeInPlaceCopy = function () {
          var t = this.anchor.getCurrentLocation({element: this}), e = this.anchor.getOrientation(this),
            n = this.anchor.getCssClass(), o = {
              bind: function () {
              }, compute: function () {
                return [t[0], t[1]]
              }, getCurrentLocation: function () {
                return [t[0], t[1]]
              }, getOrientation: function () {
                return e
              }, getCssClass: function () {
                return n
              }
            }
          return r({
            dropOptions: i.dropOptions,
            anchor: o,
            source: this.element,
            paintStyle: this.getPaintStyle(),
            endpoint: i.hideOnDrag ? 'Blank' : this.endpoint,
            _transient: !0,
            scope: this.scope,
            reference: this
          })
        }, this.connectorSelector = function () {
          return this.connections[0]
        }, this.setStyle = this.setPaintStyle, this.paint = function (t) {
          var e = (t = t || {}).timestamp, n = !(!1 === t.recalc)
          if (!e || this.timestamp !== e) {
            var i = o.updateOffset({elId: this.elementId, timestamp: e}), s = t.offset ? t.offset.o : i.o
            if (null != s) {
              var r = t.anchorPoint, a = t.connectorPaintStyle
              if (null == r) {
                var l = t.dimensions || i.s, u = {xy: [s.left, s.top], wh: l, element: this, timestamp: e}
                if (n && this.anchor.isDynamic && this.connections.length > 0) {
                  var c = function (t, e) {
                      var n = 0
                      if (null != e) {
                        for (var i = 0; i < t.connections.length; i++) {
                          if (t.connections[i].sourceId === e || t.connections[i].targetId === e) {
                            n = i
                            break
                          }
                        }
                      }
                      return t.connections[n]
                    }(this, t.elementWithPrecedence), h = c.endpoints[0] === this ? 1 : 0,
                    d = 0 === h ? c.sourceId : c.targetId, p = o.getCachedData(d), f = p.o, g = p.s
                  u.index = 0 === h ? 1 : 0, u.connection = c, u.txy = [f.left, f.top], u.twh = g, u.tElement = c.endpoints[h]
                } else {
                  this.connections.length > 0 && (u.connection = this.connections[0])
                }
                r = this.anchor.compute(u)
              }
              for (var m in this.endpoint.compute(r, this.anchor.getOrientation(this), this._jsPlumb.paintStyleInUse, a || this.paintStyleInUse), this.endpoint.paint(this._jsPlumb.paintStyleInUse, this.anchor), this.timestamp = e, this._jsPlumb.overlays) {
                if (this._jsPlumb.overlays.hasOwnProperty(m)) {
                  var v = this._jsPlumb.overlays[m]
                  v.isVisible() && (this._jsPlumb.overlayPlacements[m] = v.draw(this.endpoint, this._jsPlumb.paintStyleInUse), v.paint(this._jsPlumb.overlayPlacements[m]))
                }
              }
            }
          }
        }, this.getTypeDescriptor = function () {
          return 'endpoint'
        }, this.isVisible = function () {
          return this._jsPlumb.visible
        }, this.repaint = this.paint
        var h = !1
        this.initDraggable = function () {
          if (!h && t.isDragSupported(this.element)) {
            var n, l = {id: null, element: null}, u = null, c = !1, d = null, p = function (t, e, n) {
                var i = !1
                return {
                  drag: function () {
                    if (i) return i = !1, !0
                    if (e.element) {
                      var o = n.getUIPosition(arguments, n.getZoom())
                      null != o && n.setPosition(e.element, o), n.repaint(e.element, o), t.paint({anchorPoint: t.anchor.getCurrentLocation({element: t})})
                    }
                  }, stopDrag: function () {
                    i = !0
                  }
                }
              }(this, l, o), f = i.dragOptions || {}, g = t.dragEvents.start, m = t.dragEvents.stop,
              v = t.dragEvents.drag, b = t.dragEvents.beforeStart, y = function (e) {
                u = this.connectorSelector()
                var h = !0
                this.isEnabled() || (h = !1), null != u || this.isSource || this.isTemporarySource || (h = !1), !this.isSource || !this.isFull() || null != u && this.dragAllowedWhenFull || (h = !1), null == u || u.isDetachable(this) || (this.isFull() ? h = !1 : u = null)
                var f = o.checkCondition(null == u ? 'beforeDrag' : 'beforeStartDetach', {
                  endpoint: this,
                  source: this.element,
                  sourceId: this.elementId,
                  connection: u
                })
                if (!1 === f ? h = !1 : 'object' === (void 0 === f ? 'undefined' : a()(f)) ? t.extend(f, n || {}) : f = n || {}, !1 === h) return o.stopDrag && o.stopDrag(this.canvas), p.stopDrag(), !1
                for (var g = 0; g < this.connections.length; g++) this.connections[g].setHover(!1)
                this.addClass('endpointDrag'), o.setConnectionBeingDragged(!0), u && !this.isFull() && this.isSource && (u = null), o.updateOffset({elId: this.elementId})
                var m = this._jsPlumb.instance.getOffset(this.canvas), v = this.canvas,
                  b = this._jsPlumb.instance.getSize(this.canvas)
                !function (t, e, n, i) {
                  var o = e.createElement('div', {position: 'absolute'})
                  e.appendElement(o)
                  var s = e.getId(o)
                  e.setPosition(o, n), o.style.width = i[0] + 'px', o.style.height = i[1] + 'px', e.manage(s, o, !0), t.id = s, t.element = o
                }(l, o, m, b), o.setAttributes(this.canvas, {dragId: l.id, elId: this.elementId})
                var y = this.dragProxy || this.endpoint
                if (null == this.dragProxy && null != this.connectionType) {
                  var P = this._jsPlumb.instance.deriveEndpointAndAnchorSpec(this.connectionType)
                  P.endpoints[1] && (y = P.endpoints[1])
                }
                var x = this._jsPlumb.instance.makeAnchor('Center')
                x.isFloating = !0, this._jsPlumb.floatingEndpoint = function (e, n, i, o, s, r, a, l) {
                  return a({
                    paintStyle: e,
                    endpoint: i,
                    anchor: new t.FloatingAnchor({reference: n, referenceCanvas: o, jsPlumbInstance: r}),
                    source: s,
                    scope: l
                  })
                }(this.getPaintStyle(), x, y, this.canvas, l.element, o, r, this.scope)
                var _ = this._jsPlumb.floatingEndpoint.anchor
                if (null == u) {
                  this.setHover(!1, !1), (u = s({
                    sourceEndpoint: this,
                    targetEndpoint: this._jsPlumb.floatingEndpoint,
                    source: this.element,
                    target: l.element,
                    anchors: [this.anchor, this._jsPlumb.floatingEndpoint.anchor],
                    paintStyle: i.connectorStyle,
                    hoverPaintStyle: i.connectorHoverStyle,
                    connector: i.connector,
                    overlays: i.connectorOverlays,
                    type: this.connectionType,
                    cssClass: this.connectorClass,
                    hoverClass: this.connectorHoverClass,
                    scope: i.scope,
                    data: f
                  })).pending = !0, u.addClass(o.draggingClass), this._jsPlumb.floatingEndpoint.addClass(o.draggingClass), this._jsPlumb.floatingEndpoint.anchor = _, o.fire('connectionDrag', u), o.anchorManager.newConnection(u)
                } else {
                  c = !0, u.setHover(!1)
                  var C = u.endpoints[0].id === this.id ? 0 : 1
                  this.detachFromConnection(u, null, !0)
                  var j = o.getDragScope(v)
                  o.setAttribute(this.canvas, 'originalScope', j), o.fire('connectionDrag', u), 0 === C ? (d = [u.source, u.sourceId, v, j], o.anchorManager.sourceChanged(u.endpoints[C].elementId, l.id, u, l.element)) : (d = [u.target, u.targetId, v, j], u.target = l.element, u.targetId = l.id, o.anchorManager.updateOtherEndpoint(u.sourceId, u.endpoints[C].elementId, u.targetId, u)), u.suspendedEndpoint = u.endpoints[C], u.suspendedElement = u.endpoints[C].getElement(), u.suspendedElementId = u.endpoints[C].elementId, u.suspendedElementType = 0 === C ? 'source' : 'target', u.suspendedEndpoint.setHover(!1), this._jsPlumb.floatingEndpoint.referenceEndpoint = u.suspendedEndpoint, u.endpoints[C] = this._jsPlumb.floatingEndpoint, u.addClass(o.draggingClass), this._jsPlumb.floatingEndpoint.addClass(o.draggingClass)
                }
                o.registerFloatingConnection(l, u, this._jsPlumb.floatingEndpoint), o.currentlyDragging = !0
              }.bind(this), P = function () {
                if (o.setConnectionBeingDragged(!1), u && null != u.endpoints) {
                  var t = o.getDropEvent(arguments), e = o.getFloatingAnchorIndex(u)
                  if (u.endpoints[0 === e ? 1 : 0].anchor.unlock(), u.removeClass(o.draggingClass), this._jsPlumb && (u.deleteConnectionNow || u.endpoints[e] === this._jsPlumb.floatingEndpoint) && c && u.suspendedEndpoint) {
                    0 === e ? (u.floatingElement = u.source, u.floatingId = u.sourceId, u.floatingEndpoint = u.endpoints[0], u.floatingIndex = 0, u.source = d[0], u.sourceId = d[1]) : (u.floatingElement = u.target, u.floatingId = u.targetId, u.floatingEndpoint = u.endpoints[1], u.floatingIndex = 1, u.target = d[0], u.targetId = d[1])
                    var n = this._jsPlumb.floatingEndpoint
                    o.setDragScope(d[2], d[3]), u.endpoints[e] = u.suspendedEndpoint, u.isReattach() || u._forceReattach || u._forceDetach || !o.deleteConnection(u, {originalEvent: t}) ? (u.setHover(!1), u._forceDetach = null, u._forceReattach = null, this._jsPlumb.floatingEndpoint.detachFromConnection(u), u.suspendedEndpoint.addConnection(u), 1 === e ? o.anchorManager.updateOtherEndpoint(u.sourceId, u.floatingId, u.targetId, u) : o.anchorManager.sourceChanged(u.floatingId, u.sourceId, u, u.source), o.repaint(d[1])) : o.deleteObject({endpoint: n})
                  }
                  this.deleteAfterDragStop ? o.deleteObject({endpoint: this}) : this._jsPlumb && this.paint({recalc: !1}), o.fire('connectionDragStop', u, t), u.pending && o.fire('connectionAborted', u, t), o.currentlyDragging = !1, u.suspendedElement = null, u.suspendedEndpoint = null, u = null
                }
                l && l.element && o.remove(l.element, !1, !1), this._jsPlumb && (this.canvas.style.visibility = 'visible', this.anchor.unlock(), this._jsPlumb.floatingEndpoint = null)
              }.bind(this);
            (f = t.extend({}, f)).scope = this.scope || f.scope, f[b] = e.wrap(f[b], function (t) {
              n = t.e.payload || {}
            }, !1), f[g] = e.wrap(f[g], y, !1), f[v] = e.wrap(f[v], p.drag), f[m] = e.wrap(f[m], P), f.multipleDrop = !1, f.canDrag = function () {
              return this.isSource || this.isTemporarySource || this.connections.length > 0 && !1 !== this.connectionsDetachable
            }.bind(this), o.initDraggable(this.canvas, f, 'internal'), this.canvas._jsPlumbRelatedElement = this.element, h = !0
          }
        }
        var d = i.endpoint || this._jsPlumb.instance.Defaults.Endpoint || t.Defaults.Endpoint
        this.setEndpoint(d, !0)
        var p = i.anchor ? i.anchor : i.anchors ? i.anchors : o.Defaults.Anchor || 'Top'
        this.setAnchor(p, !0)
        var f = ['default', i.type || ''].join(' ')
        this.addType(f, i.data, !0), this.canvas = this.endpoint.canvas, this.canvas._jsPlumb = this, this.initDraggable()
        var g = function (n, s, r, a) {
          if (t.isDropSupported(this.element)) {
            var l = i.dropOptions || o.Defaults.DropOptions || t.Defaults.DropOptions;
            (l = t.extend({}, l)).scope = l.scope || this.scope
            var u = t.dragEvents.drop, c = t.dragEvents.over, h = t.dragEvents.out, d = this,
              p = o.EndpointDropHandler({
                getEndpoint: function () {
                  return d
                },
                jsPlumb: o,
                enabled: function () {
                  return null == r || r.isEnabled()
                },
                isFull: function () {
                  return r.isFull()
                },
                element: this.element,
                elementId: this.elementId,
                isSource: this.isSource,
                isTarget: this.isTarget,
                addClass: function (t) {
                  d.addClass(t)
                },
                removeClass: function (t) {
                  d.removeClass(t)
                },
                isDropAllowed: function () {
                  return d.isDropAllowed.apply(d, arguments)
                },
                reference: a,
                isRedrop: function (t, e) {
                  return t.suspendedEndpoint && e.reference && t.suspendedEndpoint.id === e.reference.id
                }
              })
            l[u] = e.wrap(l[u], p, !0), l[c] = e.wrap(l[c], function () {
              var e = t.getDragObject(arguments), n = o.getAttribute(t.getElement(e), 'dragId'),
                i = o.getFloatingConnectionFor(n)
              if (null != i) {
                var s = o.getFloatingAnchorIndex(i)
                if (this.isTarget && 0 !== s || i.suspendedEndpoint && this.referenceEndpoint && this.referenceEndpoint.id === i.suspendedEndpoint.id) {
                  var r = o.checkCondition('checkDropAllowed', {
                    sourceEndpoint: i.endpoints[s],
                    targetEndpoint: this,
                    connection: i
                  })
                  this[(r ? 'add' : 'remove') + 'Class'](o.endpointDropAllowedClass), this[(r ? 'remove' : 'add') + 'Class'](o.endpointDropForbiddenClass), i.endpoints[s].anchor.over(this.anchor, this)
                }
              }
            }.bind(this)), l[h] = e.wrap(l[h], function () {
              var e = t.getDragObject(arguments), n = null == e ? null : o.getAttribute(t.getElement(e), 'dragId'),
                i = n ? o.getFloatingConnectionFor(n) : null
              if (null != i) {
                var s = o.getFloatingAnchorIndex(i);
                (this.isTarget && 0 !== s || i.suspendedEndpoint && this.referenceEndpoint && this.referenceEndpoint.id === i.suspendedEndpoint.id) && (this.removeClass(o.endpointDropAllowedClass), this.removeClass(o.endpointDropForbiddenClass), i.endpoints[s].anchor.out())
              }
            }.bind(this)), o.initDroppable(n, l, 'internal', s)
          }
        }.bind(this)
        return this.anchor.isFloating || g(this.canvas, !(i._transient || this.anchor.isFloating), this, i.reference), this
      }, e.extend(t.Endpoint, t.OverlayCapableJsPlumbUIComponent, {
        setVisible: function (t, e, n) {
          if (this._jsPlumb.visible = t, this.canvas && (this.canvas.style.display = t ? 'block' : 'none'), this[t ? 'showOverlays' : 'hideOverlays'](), !e) {
            for (var i = 0; i < this.connections.length; i++) {
              if (this.connections[i].setVisible(t), !n) {
                var o = this === this.connections[i].endpoints[0] ? 1 : 0
                1 === this.connections[i].endpoints[o].connections.length && this.connections[i].endpoints[o].setVisible(t, !0, !0)
              }
            }
          }
        }, getAttachedElements: function () {
          return this.connections
        }, applyType: function (e, i) {
          this.setPaintStyle(e.endpointStyle || e.paintStyle, i), this.setHoverPaintStyle(e.endpointHoverStyle || e.hoverPaintStyle, i), null != e.maxConnections && (this._jsPlumb.maxConnections = e.maxConnections), e.scope && (this.scope = e.scope), t.extend(this, e, n), null != e.cssClass && this.canvas && this._jsPlumb.instance.addClass(this.canvas, e.cssClass), t.OverlayCapableJsPlumbUIComponent.applyType(this, e)
        }, isEnabled: function () {
          return this._jsPlumb.enabled
        }, setEnabled: function (t) {
          this._jsPlumb.enabled = t
        }, cleanup: function () {
          var e = this._jsPlumb.instance.endpointAnchorClassPrefix + (this._jsPlumb.currentAnchorClass ? '-' + this._jsPlumb.currentAnchorClass : '')
          t.removeClass(this.element, e), this.anchor = null, this.endpoint.cleanup(!0), this.endpoint.destroy(), this.endpoint = null, this._jsPlumb.instance.destroyDraggable(this.canvas, 'internal'), this._jsPlumb.instance.destroyDroppable(this.canvas, 'internal')
        }, setHover: function (t) {
          this.endpoint && this._jsPlumb && !this._jsPlumb.instance.isConnectionBeingDragged() && this.endpoint.setHover(t)
        }, isFull: function () {
          return 0 === this._jsPlumb.maxConnections || !(this.isFloating() || this._jsPlumb.maxConnections < 0 || this.connections.length < this._jsPlumb.maxConnections)
        }, isFloating: function () {
          return null != this.anchor && this.anchor.isFloating
        }, isConnectedTo: function (t) {
          var e = !1
          if (t) {
            for (var n = 0; n < this.connections.length; n++) {
              if (this.connections[n].endpoints[1] === t || this.connections[n].endpoints[0] === t) {
                e = !0
                break
              }
            }
          }
          return e
        }, getConnectionCost: function () {
          return this._jsPlumb.connectionCost
        }, setConnectionCost: function (t) {
          this._jsPlumb.connectionCost = t
        }, areConnectionsDirected: function () {
          return this._jsPlumb.connectionsDirected
        }, setConnectionsDirected: function (t) {
          this._jsPlumb.connectionsDirected = t
        }, setElementId: function (t) {
          this.elementId = t, this.anchor.elementId = t
        }, setReferenceElement: function (e) {
          this.element = t.getElement(e)
        }, setDragAllowedWhenFull: function (t) {
          this.dragAllowedWhenFull = t
        }, equals: function (t) {
          return this.anchor.equals(t.anchor)
        }, getUuid: function () {
          return this._jsPlumb.uuid
        }, computeAnchor: function (t) {
          return this.anchor.compute(t)
        }
      }), this.jsPlumbInstance.prototype.EndpointDropHandler = function (t) {
        return function (n) {
          var i = t.jsPlumb
          t.removeClass(i.endpointDropAllowedClass), t.removeClass(i.endpointDropForbiddenClass)
          var o = i.getDropEvent(arguments), s = i.getDragObject(arguments), r = i.getAttribute(s, 'dragId'),
            a = (i.getAttribute(s, 'elId'), i.getAttribute(s, 'originalScope')), l = i.getFloatingConnectionFor(r)
          if (null != l) {
            var u = null != l.suspendedEndpoint
            if (!u || null != l.suspendedEndpoint._jsPlumb) {
              var c = t.getEndpoint(l)
              if (null != c) {
                if (t.isRedrop(l, t)) return l._forceReattach = !0, l.setHover(!1), void (t.maybeCleanup && t.maybeCleanup(c))
                var h = i.getFloatingAnchorIndex(l)
                if (0 === h && !t.isSource || 1 === h && !t.isTarget) {
                  t.maybeCleanup && t.maybeCleanup(c)
                } else {
                  t.onDrop && t.onDrop(l), a && i.setDragScope(s, a)
                  var d = t.isFull(n)
                  if (d && c.fire('maxConnections', {
                    endpoint: this,
                    connection: l,
                    maxConnections: c._jsPlumb.maxConnections
                  }, o), !d && t.enabled()) {
                    var p = !0
                    0 === h ? (l.floatingElement = l.source, l.floatingId = l.sourceId, l.floatingEndpoint = l.endpoints[0], l.floatingIndex = 0, l.source = t.element, l.sourceId = t.elementId) : (l.floatingElement = l.target, l.floatingId = l.targetId, l.floatingEndpoint = l.endpoints[1], l.floatingIndex = 1, l.target = t.element, l.targetId = t.elementId), u && l.suspendedEndpoint.id !== c.id && (l.isDetachAllowed(l) && l.endpoints[h].isDetachAllowed(l) && l.suspendedEndpoint.isDetachAllowed(l) && i.checkCondition('beforeDetach', l) || (p = !1))
                    var f = function (n) {
                      l.endpoints[h].detachFromConnection(l), l.suspendedEndpoint && l.suspendedEndpoint.detachFromConnection(l), l.endpoints[h] = c, c.addConnection(l)
                      var s = c.getParameters()
                      for (var r in s) l.setParameter(r, s[r])
                      if (u) {
                        var a = l.suspendedEndpoint.elementId
                        i.fireMoveEvent({
                          index: h,
                          originalSourceId: 0 === h ? a : l.sourceId,
                          newSourceId: 0 === h ? c.elementId : l.sourceId,
                          originalTargetId: 1 === h ? a : l.targetId,
                          newTargetId: 1 === h ? c.elementId : l.targetId,
                          originalSourceEndpoint: 0 === h ? l.suspendedEndpoint : l.endpoints[0],
                          newSourceEndpoint: 0 === h ? c : l.endpoints[0],
                          originalTargetEndpoint: 1 === h ? l.suspendedEndpoint : l.endpoints[1],
                          newTargetEndpoint: 1 === h ? c : l.endpoints[1],
                          connection: l
                        }, o)
                      } else {
                        s.draggable && i.initDraggable(this.element, t.dragOptions, 'internal', i)
                      }
                      (1 === h ? i.anchorManager.updateOtherEndpoint(l.sourceId, l.floatingId, l.targetId, l) : i.anchorManager.sourceChanged(l.floatingId, l.sourceId, l, l.source), l.endpoints[0].finalEndpoint) && (l.endpoints[0].detachFromConnection(l), l.endpoints[0] = l.endpoints[0].finalEndpoint, l.endpoints[0].addConnection(l))
                      e.isObject(n) && l.mergeData(n), i.finaliseConnection(l, null, o, !1), l.setHover(!1), i.revalidate(l.endpoints[0].element)
                    }.bind(this)
                    if (p = p && t.isDropAllowed(l.sourceId, l.targetId, l.scope, l, c)) return f(p), !0
                    l.suspendedEndpoint && (l.endpoints[h] = l.suspendedEndpoint, l.setHover(!1), l._forceDetach = !0, 0 === h ? (l.source = l.suspendedEndpoint.element, l.sourceId = l.suspendedEndpoint.elementId) : (l.target = l.suspendedEndpoint.element, l.targetId = l.suspendedEndpoint.elementId), l.suspendedEndpoint.addConnection(l), 1 === h ? i.anchorManager.updateOtherEndpoint(l.sourceId, l.floatingId, l.targetId, l) : i.anchorManager.sourceChanged(l.floatingId, l.sourceId, l, l.source), i.repaint(l.sourceId), l._forceDetach = !1)
                  }
                  t.maybeCleanup && t.maybeCleanup(c), i.currentlyDragging = !1
                }
              }
            }
          }
        }
      }
    }.call('undefined' != typeof window ? window : this), function () {
      var t = this, e = t.jsPlumb, n = t.jsPlumbUtil, i = function (t, i, o, s, r) {
        if (e.Connectors[i] = e.Connectors[i] || {}, null == e.Connectors[i][o]) {
          if (null == e.Connectors[o]) {
            if (t.Defaults.DoNotThrowErrors) return null
            throw new TypeError('jsPlumb: unknown connector type \'' + o + '\'')
          }
          e.Connectors[i][o] = function () {
            e.Connectors[o].apply(this, arguments), e.ConnectorRenderers[i].apply(this, arguments)
          }, n.extend(e.Connectors[i][o], [e.Connectors[o], e.ConnectorRenderers[i]])
        }
        return new e.Connectors[i][o](s, r)
      }, o = function (t, e, n) {
        return t ? n.makeAnchor(t, e, n) : null
      }, s = function (t, e, i, o) {
        null != e && (e._jsPlumbConnections = e._jsPlumbConnections || {}, o ? delete e._jsPlumbConnections[t.id] : e._jsPlumbConnections[t.id] = !0, n.isEmpty(e._jsPlumbConnections) ? i.removeClass(e, i.connectedClass) : i.addClass(e, i.connectedClass))
      }
      e.Connection = function (t) {
        var i = t.newEndpoint
        this.id = t.id, this.connector = null, this.idPrefix = '_jsplumb_c_', this.defaultLabelLocation = .5, this.defaultOverlayKeys = ['Overlays', 'ConnectionOverlays'], this.previousConnection = t.previousConnection, this.source = e.getElement(t.source), this.target = e.getElement(t.target), e.OverlayCapableJsPlumbUIComponent.apply(this, arguments), t.sourceEndpoint ? (this.source = t.sourceEndpoint.getElement(), this.sourceId = t.sourceEndpoint.elementId) : this.sourceId = this._jsPlumb.instance.getId(this.source), t.targetEndpoint ? (this.target = t.targetEndpoint.getElement(), this.targetId = t.targetEndpoint.elementId) : this.targetId = this._jsPlumb.instance.getId(this.target), this.scope = t.scope, this.endpoints = [], this.endpointStyles = []
        var o = this._jsPlumb.instance
        o.manage(this.sourceId, this.source), o.manage(this.targetId, this.target), this._jsPlumb.visible = !0, this._jsPlumb.params = {
          cssClass: t.cssClass,
          container: t.container,
          'pointer-events': t['pointer-events'],
          editorParams: t.editorParams,
          overlays: t.overlays
        }, this._jsPlumb.lastPaintedAt = null, this.bind('mouseover', function () {
          this.setHover(!0)
        }.bind(this)), this.bind('mouseout', function () {
          this.setHover(!1)
        }.bind(this)), this.makeEndpoint = function (e, n, s, r, a) {
          return s = s || this._jsPlumb.instance.getId(n), this.prepareEndpoint(o, i, this, r, e ? 0 : 1, t, n, s, a)
        }, t.type && (t.endpoints = t.endpoints || this._jsPlumb.instance.deriveEndpointAndAnchorSpec(t.type).endpoints)
        var s = this.makeEndpoint(!0, this.source, this.sourceId, t.sourceEndpoint),
          r = this.makeEndpoint(!1, this.target, this.targetId, t.targetEndpoint)
        s && n.addToList(t.endpointsByElement, this.sourceId, s), r && n.addToList(t.endpointsByElement, this.targetId, r), this.scope || (this.scope = this.endpoints[0].scope), null != t.deleteEndpointsOnEmpty && (this.endpoints[0].setDeleteOnEmpty(t.deleteEndpointsOnEmpty), this.endpoints[1].setDeleteOnEmpty(t.deleteEndpointsOnEmpty))
        var a = o.Defaults.ConnectionsDetachable
        !1 === t.detachable && (a = !1), !1 === this.endpoints[0].connectionsDetachable && (a = !1), !1 === this.endpoints[1].connectionsDetachable && (a = !1)
        var l = t.reattach || this.endpoints[0].reattachConnections || this.endpoints[1].reattachConnections || o.Defaults.ReattachConnections
        this.appendToDefaultType({
          detachable: a,
          reattach: l,
          paintStyle: this.endpoints[0].connectorStyle || this.endpoints[1].connectorStyle || t.paintStyle || o.Defaults.PaintStyle || e.Defaults.PaintStyle,
          hoverPaintStyle: this.endpoints[0].connectorHoverStyle || this.endpoints[1].connectorHoverStyle || t.hoverPaintStyle || o.Defaults.HoverPaintStyle || e.Defaults.HoverPaintStyle
        })
        var u = o.getSuspendedAt()
        if (!o.isSuspendDrawing()) {
          var c = o.getCachedData(this.sourceId), h = c.o, d = c.s, p = o.getCachedData(this.targetId), f = p.o,
            g = p.s, m = u || o.timestamp(), v = this.endpoints[0].anchor.compute({
              xy: [h.left, h.top],
              wh: d,
              element: this.endpoints[0],
              elementId: this.endpoints[0].elementId,
              txy: [f.left, f.top],
              twh: g,
              tElement: this.endpoints[1],
              timestamp: m
            })
          this.endpoints[0].paint({
            anchorLoc: v,
            timestamp: m
          }), v = this.endpoints[1].anchor.compute({
            xy: [f.left, f.top],
            wh: g,
            element: this.endpoints[1],
            elementId: this.endpoints[1].elementId,
            txy: [h.left, h.top],
            twh: d,
            tElement: this.endpoints[0],
            timestamp: m
          }), this.endpoints[1].paint({anchorLoc: v, timestamp: m})
        }
        this.getTypeDescriptor = function () {
          return 'connection'
        }, this.getAttachedElements = function () {
          return this.endpoints
        }, this.isDetachable = function (t) {
          return !1 !== this._jsPlumb.detachable && (null != t ? !0 === t.connectionsDetachable : !0 === this._jsPlumb.detachable)
        }, this.setDetachable = function (t) {
          this._jsPlumb.detachable = !0 === t
        }, this.isReattach = function () {
          return !0 === this._jsPlumb.reattach || !0 === this.endpoints[0].reattachConnections || !0 === this.endpoints[1].reattachConnections
        }, this.setReattach = function (t) {
          this._jsPlumb.reattach = !0 === t
        }, this._jsPlumb.cost = t.cost || this.endpoints[0].getConnectionCost(), this._jsPlumb.directed = t.directed, null == t.directed && (this._jsPlumb.directed = this.endpoints[0].areConnectionsDirected())
        var b = e.extend({}, this.endpoints[1].getParameters())
        e.extend(b, this.endpoints[0].getParameters()), e.extend(b, this.getParameters()), this.setParameters(b), this.setConnector(this.endpoints[0].connector || this.endpoints[1].connector || t.connector || o.Defaults.Connector || e.Defaults.Connector, !0)
        var y = null != t.data && n.isObject(t.data) ? t.data : {}
        this.getData = function () {
          return y
        }, this.setData = function (t) {
          y = t || {}
        }, this.mergeData = function (t) {
          y = e.extend(y, t)
        }
        var P = ['default', this.endpoints[0].connectionType, this.endpoints[1].connectionType, t.type].join(' ');
        /[^\s]/.test(P) && this.addType(P, t.data, !0), this.updateConnectedClass()
      }, n.extend(e.Connection, e.OverlayCapableJsPlumbUIComponent, {
        applyType: function (t, n, i) {
          var o = null
          null != t.connector && (null == (o = this.getCachedTypeItem('connector', i.connector)) && (o = this.prepareConnector(t.connector, i.connector), this.cacheTypeItem('connector', o, i.connector)), this.setPreparedConnector(o)), null != t.detachable && this.setDetachable(t.detachable), null != t.reattach && this.setReattach(t.reattach), t.scope && (this.scope = t.scope), null != t.cssClass && this.canvas && this._jsPlumb.instance.addClass(this.canvas, t.cssClass)
          var s = null
          t.anchor ? null == (s = this.getCachedTypeItem('anchors', i.anchor)) && (s = [this._jsPlumb.instance.makeAnchor(t.anchor), this._jsPlumb.instance.makeAnchor(t.anchor)], this.cacheTypeItem('anchors', s, i.anchor)) : t.anchors && null == (s = this.getCachedTypeItem('anchors', i.anchors)) && (s = [this._jsPlumb.instance.makeAnchor(t.anchors[0]), this._jsPlumb.instance.makeAnchor(t.anchors[1])], this.cacheTypeItem('anchors', s, i.anchors)), null != s && (this.endpoints[0].anchor = s[0], this.endpoints[1].anchor = s[1], this.endpoints[1].anchor.isDynamic && this._jsPlumb.instance.repaint(this.endpoints[1].elementId)), e.OverlayCapableJsPlumbUIComponent.applyType(this, t)
        }, addClass: function (t, e) {
          e && (this.endpoints[0].addClass(t), this.endpoints[1].addClass(t), this.suspendedEndpoint && this.suspendedEndpoint.addClass(t)), this.connector && this.connector.addClass(t)
        }, removeClass: function (t, e) {
          e && (this.endpoints[0].removeClass(t), this.endpoints[1].removeClass(t), this.suspendedEndpoint && this.suspendedEndpoint.removeClass(t)), this.connector && this.connector.removeClass(t)
        }, isVisible: function () {
          return this._jsPlumb.visible
        }, setVisible: function (t) {
          this._jsPlumb.visible = t, this.connector && this.connector.setVisible(t), this.repaint()
        }, cleanup: function () {
          this.updateConnectedClass(!0), this.endpoints = null, this.source = null, this.target = null, null != this.connector && (this.connector.cleanup(!0), this.connector.destroy(!0)), this.connector = null
        }, updateConnectedClass: function (t) {
          this._jsPlumb && (s(this, this.source, this._jsPlumb.instance, t), s(this, this.target, this._jsPlumb.instance, t))
        }, setHover: function (e) {
          this.connector && this._jsPlumb && !this._jsPlumb.instance.isConnectionBeingDragged() && (this.connector.setHover(e), t.jsPlumb[e ? 'addClass' : 'removeClass'](this.source, this._jsPlumb.instance.hoverSourceClass), t.jsPlumb[e ? 'addClass' : 'removeClass'](this.target, this._jsPlumb.instance.hoverTargetClass))
        }, getUuids: function () {
          return [this.endpoints[0].getUuid(), this.endpoints[1].getUuid()]
        }, getCost: function () {
          return this._jsPlumb ? this._jsPlumb.cost : -1 / 0
        }, setCost: function (t) {
          this._jsPlumb.cost = t
        }, isDirected: function () {
          return this._jsPlumb.directed
        }, getConnector: function () {
          return this.connector
        }, prepareConnector: function (t, e) {
          var o, s = {
            _jsPlumb: this._jsPlumb.instance,
            cssClass: this._jsPlumb.params.cssClass,
            container: this._jsPlumb.params.container,
            'pointer-events': this._jsPlumb.params['pointer-events']
          }, r = this._jsPlumb.instance.getRenderMode()
          return n.isString(t) ? o = i(this._jsPlumb.instance, r, t, s, this) : n.isArray(t) && (o = 1 === t.length ? i(this._jsPlumb.instance, r, t[0], s, this) : i(this._jsPlumb.instance, r, t[0], n.merge(t[1], s), this)), null != e && (o.typeId = e), o
        }, setPreparedConnector: function (t, e, n, i) {
          if (this.connector !== t) {
            var o, s = ''
            if (null != this.connector && (s = (o = this.connector).getClass(), this.connector.cleanup(), this.connector.destroy()), this.connector = t, i && this.cacheTypeItem('connector', t, i), this.canvas = this.connector.canvas, this.bgCanvas = this.connector.bgCanvas, this.connector.reattach(this._jsPlumb.instance), this.addClass(s), this.canvas && (this.canvas._jsPlumb = this), this.bgCanvas && (this.bgCanvas._jsPlumb = this), null != o) for (var r = this.getOverlays(), a = 0; a < r.length; a++) r[a].transfer && r[a].transfer(this.connector)
            n || this.setListenerComponent(this.connector), e || this.repaint()
          }
        }, setConnector: function (t, e, n, i) {
          var o = this.prepareConnector(t, i)
          this.setPreparedConnector(o, e, n, i)
        }, paint: function (t) {
          if (!this._jsPlumb.instance.isSuspendDrawing() && this._jsPlumb.visible) {
            var e = (t = t || {}).timestamp, n = this.targetId, i = this.sourceId
            if (null == e || e !== this._jsPlumb.lastPaintedAt) {
              var o = this._jsPlumb.instance.updateOffset({elId: i}).o,
                s = this._jsPlumb.instance.updateOffset({elId: n}).o, r = this.endpoints[0], a = this.endpoints[1],
                l = r.anchor.getCurrentLocation({
                  xy: [o.left, o.top],
                  wh: [o.width, o.height],
                  element: r,
                  timestamp: e
                }), u = a.anchor.getCurrentLocation({
                  xy: [s.left, s.top],
                  wh: [s.width, s.height],
                  element: a,
                  timestamp: e
                })
              this.connector.resetBounds(), this.connector.compute({
                sourcePos: l,
                targetPos: u,
                sourceOrientation: r.anchor.getOrientation(r),
                targetOrientation: a.anchor.getOrientation(a),
                sourceEndpoint: this.endpoints[0],
                targetEndpoint: this.endpoints[1],
                'stroke-width': this._jsPlumb.paintStyleInUse.strokeWidth,
                sourceInfo: o,
                targetInfo: s
              })
              var c = {minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0}
              for (var h in this._jsPlumb.overlays) {
                if (this._jsPlumb.overlays.hasOwnProperty(h)) {
                  var d = this._jsPlumb.overlays[h]
                  d.isVisible() && (this._jsPlumb.overlayPlacements[h] = d.draw(this.connector, this._jsPlumb.paintStyleInUse, this.getAbsoluteOverlayPosition(d)), c.minX = Math.min(c.minX, this._jsPlumb.overlayPlacements[h].minX), c.maxX = Math.max(c.maxX, this._jsPlumb.overlayPlacements[h].maxX), c.minY = Math.min(c.minY, this._jsPlumb.overlayPlacements[h].minY), c.maxY = Math.max(c.maxY, this._jsPlumb.overlayPlacements[h].maxY))
                }
              }
              var p = parseFloat(this._jsPlumb.paintStyleInUse.strokeWidth || 1) / 2,
                f = parseFloat(this._jsPlumb.paintStyleInUse.strokeWidth || 0), g = {
                  xmin: Math.min(this.connector.bounds.minX - (p + f), c.minX),
                  ymin: Math.min(this.connector.bounds.minY - (p + f), c.minY),
                  xmax: Math.max(this.connector.bounds.maxX + (p + f), c.maxX),
                  ymax: Math.max(this.connector.bounds.maxY + (p + f), c.maxY)
                }
              for (var m in this.connector.paintExtents = g, this.connector.paint(this._jsPlumb.paintStyleInUse, null, g), this._jsPlumb.overlays) {
                if (this._jsPlumb.overlays.hasOwnProperty(m)) {
                  var v = this._jsPlumb.overlays[m]
                  v.isVisible() && v.paint(this._jsPlumb.overlayPlacements[m], g)
                }
              }
            }
            this._jsPlumb.lastPaintedAt = e
          }
        }, repaint: function (t) {
          var e = jsPlumb.extend(t || {}, {})
          e.elId = this.sourceId, this.paint(e)
        }, prepareEndpoint: function (t, n, i, s, r, a, l, u, c) {
          var h
          if (s) {
            i.endpoints[r] = s, s.addConnection(i)
          } else {
            a.endpoints || (a.endpoints = [null, null])
            var d = c || a.endpoints[r] || a.endpoint || t.Defaults.Endpoints[r] || e.Defaults.Endpoints[r] || t.Defaults.Endpoint || e.Defaults.Endpoint
            a.endpointStyles || (a.endpointStyles = [null, null]), a.endpointHoverStyles || (a.endpointHoverStyles = [null, null])
            var p = a.endpointStyles[r] || a.endpointStyle || t.Defaults.EndpointStyles[r] || e.Defaults.EndpointStyles[r] || t.Defaults.EndpointStyle || e.Defaults.EndpointStyle
            null == p.fill && null != a.paintStyle && (p.fill = a.paintStyle.stroke), null == p.outlineStroke && null != a.paintStyle && (p.outlineStroke = a.paintStyle.outlineStroke), null == p.outlineWidth && null != a.paintStyle && (p.outlineWidth = a.paintStyle.outlineWidth)
            var f = a.endpointHoverStyles[r] || a.endpointHoverStyle || t.Defaults.EndpointHoverStyles[r] || e.Defaults.EndpointHoverStyles[r] || t.Defaults.EndpointHoverStyle || e.Defaults.EndpointHoverStyle
            null != a.hoverPaintStyle && (null == f && (f = {}), null == f.fill && (f.fill = a.hoverPaintStyle.stroke))
            var g = a.anchors ? a.anchors[r] : a.anchor ? a.anchor : o(t.Defaults.Anchors[r], u, t) || o(e.Defaults.Anchors[r], u, t) || o(t.Defaults.Anchor, u, t) || o(e.Defaults.Anchor, u, t)
            h = n({
              paintStyle: p,
              hoverPaintStyle: f,
              endpoint: d,
              connections: [i],
              uuid: a.uuids ? a.uuids[r] : null,
              anchor: g,
              source: l,
              scope: a.scope,
              reattach: a.reattach || t.Defaults.ReattachConnections,
              detachable: a.detachable || t.Defaults.ConnectionsDetachable
            }), null == s && h.setDeleteOnEmpty(!0), i.endpoints[r] = h, !1 === a.drawEndpoints && h.setVisible(!1, !0, !0)
          }
          return h
        }, replaceEndpoint: function (t, e) {
          var n = this.endpoints[t], i = n.elementId, o = this._jsPlumb.instance.getEndpoints(i), s = o.indexOf(n),
            r = this.makeEndpoint(0 === t, n.element, i, null, e)
          this.endpoints[t] = r, o.splice(s, 1, r), this._jsPlumb.instance.deleteObject({
            endpoint: n,
            deleteAttachedObjects: !1
          }), this._jsPlumb.instance.fire('endpointReplaced', {
            previous: n,
            current: r
          }), this._jsPlumb.instance.anchorManager.updateOtherEndpoint(this.endpoints[0].elementId, this.endpoints[1].elementId, this.endpoints[1].elementId, this)
        }
      })
    }.call('undefined' != typeof window ? window : this), function () {
      var t = this.jsPlumbUtil, e = this.jsPlumb
      e.AnchorManager = function (n) {
        var i = {}, o = {}, s = {}, r = {}, a = this, l = {}, u = n.jsPlumbInstance, c = {}, h = function (t) {
          return function (e, n) {
            return !1 === (t ? e[0][0] < n[0][0] : e[0][0] > n[0][0]) ? -1 : 1
          }
        }, d = {
          top: function (t, e) {
            return t[0] > e[0] ? 1 : -1
          }, right: h(!0), bottom: h(!0), left: function (t, e) {
            return (t[0][0] < 0 ? -Math.PI - t[0][0] : Math.PI - t[0][0]) > (e[0][0] < 0 ? -Math.PI - e[0][0] : Math.PI - e[0][0]) ? 1 : -1
          }
        }, p = function (t, e) {
          var n = u.getCachedData(t), i = n.s, r = n.o, a = function (e, n, i, r, a, l, u) {
            if (r.length > 0) {
              for (var c = function (t, e, n, i, o, s, r) {
                for (var a = [], l = e[o ? 0 : 1] / (i.length + 1), u = 0; u < i.length; u++) {
                  var c = (u + 1) * l, h = s * e[o ? 1 : 0]
                  r && (c = e[o ? 0 : 1] - c)
                  var d = o ? c : h, p = n[0] + d, f = d / e[0], g = o ? h : c, m = n[1] + g, v = g / e[1]
                  a.push([p, m, f, v, i[u][1], i[u][2]])
                }
                return a
              }(0, n, i, (v = d[e], r.sort(v)), a, l, 'right' === e || 'top' === e), h = function (t, e) {
                o[t.id] = [e[0], e[1], e[2], e[3]], s[t.id] = u
              }, p = 0; p < c.length; p++) {
                var f = c[p][4], g = f.endpoints[0].elementId === t, m = f.endpoints[1].elementId === t
                g && h(f.endpoints[0], c[p]), m && h(f.endpoints[1], c[p])
              }
            }
            var v
          }
          a('bottom', i, [r.left, r.top], e.bottom, !0, 1, [0, 1]), a('top', i, [r.left, r.top], e.top, !0, 0, [0, -1]), a('left', i, [r.left, r.top], e.left, !1, 0, [-1, 0]), a('right', i, [r.left, r.top], e.right, !1, 1, [1, 0])
        }
        this.reset = function () {
          i = {}, r = {}, l = {}
        }, this.addFloatingConnection = function (t, e) {
          c[t] = e
        }, this.removeFloatingConnection = function (t) {
          delete c[t]
        }, this.newConnection = function (n) {
          var i = n.sourceId, o = n.targetId, s = n.endpoints, a = !0, l = function (l, u, c, h, d) {
            i === o && c.isContinuous && (n._jsPlumb.instance.removeElement(s[1].canvas), a = !1), t.addToList(r, h, [d, u, c.constructor === e.DynamicAnchor])
          }
          l(0, s[0], s[0].anchor, o, n), a && l(0, s[1], s[1].anchor, i, n)
        }
        var f = function (e) {
          !function (e, n) {
            if (e) {
              var i = function (t) {
                return t[4] === n
              }
              t.removeWithFunction(e.top, i), t.removeWithFunction(e.left, i), t.removeWithFunction(e.bottom, i), t.removeWithFunction(e.right, i)
            }
          }(l[e.elementId], e.id)
        }
        this.connectionDetached = function (e, n) {
          var i = e.connection || e, o = e.sourceId, s = e.targetId, l = i.endpoints, u = function (e, n, i, o, s) {
            t.removeWithFunction(r[o], function (t) {
              return t[0].id === s.id
            })
          }
          u(0, l[1], l[1].anchor, o, i), u(0, l[0], l[0].anchor, s, i), i.floatingId && (u(i.floatingIndex, i.floatingEndpoint, i.floatingEndpoint.anchor, i.floatingId, i), f(i.floatingEndpoint)), f(i.endpoints[0]), f(i.endpoints[1]), n || (a.redraw(i.sourceId), i.targetId !== i.sourceId && a.redraw(i.targetId))
        }, this.add = function (e, n) {
          t.addToList(i, n, e)
        }, this.changeId = function (t, e) {
          r[e] = r[t], i[e] = i[t], delete r[t], delete i[t]
        }, this.getConnectionsFor = function (t) {
          return r[t] || []
        }, this.getEndpointsFor = function (t) {
          return i[t] || []
        }, this.deleteEndpoint = function (e) {
          t.removeWithFunction(i[e.elementId], function (t) {
            return t.id === e.id
          }), f(e)
        }, this.clearFor = function (t) {
          delete i[t], i[t] = []
        }
        var g = function (e, i, o, s, r, a, l, u, c, h, d, p) {
          var f, g, m = -1, v = s.endpoints[l], b = v.id, y = [1, 0][l], P = [[i, o], s, r, a, b], x = e[c],
            _ = v._continuousAnchorEdge ? e[v._continuousAnchorEdge] : null
          if (_) {
            var C = t.findWithFunction(_, function (t) {
              return t[4] === b
            })
            if (-1 !== C) {
              for (_.splice(C, 1), f = 0; f < _.length; f++) {
                g = _[f][1], t.addWithFunction(d, g, function (t) {
                  return t.id === g.id
                }), t.addWithFunction(p, _[f][1].endpoints[l], function (t) {
                  return t.id === g.endpoints[l].id
                }), t.addWithFunction(p, _[f][1].endpoints[y], function (t) {
                  return t.id === g.endpoints[y].id
                })
              }
            }
          }
          for (f = 0; f < x.length; f++) {
            g = x[f][1], 1 === n.idx && x[f][3] === a && -1 === m && (m = f), t.addWithFunction(d, g, function (t) {
              return t.id === g.id
            }), t.addWithFunction(p, x[f][1].endpoints[l], function (t) {
              return t.id === g.endpoints[l].id
            }), t.addWithFunction(p, x[f][1].endpoints[y], function (t) {
              return t.id === g.endpoints[y].id
            })
          }
          var j = u ? -1 !== m ? m : 0 : x.length
          x.splice(j, 0, P), v._continuousAnchorEdge = c
        }
        this.updateOtherEndpoint = function (n, i, o, s) {
          var a = t.findWithFunction(r[n], function (t) {
            return t[0].id === s.id
          }), l = t.findWithFunction(r[i], function (t) {
            return t[0].id === s.id
          });
          -1 !== a && (r[n][a][0] = s, r[n][a][1] = s.endpoints[1], r[n][a][2] = s.endpoints[1].anchor.constructor === e.DynamicAnchor), l > -1 && (r[i].splice(l, 1), t.addToList(r, o, [s, s.endpoints[0], s.endpoints[0].anchor.constructor === e.DynamicAnchor])), s.updateConnectedClass()
        }, this.sourceChanged = function (n, i, o, s) {
          if (n !== i) {
            o.sourceId = i, o.source = s, t.removeWithFunction(r[n], function (t) {
              return t[0].id === o.id
            })
            var a = t.findWithFunction(r[o.targetId], function (t) {
              return t[0].id === o.id
            })
            a > -1 && (r[o.targetId][a][0] = o, r[o.targetId][a][1] = o.endpoints[0], r[o.targetId][a][2] = o.endpoints[0].anchor.constructor === e.DynamicAnchor), t.addToList(r, i, [o, o.endpoints[1], o.endpoints[1].anchor.constructor === e.DynamicAnchor]), o.endpoints[1].anchor.isContinuous && (o.source === o.target ? o._jsPlumb.instance.removeElement(o.endpoints[1].canvas) : null == o.endpoints[1].canvas.parentNode && o._jsPlumb.instance.appendElement(o.endpoints[1].canvas)), o.updateConnectedClass()
          }
        }, this.rehomeEndpoint = function (t, e, n) {
          var o = i[e] || [], s = u.getId(n)
          if (s !== e) {
            var r = o.indexOf(t)
            if (r > -1) {
              var l = o.splice(r, 1)[0]
              a.add(l, s)
            }
          }
          for (var c = 0; c < t.connections.length; c++) t.connections[c].sourceId === e ? a.sourceChanged(e, t.elementId, t.connections[c], t.element) : t.connections[c].targetId === e && (t.connections[c].targetId = t.elementId, t.connections[c].target = t.element, a.updateOtherEndpoint(t.connections[c].sourceId, e, t.elementId, t.connections[c]))
        }, this.redraw = function (n, o, s, a, h, d) {
          if (!u.isSuspendDrawing()) {
            var f = i[n] || [], m = r[n] || [], v = [], b = [], y = []
            s = s || u.timestamp(), a = a || {left: 0, top: 0}, o && (o = {left: o.left + a.left, top: o.top + a.top})
            for (var P = u.updateOffset({
              elId: n,
              offset: o,
              recalc: !1,
              timestamp: s
            }), x = {}, _ = 0; _ < m.length; _++) {
              var C = m[_][0], j = C.sourceId, E = C.targetId, S = C.endpoints[0].anchor.isContinuous,
                D = C.endpoints[1].anchor.isContinuous
              if (S || D) {
                var w = j + '_' + E, I = x[w], A = C.sourceId === n ? 1 : 0
                S && !l[j] && (l[j] = {top: [], right: [], bottom: [], left: []}), D && !l[E] && (l[E] = {
                  top: [],
                  right: [],
                  bottom: [],
                  left: []
                }), n !== E && u.updateOffset({elId: E, timestamp: s}), n !== j && u.updateOffset({
                  elId: j,
                  timestamp: s
                })
                var k = u.getCachedData(E), O = u.getCachedData(j)
                E === j && (S || D) ? (g(l[j], -Math.PI / 2, 0, C, !1, E, 0, !1, 'top', 0, v, b), g(l[E], -Math.PI / 2, 0, C, !1, j, 1, !1, 'top', 0, v, b)) : (I || (I = this.calculateOrientation(j, E, O.o, k.o, C.endpoints[0].anchor, C.endpoints[1].anchor, C), x[w] = I), S && g(l[j], I.theta, 0, C, !1, E, 0, !1, I.a[0], 0, v, b), D && g(l[E], I.theta2, -1, C, !0, j, 1, !0, I.a[1], 0, v, b)), S && t.addWithFunction(y, j, function (t) {
                  return t === j
                }), D && t.addWithFunction(y, E, function (t) {
                  return t === E
                }), t.addWithFunction(v, C, function (t) {
                  return t.id === C.id
                }), (S && 0 === A || D && 1 === A) && t.addWithFunction(b, C.endpoints[A], function (t) {
                  return t.id === C.endpoints[A].id
                })
              }
            }
            for (_ = 0; _ < f.length; _++) {
              0 === f[_].connections.length && f[_].anchor.isContinuous && (l[n] || (l[n] = {
                top: [],
                right: [],
                bottom: [],
                left: []
              }), g(l[n], -Math.PI / 2, 0, {
                endpoints: [f[_], f[_]], paint: function () {
                }
              }, !1, n, 0, !1, f[_].anchor.getDefaultFace(), 0, v, b), t.addWithFunction(y, n, function (t) {
                return t === n
              }))
            }
            for (_ = 0; _ < y.length; _++) p(y[_], l[y[_]])
            for (_ = 0; _ < f.length; _++) f[_].paint({timestamp: s, offset: P, dimensions: P.s, recalc: !0 !== d})
            for (_ = 0; _ < b.length; _++) {
              var M = u.getCachedData(b[_].elementId)
              b[_].paint({timestamp: null, offset: M, dimensions: M.s})
            }
            for (_ = 0; _ < m.length; _++) {
              var T = m[_][1]
              if (T.anchor.constructor === e.DynamicAnchor) {
                T.paint({elementWithPrecedence: n, timestamp: s}), t.addWithFunction(v, m[_][0], function (t) {
                  return t.id === m[_][0].id
                })
                for (var L = 0; L < T.connections.length; L++) {
                  T.connections[L] !== m[_][0] && t.addWithFunction(v, T.connections[L], function (t) {
                    return t.id === T.connections[L].id
                  })
                }
              } else {
                t.addWithFunction(v, m[_][0], function (t) {
                  return t.id === m[_][0].id
                })
              }
            }
            var F = c[n]
            for (F && F.paint({timestamp: s, recalc: !1, elId: n}), _ = 0; _ < v.length; _++) {
              v[_].paint({
                elId: n,
                timestamp: null,
                recalc: !1,
                clearEdits: h
              })
            }
          }
        }
        u.continuousAnchorFactory = {
          get: function (e) {
            return new function (e) {
              t.EventGenerator.apply(this), this.type = 'Continuous', this.isDynamic = !0, this.isContinuous = !0
              for (var n = e.faces || ['top', 'right', 'bottom', 'left'], i = !(!1 === e.clockwise), r = {}, a = {
                top: 'bottom',
                right: 'left',
                left: 'right',
                bottom: 'top'
              }, l = {top: 'right', right: 'bottom', left: 'top', bottom: 'left'}, u = {
                top: 'left',
                right: 'top',
                left: 'bottom',
                bottom: 'right'
              }, c = i ? l : u, h = i ? u : l, d = e.cssClass || '', p = null, f = null, g = ['left', 'right'], m = ['top', 'bottom'], v = null, b = 0; b < n.length; b++) {
                r[n[b]] = !0
              }
              this.getDefaultFace = function () {
                return 0 === n.length ? 'top' : n[0]
              }, this.isRelocatable = function () {
                return !0
              }, this.isSnapOnRelocate = function () {
                return !0
              }, this.verifyEdge = function (t) {
                return r[t] ? t : r[a[t]] ? a[t] : r[c[t]] ? c[t] : r[h[t]] ? h[t] : t
              }, this.isEdgeSupported = function (t) {
                return null == v ? null == f ? !0 === r[t] : f === t : -1 !== v.indexOf(t)
              }, this.setCurrentFace = function (t, e) {
                p = t, e && null != f && (f = p)
              }, this.getCurrentFace = function () {
                return p
              }, this.getSupportedFaces = function () {
                var t = []
                for (var e in r) r[e] && t.push(e)
                return t
              }, this.lock = function () {
                f = p
              }, this.unlock = function () {
                f = null
              }, this.isLocked = function () {
                return null != f
              }, this.lockCurrentAxis = function () {
                null != p && (v = 'left' === p || 'right' === p ? g : m)
              }, this.unlockCurrentAxis = function () {
                v = null
              }, this.compute = function (t) {
                return o[t.element.id] || [0, 0]
              }, this.getCurrentLocation = function (t) {
                return o[t.element.id] || [0, 0]
              }, this.getOrientation = function (t) {
                return s[t.id] || [0, 0]
              }, this.getCssClass = function () {
                return d
              }
            }(e)
          }, clear: function (t) {
            delete o[t]
          }
        }
      }, e.AnchorManager.prototype.calculateOrientation = function (t, e, n, i, o, s) {
        var r = ['left', 'top', 'right', 'bottom']
        if (t === e) return {orientation: 'identity', a: ['top', 'top']}
        var a = Math.atan2(i.centery - n.centery, i.centerx - n.centerx),
          l = Math.atan2(n.centery - i.centery, n.centerx - i.centerx), u = [], c = {}
        !function (t, e) {
          for (var n = 0; n < t.length; n++) {
            c[t[n]] = {
              left: [e[n].left, e[n].centery],
              right: [e[n].right, e[n].centery],
              top: [e[n].centerx, e[n].top],
              bottom: [e[n].centerx, e[n].bottom]
            }
          }
        }(['source', 'target'], [n, i])
        for (var h = 0; h < r.length; h++) {
          for (var d = 0; d < r.length; d++) {
            u.push({
              source: r[h],
              target: r[d],
              dist: Biltong.lineLength(c.source[r[h]], c.target[r[d]])
            })
          }
        }
        u.sort(function (t, e) {
          return t.dist < e.dist ? -1 : t.dist > e.dist ? 1 : 0
        })
        for (var p = u[0].source, f = u[0].target, g = 0; g < u.length && (p = !o.isContinuous || o.isEdgeSupported(u[g].source) ? u[g].source : null, f = !s.isContinuous || s.isEdgeSupported(u[g].target) ? u[g].target : null, null == p || null == f); g++)
        return o.isContinuous && o.setCurrentFace(p), s.isContinuous && s.setCurrentFace(f), {
          a: [p, f],
          theta: a,
          theta2: l
        }
      }, e.Anchor = function (e) {
        this.x = e.x || 0, this.y = e.y || 0, this.elementId = e.elementId, this.cssClass = e.cssClass || '', this.userDefinedLocation = null, this.orientation = e.orientation || [0, 0], this.lastReturnValue = null, this.offsets = e.offsets || [0, 0], this.timestamp = null
        var n = !1 !== e.relocatable
        this.isRelocatable = function () {
          return n
        }, this.setRelocatable = function (t) {
          n = t
        }
        var i = !1 !== e.snapOnRelocate
        this.isSnapOnRelocate = function () {
          return i
        }
        var o = !1
        this.lock = function () {
          o = !0
        }, this.unlock = function () {
          o = !1
        }, this.isLocked = function () {
          return o
        }, t.EventGenerator.apply(this), this.compute = function (t) {
          var e = t.xy, n = t.wh, i = t.timestamp
          return t.clearUserDefinedLocation && (this.userDefinedLocation = null), i && i === this.timestamp ? this.lastReturnValue : (null != this.userDefinedLocation ? this.lastReturnValue = this.userDefinedLocation : this.lastReturnValue = [e[0] + this.x * n[0] + this.offsets[0], e[1] + this.y * n[1] + this.offsets[1], this.x, this.y], this.timestamp = i, this.lastReturnValue)
        }, this.getCurrentLocation = function (t) {
          return t = t || {}, null == this.lastReturnValue || null != t.timestamp && this.timestamp !== t.timestamp ? this.compute(t) : this.lastReturnValue
        }, this.setPosition = function (t, e, n, i, s) {
          o && !s || (this.x = t, this.y = e, this.orientation = [n, i], this.lastReturnValue = null)
        }
      }, t.extend(e.Anchor, t.EventGenerator, {
        equals: function (t) {
          if (!t) return !1
          var e = t.getOrientation(), n = this.getOrientation()
          return this.x === t.x && this.y === t.y && this.offsets[0] === t.offsets[0] && this.offsets[1] === t.offsets[1] && n[0] === e[0] && n[1] === e[1]
        }, getUserDefinedLocation: function () {
          return this.userDefinedLocation
        }, setUserDefinedLocation: function (t) {
          this.userDefinedLocation = t
        }, clearUserDefinedLocation: function () {
          this.userDefinedLocation = null
        }, getOrientation: function () {
          return this.orientation
        }, getCssClass: function () {
          return this.cssClass
        }
      }), e.FloatingAnchor = function (t) {
        e.Anchor.apply(this, arguments)
        var n = t.reference, i = t.referenceCanvas, o = e.getSize(i), s = null, r = null
        this.orientation = null, this.x = 0, this.y = 0, this.isFloating = !0, this.compute = function (t) {
          var e = t.xy, n = [e[0] + o[0] / 2, e[1] + o[1] / 2]
          return r = n, n
        }, this.getOrientation = function (t) {
          if (s) return s
          var e = n.getOrientation(t)
          return [0 * Math.abs(e[0]) * -1, 0 * Math.abs(e[1]) * -1]
        }, this.over = function (t, e) {
          s = t.getOrientation(e)
        }, this.out = function () {
          s = null
        }, this.getCurrentLocation = function (t) {
          return null == r ? this.compute(t) : r
        }
      }, t.extend(e.FloatingAnchor, e.Anchor)
      e.DynamicAnchor = function (t) {
        e.Anchor.apply(this, arguments), this.isDynamic = !0, this.anchors = [], this.elementId = t.elementId, this.jsPlumbInstance = t.jsPlumbInstance
        for (var n = 0; n < t.anchors.length; n++) this.anchors[n] = (i = t.anchors[n], o = this.jsPlumbInstance, s = this.elementId, i.constructor === e.Anchor ? i : o.makeAnchor(i, s, o))
        var i, o, s
        this.getAnchors = function () {
          return this.anchors
        }
        var r = this.anchors.length > 0 ? this.anchors[0] : null, a = r, l = this, u = function (t, e, n, i, o) {
          var s = i[0] + t.x * o[0], r = i[1] + t.y * o[1], a = i[0] + o[0] / 2, l = i[1] + o[1] / 2
          return Math.sqrt(Math.pow(e - s, 2) + Math.pow(n - r, 2)) + Math.sqrt(Math.pow(a - s, 2) + Math.pow(l - r, 2))
        }, c = t.selector || function (t, e, n, i, o) {
          for (var s = n[0] + i[0] / 2, r = n[1] + i[1] / 2, a = -1, l = 1 / 0, c = 0; c < o.length; c++) {
            var h = u(o[c], s, r, t, e)
            h < l && (a = c + 0, l = h)
          }
          return o[a]
        }
        this.compute = function (t) {
          var e = t.xy, n = t.wh, i = t.txy, o = t.twh
          this.timestamp = t.timestamp
          var s = l.getUserDefinedLocation()
          return null != s ? s : this.isLocked() || null == i || null == o ? r.compute(t) : (t.timestamp = null, r = c(e, n, i, o, this.anchors), this.x = r.x, this.y = r.y, r !== a && this.fire('anchorChanged', r), a = r, r.compute(t))
        }, this.getCurrentLocation = function (t) {
          return this.getUserDefinedLocation() || (null != r ? r.getCurrentLocation(t) : null)
        }, this.getOrientation = function (t) {
          return null != r ? r.getOrientation(t) : [0, 0]
        }, this.over = function (t, e) {
          null != r && r.over(t, e)
        }, this.out = function () {
          null != r && r.out()
        }, this.setAnchor = function (t) {
          r = t
        }, this.getCssClass = function () {
          return r && r.getCssClass() || ''
        }, this.setAnchorCoordinates = function (t) {
          var e = jsPlumbUtil.findWithFunction(this.anchors, function (e) {
            return e.x === t[0] && e.y === t[1]
          })
          return -1 !== e && (this.setAnchor(this.anchors[e]), !0)
        }
      }, t.extend(e.DynamicAnchor, e.Anchor)
      var n = function (t, n, i, o, s, r) {
        e.Anchors[s] = function (e) {
          var a = e.jsPlumbInstance.makeAnchor([t, n, i, o, 0, 0], e.elementId, e.jsPlumbInstance)
          return a.type = s, r && r(a, e), a
        }
      }
      n(.5, 0, 0, -1, 'TopCenter'), n(.5, 1, 0, 1, 'BottomCenter'), n(0, .5, -1, 0, 'LeftMiddle'), n(1, .5, 1, 0, 'RightMiddle'), n(.5, 0, 0, -1, 'Top'), n(.5, 1, 0, 1, 'Bottom'), n(0, .5, -1, 0, 'Left'), n(1, .5, 1, 0, 'Right'), n(.5, .5, 0, 0, 'Center'), n(1, 0, 0, -1, 'TopRight'), n(1, 1, 0, 1, 'BottomRight'), n(0, 0, 0, -1, 'TopLeft'), n(0, 1, 0, 1, 'BottomLeft'), e.Defaults.DynamicAnchors = function (t) {
        return t.jsPlumbInstance.makeAnchors(['TopCenter', 'RightMiddle', 'BottomCenter', 'LeftMiddle'], t.elementId, t.jsPlumbInstance)
      }, e.Anchors.AutoDefault = function (t) {
        var n = t.jsPlumbInstance.makeDynamicAnchor(e.Defaults.DynamicAnchors(t))
        return n.type = 'AutoDefault', n
      }
      var i = function (t, n) {
        e.Anchors[t] = function (e) {
          var i = e.jsPlumbInstance.makeAnchor(['Continuous', {faces: n}], e.elementId, e.jsPlumbInstance)
          return i.type = t, i
        }
      }
      e.Anchors.Continuous = function (t) {
        return t.jsPlumbInstance.continuousAnchorFactory.get(t)
      }, i('ContinuousLeft', ['left']), i('ContinuousTop', ['top']), i('ContinuousBottom', ['bottom']), i('ContinuousRight', ['right']), n(0, 0, 0, 0, 'Assign', function (t, e) {
        var n = e.position || 'Fixed'
        t.positionFinder = n.constructor === String ? e.jsPlumbInstance.AnchorPositionFinders[n] : n, t.constructorParams = e
      }), this.jsPlumbInstance.prototype.AnchorPositionFinders = {
        Fixed: function (t, e, n) {
          return [(t.left - e.left) / n[0], (t.top - e.top) / n[1]]
        }, Grid: function (t, e, n, i) {
          var o = t.left - e.left, s = t.top - e.top, r = n[0] / i.grid[0], a = n[1] / i.grid[1], l = Math.floor(o / r),
            u = Math.floor(s / a)
          return [(l * r + r / 2) / n[0], (u * a + a / 2) / n[1]]
        }
      }, e.Anchors.Perimeter = function (t) {
        var e = (t = t || {}).anchorCount || 60, n = t.shape
        if (!n) throw new Error('no shape supplied to Perimeter Anchor type')
        var i = function () {
          for (var t = 2 * Math.PI / e, n = 0, i = [], o = 0; o < e; o++) {
            var s = .5 + .5 * Math.sin(n), r = .5 + .5 * Math.cos(n)
            i.push([s, r, 0, 0]), n += t
          }
          return i
        }, o = function (t) {
          for (var n = e / t.length, i = [], o = function (t, o, s, r, a, l, u) {
            for (var c = (s - t) / (n = e * a), h = (r - o) / n, d = 0; d < n; d++) i.push([t + c * d, o + h * d, null == l ? 0 : l, null == u ? 0 : u])
          }, s = 0; s < t.length; s++) {
            o.apply(null, t[s])
          }
          return i
        }, s = function (t) {
          for (var e = [], n = 0; n < t.length; n++) e.push([t[n][0], t[n][1], t[n][2], t[n][3], 1 / t.length, t[n][4], t[n][5]])
          return o(e)
        }, r = function () {
          return s([[0, 0, 1, 0, 0, -1], [1, 0, 1, 1, 1, 0], [1, 1, 0, 1, 0, 1], [0, 1, 0, 0, -1, 0]])
        }, a = {
          Circle: i, Ellipse: i, Diamond: function () {
            return s([[.5, 0, 1, .5], [1, .5, .5, 1], [.5, 1, 0, .5], [0, .5, .5, 0]])
          }, Rectangle: r, Square: r, Triangle: function () {
            return s([[.5, 0, 1, 1], [1, 1, 0, 1], [0, 1, .5, 0]])
          }, Path: function (t) {
            for (var e = t.points, n = [], i = 0, s = 0; s < e.length - 1; s++) {
              var r = Math.sqrt(Math.pow(e[s][2] - e[s][0]) + Math.pow(e[s][3] - e[s][1]))
              i += r, n.push([e[s][0], e[s][1], e[s + 1][0], e[s + 1][1], r])
            }
            for (var a = 0; a < n.length; a++) n[a][4] = n[a][4] / i
            return o(n)
          }
        }
        if (!a[n]) throw new Error('Shape [' + n + '] is unknown by Perimeter Anchor type')
        var l = a[n](t)
        t.rotation && (l = function (t, e) {
          for (var n = [], i = e / 180 * Math.PI, o = 0; o < t.length; o++) {
            var s = t[o][0] - .5, r = t[o][1] - .5
            n.push([s * Math.cos(i) - r * Math.sin(i) + .5, s * Math.sin(i) + r * Math.cos(i) + .5, t[o][2], t[o][3]])
          }
          return n
        }(l, t.rotation))
        var u = t.jsPlumbInstance.makeDynamicAnchor(l)
        return u.type = 'Perimeter', u
      }
    }.call('undefined' != typeof window ? window : this), function () {
      var t = this, e = t.jsPlumb, n = t.jsPlumbUtil, i = t.Biltong
      e.Segments = {
        AbstractSegment: function (t) {
          this.params = t, this.findClosestPointOnPath = function (t, e) {
            return {d: 1 / 0, x: null, y: null, l: null}
          }, this.getBounds = function () {
            return {
              minX: Math.min(t.x1, t.x2),
              minY: Math.min(t.y1, t.y2),
              maxX: Math.max(t.x1, t.x2),
              maxY: Math.max(t.y1, t.y2)
            }
          }, this.lineIntersection = function (t, e, n, i) {
            return []
          }, this.boxIntersection = function (t, e, n, i) {
            var o = []
            return o.push.apply(o, this.lineIntersection(t, e, t + n, e)), o.push.apply(o, this.lineIntersection(t + n, e, t + n, e + i)), o.push.apply(o, this.lineIntersection(t + n, e + i, t, e + i)), o.push.apply(o, this.lineIntersection(t, e + i, t, e)), o
          }, this.boundingBoxIntersection = function (t) {
            return this.boxIntersection(t.x, t.y, t.w, t.y)
          }
        }, Straight: function (t) {
          var n, o, s, r, a, l, u
          e.Segments.AbstractSegment.apply(this, arguments)
          this.type = 'Straight', this.getLength = function () {
            return n
          }, this.getGradient = function () {
            return o
          }, this.getCoordinates = function () {
            return {x1: r, y1: l, x2: a, y2: u}
          }, this.setCoordinates = function (t) {
            r = t.x1, l = t.y1, a = t.x2, u = t.y2, n = Math.sqrt(Math.pow(a - r, 2) + Math.pow(u - l, 2)), o = i.gradient({
              x: r,
              y: l
            }, {x: a, y: u}), s = -1 / o
          }, this.setCoordinates({x1: t.x1, y1: t.y1, x2: t.x2, y2: t.y2}), this.getBounds = function () {
            return {minX: Math.min(r, a), minY: Math.min(l, u), maxX: Math.max(r, a), maxY: Math.max(l, u)}
          }, this.pointOnPath = function (t, e) {
            if (0 !== t || e) {
              if (1 !== t || e) {
                var o = e ? t > 0 ? t : n + t : t * n
                return i.pointOnLine({x: r, y: l}, {x: a, y: u}, o)
              }
              return {x: a, y: u}
            }
            return {x: r, y: l}
          }, this.gradientAtPoint = function (t) {
            return o
          }, this.pointAlongPathFrom = function (t, e, n) {
            var o = this.pointOnPath(t, n), s = e <= 0 ? {x: r, y: l} : {x: a, y: u}
            return e <= 0 && Math.abs(e) > 1 && (e *= -1), i.pointOnLine(o, s, e)
          }
          var c = function (t, e, n) {
            return n >= Math.min(t, e) && n <= Math.max(t, e)
          }, h = function (t, e, n) {
            return Math.abs(n - t) < Math.abs(n - e) ? t : e
          }
          this.findClosestPointOnPath = function (t, e) {
            var d = {d: 1 / 0, x: null, y: null, l: null, x1: r, x2: a, y1: l, y2: u}
            if (0 === o) {
              d.y = l, d.x = c(r, a, t) ? t : h(r, a, t)
            } else if (o === 1 / 0 || o === -1 / 0) {
              d.x = r, d.y = c(l, u, e) ? e : h(l, u, e)
            } else {
              var p = l - o * r, f = (e - s * t - p) / (o - s), g = o * f + p
              d.x = c(r, a, f) ? f : h(r, a, f), d.y = c(l, u, g) ? g : h(l, u, g)
            }
            var m = i.lineLength([d.x, d.y], [r, l])
            return d.d = i.lineLength([t, e], [d.x, d.y]), d.l = m / n, d
          }
          var d = function (t, e, n) {
            return n > e ? e <= t && t <= n : e >= t && t >= n
          }
          this.lineIntersection = function (t, e, n, s) {
            var c = Math.abs(i.gradient({x: t, y: e}, {x: n, y: s})), h = Math.abs(o), p = h === 1 / 0 ? r : l - h * r,
              f = [], g = c === 1 / 0 ? t : e - c * t
            if (c !== h) {
              if (c === 1 / 0 && 0 === h) {
                d(t, r, a) && d(l, e, s) && (f = [t, l])
              } else if (0 === c && h === 1 / 0) {
                d(e, l, u) && d(r, t, n) && (f = [r, e])
              } else {
                var m, v
                c === 1 / 0 ? d(m = t, r, a) && d(v = h * t + p, e, s) && (f = [m, v]) : 0 === c ? d(v = e, l, u) && d(m = (e - p) / h, t, n) && (f = [m, v]) : (v = h * (m = (g - p) / (h - c)) + p, d(m, r, a) && d(v, l, u) && (f = [m, v]))
              }
            }
            return f
          }, this.boxIntersection = function (t, e, n, i) {
            var o = []
            return o.push.apply(o, this.lineIntersection(t, e, t + n, e)), o.push.apply(o, this.lineIntersection(t + n, e, t + n, e + i)), o.push.apply(o, this.lineIntersection(t + n, e + i, t, e + i)), o.push.apply(o, this.lineIntersection(t, e + i, t, e)), o
          }, this.boundingBoxIntersection = function (t) {
            return this.boxIntersection(t.x, t.y, t.w, t.h)
          }
        }, Arc: function (t) {
          e.Segments.AbstractSegment.apply(this, arguments)
          var n = function (e, n) {
            return i.theta([t.cx, t.cy], [e, n])
          }, o = 2 * Math.PI
          this.radius = t.r, this.anticlockwise = t.ac, this.type = 'Arc', t.startAngle && t.endAngle ? (this.startAngle = t.startAngle, this.endAngle = t.endAngle, this.x1 = t.cx + this.radius * Math.cos(t.startAngle), this.y1 = t.cy + this.radius * Math.sin(t.startAngle), this.x2 = t.cx + this.radius * Math.cos(t.endAngle), this.y2 = t.cy + this.radius * Math.sin(t.endAngle)) : (this.startAngle = n(t.x1, t.y1), this.endAngle = n(t.x2, t.y2), this.x1 = t.x1, this.y1 = t.y1, this.x2 = t.x2, this.y2 = t.y2), this.endAngle < 0 && (this.endAngle += o), this.startAngle < 0 && (this.startAngle += o)
          var s = this.endAngle < this.startAngle ? this.endAngle + o : this.endAngle
          this.sweep = Math.abs(s - this.startAngle), this.anticlockwise && (this.sweep = o - this.sweep)
          var r = 2 * Math.PI * this.radius, a = this.sweep / o, l = r * a
          this.getLength = function () {
            return l
          }, this.getBounds = function () {
            return {minX: t.cx - t.r, maxX: t.cx + t.r, minY: t.cy - t.r, maxY: t.cy + t.r}
          }
          var u = function (t) {
            var e = Math.floor(t), n = Math.ceil(t)
            return t - e < 1e-10 ? e : n - t < 1e-10 ? n : t
          }
          this.pointOnPath = function (e, n) {
            if (0 === e) return {x: this.x1, y: this.y1, theta: this.startAngle}
            if (1 === e) return {x: this.x2, y: this.y2, theta: this.endAngle}
            n && (e /= l)
            var i = function (t, e) {
              if (t.anticlockwise) {
                var n = t.startAngle < t.endAngle ? t.startAngle + o : t.startAngle
                return n - Math.abs(n - t.endAngle) * e
              }
              var i = t.endAngle < t.startAngle ? t.endAngle + o : t.endAngle, s = Math.abs(i - t.startAngle)
              return t.startAngle + s * e
            }(this, e), s = t.cx + t.r * Math.cos(i), r = t.cy + t.r * Math.sin(i)
            return {x: u(s), y: u(r), theta: i}
          }, this.gradientAtPoint = function (e, n) {
            var o = this.pointOnPath(e, n), s = i.normal([t.cx, t.cy], [o.x, o.y])
            return this.anticlockwise || s !== 1 / 0 && s !== -1 / 0 || (s *= -1), s
          }, this.pointAlongPathFrom = function (e, n, i) {
            var o = this.pointOnPath(e, i), s = n / r * 2 * Math.PI, a = this.anticlockwise ? -1 : 1,
              l = o.theta + a * s
            return {x: t.cx + this.radius * Math.cos(l), y: t.cy + this.radius * Math.sin(l)}
          }
        }, Bezier: function (n) {
          this.curve = [{x: n.x1, y: n.y1}, {x: n.cp1x, y: n.cp1y}, {x: n.cp2x, y: n.cp2y}, {x: n.x2, y: n.y2}]
          e.Segments.AbstractSegment.apply(this, arguments)
          this.bounds = {
            minX: Math.min(n.x1, n.x2, n.cp1x, n.cp2x),
            minY: Math.min(n.y1, n.y2, n.cp1y, n.cp2y),
            maxX: Math.max(n.x1, n.x2, n.cp1x, n.cp2x),
            maxY: Math.max(n.y1, n.y2, n.cp1y, n.cp2y)
          }, this.type = 'Bezier'
          var i = function (e, n, i) {
            return i && (n = t.jsBezier.locationAlongCurveFrom(e, n > 0 ? 0 : 1, n)), n
          }
          this.pointOnPath = function (e, n) {
            return e = i(this.curve, e, n), t.jsBezier.pointOnCurve(this.curve, e)
          }, this.gradientAtPoint = function (e, n) {
            return e = i(this.curve, e, n), t.jsBezier.gradientAtPoint(this.curve, e)
          }, this.pointAlongPathFrom = function (e, n, o) {
            return e = i(this.curve, e, o), t.jsBezier.pointAlongCurveFrom(this.curve, e, n)
          }, this.getLength = function () {
            return t.jsBezier.getLength(this.curve)
          }, this.getBounds = function () {
            return this.bounds
          }, this.findClosestPointOnPath = function (e, n) {
            var i = t.jsBezier.nearestPointOnCurve({x: e, y: n}, this.curve)
            return {
              d: Math.sqrt(Math.pow(i.point.x - e, 2) + Math.pow(i.point.y - n, 2)),
              x: i.point.x,
              y: i.point.y,
              l: 1 - i.location,
              s: this
            }
          }, this.lineIntersection = function (e, n, i, o) {
            return t.jsBezier.lineIntersection(e, n, i, o, this.curve)
          }
        }
      }, e.SegmentRenderer = {
        getPath: function (t, e) {
          return {
            Straight: function (e) {
              var n = t.getCoordinates()
              return (e ? 'M ' + n.x1 + ' ' + n.y1 + ' ' : '') + 'L ' + n.x2 + ' ' + n.y2
            }, Bezier: function (e) {
              var n = t.params
              return (e ? 'M ' + n.x2 + ' ' + n.y2 + ' ' : '') + 'C ' + n.cp2x + ' ' + n.cp2y + ' ' + n.cp1x + ' ' + n.cp1y + ' ' + n.x1 + ' ' + n.y1
            }, Arc: function (e) {
              var n = t.params, i = t.sweep > Math.PI ? 1 : 0, o = t.anticlockwise ? 0 : 1
              return (e ? 'M' + t.x1 + ' ' + t.y1 + ' ' : '') + 'A ' + t.radius + ' ' + n.r + ' 0 ' + i + ',' + o + ' ' + t.x2 + ' ' + t.y2
            }
          }[t.type](e)
        }
      }
      var o = function () {
        this.resetBounds = function () {
          this.bounds = {minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0}
        }, this.resetBounds()
      }
      e.Connectors.AbstractConnector = function (t) {
        o.apply(this, arguments)
        var s = [], r = 0, a = [], l = [], u = t.stub || 0, c = n.isArray(u) ? u[0] : u, h = n.isArray(u) ? u[1] : u,
          d = t.gap || 0, p = n.isArray(d) ? d[0] : d, f = n.isArray(d) ? d[1] : d, g = null, m = null
        this.getPathData = function () {
          for (var t = '', n = 0; n < s.length; n++) t += e.SegmentRenderer.getPath(s[n], 0 === n), t += ' '
          return t
        }, this.findSegmentForPoint = function (t, e) {
          for (var n = {d: 1 / 0, s: null, x: null, y: null, l: null}, i = 0; i < s.length; i++) {
            var o = s[i].findClosestPointOnPath(t, e)
            o.d < n.d && (n.d = o.d, n.l = o.l, n.x = o.x, n.y = o.y, n.s = s[i], n.x1 = o.x1, n.x2 = o.x2, n.y1 = o.y1, n.y2 = o.y2, n.index = i, n.connectorLocation = a[i][0] + o.l * (a[i][1] - a[i][0]))
          }
          return n
        }, this.lineIntersection = function (t, e, n, i) {
          for (var o = [], r = 0; r < s.length; r++) o.push.apply(o, s[r].lineIntersection(t, e, n, i))
          return o
        }, this.boxIntersection = function (t, e, n, i) {
          for (var o = [], r = 0; r < s.length; r++) o.push.apply(o, s[r].boxIntersection(t, e, n, i))
          return o
        }, this.boundingBoxIntersection = function (t) {
          for (var e = [], n = 0; n < s.length; n++) e.push.apply(e, s[n].boundingBoxIntersection(t))
          return e
        }
        var v = function (t, e) {
          e && (t = t > 0 ? t / r : (r + t) / r)
          for (var n = a.length - 1, i = 1, o = 0; o < a.length; o++) {
            if (a[o][1] >= t) {
              n = o, i = 1 === t ? 1 : 0 === t ? 0 : (t - a[o][0]) / l[o]
              break
            }
          }
          return {segment: s[n], proportion: i, index: n}
        }
        this.setSegments = function (t) {
          g = [], r = 0
          for (var e = 0; e < t.length; e++) g.push(t[e]), r += t[e].getLength()
        }, this.getLength = function () {
          return r
        }
        var b = function (t) {
          this.strokeWidth = t.strokeWidth
          var e = i.quadrant(t.sourcePos, t.targetPos), n = t.targetPos[0] < t.sourcePos[0],
            o = t.targetPos[1] < t.sourcePos[1], s = t.strokeWidth || 1,
            r = t.sourceEndpoint.anchor.getOrientation(t.sourceEndpoint),
            a = t.targetEndpoint.anchor.getOrientation(t.targetEndpoint), l = n ? t.targetPos[0] : t.sourcePos[0],
            u = o ? t.targetPos[1] : t.sourcePos[1], d = Math.abs(t.targetPos[0] - t.sourcePos[0]),
            g = Math.abs(t.targetPos[1] - t.sourcePos[1])
          if (0 === r[0] && 0 === r[1] || 0 === a[0] && 0 === a[1]) {
            var m = d > g ? 0 : 1, v = [1, 0][m]
            a = [], (r = [])[m] = t.sourcePos[m] > t.targetPos[m] ? -1 : 1, a[m] = t.sourcePos[m] > t.targetPos[m] ? 1 : -1, r[v] = 0, a[v] = 0
          }
          var b = n ? d + p * r[0] : p * r[0], y = o ? g + p * r[1] : p * r[1], P = n ? f * a[0] : d + f * a[0],
            x = o ? f * a[1] : g + f * a[1], _ = r[0] * a[0] + r[1] * a[1], C = {
              sx: b,
              sy: y,
              tx: P,
              ty: x,
              lw: s,
              xSpan: Math.abs(P - b),
              ySpan: Math.abs(x - y),
              mx: (b + P) / 2,
              my: (y + x) / 2,
              so: r,
              to: a,
              x: l,
              y: u,
              w: d,
              h: g,
              segment: e,
              startStubX: b + r[0] * c,
              startStubY: y + r[1] * c,
              endStubX: P + a[0] * h,
              endStubY: x + a[1] * h,
              isXGreaterThanStubTimes2: Math.abs(b - P) > c + h,
              isYGreaterThanStubTimes2: Math.abs(y - x) > c + h,
              opposite: -1 === _,
              perpendicular: 0 === _,
              orthogonal: 1 === _,
              sourceAxis: 0 === r[0] ? 'y' : 'x',
              points: [l, u, d, g, b, y, P, x],
              stubs: [c, h]
            }
          return C.anchorOrientation = C.opposite ? 'opposite' : C.orthogonal ? 'orthogonal' : 'perpendicular', C
        }
        this.getSegments = function () {
          return s
        }, this.updateBounds = function (t) {
          var e = t.getBounds()
          this.bounds.minX = Math.min(this.bounds.minX, e.minX), this.bounds.maxX = Math.max(this.bounds.maxX, e.maxX), this.bounds.minY = Math.min(this.bounds.minY, e.minY), this.bounds.maxY = Math.max(this.bounds.maxY, e.maxY)
        }
        return this.pointOnPath = function (t, e) {
          var n = v(t, e)
          return n.segment && n.segment.pointOnPath(n.proportion, !1) || [0, 0]
        }, this.gradientAtPoint = function (t, e) {
          var n = v(t, e)
          return n.segment && n.segment.gradientAtPoint(n.proportion, !1) || 0
        }, this.pointAlongPathFrom = function (t, e, n) {
          var i = v(t, n)
          return i.segment && i.segment.pointAlongPathFrom(i.proportion, e, !1) || [0, 0]
        }, this.compute = function (t) {
          m = b.call(this, t), r = s.length = a.length = l.length = 0, this._compute(m, t), this.x = m.points[0], this.y = m.points[1], this.w = m.points[2], this.h = m.points[3], this.segment = m.segment, function () {
            for (var t = 0, e = 0; e < s.length; e++) {
              var n = s[e].getLength()
              l[e] = n / r, a[e] = [t, t += n / r]
            }
          }()
        }, {
          addSegment: function (t, n, i) {
            if (i.x1 !== i.x2 || i.y1 !== i.y2) {
              var o = new e.Segments[n](i)
              s.push(o), r += o.getLength(), t.updateBounds(o)
            }
          },
          prepareCompute: b,
          sourceStub: c,
          targetStub: h,
          maxStub: Math.max(c, h),
          sourceGap: p,
          targetGap: f,
          maxGap: Math.max(p, f)
        }
      }, n.extend(e.Connectors.AbstractConnector, o), e.Endpoints.AbstractEndpoint = function (t) {
        return o.apply(this, arguments), {
          compute: this.compute = function (t, e, n, i) {
            var o = this._compute.apply(this, arguments)
            return this.x = o[0], this.y = o[1], this.w = o[2], this.h = o[3], this.bounds.minX = this.x, this.bounds.minY = this.y, this.bounds.maxX = this.x + this.w, this.bounds.maxY = this.y + this.h, o
          }, cssClass: t.cssClass
        }
      }, n.extend(e.Endpoints.AbstractEndpoint, o), e.Endpoints.Dot = function (t) {
        this.type = 'Dot'
        e.Endpoints.AbstractEndpoint.apply(this, arguments)
        t = t || {}, this.radius = t.radius || 10, this.defaultOffset = .5 * this.radius, this.defaultInnerRadius = this.radius / 3, this._compute = function (t, e, n, i) {
          this.radius = n.radius || this.radius
          var o = t[0] - this.radius, s = t[1] - this.radius, r = 2 * this.radius, a = 2 * this.radius
          if (n.stroke) {
            var l = n.strokeWidth || 1
            o -= l, s -= l, r += 2 * l, a += 2 * l
          }
          return [o, s, r, a, this.radius]
        }
      }, n.extend(e.Endpoints.Dot, e.Endpoints.AbstractEndpoint), e.Endpoints.Rectangle = function (t) {
        this.type = 'Rectangle'
        e.Endpoints.AbstractEndpoint.apply(this, arguments)
        t = t || {}, this.width = t.width || 20, this.height = t.height || 20, this._compute = function (t, e, n, i) {
          var o = n.width || this.width, s = n.height || this.height
          return [t[0] - o / 2, t[1] - s / 2, o, s]
        }
      }, n.extend(e.Endpoints.Rectangle, e.Endpoints.AbstractEndpoint)
      var s = function (t) {
        e.jsPlumbUIComponent.apply(this, arguments), this._jsPlumb.displayElements = []
      }
      n.extend(s, e.jsPlumbUIComponent, {
        getDisplayElements: function () {
          return this._jsPlumb.displayElements
        }, appendDisplayElement: function (t) {
          this._jsPlumb.displayElements.push(t)
        }
      }), e.Endpoints.Image = function (i) {
        this.type = 'Image', s.apply(this, arguments), e.Endpoints.AbstractEndpoint.apply(this, arguments)
        var o = i.onload, r = i.src || i.url, a = i.cssClass ? ' ' + i.cssClass : ''
        this._jsPlumb.img = new Image, this._jsPlumb.ready = !1, this._jsPlumb.initialized = !1, this._jsPlumb.deleted = !1, this._jsPlumb.widthToUse = i.width, this._jsPlumb.heightToUse = i.height, this._jsPlumb.endpoint = i.endpoint, this._jsPlumb.img.onload = function () {
          null != this._jsPlumb && (this._jsPlumb.ready = !0, this._jsPlumb.widthToUse = this._jsPlumb.widthToUse || this._jsPlumb.img.width, this._jsPlumb.heightToUse = this._jsPlumb.heightToUse || this._jsPlumb.img.height, o && o(this))
        }.bind(this), this._jsPlumb.endpoint.setImage = function (t, e) {
          var n = t.constructor === String ? t : t.src
          o = e, this._jsPlumb.img.src = n, null != this.canvas && this.canvas.setAttribute('src', this._jsPlumb.img.src)
        }.bind(this), this._jsPlumb.endpoint.setImage(r, o), this._compute = function (t, e, n, i) {
          return this.anchorPoint = t, this._jsPlumb.ready ? [t[0] - this._jsPlumb.widthToUse / 2, t[1] - this._jsPlumb.heightToUse / 2, this._jsPlumb.widthToUse, this._jsPlumb.heightToUse] : [0, 0, 0, 0]
        }, this.canvas = e.createElement('img', {
          position: 'absolute',
          margin: 0,
          padding: 0,
          outline: 0
        }, this._jsPlumb.instance.endpointClass + a), this._jsPlumb.widthToUse && this.canvas.setAttribute('width', this._jsPlumb.widthToUse), this._jsPlumb.heightToUse && this.canvas.setAttribute('height', this._jsPlumb.heightToUse), this._jsPlumb.instance.appendElement(this.canvas), this.actuallyPaint = function (t, e, i) {
          if (!this._jsPlumb.deleted) {
            this._jsPlumb.initialized || (this.canvas.setAttribute('src', this._jsPlumb.img.src), this.appendDisplayElement(this.canvas), this._jsPlumb.initialized = !0)
            var o = this.anchorPoint[0] - this._jsPlumb.widthToUse / 2,
              s = this.anchorPoint[1] - this._jsPlumb.heightToUse / 2
            n.sizeElement(this.canvas, o, s, this._jsPlumb.widthToUse, this._jsPlumb.heightToUse)
          }
        }, this.paint = function (e, n) {
          null != this._jsPlumb && (this._jsPlumb.ready ? this.actuallyPaint(e, n) : t.setTimeout(function () {
            this.paint(e, n)
          }.bind(this), 200))
        }
      }, n.extend(e.Endpoints.Image, [s, e.Endpoints.AbstractEndpoint], {
        cleanup: function (t) {
          t && (this._jsPlumb.deleted = !0, this.canvas && this.canvas.parentNode.removeChild(this.canvas), this.canvas = null)
        }
      }), e.Endpoints.Blank = function (t) {
        e.Endpoints.AbstractEndpoint.apply(this, arguments)
        this.type = 'Blank', s.apply(this, arguments), this._compute = function (t, e, n, i) {
          return [t[0], t[1], 10, 0]
        }
        var i = t.cssClass ? ' ' + t.cssClass : ''
        this.canvas = e.createElement('div', {
          display: 'block',
          width: '1px',
          height: '1px',
          background: 'transparent',
          position: 'absolute'
        }, this._jsPlumb.instance.endpointClass + i), this._jsPlumb.instance.appendElement(this.canvas), this.paint = function (t, e) {
          n.sizeElement(this.canvas, this.x, this.y, this.w, this.h)
        }
      }, n.extend(e.Endpoints.Blank, [e.Endpoints.AbstractEndpoint, s], {
        cleanup: function () {
          this.canvas && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas)
        }
      }), e.Endpoints.Triangle = function (t) {
        this.type = 'Triangle', e.Endpoints.AbstractEndpoint.apply(this, arguments)
        var n = this;
        (t = t || {}).width = t.width || 55, t.height = t.height || 55, this.width = t.width, this.height = t.height, this._compute = function (t, e, i, o) {
          var s = i.width || n.width, r = i.height || n.height
          return [t[0] - s / 2, t[1] - r / 2, s, r]
        }
      }
      var r = e.Overlays.AbstractOverlay = function (t) {
        this.visible = !0, this.isAppendedAtTopLevel = !0, this.component = t.component, this.loc = null == t.location ? .5 : t.location, this.endpointLoc = null == t.endpointLocation ? [.5, .5] : t.endpointLocation, this.visible = !1 !== t.visible
      }
      r.prototype = {
        cleanup: function (t) {
          t && (this.component = null, this.canvas = null, this.endpointLoc = null)
        }, reattach: function (t, e) {
        }, setVisible: function (t) {
          this.visible = t, this.component.repaint()
        }, isVisible: function () {
          return this.visible
        }, hide: function () {
          this.setVisible(!1)
        }, show: function () {
          this.setVisible(!0)
        }, incrementLocation: function (t) {
          this.loc += t, this.component.repaint()
        }, setLocation: function (t) {
          this.loc = t, this.component.repaint()
        }, getLocation: function () {
          return this.loc
        }, updateFrom: function () {
        }
      }, e.Overlays.Arrow = function (t) {
        this.type = 'Arrow', r.apply(this, arguments), this.isAppendedAtTopLevel = !1, t = t || {}
        var o = this
        this.length = t.length || 20, this.width = t.width || 20, this.id = t.id, this.direction = (t.direction || 1) < 0 ? -1 : 1
        var s = t.paintStyle || {'stroke-width': 1}, a = t.foldback || .623
        this.computeMaxSize = function () {
          return 1.5 * o.width
        }, this.elementCreated = function (n, i) {
          if (this.path = n, t.events) for (var o in t.events) e.on(n, o, t.events[o])
        }, this.draw = function (t, e) {
          var o, r, l, u
          if (t.pointAlongPathFrom) {
            if (n.isString(this.loc) || this.loc > 1 || this.loc < 0) {
              var c = parseInt(this.loc, 10), h = this.loc < 0 ? 1 : 0
              o = t.pointAlongPathFrom(h, c, !1), r = t.pointAlongPathFrom(h, c - this.direction * this.length / 2, !1), l = i.pointOnLine(o, r, this.length)
            } else if (1 === this.loc) {
              if (o = t.pointOnPath(this.loc), r = t.pointAlongPathFrom(this.loc, -this.length), l = i.pointOnLine(o, r, this.length), -1 === this.direction) {
                var d = l
                l = o, o = d
              }
            } else if (0 === this.loc) {
              if (l = t.pointOnPath(this.loc), r = t.pointAlongPathFrom(this.loc, this.length), o = i.pointOnLine(l, r, this.length), -1 === this.direction) {
                var p = l
                l = o, o = p
              }
            } else {
              o = t.pointAlongPathFrom(this.loc, this.direction * this.length / 2), r = t.pointOnPath(this.loc), l = i.pointOnLine(o, r, this.length)
            }
            var f = {
              hxy: o,
              tail: u = i.perpendicularLineTo(o, l, this.width),
              cxy: i.pointOnLine(o, l, a * this.length)
            }, g = s.stroke || e.stroke, m = s.fill || e.stroke
            return {
              component: t,
              d: f,
              'stroke-width': s.strokeWidth || e.strokeWidth,
              stroke: g,
              fill: m,
              minX: Math.min(o.x, u[0].x, u[1].x),
              maxX: Math.max(o.x, u[0].x, u[1].x),
              minY: Math.min(o.y, u[0].y, u[1].y),
              maxY: Math.max(o.y, u[0].y, u[1].y)
            }
          }
          return {component: t, minX: 0, maxX: 0, minY: 0, maxY: 0}
        }
      }, n.extend(e.Overlays.Arrow, r, {
        updateFrom: function (t) {
          this.length = t.length || this.length, this.width = t.width || this.width, this.direction = null != t.direction ? t.direction : this.direction, this.foldback = t.foldback || this.foldback
        }, cleanup: function () {
          this.path && this.canvas && this.canvas.removeChild(this.path)
        }
      }), e.Overlays.PlainArrow = function (t) {
        t = t || {}
        var n = e.extend(t, {foldback: 1})
        e.Overlays.Arrow.call(this, n), this.type = 'PlainArrow'
      }, n.extend(e.Overlays.PlainArrow, e.Overlays.Arrow), e.Overlays.Diamond = function (t) {
        var n = (t = t || {}).length || 40, i = e.extend(t, {length: n / 2, foldback: 2})
        e.Overlays.Arrow.call(this, i), this.type = 'Diamond'
      }, n.extend(e.Overlays.Diamond, e.Overlays.Arrow)
      var a = function (t, e) {
        return (null == t._jsPlumb.cachedDimensions || e) && (t._jsPlumb.cachedDimensions = t.getDimensions()), t._jsPlumb.cachedDimensions
      }, l = function (t) {
        e.jsPlumbUIComponent.apply(this, arguments), r.apply(this, arguments)
        var i = this.fire
        this.fire = function () {
          i.apply(this, arguments), this.component && this.component.fire.apply(this.component, arguments)
        }, this.detached = !1, this.id = t.id, this._jsPlumb.div = null, this._jsPlumb.initialised = !1, this._jsPlumb.component = t.component, this._jsPlumb.cachedDimensions = null, this._jsPlumb.create = t.create, this._jsPlumb.initiallyInvisible = !1 === t.visible, this.getElement = function () {
          if (null == this._jsPlumb.div) {
            var n = this._jsPlumb.div = e.getElement(this._jsPlumb.create(this._jsPlumb.component))
            n.style.position = 'absolute', jsPlumb.addClass(n, this._jsPlumb.instance.overlayClass + ' ' + (this.cssClass ? this.cssClass : t.cssClass ? t.cssClass : '')), this._jsPlumb.instance.appendElement(n), this._jsPlumb.instance.getId(n), this.canvas = n
            var i = 'translate(-50%, -50%)'
            n.style.webkitTransform = i, n.style.mozTransform = i, n.style.msTransform = i, n.style.oTransform = i, n.style.transform = i, n._jsPlumb = this, !1 === t.visible && (n.style.display = 'none')
          }
          return this._jsPlumb.div
        }, this.draw = function (t, e, i) {
          var o = a(this)
          if (null != o && 2 === o.length) {
            var s = {x: 0, y: 0}
            if (i) {
              s = {x: i[0], y: i[1]}
            } else if (t.pointOnPath) {
              var r = this.loc, l = !1;
              (n.isString(this.loc) || this.loc < 0 || this.loc > 1) && (r = parseInt(this.loc, 10), l = !0), s = t.pointOnPath(r, l)
            } else {
              var u = this.loc.constructor === Array ? this.loc : this.endpointLoc
              s = {x: u[0] * t.w, y: u[1] * t.h}
            }
            var c = s.x - o[0] / 2, h = s.y - o[1] / 2
            return {
              component: t,
              d: {minx: c, miny: h, td: o, cxy: s},
              minX: c,
              maxX: c + o[0],
              minY: h,
              maxY: h + o[1]
            }
          }
          return {minX: 0, maxX: 0, minY: 0, maxY: 0}
        }
      }
      n.extend(l, [e.jsPlumbUIComponent, r], {
        getDimensions: function () {
          return [1, 1]
        }, setVisible: function (t) {
          this._jsPlumb.div && (this._jsPlumb.div.style.display = t ? 'block' : 'none', t && this._jsPlumb.initiallyInvisible && (a(this, !0), this.component.repaint(), this._jsPlumb.initiallyInvisible = !1))
        }, clearCachedDimensions: function () {
          this._jsPlumb.cachedDimensions = null
        }, cleanup: function (t) {
          t ? null != this._jsPlumb.div && (this._jsPlumb.div._jsPlumb = null, this._jsPlumb.instance.removeElement(this._jsPlumb.div)) : (this._jsPlumb && this._jsPlumb.div && this._jsPlumb.div.parentNode && this._jsPlumb.div.parentNode.removeChild(this._jsPlumb.div), this.detached = !0)
        }, reattach: function (t, e) {
          null != this._jsPlumb.div && t.getContainer().appendChild(this._jsPlumb.div), this.detached = !1
        }, computeMaxSize: function () {
          var t = a(this)
          return Math.max(t[0], t[1])
        }, paint: function (t, e) {
          this._jsPlumb.initialised || (this.getElement(), t.component.appendDisplayElement(this._jsPlumb.div), this._jsPlumb.initialised = !0, this.detached && this._jsPlumb.div.parentNode.removeChild(this._jsPlumb.div)), this._jsPlumb.div.style.left = t.component.x + t.d.minx + 'px', this._jsPlumb.div.style.top = t.component.y + t.d.miny + 'px'
        }
      }), e.Overlays.Custom = function (t) {
        this.type = 'Custom', l.apply(this, arguments)
      }, n.extend(e.Overlays.Custom, l), e.Overlays.GuideLines = function () {
        var t = this
        t.length = 50, t.strokeWidth = 5, this.type = 'GuideLines', r.apply(this, arguments), e.jsPlumbUIComponent.apply(this, arguments), this.draw = function (e, n) {
          var o = e.pointAlongPathFrom(t.loc, t.length / 2), s = e.pointOnPath(t.loc),
            r = i.pointOnLine(o, s, t.length), a = i.perpendicularLineTo(o, r, 40), l = i.perpendicularLineTo(r, o, 20)
          return {
            connector: e,
            head: o,
            tail: r,
            headLine: l,
            tailLine: a,
            minX: Math.min(o.x, r.x, l[0].x, l[1].x),
            minY: Math.min(o.y, r.y, l[0].y, l[1].y),
            maxX: Math.max(o.x, r.x, l[0].x, l[1].x),
            maxY: Math.max(o.y, r.y, l[0].y, l[1].y)
          }
        }
      }, e.Overlays.Label = function (t) {
        this.labelStyle = t.labelStyle
        this.cssClass = null != this.labelStyle ? this.labelStyle.cssClass : null
        var n = e.extend({
          create: function () {
            return e.createElement('div')
          }
        }, t)
        if (e.Overlays.Custom.call(this, n), this.type = 'Label', this.label = t.label || '', this.labelText = null, this.labelStyle) {
          var i = this.getElement()
          if (this.labelStyle.font = this.labelStyle.font || '12px sans-serif', i.style.font = this.labelStyle.font, i.style.color = this.labelStyle.color || 'black', this.labelStyle.fill && (i.style.background = this.labelStyle.fill), this.labelStyle.borderWidth > 0) {
            var o = this.labelStyle.borderStyle ? this.labelStyle.borderStyle : 'black'
            i.style.border = this.labelStyle.borderWidth + 'px solid ' + o
          }
          this.labelStyle.padding && (i.style.padding = this.labelStyle.padding)
        }
      }, n.extend(e.Overlays.Label, e.Overlays.Custom, {
        cleanup: function (t) {
          t && (this.div = null, this.label = null, this.labelText = null, this.cssClass = null, this.labelStyle = null)
        }, getLabel: function () {
          return this.label
        }, setLabel: function (t) {
          this.label = t, this.labelText = null, this.clearCachedDimensions(), this.update(), this.component.repaint()
        }, getDimensions: function () {
          return this.update(), l.prototype.getDimensions.apply(this, arguments)
        }, update: function () {
          if ('function' == typeof this.label) {
            var t = this.label(this)
            this.getElement().innerHTML = t.replace(/\r\n/g, '<br/>')
          } else {
            null == this.labelText && (this.labelText = this.label, this.getElement().innerHTML = this.labelText.replace(/\r\n/g, '<br/>'))
          }
        }, updateFrom: function (t) {
          null != t.label && this.setLabel(t.label)
        }
      })
    }.call('undefined' != typeof window ? window : this), function () {
      var t = this, e = t.jsPlumbUtil, n = t.jsPlumbInstance, i = 'stop', o = 'revert', s = '_jsPlumbGroup', r = 'show',
        a = 'hide', l = function (t) {
          var n = {}, i = {}, o = {}, l = this

          function u (e, n) {
            for (var i = e.getMembers(), o = 0; o < i.length; o++) t[n ? r : a](i[o], !0)
          }

          t.bind('connection', function (t) {
            null != t.source[s] && null != t.target[s] && t.source[s] === t.target[s] ? (i[t.connection.id] = t.source[s], o[t.connection.id] = t.source[s]) : (null != t.source[s] && (e.suggest(t.source[s].connections.source, t.connection), i[t.connection.id] = t.source[s]), null != t.target[s] && (e.suggest(t.target[s].connections.target, t.connection), o[t.connection.id] = t.target[s]))
          }), t.bind('internal.connectionDetached', function (t) {
            !function (t) {
              delete t.proxies
              var n, s = i[t.id]
              null != s && (n = function (e) {
                return e.id === t.id
              }, e.removeWithFunction(s.connections.source, n), e.removeWithFunction(s.connections.target, n), delete i[t.id]), null != (s = o[t.id]) && (n = function (e) {
                return e.id === t.id
              }, e.removeWithFunction(s.connections.source, n), e.removeWithFunction(s.connections.target, n), delete o[t.id])
            }(t.connection)
          }), t.bind('connectionMoved', function (t) {
            var e = (0 === t.index ? i : o)[t.connection.id]
            if (e) {
              var n = e.connections[0 === t.index ? 'source' : 'target'], s = n.indexOf(t.connection);
              -1 !== s && n.splice(s, 1)
            }
          }), this.addGroup = function (e) {
            t.addClass(e.getEl(), 'jtk-group-expanded'), n[e.id] = e, e.manager = this, d(e), t.fire('group:add', {group: e})
          }, this.addToGroup = function (e, n, i) {
            if (e = this.getGroup(e)) {
              var o = e.getEl()
              if (n._isJsPlumbGroup) return
              var s = n._jsPlumbGroup
              if (s !== e) {
                var r = t.getOffset(n, !0), a = e.collapsed ? t.getOffset(o, !0) : t.getOffset(e.getDragArea(), !0)
                null != s && (s.remove(n, !1, i, !1, e), l.updateConnectionsForGroup(s)), e.add(n, i)
                var u = function (t, n) {
                  var i = 0 === n ? 1 : 0
                  t.each(function (t) {
                    t.setVisible(!1), t.endpoints[i].element._jsPlumbGroup === e ? (t.endpoints[i].setVisible(!1), h(t, i, e)) : (t.endpoints[n].setVisible(!1), c(t, n, e))
                  })
                }
                e.collapsed && (u(t.select({source: n}), 0), u(t.select({target: n}), 1))
                var d = t.getId(n)
                t.dragManager.setParent(n, d, o, t.getId(o), r)
                var p = {left: r.left - a.left, top: r.top - a.top}
                if (t.setPosition(n, p), t.dragManager.revalidateParent(n, d, r), l.updateConnectionsForGroup(e), t.revalidate(d), !i) {
                  var f = {group: e, el: n, pos: p}
                  s && (f.sourceGroup = s), t.fire('group:addMember', f)
                }
              }
            }
          }, this.removeFromGroup = function (t, e, n) {
            (t = this.getGroup(t)) && t.remove(e, null, n)
          }, this.getGroup = function (t) {
            var i = t
            if (e.isString(t) && null == (i = n[t])) throw new TypeError('No such group [' + t + ']')
            return i
          }, this.getGroups = function () {
            var t = []
            for (var e in n) t.push(n[e])
            return t
          }, this.removeGroup = function (e, i, o, s) {
            e = this.getGroup(e), this.expandGroup(e, !0)
            var r = e[i ? 'removeAll' : 'orphanAll'](o, s)
            return t.remove(e.getEl()), delete n[e.id], delete t._groups[e.id], t.fire('group:remove', {group: e}), r
          }, this.removeAllGroups = function (t, e, i) {
            for (var o in n) this.removeGroup(n[o], t, e, i)
          }
          var c = function (e, n, i) {
            var o = e.endpoints[0 === n ? 1 : 0].element
            if (!o[s] || o[s].shouldProxy() || !o[s].collapsed) {
              var r = i.getEl(), a = t.getId(r)
              t.proxyConnection(e, n, r, a, function (t, e) {
                return i.getEndpoint(t, e)
              }, function (t, e) {
                return i.getAnchor(t, e)
              })
            }
          }
          this.collapseGroup = function (e) {
            if (null != (e = this.getGroup(e)) && !e.collapsed) {
              var n = e.getEl()
              if (u(e, !1), e.shouldProxy()) {
                var i = function (t, n) {
                  for (var i = 0; i < t.length; i++) {
                    var o = t[i]
                    c(o, n, e)
                  }
                }
                i(e.connections.source, 0), i(e.connections.target, 1)
              }
              e.collapsed = !0, t.removeClass(n, 'jtk-group-expanded'), t.addClass(n, 'jtk-group-collapsed'), t.revalidate(n), t.fire('group:collapse', {group: e})
            }
          }
          var h = function (e, n, i) {
            t.unproxyConnection(e, n, t.getId(i.getEl()))
          }

          function d (e) {
            var n = e.getMembers(), s = t.getConnections({source: n, scope: '*'}, !0),
              r = t.getConnections({target: n, scope: '*'}, !0), a = {}
            e.connections.source.length = 0, e.connections.target.length = 0
            var l = function (t) {
              for (var n = 0; n < t.length; n++) a[t[n].id] || (a[t[n].id] = !0, t[n].source._jsPlumbGroup === e ? (t[n].target._jsPlumbGroup !== e && e.connections.source.push(t[n]), i[t[n].id] = e) : t[n].target._jsPlumbGroup === e && (e.connections.target.push(t[n]), o[t[n].id] = e))
            }
            l(s), l(r)
          }

          this.expandGroup = function (e, n) {
            if (null != (e = this.getGroup(e)) && e.collapsed) {
              var i = e.getEl()
              if (u(e, !0), e.shouldProxy()) {
                var o = function (t, n) {
                  for (var i = 0; i < t.length; i++) {
                    var o = t[i]
                    h(o, n, e)
                  }
                }
                o(e.connections.source, 0), o(e.connections.target, 1)
              }
              e.collapsed = !1, t.addClass(i, 'jtk-group-expanded'), t.removeClass(i, 'jtk-group-collapsed'), t.revalidate(i), this.repaintGroup(e), n || t.fire('group:expand', {group: e})
            }
          }, this.repaintGroup = function (e) {
            for (var n = (e = this.getGroup(e)).getMembers(), i = 0; i < n.length; i++) t.revalidate(n[i])
          }, this.updateConnectionsForGroup = d, this.refreshAllGroups = function () {
            for (var e in n) d(n[e]), t.dragManager.updateOffsets(t.getId(n[e].getEl()))
          }
        }
      n.prototype.addGroup = function (n) {
        var r = this
        if (r._groups = r._groups || {}, null != r._groups[n.id]) throw new TypeError('cannot create Group [' + n.id + ']; a Group with that ID exists')
        if (null != n.el[s]) throw new TypeError('cannot create Group [' + n.id + ']; the given element is already a Group')
        var a = new function (n, r) {
          var a = this, l = r.el
          this.getEl = function () {
            return l
          }, this.id = r.id || e.uuid(), l._isJsPlumbGroup = !0
          var u = this.getDragArea = function () {
              var t = n.getSelector(l, '[jtk-group-content]')
              return t && t.length > 0 ? t[0] : l
            }, c = !0 === r.ghost, h = c || !0 === r.constrain, d = !1 !== r.revert, p = !0 === r.orphan,
            f = !0 === r.prune, g = !0 === r.dropOverride, m = !1 !== r.proxied, v = []
          if (this.connections = {source: [], target: [], internal: []}, this.getAnchor = function (t, e) {
            return r.anchor || 'Continuous'
          }, this.getEndpoint = function (t, e) {
            return r.endpoint || ['Dot', {radius: 10}]
          }, this.collapsed = !1, !1 !== r.draggable) {
            var b = {
              stop: function (t) {
                n.fire('groupDragStop', jsPlumb.extend(t, {group: a}))
              }, scope: '_jsPlumbGroupDrag'
            }
            r.dragOptions && t.jsPlumb.extend(b, r.dragOptions), n.draggable(r.el, b)
          }
          !1 !== r.droppable && n.droppable(r.el, {
            drop: function (t) {
              var e = t.drag.el
              if (!e._isJsPlumbGroup) {
                var i = e._jsPlumbGroup
                if (i !== a) {
                  if (null != i && i.overrideDrop(e, a)) return
                  n.getGroupManager().addToGroup(a, e, !1)
                }
              }
            }
          })
          var y = function (t, e) {
            for (var n = null == t.nodeType ? t : [t], i = 0; i < n.length; i++) e(n[i])
          }

          function P (t, e) {
            var i = function (t) {
              return t.offsetParent
            }(t), o = n.getSize(i), s = n.getSize(t), r = e[0], a = r + s[0], l = e[1], u = l + s[1]
            return a > 0 && r < o[0] && u > 0 && l < o[1]
          }

          function x (t) {
            var e = n.getId(t), i = n.getOffset(t)
            return t.parentNode.removeChild(t), n.getContainer().appendChild(t), n.setPosition(t, i), j(t), n.dragManager.clearParent(t, e), [e, i]
          }

          function _ (t) {
            var e = []

            function i (t, e, i) {
              var o = null
              if (!P(t, [e, i])) {
                var s = t._jsPlumbGroup
                f ? n.remove(t) : o = x(t), s.remove(t)
              }
              return o
            }

            for (var o = 0; o < t.selection.length; o++) e.push(i(t.selection[o][0], t.selection[o][1].left, t.selection[o][1].top))
            return 1 === e.length ? e[0] : e
          }

          function C (t) {
            var e = n.getId(t)
            n.revalidate(t), n.dragManager.revalidateParent(t, e)
          }

          function j (t) {
            t._katavorioDrag && ((f || p) && t._katavorioDrag.off(i, _), f || p || !d || (t._katavorioDrag.off(o, C), t._katavorioDrag.setRevert(null)))
          }

          function E (t) {
            t._katavorioDrag && ((f || p) && t._katavorioDrag.on(i, _), h && t._katavorioDrag.setConstrain(!0), c && t._katavorioDrag.setUseGhostProxy(!0), f || p || !d || (t._katavorioDrag.on(o, C), t._katavorioDrag.setRevert(function (t, e) {
              return !P(t, e)
            })))
          }

          this.overrideDrop = function (t, e) {
            return g && (d || f || p)
          }, this.add = function (t, e) {
            var i = u()
            y(t, function (t) {
              if (null != t._jsPlumbGroup) {
                if (t._jsPlumbGroup === a) return
                t._jsPlumbGroup.remove(t, !0, e, !1)
              }
              t._jsPlumbGroup = a, v.push(t), n.isAlreadyDraggable(t) && E(t), t.parentNode !== i && i.appendChild(t)
            }), n.getGroupManager().updateConnectionsForGroup(a)
          }, this.remove = function (t, i, o, s, r) {
            y(t, function (t) {
              if (t._jsPlumbGroup === a) {
                if (delete t._jsPlumbGroup, e.removeWithFunction(v, function (e) {
                  return e === t
                }), i) {
                  try {
                    a.getDragArea().removeChild(t)
                  } catch (t) {
                    jsPlumbUtil.log('Could not remove element from Group ' + t)
                  }
                }
                if (j(t), !o) {
                  var s = {group: a, el: t}
                  r && (s.targetGroup = r), n.fire('group:removeMember', s)
                }
              }
            }), s || n.getGroupManager().updateConnectionsForGroup(a)
          }, this.removeAll = function (t, e) {
            for (var i = 0, o = v.length; i < o; i++) {
              var s = v[0]
              a.remove(s, t, e, !0), n.remove(s, !0)
            }
            v.length = 0, n.getGroupManager().updateConnectionsForGroup(a)
          }, this.orphanAll = function () {
            for (var t = {}, e = 0; e < v.length; e++) {
              var n = x(v[e])
              t[n[0]] = n[1]
            }
            return v.length = 0, t
          }, this.getMembers = function () {
            return v
          }, l[s] = this, n.bind('elementDraggable', function (t) {
            t.el._jsPlumbGroup === this && E(t.el)
          }.bind(this)), this.shouldProxy = function () {
            return m
          }, n.getGroupManager().addGroup(this)
        }(r, n)
        return r._groups[a.id] = a, n.collapsed && this.collapseGroup(a), a
      }, n.prototype.addToGroup = function (t, e, n) {
        var i = function (e) {
          var i = this.getId(e)
          this.manage(i, e), this.getGroupManager().addToGroup(t, e, n)
        }.bind(this)
        if (Array.isArray(e)) for (var o = 0; o < e.length; o++) i(e[o]) else i(e)
      }, n.prototype.removeFromGroup = function (t, e, n) {
        this.getGroupManager().removeFromGroup(t, e, n)
      }, n.prototype.removeGroup = function (t, e, n, i) {
        return this.getGroupManager().removeGroup(t, e, n, i)
      }, n.prototype.removeAllGroups = function (t, e, n) {
        this.getGroupManager().removeAllGroups(t, e, n)
      }, n.prototype.getGroup = function (t) {
        return this.getGroupManager().getGroup(t)
      }, n.prototype.getGroups = function () {
        return this.getGroupManager().getGroups()
      }, n.prototype.expandGroup = function (t) {
        this.getGroupManager().expandGroup(t)
      }, n.prototype.collapseGroup = function (t) {
        this.getGroupManager().collapseGroup(t)
      }, n.prototype.repaintGroup = function (t) {
        this.getGroupManager().repaintGroup(t)
      }, n.prototype.toggleGroup = function (t) {
        null != (t = this.getGroupManager().getGroup(t)) && this.getGroupManager()[t.collapsed ? 'expandGroup' : 'collapseGroup'](t)
      }, n.prototype.getGroupManager = function () {
        var t = this._groupManager
        return null == t && (t = this._groupManager = new l(this)), t
      }, n.prototype.removeGroupManager = function () {
        delete this._groupManager
      }, n.prototype.getGroupFor = function (t) {
        if (t = this.getElement(t)) return t[s]
      }
    }.call('undefined' != typeof window ? window : this), function () {
      var t = this.jsPlumb, e = this.jsPlumbUtil
      t.Connectors.Flowchart = function (e) {
        this.type = 'Flowchart', (e = e || {}).stub = null == e.stub ? 30 : e.stub
        var n, i = t.Connectors.AbstractConnector.apply(this, arguments), o = null == e.midpoint ? .5 : e.midpoint,
          s = !0 === e.alwaysRespectStubs, r = null, a = null, l = null != e.cornerRadius ? e.cornerRadius : 0,
          u = (e.loopbackRadius, function (t) {
            return t < 0 ? -1 : 0 === t ? 0 : 1
          }), c = function (t) {
            return [u(t[2] - t[0]), u(t[3] - t[1])]
          }, h = function (t, e, n, i) {
            if (r !== e || a !== n) {
              var o = null == r ? i.sx : r, s = null == a ? i.sy : a, l = o === e ? 'v' : 'h'
              r = e, a = n, t.push([o, s, e, n, l])
            }
          }, d = function (t) {
            return Math.sqrt(Math.pow(t[0] - t[2], 2) + Math.pow(t[1] - t[3], 2))
          }, p = function (t) {
            var e = []
            return e.push.apply(e, t), e
          }
        this._compute = function (t, e) {
          n = [], r = null, a = null
          var u = function () {
              return [t.startStubX, t.startStubY, t.endStubX, t.endStubY]
            }, f = {
              perpendicular: u, orthogonal: u, opposite: function (e) {
                var n = t, i = 'x' === e ? 0 : 1
                return !s && {
                  x: function () {
                    return 1 === n.so[i] && (n.startStubX > n.endStubX && n.tx > n.startStubX || n.sx > n.endStubX && n.tx > n.sx) || -1 === n.so[i] && (n.startStubX < n.endStubX && n.tx < n.startStubX || n.sx < n.endStubX && n.tx < n.sx)
                  }, y: function () {
                    return 1 === n.so[i] && (n.startStubY > n.endStubY && n.ty > n.startStubY || n.sy > n.endStubY && n.ty > n.sy) || -1 === n.so[i] && (n.startStubY < n.endStubY && n.ty < n.startStubY || n.sy < n.endStubY && n.ty < n.sy)
                  }
                }[e]() ? {
                  x: [(t.sx + t.tx) / 2, t.startStubY, (t.sx + t.tx) / 2, t.endStubY],
                  y: [t.startStubX, (t.sy + t.ty) / 2, t.endStubX, (t.sy + t.ty) / 2]
                }[e] : [t.startStubX, t.startStubY, t.endStubX, t.endStubY]
              }
            }[t.anchorOrientation](t.sourceAxis), g = 'x' === t.sourceAxis ? 0 : 1, m = 'x' === t.sourceAxis ? 1 : 0,
            v = f[g], b = f[m], y = f[g + 2], P = f[m + 2]
          h(n, f[0], f[1], t)
          var x = t.startStubX + (t.endStubX - t.startStubX) * o, _ = t.startStubY + (t.endStubY - t.startStubY) * o,
            C = {x: [0, 1], y: [1, 0]}, j = {
              perpendicular: function (e) {
                var n = t, i = {
                    x: [[n.startStubX, n.endStubX], null, [n.endStubX, n.startStubX]],
                    y: [[n.startStubY, n.endStubY], null, [n.endStubY, n.startStubY]]
                  }, o = {x: [[x, n.startStubY], [x, n.endStubY]], y: [[n.startStubX, _], [n.endStubX, _]]},
                  s = {x: [[n.endStubX, n.startStubY]], y: [[n.startStubX, n.endStubY]]}, r = {
                    x: [[n.startStubX, n.endStubY], [n.endStubX, n.endStubY]],
                    y: [[n.endStubX, n.startStubY], [n.endStubX, n.endStubY]]
                  }, a = {
                    x: [[n.startStubX, _], [n.endStubX, _], [n.endStubX, n.endStubY]],
                    y: [[x, n.startStubY], [x, n.endStubY], [n.endStubX, n.endStubY]]
                  }, l = {x: [n.startStubY, n.endStubY], y: [n.startStubX, n.endStubX]}, u = C[e][0], c = C[e][1],
                  h = n.so[u] + 1, d = n.to[c] + 1,
                  p = -1 === n.to[c] && l[e][1] < l[e][0] || 1 === n.to[c] && l[e][1] > l[e][0], f = i[e][h][0],
                  g = i[e][h][1], m = {
                    x: [[[1, 2, 3, 4], null, [2, 1, 4, 3]], null, [[4, 3, 2, 1], null, [3, 4, 1, 2]]],
                    y: [[[3, 2, 1, 4], null, [2, 3, 4, 1]], null, [[4, 1, 2, 3], null, [1, 4, 3, 2]]]
                  }[e][h][d]
                return n.segment === m[3] || n.segment === m[2] && p ? o[e] : n.segment === m[2] && g < f ? s[e] : n.segment === m[2] && g >= f || n.segment === m[1] && !p ? a[e] : n.segment === m[0] || n.segment === m[1] && p ? r[e] : void 0
              }, orthogonal: function (e, n, i, o, s) {
                var r = t, a = {
                  x: -1 === r.so[0] ? Math.min(n, o) : Math.max(n, o),
                  y: -1 === r.so[1] ? Math.min(n, o) : Math.max(n, o)
                }[e]
                return {x: [[a, i], [a, s], [o, s]], y: [[i, a], [s, a], [s, o]]}[e]
              }, opposite: function (n, o, s, r) {
                var a = t, l = {x: 'y', y: 'x'}[n], u = {x: 'height', y: 'width'}[n],
                  c = a['is' + n.toUpperCase() + 'GreaterThanStubTimes2']
                if (e.sourceEndpoint.elementId === e.targetEndpoint.elementId) {
                  var h = s + (1 - e.sourceEndpoint.anchor[l]) * e.sourceInfo[u] + i.maxStub
                  return {x: [[o, h], [r, h]], y: [[h, o], [h, r]]}[n]
                }
                return !c || 1 === a.so[g] && o > r || -1 === a.so[g] && o < r ? {
                  x: [[o, _], [r, _]],
                  y: [[x, o], [x, r]]
                }[n] : 1 === a.so[g] && o < r || -1 === a.so[g] && o > r ? {
                  x: [[x, a.sy], [x, a.ty]],
                  y: [[a.sx, _], [a.tx, _]]
                }[n] : void 0
              }
            }[t.anchorOrientation](t.sourceAxis, v, b, y, P)
          if (j) for (var E = 0; E < j.length; E++) h(n, j[E][0], j[E][1], t)
          h(n, f[2], f[3], t), h(n, t.tx, t.ty, t), function (t, e, n) {
            for (var o, s, r, a = null, u = 0; u < e.length - 1; u++) {
              if (a = a || p(e[u]), o = p(e[u + 1]), s = c(a), r = c(o), l > 0 && a[4] !== o[4]) {
                var h = Math.min(d(a), d(o)), f = Math.min(l, h / 2)
                a[2] -= s[0] * f, a[3] -= s[1] * f, o[0] += r[0] * f, o[1] += r[1] * f
                var g = s[1] === r[0] && 1 === r[0] || s[1] === r[0] && 0 === r[0] && s[0] !== r[1] || s[1] === r[0] && -1 === r[0],
                  m = (o[1] > a[3] ? 1 : -1) == (o[0] > a[2] ? 1 : -1), v = m && g || !m && !g ? o[0] : a[2],
                  b = m && g || !m && !g ? a[3] : o[1]
                i.addSegment(t, 'Straight', {x1: a[0], y1: a[1], x2: a[2], y2: a[3]}), i.addSegment(t, 'Arc', {
                  r: f,
                  x1: a[2],
                  y1: a[3],
                  x2: o[0],
                  y2: o[1],
                  cx: v,
                  cy: b,
                  ac: g
                })
              } else {
                var y = a[2] === a[0] ? 0 : a[2] > a[0] ? n.lw / 2 : -n.lw / 2,
                  P = a[3] === a[1] ? 0 : a[3] > a[1] ? n.lw / 2 : -n.lw / 2
                i.addSegment(t, 'Straight', {x1: a[0] - y, y1: a[1] - P, x2: a[2] + y, y2: a[3] + P})
              }
              a = o
            }
            null != o && i.addSegment(t, 'Straight', {x1: o[0], y1: o[1], x2: o[2], y2: o[3]})
          }(this, n, t)
        }
      }, e.extend(t.Connectors.Flowchart, t.Connectors.AbstractConnector)
    }.call('undefined' != typeof window ? window : this), function () {
      var t = this.jsPlumb, e = this.jsPlumbUtil
      t.Connectors.AbstractBezierConnector = function (e) {
        var n, i = !1 !== (e = e || {}).showLoopback, o = (e.curviness, e.margin || 5),
          s = (e.proximityLimit, e.orientation && 'clockwise' === e.orientation), r = e.loopbackRadius || 25
        return this._compute = function (t, e) {
          var a = e.sourcePos, l = e.targetPos, u = Math.abs(a[0] - l[0]), c = Math.abs(a[1] - l[1])
          if (i && e.sourceEndpoint.elementId === e.targetEndpoint.elementId) {
            !0
            var h = e.sourcePos[0], d = e.sourcePos[1] - o, p = h, f = d - r, g = p - r, m = f - r
            u = 2 * r, c = 2 * r, t.points[0] = g, t.points[1] = m, t.points[2] = u, t.points[3] = c, n.addSegment(this, 'Arc', {
              loopback: !0,
              x1: h - g + 4,
              y1: d - m,
              startAngle: 0,
              endAngle: 2 * Math.PI,
              r: r,
              ac: !s,
              x2: h - g - 4,
              y2: d - m,
              cx: p - g,
              cy: f - m
            })
          } else {
            !1, this._computeBezier(t, e, a, l, u, c)
          }
        }, n = t.Connectors.AbstractConnector.apply(this, arguments)
      }, e.extend(t.Connectors.AbstractBezierConnector, t.Connectors.AbstractConnector)
      var n = function (e) {
        e = e || {}, this.type = 'Bezier'
        var n = t.Connectors.AbstractBezierConnector.apply(this, arguments), i = e.curviness || 150
        this.getCurviness = function () {
          return i
        }, this._findControlPoint = function (t, e, n, o, s, r, a) {
          var l = []
          return r[0] !== a[0] || r[1] === a[1] ? (0 === a[0] ? l.push(n[0] < e[0] ? t[0] + 10 : t[0] - 10) : l.push(t[0] + i * a[0]), 0 === a[1] ? l.push(n[1] < e[1] ? t[1] + 10 : t[1] - 10) : l.push(t[1] + i * r[1])) : (0 === r[0] ? l.push(e[0] < n[0] ? t[0] + 10 : t[0] - 10) : l.push(t[0] - i * r[0]), 0 === r[1] ? l.push(e[1] < n[1] ? t[1] + 10 : t[1] - 10) : l.push(t[1] + i * a[1])), l
        }, this._computeBezier = function (t, e, i, o, s, r) {
          var a, l, u = i[0] < o[0] ? s : 0, c = i[1] < o[1] ? r : 0, h = i[0] < o[0] ? 0 : s, d = i[1] < o[1] ? 0 : r
          a = this._findControlPoint([u, c], i, o, e.sourceEndpoint, e.targetEndpoint, t.so, t.to), l = this._findControlPoint([h, d], o, i, e.targetEndpoint, e.sourceEndpoint, t.to, t.so), n.addSegment(this, 'Bezier', {
            x1: u,
            y1: c,
            x2: h,
            y2: d,
            cp1x: a[0],
            cp1y: a[1],
            cp2x: l[0],
            cp2y: l[1]
          })
        }
      }
      t.Connectors.Bezier = n, e.extend(n, t.Connectors.AbstractBezierConnector)
    }.call('undefined' != typeof window ? window : this), function () {
      var t = this.jsPlumb, e = this.jsPlumbUtil, n = function (e) {
        e = e || {}, this.type = 'StateMachine'
        var n, i = t.Connectors.AbstractBezierConnector.apply(this, arguments), o = e.curviness || 10,
          s = e.margin || 5, r = e.proximityLimit || 80
        e.orientation && e.orientation
        this._computeBezier = function (t, e, a, l, u, c) {
          var h = e.sourcePos[0] < e.targetPos[0] ? 0 : u, d = e.sourcePos[1] < e.targetPos[1] ? 0 : c,
            p = e.sourcePos[0] < e.targetPos[0] ? u : 0, f = e.sourcePos[1] < e.targetPos[1] ? c : 0
          0 === e.sourcePos[2] && (h -= s), 1 === e.sourcePos[2] && (h += s), 0 === e.sourcePos[3] && (d -= s), 1 === e.sourcePos[3] && (d += s), 0 === e.targetPos[2] && (p -= s), 1 === e.targetPos[2] && (p += s), 0 === e.targetPos[3] && (f -= s), 1 === e.targetPos[3] && (f += s)
          var g, m, v, b, y, P, x, _, C = (h + p) / 2, j = (d + f) / 2,
            E = (P = d, _ = f, (y = h) <= (x = p) && _ <= P ? 1 : y <= x && P <= _ ? 2 : x <= y && _ >= P ? 3 : 4),
            S = Math.sqrt(Math.pow(p - h, 2) + Math.pow(f - d, 2))
          g = (n = function (t, e, n, i, o, s, r, a, l) {
            return a <= l ? [t, e] : 1 === n ? i[3] <= 0 && o[3] >= 1 ? [t + (i[2] < .5 ? -1 * s : s), e] : i[2] >= 1 && o[2] <= 0 ? [t, e + (i[3] < .5 ? -1 * r : r)] : [t + -1 * s, e + -1 * r] : 2 === n ? i[3] >= 1 && o[3] <= 0 ? [t + (i[2] < .5 ? -1 * s : s), e] : i[2] >= 1 && o[2] <= 0 ? [t, e + (i[3] < .5 ? -1 * r : r)] : [t + s, e + -1 * r] : 3 === n ? i[3] >= 1 && o[3] <= 0 ? [t + (i[2] < .5 ? -1 * s : s), e] : i[2] <= 0 && o[2] >= 1 ? [t, e + (i[3] < .5 ? -1 * r : r)] : [t + -1 * s, e + -1 * r] : 4 === n ? i[3] <= 0 && o[3] >= 1 ? [t + (i[2] < .5 ? -1 * s : s), e] : i[2] <= 0 && o[2] >= 1 ? [t, e + (i[3] < .5 ? -1 * r : r)] : [t + s, e + -1 * r] : void 0
          }(C, j, E, e.sourcePos, e.targetPos, o, o, S, r))[0], m = n[0], v = n[1], b = n[1], i.addSegment(this, 'Bezier', {
            x1: p,
            y1: f,
            x2: h,
            y2: d,
            cp1x: g,
            cp1y: v,
            cp2x: m,
            cp2y: b
          })
        }
      }
      t.Connectors.StateMachine = n, e.extend(n, t.Connectors.AbstractBezierConnector)
    }.call('undefined' != typeof window ? window : this), function () {
      var t = this.jsPlumb, e = this.jsPlumbUtil, n = function (e) {
        this.type = 'Straight'
        var n = t.Connectors.AbstractConnector.apply(this, arguments)
        this._compute = function (t, e) {
          n.addSegment(this, 'Straight', {
            x1: t.sx,
            y1: t.sy,
            x2: t.startStubX,
            y2: t.startStubY
          }), n.addSegment(this, 'Straight', {
            x1: t.startStubX,
            y1: t.startStubY,
            x2: t.endStubX,
            y2: t.endStubY
          }), n.addSegment(this, 'Straight', {x1: t.endStubX, y1: t.endStubY, x2: t.tx, y2: t.ty})
        }
      }
      t.Connectors.Straight = n, e.extend(n, t.Connectors.AbstractConnector)
    }.call('undefined' != typeof window ? window : this), function () {
      var t = this.jsPlumb, e = this.jsPlumbUtil, n = {
        'stroke-linejoin': 'stroke-linejoin',
        'stroke-dashoffset': 'stroke-dashoffset',
        'stroke-linecap': 'stroke-linecap'
      }, i = 'http://www.w3.org/2000/svg', o = function (t, e) {
        for (var n in e) t.setAttribute(n, '' + e[n])
      }, s = function (e, n) {
        return (n = n || {}).version = '1.1', n.xmlns = i, t.createElementNS(i, e, null, null, n)
      }, r = function (t) {
        return 'position:absolute;left:' + t[0] + 'px;top:' + t[1] + 'px'
      }, a = function (t) {
        for (var e = t.querySelectorAll(' defs,linearGradient,radialGradient'), n = 0; n < e.length; n++) e[n].parentNode.removeChild(e[n])
      }, l = function (t, e, i, o, r) {
        if (e.setAttribute('fill', i.fill ? i.fill : 'none'), e.setAttribute('stroke', i.stroke ? i.stroke : 'none'), i.gradient ? function (t, e, n, i, o) {
          var r, l = 'jsplumb_gradient_' + o._jsPlumb.instance.idstamp()
          a(t), r = n.gradient.offset ? s('radialGradient', {id: l}) : s('linearGradient', {
            id: l,
            gradientUnits: 'userSpaceOnUse'
          })
          var u = s('defs')
          t.appendChild(u), u.appendChild(r)
          for (var c = 0; c < n.gradient.stops.length; c++) {
            var h = 1 === o.segment || 2 === o.segment ? c : n.gradient.stops.length - 1 - c,
              d = n.gradient.stops[h][1],
              p = s('stop', {offset: Math.floor(100 * n.gradient.stops[c][0]) + '%', 'stop-color': d})
            r.appendChild(p)
          }
          var f = n.stroke ? 'stroke' : 'fill'
          e.setAttribute(f, 'url(#' + l + ')')
        }(t, e, i, 0, r) : (a(t), e.setAttribute('style', '')), i.strokeWidth && e.setAttribute('stroke-width', i.strokeWidth), i.dashstyle && i.strokeWidth && !i['stroke-dasharray']) {
          var l = -1 === i.dashstyle.indexOf(',') ? ' ' : ',', u = ''
          i.dashstyle.split(l).forEach(function (t) {
            u += Math.floor(t * i.strokeWidth) + l
          }), e.setAttribute('stroke-dasharray', u)
        } else {
          i['stroke-dasharray'] && e.setAttribute('stroke-dasharray', i['stroke-dasharray'])
        }
        for (var c in n) i[c] && e.setAttribute(n[c], i[c])
      }, u = function (t, e, n) {
        t.childNodes.length > n ? t.insertBefore(e, t.childNodes[n]) : t.appendChild(e)
      }
      e.svg = {node: s, attr: o, pos: r}
      var c = function (n) {
        var i = n.pointerEventsSpec || 'all', a = {}
        t.jsPlumbUIComponent.apply(this, n.originalArgs), this.canvas = null, this.path = null, this.svg = null, this.bgCanvas = null
        var l = n.cssClass + ' ' + (n.originalArgs[0].cssClass || ''),
          u = {style: '', width: 0, height: 0, 'pointer-events': i, position: 'absolute'}
        this.svg = s('svg', u), n.useDivWrapper ? (this.canvas = t.createElement('div', {position: 'absolute'}), e.sizeElement(this.canvas, 0, 0, 1, 1), this.canvas.className = l) : (o(this.svg, {class: l}), this.canvas = this.svg), n._jsPlumb.appendElement(this.canvas, n.originalArgs[0].parent), n.useDivWrapper && this.canvas.appendChild(this.svg)
        var c = [this.canvas]
        return this.getDisplayElements = function () {
          return c
        }, this.appendDisplayElement = function (t) {
          c.push(t)
        }, this.paint = function (t, i, s) {
          if (null != t) {
            var l, u = [this.x, this.y], c = [this.w, this.h]
            null != s && (s.xmin < 0 && (u[0] += s.xmin), s.ymin < 0 && (u[1] += s.ymin), c[0] = s.xmax + (s.xmin < 0 ? -s.xmin : 0), c[1] = s.ymax + (s.ymin < 0 ? -s.ymin : 0)), n.useDivWrapper ? (e.sizeElement(this.canvas, u[0], u[1], c[0], c[1]), u[0] = 0, u[1] = 0, l = r([0, 0])) : l = r([u[0], u[1]]), a.paint.apply(this, arguments), o(this.svg, {
              style: l,
              width: c[0] || 0,
              height: c[1] || 0
            })
          }
        }, {renderer: a}
      }
      e.extend(c, t.jsPlumbUIComponent, {
        cleanup: function (t) {
          t || null == this.typeId ? (this.canvas && (this.canvas._jsPlumb = null), this.svg && (this.svg._jsPlumb = null), this.bgCanvas && (this.bgCanvas._jsPlumb = null), this.canvas && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this.bgCanvas && this.bgCanvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this.svg = null, this.canvas = null, this.path = null, this.group = null) : (this.canvas && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this.bgCanvas && this.bgCanvas.parentNode && this.bgCanvas.parentNode.removeChild(this.bgCanvas))
        }, reattach: function (t) {
          var e = t.getContainer()
          this.canvas && null == this.canvas.parentNode && e.appendChild(this.canvas), this.bgCanvas && null == this.bgCanvas.parentNode && e.appendChild(this.bgCanvas)
        }, setVisible: function (t) {
          this.canvas && (this.canvas.style.display = t ? 'block' : 'none')
        }
      }), t.ConnectorRenderers.svg = function (e) {
        var n = this
        c.apply(this, [{
          cssClass: e._jsPlumb.connectorClass,
          originalArgs: arguments,
          pointerEventsSpec: 'none',
          _jsPlumb: e._jsPlumb
        }]).renderer.paint = function (i, r, a) {
          var c = n.getSegments(), h = [0, 0]
          if (a.xmin < 0 && (h[0] = -a.xmin), a.ymin < 0 && (h[1] = -a.ymin), c.length > 0) {
            var d = {
              d: n.getPathData(),
              transform: 'translate(' + h[0] + ',' + h[1] + ')',
              'pointer-events': e['pointer-events'] || 'visibleStroke'
            }, p = null
            n.x, n.y, n.w, n.h
            if (i.outlineStroke) {
              var f = i.outlineWidth || 1, g = i.strokeWidth + 2 * f
              delete (p = t.extend({}, i)).gradient, p.stroke = i.outlineStroke, p.strokeWidth = g, null == n.bgPath ? (n.bgPath = s('path', d), t.addClass(n.bgPath, t.connectorOutlineClass), u(n.svg, n.bgPath, 0)) : o(n.bgPath, d), l(n.svg, n.bgPath, p, 0, n)
            }
            null == n.path ? (n.path = s('path', d), u(n.svg, n.path, i.outlineStroke ? 1 : 0)) : o(n.path, d), l(n.svg, n.path, i, 0, n)
          }
        }
      }, e.extend(t.ConnectorRenderers.svg, c)
      var h = t.SvgEndpoint = function (e) {
        c.apply(this, [{
          cssClass: e._jsPlumb.endpointClass,
          originalArgs: arguments,
          pointerEventsSpec: 'all',
          useDivWrapper: !0,
          _jsPlumb: e._jsPlumb
        }]).renderer.paint = function (e) {
          var n = t.extend({}, e)
          n.outlineStroke && (n.stroke = n.outlineStroke), null == this.node ? (this.node = this.makeNode(n), this.svg.appendChild(this.node)) : null != this.updateNode && this.updateNode(this.node), l(this.svg, this.node, n, (this.x, this.y, this.w, this.h), this), r(this.node, (this.x, this.y))
        }.bind(this)
      }
      e.extend(h, c), t.Endpoints.svg.Dot = function () {
        t.Endpoints.Dot.apply(this, arguments), h.apply(this, arguments), this.makeNode = function (t) {
          return s('circle', {cx: this.w / 2, cy: this.h / 2, r: this.radius})
        }, this.updateNode = function (t) {
          o(t, {cx: this.w / 2, cy: this.h / 2, r: this.radius})
        }
      }, e.extend(t.Endpoints.svg.Dot, [t.Endpoints.Dot, h]), t.Endpoints.svg.Rectangle = function () {
        t.Endpoints.Rectangle.apply(this, arguments), h.apply(this, arguments), this.makeNode = function (t) {
          return s('rect', {width: this.w, height: this.h})
        }, this.updateNode = function (t) {
          o(t, {width: this.w, height: this.h})
        }
      }, e.extend(t.Endpoints.svg.Rectangle, [t.Endpoints.Rectangle, h]), t.Endpoints.svg.Image = t.Endpoints.Image, t.Endpoints.svg.Blank = t.Endpoints.Blank, t.Overlays.svg.Label = t.Overlays.Label, t.Overlays.svg.Custom = t.Overlays.Custom
      var d = function (e, n) {
        e.apply(this, n), t.jsPlumbUIComponent.apply(this, n), this.isAppendedAtTopLevel = !1
        this.path = null, this.paint = function (t, e) {
          if (t.component.svg && e) {
            null == this.path && (this.path = s('path', {'pointer-events': 'all'}), t.component.svg.appendChild(this.path), this.elementCreated && this.elementCreated(this.path, t.component), this.canvas = t.component.svg)
            var r = n && 1 === n.length && n[0].cssClass || '', a = [0, 0]
            e.xmin < 0 && (a[0] = -e.xmin), e.ymin < 0 && (a[1] = -e.ymin), o(this.path, {
              d: i(t.d),
              class: r,
              stroke: t.stroke ? t.stroke : null,
              fill: t.fill ? t.fill : null,
              transform: 'translate(' + a[0] + ',' + a[1] + ')'
            })
          }
        }
        var i = function (t) {
          return isNaN(t.cxy.x) || isNaN(t.cxy.y) ? '' : 'M' + t.hxy.x + ',' + t.hxy.y + ' L' + t.tail[0].x + ',' + t.tail[0].y + ' L' + t.cxy.x + ',' + t.cxy.y + ' L' + t.tail[1].x + ',' + t.tail[1].y + ' L' + t.hxy.x + ',' + t.hxy.y
        }
        this.transfer = function (t) {
          t.canvas && this.path && this.path.parentNode && (this.path.parentNode.removeChild(this.path), t.canvas.appendChild(this.path))
        }
      }
      e.extend(d, [t.jsPlumbUIComponent, t.Overlays.AbstractOverlay], {
        cleanup: function (t) {
          null != this.path && (t ? this._jsPlumb.instance.removeElement(this.path) : this.path.parentNode && this.path.parentNode.removeChild(this.path))
        }, reattach: function (t, e) {
          this.path && e.canvas && e.canvas.appendChild(this.path)
        }, setVisible: function (t) {
          null != this.path && (this.path.style.display = t ? 'block' : 'none')
        }
      }), t.Overlays.svg.Arrow = function () {
        d.apply(this, [t.Overlays.Arrow, arguments])
      }, e.extend(t.Overlays.svg.Arrow, [t.Overlays.Arrow, d]), t.Overlays.svg.PlainArrow = function () {
        d.apply(this, [t.Overlays.PlainArrow, arguments])
      }, e.extend(t.Overlays.svg.PlainArrow, [t.Overlays.PlainArrow, d]), t.Overlays.svg.Diamond = function () {
        d.apply(this, [t.Overlays.Diamond, arguments])
      }, e.extend(t.Overlays.svg.Diamond, [t.Overlays.Diamond, d]), t.Overlays.svg.GuideLines = function () {
        var e, n, i = null, r = this
        t.Overlays.GuideLines.apply(this, arguments), this.paint = function (t, l) {
          null == i && (i = s('path'), t.connector.svg.appendChild(i), r.attachListeners(i, t.connector), r.attachListeners(i, r), e = s('path'), t.connector.svg.appendChild(e), r.attachListeners(e, t.connector), r.attachListeners(e, r), n = s('path'), t.connector.svg.appendChild(n), r.attachListeners(n, t.connector), r.attachListeners(n, r))
          var u = [0, 0]
          l.xmin < 0 && (u[0] = -l.xmin), l.ymin < 0 && (u[1] = -l.ymin), o(i, {
            d: a(t.head, t.tail),
            stroke: 'red',
            fill: null,
            transform: 'translate(' + u[0] + ',' + u[1] + ')'
          }), o(e, {
            d: a(t.tailLine[0], t.tailLine[1]),
            stroke: 'blue',
            fill: null,
            transform: 'translate(' + u[0] + ',' + u[1] + ')'
          }), o(n, {
            d: a(t.headLine[0], t.headLine[1]),
            stroke: 'green',
            fill: null,
            transform: 'translate(' + u[0] + ',' + u[1] + ')'
          })
        }
        var a = function (t, e) {
          return 'M ' + t.x + ',' + t.y + ' L' + e.x + ',' + e.y
        }
      }, e.extend(t.Overlays.svg.GuideLines, t.Overlays.GuideLines)
    }.call('undefined' != typeof window ? window : this), function () {
      var t = this, e = t.jsPlumb, n = t.jsPlumbUtil, i = t.Katavorio, o = t.Biltong, s = function (t, n) {
        var s = '_katavorio_' + (n = n || 'main'), r = t[s], a = t.getEventManager()
        return r || ((r = new i({
          bind: a.on,
          unbind: a.off,
          getSize: e.getSize,
          getConstrainingRectangle: function (t) {
            return [t.parentNode.scrollWidth, t.parentNode.scrollHeight]
          },
          getPosition: function (e, n) {
            var i = t.getOffset(e, n, e._katavorioDrag ? e.offsetParent : null)
            return [i.left, i.top]
          },
          setPosition: function (t, e) {
            t.style.left = e[0] + 'px', t.style.top = e[1] + 'px'
          },
          addClass: e.addClass,
          removeClass: e.removeClass,
          intersects: o.intersects,
          indexOf: function (t, e) {
            return t.indexOf(e)
          },
          scope: t.getDefaultScope(),
          css: {
            noSelect: t.dragSelectClass,
            droppable: 'jtk-droppable',
            draggable: 'jtk-draggable',
            drag: 'jtk-drag',
            selected: 'jtk-drag-selected',
            active: 'jtk-drag-active',
            hover: 'jtk-drag-hover',
            ghostProxy: 'jtk-ghost-proxy'
          }
        })).setZoom(t.getZoom()), t[s] = r, t.bind('zoom', r.setZoom)), r
      }, r = function (t, e) {
        if (null == e) return [0, 0]
        var n = h(e), i = c(n, 0)
        return [i[t + 'X'], i[t + 'Y']]
      }, a = r.bind(this, 'page'), l = r.bind(this, 'screen'), u = r.bind(this, 'client'), c = function (t, e) {
        return t.item ? t.item(e) : t[e]
      }, h = function (t) {
        return t.touches && t.touches.length > 0 ? t.touches : t.changedTouches && t.changedTouches.length > 0 ? t.changedTouches : t.targetTouches && t.targetTouches.length > 0 ? t.targetTouches : [t]
      }, d = function (t, e, i) {
        e = n.fastTrim(e), void 0 !== t.className.baseVal ? t.className.baseVal = e : t.className = e
        try {
          var o = t.classList
          if (null != o) {
            for (; o.length > 0;) o.remove(o.item(0))
            for (var s = 0; s < i.length; s++) i[s] && o.add(i[s])
          }
        } catch (t) {
          n.log('JSPLUMB: cannot set class list', t)
        }
      }, p = function (t) {
        return void 0 === t.className.baseVal ? t.className : t.className.baseVal
      }, f = function (t, e, i) {
        e = null == e ? [] : n.isArray(e) ? e : e.split(/\s+/), i = null == i ? [] : n.isArray(i) ? i : i.split(/\s+/)
        var o = p(t).split(/\s+/), s = function (t, e) {
          for (var n = 0; n < e.length; n++) {
            if (t) {
              -1 === o.indexOf(e[n]) && o.push(e[n])
            } else {
              var i = o.indexOf(e[n]);
              -1 !== i && o.splice(i, 1)
            }
          }
        }
        s(!0, e), s(!1, i), d(t, o.join(' '), o)
      }
      t.jsPlumb.extend(t.jsPlumbInstance.prototype, {
        headless: !1,
        pageLocation: a,
        screenLocation: l,
        clientLocation: u,
        getDragManager: function () {
          return null == this.dragManager && (this.dragManager = new function (t) {
            var e = {}, n = [], i = {}, o = {}, s = {}
            this.register = function (r) {
              var a, l = t.getId(r)
              e[l] || (e[l] = r, n.push(r), i[l] = {}), function e (n) {
                if (n) {
                  for (var u = 0; u < n.childNodes.length; u++) {
                    if (3 !== n.childNodes[u].nodeType && 8 !== n.childNodes[u].nodeType) {
                      var c = jsPlumb.getElement(n.childNodes[u]), h = t.getId(n.childNodes[u], null, !0)
                      if (h && o[h] && o[h] > 0) {
                        a || (a = t.getOffset(r))
                        var d = t.getOffset(c)
                        i[l][h] = {id: h, offset: {left: d.left - a.left, top: d.top - a.top}}, s[h] = l
                      }
                      e(n.childNodes[u])
                    }
                  }
                }
              }(r)
            }, this.updateOffsets = function (e, n) {
              if (null != e) {
                n = n || {}
                var o, r = jsPlumb.getElement(e), a = t.getId(r), l = i[a]
                if (l) {
                  for (var u in l) {
                    if (l.hasOwnProperty(u)) {
                      var c = jsPlumb.getElement(u), h = n[u] || t.getOffset(c)
                      if (null == c.offsetParent && null != i[a][u]) continue
                      o || (o = t.getOffset(r)), i[a][u] = {
                        id: u,
                        offset: {left: h.left - o.left, top: h.top - o.top}
                      }, s[u] = a
                    }
                  }
                }
              }
            }, this.endpointAdded = function (n, r) {
              r = r || t.getId(n)
              var a = document.body, l = n.parentNode
              for (o[r] = o[r] ? o[r] + 1 : 1; null != l && l !== a;) {
                var u = t.getId(l, null, !0)
                if (u && e[u]) {
                  var c = t.getOffset(l)
                  if (null == i[u][r]) {
                    var h = t.getOffset(n)
                    i[u][r] = {id: r, offset: {left: h.left - c.left, top: h.top - c.top}}, s[r] = u
                  }
                  break
                }
                l = l.parentNode
              }
            }, this.endpointDeleted = function (t) {
              if (o[t.elementId] && (o[t.elementId]--, o[t.elementId] <= 0)) for (var e in i) i.hasOwnProperty(e) && i[e] && (delete i[e][t.elementId], delete s[t.elementId])
            }, this.changeId = function (t, e) {
              i[e] = i[t], i[t] = {}, s[e] = s[t], s[t] = null
            }, this.getElementsForDraggable = function (t) {
              return i[t]
            }, this.elementRemoved = function (t) {
              var e = s[t]
              e && (delete i[e][t], delete s[t])
            }, this.reset = function () {
              e = {}, n = [], i = {}, o = {}
            }, this.dragEnded = function (e) {
              if (null != e.offsetParent) {
                var n = t.getId(e), i = s[n]
                i && this.updateOffsets(i)
              }
            }, this.setParent = function (e, n, o, r, a) {
              var l = s[n]
              i[r] || (i[r] = {})
              var u = t.getOffset(o), c = a || t.getOffset(e)
              l && i[l] && delete i[l][n], i[r][n] = {
                id: n,
                offset: {left: c.left - u.left, top: c.top - u.top}
              }, s[n] = r
            }, this.clearParent = function (t, e) {
              var n = s[e]
              n && (delete i[n][e], delete s[e])
            }, this.revalidateParent = function (e, n, i) {
              var o = s[n]
              if (o) {
                var r = {}
                r[n] = i, this.updateOffsets(o, r), t.revalidate(o)
              }
            }, this.getDragAncestor = function (e) {
              var n = jsPlumb.getElement(e), i = t.getId(n), o = s[i]
              return o ? jsPlumb.getElement(o) : null
            }
          }(this)), this.dragManager
        },
        recalculateOffsets: function (t) {
          this.getDragManager().updateOffsets(t)
        },
        createElement: function (t, e, n, i) {
          return this.createElementNS(null, t, e, n, i)
        },
        createElementNS: function (t, e, n, i, o) {
          var s, r = null == t ? document.createElement(e) : document.createElementNS(t, e)
          for (s in n = n || {}) r.style[s] = n[s]
          for (s in i && (r.className = i), o = o || {}) r.setAttribute(s, '' + o[s])
          return r
        },
        getAttribute: function (t, e) {
          return null != t.getAttribute ? t.getAttribute(e) : null
        },
        setAttribute: function (t, e, n) {
          null != t.setAttribute && t.setAttribute(e, n)
        },
        setAttributes: function (t, e) {
          for (var n in e) e.hasOwnProperty(n) && t.setAttribute(n, e[n])
        },
        appendToRoot: function (t) {
          document.body.appendChild(t)
        },
        getRenderModes: function () {
          return ['svg']
        },
        getClass: p,
        addClass: function (t, e) {
          jsPlumb.each(t, function (t) {
            f(t, e)
          })
        },
        hasClass: function (t, e) {
          return (t = jsPlumb.getElement(t)).classList ? t.classList.contains(e) : -1 !== p(t).indexOf(e)
        },
        removeClass: function (t, e) {
          jsPlumb.each(t, function (t) {
            f(t, null, e)
          })
        },
        toggleClass: function (t, e) {
          jsPlumb.hasClass(t, e) ? jsPlumb.removeClass(t, e) : jsPlumb.addClass(t, e)
        },
        updateClasses: function (t, e, n) {
          jsPlumb.each(t, function (t) {
            f(t, e, n)
          })
        },
        setClass: function (t, e) {
          null != e && jsPlumb.each(t, function (t) {
            d(t, e, e.split(/\s+/))
          })
        },
        setPosition: function (t, e) {
          t.style.left = e.left + 'px', t.style.top = e.top + 'px'
        },
        getPosition: function (t) {
          var e = function (e) {
            var n = t.style[e]
            return n ? n.substring(0, n.length - 2) : 0
          }
          return {left: e('left'), top: e('top')}
        },
        getStyle: function (t, e) {
          return void 0 !== window.getComputedStyle ? getComputedStyle(t, null).getPropertyValue(e) : t.currentStyle[e]
        },
        getSelector: function (t, e) {
          return 1 === arguments.length ? null != t.nodeType ? t : document.querySelectorAll(t) : t.querySelectorAll(e)
        },
        getOffset: function (t, e, n) {
          t = jsPlumb.getElement(t), n = n || this.getContainer()
          for (var i = {
            left: t.offsetLeft,
            top: t.offsetTop
          }, o = e || null != n && t !== n && t.offsetParent !== n ? t.offsetParent : null, s = function (t) {
            null != t && t !== document.body && (t.scrollTop > 0 || t.scrollLeft > 0) && (i.left -= t.scrollLeft, i.top -= t.scrollTop)
          }.bind(this); null != o;) {
            i.left += o.offsetLeft, i.top += o.offsetTop, s(o), o = e ? o.offsetParent : o.offsetParent === n ? null : o.offsetParent
          }
          if (null != n && !e && (n.scrollTop > 0 || n.scrollLeft > 0)) {
            var r = null != t.offsetParent ? this.getStyle(t.offsetParent, 'position') : 'static',
              a = this.getStyle(t, 'position')
            'absolute' !== a && 'fixed' !== a && 'absolute' !== r && 'fixed' !== r && (i.left -= n.scrollLeft, i.top -= n.scrollTop)
          }
          return i
        },
        getPositionOnElement: function (t, e, n) {
          var i = void 0 !== e.getBoundingClientRect ? e.getBoundingClientRect() : {
              left: 0,
              top: 0,
              width: 0,
              height: 0
            }, o = document.body, s = document.documentElement, r = window.pageYOffset || s.scrollTop || o.scrollTop,
            a = window.pageXOffset || s.scrollLeft || o.scrollLeft, l = s.clientTop || o.clientTop || 0,
            u = s.clientLeft || o.clientLeft || 0, c = i.top + r - l + 0 * n, h = i.left + a - u + 0 * n,
            d = jsPlumb.pageLocation(t), p = i.width || e.offsetWidth * n, f = i.height || e.offsetHeight * n
          return [(d[0] - h) / p, (d[1] - c) / f]
        },
        getAbsolutePosition: function (t) {
          var e = function (e) {
            var n = t.style[e]
            if (n) return parseFloat(n.substring(0, n.length - 2))
          }
          return [e('left'), e('top')]
        },
        setAbsolutePosition: function (t, e, n, i) {
          n ? this.animate(t, {
            left: '+=' + (e[0] - n[0]),
            top: '+=' + (e[1] - n[1])
          }, i) : (t.style.left = e[0] + 'px', t.style.top = e[1] + 'px')
        },
        getSize: function (t) {
          return [t.offsetWidth, t.offsetHeight]
        },
        getWidth: function (t) {
          return t.offsetWidth
        },
        getHeight: function (t) {
          return t.offsetHeight
        },
        getRenderMode: function () {
          return 'svg'
        },
        draggable: function (t, e) {
          var i
          return t = n.isArray(t) || null != t.length && !n.isString(t) ? t : [t], Array.prototype.slice.call(t).forEach(function (t) {
            (i = this.info(t)).el && this._initDraggableIfNecessary(i.el, !0, e, i.id, !0)
          }.bind(this)), this
        },
        snapToGrid: function (t, e, n) {
          var i = [], o = function (t) {
            var o = this.info(t)
            if (null != o.el && o.el._katavorioDrag) {
              var s = o.el._katavorioDrag.snap(e, n)
              this.revalidate(o.el), i.push([o.el, s])
            }
          }.bind(this)
          if (1 === arguments.length || 3 === arguments.length) {
            o(t, e, n)
          } else {
            var s = this.getManagedElements()
            for (var r in s) o(r, arguments[0], arguments[1])
          }
          return i
        },
        initDraggable: function (t, e, n) {
          s(this, n).draggable(t, e), t._jsPlumbDragOptions = e
        },
        destroyDraggable: function (t, e) {
          s(this, e).destroyDraggable(t), delete t._jsPlumbDragOptions
        },
        unbindDraggable: function (t, e, n, i) {
          s(this, i).destroyDraggable(t, e, n)
        },
        setDraggable: function (t, e) {
          return jsPlumb.each(t, function (t) {
            this.isDragSupported(t) && (this._draggableStates[this.getAttribute(t, 'id')] = e, this.setElementDraggable(t, e))
          }.bind(this))
        },
        _draggableStates: {},
        toggleDraggable: function (t) {
          var e
          return jsPlumb.each(t, function (t) {
            var n = this.getAttribute(t, 'id')
            return e = !(e = null != this._draggableStates[n] && this._draggableStates[n]), this._draggableStates[n] = e, this.setDraggable(t, e), e
          }.bind(this)), e
        },
        _initDraggableIfNecessary: function (t, e, i, o, s) {
          if (!jsPlumb.headless && (null != e && e && jsPlumb.isDragSupported(t, this))) {
            var r = i || this.Defaults.DragOptions
            if (r = jsPlumb.extend({}, r), jsPlumb.isAlreadyDraggable(t, this)) {
              i.force && this.initDraggable(t, r)
            } else {
              var a = jsPlumb.dragEvents.drag, l = jsPlumb.dragEvents.stop, u = jsPlumb.dragEvents.start
              this.manage(o, t), r[u] = n.wrap(r[u], function (t) {
                var e = t.el._jsPlumbDragOptions, n = !0
                return e.canDrag && (n = e.canDrag()), n && (this.setHoverSuspended(!0), this.select({source: t.el}).addClass(this.elementDraggingClass + ' ' + this.sourceElementDraggingClass, !0), this.select({target: t.el}).addClass(this.elementDraggingClass + ' ' + this.targetElementDraggingClass, !0), this.setConnectionBeingDragged(!0)), n
              }.bind(this)), r[a] = n.wrap(r[a], function (t) {
                var e = this.getUIPosition(arguments, this.getZoom())
                if (null != e) {
                  var n = t.el._jsPlumbDragOptions
                  this.draw(t.el, e, null, !0), n._dragging && this.addClass(t.el, 'jtk-dragged'), n._dragging = !0
                }
              }.bind(this)), r[l] = n.wrap(r[l], function (t) {
                for (var e, n = t.selection, i = function (t) {
                  null != t[1] && (e = this.getUIPosition([{
                    el: t[2].el,
                    pos: [t[1].left, t[1].top]
                  }]), this.draw(t[2].el, e)), null != t[0]._jsPlumbDragOptions && delete t[0]._jsPlumbDragOptions._dragging, this.removeClass(t[0], 'jtk-dragged'), this.select({source: t[2].el}).removeClass(this.elementDraggingClass + ' ' + this.sourceElementDraggingClass, !0), this.select({target: t[2].el}).removeClass(this.elementDraggingClass + ' ' + this.targetElementDraggingClass, !0), this.getDragManager().dragEnded(t[2].el)
                }.bind(this), o = 0; o < n.length; o++) {
                  i(n[o])
                }
                this.setHoverSuspended(!1), this.setConnectionBeingDragged(!1)
              }.bind(this))
              var c = this.getId(t)
              this._draggableStates[c] = !0
              var h = this._draggableStates[c]
              r.disabled = null != h && !h, this.initDraggable(t, r), this.getDragManager().register(t), s && this.fire('elementDraggable', {
                el: t,
                options: r
              })
            }
          }
        },
        animationSupported: !0,
        getElement: function (t) {
          return null == t ? null : 'string' == typeof (t = 'string' == typeof t ? t : null != t.length && null == t.enctype ? t[0] : t) ? document.getElementById(t) : t
        },
        removeElement: function (t) {
          s(this).elementRemoved(t), this.getEventManager().remove(t)
        },
        doAnimate: function (t, i, o) {
          o = o || {}
          var s = this.getOffset(t), r = function (t, e) {
              var i = function (i) {
                if (null != e[i]) {
                  if (n.isString(e[i])) {
                    var o = e[i].match(/-=/) ? -1 : 1, s = e[i].substring(2)
                    return t[i] + o * s
                  }
                  return e[i]
                }
                return t[i]
              }
              return [i('left'), i('top')]
            }(s, i), a = r[0] - s.left, l = r[1] - s.top, u = o.duration || 250, c = u / 15, h = 15 / u * a,
            d = 15 / u * l, p = 0, f = setInterval(function () {
              e.setPosition(t, {
                left: s.left + h * (p + 1),
                top: s.top + d * (p + 1)
              }), null != o.step && o.step(p, Math.ceil(c)), ++p >= c && (window.clearInterval(f), null != o.complete && o.complete())
            }, 15)
        },
        destroyDroppable: function (t, e) {
          s(this, e).destroyDroppable(t)
        },
        unbindDroppable: function (t, e, n, i) {
          s(this, i).destroyDroppable(t, e, n)
        },
        droppable: function (t, e) {
          var i
          return t = n.isArray(t) || null != t.length && !n.isString(t) ? t : [t], (e = e || {}).allowLoopback = !1, Array.prototype.slice.call(t).forEach(function (t) {
            (i = this.info(t)).el && this.initDroppable(i.el, e)
          }.bind(this)), this
        },
        initDroppable: function (t, e, n) {
          s(this, n).droppable(t, e)
        },
        isAlreadyDraggable: function (t) {
          return null != t._katavorioDrag
        },
        isDragSupported: function (t, e) {
          return !0
        },
        isDropSupported: function (t, e) {
          return !0
        },
        isElementDraggable: function (t) {
          return (t = e.getElement(t))._katavorioDrag && t._katavorioDrag.isEnabled()
        },
        getDragObject: function (t) {
          return t[0].drag.getDragElement()
        },
        getDragScope: function (t) {
          return t._katavorioDrag && t._katavorioDrag.scopes.join(' ') || ''
        },
        getDropEvent: function (t) {
          return t[0].e
        },
        getUIPosition: function (t, e) {
          var n = t[0].el
          if (null == n.offsetParent) return null
          var i = t[0].finalPos || t[0].pos, o = {left: i[0], top: i[1]}
          if (n._katavorioDrag && n.offsetParent !== this.getContainer()) {
            var s = this.getOffset(n.offsetParent)
            o.left += s.left, o.top += s.top
          }
          return o
        },
        setDragFilter: function (t, e, n) {
          t._katavorioDrag && t._katavorioDrag.setFilter(e, n)
        },
        setElementDraggable: function (t, n) {
          (t = e.getElement(t))._katavorioDrag && t._katavorioDrag.setEnabled(n)
        },
        setDragScope: function (t, e) {
          t._katavorioDrag && t._katavorioDrag.k.setDragScope(t, e)
        },
        setDropScope: function (t, e) {
          t._katavorioDrop && t._katavorioDrop.length > 0 && t._katavorioDrop[0].k.setDropScope(t, e)
        },
        addToPosse: function (t, n) {
          var i = Array.prototype.slice.call(arguments, 1), o = s(this)
          e.each(t, function (t) {
            (t = [e.getElement(t)]).push.apply(t, i), o.addToPosse.apply(o, t)
          })
        },
        setPosse: function (t, n) {
          var i = Array.prototype.slice.call(arguments, 1), o = s(this)
          e.each(t, function (t) {
            (t = [e.getElement(t)]).push.apply(t, i), o.setPosse.apply(o, t)
          })
        },
        removeFromPosse: function (t, n) {
          var i = Array.prototype.slice.call(arguments, 1), o = s(this)
          e.each(t, function (t) {
            (t = [e.getElement(t)]).push.apply(t, i), o.removeFromPosse.apply(o, t)
          })
        },
        removeFromAllPosses: function (t) {
          var n = s(this)
          e.each(t, function (t) {
            n.removeFromAllPosses(e.getElement(t))
          })
        },
        setPosseState: function (t, n, i) {
          var o = s(this)
          e.each(t, function (t) {
            o.setPosseState(e.getElement(t), n, i)
          })
        },
        dragEvents: {
          start: 'start',
          stop: 'stop',
          drag: 'drag',
          step: 'step',
          over: 'over',
          out: 'out',
          drop: 'drop',
          complete: 'complete',
          beforeStart: 'beforeStart'
        },
        animEvents: {step: 'step', complete: 'complete'},
        stopDrag: function (t) {
          t._katavorioDrag && t._katavorioDrag.abort()
        },
        addToDragSelection: function (t) {
          s(this).select(t)
        },
        removeFromDragSelection: function (t) {
          s(this).deselect(t)
        },
        clearDragSelection: function () {
          s(this).deselectAll()
        },
        trigger: function (t, e, n, i) {
          this.getEventManager().trigger(t, e, n, i)
        },
        doReset: function () {
          for (var t in this) 0 === t.indexOf('_katavorio_') && this[t].reset()
        },
        getEventManager: function () {
          return (n = (e = this)._mottle) || (n = e._mottle = new t.Mottle), n
          var e, n
        },
        on: function (t, e, n) {
          return this.getEventManager().on.apply(this, arguments), this
        },
        off: function (t, e, n) {
          return this.getEventManager().off.apply(this, arguments), this
        }
      })
      var g
      g = e.init, function t () {
        /complete|loaded|interactive/.test(document.readyState) && void 0 !== document.body && null != document.body ? g() : setTimeout(t, 9)
      }()
    }.call('undefined' != typeof window ? window : this)
    var c = {
      props: {node: Object, activeElement: Object}, data: function () {
        return {}
      }, computed: {
        nodeContainerClass: function () {
          return {
            'ef-node-container': !0,
            'ef-node-active': 'node' == this.activeElement.type && this.activeElement.nodeId === this.node.id
          }
        }, nodeContainerStyle: function () {
          return {top: this.node.top, left: this.node.left}
        }, nodeIcoClass: function () {
          var t = {}
          return t[this.node.ico] = !0, t['flow-node-drag'] = !0, t
        }
      }, methods: {
        clickNode: function () {
          this.$emit('clickNode', this.node.id)
        }, changeNodeSite: function () {
          this.node.left == this.$refs.node.style.left && this.node.top == this.$refs.node.style.top || this.$emit('changeNodeSite', {
            nodeId: this.node.id,
            left: this.$refs.node.style.left,
            top: this.$refs.node.style.top
          })
        }
      }
    }, h = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e
        return n('div', {
          ref: 'node',
          class: t.nodeContainerClass,
          style: t.nodeContainerStyle,
          on: {click: t.clickNode, mouseup: t.changeNodeSite}
        }, [n('div', {staticClass: 'ef-node-left'}), t._v(' '), n('div', {staticClass: 'ef-node-left-ico flow-node-drag'}, [n('i', {class: t.nodeIcoClass})]), t._v(' '), n('div', {
          staticClass: 'ef-node-text',
          attrs: {'show-overflow-tooltip': !0}
        }, [t._v('\n        ' + t._s(t.node.name) + '\n    ')]), t._v(' '), n('div', {staticClass: 'ef-node-right-ico'}, [n('i', {
          directives: [{
            name: 'show',
            rawName: 'v-show',
            value: 'success' === t.node.state,
            expression: 'node.state === \'success\''
          }], staticClass: 'el-icon-circle-check el-node-state-success'
        }), t._v(' '), n('i', {
          directives: [{
            name: 'show',
            rawName: 'v-show',
            value: 'error' === t.node.state,
            expression: 'node.state === \'error\''
          }], staticClass: 'el-icon-circle-close el-node-state-error'
        }), t._v(' '), n('i', {
          directives: [{
            name: 'show',
            rawName: 'v-show',
            value: 'warning' === t.node.state,
            expression: 'node.state === \'warning\''
          }], staticClass: 'el-icon-warning-outline el-node-state-warning'
        }), t._v(' '), n('i', {
          directives: [{
            name: 'show',
            rawName: 'v-show',
            value: 'running' === t.node.state,
            expression: 'node.state === \'running\''
          }], staticClass: 'el-icon-loading el-node-state-running'
        })])])
      }, staticRenderFns: []
    }, d = n('C7Lr')(c, h, !1, null, null, null).exports, p = {left: -1, top: -1}, f = {
      data: function () {
        return {
          activeNames: '1',
          draggableOptions: {preventOnFilter: !1, sort: !1, disabled: !1, ghostClass: 'tt', forceFallback: !0},
          defaultOpeneds: ['1', '2'],
          menuList: [{
            id: '1',
            type: 'group',
            name: '开始节点',
            ico: 'el-icon-video-play',
            open: !0,
            children: [{id: '11', type: 'timer', name: '数据接入', ico: 'el-icon-time', style: {}}, {
              id: '12',
              type: 'task',
              name: '接口调用',
              ico: 'el-icon-odometer',
              style: {}
            }]
          }, {
            id: '2',
            type: 'group',
            name: '结束节点',
            ico: 'el-icon-video-pause',
            open: !0,
            children: [{id: '21', type: 'end', name: '流程结束', ico: 'el-icon-caret-right', style: {}}, {
              id: '22',
              type: 'over',
              name: '数据清理',
              ico: 'el-icon-shopping-cart-full',
              style: {}
            }]
          }],
          nodeMenu: {}
        }
      }, components: {draggable: s.a}, created: function () {
        this.isFirefox() && (document.body.ondrop = function (t) {
          p.left = t.layerX, p.top = t.clientY - 50, t.preventDefault(), t.stopPropagation()
        })
      }, methods: {
        getMenuByType: function (t) {
          for (var e = 0; e < this.menuList.length; e++) for (var n = this.menuList[e].children, i = 0; i < n.length; i++) if (n[i].type === t) return n[i]
        }, move: function (t, e, n, i) {
          var o = t.item.attributes.type.nodeValue
          this.nodeMenu = this.getMenuByType(o)
        }, end: function (t, e) {
          this.$emit('addNode', t, this.nodeMenu, p)
        }, isFirefox: function () {
          return navigator.userAgent.indexOf('Firefox') > -1
        }
      }
    }, g = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e
        return n('div', {ref: 'tool', staticClass: 'flow-menu'}, t._l(t.menuList, function (e) {
          return n('div', {key: e.id}, [n('span', {
            staticClass: 'ef-node-pmenu', on: {
              click: function (t) {
                e.open = !e.open
              }
            }
          }, [n('i', {
            class: {
              'el-icon-caret-bottom': e.open,
              'el-icon-caret-right': !e.open
            }
          }), t._v(' ' + t._s(e.name))]), t._v(' '), n('ul', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: e.open,
              expression: 'menu.open'
            }], staticClass: 'ef-node-menu-ul'
          }, [n('draggable', {
            attrs: {options: t.draggableOptions},
            on: {end: t.end, start: t.move},
            model: {
              value: e.children, callback: function (n) {
                t.$set(e, 'children', n)
              }, expression: 'menu.children'
            }
          }, t._l(e.children, function (e) {
            return n('li', {
              key: e.id,
              staticClass: 'ef-node-menu-li',
              attrs: {type: e.type}
            }, [n('i', {class: e.ico}), t._v(' ' + t._s(e.name) + '\n                ')])
          }), 0)], 1)])
        }), 0)
      }, staticRenderFns: []
    }, m = n('C7Lr')(f, g, !1, null, null, null).exports, v = n('3cXf'), b = n.n(v), y = (n('NwAS'), n('2RDZ'))
    n('9qkF')
    var P = {
      props: {data: Object}, data: function () {
        return {dialogVisible: !1, flowJsonData: {}, options: {mode: {name: 'javascript', json: !0}, lineNumbers: !0}}
      }, components: {codemirror: y.codemirror}, methods: {
        init: function () {
          this.dialogVisible = !0, this.flowJsonData = b()(this.data, null, 4).toString()
        }
      }
    }, x = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e
        return n('el-dialog', {
          attrs: {title: '流程数据信息', visible: t.dialogVisible, width: '70%'},
          on: {
            'update:visible': function (e) {
              t.dialogVisible = e
            }
          }
        }, [n('codemirror', {staticClass: 'code', attrs: {value: t.flowJsonData, options: t.options}})], 1)
      }, staticRenderFns: []
    }, _ = n('C7Lr')(P, x, !1, null, null, null).exports, C = n('i7YX'), j = n.n(C), E = {
      data: function () {
        return {visible: !0, type: 'node', node: {}, line: {}, data: {}}
      }, methods: {
        nodeInit: function (t, e) {
          var n = this
          this.type = 'node', this.data = t, t.nodeList.filter(function (t) {
            t.id === e && (n.node = Object(C.cloneDeep)(t))
          })
        }, lineInit: function (t) {
          this.type = 'line', this.line = t
        }, saveLine: function () {
          this.$emit('setLineLabel', this.line.from, this.line.to, this.line.label)
        }, save: function () {
          var t = this
          this.data.nodeList.filter(function (e) {
            e.id === t.node.id && (e.name = t.node.name)
          })
        }
      }
    }, S = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e
        return n('div', [n('div', {staticClass: 'ef-node-form'}, [n('div', {staticClass: 'ef-node-form-header'}, [t._v('\n            编辑\n        ')]), t._v(' '), n('div', {staticClass: 'ef-node-form-body'}, [n('el-form', {
          directives: [{
            name: 'show',
            rawName: 'v-show',
            value: 'node' === t.type,
            expression: 'type === \'node\''
          }], ref: 'dataForm', attrs: {model: t.node, 'label-width': '80px'}
        }, [n('el-form-item', {attrs: {label: '类型'}}, [n('el-input', {
          attrs: {disabled: !0},
          model: {
            value: t.node.type, callback: function (e) {
              t.$set(t.node, 'type', e)
            }, expression: 'node.type'
          }
        })], 1), t._v(' '), n('el-form-item', {attrs: {label: '名称'}}, [n('el-input', {
          model: {
            value: t.node.name,
            callback: function (e) {
              t.$set(t.node, 'name', e)
            },
            expression: 'node.name'
          }
        })], 1), t._v(' '), n('el-form-item', {attrs: {label: 'left坐标'}}, [n('el-input', {
          model: {
            value: t.node.left,
            callback: function (e) {
              t.$set(t.node, 'left', e)
            },
            expression: 'node.left'
          }
        })], 1), t._v(' '), n('el-form-item', {attrs: {label: 'top坐标'}}, [n('el-input', {
          model: {
            value: t.node.top,
            callback: function (e) {
              t.$set(t.node, 'top', e)
            },
            expression: 'node.top'
          }
        })], 1), t._v(' '), n('el-form-item', {attrs: {label: 'ico图标'}}, [n('el-input', {
          model: {
            value: t.node.ico,
            callback: function (e) {
              t.$set(t.node, 'ico', e)
            },
            expression: 'node.ico'
          }
        })], 1), t._v(' '), n('el-form-item', [n('el-button', {attrs: {icon: 'el-icon-close'}}, [t._v('重置')]), t._v(' '), n('el-button', {
          attrs: {
            type: 'primary',
            icon: 'el-icon-check'
          }, on: {click: t.save}
        }, [t._v('保存')])], 1)], 1), t._v(' '), n('el-form', {
          directives: [{
            name: 'show',
            rawName: 'v-show',
            value: 'line' === t.type,
            expression: 'type === \'line\''
          }], ref: 'dataForm', attrs: {model: t.line, 'label-width': '80px'}
        }, [n('el-form-item', {attrs: {label: '条件'}}, [n('el-input', {
          model: {
            value: t.line.label,
            callback: function (e) {
              t.$set(t.line, 'label', e)
            },
            expression: 'line.label'
          }
        })], 1), t._v(' '), n('el-form-item', [n('el-button', {attrs: {icon: 'el-icon-close'}}, [t._v('重置')]), t._v(' '), n('el-button', {
          attrs: {
            type: 'primary',
            icon: 'el-icon-check'
          }, on: {click: t.saveLine}
        }, [t._v('保存')])], 1)], 1)], 1)])])
      }, staticRenderFns: []
    }, D = n('C7Lr')(E, S, !1, null, null, null).exports, w = {
      name: '流程A',
      nodeList: [{
        id: 'nodeA',
        name: '流程A-节点A',
        type: 'task',
        left: '26px',
        top: '161px',
        ico: 'el-icon-user-solid'
      }, {id: 'nodeB', name: '流程A-节点B', type: 'task', left: '340px', top: '161px', ico: 'el-icon-goods'}, {
        id: 'nodeC',
        name: '流程A-节点C',
        type: 'task',
        left: '739px',
        top: '161px',
        ico: 'el-icon-present'
      }],
      lineList: [{from: 'nodeA', to: 'nodeB'}, {from: 'nodeB', to: 'nodeC'}]
    }
    var I = {
      name: '流程B',
      nodeList: [{
        id: 'nodeA',
        name: '流程B-节点A',
        type: 'task',
        left: '18px',
        top: '223px',
        ico: 'el-icon-user-solid',
        state: 'success'
      }, {
        id: 'nodeB',
        type: 'task',
        name: '流程B-节点B',
        left: '351px',
        top: '96px',
        ico: 'el-icon-goods',
        state: 'error'
      }, {
        id: 'nodeC',
        name: '流程B-节点C',
        type: 'task',
        left: '354px',
        top: '351px',
        ico: 'el-icon-present',
        state: 'warning'
      }, {
        id: 'nodeD',
        name: '流程B-节点D',
        type: 'task',
        left: '723px',
        top: '215px',
        ico: 'el-icon-present',
        state: 'running'
      }],
      lineList: [{from: 'nodeA', to: 'nodeB', label: '条件A'}, {from: 'nodeA', to: 'nodeC', label: '条件B'}, {
        from: 'nodeB',
        to: 'nodeD'
      }, {from: 'nodeC', to: 'nodeD'}]
    }

    function A () {
      return I
    }

    var k = {
      name: '流程C',
      nodeList: [{
        id: 'nodeA',
        name: '流程C-节点A',
        type: 'task',
        left: '400px',
        top: '15px',
        ico: 'el-icon-user-solid'
      }, {id: 'nodeB', name: '流程C-节点B', type: 'task', left: '400px', top: '200px', ico: 'el-icon-goods'}, {
        id: 'nodeC',
        name: '流程C-节点C',
        type: 'task',
        left: '400px',
        top: '378px',
        ico: 'el-icon-present'
      }],
      lineList: [{from: 'nodeA', to: 'nodeB'}, {from: 'nodeB', to: 'nodeC'}]
    }
    var O = {
      data: function () {
        return {
          jsPlumb: null,
          easyFlowVisible: !0,
          flowInfoVisible: !1,
          loadEasyFlowFinish: !1,
          data: {},
          activeElement: {type: void 0, nodeId: void 0, sourceId: void 0, targetId: void 0}
        }
      },
      mixins: [{
        data: function () {
          return {
            jsplumbSetting: {
              Anchors: ['Top', 'TopCenter', 'TopRight', 'TopLeft', 'Right', 'RightMiddle', 'Bottom', 'BottomCenter', 'BottomRight', 'BottomLeft', 'Left', 'LeftMiddle'],
              Container: 'flowContainer',
              Connector: ['Bezier', {curviness: 50}],
              ConnectionsDetachable: !1,
              DeleteEndpointsOnDetach: !1,
              Endpoint: ['Dot', {radius: 3}],
              EndpointStyle: {fill: '', outlineWidth: 1},
              LogEnabled: !0,
              PaintStyle: {stroke: '#E0E3E7', strokeWidth: 1, outlineStroke: 'transparent', outlineWidth: 10},
              Overlays: [['Arrow', {width: 10, length: 8, location: 1, foldback: .8}], ['Label', {
                location: .1,
                id: 'label',
                cssClass: 'aLabel'
              }]],
              RenderMode: 'svg',
              DragOptions: {cursor: 'pointer', zIndex: 2e3, hoverClass: 'dropHover', activeClass: 'dragActive'}
            },
            jsplumbConnectOptions: {
              isSource: !0,
              isTarget: !0,
              anchor: 'Continuous',
              labelStyle: {cssClass: 'flowLabel'},
              emptyLabelStyle: {cssClass: 'emptyFlowLabel'}
            },
            jsplumbSourceOptions: {
              filter: '.flow-node-drag',
              filterExclude: !1,
              anchor: 'Continuous',
              allowLoopback: !1
            },
            jsplumbTargetOptions: {
              filter: '.flow-node-drag',
              filterExclude: !1,
              anchor: 'Continuous',
              allowLoopback: !1
            }
          }
        }
      }],
      components: {draggable: s.a, flowNode: d, nodeMenu: m, FlowInfo: _, FlowNodeForm: D},
      directives: {
        flowDrag: {
          bind: function (t, e, n, i) {
            e && (t.onmousedown = function (e) {
              if (2 != e.button) {
                var n = e.clientX, i = e.clientY
                t.style.cursor = 'move', document.onmousemove = function (e) {
                  e.preventDefault()
                  var o = e.clientX - n
                  n = e.clientX, t.scrollLeft += -o
                  var s = e.clientY - i
                  i = e.clientY, t.scrollTop += -s
                }, document.onmouseup = function (e) {
                  t.style.cursor = 'auto', document.onmousemove = null, document.onmouseup = null
                }
              }
            })
          }
        }
      },
      mounted: function () {
        var t = this
        this.jsPlumb = jsPlumb.getInstance(), this.$nextTick(function () {
          t.dataReload(A())
        })
      },
      methods: {
        getUUID: function () {
          return Math.random().toString(36).substr(3, 10)
        }, jsPlumbInit: function () {
          var t = this
          this.jsPlumb.ready(function () {
            t.jsPlumb.importDefaults(t.jsplumbSetting), t.jsPlumb.setSuspendDrawing(!1, !0), t.loadEasyFlow(), t.jsPlumb.bind('click', function (e, n) {
              t.activeElement.type = 'line', t.activeElement.sourceId = e.sourceId, t.activeElement.targetId = e.targetId, t.$refs.nodeForm.lineInit({
                from: e.sourceId,
                to: e.targetId,
                label: e.getLabel()
              })
            }), t.jsPlumb.bind('connection', function (e) {
              var n = e.source.id, i = e.target.id
              t.loadEasyFlowFinish && t.data.lineList.push({from: n, to: i})
            }), t.jsPlumb.bind('connectionDetached', function (e) {
              t.deleteLine(e.sourceId, e.targetId)
            }), t.jsPlumb.bind('connectionMoved', function (e) {
              t.changeLine(e.originalSourceId, e.originalTargetId)
            }), t.jsPlumb.bind('contextmenu', function (t) {
              console.log('contextmenu', t)
            }), t.jsPlumb.bind('beforeDrop', function (e) {
              var n = e.sourceId, i = e.targetId
              return n === i ? (t.$message.error('节点不支持连接自己'), !1) : t.hasLine(n, i) ? (t.$message.error('该关系已存在,不允许重复创建'), !1) : t.hashOppositeLine(n, i) ? (t.$message.error('不支持两个节点之间连线回环'), !1) : (t.$message.success('连接成功'), !0)
            }), t.jsPlumb.bind('beforeDetach', function (t) {
              console.log('beforeDetach', t)
            }), t.jsPlumb.setContainer(t.$refs.efContainer)
          })
        }, loadEasyFlow: function () {
          for (var t = 0; t < this.data.nodeList.length; t++) {
            var e = this.data.nodeList[t]
            this.jsPlumb.makeSource(e.id, this.jsplumbSourceOptions), this.jsPlumb.makeTarget(e.id, this.jsplumbTargetOptions), this.jsPlumb.draggable(e.id, {
              containment: 'parent',
              stop: function (t) {
                console.log('停止拖拽', t)
              }
            })
          }
          for (t = 0; t < this.data.lineList.length; t++) {
            var n = this.data.lineList[t]
            this.jsPlumb.connect({
              source: n.from,
              target: n.to,
              label: n.label ? n.label : ''
            }, this.jsplumbConnectOptions)
          }
          this.$nextTick(function () {
            this.loadEasyFlowFinish = !0
          })
        }, setLineLabel: function (t, e, n) {
          var i = this.jsPlumb.getConnections({source: t, target: e})[0]
          n && '' !== n ? i.addClass('flowLabel') : (i.removeClass('flowLabel'), i.addClass('emptyFlowLabel')), i.setLabel({label: n})
        }, deleteElement: function () {
          var t = this
          'node' === this.activeElement.type ? this.deleteNode(this.activeElement.nodeId) : 'line' === this.activeElement.type && this.$confirm('确定删除所点击的线吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(function () {
            var e = t.jsPlumb.getConnections({source: t.activeElement.sourceId, target: t.activeElement.targetId})[0]
            t.jsPlumb.deleteConnection(e)
          }).catch(function () {
          })
        }, deleteLine: function (t, e) {
          this.data.lineList = this.data.lineList.filter(function (n) {
            return n.from != t || n.to != e
          })
        }, changeLine: function (t, e) {
          this.deleteLine(t, e)
        }, changeNodeSite: function (t) {
          for (var e = 0; e < this.data.nodeList.length; e++) {
            var n = this.data.nodeList[e]
            n.id === t.nodeId && (n.left = t.left, n.top = t.top)
          }
        }, addNode: function (t, e, n) {
          var i = t.originalEvent.clientX, o = t.originalEvent.clientY, s = this.$refs.efContainer,
            r = s.getBoundingClientRect(), a = i, l = o
          if (a < r.x || a > r.width + r.x || l < r.y || r.y > r.y + r.height) {
            this.$message.error('请把节点拖入到画布中')
          } else {
            a = a - r.x + s.scrollLeft, l = l - r.y + s.scrollTop, a -= 85, l -= 16
            for (var u = this.getUUID(), c = e.name, h = c, d = 1; d < 1e4;) {
              for (var p = !1, f = 0; f < this.data.nodeList.length; f++) {
                this.data.nodeList[f].name === h && (h = c + d, p = !0)
              }
              if (!p) break
              d++
            }
            var g = {id: u, name: h, type: e.type, left: a + 'px', top: l + 'px', ico: e.ico, state: 'success'}
            this.data.nodeList.push(g), this.$nextTick(function () {
              this.jsPlumb.makeSource(u, this.jsplumbSourceOptions), this.jsPlumb.makeTarget(u, this.jsplumbTargetOptions), this.jsPlumb.draggable(u, {containment: 'parent'})
            })
          }
        }, deleteNode: function (t) {
          var e = this
          return this.$confirm('确定要删除节点' + t + '?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            closeOnClickModal: !1
          }).then(function () {
            e.data.nodeList = e.data.nodeList.filter(function (e) {
              return e.id !== t
            }), e.$nextTick(function () {
              this.jsPlumb.removeAllEndpoints(t)
            })
          }).catch(function () {
          }), !0
        }, clickNode: function (t) {
          this.activeElement.type = 'node', this.activeElement.nodeId = t, this.$refs.nodeForm.nodeInit(this.data, t)
        }, hasLine: function (t, e) {
          for (var n = 0; n < this.data.lineList.length; n++) {
            var i = this.data.lineList[n]
            if (i.from === t && i.to === e) return !0
          }
          return !1
        }, hashOppositeLine: function (t, e) {
          return this.hasLine(e, t)
        }, nodeRightMenu: function (t, e) {
          this.menu.show = !0, this.menu.curNodeId = t, this.menu.left = e.x + "px", this.menu.top = e.y + "px"
        }, dataInfo: function () {
          this.flowInfoVisible = !0, this.$nextTick(function () {
            this.$refs.flowInfo.init()
          })
        }, dataReload: function (t) {
          var e = this;
          this.easyFlowVisible = !1, this.data.nodeList = [], this.data.lineList = [], this.$nextTick(function () {
            t = j.a.cloneDeep(t), e.easyFlowVisible = !0, e.data = t, e.$nextTick(function () {
              e.jsPlumb = jsPlumb.getInstance(), e.$nextTick(function () {
                e.jsPlumbInit()
              })
            })
          })
        }, dataReloadA: function () {
          this.dataReload(w)
        }, dataReloadB: function () {
          this.dataReload(A())
        }, dataReloadC: function () {
          this.dataReload(k)
        }, changeLabel: function () {
          this.jsPlumb.getConnections({source: "nodeA", target: "nodeB"})[0].setLabel({
            label: "",
            cssClass: "labelClass a b"
          })
        }
      }
    }, M = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return t.easyFlowVisible ? n("div", {staticStyle: {height: "calc(100vh)"}}, [n("el-row", [n("el-col", {attrs: {span: 24}}, [n("div", {staticClass: "ef-tooltar"}, [n("el-link", {
          attrs: {
            type: "primary",
            underline: !1
          }
        }, [t._v(t._s(t.data.name))]), t._v(" "), n("el-divider", {attrs: {direction: "vertical"}}), t._v(" "), n("el-button", {
          attrs: {
            type: "text",
            icon: "el-icon-delete",
            size: "large",
            disabled: !this.activeElement.type
          }, on: {click: t.deleteElement}
        }), t._v(" "), n("div", {
          staticStyle: {
            float: "right",
            "margin-right": "5px"
          }
        }, [n("el-button", {
          attrs: {plain: "", round: "", icon: "el-icon-document", size: "mini"},
          on: {click: t.dataInfo}
        }, [t._v("流程信息")]), t._v(" "), n("el-button", {
          attrs: {
            plain: "",
            round: "",
            icon: "el-icon-refresh",
            size: "mini"
          }, on: {click: t.dataReloadA}
        }, [t._v("切换流程A")]), t._v(" "), n("el-button", {
          attrs: {
            plain: "",
            round: "",
            icon: "el-icon-refresh",
            size: "mini"
          }, on: {click: t.dataReloadB}
        }, [t._v("切换流程B")]), t._v(" "), n("el-button", {
          attrs: {
            plain: "",
            round: "",
            icon: "el-icon-refresh",
            size: "mini"
          }, on: {click: t.dataReloadC}
        }, [t._v("切换流程C")])], 1)], 1)])], 1), t._v(" "), n("div", {
          staticStyle: {
            display: "flex",
            height: "calc(100% - 47px)"
          }
        }, [n("div", {
          staticStyle: {
            width: "230px",
            "border-right": "1px solid #dce3e8"
          }
        }, [n("node-menu", {
          ref: "nodeMenu",
          on: {addNode: t.addNode}
        })], 1), t._v(" "), n("div", {
          directives: [{name: "flowDrag", rawName: "v-flowDrag"}],
          ref: "efContainer",
          staticClass: "container",
          attrs: {id: "efContainer"}
        }, [t._l(t.data.nodeList, function (e) {
          return [n("flow-node", {
            key: e.id,
            attrs: {id: e.id, node: e, activeElement: t.activeElement},
            on: {changeNodeSite: t.changeNodeSite, nodeRightMenu: t.nodeRightMenu, clickNode: t.clickNode}
          })]
        }), t._v(" "), n("div", {
          staticStyle: {
            position: "absolute",
            top: "2000px",
            left: "2000px"
          }
        }, [t._v(" ")])], 2), t._v(" "), n("div", {
          staticStyle: {
            width: "300px",
            "border-left": "1px solid #dce3e8",
            "background-color": "#FBFBFB"
          }
        }, [n("flow-node-form", {
          ref: "nodeForm",
          on: {setLineLabel: t.setLineLabel}
        })], 1)]), t._v(" "), t.flowInfoVisible ? n("flow-info", {
          ref: "flowInfo",
          attrs: {data: t.data}
        }) : t._e()], 1) : t._e()
      }, staticRenderFns: []
    }, T = {name: "App", components: {FlowPanel: n("C7Lr")(O, M, !1, null, null, null).exports}}, L = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {attrs: {id: "app"}}, [e("flow-panel")], 1)
      }, staticRenderFns: []
    }, F = n("C7Lr")(T, L, !1, null, null, null).exports, N = n("4gzT"), B = n.n(N);
    n("JKkS"), n("BfoZ");
    i.default.config.productionTip = !1, i.default.use(B.a, {size: "small"}), new i.default({
      el: "#app",
      components: {App: F},
      template: "<App/>"
    })
  }, NwAS: function (t, e) {
  }
}, ["NHnr"]);
//# sourceMappingURL=app.5dcf04a7d2f81c1f306a.js.map
