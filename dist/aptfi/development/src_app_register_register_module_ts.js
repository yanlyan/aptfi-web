"use strict";
(self["webpackChunkaptfi"] = self["webpackChunkaptfi"] || []).push([["src_app_register_register_module_ts"],{

/***/ 9087:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _Users_lyanjakpat_Projects_aptfi_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.state */ 2534);
/* harmony import */ var _core_must_match_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/must-match.validator */ 1781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.service */ 4403);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var angular_recaptcha3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-recaptcha3 */ 6713);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);



















function RegisterComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Nama Universitas harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
  }
}

function RegisterComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Email Universitas harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
  }
}

function RegisterComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Email Universitas tidak valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
  }
}

function RegisterComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, "Buat Akun Baru");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
  }
}

function RegisterComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "mat-spinner", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("diameter", 20);
  }
}

class RegisterComponent {
  constructor(registerService, store, router, // private readonly store: Store
  fb, recaptchaService) {
    this.registerService = registerService;
    this.store = store;
    this.router = router;
    this.fb = fb;
    this.recaptchaService = recaptchaService;
    this.loading = false;
    this.loginForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
      passwordConfirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
    }, {
      validators: (0,_core_must_match_validator__WEBPACK_IMPORTED_MODULE_2__.MustMatch)('password', 'passwordConfirmation')
    });
  }

  mustMatch(controlName, matchingControlName) {
    return formGroup => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      } // set error on matchingControl if validation fails


      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({
          mustMatch: true
        });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  ngOnInit() {}

  onSubmit() {
    var _this = this;

    return (0,_Users_lyanjakpat_Projects_aptfi_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.loginForm.valid) {
        _this.loading = true;
        const token = yield _this.recaptchaService.execute({
          action: 'register'
        });

        _this.registerService.register(_this.loginForm.value.name, _this.loginForm.value.email, _this.loginForm.value.password, _this.loginForm.value.passwordConfirmation, token).subscribe(response => {
          _this.store.dispatch(new _app_state__WEBPACK_IMPORTED_MODULE_1__.SetSessionState({
            accessToken: response.access_token,
            refreshToken: response.refresh_token,
            role: response.user.role
          }));

          _this.router.navigate(['/']);

          _this.loading = false;
        }, error => {
          _this.loading = false;
        });
      }
    })();
  }

  goToRegister() {
    this.router.navigate(['daftar']);
  }

}

RegisterComponent.??fac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_register_service__WEBPACK_IMPORTED_MODULE_3__.RegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](angular_recaptcha3__WEBPACK_IMPORTED_MODULE_8__.ReCaptchaService));
};

RegisterComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  decls: 34,
  vars: 8,
  consts: [["fxLayout", "column", "fxLayoutGap", "32px", "fxLayoutAlign", "start center", 2, "height", "100%", "background-color", "#ddd", "padding-top", "64px"], [2, "text-align", "center"], ["src", "assets/image/logo2.png", "alt", "", 2, "width", "70%"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "margin", "0 16px"], [2, "margin", "24px 0px"], ["fxLayout", "column", "fxLayoutAlign", "center stretch"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "8px", 2, "margin", "0px 16px", 3, "formGroup", "submit"], ["matInput", "", "placeholder", "Nama Universitas", "formControlName", "name", "type", "text"], [4, "ngIf"], ["matInput", "", "placeholder", "Email Universitas", "formControlName", "email", "type", "email"], ["matInput", "", "placeholder", "Password", "formControlName", "password", "type", "password"], ["matInput", "", "placeholder", "Ulangi Password", "formControlName", "passwordConfirmation", "type", "password"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 2, "margin-top", "20px", "padding-bottom", "20px"], ["mat-raised-button", "", "color", "primary", "type", "submit", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "8px", 4, "ngIf"], [3, "size", "hide"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "margin-top", "24px", "width", "100%"], ["routerLink", "/login"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "8px"], ["color", "primary", 3, "diameter"], ["for", ""]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "mat-card-header", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "mat-card-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "Daftar akun ke Sistem Keanggotaan APTFI");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "mat-card-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("submit", function RegisterComponent_Template_form_submit_8_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](10, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](11, RegisterComponent_mat_error_11_Template, 2, 0, "mat-error", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](13, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](14, RegisterComponent_mat_error_14_Template, 2, 0, "mat-error", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](15, RegisterComponent_mat_error_15_Template, 2, 0, "mat-error", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](17, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](19, "Password harus diisi");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](21, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](23, "Ulangi Password harus sama dengan password");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](26, RegisterComponent_button_26_Template, 2, 0, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](27, RegisterComponent_div_27_Template, 4, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](28, "recaptcha", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](29, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](31, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](33, "Masuk ke akun");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    }

    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !!((tmp_1_0 = ctx.loginForm.get("name")) == null ? null : tmp_1_0.hasError("required")));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !!((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("required")));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !!((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.hasError("email")));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("size", "invisible")("hide", true);
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, angular_recaptcha3__WEBPACK_IMPORTED_MODULE_8__.ReCaptchaComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatSpinner],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 8723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterModule": () => (/* binding */ RegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../register/register.component */ 9087);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var angular_recaptcha3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-recaptcha3 */ 6713);
/* harmony import */ var _login_login_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.guard */ 8595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);















const routes = [
    {
        path: '',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent,
        canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_1__.LoginGuard],
    },
];
class RegisterModule {
}
RegisterModule.??fac = function RegisterModule_Factory(t) { return new (t || RegisterModule)(); };
RegisterModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: RegisterModule });
RegisterModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDividerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule,
            angular_recaptcha3__WEBPACK_IMPORTED_MODULE_13__.ReCaptchaModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](RegisterModule, { declarations: [_register_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDividerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule,
        angular_recaptcha3__WEBPACK_IMPORTED_MODULE_13__.ReCaptchaModule] }); })();


/***/ }),

/***/ 4403:
/*!**********************************************!*\
  !*** ./src/app/register/register.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterService": () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/http-client.service */ 7352);



class RegisterService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    register(name, email, password, passwordConfirm, token) {
        return this.httpClient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/register`, {
            name,
            email,
            password,
            password_confirmation: passwordConfirm,
            recaptcha: token,
        });
    }
}
RegisterService.??fac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_core_http_client_service__WEBPACK_IMPORTED_MODULE_1__.HttpClientService)); };
RegisterService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: RegisterService, factory: RegisterService.??fac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map