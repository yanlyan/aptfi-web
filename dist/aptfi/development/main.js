(self["webpackChunkaptfi"] = self["webpackChunkaptfi"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_divider_js-node_modules_angular_m-5ad527"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_expansion_js-node_modules_angular-24e692"), __webpack_require__.e("common"), __webpack_require__.e("src_app_user-view_user-view_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user-view/user-view.module */ 4162)).then((m) => m.UserViewModule),
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_divider_js-node_modules_angular_m-5ad527"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then((m) => m.LoginModule),
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_divider_js-node_modules_angular_m-5ad527"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./register/register.module */ 8723)).then((m) => m.RegisterModule),
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_divider_js-node_modules_angular_m-5ad527"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_forgot-password_forgot-pasword_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-password/forgot-pasword.module */ 6934)).then((m) => m.ForgotPasswordModule),
    },
    {
        path: 'reset-password/:token',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_divider_js-node_modules_angular_m-5ad527"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_card_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_reset-password_reset-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reset-password/reset-password.module */ 4371)).then((m) => m.ResetPasswordModule),
    },
    {
        path: 'pengurus',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_divider_js-node_modules_angular_m-5ad527"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_table_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_expansion_js-node_modules_angular-24e692"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pengurus-view_pengurus-view_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pengurus-view/pengurus-view.module */ 4681)).then((m) => m.PengurusViewModule),
    },
    {
        path: 'admin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_divider_js-node_modules_angular_m-5ad527"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_table_js"), __webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_expansion_js-node_modules_angular-24e692"), __webpack_require__.e("src_app_admin-view_admin-view_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-view/admin-view.module */ 1674)).then((m) => m.AdminViewModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
                useHash: false,
                anchorScrolling: 'enabled',
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
    constructor() {
        this.title = 'Asosiasi Perguruan Tinggi Farmasi Indonesia';
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenGetter": () => (/* binding */ tokenGetter),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/service-worker */ 2249);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/layout */ 5072);
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/storage-plugin */ 7006);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 3394);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.state */ 2534);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @auth0/angular-jwt */ 6686);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);
/* harmony import */ var _core_http_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/http-interceptor */ 5366);
/* harmony import */ var _user_view_user_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-view/user.state */ 2262);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_locales_id__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/id */ 14);
/* harmony import */ var _angular_common_locales_id__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_id__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angular_recaptcha3__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-recaptcha3 */ 1485);
/* harmony import */ var _states_loading_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./states/loading.state */ 9989);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _user_view_member_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-view/member.state */ 9673);
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/confirm-dialog/confirm-dialog.component */ 2887);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 1095);
































(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.registerLocaleData)((_angular_common_locales_id__WEBPACK_IMPORTED_MODULE_8___default()), 'id');
function tokenGetter() {
    return '';
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
            useClass: _core_http_interceptor__WEBPACK_IMPORTED_MODULE_6__.MyHttpInterceptor,
            multi: true,
            deps: [_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBar],
        },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_13__.LOCALE_ID, useValue: 'id-ID' },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production,
                registrationStrategy: 'registerWhenStable:30000',
            }),
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__.LayoutModule,
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__.NgxsModule.forRoot([_app_state__WEBPACK_IMPORTED_MODULE_5__.AppState, _user_view_user_state__WEBPACK_IMPORTED_MODULE_7__.UserState, _user_view_member_state__WEBPACK_IMPORTED_MODULE_10__.MemberState, _states_loading_state__WEBPACK_IMPORTED_MODULE_9__.LoadingState], {
                developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production,
            }),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__.JwtModule.forRoot({
                config: {
                    tokenGetter,
                },
            }),
            _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_3__.NgxsStoragePluginModule.forRoot({
                key: ['app'],
            }),
            angular_recaptcha3__WEBPACK_IMPORTED_MODULE_23__.ReCaptchaModule.forRoot({
                invisible: {
                    sitekey: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.recaptchaSiteKey,
                },
                normal: {
                    sitekey: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.recaptchaSiteKey,
                },
                language: 'id',
            }),
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__.FlexLayoutModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__.ServiceWorkerModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__.LayoutModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["ɵk"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__.JwtModule, _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_3__.NgxsStoragePluginModule, angular_recaptcha3__WEBPACK_IMPORTED_MODULE_23__.ReCaptchaModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__.FlexLayoutModule] }); })();


/***/ }),

/***/ 2534:
/*!******************************!*\
  !*** ./src/app/app.state.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetSessionState": () => (/* binding */ SetSessionState),
/* harmony export */   "AppState": () => (/* binding */ AppState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 3394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class SetSessionState {
    constructor(state) {
        this.state = state;
    }
}
SetSessionState.type = '[App] Set Session';
let AppState = class AppState {
    SetOnlineState(ctx, action) {
        const state = ctx.getState();
        ctx.setState(Object.assign(Object.assign({}, state), { session: action.state }));
    }
};
AppState.ɵfac = function AppState_Factory(t) { return new (t || AppState)(); };
AppState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppState, factory: AppState.ɵfac, providedIn: 'root' });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(SetSessionState)
], AppState.prototype, "SetOnlineState", null);
AppState = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'app',
        defaults: {
            isOnline: true,
            server: true,
            loginRedirect: null,
            session: {
                accessToken: '',
                refreshToken: '',
                role: null,
            },
        },
    })
], AppState);



/***/ }),

/***/ 5366:
/*!******************************************!*\
  !*** ./src/app/core/http-interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyHttpInterceptor": () => (/* binding */ MyHttpInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.state */ 2534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 3394);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 7001);







