var Qr = { exports: {} }, tr = {}, Zr = { exports: {} }, k = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function sn() {
  if (kt)
    return k;
  kt = 1;
  var i = Symbol.for("react.element"), s = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), h = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), $ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), L = Symbol.iterator;
  function G(n) {
    return n === null || typeof n != "object" ? null : (n = L && n[L] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var B = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Z = Object.assign, J = {};
  function I(n, l, T) {
    this.props = n, this.context = l, this.refs = J, this.updater = T || B;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(n, l) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, l, "setState");
  }, I.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function W() {
  }
  W.prototype = I.prototype;
  function O(n, l, T) {
    this.props = n, this.context = l, this.refs = J, this.updater = T || B;
  }
  var ve = O.prototype = new W();
  ve.constructor = O, Z(ve, I.prototype), ve.isPureReactComponent = !0;
  var ie = Array.isArray, K = Object.prototype.hasOwnProperty, le = { current: null }, ye = { key: !0, ref: !0, __self: !0, __source: !0 };
  function me(n, l, T) {
    var j, M = {}, q = null, U = null;
    if (l != null)
      for (j in l.ref !== void 0 && (U = l.ref), l.key !== void 0 && (q = "" + l.key), l)
        K.call(l, j) && !ye.hasOwnProperty(j) && (M[j] = l[j]);
    var V = arguments.length - 2;
    if (V === 1)
      M.children = T;
    else if (1 < V) {
      for (var N = Array(V), oe = 0; oe < V; oe++)
        N[oe] = arguments[oe + 2];
      M.children = N;
    }
    if (n && n.defaultProps)
      for (j in V = n.defaultProps, V)
        M[j] === void 0 && (M[j] = V[j]);
    return { $$typeof: i, type: n, key: q, ref: U, props: M, _owner: le.current };
  }
  function _e(n, l) {
    return { $$typeof: i, type: n.type, key: l, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Re(n) {
    return typeof n == "object" && n !== null && n.$$typeof === i;
  }
  function Ce(n) {
    var l = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(T) {
      return l[T];
    });
  }
  var D = /\/+/g;
  function se(n, l) {
    return typeof n == "object" && n !== null && n.key != null ? Ce("" + n.key) : l.toString(36);
  }
  function ue(n, l, T, j, M) {
    var q = typeof n;
    (q === "undefined" || q === "boolean") && (n = null);
    var U = !1;
    if (n === null)
      U = !0;
    else
      switch (q) {
        case "string":
        case "number":
          U = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case i:
            case s:
              U = !0;
          }
      }
    if (U)
      return U = n, M = M(U), n = j === "" ? "." + se(U, 0) : j, ie(M) ? (T = "", n != null && (T = n.replace(D, "$&/") + "/"), ue(M, l, T, "", function(oe) {
        return oe;
      })) : M != null && (Re(M) && (M = _e(M, T + (!M.key || U && U.key === M.key ? "" : ("" + M.key).replace(D, "$&/") + "/") + n)), l.push(M)), 1;
    if (U = 0, j = j === "" ? "." : j + ":", ie(n))
      for (var V = 0; V < n.length; V++) {
        q = n[V];
        var N = j + se(q, V);
        U += ue(q, l, T, N, M);
      }
    else if (N = G(n), typeof N == "function")
      for (n = N.call(n), V = 0; !(q = n.next()).done; )
        q = q.value, N = j + se(q, V++), U += ue(q, l, T, N, M);
    else if (q === "object")
      throw l = String(n), Error("Objects are not valid as a React child (found: " + (l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l) + "). If you meant to render a collection of children, use an array instead.");
    return U;
  }
  function ne(n, l, T) {
    if (n == null)
      return n;
    var j = [], M = 0;
    return ue(n, j, "", "", function(q) {
      return l.call(T, q, M++);
    }), j;
  }
  function de(n) {
    if (n._status === -1) {
      var l = n._result;
      l = l(), l.then(function(T) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = T);
      }, function(T) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = T);
      }), n._status === -1 && (n._status = 0, n._result = l);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var y = { current: null }, be = { transition: null }, he = { ReactCurrentDispatcher: y, ReactCurrentBatchConfig: be, ReactCurrentOwner: le };
  function we() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return k.Children = { map: ne, forEach: function(n, l, T) {
    ne(n, function() {
      l.apply(this, arguments);
    }, T);
  }, count: function(n) {
    var l = 0;
    return ne(n, function() {
      l++;
    }), l;
  }, toArray: function(n) {
    return ne(n, function(l) {
      return l;
    }) || [];
  }, only: function(n) {
    if (!Re(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, k.Component = I, k.Fragment = d, k.Profiler = m, k.PureComponent = O, k.StrictMode = p, k.Suspense = R, k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = he, k.act = we, k.cloneElement = function(n, l, T) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var j = Z({}, n.props), M = n.key, q = n.ref, U = n._owner;
    if (l != null) {
      if (l.ref !== void 0 && (q = l.ref, U = le.current), l.key !== void 0 && (M = "" + l.key), n.type && n.type.defaultProps)
        var V = n.type.defaultProps;
      for (N in l)
        K.call(l, N) && !ye.hasOwnProperty(N) && (j[N] = l[N] === void 0 && V !== void 0 ? V[N] : l[N]);
    }
    var N = arguments.length - 2;
    if (N === 1)
      j.children = T;
    else if (1 < N) {
      V = Array(N);
      for (var oe = 0; oe < N; oe++)
        V[oe] = arguments[oe + 2];
      j.children = V;
    }
    return { $$typeof: i, type: n.type, key: M, ref: q, props: j, _owner: U };
  }, k.createContext = function(n) {
    return n = { $$typeof: h, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: v, _context: n }, n.Consumer = n;
  }, k.createElement = me, k.createFactory = function(n) {
    var l = me.bind(null, n);
    return l.type = n, l;
  }, k.createRef = function() {
    return { current: null };
  }, k.forwardRef = function(n) {
    return { $$typeof: b, render: n };
  }, k.isValidElement = Re, k.lazy = function(n) {
    return { $$typeof: x, _payload: { _status: -1, _result: n }, _init: de };
  }, k.memo = function(n, l) {
    return { $$typeof: $, type: n, compare: l === void 0 ? null : l };
  }, k.startTransition = function(n) {
    var l = be.transition;
    be.transition = {};
    try {
      n();
    } finally {
      be.transition = l;
    }
  }, k.unstable_act = we, k.useCallback = function(n, l) {
    return y.current.useCallback(n, l);
  }, k.useContext = function(n) {
    return y.current.useContext(n);
  }, k.useDebugValue = function() {
  }, k.useDeferredValue = function(n) {
    return y.current.useDeferredValue(n);
  }, k.useEffect = function(n, l) {
    return y.current.useEffect(n, l);
  }, k.useId = function() {
    return y.current.useId();
  }, k.useImperativeHandle = function(n, l, T) {
    return y.current.useImperativeHandle(n, l, T);
  }, k.useInsertionEffect = function(n, l) {
    return y.current.useInsertionEffect(n, l);
  }, k.useLayoutEffect = function(n, l) {
    return y.current.useLayoutEffect(n, l);
  }, k.useMemo = function(n, l) {
    return y.current.useMemo(n, l);
  }, k.useReducer = function(n, l, T) {
    return y.current.useReducer(n, l, T);
  }, k.useRef = function(n) {
    return y.current.useRef(n);
  }, k.useState = function(n) {
    return y.current.useState(n);
  }, k.useSyncExternalStore = function(n, l, T) {
    return y.current.useSyncExternalStore(n, l, T);
  }, k.useTransition = function() {
    return y.current.useTransition();
  }, k.version = "18.3.1", k;
}
var ir = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ir.exports;
var Tt;
function un() {
  return Tt || (Tt = 1, function(i, s) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var d = "18.3.1", p = Symbol.for("react.element"), m = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), $ = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), I = Symbol.iterator, W = "@@iterator";
      function O(e) {
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
      }, ye = {}, me = null;
      function _e(e) {
        me = e;
      }
      ye.setExtraStackFrame = function(e) {
        me = e;
      }, ye.getCurrentStack = null, ye.getStackAddendum = function() {
        var e = "";
        me && (e += me);
        var r = ye.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Re = !1, Ce = !1, D = !1, se = !1, ue = !1, ne = {
        ReactCurrentDispatcher: ve,
        ReactCurrentBatchConfig: ie,
        ReactCurrentOwner: le
      };
      ne.ReactDebugCurrentFrame = ye, ne.ReactCurrentActQueue = K;
      function de(e) {
        {
          for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
            o[a - 1] = arguments[a];
          be("warn", e, o);
        }
      }
      function y(e) {
        {
          for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
            o[a - 1] = arguments[a];
          be("error", e, o);
        }
      }
      function be(e, r, o) {
        {
          var a = ne.ReactDebugCurrentFrame, f = a.getStackAddendum();
          f !== "" && (r += "%s", o = o.concat([f]));
          var w = o.map(function(g) {
            return String(g);
          });
          w.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, w);
        }
      }
      var he = {};
      function we(e, r) {
        {
          var o = e.constructor, a = o && (o.displayName || o.name) || "ReactClass", f = a + "." + r;
          if (he[f])
            return;
          y("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, a), he[f] = !0;
        }
      }
      var n = {
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
        enqueueForceUpdate: function(e, r, o) {
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
        enqueueReplaceState: function(e, r, o, a) {
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
        enqueueSetState: function(e, r, o, a) {
          we(e, "setState");
        }
      }, l = Object.assign, T = {};
      Object.freeze(T);
      function j(e, r, o) {
        this.props = e, this.context = r, this.refs = T, this.updater = o || n;
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
      function N(e, r, o) {
        this.props = e, this.context = r, this.refs = T, this.updater = o || n;
      }
      var oe = N.prototype = new V();
      oe.constructor = N, l(oe, j.prototype), oe.isPureReactComponent = !0;
      function kr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var sr = Array.isArray;
      function Ve(e) {
        return sr(e);
      }
      function Tr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return o;
        }
      }
      function Ue(e) {
        try {
          return Te(e), !1;
        } catch {
          return !0;
        }
      }
      function Te(e) {
        return "" + e;
      }
      function $e(e) {
        if (Ue(e))
          return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(e)), Te(e);
      }
      function ur(e, r, o) {
        var a = e.displayName;
        if (a)
          return a;
        var f = r.displayName || r.name || "";
        return f !== "" ? o + "(" + f + ")" : o;
      }
      function De(e) {
        return e.displayName || "Context";
      }
      function Ee(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
          case h:
            return "StrictMode";
          case L:
            return "Suspense";
          case G:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case $:
              var r = e;
              return De(r) + ".Consumer";
            case R:
              var o = e;
              return De(o._context) + ".Provider";
            case x:
              return ur(e, e.render, "ForwardRef");
            case B:
              var a = e.displayName || null;
              return a !== null ? a : Ee(e.type) || "Memo";
            case Z: {
              var f = e, w = f._payload, g = f._init;
              try {
                return Ee(g(w));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Me = Object.prototype.hasOwnProperty, Ye = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, lr, cr, Ge;
      Ge = {};
      function Xe(e) {
        if (Me.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Oe(e) {
        if (Me.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Or(e, r) {
        var o = function() {
          lr || (lr = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
      function fr(e, r) {
        var o = function() {
          cr || (cr = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
      function dr(e) {
        if (typeof e.ref == "string" && le.current && e.__self && le.current.stateNode !== e.__self) {
          var r = Ee(le.current.type);
          Ge[r] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ge[r] = !0);
        }
      }
      var Le = function(e, r, o, a, f, w, g) {
        var E = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: p,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: o,
          props: g,
          // Record the component responsible for creating this element.
          _owner: w
        };
        return E._store = {}, Object.defineProperty(E._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(E, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a
        }), Object.defineProperty(E, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: f
        }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
      };
      function Pr(e, r, o) {
        var a, f = {}, w = null, g = null, E = null, A = null;
        if (r != null) {
          Xe(r) && (g = r.ref, dr(r)), Oe(r) && ($e(r.key), w = "" + r.key), E = r.__self === void 0 ? null : r.__self, A = r.__source === void 0 ? null : r.__source;
          for (a in r)
            Me.call(r, a) && !Ye.hasOwnProperty(a) && (f[a] = r[a]);
        }
        var Y = arguments.length - 2;
        if (Y === 1)
          f.children = o;
        else if (Y > 1) {
          for (var X = Array(Y), Q = 0; Q < Y; Q++)
            X[Q] = arguments[Q + 2];
          Object.freeze && Object.freeze(X), f.children = X;
        }
        if (e && e.defaultProps) {
          var re = e.defaultProps;
          for (a in re)
            f[a] === void 0 && (f[a] = re[a]);
        }
        if (w || g) {
          var ae = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          w && Or(f, ae), g && fr(f, ae);
        }
        return Le(e, w, g, E, A, le.current, f);
      }
      function jr(e, r) {
        var o = Le(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return o;
      }
      function Ar(e, r, o) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var a, f = l({}, e.props), w = e.key, g = e.ref, E = e._self, A = e._source, Y = e._owner;
        if (r != null) {
          Xe(r) && (g = r.ref, Y = le.current), Oe(r) && ($e(r.key), w = "" + r.key);
          var X;
          e.type && e.type.defaultProps && (X = e.type.defaultProps);
          for (a in r)
            Me.call(r, a) && !Ye.hasOwnProperty(a) && (r[a] === void 0 && X !== void 0 ? f[a] = X[a] : f[a] = r[a]);
        }
        var Q = arguments.length - 2;
        if (Q === 1)
          f.children = o;
        else if (Q > 1) {
          for (var re = Array(Q), ae = 0; ae < Q; ae++)
            re[ae] = arguments[ae + 2];
          f.children = re;
        }
        return Le(e.type, w, g, E, A, Y, f);
      }
      function Pe(e) {
        return typeof e == "object" && e !== null && e.$$typeof === p;
      }
      var pr = ".", Ir = ":";
      function Fr(e) {
        var r = /[=:]/g, o = {
          "=": "=0",
          ":": "=2"
        }, a = e.replace(r, function(f) {
          return o[f];
        });
        return "$" + a;
      }
      var Be = !1, vr = /\/+/g;
      function xe(e) {
        return e.replace(vr, "$&/");
      }
      function Ne(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? ($e(e.key), Fr("" + e.key)) : r.toString(36);
      }
      function je(e, r, o, a, f) {
        var w = typeof e;
        (w === "undefined" || w === "boolean") && (e = null);
        var g = !1;
        if (e === null)
          g = !0;
        else
          switch (w) {
            case "string":
            case "number":
              g = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case p:
                case m:
                  g = !0;
              }
          }
        if (g) {
          var E = e, A = f(E), Y = a === "" ? pr + Ne(E, 0) : a;
          if (Ve(A)) {
            var X = "";
            Y != null && (X = xe(Y) + "/"), je(A, r, X, "", function(an) {
              return an;
            });
          } else
            A != null && (Pe(A) && (A.key && (!E || E.key !== A.key) && $e(A.key), A = jr(
              A,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              o + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (A.key && (!E || E.key !== A.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                xe("" + A.key) + "/"
              ) : "") + Y
            )), r.push(A));
          return 1;
        }
        var Q, re, ae = 0, fe = a === "" ? pr : a + Ir;
        if (Ve(e))
          for (var Sr = 0; Sr < e.length; Sr++)
            Q = e[Sr], re = fe + Ne(Q, Sr), ae += je(Q, r, o, re, f);
        else {
          var Hr = O(e);
          if (typeof Hr == "function") {
            var Ct = e;
            Hr === Ct.entries && (Be || de("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Be = !0);
            for (var nn = Hr.call(Ct), xt, on = 0; !(xt = nn.next()).done; )
              Q = xt.value, re = fe + Ne(Q, on++), ae += je(Q, r, o, re, f);
          } else if (w === "object") {
            var St = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (St === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : St) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ae;
      }
      function ze(e, r, o) {
        if (e == null)
          return e;
        var a = [], f = 0;
        return je(e, a, "", "", function(w) {
          return r.call(o, w, f++);
        }), a;
      }
      function $r(e) {
        var r = 0;
        return ze(e, function() {
          r++;
        }), r;
      }
      function br(e, r, o) {
        ze(e, function() {
          r.apply(this, arguments);
        }, o);
      }
      function Dr(e) {
        return ze(e, function(r) {
          return r;
        }) || [];
      }
      function gr(e) {
        if (!Pe(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function yr(e) {
        var r = {
          $$typeof: $,
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
          $$typeof: R,
          _context: r
        };
        var o = !1, a = !1, f = !1;
        {
          var w = {
            $$typeof: $,
            _context: r
          };
          Object.defineProperties(w, {
            Provider: {
              get: function() {
                return a || (a = !0, y("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
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
                return o || (o = !0, y("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(g) {
                f || (de("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", g), f = !0);
              }
            }
          }), r.Consumer = w;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var We = -1, Qe = 0, Ze = 1, hr = 2;
      function Mr(e) {
        if (e._status === We) {
          var r = e._result, o = r();
          if (o.then(function(w) {
            if (e._status === Qe || e._status === We) {
              var g = e;
              g._status = Ze, g._result = w;
            }
          }, function(w) {
            if (e._status === Qe || e._status === We) {
              var g = e;
              g._status = hr, g._result = w;
            }
          }), e._status === We) {
            var a = e;
            a._status = Qe, a._result = o;
          }
        }
        if (e._status === Ze) {
          var f = e._result;
          return f === void 0 && y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, f), "default" in f || y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, f), f.default;
        } else
          throw e._result;
      }
      function Lr(e) {
        var r = {
          // We use these fields to store the result.
          _status: We,
          _result: e
        }, o = {
          $$typeof: Z,
          _payload: r,
          _init: Mr
        };
        {
          var a, f;
          Object.defineProperties(o, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return a;
              },
              set: function(w) {
                y("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), a = w, Object.defineProperty(o, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return f;
              },
              set: function(w) {
                y("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), f = w, Object.defineProperty(o, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return o;
      }
      function Nr(e) {
        e != null && e.$$typeof === B ? y("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? y("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && y("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && y("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: x,
          render: e
        };
        {
          var o;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(a) {
              o = a, !e.name && !e.displayName && (e.displayName = a);
            }
          });
        }
        return r;
      }
      var mr;
      mr = Symbol.for("react.module.reference");
      function t(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === v || e === b || ue || e === h || e === L || e === G || se || e === J || Re || Ce || D || typeof e == "object" && e !== null && (e.$$typeof === Z || e.$$typeof === B || e.$$typeof === R || e.$$typeof === $ || e.$$typeof === x || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === mr || e.getModuleId !== void 0));
      }
      function u(e, r) {
        t(e) || y("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var o = {
          $$typeof: B,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var a;
          Object.defineProperty(o, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(f) {
              a = f, !e.name && !e.displayName && (e.displayName = f);
            }
          });
        }
        return o;
      }
      function c() {
        var e = ve.current;
        return e === null && y(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function _(e) {
        var r = c();
        if (e._context !== void 0) {
          var o = e._context;
          o.Consumer === e ? y("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : o.Provider === e && y("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function F(e) {
        var r = c();
        return r.useState(e);
      }
      function z(e, r, o) {
        var a = c();
        return a.useReducer(e, r, o);
      }
      function P(e) {
        var r = c();
        return r.useRef(e);
      }
      function S(e, r) {
        var o = c();
        return o.useEffect(e, r);
      }
      function ce(e, r) {
        var o = c();
        return o.useInsertionEffect(e, r);
      }
      function ee(e, r) {
        var o = c();
        return o.useLayoutEffect(e, r);
      }
      function te(e, r) {
        var o = c();
        return o.useCallback(e, r);
      }
      function ge(e, r) {
        var o = c();
        return o.useMemo(e, r);
      }
      function Ae(e, r, o) {
        var a = c();
        return a.useImperativeHandle(e, r, o);
      }
      function Se(e, r) {
        {
          var o = c();
          return o.useDebugValue(e, r);
        }
      }
      function pe() {
        var e = c();
        return e.useTransition();
      }
      function er(e) {
        var r = c();
        return r.useDeferredValue(e);
      }
      function zr() {
        var e = c();
        return e.useId();
      }
      function Wr(e, r, o) {
        var a = c();
        return a.useSyncExternalStore(e, r, o);
      }
      var rr = 0, nt, ot, at, it, st, ut, lt;
      function ct() {
      }
      ct.__reactDisabledLog = !0;
      function Nt() {
        {
          if (rr === 0) {
            nt = console.log, ot = console.info, at = console.warn, it = console.error, st = console.group, ut = console.groupCollapsed, lt = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: ct,
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
          rr++;
        }
      }
      function zt() {
        {
          if (rr--, rr === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: l({}, e, {
                value: nt
              }),
              info: l({}, e, {
                value: ot
              }),
              warn: l({}, e, {
                value: at
              }),
              error: l({}, e, {
                value: it
              }),
              group: l({}, e, {
                value: st
              }),
              groupCollapsed: l({}, e, {
                value: ut
              }),
              groupEnd: l({}, e, {
                value: lt
              })
            });
          }
          rr < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Vr = ne.ReactCurrentDispatcher, Ur;
      function wr(e, r, o) {
        {
          if (Ur === void 0)
            try {
              throw Error();
            } catch (f) {
              var a = f.stack.trim().match(/\n( *(at )?)/);
              Ur = a && a[1] || "";
            }
          return `
` + Ur + e;
        }
      }
      var Yr = !1, _r;
      {
        var Wt = typeof WeakMap == "function" ? WeakMap : Map;
        _r = new Wt();
      }
      function ft(e, r) {
        if (!e || Yr)
          return "";
        {
          var o = _r.get(e);
          if (o !== void 0)
            return o;
        }
        var a;
        Yr = !0;
        var f = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var w;
        w = Vr.current, Vr.current = null, Nt();
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
                a = fe;
              }
              Reflect.construct(e, [], g);
            } else {
              try {
                g.call();
              } catch (fe) {
                a = fe;
              }
              e.call(g.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (fe) {
              a = fe;
            }
            e();
          }
        } catch (fe) {
          if (fe && a && typeof fe.stack == "string") {
            for (var E = fe.stack.split(`
`), A = a.stack.split(`
`), Y = E.length - 1, X = A.length - 1; Y >= 1 && X >= 0 && E[Y] !== A[X]; )
              X--;
            for (; Y >= 1 && X >= 0; Y--, X--)
              if (E[Y] !== A[X]) {
                if (Y !== 1 || X !== 1)
                  do
                    if (Y--, X--, X < 0 || E[Y] !== A[X]) {
                      var Q = `
` + E[Y].replace(" at new ", " at ");
                      return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), typeof e == "function" && _r.set(e, Q), Q;
                    }
                  while (Y >= 1 && X >= 0);
                break;
              }
          }
        } finally {
          Yr = !1, Vr.current = w, zt(), Error.prepareStackTrace = f;
        }
        var re = e ? e.displayName || e.name : "", ae = re ? wr(re) : "";
        return typeof e == "function" && _r.set(e, ae), ae;
      }
      function Vt(e, r, o) {
        return ft(e, !1);
      }
      function Ut(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function Rr(e, r, o) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return ft(e, Ut(e));
        if (typeof e == "string")
          return wr(e);
        switch (e) {
          case L:
            return wr("Suspense");
          case G:
            return wr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case x:
              return Vt(e.render);
            case B:
              return Rr(e.type, r, o);
            case Z: {
              var a = e, f = a._payload, w = a._init;
              try {
                return Rr(w(f), r, o);
              } catch {
              }
            }
          }
        return "";
      }
      var dt = {}, pt = ne.ReactDebugCurrentFrame;
      function Er(e) {
        if (e) {
          var r = e._owner, o = Rr(e.type, e._source, r ? r.type : null);
          pt.setExtraStackFrame(o);
        } else
          pt.setExtraStackFrame(null);
      }
      function Yt(e, r, o, a, f) {
        {
          var w = Function.call.bind(Me);
          for (var g in e)
            if (w(e, g)) {
              var E = void 0;
              try {
                if (typeof e[g] != "function") {
                  var A = Error((a || "React class") + ": " + o + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw A.name = "Invariant Violation", A;
                }
                E = e[g](r, g, a, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Y) {
                E = Y;
              }
              E && !(E instanceof Error) && (Er(f), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", o, g, typeof E), Er(null)), E instanceof Error && !(E.message in dt) && (dt[E.message] = !0, Er(f), y("Failed %s type: %s", o, E.message), Er(null));
            }
        }
      }
      function qe(e) {
        if (e) {
          var r = e._owner, o = Rr(e.type, e._source, r ? r.type : null);
          _e(o);
        } else
          _e(null);
      }
      var Gr;
      Gr = !1;
      function vt() {
        if (le.current) {
          var e = Ee(le.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Gt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), o = e.lineNumber;
          return `

Check your code at ` + r + ":" + o + ".";
        }
        return "";
      }
      function Bt(e) {
        return e != null ? Gt(e.__source) : "";
      }
      var bt = {};
      function qt(e) {
        var r = vt();
        if (!r) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
      function gt(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var o = qt(r);
          if (!bt[o]) {
            bt[o] = !0;
            var a = "";
            e && e._owner && e._owner !== le.current && (a = " It was passed a child from " + Ee(e._owner.type) + "."), qe(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, a), qe(null);
          }
        }
      }
      function yt(e, r) {
        if (typeof e == "object") {
          if (Ve(e))
            for (var o = 0; o < e.length; o++) {
              var a = e[o];
              Pe(a) && gt(a, r);
            }
          else if (Pe(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var f = O(e);
            if (typeof f == "function" && f !== e.entries)
              for (var w = f.call(e), g; !(g = w.next()).done; )
                Pe(g.value) && gt(g.value, r);
          }
        }
      }
      function ht(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var o;
          if (typeof r == "function")
            o = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === x || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === B))
            o = r.propTypes;
          else
            return;
          if (o) {
            var a = Ee(r);
            Yt(o, e.props, "prop", a, e);
          } else if (r.PropTypes !== void 0 && !Gr) {
            Gr = !0;
            var f = Ee(r);
            y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Kt(e) {
        {
          for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
            var a = r[o];
            if (a !== "children" && a !== "key") {
              qe(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), qe(null);
              break;
            }
          }
          e.ref !== null && (qe(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), qe(null));
        }
      }
      function mt(e, r, o) {
        var a = t(e);
        if (!a) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = Bt(r);
          w ? f += w : f += vt();
          var g;
          e === null ? g = "null" : Ve(e) ? g = "array" : e !== void 0 && e.$$typeof === p ? (g = "<" + (Ee(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, y("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, f);
        }
        var E = Pr.apply(this, arguments);
        if (E == null)
          return E;
        if (a)
          for (var A = 2; A < arguments.length; A++)
            yt(arguments[A], e);
        return e === v ? Kt(E) : ht(E), E;
      }
      var wt = !1;
      function Ht(e) {
        var r = mt.bind(null, e);
        return r.type = e, wt || (wt = !0, de("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return de("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function Jt(e, r, o) {
        for (var a = Ar.apply(this, arguments), f = 2; f < arguments.length; f++)
          yt(arguments[f], a.type);
        return ht(a), a;
      }
      function Xt(e, r) {
        var o = ie.transition;
        ie.transition = {};
        var a = ie.transition;
        ie.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (ie.transition = o, o === null && a._updatedFibers) {
            var f = a._updatedFibers.size;
            f > 10 && de("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), a._updatedFibers.clear();
          }
        }
      }
      var _t = !1, Cr = null;
      function Qt(e) {
        if (Cr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), o = i && i[r];
            Cr = o.call(i, "timers").setImmediate;
          } catch {
            Cr = function(f) {
              _t === !1 && (_t = !0, typeof MessageChannel > "u" && y("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var w = new MessageChannel();
              w.port1.onmessage = f, w.port2.postMessage(void 0);
            };
          }
        return Cr(e);
      }
      var Ke = 0, Rt = !1;
      function Et(e) {
        {
          var r = Ke;
          Ke++, K.current === null && (K.current = []);
          var o = K.isBatchingLegacy, a;
          try {
            if (K.isBatchingLegacy = !0, a = e(), !o && K.didScheduleLegacyUpdate) {
              var f = K.current;
              f !== null && (K.didScheduleLegacyUpdate = !1, Kr(f));
            }
          } catch (re) {
            throw xr(r), re;
          } finally {
            K.isBatchingLegacy = o;
          }
          if (a !== null && typeof a == "object" && typeof a.then == "function") {
            var w = a, g = !1, E = {
              then: function(re, ae) {
                g = !0, w.then(function(fe) {
                  xr(r), Ke === 0 ? Br(fe, re, ae) : re(fe);
                }, function(fe) {
                  xr(r), ae(fe);
                });
              }
            };
            return !Rt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              g || (Rt = !0, y("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), E;
          } else {
            var A = a;
            if (xr(r), Ke === 0) {
              var Y = K.current;
              Y !== null && (Kr(Y), K.current = null);
              var X = {
                then: function(re, ae) {
                  K.current === null ? (K.current = [], Br(A, re, ae)) : re(A);
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
      function xr(e) {
        e !== Ke - 1 && y("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ke = e;
      }
      function Br(e, r, o) {
        {
          var a = K.current;
          if (a !== null)
            try {
              Kr(a), Qt(function() {
                a.length === 0 ? (K.current = null, r(e)) : Br(e, r, o);
              });
            } catch (f) {
              o(f);
            }
          else
            r(e);
        }
      }
      var qr = !1;
      function Kr(e) {
        if (!qr) {
          qr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var o = e[r];
              do
                o = o(!0);
              while (o !== null);
            }
            e.length = 0;
          } catch (a) {
            throw e = e.slice(r + 1), a;
          } finally {
            qr = !1;
          }
        }
      }
      var Zt = mt, en = Jt, rn = Ht, tn = {
        map: ze,
        forEach: br,
        count: $r,
        toArray: Dr,
        only: gr
      };
      s.Children = tn, s.Component = j, s.Fragment = v, s.Profiler = b, s.PureComponent = N, s.StrictMode = h, s.Suspense = L, s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ne, s.act = Et, s.cloneElement = en, s.createContext = yr, s.createElement = Zt, s.createFactory = rn, s.createRef = kr, s.forwardRef = Nr, s.isValidElement = Pe, s.lazy = Lr, s.memo = u, s.startTransition = Xt, s.unstable_act = Et, s.useCallback = te, s.useContext = _, s.useDebugValue = Se, s.useDeferredValue = er, s.useEffect = S, s.useId = zr, s.useImperativeHandle = Ae, s.useInsertionEffect = ce, s.useLayoutEffect = ee, s.useMemo = ge, s.useReducer = z, s.useRef = P, s.useState = F, s.useSyncExternalStore = Wr, s.useTransition = pe, s.version = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ir, ir.exports)), ir.exports;
}
process.env.NODE_ENV === "production" ? Zr.exports = sn() : Zr.exports = un();
var rt = Zr.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot;
function ln() {
  if (Ot)
    return tr;
  Ot = 1;
  var i = rt, s = Symbol.for("react.element"), d = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, m = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(b, R, $) {
    var x, L = {}, G = null, B = null;
    $ !== void 0 && (G = "" + $), R.key !== void 0 && (G = "" + R.key), R.ref !== void 0 && (B = R.ref);
    for (x in R)
      p.call(R, x) && !v.hasOwnProperty(x) && (L[x] = R[x]);
    if (b && b.defaultProps)
      for (x in R = b.defaultProps, R)
        L[x] === void 0 && (L[x] = R[x]);
    return { $$typeof: s, type: b, key: G, ref: B, props: L, _owner: m.current };
  }
  return tr.Fragment = d, tr.jsx = h, tr.jsxs = h, tr;
}
var nr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pt;
function cn() {
  return Pt || (Pt = 1, process.env.NODE_ENV !== "production" && function() {
    var i = rt, s = Symbol.for("react.element"), d = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), b = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), Z = Symbol.iterator, J = "@@iterator";
    function I(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = Z && t[Z] || t[J];
      return typeof u == "function" ? u : null;
    }
    var W = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(t) {
      {
        for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), _ = 1; _ < u; _++)
          c[_ - 1] = arguments[_];
        ve("error", t, c);
      }
    }
    function ve(t, u, c) {
      {
        var _ = W.ReactDebugCurrentFrame, F = _.getStackAddendum();
        F !== "" && (u += "%s", c = c.concat([F]));
        var z = c.map(function(P) {
          return String(P);
        });
        z.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, z);
      }
    }
    var ie = !1, K = !1, le = !1, ye = !1, me = !1, _e;
    _e = Symbol.for("react.module.reference");
    function Re(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === p || t === v || me || t === m || t === $ || t === x || ye || t === B || ie || K || le || typeof t == "object" && t !== null && (t.$$typeof === G || t.$$typeof === L || t.$$typeof === h || t.$$typeof === b || t.$$typeof === R || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === _e || t.getModuleId !== void 0));
    }
    function Ce(t, u, c) {
      var _ = t.displayName;
      if (_)
        return _;
      var F = u.displayName || u.name || "";
      return F !== "" ? c + "(" + F + ")" : c;
    }
    function D(t) {
      return t.displayName || "Context";
    }
    function se(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case p:
          return "Fragment";
        case d:
          return "Portal";
        case v:
          return "Profiler";
        case m:
          return "StrictMode";
        case $:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case b:
            var u = t;
            return D(u) + ".Consumer";
          case h:
            var c = t;
            return D(c._context) + ".Provider";
          case R:
            return Ce(t, t.render, "ForwardRef");
          case L:
            var _ = t.displayName || null;
            return _ !== null ? _ : se(t.type) || "Memo";
          case G: {
            var F = t, z = F._payload, P = F._init;
            try {
              return se(P(z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ue = Object.assign, ne = 0, de, y, be, he, we, n, l;
    function T() {
    }
    T.__reactDisabledLog = !0;
    function j() {
      {
        if (ne === 0) {
          de = console.log, y = console.info, be = console.warn, he = console.error, we = console.group, n = console.groupCollapsed, l = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: T,
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
              value: y
            }),
            warn: ue({}, t, {
              value: be
            }),
            error: ue({}, t, {
              value: he
            }),
            group: ue({}, t, {
              value: we
            }),
            groupCollapsed: ue({}, t, {
              value: n
            }),
            groupEnd: ue({}, t, {
              value: l
            })
          });
        }
        ne < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = W.ReactCurrentDispatcher, U;
    function V(t, u, c) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (F) {
            var _ = F.stack.trim().match(/\n( *(at )?)/);
            U = _ && _[1] || "";
          }
        return `
` + U + t;
      }
    }
    var N = !1, oe;
    {
      var kr = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new kr();
    }
    function sr(t, u) {
      if (!t || N)
        return "";
      {
        var c = oe.get(t);
        if (c !== void 0)
          return c;
      }
      var _;
      N = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z;
      z = q.current, q.current = null, j();
      try {
        if (u) {
          var P = function() {
            throw Error();
          };
          if (Object.defineProperty(P.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(P, []);
            } catch (pe) {
              _ = pe;
            }
            Reflect.construct(t, [], P);
          } else {
            try {
              P.call();
            } catch (pe) {
              _ = pe;
            }
            t.call(P.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            _ = pe;
          }
          t();
        }
      } catch (pe) {
        if (pe && _ && typeof pe.stack == "string") {
          for (var S = pe.stack.split(`
`), ce = _.stack.split(`
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
        N = !1, q.current = z, M(), Error.prepareStackTrace = F;
      }
      var Ae = t ? t.displayName || t.name : "", Se = Ae ? V(Ae) : "";
      return typeof t == "function" && oe.set(t, Se), Se;
    }
    function Ve(t, u, c) {
      return sr(t, !1);
    }
    function Tr(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function Ue(t, u, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return sr(t, Tr(t));
      if (typeof t == "string")
        return V(t);
      switch (t) {
        case $:
          return V("Suspense");
        case x:
          return V("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case R:
            return Ve(t.render);
          case L:
            return Ue(t.type, u, c);
          case G: {
            var _ = t, F = _._payload, z = _._init;
            try {
              return Ue(z(F), u, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, $e = {}, ur = W.ReactDebugCurrentFrame;
    function De(t) {
      if (t) {
        var u = t._owner, c = Ue(t.type, t._source, u ? u.type : null);
        ur.setExtraStackFrame(c);
      } else
        ur.setExtraStackFrame(null);
    }
    function Ee(t, u, c, _, F) {
      {
        var z = Function.call.bind(Te);
        for (var P in t)
          if (z(t, P)) {
            var S = void 0;
            try {
              if (typeof t[P] != "function") {
                var ce = Error((_ || "React class") + ": " + c + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              S = t[P](u, P, _, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              S = ee;
            }
            S && !(S instanceof Error) && (De(F), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", _ || "React class", c, P, typeof S), De(null)), S instanceof Error && !(S.message in $e) && ($e[S.message] = !0, De(F), O("Failed %s type: %s", c, S.message), De(null));
          }
      }
    }
    var Me = Array.isArray;
    function Ye(t) {
      return Me(t);
    }
    function lr(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, c = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function cr(t) {
      try {
        return Ge(t), !1;
      } catch {
        return !0;
      }
    }
    function Ge(t) {
      return "" + t;
    }
    function Xe(t) {
      if (cr(t))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", lr(t)), Ge(t);
    }
    var Oe = W.ReactCurrentOwner, Or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fr, dr, Le;
    Le = {};
    function Pr(t) {
      if (Te.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function jr(t) {
      if (Te.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Ar(t, u) {
      if (typeof t.ref == "string" && Oe.current && u && Oe.current.stateNode !== u) {
        var c = se(Oe.current.type);
        Le[c] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', se(Oe.current.type), t.ref), Le[c] = !0);
      }
    }
    function Pe(t, u) {
      {
        var c = function() {
          fr || (fr = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function pr(t, u) {
      {
        var c = function() {
          dr || (dr = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Ir = function(t, u, c, _, F, z, P) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: c,
        props: P,
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
        value: _
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function Fr(t, u, c, _, F) {
      {
        var z, P = {}, S = null, ce = null;
        c !== void 0 && (Xe(c), S = "" + c), jr(u) && (Xe(u.key), S = "" + u.key), Pr(u) && (ce = u.ref, Ar(u, F));
        for (z in u)
          Te.call(u, z) && !Or.hasOwnProperty(z) && (P[z] = u[z]);
        if (t && t.defaultProps) {
          var ee = t.defaultProps;
          for (z in ee)
            P[z] === void 0 && (P[z] = ee[z]);
        }
        if (S || ce) {
          var te = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          S && Pe(P, te), ce && pr(P, te);
        }
        return Ir(t, S, ce, F, _, Oe.current, P);
      }
    }
    var Be = W.ReactCurrentOwner, vr = W.ReactDebugCurrentFrame;
    function xe(t) {
      if (t) {
        var u = t._owner, c = Ue(t.type, t._source, u ? u.type : null);
        vr.setExtraStackFrame(c);
      } else
        vr.setExtraStackFrame(null);
    }
    var Ne;
    Ne = !1;
    function je(t) {
      return typeof t == "object" && t !== null && t.$$typeof === s;
    }
    function ze() {
      {
        if (Be.current) {
          var t = se(Be.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function $r(t) {
      {
        if (t !== void 0) {
          var u = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + u + ":" + c + ".";
        }
        return "";
      }
    }
    var br = {};
    function Dr(t) {
      {
        var u = ze();
        if (!u) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (u = `

Check the top-level render call using <` + c + ">.");
        }
        return u;
      }
    }
    function gr(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Dr(u);
        if (br[c])
          return;
        br[c] = !0;
        var _ = "";
        t && t._owner && t._owner !== Be.current && (_ = " It was passed a child from " + se(t._owner.type) + "."), xe(t), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, _), xe(null);
      }
    }
    function yr(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Ye(t))
          for (var c = 0; c < t.length; c++) {
            var _ = t[c];
            je(_) && gr(_, u);
          }
        else if (je(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var F = I(t);
          if (typeof F == "function" && F !== t.entries)
            for (var z = F.call(t), P; !(P = z.next()).done; )
              je(P.value) && gr(P.value, u);
        }
      }
    }
    function We(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var c;
        if (typeof u == "function")
          c = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === R || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === L))
          c = u.propTypes;
        else
          return;
        if (c) {
          var _ = se(u);
          Ee(c, t.props, "prop", _, t);
        } else if (u.PropTypes !== void 0 && !Ne) {
          Ne = !0;
          var F = se(u);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qe(t) {
      {
        for (var u = Object.keys(t.props), c = 0; c < u.length; c++) {
          var _ = u[c];
          if (_ !== "children" && _ !== "key") {
            xe(t), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", _), xe(null);
            break;
          }
        }
        t.ref !== null && (xe(t), O("Invalid attribute `ref` supplied to `React.Fragment`."), xe(null));
      }
    }
    var Ze = {};
    function hr(t, u, c, _, F, z) {
      {
        var P = Re(t);
        if (!P) {
          var S = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = $r(F);
          ce ? S += ce : S += ze();
          var ee;
          t === null ? ee = "null" : Ye(t) ? ee = "array" : t !== void 0 && t.$$typeof === s ? (ee = "<" + (se(t.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof t, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, S);
        }
        var te = Fr(t, u, c, F, z);
        if (te == null)
          return te;
        if (P) {
          var ge = u.children;
          if (ge !== void 0)
            if (_)
              if (Ye(ge)) {
                for (var Ae = 0; Ae < ge.length; Ae++)
                  yr(ge[Ae], t);
                Object.freeze && Object.freeze(ge);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yr(ge, t);
        }
        if (Te.call(u, "key")) {
          var Se = se(t), pe = Object.keys(u).filter(function(Wr) {
            return Wr !== "key";
          }), er = pe.length > 0 ? "{key: someKey, " + pe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ze[Se + er]) {
            var zr = pe.length > 0 ? "{" + pe.join(": ..., ") + ": ...}" : "{}";
            O(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, er, Se, zr, Se), Ze[Se + er] = !0;
          }
        }
        return t === p ? Qe(te) : We(te), te;
      }
    }
    function Mr(t, u, c) {
      return hr(t, u, c, !0);
    }
    function Lr(t, u, c) {
      return hr(t, u, c, !1);
    }
    var Nr = Lr, mr = Mr;
    nr.Fragment = p, nr.jsx = Nr, nr.jsxs = mr;
  }()), nr;
}
process.env.NODE_ENV === "production" ? Qr.exports = ln() : Qr.exports = cn();
var Jr = Qr.exports;
const tt = "-", fn = (i) => {
  const s = pn(i), {
    conflictingClassGroups: d,
    conflictingClassGroupModifiers: p
  } = i;
  return {
    getClassGroupId: (h) => {
      const b = h.split(tt);
      return b[0] === "" && b.length !== 1 && b.shift(), Ft(b, s) || dn(h);
    },
    getConflictingClassGroupIds: (h, b) => {
      const R = d[h] || [];
      return b && p[h] ? [...R, ...p[h]] : R;
    }
  };
}, Ft = (i, s) => {
  var h;
  if (i.length === 0)
    return s.classGroupId;
  const d = i[0], p = s.nextPart.get(d), m = p ? Ft(i.slice(1), p) : void 0;
  if (m)
    return m;
  if (s.validators.length === 0)
    return;
  const v = i.join(tt);
  return (h = s.validators.find(({
    validator: b
  }) => b(v))) == null ? void 0 : h.classGroupId;
}, jt = /^\[(.+)\]$/, dn = (i) => {
  if (jt.test(i)) {
    const s = jt.exec(i)[1], d = s == null ? void 0 : s.substring(0, s.indexOf(":"));
    if (d)
      return "arbitrary.." + d;
  }
}, pn = (i) => {
  const {
    theme: s,
    prefix: d
  } = i, p = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return bn(Object.entries(i.classGroups), d).forEach(([v, h]) => {
    et(h, p, v, s);
  }), p;
}, et = (i, s, d, p) => {
  i.forEach((m) => {
    if (typeof m == "string") {
      const v = m === "" ? s : At(s, m);
      v.classGroupId = d;
      return;
    }
    if (typeof m == "function") {
      if (vn(m)) {
        et(m(p), s, d, p);
        return;
      }
      s.validators.push({
        validator: m,
        classGroupId: d
      });
      return;
    }
    Object.entries(m).forEach(([v, h]) => {
      et(h, At(s, v), d, p);
    });
  });
}, At = (i, s) => {
  let d = i;
  return s.split(tt).forEach((p) => {
    d.nextPart.has(p) || d.nextPart.set(p, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), d = d.nextPart.get(p);
  }), d;
}, vn = (i) => i.isThemeGetter, bn = (i, s) => s ? i.map(([d, p]) => {
  const m = p.map((v) => typeof v == "string" ? s + v : typeof v == "object" ? Object.fromEntries(Object.entries(v).map(([h, b]) => [s + h, b])) : v);
  return [d, m];
}) : i, gn = (i) => {
  if (i < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let s = 0, d = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
  const m = (v, h) => {
    d.set(v, h), s++, s > i && (s = 0, p = d, d = /* @__PURE__ */ new Map());
  };
  return {
    get(v) {
      let h = d.get(v);
      if (h !== void 0)
        return h;
      if ((h = p.get(v)) !== void 0)
        return m(v, h), h;
    },
    set(v, h) {
      d.has(v) ? d.set(v, h) : m(v, h);
    }
  };
}, $t = "!", yn = (i) => {
  const {
    separator: s,
    experimentalParseClassName: d
  } = i, p = s.length === 1, m = s[0], v = s.length, h = (b) => {
    const R = [];
    let $ = 0, x = 0, L;
    for (let I = 0; I < b.length; I++) {
      let W = b[I];
      if ($ === 0) {
        if (W === m && (p || b.slice(I, I + v) === s)) {
          R.push(b.slice(x, I)), x = I + v;
          continue;
        }
        if (W === "/") {
          L = I;
          continue;
        }
      }
      W === "[" ? $++ : W === "]" && $--;
    }
    const G = R.length === 0 ? b : b.substring(x), B = G.startsWith($t), Z = B ? G.substring(1) : G, J = L && L > x ? L - x : void 0;
    return {
      modifiers: R,
      hasImportantModifier: B,
      baseClassName: Z,
      maybePostfixModifierPosition: J
    };
  };
  return d ? (b) => d({
    className: b,
    parseClassName: h
  }) : h;
}, hn = (i) => {
  if (i.length <= 1)
    return i;
  const s = [];
  let d = [];
  return i.forEach((p) => {
    p[0] === "[" ? (s.push(...d.sort(), p), d = []) : d.push(p);
  }), s.push(...d.sort()), s;
}, mn = (i) => ({
  cache: gn(i.cacheSize),
  parseClassName: yn(i),
  ...fn(i)
}), wn = /\s+/, _n = (i, s) => {
  const {
    parseClassName: d,
    getClassGroupId: p,
    getConflictingClassGroupIds: m
  } = s, v = [], h = i.trim().split(wn);
  let b = "";
  for (let R = h.length - 1; R >= 0; R -= 1) {
    const $ = h[R], {
      modifiers: x,
      hasImportantModifier: L,
      baseClassName: G,
      maybePostfixModifierPosition: B
    } = d($);
    let Z = !!B, J = p(Z ? G.substring(0, B) : G);
    if (!J) {
      if (!Z) {
        b = $ + (b.length > 0 ? " " + b : b);
        continue;
      }
      if (J = p(G), !J) {
        b = $ + (b.length > 0 ? " " + b : b);
        continue;
      }
      Z = !1;
    }
    const I = hn(x).join(":"), W = L ? I + $t : I, O = W + J;
    if (v.includes(O))
      continue;
    v.push(O);
    const ve = m(J, Z);
    for (let ie = 0; ie < ve.length; ++ie) {
      const K = ve[ie];
      v.push(W + K);
    }
    b = $ + (b.length > 0 ? " " + b : b);
  }
  return b;
};
function Rn() {
  let i = 0, s, d, p = "";
  for (; i < arguments.length; )
    (s = arguments[i++]) && (d = Dt(s)) && (p && (p += " "), p += d);
  return p;
}
const Dt = (i) => {
  if (typeof i == "string")
    return i;
  let s, d = "";
  for (let p = 0; p < i.length; p++)
    i[p] && (s = Dt(i[p])) && (d && (d += " "), d += s);
  return d;
};
function En(i, ...s) {
  let d, p, m, v = h;
  function h(R) {
    const $ = s.reduce((x, L) => L(x), i());
    return d = mn($), p = d.cache.get, m = d.cache.set, v = b, b(R);
  }
  function b(R) {
    const $ = p(R);
    if ($)
      return $;
    const x = _n(R, d);
    return m(R, x), x;
  }
  return function() {
    return v(Rn.apply(null, arguments));
  };
}
const H = (i) => {
  const s = (d) => d[i] || [];
  return s.isThemeGetter = !0, s;
}, Mt = /^\[(?:([a-z-]+):)?(.+)\]$/i, Cn = /^\d+\/\d+$/, xn = /* @__PURE__ */ new Set(["px", "full", "screen"]), Sn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, kn = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Tn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, On = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Pn = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ke = (i) => He(i) || xn.has(i) || Cn.test(i), Ie = (i) => Je(i, "length", Ln), He = (i) => !!i && !Number.isNaN(Number(i)), Xr = (i) => Je(i, "number", He), or = (i) => !!i && Number.isInteger(Number(i)), jn = (i) => i.endsWith("%") && He(i.slice(0, -1)), C = (i) => Mt.test(i), Fe = (i) => Sn.test(i), An = /* @__PURE__ */ new Set(["length", "size", "percentage"]), In = (i) => Je(i, An, Lt), Fn = (i) => Je(i, "position", Lt), $n = /* @__PURE__ */ new Set(["image", "url"]), Dn = (i) => Je(i, $n, zn), Mn = (i) => Je(i, "", Nn), ar = () => !0, Je = (i, s, d) => {
  const p = Mt.exec(i);
  return p ? p[1] ? typeof s == "string" ? p[1] === s : s.has(p[1]) : d(p[2]) : !1;
}, Ln = (i) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  kn.test(i) && !Tn.test(i)
), Lt = () => !1, Nn = (i) => On.test(i), zn = (i) => Pn.test(i), Wn = () => {
  const i = H("colors"), s = H("spacing"), d = H("blur"), p = H("brightness"), m = H("borderColor"), v = H("borderRadius"), h = H("borderSpacing"), b = H("borderWidth"), R = H("contrast"), $ = H("grayscale"), x = H("hueRotate"), L = H("invert"), G = H("gap"), B = H("gradientColorStops"), Z = H("gradientColorStopPositions"), J = H("inset"), I = H("margin"), W = H("opacity"), O = H("padding"), ve = H("saturate"), ie = H("scale"), K = H("sepia"), le = H("skew"), ye = H("space"), me = H("translate"), _e = () => ["auto", "contain", "none"], Re = () => ["auto", "hidden", "clip", "visible", "scroll"], Ce = () => ["auto", C, s], D = () => [C, s], se = () => ["", ke, Ie], ue = () => ["auto", He, C], ne = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], de = () => ["solid", "dashed", "dotted", "double", "none"], y = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], be = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], he = () => ["", "0", C], we = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], n = () => [He, C];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ar],
      spacing: [ke, Ie],
      blur: ["none", "", Fe, C],
      brightness: n(),
      borderColor: [i],
      borderRadius: ["none", "", "full", Fe, C],
      borderSpacing: D(),
      borderWidth: se(),
      contrast: n(),
      grayscale: he(),
      hueRotate: n(),
      invert: he(),
      gap: D(),
      gradientColorStops: [i],
      gradientColorStopPositions: [jn, Ie],
      inset: Ce(),
      margin: Ce(),
      opacity: n(),
      padding: D(),
      saturate: n(),
      scale: n(),
      sepia: he(),
      skew: n(),
      space: D(),
      translate: D()
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
        columns: [Fe]
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
        overflow: Re()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Re()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Re()
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
        z: ["auto", or, C]
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
        grow: he()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: he()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", or, C]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ar]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", or, C]
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
        "grid-rows": [ar]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [or, C]
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
        p: [O]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [O]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [O]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [O]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [O]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [O]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [O]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [O]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [O]
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
        "space-x": [ye]
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
        "space-y": [ye]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", C, s]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [C, s, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [C, s, "none", "full", "min", "max", "fit", "prose", {
          screen: [Fe]
        }, Fe]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [C, s, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [C, s, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [C, s, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [C, s, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Fe, Ie]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Xr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ar]
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
        "line-clamp": ["none", He, Xr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ke, C]
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
        placeholder: [i]
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
        text: [i]
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
        decoration: ["auto", "from-font", ke, Ie]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ke, C]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [i]
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
        indent: D()
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
        bg: [...ne(), Fn]
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
        bg: ["auto", "cover", "contain", In]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Dn]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [i]
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
        "outline-offset": [ke, C]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ke, Ie]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [i]
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
        ring: [i]
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
        "ring-offset": [ke, Ie]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [i]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Fe, Mn]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ar]
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
        "mix-blend": [...y(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": y()
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
        blur: [d]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [p]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [R]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Fe, C]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [$]
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
        invert: [L]
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
        "backdrop-blur": [d]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [p]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [R]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [$]
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
        "backdrop-invert": [L]
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
        "border-spacing": [h]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [h]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [h]
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
        duration: n()
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
        delay: n()
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
        rotate: [or, C]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [me]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [me]
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
        accent: ["auto", i]
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
        caret: [i]
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
        "scroll-m": D()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": D()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": D()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": D()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": D()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": D()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": D()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": D()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": D()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": D()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": D()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": D()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": D()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": D()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": D()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": D()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": D()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": D()
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
        fill: [i, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ke, Ie, Xr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [i, "none"]
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
}, It = /* @__PURE__ */ En(Wn), Vn = rt.forwardRef(
  ({
    label: i,
    onClickFunction: s,
    type: d = "default",
    className: p = "",
    iconClassName: m = "",
    disabled: v = !1,
    icon: h,
    arrow: b = !1,
    ...R
  }, $) => {
    const x = "flex items-center px-4 py-2 rounded transition-all group disabled:opacity-80 disabled:cursor-not-allowed", L = "mr-2", B = It(
      x,
      {
        default: "bg-gray-800 hover:bg-gray-700 text-white border border-black hover:border-gray-900",
        primary: "bg-primary hover:bg-primary-hover text-primary-text hover:text-primary-text-hover border border-primary-border hover:border-primary-border-hover",
        danger: "bg-red-600 hover:bg-red-700 text-white border border-red-700 hover:border-red-800",
        cancel: "bg-yellow-500 hover:bg-yellow-600 text-white border border-yellow-600 hover:border-yellow-700"
      }[d],
      p
    ), Z = It(
      L,
      m
    );
    return /* @__PURE__ */ Jr.jsxs(
      "button",
      {
        ref: $,
        className: B,
        onClick: v ? void 0 : s,
        disabled: v,
        ...R,
        children: [
          h && /* @__PURE__ */ Jr.jsx("span", { className: Z, children: h }),
          i,
          b && !v && /* @__PURE__ */ Jr.jsx("span", { className: "relative ml-2 transition-all translate-x-0 group-hover:translate-x-1", children: "→" })
        ]
      }
    );
  }
);
Vn.displayName = "Button";
export {
  Vn as Button
};
