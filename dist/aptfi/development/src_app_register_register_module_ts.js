(self["webpackChunkaptfi"] = self["webpackChunkaptfi"] || []).push([["src_app_register_register_module_ts"],{

/***/ 9087:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _Users_lyandwipangestu_Projects_aptfi_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 6304);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.state */ 2534);
/* harmony import */ var _core_must_match_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/must-match.validator */ 1781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.service */ 4403);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ 3394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var angular_recaptcha3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-recaptcha3 */ 1485);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);



















function RegisterComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Nama Universitas harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function RegisterComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Email Universitas harus diisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function RegisterComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Email Universitas tidak valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function RegisterComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Buat Akun Baru");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function RegisterComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("diameter", 20);
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

    return (0,_Users_lyandwipangestu_Projects_aptfi_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
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

RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_register_service__WEBPACK_IMPORTED_MODULE_3__.RegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](angular_recaptcha3__WEBPACK_IMPORTED_MODULE_8__.ReCaptchaService));
};

RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  decls: 34,
  vars: 8,
  consts: [["fxLayout", "column", "fxLayoutGap", "32px", "fxLayoutAlign", "start center", 2, "height", "100%", "background-color", "#ddd", "padding-top", "64px"], ["fxFlex", "20"], ["src", "assets/image/logo.png", "alt", "", 2, "width", "100%", "height", "100%"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [2, "margin", "24px 0px"], ["fxLayout", "column", "fxLayoutAlign", "center stretch"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "8px", 2, "margin", "0px 16px", 3, "formGroup", "submit"], ["matInput", "", "placeholder", "Nama Universitas", "formControlName", "name", "type", "text"], [4, "ngIf"], ["matInput", "", "placeholder", "Email Universitas", "formControlName", "email", "type", "email"], ["matInput", "", "placeholder", "Password", "formControlName", "password", "type", "password"], ["matInput", "", "placeholder", "Ulangi Password", "formControlName", "passwordConfirmation", "type", "password"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", 2, "margin-top", "20px", "padding-bottom", "20px"], ["mat-raised-button", "", "color", "primary", "type", "submit", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "8px", 4, "ngIf"], [3, "size", "hide"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "margin-top", "24px", "width", "100%"], ["routerLink", "/login"], ["mat-raised-button", "", "color", "primary", "type", "submit"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "8px"], ["color", "primary", 3, "diameter"], ["for", ""]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-header", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card-title", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Daftar akun ke Sistem Keanggotaan APTFI");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-card-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_8_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, RegisterComponent_mat_error_11_Template, 2, 0, "mat-error", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, RegisterComponent_mat_error_14_Template, 2, 0, "mat-error", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, RegisterComponent_mat_error_15_Template, 2, 0, "mat-error", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Password harus diisi");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-form-field");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Ulangi Password harus sama dengan password");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, RegisterComponent_button_26_Template, 2, 0, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, RegisterComponent_div_27_Template, 4, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "recaptcha", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Masuk ke akun");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !!((tmp_1_0 = ctx.loginForm.get("name")) == null ? null : tmp_1_0.hasError("required")));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !!((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("required")));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !!((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.hasError("email")));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("size", "invisible")("hide", true);
    }
  },
  directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, angular_recaptcha3__WEBPACK_IMPORTED_MODULE_8__.ReCaptchaComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDivider, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatSpinner],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 8723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterModule": () => (/* binding */ RegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../register/register.component */ 9087);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var angular_recaptcha3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-recaptcha3 */ 1485);
/* harmony import */ var _login_login_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login.guard */ 8595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);















const routes = [
    {
        path: '',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent,
        canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_1__.LoginGuard],
    },
];
class RegisterModule {
}
RegisterModule.ɵfac = function RegisterModule_Factory(t) { return new (t || RegisterModule)(); };
RegisterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RegisterModule });
RegisterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RegisterModule, { declarations: [_register_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterService": () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
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
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_http_client_service__WEBPACK_IMPORTED_MODULE_1__.HttpClientService)); };
RegisterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map