class MyHttpInterceptor {
    constructor(store, snackbar) {
        this.store = store;
        this.snackbar = snackbar;
    }
    intercept(req, next) {
        const appState = this.store.selectSnapshot(_app_state__WEBPACK_IMPORTED_MODULE_0__.AppState);
        const token = appState.session ? appState.session.accessToken : null;
        if (token) {
            let tokenizedRequest = req;
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                Authorization: 'Bearer ' + token,
            });
            tokenizedRequest = req.clone({
                headers,
            });
            return next.handle(tokenizedRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((event) => {
                return event;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
                this.snackbar.open(`Terjadi Kesalahan : ${error.error.message}`, 'Tutup', {
                    panelClass: ['snackbar-warn'],
                    duration: 10000,
                });
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
            }));
        }
        else {
            return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((event) => {
                return event;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
                this.snackbar.open(`Terjadi Kesalahan : ${error.error.message}`, 'Tutup', {
                    panelClass: ['snackbar-warn'],
                    duration: 10000,
                });
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
            }));
        }
    }
}
MyHttpInterceptor.ɵfac = function MyHttpInterceptor_Factory(t) { return new (t || MyHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar)); };
MyHttpInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: MyHttpInterceptor, factory: MyHttpInterceptor.ɵfac });


/***/ }),

/***/ 2887:
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 1095);





class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() { }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 10, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "fxLayout", "row", "fxLayoutAlign", "space-around end", 2, "margin-bottom", "0px", "padding", "0"], ["mat-flat-button", "", "color", "primary", "cdkFocusInitial", "", 3, "click"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Konfirmasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Apakah anda yakin ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() { return ctx.dialogRef.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tidak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() { return ctx.dialogRef.close(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ya, saya yakin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9989:
/*!*****************************************!*\
  !*** ./src/app/states/loading.state.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetLoadingState": () => (/* binding */ SetLoadingState),
/* harmony export */   "LoadingState": () => (/* binding */ LoadingState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 3394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class SetLoadingState {
    constructor(state) {
        this.state = state;
    }
}
SetLoadingState.type = '[Loading] Set Loading';
let LoadingState = class LoadingState {
    SetLoadingState(ctx, action) {
        const state = ctx.getState();
        ctx.setState(Object.assign(Object.assign({}, state), { loading: action.state }));
    }
};
LoadingState.ɵfac = function LoadingState_Factory(t) { return new (t || LoadingState)(); };
LoadingState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoadingState, factory: LoadingState.ɵfac, providedIn: 'root' });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(SetLoadingState)
], LoadingState.prototype, "SetLoadingState", null);
LoadingState = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'loading',
        defaults: {
            loading: false,
        },
    })
], LoadingState);



/***/ }),

/***/ 9673:
/*!*******************************************!*\
  !*** ./src/app/user-view/member.state.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetMemberState": () => (/* binding */ SetMemberState),
/* harmony export */   "SetRegisterStatus": () => (/* binding */ SetRegisterStatus),
/* harmony export */   "MemberState": () => (/* binding */ MemberState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 3394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class SetMemberState {
    constructor(state) {
        this.state = state;
    }
}
SetMemberState.type = '[App] Set Member State';
class SetRegisterStatus {
    constructor(state) {
        this.state = state;
    }
}
SetRegisterStatus.type = '[App] Set Register Status State';
let MemberState = class MemberState {
    SetMemberState(ctx, action) {
        const state = ctx.getState();
        ctx.setState(Object.assign(Object.assign({}, state), { member: action.state }));
    }
    SetRegisterStatus(ctx, action) {
        const state = ctx.getState();
        ctx.setState(Object.assign(Object.assign({}, state), { member: Object.assign(Object.assign({}, state.member), { registerLastStatus: action.state }) }));
    }
};
MemberState.ɵfac = function MemberState_Factory(t) { return new (t || MemberState)(); };
MemberState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MemberState, factory: MemberState.ɵfac, providedIn: 'root' });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(SetMemberState)
], MemberState.prototype, "SetMemberState", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(SetRegisterStatus)
], MemberState.prototype, "SetRegisterStatus", null);
MemberState = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'Member',
        defaults: {
            member: null,
        },
    })
], MemberState);



/***/ }),

/***/ 2262:
/*!*****************************************!*\
  !*** ./src/app/user-view/user.state.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetUserState": () => (/* binding */ SetUserState),
/* harmony export */   "SetRegisterStatus": () => (/* binding */ SetRegisterStatus),
/* harmony export */   "UserState": () => (/* binding */ UserState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 3394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class SetUserState {
    constructor(state) {
        this.state = state;
    }
}
SetUserState.type = '[App] Set User State';
class SetRegisterStatus {
    constructor(state) {
        this.state = state;
    }
}
SetRegisterStatus.type = '[App] Set Register Status State';
let UserState = class UserState {
    SetUserState(ctx, action) {
        const state = ctx.getState();
        ctx.setState(Object.assign(Object.assign({}, state), { user: action.state }));
    }
};
UserState.ɵfac = function UserState_Factory(t) { return new (t || UserState)(); };
UserState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserState, factory: UserState.ɵfac, providedIn: 'root' });
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(SetUserState)
], UserState.prototype, "SetUserState", null);
UserState = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'user',
        defaults: {
            user: null,
        },
    })
], UserState);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // api: 'http://localhost:8000/api',
    api: 'https://api-aptfi.lyanesia.tech/api',
    recaptchaSiteKey: '6LfaP9obAAAAAMKwhjelySEWJSezrxdiqJK6Vs_i',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map