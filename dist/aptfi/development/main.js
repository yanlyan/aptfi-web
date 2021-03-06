"use strict";
(self["webpackChunkaptfi"] = self["webpackChunkaptfi"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_http-client_service_ts-node_modules_angular_material_fesm2015_divider_mj-ee80d2"), __webpack_require__.e("default-src_app_user-view_user_service_ts-node_modules_angular_material_fesm2015_expansion_mj-306148"), __webpack_require__.e("common"), __webpack_require__.e("src_app_user-view_user-view_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user-view/user-view.module */ 4162)).then((m) => m.UserViewModule),
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_http-client_service_ts-node_modules_angular_material_fesm2015_divider_mj-ee80d2"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then((m) => m.LoginModule),
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_http-client_service_ts-node_modules_angular_material_fesm2015_divider_mj-ee80d2"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./register/register.module */ 8723)).then((m) => m.RegisterModule),
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_http-client_service_ts-node_modules_angular_material_fesm2015_divider_mj-ee80d2"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_forgot-password_forgot-pasword_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./forgot-password/forgot-pasword.module */ 6934)).then((m) => m.ForgotPasswordModule),
    },
    {
        path: 'reset-password/:token',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_http-client_service_ts-node_modules_angular_material_fesm2015_divider_mj-ee80d2"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_reset-password_reset-password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reset-password/reset-password.module */ 4371)).then((m) => m.ResetPasswordModule),
    },
    {
        path: 'pengurus',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_http-client_service_ts-node_modules_angular_material_fesm2015_divider_mj-ee80d2"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_table_mjs"), __webpack_require__.e("default-src_app_user-view_user_service_ts-node_modules_angular_material_fesm2015_expansion_mj-306148"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pengurus-view_pengurus-view_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pengurus-view/pengurus-view.module */ 4681)).then((m) => m.PengurusViewModule),
    },
    {
        path: 'admin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_http-client_service_ts-node_modules_angular_material_fesm2015_divider_mj-ee80d2"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_table_mjs"), __webpack_require__.e("default-src_app_user-view_user_service_ts-node_modules_angular_material_fesm2015_expansion_mj-306148"), __webpack_require__.e("src_app_admin-view_admin-view_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-view/admin-view.module */ 1674)).then((m) => m.AdminViewModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
                useHash: false,
                anchorScrolling: 'enabled',
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'Asosiasi Perguruan Tinggi Farmasi Indonesia';
    }
    ngOnInit() { }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenGetter": () => (/* binding */ tokenGetter),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/storage-plugin */ 1322);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.state */ 2534);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _core_http_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/http-interceptor */ 5366);
/* harmony import */ var _user_view_user_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-view/user.state */ 2262);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_locales_id__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/id */ 2606);
/* harmony import */ var angular_recaptcha3__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-recaptcha3 */ 6713);
/* harmony import */ var _states_loading_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./states/loading.state */ 9989);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _user_view_member_state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-view/member.state */ 9673);
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/confirm-dialog/confirm-dialog.component */ 2887);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 5103);

































(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.registerLocaleData)(_angular_common_locales_id__WEBPACK_IMPORTED_MODULE_8__["default"], 'id');
function tokenGetter() {
    return '';
}
class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineInjector"]({ providers: [
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
            ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_20__.NgxExtendedPdfViewerModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production,
                registrationStrategy: 'registerWhenStable:30000',
            }),
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__.LayoutModule,
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__.NgxsModule.forRoot([_app_state__WEBPACK_IMPORTED_MODULE_5__.AppState, _user_view_user_state__WEBPACK_IMPORTED_MODULE_7__.UserState, _user_view_member_state__WEBPACK_IMPORTED_MODULE_10__.MemberState, _states_loading_state__WEBPACK_IMPORTED_MODULE_9__.LoadingState], {
                developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production,
            }),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__.JwtModule.forRoot({
                config: {
                    tokenGetter,
                },
            }),
            _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_3__.NgxsStoragePluginModule.forRoot({
                key: ['app'],
            }),
            angular_recaptcha3__WEBPACK_IMPORTED_MODULE_24__.ReCaptchaModule.forRoot({
                invisible: {
                    sitekey: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.recaptchaSiteKey,
                },
                normal: {
                    sitekey: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.recaptchaSiteKey,
                },
                language: 'id',
            }),
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__.FlexLayoutModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialogComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
        ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_20__.NgxExtendedPdfViewerModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_21__.ServiceWorkerModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_22__.LayoutModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["??k"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__.JwtModule, _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_3__.NgxsStoragePluginModule, angular_recaptcha3__WEBPACK_IMPORTED_MODULE_24__.ReCaptchaModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__.FlexLayoutModule] }); })();


