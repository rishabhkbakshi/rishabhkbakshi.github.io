"use strict";
(self["webpackChunkbakshi_parivar"] = self["webpackChunkbakshi_parivar"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _components_family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/family-tree/family-tree.component */ 4129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





const routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'tree',
  component: _components_family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_1__.FamilyTreeComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var F_SourceCode_GitHub_rishabhkbakshi_Angular_bakshi_parivar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _components_family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/family-tree/family-tree.component */ 4129);
/* harmony import */ var _components_info_and_stats_info_and_stats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/info-and-stats/info-and-stats.component */ 8687);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _shared_services_visit_counter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/services/visit-counter.service */ 3080);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);










function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \uD83D\uDCF6 No internet connection\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \u2705 Back online\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25)(1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u27A1 ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, ctx_r9.visitCount), "");
  }
}
function AppComponent_div_6_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r11.visitCountError ? "--" : "...");
  }
}
function AppComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21)(1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Visits");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_6_span_3_Template, 4, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_div_6_ng_template_4_Template, 2, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.visitCount !== null)("ngIfElse", _r10);
  }
}
function AppComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.resetCounter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " \uD83D\uDD03 Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r3.isAdmin);
  }
}
function AppComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\uD83D\uDEA8");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Failed to load visit count. Please try again later.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_8_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.showVisitCountErrorAlert = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AppComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32)(1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "You are on the same page and refreshed recently.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_9_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.dismissCooldownWarning());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function AppComponent_div_10_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_div_10_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.onNextMatch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Please press enter to go the next node");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function AppComponent_div_10_Template_input_input_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.onSearch($event));
    })("keydown.enter", function AppComponent_div_10_Template_input_keydown_enter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.onNextMatch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AppComponent_div_10_button_3_Template, 2, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AppComponent_div_10_div_4_Template, 2, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("margin-bottom", ctx_r6.showNextHint ? 10 : 0, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.showNextHint);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.showNextHint);
  }
}
function AppComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u2600\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function AppComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\uD83C\uDF19");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(visitCounterService, route, router) {
    this.visitCounterService = visitCounterService;
    this.route = route;
    this.router = router;
    this.title = 'bakshi-parivar';
    this.isDark = false;
    this.visitCount = null;
    this.visitCountError = false;
    this.isAdmin = false;
    // Search state for multi-match navigation
    this.matches = [];
    this.currentMatchIndex = -1;
    this.showNextHint = false;
    this.showVisitCountErrorAlert = false; // New property
    this.showCooldownWarning = false;
    this.showHeaderSearch = false;
    this.isOffline = !navigator.onLine;
    this.showOnlineToast = false;
    this.SECRET_ADMIN_KEY = 'bakshi_parivar_admin_secret';
    this.triggerReplay = false;
    this.showAppInfoModal = false;
    this.router.events.subscribe(() => {
      this.showHeaderSearch = this.router.url.includes('tree');
    });
  }
  ngOnInit() {
    console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment);
    this.onLineOffLogicInternetLogic();
    try {
      const stored = localStorage.getItem('theme');
      this.isDark = stored === 'dark';
    } catch {
      this.isDark = false;
    }
    this.applyTheme();
    void this.loadVisitCount();
    this.isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (this.isAdmin) {
      return; // Already admin, no need to check query params
    }

    this.route.queryParams.subscribe(params => {
      if (params['role'] === 'admin' && params['secret'] === this.SECRET_ADMIN_KEY) {
        localStorage.setItem('isAdmin', 'true');
        localStorage.setItem('secretData', JSON.stringify({
          role: 'admin',
          secret: this.SECRET_ADMIN_KEY
        }));
        this.isAdmin = true;
        window.history.replaceState({}, '', window.location.pathname); // Remove query params from URL  
      }
    });
  }

  get isHomePage() {
    return this.router.url === '/' || this.router.url.startsWith('/?') || this.router.url === '/home';
  }
  get isTreePage() {
    return this.router.url.startsWith('/tree');
  }
  onLineOffLogicInternetLogic() {
    window.addEventListener('offline', () => {
      this.isOffline = true;
      this.showOnlineToast = false;
    });
    window.addEventListener('online', () => {
      this.isOffline = false;
      // ✅ show reconnect toast
      this.showOnlineToast = true;
      setTimeout(() => {
        this.showOnlineToast = false;
      }, 2500); // auto hide
    });
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    try {
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    } catch {}
    this.applyTheme();
  }
  goHome() {
    this.router.navigate(['/']);
  }
  applyTheme() {
    const cls = 'theme-dark';
    if (this.isDark) {
      document.documentElement.classList.add(cls);
    } else {
      document.documentElement.classList.remove(cls);
    }
  }
  handleCounterRequest(requestFn) {
    return (0,F_SourceCode_GitHub_rishabhkbakshi_Angular_bakshi_parivar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield requestFn();
      if (!response.ok) {
        throw new Error('Counter request failed.');
      }
      const result = yield response.json();
      const value = Number(result.value);
      if (!Number.isFinite(value)) {
        throw new Error('Counter response was invalid.');
      }
      if (value === 0 && 'old_value' in result) {
        const old_value = Number(result.old_value);
        console.log(`Old Visit Count = ${old_value}, Now counter is reset successfully`);
      }
      return value;
    })();
  }
  loadVisitCount() {
    var _this = this;
    return (0,F_SourceCode_GitHub_rishabhkbakshi_Angular_bakshi_parivar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const VISIT_CACHE_KEY = 'bakshi_parivar_visit_cache';
      const LAST_VISIT_KEY = 'bakshi_parivar_last_visit';
      const OFFLINE_INC_KEY = 'bakshi_parivar_offline_inc';
      const COOLDOWN_MS = 20000;
      if (_this.visitCounterService.isItOnLocalHost) {
        _this.visitCount = 0;
        _this.visitCountError = false;
        return;
      }
      const now = Date.now();
      const cachedCount = Number(localStorage.getItem(VISIT_CACHE_KEY) || 0);
      const offlineInc = Number(localStorage.getItem(OFFLINE_INC_KEY) || 0);
      // ✅ OFFLINE MODE
      if (!navigator.onLine) {
        // ✅ increment locally
        const newOfflineInc = offlineInc + 1;
        localStorage.setItem(OFFLINE_INC_KEY, String(newOfflineInc));
        // ✅ show combined count
        _this.visitCount = cachedCount + newOfflineInc;
        return;
      }
      // ✅ show cached instantly (smooth UX)
      if (cachedCount) {
        _this.visitCount = cachedCount;
      }
      const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
      // ✅ COOLDOWN CHECK
      if (lastVisit && now - Number(lastVisit) < COOLDOWN_MS) {
        _this.visitCountError = false;
        _this.showCooldownWarning = true;
        _this.cooldownTimeoutId = window.setTimeout(() => {
          _this.showCooldownWarning = false;
          _this.cooldownTimeoutId = undefined;
        }, 6000);
        return;
      }
      try {
        // ✅ CALL API
        let newCount = yield _this.handleCounterRequest(() => _this.visitCounterService.getCounter());
        // ✅ SYNC OFFLINE VISITS
        if (offlineInc > 0) {
          for (let i = 0; i < offlineInc; i++) {
            yield _this.visitCounterService.getCounter();
          }
          newCount += offlineInc;
          localStorage.setItem(OFFLINE_INC_KEY, '0');
        }
        // ✅ SAVE
        _this.visitCount = newCount;
        localStorage.setItem(VISIT_CACHE_KEY, String(newCount));
        localStorage.setItem(LAST_VISIT_KEY, String(now));
        _this.visitCountError = false;
        _this.showVisitCountErrorAlert = false;
      } catch {
        // ✅ fallback
        _this.visitCount = cachedCount + offlineInc;
        _this.visitCountError = true;
        _this.showVisitCountErrorAlert = true;
      }
    })();
  }
  resetCounter() {
    var _this2 = this;
    return (0,F_SourceCode_GitHub_rishabhkbakshi_Angular_bakshi_parivar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentSecret = localStorage.getItem('secretData') ? JSON.parse(localStorage.getItem('secretData')).secret : null;
      if (currentSecret !== _this2.SECRET_ADMIN_KEY) {
        console.error('Unauthorized attempt to reset counter.');
        _this2.visitCountError = true;
        _this2.showVisitCountErrorAlert = true; // Show alert on unauthorized attempt
        return;
      }
      try {
        _this2.visitCount = yield _this2.handleCounterRequest(() => _this2.visitCounterService.resetCounter());
        _this2.visitCountError = false;
        _this2.showVisitCountErrorAlert = false; // Hide alert on success
      } catch {
        _this2.visitCountError = true;
        _this2.showVisitCountErrorAlert = true; // Show alert on error
      }
    })();
  }

  replayIntro() {
    // ✅ trigger replay via flag
    this.triggerReplay = true;
    setTimeout(() => {
      this.triggerReplay = false;
    }, 100);
  }
  onSearch(event) {
    const input = event.target;
    const name = input.value.trim().toLowerCase();
    // Search starts after 2 characters for better responsiveness
    if (!name || name.length < 2) {
      this.clearAllHighlights();
      this.matches = [];
      this.currentMatchIndex = -1;
      this.showNextHint = false;
      return;
    }
    // Search for member cards or name labels in the DOM
    const MAX_MATCHES = 200; // safety cap
    const elements = Array.from(document.querySelectorAll('.node-card'));
    this.matches = elements.filter(el => el.textContent?.toLowerCase().includes(name)).slice(0, MAX_MATCHES);
    if (this.matches.length === 0) {
      this.clearAllHighlights();
      this.currentMatchIndex = -1;
      this.showNextHint = false;
      return;
    }
    // Start at first match and highlight it
    this.currentMatchIndex = 0;
    this.showNextHint = this.matches.length > 1;
    this.showMatch(this.currentMatchIndex);
  }
  onNextMatch() {
    if (!this.matches || this.matches.length === 0) return;
    // advance cyclically
    this.currentMatchIndex = (this.currentMatchIndex + 1) % this.matches.length;
    this.showMatch(this.currentMatchIndex);
  }
  showMatch(index) {
    this.clearCurrentHighlight();
    const el = this.matches[index];
    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
    el.style.outline = '4px solid #ffd700';
    el.style.outlineOffset = '3px';
    el.style.boxShadow = '0 0 18px rgba(255,215,0,0.8)';
    this.currentlyHighlighted = el;
    // keep highlight for 6 seconds (between 5-7s as requested)
    this.highlightTimeoutId = window.setTimeout(() => {
      if (this.currentlyHighlighted) {
        this.currentlyHighlighted.style.outline = 'none';
        this.currentlyHighlighted = undefined;
      }
      this.highlightTimeoutId = undefined;
    }, 6000);
  }
  clearCurrentHighlight() {
    if (this.currentlyHighlighted) {
      this.currentlyHighlighted.style.outline = 'none';
      this.currentlyHighlighted = undefined;
    }
    if (this.highlightTimeoutId) {
      clearTimeout(this.highlightTimeoutId);
      this.highlightTimeoutId = undefined;
    }
  }
  clearAllHighlights() {
    this.clearCurrentHighlight();
    document.querySelectorAll('.node-card').forEach(el => el.style.outline = 'none');
  }
  dismissCooldownWarning() {
    this.showCooldownWarning = false;
    if (this.cooldownTimeoutId) {
      clearTimeout(this.cooldownTimeoutId);
      this.cooldownTimeoutId = undefined;
    }
  }
  openAppInfo() {
    this.showAppInfoModal = true;
  }
  closeAppInfo() {
    this.showAppInfoModal = false;
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_visit_counter_service__WEBPACK_IMPORTED_MODULE_4__.VisitCounterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_components_family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_1__.FamilyTreeComponent, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_components_info_and_stats_info_and_stats_component__WEBPACK_IMPORTED_MODULE_2__.InfoAndStatsComponent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.familyTree = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.infoAndStats = _t.first);
        }
      },
      decls: 32,
      vars: 19,
      consts: [["class", "offline-banner", 4, "ngIf"], ["class", "online-toast", 4, "ngIf"], [1, "app-ui-header"], [1, "visit-counter-container"], [1, "app-title", 3, "click"], ["class", "visit-counter", "title", "Public site loads", 4, "ngIf"], ["class", "visit-counter-reset", "type", "button", "title", "Reset Visit Counter", "aria-label", "Reset Visit Counter", 3, "disabled", "click", 4, "ngIf"], ["class", "visit-alert error", "role", "alert", "aria-live", "assertive", 4, "ngIf"], ["class", "visit-alert", "role", "alert", "aria-live", "assertive", 4, "ngIf"], ["class", "search-container", 3, "margin-bottom", 4, "ngIf"], [1, "theme-toggle", 3, "title", "click"], ["class", "sun", "aria-hidden", "true", 4, "ngIf"], ["class", "moon", "aria-hidden", "true", 4, "ngIf"], [1, "main-content"], ["role", "contentinfo", "aria-label", "Creator signature", 1, "creator-footer", "marquee-footer"], [1, "marquee-wrapper"], [1, "marquee-content"], [1, "app-info-btn", 3, "click"], [3, "showAppInfoModal", "close"], [1, "offline-banner"], [1, "online-toast"], ["title", "Public site loads", 1, "visit-counter"], [1, "visit-counter__label"], ["class", "visit-counter__value", 4, "ngIf", "ngIfElse"], ["visitCountPending", ""], [1, "visit-counter__value"], [1, "visit-counter__arrow"], ["type", "button", "title", "Reset Visit Counter", "aria-label", "Reset Visit Counter", 1, "visit-counter-reset", 3, "disabled", "click"], ["role", "alert", "aria-live", "assertive", 1, "visit-alert", "error"], [1, "visit-alert__icon"], [1, "visit-alert__text"], ["aria-label", "Dismiss", 1, "visit-alert__close", 3, "click"], ["role", "alert", "aria-live", "assertive", 1, "visit-alert"], [1, "search-container"], [1, "search-input-wrapper"], ["type", "search", "inputmode", "search", "enterkeyhint", "next", "placeholder", "Search family member...", "aria-label", "Search family member", 3, "input", "keydown.enter"], ["class", "search-next", "aria-label", "Next match", 3, "click", 4, "ngIf"], ["class", "search-hint", 4, "ngIf"], ["aria-label", "Next match", 1, "search-next", 3, "click"], [1, "search-hint"], ["aria-hidden", "true", 1, "sun"], ["aria-hidden", "true", 1, "moon"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "header", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_div_click_4_listener() {
            return !ctx.isHomePage && ctx.goHome();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " \uD83C\uDF33 Bakshi Parivar ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AppComponent_div_6_Template, 6, 2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AppComponent_button_7_Template, 2, 1, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AppComponent_div_8_Template, 7, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AppComponent_div_9_Template, 7, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AppComponent_div_10_Template, 5, 4, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() {
            return ctx.toggleTheme();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AppComponent_span_12_Template, 2, 0, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AppComponent_span_13_Template, 2, 0, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "footer", 14)(17, "div", 15)(18, "div", 16)(19, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " Handcrafted with \u2764\uFE0F for our family legacy by \u2014 Yours ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "loving & weird");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Vicky (Rishabh) \u2728 \u090F\u0915 \u0905\u0926\u0928\u093E \u0938\u093E developer \u2728 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Handcrafted with \u2764\uFE0F for our family legacy by \u2014 Yours ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "loving & weird");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Vicky (Rishabh) \u2728 \u090F\u0915 \u0905\u0926\u0928\u093E \u0938\u093E developer \u2728 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_button_click_29_listener() {
            return ctx.openAppInfo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " \uD83D\uDCCA ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "app-info-and-stats", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("close", function AppComponent_Template_app_info_and_stats_close_31_listener() {
            return ctx.closeAppInfo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isOffline);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showOnlineToast);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("clickable", !ctx.isHomePage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAdmin && ctx.isTreePage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAdmin && ctx.isTreePage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showVisitCountErrorAlert);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showCooldownWarning);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showHeaderSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", ctx.isDark ? "Change to Light Theme" : "Change to Dark Theme");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-pressed", ctx.isDark);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isDark);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isDark);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("admin-view", ctx.isAdmin && ctx.isTreePage)("home-page", ctx.isHomePage);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@footerAnimation", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showAppInfoModal", ctx.showAppInfoModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _components_info_and_stats_info_and_stats_component__WEBPACK_IMPORTED_MODULE_2__.InfoAndStatsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe],
      styles: ["@charset \"UTF-8\";\n\n\n.offline-banner[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: #d32f2f;\n  color: #fff;\n  text-align: center;\n  padding: 8px;\n  font-size: 13px;\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n\n\n\n.online-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 16px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: #2e7d32;\n  color: #fff;\n  padding: 8px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_fadeUp 0.4s ease;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    transform: translateY(-100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translate(-50%, 20px);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, 0);\n  }\n}\n.app-ui-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  min-height: 80px;\n  \n\n  z-index: 1200;\n  background: var(--footer-bg);\n  backdrop-filter: blur(50px);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  pointer-events: none;\n  \n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  box-sizing: border-box;\n  gap: 12px;\n  flex-wrap: wrap;\n  \n\n}\n.app-ui-header[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n\n\n\n.visit-counter-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.visit-counter[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  height: 40px;\n  padding: 0 12px;\n  border: 1px solid var(--footer-text);\n  border-radius: 999px;\n  color: var(--footer-text);\n  font-size: 0.82rem;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.visit-counter[_ngcontent-%COMP%]   .visit-counter__label[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.visit-counter[_ngcontent-%COMP%]   .visit-counter__arrow[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.visit-alert[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 16px;\n  left: 50%;\n  font-size: 12px;\n  opacity: 0.8;\n  transform: translateX(-50%);\n  z-index: 1400;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: linear-gradient(180deg, rgba(255, 250, 235, 0.98), rgba(255, 245, 225, 0.98));\n  color: #3b2f00;\n  border: 1px solid rgba(60, 40, 0, 0.12);\n  padding: 0 10px;\n  border-radius: 8px;\n  box-shadow: 0 6px 18px rgba(12, 18, 28, 0.12);\n}\n.visit-alert[_ngcontent-%COMP%]   .visit-alert__icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1;\n}\n.visit-alert[_ngcontent-%COMP%]   .visit-alert__text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.visit-alert[_ngcontent-%COMP%]   .visit-alert.error[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, rgba(255, 235, 238, 0.98), rgba(255, 224, 224, 0.98));\n  color: #b71c1c;\n  border: 1px solid rgba(183, 28, 28, 0.12);\n}\n.visit-alert[_ngcontent-%COMP%]   .visit-alert__close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: inherit;\n  font-size: 1rem;\n  padding: 4px 6px;\n  border-radius: 6px;\n  cursor: pointer;\n}\n\n.visit-counter-reset[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  height: 40px;\n  padding: 0 12px;\n  border: 2px solid rgba(60, 40, 0, 0.12);\n  border-radius: 999px;\n  background: rgba(var(--footer-bg-rgb), 0.5);\n  color: var(--footer-text);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  font-size: 0.82rem;\n  font-weight: 700;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: transform 160ms ease, background 180ms ease, color 180ms ease;\n}\n.visit-counter-reset[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.visit-counter-reset[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.62;\n  transform: none;\n}\n\n.search-container[_ngcontent-%COMP%] {\n  \n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  flex-grow: 1;\n  max-width: 400px;\n  \n\n}\n.search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n}\n.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 220px;\n  padding: 0 16px;\n  border-radius: 999px;\n  border: 1px solid var(--footer-text);\n  background: rgba(var(--footer-bg-rgb), 0.42);\n  color: var(--footer-text);\n  backdrop-filter: blur(8px);\n  font-size: 0.85rem;\n  outline: none;\n  transition: width 250ms ease, border-color 200ms ease;\n}\n.search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  width: 300px;\n  border-color: #ffd700;\n}\n.search-container[_ngcontent-%COMP%]   .search-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 95%;\n  \n\n  margin-top: 2px;\n  font-size: 0.72rem;\n  color: var(--footer-text);\n  opacity: 0.9;\n  text-align: center;\n  pointer-events: none;\n  white-space: nowrap;\n}\n.search-container[_ngcontent-%COMP%]   .search-next[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  padding: 8px 12px;\n  border-radius: 999px;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  background: rgba(var(--footer-bg-rgb), 0.6);\n  color: var(--footer-text);\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 120ms ease, background 120ms ease;\n  touch-action: manipulation;\n}\n.search-container[_ngcontent-%COMP%]   .search-next[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n\n.theme-toggle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  width: 40px;\n  border: none;\n  border-radius: 999px;\n  background: rgba(var(--footer-bg-rgb), 0.5);\n  color: var(--footer-text);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  transition: transform 160ms ease, background 180ms ease, color 180ms ease;\n}\n.theme-toggle[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.theme-toggle[_ngcontent-%COMP%]   .sun[_ngcontent-%COMP%], .theme-toggle[_ngcontent-%COMP%]   .moon[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 1;\n  font-size: 16px;\n  transition: opacity 200ms ease, transform 200ms ease;\n}\n\n\n\n.main-content[_ngcontent-%COMP%] {\n  margin-top: 86px;\n  \n\n  position: relative;\n}\n\n\n\n@media (max-width: 680px) {\n  .app-ui-header[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    z-index: 1200;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    row-gap: 2px;\n    column-gap: 12px;\n    padding: 16px 14px;\n    min-height: auto;\n  }\n  .visit-counter-container[_ngcontent-%COMP%] {\n    display: contents;\n  }\n  \n\n  .app-title[_ngcontent-%COMP%] {\n    order: 1;\n    margin-right: auto;\n    \n\n    padding: 0;\n  }\n  .theme-toggle[_ngcontent-%COMP%] {\n    order: 2;\n    margin-left: auto;\n    \n\n  }\n  \n\n  .visit-counter-container[_ngcontent-%COMP%]::before {\n    content: \"\";\n    order: 3;\n    flex-basis: 100%;\n    height: 0;\n  }\n  \n\n  .visit-counter[_ngcontent-%COMP%] {\n    order: 4;\n  }\n  .visit-counter-reset[_ngcontent-%COMP%] {\n    order: 6;\n  }\n  \n\n  .search-container[_ngcontent-%COMP%] {\n    order: 7;\n    flex-basis: 100%;\n    max-width: 100%;\n    margin-top: 0;\n  }\n  .search-container[_ngcontent-%COMP%]   .search-input-wrapper[_ngcontent-%COMP%] {\n    padding: 10px;\n    width: 100%;\n  }\n  .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 70%;\n    min-width: 160px;\n    transition: none;\n  }\n  .search-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n    width: 75%;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-top: 105px;\n    \n\n  }\n  .main-content.admin-view[_ngcontent-%COMP%] {\n    margin-top: 140px;\n  }\n  .main-content.home-page[_ngcontent-%COMP%] {\n    margin-top: 80px;\n  }\n}\n\n\n.creator-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 12px;\n  bottom: 12px;\n  font-size: 0.9rem;\n  color: var(--footer-text);\n  background: var(--footer-bg);\n  padding: 6px 10px;\n  border-radius: 8px;\n  z-index: 1000;\n  pointer-events: none;\n  backdrop-filter: blur(6px);\n  box-shadow: 0 6px 18px rgba(12, 18, 28, 0.06);\n}\n\n.marquee-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: rgba(var(--footer-bg-rgb), 0.8);\n  \n\n  overflow: hidden;\n  white-space: nowrap;\n  padding: 8px 0;\n  z-index: 1000;\n  backdrop-filter: blur(5px);\n}\n\n.marquee-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 100%;\n  animation: _ngcontent-%COMP%_marquee 20s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_marquee {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(-100%, 0);\n  }\n}\n.creator-footer.marquee-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 1100;\n  background: rgba(255, 255, 255, 0.7);\n  backdrop-filter: blur(12px) saturate(160%);\n  -webkit-backdrop-filter: blur(12px) saturate(160%);\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n  padding: 10px 0;\n  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.03);\n}\n.creator-footer.marquee-footer[_ngcontent-%COMP%]   .marquee-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.creator-footer.marquee-footer[_ngcontent-%COMP%]   .marquee-wrapper[_ngcontent-%COMP%]   .app-info-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-right: 10px;\n  width: 34px;\n  height: 34px;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  background: rgba(108, 92, 231, 0.12);\n  color: #6c5ce7;\n  font-size: 16px;\n  transition: all 0.2s ease;\n  pointer-events: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.creator-footer.marquee-footer[_ngcontent-%COMP%]   .marquee-wrapper[_ngcontent-%COMP%]   .app-info-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n  background: rgba(108, 92, 231, 0.18);\n}\n.creator-footer.marquee-footer[_ngcontent-%COMP%]   .marquee-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  display: flex;\n  width: max-content;\n  animation: _ngcontent-%COMP%_marquee 30s linear infinite;\n  will-change: transform;\n  transform: translateZ(0);\n  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);\n}\n.creator-footer.marquee-footer[_ngcontent-%COMP%]   .marquee-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  white-space: nowrap;\n  padding: 0 80px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #2d3436;\n  letter-spacing: 0.2px;\n}\n.creator-footer.marquee-footer[_ngcontent-%COMP%]   .marquee-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #6c5ce7;\n  background: linear-gradient(90deg, #ff6b6b, #a29bfe, #48dbfb, #ff6b6b);\n  background-size: 200% auto;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: _ngcontent-%COMP%_shine 4s linear infinite;\n}\n.creator-footer.marquee-footer[_ngcontent-%COMP%]   .marquee-content[_ngcontent-%COMP%]:hover {\n  animation-play-state: paused;\n}\n\n.app-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #2e7d32;\n  margin: 0;\n  padding: 8px 4px;\n  -webkit-user-select: none;\n          user-select: none;\n  transition: opacity 0.2s ease;\n}\n.app-title.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.app-title.clickable[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.app-title.clickable[_ngcontent-%COMP%]:active {\n  opacity: 0.7;\n}\n\n.theme-dark[_nghost-%COMP%]   .app-title[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .app-title[_ngcontent-%COMP%] {\n  color: #81c784;\n}\n.theme-dark[_nghost-%COMP%]   .creator-footer.marquee-footer[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .creator-footer.marquee-footer[_ngcontent-%COMP%] {\n  background: rgba(30, 30, 30, 0.8);\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.theme-dark[_nghost-%COMP%]   .creator-footer.marquee-footer[_ngcontent-%COMP%]   .marquee-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .creator-footer.marquee-footer[_ngcontent-%COMP%]   .marquee-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #dfe6e9;\n}\n.theme-dark[_nghost-%COMP%]   .visit-counter[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .visit-counter[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.25);\n}\n.theme-dark[_nghost-%COMP%]   .visit-counter-reset[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .visit-counter-reset[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  color: #f5f5f5;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08);\n}\n.theme-dark[_nghost-%COMP%]   .visit-counter-reset[_ngcontent-%COMP%]:hover, .theme-dark   [_nghost-%COMP%]   .visit-counter-reset[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.theme-dark[_nghost-%COMP%]   .visit-counter-reset[_ngcontent-%COMP%]:active, .theme-dark   [_nghost-%COMP%]   .visit-counter-reset[_ngcontent-%COMP%]:active {\n  transform: scale(0.96);\n}\n\n.replay-intro-global[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  z-index: 12;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.45);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  backdrop-filter: blur(6px);\n  cursor: pointer;\n  transition: all 0.3s ease;\n  opacity: 0.7;\n}\n.replay-intro-global[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.65);\n  transform: translateY(-2px);\n}\n\n@keyframes _ngcontent-%COMP%_marquee {\n  0% {\n    transform: translate3d(0, 0, 0);\n  }\n  100% {\n    transform: translate3d(-50%, 0, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shine {\n  to {\n    background-position: 200% center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQixlQUFBO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFFQSw4QkFBQTtBQUZKOztBQUtBLG1CQUFBO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxlQUFBO0VBRUEsMENBQUE7RUFFQSxhQUFBO0VBRUEsMkJBQUE7QUFSSjs7QUFXQSxpQkFBQTtBQUNBO0VBQ0k7SUFDSSw0QkFBQTtFQVJOO0VBV0U7SUFDSSx3QkFBQTtFQVROO0FBQ0Y7QUFZQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLGdDQUFBO0VBVk47RUFhRTtJQUNJLFVBQUE7SUFDQSw2QkFBQTtFQVhOO0FBQ0Y7QUFjQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5Q0FBQTtFQUNBLG9CQUFBO0VBRUEscUVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDhDQUFBO0FBYko7QUFlSTtFQUNJLG9CQUFBO0FBYlI7O0FBaUJBLHlCQUFBO0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBZEo7O0FBaUJBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VB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QTtBQWhGWjs7QUFxRkE7RUFDSSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUNBLFdBQUE7RUFFQSwrQkFBQTtFQUNBLDJDQUFBO0VBRUEsMEJBQUE7RUFFQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBekZKO0FBMkZJO0VBQ0ksK0JBQUE7RUFDQSwyQkFBQTtBQXpGUjs7QUE2RkE7RUFDSTtJQUNJLCtCQUFBO0VBMUZOO0VBNkZFO0lBQ0ksa0NBQUE7RUEzRk47QUFDRjtBQThGQTtFQUNJO0lBQ0ksZ0NBQUE7RUE1Rk47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIMOwwp/ClMK0IE9GRkxJTkUgKi9cclxuLm9mZmxpbmUtYmFubmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiAjZDMyZjJmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG5cclxuICAgIHotaW5kZXg6IDk5OTk7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4zcyBlYXNlO1xyXG59XHJcblxyXG4vKiDDosKcwoUgT05MSU5FIFRPQVNUICovXHJcbi5vbmxpbmUtdG9hc3Qge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAxNnB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICMyZTdkMzI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG5cclxuICAgIGFuaW1hdGlvbjogZmFkZVVwIDAuNHMgZWFzZTtcclxufVxyXG5cclxuLyogw6LCnMKFIGFuaW1hdGlvbnMgKi9cclxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVVcCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIwcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXBwLXVpLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xyXG4gICAgLyogQ2hhbmdlZCBmcm9tIGZpeGVkIGhlaWdodCB0byBtaW4taGVpZ2h0ICovXHJcbiAgICB6LWluZGV4OiAxMjAwO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJnKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1MHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gICAgLyogVXNlIEZsZXhib3ggZm9yIGFsaWdubWVudCBpbnN0ZWFkIG9mIG1hbnVhbCBhYnNvbHV0ZSBwb3NpdGlvbmluZyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLyogQWxsb3dzIGF1dG8td3JhcHBpbmcgb24gc21hbGxlciB2aWV3cG9ydHMgKi9cclxuXHJcbiAgICAmPioge1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBCYXNlIHV0aWxpdHkgbGF5b3V0cyAqL1xyXG4udmlzaXQtY291bnRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxufVxyXG5cclxuLnZpc2l0LWNvdW50ZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9vdGVyLXRleHQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tZm9vdGVyLXRleHQpO1xyXG4gICAgZm9udC1zaXplOiAwLjgycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgLnZpc2l0LWNvdW50ZXJfX2xhYmVsIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIH1cclxuXHJcbiAgICAudmlzaXQtY291bnRlcl9fYXJyb3cge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLnZpc2l0LWFsZXJ0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMTZweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHotaW5kZXg6IDE0MDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LCAyNTAsIDIzNSwgMC45OCksIHJnYmEoMjU1LCAyNDUsIDIyNSwgMC45OCkpO1xyXG4gICAgY29sb3I6ICMzYjJmMDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYwLCA0MCwgMCwgMC4xMik7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoMTIsIDE4LCAyOCwgMC4xMik7XHJcblxyXG4gICAgLnZpc2l0LWFsZXJ0X19pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuXHJcbiAgICAudmlzaXQtYWxlcnRfX3RleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC52aXNpdC1hbGVydC5lcnJvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDIzNSwgMjM4LCAwLjk4KSwgcmdiYSgyNTUsIDIyNCwgMjI0LCAwLjk4KSk7XHJcbiAgICAgICAgY29sb3I6ICNiNzFjMWM7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxODMsIDI4LCAyOCwgMC4xMik7XHJcbiAgICB9XHJcblxyXG4gICAgLnZpc2l0LWFsZXJ0X19jbG9zZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiA0cHggNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi52aXNpdC1jb3VudGVyLXJlc2V0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNjAsIDQwLCAwLCAwLjEyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1mb290ZXItYmctcmdiKSwgMC41KTtcclxuICAgIGNvbG9yOiB2YXIoLS1mb290ZXItdGV4dCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGZvbnQtc2l6ZTogMC44MnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE2MG1zIGVhc2UsIGJhY2tncm91bmQgMTgwbXMgZWFzZSwgY29sb3IgMTgwbXMgZWFzZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgY3Vyc29yOiB3YWl0O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjI7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICAvKiBSZW1vdmVkIHBvc2l0aW9uOiBhYnNvbHV0ZSBhbmQgdHJhbnNmb3JtIHRyYW5zbGF0aW9ucyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIC8qIEtlZXBzIHRoZSBpbnB1dCBjbGVhbiBhbmQgYm91bmRlZCBvbiBkZXNrdG9wICovXHJcblxyXG4gICAgLnNlYXJjaC1pbnB1dC13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvb3Rlci10ZXh0KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWZvb3Rlci1iZy1yZ2IpLCAwLjQyKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZm9vdGVyLXRleHQpO1xyXG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDI1MG1zIGVhc2UsIGJvcmRlci1jb2xvciAyMDBtcyBlYXNlO1xyXG5cclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNmZmQ3MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtaGludCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogOTUlO1xyXG4gICAgICAgIC8qIEtlZXBzIGhpbnQgcGVyZmVjdGx5IGJvdW5kIHVuZGVyIHRoZSB3cmFwcGVyIHJvdyAqL1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDAuNzJyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWZvb3Rlci10ZXh0KTtcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1uZXh0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1mb290ZXItYmctcmdiKSwgMC42KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZm9vdGVyLXRleHQpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMjBtcyBlYXNlLCBiYWNrZ3JvdW5kIDEyMG1zIGVhc2U7XHJcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1uZXh0OmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aGVtZS10b2dnbGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1mb290ZXItYmctcmdiKSwgMC41KTtcclxuICAgIGNvbG9yOiB2YXIoLS1mb290ZXItdGV4dCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNjBtcyBlYXNlLCBiYWNrZ3JvdW5kIDE4MG1zIGVhc2UsIGNvbG9yIDE4MG1zIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgfVxyXG5cclxuICAgICYgLnN1bixcclxuICAgICYgLm1vb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcyBlYXNlLCB0cmFuc2Zvcm0gMjAwbXMgZWFzZTtcclxuICAgIH1cclxufVxyXG5cclxuLyogR2xvYmFsIENvbnRlbnQgT2Zmc2V0cyAqL1xyXG4ubWFpbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDg2cHg7XHJcbiAgICAvKiBTYWZlIHBhZGRpbmcgZm9yIERlc2t0b3AgdmlldyAqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vKiBDbGVhbiBSZXNwb25zaXZlIEJyZWFrcG9pbnQgUnVsZXMgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDY4MHB4KSB7XHJcbiAgICAuYXBwLXVpLWhlYWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB6LWluZGV4OiAxMjAwO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICByb3ctZ2FwOiAycHg7XHJcbiAgICAgICAgY29sdW1uLWdhcDogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDE0cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAudmlzaXQtY291bnRlci1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIC0tLS0gUm93IDE6IGxvZ28gPC0tLS0tLS0tPiB0aGVtZSAtLS0tICovXHJcbiAgICAuYXBwLXRpdGxlIHtcclxuICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgLyogcHVzaGVzIHRpdGxlIHRvIGZhciBsZWZ0ICAqL1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnRoZW1lLXRvZ2dsZSB7XHJcbiAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgLyogcHVzaGVzIHRoZW1lIHRvIGZhciByaWdodCAqL1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEludmlzaWJsZSBsaW5lLWJyZWFrZXIgw6LCgMKUIGZvcmNlcyBldmVyeXRoaW5nIGFmdGVyIHRoaXMgb250byBhIG5ldyByb3cgKi9cclxuICAgIC52aXNpdC1jb3VudGVyLWNvbnRhaW5lcjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIG9yZGVyOiAzO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIC0tLS0gUm93IDI6IHZpc2l0cyArIHJlc2V0LCBjZW50ZXJlZCBhcyBhIGdyb3VwIChvciBhbG9uZSwgaWYgb25seSBvbmUgZXhpc3RzKSAtLS0tICovXHJcbiAgICAudmlzaXQtY291bnRlciB7XHJcbiAgICAgICAgb3JkZXI6IDQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnZpc2l0LWNvdW50ZXItcmVzZXQge1xyXG4gICAgICAgIG9yZGVyOiA2O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIC0tLS0gUm93IDM6IHNlYXJjaCwgb3duIGxpbmUsIGNlbnRlcmVkIC0tLS0gKi9cclxuICAgIC5zZWFyY2gtY29udGFpbmVyIHtcclxuICAgICAgICBvcmRlcjogNztcclxuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG5cclxuICAgICAgICAuc2VhcmNoLWlucHV0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMDVweDtcclxuICAgICAgICAvKiB0d2VhayBpZiByb3cgaGVpZ2h0cyBkaWZmZXIgb24geW91ciBkZXZpY2UgKi9cclxuICAgIH1cclxuXHJcbiAgICAubWFpbi1jb250ZW50LmFkbWluLXZpZXcge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLWNvbnRlbnQuaG9tZS1wYWdlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBLZWVwIGZvb3RlciBhYm92ZSBjb250ZW50IGJ1dCBiZWxvdyB0b2dnbGUgKi9cclxuLmNyZWF0b3ItZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgYm90dG9tOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tZm9vdGVyLXRleHQpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZm9vdGVyLWJnKTtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDZweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoMTIsIDE4LCAyOCwgMC4wNik7XHJcbn1cclxuXHJcbi5tYXJxdWVlLWZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWZvb3Rlci1iZy1yZ2IpLCAwLjgpO1xyXG4gICAgLyogVXNlIGEgc2VtaS10cmFuc3BhcmVudCBiYWNrZ3JvdW5kICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG59XHJcblxyXG4ubWFycXVlZS1jb250ZW50IHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDAlO1xyXG4gICAgYW5pbWF0aW9uOiBtYXJxdWVlIDIwcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbWFycXVlZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBWYXJpYWJsZXNcclxuJG1hcnF1ZWUtc3BlZWQ6IDMwcztcclxuJGFjY2VudC1jb2xvcjogIzZjNWNlNztcclxuJHRleHQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmNmI2YiwgI2EyOWJmZSwgIzQ4ZGJmYiwgI2ZmNmI2Yik7XHJcblxyXG4uY3JlYXRvci1mb290ZXIge1xyXG4gICAgJi5tYXJxdWVlLWZvb3RlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDExMDA7XHJcblxyXG4gICAgICAgIC8vIEdsYXNzbW9ycGhpc21cclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpIHNhdHVyYXRlKDE2MCUpO1xyXG4gICAgICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpIHNhdHVyYXRlKDE2MCUpO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIC00cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG5cclxuICAgICAgICAubWFycXVlZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAuYXBwLWluZm8tYnRuIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwOCwgOTIsIDIzMSwgLjEyKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNmM1Y2U3O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMDgsIDkyLCAyMzEsIC4xOCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXJxdWVlLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbWFycXVlZSAkbWFycXVlZS1zcGVlZCBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgICAgbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCwgYmxhY2sgMTAlLCBibGFjayA5MCUsIHRyYW5zcGFyZW50KTtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgODBweDsgLy8gU3BhY2luZyBiZXR3ZWVuIHJlcGVhdGVkIHRleHRcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMmQzNDM2O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0ZXh0LWdyYWRpZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHNoaW5lIDRzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYXBwLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzJlN2QzMjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDhweCA0cHg7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xyXG5cclxuICAgICYuY2xpY2thYmxlIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg1O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBEYXJrIFRoZW1lIE92ZXJyaWRlc1xyXG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSB7XHJcbiAgICAuYXBwLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjogIzgxYzc4NDsgLy8gc29mdCBncmVlblxyXG4gICAgfVxyXG5cclxuICAgIC5jcmVhdG9yLWZvb3Rlci5tYXJxdWVlLWZvb3RlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAwLjgpO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcblxyXG4gICAgICAgIC5tYXJxdWVlLWNvbnRlbnQgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZGZlNmU5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudmlzaXQtY291bnRlciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICAgIH1cclxuXHJcbiAgICAudmlzaXQtY291bnRlci1yZXNldCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcclxuXHJcbiAgICAgICAgY29sb3I6ICNmNWY1ZjU7XHJcblxyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcblxyXG4gICAgICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgICAgIDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLFxyXG4gICAgICAgICAgICBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZXBsYXktaW50cm8tZ2xvYmFsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuXHJcbiAgICB6LWluZGV4OiAxMjtcclxuXHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuXHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1hcnF1ZWUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAwLCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGluZSB7XHJcbiAgICB0byB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSBjZW50ZXI7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('footerAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 0,
          transform: 'translateY(100%)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.animate)('800ms cubic-bezier(0.35, 0, 0.25, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
          opacity: 1,
          transform: 'translateY(0)'
        }))])])]
      }
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _components_family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/family-tree/family-tree.component */ 4129);
/* harmony import */ var _components_family_node_family_node_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/family-node/family-node.component */ 5345);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tree */ 8379);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _shared_pipes_split_description_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/pipes/split-description.pipe */ 2017);
/* harmony import */ var _components_welcome_modal_welcome_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/welcome-modal/welcome-modal.component */ 801);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ 2865);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _components_info_and_stats_info_and_stats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/info-and-stats/info-and-stats.component */ 8687);

















