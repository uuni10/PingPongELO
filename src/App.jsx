function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useEffect, useMemo, useRef, useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
var isUpcEmail = function isUpcEmail(e) {
  return /@(estudiantat\.upc\.edu|upc\.edu)$/i.test((e !== null && e !== void 0 ? e : '').trim());
};
export default function App() {
  var _session$user$id, _session$user, _session$user$email, _session$user2, _profilesMap$kioskA$d, _profilesMap$kioskA, _profilesMap$kioskB$d, _profilesMap$kioskB, _profilesMap$kioskA2, _profilesMap$kioskB2, _profilesMap$kioskWin, _profilesMap, _profilesMap$selected, _profilesMap$selected2, _profilesMap$userId$d, _profilesMap$userId, _profilesMap$selected3, _profilesMap$selected4, _profilesMap$activeMa, _profilesMap$activeMa2;
  // Auth
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    session = _useState2[0],
    setSession = _useState2[1];
  var userId = (_session$user$id = session === null || session === void 0 || (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.id) !== null && _session$user$id !== void 0 ? _session$user$id : null;
  var userEmail = (_session$user$email = session === null || session === void 0 || (_session$user2 = session.user) === null || _session$user2 === void 0 ? void 0 : _session$user2.email) !== null && _session$user$email !== void 0 ? _session$user$email : '';

  // UI
  var _useState3 = useState('signin'),
    _useState4 = _slicedToArray(_useState3, 2),
    mode = _useState4[0],
    setMode = _useState4[1]; // signin/signup
  var _useState5 = useState('matches'),
    _useState6 = _slicedToArray(_useState5, 2),
    tab = _useState6[0],
    setTab = _useState6[1]; // kiosk/matches/history/leaderboard/stats
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = useState(''),
    _useState0 = _slicedToArray(_useState9, 2),
    err = _useState0[0],
    setErr = _useState0[1];
  var _useState1 = useState(''),
    _useState10 = _slicedToArray(_useState1, 2),
    info = _useState10[0],
    setInfo = _useState10[1];

  // Login/Signup
  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    email = _useState12[0],
    setEmail = _useState12[1];
  var _useState13 = useState(''),
    _useState14 = _slicedToArray(_useState13, 2),
    password = _useState14[0],
    setPassword = _useState14[1];
  var _useState15 = useState(''),
    _useState16 = _slicedToArray(_useState15, 2),
    displayName = _useState16[0],
    setDisplayName = _useState16[1];

  // Leaderboard
  var _useState17 = useState([]),
    _useState18 = _slicedToArray(_useState17, 2),
    rows = _useState18[0],
    setRows = _useState18[1];

  // Admin
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    isAdmin = _useState20[0],
    setIsAdmin = _useState20[1];

  // Matches
  var _useState21 = useState([]),
    _useState22 = _slicedToArray(_useState21, 2),
    matches = _useState22[0],
    setMatches = _useState22[1];
  var _useState23 = useState({}),
    _useState24 = _slicedToArray(_useState23, 2),
    profilesMap = _useState24[0],
    setProfilesMap = _useState24[1];

  // Player search (shared)
  var _useState25 = useState(''),
    _useState26 = _slicedToArray(_useState25, 2),
    q = _useState26[0],
    setQ = _useState26[1];
  var _useState27 = useState([]),
    _useState28 = _slicedToArray(_useState27, 2),
    results = _useState28[0],
    setResults = _useState28[1];

  // Normal match creation
  var _useState29 = useState(null),
    _useState30 = _slicedToArray(_useState29, 2),
    selectedB = _useState30[0],
    setSelectedB = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    adminCreateMode = _useState32[0],
    setAdminCreateMode = _useState32[1];
  var _useState33 = useState(null),
    _useState34 = _slicedToArray(_useState33, 2),
    selectedA = _useState34[0],
    setSelectedA = _useState34[1];

  // Kiosk selection
  var _useState35 = useState(null),
    _useState36 = _slicedToArray(_useState35, 2),
    kioskA = _useState36[0],
    setKioskA = _useState36[1];
  var _useState37 = useState(null),
    _useState38 = _slicedToArray(_useState37, 2),
    kioskB = _useState38[0],
    setKioskB = _useState38[1];
  // Kiosk flow (UI steps)
  var _useState39 = useState(null),
    _useState40 = _slicedToArray(_useState39, 2),
    kioskWinner = _useState40[0],
    setKioskWinner = _useState40[1]; // uuid
  var _useState41 = useState('pick'),
    _useState42 = _slicedToArray(_useState41, 2),
    kioskStep = _useState42[0],
    setKioskStep = _useState42[1]; // pick | method | confirm

  // Which slot is active for search (null | 'A' | 'B')
  var _useStateKioskSlot = useState(null),
    _useStateKioskSlot2 = _slicedToArray(_useStateKioskSlot, 2),
    kioskActiveSlot = _useStateKioskSlot2[0],
    setKioskActiveSlot = _useStateKioskSlot2[1];

  // Ref to imperatively focus the kiosk search input
  var kioskSearchRef = useRef(null);

  // Kiosk create user
  var _useState43 = useState(''),
    _useState44 = _slicedToArray(_useState43, 2),
    newPEmail = _useState44[0],
    setNewPEmail = _useState44[1];
  var _useState45 = useState(''),
    _useState46 = _slicedToArray(_useState45, 2),
    newPName = _useState46[0],
    setNewPName = _useState46[1];
  var _useState47 = useState(''),
    _useState48 = _slicedToArray(_useState47, 2),
    newPPassword = _useState48[0],
    setNewPPassword = _useState48[1];
  var _useState49 = useState(false),
    _useState50 = _slicedToArray(_useState49, 2),
    creatingPlayer = _useState50[0],
    setCreatingPlayer = _useState50[1];
  var _useState51 = useState(false),
    _useState52 = _slicedToArray(_useState51, 2),
    showRegister = _useState52[0],
    setShowRegister = _useState52[1];
  // Win method
  var _useState53 = useState('normal'),
    _useState54 = _slicedToArray(_useState53, 2),
    winMethod = _useState54[0],
    setWinMethod = _useState54[1]; // normal/direct

  // History (global)
  var _useState55 = useState([]),
    _useState56 = _slicedToArray(_useState55, 2),
    historyRows = _useState56[0],
    setHistoryRows = _useState56[1];

  // Stats
  var _useState57 = useState(''),
    _useState58 = _slicedToArray(_useState57, 2),
    statsFilter = _useState58[0],
    setStatsFilter = _useState58[1];
  var _useState59 = useState([]),
    _useState60 = _slicedToArray(_useState59, 2),
    statsRows = _useState60[0],
    setStatsRows = _useState60[1];

  // Stats filters/sort
  var _useState61 = useState(''),
    _useState62 = _slicedToArray(_useState61, 2),
    minElo = _useState62[0],
    setMinElo = _useState62[1];
  var _useState63 = useState(''),
    _useState64 = _slicedToArray(_useState63, 2),
    maxElo = _useState64[0],
    setMaxElo = _useState64[1];
  var _useState65 = useState(''),
    _useState66 = _slicedToArray(_useState65, 2),
    minGames = _useState66[0],
    setMinGames = _useState66[1];
  var _useState67 = useState(''),
    _useState68 = _slicedToArray(_useState67, 2),
    minWins = _useState68[0],
    setMinWins = _useState68[1];
  var _useState69 = useState(''),
    _useState70 = _slicedToArray(_useState69, 2),
    minWinsDirect = _useState70[0],
    setMinWinsDirect = _useState70[1];
  var _useState71 = useState(''),
    _useState72 = _slicedToArray(_useState71, 2),
    minWinRatePct = _useState72[0],
    setMinWinRatePct = _useState72[1];
  var _useState73 = useState('elo'),
    _useState74 = _slicedToArray(_useState73, 2),
    statsSortBy = _useState74[0],
    setStatsSortBy = _useState74[1]; // elo|wins|wins_direct|win_rate|direct_win_rate|games_played
  var _useState75 = useState('desc'),
    _useState76 = _slicedToArray(_useState75, 2),
    statsSortDir = _useState76[0],
    setStatsSortDir = _useState76[1]; // asc|desc

  // PROFILE MODAL STATE
  var _useState77 = useState(false),
    _useState78 = _slicedToArray(_useState77, 2),
    showProfileModal = _useState78[0],
    setShowProfileModal = _useState78[1];
  var _useState79 = useState(''),
    _useState80 = _slicedToArray(_useState79, 2),
    newDisplayName = _useState80[0],
    setNewDisplayName = _useState80[1];
  var _useState81 = useState(''),
    _useState82 = _slicedToArray(_useState81, 2),
    currentPassword = _useState82[0],
    setCurrentPassword = _useState82[1];
  var _useState83 = useState(''),
    _useState84 = _slicedToArray(_useState83, 2),
    newProfilePass = _useState84[0],
    setNewProfilePass = _useState84[1];
  var _useState85 = useState(''),
    _useState86 = _slicedToArray(_useState85, 2),
    confirmProfilePass = _useState86[0],
    setConfirmProfilePass = _useState86[1];
  var _useState87 = useState(false),
    _useState88 = _slicedToArray(_useState87, 2),
    showReportModal = _useState88[0],
    setShowReportModal = _useState88[1];
  var _useState89 = useState(null),
    _useState90 = _slicedToArray(_useState89, 2),
    activeMatch = _useState90[0],
    setActiveMatch = _useState90[1]; // El partit que estem editant
  var canAdminCreate = useMemo(function () {
    return isAdmin && adminCreateMode;
  }, [isAdmin, adminCreateMode]);

  // FUNCIÓ PER ACTUALITZAR CONTRASENYA
  // FUNCIÓ PER ACTUALITZAR CONTRASENYA (AMB VERIFICACIÓ)
  function updateMyPassword() {
    return _updateMyPassword.apply(this, arguments);
  }
  
  // FUNCIÓ PER ACTUALITZAR DISPLAY NAME
  function updateDisplayName() {
    return _updateDisplayName.apply(this, arguments);
  } // ---------- Auth session ----------
  // Busca aquest useEffect (aprox línia 74)
  function _updateMyPassword() {
    _updateMyPassword = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _yield$supabase$auth$, verifyErr, _yield$supabase$auth$2, error;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            setErr('');
            setInfo('');

            // 1. Validacions bàsiques
            if (currentPassword) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, setErr("Has d'introduir la teva contrasenya actual."));
          case 1:
            if (!(newProfilePass.length < 8)) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2, setErr("La nova contrasenya ha de tenir mínim 8 caràcters."));
          case 2:
            if (!(newProfilePass !== confirmProfilePass)) {
              _context2.n = 3;
              break;
            }
            return _context2.a(2, setErr("Les noves contrasenyes no coincideixen."));
          case 3:
            if (!(currentPassword === newProfilePass)) {
              _context2.n = 4;
              break;
            }
            return _context2.a(2, setErr("La nova contrasenya ha de ser diferent de l'actual."));
          case 4:
            setLoading(true);
            _context2.p = 5;
            _context2.n = 6;
            return supabase.auth.signInWithPassword({
              email: userEmail,
              password: currentPassword
            });
          case 6:
            _yield$supabase$auth$ = _context2.v;
            verifyErr = _yield$supabase$auth$.error;
            if (!verifyErr) {
              _context2.n = 7;
              break;
            }
            setErr("La contrasenya actual no és correcta.");
            setLoading(false);
            return _context2.a(2);
          case 7:
            _context2.n = 8;
            return supabase.auth.updateUser({
              password: newProfilePass
            });
          case 8:
            _yield$supabase$auth$2 = _context2.v;
            error = _yield$supabase$auth$2.error;
            if (error) {
              setErr(error.message);
            } else {
              setInfo("Contrasenya canviada correctament!");
              // Reset dels camps i tancar modal
              setTimeout(function () {
                setShowProfileModal(false);
                setCurrentPassword('');
                setNewProfilePass('');
                setConfirmProfilePass('');
                setInfo('');
              }, 1500);
            }
          case 9:
            _context2.p = 9;
            setLoading(false);
            return _context2.f(9);
          case 10:
            return _context2.a(2);
        }
      }, _callee2, null, [[5,, 9, 10]]);
    }));
    return _updateMyPassword.apply(this, arguments);
  }
  function _updateDisplayName() {
    _updateDisplayName = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2b() {
      var _yield$supabase$from$, error, _yield$supabase$from$2, profiles, pe;
      return _regenerator().w(function (_context2b) {
        while (1) switch (_context2b.p = _context2b.n) {
          case 0:
            setErr('');
            setInfo('');
            
            // Validació
            if (!(newDisplayName.trim().length < 2)) {
              _context2b.n = 1;
              break;
            }
            return _context2b.a(2, setErr("El nom ha de tenir mínim 2 caràcters."));
          case 1:
            if (userId) {
              _context2b.n = 2;
              break;
            }
            return _context2b.a(2);
          case 2:
            setLoading(true);
            _context2b.p = 3;
            
            // Actualitzar a profiles
            _context2b.n = 4;
            return supabase.from('profiles').update({
              display_name: newDisplayName.trim()
            }).eq('id', userId);
          case 4:
            _yield$supabase$from$ = _context2b.v;
            error = _yield$supabase$from$.error;
            if (error) {
              setErr(error.message);
              setLoading(false);
              return _context2b.a(2);
            }
            
            // Recarregar profiles per actualitzar profilesMap
            _context2b.n = 5;
            return supabase.from('profiles').select('id, email, display_name, elo, wins, losses');
          case 5:
            _yield$supabase$from$2 = _context2b.v;
            profiles = _yield$supabase$from$2.data;
            pe = _yield$supabase$from$2.error;
            if (!pe) {
              var pmap = {};
              var _iterator = _createForOfIteratorHelper(profiles !== null && profiles !== void 0 ? profiles : []);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _step;
                  var p = _step.value;
                  pmap[p.id] = p;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              setProfilesMap(pmap);
            }
            
            setInfo("Nom actualitzat correctament!");
            setTimeout(function () {
              setNewDisplayName('');
              setInfo('');
            }, 1500);
          case 6:
            _context2b.p = 6;
            setLoading(false);
            return _context2b.f(6);
          case 7:
            return _context2b.a(2);
        }
      }, _callee2b, null, [[3,, 6, 7]]);
    }));
    return _updateDisplayName.apply(this, arguments);
  }
  useEffect(function () {
    var tabsThatReset = new Set(['history', 'leaderboard', 'stats', 'kiosk']);
    if (!tabsThatReset.has(tab)) return;

    // Opció A: Reset immediat (més ràpid i evita salts visuals)
    window.scrollTo(0, 0);
  }, [tab]);
  useEffect(function () {
    supabase.auth.getSession().then(function (_ref) {
      var _data$session;
      var data = _ref.data;
      return setSession((_data$session = data.session) !== null && _data$session !== void 0 ? _data$session : null);
    });
    var _supabase$auth$onAuth = supabase.auth.onAuthStateChange(function (_event, newSession) {
        setSession(newSession !== null && newSession !== void 0 ? newSession : null);
        setErr('');
        setInfo('');
      }),
      sub = _supabase$auth$onAuth.data;
    return function () {
      return sub.subscription.unsubscribe();
    };
  }, []);

  // ---------- Load initial data after login ----------
  useEffect(function () {
    if (!session || !userId) return;
    setSelectedA(userId);
    setSelectedB(null);
    setAdminCreateMode(false);
    setKioskA(null);
    setKioskB(null);
    setWinMethod('normal');
    setQ('');
    setResults([]);

    // stats UI defaults
    setStatsFilter('');
    setMinElo('');
    setMaxElo('');
    setMinGames('');
    setMinWins('');
    setMinWinsDirect('');
    setMinWinRatePct('');
    setStatsSortBy('elo');
    setStatsSortDir('desc');
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var admin;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return loadIsAdmin();
          case 1:
            admin = _context.v;
            _context.n = 2;
            return Promise.all([loadLeaderboard(), loadMatches(), loadHistory(), loadStats()]);
          case 2:
            // si és admin, per defecte entra a Kiosk (ideal per iPad)
            if (admin) setTab('kiosk');else setTab('matches');
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }))();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, userId]);
  function loadIsAdmin() {
    return _loadIsAdmin.apply(this, arguments);
  }
  function _loadIsAdmin() {
    _loadIsAdmin = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _yield$supabase$from$, data, error, ok;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            setErr('');
            _context3.n = 1;
            return supabase.from('admins').select('user_id').eq('user_id', userId).maybeSingle();
          case 1:
            _yield$supabase$from$ = _context3.v;
            data = _yield$supabase$from$.data;
            error = _yield$supabase$from$.error;
            if (!error) {
              _context3.n = 2;
              break;
            }
            setIsAdmin(false);
            return _context3.a(2, false);
          case 2:
            ok = !!data;
            setIsAdmin(ok);
            return _context3.a(2, ok);
        }
      }, _callee3);
    }));
    return _loadIsAdmin.apply(this, arguments);
  }
  function loadLeaderboard() {
    return _loadLeaderboard.apply(this, arguments);
  }
  function _loadLeaderboard() {
    _loadLeaderboard = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var _yield$supabase$from$2, data, error;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            setErr('');
            _context4.n = 1;
            return supabase.from('profiles').select('id, display_name, elo, wins, losses').order('elo', {
              ascending: false
            });
          case 1:
            _yield$supabase$from$2 = _context4.v;
            data = _yield$supabase$from$2.data;
            error = _yield$supabase$from$2.error;
            if (error) setErr(error.message);else setRows(data !== null && data !== void 0 ? data : []);
          case 2:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return _loadLeaderboard.apply(this, arguments);
  }
  function loadMatches() {
    return _loadMatches.apply(this, arguments);
  }
  function _loadMatches() {
    _loadMatches = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var _yield$supabase$from$3, data, error, ms, ids, _yield$supabase$from$4, profs, pe, map, _iterator, _step, p;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            setErr('');
            _context5.n = 1;
            return supabase.from('matches').select('id, player_a, player_b, created_by, status, reported_winner, reported_by, reported_at, confirmed_by, confirmed_at, created_at, expires_at, win_method').neq('status', 'canceled').order('created_at', {
              ascending: false
            });
          case 1:
            _yield$supabase$from$3 = _context5.v;
            data = _yield$supabase$from$3.data;
            error = _yield$supabase$from$3.error;
            if (!error) {
              _context5.n = 2;
              break;
            }
            setErr(error.message);
            return _context5.a(2);
          case 2:
            ms = data !== null && data !== void 0 ? data : [];
            setMatches(ms);
            ids = Array.from(new Set(ms.flatMap(function (m) {
              return [m.player_a, m.player_b, m.reported_winner].filter(Boolean);
            })));
            if (!(ids.length === 0)) {
              _context5.n = 3;
              break;
            }
            setProfilesMap({});
            return _context5.a(2);
          case 3:
            _context5.n = 4;
            return supabase.from('profiles').select('id, display_name, elo').in('id', ids);
          case 4:
            _yield$supabase$from$4 = _context5.v;
            profs = _yield$supabase$from$4.data;
            pe = _yield$supabase$from$4.error;
            if (!pe) {
              map = {};
              _iterator = _createForOfIteratorHelper(profs !== null && profs !== void 0 ? profs : []);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  p = _step.value;
                  map[p.id] = p;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              setProfilesMap(map);
            }
          case 5:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return _loadMatches.apply(this, arguments);
  }
  function loadHistory() {
    return _loadHistory.apply(this, arguments);
  }
  function _loadHistory() {
    _loadHistory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var _yield$supabase$rpc, data, error, rows, ids, _yield$supabase$from$5, ms, me, mmap, _iterator2, _step2, _m$win_method, m, _iterator3, _step3, _mmap$r$match_id, r;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            setErr('');
            _context6.n = 1;
            return supabase.rpc('get_match_history', {
              p_limit: 200,
              p_offset: 0
            });
          case 1:
            _yield$supabase$rpc = _context6.v;
            data = _yield$supabase$rpc.data;
            error = _yield$supabase$rpc.error;
            if (!error) {
              _context6.n = 2;
              break;
            }
            setErr(error.message);
            return _context6.a(2);
          case 2:
            rows = data !== null && data !== void 0 ? data : []; // Enriquir amb win_method (la RPC pot no retornar-ho)
            ids = rows.map(function (r) {
              return r.match_id;
            }).filter(Boolean);
            if (!(ids.length > 0)) {
              _context6.n = 4;
              break;
            }
            _context6.n = 3;
            return supabase.from('matches').select('id, win_method').in('id', ids);
          case 3:
            _yield$supabase$from$5 = _context6.v;
            ms = _yield$supabase$from$5.data;
            me = _yield$supabase$from$5.error;
            if (!me) {
              mmap = {};
              _iterator2 = _createForOfIteratorHelper(ms !== null && ms !== void 0 ? ms : []);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  m = _step2.value;
                  mmap[m.id] = (_m$win_method = m.win_method) !== null && _m$win_method !== void 0 ? _m$win_method : 'normal';
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              _iterator3 = _createForOfIteratorHelper(rows);
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  r = _step3.value;
                  r.win_method = (_mmap$r$match_id = mmap[r.match_id]) !== null && _mmap$r$match_id !== void 0 ? _mmap$r$match_id : 'normal';
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          case 4:
            setHistoryRows(rows);
          case 5:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return _loadHistory.apply(this, arguments);
  }
  function loadStats() {
    return _loadStats.apply(this, arguments);
  } // ---------- Auth actions ----------
  function _loadStats() {
    _loadStats = async function () {
      setErr('');

      // Use SECURITY DEFINER RPC to bypass RLS and get all players' aggregated stats
      var _ref = await supabase.rpc('get_player_stats');
      var data = _ref.data;
      var error = _ref.error;
      if (error) {
        setErr(error.message);
        return;
      }

      var out = (data !== null && data !== void 0 ? data : []).map(function (r) {
        var gp = r.games_played;
        var wr = gp > 0 ? r.wins / gp : 0;
        var dwr = r.wins > 0 ? r.wins_direct / r.wins : 0;
        return _objectSpread(_objectSpread({}, r), {}, {
          win_rate: wr,
          direct_win_rate: dwr
        });
      });

      // --- Filters ---
      var f = (statsFilter !== null && statsFilter !== void 0 ? statsFilter : '').trim().toLowerCase();
      if (f.length >= 2) {
        out = out.filter(function (r) {
          var _r$display_name;
          return ((_r$display_name = r.display_name) !== null && _r$display_name !== void 0 ? _r$display_name : '').toLowerCase().includes(f);
        });
      }
      var nMinElo = minElo === '' ? null : Number(minElo);
      var nMaxElo = maxElo === '' ? null : Number(maxElo);
      var nMinGames = minGames === '' ? null : Number(minGames);
      var nMinWins = minWins === '' ? null : Number(minWins);
      var nMinWinsDirect = minWinsDirect === '' ? null : Number(minWinsDirect);
      var nMinWr = minWinRatePct === '' ? null : Number(minWinRatePct) / 100;
      out = out.filter(function (r) {
        var elo = r.elo !== null && r.elo !== void 0 ? r.elo : null;
        var gp = r.games_played !== null && r.games_played !== void 0 ? r.games_played : 0;
        var w = r.wins !== null && r.wins !== void 0 ? r.wins : 0;
        var wd = r.wins_direct !== null && r.wins_direct !== void 0 ? r.wins_direct : 0;
        var wr = r.win_rate !== null && r.win_rate !== void 0 ? r.win_rate : 0;
        if (nMinElo !== null && (elo === null || elo < nMinElo)) return false;
        if (nMaxElo !== null && (elo === null || elo > nMaxElo)) return false;
        if (nMinGames !== null && gp < nMinGames) return false;
        if (nMinWins !== null && w < nMinWins) return false;
        if (nMinWinsDirect !== null && wd < nMinWinsDirect) return false;
        if (nMinWr !== null && wr < nMinWr) return false;
        return true;
      });

      // --- Sorting ---
      var dir = statsSortDir === 'desc' ? 1 : -1;
      var pick = function pick(r) {
        switch (statsSortBy) {
          case 'wins': return r.wins !== null && r.wins !== void 0 ? r.wins : 0;
          case 'wins_direct': return r.wins_direct !== null && r.wins_direct !== void 0 ? r.wins_direct : 0;
          case 'win_rate': return r.win_rate !== null && r.win_rate !== void 0 ? r.win_rate : 0;
          case 'direct_win_rate': return r.direct_win_rate !== null && r.direct_win_rate !== void 0 ? r.direct_win_rate : 0;
          case 'games_played': return r.games_played !== null && r.games_played !== void 0 ? r.games_played : 0;
          case 'elo': default: return r.elo !== null && r.elo !== void 0 ? r.elo : -1;
        }
      };
      out.sort(function (a, b) {
        var av = pick(a);
        var bv = pick(b);
        if (bv === av) {
          var ae = a.elo !== null && a.elo !== void 0 ? a.elo : -1;
          var be = b.elo !== null && b.elo !== void 0 ? b.elo : -1;
          if (be !== ae) return (be - ae) * dir;
          return ((b.wins !== null && b.wins !== void 0 ? b.wins : 0) - (a.wins !== null && a.wins !== void 0 ? a.wins : 0)) * dir;
        }
        return (bv - av) * dir;
      });
      setStatsRows(out);
    };
    return _loadStats.apply(this, arguments);
  }
  function signIn(_x) {
    return _signIn.apply(this, arguments);
  }
  function _signIn() {
    _signIn = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(e) {
      var _yield$supabase$auth$3, error;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            e.preventDefault();
            setErr('');
            setInfo('');
            if (isUpcEmail(email)) {
              _context8.n = 1;
              break;
            }
            setErr('Només es permeten correus @estudiantat.upc.edu o @upc.edu.');
            return _context8.a(2);
          case 1:
            setLoading(true);
            _context8.p = 2;
            _context8.n = 3;
            return supabase.auth.signInWithPassword({
              email: email.trim(),
              password
            });
          case 3:
            _yield$supabase$auth$3 = _context8.v;
            error = _yield$supabase$auth$3.error;
            if (error) setErr(error.message);
          case 4:
            _context8.p = 4;
            setLoading(false);
            return _context8.f(4);
          case 5:
            return _context8.a(2);
        }
      }, _callee8, null, [[2,, 4, 5]]);
    }));
    return _signIn.apply(this, arguments);
  }
  function signUp(_x2) {
    return _signUp.apply(this, arguments);
  }
  function _signUp() {
    _signUp = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(e) {
      var _yield$supabase$auth$4, data, error, msg;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            e.preventDefault();
            setErr('');
            setInfo('');
            if (isUpcEmail(email)) {
              _context9.n = 1;
              break;
            }
            setErr('Només es permeten correus @estudiantat.upc.edu o @upc.edu.');
            return _context9.a(2);
          case 1:
            if (!(displayName.trim().length < 2)) {
              _context9.n = 2;
              break;
            }
            setErr('Posa un nom públic (mínim 2 caràcters).');
            return _context9.a(2);
          case 2:
            setLoading(true);
            _context9.p = 3;
            _context9.n = 4;
            return supabase.auth.signUp({
              email: email.trim(),
              password,
              options: {
                data: {
                  display_name: displayName.trim()
                }
              }
            });
          case 4:
            _yield$supabase$auth$4 = _context9.v;
            data = _yield$supabase$auth$4.data;
            error = _yield$supabase$auth$4.error;
            if (!error) {
              _context9.n = 5;
              break;
            }
            msg = (error.message || '').toLowerCase();
            if (msg.includes('already registered') || msg.includes('already exists') || msg.includes('already been registered')) {
              setErr("Aquest correu ja està registrat. Fes 'Sign in'.");
              setMode('signin');
            } else {
              setErr(error.message);
            }
            return _context9.a(2);
          case 5:
            if (!data.session) {
              setInfo('Compte creat. Revisa el correu per confirmar el registre (si tens confirmació activada).');
              setMode('signin');
            } else {
              setInfo('Compte creat i sessió iniciada.');
            }
          case 6:
            _context9.p = 6;
            setLoading(false);
            return _context9.f(6);
          case 7:
            return _context9.a(2);
        }
      }, _callee9, null, [[3,, 6, 7]]);
    }));
    return _signUp.apply(this, arguments);
  }
  function signOut() {
    return _signOut.apply(this, arguments);
  } // ---------- Player search ----------
  function _signOut() {
    _signOut = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            _context0.n = 1;
            return supabase.auth.signOut();
          case 1:
            setRows([]);
            setMatches([]);
            setHistoryRows([]);
            setProfilesMap({});
            setIsAdmin(false);
            setStatsRows([]);
            setTab('matches');
          case 2:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    return _signOut.apply(this, arguments);
  }
  function searchProfiles(_x3) {
    return _searchProfiles.apply(this, arguments);
  } // ---------- Normal Match actions ----------
  // ---------- Normal Match actions ----------
  function _searchProfiles() {
    _searchProfiles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(text) {
      var t, _yield$supabase$from$8, data, error;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            setErr('');
            t = (text !== null && text !== void 0 ? text : '').trim();
            setQ(t);
            if (!(t.length < 2)) {
              _context1.n = 1;
              break;
            }
            setResults([]);
            return _context1.a(2);
          case 1:
            _context1.n = 2;
            return supabase.from('profiles').select('id, display_name, email, elo').or(`display_name.ilike.%${t}%,email.ilike.%${t}%`).order('elo', {
              ascending: false
            }).limit(10);
          case 2:
            _yield$supabase$from$8 = _context1.v;
            data = _yield$supabase$from$8.data;
            error = _yield$supabase$from$8.error;
            if (error) setErr(error.message);else setResults(data !== null && data !== void 0 ? data : []);
          case 3:
            return _context1.a(2);
        }
      }, _callee1);
    }));
    return _searchProfiles.apply(this, arguments);
  }
  function createMatch() {
    return _createMatch.apply(this, arguments);
  }
  function _createMatch() {
    _createMatch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
      var a, b, _yield$supabase$from$9, data, error;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            setErr('');
            setInfo('');
            if (userId) {
              _context10.n = 1;
              break;
            }
            return _context10.a(2);
          case 1:
            a = canAdminCreate ? selectedA : userId;
            b = selectedB;
            if (!(!a || !b)) {
              _context10.n = 2;
              break;
            }
            setErr('Has de seleccionar els dos jugadors.');
            return _context10.a(2);
          case 2:
            if (!(a === b)) {
              _context10.n = 3;
              break;
            }
            setErr('No pots crear un partit amb el mateix jugador.');
            return _context10.a(2);
          case 3:
            setLoading(true);
            _context10.p = 4;
            _context10.n = 5;
            return supabase.from('matches').insert({
              player_a: a,
              player_b: b,
              created_by: userId,
              status: 'pending',
              win_method: 'normal'
            }).select().single();
          case 5:
            _yield$supabase$from$9 = _context10.v;
            data = _yield$supabase$from$9.data;
            error = _yield$supabase$from$9.error;
            if (!error) {
              _context10.n = 6;
              break;
            }
            setErr(error.message);
            return _context10.a(2);
          case 6:
            setInfo('Partit creat.');
            setSelectedB(null);

            // 2. RECARREGUEM DADES
            _context10.n = 7;
            return loadMatches();
          case 7:
            // 3. AUTO-OBRIM EL MODAL DE REPORTAR
            if (data) {
              setActiveMatch(data); // Posem el partit nou com a actiu
              setWinMethod('normal'); // Resetegem mètode
              setShowReportModal(true); // Obrim el modal
            }
          case 8:
            _context10.p = 8;
            setLoading(false);
            return _context10.f(8);
          case 9:
            return _context10.a(2);
        }
      }, _callee10, null, [[4,, 8, 9]]);
    }));
    return _createMatch.apply(this, arguments);
  }
  function reportWinner(_x4, _x5) {
    return _reportWinner.apply(this, arguments);
  }
  function _reportWinner() {
    _reportWinner = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(matchId, winnerId) {
      var _yield$supabase$rpc2, error;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            setErr('');
            setInfo('');
            setLoading(true);
            _context11.p = 1;
            _context11.n = 2;
            return supabase.rpc('report_match', {
              p_match_id: matchId,
              p_winner: winnerId,
              p_win_method: winMethod
            });
          case 2:
            _yield$supabase$rpc2 = _context11.v;
            error = _yield$supabase$rpc2.error;
            if (!error) {
              _context11.n = 3;
              break;
            }
            setErr(error.message);
            return _context11.a(2);
          case 3:
            setInfo('Resultat reportat. Ara l’altre jugador ha de confirmar.');
            _context11.n = 4;
            return loadMatches();
          case 4:
            _context11.p = 4;
            setLoading(false);
            return _context11.f(4);
          case 5:
            return _context11.a(2);
        }
      }, _callee11, null, [[1,, 4, 5]]);
    }));
    return _reportWinner.apply(this, arguments);
  }
  function cancelReport(_x6) {
    return _cancelReport.apply(this, arguments);
  }
  function _cancelReport() {
    _cancelReport = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(matchId) {
      var _yield$supabase$from$0, error;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            setErr('');
            setInfo('');
            setLoading(true);
            _context12.p = 1;
            _context12.n = 2;
            return supabase.from('matches').update({
              status: 'pending',
              reported_winner: null,
              reported_by: null,
              reported_at: null,
              win_method: 'normal'
            }).eq('id', matchId);
          case 2:
            _yield$supabase$from$0 = _context12.v;
            error = _yield$supabase$from$0.error;
            if (!error) {
              _context12.n = 3;
              break;
            }
            setErr(error.message);
            return _context12.a(2);
          case 3:
            setInfo('Report cancel·lat. Torna a estar pendent.');
            _context12.n = 4;
            return loadMatches();
          case 4:
            _context12.p = 4;
            setLoading(false);
            return _context12.f(4);
          case 5:
            return _context12.a(2);
        }
      }, _callee12, null, [[1,, 4, 5]]);
    }));
    return _cancelReport.apply(this, arguments);
  }
  function confirmMatch(_x7) {
    return _confirmMatch.apply(this, arguments);
  }
  function _confirmMatch() {
    _confirmMatch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(matchId) {
      var _yield$supabase$rpc3, error;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            setErr('');
            setInfo('');
            setLoading(true);
            _context13.p = 1;
            _context13.n = 2;
            return supabase.rpc('confirm_report', {
              p_match_id: matchId
            });
          case 2:
            _yield$supabase$rpc3 = _context13.v;
            error = _yield$supabase$rpc3.error;
            if (!error) {
              _context13.n = 3;
              break;
            }
            setErr(error.message);
            return _context13.a(2);
          case 3:
            setInfo('Partit confirmat. ELO actualitzat.');
            _context13.n = 4;
            return Promise.all([loadMatches(), loadLeaderboard(), loadHistory(), loadStats()]);
          case 4:
            _context13.p = 4;
            setLoading(false);
            return _context13.f(4);
          case 5:
            return _context13.a(2);
        }
      }, _callee13, null, [[1,, 4, 5]]);
    }));
    return _confirmMatch.apply(this, arguments);
  }
  function kioskCreatePlayer() {
    return _kioskCreatePlayer.apply(this, arguments);
  } // ---------- Kiosk (admin) action: 1 clic = confirmat ----------
  function _kioskCreatePlayer() {
    _kioskCreatePlayer = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
      var _yield$supabase$funct, data, error, newId;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            setErr('');
            setInfo('');
            if (isAdmin) {
              _context14.n = 1;
              break;
            }
            return _context14.a(2, setErr('Només admin.'));
          case 1:
            if (isUpcEmail(newPEmail)) {
              _context14.n = 2;
              break;
            }
            return _context14.a(2, setErr('Email ha de ser @upc.edu o @estudiantat.upc.edu'));
          case 2:
            if (!((newPName !== null && newPName !== void 0 ? newPName : '').trim().length < 2)) {
              _context14.n = 3;
              break;
            }
            return _context14.a(2, setErr('Nom massa curt (min 2).'));
          case 3:
            setCreatingPlayer(true);
            _context14.p = 4;
            _context14.n = 5;
            return supabase.functions.invoke('admin-create-user', {
              body: {
                email: newPEmail.trim(),
                display_name: newPName.trim(),
                password: newPPassword
              }
            });
          case 5:
            _yield$supabase$funct = _context14.v;
            data = _yield$supabase$funct.data;
            error = _yield$supabase$funct.error;
            if (!error) {
              _context14.n = 6;
              break;
            }
            return _context14.a(2, setErr(error.message));
          case 6:
            newId = data === null || data === void 0 ? void 0 : data.user_id;
            setInfo(`Jugador creat: ${newPName} (${newPEmail}).`);

            // refresca dades i pre-emplena cerca
            _context14.n = 7;
            return Promise.all([loadLeaderboard(), loadStats()]);
          case 7:
            setQ(newPName.trim());
            _context14.n = 8;
            return searchProfiles(newPName.trim());
          case 8:
            // No auto-seleccionar el jugador creat
            setNewPEmail('');
            setNewPName('');
            setNewPPassword('');
          case 9:
            _context14.p = 9;
            setCreatingPlayer(false);
            return _context14.f(9);
          case 10:
            return _context14.a(2);
        }
      }, _callee14, null, [[4,, 9, 10]]);
    }));
    return _kioskCreatePlayer.apply(this, arguments);
  }
  function kioskConfirmNow(_x8) {
    return _kioskConfirmNow.apply(this, arguments);
  } // ---------- Render ----------
  function _kioskConfirmNow() {
    _kioskConfirmNow = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(winnerId) {
      var _yield$supabase$rpc4, data, error;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.p = _context15.n) {
          case 0:
            setErr('');
            setInfo('');
            if (isAdmin) {
              _context15.n = 1;
              break;
            }
            setErr('Només un admin pot usar el mode Partits.');
            return _context15.a(2);
          case 1:
            if (!(!kioskA || !kioskB)) {
              _context15.n = 2;
              break;
            }
            setErr('Selecciona Jugador A i Jugador B.');
            return _context15.a(2);
          case 2:
            if (!(kioskA === kioskB)) {
              _context15.n = 3;
              break;
            }
            setErr('A i B no poden ser el mateix.');
            return _context15.a(2);
          case 3:
            if (!(winnerId !== kioskA && winnerId !== kioskB)) {
              _context15.n = 4;
              break;
            }
            setErr('El guanyador ha de ser A o B.');
            return _context15.a(2);
          case 4:
            setLoading(true);
            _context15.p = 5;
            _context15.n = 6;
            return supabase.rpc('kiosk_record_match', {
              p_player_a: kioskA,
              p_player_b: kioskB,
              p_winner: winnerId,
              p_win_method: winMethod
            });
          case 6:
            _yield$supabase$rpc4 = _context15.v;
            data = _yield$supabase$rpc4.data;
            error = _yield$supabase$rpc4.error;
            if (!error) {
              _context15.n = 7;
              break;
            }
            setErr(error.message);
            return _context15.a(2);
          case 7:
            setInfo(`Partit guardat!`);

            // --- CANVI CLAU PER REI DE LA PISTA ---
            // En lloc de resetejar-ho tot a null:
            setKioskA(winnerId); // El guanyador es queda com a Player A
            setKioskB(null); // El lloc B queda lliure pel nou aspirant

            setWinMethod('normal');
            setQ('');
            setResults([]);
            _context15.n = 8;
            return Promise.all([loadLeaderboard(), loadHistory(), loadMatches(), loadStats()]);
          case 8:
            _context15.p = 8;
            setLoading(false);
            return _context15.f(8);
          case 9:
            return _context15.a(2);
        }
      }, _callee15, null, [[5,, 8, 9]]);
    }));
    return _kioskConfirmNow.apply(this, arguments);
  }
  if (!session) {
    return /*#__PURE__*/_jsxs("div", {
      className: "auth-shell",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "brand",
        children: [/*#__PURE__*/_jsx("img", {
          className: "brand-logo",
          src: "/logo.png",
          alt: "Ping Pong ELO",
          onError: function onError(e) {
            e.currentTarget.style.display = 'none';
          }
        }), /*#__PURE__*/_jsx("h1", {
          className: "brand-title",
          children: "Ping Pong ELO - FME"
        })]
      }), /*#__PURE__*/_jsxs("div", {
        style: {
          display: 'flex',
          gap: 8,
          margin: '16px 0 16px'
        },
        children: [/*#__PURE__*/_jsx("button", {
          className: "btn",
          type: "button",
          onClick: function onClick() {
            setMode('signin');
            setErr('');
            setInfo('');
          },
          disabled: loading,
          children: "Sign in"
        }), /*#__PURE__*/_jsx("button", {
          className: "btn",
          type: "button",
          onClick: function onClick() {
            setMode('signup');
            setErr('');
            setInfo('');
          },
          disabled: loading,
          children: "Sign up"
        })]
      }), /*#__PURE__*/_jsxs("form", {
        onSubmit: mode === 'signup' ? signUp : signIn,
        style: {
          display: 'grid',
          gap: 10
        },
        children: [mode === 'signup' && /*#__PURE__*/_jsx("input", {
          className: "field",
          value: displayName,
          onChange: function onChange(e) {
            return setDisplayName(e.target.value);
          },
          placeholder: "Nom p\xFAblic"
        }), /*#__PURE__*/_jsx("input", {
          className: "field",
          value: email,
          onChange: function onChange(e) {
            return setEmail(e.target.value);
          },
          placeholder: "Email UPC"
        }), /*#__PURE__*/_jsx("input", {
          className: "field",
          value: password,
          onChange: function onChange(e) {
            return setPassword(e.target.value);
          },
          placeholder: "Contrasenya (m\xEDnim 8 car\xE0cters)",
          type: "password"
        }), /*#__PURE__*/_jsx("button", {
          className: "btn",
          type: "submit",
          disabled: loading,
          children: loading ? '...' : mode === 'signup' ? 'Crear compte' : 'Entrar'
        }), err && /*#__PURE__*/_jsxs("div", {
          className: "alert alert-error",
          children: ["Error: ", err]
        }), info && /*#__PURE__*/_jsx("div", {
          className: "alert",
          children: info
        })]
      })]
    });
  }
  return /*#__PURE__*/_jsxs("div", {
    className: "app-shell",
    children: [/*#__PURE__*/_jsx("div", {
      className: "topbar",
      children: /*#__PURE__*/_jsxs("div", {
        className: "topbar-inner",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "brand",
          children: [/*#__PURE__*/_jsx("img", {
            className: "brand-logo",
            src: "/logo.png",
            alt: "Ping Pong ELO",
            onError: function onError(e) {
              e.currentTarget.style.display = 'none';
            }
          }), /*#__PURE__*/_jsx("h1", {
            className: "brand-title",
            children: "Ping Pong ELO - FME"
          }), /*#__PURE__*/_jsx("div", {
            className: "brand-divider"
          }), /*#__PURE__*/_jsx("img", {
            src: "/fme.png",
            alt: "FME",
            className: "brand-partner"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "topbar-right",
          children: [/*#__PURE__*/_jsxs("span", {
            className: "topbar-user",
            children: [userEmail, isAdmin ? ' (admin)' : '']
          }), /*#__PURE__*/_jsx("button", {
            className: "btn",
            onClick: function onClick() {
              setShowProfileModal(true);
              setNewDisplayName('');
              setCurrentPassword('');
              setNewProfilePass('');
              setConfirmProfilePass('');
              setErr('');
              setInfo('');
            },
            title: "Editar perfil",
            style: {
              padding: '8px 12px'
            },
            children: "\uD83D\uDC64"
          }), /*#__PURE__*/_jsx("button", {
            className: "btn",
            onClick: signOut,
            children: "Logout"
          })]
        })]
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "nav",
      children: /*#__PURE__*/_jsxs("div", {
        className: "nav-inner",
        children: [isAdmin ? /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx("button", {
            className: "btn",
            onClick: function onClick() {
              return setTab('kiosk');
            },
            disabled: tab === 'kiosk',
            children: "Partits"
          }), /*#__PURE__*/_jsx("button", {
            className: "btn",
            onClick: function onClick() {
              return setTab('history');
            },
            disabled: tab === 'history',
            children: "Hist\xF2ric"
          }), /*#__PURE__*/_jsx("button", {
            className: "btn",
            onClick: function onClick() {
              return setTab('stats');
            },
            disabled: tab === 'stats',
            children: "Estad\xEDstiques"
          }), /*#__PURE__*/_jsx("button", {
            className: "btn",
            onClick: function onClick() {
              return setTab('leaderboard');
            },
            disabled: tab === 'leaderboard',
            children: "Leaderboard"
          })]
        }) : /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx("button", {
            className: "btn",
            onClick: function onClick() {
              return setTab('matches');
            },
            disabled: tab === 'matches',
            children: "Partits"
          }), /*#__PURE__*/_jsx("button", {
            className: "btn",
            onClick: function onClick() {
              return setTab('history');
            },
            disabled: tab === 'history',
            children: "Hist\xF2ric"
          }), /*#__PURE__*/_jsx("button", {
            className: "btn",
            onClick: function onClick() {
              return setTab('stats');
            },
            disabled: tab === 'stats',
            children: "Estad\xEDstiques"
          }), /*#__PURE__*/_jsx("button", {
            className: "btn",
            onClick: function onClick() {
              return setTab('leaderboard');
            },
            disabled: tab === 'leaderboard',
            children: "Leaderboard"
          })]
        }), /*#__PURE__*/_jsx("button", {
          className: "btn",
          onClick: function onClick() {
            loadMatches();
            loadLeaderboard();
            loadHistory();
            loadStats();
          },
          disabled: loading,
          children: "Refresh"
        })]
      })
    }), /*#__PURE__*/_jsxs("main", {
      className: "content",
      children: [err && /*#__PURE__*/_jsxs("div", {
        className: "alert alert-error",
        children: ["Error: ", err]
      }), info && /*#__PURE__*/_jsx("div", {
        className: "alert",
        children: info
      }), tab === 'leaderboard' && /*#__PURE__*/_jsxs("div", {
        className: "page",
        children: [/*#__PURE__*/_jsx("h2", {
          children: "Leaderboard"
        }), /*#__PURE__*/_jsx("ol", {
          children: rows.map(function (p) {
            return /*#__PURE__*/_jsxs("li", {
              children: [p.display_name, " \u2014 ", p.elo, " (", p.wins, "-", p.losses, ")"]
            }, p.id);
          })
        })]
      }), tab === 'history' && /*#__PURE__*/_jsxs("div", {
        className: "page page-history",
        children: [/*#__PURE__*/_jsxs("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12
          },
          children: [/*#__PURE__*/_jsx("h2", {
            style: {
              margin: 0
            },
            children: "Hist\xF2ric global (confirmats)"
          }), /*#__PURE__*/_jsx("button", {
            className: "btn",
            onClick: loadHistory,
            disabled: loading,
            children: "Carregar / Refresh"
          })]
        }), historyRows.length === 0 ? /*#__PURE__*/_jsx("p", {
          style: {
            opacity: 0.75,
            marginTop: 10
          },
          children: "Encara no hi ha partits confirmats."
        }) : /*#__PURE__*/_jsx("div", {
          style: {
            marginTop: 12,
            display: 'grid',
            gap: 10
          },
          children: historyRows.map(function (h) {
            var _h$winner_name, _h$win_method;
            return /*#__PURE__*/_jsxs("div", {
              className: "card",
              style: {
                padding: 12
              },
              children: ["                  ", /*#__PURE__*/_jsxs("div", {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 12
                },
                children: [/*#__PURE__*/_jsxs("div", {
                  style: {
                    fontWeight: 700
                  },
                  children: [h.player_a_name, " vs ", h.player_b_name]
                }), /*#__PURE__*/_jsx("div", {
                  style: {
                    fontSize: 12,
                    opacity: 0.7
                  },
                  children: h.confirmed_at ? new Date(h.confirmed_at).toLocaleString() : ''
                })]
              }), /*#__PURE__*/_jsxs("div", {
                style: {
                  fontSize: 13,
                  opacity: 0.85,
                  marginTop: 6
                },
                children: ["Guanyador: ", /*#__PURE__*/_jsx("b", {
                  children: (_h$winner_name = h.winner_name) !== null && _h$winner_name !== void 0 ? _h$winner_name : '—'
                }), ' · ', "M\xE8tode: ", /*#__PURE__*/_jsx("b", {
                  children: ((_h$win_method = h.win_method) !== null && _h$win_method !== void 0 ? _h$win_method : 'normal') === 'direct' ? 'Punt directe' : 'Normal'
                })]
              }), /*#__PURE__*/_jsxs("div", {
                style: {
                  fontSize: 13,
                  marginTop: 6
                },
                children: [/*#__PURE__*/_jsxs("div", {
                  children: [h.player_a_name, ": ", h.a_elo_before, " \u2192 ", h.a_elo_after, " (", h.a_delta >= 0 ? '+' : '', h.a_delta, ")"]
                }), /*#__PURE__*/_jsxs("div", {
                  children: [h.player_b_name, ": ", h.b_elo_before, " \u2192 ", h.b_elo_after, " (", h.b_delta >= 0 ? '+' : '', h.b_delta, ")"]
                })]
              })]
            }, h.match_id);
          })
        })]
      }), tab === 'stats' && /*#__PURE__*/_jsxs("div", {
        className: "page",
        children: [/*#__PURE__*/_jsxs("div", {
          style: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
            flexWrap: 'wrap'
          },
          children: [/*#__PURE__*/_jsx("h2", {
            style: {
              margin: 0
            },
            children: "Estad\xEDstiques"
          }), /*#__PURE__*/_jsx("button", {
            className: "btn",
            onClick: loadStats,
            disabled: loading,
            children: "Carregar / Refresh"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          style: {
            marginTop: 12,
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/_jsx("input", {
            className: "field",
            value: statsFilter,
            onChange: function onChange(e) {
              return setStatsFilter(e.target.value);
            },
            placeholder: "Filtra per nom (m\xEDnim 2 lletres)\u2026",
            style: {
              minWidth: 240
            }
          }), /*#__PURE__*/_jsx("input", {
            className: "field",
            value: minElo,
            onChange: function onChange(e) {
              return setMinElo(e.target.value);
            },
            placeholder: "ELO m\xEDn",
            inputMode: "numeric",
            style: {
              width: 90
            }
          }), /*#__PURE__*/_jsx("input", {
            className: "field",
            value: maxElo,
            onChange: function onChange(e) {
              return setMaxElo(e.target.value);
            },
            placeholder: "ELO m\xE0x",
            inputMode: "numeric",
            style: {
              width: 90
            }
          }), /*#__PURE__*/_jsx("input", {
            className: "field",
            value: minGames,
            onChange: function onChange(e) {
              return setMinGames(e.target.value);
            },
            placeholder: "Partits \u2265",
            inputMode: "numeric",
            style: {
              width: 90
            }
          }), /*#__PURE__*/_jsx("input", {
            className: "field",
            value: minWins,
            onChange: function onChange(e) {
              return setMinWins(e.target.value);
            },
            placeholder: "Wins \u2265",
            inputMode: "numeric",
            style: {
              width: 80
            }
          }), /*#__PURE__*/_jsx("input", {
            className: "field",
            value: minWinsDirect,
            onChange: function onChange(e) {
              return setMinWinsDirect(e.target.value);
            },
            placeholder: "Wins direct \u2265",
            inputMode: "numeric",
            style: {
              width: 120
            }
          }), /*#__PURE__*/_jsx("input", {
            className: "field",
            value: minWinRatePct,
            onChange: function onChange(e) {
              return setMinWinRatePct(e.target.value);
            },
            placeholder: "Winrate % \u2265",
            inputMode: "numeric",
            style: {
              width: 110
            }
          }), /*#__PURE__*/_jsx("span", {
            style: {
              fontSize: 13,
              opacity: 0.75,
              marginLeft: 4
            },
            children: "Ordena per"
          }), /*#__PURE__*/_jsxs("select", {
            className: "field",
            value: statsSortBy,
            onChange: function onChange(e) {
              return setStatsSortBy(e.target.value);
            },
            children: [/*#__PURE__*/_jsx("option", {
              value: "elo",
              children: "ELO"
            }), /*#__PURE__*/_jsx("option", {
              value: "wins",
              children: "Wins"
            }), /*#__PURE__*/_jsx("option", {
              value: "wins_direct",
              children: "Wins direct"
            }), /*#__PURE__*/_jsx("option", {
              value: "win_rate",
              children: "Winrate"
            }), /*#__PURE__*/_jsx("option", {
              value: "direct_win_rate",
              children: "% Direct (wins)"
            }), /*#__PURE__*/_jsx("option", {
              value: "games_played",
              children: "Partits"
            })]
          }), /*#__PURE__*/_jsxs("select", {
            className: "field",
            value: statsSortDir,
            onChange: function onChange(e) {
              return setStatsSortDir(e.target.value);
            },
            children: [/*#__PURE__*/_jsx("option", {
              value: "desc",
              children: "\u2193"
            }), /*#__PURE__*/_jsx("option", {
              value: "asc",
              children: "\u2191"
            })]
          }), /*#__PURE__*/_jsx("button", {
            className: "btn",
            onClick: loadStats,
            disabled: loading,
            children: "Aplicar"
          }), /*#__PURE__*/_jsx("button", {
            className: "btn",
            onClick: function onClick() {
              setStatsFilter('');
              setMinElo('');
              setMaxElo('');
              setMinGames('');
              setMinWins('');
              setMinWinsDirect('');
              setMinWinRatePct('');
              setStatsSortBy('elo');
              setStatsSortDir('desc');
              loadStats();
            },
            disabled: loading,
            children: "Reset"
          })]
        }), statsRows.length === 0 ? /*#__PURE__*/_jsx("p", {
          style: {
            opacity: 0.75,
            marginTop: 12
          },
          children: "No hi ha dades encara."
        }) : /*#__PURE__*/_jsx("div", {
          style: {
            marginTop: 12,
            overflowX: 'auto'
          },
          children: /*#__PURE__*/_jsxs("table", {
            className: "table",
            children: [/*#__PURE__*/_jsx("thead", {
              children: /*#__PURE__*/_jsx("tr", {
                children: ['#', 'Nom', 'Email', 'ELO', 'Partits', 'Wins', 'Losses', 'Winrate', 'Wins direct', 'Wins normal', 'Losses direct', 'Losses normal', '% direct (wins)'].map(function (h) {
                  return /*#__PURE__*/_jsx("th", {
                    style: {
                      textAlign: 'left',
                      borderBottom: '1px solid #ddd',
                      padding: '8px 6px',
                      fontSize: 13,
                      opacity: 0.85
                    },
                    children: h
                  }, h);
                })
              })
            }), /*#__PURE__*/_jsx("tbody", {
              children: statsRows.map(function (r, idx) {
                var _r$win_rate, _r$direct_win_rate, _r$elo;
                var wr = ((_r$win_rate = r.win_rate) !== null && _r$win_rate !== void 0 ? _r$win_rate : 0) * 100;
                var dwr = ((_r$direct_win_rate = r.direct_win_rate) !== null && _r$direct_win_rate !== void 0 ? _r$direct_win_rate : 0) * 100;
                return /*#__PURE__*/_jsxs("tr", {
                  children: [/*#__PURE__*/_jsx("td", {
                    style: {
                      padding: '8px 6px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: 13
                    },
                    children: idx + 1
                  }), /*#__PURE__*/_jsx("td", {
                    style: {
                      padding: '8px 6px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: 13,
                      fontWeight: 700
                    },
                    children: r.display_name
                  }), /*#__PURE__*/_jsx("td", {
                    style: {
                      padding: '8px 6px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: 13,
                      opacity: 0.85
                    },
                    children: r.email || '—'
                  }), /*#__PURE__*/_jsx("td", {
                    style: {
                      padding: '8px 6px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: 13
                    },
                    children: (_r$elo = r.elo) !== null && _r$elo !== void 0 ? _r$elo : '—'
                  }), /*#__PURE__*/_jsx("td", {
                    style: {
                      padding: '8px 6px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: 13
                    },
                    children: r.games_played
                  }), /*#__PURE__*/_jsx("td", {
                    style: {
                      padding: '8px 6px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: 13
                    },
                    children: r.wins
                  }), /*#__PURE__*/_jsx("td", {
                    style: {
                      padding: '8px 6px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: 13
                    },
                    children: r.losses
                  }), /*#__PURE__*/_jsxs("td", {
                    style: {
                      padding: '8px 6px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: 13
                    },
                    children: [wr.toFixed(1), "%"]
                  }), /*#__PURE__*/_jsx("td", {
                    style: {
                      padding: '8px 6px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: 13
                    },
                    children: r.wins_direct
                  }), /*#__PURE__*/_jsx("td", {
                    style: {
                      padding: '8px 6px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: 13
                    },
                    children: r.wins_normal
                  }), /*#__PURE__*/_jsx("td", {
                    style: {
                      padding: '8px 6px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: 13
                    },
                    children: r.losses_direct
                  }), /*#__PURE__*/_jsx("td", {
                    style: {
                      padding: '8px 6px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: 13
                    },
                    children: r.losses_normal
                  }), /*#__PURE__*/_jsxs("td", {
                    style: {
                      padding: '8px 6px',
                      borderBottom: '1px solid #f0f0f0',
                      fontSize: 13
                    },
                    children: [dwr.toFixed(1), "%"]
                  })]
                }, r.player_id);
              })
            })]
          })
        })]
      }), tab === 'kiosk' && isAdmin && /*#__PURE__*/_jsxs("div", {
        style: {
          marginTop: 18,
          width: '100%',
          maxWidth: 800,
          margin: '18px auto'
        },
        children: [/*#__PURE__*/_jsxs("div", {
          style: {
            textAlign: 'center',
            marginBottom: 20
          },
          children: [/*#__PURE__*/_jsx("h2", {
            style: {
              marginTop: 0,
              marginBottom: 6
            },
            children: "Mode Partits"
          }), kioskStep === 'pick' && /*#__PURE__*/_jsx("p", {
            style: {
              opacity: 0.7,
              margin: 0,
              fontSize: 14
            },
            children: "Selecciona els jugadors per comen\xE7ar el partit."
          }), kioskStep !== 'pick' &&
          /*#__PURE__*/
          // Barra de progrés visual simple
          _jsxs("div", {
            style: {
              display: 'flex',
              justifyContent: 'center',
              gap: 6,
              marginTop: 10
            },
            children: [/*#__PURE__*/_jsx("div", {
              style: {
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: kioskStep === 'winner' ? '#333' : '#ddd'
              }
            }), /*#__PURE__*/_jsx("div", {
              style: {
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: kioskStep === 'method' ? '#333' : '#ddd'
              }
            }), /*#__PURE__*/_jsx("div", {
              style: {
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: kioskStep === 'confirm' ? '#333' : '#ddd'
              }
            })]
          })]
        }), kioskStep === 'pick' && /*#__PURE__*/_jsxs(_Fragment, {
          children: [/*#__PURE__*/_jsx("div", {
            style: {
              marginBottom: 16,
              display: 'flex',
              justifyContent: 'center'
            },
            children: /*#__PURE__*/_jsx("button", {
              className: "btn",
              onClick: function onClick() {
                return setShowRegister(!showRegister);
              },
              style: {
                background: showRegister ? '#e5e7eb' : '#fff',
                fontSize: 13,
                padding: '8px 16px'
              },
              children: showRegister ? 'Amagar registre' : '+ Registrar nou jugador'
            })
          }), showRegister && /*#__PURE__*/_jsxs("div", {
            className: "card",
            style: {
              padding: 16,
              marginBottom: 20
            },
            children: [/*#__PURE__*/_jsx("div", {
              style: {
                fontWeight: 800,
                marginBottom: 12
              },
              children: "Nou Jugador"
            }), /*#__PURE__*/_jsxs("div", {
              style: {
                display: 'grid',
                gap: 10,
                gridTemplateColumns: '1fr 1fr'
              },
              children: [/*#__PURE__*/_jsx("input", {
                className: "field",
                value: newPName,
                onChange: function onChange(e) {
                  return setNewPName(e.target.value);
                },
                placeholder: "Nom"
              }), /*#__PURE__*/_jsx("input", {
                className: "field",
                value: newPEmail,
                onChange: function onChange(e) {
                  return setNewPEmail(e.target.value);
                },
                placeholder: "Email UPC"
              })]
            }), /*#__PURE__*/_jsxs("div", {
              style: {
                marginTop: 10,
                display: 'flex',
                gap: 10
              },
              children: [/*#__PURE__*/_jsx("input", {
                className: "field",
                type: "password",
                value: newPPassword,
                onChange: function onChange(e) {
                  return setNewPPassword(e.target.value);
                },
                placeholder: "Password (min 8 char)",
                style: {
                  flex: 1
                }
              }), /*#__PURE__*/_jsx("button", {
                className: "btn btn-primary",
                disabled: creatingPlayer,
                onClick: kioskCreatePlayer,
                children: "Crear"
              })]
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "center-box",
            children: [/*#__PURE__*/_jsxs("div", {
              style: { position: 'relative', marginBottom: 16 },
              children: [/*#__PURE__*/_jsx("input", {
                ref: kioskSearchRef,
                className: "field",
                value: q,
                onChange: function onChange(e) { return searchProfiles(e.target.value); },
                onBlur: function onBlur() {
                  setTimeout(function() { setKioskActiveSlot(null); setResults([]); setQ(''); }, 150);
                },
                placeholder: kioskActiveSlot === 'A'
                  ? '\uD83D\uDD0D Buscar Jugador A...'
                  : kioskActiveSlot === 'B'
                  ? '\uD83D\uDD0D Buscar Jugador B...'
                  : '\uD83D\uDD0D Buscar jugador (nom o email)...',
                style: {
                  fontSize: 16,
                  padding: 14,
                  width: '100%',
                  boxSizing: 'border-box',
                  outline: kioskActiveSlot ? '2px solid #6366f1' : undefined
                }
              }), results.length > 0 && /*#__PURE__*/_jsx("div", {
                style: {
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  zIndex: 999,
                  background: '#fff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 12,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  maxHeight: 240,
                  overflowY: 'auto',
                  marginTop: 4
                },
                children: results.map(function (r) {
                  // Determine which slot this row would fill
                  var rowSlot = kioskActiveSlot === 'A' && r.id !== kioskB ? 'A'
                    : kioskActiveSlot === 'B' && r.id !== kioskA ? 'B'
                    : !kioskA && r.id !== kioskB ? 'A'
                    : !kioskB && r.id !== kioskA ? 'B'
                    : null;
                  return /*#__PURE__*/_jsxs("div", {
                    style: {
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderBottom: '1px solid #f1f5f9',
                      alignItems: 'center',
                      cursor: rowSlot ? 'pointer' : 'default',
                      opacity: rowSlot ? 1 : 0.4
                    },
                    onMouseEnter: function(e) { if (rowSlot) e.currentTarget.style.background = '#f8fafc'; },
                    onMouseLeave: function(e) { e.currentTarget.style.background = ''; },
                    onMouseDown: function() {
                      if (!rowSlot) return;
                      setProfilesMap(function (m) { return _objectSpread(_objectSpread({}, m), {}, { [r.id]: r }); });
                      if (rowSlot === 'A') setKioskA(r.id); else setKioskB(r.id);
                      setQ(''); setResults([]); setKioskActiveSlot(null);
                    },
                    children: [/*#__PURE__*/_jsxs("div", {
                      children: [/*#__PURE__*/_jsx("span", {
                        style: { fontWeight: 600, display: 'block' },
                        children: r.display_name
                      }), /*#__PURE__*/_jsx("span", {
                        style: { fontSize: 12, color: '#64748b', display: 'block', marginTop: 2 },
                        children: r.email
                      })]
                    }), rowSlot && /*#__PURE__*/_jsx("span", {
                      style: {
                        fontSize: 12,
                        fontWeight: 600,
                        color: '#6366f1',
                        background: '#eef2ff',
                        borderRadius: 8,
                        padding: '3px 10px'
                      },
                      children: rowSlot === 'A' ? "Jugador A" : "Jugador B"
                    })]
                  }, r.id);
                })
              })]
            }), /*#__PURE__*/_jsxs("div", {
              style: {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                marginBottom: 16
              },
              children: [/*#__PURE__*/_jsxs("div", {
                className: `card ${!kioskA ? 'pulse-border' : ''}`,
                style: {
                  padding: 16,
                  textAlign: 'center',
                  background: kioskA ? '#f0fdf4' : kioskActiveSlot === 'A' ? '#eef2ff' : '#fff',
                  cursor: kioskA ? 'default' : 'pointer',
                  transition: 'background 0.15s'
                },
                onClick: function onClick() {
                  if (!kioskA) {
                    setKioskActiveSlot('A');
                    setQ('');
                    setResults([]);
                    kioskSearchRef.current && kioskSearchRef.current.focus();
                  }
                },
                children: [/*#__PURE__*/_jsx("div", {
                  style: {
                    fontSize: 12,
                    textTransform: 'uppercase',
                    color: kioskActiveSlot === 'A' ? '#6366f1' : '#888',
                    marginBottom: 4,
                    fontWeight: kioskActiveSlot === 'A' ? 700 : 400
                  },
                  children: kioskActiveSlot === 'A' ? "\u270F\uFE0F Escrivint..." : "Jugador A"
                }), /*#__PURE__*/_jsx("div", {
                  style: { fontSize: 18, fontWeight: 800 },
                  children: kioskA
                    ? (_profilesMap$kioskA$d = (_profilesMap$kioskA = profilesMap[kioskA]) === null || _profilesMap$kioskA === void 0 ? void 0 : _profilesMap$kioskA.display_name) !== null && _profilesMap$kioskA$d !== void 0 ? _profilesMap$kioskA$d : '...'
                    : /*#__PURE__*/_jsx("span", {
                        style: { opacity: 0.4 },
                        children: kioskActiveSlot === 'A' ? "..." : "\u2014"
                      })
                }), kioskA && /*#__PURE__*/_jsx("button", {
                  className: "btn",
                  style: { marginTop: 8, padding: '4px 8px', fontSize: 11 },
                  onClick: function onClick(e) { e.stopPropagation(); setKioskA(null); },
                  children: "Treure"
                })]
              }), /*#__PURE__*/_jsxs("div", {
                className: `card ${kioskA && !kioskB ? 'pulse-border' : ''}`,
                style: {
                  padding: 16,
                  textAlign: 'center',
                  background: kioskB ? '#f0fdf4' : kioskActiveSlot === 'B' ? '#eef2ff' : '#fff',
                  cursor: kioskB ? 'default' : 'pointer',
                  transition: 'background 0.15s'
                },
                onClick: function onClick() {
                  if (!kioskB) {
                    setKioskActiveSlot('B');
                    setQ('');
                    setResults([]);
                    kioskSearchRef.current && kioskSearchRef.current.focus();
                  }
                },
                children: [/*#__PURE__*/_jsx("div", {
                  style: {
                    fontSize: 12,
                    textTransform: 'uppercase',
                    color: kioskActiveSlot === 'B' ? '#6366f1' : '#888',
                    marginBottom: 4,
                    fontWeight: kioskActiveSlot === 'B' ? 700 : 400
                  },
                  children: kioskActiveSlot === 'B' ? "\u270F\uFE0F Escrivint..." : "Jugador B"
                }), /*#__PURE__*/_jsx("div", {
                  style: { fontSize: 18, fontWeight: 800 },
                  children: kioskB
                    ? (_profilesMap$kioskB$d = (_profilesMap$kioskB = profilesMap[kioskB]) === null || _profilesMap$kioskB === void 0 ? void 0 : _profilesMap$kioskB.display_name) !== null && _profilesMap$kioskB$d !== void 0 ? _profilesMap$kioskB$d : '...'
                    : /*#__PURE__*/_jsx("span", {
                        style: { opacity: 0.4 },
                        children: kioskActiveSlot === 'B' ? "..." : "\u2014"
                      })
                }), kioskB && /*#__PURE__*/_jsx("button", {
                  className: "btn",
                  style: { marginTop: 8, padding: '4px 8px', fontSize: 11 },
                  onClick: function onClick(e) { e.stopPropagation(); setKioskB(null); },
                  children: "Treure"
                })]
              })]
            }), /*#__PURE__*/_jsx("button", {
              className: "btn btn-primary",
              style: {
                width: '100%',
                padding: 16,
                fontSize: 16,
                borderRadius: 16
              },
              disabled: !kioskA || !kioskB,
              onClick: function onClick() { return setKioskStep('winner'); },
              children: "Comen\xE7ar Partit \u2192"
            })]
          })]
        }), kioskStep === 'winner' && /*#__PURE__*/_jsxs("div", {
          className: "center-box",
          children: [/*#__PURE__*/_jsx("div", {
            className: "kiosk-step-title",
            children: "Qui ha guanyat?"
          }), /*#__PURE__*/_jsxs("div", {
            className: "kiosk-actions",
            children: [/*#__PURE__*/_jsxs("button", {
              className: "kiosk-bigbtn winner-a",
              onClick: function onClick() {
                setKioskWinner(kioskA);
                setKioskStep('method');
              },
              children: [/*#__PURE__*/_jsx("span", {
                className: "kiosk-sublabel",
                children: "Jugador A"
              }), /*#__PURE__*/_jsx("span", {
                className: "kiosk-bigname",
                children: (_profilesMap$kioskA2 = profilesMap[kioskA]) === null || _profilesMap$kioskA2 === void 0 ? void 0 : _profilesMap$kioskA2.display_name
              })]
            }), /*#__PURE__*/_jsxs("button", {
              className: "kiosk-bigbtn winner-b",
              onClick: function onClick() {
                setKioskWinner(kioskB);
                setKioskStep('method');
              },
              children: [/*#__PURE__*/_jsx("span", {
                className: "kiosk-sublabel",
                children: "Jugador B"
              }), /*#__PURE__*/_jsx("span", {
                className: "kiosk-bigname",
                children: (_profilesMap$kioskB2 = profilesMap[kioskB]) === null || _profilesMap$kioskB2 === void 0 ? void 0 : _profilesMap$kioskB2.display_name
              })]
            })]
          }), /*#__PURE__*/_jsx("button", {
            className: "kiosk-back",
            onClick: function onClick() {
              return setKioskStep('pick');
            },
            children: "\u2190 Enrere"
          })]
        }), kioskStep === 'method' && /*#__PURE__*/_jsxs("div", {
          className: "center-box",
          children: [/*#__PURE__*/_jsx("div", {
            className: "kiosk-step-title",
            children: "Com s'ha guanyat?"
          }), /*#__PURE__*/_jsxs("div", {
            className: "kiosk-actions",
            children: [/*#__PURE__*/_jsxs("button", {
              className: "kiosk-bigbtn",
              onClick: function onClick() {
                setWinMethod('normal');
                setKioskStep('confirm');
              },
              children: [/*#__PURE__*/_jsx("span", {
                className: "kiosk-bigname",
                children: "Partit Normal"
              }), /*#__PURE__*/_jsx("span", {
                className: "kiosk-sublabel",
                style: {
                  opacity: 0.6
                },
                children: "haram ball"
              })]
            }), /*#__PURE__*/_jsxs("button", {
              className: "kiosk-bigbtn",
              onClick: function onClick() {
                setWinMethod('direct');
                setKioskStep('confirm');
              },
              children: [/*#__PURE__*/_jsx("span", {
                className: "kiosk-bigname",
                children: "\uD83C\uDFC6 Punt Directe"
              }), /*#__PURE__*/_jsx("span", {
                className: "kiosk-sublabel",
                style: {
                  opacity: 0.6
                },
                children: "canto quan perdies de 4"
              })]
            })]
          }), /*#__PURE__*/_jsx("button", {
            className: "kiosk-back",
            onClick: function onClick() {
              return setKioskStep('winner');
            },
            children: "\u2190 Enrere"
          })]
        }), kioskStep === 'confirm' && /*#__PURE__*/_jsxs("div", {
          className: "center-box",
          children: [/*#__PURE__*/_jsx("div", {
            className: "kiosk-step-title",
            children: "Confirma el resultat"
          }), /*#__PURE__*/_jsxs("div", {
            className: "card",
            style: {
              padding: 24,
              marginBottom: 20,
              textAlign: 'center',
              border: '2px solid #3b82f6'
            },
            children: [/*#__PURE__*/_jsx("div", {
              style: {
                fontSize: 14,
                color: '#888',
                marginBottom: 8
              },
              children: "GUANYADOR"
            }), /*#__PURE__*/_jsx("div", {
              style: {
                fontSize: 32,
                fontWeight: 900,
                color: '#111',
                marginBottom: 16
              },
              children: (_profilesMap$kioskWin = profilesMap[kioskWinner]) === null || _profilesMap$kioskWin === void 0 ? void 0 : _profilesMap$kioskWin.display_name
            }), /*#__PURE__*/_jsxs("div", {
              style: {
                display: 'flex',
                justifyContent: 'center',
                gap: 20,
                fontSize: 15
              },
              children: [/*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("span", {
                  style: {
                    opacity: 0.6
                  },
                  children: "Perd: "
                }), /*#__PURE__*/_jsx("b", {
                  children: (_profilesMap = profilesMap[kioskWinner === kioskA ? kioskB : kioskA]) === null || _profilesMap === void 0 ? void 0 : _profilesMap.display_name
                })]
              }), /*#__PURE__*/_jsxs("div", {
                children: [/*#__PURE__*/_jsx("span", {
                  style: {
                    opacity: 0.6
                  },
                  children: "Tipus: "
                }), /*#__PURE__*/_jsx("b", {
                  children: winMethod === 'direct' ? 'Punt Directe' : 'Normal'
                })]
              })]
            })]
          }), /*#__PURE__*/_jsx("button", {
            className: "btn btn-primary",
            style: {
              width: '100%',
              padding: 20,
              fontSize: 18,
              borderRadius: 16,
              marginBottom: 10
            },
            disabled: loading,
            onClick: function onClick() {
              // Cridem la funció final
              kioskConfirmNow(kioskWinner).then(function () {
                // Un cop guardat, tornem a l'inici (el reset ja es fa dins de kioskConfirmNow, 
                // però assegurem el pas 'pick' per si de cas)
                setKioskStep('pick');
              });
            },
            children: loading ? 'Guardant...' : '✅ Confirmar i Guardar'
          }), /*#__PURE__*/_jsx("button", {
            className: "kiosk-back",
            onClick: function onClick() {
              return setKioskStep('method');
            },
            children: "\u2190 Enrere"
          })]
        })]
      }), tab === 'matches' && /*#__PURE__*/_jsxs("div", {
        className: "page",
        children: [/*#__PURE__*/_jsx("h2", {
          children: "Crear partit"
        }), isAdmin && /*#__PURE__*/_jsxs("label", {
          style: {
            display: 'block',
            marginBottom: 10,
            textAlign: 'center',
            fontSize: 13,
            color: '#666'
          },
          children: [/*#__PURE__*/_jsx("input", {
            type: "checkbox",
            checked: adminCreateMode,
            onChange: function onChange(e) {
              setAdminCreateMode(e.target.checked);
              setSelectedA(null);
              setSelectedB(null);
            }
          }), ' ', "Mode admin (crear per a altres)"]
        }), /*#__PURE__*/_jsxs("div", {
          className: "center-box vs-widget",
          style: {
            maxWidth: 800
          },
          children: [/*#__PURE__*/_jsxs("div", {
            className: "vs-container",
            children: [/*#__PURE__*/_jsxs("div", {
              className: `player-slot ${selectedA ? 'filled' : ''}`,
              children: [/*#__PURE__*/_jsx("div", {
                className: "player-slot-label",
                children: "Jugador A"
              }), /*#__PURE__*/_jsx("div", {
                className: "player-slot-name",
                children: canAdminCreate ? (_profilesMap$selected = (_profilesMap$selected2 = profilesMap[selectedA]) === null || _profilesMap$selected2 === void 0 ? void 0 : _profilesMap$selected2.display_name) !== null && _profilesMap$selected !== void 0 ? _profilesMap$selected : 'Selecciona...' : (_profilesMap$userId$d = (_profilesMap$userId = profilesMap[userId]) === null || _profilesMap$userId === void 0 ? void 0 : _profilesMap$userId.display_name) !== null && _profilesMap$userId$d !== void 0 ? _profilesMap$userId$d : 'Tu'
              })]
            }), /*#__PURE__*/_jsx("div", {
              className: "vs-badge",
              children: "VS"
            }), /*#__PURE__*/_jsxs("div", {
              className: `player-slot ${selectedB ? 'filled' : ''}`,
              children: [/*#__PURE__*/_jsx("div", {
                className: "player-slot-label",
                children: "Jugador B"
              }), /*#__PURE__*/_jsx("div", {
                className: "player-slot-name",
                children: (_profilesMap$selected3 = (_profilesMap$selected4 = profilesMap[selectedB]) === null || _profilesMap$selected4 === void 0 ? void 0 : _profilesMap$selected4.display_name) !== null && _profilesMap$selected3 !== void 0 ? _profilesMap$selected3 : 'Tria rival 👇'
              })]
            })]
          }), /*#__PURE__*/_jsx("input", {
            className: "field",
            value: q,
            onChange: function onChange(e) {
              return searchProfiles(e.target.value);
            },
            placeholder: "\uD83D\uDD0D Cerca rival per nom o email...",
            style: {
              marginBottom: 12
            }
          }), results.length > 0 && /*#__PURE__*/_jsx("div", {
            className: "search-results-list",
            children: results.map(function (r) {
              return /*#__PURE__*/_jsxs("div", {
                className: "search-item",
                onClick: function onClick() {
                  // Si és mode admin i no tenim A, omplim A. Si ja tenim A (o som user normal), omplim B.
                  if (canAdminCreate && !selectedA) {
                    setSelectedA(r.id);
                  } else {
                    setSelectedB(r.id);
                  }
                  setQ('');
                  setResults([]); // Neteja cerca
                },
                children: [/*#__PURE__*/_jsxs("div", {
                  children: [/*#__PURE__*/_jsx("span", {
                    style: {
                      fontWeight: 600,
                      display: 'block'
                    },
                    children: r.display_name
                  }), /*#__PURE__*/_jsx("span", {
                    style: {
                      fontSize: 11,
                      color: '#64748b',
                      display: 'block',
                      marginTop: 2
                    },
                    children: r.email
                  })]
                }), /*#__PURE__*/_jsx("span", {
                  style: {
                    fontSize: 12,
                    color: '#94a3b8',
                    background: '#f1f5f9',
                    padding: '2px 8px',
                    borderRadius: 10
                  },
                  children: canAdminCreate && !selectedA ? 'Posar com A' : 'Seleccionar'
                })]
              }, r.id);
            })
          }), /*#__PURE__*/_jsx("button", {
            className: "btn btn-primary",
            onClick: createMatch,
            disabled: loading || !selectedB || canAdminCreate && !selectedA,
            style: {
              width: '100%',
              padding: 14
            },
            children: loading ? 'Creant...' : '⚔️ Crear Match'
          })]
        }), /*#__PURE__*/_jsx("h2", {
          style: {
            marginTop: 24
          },
          children: "Els meus partits"
        }), matches.length === 0 && /*#__PURE__*/_jsx("p", {
          style: {
            opacity: 0.75
          },
          children: "No tens partits actius."
        }), /*#__PURE__*/_jsx("div", {
          style: {
            display: 'grid',
            gap: 16,
            width: '100%',
            maxWidth: 800
          },
          children: matches.map(function (m) {
            var _profilesMap$m$player, _profilesMap$m$player2, _profilesMap$m$player3, _profilesMap$m$player4, _profilesMap$m$report, _profilesMap$m$report2;
            var aName = (_profilesMap$m$player = (_profilesMap$m$player2 = profilesMap[m.player_a]) === null || _profilesMap$m$player2 === void 0 ? void 0 : _profilesMap$m$player2.display_name) !== null && _profilesMap$m$player !== void 0 ? _profilesMap$m$player : '...';
            var bName = (_profilesMap$m$player3 = (_profilesMap$m$player4 = profilesMap[m.player_b]) === null || _profilesMap$m$player4 === void 0 ? void 0 : _profilesMap$m$player4.display_name) !== null && _profilesMap$m$player3 !== void 0 ? _profilesMap$m$player3 : '...';
            var wName = m.reported_winner ? (_profilesMap$m$report = (_profilesMap$m$report2 = profilesMap[m.reported_winner]) === null || _profilesMap$m$report2 === void 0 ? void 0 : _profilesMap$m$report2.display_name) !== null && _profilesMap$m$report !== void 0 ? _profilesMap$m$report : m.reported_winner : null;
            var isConfirmed = m.status === 'confirmed';
            var isReported = m.status === 'reported';
            var canConfirm = m.status === 'reported' && (isAdmin || m.reported_by && m.reported_by !== userId);
            return /*#__PURE__*/_jsxs("div", {
              className: "match-card",
              children: [/*#__PURE__*/_jsxs("div", {
                className: "match-header",
                children: [/*#__PURE__*/_jsx("div", {
                  className: `status-badge ${isConfirmed ? 'status-confirmed' : isReported ? 'status-reported' : 'status-pending'}`,
                  style: {
                    background: isConfirmed ? '#f0fdf4' : isReported ? '#eff6ff' : '#fff7ed',
                    color: isConfirmed ? '#15803d' : isReported ? '#1d4ed8' : '#c2410c'
                  },
                  children: isConfirmed ? 'FINALITZAT' : isReported ? 'PENDENT VALIDACIÓ' : 'JUGANT...'
                }), /*#__PURE__*/_jsx("div", {
                  className: "match-meta",
                  children: new Date(m.created_at).toLocaleDateString()
                })]
              }), /*#__PURE__*/_jsxs("div", {
                style: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                },
                children: [/*#__PURE__*/_jsxs("div", {
                  style: {
                    fontSize: 16,
                    fontWeight: 700
                  },
                  children: [aName, " ", /*#__PURE__*/_jsx("span", {
                    style: {
                      color: '#ccc',
                      fontWeight: 400,
                      margin: '0 4px'
                    },
                    children: "vs"
                  }), " ", bName]
                }), m.status === 'pending' && /*#__PURE__*/_jsx("button", {
                  className: "btn-mini-action",
                  onClick: function onClick() {
                    setActiveMatch(m);
                    setShowReportModal(true);
                    setWinMethod('normal');
                  },
                  children: "Reportar"
                })]
              }), isReported && /*#__PURE__*/_jsxs("div", {
                style: {
                  background: '#eff6ff',
                  padding: 16,
                  borderRadius: 16,
                  border: '1px solid #dbeafe',
                  textAlign: 'center'
                },
                children: [canConfirm ? /*#__PURE__*/_jsxs(_Fragment, {
                  children: [/*#__PURE__*/_jsxs("div", {
                    style: {
                      marginBottom: 10,
                      fontSize: 14,
                      color: '#1e40af'
                    },
                    children: ["El rival ha marcat que ha guanyat ", /*#__PURE__*/_jsx("b", {
                      children: wName
                    }), "."]
                  }), /*#__PURE__*/_jsx("button", {
                    className: "btn btn-primary",
                    style: {
                      width: '100%'
                    },
                    disabled: loading,
                    onClick: function onClick() {
                      return confirmMatch(m.id);
                    },
                    children: "\u2705 Confirmar resultat"
                  })]
                }) : /*#__PURE__*/_jsx("div", {
                  style: {
                    fontSize: 13,
                    color: '#1e40af',
                    fontStyle: 'italic',
                    marginBottom: 8
                  },
                  children: "Esperant que el rival confirmi el resultat..."
                }), (isAdmin || m.reported_by === userId) && /*#__PURE__*/_jsx("button", {
                  onClick: function onClick() {
                    return cancelReport(m.id);
                  },
                  disabled: loading,
                  style: {
                    background: 'transparent',
                    border: '1px solid #93c5fd',
                    color: '#2563eb',
                    padding: '6px 12px',
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 600,
                    marginTop: 12,
                    cursor: 'pointer'
                  },
                  children: "\u21A9 M'he equivocat (Cancel\xB7lar)"
                })]
              }), (isReported || isConfirmed) && wName && /*#__PURE__*/_jsxs("div", {
                style: {
                  marginTop: 10,
                  fontSize: 13,
                  color: '#059669',
                  background: '#ecfdf5',
                  padding: '6px 10px',
                  borderRadius: 8,
                  display: 'inline-block'
                },
                children: ["\uD83C\uDFC6 Guanya ", /*#__PURE__*/_jsx("b", {
                  children: wName
                }), " ", m.win_method === 'direct' ? '(Directe)' : '']
              })]
            }, m.id);
          })
        })]
      })]
    }), /*#__PURE__*/_jsx("footer", {
      className: "app-footer",
      children: /*#__PURE__*/_jsxs("div", {
        className: "footer-content",
        children: [/*#__PURE__*/_jsxs("p", {
          children: ["\xA9 ", new Date().getFullYear(), " ", /*#__PURE__*/_jsx("b", {
            children: "@becarisfme"
          }), " \u2014 Fet amb amor per a la FME (millor facultat del m\xF3n)."]
        }), /*#__PURE__*/_jsxs("div", {
          className: "footer-links",
          children: [/*#__PURE__*/_jsx("span", {
            children: "Necessites ajuda?"
          }), /*#__PURE__*/_jsx("a", {
            href: "mailto:unai.soler@estudiantat.upc.edu",
            className: "footer-link",
            children: "Contacta amb l'administrador"
          })]
        })]
      })
    }), showProfileModal && /*#__PURE__*/_jsx("div", {
      className: "modal-overlay",
      onClick: function onClick() {
        return setShowProfileModal(false);
      },
      children: /*#__PURE__*/_jsxs("div", {
        className: "modal-content",
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        children: [/*#__PURE__*/_jsx("h2", {
          style: {
            marginTop: 0,
            marginBottom: 16,
            textAlign: 'center'
          },
          children: "Editar Perfil"
        }), /*#__PURE__*/_jsx("p", {
          style: {
            fontSize: 14,
            opacity: 0.7,
            marginBottom: 20,
            textAlign: 'center'
          },
          children: "Canvia el teu nom d'usuari o la teva contrasenya."
        }), /*#__PURE__*/_jsxs("div", {
          style: {
            display: 'grid',
            gap: 12
          },
          children: [/*#__PURE__*/_jsxs("div", {
            style: {
              borderBottom: '2px solid #e5e7eb',
              paddingBottom: 16,
              marginBottom: 8
            },
            children: [/*#__PURE__*/_jsx("label", {
              style: {
                fontSize: 12,
                fontWeight: 700,
                marginLeft: 4,
                opacity: 0.6,
                display: 'block',
                marginBottom: 8
              },
              children: "NOM D'USUARI"
            }), /*#__PURE__*/_jsx("div", {
              style: {
                fontSize: 13,
                opacity: 0.65,
                marginBottom: 8,
                marginLeft: 4
              },
              children: /*#__PURE__*/_jsxs("span", {
                children: ["Actual: ", /*#__PURE__*/_jsx("b", {
                  children: (_profilesMap$userId$d = (_profilesMap$userId = profilesMap[userId]) === null || _profilesMap$userId === void 0 ? void 0 : _profilesMap$userId.display_name) !== null && _profilesMap$userId$d !== void 0 ? _profilesMap$userId$d : userEmail
                })]
              })
            }), /*#__PURE__*/_jsx("input", {
              className: "field",
              type: "text",
              placeholder: "Nou nom d'usuari",
              value: newDisplayName,
              onChange: function onChange(e) {
                return setNewDisplayName(e.target.value);
              },
              style: {
                marginBottom: 10
              }
            }), /*#__PURE__*/_jsx("button", {
              className: "btn btn-primary",
              onClick: updateDisplayName,
              disabled: loading || newDisplayName.trim().length < 2,
              style: {
                width: '100%'
              },
              children: loading ? 'Guardant...' : 'Guardar nom'
            })]
          }), /*#__PURE__*/_jsxs("div", {
            style: {
              borderBottom: '1px solid #eee',
              paddingBottom: 12,
              marginBottom: 4,
              marginTop: 8
            },
            children: [/*#__PURE__*/_jsx("label", {
              style: {
                fontSize: 12,
                fontWeight: 700,
                marginLeft: 4,
                opacity: 0.6
              },
              children: "CANVIAR CONTRASENYA"
            }), /*#__PURE__*/_jsx("div", {
              style: {
                fontSize: 12,
                opacity: 0.6,
                marginTop: 6,
                marginBottom: 8,
                marginLeft: 4
              },
              children: "Introdueix la teva contrasenya actual per canviar-la:"
            }), /*#__PURE__*/_jsx("input", {
              className: "field",
              type: "password",
              placeholder: "Contrasenya actual",
              value: currentPassword,
              onChange: function onChange(e) {
                return setCurrentPassword(e.target.value);
              },
              style: {
                background: '#f9fafb'
              } // Un color lleugerament diferent per distingir-lo
            })]
          }), /*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("input", {
              className: "field",
              type: "password",
              placeholder: "Nova contrasenya (m\xEDn 8)",
              value: newProfilePass,
              onChange: function onChange(e) {
                return setNewProfilePass(e.target.value);
              },
              style: {
                marginBottom: 10
              }
            }), /*#__PURE__*/_jsx("input", {
              className: "field",
              type: "password",
              placeholder: "Confirmar nova contrasenya",
              value: confirmProfilePass,
              onChange: function onChange(e) {
                return setConfirmProfilePass(e.target.value);
              },
              style: {
                marginBottom: 10
              }
            }), /*#__PURE__*/_jsx("button", {
              className: "btn btn-primary",
              onClick: updateMyPassword,
              disabled: loading || !currentPassword,
              style: {
                width: '100%'
              },
              children: loading ? 'Verificant...' : 'Canviar contrasenya'
            })]
          })]
        }), err && /*#__PURE__*/_jsx("div", {
          className: "alert alert-error",
          style: {
            marginTop: 10,
            padding: 10
          },
          children: err
        }), info && /*#__PURE__*/_jsx("div", {
          className: "alert",
          style: {
            marginTop: 10,
            padding: 10,
            background: '#f0fdf4',
            color: '#166534'
          },
          children: info
        }), /*#__PURE__*/_jsxs("div", {
          className: "modal-actions",
          style: {
            marginTop: 24,
            display: 'flex',
            gap: 10,
            justifyContent: 'flex-end'
          },
          children: [/*#__PURE__*/_jsx("button", {
            className: "btn",
            onClick: function onClick() {
              return setShowProfileModal(false);
            },
            disabled: loading,
            children: "Tancar"
          })]
        })]
      })
    }), showReportModal && activeMatch && /*#__PURE__*/_jsx("div", {
      className: "modal-overlay",
      onClick: function onClick() {
        return setShowReportModal(false);
      },
      children: /*#__PURE__*/_jsxs("div", {
        className: "modal-content",
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        children: [/*#__PURE__*/_jsx("h3", {
          style: {
            marginTop: 0,
            textAlign: 'center'
          },
          children: "Reportar Resultat"
        }), /*#__PURE__*/_jsx("p", {
          style: {
            fontSize: 13,
            color: '#64748b',
            textAlign: 'center',
            marginBottom: 20
          },
          children: "Selecciona com s'ha guanyat i qui s'emporta la vict\xF2ria."
        }), /*#__PURE__*/_jsxs("div", {
          className: "report-toggle-container",
          children: [/*#__PURE__*/_jsx("button", {
            className: `report-toggle-btn ${winMethod === 'normal' ? 'active' : ''}`,
            onClick: function onClick() {
              return setWinMethod('normal');
            },
            children: "Partit Normal"
          }), /*#__PURE__*/_jsx("button", {
            className: `report-toggle-btn ${winMethod === 'direct' ? 'active' : ''}`,
            onClick: function onClick() {
              return setWinMethod('direct');
            },
            children: "\uD83D\uDD25 Punt Directe"
          })]
        }), /*#__PURE__*/_jsxs("div", {
          className: "winner-grid",
          children: [/*#__PURE__*/_jsxs("div", {
            className: "winner-btn",
            onClick: function onClick() {
              reportWinner(activeMatch.id, activeMatch.player_a);
              setShowReportModal(false);
            },
            children: [/*#__PURE__*/_jsx("h4", {
              children: ((_profilesMap$activeMa = profilesMap[activeMatch.player_a]) === null || _profilesMap$activeMa === void 0 ? void 0 : _profilesMap$activeMa.display_name) || 'Jugador A'
            }), /*#__PURE__*/_jsx("span", {
              children: "Jugador A"
            })]
          }), /*#__PURE__*/_jsxs("div", {
            className: "winner-btn",
            onClick: function onClick() {
              reportWinner(activeMatch.id, activeMatch.player_b);
              setShowReportModal(false);
            },
            children: [/*#__PURE__*/_jsx("h4", {
              children: ((_profilesMap$activeMa2 = profilesMap[activeMatch.player_b]) === null || _profilesMap$activeMa2 === void 0 ? void 0 : _profilesMap$activeMa2.display_name) || 'Jugador B'
            }), /*#__PURE__*/_jsx("span", {
              children: "Jugador B"
            })]
          })]
        }), /*#__PURE__*/_jsx("div", {
          style: {
            marginTop: 20,
            textAlign: 'center'
          },
          children: /*#__PURE__*/_jsx("button", {
            className: "kiosk-back",
            style: {
              margin: 0
            },
            onClick: function onClick() {
              return setShowReportModal(false);
            },
            children: "Cancel\xB7lar"
          })
        })]
      })
    })]
  });
}