/***/ }),

/***/ 2534:
/*!******************************!*\
  !*** ./src/app/app.state.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetSessionState": () => (/* binding */ SetSessionState),
/* harmony export */   "AppState": () => (/* binding */ AppState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



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
AppState.??fac = function AppState_Factory(t) { return new (t || AppState)(); };
AppState.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: AppState, factory: AppState.??fac, providedIn: 'root' });
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyHttpInterceptor": () => (/* binding */ MyHttpInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.state */ 2534);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);









class MyHttpInterceptor {
    constructor(store, snackbar, router) {
        this.store = store;
        this.snackbar = snackbar;
        this.router = router;
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
                if (error.status === 401) {
                    this.store.dispatch(new _app_state__WEBPACK_IMPORTED_MODULE_0__.SetSessionState({
                        accessToken: '',
                        refreshToken: '',
                        role: null,
                    }));
                    this.router.navigate(['login']);
                }
                else {
                    this.snackbar.open(`Terjadi Kesalahan : ${error.error.message}`, 'Tutup', {
                        panelClass: ['snackbar-warn'],
                        duration: 10000,
                    });
                }
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
MyHttpInterceptor.??fac = function MyHttpInterceptor_Factory(t) { return new (t || MyHttpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["????inject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????inject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
MyHttpInterceptor.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjectable"]({ token: MyHttpInterceptor, factory: MyHttpInterceptor.??fac });


/***/ }),

/***/ 2887:
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialogComponent": () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);





class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() { }
}
ConfirmDialogComponent.??fac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmDialogComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 10, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "fxLayout", "row", "fxLayoutAlign", "space-around end", 2, "margin-bottom", "0px", "padding", "0"], ["mat-flat-button", "", "color", "primary", "cdkFocusInitial", "", 3, "click"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Konfirmasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Apakah anda yakin ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() { return ctx.dialogRef.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Tidak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ConfirmDialogComponent_Template_button_click_8_listener() { return ctx.dialogRef.close(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Ya, saya yakin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9989:
/*!*****************************************!*\
  !*** ./src/app/states/loading.state.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetLoadingState": () => (/* binding */ SetLoadingState),
/* harmony export */   "LoadingState": () => (/* binding */ LoadingState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



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
LoadingState.??fac = function LoadingState_Factory(t) { return new (t || LoadingState)(); };
LoadingState.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: LoadingState, factory: LoadingState.??fac, providedIn: 'root' });
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetMemberState": () => (/* binding */ SetMemberState),
/* harmony export */   "SetRegisterStatus": () => (/* binding */ SetRegisterStatus),
/* harmony export */   "MemberState": () => (/* binding */ MemberState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



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
MemberState.??fac = function MemberState_Factory(t) { return new (t || MemberState)(); };
MemberState.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: MemberState, factory: MemberState.??fac, providedIn: 'root' });
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetUserState": () => (/* binding */ SetUserState),
/* harmony export */   "SetRegisterStatus": () => (/* binding */ SetRegisterStatus),
/* harmony export */   "UserState": () => (/* binding */ UserState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



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
UserState.??fac = function UserState_Factory(t) { return new (t || UserState)(); };
UserState.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: UserState, factory: UserState.??fac, providedIn: 'root' });
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    api: 'https://staging-api.aptfi.or.id/api',
    // api: 'https://api-aptfi.lyanesia.tech/api',
    recaptchaSiteKey: '6LdTG_QdAAAAALFFcUrb34BTJACNIfcocAhbnX3w',
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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
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
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map