class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_12__.MatTreeModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.isDevMode)(),
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      })]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_family_tree_family_tree_component__WEBPACK_IMPORTED_MODULE_2__.FamilyTreeComponent, _components_family_node_family_node_component__WEBPACK_IMPORTED_MODULE_3__.FamilyNodeComponent, _shared_pipes_split_description_pipe__WEBPACK_IMPORTED_MODULE_4__.SplitDescriptionPipe, _components_welcome_modal_welcome_modal_component__WEBPACK_IMPORTED_MODULE_5__.WelcomeModalComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _components_info_and_stats_info_and_stats_component__WEBPACK_IMPORTED_MODULE_7__.InfoAndStatsComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_12__.MatTreeModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 5345:
/*!*****************************************************************!*\
  !*** ./src/app/components/family-node/family-node.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FamilyNodeComponent: () => (/* binding */ FamilyNodeComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/helper-functions */ 9348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_pipes_split_description_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pipes/split-description.pipe */ 2017);




const _c0 = ["nodeWrapper"];
const _c1 = ["nodeCard"];
function FamilyNodeComponent_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 15);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("compact", ctx_r2.member.description)("default-avatar", !ctx_r2.member.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r2.member.image || "/assets/images/default.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx_r2.member.name + " avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-image-src", ctx_r2.member.image || null);
  }
}
function FamilyNodeComponent_u_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.member.name);
  }
}
function FamilyNodeComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.member.name);
  }
}
function FamilyNodeComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.member.description);
  }
}
const _c2 = function (a0, a1) {
  return {
    $implicit: a0,
    fullText: a1,
    className: "kids-desp"
  };
};
function FamilyNodeComponent_div_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 7);
  }
  if (rf & 2) {
    const parts_r16 = ctx.ngIf;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c2, parts_r16, ctx_r15.member.kidDescription));
  }
}
function FamilyNodeComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FamilyNodeComponent_div_13_ng_container_1_Template, 1, 5, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "splitDescription");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r7.member.kidDescription, "kidDescription"));
  }
}
const _c3 = function (a0, a1) {
  return {
    $implicit: a0,
    fullText: a1,
    className: "spouse-desp"
  };
};
function FamilyNodeComponent_div_14_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 7);
  }
  if (rf & 2) {
    const parts_r21 = ctx.ngIf;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c3, parts_r21, ctx_r20.member.spouseDescription));
  }
}
function FamilyNodeComponent_div_14_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FamilyNodeComponent_div_14_div_8_ng_container_1_Template, 1, 5, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "splitDescription");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r17.member.spouseDescription, "spouseDescription"));
  }
}
function FamilyNodeComponent_div_14_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 27)(4, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function FamilyNodeComponent_div_14_div_10_small_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r22.member.spouseParents.mom);
  }
}
function FamilyNodeComponent_div_14_div_10_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r23.member.spouseParents.dad);
  }
}
function FamilyNodeComponent_div_14_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FamilyNodeComponent_div_14_div_10_small_1_Template, 2, 1, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FamilyNodeComponent_div_14_div_10_small_2_Template, 2, 1, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.member.spouseParents.mom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.member.spouseParents.dad);
  }
}
const _c4 = function (a0, a1) {
  return {
    birthDate: a0,
    deathDate: a1,
    prefix: "spouse"
  };
};
function FamilyNodeComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "& ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](7, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, FamilyNodeComponent_div_14_div_8_Template, 3, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, FamilyNodeComponent_div_14_div_9_Template, 5, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FamilyNodeComponent_div_14_div_10_Template, 3, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("today-birth", ctx_r8.isToday(ctx_r8.member.spouseDateOfBirth))("today-death", ctx_r8.isToday(ctx_r8.member.spouseDateOfDeath))("today-anniversary", ctx_r8.isToday(ctx_r8.member.dateOfAnniversary));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.member.spouse);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](12, _c4, ctx_r8.member.spouseDateOfBirth, ctx_r8.member.spouseDateOfDeath));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.member.spouseDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.member.spouseParents);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.member.spouseParents);
  }
}
const _c5 = function (a0, a1) {
  return {
    $implicit: a0,
    fullText: a1,
    className: "couple-desp"
  };
};
function FamilyNodeComponent_div_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 7);
  }
  if (rf & 2) {
    const parts_r25 = ctx.ngIf;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c5, parts_r25, ctx_r24.member.coupleDescription));
  }
}
function FamilyNodeComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FamilyNodeComponent_div_15_ng_container_1_Template, 1, 5, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "splitDescription");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r9.member.coupleDescription, "coupleDescription"));
  }
}
function FamilyNodeComponent_div_16_app_family_node_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-family-node", 35);
  }
  if (rf & 2) {
    const child_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("member", child_r27);
  }
}
function FamilyNodeComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FamilyNodeComponent_div_16_app_family_node_3_Template, 1, 1, "app-family-node", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r10.member.children);
  }
}
function FamilyNodeComponent_ng_template_17_small_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "b", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const parts_r28 = ctx_r34.$implicit;
    const className_r30 = ctx_r34.className;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", parts_r28[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", className_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](parts_r28[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", className_r30 !== "couple-desp" ? " \u2014" : "", " ", parts_r28[2], " ");
  }
}
function FamilyNodeComponent_ng_template_17_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fullText_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().fullText;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](fullText_r29);
  }
}
function FamilyNodeComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FamilyNodeComponent_ng_template_17_small_0_Template, 5, 5, "small", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FamilyNodeComponent_ng_template_17_ng_template_1_Template, 2, 1, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const parts_r28 = ctx.$implicit;
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (parts_r28 == null ? null : parts_r28.length) === 3)("ngIfElse", _r32);
  }
}
function FamilyNodeComponent_ng_template_19_div_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FamilyNodeComponent_ng_template_19_div_0_span_1_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r49);
      const prefix_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).prefix;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r47.togglePopup($event, prefix_r39 + "-birth"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \uD83C\uDF82 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FamilyNodeComponent_ng_template_19_div_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FamilyNodeComponent_ng_template_19_div_0_span_2_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52);
      const prefix_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).prefix;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r50.togglePopup($event, prefix_r39 + "-death"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \uD83D\uDD6F\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FamilyNodeComponent_ng_template_19_div_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FamilyNodeComponent_ng_template_19_div_0_span_3_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r55);
      const prefix_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).prefix;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r53.togglePopup($event, prefix_r39 + "-anniversary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \uD83D\uDC8D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FamilyNodeComponent_ng_template_19_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FamilyNodeComponent_ng_template_19_div_0_span_1_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FamilyNodeComponent_ng_template_19_div_0_span_2_Template, 2, 0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FamilyNodeComponent_ng_template_19_div_0_span_3_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const birthDate_r36 = ctx_r56.birthDate;
    const deathDate_r37 = ctx_r56.deathDate;
    const dateOfAnniversary_r38 = ctx_r56.dateOfAnniversary;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", birthDate_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", deathDate_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", dateOfAnniversary_r38);
  }
}
function FamilyNodeComponent_ng_template_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 49)(3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\uD83C\uDF82 Birthday");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const birthDate_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().birthDate;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r41.formatDateWithoutYear(birthDate_r36), " ");
  }
}
function FamilyNodeComponent_ng_template_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 52)(3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \uD83D\uDD6F\uFE0F Remembrance (\u092A\u0941\u0923\u094D\u092F\u0924\u093F\u0925\u093F) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const deathDate_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().deathDate;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r42.formatDateWithoutYear(deathDate_r37), " ");
  }
}
function FamilyNodeComponent_ng_template_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 53)(3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\uD83D\uDC8D Anniversary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const dateOfAnniversary_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().dateOfAnniversary;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r43.formatDateWithoutYear(dateOfAnniversary_r38), " ");
  }
}
function FamilyNodeComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, FamilyNodeComponent_ng_template_19_div_0_Template, 4, 3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FamilyNodeComponent_ng_template_19_div_1_Template, 7, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FamilyNodeComponent_ng_template_19_div_2_Template, 7, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FamilyNodeComponent_ng_template_19_div_3_Template, 7, 1, "div", 39);
  }
  if (rf & 2) {
    const birthDate_r36 = ctx.birthDate;
    const deathDate_r37 = ctx.deathDate;
    const dateOfAnniversary_r38 = ctx.dateOfAnniversary;
    const prefix_r39 = ctx.prefix;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", birthDate_r36 || deathDate_r37 || dateOfAnniversary_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.activePopup === prefix_r39 + "-birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.activePopup === prefix_r39 + "-death");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.activePopup === prefix_r39 + "-anniversary");
  }
}
const _c6 = function (a0, a1, a2) {
  return {
    birthDate: a0,
    deathDate: a1,
    dateOfAnniversary: a2,
    prefix: "member"
  };
};
class FamilyNodeComponent {
  constructor() {
    this.hovered = false;
    this.previewSrc = '';
    this.previewPosition = '';
    this.previewStyles = {};
    this.activePopup = null;
  }
  static {
    this.openedComponent = null;
  }
  ngOnInit() {
    this.previewSrc = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_0__.getImageSrc)(this.member?.image);
    if (this.previewSrc) {
      const img = new Image();
      img.src = this.previewSrc;
    }
  }
  togglePopup(event, type) {
    event.stopPropagation();
    // close popup in previously opened node
    if (FamilyNodeComponent.openedComponent && FamilyNodeComponent.openedComponent !== this) {
      FamilyNodeComponent.openedComponent.activePopup = null;
    }
    if (this.activePopup === type) {
      this.activePopup = null;
      if (FamilyNodeComponent.openedComponent === this) {
        FamilyNodeComponent.openedComponent = null;
      }
    } else {
      this.activePopup = type;
      FamilyNodeComponent.openedComponent = this;
    }
  }
  closePopup() {
    this.activePopup = null;
    if (FamilyNodeComponent.openedComponent === this) {
      FamilyNodeComponent.openedComponent = null;
    }
  }
  formatDateWithoutYear(dateString) {
    if (!dateString) {
      return '';
    }
    const date = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_0__.parseDate)(dateString);
    if (isNaN(date.getTime())) {
      return dateString;
    }
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long'
    });
  }
  isToday(dateStr) {
    if (!dateStr) return false;
    if (isNaN(Date.parse(dateStr))) return false;
    const today = new Date();
    const d = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_0__.parseDate)(dateStr);
    return d.getDate() === today.getDate() && d.getMonth() === today.getMonth();
  }
  showPreview() {
    // compute where to place the preview: default above (''), or 'left'/'right'
    try {
      const wrapperEl = this.nodeWrapper?.nativeElement;
      const cardEl = this.nodeCard?.nativeElement;
      if (wrapperEl && cardEl && typeof window !== 'undefined') {
        const wrapperRect = wrapperEl.getBoundingClientRect();
        const rect = cardEl.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const previewMaxW = Math.min(520, vw - 40);
        const previewMaxH = Math.min(520, vh - 40);
        const spaceAbove = rect.top;
        // default placement above
        let position = '';
        if (spaceAbove < previewMaxH + 20) {
          // not enough space above -> prefer right unless not enough horizontal space
          if (rect.right + previewMaxW + 12 > vw) {
            position = 'left';
          } else {
            position = 'right';
          }
        }
        this.previewPosition = position;
        // Compute inline styles relative to wrapper so preview is visually attached to node
        const styles = {
          position: 'absolute'
        };
        if (position === '') {
          // above: center horizontally relative to node-card
          const desiredWidth = previewMaxW;
          let left = rect.left - wrapperRect.left + rect.width / 2 - desiredWidth / 2;
          // clamp
          left = Math.max(10, Math.min(left, wrapperRect.width - desiredWidth - 10));
          const top = rect.top - wrapperRect.top - previewMaxH - 12;
          styles.left = `${left}px`;
          styles.top = `${Math.max(8, top)}px`;
          styles.width = `${desiredWidth}px`;
          styles.transform = 'none';
        } else if (position === 'right') {
          // place to right, vertically centered to node-card
          const desiredWidth = previewMaxW;
          const left = rect.right - wrapperRect.left + 12;
          const topCenter = rect.top - wrapperRect.top + rect.height / 2;
          styles.left = `${Math.min(left, wrapperRect.width - 10)}px`;
          styles.top = `${topCenter}px`;
          styles.transform = 'translateY(-50%)';
          styles.width = `${desiredWidth}px`;
        } else {
          // left
          const desiredWidth = previewMaxW;
          let left = rect.left - wrapperRect.left - desiredWidth - 12;
          left = Math.max(10, left);
          const topCenter = rect.top - wrapperRect.top + rect.height / 2;
          styles.left = `${left}px`;
          styles.top = `${topCenter}px`;
          styles.transform = 'translateY(-50%)';
          styles.width = `${desiredWidth}px`;
        }
        this.previewStyles = styles;
      }
    } catch (e) {
      this.previewPosition = '';
      this.previewStyles = {};
    }
    this.hovered = true;
  }
  hidePreview() {
    this.hovered = false;
  }
  hasImage() {
    return !!(this.member?.image && this.member.image !== 'no need');
  }
  static {
    this.ɵfac = function FamilyNodeComponent_Factory(t) {
      return new (t || FamilyNodeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FamilyNodeComponent,
      selectors: [["app-family-node"]],
      viewQuery: function FamilyNodeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nodeWrapper = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.nodeCard = _t.first);
        }
      },
      hostBindings: function FamilyNodeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FamilyNodeComponent_click_HostBindingHandler() {
            return ctx.closePopup();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        member: "member"
      },
      decls: 21,
      vars: 23,
      consts: [[1, "node-wrapper"], ["nodeWrapper", ""], ["tabindex", "0", 1, "node-card", 3, "mouseenter", "mouseleave", "focus", "blur"], ["nodeCard", ""], ["class", "node-image", 3, "src", "alt", "compact", "default-avatar", 4, "ngIf"], [1, "node-line"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["plainName", ""], ["class", "node-description", 4, "ngIf"], ["style", "margin-top: 4px;", 4, "ngIf"], ["class", "spouse-box", 3, "today-birth", "today-death", "today-anniversary", 4, "ngIf"], ["class", "children-line", 4, "ngIf"], ["splitText", ""], ["birthnDeathnAnniversary", ""], [1, "node-image", 3, "src", "alt"], [1, "node-description"], [2, "margin-top", "4px"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [1, "spouse-box"], [1, "spouse-content"], [1, "spouse-line"], ["class", "spouse-arrow", "aria-hidden", "true", "title", "Their kid", 4, "ngIf"], ["class", "spouse-parents", 4, "ngIf"], ["aria-hidden", "true", "title", "Their kid", 1, "spouse-arrow"], ["aria-hidden", "true", 1, "spouse-arrow-circle"], ["viewBox", "0 0 24 24", "width", "20", "height", "20", "fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "focusable", "false", "aria-hidden", "true", 1, "up-arrow"], ["d", "M12 19V7", "stroke-width", "2.2"], ["d", "M5 10l7-7 7 7", "stroke-width", "2.2"], [1, "spouse-parents"], [4, "ngIf"], [1, "children-line"], [1, "line"], [1, "children"], [3, "member", 4, "ngFor", "ngForOf"], [3, "member"], ["plain", ""], [3, "ngClass"], ["class", "date-links", 4, "ngIf"], ["class", "date-popup", 4, "ngIf"], [1, "date-links"], ["class", "date-icon", 3, "click", 4, "ngIf"], ["class", "date-icon death", 3, "click", 4, "ngIf"], ["class", "date-icon anniversary", 3, "click", 4, "ngIf"], [1, "date-icon", 3, "click"], [1, "date-icon", "death", 3, "click"], [1, "date-icon", "anniversary", 3, "click"], [1, "date-popup"], [1, "popup-arrow"], [1, "popup-content"], [1, "popup-title"], [1, "popup-date"], [1, "popup-content", "death"], [1, "popup-content", "anniversary"]],
      template: function FamilyNodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function FamilyNodeComponent_Template_div_mouseenter_2_listener() {
            return ctx.hasImage() && ctx.showPreview();
          })("mouseleave", function FamilyNodeComponent_Template_div_mouseleave_2_listener() {
            return ctx.hasImage() && ctx.hidePreview();
          })("focus", function FamilyNodeComponent_Template_div_focus_2_listener() {
            return ctx.hasImage() && ctx.showPreview();
          })("blur", function FamilyNodeComponent_Template_div_blur_2_listener() {
            return ctx.hasImage() && ctx.hidePreview();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FamilyNodeComponent_img_4_Template, 1, 7, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, FamilyNodeComponent_u_7_Template, 2, 1, "u", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](9, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FamilyNodeComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, FamilyNodeComponent_div_12_Template, 3, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, FamilyNodeComponent_div_13_Template, 3, 4, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, FamilyNodeComponent_div_14_Template, 11, 15, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, FamilyNodeComponent_div_15_Template, 3, 4, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, FamilyNodeComponent_div_16_Template, 4, 1, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, FamilyNodeComponent_ng_template_17_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, FamilyNodeComponent_ng_template_19_Template, 4, 4, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
          const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("has-description", ctx.member.description)("today-birth", ctx.isToday(ctx.member.dateOfBirth))("today-death", ctx.isToday(ctx.member.dateOfDeath))("today-anniversary", ctx.isToday(ctx.member.dateOfAnniversary));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-name", ctx.member.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.member.image !== "no need");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.member.description)("ngIfElse", _r4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r13)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](19, _c6, ctx.member.dateOfBirth, ctx.member.dateOfDeath, ctx.member.dateOfAnniversary));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.member.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.member.kidDescription);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.member.spouse);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.member.coupleDescription);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.member.children == null ? null : ctx.member.children.length);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, FamilyNodeComponent, _shared_pipes_split_description_pipe__WEBPACK_IMPORTED_MODULE_1__.SplitDescriptionPipe],
      styles: ["@charset \"UTF-8\";\n.node-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n  margin-bottom: 40px;\n}\n\n.node-card[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  padding: 10px 20px;\n  border: 2px solid #90caf9;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  font-family: var(--font-sans);\n  font-weight: 600;\n  text-align: center;\n  min-width: 180px;\n  max-width: 330px;\n  transition: transform 0.2s ease;\n  cursor: pointer;\n  \n\n  \n\n}\n.node-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  background-color: #bbdefb;\n}\n.node-card.has-description[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 150px;\n}\n.node-card[_ngcontent-%COMP%]   u[_ngcontent-%COMP%] {\n  text-decoration-line: underline;\n  text-decoration-thickness: 2px;\n  text-decoration-color: currentColor;\n  text-underline-offset: 3px;\n}\n.node-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .node-card[_ngcontent-%COMP%]   u[_ngcontent-%COMP%] {\n  font-family: var(--font-sans);\n  font-weight: 700;\n  color: #07203a;\n}\n\n.node-image[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 120px;\n  border-radius: 6px;\n  \n\n}\n.node-image.compact[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n.node-image.default-avatar[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}\n\n.node-description[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n.node-description[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #0d47a1;\n  font-weight: 600;\n  opacity: 0.95;\n}\n\n.kids-desp[_ngcontent-%COMP%], .couple-desp[_ngcontent-%COMP%], .spouse-desp[_ngcontent-%COMP%] {\n  font-size: 14px;\n  -webkit-text-decoration: underline 2px;\n          text-decoration: underline 2px;\n  text-underline-offset: 3px;\n}\n\n.children-line[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.children-line[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 20px;\n  background: #64b5f6;\n}\n.children-line[_ngcontent-%COMP%]   .children[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 30px;\n  margin-top: 20px;\n}\n\n.image-preview[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 60;\n  pointer-events: none;\n  \n\n  bottom: calc(100% + 12px);\n  left: 50%;\n  transform: translateX(-50%);\n  \n\n  \n\n  \n\n}\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  \n\n  max-width: min(520px, 100vw - 40px);\n  max-height: min(520px, 100vh - 40px);\n  width: auto;\n  height: auto;\n  border-radius: 8px;\n  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);\n  display: block;\n  transition: opacity 0.12s ease, transform 0.12s ease;\n  will-change: transform, opacity;\n}\n.image-preview.left[_ngcontent-%COMP%] {\n  top: 50%;\n  bottom: auto;\n  left: auto;\n  right: calc(100% + 12px);\n  transform: translateY(-50%);\n}\n.image-preview.right[_ngcontent-%COMP%] {\n  top: 50%;\n  bottom: auto;\n  left: calc(100% + 12px);\n  transform: translateY(-50%);\n}\n@media (max-width: 600px) {\n  .image-preview[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 600px) {\n  .image-preview[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.spouse-arrow[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 4px;\n}\n\n.spouse-arrow-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #0d47a1;\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n}\n.spouse-arrow-circle[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 30px rgba(13, 71, 161, 0.18);\n}\n\n.up-arrow[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  display: block;\n  stroke: currentColor;\n}\n\n.spouse-parents[_ngcontent-%COMP%] {\n  color: #0d47a1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0;\n  \n\n  \n\n  border-bottom: 2px solid #1976d2;\n  padding-bottom: 6px;\n  \n\n}\n.spouse-parents[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1;\n  text-decoration: none;\n}\n.spouse-parents[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]    + small[_ngcontent-%COMP%]::before {\n  content: \"+\";\n  display: inline-block;\n  margin: 0 8px;\n  color: #1976d2;\n  font-weight: 600;\n  line-height: 1;\n}\n\n\n\n.spouse-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  background: #e8f4ff;\n  border: 2px solid #1976d2;\n  border-radius: 8px;\n  padding: 8px;\n  margin-top: 8px;\n  min-width: 170px;\n  text-align: center;\n}\n\n.spouse-order[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  top: 8px;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #1976d2;\n  color: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 12px;\n  box-shadow: 0 2px 6px rgba(25, 118, 210, 0.18);\n}\n\n.spouse-content[_ngcontent-%COMP%]   .spouse-line[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #07203a;\n}\n.spouse-content[_ngcontent-%COMP%]   .spouse-line[_ngcontent-%COMP%]   u[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.spouse-desc[_ngcontent-%COMP%] {\n  display: block;\n  color: #0d47a1;\n  font-size: 12px;\n  margin-top: 4px;\n}\n\n.node-card.today-birth[_ngcontent-%COMP%], .spouse-box.today-birth[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fff8e1, #ffe0b2);\n  border: 2px solid #ff9800;\n  box-shadow: 0 6px 16px rgba(255, 152, 0, 0.35), 0 0 0 3px rgba(255, 152, 0, 0.15);\n  animation: _ngcontent-%COMP%_glowBirth 1.5s ease-in-out infinite alternate;\n}\n\n.node-card.today-anniversary[_ngcontent-%COMP%], .spouse-box.today-anniversary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fff1f8, #fce4ec);\n  border: 2px solid #e91e63;\n  box-shadow: 0 6px 14px rgba(233, 30, 99, 0.25), 0 0 0 3px rgba(233, 30, 99, 0.1);\n  animation: _ngcontent-%COMP%_glowAnniversary 1.8s ease-in-out infinite alternate;\n}\n\n@keyframes _ngcontent-%COMP%_glowAnniversary {\n  from {\n    box-shadow: 0 4px 10px rgba(233, 30, 99, 0.18), 0 0 0 2px rgba(233, 30, 99, 0.08);\n  }\n  to {\n    box-shadow: 0 10px 22px rgba(233, 30, 99, 0.35), 0 0 0 5px rgba(233, 30, 99, 0.15);\n  }\n}\n@keyframes _ngcontent-%COMP%_glowBirth {\n  from {\n    box-shadow: 0 6px 12px rgba(255, 152, 0, 0.25), 0 0 0 2px rgba(255, 152, 0, 0.1);\n  }\n  to {\n    box-shadow: 0 10px 22px rgba(255, 152, 0, 0.45), 0 0 0 5px rgba(255, 152, 0, 0.2);\n  }\n}\n.node-card.today-death[_ngcontent-%COMP%], .spouse-box.today-death[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f3e5f5, #e1bee7);\n  border: 2px solid #8e24aa;\n  box-shadow: 0 6px 14px rgba(142, 36, 170, 0.25), 0 0 0 3px rgba(142, 36, 170, 0.1);\n  animation: _ngcontent-%COMP%_glowDeath 1.8s ease-in-out infinite alternate;\n}\n\n@keyframes _ngcontent-%COMP%_glowDeath {\n  from {\n    box-shadow: 0 4px 10px rgba(142, 36, 170, 0.2), 0 0 0 2px rgba(142, 36, 170, 0.08);\n  }\n  to {\n    box-shadow: 0 8px 18px rgba(142, 36, 170, 0.35), 0 0 0 4px rgba(142, 36, 170, 0.15);\n  }\n}\n\n\n.node-card.today-birth.today-death[_ngcontent-%COMP%], .spouse-box.today-birth.today-death[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fff8e1 0%, #ffe0b2 50%, #e1bee7 100%);\n  border: 2px solid transparent;\n  background-clip: padding-box;\n  position: relative;\n  box-shadow: 0 6px 18px rgba(255, 152, 0, 0.25), 0 8px 18px rgba(142, 36, 170, 0.25);\n  animation: _ngcontent-%COMP%_dualGlow 2s ease-in-out infinite alternate;\n}\n\n@keyframes _ngcontent-%COMP%_dualGlow {\n  from {\n    box-shadow: 0 5px 12px rgba(255, 152, 0, 0.2), 0 6px 12px rgba(142, 36, 170, 0.2);\n  }\n  to {\n    box-shadow: 0 10px 20px rgba(255, 152, 0, 0.35), 0 10px 20px rgba(142, 36, 170, 0.35);\n  }\n}\n.node-card.today-birth[_ngcontent-%COMP%]   .date-icon[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.node-card.today-death[_ngcontent-%COMP%]   .date-icon.death[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  opacity: 1;\n}\n\n.node-card.today-anniversary[_ngcontent-%COMP%]   .date-icon.anniversary[_ngcontent-%COMP%], .spouse-box.today-anniversary[_ngcontent-%COMP%]   .date-icon.anniversary[_ngcontent-%COMP%] {\n  transform: scale(1.15);\n  filter: drop-shadow(0 0 8px rgba(233, 30, 99, 0.4));\n}\n\n.node-card.today-anniversary[_ngcontent-%COMP%]   .date-icon.anniversary[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  opacity: 1;\n}\n\n.node-card.today-birth[_ngcontent-%COMP%], .node-card.today-death[_ngcontent-%COMP%], .node-card.today-anniversary[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_softPulse 1.2s ease-in-out 2;\n  \n\n}\n\n@keyframes _ngcontent-%COMP%_softPulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.04);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.date-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 70px;\n  margin-top: 4px;\n}\n.date-links[_ngcontent-%COMP%]:first-child {\n  text-align: right;\n}\n.date-links[_ngcontent-%COMP%]:last-child {\n  text-align: left;\n}\n.date-links[_ngcontent-%COMP%]:only-child {\n  text-align: center !important;\n  width: 100%;\n}\n\n.date-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 20px;\n  transition: transform 0.15s ease;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.date-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15);\n}\n\n.date-icon.death[_ngcontent-%COMP%], .date-icon.anniversary[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n\n.popup-date[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n\n.date-popup[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 10px;\n  display: flex;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.2s ease;\n}\n\n.popup-content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #90caf9;\n  border-radius: 12px;\n  padding: 10px 14px;\n  min-width: 110px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  color: #0d47a1;\n  font-size: 13px;\n  font-weight: 600;\n  text-align: center;\n  position: relative;\n}\n\n\n\n.popup-content[_ngcontent-%COMP%]:not(.death):not(.anniversary) {\n  border-color: #90caf9;\n  color: #0d47a1;\n}\n.popup-content[_ngcontent-%COMP%]:not(.death):not(.anniversary)::before {\n  content: \"\";\n  position: absolute;\n  top: -9px;\n  left: 50%;\n  width: 16px;\n  height: 16px;\n  background: #ffffff;\n  border-top: 1px solid #90caf9;\n  border-left: 1px solid #90caf9;\n  transform: translateX(-50%) rotate(45deg);\n}\n\n\n\n.popup-content.death[_ngcontent-%COMP%] {\n  border-color: #ce93d8;\n  color: #6a1b9a;\n}\n.popup-content.death[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -9px;\n  left: 50%;\n  width: 16px;\n  height: 16px;\n  background: #ffffff;\n  border-top: 1px solid #ce93d8;\n  border-left: 1px solid #ce93d8;\n  transform: translateX(-50%) rotate(45deg);\n}\n\n\n\n.popup-content.anniversary[_ngcontent-%COMP%] {\n  border-color: #f48fb1;\n  color: #c2185b;\n}\n.popup-content.anniversary[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -9px;\n  left: 50%;\n  width: 16px;\n  height: 16px;\n  background: #ffffff;\n  border-top: 1px solid #f48fb1;\n  border-left: 1px solid #f48fb1;\n  transform: translateX(-50%) rotate(45deg);\n}\n\n.popup-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mYW1pbHktbm9kZS9mYW1pbHktbm9kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBT0EsaURBQUE7RUFNQSx5REFBQTtBQVZKO0FBREk7RUFDSSxzQkFBQTtFQUNBLHlCQUFBO0FBR1I7QUFDSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ1I7QUFHSTtFQUNJLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLDBCQUFBO0FBRFI7QUFJSTtFQUVJLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSFI7O0FBUUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBUUEsaUVBQUE7QUFaSjtBQU1JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUpSO0FBUUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTlI7O0FBVUE7RUFDSSxlQUFBO0FBUEo7QUFTSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQVBSOztBQVdBOzs7RUFHSSxlQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDBCQUFBO0FBUko7O0FBV0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBUko7QUFVSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQVdJO0VBQ0ksYUFB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LDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBQTFGUjs7QUE4RkEsb0JBQUE7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQTNGSjtBQTZGSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBQTNGUjs7QUErRkEsbUJBQUE7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQTVGSjtBQThGSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtBQTVGUjs7QUFnR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBN0ZKOztBQWlHQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLDJCQUFBO0VBOUZOO0VBaUdFO0lBQ0ksVUFBQTtJQUNBLHdCQUFBO0VBL0ZOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5vZGUtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4ubm9kZS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6ICNlM2YyZmQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTBjYWY5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Fucyk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWluLXdpZHRoOiAxODBweDtcclxuICAgIG1heC13aWR0aDogMzMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JiZGVmYjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDb21wYWN0IGxheW91dCB3aGVuIGEgZGVzY3JpcHRpb24gaXMgcHJlc2VudCAqL1xyXG4gICAgJi5oYXMtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE1ha2UgdGhlIDx1PiB1bmRlcmxpbmUgdGhpY2tlciAoMnB4KSBmb3Igc3BvdXNlIG5hbWUgKi9cclxuICAgICYgdSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAycHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICAgICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJiBzdHJvbmcsXHJcbiAgICAmIHUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICMwNzIwM2E7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubm9kZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG5cclxuICAgICYuY29tcGFjdCB7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBTbWFsbCBjaXJjdWxhciBhdmF0YXIgdXNlZCB3aGVuIG1lbWJlci5pbWFnZSBpcyBub3QgcHJvdmlkZWQgKi9cclxuICAgICYuZGVmYXVsdC1hdmF0YXIge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ub2RlLWRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuXHJcbiAgICBzbWFsbCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMGQ0N2ExO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgb3BhY2l0eTogMC45NTtcclxuICAgIH1cclxufVxyXG5cclxuLmtpZHMtZGVzcCxcclxuLmNvdXBsZS1kZXNwLFxyXG4uc3BvdXNlLWRlc3Age1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMnB4O1xyXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAzcHg7XHJcbn1cclxuXHJcbi5jaGlsZHJlbi1saW5lIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmxpbmUge1xyXG4gICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM2NGI1ZjY7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoaWxkcmVuIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBnYXA6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmltYWdlLXByZXZpZXcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogNjA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHJcbiAgICAvKiBEZWZhdWx0OiBwbGFjZSBhYm92ZSB0aGUgbm9kZSBhbmQgY2VudGVyZWQgKi9cclxuICAgIGJvdHRvbTogY2FsYygxMDAlICsgMTJweCk7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICAvKiBNYWtlIGltYWdlIHJlc3BvbnNpdmUgdG8gdmlld3BvcnQgc28gaXQgbmV2ZXIgb3ZlcmZsb3dzICovXHJcbiAgICAgICAgbWF4LXdpZHRoOiBtaW4oNTIwcHgsIGNhbGMoMTAwdncgLSA0MHB4KSk7XHJcbiAgICAgICAgbWF4LWhlaWdodDogbWluKDUyMHB4LCBjYWxjKDEwMHZoIC0gNDBweCkpO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xMnMgZWFzZSwgdHJhbnNmb3JtIDAuMTJzIGVhc2U7XHJcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBNb2RpZmllcjogc2hvdyBwcmV2aWV3IHRvIHRoZSBsZWZ0IG9mIHRoZSBub2RlICovXHJcbiAgICAmLmxlZnQge1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGJvdHRvbTogYXV0bztcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgIHJpZ2h0OiBjYWxjKDEwMCUgKyAxMnB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogTW9kaWZpZXI6IHNob3cgcHJldmlldyB0byB0aGUgcmlnaHQgb2YgdGhlIG5vZGUgKi9cclxuICAgICYucmlnaHQge1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGJvdHRvbTogYXV0bztcclxuICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgKyAxMnB4KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogU21hbGwgc2NyZWVuczogaGlkZSBwcmV2aWV3cyB0byBhdm9pZCBsYXlvdXQgaXNzdWVzICovXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5pbWFnZS1wcmV2aWV3IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3BvdXNlLWFycm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLnNwb3VzZS1hcnJvdy1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwZDQ3YTE7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xOHMgZWFzZSwgYm94LXNoYWRvdyAwLjE4cyBlYXNlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEycHggMzBweCByZ2JhKDEzLCA3MSwgMTYxLCAwLjE4KTtcclxuICAgIH1cclxufVxyXG5cclxuLnVwLWFycm93IHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuLnNwb3VzZS1wYXJlbnRzIHtcclxuICAgIGNvbG9yOiAjMGQ0N2ExO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMDtcclxuICAgIC8qIHNwYWNpbmcgaGFuZGxlZCBieSBwc2V1ZG8tZWxlbWVudCAqL1xyXG5cclxuICAgIC8qIFVzZSBhIGJvcmRlci1ib3R0b20gc28gdGhlIHdob2xlIGJsb2NrIGlzIHVuZGVybGluZWQgYXMgb25lIGxpbmUgKi9cclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMTk3NmQyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuXHJcbiAgICBzbWFsbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBJbnNlcnQgYSAnKycgYmVmb3JlIHRoZSBzZWNvbmQgc21hbGwgZWxlbWVudCB3aXRob3V0IGFkZGluZyBleHRyYSBET00gaGVpZ2h0ICovXHJcbiAgICBzbWFsbCtzbWFsbDo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnKyc7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxufVxyXG5cclxuLyogQm94ZWQgc3BvdXNlIGNvbnRhaW5lciB3aXRoIG9yZGVyIGJhZGdlICovXHJcbi5zcG91c2UtYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICNlOGY0ZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTk3NmQyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNwb3VzZS1vcmRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzE5NzZkMjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMjUsIDExOCwgMjEwLCAwLjE4KTtcclxufVxyXG5cclxuLnNwb3VzZS1jb250ZW50IHtcclxuICAgIC5zcG91c2UtbGluZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogIzA3MjAzYTtcclxuXHJcbiAgICAgICAgJiB1IHtcclxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc3BvdXNlLWRlc2Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzBkNDdhMTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLm5vZGUtY2FyZC50b2RheS1iaXJ0aCxcclxuLnNwb3VzZS1ib3gudG9kYXktYmlydGgge1xyXG5cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmY4ZTEsICNmZmUwYjIpO1xyXG5cclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZjk4MDA7XHJcblxyXG4gICAgYm94LXNoYWRvdzpcclxuICAgICAgICAwIDZweCAxNnB4IHJnYmEoMjU1LCAxNTIsIDAsIDAuMzUpLFxyXG4gICAgICAgIDAgMCAwIDNweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjE1KTtcclxuXHJcbiAgICBhbmltYXRpb246IGdsb3dCaXJ0aCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuXHJcbi5ub2RlLWNhcmQudG9kYXktYW5uaXZlcnNhcnksXHJcbi5zcG91c2UtYm94LnRvZGF5LWFubml2ZXJzYXJ5IHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLFxyXG4gICAgICAgICAgICAjZmZmMWY4LFxyXG4gICAgICAgICAgICAjZmNlNGVjKTtcclxuXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTkxZTYzO1xyXG5cclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCA2cHggMTRweCByZ2JhKDIzMywgMzAsIDk5LCAwLjI1KSxcclxuICAgICAgICAwIDAgMCAzcHggcmdiYSgyMzMsIDMwLCA5OSwgMC4xMCk7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBnbG93QW5uaXZlcnNhcnkgMS44cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZ2xvd0Fubml2ZXJzYXJ5IHtcclxuXHJcbiAgICBmcm9tIHtcclxuICAgICAgICBib3gtc2hhZG93OlxyXG4gICAgICAgICAgICAwIDRweCAxMHB4IHJnYmEoMjMzLCAzMCwgOTksIDAuMTgpLFxyXG4gICAgICAgICAgICAwIDAgMCAycHggcmdiYSgyMzMsIDMwLCA5OSwgMC4wOCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgICAgIDAgMTBweCAyMnB4IHJnYmEoMjMzLCAzMCwgOTksIDAuMzUpLFxyXG4gICAgICAgICAgICAwIDAgMCA1cHggcmdiYSgyMzMsIDMwLCA5OSwgMC4xNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZ2xvd0JpcnRoIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgICAgIDAgNnB4IDEycHggcmdiYSgyNTUsIDE1MiwgMCwgMC4yNSksXHJcbiAgICAgICAgICAgIDAgMCAwIDJweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBib3gtc2hhZG93OlxyXG4gICAgICAgICAgICAwIDEwcHggMjJweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjQ1KSxcclxuICAgICAgICAgICAgMCAwIDAgNXB4IHJnYmEoMjU1LCAxNTIsIDAsIDAuMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ub2RlLWNhcmQudG9kYXktZGVhdGgsXHJcbi5zcG91c2UtYm94LnRvZGF5LWRlYXRoIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjNlNWY1LCAjZTFiZWU3KTtcclxuXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOGUyNGFhO1xyXG5cclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCA2cHggMTRweCByZ2JhKDE0MiwgMzYsIDE3MCwgMC4yNSksXHJcbiAgICAgICAgMCAwIDAgM3B4IHJnYmEoMTQyLCAzNiwgMTcwLCAwLjEpO1xyXG5cclxuICAgIGFuaW1hdGlvbjogZ2xvd0RlYXRoIDEuOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdsb3dEZWF0aCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBib3gtc2hhZG93OlxyXG4gICAgICAgICAgICAwIDRweCAxMHB4IHJnYmEoMTQyLCAzNiwgMTcwLCAwLjIpLFxyXG4gICAgICAgICAgICAwIDAgMCAycHggcmdiYSgxNDIsIDM2LCAxNzAsIDAuMDgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBib3gtc2hhZG93OlxyXG4gICAgICAgICAgICAwIDhweCAxOHB4IHJnYmEoMTQyLCAzNiwgMTcwLCAwLjM1KSxcclxuICAgICAgICAgICAgMCAwIDAgNHB4IHJnYmEoMTQyLCAzNiwgMTcwLCAwLjE1KTtcclxuICAgIH1cclxufVxyXG5cclxuLyogw7DCn8KOwq8gRHVhbCBoaWdobGlnaHQgKEJPVEggZXZlbnRzIHByZXNlbnQpICovXHJcbi5ub2RlLWNhcmQudG9kYXktYmlydGgudG9kYXktZGVhdGgsXHJcbi5zcG91c2UtYm94LnRvZGF5LWJpcnRoLnRvZGF5LWRlYXRoIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLFxyXG4gICAgICAgICAgICAjZmZmOGUxIDAlLFxyXG4gICAgICAgICAgICAvKiB3YXJtICovXHJcbiAgICAgICAgICAgICNmZmUwYjIgNTAlLFxyXG4gICAgICAgICAgICAjZTFiZWU3IDEwMCVcclxuICAgICAgICAgICAgLyogY2FsbSBwdXJwbGUgKi9cclxuICAgICAgICApO1xyXG5cclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCA2cHggMThweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjI1KSxcclxuICAgICAgICAwIDhweCAxOHB4IHJnYmEoMTQyLCAzNiwgMTcwLCAwLjI1KTtcclxuXHJcbiAgICBhbmltYXRpb246IGR1YWxHbG93IDJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBkdWFsR2xvdyB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBib3gtc2hhZG93OlxyXG4gICAgICAgICAgICAwIDVweCAxMnB4IHJnYmEoMjU1LCAxNTIsIDAsIDAuMiksXHJcbiAgICAgICAgICAgIDAgNnB4IDEycHggcmdiYSgxNDIsIDM2LCAxNzAsIDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgICAgIDAgMTBweCAyMHB4IHJnYmEoMjU1LCAxNTIsIDAsIDAuMzUpLFxyXG4gICAgICAgICAgICAwIDEwcHggMjBweCByZ2JhKDE0MiwgMzYsIDE3MCwgMC4zNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubm9kZS1jYXJkLnRvZGF5LWJpcnRoIC5kYXRlLWljb24ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcblxyXG4ubm9kZS1jYXJkLnRvZGF5LWRlYXRoIC5kYXRlLWljb24uZGVhdGgge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm5vZGUtY2FyZC50b2RheS1hbm5pdmVyc2FyeSAuZGF0ZS1pY29uLmFubml2ZXJzYXJ5LFxyXG4uc3BvdXNlLWJveC50b2RheS1hbm5pdmVyc2FyeSAuZGF0ZS1pY29uLmFubml2ZXJzYXJ5IHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA4cHggcmdiYSgyMzMsIDMwLCA5OSwgMC40KSk7XHJcbn1cclxuXHJcblxyXG4ubm9kZS1jYXJkLnRvZGF5LWFubml2ZXJzYXJ5IC5kYXRlLWljb24uYW5uaXZlcnNhcnkge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLm5vZGUtY2FyZC50b2RheS1iaXJ0aCxcclxuLm5vZGUtY2FyZC50b2RheS1kZWF0aCxcclxuLm5vZGUtY2FyZC50b2RheS1hbm5pdmVyc2FyeSB7XHJcbiAgICBhbmltYXRpb246IHNvZnRQdWxzZSAxLjJzIGVhc2UtaW4tb3V0IDI7XHJcbiAgICAvKiDDosKcwoUgb25seSAyIHRpbWVzICovXHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc29mdFB1bHNlIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGF0ZS1saW5rcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA3MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAmOm9ubHktY2hpbGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGF0ZS1pY29uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMTVzIGVhc2U7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGF0ZS1pY29uLmRlYXRoLFxyXG4uZGF0ZS1pY29uLmFubml2ZXJzYXJ5IHtcclxuICAgIG9wYWNpdHk6IC45O1xyXG59XHJcblxyXG4ucG9wdXAtZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbn1cclxuXHJcbi5kYXRlLXBvcHVwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5wb3B1cC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTBjYWY5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTRweDtcclxuICAgIG1pbi13aWR0aDogMTEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBjb2xvcjogIzBkNDdhMTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi8qIMOwwp/CjsKCIEJpcnRoZGF5ICovXHJcbi5wb3B1cC1jb250ZW50Om5vdCguZGVhdGgpOm5vdCguYW5uaXZlcnNhcnkpIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzkwY2FmOTtcclxuICAgIGNvbG9yOiAjMGQ0N2ExO1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTlweDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5MGNhZjk7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOTBjYWY5O1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiDDsMKfwpXCr8OvwrjCjyBSZW1lbWJyYW5jZSAqL1xyXG4ucG9wdXAtY29udGVudC5kZWF0aCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNjZTkzZDg7XHJcbiAgICBjb2xvcjogIzZhMWI5YTtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IC05cHg7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2U5M2Q4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NlOTNkODtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogw7DCn8KSwo0gQW5uaXZlcnNhcnkgKi9cclxuLnBvcHVwLWNvbnRlbnQuYW5uaXZlcnNhcnkge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjQ4ZmIxO1xyXG4gICAgY29sb3I6ICNjMjE4NWI7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAtOXB4O1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y0OGZiMTtcclxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmNDhmYjE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb3B1cC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4129:
/*!*****************************************************************!*\
  !*** ./src/app/components/family-tree/family-tree.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FamilyTreeComponent: () => (/* binding */ FamilyTreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ 2714);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tree */ 8379);
/* harmony import */ var _assets_data_bakshi_parivar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data/bakshi-parivar */ 6037);
/* harmony import */ var src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/helper-functions */ 9348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _family_node_family_node_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../family-node/family-node.component */ 5345);
/* harmony import */ var _welcome_modal_welcome_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../welcome-modal/welcome-modal.component */ 801);









const _c0 = ["treeExportTarget"];
function FamilyTreeComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-family-node", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const root_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("member", root_r5);
  }
}
function FamilyTreeComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("small-preview", ctx_r2.previewData.isSmall);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r2.previewData.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function FamilyTreeComponent_div_25_ng_container_7_div_1_div_3_div_4_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 33);
  }
  if (rf & 2) {
    const person_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", person_r14.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function FamilyTreeComponent_div_25_ng_container_7_div_1_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FamilyTreeComponent_div_25_ng_container_7_div_1_div_3_div_4_img_1_Template, 1, 1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const person_r14 = ctx.$implicit;
    const last_r15 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", person_r14.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", person_r14.name, "", !last_r15 ? "," : "", "");
  }
}
function FamilyTreeComponent_div_25_ng_container_7_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "strong", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FamilyTreeComponent_div_25_ng_container_7_div_1_div_3_div_4_Template, 4, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const day_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](day_r12.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", day_r12.value);
  }
}
function FamilyTreeComponent_div_25_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FamilyTreeComponent_div_25_ng_container_7_div_1_div_3_Template, 5, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](month_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, ctx_r9.groupedBirthdays[month_r10]));
  }
}
function FamilyTreeComponent_div_25_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FamilyTreeComponent_div_25_ng_container_7_div_1_Template, 5, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.getOrderedMonths(ctx_r6.groupedBirthdays));
  }
}
function FamilyTreeComponent_div_25_ng_container_8_div_1_div_3_div_4_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 33);
  }
  if (rf & 2) {
    const person_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", person_r23.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function FamilyTreeComponent_div_25_ng_container_8_div_1_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FamilyTreeComponent_div_25_ng_container_8_div_1_div_3_div_4_img_1_Template, 1, 1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const person_r23 = ctx.$implicit;
    const last_r24 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", person_r23.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", person_r23.name, "", !last_r24 ? "," : "", "");
  }
}
function FamilyTreeComponent_div_25_ng_container_8_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "strong", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FamilyTreeComponent_div_25_ng_container_8_div_1_div_3_div_4_Template, 4, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const day_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](day_r21.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", day_r21.value);
  }
}
function FamilyTreeComponent_div_25_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FamilyTreeComponent_div_25_ng_container_8_div_1_div_3_Template, 5, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](month_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, ctx_r18.groupedDeathdays[month_r19]));
  }
}
function FamilyTreeComponent_div_25_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FamilyTreeComponent_div_25_ng_container_8_div_1_Template, 5, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r7.getOrderedMonths(ctx_r7.groupedDeathdays));
  }
}
function FamilyTreeComponent_div_25_ng_container_9_div_1_div_3_div_4_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 33);
  }
  if (rf & 2) {
    const person_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", person_r32.image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function FamilyTreeComponent_div_25_ng_container_9_div_1_div_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FamilyTreeComponent_div_25_ng_container_9_div_1_div_3_div_4_img_1_Template, 1, 1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const person_r32 = ctx.$implicit;
    const last_r33 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", person_r32.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", person_r32.name, "", !last_r33 ? "," : "", "");
  }
}
function FamilyTreeComponent_div_25_ng_container_9_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "strong", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, FamilyTreeComponent_div_25_ng_container_9_div_1_div_3_div_4_Template, 4, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const day_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](day_r30.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", day_r30.value);
  }
}
function FamilyTreeComponent_div_25_ng_container_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, FamilyTreeComponent_div_25_ng_container_9_div_1_div_3_Template, 5, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const month_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](month_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, ctx_r27.groupedAnniversaries[month_r28]));
  }
}
function FamilyTreeComponent_div_25_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FamilyTreeComponent_div_25_ng_container_9_div_1_Template, 5, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r8.getOrderedMonths(ctx_r8.groupedAnniversaries));
  }
}
function FamilyTreeComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FamilyTreeComponent_div_25_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.closeDateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FamilyTreeComponent_div_25_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r38.onModalClick($event));
    })("mouseover", function FamilyTreeComponent_div_25_Template_div_mouseover_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r39.onMouseOver($event));
    })("mouseout", function FamilyTreeComponent_div_25_Template_div_mouseout_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r40.onMouseOut());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FamilyTreeComponent_div_25_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r41.closeDateModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FamilyTreeComponent_div_25_ng_container_7_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, FamilyTreeComponent_div_25_ng_container_8_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, FamilyTreeComponent_div_25_ng_container_9_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.modalTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.activeModal === "dob");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.activeModal === "dod");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.activeModal === "anniversary");
  }
}
function FamilyTreeComponent_app_welcome_modal_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-welcome-modal", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeModal", function FamilyTreeComponent_app_welcome_modal_26_Template_app_welcome_modal_closeModal_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r42.closeWelcomeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class FamilyTreeComponent {
  constructor(route) {
    this.route = route;
    this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__.NestedTreeControl(node => node.children);
    this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_6__.MatTreeNestedDataSource();
    // isLoading = true;
    this.previewData = null;
    this.activeModal = null;
    this.todayBirthdays = [];
    this.todayRemembrances = [];
    this.todayAnniversaries = [];
    this.todayFormattedDate = '';
    this.groupedBirthdays = {};
    this.groupedDeathdays = {};
    this.groupedAnniversaries = {};
    this.monthOrder = src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.monthOrder;
    this.showWelcomeModal = false;
    this.hasChild = (_, node) => !!node.children && node.children.length > 0;
  }
  ngOnInit() {
    const ancestors = _assets_data_bakshi_parivar__WEBPACK_IMPORTED_MODULE_0__["default"].ancestors;
    this.dataSource.data = ancestors;
    this.buildDateCollections();
    this.showTodayNotification();
    // ✅ existing highlight logic
    this.route.queryParams.subscribe(params => {
      const name = params['highlight'];
      if (name) {
        this.waitAndHighlight(name);
      } else {
        // ✅ NEW LOGIC (only when no highlight param)
        setTimeout(() => {
          this.autoHighlightToday();
        }, 700); // wait for DOM render
      }
    });
  }
  // ✅ BACK BUTTON
  goBack() {
    window.history.back();
  }
  autoHighlightToday() {
    const person = this.todayBirthdays[0] || this.todayRemembrances[0] || this.todayAnniversaries[0];
    if (person) {
      this.waitAndHighlight((0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getHighlightName)(person));
    }
  }
  waitAndHighlight(name) {
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const target = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.findElementByDataName)(name);
      if (target) {
        (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.smoothScrollToElement)(target);
        (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.highlightElement)(target);
        (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.cleanUrlQueryParams)();
        clearInterval(interval);
      }
      if (attempts > 15) {
        clearInterval(interval);
      }
    }, 200);
  }
  openWelcomeModal() {
    this.showWelcomeModal = true;
  }
  closeWelcomeModal() {
    this.showWelcomeModal = false;
  }
  showTodayNotification() {
    const birthdays = this.todayBirthdays.map(x => x.name);
    const remembrances = this.todayRemembrances.map(x => x.name);
    const anniversaries = this.todayAnniversaries.map(x => x.name);
    if (!birthdays.length && !remembrances.length && !anniversaries.length) return;
    let bodyParts = [];
    // ✅ Birthdays (🎂🎉)
    if (birthdays.length === 1) {
      bodyParts.push(`🎂 ${birthdays[0]} ka birthday hai`);
    } else if (birthdays.length > 1) {
      bodyParts.push(`🎉 ${birthdays[0]} aur ${birthdays.length - 1} aur logon ka birthday`);
    }
    // ✅ Remembrance (🕯️🌼)
    if (remembrances.length === 1) {
      bodyParts.push(`🕯️ ${remembrances[0]} ki punya tithi`);
    } else if (remembrances.length > 1) {
      bodyParts.push(`🌼 ${remembrances[0]} aur ${remembrances.length - 1} aur ki punya tithi`);
    }
    // ✅ Anniversaries (💍🎊)
    if (anniversaries.length === 1) {
      bodyParts.push(`💍 ${anniversaries[0]} ka aniversary hai`);
    } else if (anniversaries.length > 1) {
      bodyParts.push(`🎊 ${anniversaries[0]} aur ${anniversaries.length - 1} aur logon ka aniversary`);
    }
    const bodyText = bodyParts.join(' | ');
    // ✅ ONLY SHOW if permission already granted
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('🙏 Bakshi Parivar Today', {
        body: bodyText
      });
    }
  }
  get modalTitle() {
    switch (this.activeModal) {
      case 'dob':
        return '🎂 All Birthdays';
      case 'dod':
        return '🕯️🙏 Remembrance (पुण्यतिथि)';
      case 'anniversary':
        return '💍 All Anniversaries';
      default:
        return '';
    }
  }
  buildDateCollections() {
    const {
      births,
      deaths,
      anniversaries
    } = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.collectFamilyEvents)(this.dataSource.data);
    this.groupedBirthdays = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.groupEventsByMonth)(births);
    this.groupedDeathdays = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.groupEventsByMonth)(deaths);
    this.groupedAnniversaries = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.groupEventsByMonth)(anniversaries);
    this.checkTodayEvents();
  }
  checkTodayEvents() {
    const today = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.normalizeToday)();
    const {
      month,
      day,
      formatted
    } = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getTodayDateString)(today);
    this.todayFormattedDate = formatted;
    this.todayBirthdays = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getTodayEvents)(this.groupedBirthdays, month, day);
    this.todayRemembrances = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getTodayEvents)(this.groupedDeathdays, month, day);
    this.todayAnniversaries = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getTodayEvents)(this.groupedAnniversaries, month, day);
  }
  getOrderedMonths(grouped) {
    return this.monthOrder.filter(month => grouped[month]);
  }
  closeDateModal() {
    this.activeModal = null;
  }
  openDobModal(event) {
    event.stopPropagation();
    this.activeModal = 'dob';
  }
  openDodModal(event) {
    event.stopPropagation();
    this.activeModal = 'dod';
  }
  openAnniversaryModal(event) {
    event.stopPropagation();
    this.activeModal = 'anniversary';
  }
  onModalClick(event) {
    event.stopPropagation();
  }
  onMouseOver(event) {
    const target = event.target;
    if (target instanceof HTMLImageElement && (target.classList.contains('node-image') || target.classList.contains('small-member-pic'))) {
      this.previewData = target.src.includes('default') ? null : {
        url: target.src,
        isSmall: target.classList.contains('small-member-pic')
      };
    }
  }
  onMouseOut() {
    this.previewData = null;
  }
  static {
    this.ɵfac = function FamilyTreeComponent_Factory(t) {
      return new (t || FamilyTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FamilyTreeComponent,
      selectors: [["app-family-tree"]],
      viewQuery: function FamilyTreeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.treeExportTarget = _t.first);
        }
      },
      decls: 27,
      vars: 6,
      consts: [[1, "family-events-toolbar", "single-row"], [1, "back-btn", 3, "click"], [1, "center-links"], ["href", "javascript:void(0)", 1, "event-link", 3, "click"], [1, "vertical-separator"], ["href", "javascript:void(0)", 1, "event-link", "death", 3, "click"], ["href", "javascript:void(0)", 1, "event-link", "anniversary", 3, "click"], [1, "maa-message-btn", 3, "click"], [1, "tree-container", 3, "mouseover", "mouseout"], [1, "family-tree"], ["treeExportTarget", ""], [4, "ngFor", "ngForOf"], ["class", "global-preview-overlay", 4, "ngIf"], ["class", "events-modal-backdrop", 3, "click", 4, "ngIf"], [3, "closeModal", 4, "ngIf"], [3, "member"], [1, "global-preview-overlay"], ["alt", "Family Preview", 1, "preview-img", 3, "src"], [1, "events-modal-backdrop", 3, "click"], [1, "events-modal", 3, "click", "mouseover", "mouseout"], ["aria-label", "Close", 1, "close-button", 3, "click"], [1, "modal-scroll-area"], [4, "ngIf"], ["class", "month-section", 4, "ngFor", "ngForOf"], [1, "month-section"], ["class", "event-row", 4, "ngFor", "ngForOf"], [1, "event-row"], [1, "event-date"], [1, "event-member-container"], ["class", "event-member-item", 4, "ngFor", "ngForOf"], [1, "event-member-item"], ["class", "small-member-pic", "alt", "", 3, "src", 4, "ngIf"], [1, "member-name"], ["alt", "", 1, "small-member-pic", 3, "src"], [3, "closeModal"]],
      template: function FamilyTreeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FamilyTreeComponent_Template_button_click_1_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " \u2B05 Back ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FamilyTreeComponent_Template_a_click_4_listener($event) {
            return ctx.openDobModal($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " \uD83D\uDCC5 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "All DoBs");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FamilyTreeComponent_Template_a_click_9_listener($event) {
            return ctx.openDodModal($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " \uD83D\uDD6F\uFE0F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "All DoDs");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FamilyTreeComponent_Template_a_click_14_listener($event) {
            return ctx.openAnniversaryModal($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " \uD83D\uDC8D ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "All Anniversaries");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FamilyTreeComponent_Template_button_click_18_listener() {
            return ctx.openWelcomeModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " \uD83D\uDCAC \u092E\u093E\u0901 \u0915\u093E \u0938\u0902\u0926\u0947\u0936 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function FamilyTreeComponent_Template_div_mouseover_20_listener($event) {
            return ctx.onMouseOver($event);
          })("mouseout", function FamilyTreeComponent_Template_div_mouseout_20_listener() {
            return ctx.onMouseOut();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 9, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, FamilyTreeComponent_ng_container_23_Template, 2, 1, "ng-container", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, FamilyTreeComponent_div_24_Template, 2, 3, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, FamilyTreeComponent_div_25_Template, 10, 4, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, FamilyTreeComponent_app_welcome_modal_26_Template, 1, 0, "app-welcome-modal", 14);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("blurred", (ctx.previewData == null ? null : ctx.previewData.url) || ctx.activeModal === "dob" || ctx.activeModal === "dod");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataSource.data);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.previewData == null ? null : ctx.previewData.url);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeModal === "dob" || ctx.activeModal === "dod" || ctx.activeModal === "anniversary");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showWelcomeModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _family_node_family_node_component__WEBPACK_IMPORTED_MODULE_2__.FamilyNodeComponent, _welcome_modal_welcome_modal_component__WEBPACK_IMPORTED_MODULE_3__.WelcomeModalComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.KeyValuePipe],
      styles: ["@charset \"UTF-8\";\n\n\n\n\n.tree-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 12px;\n  background: #ffffff;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.back-btn[_ngcontent-%COMP%] {\n  background: #f1f3f4;\n  border: none;\n  padding: 8px 12px;\n  border-radius: 12px;\n  font-size: 14px;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  transition: all 0.2s ease;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);\n}\n.back-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\n.family-tree[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 0 60px;\n}\n.family-tree[_ngcontent-%COMP%]   .mat-tree-node[_ngcontent-%COMP%], .family-tree[_ngcontent-%COMP%]   .mat-nested-tree-node[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 10px 0;\n}\n.family-tree[_ngcontent-%COMP%]   .node-box[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  background: #d0f0fd;\n  border: 2px solid #2196f3;\n  border-radius: 8px;\n  font-weight: bold;\n  text-align: center;\n  min-width: 200px;\n}\n.family-tree[_ngcontent-%COMP%]   .child-node[_ngcontent-%COMP%] {\n  margin: 15px 0 0 40px;\n}\n\n\n\n\n\n.tree-container[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: filter 0.4s ease, opacity 0.45s ease;\n}\n.tree-container.tree-loading[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.tree-container.blurred[_ngcontent-%COMP%] {\n  filter: blur(12px) brightness(0.9);\n}\n\n\n\n\n\n.global-preview-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10000;\n  pointer-events: none;\n  background: rgba(0, 0, 0, 0.05);\n}\n.global-preview-overlay[_ngcontent-%COMP%]   .preview-img[_ngcontent-%COMP%] {\n  max-width: 80vw;\n  max-height: 80vh;\n  border-radius: 24px;\n  border: 10px solid #fff;\n  object-fit: contain;\n  box-shadow: 0 40px 80px -15px rgba(0, 0, 0, 0.5);\n  animation: _ngcontent-%COMP%_previewZoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.global-preview-overlay[_ngcontent-%COMP%]   .preview-img.small-preview[_ngcontent-%COMP%] {\n  max-width: 40vw;\n  max-height: 40vh;\n}\n\n@keyframes _ngcontent-%COMP%_previewZoom {\n  from {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n\n\n\n.family-events-toolbar.single-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  padding: 10px 16px;\n}\n\n\n\n.back-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 16px;\n}\n\n\n\n.maa-message-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border-radius: 999px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #5c3d00;\n  background: linear-gradient(135deg, #fff3e0, #ffe0b2);\n  border: 1px solid rgba(255, 193, 7, 0.4);\n  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.6);\n  cursor: pointer;\n  transition: all 0.25s ease;\n}\n.maa-message-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) scale(1.03);\n  background: linear-gradient(135deg, #ffe0b2, #ffd54f);\n  box-shadow: 0 8px 20px rgba(255, 193, 7, 0.35);\n}\n.maa-message-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n\n\n\n\n\n.center-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n\n\n.vertical-separator[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 18px;\n  background: linear-gradient(to bottom, transparent, #aaa, transparent);\n}\n\n\n\n\n\n.event-link[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #1565c0;\n  cursor: pointer;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.event-link[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.event-link.death[_ngcontent-%COMP%] {\n  color: #8e24aa;\n}\n.event-link.anniversary[_ngcontent-%COMP%] {\n  color: #ffb74d;\n}\n\n\n\n\n\n.events-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 9999;\n}\n\n.events-modal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  max-width: 700px;\n  max-height: 80vh;\n  padding: 24px 24px 24px;\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);\n  position: relative;\n  animation: modalFadeIn 0.35s ease;\n}\n.events-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.modal-scroll-area[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n\n\n\n\n.month-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.month-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #1565c0;\n  border-bottom: 2px solid #90caf9;\n  padding-bottom: 4px;\n}\n\n.event-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.event-row[_ngcontent-%COMP%]   .event-date[_ngcontent-%COMP%] {\n  flex: 0 0 150px;\n  font-weight: bold;\n  word-break: break-word;\n}\n.event-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.event-member-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.event-member-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.small-member-pic[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 1px solid #ddd;\n}\n\n\n\n\n\n.close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  background: transparent;\n  border: none;\n  font-size: 28px;\n  font-weight: bold;\n  color: #666;\n  cursor: pointer;\n  transition: color 0.2s ease;\n}\n.close-button[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n\n\n\n\n\n.today-events-title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 24px;\n  color: #1565c0;\n}\n\n.today-birthdays-title[_ngcontent-%COMP%] {\n  color: #0d47a1;\n  border-bottom: 2px solid #e3f2fd;\n  padding-bottom: 5px;\n}\n\n.today-remembrances-title[_ngcontent-%COMP%] {\n  color: #8e24aa;\n  border-bottom: 2px solid #f3e5f5;\n  padding-bottom: 5px;\n}\n\n.today-events-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 20px;\n}\n\n.today-event-item[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  border-bottom: 1px solid #f5f5f5;\n  font-weight: 600;\n}\n\n.upcoming-event-date[_ngcontent-%COMP%] {\n  width: 90px;\n  margin-right: 15px;\n  display: inline-block;\n}\n\n.upcoming-note[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  padding: 10px 12px;\n  font-size: 13px;\n  border-radius: 6px;\n  background: #fff8e1;\n  border-left: 4px solid #ffb300;\n  color: #6d4c41;\n}\n\n\n\n\n\n.theme-dark[_nghost-%COMP%]   .event-link[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .event-link[_ngcontent-%COMP%] {\n  color: #90caf9;\n}\n.theme-dark[_nghost-%COMP%]   .event-link.death[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .event-link.death[_ngcontent-%COMP%] {\n  color: #ce93d8;\n}\n.theme-dark[_nghost-%COMP%]   .event-link.anniversary[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .event-link.anniversary[_ngcontent-%COMP%] {\n  color: #ffb74d;\n}\n.theme-dark[_nghost-%COMP%]   .tree-container.blurred[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .tree-container.blurred[_ngcontent-%COMP%] {\n  filter: blur(12px) brightness(0.4);\n}\n.theme-dark[_nghost-%COMP%]   .global-preview-overlay[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .global-preview-overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.6);\n}\n.theme-dark[_nghost-%COMP%]   .global-preview-overlay[_ngcontent-%COMP%]   .preview-img[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .global-preview-overlay[_ngcontent-%COMP%]   .preview-img[_ngcontent-%COMP%] {\n  border-color: #333;\n}\n.theme-dark[_nghost-%COMP%]   .events-modal-backdrop[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .events-modal-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.7);\n}\n.theme-dark[_nghost-%COMP%]   .events-modal[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .events-modal[_ngcontent-%COMP%] {\n  background: #1e1e1e;\n  color: #e0e0e0;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);\n}\n.theme-dark[_nghost-%COMP%]   .events-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .events-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #90caf9;\n}\n.theme-dark[_nghost-%COMP%]   .today-events-title[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .today-events-title[_ngcontent-%COMP%] {\n  color: #90caf9;\n}\n.theme-dark[_nghost-%COMP%]   .today-birthdays-title[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .today-birthdays-title[_ngcontent-%COMP%] {\n  color: #64b5f6;\n  border-bottom-color: #333;\n}\n.theme-dark[_nghost-%COMP%]   .today-remembrances-title[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .today-remembrances-title[_ngcontent-%COMP%] {\n  color: #ce93d8;\n  border-bottom-color: #333;\n}\n.theme-dark[_nghost-%COMP%]   .event-row[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .event-row[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.theme-dark[_nghost-%COMP%]   .back-btn[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  background: #333;\n  color: #fff;\n  border-color: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);\n}\n.theme-dark[_nghost-%COMP%]   .maa-message-btn[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .maa-message-btn[_ngcontent-%COMP%] {\n  border-radius: 999px;\n}\n.theme-dark[_nghost-%COMP%]   .close-button[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%] {\n  color: #999;\n}\n.theme-dark[_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]:hover, .theme-dark   [_nghost-%COMP%]   .close-button[_ngcontent-%COMP%]:hover {\n  color: #eee;\n}\n.theme-dark[_nghost-%COMP%]   .upcoming-note[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .upcoming-note[_ngcontent-%COMP%] {\n  background: #2a2a2a;\n  color: #ffcc80;\n  border-left-color: #ffb74d;\n}\n.theme-dark[_nghost-%COMP%]   .vertical-separator[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .vertical-separator[_ngcontent-%COMP%] {\n  background-color: #666;\n}\n\n.highlight-node[_ngcontent-%COMP%] {\n  border: 2px solid #ff9800;\n  box-shadow: 0 0 10px #ff9800;\n  animation: _ngcontent-%COMP%_glow 1s ease-in-out infinite alternate;\n}\n\n@keyframes _ngcontent-%COMP%_glow {\n  from {\n    box-shadow: 0 0 5px #ff9800;\n  }\n  to {\n    box-shadow: 0 0 15px #ff9800;\n  }\n}\n@media (max-width: 480px) {\n  .family-events-toolbar.single-row[_ngcontent-%COMP%] {\n    position: static;\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  \n\n  .center-links[_ngcontent-%COMP%] {\n    width: 100%;\n    order: 1;\n    margin-top: 45px;\n    display: flex;\n    justify-content: center;\n    gap: 12px;\n    margin-bottom: 6px;\n  }\n  \n\n  .back-btn[_ngcontent-%COMP%], .maa-message-btn[_ngcontent-%COMP%] {\n    position: static;\n    order: 2;\n    width: calc(50% - 4px);\n    justify-content: center;\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    padding: 8px 10px;\n    font-size: 13px;\n  }\n  \n\n  .maa-message-btn[_ngcontent-%COMP%] {\n    border-radius: 999px;\n    box-shadow: 0 2px 6px rgba(255, 193, 7, 0.2);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mYW1pbHktdHJlZS9mYW1pbHktdHJlZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7OzJCQUFBO0FBR0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7QUFFSjtBQUFJO0VBQ0kseUNBQUE7QUFFUjtBQUNJO0VBQ0ksc0JBQUE7QUFDUjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJOztFQUVJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFBUjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUlJO0VBQ0kscUJBQUE7QUFGUjs7QUFNQTs7MkJBQUE7QUFHQTtFQUNJLFVBQUE7RUFDQSxnREFBQTtBQUhKO0FBS0k7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7QUFIUjtBQU1JO0VBQ0ksa0NBQUE7QUFKUjs7QUFRQTs7MkJBQUE7QUFHQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtBQUxKO0FBT0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnREFBQTtFQUNBLDZEQUFBO0FBTlI7QUFRUTtFQUNJLGVBQUE7RUFD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U0FBQTtJQUVBLGtCQUFBO0VBckVOO0VBd0VFLHlCQUFBO0VBQ0E7O0lBRUksZ0JBQUE7SUFDQSxRQUFBO0lBRUEsc0JBQUE7SUFDQSx1QkFBQTtJQUVBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFFBQUE7SUFFQSxpQkFBQTtJQUNBLGVBQUE7RUF6RU47RUE0RUUsK0JBQUE7RUFDQTtJQUNJLG9CQUFBO0lBQ0EsNENBQUE7RUExRU47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgRkFNSUxZIFRSRUVcclxuPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4udHJlZS1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uYmFjay1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjNmNDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mYW1pbHktdHJlZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMCA2MHB4O1xyXG5cclxuICAgIC5tYXQtdHJlZS1ub2RlLFxyXG4gICAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5ub2RlLWJveCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkMGYwZmQ7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzIxOTZmMztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoaWxkLW5vZGUge1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwIDAgNDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBUUkVFIENPTlRBSU5FUlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi50cmVlLWNvbnRhaW5lciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuNHMgZWFzZSwgb3BhY2l0eSAwLjQ1cyBlYXNlO1xyXG5cclxuICAgICYudHJlZS1sb2FkaW5nIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICYuYmx1cnJlZCB7XHJcbiAgICAgICAgZmlsdGVyOiBibHVyKDEycHgpIGJyaWdodG5lc3MoMC45KTtcclxuICAgIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBJTUFHRSBQUkVWSUVXXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmdsb2JhbC1wcmV2aWV3LW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaW5zZXQ6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAwMDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcblxyXG4gICAgLnByZXZpZXctaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgbWF4LWhlaWdodDogODB2aDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcblxyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNDBweCA4MHB4IC0xNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICBhbmltYXRpb246IHByZXZpZXdab29tIDAuM3MgY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xyXG5cclxuICAgICAgICAmLnNtYWxsLXByZXZpZXcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwdnc7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwdmg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHByZXZpZXdab29tIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgRVZFTlRTIFRPT0xCQVIgKERFU0tUT1ApXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmZhbWlseS1ldmVudHMtdG9vbGJhci5zaW5nbGUtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8vIMOiwpzChSBjZW50ZXIgYmxvY2sgKGJhc2UpXHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xyXG59XHJcblxyXG4vKiDDosKcwoUgTEVGVCAoQmFjaykgKi9cclxuLmJhY2stYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi8qIMOiwpzChSBSSUdIVCAoTWFhIE1lc3NhZ2UpICovXHJcbi5tYWEtbWVzc2FnZS1idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE2cHg7XHJcblxyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA2cHg7XHJcblxyXG4gICAgcGFkZGluZzogOHB4IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuXHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgIGNvbG9yOiAjNWMzZDAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZjNlMCwgI2ZmZTBiMik7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTkzLCA3LCAwLjQpO1xyXG5cclxuICAgIGJveC1zaGFkb3c6XHJcbiAgICAgICAgMCA0cHggMTJweCByZ2JhKDI1NSwgMTkzLCA3LCAwLjI1KSxcclxuICAgICAgICBpbnNldCAwIDFweCAycHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG5cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KSBzY2FsZSgxLjAzKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZlMGIyLCAjZmZkNTRmKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEoMjU1LCAxOTMsIDcsIDAuMzUpO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIENFTlRFUiBMSU5LUyAoRG9CcyB8IERvRHMpXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmNlbnRlci1saW5rcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTJweDtcclxufVxyXG5cclxuLyogw6LCnMKFIHNlcGFyYXRvciAqL1xyXG4udmVydGljYWwtc2VwYXJhdG9yIHtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB0cmFuc3BhcmVudCwgI2FhYSwgdHJhbnNwYXJlbnQpO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIEVWRU5UIExJTktTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmV2ZW50LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMTU2NWMwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDRweDtcclxuXHJcbiAgICAmOmhvdmVyIHNwYW4ge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgICYuZGVhdGgge1xyXG4gICAgICAgIGNvbG9yOiAjOGUyNGFhO1xyXG4gICAgfVxyXG5cclxuICAgICYuYW5uaXZlcnNhcnkge1xyXG4gICAgICAgIGNvbG9yOiAjZmZiNzRkO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIE1PREFMXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLmV2ZW50cy1tb2RhbC1iYWNrZHJvcCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBpbnNldDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjQ1KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4uZXZlbnRzLW1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogODB2aDtcclxuXHJcbiAgICBwYWRkaW5nOiAyNHB4IDI0cHggMjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgLjI1KTtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBtb2RhbEZhZGVJbiAwLjM1cyBlYXNlO1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgIH1cclxufVxyXG5cclxuLm1vZGFsLXNjcm9sbC1hcmVhIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgRVZFTlRTIExJU1RcclxuPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4ubW9udGgtc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMTU2NWMwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjOTBjYWY5O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ldmVudC1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEycHg7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG5cclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG5cclxuICAgIC5ldmVudC1kYXRlIHtcclxuICAgICAgICBmbGV4OiAwIDAgMTUwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXZlbnQtbWVtYmVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5ldmVudC1tZW1iZXItaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNXB4O1xyXG59XHJcblxyXG4uc21hbGwtbWVtYmVyLXBpYyB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBCVVRUT05TICYgVEVYVFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi5jbG9zZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgVE9EQVkgRVZFTlRTXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLnRvZGF5LWV2ZW50cy10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICMxNTY1YzA7XHJcbn1cclxuXHJcbi50b2RheS1iaXJ0aGRheXMtdGl0bGUge1xyXG4gICAgY29sb3I6ICMwZDQ3YTE7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UzZjJmZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi50b2RheS1yZW1lbWJyYW5jZXMtdGl0bGUge1xyXG4gICAgY29sb3I6ICM4ZTI0YWE7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YzZTVmNTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi50b2RheS1ldmVudHMtbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi50b2RheS1ldmVudC1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4udXBjb21pbmctZXZlbnQtZGF0ZSB7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnVwY29taW5nLW5vdGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcclxuXHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI2ZmZjhlMTtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgI2ZmYjMwMDtcclxuICAgIGNvbG9yOiAjNmQ0YzQxO1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIERBUksgVEhFTUVcclxuPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSB7XHJcblxyXG4gICAgLmV2ZW50LWxpbmsge1xyXG4gICAgICAgIGNvbG9yOiAjOTBjYWY5O1xyXG5cclxuICAgICAgICAmLmRlYXRoIHtcclxuICAgICAgICAgICAgY29sb3I6ICNjZTkzZDg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmFubml2ZXJzYXJ5IHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmI3NGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50cmVlLWNvbnRhaW5lci5ibHVycmVkIHtcclxuICAgICAgICBmaWx0ZXI6IGJsdXIoMTJweCkgYnJpZ2h0bmVzcygwLjQpO1xyXG4gICAgfVxyXG5cclxuICAgIC5nbG9iYWwtcHJldmlldy1vdmVybGF5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcblxyXG4gICAgICAgIC5wcmV2aWV3LWltZyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzMzMztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmV2ZW50cy1tb2RhbC1iYWNrZHJvcCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNyk7XHJcbiAgICB9XHJcblxyXG4gICAgLmV2ZW50cy1tb2RhbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzFlMWUxZTtcclxuICAgICAgICBjb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsIDAsIDAsIC42KTtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzkwY2FmOTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRvZGF5LWV2ZW50cy10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICM5MGNhZjk7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvZGF5LWJpcnRoZGF5cy10aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICM2NGI1ZjY7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzMzMztcclxuICAgIH1cclxuXHJcbiAgICAudG9kYXktcmVtZW1icmFuY2VzLXRpdGxlIHtcclxuICAgICAgICBjb2xvcjogI2NlOTNkODtcclxuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG5cclxuICAgIC5ldmVudC1yb3cge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2stYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIH1cclxuXHJcbiAgICAubWFhLW1lc3NhZ2UtYnRuIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2xvc2UtYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudXBjb21pbmctbm90ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzJhMmEyYTtcclxuICAgICAgICBjb2xvcjogI2ZmY2M4MDtcclxuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmYjc0ZDtcclxuICAgIH1cclxuXHJcbiAgICAudmVydGljYWwtc2VwYXJhdG9yIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmhpZ2hsaWdodC1ub2RlIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZjk4MDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZmY5ODAwO1xyXG4gICAgYW5pbWF0aW9uOiBnbG93IDFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBnbG93IHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggI2ZmOTgwMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDE1cHggI2ZmOTgwMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgLmZhbWlseS1ldmVudHMtdG9vbGJhci5zaW5nbGUtcm93IHtcclxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAvKiDDosKcwoUgUk9XIDEgKERvQnMgKyBEb0RzKSAqL1xyXG4gICAgLmNlbnRlci1saW5rcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDVweDtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDEycHg7XHJcblxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAvKiDDosKcwoUgUk9XIDIgKEJhY2sgKyBNYWEpICovXHJcbiAgICAuYmFjay1idG4sXHJcbiAgICAubWFhLW1lc3NhZ2UtYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgIG9yZGVyOiAyO1xyXG5cclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA0cHgpOyAvLyDDsMKfwpTCpSBFWEFDVCBIQUxGIFdJRFRIXHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDRweDtcclxuXHJcbiAgICAgICAgcGFkZGluZzogOHB4IDEwcHg7IC8vIMOiwpzChSBTQU1FIHBhZGRpbmdcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLyogw6LCnMKFIFJFTU9WRSBmYW5jeSB3aWR0aCBpc3N1ZSAqL1xyXG4gICAgLm1hYS1tZXNzYWdlLWJ0biB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMjU1LCAxOTMsIDcsIDAuMik7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 2865:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _assets_data_bakshi_parivar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/data/bakshi-parivar */ 6037);
/* harmony import */ var src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/helper-functions */ 9348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);






function HomeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \uD83C\uDF33 Aaj koi Birthday, Anniversary ya Punyatithi nahi hai. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_div_3_ng_container_3_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
const _c0 = function (a0, a1) {
  return {
    $implicit: a0,
    shareFn: a1
  };
};
function HomeComponent_div_3_ng_container_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_3_ng_container_3_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const p_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, p_r14, ctx_r13.shareBirthday));
  }
}
function HomeComponent_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83C\uDF82 Today's Birthdays");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_div_3_ng_container_3_ng_container_3_Template, 2, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r10.todayBirthdays)("ngForTrackBy", ctx_r10.trackByName);
  }
}
function HomeComponent_div_3_ng_container_4_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function HomeComponent_div_3_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_3_ng_container_4_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const p_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, p_r17, ctx_r16.shareRemembrance));
  }
}
function HomeComponent_div_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDD6F\uFE0F Remembrance (\u092A\u0941\u0923\u094D\u092F\u0924\u093F\u0925\u093F)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_div_3_ng_container_4_ng_container_3_Template, 2, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r11.todayRemembrances)("ngForTrackBy", ctx_r11.trackByName);
  }
}
function HomeComponent_div_3_ng_container_5_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function HomeComponent_div_3_ng_container_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_3_ng_container_5_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const p_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, p_r20, ctx_r19.shareAnniversary));
  }
}
function HomeComponent_div_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDC8D Anniversary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_div_3_ng_container_5_ng_container_3_Template, 2, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r12.todayAnniversaries)("ngForTrackBy", ctx_r12.trackByName);
  }
}
function HomeComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_div_3_ng_container_3_Template, 4, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HomeComponent_div_3_ng_container_4_Template, 4, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HomeComponent_div_3_ng_container_5_Template, 4, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \uD83C\uDF1F Today\u2019s Events (", ctx_r1.todayFormattedDate, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.todayBirthdays.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.todayRemembrances.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.todayAnniversaries.length);
  }
}
function HomeComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_8_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const m_r23 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.selectMember(m_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function HomeComponent_div_8_div_1_Template_img_error_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);
      const m_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](m_r23.image = "/assets/images/default.png");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", m_r23.image || "/assets/images/default.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](m_r23.name + (m_r23.spouse ? " & " + m_r23.spouse : ""));
  }
}
function HomeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_8_div_1_Template, 4, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.filteredMembers)("ngForTrackBy", ctx_r2.trackByName);
  }
}
function HomeComponent_ng_container_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
const _c1 = function (a0) {
  return {
    $implicit: a0,
    icon: "\uD83C\uDF82",
    label: "Birthday"
  };
};
function HomeComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_ng_container_14_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c1, item_r27));
  }
}
function HomeComponent_ng_container_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
const _c2 = function (a0) {
  return {
    $implicit: a0,
    icon: "\uD83D\uDD6F\uFE0F",
    label: "\u092A\u0941\u0923\u094D\u092F\u0924\u093F\u0925\u093F"
  };
};
function HomeComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_ng_container_15_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c2, item_r29));
  }
}
function HomeComponent_ng_container_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
const _c3 = function (a0) {
  return {
    $implicit: a0,
    icon: "\uD83D\uDC8D",
    label: "Anniversary"
  };
};
function HomeComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_ng_container_16_ng_container_1_Template, 1, 0, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c3, item_r31));
  }
}
function HomeComponent_ng_template_17_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 30);
  }
  if (rf & 2) {
    const p_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", p_r33.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function HomeComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_ng_template_17_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);
      const p_r33 = restoredCtx.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r37.goToTreeWithHighlight(ctx_r37.getHighlightName(p_r33)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_ng_template_17_img_1_Template, 1, 1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 26)(3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_ng_template_17_Template_button_click_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r38);
      const p_r33 = restoredCtx.$implicit;
      const shareFn_r34 = restoredCtx.shareFn;
      shareFn_r34(p_r33.name);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r33 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", p_r33.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", p_r33.name.includes("&") ? ctx_r7.getShortNames(p_r33.name) : p_r33.name, " ");
  }
}
function HomeComponent_ng_template_19_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 30);
  }
  if (rf & 2) {
    const e_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", e_r40.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function HomeComponent_ng_template_19_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(Tomorrow)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HomeComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_ng_template_19_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47);
      const e_r40 = restoredCtx.$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r46.goToTreeWithHighlight(ctx_r46.getHighlightName(e_r40)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_ng_template_19_img_1_Template, 1, 1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 26)(3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeComponent_ng_template_19_span_7_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const e_r40 = ctx.$implicit;
    const icon_r41 = ctx.icon;
    const label_r42 = ctx.label;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", e_r40.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", icon_r41, " ", e_r40.name.includes("&") ? ctx_r9.getShortNames(e_r40.name) : e_r40.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", label_r42, " \u2022 ", e_r40.formattedDate.split("(")[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", e_r40.formattedDate.includes("(Tomorrow)"));
  }
}
class HomeComponent {
  constructor(router) {
    this.router = router;
    this.todayBirthdays = [];
    this.todayRemembrances = [];
    this.todayAnniversaries = [];
    this.upcomingBirthdays = [];
    this.upcomingRemembrances = [];
    this.upcomingAnniversaries = [];
    this.groupedBirthdays = {};
    this.groupedDeathdays = {};
    this.groupedAnniversaries = {};
    this.searchText = '';
    this.todayFormattedDate = '';
    this.allMembers = [];
    this.filteredMembers = [];
    this.getDisplayName = src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getDisplayName;
    this.getHighlightName = src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getHighlightName;
    this.trackByName = src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.trackByName;
    this.getShortNames = src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getShortNames;
  }
  ngOnInit() {
    const ancestors = _assets_data_bakshi_parivar__WEBPACK_IMPORTED_MODULE_0__["default"].ancestors;
    const {
      births,
      deaths,
      anniversaries
    } = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.collectFamilyEvents)(ancestors);
    this.groupedBirthdays = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.groupEventsByMonth)(births);
    this.groupedDeathdays = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.groupEventsByMonth)(deaths);
    this.groupedAnniversaries = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.groupEventsByMonth)(anniversaries);
    const upcoming = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getUpcomingEventsGrouped)(births, deaths, anniversaries, (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.normalizeToday)(), src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.monthOrder);
    this.upcomingBirthdays = upcoming.birthdays;
    this.upcomingRemembrances = upcoming.remembrances;
    this.upcomingAnniversaries = upcoming.anniversaries;
    this.setTodayEvents();
    this.allMembers = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.flattenMembers)(ancestors);
  }
  selectMember(member) {
    this.goToTreeWithHighlight(member.name);
  }
  goToTree() {
    (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.trackNavigationEvent)('tree');
    this.router.navigate(['/tree']);
  }
  onSearch(value) {
    const searchValue = value.trim().toLowerCase();
    if (searchValue) {
      (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.trackEvent)('search_use', 'engagement', value);
    }
    this.filteredMembers = searchValue ? this.allMembers.filter(member => member.name.toLowerCase().includes(searchValue) || member.spouse?.toLowerCase().includes(searchValue)).slice(0, 5) : [];
  }
  goToTreeWithHighlight(name) {
    this.router.navigate(['/tree'], {
      queryParams: {
        highlight: name
      }
    });
  }
  hasTodayEvents() {
    return (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.hasAnyItems)(this.todayBirthdays, this.todayRemembrances, this.todayAnniversaries);
  }
  shareBirthday(name) {
    (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.shareEventOnWhatsApp)(name, (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getDailyMessage)(src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.birthdayMessages), 'Birthday');
  }
  shareRemembrance(name) {
    (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.shareEventOnWhatsApp)(name, (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getDailyMessage)(src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.remembranceMessages), 'Remembrance');
  }
  shareAnniversary(name) {
    (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.shareEventOnWhatsApp)(name, (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getDailyMessage)(src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.anniversaryMessages), 'Anniversary');
  }
  setTodayEvents() {
    const today = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.normalizeToday)();
    const {
      month,
      day,
      formatted
    } = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getTodayDateString)(today);
    this.todayFormattedDate = formatted;
    this.todayBirthdays = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getTodayEvents)(this.groupedBirthdays, month, day);
    this.todayRemembrances = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getTodayEvents)(this.groupedDeathdays, month, day);
    this.todayAnniversaries = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_1__.getTodayEvents)(this.groupedAnniversaries, month, day);
  }
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 21,
      vars: 10,
      consts: [[1, "home-container"], [1, "home-content"], ["class", "no-events-banner", 4, "ngIf"], ["class", "today-section", 4, "ngIf"], [1, "search-section"], [1, "search-label"], ["type", "text", "placeholder", "\u0928\u093E\u092E \u0932\u093F\u0916\u0947\u0902 (\u091C\u0948\u0938\u0947: Rishabh...)", 3, "ngModel", "ngModelChange"], ["class", "suggestions", 4, "ngIf"], [1, "tree-btn", 3, "click"], [1, "upcoming-section"], [1, "upcoming-title"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["eventCardTemplate", ""], ["upcomingTemplate", ""], [1, "no-events-banner"], [1, "today-section"], [1, "today-title"], [4, "ngIf"], [1, "section-subtitle"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "suggestions"], ["class", "suggestion-item", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "suggestion-item", 3, "click"], ["alt", "Profile Image", 3, "src", "error"], [1, "event-card", 3, "click"], ["class", "event-img", 3, "src", 4, "ngIf"], [1, "event-info"], [1, "event-name"], [1, "share-btn", "whatsapp", 3, "click"], ["src", "assets/icons/WhatsApp.svg", "alt", "WhatsApp"], [1, "event-img", 3, "src"], [1, "event-card", "upcoming-card", 3, "click"], [1, "event-date"], ["class", "tomorrow-text", 4, "ngIf"], [1, "tomorrow-text"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 2, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 6, 4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\uD83D\uDD0D \u0915\u093F\u0938\u0940 \u0915\u094B \u0922\u0942\u0902\u0922 \u0930\u0939\u0947 \u0939\u0948\u0902?");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.searchText = $event;
          })("ngModelChange", function HomeComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.onSearch($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HomeComponent_div_8_Template, 2, 2, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() {
            return ctx.goToTree();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " \uD83C\uDF33 \u092A\u0942\u0930\u093E \u092A\u0930\u093F\u0935\u093E\u0930 \u0926\u0947\u0916\u0947\u0902 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9)(12, "h3", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " \uD83D\uDD1C Upcoming Events (Next 30 Days) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HomeComponent_ng_container_14_Template, 2, 4, "ng-container", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, HomeComponent_ng_container_15_Template, 2, 4, "ng-container", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HomeComponent_ng_container_16_Template, 2, 4, "ng-container", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, HomeComponent_ng_template_17_Template, 7, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, HomeComponent_ng_template_19_Template, 8, 6, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hasTodayEvents());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasTodayEvents());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredMembers.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.upcomingBirthdays)("ngForTrackBy", ctx.trackByName);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.upcomingRemembrances)("ngForTrackBy", ctx.trackByName);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.upcomingAnniversaries)("ngForTrackBy", ctx.trackByName);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet],
      styles: ["@charset \"UTF-8\";\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.home-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 16px 12px;\n}\n\n.home-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n}\n\n\n\n.today-section[_ngcontent-%COMP%], .search-section[_ngcontent-%COMP%], .upcoming-section[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\n\n\n\n\n\n\n\n.today-section[_ngcontent-%COMP%] {\n  background: #efe3cd;\n  border-radius: 14px;\n  padding: 14px;\n  animation: _ngcontent-%COMP%_todayGlow 4s ease-in-out infinite alternate;\n}\n\n@keyframes _ngcontent-%COMP%_todayGlow {\n  0% {\n    box-shadow: 0 0 0 rgba(255, 193, 7, 0);\n  }\n  100% {\n    box-shadow: 0 0 18px rgba(255, 193, 7, 0.25);\n  }\n}\n.today-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n.section-subtitle[_ngcontent-%COMP%] {\n  margin: 12px 0 6px;\n  font-size: 14px;\n  color: #555;\n}\n\n.tomorrow-text[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-weight: bold;\n}\n\n\n\n\n\n\n\n.search-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 12px;\n  padding: 10px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  transition: all 0.3s ease;\n  animation: _ngcontent-%COMP%_searchPulse 1.5s ease;\n}\n.search-section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border-radius: 10px;\n  border: 1px solid #ccc;\n  font-size: 16px;\n  outline: none;\n}\n.search-section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n}\n.search-section[_ngcontent-%COMP%]:focus-within {\n  box-shadow: 0 6px 18px rgba(46, 125, 50, 0.2);\n}\n.search-section[_ngcontent-%COMP%]   .search-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  margin-bottom: 6px;\n}\n\n.theme-dark[_nghost-%COMP%]   .no-events-banner[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .no-events-banner[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  padding: 14px 18px;\n  border-radius: 12px;\n  text-align: center;\n  background: #1f2a22;\n  border: 1px solid #2e7d32;\n  color: #a5d6a7;\n  font-size: 14px;\n  font-weight: 600;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n}\n.theme-dark[_nghost-%COMP%]   .search-section[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .search-section[_ngcontent-%COMP%] {\n  background: #1c1c1c;\n}\n.theme-dark[_nghost-%COMP%]   .search-section[_ngcontent-%COMP%]   .search-label[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .search-section[_ngcontent-%COMP%]   .search-label[_ngcontent-%COMP%] {\n  color: #eee;\n}\n.theme-dark[_nghost-%COMP%]   .search-section[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder, .theme-dark   [_nghost-%COMP%]   .search-section[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\n  color: #aaa;\n}\n\n@keyframes _ngcontent-%COMP%_searchPulse {\n  0% {\n    transform: scale(0.98);\n    opacity: 0.8;\n  }\n  50% {\n    transform: scale(1.02);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n\n.suggestions[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  margin-top: 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n\n.suggestion-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  cursor: pointer;\n}\n.suggestion-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 8px;\n}\n.suggestion-item[_ngcontent-%COMP%]:hover {\n  background: #f1f1f1;\n}\n\n\n\n\n\n\n\n.event-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px;\n  margin-bottom: 8px;\n  border-radius: 10px;\n  background: #f5f7fa;\n  transition: all 0.2s ease;\n}\n.event-card[_ngcontent-%COMP%]:active {\n  transform: scale(0.97);\n}\n\n.event-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n}\n\n\n\n.event-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n\n\n.event-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.event-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.event-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #777;\n  margin-top: 2px;\n}\n\n\n\n\n\n\n\n.upcoming-section[_ngcontent-%COMP%] {\n  background: #f6f8fb;\n  border-radius: 14px;\n  padding: 14px;\n}\n\n\n\n.upcoming-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n\n\n\n.upcoming-card[_ngcontent-%COMP%] {\n  background: white;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\n  animation: _ngcontent-%COMP%_slideUpFade 0.5s ease forwards;\n  opacity: 0;\n}\n\n.upcoming-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.05s;\n}\n\n.upcoming-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.1s;\n}\n\n.upcoming-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.15s;\n}\n\n.upcoming-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.2s;\n}\n\n\n\n.tree-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 999px;\n  background: #2e7d32;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  margin: 12px 0 16px;\n}\n.tree-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.share-btn[_ngcontent-%COMP%] {\n  font-size: 14px;\n  background: #e0f2f1;\n  border: none;\n  padding: 6px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  min-width: 36px;\n  min-height: 36px;\n  position: relative;\n  overflow: hidden;\n}\n.share-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.85);\n  background: #b2dfdb;\n  box-shadow: 0 0 6px rgba(46, 125, 50, 0.4);\n}\n.share-btn[_ngcontent-%COMP%]:hover {\n  background: #b2dfdb;\n}\n.share-btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.share-btn[_ngcontent-%COMP%]:active::after {\n  width: 80px;\n  height: 80px;\n  transition: 0.3s;\n}\n.share-btn.whatsapp[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  background: #e8f5e9;\n  border: 1px solid #c8e6c9;\n  border-radius: 10px;\n  padding: 0;\n}\n.share-btn.whatsapp[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  display: block;\n  transform: translateY(0px);\n}\n.share-btn.whatsapp[_ngcontent-%COMP%]:active {\n  transform: scale(0.85);\n}\n.share-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n\n@keyframes _ngcontent-%COMP%_slideUpFade {\n  from {\n    transform: translateY(10px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@media (max-width: 480px) {\n  .home-container[_ngcontent-%COMP%] {\n    padding: 12px 8px;\n  }\n  .home-content[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  \n\n  .today-section[_ngcontent-%COMP%], .search-section[_ngcontent-%COMP%], .upcoming-section[_ngcontent-%COMP%] {\n    margin-bottom: 12px;\n  }\n  .today-section[_ngcontent-%COMP%], .upcoming-section[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  \n\n  .today-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 8px;\n  }\n  .upcoming-title[_ngcontent-%COMP%] {\n    font-size: 14.5px;\n    gap: 6px;\n    margin-bottom: 10px;\n  }\n  .section-subtitle[_ngcontent-%COMP%] {\n    font-size: 13px;\n    margin-bottom: 6px;\n  }\n  \n\n  .event-card[_ngcontent-%COMP%] {\n    padding: 8px;\n    gap: 10px;\n    margin-bottom: 8px;\n  }\n  .event-card[_ngcontent-%COMP%]:active {\n    transform: scale(0.97);\n  }\n  \n\n  .event-img[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  \n\n  .event-name[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .event-date[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  \n\n  .search-section[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 14px;\n  }\n  \n\n  .suggestion-item[_ngcontent-%COMP%] {\n    padding: 6px;\n  }\n  .suggestion-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n  .suggestion-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  \n\n  .tree-btn[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 14px;\n  }\n}\n.no-events-banner[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  padding: 14px 18px;\n  border-radius: 12px;\n  text-align: center;\n  background: rgba(46, 125, 50, 0.08);\n  border: 1px solid rgba(46, 125, 50, 0.15);\n  color: #2e7d32;\n  font-size: 14px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksc0JBQUE7QUFFSjs7QUFDQSxrQkFBQTtBQUNBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBLHFCQUFBO0FBQ0E7OztFQUdJLFdBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUNBLDhDQUFBO0FBQ0EscUJBQUE7QUFDQSw4Q0FBQTtBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSxzREFBQTtBQUFKOztBQUdBO0VBQ0k7SUFDSSxzQ0FBQTtFQUFOO0VBR0U7SUFDSSw0Q0FBQTtFQUROO0FBQ0Y7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQSw4Q0FBQTtBQUNBLGNBQUE7QUFDQSw4Q0FBQTtBQUVBO0VBRUksbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFFQSwwQ0FBQTtFQUVBLHlCQUFBO0VBRUEsZ0NBQUE7QUFSSjtBQVVJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFSUjtBQVVRO0VBQ0kscUJBQUE7QUFSWjtBQVlJO0VBQ0ksNkNBQUE7QUFWUjtBQWFJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVhSOztBQWtCSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlD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QSxZQUFBO0FBakRSOztBQXVEQTtFQUNJO0lBQ0ksMkJBQUE7SUFDQSxVQUFBO0VBcEROO0VBdURFO0lBQ0ksd0JBQUE7SUFDQSxVQUFBO0VBckROO0FBQ0Y7QUF3REE7RUFFSTtJQUNJLGlCQUFBO0VBdkROO0VBMERFO0lBQ0ksZUFBQTtFQXhETjtFQTJERSxzQkFBQTtFQUNBOzs7SUFHSSxtQkFBQTtFQXpETjtFQTRERTs7SUFFSSxhQUFBO0VBMUROO0VBNkRFLGFBQUE7RUFDQTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtFQTNETjtFQThERTtJQUNJLGlCQUFBO0lBQ0EsUUFBQTtJQUNBLG1CQUFBO0VBNUROO0VBK0RFO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBN0ROO0VBZ0VFLHlCQUFBO0VBQ0E7SUFDSSxZQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0VBOUROO0VBZ0VNO0lBQ0ksc0JBQUE7RUE5RFY7RUFrRUUsNkJBQUE7RUFDQTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBaEVOO0VBbUVFLHNCQUFBO0VBQ0E7SUFDSSxlQUFBO0VBakVOO0VBb0VFO0lBQ0ksZUFBQTtFQWxFTjtFQXFFRSxtQkFBQTtFQUNBO0lBQ0ksYUFBQTtJQUNBLGVBQUE7RUFuRU47RUFzRUUsa0JBQUE7RUFDQTtJQUNJLFlBQUE7RUFwRU47RUFzRU07SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQXBFVjtFQXVFTTtJQUNJLGVBQUE7RUFyRVY7RUF5RUUsYUFBQTtFQUNBO0lBQ0ksYUFBQTtJQUNBLGVBQUE7RUF2RU47QUFDRjtBQTBFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXhFSiIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogw6LCnMKFIFJPT1QgTEFZT1VUICovXHJcbi5ob21lLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDEycHg7XHJcbn1cclxuXHJcbi5ob21lLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDUyMHB4O1xyXG59XHJcblxyXG4vKiDDosKcwoUgQ09NTU9OIFNFQ1RJT04gKi9cclxuLnRvZGF5LXNlY3Rpb24sXHJcbi5zZWFyY2gtc2VjdGlvbixcclxuLnVwY29taW5nLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKiDDsMKfwozCnyBUT0RBWSBTRUNUSU9OICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4udG9kYXktc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlM2NkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcblxyXG4gICAgYW5pbWF0aW9uOiB0b2RheUdsb3cgNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHRvZGF5R2xvdyB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgcmdiYSgyNTUsIDE5MywgNywgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDE4cHggcmdiYSgyNTUsIDE5MywgNywgMC4yNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b2RheS10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1zdWJ0aXRsZSB7XHJcbiAgICBtYXJnaW46IDEycHggMCA2cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxufVxyXG5cclxuLnRvbW9ycm93LXRleHQge1xyXG4gICAgY29sb3I6ICNkMzJmMmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLyogw7DCn8KUwo0gU0VBUkNIICovXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4uc2VhcmNoLXNlY3Rpb24ge1xyXG5cclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBzZWFyY2hQdWxzZSAxLjVzIGVhc2U7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMThweCByZ2JhKDQ2LCAxMjUsIDUwLCAwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG46aG9zdC1jb250ZXh0KC50aGVtZS1kYXJrKSB7XHJcblxyXG4gICAgLm5vLWV2ZW50cy1iYW5uZXIge1xyXG4gICAgICAgIG1hcmdpbjogMTZweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHggMThweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMWYyYTIyO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyZTdkMzI7XHJcbiAgICAgICAgY29sb3I6ICNhNWQ2YTc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xyXG5cclxuICAgICAgICAuc2VhcmNoLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6ICNlZWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBzZWFyY2hQdWxzZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogc3VnZ2VzdGlvbnMgKi9cclxuLnN1Z2dlc3Rpb25zIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnN1Z2dlc3Rpb24taXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIH1cclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLyogw7DCn8KOwrQgQ09NTU9OIEVWRU5UIENBUkQgKFVTRUQgSU4gVE9EQVkgKyBVUENPTUlORykgKi9cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5ldmVudC1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG5cclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY3ZmE7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcclxuICAgIH1cclxufVxyXG5cclxuLmV2ZW50LWNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxufVxyXG5cclxuLyogw6LCnMKFIElNQUdFIChzaW5nbGUgZGVmaW5pdGlvbiBub3cpICovXHJcbi5ldmVudC1pbWcge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLyogw6LCnMKFIFRFWFQgKi9cclxuLmV2ZW50LWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLy8gw7DCn8KUwqUgaW1wb3J0YW50XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uZXZlbnQtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZXZlbnQtZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLyogw7DCn8KUwpwgVVBDT01JTkcgU0VDVElPTiAqL1xyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLnVwY29taW5nLXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjhmYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxNHB4O1xyXG59XHJcblxyXG4vKiDDosKcwoUgVGl0bGUgYWxpZ25lZCBwcm9wZXJseSAqL1xyXG4udXBjb21pbmctdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLyogw6LCnMKFIGNhcmQgdmFyaWF0aW9uICovXHJcbi51cGNvbWluZy1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwRmFkZSAwLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4udXBjb21pbmctY2FyZDpudGgtY2hpbGQoMSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjA1cztcclxufVxyXG5cclxuLnVwY29taW5nLWNhcmQ6bnRoLWNoaWxkKDIpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcclxufVxyXG5cclxuLnVwY29taW5nLWNhcmQ6bnRoLWNoaWxkKDMpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xNXM7XHJcbn1cclxuXHJcbi51cGNvbWluZy1jYXJkOm50aC1jaGlsZCg0KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XHJcbn1cclxuXHJcbi8qIMOwwp/CjMKzIEJVVFRPTiAqL1xyXG4udHJlZS1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmU3ZDMyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAxMnB4IDAgMTZweDsgLy8gw6LCnMKFIHNwYWNpbmcgYmV0d2VlbiBzZWFyY2ggJiB1cGNvbWluZ1xyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNoYXJlLWJ0biB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgYmFja2dyb3VuZDogI2UwZjJmMTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDsgLy8gYmlnZ2VyIHRhcCBhcmVhXHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgbWluLXdpZHRoOiAzNnB4O1xyXG4gICAgbWluLWhlaWdodDogMzZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2IyZGZkYjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgNnB4IHJnYmEoNDYsIDEyNSwgNTAsIDAuNCk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2IyZGZkYjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmU6OmFmdGVyIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIH1cclxuXHJcbiAgICAmLndoYXRzYXBwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgICAgIGhlaWdodDogMzhweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U4ZjVlOTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhlNmM5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDA7IC8vIMOwwp/ClMKlIElNUE9SVEFOVFxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgLy8gw7DCn8KUwqUgdmVyeSBpbXBvcnRhbnQgKGlubGluZSBpc3N1ZSBmaXgpXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpOyAvLyB0d2VhayBpZiBuZWVkZWRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlVXBGYWRlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcblxyXG4gICAgLmhvbWUtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDhweDsgLy8gw6LCnMKFIHJlZHVjZSBzaWRlIHNwYWNlXHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWUtY29udGVudCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIMOiwpzChSBzZWN0aW9uIHNwYWNpbmcgKi9cclxuICAgIC50b2RheS1zZWN0aW9uLFxyXG4gICAgLnNlYXJjaC1zZWN0aW9uLFxyXG4gICAgLnVwY29taW5nLXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvZGF5LXNlY3Rpb24sXHJcbiAgICAudXBjb21pbmctc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweDsgLy8gw6LCnMKFIHRpZ2h0ZXIgcGFkZGluZ1xyXG4gICAgfVxyXG5cclxuICAgIC8qIMOiwpzChSBUaXRsZXMgKi9cclxuICAgIC50b2RheS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAudXBjb21pbmctdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQuNXB4O1xyXG4gICAgICAgIGdhcDogNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24tc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLyogw6LCnMKFIGV2ZW50IGNhcmQgY29tcGFjdCAqL1xyXG4gICAgLmV2ZW50LWNhcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIMOiwpzChSBpbWFnZSBzbGlnaHRseSBzbWFsbGVyICovXHJcbiAgICAuZXZlbnQtaW1nIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLyogw6LCnMKFIHRleHQgc2NhbGUgZG93biAqL1xyXG4gICAgLmV2ZW50LW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuXHJcbiAgICAuZXZlbnQtZGF0ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIMOiwpzChSBzZWFyY2ggaW5wdXQgKi9cclxuICAgIC5zZWFyY2gtc2VjdGlvbiBpbnB1dCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLyogw6LCnMKFIHN1Z2dlc3Rpb25zICovXHJcbiAgICAuc3VnZ2VzdGlvbi1pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiDDosKcwoUgYnV0dG9uICovXHJcbiAgICAudHJlZS1idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubm8tZXZlbnRzLWJhbm5lciB7XHJcbiAgICBtYXJnaW46IDE2cHggMDtcclxuICAgIHBhZGRpbmc6IDE0cHggMThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ2LCAxMjUsIDUwLCAwLjA4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNDYsIDEyNSwgNTAsIDAuMTUpO1xyXG4gICAgY29sb3I6ICMyZTdkMzI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8687:
/*!***********************************************************************!*\
  !*** ./src/app/components/info-and-stats/info-and-stats.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoAndStatsComponent: () => (/* binding */ InfoAndStatsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/helper-functions */ 9348);
