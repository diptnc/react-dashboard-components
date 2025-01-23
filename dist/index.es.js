function vn(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var tt = { exports: {} }, nr = {}, nt = { exports: {} }, O = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function bn() {
  if (Tt)
    return O;
  Tt = 1;
  var n = Symbol.for("react.element"), a = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), y = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), F = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), N = Symbol.iterator;
  function G(o) {
    return o === null || typeof o != "object" ? null : (o = N && o[N] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var B = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Z = Object.assign, J = {};
  function I(o, f, k) {
    this.props = o, this.context = f, this.refs = J, this.updater = k || B;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(o, f) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, o, f, "setState");
  }, I.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function W() {
  }
  W.prototype = I.prototype;
  function P(o, f, k) {
    this.props = o, this.context = f, this.refs = J, this.updater = k || B;
  }
  var ve = P.prototype = new W();
  ve.constructor = P, Z(ve, I.prototype), ve.isPureReactComponent = !0;
  var ie = Array.isArray, K = Object.prototype.hasOwnProperty, le = { current: null }, me = { key: !0, ref: !0, __self: !0, __source: !0 };
  function he(o, f, k) {
    var j, M = {}, q = null, U = null;
    if (f != null)
      for (j in f.ref !== void 0 && (U = f.ref), f.key !== void 0 && (q = "" + f.key), f)
        K.call(f, j) && !me.hasOwnProperty(j) && (M[j] = f[j]);
    var V = arguments.length - 2;
    if (V === 1)
      M.children = k;
    else if (1 < V) {
      for (var L = Array(V), oe = 0; oe < V; oe++)
        L[oe] = arguments[oe + 2];
      M.children = L;
    }
    if (o && o.defaultProps)
      for (j in V = o.defaultProps, V)
        M[j] === void 0 && (M[j] = V[j]);
    return { $$typeof: n, type: o, key: q, ref: U, props: M, _owner: le.current };
  }
  function _e(o, f) {
    return { $$typeof: n, type: o.type, key: f, ref: o.ref, props: o.props, _owner: o._owner };
  }
  function Ee(o) {
    return typeof o == "object" && o !== null && o.$$typeof === n;
  }
  function Ce(o) {
    var f = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(k) {
      return f[k];
    });
  }
  var $ = /\/+/g;
  function se(o, f) {
    return typeof o == "object" && o !== null && o.key != null ? Ce("" + o.key) : f.toString(36);
  }
  function ue(o, f, k, j, M) {
    var q = typeof o;
    (q === "undefined" || q === "boolean") && (o = null);
    var U = !1;
    if (o === null)
      U = !0;
    else
      switch (q) {
        case "string":
        case "number":
          U = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case n:
            case a:
              U = !0;
          }
      }
    if (U)
      return U = o, M = M(U), o = j === "" ? "." + se(U, 0) : j, ie(M) ? (k = "", o != null && (k = o.replace($, "$&/") + "/"), ue(M, f, k, "", function(oe) {
        return oe;
      })) : M != null && (Ee(M) && (M = _e(M, k + (!M.key || U && U.key === M.key ? "" : ("" + M.key).replace($, "$&/") + "/") + o)), f.push(M)), 1;
    if (U = 0, j = j === "" ? "." : j + ":", ie(o))
      for (var V = 0; V < o.length; V++) {
        q = o[V];
        var L = j + se(q, V);
        U += ue(q, f, k, L, M);
      }
    else if (L = G(o), typeof L == "function")
      for (o = L.call(o), V = 0; !(q = o.next()).done; )
        q = q.value, L = j + se(q, V++), U += ue(q, f, k, L, M);
    else if (q === "object")
      throw f = String(o), Error("Objects are not valid as a React child (found: " + (f === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : f) + "). If you meant to render a collection of children, use an array instead.");
    return U;
  }
  function ne(o, f, k) {
    if (o == null)
      return o;
    var j = [], M = 0;
    return ue(o, j, "", "", function(q) {
      return f.call(k, q, M++);
    }), j;
  }
  function de(o) {
    if (o._status === -1) {
      var f = o._result;
      f = f(), f.then(function(k) {
        (o._status === 0 || o._status === -1) && (o._status = 1, o._result = k);
      }, function(k) {
        (o._status === 0 || o._status === -1) && (o._status = 2, o._result = k);
      }), o._status === -1 && (o._status = 0, o._result = f);
    }
    if (o._status === 1)
      return o._result.default;
    throw o._result;
  }
  var h = { current: null }, be = { transition: null }, ye = { ReactCurrentDispatcher: h, ReactCurrentBatchConfig: be, ReactCurrentOwner: le };
  function we() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return O.Children = { map: ne, forEach: function(o, f, k) {
    ne(o, function() {
      f.apply(this, arguments);
    }, k);
  }, count: function(o) {
    var f = 0;
    return ne(o, function() {
      f++;
    }), f;
  }, toArray: function(o) {
    return ne(o, function(f) {
      return f;
    }) || [];
  }, only: function(o) {
    if (!Ee(o))
      throw Error("React.Children.only expected to receive a single React element child.");
    return o;
  } }, O.Component = I, O.Fragment = u, O.Profiler = m, O.PureComponent = P, O.StrictMode = c, O.Suspense = w, O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ye, O.act = we, O.cloneElement = function(o, f, k) {
    if (o == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + o + ".");
    var j = Z({}, o.props), M = o.key, q = o.ref, U = o._owner;
    if (f != null) {
      if (f.ref !== void 0 && (q = f.ref, U = le.current), f.key !== void 0 && (M = "" + f.key), o.type && o.type.defaultProps)
        var V = o.type.defaultProps;
      for (L in f)
        K.call(f, L) && !me.hasOwnProperty(L) && (j[L] = f[L] === void 0 && V !== void 0 ? V[L] : f[L]);
    }
    var L = arguments.length - 2;
    if (L === 1)
      j.children = k;
    else if (1 < L) {
      V = Array(L);
      for (var oe = 0; oe < L; oe++)
        V[oe] = arguments[oe + 2];
      j.children = V;
    }
    return { $$typeof: n, type: o.type, key: M, ref: q, props: j, _owner: U };
  }, O.createContext = function(o) {
    return o = { $$typeof: y, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, o.Provider = { $$typeof: v, _context: o }, o.Consumer = o;
  }, O.createElement = he, O.createFactory = function(o) {
    var f = he.bind(null, o);
    return f.type = o, f;
  }, O.createRef = function() {
    return { current: null };
  }, O.forwardRef = function(o) {
    return { $$typeof: b, render: o };
  }, O.isValidElement = Ee, O.lazy = function(o) {
    return { $$typeof: x, _payload: { _status: -1, _result: o }, _init: de };
  }, O.memo = function(o, f) {
    return { $$typeof: F, type: o, compare: f === void 0 ? null : f };
  }, O.startTransition = function(o) {
    var f = be.transition;
    be.transition = {};
    try {
      o();
    } finally {
      be.transition = f;
    }
  }, O.unstable_act = we, O.useCallback = function(o, f) {
    return h.current.useCallback(o, f);
  }, O.useContext = function(o) {
    return h.current.useContext(o);
  }, O.useDebugValue = function() {
  }, O.useDeferredValue = function(o) {
    return h.current.useDeferredValue(o);
  }, O.useEffect = function(o, f) {
    return h.current.useEffect(o, f);
  }, O.useId = function() {
    return h.current.useId();
  }, O.useImperativeHandle = function(o, f, k) {
    return h.current.useImperativeHandle(o, f, k);
  }, O.useInsertionEffect = function(o, f) {
    return h.current.useInsertionEffect(o, f);
  }, O.useLayoutEffect = function(o, f) {
    return h.current.useLayoutEffect(o, f);
  }, O.useMemo = function(o, f) {
    return h.current.useMemo(o, f);
  }, O.useReducer = function(o, f, k) {
    return h.current.useReducer(o, f, k);
  }, O.useRef = function(o) {
    return h.current.useRef(o);
  }, O.useState = function(o) {
    return h.current.useState(o);
  }, O.useSyncExternalStore = function(o, f, k) {
    return h.current.useSyncExternalStore(o, f, k);
  }, O.useTransition = function() {
    return h.current.useTransition();
  }, O.version = "18.3.1", O;
}
var sr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
sr.exports;
var jt;
function gn() {
  return jt || (jt = 1, function(n, a) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var u = "18.3.1", c = Symbol.for("react.element"), m = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), F = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), I = Symbol.iterator, W = "@@iterator";
      function P(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = I && e[I] || e[W];
        return typeof r == "function" ? r : null;
      }
      var ve = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ie = {
        transition: null
      }, K = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, le = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, me = {}, he = null;
      function _e(e) {
        he = e;
      }
      me.setExtraStackFrame = function(e) {
        he = e;
      }, me.getCurrentStack = null, me.getStackAddendum = function() {
        var e = "";
        he && (e += he);
        var r = me.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Ee = !1, Ce = !1, $ = !1, se = !1, ue = !1, ne = {
        ReactCurrentDispatcher: ve,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: le
      };
      ne.ReactDebugCurrentFrame = me, ne.ReactCurrentActQueue = K;
      function de(e) {
        {
          for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
            i[s - 1] = arguments[s];
          be("warn", e, i);
        }
      }
      function h(e) {
        {
          for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
            i[s - 1] = arguments[s];
          be("error", e, i);
        }
      }
      function be(e, r, i) {
        {
          var s = ne.ReactDebugCurrentFrame, p = s.getStackAddendum();
          p !== "" && (r += "%s", i = i.concat([p]));
          var _ = i.map(function(g) {
            return String(g);
          });
          _.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, _);
        }
      }
      var ye = {};
      function we(e, r) {
        {
          var i = e.constructor, s = i && (i.displayName || i.name) || "ReactClass", p = s + "." + r;
          if (ye[p])
            return;
          h("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, s), ye[p] = !0;
        }
      }
      var o = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, i) {
          we(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, i, s) {
          we(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, i, s) {
          we(e, "setState");
        }
      }, f = Object.assign, k = {};
      Object.freeze(k);
      function j(e, r, i) {
        this.props = e, this.context = r, this.refs = k, this.updater = i || o;
      }
      j.prototype.isReactComponent = {}, j.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, j.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var M = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, q = function(e, r) {
          Object.defineProperty(j.prototype, e, {
            get: function() {
              de("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var U in M)
          M.hasOwnProperty(U) && q(U, M[U]);
      }
      function V() {
      }
      V.prototype = j.prototype;
      function L(e, r, i) {
        this.props = e, this.context = r, this.refs = k, this.updater = i || o;
      }
      var oe = L.prototype = new V();
      oe.constructor = L, f(oe, j.prototype), oe.isPureReactComponent = !0;
      function Ar() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var ur = Array.isArray;
      function Ue(e) {
        return ur(e);
      }
      function Ir(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return i;
        }
      }
      function Ye(e) {
        try {
          return ke(e), !1;
        } catch {
          return !0;
        }
      }
      function ke(e) {
        return "" + e;
      }
      function Fe(e) {
        if (Ye(e))
          return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ir(e)), ke(e);
      }
      function lr(e, r, i) {
        var s = e.displayName;
        if (s)
          return s;
        var p = r.displayName || r.name || "";
        return p !== "" ? i + "(" + p + ")" : i;
      }
      function $e(e) {
        return e.displayName || "Context";
      }
      function Re(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case v:
            return "Fragment";
          case m:
            return "Portal";
          case b:
            return "Profiler";
          case y:
            return "StrictMode";
          case N:
            return "Suspense";
          case G:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case F:
              var r = e;
              return $e(r) + ".Consumer";
            case w:
              var i = e;
              return $e(i._context) + ".Provider";
            case x:
              return lr(e, e.render, "ForwardRef");
            case B:
              var s = e.displayName || null;
              return s !== null ? s : Re(e.type) || "Memo";
            case Z: {
              var p = e, _ = p._payload, g = p._init;
              try {
                return Re(g(_));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Me = Object.prototype.hasOwnProperty, Ge = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, cr, fr, Be;
      Be = {};
      function Qe(e) {
        if (Me.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Pe(e) {
        if (Me.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Dr(e, r) {
        var i = function() {
          cr || (cr = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
      function dr(e, r) {
        var i = function() {
          fr || (fr = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
      function pr(e) {
        if (typeof e.ref == "string" && le.current && e.__self && le.current.stateNode !== e.__self) {
          var r = Re(le.current.type);
          Be[r] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Be[r] = !0);
        }
      }
      var Ne = function(e, r, i, s, p, _, g) {
        var R = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: c,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: i,
          props: g,
          // Record the component responsible for creating this element.
          _owner: _
        };
        return R._store = {}, Object.defineProperty(R._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(R, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: s
        }), Object.defineProperty(R, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p
        }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
      };
      function Fr(e, r, i) {
        var s, p = {}, _ = null, g = null, R = null, A = null;
        if (r != null) {
          Qe(r) && (g = r.ref, pr(r)), Pe(r) && (Fe(r.key), _ = "" + r.key), R = r.__self === void 0 ? null : r.__self, A = r.__source === void 0 ? null : r.__source;
          for (s in r)
            Me.call(r, s) && !Ge.hasOwnProperty(s) && (p[s] = r[s]);
        }
        var Y = arguments.length - 2;
        if (Y === 1)
          p.children = i;
        else if (Y > 1) {
          for (var X = Array(Y), Q = 0; Q < Y; Q++)
            X[Q] = arguments[Q + 2];
          Object.freeze && Object.freeze(X), p.children = X;
        }
        if (e && e.defaultProps) {
          var re = e.defaultProps;
          for (s in re)
            p[s] === void 0 && (p[s] = re[s]);
        }
        if (_ || g) {
          var ae = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          _ && Dr(p, ae), g && dr(p, ae);
        }
        return Ne(e, _, g, R, A, le.current, p);
      }
      function $r(e, r) {
        var i = Ne(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return i;
      }
      function Mr(e, r, i) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var s, p = f({}, e.props), _ = e.key, g = e.ref, R = e._self, A = e._source, Y = e._owner;
        if (r != null) {
          Qe(r) && (g = r.ref, Y = le.current), Pe(r) && (Fe(r.key), _ = "" + r.key);
          var X;
          e.type && e.type.defaultProps && (X = e.type.defaultProps);
          for (s in r)
            Me.call(r, s) && !Ge.hasOwnProperty(s) && (r[s] === void 0 && X !== void 0 ? p[s] = X[s] : p[s] = r[s]);
        }
        var Q = arguments.length - 2;
        if (Q === 1)
          p.children = i;
        else if (Q > 1) {
          for (var re = Array(Q), ae = 0; ae < Q; ae++)
            re[ae] = arguments[ae + 2];
          p.children = re;
        }
        return Ne(e.type, _, g, R, A, Y, p);
      }
      function Te(e) {
        return typeof e == "object" && e !== null && e.$$typeof === c;
      }
      var vr = ".", Nr = ":";
      function Lr(e) {
        var r = /[=:]/g, i = {
          "=": "=0",
          ":": "=2"
        }, s = e.replace(r, function(p) {
          return i[p];
        });
        return "$" + s;
      }
      var qe = !1, br = /\/+/g;
      function xe(e) {
        return e.replace(br, "$&/");
      }
      function Le(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Fe(e.key), Lr("" + e.key)) : r.toString(36);
      }
      function je(e, r, i, s, p) {
        var _ = typeof e;
        (_ === "undefined" || _ === "boolean") && (e = null);
        var g = !1;
        if (e === null)
          g = !0;
        else
          switch (_) {
            case "string":
            case "number":
              g = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case c:
                case m:
                  g = !0;
              }
          }
        if (g) {
          var R = e, A = p(R), Y = s === "" ? vr + Le(R, 0) : s;
          if (Ue(A)) {
            var X = "";
            Y != null && (X = xe(Y) + "/"), je(A, r, X, "", function(pn) {
              return pn;
            });
          } else
            A != null && (Te(A) && (A.key && (!R || R.key !== A.key) && Fe(A.key), A = $r(
              A,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              i + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (A.key && (!R || R.key !== A.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                xe("" + A.key) + "/"
              ) : "") + Y
            )), r.push(A));
          return 1;
        }
        var Q, re, ae = 0, fe = s === "" ? vr : s + Nr;
        if (Ue(e))
          for (var Or = 0; Or < e.length; Or++)
            Q = e[Or], re = fe + Le(Q, Or), ae += je(Q, r, i, re, p);
        else {
          var et = P(e);
          if (typeof et == "function") {
            var Ot = e;
            et === Ot.entries && (qe || de("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), qe = !0);
            for (var fn = et.call(Ot), kt, dn = 0; !(kt = fn.next()).done; )
              Q = kt.value, re = fe + Le(Q, dn++), ae += je(Q, r, i, re, p);
          } else if (_ === "object") {
            var Pt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (Pt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : Pt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ae;
      }
      function ze(e, r, i) {
        if (e == null)
          return e;
        var s = [], p = 0;
        return je(e, s, "", "", function(_) {
          return r.call(i, _, p++);
        }), s;
      }
      function zr(e) {
        var r = 0;
        return ze(e, function() {
          r++;
        }), r;
      }
      function gr(e, r, i) {
        ze(e, function() {
          r.apply(this, arguments);
        }, i);
      }
      function Wr(e) {
        return ze(e, function(r) {
          return r;
        }) || [];
      }
      function mr(e) {
        if (!Te(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function yr(e) {
        var r = {
          $$typeof: F,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: w,
          _context: r
        };
        var i = !1, s = !1, p = !1;
        {
          var _ = {
            $$typeof: F,
            _context: r
          };
          Object.defineProperties(_, {
            Provider: {
              get: function() {
                return s || (s = !0, h("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(g) {
                r.Provider = g;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(g) {
                r._currentValue = g;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(g) {
                r._currentValue2 = g;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(g) {
                r._threadCount = g;
              }
            },
            Consumer: {
              get: function() {
                return i || (i = !0, h("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(g) {
                p || (de("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", g), p = !0);
              }
            }
          }), r.Consumer = _;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var We = -1, Ze = 0, er = 1, hr = 2;
      function Vr(e) {
        if (e._status === We) {
          var r = e._result, i = r();
          if (i.then(function(_) {
            if (e._status === Ze || e._status === We) {
              var g = e;
              g._status = er, g._result = _;
            }
          }, function(_) {
            if (e._status === Ze || e._status === We) {
              var g = e;
              g._status = hr, g._result = _;
            }
          }), e._status === We) {
            var s = e;
            s._status = Ze, s._result = i;
          }
        }
        if (e._status === er) {
          var p = e._result;
          return p === void 0 && h(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, p), "default" in p || h(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, p), p.default;
        } else
          throw e._result;
      }
      function Ur(e) {
        var r = {
          // We use these fields to store the result.
          _status: We,
          _result: e
        }, i = {
          $$typeof: Z,
          _payload: r,
          _init: Vr
        };
        {
          var s, p;
          Object.defineProperties(i, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return s;
              },
              set: function(_) {
                h("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), s = _, Object.defineProperty(i, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return p;
              },
              set: function(_) {
                h("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), p = _, Object.defineProperty(i, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return i;
      }
      function Yr(e) {
        e != null && e.$$typeof === B ? h("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? h("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && h("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && h("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: x,
          render: e
        };
        {
          var i;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return i;
            },
            set: function(s) {
              i = s, !e.name && !e.displayName && (e.displayName = s);
            }
          });
        }
        return r;
      }
      var wr;
      wr = Symbol.for("react.module.reference");
      function t(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === v || e === b || ue || e === y || e === N || e === G || se || e === J || Ee || Ce || $ || typeof e == "object" && e !== null && (e.$$typeof === Z || e.$$typeof === B || e.$$typeof === w || e.$$typeof === F || e.$$typeof === x || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === wr || e.getModuleId !== void 0));
      }
      function l(e, r) {
        t(e) || h("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var i = {
          $$typeof: B,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var s;
          Object.defineProperty(i, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return s;
            },
            set: function(p) {
              s = p, !e.name && !e.displayName && (e.displayName = p);
            }
          });
        }
        return i;
      }
      function d() {
        var e = ve.current;
        return e === null && h(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function E(e) {
        var r = d();
        if (e._context !== void 0) {
          var i = e._context;
          i.Consumer === e ? h("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : i.Provider === e && h("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function D(e) {
        var r = d();
        return r.useState(e);
      }
      function z(e, r, i) {
        var s = d();
        return s.useReducer(e, r, i);
      }
      function T(e) {
        var r = d();
        return r.useRef(e);
      }
      function S(e, r) {
        var i = d();
        return i.useEffect(e, r);
      }
      function ce(e, r) {
        var i = d();
        return i.useInsertionEffect(e, r);
      }
      function ee(e, r) {
        var i = d();
        return i.useLayoutEffect(e, r);
      }
      function te(e, r) {
        var i = d();
        return i.useCallback(e, r);
      }
      function ge(e, r) {
        var i = d();
        return i.useMemo(e, r);
      }
      function Ae(e, r, i) {
        var s = d();
        return s.useImperativeHandle(e, r, i);
      }
      function Se(e, r) {
        {
          var i = d();
          return i.useDebugValue(e, r);
        }
      }
      function pe() {
        var e = d();
        return e.useTransition();
      }
      function rr(e) {
        var r = d();
        return r.useDeferredValue(e);
      }
      function Gr() {
        var e = d();
        return e.useId();
      }
      function Br(e, r, i) {
        var s = d();
        return s.useSyncExternalStore(e, r, i);
      }
      var tr = 0, it, st, ut, lt, ct, ft, dt;
      function pt() {
      }
      pt.__reactDisabledLog = !0;
      function Bt() {
        {
          if (tr === 0) {
            it = console.log, st = console.info, ut = console.warn, lt = console.error, ct = console.group, ft = console.groupCollapsed, dt = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: pt,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          tr++;
        }
      }
      function qt() {
        {
          if (tr--, tr === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: f({}, e, {
                value: it
              }),
              info: f({}, e, {
                value: st
              }),
              warn: f({}, e, {
                value: ut
              }),
              error: f({}, e, {
                value: lt
              }),
              group: f({}, e, {
                value: ct
              }),
              groupCollapsed: f({}, e, {
                value: ft
              }),
              groupEnd: f({}, e, {
                value: dt
              })
            });
          }
          tr < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var qr = ne.ReactCurrentDispatcher, Kr;
      function _r(e, r, i) {
        {
          if (Kr === void 0)
            try {
              throw Error();
            } catch (p) {
              var s = p.stack.trim().match(/\n( *(at )?)/);
              Kr = s && s[1] || "";
            }
          return `
` + Kr + e;
        }
      }
      var Hr = !1, Er;
      {
        var Kt = typeof WeakMap == "function" ? WeakMap : Map;
        Er = new Kt();
      }
      function vt(e, r) {
        if (!e || Hr)
          return "";
        {
          var i = Er.get(e);
          if (i !== void 0)
            return i;
        }
        var s;
        Hr = !0;
        var p = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var _;
        _ = qr.current, qr.current = null, Bt();
        try {
          if (r) {
            var g = function() {
              throw Error();
            };
            if (Object.defineProperty(g.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(g, []);
              } catch (fe) {
                s = fe;
              }
              Reflect.construct(e, [], g);
            } else {
              try {
                g.call();
              } catch (fe) {
                s = fe;
              }
              e.call(g.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (fe) {
              s = fe;
            }
            e();
          }
        } catch (fe) {
          if (fe && s && typeof fe.stack == "string") {
            for (var R = fe.stack.split(`
`), A = s.stack.split(`
`), Y = R.length - 1, X = A.length - 1; Y >= 1 && X >= 0 && R[Y] !== A[X]; )
              X--;
            for (; Y >= 1 && X >= 0; Y--, X--)
              if (R[Y] !== A[X]) {
                if (Y !== 1 || X !== 1)
                  do
                    if (Y--, X--, X < 0 || R[Y] !== A[X]) {
                      var Q = `
` + R[Y].replace(" at new ", " at ");
                      return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), typeof e == "function" && Er.set(e, Q), Q;
                    }
                  while (Y >= 1 && X >= 0);
                break;
              }
          }
        } finally {
          Hr = !1, qr.current = _, qt(), Error.prepareStackTrace = p;
        }
        var re = e ? e.displayName || e.name : "", ae = re ? _r(re) : "";
        return typeof e == "function" && Er.set(e, ae), ae;
      }
      function Ht(e, r, i) {
        return vt(e, !1);
      }
      function Jt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function Rr(e, r, i) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return vt(e, Jt(e));
        if (typeof e == "string")
          return _r(e);
        switch (e) {
          case N:
            return _r("Suspense");
          case G:
            return _r("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case x:
              return Ht(e.render);
            case B:
              return Rr(e.type, r, i);
            case Z: {
              var s = e, p = s._payload, _ = s._init;
              try {
                return Rr(_(p), r, i);
              } catch {
              }
            }
          }
        return "";
      }
      var bt = {}, gt = ne.ReactDebugCurrentFrame;
      function Cr(e) {
        if (e) {
          var r = e._owner, i = Rr(e.type, e._source, r ? r.type : null);
          gt.setExtraStackFrame(i);
        } else
          gt.setExtraStackFrame(null);
      }
      function Xt(e, r, i, s, p) {
        {
          var _ = Function.call.bind(Me);
          for (var g in e)
            if (_(e, g)) {
              var R = void 0;
              try {
                if (typeof e[g] != "function") {
                  var A = Error((s || "React class") + ": " + i + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw A.name = "Invariant Violation", A;
                }
                R = e[g](r, g, s, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Y) {
                R = Y;
              }
              R && !(R instanceof Error) && (Cr(p), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", i, g, typeof R), Cr(null)), R instanceof Error && !(R.message in bt) && (bt[R.message] = !0, Cr(p), h("Failed %s type: %s", i, R.message), Cr(null));
            }
        }
      }
      function Ke(e) {
        if (e) {
          var r = e._owner, i = Rr(e.type, e._source, r ? r.type : null);
          _e(i);
        } else
          _e(null);
      }
      var Jr;
      Jr = !1;
      function mt() {
        if (le.current) {
          var e = Re(le.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Qt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + r + ":" + i + ".";
        }
        return "";
      }
      function Zt(e) {
        return e != null ? Qt(e.__source) : "";
      }
      var yt = {};
      function en(e) {
        var r = mt();
        if (!r) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (r = `

Check the top-level render call using <` + i + ">.");
        }
        return r;
      }
      function ht(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var i = en(r);
          if (!yt[i]) {
            yt[i] = !0;
            var s = "";
            e && e._owner && e._owner !== le.current && (s = " It was passed a child from " + Re(e._owner.type) + "."), Ke(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, s), Ke(null);
          }
        }
      }
      function wt(e, r) {
        if (typeof e == "object") {
          if (Ue(e))
            for (var i = 0; i < e.length; i++) {
              var s = e[i];
              Te(s) && ht(s, r);
            }
          else if (Te(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var p = P(e);
            if (typeof p == "function" && p !== e.entries)
              for (var _ = p.call(e), g; !(g = _.next()).done; )
                Te(g.value) && ht(g.value, r);
          }
        }
      }
      function _t(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var i;
          if (typeof r == "function")
            i = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === x || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === B))
            i = r.propTypes;
          else
            return;
          if (i) {
            var s = Re(r);
            Xt(i, e.props, "prop", s, e);
          } else if (r.PropTypes !== void 0 && !Jr) {
            Jr = !0;
            var p = Re(r);
            h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function rn(e) {
        {
          for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
            var s = r[i];
            if (s !== "children" && s !== "key") {
              Ke(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), Ke(null);
              break;
            }
          }
          e.ref !== null && (Ke(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), Ke(null));
        }
      }
      function Et(e, r, i) {
        var s = t(e);
        if (!s) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = Zt(r);
          _ ? p += _ : p += mt();
          var g;
          e === null ? g = "null" : Ue(e) ? g = "array" : e !== void 0 && e.$$typeof === c ? (g = "<" + (Re(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, h("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, p);
        }
        var R = Fr.apply(this, arguments);
        if (R == null)
          return R;
        if (s)
          for (var A = 2; A < arguments.length; A++)
            wt(arguments[A], e);
        return e === v ? rn(R) : _t(R), R;
      }
      var Rt = !1;
      function tn(e) {
        var r = Et.bind(null, e);
        return r.type = e, Rt || (Rt = !0, de("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return de("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function nn(e, r, i) {
        for (var s = Mr.apply(this, arguments), p = 2; p < arguments.length; p++)
          wt(arguments[p], s.type);
        return _t(s), s;
      }
      function on(e, r) {
        var i = ie.transition;
        ie.transition = {};
        var s = ie.transition;
        ie.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ie.transition = i, i === null && s._updatedFibers) {
            var p = s._updatedFibers.size;
            p > 10 && de("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
          }
        }
      }
      var Ct = !1, xr = null;
      function an(e) {
        if (xr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), i = n && n[r];
            xr = i.call(n, "timers").setImmediate;
          } catch {
            xr = function(p) {
              Ct === !1 && (Ct = !0, typeof MessageChannel > "u" && h("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var _ = new MessageChannel();
              _.port1.onmessage = p, _.port2.postMessage(void 0);
            };
          }
        return xr(e);
      }
      var He = 0, xt = !1;
      function St(e) {
        {
          var r = He;
          He++, K.current === null && (K.current = []);
          var i = K.isBatchingLegacy, s;
          try {
            if (K.isBatchingLegacy = !0, s = e(), !i && K.didScheduleLegacyUpdate) {
              var p = K.current;
              p !== null && (K.didScheduleLegacyUpdate = !1, Zr(p));
            }
          } catch (re) {
            throw Sr(r), re;
          } finally {
            K.isBatchingLegacy = i;
          }
          if (s !== null && typeof s == "object" && typeof s.then == "function") {
            var _ = s, g = !1, R = {
              then: function(re, ae) {
                g = !0, _.then(function(fe) {
                  Sr(r), He === 0 ? Xr(fe, re, ae) : re(fe);
                }, function(fe) {
                  Sr(r), ae(fe);
                });
              }
            };
            return !xt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              g || (xt = !0, h("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), R;
          } else {
            var A = s;
            if (Sr(r), He === 0) {
              var Y = K.current;
              Y !== null && (Zr(Y), K.current = null);
              var X = {
                then: function(re, ae) {
                  K.current === null ? (K.current = [], Xr(A, re, ae)) : re(A);
                }
              };
              return X;
            } else {
              var Q = {
                then: function(re, ae) {
                  re(A);
                }
              };
              return Q;
            }
          }
        }
      }
      function Sr(e) {
        e !== He - 1 && h("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), He = e;
      }
      function Xr(e, r, i) {
        {
          var s = K.current;
          if (s !== null)
            try {
              Zr(s), an(function() {
                s.length === 0 ? (K.current = null, r(e)) : Xr(e, r, i);
              });
            } catch (p) {
              i(p);
            }
          else
            r(e);
        }
      }
      var Qr = !1;
      function Zr(e) {
        if (!Qr) {
          Qr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var i = e[r];
              do
                i = i(!0);
              while (i !== null);
            }
            e.length = 0;
          } catch (s) {
            throw e = e.slice(r + 1), s;
          } finally {
            Qr = !1;
          }
        }
      }
      var sn = Et, un = nn, ln = tn, cn = {
        map: ze,
        forEach: gr,
        count: zr,
        toArray: Wr,
        only: mr
      };
      a.Children = cn, a.Component = j, a.Fragment = v, a.Profiler = b, a.PureComponent = L, a.StrictMode = y, a.Suspense = N, a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne, a.act = St, a.cloneElement = un, a.createContext = yr, a.createElement = sn, a.createFactory = ln, a.createRef = Ar, a.forwardRef = Yr, a.isValidElement = Te, a.lazy = Ur, a.memo = l, a.startTransition = on, a.unstable_act = St, a.useCallback = te, a.useContext = E, a.useDebugValue = Se, a.useDeferredValue = rr, a.useEffect = S, a.useId = Gr, a.useImperativeHandle = Ae, a.useInsertionEffect = ce, a.useLayoutEffect = ee, a.useMemo = ge, a.useReducer = z, a.useRef = T, a.useState = D, a.useSyncExternalStore = Br, a.useTransition = pe, a.version = u, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(sr, sr.exports)), sr.exports;
}
process.env.NODE_ENV === "production" ? nt.exports = bn() : nt.exports = gn();
var jr = nt.exports;
const Ve = /* @__PURE__ */ vn(jr);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At;
function mn() {
  if (At)
    return nr;
  At = 1;
  var n = jr, a = Symbol.for("react.element"), u = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(b, w, F) {
    var x, N = {}, G = null, B = null;
    F !== void 0 && (G = "" + F), w.key !== void 0 && (G = "" + w.key), w.ref !== void 0 && (B = w.ref);
    for (x in w)
      c.call(w, x) && !v.hasOwnProperty(x) && (N[x] = w[x]);
    if (b && b.defaultProps)
      for (x in w = b.defaultProps, w)
        N[x] === void 0 && (N[x] = w[x]);
    return { $$typeof: a, type: b, key: G, ref: B, props: N, _owner: m.current };
  }
  return nr.Fragment = u, nr.jsx = y, nr.jsxs = y, nr;
}
var or = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var It;
function yn() {
  return It || (It = 1, process.env.NODE_ENV !== "production" && function() {
    var n = jr, a = Symbol.for("react.element"), u = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), b = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), Z = Symbol.iterator, J = "@@iterator";
    function I(t) {
      if (t === null || typeof t != "object")
        return null;
      var l = Z && t[Z] || t[J];
      return typeof l == "function" ? l : null;
    }
    var W = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(t) {
      {
        for (var l = arguments.length, d = new Array(l > 1 ? l - 1 : 0), E = 1; E < l; E++)
          d[E - 1] = arguments[E];
        ve("error", t, d);
      }
    }
    function ve(t, l, d) {
      {
        var E = W.ReactDebugCurrentFrame, D = E.getStackAddendum();
        D !== "" && (l += "%s", d = d.concat([D]));
        var z = d.map(function(T) {
          return String(T);
        });
        z.unshift("Warning: " + l), Function.prototype.apply.call(console[t], console, z);
      }
    }
    var ie = !1, K = !1, le = !1, me = !1, he = !1, _e;
    _e = Symbol.for("react.module.reference");
    function Ee(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === c || t === v || he || t === m || t === F || t === x || me || t === B || ie || K || le || typeof t == "object" && t !== null && (t.$$typeof === G || t.$$typeof === N || t.$$typeof === y || t.$$typeof === b || t.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === _e || t.getModuleId !== void 0));
    }
    function Ce(t, l, d) {
      var E = t.displayName;
      if (E)
        return E;
      var D = l.displayName || l.name || "";
      return D !== "" ? d + "(" + D + ")" : d;
    }
    function $(t) {
      return t.displayName || "Context";
    }
    function se(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case c:
          return "Fragment";
        case u:
          return "Portal";
        case v:
          return "Profiler";
        case m:
          return "StrictMode";
        case F:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case b:
            var l = t;
            return $(l) + ".Consumer";
          case y:
            var d = t;
            return $(d._context) + ".Provider";
          case w:
            return Ce(t, t.render, "ForwardRef");
          case N:
            var E = t.displayName || null;
            return E !== null ? E : se(t.type) || "Memo";
          case G: {
            var D = t, z = D._payload, T = D._init;
            try {
              return se(T(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ue = Object.assign, ne = 0, de, h, be, ye, we, o, f;
    function k() {
    }
    k.__reactDisabledLog = !0;
    function j() {
      {
        if (ne === 0) {
          de = console.log, h = console.info, be = console.warn, ye = console.error, we = console.group, o = console.groupCollapsed, f = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: k,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        ne++;
      }
    }
    function M() {
      {
        if (ne--, ne === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ue({}, t, {
              value: de
            }),
            info: ue({}, t, {
              value: h
            }),
            warn: ue({}, t, {
              value: be
            }),
            error: ue({}, t, {
              value: ye
            }),
            group: ue({}, t, {
              value: we
            }),
            groupCollapsed: ue({}, t, {
              value: o
            }),
            groupEnd: ue({}, t, {
              value: f
            })
          });
        }
        ne < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = W.ReactCurrentDispatcher, U;
    function V(t, l, d) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (D) {
            var E = D.stack.trim().match(/\n( *(at )?)/);
            U = E && E[1] || "";
          }
        return `
` + U + t;
      }
    }
    var L = !1, oe;
    {
      var Ar = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new Ar();
    }
    function ur(t, l) {
      if (!t || L)
        return "";
      {
        var d = oe.get(t);
        if (d !== void 0)
          return d;
      }
      var E;
      L = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = q.current, q.current = null, j();
      try {
        if (l) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (pe) {
              E = pe;
            }
            Reflect.construct(t, [], T);
          } else {
            try {
              T.call();
            } catch (pe) {
              E = pe;
            }
            t.call(T.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            E = pe;
          }
          t();
        }
      } catch (pe) {
        if (pe && E && typeof pe.stack == "string") {
          for (var S = pe.stack.split(`
`), ce = E.stack.split(`
`), ee = S.length - 1, te = ce.length - 1; ee >= 1 && te >= 0 && S[ee] !== ce[te]; )
            te--;
          for (; ee >= 1 && te >= 0; ee--, te--)
            if (S[ee] !== ce[te]) {
              if (ee !== 1 || te !== 1)
                do
                  if (ee--, te--, te < 0 || S[ee] !== ce[te]) {
                    var ge = `
` + S[ee].replace(" at new ", " at ");
                    return t.displayName && ge.includes("<anonymous>") && (ge = ge.replace("<anonymous>", t.displayName)), typeof t == "function" && oe.set(t, ge), ge;
                  }
                while (ee >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        L = !1, q.current = z, M(), Error.prepareStackTrace = D;
      }
      var Ae = t ? t.displayName || t.name : "", Se = Ae ? V(Ae) : "";
      return typeof t == "function" && oe.set(t, Se), Se;
    }
    function Ue(t, l, d) {
      return ur(t, !1);
    }
    function Ir(t) {
      var l = t.prototype;
      return !!(l && l.isReactComponent);
    }
    function Ye(t, l, d) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ur(t, Ir(t));
      if (typeof t == "string")
        return V(t);
      switch (t) {
        case F:
          return V("Suspense");
        case x:
          return V("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case w:
            return Ue(t.render);
          case N:
            return Ye(t.type, l, d);
          case G: {
            var E = t, D = E._payload, z = E._init;
            try {
              return Ye(z(D), l, d);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, Fe = {}, lr = W.ReactDebugCurrentFrame;
    function $e(t) {
      if (t) {
        var l = t._owner, d = Ye(t.type, t._source, l ? l.type : null);
        lr.setExtraStackFrame(d);
      } else
        lr.setExtraStackFrame(null);
    }
    function Re(t, l, d, E, D) {
      {
        var z = Function.call.bind(ke);
        for (var T in t)
          if (z(t, T)) {
            var S = void 0;
            try {
              if (typeof t[T] != "function") {
                var ce = Error((E || "React class") + ": " + d + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              S = t[T](l, T, E, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              S = ee;
            }
            S && !(S instanceof Error) && ($e(D), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", E || "React class", d, T, typeof S), $e(null)), S instanceof Error && !(S.message in Fe) && (Fe[S.message] = !0, $e(D), P("Failed %s type: %s", d, S.message), $e(null));
          }
      }
    }
    var Me = Array.isArray;
    function Ge(t) {
      return Me(t);
    }
    function cr(t) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, d = l && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return d;
      }
    }
    function fr(t) {
      try {
        return Be(t), !1;
      } catch {
        return !0;
      }
    }
    function Be(t) {
      return "" + t;
    }
    function Qe(t) {
      if (fr(t))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", cr(t)), Be(t);
    }
    var Pe = W.ReactCurrentOwner, Dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dr, pr, Ne;
    Ne = {};
    function Fr(t) {
      if (ke.call(t, "ref")) {
        var l = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function $r(t) {
      if (ke.call(t, "key")) {
        var l = Object.getOwnPropertyDescriptor(t, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Mr(t, l) {
      if (typeof t.ref == "string" && Pe.current && l && Pe.current.stateNode !== l) {
        var d = se(Pe.current.type);
        Ne[d] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', se(Pe.current.type), t.ref), Ne[d] = !0);
      }
    }
    function Te(t, l) {
      {
        var d = function() {
          dr || (dr = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function vr(t, l) {
      {
        var d = function() {
          pr || (pr = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        d.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var Nr = function(t, l, d, E, D, z, T) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: t,
        key: l,
        ref: d,
        props: T,
        // Record the component responsible for creating this element.
        _owner: z
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function Lr(t, l, d, E, D) {
      {
        var z, T = {}, S = null, ce = null;
        d !== void 0 && (Qe(d), S = "" + d), $r(l) && (Qe(l.key), S = "" + l.key), Fr(l) && (ce = l.ref, Mr(l, D));
        for (z in l)
          ke.call(l, z) && !Dr.hasOwnProperty(z) && (T[z] = l[z]);
        if (t && t.defaultProps) {
          var ee = t.defaultProps;
          for (z in ee)
            T[z] === void 0 && (T[z] = ee[z]);
        }
        if (S || ce) {
          var te = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          S && Te(T, te), ce && vr(T, te);
        }
        return Nr(t, S, ce, D, E, Pe.current, T);
      }
    }
    var qe = W.ReactCurrentOwner, br = W.ReactDebugCurrentFrame;
    function xe(t) {
      if (t) {
        var l = t._owner, d = Ye(t.type, t._source, l ? l.type : null);
        br.setExtraStackFrame(d);
      } else
        br.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function je(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function ze() {
      {
        if (qe.current) {
          var t = se(qe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function zr(t) {
      {
        if (t !== void 0) {
          var l = t.fileName.replace(/^.*[\\\/]/, ""), d = t.lineNumber;
          return `

Check your code at ` + l + ":" + d + ".";
        }
        return "";
      }
    }
    var gr = {};
    function Wr(t) {
      {
        var l = ze();
        if (!l) {
          var d = typeof t == "string" ? t : t.displayName || t.name;
          d && (l = `

Check the top-level render call using <` + d + ">.");
        }
        return l;
      }
    }
    function mr(t, l) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var d = Wr(l);
        if (gr[d])
          return;
        gr[d] = !0;
        var E = "";
        t && t._owner && t._owner !== qe.current && (E = " It was passed a child from " + se(t._owner.type) + "."), xe(t), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, E), xe(null);
      }
    }
    function yr(t, l) {
      {
        if (typeof t != "object")
          return;
        if (Ge(t))
          for (var d = 0; d < t.length; d++) {
            var E = t[d];
            je(E) && mr(E, l);
          }
        else if (je(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var D = I(t);
          if (typeof D == "function" && D !== t.entries)
            for (var z = D.call(t), T; !(T = z.next()).done; )
              je(T.value) && mr(T.value, l);
        }
      }
    }
    function We(t) {
      {
        var l = t.type;
        if (l == null || typeof l == "string")
          return;
        var d;
        if (typeof l == "function")
          d = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        l.$$typeof === N))
          d = l.propTypes;
        else
          return;
        if (d) {
          var E = se(l);
          Re(d, t.props, "prop", E, t);
        } else if (l.PropTypes !== void 0 && !Le) {
          Le = !0;
          var D = se(l);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ze(t) {
      {
        for (var l = Object.keys(t.props), d = 0; d < l.length; d++) {
          var E = l[d];
          if (E !== "children" && E !== "key") {
            xe(t), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", E), xe(null);
            break;
          }
        }
        t.ref !== null && (xe(t), P("Invalid attribute `ref` supplied to `React.Fragment`."), xe(null));
      }
    }
    var er = {};
    function hr(t, l, d, E, D, z) {
      {
        var T = Ee(t);
        if (!T) {
          var S = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = zr(D);
          ce ? S += ce : S += ze();
          var ee;
          t === null ? ee = "null" : Ge(t) ? ee = "array" : t !== void 0 && t.$$typeof === a ? (ee = "<" + (se(t.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof t, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, S);
        }
        var te = Lr(t, l, d, D, z);
        if (te == null)
          return te;
        if (T) {
          var ge = l.children;
          if (ge !== void 0)
            if (E)
              if (Ge(ge)) {
                for (var Ae = 0; Ae < ge.length; Ae++)
                  yr(ge[Ae], t);
                Object.freeze && Object.freeze(ge);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yr(ge, t);
        }
        if (ke.call(l, "key")) {
          var Se = se(t), pe = Object.keys(l).filter(function(Br) {
            return Br !== "key";
          }), rr = pe.length > 0 ? "{key: someKey, " + pe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!er[Se + rr]) {
            var Gr = pe.length > 0 ? "{" + pe.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rr, Se, Gr, Se), er[Se + rr] = !0;
          }
        }
        return t === c ? Ze(te) : We(te), te;
      }
    }
    function Vr(t, l, d) {
      return hr(t, l, d, !0);
    }
    function Ur(t, l, d) {
      return hr(t, l, d, !1);
    }
    var Yr = Ur, wr = Vr;
    or.Fragment = c, or.jsx = Yr, or.jsxs = wr;
  }()), or;
}
process.env.NODE_ENV === "production" ? tt.exports = mn() : tt.exports = yn();
var kr = tt.exports, Lt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Dt = Ve.createContext && /* @__PURE__ */ Ve.createContext(Lt), hn = ["attr", "size", "title"];
function wn(n, a) {
  if (n == null)
    return {};
  var u = _n(n, a), c, m;
  if (Object.getOwnPropertySymbols) {
    var v = Object.getOwnPropertySymbols(n);
    for (m = 0; m < v.length; m++)
      c = v[m], !(a.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(n, c) && (u[c] = n[c]);
  }
  return u;
}
function _n(n, a) {
  if (n == null)
    return {};
  var u = {};
  for (var c in n)
    if (Object.prototype.hasOwnProperty.call(n, c)) {
      if (a.indexOf(c) >= 0)
        continue;
      u[c] = n[c];
    }
  return u;
}
function Pr() {
  return Pr = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var u = arguments[a];
      for (var c in u)
        Object.prototype.hasOwnProperty.call(u, c) && (n[c] = u[c]);
    }
    return n;
  }, Pr.apply(this, arguments);
}
function Ft(n, a) {
  var u = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    a && (c = c.filter(function(m) {
      return Object.getOwnPropertyDescriptor(n, m).enumerable;
    })), u.push.apply(u, c);
  }
  return u;
}
function Tr(n) {
  for (var a = 1; a < arguments.length; a++) {
    var u = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Ft(Object(u), !0).forEach(function(c) {
      En(n, c, u[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(u)) : Ft(Object(u)).forEach(function(c) {
      Object.defineProperty(n, c, Object.getOwnPropertyDescriptor(u, c));
    });
  }
  return n;
}
function En(n, a, u) {
  return a = Rn(a), a in n ? Object.defineProperty(n, a, { value: u, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = u, n;
}
function Rn(n) {
  var a = Cn(n, "string");
  return typeof a == "symbol" ? a : a + "";
}
function Cn(n, a) {
  if (typeof n != "object" || !n)
    return n;
  var u = n[Symbol.toPrimitive];
  if (u !== void 0) {
    var c = u.call(n, a || "default");
    if (typeof c != "object")
      return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(n);
}
function zt(n) {
  return n && n.map((a, u) => /* @__PURE__ */ Ve.createElement(a.tag, Tr({
    key: u
  }, a.attr), zt(a.child)));
}
function xn(n) {
  return (a) => /* @__PURE__ */ Ve.createElement(Sn, Pr({
    attr: Tr({}, n.attr)
  }, a), zt(n.child));
}
function Sn(n) {
  var a = (u) => {
    var {
      attr: c,
      size: m,
      title: v
    } = n, y = wn(n, hn), b = m || u.size || "1em", w;
    return u.className && (w = u.className), n.className && (w = (w ? w + " " : "") + n.className), /* @__PURE__ */ Ve.createElement("svg", Pr({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, u.attr, c, y, {
      className: w,
      style: Tr(Tr({
        color: n.color || u.color
      }, u.style), n.style),
      height: b,
      width: b,
      xmlns: "http://www.w3.org/2000/svg"
    }), v && /* @__PURE__ */ Ve.createElement("title", null, v), n.children);
  };
  return Dt !== void 0 ? /* @__PURE__ */ Ve.createElement(Dt.Consumer, null, (u) => a(u)) : a(Lt);
}
function On(n) {
  return xn({ tag: "svg", attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" }, child: [] }] })(n);
}
const at = "-", kn = (n) => {
  const a = Tn(n), {
    conflictingClassGroups: u,
    conflictingClassGroupModifiers: c
  } = n;
  return {
    getClassGroupId: (y) => {
      const b = y.split(at);
      return b[0] === "" && b.length !== 1 && b.shift(), Wt(b, a) || Pn(y);
    },
    getConflictingClassGroupIds: (y, b) => {
      const w = u[y] || [];
      return b && c[y] ? [...w, ...c[y]] : w;
    }
  };
}, Wt = (n, a) => {
  var y;
  if (n.length === 0)
    return a.classGroupId;
  const u = n[0], c = a.nextPart.get(u), m = c ? Wt(n.slice(1), c) : void 0;
  if (m)
    return m;
  if (a.validators.length === 0)
    return;
  const v = n.join(at);
  return (y = a.validators.find(({
    validator: b
  }) => b(v))) == null ? void 0 : y.classGroupId;
}, $t = /^\[(.+)\]$/, Pn = (n) => {
  if ($t.test(n)) {
    const a = $t.exec(n)[1], u = a == null ? void 0 : a.substring(0, a.indexOf(":"));
    if (u)
      return "arbitrary.." + u;
  }
}, Tn = (n) => {
  const {
    theme: a,
    prefix: u
  } = n, c = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return An(Object.entries(n.classGroups), u).forEach(([v, y]) => {
    ot(y, c, v, a);
  }), c;
}, ot = (n, a, u, c) => {
  n.forEach((m) => {
    if (typeof m == "string") {
      const v = m === "" ? a : Mt(a, m);
      v.classGroupId = u;
      return;
    }
    if (typeof m == "function") {
      if (jn(m)) {
        ot(m(c), a, u, c);
        return;
      }
      a.validators.push({
        validator: m,
        classGroupId: u
      });
      return;
    }
    Object.entries(m).forEach(([v, y]) => {
      ot(y, Mt(a, v), u, c);
    });
  });
}, Mt = (n, a) => {
  let u = n;
  return a.split(at).forEach((c) => {
    u.nextPart.has(c) || u.nextPart.set(c, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), u = u.nextPart.get(c);
  }), u;
}, jn = (n) => n.isThemeGetter, An = (n, a) => a ? n.map(([u, c]) => {
  const m = c.map((v) => typeof v == "string" ? a + v : typeof v == "object" ? Object.fromEntries(Object.entries(v).map(([y, b]) => [a + y, b])) : v);
  return [u, m];
}) : n, In = (n) => {
  if (n < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let a = 0, u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
  const m = (v, y) => {
    u.set(v, y), a++, a > n && (a = 0, c = u, u = /* @__PURE__ */ new Map());
  };
  return {
    get(v) {
      let y = u.get(v);
      if (y !== void 0)
        return y;
      if ((y = c.get(v)) !== void 0)
        return m(v, y), y;
    },
    set(v, y) {
      u.has(v) ? u.set(v, y) : m(v, y);
    }
  };
}, Vt = "!", Dn = (n) => {
  const {
    separator: a,
    experimentalParseClassName: u
  } = n, c = a.length === 1, m = a[0], v = a.length, y = (b) => {
    const w = [];
    let F = 0, x = 0, N;
    for (let I = 0; I < b.length; I++) {
      let W = b[I];
      if (F === 0) {
        if (W === m && (c || b.slice(I, I + v) === a)) {
          w.push(b.slice(x, I)), x = I + v;
          continue;
        }
        if (W === "/") {
          N = I;
          continue;
        }
      }
      W === "[" ? F++ : W === "]" && F--;
    }
    const G = w.length === 0 ? b : b.substring(x), B = G.startsWith(Vt), Z = B ? G.substring(1) : G, J = N && N > x ? N - x : void 0;
    return {
      modifiers: w,
      hasImportantModifier: B,
      baseClassName: Z,
      maybePostfixModifierPosition: J
    };
  };
  return u ? (b) => u({
    className: b,
    parseClassName: y
  }) : y;
}, Fn = (n) => {
  if (n.length <= 1)
    return n;
  const a = [];
  let u = [];
  return n.forEach((c) => {
    c[0] === "[" ? (a.push(...u.sort(), c), u = []) : u.push(c);
  }), a.push(...u.sort()), a;
}, $n = (n) => ({
  cache: In(n.cacheSize),
  parseClassName: Dn(n),
  ...kn(n)
}), Mn = /\s+/, Nn = (n, a) => {
  const {
    parseClassName: u,
    getClassGroupId: c,
    getConflictingClassGroupIds: m
  } = a, v = [], y = n.trim().split(Mn);
  let b = "";
  for (let w = y.length - 1; w >= 0; w -= 1) {
    const F = y[w], {
      modifiers: x,
      hasImportantModifier: N,
      baseClassName: G,
      maybePostfixModifierPosition: B
    } = u(F);
    let Z = !!B, J = c(Z ? G.substring(0, B) : G);
    if (!J) {
      if (!Z) {
        b = F + (b.length > 0 ? " " + b : b);
        continue;
      }
      if (J = c(G), !J) {
        b = F + (b.length > 0 ? " " + b : b);
        continue;
      }
      Z = !1;
    }
    const I = Fn(x).join(":"), W = N ? I + Vt : I, P = W + J;
    if (v.includes(P))
      continue;
    v.push(P);
    const ve = m(J, Z);
    for (let ie = 0; ie < ve.length; ++ie) {
      const K = ve[ie];
      v.push(W + K);
    }
    b = F + (b.length > 0 ? " " + b : b);
  }
  return b;
};
function Ln() {
  let n = 0, a, u, c = "";
  for (; n < arguments.length; )
    (a = arguments[n++]) && (u = Ut(a)) && (c && (c += " "), c += u);
  return c;
}
const Ut = (n) => {
  if (typeof n == "string")
    return n;
  let a, u = "";
  for (let c = 0; c < n.length; c++)
    n[c] && (a = Ut(n[c])) && (u && (u += " "), u += a);
  return u;
};
function zn(n, ...a) {
  let u, c, m, v = y;
  function y(w) {
    const F = a.reduce((x, N) => N(x), n());
    return u = $n(F), c = u.cache.get, m = u.cache.set, v = b, b(w);
  }
  function b(w) {
    const F = c(w);
    if (F)
      return F;
    const x = Nn(w, u);
    return m(w, x), x;
  }
  return function() {
    return v(Ln.apply(null, arguments));
  };
}
const H = (n) => {
  const a = (u) => u[n] || [];
  return a.isThemeGetter = !0, a;
}, Yt = /^\[(?:([a-z-]+):)?(.+)\]$/i, Wn = /^\d+\/\d+$/, Vn = /* @__PURE__ */ new Set(["px", "full", "screen"]), Un = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Yn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Gn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Bn = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, qn = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Oe = (n) => Je(n) || Vn.has(n) || Wn.test(n), Ie = (n) => Xe(n, "length", ro), Je = (n) => !!n && !Number.isNaN(Number(n)), rt = (n) => Xe(n, "number", Je), ar = (n) => !!n && Number.isInteger(Number(n)), Kn = (n) => n.endsWith("%") && Je(n.slice(0, -1)), C = (n) => Yt.test(n), De = (n) => Un.test(n), Hn = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Jn = (n) => Xe(n, Hn, Gt), Xn = (n) => Xe(n, "position", Gt), Qn = /* @__PURE__ */ new Set(["image", "url"]), Zn = (n) => Xe(n, Qn, no), eo = (n) => Xe(n, "", to), ir = () => !0, Xe = (n, a, u) => {
  const c = Yt.exec(n);
  return c ? c[1] ? typeof a == "string" ? c[1] === a : a.has(c[1]) : u(c[2]) : !1;
}, ro = (n) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Yn.test(n) && !Gn.test(n)
), Gt = () => !1, to = (n) => Bn.test(n), no = (n) => qn.test(n), oo = () => {
  const n = H("colors"), a = H("spacing"), u = H("blur"), c = H("brightness"), m = H("borderColor"), v = H("borderRadius"), y = H("borderSpacing"), b = H("borderWidth"), w = H("contrast"), F = H("grayscale"), x = H("hueRotate"), N = H("invert"), G = H("gap"), B = H("gradientColorStops"), Z = H("gradientColorStopPositions"), J = H("inset"), I = H("margin"), W = H("opacity"), P = H("padding"), ve = H("saturate"), ie = H("scale"), K = H("sepia"), le = H("skew"), me = H("space"), he = H("translate"), _e = () => ["auto", "contain", "none"], Ee = () => ["auto", "hidden", "clip", "visible", "scroll"], Ce = () => ["auto", C, a], $ = () => [C, a], se = () => ["", Oe, Ie], ue = () => ["auto", Je, C], ne = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], de = () => ["solid", "dashed", "dotted", "double", "none"], h = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], be = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ye = () => ["", "0", C], we = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], o = () => [Je, C];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ir],
      spacing: [Oe, Ie],
      blur: ["none", "", De, C],
      brightness: o(),
      borderColor: [n],
      borderRadius: ["none", "", "full", De, C],
      borderSpacing: $(),
      borderWidth: se(),
      contrast: o(),
      grayscale: ye(),
      hueRotate: o(),
      invert: ye(),
      gap: $(),
      gradientColorStops: [n],
      gradientColorStopPositions: [Kn, Ie],
      inset: Ce(),
      margin: Ce(),
      opacity: o(),
      padding: $(),
      saturate: o(),
      scale: o(),
      sepia: ye(),
      skew: o(),
      space: $(),
      translate: $()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", C]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [De]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": we()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": we()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...ne(), C]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Ee()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Ee()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Ee()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: _e()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": _e()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": _e()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [J]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [J]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [J]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [J]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [J]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [J]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [J]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [J]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [J]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ar, C]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Ce()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", C]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ye()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ye()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ar, C]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ir]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ar, C]
        }, C]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ue()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ue()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ir]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ar, C]
        }, C]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ue()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ue()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", C]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", C]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [G]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [G]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [G]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...be()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...be(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...be(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [P]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [P]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [P]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [P]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [P]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [P]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [P]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [P]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [P]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [I]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [I]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [I]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [I]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [I]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [I]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [I]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [I]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [I]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [me]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [me]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", C, a]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [C, a, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [C, a, "none", "full", "min", "max", "fit", "prose", {
          screen: [De]
        }, De]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [C, a, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [C, a, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [C, a, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [C, a, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", De, Ie]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", rt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ir]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", C]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Je, rt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Oe, C]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", C]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", C]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [n]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [W]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [n]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [W]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...de(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Oe, Ie]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Oe, C]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [n]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: $()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", C]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", C]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [W]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...ne(), Xn]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Jn]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Zn]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [n]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [Z]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [Z]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [Z]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [B]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [B]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [B]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [v]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [v]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [v]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [v]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [v]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [v]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [v]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [v]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [v]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [v]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [v]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [v]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [v]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [v]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [v]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [b]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [b]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [b]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [b]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [b]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [b]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [b]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [b]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [b]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [W]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...de(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [b]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [b]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [W]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: de()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [m]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [m]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [m]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [m]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [m]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [m]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [m]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [m]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [m]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [m]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...de()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Oe, C]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Oe, Ie]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [n]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: se()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [n]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [W]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Oe, Ie]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [n]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", De, eo]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ir]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [W]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...h(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": h()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [u]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [c]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [w]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", De, C]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [F]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [x]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [N]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ve]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [K]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [u]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [c]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [w]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [F]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [x]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [N]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [W]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ve]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [K]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [y]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [y]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [y]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", C]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: o()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", C]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: o()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", C]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [ie]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [ie]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [ie]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ar, C]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [he]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [he]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [le]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [le]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", C]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", n]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", C]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [n]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": $()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": $()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": $()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": $()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": $()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": $()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": $()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": $()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": $()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": $()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": $()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": $()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": $()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": $()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": $()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": $()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": $()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": $()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", C]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [n, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Oe, Ie, rt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [n, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, Nt = /* @__PURE__ */ zn(oo), ao = jr.forwardRef(
  ({
    label: n,
    onClickFunction: a,
    type: u = "default",
    className: c = "",
    iconClassName: m = "",
    disabled: v = !1,
    icon: y,
    arrow: b = !1,
    ...w
  }, F) => {
    const x = "flex items-center p-4 rounded transition-all group disabled:opacity-80 disabled:cursor-not-allowed text-sm font-medium ", N = "mr-2", B = Nt(
      x,
      {
        default: "bg-gray-800 hover:bg-gray-700 text-white border border-black hover:border-gray-900",
        primary: "bg-primary hover:bg-primary-hover text-primary-text hover:text-primary-text-hover border border-primary-border hover:border-primary-border-hover",
        danger: "bg-red-600 hover:bg-red-700 text-white border border-red-700 hover:border-red-800",
        cancel: "bg-yellow-500 hover:bg-yellow-600 text-white border border-yellow-600 hover:border-yellow-700"
      }[u],
      c
    ), Z = Nt(
      N,
      m
    );
    return /* @__PURE__ */ kr.jsxs(
      "button",
      {
        ref: F,
        className: B,
        onClick: v ? void 0 : a,
        disabled: v,
        ...w,
        children: [
          y && /* @__PURE__ */ kr.jsx("span", { className: Z, children: y }),
          n,
          b && !v && /* @__PURE__ */ kr.jsx("span", { className: "relative ml-2 transition-all translate-x-0 group-hover:translate-x-1", children: /* @__PURE__ */ kr.jsx(On, {}) })
        ]
      }
    );
  }
);
ao.displayName = "Button";
export {
  ao as Button
};
