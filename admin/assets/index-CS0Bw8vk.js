function Qc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ys = { exports: {} },
  hl = {},
  ws = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rr = Symbol.for("react.element"),
  Yc = Symbol.for("react.portal"),
  Xc = Symbol.for("react.fragment"),
  Gc = Symbol.for("react.strict_mode"),
  Jc = Symbol.for("react.profiler"),
  Zc = Symbol.for("react.provider"),
  qc = Symbol.for("react.context"),
  bc = Symbol.for("react.forward_ref"),
  ef = Symbol.for("react.suspense"),
  tf = Symbol.for("react.memo"),
  nf = Symbol.for("react.lazy"),
  tu = Symbol.iterator;
function rf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (tu && e[tu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ss = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ks = Object.assign,
  xs = {};
function cn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xs),
    (this.updater = n || Ss);
}
cn.prototype.isReactComponent = {};
cn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
cn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Es() {}
Es.prototype = cn.prototype;
function ro(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xs),
    (this.updater = n || Ss);
}
var lo = (ro.prototype = new Es());
lo.constructor = ro;
ks(lo, cn.prototype);
lo.isPureReactComponent = !0;
var nu = Array.isArray,
  Cs = Object.prototype.hasOwnProperty,
  io = { current: null },
  Ns = { key: !0, ref: !0, __self: !0, __source: !0 };