/* harmony import */ var src_assets_data_bakshi_parivar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/data/bakshi-parivar */ 6037);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function InfoAndStatsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InfoAndStatsComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.closeAppInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InfoAndStatsComponent_div_0_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InfoAndStatsComponent_div_0_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.closeAppInfo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " \u2715 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\uD83C\uDF33 Bakshi Parivar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\uD83D\uDE80 Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\uD83D\uDCC5 Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 5)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\uD83D\uDD04 Last Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 6)(23, "div", 7)(24, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Members");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 7)(31, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\uD83C\uDF82");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Birthdays");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 7)(38, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "\uD83D\uDC8D");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Anniversaries");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 7)(45, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "\uD83D\uDD6F\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Remembrances");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 7)(52, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "\uD83D\uDDBC\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, " Handcrafted with \u2764\uFE0F by Vicky ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.startedDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.lastUpdated);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.totalMembers);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.totalBirthdays);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.totalAnniversaries);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.totalRemembrances);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r0.totalPhotos, " / ", ctx_r0.totalMembers, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Photos (", ctx_r0.photoCoverage, "%) ");
  }
}
class InfoAndStatsComponent {
  constructor() {
    this.showAppInfoModal = false;
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.totalMembers = 0;
    this.totalBirthdays = 0;
    this.totalAnniversaries = 0;
    this.totalRemembrances = 0;
    this.totalPhotos = 0;
    this.photoCoverage = 0;
    this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appInfo.version;
    this.startedDate = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appInfo.startedDate;
    this.lastUpdated = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.appInfo.lastUpdated;
  }
  ngOnInit() {
    this.stats();
  }
  stats() {
    const ancestors = src_assets_data_bakshi_parivar__WEBPACK_IMPORTED_MODULE_1__["default"].ancestors;
    const allMembers = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_0__.flattenMembers)(ancestors);
    const {
      births,
      deaths,
      anniversaries
    } = (0,src_app_shared_helper_functions__WEBPACK_IMPORTED_MODULE_0__.collectFamilyEvents)(ancestors);
    this.totalMembers = allMembers.length;
    this.totalBirthdays = births.length;
    this.totalRemembrances = deaths.length;
    this.totalAnniversaries = anniversaries.length;
    this.totalPhotos = allMembers.filter(x => !!x.image).length;
    this.photoCoverage = Math.round(this.totalPhotos / this.totalMembers * 100);
  }
  closeAppInfo() {
    this.close.emit();
  }
  static {
    this.ɵfac = function InfoAndStatsComponent_Factory(t) {
      return new (t || InfoAndStatsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: InfoAndStatsComponent,
      selectors: [["app-info-and-stats"]],
      inputs: {
        showAppInfoModal: "showAppInfoModal"
      },
      outputs: {
        close: "close"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "app-info-backdrop", 3, "click", 4, "ngIf"], [1, "app-info-backdrop", 3, "click"], [1, "app-info-modal", 3, "click"], [1, "close-modal-btn", 3, "click"], [1, "app-info-section"], [1, "info-row"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon"], [1, "stat-value"], [1, "stat-label"], [1, "crafted-footer"]],
      template: function InfoAndStatsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, InfoAndStatsComponent_div_0_Template, 60, 10, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showAppInfoModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: [".app-info-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99999;\n}\n\n.app-info-modal[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(92vw, 480px);\n  background: #fff;\n  border-radius: 20px;\n  padding: 24px;\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);\n  animation: _ngcontent-%COMP%_appInfoFade 0.25s ease;\n}\n.app-info-modal[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: #2e7d32;\n  font-weight: 700;\n  text-align: center;\n}\n\n.close-modal-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  font-size: 18px;\n}\n\n.app-info-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 0;\n  border-bottom: 1px solid #ececec;\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n  margin-top: 16px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: #f5f7fb;\n  border-radius: 14px;\n  padding: 14px;\n  text-align: center;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 6px 0;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n}\n\n.crafted-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n  color: #666;\n  font-size: 13px;\n}\n\n@keyframes _ngcontent-%COMP%_appInfoFade {\n  from {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.theme-dark[_nghost-%COMP%]   .app-info-modal[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .app-info-modal[_ngcontent-%COMP%] {\n  background: #1f1f1f;\n  color: #fff;\n}\n.theme-dark[_nghost-%COMP%]   .info-row[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .info-row[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.theme-dark[_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .stat-card[_ngcontent-%COMP%] {\n  background: #2d2d2d;\n}\n.theme-dark[_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .stat-label[_ngcontent-%COMP%], .theme-dark[_nghost-%COMP%]   .crafted-footer[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .crafted-footer[_ngcontent-%COMP%] {\n  color: #bbb;\n}\n.theme-dark[_nghost-%COMP%]   .close-modal-btn[_ngcontent-%COMP%], .theme-dark   [_nghost-%COMP%]   .close-modal-btn[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbmZvLWFuZC1zdGF0cy9pbmZvLWFuZC1zdGF0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0EsaUNBQUE7QUFDSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFHQTtFQUVJO0lBQ0ksVUFBQTtJQUNBLHNCQUFBO0VBRE47RUFJRTtJQUNJLFVBQUE7SUFDQSxtQkFBQTtFQUZOO0FBQ0Y7QUFNSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQUpSO0FBT0k7RUFDSSw4Q0FBQTtBQUxSO0FBUUk7RUFDSSxtQkFBQTtBQU5SO0FBU0k7O0VBRUksV0FBQTtBQVBSO0FBVUk7RUFDSSxXQUFBO0FBUlIiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWluZm8tYmFja2Ryb3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaW5zZXQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG59XHJcblxyXG4uYXBwLWluZm8tbW9kYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IG1pbig5MnZ3LCA0ODBweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYW5pbWF0aW9uOiBhcHBJbmZvRmFkZSAuMjVzIGVhc2U7XHJcblxyXG4gICAgJiBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgICAgICBjb2xvcjogIzJlN2QzMjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmNsb3NlLW1vZGFsLWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICByaWdodDogMTRweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uYXBwLWluZm8tc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaW5mby1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VjZWM7XHJcbn1cclxuXHJcbi5zdGF0cy1ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLnN0YXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmN2ZiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uc3RhdC12YWx1ZSB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luOiA2cHggMDtcclxufVxyXG5cclxuLnN0YXQtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi5jcmFmdGVkLWZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYXBwSW5mb0ZhZGUge1xyXG5cclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0LWNvbnRleHQoLnRoZW1lLWRhcmspIHtcclxuICAgIC5hcHAtaW5mby1tb2RhbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzFmMWYxZjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mby1yb3cge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA4KTtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdC1jYXJkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMmQyZDJkO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGF0LWxhYmVsLFxyXG4gICAgLmNyYWZ0ZWQtZm9vdGVyIHtcclxuICAgICAgICBjb2xvcjogI2JiYjtcclxuICAgIH1cclxuXHJcbiAgICAuY2xvc2UtbW9kYWwtYnRuIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 801:
/*!*********************************************************************!*\
  !*** ./src/app/components/welcome-modal/welcome-modal.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomeModalComponent: () => (/* binding */ WelcomeModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class WelcomeModalComponent {
  constructor() {
    this.closeModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isClosing = false;
  }
  close() {
    this.closeModal.emit();
  }
  onVideoEnd() {
    this.isClosing = true;
    setTimeout(() => {
      this.close();
    }, 400);
  }
  static {
    this.ɵfac = function WelcomeModalComponent_Factory(t) {
      return new (t || WelcomeModalComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeModalComponent,
      selectors: [["app-welcome-modal"]],
      outputs: {
        closeModal: "closeModal"
      },
      decls: 9,
      vars: 4,
      consts: [[1, "modal-backdrop", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-heading"], ["controls", "", "autoplay", "", 1, "modal-video", 3, "ended"], ["videoPlayer", ""], ["src", "assets/videos/maa-message.mp4", "type", "video/mp4"], [1, "close-btn", 3, "click"]],
      template: function WelcomeModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeModalComponent_Template_div_click_0_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeModalComponent_Template_div_click_1_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \uD83D\uDCAC \u092E\u093E\u0901 \u0915\u093E \u0938\u0902\u0926\u0947\u0936 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "video", 3, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ended", function WelcomeModalComponent_Template_video_ended_4_listener() {
            return ctx.onVideoEnd();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeModalComponent_Template_button_click_7_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("closing", ctx.isClosing);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("closing", ctx.isClosing);
        }
      },
      styles: [".modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 1;\n  transition: opacity 0.4s ease;\n}\n.modal-backdrop.closing[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scale(1);\n  transition: all 0.4s ease;\n}\n.modal-content.closing[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(0.95);\n}\n\n.modal-video[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  border-radius: 10px;\n}\n\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background: white;\n  border: none;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n\n.modal-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  margin-bottom: 12px;\n  color: #5c3d00;\n  \n\n  background: linear-gradient(90deg, #ffcc80, #ffb74d);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lLW1vZGFsL3dlbGNvbWUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBQUo7QUFFSTtFQUNJLFVBQUE7QUFBUjs7QUFJQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBREo7QUFHSTtFQUNJLFVBQUE7RUFDQSxzQkFBQTtBQURSOztBQUtBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0FBTEo7O0FBUUE7RUFDSSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLHdCQUFBO0VBQ0Esb0RBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0FBVEoiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYmFja2Ryb3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaW5zZXQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2U7XHJcblxyXG4gICAgJi5jbG9zaW5nIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcblxyXG4gICAgJi5jbG9zaW5nIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tb2RhbC12aWRlbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNsb3NlLWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgcmlnaHQ6IC0xMHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG5cclxuICAgIGNvbG9yOiAjNWMzZDAwO1xyXG5cclxuICAgIC8qIHNvZnQgZW1vdGlvbmFsIGZlZWwgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmY2M4MCwgI2ZmYjc0ZCk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9348:
/*!********************************************!*\
  !*** ./src/app/shared/helper-functions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HIGHLIGHT_DURATION_MS: () => (/* binding */ HIGHLIGHT_DURATION_MS),
/* harmony export */   HIGHLIGHT_STYLES: () => (/* binding */ HIGHLIGHT_STYLES),
/* harmony export */   MS_PER_DAY: () => (/* binding */ MS_PER_DAY),
/* harmony export */   SHARE_BASE_URL: () => (/* binding */ SHARE_BASE_URL),
/* harmony export */   anniversaryMessages: () => (/* binding */ anniversaryMessages),
/* harmony export */   birthdayMessages: () => (/* binding */ birthdayMessages),
/* harmony export */   cleanUrlQueryParams: () => (/* binding */ cleanUrlQueryParams),
/* harmony export */   clearHighlight: () => (/* binding */ clearHighlight),
/* harmony export */   collectFamilyEvents: () => (/* binding */ collectFamilyEvents),
/* harmony export */   createWhatsAppLink: () => (/* binding */ createWhatsAppLink),
/* harmony export */   findElementByDataName: () => (/* binding */ findElementByDataName),
/* harmony export */   flattenMembers: () => (/* binding */ flattenMembers),
/* harmony export */   getCurrentRoutePath: () => (/* binding */ getCurrentRoutePath),
/* harmony export */   getDailyMessage: () => (/* binding */ getDailyMessage),
/* harmony export */   getDisplayName: () => (/* binding */ getDisplayName),
/* harmony export */   getHighlightName: () => (/* binding */ getHighlightName),
/* harmony export */   getImageSrc: () => (/* binding */ getImageSrc),
/* harmony export */   getNextOccurrence: () => (/* binding */ getNextOccurrence),
/* harmony export */   getParsedLocalStorage: () => (/* binding */ getParsedLocalStorage),
/* harmony export */   getSafeLocalStorage: () => (/* binding */ getSafeLocalStorage),
/* harmony export */   getShortNames: () => (/* binding */ getShortNames),
/* harmony export */   getTodayDateString: () => (/* binding */ getTodayDateString),
/* harmony export */   getTodayEvents: () => (/* binding */ getTodayEvents),
/* harmony export */   getUpcomingEventsGrouped: () => (/* binding */ getUpcomingEventsGrouped),
/* harmony export */   groupEventsByMonth: () => (/* binding */ groupEventsByMonth),
/* harmony export */   hasAnyItems: () => (/* binding */ hasAnyItems),
/* harmony export */   highlightElement: () => (/* binding */ highlightElement),
/* harmony export */   monthOrder: () => (/* binding */ monthOrder),
/* harmony export */   normalizeToday: () => (/* binding */ normalizeToday),
/* harmony export */   parseDate: () => (/* binding */ parseDate),
/* harmony export */   processUpcomingEvent: () => (/* binding */ processUpcomingEvent),
/* harmony export */   remembranceMessages: () => (/* binding */ remembranceMessages),
/* harmony export */   setSafeLocalStorage: () => (/* binding */ setSafeLocalStorage),
/* harmony export */   shareEventOnWhatsApp: () => (/* binding */ shareEventOnWhatsApp),
/* harmony export */   smoothScrollToElement: () => (/* binding */ smoothScrollToElement),
/* harmony export */   trackById: () => (/* binding */ trackById),
/* harmony export */   trackByIndex: () => (/* binding */ trackByIndex),
/* harmony export */   trackByName: () => (/* binding */ trackByName),
/* harmony export */   trackEvent: () => (/* binding */ trackEvent),
/* harmony export */   trackNavigationEvent: () => (/* binding */ trackNavigationEvent),
/* harmony export */   trackShareEvent: () => (/* binding */ trackShareEvent)
/* harmony export */ });
// ============== CONSTANTS ==============
/**
 * Pre-configured share templates
 */
const birthdayMessages = ['🎂 आज _*{name}*_ जी का जन्मदिन है।\n\nबक्शी परिवार की ओर से उन्हें ढेर सारी शुभकामनाएँ एवं आशीर्वाद। 🌸', '🎉 आज _*{name}*_ जी का जन्मदिन है।\n\nईश्वर उन्हें सदा स्वस्थ, सुखी और सफल रखें। 🙏', '🌷 _*{name}*_ जी को जन्मदिन की ढेर सारी शुभकामनाएँ। उनका जीवन खुशियों से भरा रहे। 🎂', '🎈 आज का दिन विशेष है। _*{name}*_ जी को जन्मदिन की हार्दिक बधाई। 😊', '🎂 बक्शी परिवार की ओर से _*{name}*_ जी को जन्मदिन की बहुत-बहुत शुभकामनाएँ। ❤️'];
const anniversaryMessages = ['💍 _*{name}*_ जी को विवाह वर्षगाँठ की हार्दिक शुभकामनाएँ। 🌸', '🎉 आज _*{name}*_ जी की शादी की सालगिरह है। ईश्वर उनका साथ हमेशा खुशियों से भरा रखे। 🙏', '💐 _*{name}*_ जी को वैवाहिक जीवन की इस सुंदर वर्षगाँठ पर ढेरों शुभकामनाएँ।', '❤️ विवाह वर्षगाँठ के अवसर पर _*{name}*_ जी को सुख, समृद्धि और अच्छे स्वास्थ्य की शुभकामनाएँ।', '💍 बक्शी परिवार की ओर से _*{name}*_ जी को वर्षगाँठ की हार्दिक बधाई। 🎊'];
const remembranceMessages = ['🕯️ आज _*{name}*_ जी की पुण्यतिथि है।\n\nविनम्र श्रद्धांजलि। 🙏', '🌼 आज हम श्रद्धापूर्वक _*{name}*_ जी को स्मरण करते हैं।\n\nॐ शांति। 🙏', '🙏 _*{name}*_ जी की पावन स्मृतियों को नमन।\n\nविनम्र श्रद्धांजलि।', '🕯️ आज _*{name}*_ जी की पुण्यतिथि पर उन्हें भावपूर्ण श्रद्धांजलि अर्पित करते हैं।', '🌺 श्रद्धा और सम्मान के साथ आज _*{name}*_ जी को याद करते हैं।\n\nॐ शांति। 🙏'];
const monthOrder = ['Hindi Tithi', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const HIGHLIGHT_DURATION_MS = 4000;
const HIGHLIGHT_STYLES = {
  outline: '4px solid #ffd700',
  outlineOffset: '3px',
  boxShadow: '0 0 18px rgba(255,215,0,0.8)'
};
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const SHARE_BASE_URL = 'https://rishabhkbakshi.github.io';
const parseDate = str => {
  const [dayStr, monStr] = str.toLowerCase().split(/\s+/);
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  const mIdx = months.findIndex(m => monStr?.startsWith(m));
  return mIdx > -1 && !isNaN(Number(dayStr)) ? new Date(new Date().getFullYear(), mIdx, Number(dayStr)) : new Date(NaN);
};
const normalizeToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};
const getDailyMessage = messages => {
  const today = new Date();
  const seed = today.getDate() + today.getMonth() + today.getFullYear();
  return messages[seed % messages.length];
};
const flattenMembers = members => {
  return members.reduce((all, member) => {
    all.push(member);
    if (member.children) {
      all.push(...flattenMembers(member.children));
    }
    return all;
  }, []);
};
const collectFamilyEvents = members => {
  const births = [];
  const deaths = [];
  const anniversaries = [];
  const push = (event, target) => {
    if (event) {
      target.push(event);
    }
  };
  const collect = member => {
    push(member.dateOfBirth ? {
      name: member.name,
      date: member.dateOfBirth,
      image: member.image
    } : null, births);
    push(member.dateOfDeath ? {
      name: member.name,
      date: member.dateOfDeath,
      image: member.image
    } : null, deaths);
    if (member.dateOfAnniversary) {
      anniversaries.push({
        name: member.spouse ? `${member.name} & ${member.spouse}` : member.name,
        date: member.dateOfAnniversary,
        image: member.image,
        highlightName: member.name
      });
    }
    push(member.spouseDateOfBirth ? {
      name: member.spouse ?? '',
      date: member.spouseDateOfBirth,
      image: member.image,
      highlightName: member.name
    } : null, births);
    push(member.spouseDateOfDeath ? {
      name: member.spouse ?? '',
      date: member.spouseDateOfDeath,
      image: member.image,
      highlightName: member.name
    } : null, deaths);
    member.children?.forEach(collect);
  };
  members.forEach(collect);
  return {
    births,
    deaths,
    anniversaries
  };
};
const groupEventsByMonth = events => {
  return events.reduce((grouped, event) => {
    const date = parseDate(event.date);
    const month = isNaN(date.getTime()) ? monthOrder[0] : monthOrder[date.getMonth() + 1];
    const day = isNaN(date.getTime()) ? event.date : date.getDate().toString().padStart(2, '0');
    grouped[month] ??= {};
    grouped[month][day] ??= [];
    grouped[month][day].push({
      name: event.name,
      image: event.image,
      highlightName: event.highlightName
    });
    return grouped;
  }, {});
};
const getNextOccurrence = (dateString, today) => {
  const date = parseDate(dateString);
  if (isNaN(date.getTime())) {
    return null;
  }
  const occurrence = new Date(today.getFullYear(), date.getMonth(), date.getDate());
  if (occurrence < today) {
    occurrence.setFullYear(today.getFullYear() + 1);
  }
  return occurrence;
};
// ============== NAME & STRING UTILITIES ==============
/**
 * Extract short names from "John & Jane" format (e.g., "J & J")
 */
const getShortNames = fullName => {
  const parts = fullName.split('&');
  const first = parts[0].trim().split(' ')[0];
  const second = parts[1]?.trim().split(' ')[0] || '';
  return `${first} & ${second}`;
};
/**
 * Get display name - returns short version if contains "&", otherwise full name
 */
const getDisplayName = name => {
  return name.includes('&') ? getShortNames(name) : name;
};
/**
 * Get the highlight name from an item (fallback to name if no highlightName)
 */
const getHighlightName = item => {
  return item.highlightName || item.name;
};
/**
 * Check if any array has items
 */
const hasAnyItems = (...arrays) => {
  return arrays.some(arr => arr.length > 0);
};
// ============== IMAGE & ASSET UTILITIES ==============
/**
 * Get valid image source or default
 */
const getImageSrc = (imageSrc, defaultPath = '/assets/images/default.png') => {
  return imageSrc && imageSrc !== 'no need' ? imageSrc : defaultPath;
};
// ============== STORAGE UTILITIES ==============
/**
 * Safely get item from localStorage
 */
const getSafeLocalStorage = (key, defaultValue = '') => {
  try {
    return localStorage.getItem(key) || defaultValue;
  } catch {
    return defaultValue;
  }
};
/**
 * Safely set item in localStorage
 */
const setSafeLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
};
/**
 * Safely parse JSON from localStorage
 */
const getParsedLocalStorage = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
};
/**
 * Generic event tracking function
 */
const trackEvent = (eventName, eventCategory, eventLabel) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      event_category: eventCategory,
      ...(eventLabel && {
        event_label: eventLabel
      })
    });
  }
};
/**
 * Track share events
 */
const trackShareEvent = (eventType, name) => {
  trackEvent('share_click', 'engagement', `${eventType} - ${name}`);
};
/**
 * Track navigation events
 */
const trackNavigationEvent = destination => {
  trackEvent(`${destination}_open`, 'navigation');
};
let currentlyHighlightedElement;
let highlightTimeoutId;
/**
 * Apply highlight styles to an element
 */
const highlightElement = (element, options = {}) => {
  const {
    duration = HIGHLIGHT_DURATION_MS,
    onComplete
  } = options;
  // Clear previous highlight
  clearHighlight();
  // Apply styles
  element.style.outline = HIGHLIGHT_STYLES.outline;
  element.style.outlineOffset = HIGHLIGHT_STYLES.outlineOffset;
  element.style.boxShadow = HIGHLIGHT_STYLES.boxShadow;
  currentlyHighlightedElement = element;
  // Auto-clear after duration
  highlightTimeoutId = window.setTimeout(() => {
    clearHighlight();
    onComplete?.();
  }, duration);
};
/**
 * Clear current highlight
 */
const clearHighlight = () => {
  if (currentlyHighlightedElement) {
    currentlyHighlightedElement.style.outline = 'none';
    currentlyHighlightedElement.style.boxShadow = 'none';
    currentlyHighlightedElement = undefined;
  }
  if (highlightTimeoutId) {
    window.clearTimeout(highlightTimeoutId);
    highlightTimeoutId = undefined;
  }
};
/**
 * Find element by data-name attribute
 */
const findElementByDataName = name => {
  const elements = document.querySelectorAll('[data-name]');
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if (el.getAttribute('data-name')?.toLocaleLowerCase() === name.toLocaleLowerCase()) {
      return el;
    }
  }
  return null;
};
/**
 * Smooth scroll element into view
 */