function _s(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Cs.call(t, r) && !Ns.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: rr,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: io.current,
  };
}
function lf(e, t) {
  return {
    $$typeof: rr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function oo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === rr;
}
function of(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ru = /\/+/g;
function Il(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? of("" + e.key)
    : t.toString(36);
}
function Rr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case rr:
          case Yc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Il(o, 0) : r),
      nu(l)
        ? ((n = ""),
          e != null && (n = e.replace(ru, "$&/") + "/"),
          Rr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (oo(l) &&
            (l = lf(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ru, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), nu(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Il(i, u);
      o += Rr(i, t, n, s, l);
    }
  else if (((s = rf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Il(i, u++)), (o += Rr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function dr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Rr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function uf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ae = { current: null },
  zr = { transition: null },
  sf = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: zr,
    ReactCurrentOwner: io,
  };
function Ps() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: dr,
  forEach: function (e, t, n) {
    dr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      dr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      dr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!oo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = cn;
T.Fragment = Xc;
T.Profiler = Jc;
T.PureComponent = ro;
T.StrictMode = Gc;
T.Suspense = ef;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sf;
T.act = Ps;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ks({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = io.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Cs.call(t, s) &&
        !Ns.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: rr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: qc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Zc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = _s;
T.createFactory = function (e) {
  var t = _s.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: bc, render: e };
};
T.isValidElement = oo;
T.lazy = function (e) {
  return { $$typeof: nf, _payload: { _status: -1, _result: e }, _init: uf };
};
T.memo = function (e, t) {
  return { $$typeof: tf, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = zr.transition;
  zr.transition = {};
  try {
    e();
  } finally {
    zr.transition = t;
  }
};
T.unstable_act = Ps;
T.useCallback = function (e, t) {
  return ae.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ae.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ae.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ae.current.useEffect(e, t);
};
T.useId = function () {
  return ae.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ae.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ae.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ae.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ae.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ae.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ae.current.useRef(e);
};
T.useState = function (e) {
  return ae.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ae.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ae.current.useTransition();
};
T.version = "18.3.1";
ws.exports = T;
var x = ws.exports;
const js = Kc(x),
  af = Qc({ __proto__: null, default: js }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cf = x,
  ff = Symbol.for("react.element"),
  df = Symbol.for("react.fragment"),
  pf = Object.prototype.hasOwnProperty,
  hf = cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  mf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ls(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) pf.call(t, r) && !mf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: ff,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: hf.current,
  };
}
hl.Fragment = df;
hl.jsx = Ls;
hl.jsxs = Ls;
ys.exports = hl;
var v = ys.exports,
  ui = {},
  Rs = { exports: {} },
  Se = {},
  zs = { exports: {} },
  Ts = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, R) {
    var z = _.length;
    _.push(R);
    e: for (; 0 < z; ) {
      var Q = (z - 1) >>> 1,
        Z = _[Q];
      if (0 < l(Z, R)) (_[Q] = R), (_[z] = Z), (z = Q);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var R = _[0],
      z = _.pop();
    if (z !== R) {
      _[0] = z;
      e: for (var Q = 0, Z = _.length, cr = Z >>> 1; Q < cr; ) {
        var wt = 2 * (Q + 1) - 1,
          Ol = _[wt],
          St = wt + 1,
          fr = _[St];
        if (0 > l(Ol, z))
          St < Z && 0 > l(fr, Ol)
            ? ((_[Q] = fr), (_[St] = z), (Q = St))
            : ((_[Q] = Ol), (_[wt] = z), (Q = wt));
        else if (St < Z && 0 > l(fr, z)) (_[Q] = fr), (_[St] = z), (Q = St);
        else break e;
      }
    }
    return R;
  }
  function l(_, R) {
    var z = _.sortIndex - R.sortIndex;
    return z !== 0 ? z : _.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    p = null,
    m = 3,
    y = !1,
    w = !1,
    S = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var R = n(a); R !== null; ) {
      if (R.callback === null) r(a);
      else if (R.startTime <= _)
        r(a), (R.sortIndex = R.expirationTime), t(s, R);
      else break;
      R = n(a);
    }
  }
  function g(_) {
    if (((S = !1), d(_), !w))
      if (n(s) !== null) (w = !0), zl(E);
      else {
        var R = n(a);
        R !== null && Tl(g, R.startTime - _);
      }
  }
  function E(_, R) {
    (w = !1), S && ((S = !1), f(L), (L = -1)), (y = !0);
    var z = m;
    try {
      for (
        d(R), p = n(s);
        p !== null && (!(p.expirationTime > R) || (_ && !je()));

      ) {
        var Q = p.callback;
        if (typeof Q == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var Z = Q(p.expirationTime <= R);
          (R = e.unstable_now()),
            typeof Z == "function" ? (p.callback = Z) : p === n(s) && r(s),
            d(R);
        } else r(s);
        p = n(s);
      }
      if (p !== null) var cr = !0;
      else {
        var wt = n(a);
        wt !== null && Tl(g, wt.startTime - R), (cr = !1);
      }
      return cr;
    } finally {
      (p = null), (m = z), (y = !1);
    }
  }
  var P = !1,
    j = null,
    L = -1,
    H = 5,
    O = -1;
  function je() {
    return !(e.unstable_now() - O < H);
  }
  function hn() {
    if (j !== null) {
      var _ = e.unstable_now();
      O = _;
      var R = !0;
      try {
        R = j(!0, _);
      } finally {
        R ? mn() : ((P = !1), (j = null));
      }
    } else P = !1;
  }
  var mn;
  if (typeof c == "function")
    mn = function () {
      c(hn);
    };
  else if (typeof MessageChannel < "u") {
    var eu = new MessageChannel(),
      Hc = eu.port2;
    (eu.port1.onmessage = hn),
      (mn = function () {
        Hc.postMessage(null);
      });
  } else
    mn = function () {
      C(hn, 0);
    };
  function zl(_) {
    (j = _), P || ((P = !0), mn());
  }
  function Tl(_, R) {
    L = C(function () {
      _(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), zl(E));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = m;
      }
      var z = m;
      m = R;
      try {
        return _();
      } finally {
        m = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, R) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var z = m;
      m = _;
      try {
        return R();
      } finally {
        m = z;
      }
    }),
    (e.unstable_scheduleCallback = function (_, R, z) {
      var Q = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? Q + z : Q))
          : (z = Q),
        _)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = z + Z),
        (_ = {
          id: h++,
          callback: R,
          priorityLevel: _,
          startTime: z,
          expirationTime: Z,
          sortIndex: -1,
        }),
        z > Q
          ? ((_.sortIndex = z),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (S ? (f(L), (L = -1)) : (S = !0), Tl(g, z - Q)))
          : ((_.sortIndex = Z), t(s, _), w || y || ((w = !0), zl(E))),
        _
      );
    }),
    (e.unstable_shouldYield = je),
    (e.unstable_wrapCallback = function (_) {
      var R = m;
      return function () {
        var z = m;
        m = R;
        try {
          return _.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    });
})(Ts);
zs.exports = Ts;
var vf = zs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gf = x,
  we = vf;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Os = new Set(),
  Un = {};
function Ot(e, t) {
  nn(e, t), nn(e + "Capture", t);
}
function nn(e, t) {
  for (Un[e] = t, e = 0; e < t.length; e++) Os.add(t[e]);
}
var Ke = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  si = Object.prototype.hasOwnProperty,
  yf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  lu = {},
  iu = {};
function wf(e) {
  return si.call(iu, e)
    ? !0
    : si.call(lu, e)
    ? !1
    : yf.test(e)
    ? (iu[e] = !0)
    : ((lu[e] = !0), !1);
}
function Sf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function kf(e, t, n, r) {
  if (t === null || typeof t > "u" || Sf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ce(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var uo = /[\-:]([a-z])/g;
function so(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(uo, so);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(uo, so);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(uo, so);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ao(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (kf(t, n, l, r) && (n = null),
    r || l === null
      ? wf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pr = Symbol.for("react.element"),
  Ut = Symbol.for("react.portal"),
  $t = Symbol.for("react.fragment"),
  co = Symbol.for("react.strict_mode"),
  ai = Symbol.for("react.profiler"),
  Is = Symbol.for("react.provider"),
  Ms = Symbol.for("react.context"),
  fo = Symbol.for("react.forward_ref"),
  ci = Symbol.for("react.suspense"),
  fi = Symbol.for("react.suspense_list"),
  po = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  Fs = Symbol.for("react.offscreen"),
  ou = Symbol.iterator;
function vn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ou && e[ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  Ml;
function Cn(e) {
  if (Ml === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ml = (t && t[1]) || "";
    }
  return (
    `
` +
    Ml +
    e
  );
}
var Fl = !1;
function Dl(e, t) {
  if (!e || Fl) return "";
  Fl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Fl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Cn(e) : "";
}
function xf(e) {
  switch (e.tag) {
    case 5:
      return Cn(e.type);
    case 16:
      return Cn("Lazy");
    case 13:
      return Cn("Suspense");
    case 19:
      return Cn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Dl(e.type, !1)), e;
    case 11:
      return (e = Dl(e.type.render, !1)), e;
    case 1:
      return (e = Dl(e.type, !0)), e;
    default:
      return "";
  }
}
function di(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $t:
      return "Fragment";
    case Ut:
      return "Portal";
    case ai:
      return "Profiler";
    case co:
      return "StrictMode";
    case ci:
      return "Suspense";
    case fi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ms:
        return (e.displayName || "Context") + ".Consumer";
      case Is:
        return (e._context.displayName || "Context") + ".Provider";
      case fo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case po:
        return (
          (t = e.displayName || null), t !== null ? t : di(e.type) || "Memo"
        );
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return di(e(t));
        } catch {}
    }
  return null;
}
function Ef(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return di(t);
    case 8:
      return t === co ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ht(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ds(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Cf(e) {
  var t = Ds(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function hr(e) {
  e._valueTracker || (e._valueTracker = Cf(e));
}
function Us(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ds(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Vr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function pi(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function uu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ht(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function $s(e, t) {
  (t = t.checked), t != null && ao(e, "checked", t, !1);
}
function hi(e, t) {
  $s(e, t);
  var n = ht(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? mi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && mi(e, t.type, ht(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function su(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function mi(e, t, n) {
  (t !== "number" || Vr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Nn = Array.isArray;
function Jt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ht(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function vi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function au(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Nn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ht(n) };
}
function Bs(e, t) {
  var n = ht(t.value),
    r = ht(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function cu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function As(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function gi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? As(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var mr,
  Vs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        mr = mr || document.createElement("div"),
          mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = mr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function $n(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ln = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
  Nf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ln).forEach(function (e) {
  Nf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ln[t] = Ln[e]);
  });
});
function Ws(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ln.hasOwnProperty(e) && Ln[e])
    ? ("" + t).trim()
    : t + "px";
}
function Hs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ws(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var _f = V(
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
function yi(e, t) {
  if (t) {
    if (_f[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function wi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Si = null;
function ho(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ki = null,
  Zt = null,
  qt = null;
function fu(e) {
  if ((e = or(e))) {
    if (typeof ki != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = wl(t)), ki(e.stateNode, e.type, t));
  }
}
function Qs(e) {
  Zt ? (qt ? qt.push(e) : (qt = [e])) : (Zt = e);
}
function Ks() {
  if (Zt) {
    var e = Zt,
      t = qt;
    if (((qt = Zt = null), fu(e), t)) for (e = 0; e < t.length; e++) fu(t[e]);
  }
}
function Ys(e, t) {
  return e(t);
}
function Xs() {}
var Ul = !1;
function Gs(e, t, n) {
  if (Ul) return e(t, n);
  Ul = !0;
  try {
    return Ys(e, t, n);
  } finally {
    (Ul = !1), (Zt !== null || qt !== null) && (Xs(), Ks());
  }
}
function Bn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wl(n);
  if (r === null) return null;
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
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var xi = !1;
if (Ke)
  try {
    var gn = {};
    Object.defineProperty(gn, "passive", {
      get: function () {
        xi = !0;
      },
    }),
      window.addEventListener("test", gn, gn),
      window.removeEventListener("test", gn, gn);
  } catch {
    xi = !1;
  }
function Pf(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var Rn = !1,
  Wr = null,
  Hr = !1,
  Ei = null,
  jf = {
    onError: function (e) {
      (Rn = !0), (Wr = e);
    },
  };
function Lf(e, t, n, r, l, i, o, u, s) {
  (Rn = !1), (Wr = null), Pf.apply(jf, arguments);
}
function Rf(e, t, n, r, l, i, o, u, s) {
  if ((Lf.apply(this, arguments), Rn)) {
    if (Rn) {
      var a = Wr;
      (Rn = !1), (Wr = null);
    } else throw Error(k(198));
    Hr || ((Hr = !0), (Ei = a));
  }
}
function It(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Js(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function du(e) {
  if (It(e) !== e) throw Error(k(188));
}
function zf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = It(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return du(l), e;
        if (i === r) return du(l), t;
        i = i.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Zs(e) {
  return (e = zf(e)), e !== null ? qs(e) : null;
}
function qs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var bs = we.unstable_scheduleCallback,
  pu = we.unstable_cancelCallback,
  Tf = we.unstable_shouldYield,
  Of = we.unstable_requestPaint,
  K = we.unstable_now,
  If = we.unstable_getCurrentPriorityLevel,
  mo = we.unstable_ImmediatePriority,
  ea = we.unstable_UserBlockingPriority,
  Qr = we.unstable_NormalPriority,
  Mf = we.unstable_LowPriority,
  ta = we.unstable_IdlePriority,
  ml = null,
  $e = null;
function Ff(e) {
  if ($e && typeof $e.onCommitFiberRoot == "function")
    try {
      $e.onCommitFiberRoot(ml, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : $f,
  Df = Math.log,
  Uf = Math.LN2;
function $f(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Df(e) / Uf) | 0)) | 0;
}
var vr = 64,
  gr = 4194304;
function _n(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Kr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = _n(u)) : ((i &= o), i !== 0 && (r = _n(i)));
  } else (o = n & ~l), o !== 0 ? (r = _n(o)) : i !== 0 && (r = _n(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Bf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Af(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Oe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Bf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Ci(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function na() {
  var e = vr;
  return (vr <<= 1), !(vr & 4194240) && (vr = 64), e;
}
function $l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function lr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n);
}
function Vf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function vo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function ra(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var la,
  go,
  ia,
  oa,
  ua,
  Ni = !1,
  yr = [],
  it = null,
  ot = null,
  ut = null,
  An = new Map(),
  Vn = new Map(),
  et = [],
  Wf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function hu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      it = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      ut = null;
      break;
    case "pointerover":
    case "pointerout":
      An.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vn.delete(t.pointerId);
  }
}
function yn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = or(t)), t !== null && go(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Hf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (it = yn(it, e, t, n, r, l)), !0;
    case "dragenter":
      return (ot = yn(ot, e, t, n, r, l)), !0;
    case "mouseover":
      return (ut = yn(ut, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return An.set(i, yn(An.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Vn.set(i, yn(Vn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function sa(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = It(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Js(n)), t !== null)) {
          (e.blockedOn = t),
            ua(e.priority, function () {
              ia(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Tr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Si = r), n.target.dispatchEvent(r), (Si = null);
    } else return (t = or(n)), t !== null && go(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function mu(e, t, n) {
  Tr(e) && n.delete(t);
}
function Qf() {
  (Ni = !1),
    it !== null && Tr(it) && (it = null),
    ot !== null && Tr(ot) && (ot = null),
    ut !== null && Tr(ut) && (ut = null),
    An.forEach(mu),
    Vn.forEach(mu);
}
function wn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ni ||
      ((Ni = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, Qf)));
}
function Wn(e) {
  function t(l) {
    return wn(l, e);
  }
  if (0 < yr.length) {
    wn(yr[0], e);
    for (var n = 1; n < yr.length; n++) {
      var r = yr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    it !== null && wn(it, e),
      ot !== null && wn(ot, e),
      ut !== null && wn(ut, e),
      An.forEach(t),
      Vn.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    sa(n), n.blockedOn === null && et.shift();
}
var bt = Je.ReactCurrentBatchConfig,
  Yr = !0;
function Kf(e, t, n, r) {
  var l = M,
    i = bt.transition;
  bt.transition = null;
  try {
    (M = 1), yo(e, t, n, r);
  } finally {
    (M = l), (bt.transition = i);
  }
}
function Yf(e, t, n, r) {
  var l = M,
    i = bt.transition;
  bt.transition = null;
  try {
    (M = 4), yo(e, t, n, r);
  } finally {
    (M = l), (bt.transition = i);
  }
}
function yo(e, t, n, r) {
  if (Yr) {
    var l = _i(e, t, n, r);
    if (l === null) Gl(e, t, r, Xr, n), hu(e, r);
    else if (Hf(l, e, t, n, r)) r.stopPropagation();
    else if ((hu(e, r), t & 4 && -1 < Wf.indexOf(e))) {
      for (; l !== null; ) {
        var i = or(l);
        if (
          (i !== null && la(i),
          (i = _i(e, t, n, r)),
          i === null && Gl(e, t, r, Xr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Gl(e, t, r, null, n);
  }
}
var Xr = null;
function _i(e, t, n, r) {
  if (((Xr = null), (e = ho(r)), (e = Et(e)), e !== null))
    if (((t = It(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Js(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xr = e), null;
}
function aa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (If()) {
        case mo:
          return 1;
        case ea:
          return 4;
        case Qr:
        case Mf:
          return 16;
        case ta:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  wo = null,
  Or = null;
function ca() {
  if (Or) return Or;
  var e,
    t = wo,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Or = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ir(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function wr() {
  return !0;
}
function vu() {
  return !1;
}
function ke(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? wr
        : vu),
      (this.isPropagationStopped = vu),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = wr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = wr));
      },
      persist: function () {},
      isPersistent: wr,
    }),
    t
  );
}
var fn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  So = ke(fn),
  ir = V({}, fn, { view: 0, detail: 0 }),
  Xf = ke(ir),
  Bl,
  Al,
  Sn,
  vl = V({}, ir, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ko,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Sn &&
            (Sn && e.type === "mousemove"
              ? ((Bl = e.screenX - Sn.screenX), (Al = e.screenY - Sn.screenY))
              : (Al = Bl = 0),
            (Sn = e)),
          Bl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Al;
    },
  }),
  gu = ke(vl),
  Gf = V({}, vl, { dataTransfer: 0 }),
  Jf = ke(Gf),
  Zf = V({}, ir, { relatedTarget: 0 }),
  Vl = ke(Zf),
  qf = V({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bf = ke(qf),
  ed = V({}, fn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  td = ke(ed),
  nd = V({}, fn, { data: 0 }),
  yu = ke(nd),
  rd = {
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
  ld = {
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
  id = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function od(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = id[e]) ? !!t[e] : !1;
}
function ko() {
  return od;
}
var ud = V({}, ir, {
    key: function (e) {
      if (e.key) {
        var t = rd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ld[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ko,
    charCode: function (e) {
      return e.type === "keypress" ? Ir(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ir(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  sd = ke(ud),
  ad = V({}, vl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  wu = ke(ad),
  cd = V({}, ir, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ko,
  }),
  fd = ke(cd),
  dd = V({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  pd = ke(dd),
  hd = V({}, vl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
    deltaZ: 0,
    deltaMode: 0,
  }),
  md = ke(hd),
  vd = [9, 13, 27, 32],
  xo = Ke && "CompositionEvent" in window,
  zn = null;
Ke && "documentMode" in document && (zn = document.documentMode);
var gd = Ke && "TextEvent" in window && !zn,
  fa = Ke && (!xo || (zn && 8 < zn && 11 >= zn)),
  Su = " ",
  ku = !1;
function da(e, t) {
  switch (e) {
    case "keyup":
      return vd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function pa(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Bt = !1;
function yd(e, t) {
  switch (e) {
    case "compositionend":
      return pa(t);
    case "keypress":
      return t.which !== 32 ? null : ((ku = !0), Su);
    case "textInput":
      return (e = t.data), e === Su && ku ? null : e;
    default:
      return null;
  }
}
function wd(e, t) {
  if (Bt)
    return e === "compositionend" || (!xo && da(e, t))
      ? ((e = ca()), (Or = wo = nt = null), (Bt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return fa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Sd = {
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
function xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Sd[e.type] : t === "textarea";
}
function ha(e, t, n, r) {
  Qs(r),
    (t = Gr(t, "onChange")),
    0 < t.length &&
      ((n = new So("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Tn = null,
  Hn = null;
function kd(e) {
  Na(e, 0);
}
function gl(e) {
  var t = Wt(e);
  if (Us(t)) return e;
}
function xd(e, t) {
  if (e === "change") return t;
}
var ma = !1;
if (Ke) {
  var Wl;
  if (Ke) {
    var Hl = "oninput" in document;
    if (!Hl) {
      var Eu = document.createElement("div");
      Eu.setAttribute("oninput", "return;"),
        (Hl = typeof Eu.oninput == "function");
    }
    Wl = Hl;
  } else Wl = !1;
  ma = Wl && (!document.documentMode || 9 < document.documentMode);
}
function Cu() {
  Tn && (Tn.detachEvent("onpropertychange", va), (Hn = Tn = null));
}
function va(e) {
  if (e.propertyName === "value" && gl(Hn)) {
    var t = [];
    ha(t, Hn, e, ho(e)), Gs(kd, t);
  }
}
function Ed(e, t, n) {
  e === "focusin"
    ? (Cu(), (Tn = t), (Hn = n), Tn.attachEvent("onpropertychange", va))
    : e === "focusout" && Cu();
}
function Cd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gl(Hn);
}
function Nd(e, t) {
  if (e === "click") return gl(t);
}
function _d(e, t) {
  if (e === "input" || e === "change") return gl(t);
}
function Pd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Me = typeof Object.is == "function" ? Object.is : Pd;
function Qn(e, t) {
  if (Me(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!si.call(t, l) || !Me(e[l], t[l])) return !1;
  }
  return !0;
}
function Nu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _u(e, t) {
  var n = Nu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Nu(n);
  }
}
function ga(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ga(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ya() {
  for (var e = window, t = Vr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Vr(e.document);
  }
  return t;
}
function Eo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function jd(e) {
  var t = ya(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ga(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Eo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = _u(n, i));
        var o = _u(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ld = Ke && "documentMode" in document && 11 >= document.documentMode,
  At = null,
  Pi = null,
  On = null,
  ji = !1;
function Pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ji ||
    At == null ||
    At !== Vr(r) ||
    ((r = At),
    "selectionStart" in r && Eo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (On && Qn(On, r)) ||
      ((On = r),
      (r = Gr(Pi, "onSelect")),
      0 < r.length &&
        ((t = new So("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = At))));
}
function Sr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Vt = {
    animationend: Sr("Animation", "AnimationEnd"),
    animationiteration: Sr("Animation", "AnimationIteration"),
    animationstart: Sr("Animation", "AnimationStart"),
    transitionend: Sr("Transition", "TransitionEnd"),
  },
  Ql = {},
  wa = {};
Ke &&
  ((wa = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Vt.animationend.animation,
    delete Vt.animationiteration.animation,
    delete Vt.animationstart.animation),
  "TransitionEvent" in window || delete Vt.transitionend.transition);
function yl(e) {
  if (Ql[e]) return Ql[e];
  if (!Vt[e]) return e;
  var t = Vt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in wa) return (Ql[e] = t[n]);
  return e;
}
var Sa = yl("animationend"),
  ka = yl("animationiteration"),
  xa = yl("animationstart"),
  Ea = yl("transitionend"),
  Ca = new Map(),
  ju =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function vt(e, t) {
  Ca.set(e, t), Ot(t, [e]);
}
for (var Kl = 0; Kl < ju.length; Kl++) {
  var Yl = ju[Kl],
    Rd = Yl.toLowerCase(),
    zd = Yl[0].toUpperCase() + Yl.slice(1);
  vt(Rd, "on" + zd);
}
vt(Sa, "onAnimationEnd");
vt(ka, "onAnimationIteration");
vt(xa, "onAnimationStart");
vt("dblclick", "onDoubleClick");
vt("focusin", "onFocus");
vt("focusout", "onBlur");
vt(Ea, "onTransitionEnd");
nn("onMouseEnter", ["mouseout", "mouseover"]);
nn("onMouseLeave", ["mouseout", "mouseover"]);
nn("onPointerEnter", ["pointerout", "pointerover"]);
nn("onPointerLeave", ["pointerout", "pointerover"]);
Ot(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ot(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ot(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ot(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ot(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Pn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Td = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));
function Lu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Rf(r, t, void 0, e), (e.currentTarget = null);
}
function Na(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          Lu(l, u, a), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          Lu(l, u, a), (i = s);
        }
    }
  }
  if (Hr) throw ((e = Ei), (Hr = !1), (Ei = null), e);
}
function D(e, t) {
  var n = t[Oi];
  n === void 0 && (n = t[Oi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (_a(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), _a(n, e, r, t);
}
var kr = "_reactListening" + Math.random().toString(36).slice(2);
function Kn(e) {
  if (!e[kr]) {
    (e[kr] = !0),
      Os.forEach(function (n) {
        n !== "selectionchange" && (Td.has(n) || Xl(n, !1, e), Xl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[kr] || ((t[kr] = !0), Xl("selectionchange", !1, t));
  }
}
function _a(e, t, n, r) {
  switch (aa(t)) {
    case 1:
      var l = Kf;
      break;
    case 4:
      l = Yf;
      break;
    default:
      l = yo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !xi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Gl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Et(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Gs(function () {
    var a = i,
      h = ho(n),
      p = [];
    e: {
      var m = Ca.get(e);
      if (m !== void 0) {
        var y = So,
          w = e;
        switch (e) {
          case "keypress":
            if (Ir(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = sd;
            break;
          case "focusin":
            (w = "focus"), (y = Vl);
            break;
          case "focusout":
            (w = "blur"), (y = Vl);
            break;
          case "beforeblur":
          case "afterblur":
            y = Vl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = gu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Jf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = fd;
            break;
          case Sa:
          case ka:
          case xa:
            y = bf;
            break;
          case Ea:
            y = pd;
            break;
          case "scroll":
            y = Xf;
            break;
          case "wheel":
            y = md;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = td;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = wu;
        }
        var S = (t & 4) !== 0,
          C = !S && e === "scroll",
          f = S ? (m !== null ? m + "Capture" : null) : m;
        S = [];
        for (var c = a, d; c !== null; ) {
          d = c;
          var g = d.stateNode;
          if (
            (d.tag === 5 &&
              g !== null &&
              ((d = g),
              f !== null && ((g = Bn(c, f)), g != null && S.push(Yn(c, g, d)))),
            C)
          )
            break;
          c = c.return;
        }
        0 < S.length &&
          ((m = new y(m, w, null, n, h)), p.push({ event: m, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Si &&
            (w = n.relatedTarget || n.fromElement) &&
            (Et(w) || w[Ye]))
        )
          break e;
        if (
          (y || m) &&
          ((m =
            h.window === h
              ? h
              : (m = h.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = a),
              (w = w ? Et(w) : null),
              w !== null &&
                ((C = It(w)), w !== C || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = a)),
          y !== w)
        ) {
          if (
            ((S = gu),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = wu),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (C = y == null ? m : Wt(y)),
            (d = w == null ? m : Wt(w)),
            (m = new S(g, c + "leave", y, n, h)),
            (m.target = C),
            (m.relatedTarget = d),
            (g = null),
            Et(h) === a &&
              ((S = new S(f, c + "enter", w, n, h)),
              (S.target = d),
              (S.relatedTarget = C),
              (g = S)),
            (C = g),
            y && w)
          )
            t: {
              for (S = y, f = w, c = 0, d = S; d; d = Dt(d)) c++;
              for (d = 0, g = f; g; g = Dt(g)) d++;
              for (; 0 < c - d; ) (S = Dt(S)), c--;
              for (; 0 < d - c; ) (f = Dt(f)), d--;
              for (; c--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = Dt(S)), (f = Dt(f));
              }
              S = null;
            }
          else S = null;
          y !== null && Ru(p, m, y, S, !1),
            w !== null && C !== null && Ru(p, C, w, S, !0);
        }
      }
      e: {
        if (
          ((m = a ? Wt(a) : window),
          (y = m.nodeName && m.nodeName.toLowerCase()),
          y === "select" || (y === "input" && m.type === "file"))
        )
          var E = xd;
        else if (xu(m))
          if (ma) E = _d;
          else {
            E = Cd;
            var P = Ed;
          }
        else
          (y = m.nodeName) &&
            y.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = Nd);
        if (E && (E = E(e, a))) {
          ha(p, E, n, h);
          break e;
        }
        P && P(e, m, a),
          e === "focusout" &&
            (P = m._wrapperState) &&
            P.controlled &&
            m.type === "number" &&
            mi(m, "number", m.value);
      }
      switch (((P = a ? Wt(a) : window), e)) {
        case "focusin":
          (xu(P) || P.contentEditable === "true") &&
            ((At = P), (Pi = a), (On = null));
          break;
        case "focusout":
          On = Pi = At = null;
          break;
        case "mousedown":
          ji = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ji = !1), Pu(p, n, h);
          break;
        case "selectionchange":
          if (Ld) break;
        case "keydown":
        case "keyup":
          Pu(p, n, h);
      }
      var j;
      if (xo)
        e: {
          switch (e) {
            case "compositionstart":
              var L = "onCompositionStart";
              break e;
            case "compositionend":
              L = "onCompositionEnd";
              break e;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break e;
          }
          L = void 0;
        }
      else
        Bt
          ? da(e, n) && (L = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (L = "onCompositionStart");
      L &&
        (fa &&
          n.locale !== "ko" &&
          (Bt || L !== "onCompositionStart"
            ? L === "onCompositionEnd" && Bt && (j = ca())
            : ((nt = h),
              (wo = "value" in nt ? nt.value : nt.textContent),
              (Bt = !0))),
        (P = Gr(a, L)),
        0 < P.length &&
          ((L = new yu(L, e, null, n, h)),
          p.push({ event: L, listeners: P }),
          j ? (L.data = j) : ((j = pa(n)), j !== null && (L.data = j)))),
        (j = gd ? yd(e, n) : wd(e, n)) &&
          ((a = Gr(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new yu("onBeforeInput", "beforeinput", null, n, h)),
            p.push({ event: h, listeners: a }),
            (h.data = j)));
    }
    Na(p, t);
  });
}
function Yn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Bn(e, n)),
      i != null && r.unshift(Yn(e, i, l)),
      (i = Bn(e, t)),
      i != null && r.push(Yn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Dt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ru(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Bn(n, i)), s != null && o.unshift(Yn(n, s, u)))
        : l || ((s = Bn(n, i)), s != null && o.push(Yn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Od = /\r\n?/g,
  Id = /\u0000|\uFFFD/g;
function zu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Od,
      `
`
    )
    .replace(Id, "");
}
function xr(e, t, n) {
  if (((t = zu(t)), zu(e) !== t && n)) throw Error(k(425));
}
function Jr() {}
var Li = null,
  Ri = null;
function zi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ti = typeof setTimeout == "function" ? setTimeout : void 0,
  Md = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Tu = typeof Promise == "function" ? Promise : void 0,
  Fd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Tu < "u"
      ? function (e) {
          return Tu.resolve(null).then(e).catch(Dd);
        }
      : Ti;
function Dd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Jl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Wn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Wn(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ou(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var dn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + dn,
  Xn = "__reactProps$" + dn,
  Ye = "__reactContainer$" + dn,
  Oi = "__reactEvents$" + dn,
  Ud = "__reactListeners$" + dn,
  $d = "__reactHandles$" + dn;
function Et(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Ue])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ou(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Ou(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function or(e) {
  return (
    (e = e[Ue] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function wl(e) {
  return e[Xn] || null;
}
var Ii = [],
  Ht = -1;
function gt(e) {
  return { current: e };
}
function U(e) {
  0 > Ht || ((e.current = Ii[Ht]), (Ii[Ht] = null), Ht--);
}
function F(e, t) {
  Ht++, (Ii[Ht] = e.current), (e.current = t);
}
var mt = {},
  oe = gt(mt),
  pe = gt(!1),
  jt = mt;
function rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function Zr() {
  U(pe), U(oe);
}
function Iu(e, t, n) {
  if (oe.current !== mt) throw Error(k(168));
  F(oe, t), F(pe, n);
}
function Pa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Ef(e) || "Unknown", l));
  return V({}, n, r);
}
function qr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mt),
    (jt = oe.current),
    F(oe, e),
    F(pe, pe.current),
    !0
  );
}
function Mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Pa(e, t, jt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(pe),
      U(oe),
      F(oe, e))
    : U(pe),
    F(pe, n);
}
var Ve = null,
  Sl = !1,
  Zl = !1;
function ja(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
function Bd(e) {
  (Sl = !0), ja(e);
}
function yt() {
  if (!Zl && Ve !== null) {
    Zl = !0;
    var e = 0,
      t = M;
    try {
      var n = Ve;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ve = null), (Sl = !1);
    } catch (l) {
      throw (Ve !== null && (Ve = Ve.slice(e + 1)), bs(mo, yt), l);
    } finally {
      (M = t), (Zl = !1);
    }
  }
  return null;
}
var Qt = [],
  Kt = 0,
  br = null,
  el = 0,
  xe = [],
  Ee = 0,
  Lt = null,
  We = 1,
  He = "";
function kt(e, t) {
  (Qt[Kt++] = el), (Qt[Kt++] = br), (br = e), (el = t);
}
function La(e, t, n) {
  (xe[Ee++] = We), (xe[Ee++] = He), (xe[Ee++] = Lt), (Lt = e);
  var r = We;
  e = He;
  var l = 32 - Oe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (We = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (He = i + e);
  } else (We = (1 << i) | (n << l) | r), (He = e);
}
function Co(e) {
  e.return !== null && (kt(e, 1), La(e, 1, 0));
}
function No(e) {
  for (; e === br; )
    (br = Qt[--Kt]), (Qt[Kt] = null), (el = Qt[--Kt]), (Qt[Kt] = null);
  for (; e === Lt; )
    (Lt = xe[--Ee]),
      (xe[Ee] = null),
      (He = xe[--Ee]),
      (xe[Ee] = null),
      (We = xe[--Ee]),
      (xe[Ee] = null);
}
var ye = null,
  ge = null,
  $ = !1,
  Te = null;
function Ra(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Fu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ge = st(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Lt !== null ? { id: We, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Mi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fi(e) {
  if ($) {
    var t = ge;
    if (t) {
      var n = t;
      if (!Fu(e, t)) {
        if (Mi(e)) throw Error(k(418));
        t = st(n.nextSibling);
        var r = ye;
        t && Fu(e, t)
          ? Ra(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e));
      }
    } else {
      if (Mi(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (ye = e);
    }
  }
}
function Du(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function Er(e) {
  if (e !== ye) return !1;
  if (!$) return Du(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !zi(e.type, e.memoizedProps))),
    t && (t = ge))
  ) {
    if (Mi(e)) throw (za(), Error(k(418)));
    for (; t; ) Ra(e, t), (t = st(t.nextSibling));
  }
  if ((Du(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ge = st(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ge = null;
    }
  } else ge = ye ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function za() {
  for (var e = ge; e; ) e = st(e.nextSibling);
}
function ln() {
  (ge = ye = null), ($ = !1);
}
function _o(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var Ad = Je.ReactCurrentBatchConfig;
function kn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Cr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Uu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ta(e) {
  function t(f, c) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [c]), (f.flags |= 16)) : d.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = dt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < c ? ((f.flags |= 2), c) : d)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, d, g) {
    return c === null || c.tag !== 6
      ? ((c = li(d, f.mode, g)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function s(f, c, d, g) {
    var E = d.type;
    return E === $t
      ? h(f, c, d.props.children, g, d.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === qe &&
            Uu(E) === c.type))
      ? ((g = l(c, d.props)), (g.ref = kn(f, c, d)), (g.return = f), g)
      : ((g = Ar(d.type, d.key, d.props, null, f.mode, g)),
        (g.ref = kn(f, c, d)),
        (g.return = f),
        g);
  }
  function a(f, c, d, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = ii(d, f.mode, g)), (c.return = f), c)
      : ((c = l(c, d.children || [])), (c.return = f), c);
  }
  function h(f, c, d, g, E) {
    return c === null || c.tag !== 7
      ? ((c = Pt(d, f.mode, g, E)), (c.return = f), c)
      : ((c = l(c, d)), (c.return = f), c);
  }
  function p(f, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = li("" + c, f.mode, d)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case pr:
          return (
            (d = Ar(c.type, c.key, c.props, null, f.mode, d)),
            (d.ref = kn(f, null, c)),
            (d.return = f),
            d
          );
        case Ut:
          return (c = ii(c, f.mode, d)), (c.return = f), c;
        case qe:
          var g = c._init;
          return p(f, g(c._payload), d);
      }
      if (Nn(c) || vn(c))
        return (c = Pt(c, f.mode, d, null)), (c.return = f), c;
      Cr(f, c);
    }
    return null;
  }
  function m(f, c, d, g) {
    var E = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, c, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case pr:
          return d.key === E ? s(f, c, d, g) : null;
        case Ut:
          return d.key === E ? a(f, c, d, g) : null;
        case qe:
          return (E = d._init), m(f, c, E(d._payload), g);
      }
      if (Nn(d) || vn(d)) return E !== null ? null : h(f, c, d, g, null);
      Cr(f, d);
    }
    return null;
  }
  function y(f, c, d, g, E) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(d) || null), u(c, f, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case pr:
          return (f = f.get(g.key === null ? d : g.key) || null), s(c, f, g, E);
        case Ut:
          return (f = f.get(g.key === null ? d : g.key) || null), a(c, f, g, E);
        case qe:
          var P = g._init;
          return y(f, c, d, P(g._payload), E);
      }
      if (Nn(g) || vn(g)) return (f = f.get(d) || null), h(c, f, g, E, null);
      Cr(c, g);
    }
    return null;
  }
  function w(f, c, d, g) {
    for (
      var E = null, P = null, j = c, L = (c = 0), H = null;
      j !== null && L < d.length;
      L++
    ) {
      j.index > L ? ((H = j), (j = null)) : (H = j.sibling);
      var O = m(f, j, d[L], g);
      if (O === null) {
        j === null && (j = H);
        break;
      }
      e && j && O.alternate === null && t(f, j),
        (c = i(O, c, L)),
        P === null ? (E = O) : (P.sibling = O),
        (P = O),
        (j = H);
    }
    if (L === d.length) return n(f, j), $ && kt(f, L), E;
    if (j === null) {
      for (; L < d.length; L++)
        (j = p(f, d[L], g)),
          j !== null &&
            ((c = i(j, c, L)), P === null ? (E = j) : (P.sibling = j), (P = j));
      return $ && kt(f, L), E;
    }
    for (j = r(f, j); L < d.length; L++)
      (H = y(j, f, L, d[L], g)),
        H !== null &&
          (e && H.alternate !== null && j.delete(H.key === null ? L : H.key),
          (c = i(H, c, L)),
          P === null ? (E = H) : (P.sibling = H),
          (P = H));
    return (
      e &&
        j.forEach(function (je) {
          return t(f, je);
        }),
      $ && kt(f, L),
      E
    );
  }
  function S(f, c, d, g) {
    var E = vn(d);
    if (typeof E != "function") throw Error(k(150));
    if (((d = E.call(d)), d == null)) throw Error(k(151));
    for (
      var P = (E = null), j = c, L = (c = 0), H = null, O = d.next();
      j !== null && !O.done;
      L++, O = d.next()
    ) {
      j.index > L ? ((H = j), (j = null)) : (H = j.sibling);
      var je = m(f, j, O.value, g);
      if (je === null) {
        j === null && (j = H);
        break;
      }
      e && j && je.alternate === null && t(f, j),
        (c = i(je, c, L)),
        P === null ? (E = je) : (P.sibling = je),
        (P = je),
        (j = H);
    }
    if (O.done) return n(f, j), $ && kt(f, L), E;
    if (j === null) {
      for (; !O.done; L++, O = d.next())
        (O = p(f, O.value, g)),
          O !== null &&
            ((c = i(O, c, L)), P === null ? (E = O) : (P.sibling = O), (P = O));
      return $ && kt(f, L), E;
    }
    for (j = r(f, j); !O.done; L++, O = d.next())
      (O = y(j, f, L, O.value, g)),
        O !== null &&
          (e && O.alternate !== null && j.delete(O.key === null ? L : O.key),
          (c = i(O, c, L)),
          P === null ? (E = O) : (P.sibling = O),
          (P = O));
    return (
      e &&
        j.forEach(function (hn) {
          return t(f, hn);
        }),
      $ && kt(f, L),
      E
    );
  }
  function C(f, c, d, g) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === $t &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case pr:
          e: {
            for (var E = d.key, P = c; P !== null; ) {
              if (P.key === E) {
                if (((E = d.type), E === $t)) {
                  if (P.tag === 7) {
                    n(f, P.sibling),
                      (c = l(P, d.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  P.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === qe &&
                    Uu(E) === P.type)
                ) {
                  n(f, P.sibling),
                    (c = l(P, d.props)),
                    (c.ref = kn(f, P, d)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            d.type === $t
              ? ((c = Pt(d.props.children, f.mode, g, d.key)),
                (c.return = f),
                (f = c))
              : ((g = Ar(d.type, d.key, d.props, null, f.mode, g)),
                (g.ref = kn(f, c, d)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case Ut:
          e: {
            for (P = d.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, d.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = ii(d, f.mode, g)), (c.return = f), (f = c);
          }
          return o(f);
        case qe:
          return (P = d._init), C(f, c, P(d._payload), g);
      }
      if (Nn(d)) return w(f, c, d, g);
      if (vn(d)) return S(f, c, d, g);
      Cr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, d)), (c.return = f), (f = c))
          : (n(f, c), (c = li(d, f.mode, g)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return C;
}
var on = Ta(!0),
  Oa = Ta(!1),
  tl = gt(null),
  nl = null,
  Yt = null,
  Po = null;
function jo() {
  Po = Yt = nl = null;
}
function Lo(e) {
  var t = tl.current;
  U(tl), (e._currentValue = t);
}
function Di(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function en(e, t) {
  (nl = e),
    (Po = Yt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (de = !0), (e.firstContext = null));
}
function _e(e) {
  var t = e._currentValue;
  if (Po !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yt === null)) {
      if (nl === null) throw Error(k(308));
      (Yt = e), (nl.dependencies = { lanes: 0, firstContext: e });
    } else Yt = Yt.next = e;
  return t;
}
var Ct = null;
function Ro(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function Ia(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ro(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Xe(e, r)
  );
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function zo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ma(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Xe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ro(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Xe(e, n)
  );
}
function Mr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vo(e, n);
  }
}
function $u(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function rl(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== o &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var p = l.baseState;
    (o = 0), (h = a = s = null), (u = i);
    do {
      var m = u.lane,
        y = u.eventTime;
      if ((r & m) === m) {
        h !== null &&
          (h = h.next =
            {
              eventTime: y,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            S = u;
          switch (((m = t), (y = n), S.tag)) {
            case 1:
              if (((w = S.payload), typeof w == "function")) {
                p = w.call(y, p, m);
                break e;
              }
              p = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = S.payload),
                (m = typeof w == "function" ? w.call(y, p, m) : w),
                m == null)
              )
                break e;
              p = V({}, p, m);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (y = {
          eventTime: y,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = y), (s = p)) : (h = h.next = y),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = p),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (zt |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function Bu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var ur = {},
  Be = gt(ur),
  Gn = gt(ur),
  Jn = gt(ur);
function Nt(e) {
  if (e === ur) throw Error(k(174));
  return e;
}
function To(e, t) {
  switch ((F(Jn, t), F(Gn, e), F(Be, ur), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : gi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = gi(t, e));
  }
  U(Be), F(Be, t);
}
function un() {
  U(Be), U(Gn), U(Jn);
}
function Fa(e) {
  Nt(Jn.current);
  var t = Nt(Be.current),
    n = gi(t, e.type);
  t !== n && (F(Gn, e), F(Be, n));
}
function Oo(e) {
  Gn.current === e && (U(Be), U(Gn));
}
var B = gt(0);
function ll(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ql = [];
function Io() {
  for (var e = 0; e < ql.length; e++)
    ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var Fr = Je.ReactCurrentDispatcher,
  bl = Je.ReactCurrentBatchConfig,
  Rt = 0,
  A = null,
  G = null,
  q = null,
  il = !1,
  In = !1,
  Zn = 0,
  Vd = 0;
function re() {
  throw Error(k(321));
}
function Mo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Me(e[n], t[n])) return !1;
  return !0;
}
function Fo(e, t, n, r, l, i) {
  if (
    ((Rt = i),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Fr.current = e === null || e.memoizedState === null ? Kd : Yd),
    (e = n(r, l)),
    In)
  ) {
    i = 0;
    do {
      if (((In = !1), (Zn = 0), 25 <= i)) throw Error(k(301));
      (i += 1),
        (q = G = null),
        (t.updateQueue = null),
        (Fr.current = Xd),
        (e = n(r, l));
    } while (In);
  }
  if (
    ((Fr.current = ol),
    (t = G !== null && G.next !== null),
    (Rt = 0),
    (q = G = A = null),
    (il = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Do() {
  var e = Zn !== 0;
  return (Zn = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (A.memoizedState = q = e) : (q = q.next = e), q;
}
function Pe() {
  if (G === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = q === null ? A.memoizedState : q.next;
  if (t !== null) (q = t), (G = e);
  else {
    if (e === null) throw Error(k(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      q === null ? (A.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ei(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = G,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      a = i;
    do {
      var h = a.lane;
      if ((Rt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = p), (o = r)) : (s = s.next = p),
          (A.lanes |= h),
          (zt |= h);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (o = r) : (s.next = u),
      Me(r, t.memoizedState) || (de = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (A.lanes |= i), (zt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ti(e) {
  var t = Pe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Me(i, t.memoizedState) || (de = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Da() {}
function Ua(e, t) {
  var n = A,
    r = Pe(),
    l = t(),
    i = !Me(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (de = !0)),
    (r = r.queue),
    Uo(Aa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      bn(9, Ba.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(k(349));
    Rt & 30 || $a(n, t, l);
  }
  return l;
}
function $a(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ba(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Va(t) && Wa(e);
}
function Aa(e, t, n) {
  return n(function () {
    Va(t) && Wa(e);
  });
}
function Va(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Me(e, n);
  } catch {
    return !0;
  }
}
function Wa(e) {
  var t = Xe(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function Au(e) {
  var t = De();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: qn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Qd.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function bn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = A.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ha() {
  return Pe().memoizedState;
}
function Dr(e, t, n, r) {
  var l = De();
  (A.flags |= e),
    (l.memoizedState = bn(1 | t, n, void 0, r === void 0 ? null : r));
}
function kl(e, t, n, r) {
  var l = Pe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (G !== null) {
    var o = G.memoizedState;
    if (((i = o.destroy), r !== null && Mo(r, o.deps))) {
      l.memoizedState = bn(t, n, i, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = bn(1 | t, n, i, r));
}
function Vu(e, t) {
  return Dr(8390656, 8, e, t);
}
function Uo(e, t) {
  return kl(2048, 8, e, t);
}
function Qa(e, t) {
  return kl(4, 2, e, t);
}
function Ka(e, t) {
  return kl(4, 4, e, t);
}
function Ya(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Xa(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), kl(4, 4, Ya.bind(null, t, e), n)
  );
}
function $o() {}
function Ga(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ja(e, t) {
  var n = Pe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Mo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Za(e, t, n) {
  return Rt & 21
    ? (Me(n, t) || ((n = na()), (A.lanes |= n), (zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (de = !0)), (e.memoizedState = n));
}
function Wd(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = bl.transition;
  bl.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (bl.transition = r);
  }
}
function qa() {
  return Pe().memoizedState;
}
function Hd(e, t, n) {
  var r = ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ba(e))
  )
    ec(t, n);
  else if (((n = Ia(e, t, n, r)), n !== null)) {
    var l = se();
    Ie(n, e, r, l), tc(n, t, r);
  }
}
function Qd(e, t, n) {
  var r = ft(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ba(e)) ec(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Me(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Ro(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ia(e, t, l, r)),
      n !== null && ((l = se()), Ie(n, e, r, l), tc(n, t, r));
  }
}
function ba(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function ec(e, t) {
  In = il = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function tc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), vo(e, n);
  }
}
var ol = {
    readContext: _e,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Kd = {
    readContext: _e,
    useCallback: function (e, t) {
      return (De().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _e,
    useEffect: Vu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Dr(4194308, 4, Ya.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Dr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Dr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = De();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = De();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Hd.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = De();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Au,
    useDebugValue: $o,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = Au(!1),
        t = e[0];
      return (e = Wd.bind(null, e[1])), (De().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = De();
      if ($) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(k(349));
        Rt & 30 || $a(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Vu(Aa.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        bn(9, Ba.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = De(),
        t = b.identifierPrefix;
      if ($) {
        var n = He,
          r = We;
        (n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Zn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Vd++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Yd = {
    readContext: _e,
    useCallback: Ga,
    useContext: _e,
    useEffect: Uo,
    useImperativeHandle: Xa,
    useInsertionEffect: Qa,
    useLayoutEffect: Ka,
    useMemo: Ja,
    useReducer: ei,
    useRef: Ha,
    useState: function () {
      return ei(qn);
    },
    useDebugValue: $o,
    useDeferredValue: function (e) {
      var t = Pe();
      return Za(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = ei(qn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: Da,
    useSyncExternalStore: Ua,
    useId: qa,
    unstable_isNewReconciler: !1,
  },
  Xd = {
    readContext: _e,
    useCallback: Ga,
    useContext: _e,
    useEffect: Uo,
    useImperativeHandle: Xa,
    useInsertionEffect: Qa,
    useLayoutEffect: Ka,
    useMemo: Ja,
    useReducer: ti,
    useRef: Ha,
    useState: function () {
      return ti(qn);
    },
    useDebugValue: $o,
    useDeferredValue: function (e) {
      var t = Pe();
      return G === null ? (t.memoizedState = e) : Za(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = ti(qn)[0],
        t = Pe().memoizedState;
      return [e, t];
    },
    useMutableSource: Da,
    useSyncExternalStore: Ua,
    useId: qa,
    unstable_isNewReconciler: !1,
  };
function Re(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ui(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? It(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      i = Qe(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (Ie(t, e, l, r), Mr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = se(),
      l = ft(e),
      i = Qe(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = at(e, i, l)),
      t !== null && (Ie(t, e, l, r), Mr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = se(),
      r = ft(e),
      l = Qe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = at(e, l, r)),
      t !== null && (Ie(t, e, r, n), Mr(t, e, r));
  },
};
function Wu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Qn(n, r) || !Qn(l, i)
      : !0
  );
}
function nc(e, t, n) {
  var r = !1,
    l = mt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = _e(i))
      : ((l = he(t) ? jt : oe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? rn(e, l) : mt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = xl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Hu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && xl.enqueueReplaceState(t, t.state, null);
}
function $i(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), zo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = _e(i))
    : ((i = he(t) ? jt : oe.current), (l.context = rn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ui(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && xl.enqueueReplaceState(l, l.state, null),
      rl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function sn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += xf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ni(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Bi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Gd = typeof WeakMap == "function" ? WeakMap : Map;
function rc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      sl || ((sl = !0), (Ji = r)), Bi(e, t);
    }),
    n
  );
}
function lc(e, t, n) {
  (n = Qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Bi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Bi(e, t),
          typeof r != "function" &&
            (ct === null ? (ct = new Set([this])) : ct.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Qu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gd();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = ap.bind(null, e, t, n)), t.then(e, e));
}
function Ku(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Yu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Qe(-1, 1)), (t.tag = 2), at(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Jd = Je.ReactCurrentOwner,
  de = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Oa(t, null, n, r) : on(t, e.child, n, r);
}
function Xu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    en(t, l),
    (r = Fo(e, t, n, r, i, l)),
    (n = Do()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : ($ && n && Co(t), (t.flags |= 1), ue(e, t, r, l), t.child)
  );
}
function Gu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Yo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ic(e, t, i, r, l))
      : ((e = Ar(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Qn), n(o, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ic(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Qn(i, r) && e.ref === t.ref)
      if (((de = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (de = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return Ai(e, t, n, r, l);
}
function oc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        F(Gt, ve),
        (ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          F(Gt, ve),
          (ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        F(Gt, ve),
        (ve |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      F(Gt, ve),
      (ve |= r);
  return ue(e, t, l, n), t.child;
}
function uc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ai(e, t, n, r, l) {
  var i = he(n) ? jt : oe.current;
  return (
    (i = rn(t, i)),
    en(t, l),
    (n = Fo(e, t, n, r, i, l)),
    (r = Do()),
    e !== null && !de
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : ($ && r && Co(t), (t.flags |= 1), ue(e, t, n, l), t.child)
  );
}
function Ju(e, t, n, r, l) {
  if (he(n)) {
    var i = !0;
    qr(t);
  } else i = !1;
  if ((en(t, l), t.stateNode === null))
    Ur(e, t), nc(t, n, r), $i(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = _e(a))
      : ((a = he(n) ? jt : oe.current), (a = rn(t, a)));
    var h = n.getDerivedStateFromProps,
      p =
        typeof h == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Hu(t, o, r, a)),
      (be = !1);
    var m = t.memoizedState;
    (o.state = m),
      rl(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || pe.current || be
        ? (typeof h == "function" && (Ui(t, n, h, r), (s = t.memoizedState)),
          (u = be || Wu(t, n, u, r, m, s, a))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = a),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Ma(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Re(t.type, u)),
      (o.props = a),
      (p = t.pendingProps),
      (m = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = _e(s))
        : ((s = he(n) ? jt : oe.current), (s = rn(t, s)));
    var y = n.getDerivedStateFromProps;
    (h =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== p || m !== s) && Hu(t, o, r, s)),
      (be = !1),
      (m = t.memoizedState),
      (o.state = m),
      rl(t, r, o, l);
    var w = t.memoizedState;
    u !== p || m !== w || pe.current || be
      ? (typeof y == "function" && (Ui(t, n, y, r), (w = t.memoizedState)),
        (a = be || Wu(t, n, a, r, m, w, s) || !1)
          ? (h ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, w, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, w, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (o.props = r),
        (o.state = w),
        (o.context = s),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Vi(e, t, n, r, i, l);
}
function Vi(e, t, n, r, l, i) {
  uc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Mu(t, n, !1), Ge(e, t, i);
  (r = t.stateNode), (Jd.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = on(t, e.child, null, i)), (t.child = on(t, null, u, i)))
      : ue(e, t, u, i),
    (t.memoizedState = r.state),
    l && Mu(t, n, !0),
    t.child
  );
}
function sc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Iu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Iu(e, t.context, !1),
    To(e, t.containerInfo);
}
function Zu(e, t, n, r, l) {
  return ln(), _o(l), (t.flags |= 256), ue(e, t, n, r), t.child;
}
var Wi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Hi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ac(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    F(B, l & 1),
    e === null)
  )
    return (
      Fi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Nl(o, r, 0, null)),
              (e = Pt(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Hi(n)),
              (t.memoizedState = Wi),
              e)
            : Bo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Zd(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = dt(u, i)) : ((i = Pt(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Hi(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Wi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = dt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Bo(e, t) {
  return (
    (t = Nl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nr(e, t, n, r) {
  return (
    r !== null && _o(r),
    on(t, e.child, null, n),
    (e = Bo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Zd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ni(Error(k(422)))), Nr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Nl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Pt(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && on(t, e.child, null, o),
        (t.child.memoizedState = Hi(o)),
        (t.memoizedState = Wi),
        i);
  if (!(t.mode & 1)) return Nr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(k(419))), (r = ni(i, r, void 0)), Nr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), de || u)) {
    if (((r = b), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Xe(e, l), Ie(r, e, l, -1));
    }
    return Ko(), (r = ni(Error(k(421)))), Nr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = cp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (ge = st(l.nextSibling)),
      (ye = t),
      ($ = !0),
      (Te = null),
      e !== null &&
        ((xe[Ee++] = We),
        (xe[Ee++] = He),
        (xe[Ee++] = Lt),
        (We = e.id),
        (He = e.overflow),
        (Lt = t)),
      (t = Bo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function qu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Di(e.return, t, n);
}
function ri(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function cc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ue(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qu(e, n, t);
        else if (e.tag === 19) qu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((F(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ll(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ri(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ll(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ri(t, !0, n, null, i);
        break;
      case "together":
        ri(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ur(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function qd(e, t, n) {
  switch (t.tag) {
    case 3:
      sc(t), ln();
      break;
    case 5:
      Fa(t);
      break;
    case 1:
      he(t.type) && qr(t);
      break;
    case 4:
      To(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      F(tl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (F(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ac(e, t, n)
          : (F(B, B.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null);
      F(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return cc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        F(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), oc(e, t, n);
  }
  return Ge(e, t, n);
}
var fc, Qi, dc, pc;
fc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Qi = function () {};
dc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Nt(Be.current);
    var i = null;
    switch (n) {
      case "input":
        (l = pi(e, l)), (r = pi(e, r)), (i = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = vi(e, l)), (r = vi(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Jr);
    }
    yi(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Un.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Un.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && D("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
pc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bd(e, t, n) {
  var r = t.pendingProps;
  switch ((No(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return he(t.type) && Zr(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        un(),
        U(pe),
        U(oe),
        Io(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Er(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Te !== null && (bi(Te), (Te = null)))),
        Qi(e, t),
        le(t),
        null
      );
    case 5:
      Oo(t);
      var l = Nt(Jn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        dc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return le(t), null;
        }
        if (((e = Nt(Be.current)), Er(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ue] = t), (r[Xn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Pn.length; l++) D(Pn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              uu(r, i), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              au(r, i), D("invalid", r);
          }
          yi(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      xr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      xr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Un.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  D("scroll", r);
            }
          switch (n) {
            case "input":
              hr(r), su(r, i, !0);
              break;
            case "textarea":
              hr(r), cu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Jr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = As(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Ue] = t),
            (e[Xn] = r),
            fc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = wi(n, r)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Pn.length; l++) D(Pn[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                uu(e, r), (l = pi(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                au(e, r), (l = vi(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            yi(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Hs(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Vs(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && $n(e, s)
                    : typeof s == "number" && $n(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Un.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && D("scroll", e)
                      : s != null && ao(e, i, s, o));
              }
            switch (n) {
              case "input":
                hr(e), su(e, r, !1);
                break;
              case "textarea":
                hr(e), cu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ht(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Jt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Jt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Jr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) pc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = Nt(Jn.current)), Nt(Be.current), Er(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (i = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                xr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (U(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && ge !== null && t.mode & 1 && !(t.flags & 128))
          za(), ln(), (t.flags |= 98560), (i = !1);
        else if (((i = Er(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(k(317));
            i[Ue] = t;
          } else
            ln(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (i = !1);
        } else Te !== null && (bi(Te), (Te = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? J === 0 && (J = 3) : Ko())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        un(), Qi(e, t), e === null && Kn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return Lo(t.type._context), le(t), null;
    case 17:
      return he(t.type) && Zr(), le(t), null;
    case 19:
      if ((U(B), (i = t.memoizedState), i === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) xn(i, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ll(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    xn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return F(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            K() > an &&
            ((t.flags |= 128), (r = !0), xn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ll(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !$)
            )
              return le(t), null;
          } else
            2 * K() - i.renderingStartTime > an &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = K()),
          (t.sibling = null),
          (n = B.current),
          F(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Qo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function ep(e, t) {
  switch ((No(t), t.tag)) {
    case 1:
      return (
        he(t.type) && Zr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        un(),
        U(pe),
        U(oe),
        Io(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Oo(t), null;
    case 13:
      if ((U(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        ln();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(B), null;
    case 4:
      return un(), null;
    case 10:
      return Lo(t.type._context), null;
    case 22:
    case 23:
      return Qo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var _r = !1,
  ie = !1,
  tp = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function Xt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function Ki(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var bu = !1;
function np(e, t) {
  if (((Li = Yr), (e = ya()), Eo(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var y;
              p !== n || (l !== 0 && p.nodeType !== 3) || (u = o + l),
                p !== i || (r !== 0 && p.nodeType !== 3) || (s = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              (m = p), (p = y);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++a === l && (u = o),
                m === i && ++h === r && (s = o),
                (y = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = y;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ri = { focusedElem: e, selectionRange: n }, Yr = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps,
                    C = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Re(t.type, S),
                      C
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (g) {
          W(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (w = bu), (bu = !1), w;
}
function Mn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ki(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function El(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Yi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function hc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), hc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ue], delete t[Xn], delete t[Oi], delete t[Ud], delete t[$d])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function mc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function es(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || mc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Xi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Jr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xi(e, t, n), e = e.sibling; e !== null; ) Xi(e, t, n), (e = e.sibling);
}
function Gi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gi(e, t, n), e = e.sibling; e !== null; ) Gi(e, t, n), (e = e.sibling);
}
var ee = null,
  ze = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) vc(e, t, n), (n = n.sibling);
}
function vc(e, t, n) {
  if ($e && typeof $e.onCommitFiberUnmount == "function")
    try {
      $e.onCommitFiberUnmount(ml, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Xt(n, t);
    case 6:
      var r = ee,
        l = ze;
      (ee = null),
        Ze(e, t, n),
        (ee = r),
        (ze = l),
        ee !== null &&
          (ze
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (ze
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? Jl(e.parentNode, n)
              : e.nodeType === 1 && Jl(e, n),
            Wn(e))
          : Jl(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = ze),
        (ee = n.stateNode.containerInfo),
        (ze = !0),
        Ze(e, t, n),
        (ee = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ki(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        (Xt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          W(n, t, u);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), Ze(e, t, n), (ie = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function ts(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new tp()),
      t.forEach(function (r) {
        var l = fp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (ze = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(k(160));
        vc(i, o, l), (ee = null), (ze = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        W(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) gc(t, e), (t = t.sibling);
}
function gc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), Fe(e), r & 4)) {
        try {
          Mn(3, e, e.return), El(3, e);
        } catch (S) {
          W(e, e.return, S);
        }
        try {
          Mn(5, e, e.return);
        } catch (S) {
          W(e, e.return, S);
        }
      }
      break;
    case 1:
      Le(t, e), Fe(e), r & 512 && n !== null && Xt(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        Fe(e),
        r & 512 && n !== null && Xt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          $n(l, "");
        } catch (S) {
          W(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && $s(l, i),
              wi(u, o);
            var a = wi(u, i);
            for (o = 0; o < s.length; o += 2) {
              var h = s[o],
                p = s[o + 1];
              h === "style"
                ? Hs(l, p)
                : h === "dangerouslySetInnerHTML"
                ? Vs(l, p)
                : h === "children"
                ? $n(l, p)
                : ao(l, h, p, a);
            }
            switch (u) {
              case "input":
                hi(l, i);
                break;
              case "textarea":
                Bs(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? Jt(l, !!i.multiple, y, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Jt(l, !!i.multiple, i.defaultValue, !0)
                      : Jt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Xn] = i;
          } catch (S) {
            W(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((Le(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (S) {
          W(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wn(t.containerInfo);
        } catch (S) {
          W(e, e.return, S);
        }
      break;
    case 4:
      Le(t, e), Fe(e);
      break;
    case 13:
      Le(t, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Wo = K())),
        r & 4 && ts(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (a = ie) || h), Le(t, e), (ie = a)) : Le(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (N = e, h = e.child; h !== null; ) {
            for (p = N = h; N !== null; ) {
              switch (((m = N), (y = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mn(4, m, m.return);
                  break;
                case 1:
                  Xt(m, m.return);
                  var w = m.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (S) {
                      W(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Xt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    rs(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = m), (N = y)) : rs(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = e; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (l = p.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = p.stateNode),
                      (s = p.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Ws("display", o)));
              } catch (S) {
                W(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (S) {
                W(e, e.return, S);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), Fe(e), r & 4 && ts(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), Fe(e);
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (mc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && ($n(l, ""), (r.flags &= -33));
          var i = es(e);
          Gi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = es(e);
          Xi(e, u, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function rp(e, t, n) {
  (N = e), yc(e);
}
function yc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || _r;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ie;
        u = _r;
        var a = ie;
        if (((_r = o), (ie = s) && !a))
          for (N = l; N !== null; )
            (o = N),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? ls(l)
                : s !== null
                ? ((s.return = o), (N = s))
                : ls(l);
        for (; i !== null; ) (N = i), yc(i), (i = i.sibling);
        (N = l), (_r = u), (ie = a);
      }
      ns(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (N = i)) : ns(e);
  }
}
function ns(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || El(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Re(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Bu(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Bu(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && Wn(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        ie || (t.flags & 512 && Yi(t));
      } catch (m) {
        W(t, t.return, m);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function rs(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function ls(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            El(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var i = t.return;
          try {
            Yi(t);
          } catch (s) {
            W(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Yi(t);
          } catch (s) {
            W(t, o, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (N = u);
      break;
    }
    N = t.return;
  }
}
var lp = Math.ceil,
  ul = Je.ReactCurrentDispatcher,
  Ao = Je.ReactCurrentOwner,
  Ne = Je.ReactCurrentBatchConfig,
  I = 0,
  b = null,
  Y = null,
  te = 0,
  ve = 0,
  Gt = gt(0),
  J = 0,
  er = null,
  zt = 0,
  Cl = 0,
  Vo = 0,
  Fn = null,
  fe = null,
  Wo = 0,
  an = 1 / 0,
  Ae = null,
  sl = !1,
  Ji = null,
  ct = null,
  Pr = !1,
  rt = null,
  al = 0,
  Dn = 0,
  Zi = null,
  $r = -1,
  Br = 0;
function se() {
  return I & 6 ? K() : $r !== -1 ? $r : ($r = K());
}
function ft(e) {
  return e.mode & 1
    ? I & 2 && te !== 0
      ? te & -te
      : Ad.transition !== null
      ? (Br === 0 && (Br = na()), Br)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : aa(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < Dn) throw ((Dn = 0), (Zi = null), Error(k(185)));
  lr(e, n, r),
    (!(I & 2) || e !== b) &&
      (e === b && (!(I & 2) && (Cl |= n), J === 4 && tt(e, te)),
      me(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((an = K() + 500), Sl && yt()));
}
function me(e, t) {
  var n = e.callbackNode;
  Af(e, t);
  var r = Kr(e, e === b ? te : 0);
  if (r === 0)
    n !== null && pu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && pu(n), t === 1))
      e.tag === 0 ? Bd(is.bind(null, e)) : ja(is.bind(null, e)),
        Fd(function () {
          !(I & 6) && yt();
        }),
        (n = null);
    else {
      switch (ra(r)) {
        case 1:
          n = mo;
          break;
        case 4:
          n = ea;
          break;
        case 16:
          n = Qr;
          break;
        case 536870912:
          n = ta;
          break;
        default:
          n = Qr;
      }
      n = _c(n, wc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function wc(e, t) {
  if ((($r = -1), (Br = 0), I & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (tn() && e.callbackNode !== n) return null;
  var r = Kr(e, e === b ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = cl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var i = kc();
    (b !== e || te !== t) && ((Ae = null), (an = K() + 500), _t(e, t));
    do
      try {
        up();
        break;
      } catch (u) {
        Sc(e, u);
      }
    while (!0);
    jo(),
      (ul.current = i),
      (I = l),
      Y !== null ? (t = 0) : ((b = null), (te = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ci(e)), l !== 0 && ((r = l), (t = qi(e, l)))), t === 1)
    )
      throw ((n = er), _t(e, 0), tt(e, r), me(e, K()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !ip(l) &&
          ((t = cl(e, r)),
          t === 2 && ((i = Ci(e)), i !== 0 && ((r = i), (t = qi(e, i)))),
          t === 1))
      )
        throw ((n = er), _t(e, 0), tt(e, r), me(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          xt(e, fe, Ae);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = Wo + 500 - K()), 10 < t))
          ) {
            if (Kr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              se(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ti(xt.bind(null, e, fe, Ae), t);
            break;
          }
          xt(e, fe, Ae);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * lp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ti(xt.bind(null, e, fe, Ae), r);
            break;
          }
          xt(e, fe, Ae);
          break;
        case 5:
          xt(e, fe, Ae);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return me(e, K()), e.callbackNode === n ? wc.bind(null, e) : null;
}
function qi(e, t) {
  var n = Fn;
  return (
    e.current.memoizedState.isDehydrated && (_t(e, t).flags |= 256),
    (e = cl(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && bi(t)),
    e
  );
}
function bi(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function ip(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (
    t &= ~Vo,
      t &= ~Cl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function is(e) {
  if (I & 6) throw Error(k(327));
  tn();
  var t = Kr(e, 0);
  if (!(t & 1)) return me(e, K()), null;
  var n = cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ci(e);
    r !== 0 && ((t = r), (n = qi(e, r)));
  }
  if (n === 1) throw ((n = er), _t(e, 0), tt(e, t), me(e, K()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xt(e, fe, Ae),
    me(e, K()),
    null
  );
}
function Ho(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((an = K() + 500), Sl && yt());
  }
}
function Tt(e) {
  rt !== null && rt.tag === 0 && !(I & 6) && tn();
  var t = I;
  I |= 1;
  var n = Ne.transition,
    r = M;
  try {
    if (((Ne.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (Ne.transition = n), (I = t), !(I & 6) && yt();
  }
}
function Qo() {
  (ve = Gt.current), U(Gt);
}
function _t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Md(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((No(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Zr();
          break;
        case 3:
          un(), U(pe), U(oe), Io();
          break;
        case 5:
          Oo(r);
          break;
        case 4:
          un();
          break;
        case 13:
          U(B);
          break;
        case 19:
          U(B);
          break;
        case 10:
          Lo(r.type._context);
          break;
        case 22:
        case 23:
          Qo();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (Y = e = dt(e.current, null)),
    (te = ve = t),
    (J = 0),
    (er = null),
    (Vo = Cl = zt = 0),
    (fe = Fn = null),
    Ct !== null)
  ) {
    for (t = 0; t < Ct.length; t++)
      if (((n = Ct[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Ct = null;
  }
  return e;
}
function Sc(e, t) {
  do {
    var n = Y;
    try {
      if ((jo(), (Fr.current = ol), il)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        il = !1;
      }
      if (
        ((Rt = 0),
        (q = G = A = null),
        (In = !1),
        (Zn = 0),
        (Ao.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (er = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = te),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            h = u,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = h.alternate;
            m
              ? ((h.updateQueue = m.updateQueue),
                (h.memoizedState = m.memoizedState),
                (h.lanes = m.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var y = Ku(o);
          if (y !== null) {
            (y.flags &= -257),
              Yu(y, o, u, i, t),
              y.mode & 1 && Qu(i, a, t),
              (t = y),
              (s = a);
            var w = t.updateQueue;
            if (w === null) {
              var S = new Set();
              S.add(s), (t.updateQueue = S);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Qu(i, a, t), Ko();
              break e;
            }
            s = Error(k(426));
          }
        } else if ($ && u.mode & 1) {
          var C = Ku(o);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Yu(C, o, u, i, t),
              _o(sn(s, u));
            break e;
          }
        }
        (i = s = sn(s, u)),
          J !== 4 && (J = 2),
          Fn === null ? (Fn = [i]) : Fn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = rc(i, s, t);
              $u(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type,
                d = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (ct === null || !ct.has(d))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = lc(i, u, t);
                $u(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ec(n);
    } catch (E) {
      (t = E), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function kc() {
  var e = ul.current;
  return (ul.current = ol), e === null ? ol : e;
}
function Ko() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    b === null || (!(zt & 268435455) && !(Cl & 268435455)) || tt(b, te);
}
function cl(e, t) {
  var n = I;
  I |= 2;
  var r = kc();
  (b !== e || te !== t) && ((Ae = null), _t(e, t));
  do
    try {
      op();
      break;
    } catch (l) {
      Sc(e, l);
    }
  while (!0);
  if ((jo(), (I = n), (ul.current = r), Y !== null)) throw Error(k(261));
  return (b = null), (te = 0), J;
}
function op() {
  for (; Y !== null; ) xc(Y);
}
function up() {
  for (; Y !== null && !Tf(); ) xc(Y);
}
function xc(e) {
  var t = Nc(e.alternate, e, ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ec(e) : (Y = t),
    (Ao.current = null);
}
function Ec(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ep(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (Y = null);
        return;
      }
    } else if (((n = bd(n, t, ve)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function xt(e, t, n) {
  var r = M,
    l = Ne.transition;
  try {
    (Ne.transition = null), (M = 1), sp(e, t, n, r);
  } finally {
    (Ne.transition = l), (M = r);
  }
  return null;
}
function sp(e, t, n, r) {
  do tn();
  while (rt !== null);
  if (I & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Vf(e, i),
    e === b && ((Y = b = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pr ||
      ((Pr = !0),
      _c(Qr, function () {
        return tn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ne.transition), (Ne.transition = null);
    var o = M;
    M = 1;
    var u = I;
    (I |= 4),
      (Ao.current = null),
      np(e, n),
      gc(n, e),
      jd(Ri),
      (Yr = !!Li),
      (Ri = Li = null),
      (e.current = n),
      rp(n),
      Of(),
      (I = u),
      (M = o),
      (Ne.transition = i);
  } else e.current = n;
  if (
    (Pr && ((Pr = !1), (rt = e), (al = l)),
    (i = e.pendingLanes),
    i === 0 && (ct = null),
    Ff(n.stateNode),
    me(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (sl) throw ((sl = !1), (e = Ji), (Ji = null), e);
  return (
    al & 1 && e.tag !== 0 && tn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Zi ? Dn++ : ((Dn = 0), (Zi = e))) : (Dn = 0),
    yt(),
    null
  );
}
function tn() {
  if (rt !== null) {
    var e = ra(al),
      t = Ne.transition,
      n = M;
    try {
      if (((Ne.transition = null), (M = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (al = 0), I & 6)) throw Error(k(331));
        var l = I;
        for (I |= 4, N = e.current; N !== null; ) {
          var i = N,
            o = i.child;
          if (N.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (N = a; N !== null; ) {
                  var h = N;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mn(8, h, i);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (N = p);
                  else
                    for (; N !== null; ) {
                      h = N;
                      var m = h.sibling,
                        y = h.return;
                      if ((hc(h), h === a)) {
                        N = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = y), (N = m);
                        break;
                      }
                      N = y;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var C = S.sibling;
                    (S.sibling = null), (S = C);
                  } while (S !== null);
                }
              }
              N = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (N = o);
          else
            e: for (; N !== null; ) {
              if (((i = N), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (N = f);
                break e;
              }
              N = i.return;
            }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          o = N;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (N = d);
          else
            e: for (o = c; N !== null; ) {
              if (((u = N), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      El(9, u);
                  }
                } catch (E) {
                  W(u, u.return, E);
                }
              if (u === o) {
                N = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (N = g);
                break e;
              }
              N = u.return;
            }
        }
        if (
          ((I = l), yt(), $e && typeof $e.onPostCommitFiberRoot == "function")
        )
          try {
            $e.onPostCommitFiberRoot(ml, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (Ne.transition = t);
    }
  }
  return !1;
}
function os(e, t, n) {
  (t = sn(n, t)),
    (t = rc(e, t, 1)),
    (e = at(e, t, 1)),
    (t = se()),
    e !== null && (lr(e, 1, t), me(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) os(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        os(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ct === null || !ct.has(r)))
        ) {
          (e = sn(n, e)),
            (e = lc(t, e, 1)),
            (t = at(t, e, 1)),
            (e = se()),
            t !== null && (lr(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ap(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (te & n) === n &&
      (J === 4 || (J === 3 && (te & 130023424) === te && 500 > K() - Wo)
        ? _t(e, 0)
        : (Vo |= n)),
    me(e, t);
}
function Cc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = gr), (gr <<= 1), !(gr & 130023424) && (gr = 4194304))
      : (t = 1));
  var n = se();
  (e = Xe(e, t)), e !== null && (lr(e, t, n), me(e, n));
}
function cp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Cc(e, n);
}
function fp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Cc(e, n);
}
var Nc;
Nc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) de = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (de = !1), qd(e, t, n);
      de = !!(e.flags & 131072);
    }
  else (de = !1), $ && t.flags & 1048576 && La(t, el, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ur(e, t), (e = t.pendingProps);
      var l = rn(t, oe.current);
      en(t, n), (l = Fo(null, t, r, e, l, n));
      var i = Do();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((i = !0), qr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            zo(t),
            (l.updater = xl),
            (t.stateNode = l),
            (l._reactInternals = t),
            $i(t, r, e, n),
            (t = Vi(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && Co(t), ue(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ur(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = pp(r)),
          (e = Re(r, e)),
          l)
        ) {
          case 0:
            t = Ai(null, t, r, e, n);
            break e;
          case 1:
            t = Ju(null, t, r, e, n);
            break e;
          case 11:
            t = Xu(null, t, r, e, n);
            break e;
          case 14:
            t = Gu(null, t, r, Re(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Ai(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Ju(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((sc(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Ma(e, t),
          rl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = sn(Error(k(423)), t)), (t = Zu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = sn(Error(k(424)), t)), (t = Zu(e, t, r, n, l));
            break e;
          } else
            for (
              ge = st(t.stateNode.containerInfo.firstChild),
                ye = t,
                $ = !0,
                Te = null,
                n = Oa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ln(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Fa(t),
        e === null && Fi(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        zi(r, l) ? (o = null) : i !== null && zi(r, i) && (t.flags |= 32),
        uc(e, t),
        ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Fi(t), null;
    case 13:
      return ac(e, t, n);
    case 4:
      return (
        To(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = on(t, null, r, n)) : ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Xu(e, t, r, l, n)
      );
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          F(tl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Me(i.value, o)) {
            if (i.children === l.children && !pe.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Qe(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Di(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(k(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Di(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ue(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        en(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Re(r, t.pendingProps)),
        (l = Re(r.type, l)),
        Gu(e, t, r, l, n)
      );
    case 15:
      return ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Re(r, l)),
        Ur(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), qr(t)) : (e = !1),
        en(t, n),
        nc(t, r, l),
        $i(t, r, l, n),
        Vi(null, t, r, !0, e, n)
      );
    case 19:
      return cc(e, t, n);
    case 22:
      return oc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function _c(e, t) {
  return bs(e, t);
}
function dp(e, t, n, r) {
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
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new dp(e, t, n, r);
}
function Yo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function pp(e) {
  if (typeof e == "function") return Yo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === fo)) return 11;
    if (e === po) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ar(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Yo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case $t:
        return Pt(n.children, l, i, t);
      case co:
        (o = 8), (l |= 8);
        break;
      case ai:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = ai), (e.lanes = i), e
        );
      case ci:
        return (e = Ce(13, n, t, l)), (e.elementType = ci), (e.lanes = i), e;
      case fi:
        return (e = Ce(19, n, t, l)), (e.elementType = fi), (e.lanes = i), e;
      case Fs:
        return Nl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Is:
              o = 10;
              break e;
            case Ms:
              o = 9;
              break e;
            case fo:
              o = 11;
              break e;
            case po:
              o = 14;
              break e;
            case qe:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Pt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function Nl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = Fs),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function li(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function ii(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function hp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = $l(0)),
    (this.expirationTimes = $l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Xo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new hp(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ce(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zo(i),
    e
  );
}
function mp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ut,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Pc(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
    if (It(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return Pa(e, n, t);
  }
  return t;
}
function jc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Xo(n, r, !0, e, l, i, o, u, s)),
    (e.context = Pc(null)),
    (n = e.current),
    (r = se()),
    (l = ft(n)),
    (i = Qe(r, l)),
    (i.callback = t ?? null),
    at(n, i, l),
    (e.current.lanes = l),
    lr(e, l, r),
    me(e, r),
    e
  );
}
function _l(e, t, n, r) {
  var l = t.current,
    i = se(),
    o = ft(l);
  return (
    (n = Pc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Qe(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = at(l, t, o)),
    e !== null && (Ie(e, l, o, i), Mr(e, l, o)),
    o
  );
}
function fl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function us(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Go(e, t) {
  us(e, t), (e = e.alternate) && us(e, t);
}
function vp() {
  return null;
}
var Lc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Jo(e) {
  this._internalRoot = e;
}
Pl.prototype.render = Jo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  _l(e, t, null, null);
};
Pl.prototype.unmount = Jo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function () {
      _l(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function Pl(e) {
  this._internalRoot = e;
}
Pl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = oa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && sa(e);
  }
};
function Zo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function jl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ss() {}
function gp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = fl(o);
        i.call(a);
      };
    }
    var o = jc(t, r, e, 0, null, !1, !1, "", ss);
    return (
      (e._reactRootContainer = o),
      (e[Ye] = o.current),
      Kn(e.nodeType === 8 ? e.parentNode : e),
      Tt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = fl(s);
      u.call(a);
    };
  }
  var s = Xo(e, 0, !1, null, null, !1, !1, "", ss);
  return (
    (e._reactRootContainer = s),
    (e[Ye] = s.current),
    Kn(e.nodeType === 8 ? e.parentNode : e),
    Tt(function () {
      _l(t, s, n, r);
    }),
    s
  );
}
function Ll(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = fl(o);
        u.call(s);
      };
    }
    _l(t, o, e, l);
  } else o = gp(n, t, e, l, r);
  return fl(o);
}
la = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _n(t.pendingLanes);
        n !== 0 &&
          (vo(t, n | 1), me(t, K()), !(I & 6) && ((an = K() + 500), yt()));
      }
      break;
    case 13:
      Tt(function () {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = se();
          Ie(r, e, 1, l);
        }
      }),
        Go(e, 1);
  }
};
go = function (e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = se();
      Ie(t, e, 134217728, n);
    }
    Go(e, 134217728);
  }
};
ia = function (e) {
  if (e.tag === 13) {
    var t = ft(e),
      n = Xe(e, t);
    if (n !== null) {
      var r = se();
      Ie(n, e, t, r);
    }
    Go(e, t);
  }
};
oa = function () {
  return M;
};
ua = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
ki = function (e, t, n) {
  switch (t) {
    case "input":
      if ((hi(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = wl(r);
            if (!l) throw Error(k(90));
            Us(r), hi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Bs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Jt(e, !!n.multiple, t, !1);
  }
};
Ys = Ho;
Xs = Tt;
var yp = { usingClientEntryPoint: !1, Events: [or, Wt, wl, Qs, Ks, Ho] },
  En = {
    findFiberByHostInstance: Et,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  wp = {
    bundleType: En.bundleType,
    version: En.version,
    rendererPackageName: En.rendererPackageName,
    rendererConfig: En.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Zs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: En.findFiberByHostInstance || vp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jr.isDisabled && jr.supportsFiber)
    try {
      (ml = jr.inject(wp)), ($e = jr);
    } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yp;
Se.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zo(t)) throw Error(k(200));
  return mp(e, t, null, n);
};
Se.createRoot = function (e, t) {
  if (!Zo(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = Lc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Xo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Kn(e.nodeType === 8 ? e.parentNode : e),
    new Jo(t)
  );
};
Se.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Zs(t)), (e = e === null ? null : e.stateNode), e;
};
Se.flushSync = function (e) {
  return Tt(e);
};
Se.hydrate = function (e, t, n) {
  if (!jl(t)) throw Error(k(200));
  return Ll(null, e, t, !0, n);
};
Se.hydrateRoot = function (e, t, n) {
  if (!Zo(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Lc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = jc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ye] = t.current),
    Kn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Pl(t);
};
Se.render = function (e, t, n) {
  if (!jl(t)) throw Error(k(200));
  return Ll(null, e, t, !1, n);
};
Se.unmountComponentAtNode = function (e) {
  if (!jl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Tt(function () {
        Ll(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
Se.unstable_batchedUpdates = Ho;
Se.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!jl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Ll(e, t, n, !1, r);
};
Se.version = "18.3.1-next-f1338f8080-20240426";
function Rc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rc);
    } catch (e) {
      console.error(e);
    }
}
Rc(), (Rs.exports = Se);
var Sp = Rs.exports,
  as = Sp;
(ui.createRoot = as.createRoot), (ui.hydrateRoot = as.hydrateRoot);
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tr() {
  return (
    (tr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tr.apply(this, arguments)
  );
}
var lt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(lt || (lt = {}));
const cs = "popstate";
function kp(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: u } = r.location;
    return eo(
      "",
      { pathname: i, search: o, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : dl(l);
  }
  return Ep(t, n, null, e);
}
function X(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function zc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function xp() {
  return Math.random().toString(36).substr(2, 8);
}
function fs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function eo(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    tr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? pn(t) : t,
      { state: n, key: (t && t.key) || r || xp() }
    )
  );
}
function dl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function pn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Ep(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    u = lt.Pop,
    s = null,
    a = h();
  a == null && ((a = 0), o.replaceState(tr({}, o.state, { idx: a }), ""));
  function h() {
    return (o.state || { idx: null }).idx;
  }
  function p() {
    u = lt.Pop;
    let C = h(),
      f = C == null ? null : C - a;
    (a = C), s && s({ action: u, location: S.location, delta: f });
  }
  function m(C, f) {
    u = lt.Push;
    let c = eo(S.location, C, f);
    a = h() + 1;
    let d = fs(c, a),
      g = S.createHref(c);
    try {
      o.pushState(d, "", g);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      l.location.assign(g);
    }
    i && s && s({ action: u, location: S.location, delta: 1 });
  }
  function y(C, f) {
    u = lt.Replace;
    let c = eo(S.location, C, f);
    a = h();
    let d = fs(c, a),
      g = S.createHref(c);
    o.replaceState(d, "", g),
      i && s && s({ action: u, location: S.location, delta: 0 });
  }
  function w(C) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof C == "string" ? C : dl(C);
    return (
      (c = c.replace(/ $/, "%20")),
      X(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let S = {
    get action() {
      return u;
    },
    get location() {
      return e(l, o);
    },
    listen(C) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(cs, p),
        (s = C),
        () => {
          l.removeEventListener(cs, p), (s = null);
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: w,
    encodeLocation(C) {
      let f = w(C);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: y,
    go(C) {
      return o.go(C);
    },
  };
  return S;
}
var ds;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ds || (ds = {}));
function Cp(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? pn(t) : t,
    l = qo(r.pathname || "/", n);
  if (l == null) return null;
  let i = Tc(e);
  Np(i);
  let o = null;
  for (let u = 0; o == null && u < i.length; ++u) {
    let s = Dp(l);
    o = Ip(i[u], s);
  }
  return o;
}
function Tc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (X(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = pt([r, s.relativePath]),
      h = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (X(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      Tc(i.children, t, h, a)),
      !(i.path == null && !i.index) &&
        t.push({ path: a, score: Tp(a, i.index), routesMeta: h });
  };
  return (
    e.forEach((i, o) => {
      var u;
      if (i.path === "" || !((u = i.path) != null && u.includes("?"))) l(i, o);
      else for (let s of Oc(i.path)) l(i, o, s);
    }),
    t
  );
}
function Oc(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = Oc(r.join("/")),
    u = [];
  return (
    u.push(...o.map((s) => (s === "" ? i : [i, s].join("/")))),
    l && u.push(...o),
    u.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function Np(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Op(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const _p = /^:[\w-]+$/,
  Pp = 3,
  jp = 2,
  Lp = 1,
  Rp = 10,
  zp = -2,
  ps = (e) => e === "*";
function Tp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ps) && (r += zp),
    t && (r += jp),
    n
      .filter((l) => !ps(l))
      .reduce((l, i) => l + (_p.test(i) ? Pp : i === "" ? Lp : Rp), r)
  );
}
function Op(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Ip(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let u = n[o],
      s = o === n.length - 1,
      a = l === "/" ? t : t.slice(l.length) || "/",
      h = Mp(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let p = u.route;
    i.push({
      params: r,
      pathname: pt([l, h.pathname]),
      pathnameBase: Ap(pt([l, h.pathnameBase])),
      route: p,
    }),
      h.pathnameBase !== "/" && (l = pt([l, h.pathnameBase]));
  }
  return i;
}
function Mp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Fp(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, h, p) => {
      let { paramName: m, isOptional: y } = h;
      if (m === "*") {
        let S = u[p] || "";
        o = i.slice(0, i.length - S.length).replace(/(.)\/+$/, "$1");
      }
      const w = u[p];
      return (
        y && !w ? (a[m] = void 0) : (a[m] = (w || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Fp(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    zc(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Dp(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      zc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function qo(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Up(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? pn(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : $p(n, t)) : t,
    search: Vp(r),
    hash: Wp(l),
  };
}
function $p(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function oi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Bp(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ic(e, t) {
  let n = Bp(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Mc(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = pn(e))
    : ((l = tr({}, e)),
      X(
        !l.pathname || !l.pathname.includes("?"),
        oi("?", "pathname", "search", l)
      ),
      X(
        !l.pathname || !l.pathname.includes("#"),
        oi("#", "pathname", "hash", l)
      ),
      X(!l.search || !l.search.includes("#"), oi("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    u;
  if (o == null) u = n;
  else {
    let p = t.length - 1;
    if (!r && o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      l.pathname = m.join("/");
    }
    u = p >= 0 ? t[p] : "/";
  }
  let s = Up(l, u),
    a = o && o !== "/" && o.endsWith("/"),
    h = (i || o === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (a || h) && (s.pathname += "/"), s;
}
const pt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Ap = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Vp = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Wp = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Hp(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Fc = ["post", "put", "patch", "delete"];
new Set(Fc);
const Qp = ["get", ...Fc];
new Set(Qp);
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nr() {
  return (
    (nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nr.apply(this, arguments)
  );
}
const bo = x.createContext(null),
  Kp = x.createContext(null),
  Mt = x.createContext(null),
  Rl = x.createContext(null),
  Ft = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Dc = x.createContext(null);
function Yp(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  sr() || X(!1);
  let { basename: r, navigator: l } = x.useContext(Mt),
    { hash: i, pathname: o, search: u } = $c(e, { relative: n }),
    s = o;
  return (
    r !== "/" && (s = o === "/" ? r : pt([r, o])),
    l.createHref({ pathname: s, search: u, hash: i })
  );
}
function sr() {
  return x.useContext(Rl) != null;
}
function ar() {
  return sr() || X(!1), x.useContext(Rl).location;
}
function Uc(e) {
  x.useContext(Mt).static || x.useLayoutEffect(e);
}
function Xp() {
  let { isDataRoute: e } = x.useContext(Ft);
  return e ? uh() : Gp();
}
function Gp() {
  sr() || X(!1);
  let e = x.useContext(bo),
    { basename: t, future: n, navigator: r } = x.useContext(Mt),
    { matches: l } = x.useContext(Ft),
    { pathname: i } = ar(),
    o = JSON.stringify(Ic(l, n.v7_relativeSplatPath)),
    u = x.useRef(!1);
  return (
    Uc(() => {
      u.current = !0;
    }),
    x.useCallback(
      function (a, h) {
        if ((h === void 0 && (h = {}), !u.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let p = Mc(a, JSON.parse(o), i, h.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : pt([t, p.pathname])),
          (h.replace ? r.replace : r.push)(p, h.state, h);
      },
      [t, r, o, i, e]
    )
  );
}
function $c(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = x.useContext(Mt),
    { matches: l } = x.useContext(Ft),
    { pathname: i } = ar(),
    o = JSON.stringify(Ic(l, r.v7_relativeSplatPath));
  return x.useMemo(() => Mc(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function Jp(e, t) {
  return Zp(e, t);
}
function Zp(e, t, n, r) {
  sr() || X(!1);
  let { navigator: l } = x.useContext(Mt),
    { matches: i } = x.useContext(Ft),
    o = i[i.length - 1],
    u = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let a = ar(),
    h;
  if (t) {
    var p;
    let C = typeof t == "string" ? pn(t) : t;
    s === "/" || ((p = C.pathname) != null && p.startsWith(s)) || X(!1),
      (h = C);
  } else h = a;
  let m = h.pathname || "/",
    y = m;
  if (s !== "/") {
    let C = s.replace(/^\//, "").split("/");
    y = "/" + m.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let w = Cp(e, { pathname: y }),
    S = nh(
      w &&
        w.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, u, C.params),
            pathname: pt([
              s,
              l.encodeLocation
                ? l.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? s
                : pt([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && S
    ? x.createElement(
        Rl.Provider,
        {
          value: {
            location: nr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h
            ),
            navigationType: lt.Pop,
          },
        },
        S
      )
    : S;
}
function qp() {
  let e = oh(),
    t = Hp(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: l }, n) : null,
    null
  );
}
const bp = x.createElement(qp, null);
class eh extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          Ft.Provider,
          { value: this.props.routeContext },
          x.createElement(Dc.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function th(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = x.useContext(bo);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(Ft.Provider, { value: t }, r)
  );
}
function nh(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let h = o.findIndex(
      (p) => p.route.id && (u == null ? void 0 : u[p.route.id]) !== void 0
    );
    h >= 0 || X(!1), (o = o.slice(0, Math.min(o.length, h + 1)));
  }
  let s = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < o.length; h++) {
      let p = o[h];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (a = h),
        p.route.id)
      ) {
        let { loaderData: m, errors: y } = n,
          w =
            p.route.loader &&
            m[p.route.id] === void 0 &&
            (!y || y[p.route.id] === void 0);
        if (p.route.lazy || w) {
          (s = !0), a >= 0 ? (o = o.slice(0, a + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((h, p, m) => {
    let y,
      w = !1,
      S = null,
      C = null;
    n &&
      ((y = u && p.route.id ? u[p.route.id] : void 0),
      (S = p.route.errorElement || bp),
      s &&
        (a < 0 && m === 0
          ? ((w = !0), (C = null))
          : a === m &&
            ((w = !0), (C = p.route.hydrateFallbackElement || null))));
    let f = t.concat(o.slice(0, m + 1)),
      c = () => {
        let d;
        return (
          y
            ? (d = S)
            : w
            ? (d = C)
            : p.route.Component
            ? (d = x.createElement(p.route.Component, null))
            : p.route.element
            ? (d = p.route.element)
            : (d = h),
          x.createElement(th, {
            match: p,
            routeContext: { outlet: h, matches: f, isDataRoute: n != null },
            children: d,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? x.createElement(eh, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: y,
          children: c(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Bc = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Bc || {}),
  pl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(pl || {});
function rh(e) {
  let t = x.useContext(bo);
  return t || X(!1), t;
}
function lh(e) {
  let t = x.useContext(Kp);
  return t || X(!1), t;
}
function ih(e) {
  let t = x.useContext(Ft);
  return t || X(!1), t;
}
function Ac(e) {
  let t = ih(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || X(!1), n.route.id;
}
function oh() {
  var e;
  let t = x.useContext(Dc),
    n = lh(pl.UseRouteError),
    r = Ac(pl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function uh() {
  let { router: e } = rh(Bc.UseNavigateStable),
    t = Ac(pl.UseNavigateStable),
    n = x.useRef(!1);
  return (
    Uc(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, nr({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function jn(e) {
  X(!1);
}
function sh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = lt.Pop,
    navigator: i,
    static: o = !1,
    future: u,
  } = e;
  sr() && X(!1);
  let s = t.replace(/^\/*/, "/"),
    a = x.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: o,
        future: nr({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, i, o]
    );
  typeof r == "string" && (r = pn(r));
  let {
      pathname: h = "/",
      search: p = "",
      hash: m = "",
      state: y = null,
      key: w = "default",
    } = r,
    S = x.useMemo(() => {
      let C = qo(h, s);
      return C == null
        ? null
        : {
            location: { pathname: C, search: p, hash: m, state: y, key: w },
            navigationType: l,
          };
    }, [s, h, p, m, y, w, l]);
  return S == null
    ? null
    : x.createElement(
        Mt.Provider,
        { value: a },
        x.createElement(Rl.Provider, { children: n, value: S })
      );
}
function ah(e) {
  let { children: t, location: n } = e;
  return Jp(to(t), n);
}
new Promise(() => {});
function to(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, l) => {
      if (!x.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === x.Fragment) {
        n.push.apply(n, to(r.props.children, i));
        return;
      }
      r.type !== jn && X(!1), !r.props.index || !r.props.children || X(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = to(r.props.children, i)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function no() {
  return (
    (no = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    no.apply(this, arguments)
  );
}
function ch(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function fh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function dh(e, t) {
  return e.button === 0 && (!t || t === "_self") && !fh(e);
}
const ph = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  hh = "6";
try {
  window.__reactRouterVersion = hh;
} catch {}
const mh = "startTransition",
  hs = af[mh];
function vh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    i = x.useRef();
  i.current == null && (i.current = kp({ window: l, v5Compat: !0 }));
  let o = i.current,
    [u, s] = x.useState({ action: o.action, location: o.location }),
    { v7_startTransition: a } = r || {},
    h = x.useCallback(
      (p) => {
        a && hs ? hs(() => s(p)) : s(p);
      },
      [s, a]
    );
  return (
    x.useLayoutEffect(() => o.listen(h), [o, h]),
    x.createElement(sh, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: o,
      future: r,
    })
  );
}
const gh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  yh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Lr = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: u,
        target: s,
        to: a,
        preventScrollReset: h,
        unstable_viewTransition: p,
      } = t,
      m = ch(t, ph),
      { basename: y } = x.useContext(Mt),
      w,
      S = !1;
    if (typeof a == "string" && yh.test(a) && ((w = a), gh))
      try {
        let d = new URL(window.location.href),
          g = a.startsWith("//") ? new URL(d.protocol + a) : new URL(a),
          E = qo(g.pathname, y);
        g.origin === d.origin && E != null
          ? (a = E + g.search + g.hash)
          : (S = !0);
      } catch {}
    let C = Yp(a, { relative: l }),
      f = wh(a, {
        replace: o,
        state: u,
        target: s,
        preventScrollReset: h,
        relative: l,
        unstable_viewTransition: p,
      });
    function c(d) {
      r && r(d), d.defaultPrevented || f(d);
    }
    return x.createElement(
      "a",
      no({}, m, { href: w || C, onClick: S || i ? r : c, ref: n, target: s })
    );
  });
var ms;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(ms || (ms = {}));
var vs;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(vs || (vs = {}));
function wh(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    s = Xp(),
    a = ar(),
    h = $c(e, { relative: o });
  return x.useCallback(
    (p) => {
      if (dh(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : dl(a) === dl(h);
        s(e, {
          replace: m,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: u,
        });
      }
    },
    [a, s, h, r, l, n, e, i, o, u]
  );
}
const Vc = "/logo.png";
function Sh({ isLoggedIn: e, setisLoggedIn: t }) {
  const [n, r] = x.useState(!1),
    l = `menu ${n ? "" : "active"}`;
  function i() {
    t(!e);
  }
  return v.jsxs("header", {
    children: [
      v.jsx("img", { src: Vc, alt: "" }),
      v.jsxs("div", {
        className: "input",
        children: [
          v.jsx("i", { className: "fas fa-search" }),
          v.jsx("input", {
            type: "search",
            id: "search",
            placeholder: "Search",
          }),
        ],
      }),
      v.jsxs("button", {
        onClick: () => r(!n),
        children: [
          v.jsx("i", { className: "fas fa-user-tie" }),
          v.jsx("i", { className: "fas fa-chevron-down" }),
        ],
      }),
      v.jsxs("section", {
        className: l,
        children: [
          v.jsx("b", { children: "Okolie Amuche Anthony" }),
          v.jsx("small", { children: "kingtony3825@gmail.com" }),
          v.jsx("span", { className: "role", children: "Super Admin" }),
          v.jsxs("button", {
            onClick: () => i,
            children: [
              v.jsx("i", { className: "fas fa-signout-alt" }),
              " Logout",
            ],
          }),
        ],
      }),
    ],
  });
}
function Wc() {
  return v.jsx("section", {
    className: "spin-con",
    children: v.jsx("div", { className: "spinner" }),
  });
}
function gs() {
  const [e, t] = x.useState([]),
    [n, r] = x.useState(!0);
  x.useEffect(() => {
    l();
  }, []);
  function l() {
    fetch(`${location.origin}/all-attendee`)
      .then((u) => u.json())
      .then((u) => {
        t(u), r(!1);
      });
  }
  function i(u) {
    const s = Object.keys(u[0]).join(","),
      a = u.map((h) => Object.values(h).join(",")).join(`
`);
    return (
      s +
      `
` +
      a
    );
  }
  function o(u, s) {
    const a = i(u),
      h = new Blob([a], { type: "text/csv;charset=utf-8;" });
    if (navigator.msSaveBlob) navigator.msSaveBlob(h, s);
    else {
      const p = document.createElement("a");
      if (p.download !== void 0) {
        const m = URL.createObjectURL(h);
        p.setAttribute("href", m),
          p.setAttribute("download", s),
          (p.style.visibility = "hidden"),
          document.body.appendChild(p),
          p.click(),
          document.body.removeChild(p);
      }
    }
  }
  return v.jsxs("section", {
    className: "dashboard",
    children: [
      v.jsxs("div", {
        className: "main-head",
        children: [
          v.jsx("h2", { children: "All Attendees" }),
          v.jsxs("button", {
            onClick: () => o(e, "attendees.csv"),
            children: [
              "Download Records ",
              v.jsx("i", { className: "fas fa-cloud-download-alt" }),
            ],
          }),
        ],
      }),
      n
        ? v.jsx(Wc, {})
        : v.jsx("ul", {
            className: "list",
            children: e.map((u, s) =>
              v.jsxs(
                "li",
                {
                  children: [
                    v.jsxs("div", {
                      className: "left",
                      children: [
                        v.jsx("span", { children: s + 1 }),
                        v.jsxs("b", {
                          children: [u.first_name, " ", u.last_name],
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "right",
                      children: [
                        v.jsx("small", {
                          className: u.affiliation.toLowerCase(),
                          children: u.affiliation,
                        }),
                        v.jsxs("div", {
                          className: "blink",
                          children: [
                            v.jsx("i", { className: "fas fa-info" }),
                            v.jsx("i", { className: "fas fa-trash" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                s + 1
              )
            ),
          }),
    ],
  });
}
function kh() {
  const e = ar(),
    { pathname: t } = e,
    n = t.split("/");
  return v.jsx("nav", {
    children: v.jsxs("ul", {
      children: [
        v.jsx("li", {
          className: n[1] == "attendees" ? "active" : "",
          children: v.jsxs(Lr, {
            to: "/attendees",
            children: [v.jsx("i", { className: "fas fa-users" }), " Attendees"],
          }),
        }),
        v.jsx("li", {
          className: n[1] == "add" ? "active" : "",
          children: v.jsxs(Lr, {
            to: "/add",
            children: [
              v.jsx("i", { className: "fas fa-user-plus" }),
              " Add Attendee",
            ],
          }),
        }),
        v.jsx("li", {
          className: n[1] == "messages" ? "active" : "",
          children: v.jsxs(Lr, {
            to: "/messages",
            children: [
              v.jsx("i", { className: "fas fa-envelope-open-text" }),
              " Messages",
            ],
          }),
        }),
        v.jsx("li", {
          className: n[1] == "mail-list" ? "active" : "",
          children: v.jsxs(Lr, {
            to: "/mail-list",
            children: [
              v.jsx("i", { className: "fas fa-envelope" }),
              " Newsletter List",
            ],
          }),
        }),
      ],
    }),
  });
}
function xh() {
  const [e, t] = x.useState(!1),
    [n, r] = x.useState(!1),
    [l, i] = x.useState(!1),
    [o, u] = x.useState("");
  async function s(a) {
    a.preventDefault(), t(!0);
    const h = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      role: document.getElementById("role").value,
    };
    console.log(h);
    const p = await fetch(`${location.origin}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(h),
    });
    if (p.ok) {
      const m = await p.json();
      console.log(m),
        m.stat
          ? (t(!1),
            r(!0),
            u((y) => m.message),
            alert("Successfully added"),
            (document.getElementById("firstName").value = ""),
            (document.getElementById("lastName").value = ""),
            (document.getElementById("phone").value = ""),
            (getElementById("email").value = ""),
            (document.getElementById("email").value = ""))
          : (t(!1), i(!0), u((y) => m.message));
    } else i(!0), t(!1);
  }
  return v.jsxs("section", {
    className: "form-wrap",
    children: [
      v.jsx("div", {
        className: "main-head",
        children: v.jsx("h2", { children: "Add Attendee" }),
      }),
      v.jsxs("form", {
        action: "",
        children: [
          v.jsxs("fieldset", {
            children: [
              v.jsxs("div", {
                className: "input",
                children: [
                  v.jsx("i", { className: "fas fa-user" }),
                  v.jsx("input", {
                    type: "text",
                    name: "firstName",
                    id: "firstName",
                    placeholder: "First name",
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "input",
                children: [
                  v.jsx("i", { className: "fas fa-user" }),
                  v.jsx("input", {
                    type: "text",
                    name: "lastName",
                    id: "lastName",
                    placeholder: "Last name",
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "input",
                children: [
                  v.jsx("i", { className: "fas fa-envelope" }),
                  v.jsx("input", {
                    type: "email",
                    name: "email",
                    id: "email",
                    placeholder: "Email",
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "input",
                children: [
                  v.jsx("i", { className: "fas fa-phone" }),
                  v.jsx("input", {
                    type: "tel",
                    name: "phone",
                    id: "phone",
                    placeholder: "Phone",
                  }),
                ],
              }),
            ],
          }),
          v.jsxs("select", {
            name: "role",
            id: "role",
            children: [
              v.jsx("option", {
                value: "undergraduate",
                children: "Undergraduate",
              }),
              v.jsx("option", {
                value: "postgraduate",
                children: "Postgraduate",
              }),
              v.jsx("option", { value: "staff", children: "Staff" }),
            ],
          }),
          v.jsx("button", {
            onClick: (a) => s(a),
            children: e ? "Adding..." : "Add",
          }),
        ],
      }),
    ],
  });
}
function Eh() {
  const [e, t] = x.useState([]),
    [n, r] = x.useState(null),
    [l, i] = x.useState(!0),
    o = (u) => {
      r(u === n ? null : u);
    };
  return (
    x.useEffect(() => {
      fetch(`${location.origin}/all-messages`)
        .then((u) => u.json())
        .then((u) => {
          t(u), i(!1);
        });
    }, []),
    v.jsx(v.Fragment, {
      children: n
        ? v.jsxs("section", {
            className: "message-wrap",
            children: [
              v.jsxs("div", {
                className: "message-head",
                children: [
                  v.jsx("i", {
                    className: "fas fa-chevron-left",
                    onClick: () => r(null),
                  }),
                  v.jsx("h2", { children: "Message" }),
                ],
              }),
              v.jsxs("section", {
                className: "message-con",
                children: [
                  v.jsx("span", { children: "Name:" }),
                  v.jsx("p", { children: n.full_name }),
                  v.jsx("br", {}),
                  v.jsx("span", { children: "Email:" }),
                  v.jsx("p", { children: n.email }),
                  v.jsx("br", {}),
                  v.jsx("span", { children: "Message:" }),
                  v.jsx("p", { children: n.message }),
                ],
              }),
            ],
          })
        : v.jsxs("section", {
            className: "messages-wrap",
            children: [
              v.jsx("div", {
                className: "main-head",
                children: v.jsx("h2", { children: "Messages" }),
              }),
              l
                ? v.jsx(Wc, {})
                : v.jsx("ul", {
                    className: "list",
                    children: e.map((u, s) =>
                      v.jsxs(
                        "li",
                        {
                          onClick: () => o(u),
                          children: [
                            v.jsxs("div", {
                              className: "left",
                              children: [
                                v.jsx("span", { children: s + 1 }),
                                v.jsx("b", { children: u.full_name }),
                              ],
                            }),
                            v.jsx("div", {
                              className: "right",
                              children: v.jsx("div", {
                                className: "blink",
                                children: v.jsx("i", {
                                  className: "fas fa-trash",
                                }),
                              }),
                            }),
                          ],
                        },
                        s
                      )
                    ),
                  }),
            ],
          }),
    })
  );
}
function Ch(e) {
  const [t, n] = x.useState(!1),
    [r, l] = x.useState(!1),
    [i, o] = x.useState(!1),
    [u, s] = x.useState(!1),
    a = `fas ${u ? "fa-eye" : "fa-eye-slash"}`;
  async function h(p) {
    p.preventDefault(), n(!0);
    const m = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
      },
      y = await fetch(`${location.origin}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(m),
      });
    if (y.ok) {
      const w = await y.json();
      console.log(w), w.stat ? (n(!1), l(!0), e.stat(!0)) : (n(!1), o(!0));
    } else o(!0), n(!1);
  }
  return v.jsxs("form", {
    action: "",
    className: "login-form",
    children: [
      v.jsx("img", { src: Vc, alt: "" }),
      v.jsxs("div", {
        className: "input",
        children: [
          v.jsx("i", { className: "fas fa-user-tie" }),
          v.jsx("input", {
            type: "text",
            name: "username",
            id: "username",
            placeholder: "Username",
          }),
        ],
      }),
      v.jsxs("div", {
        className: "input",
        children: [
          v.jsx("i", { className: "fas fa-key" }),
          v.jsx("input", {
            type: u ? "text" : "password",
            name: "password",
            id: "password",
            placeholder: "Password",
          }),
          v.jsx("i", { className: a, onClick: () => s(!u) }),
        ],
      }),
      v.jsx("button", {
        onClick: (p) => h(p),
        children: t ? "Please wait..." : "Login",
      }),
    ],
  });
}
function Nh() {
  const [e, t] = x.useState(!0);
  return v.jsx(v.Fragment, {
    children: e
      ? v.jsx(vh, {
          children: v.jsxs("div", {
            children: [
              v.jsx(Sh, { isLoggedIn: e, setisLoggedIn: t }),
              v.jsxs("main", {
                children: [
                  v.jsx(kh, {}),
                  v.jsxs(ah, {
                    children: [
                      v.jsx(jn, { path: "/", element: v.jsx(gs, {}) }),
                      v.jsx(jn, { path: "/attendees", element: v.jsx(gs, {}) }),
                      v.jsx(jn, { path: "/add", element: v.jsx(xh, {}) }),
                      v.jsx(jn, { path: "/messages", element: v.jsx(Eh, {}) }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : v.jsx(Ch, { stat: t }),
  });
}
ui.createRoot(document.getElementById("root")).render(
  v.jsx(js.StrictMode, { children: v.jsx(Nh, {}) })
);