const smoothScrollToElement = element => {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
};
// ============== EVENT & SHARE UTILITIES ==============
/**
 * Create WhatsApp share URL
 */
const createWhatsAppLink = message => {
  const text = message + `\n\n👉 ${SHARE_BASE_URL}`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
};
/**
 * Share event on WhatsApp with tracking
 */
const shareEventOnWhatsApp = (name, template, eventType) => {
  trackShareEvent(eventType, name);
  const message = template.replace('{name}', name);
  const url = createWhatsAppLink(message);
  window.open(url, '_blank');
};
// ============== EVENT COLLECTION UTILITIES ==============
/**
 * Get today's events from grouped data
 */
const getTodayEvents = (groupedData, monthKey, dayKey) => {
  return groupedData[monthKey]?.[dayKey] ?? [];
};
/**
 * Get today's formatted date string
 */
const getTodayDateString = today => {
  const month = monthOrder[today.getMonth() + 1];
  const day = today.getDate().toString().padStart(2, '0');
  const formatted = `${month} ${today.getDate()}`;
  return {
    month,
    day,
    formatted
  };
};
/**
 * Process upcoming events
 */
const processUpcomingEvent = (event, eventType, today, monthOrderList = monthOrder) => {
  const occurrence = getNextOccurrence(event.date, today);
  if (!occurrence) return null;
  const diffDays = Math.round((occurrence.getTime() - today.getTime()) / MS_PER_DAY);
  if (diffDays <= 0 || diffDays > 30) return null;
  return {
    ...event,
    highlightName: event.highlightName,
    type: eventType,
    timestamp: occurrence.getTime(),
    formattedDate: `${monthOrderList[occurrence.getMonth() + 1]} ${occurrence.getDate()} ${diffDays === 1 ? '(Tomorrow)' : ''}`
  };
};
/**
 * Process all upcoming events
 */
const getUpcomingEventsGrouped = (births, deaths, anniversaries, today, monthOrderList = monthOrder) => {
  const processEvents = (events, type) => {
    return events.map(event => processUpcomingEvent(event, type, today, monthOrderList)).filter(event => event !== null).sort((a, b) => a.timestamp - b.timestamp);
  };
  return {
    birthdays: processEvents(births, '🎂'),
    remembrances: processEvents(deaths, '🕯️'),
    anniversaries: processEvents(anniversaries, '💍')
  };
};
// ============== TRACKBY FUNCTIONS ==============
/**
 * TrackBy function for ngFor loops
 */
const trackByName = (_index, item) => item.name;
const trackByIndex = index => index;
const trackById = (_index, item) => item.id || item.name;
// ============== URL & NAVIGATION UTILITIES ==============
/**
 * Clean URL query params
 */
const cleanUrlQueryParams = () => {
  window.history.replaceState({}, '', window.location.pathname);
};
/**
 * Get current route path
 */
const getCurrentRoutePath = () => {
  return window.location.pathname + window.location.search;
};

/***/ }),

/***/ 2017:
/*!********************************************************!*\
  !*** ./src/app/shared/pipes/split-description.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SplitDescriptionPipe: () => (/* binding */ SplitDescriptionPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class SplitDescriptionPipe {
  transform(value, type) {
    return this.finalKidDescriptionArray(value, type);
  }
  finalKidDescriptionArray(desp, type) {
    if (!desp) return null;
    const splitByMatch = match => {
      if (match[1] !== undefined && match[2] !== undefined && match[3] !== undefined) {
        return [match[1].trim(), match[2].trim(), match[3].trim()];
      }
      if (match.index === undefined) return null;
      const value = match[1] || match[0];
      const start = match[1] ? match.index + 1 : match.index;
      const end = start + value.length;
      return [desp.substring(0, start).trim(), value.trim(), desp.substring(end).trim()];
    };
    const patterns = {
      kidDescription: /^([★\s]+)([^—]+)—(.*)$/,
      spouseDescription: /^([★\s]+)([^—]+)—(.*)$/,
      coupleDescription: /\bLate\s+[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*(?:\s+ji)?(?=\s+[a-z]|[.,]|$)/
    };
    const regex = patterns[type];
    if (!regex) return null;
    const match = desp.match(regex);
    return match ? splitByMatch(match) : [desp];
  }
  static {
    this.ɵfac = function SplitDescriptionPipe_Factory(t) {
      return new (t || SplitDescriptionPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "splitDescription",
      type: SplitDescriptionPipe,
      pure: true
    });
  }
}

/***/ }),

/***/ 3080:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/visit-counter.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisitCounterService: () => (/* binding */ VisitCounterService)
/* harmony export */ });
/* harmony import */ var F_SourceCode_GitHub_rishabhkbakshi_Angular_bakshi_parivar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class VisitCounterService {
  constructor() {
    this.baseURL = 'https://countapi.mileshilliard.com';
    this.visitCounterKey = 'bakshi_parivar_family_tree_public_loads';
  }
  get isItOnLocalHost() {
    return ['localhost', '127.0.0.1', ''].includes(window.location.hostname);
  }
  getCounter() {
    var _this = this;
    return (0,F_SourceCode_GitHub_rishabhkbakshi_Angular_bakshi_parivar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield fetch(`${_this.baseURL}/api/v1/hit/${_this.visitCounterKey}`);
    })();
  }
  resetCounter() {
    var _this2 = this;
    return (0,F_SourceCode_GitHub_rishabhkbakshi_Angular_bakshi_parivar_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield fetch(`${_this2.baseURL}/api/v1/set/${_this2.visitCounterKey}?value=0`);
    })();
  }
  static {
    this.ɵfac = function VisitCounterService_Factory(t) {
      return new (t || VisitCounterService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: VisitCounterService,
      factory: VisitCounterService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6037:
/*!*******************************************!*\
  !*** ./src/assets/data/bakshi-parivar.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const bakshiParivar = {
  name: 'Bakshi Parivar',
  description: 'A family of Bakshis',
  ancestors: [{
    name: 'The Bakshis',
    description: '★ Ancestral root (only the entries shown below are available)',
    children: [{
      name: 'Late Champalal Ji Bakshi',
      spouse: 'Late Jethi Bai Sa',
      spouseParents: '',
      coupleDescription: '★ Virtuous Couple — who opened the doors for Late Kamla Deviji to become part of the family and laid the foundation of its values and traditions.',
      image: 'assets/images/champalal.webp',
      children: [{
        name: 'Late Manak Chand Ji Bakshi*',
        spouse: 'Late Kamla Devi',
        dateOfBirth: 'भादवा कृष्ण (बदी) दशम',
        dateOfDeath: '22 February',
        kidDescription: '★★ परंपरा,प्रतिष्ठा और अनुशासन',
        spouseDateOfBirth: 'किसी शुभ नक्षत्र की ही बात रही होगी (Data not available)',
        spouseDateOfDeath: '16 October',
        spouseDescription: '★★ सूत्रधार — An Amazing Lady who held the family together through thick and thin',
        spouseParents: {
          mom: 'Late Indra Devi',
          dad: 'Late Tulsi Ram Ji Surana'
        },
        image: 'assets/images/maa.webp',
        children: [{
          name: 'Chandrakanta Sethia (मोलू)*',
          dateOfBirth: '05 June',
          spouse: 'Late Swami Anand Prem',
          kidDescription: '★★★ विशालहृदयी — The ocean hearted person',
          spouseDateOfBirth: '02 October',
          spouseDateOfDeath: '30 October',
          spouseParents: {
            mom: 'Late Gulab devi',
            dad: 'Late Jewant Mal Sethia'
          },
          image: 'assets/images/chandrakanta.webp',
          children: [{
            name: 'Ashok Prem*',
            dateOfBirth: '22 June',
            dateOfAnniversary: '07 February',
            spouse: 'Mukta Jain',
            spouseDateOfBirth: '28 February',
            spouseParents: {
              mom: 'Pushpa Devi',
              dad: 'Late Shantilal Gang'
            },
            image: 'assets/images/ashok.webp',
            children: [{
              name: 'Juhi Jain',
              image: 'assets/images/juhi.webp',
              dateOfBirth: '10 May'
            }, {
              name: 'Pulkit Jain',
              image: 'assets/images/pulkit.webp',
              dateOfBirth: '02 December'
            }]
          }, {
            name: 'Arvind Prem (Bablu)*',
            dateOfBirth: '06 September',
            dateOfAnniversary: '18 May',
            spouse: 'Trishla Sethia',
            spouseDateOfBirth: '12 September',
            spouseParents: {
              mom: 'Sushila Lalwani',
              dad: 'Ashkaran Lalwani'
            },
            image: 'assets/images/arvind.webp',
            children: [{
              name: 'Aayush Sethia',
              image: 'assets/images/aayush.webp',
              dateOfBirth: '04 January'
            }, {
              name: 'Lakshay Sethia',
              image: 'assets/images/lakshay.webp',
              dateOfBirth: '18 January'
            }]
          }]
        }, {
          name: 'Late Lalit Kumar Bakshi (Lalji)*',
          dateOfBirth: 'मिगसर शुक्ल (सुदी) एकादशी',
          dateOfDeath: '08 February',
          kidDescription: '★★★ उदारहृदय — The richest hearted person of this planet',
          spouse: 'Suman Jain (Nirmala)',
          spouseDateOfBirth: '10 June (24 July)',
          spouseParents: {
            mom: 'Late Sharda Devi',
            dad: 'Sardar Bhai Kochar'
          },
          image: 'assets/images/lalit.webp',
          children: [{
            name: 'Rishabh Kumar Bakshi (Vicky)*',
            dateOfBirth: '11 September',
            dateOfAnniversary: '19 November',
            spouse: 'Apurva Jain',
            spouseDateOfBirth: '09 November',
            spouseParents: {
              mom: 'Veena Jain',
              dad: 'Sunil Kumar Jain'
            },
            image: 'assets/images/rishabh.webp',
            children: [{
              name: 'Khwaab Jain',
              image: 'assets/images/khwaab.webp',
              dateOfBirth: '01 December'
            }, {
              name: 'Aprisha Jain',
              image: 'assets/images/aprisha.webp',
              dateOfBirth: '11 January'
            }]
          }, {
            name: 'Shilpi Pugalia*',
            dateOfBirth: '21 May',
            dateOfAnniversary: '10 December',
            spouse: 'Nitin Pugalia',
            spouseDateOfBirth: '28 November',
            spouseParents: {
              mom: 'Madhu Pugalia',
              dad: 'Nirmal Pugalia'
            },
            image: 'assets/images/shilpi.webp',
            children: []
          }]
        }, {
          name: 'Sarla Chordia (Manju)*',
          dateOfBirth: '24 September',
          dateOfAnniversary: '16 November',
          kidDescription: '★★★ दयालु — The most kind person of the family',
          spouse: 'Sunil Chordia',
          spouseDateOfBirth: '20 April',
          spouseParents: {
            mom: 'Late Upyog kanwar',
            dad: 'Late Parsan Mal Chordia'
          },
          image: 'assets/images/sarla.webp',
          children: [{
            name: 'Priyanka Surana (Tina)*',
            dateOfBirth: '22 June',
            dateOfAnniversary: '21 November',
            spouse: 'Nishant Surana',
            spouseDateOfBirth: '02 May',
            spouseParents: {
              mom: 'Lalita surana',
              dad: 'Narendra Mal Surana'
            },
            image: 'assets/images/priyanka.webp',
            children: [{
              name: 'Vihaan Surana',
              image: 'assets/images/vihaan.webp',
              dateOfBirth: '21 October'
            }, {
              name: 'Anay Surana',
              image: 'assets/images/anay.webp',
              dateOfBirth: '14 September'
            }]
          }, {
            name: 'Prateek Chordia (Rinku)*',
            dateOfBirth: '15 May',
            dateOfAnniversary: '21 January',
            spouse: 'Nikita Chordia',
            spouseDateOfBirth: '26 December',
            spouseParents: {
              mom: 'Babita Baid',
              dad: 'Suresh Kumar Baid'
            },
            image: 'assets/images/prateek.webp',
            children: [{
              name: 'Yaashi Chordia',
              image: 'assets/images/yaashi.webp',
              dateOfBirth: '04 February'
            }, {
              name: 'Dishi Chordia',
              image: 'assets/images/dishi.webp',
              dateOfBirth: '08 May'
            }]
          }]
        }, {
          name: 'Suman Sand (संती)*',
          dateOfBirth: '29 September',
          dateOfAnniversary: '27 November',
          kidDescription: '★★★ मेधावी — The most intelligent person of the family',
          spouse: 'Sunil Sand',
          spouseDateOfBirth: '25 March',
          spouseParents: {
            mom: 'Late Shanti Devi Sand',
            dad: 'Late Mohan Mal Sand'
          },
          image: 'assets/images/suman.webp',
          children: [{
            name: 'Pratibha Khabiya (Dimple/Guddu)*',
            dateOfBirth: '30 September',
            dateOfAnniversary: '19 May',
            spouse: 'Ajit Khabiya',
            spouseDateOfBirth: '12 December',
            spouseParents: {
              mom: 'Late Nirmala Khabiya',
              dad: 'Rajendra Khabiya'
            },
            image: 'assets/images/pratibha.webp',
            children: [{
              name: 'Ayaansh Khabiya',
              image: 'assets/images/ayaansh.webp',
              dateOfBirth: '18 June'
            }]
          }, {
            name: 'Nidhi Bhadani*',
            dateOfBirth: '06 April',
            dateOfAnniversary: '05 December',
            spouse: 'Pankaj Bhadani',
            spouseDateOfBirth: '25 December',
            spouseParents: {
              mom: 'Late Sushila Devi Bhadani',
              dad: 'Late Kiran Chand Bhadani'
            },
            image: 'assets/images/nidhi.webp',
            children: [{
              name: 'Lehak Jain',
              image: 'assets/images/lehak.webp',
              dateOfBirth: '08 February'
            }]
          }, {
            name: 'Shreya Jain',
            image: 'assets/images/shreya.webp',
            dateOfBirth: '10 January'
          }, {
            name: 'Shraddha Jain',
            image: 'assets/images/shraddha.webp',
            dateOfBirth: '10 August'
          }]
        }, {
          name: 'Kusum Kankariya (Pappi)*',
          dateOfBirth: '11 December',
          dateOfAnniversary: '13 April',
          kidDescription: '★★★ सहिष्णु — The most tolerant person of the family',
          spouse: 'Pukhraj Kankariya',
          spouseDateOfBirth: '01 April',
          spouseParents: {
            mom: 'Late Vimla Devi',
            dad: 'Late Sawailal Kankariya'
          },
          image: 'assets/images/kusum.webp',
          children: [{
            name: 'Virendra Kankariya (Viru)*',
            dateOfBirth: '09 June',
            dateOfAnniversary: '01 May',
            spouse: 'Preksha Kankariya',
            spouseDateOfBirth: '13 January',
            spouseParents: {
              mom: 'Madhu Jamad',
              dad: 'Late Sunil Kumar Jamad'
            },
            image: 'assets/images/virendra.webp',
            children: []
          }, {
            name: 'Pawan Kankariya (Charlie)*',
            dateOfBirth: '23 May',
            dateOfAnniversary: '01 May',
            spouse: 'Rishika Kankariya',
            spouseDateOfBirth: '02 January',
            spouseParents: {
              mom: 'Sangeeta Singhvi',
              dad: 'Praveen Singhvi'
            },
            image: 'assets/images/pawan.webp',
            children: []
          }]
        }, {
          name: 'Vandana Jain (Gattu)*',
          dateOfBirth: '12 July',
          dateOfAnniversary: '10 June',
          kidDescription: '★★★ स्वनिर्मित — The One who created her own future through determination',
          spouse: 'Sachindra Singhvi',
          spouseDateOfBirth: '23 August',
          spouseParents: {
            mom: 'Late Shanti Singhvi',
            dad: 'Late Bheruchand Singhvi'
          },
          image: 'assets/images/vandana.webp',
          children: [{
            name: 'Ankit Singhvi',
            image: 'assets/images/ankit.webp',
            dateOfBirth: '01 April'
          }, {
            name: 'Swati Singhvi',
            image: 'assets/images/swati.webp',
            dateOfBirth: '10 January'
          }]
        }, {
          name: 'Vijay Kumar Bakshi (Munna)*',
          dateOfBirth: '06 October',
          dateOfAnniversary: '21 November',
          kidDescription: '★★★ मस्तमौला — The super cool Mama and the symbol of strength, selfless, dedication & sacrifice',
          spouse: 'Nidhi Jain',
          spouseDateOfBirth: '30 November',
          spouseParents: {
            mom: 'Late Kiran Chordia',
            dad: 'Late Maktur Mal Chordia'
          },
          image: 'assets/images/vijay.webp',
          children: [{
            name: 'Poorva Jain',
            image: 'assets/images/poorva.webp',
            dateOfBirth: '26 September'
          }, {
            name: 'Kaushal Jain',
            image: 'assets/images/kaushal.webp',
            dateOfBirth: '29 July'
          }]
        }, {
          name: 'Jaishri Jain (Gudiya)*',
          dateOfBirth: '01 January',
          dateOfAnniversary: '17 February',
          kidDescription: '★★★ ज़िंदादिल — Sab se dur, sab ke pass, baki sab first class! Just a fearless lady living life her own way',
          spouse: 'Sudhir Kumbhat',
          spouseDateOfBirth: '16 January',
          spouseParents: {
            mom: 'Manju Kumbhat',
            dad: 'Gyan Chand Kumbhat'
          },
          image: 'assets/images/jaishri.webp',
          children: [{
            name: 'Nischal Kumbhat Jain (Golu)',
            image: 'assets/images/nishchal.webp',
            dateOfBirth: '03 March'
          }, {
            name: 'Chaitanya Kumbhat Jain (Gungun)',
            image: 'assets/images/chaitanya.webp',
            dateOfBirth: '31 May'
          }]
        }]
      }, {
        name: 'Late Dhanraj Bakshi (धनजी/काकासा)*',
        dateOfBirth: 'धनतेरस',
        dateOfDeath: '20 March',
        kidDescription: '★★ Pure hearted — He carried a heart full of affection and kindness loving everyone around him in his own quiet way',
        spouse: 'Late Pushpa Devi (काकीजी)',
        spouseParents: {
          mom: 'Late Sirya Bai',
          dad: 'Late Chandmal Kochar'
        },
        spouseDateOfBirth: 'वो शुभ दिन था (Data not available)',
        spouseDateOfDeath: '12 June',
        spouseDescription: '★★ Compassionate — Her heart was made of kindness and his soul was filled with wisdom',
        image: 'assets/images/dhanraj.webp',
        children: [{
          name: 'Buddhi Prakash Bakshi (Mannu)*',
          dateOfBirth: '01 December',
          dateOfAnniversary: '02 December',
          kidDescription: '★★★ Guardian — The caring protector of the family',
          spouse: 'Hansa Bakshi',
          spouseDateOfBirth: '01 December',
          spouseParents: {
            mom: 'Shanti Devi',
            dad: 'Late Laxmi Chand Mehta'
          },
          image: 'assets/images/buddhiprakash.webp',
          children: [{
            name: 'Chandani Babel*',
            dateOfBirth: '18 June',
            dateOfAnniversary: '18 April',
            spouse: 'Deepak Babel',
            spouseDateOfBirth: '27 October',
            spouseParents: {
              mom: 'Usha Babel',
              dad: 'Inderchand Babel'
            },
            image: 'assets/images/chandani.webp',
            children: [{
              name: 'Divit Babel',
              image: 'assets/images/divit.webp',
              dateOfBirth: '12 January'
            }, {
              name: 'Kalp Babel',
              image: 'assets/images/kalp.webp',
              dateOfBirth: '02 February'
            }]
          }, {
            name: 'Pratik Bakshi (Vivek)*',
            dateOfBirth: '30 November',
            dateOfAnniversary: '24 June',
            spouse: 'Payal Bhansali',
            spouseDateOfBirth: '13 January',
            spouseParents: {
              mom: 'Sunita Bhansali',
              dad: 'Rameshchand Bhansali'
            },
            image: 'assets/images/vivek.webp'
          }, {
            name: 'Himani Bakshi',
            image: 'assets/images/himani.webp',
            dateOfBirth: '03 August'
          }]
        }, {
          name: 'Saroj Doshi (Bai)*',
          dateOfBirth: '2 April',
          dateOfAnniversary: '08 February',
          kidDescription: '★★★ Nurturing — A woman full of love, who sacrifices her time for her family and children',
          spouse: 'Ashok Doshi',
          spouseDateOfBirth: '17 April',
          spouseParents: {
            mom: 'Late Ugam Kanwar Doshi',
            dad: 'Late Sampat Raj Doshi'
          },
          image: 'assets/images/ashokdoshi.webp',
          children: [{
            name: 'Khushbu Burad*',
            dateOfBirth: '18 March',
            dateOfAnniversary: '25 January',
            spouse: 'Punit Burad',
            spouseDateOfBirth: '17 August',
            spouseParents: {
              mom: 'Sumitra Devi',
              dad: 'Jambu Burad'
            },
            image: 'assets/images/khushbuburad.webp',
            children: [{
              name: 'Prisha Burad',
              image: 'assets/images/prisha.webp',
              dateOfBirth: '15 January'
            }]
          }, {
            name: 'Sarika Karnawat (Ghotu)*',
            dateOfBirth: '11 January',
            dateOfAnniversary: '12 May',
            spouse: 'Raunak Karnawat',
            spouseDateOfBirth: '25 May',
            spouseParents: {
              mom: 'Urmila Karnawat',
              dad: 'Late Pardeep Karnawat'
            },
            image: 'assets/images/sarika.webp',
            children: []
          }, {
            name: 'Arihant Doshi',
            image: 'assets/images/arihant_.webp',
            dateOfBirth: '16 January'
          }]
        }, {
          name: 'Sunita Lalwani (Baby)*',
          kidDescription: '★★★ Selfless — A kind hearted lady who loves family gatherings, cares for relatives, and always puts her family’s happiness before her own',
          dateOfBirth: '07 July',
          dateOfAnniversary: '24 November',
          spouse: 'Kamal Lalwani',
          spouseDateOfBirth: '05 June',
          spouseParents: {
            mom: 'Late Ghisi Devi Lalwani',
            dad: 'Late Tejkaran Lalwani '
          },
          image: 'assets/images/sunita.webp',
          children: [{
            name: 'Khushbu Kothari*',
            dateOfBirth: '15 August',
            dateOfAnniversary: '01 December',
            spouse: 'Rishabh Kothari',
            spouseDateOfBirth: '24 April',
            spouseParents: {
              mom: 'Saroj Kothari',
              dad: 'Vimal Kothari'
            },
            image: 'assets/images/khushbukothari.webp',
            children: [{
              name: 'Ritvi Kothari',
              image: 'assets/images/ritvi.webp',
              dateOfBirth: '31 December'
            }, {
              name: 'Prishu Kothari',
              image: 'assets/images/prishu.webp',
              dateOfBirth: '19 October'
            }]
          }, {
            name: 'Kavita Choudhary*',
            dateOfBirth: '28 October',
            dateOfAnniversary: '01 December',
            spouse: 'Arvind Choudhary',
            spouseDateOfBirth: '24 May',
            spouseParents: {
              mom: 'Sheela Devi',
              dad: 'Subhash Chand Choudhary'
            },
            image: 'assets/images/kavita.webp',
            children: [{
              name: 'Khushan Choudhary',
              image: 'assets/images/khushan.webp',
              dateOfBirth: '29 October'
            }, {
              name: 'Soham Choudhary',
              image: 'assets/images/soham.webp',
              dateOfBirth: '27 July'
            }]
          }, {
            name: 'Kalpana Bafna (Kalpu)*',
            dateOfBirth: '10 December',
            dateOfAnniversary: '28 April',
            spouse: 'Vaibhav Bafna',
            spouseDateOfBirth: '05 September',
            spouseParents: {
              mom: 'Shobha Bafna',
              dad: 'Chhagan Bafna'
            },
            image: 'assets/images/kalpana.webp',
            children: [{
              name: 'Bhavika Bafna',
              image: 'assets/images/bhavika.webp',
              dateOfBirth: '11 January'
            }]
          }, {
            name: 'Harshit Lalwani',
            image: 'assets/images/harshit.webp',
            dateOfBirth: '14 September'
          }]
        }, {
          name: 'Sangeeta Nahar (Pappu)*',
          dateOfBirth: '21 December',
          dateOfAnniversary: '07 December',
          kidDescription: '★★★ Anchor — Keeps the family grounded',
          spouse: 'Kishor Nahar',
          spouseDateOfBirth: '13 January',
          spouseParents: {
            mom: 'Maina Devi Nahar',
            dad: 'Late Navratan Mal Nahar'
          },
          image: 'assets/images/sangeeta.webp',
          children: [{
            name: 'Nikita Bhansali*',
            dateOfBirth: '18 June',
            dateOfAnniversary: '16 February',
            spouse: 'Pravesh Bhansali',
            spouseDateOfBirth: '10 January',
            spouseParents: {
              mom: 'Prabha Bhansali',
              dad: 'Sushil Bhansali'
            },
            image: 'assets/images/nikita.webp',
            children: [{
              name: 'Garvisha Bhansali',
              image: 'assets/images/garvisha.webp',
              dateOfBirth: '06 October'
            }]
          }, {
            name: 'Ankita Nahar (Gudiya)',
            image: 'assets/images/ankita.webp',
            dateOfBirth: '13 April'
          }]
        }]
      }, {
        name: 'Late Luni Bai Sa*',
        spouse: 'Late Poonam Chand Ji Banthiya',
        spouseParents: '',
        image: 'assets/images/lunibai.webp',
        children: [{
          name: 'Shantilal Banthiya*',
          spouse: 'Shanti Devi'
        }, {
          name: 'Late Vijay Chand Banthia*',
          spouse: 'Jethi Devi'
        }, {
          name: 'Vimala Devi*',
          spouse: 'Mohanlal Sethia'
        }, {
          name: 'Tarachand Banthia*',
          spouse: 'Suraj Devi'
        }, {
          name: 'Mangilal Banthia*',
          spouse: 'Prem Lata Banthia'
        }, {
          name: 'Nirmala Sethia*',
          spouse: 'Shantilal Sethia'
        }, {
          name: 'Banshilal Banthia*',
          spouse: 'Lalita Banthia'
        }, {
          name: 'Sushila Sethia*',
          spouse: 'Mahendra Sethia'
        }]
      }, {
        name: 'Late Gulab Devi Ji*',
        spouse: 'Late Pratap Chand Ji Pugalia',
        spouseParents: '',
        image: 'assets/images/gulabdevi.webp',
        children: [{
          name: 'Bhawari Devi*',
          spouse: 'Late Askaran Bafna'
        }, {
          name: 'Kailash Chand Pugalia*',
          spouse: 'Aruna Pugalia'
        }, {
          name: 'Late Nirmala Devi*',
          spouse: 'Late Keval Chand Parakh'
        }, {
          name: 'Late Prakash Chand Pugalia*',
          spouse: 'Late Anju Devi Pugalia',
          spouseParents: {
            mom: 'Late Sushila Devi Nahata',
            dad: 'Late Jethmal Nahata'
          },
          children: [{
            name: 'Varsha Lunawat*',
            spouse: 'Vikas Lunawat',
            spouseParents: {
              mom: 'Manju Devi Lunawat',
              dad: 'Sohanlal Lunawat'
            },
            children: [{
              name: 'Vanshika Lunawat',
              image: 'no need'
            }, {
              name: 'Devansh Lunawat',
              image: 'no need'
            }]
          }, {
            name: 'Priyanka Bafna (Pinku)*',
            spouse: 'Hemant Bafna',
            spouseParents: {
              mom: 'Manju Devi Bafna',
              dad: 'Pukhraj Bafna'
            },
            children: [{
              name: 'Sarthak Bafna',
              image: 'no need'
            }]
          }]
        }, {
          name: 'Navratan Pugalia*',
          spouse: 'Devika Pugalia'
        }, {
          name: 'Rajender Pugalia*',
          spouse: 'Saroj Pugalia'
        }, {
          name: 'Santosh Bhansali*',
          spouse: 'Suresh Bhansali'
        }]
      }]
    }]
  }]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bakshiParivar);

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  appInfo: {
    version: '3.0.0-Dev',
    startedDate: 'June 2026',
    lastUpdated: '20 Jul 2026'
  }
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map