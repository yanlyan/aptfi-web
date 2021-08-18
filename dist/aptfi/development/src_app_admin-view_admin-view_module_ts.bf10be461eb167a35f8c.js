(self["webpackChunkaptfi"] = self["webpackChunkaptfi"] || []).push([["src_app_admin-view_admin-view_module_ts"],{

/***/ 2868:
/*!***************************************************************************!*\
  !*** ./src/app/admin-view/admin-navigation/admin-navigation.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminNavigationComponent": () => (/* binding */ AdminNavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 5072);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 7349);
/* harmony import */ var src_app_app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.state */ 2534);
/* harmony import */ var src_app_user_view_user_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user-view/user.state */ 2262);
/* harmony import */ var _states_loading_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../states/loading.state */ 9989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 3394);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);




















function AdminNavigationComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminNavigationComponent_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

      return _r0.toggle();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function AdminNavigationComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "mat-spinner", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("diameter", 20);
  }
}

class AdminNavigationComponent {
  constructor(breakpointObserver, store, router) {
    this.breakpointObserver = breakpointObserver;
    this.store = store;
    this.router = router;
    this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)());
    this.masterOpened = false;
    this.loadingState$ = this.store.select(_states_loading_state__WEBPACK_IMPORTED_MODULE_2__.LoadingState);
  }

  ngOnInit() {
    this.router.events.subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd) {
        const scrollto = document.querySelector('.mat-sidenav-content');

        if (scrollto) {
          document.querySelector('.mat-sidenav-content').scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    });
    const masterMenu = ['/admin/users', '/admin/roles'];

    for (const am of masterMenu) {
      if (this.router.url.includes(am)) {
        this.masterOpened = true;
      }
    }

    this.state$ = this.store.select(src_app_user_view_user_state__WEBPACK_IMPORTED_MODULE_1__.UserState);
  }

  onOpened(name) {
    if (name === 'master') {
      this.masterOpened = true;
    }
  }

  logout() {
    this.store.dispatch(new src_app_app_state__WEBPACK_IMPORTED_MODULE_0__.SetSessionState({
      accessToken: '',
      refreshToken: '',
      role: null
    }));
    this.router.navigate(['/login']);
  }

}

AdminNavigationComponent.ɵfac = function AdminNavigationComponent_Factory(t) {
  return new (t || AdminNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
};

AdminNavigationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AdminNavigationComponent,
  selectors: [["app-admin-navigation"]],
  decls: 47,
  vars: 22,
  consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["color", "primary", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "8px"], ["src", "assets/image/logo.png", "alt", "", 2, "width", "42px"], ["multi", "", 1, "nav-accordion", 3, "displayMode"], [3, "expanded", "expandedChange", "opened"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "list-item"], ["routerLink", "/admin/users", 3, "routerLinkActive"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "width", "100%"], [2, "padding-left", "16px"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "16px", 1, "pointer", 3, "matMenuTriggerFor"], ["fxLayout", "column", "fxLayoutAlign", "center start"], [2, "line-height", "24px", "font-size", "16px"], [2, "font-size", "12px", "line-height", "12px"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "8px"], [2, "width", "40px"], ["src", "assets/image/profile.png", "alt", "", 2, "width", "100%", "border-radius", "50%"], ["aria-label", "Side nav toggle icon"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["style", "\n        position: absolute;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1000;\n        max-height: 100%;\n        background-color: rgba(255, 255, 255, 0.9);\n      ", 4, "ngIf"], [2, "background-color", "#fff", "border", "1px #ddd solid", "margin", "24px", "padding", "24px", "border-radius", "5px", "min-height", "100vh"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], [2, "position", "absolute", "top", "0", "width", "100%", "height", "100%", "z-index", "1000", "max-height", "100%", "background-color", "rgba(255, 255, 255, 0.9)"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 2, "padding-top", "24px"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayoutGap", "8px", 1, "mat-elevation-z8", 2, "background", "#fff", "padding", "12px 16px", "border-radius", "5px"], ["color", "accent", 3, "diameter"], ["for", ""]],
  template: function AdminNavigationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Admin APTFI");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-accordion", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-expansion-panel", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("expandedChange", function AdminNavigationComponent_Template_mat_expansion_panel_expandedChange_12_listener($event) {
        return ctx.masterOpened = $event;
      })("opened", function AdminNavigationComponent_Template_mat_expansion_panel_opened_12_listener() {
        return ctx.onOpened("master");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-expansion-panel-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Master Data");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "User");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-sidenav-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-toolbar", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AdminNavigationComponent_button_20_Template, 3, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-icon", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "expand_more");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-menu", 21, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminNavigationComponent_Template_button_click_38_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Keluar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, AdminNavigationComponent_div_43_Template, 6, 1, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](44, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](37);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 12, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 14, ctx.isHandset$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 10, ctx.isHandset$) ? "dialog" : "navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("displayMode", "flat");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", ctx.masterOpened);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActive", "active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 16, ctx.isHandset$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 18, ctx.state$).user == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 18, ctx.state$).user.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](44, 20, ctx.loadingState$).loading);
    }
  },
  directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenav, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutGapDirective, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelHeader, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatSpinner],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  background: #455a64;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.mat-list-item.active[_ngcontent-%COMP%] {\n  background-color: #ddd;\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #455a64;\n  border-top: 1px solid #3b4d55;\n  border-bottom: 1px solid #3b4d55;\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]:after {\n  color: #fff;\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: rgba(0, 0, 0, 0.87);\n  text-decoration: none;\n  border-bottom: 1px solid #c7c7c7;\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.14);\n}\n\n.mat-drawer-side[_ngcontent-%COMP%] {\n  border-right: none;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background: #455a64 !important;\n  color: #fff;\n}\n\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBR0U7RUFDRSxzQkFBQTtBQUFKOztBQUtFO0VBQ0UsZ0JBQUE7QUFGSjs7QUFJSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFGTjs7QUFLUTtFQUNFLFdBQUE7QUFIVjs7QUFVSTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFSTjs7QUFTTTtFQUNFLCtCQUFBO0FBUFI7O0FBVU07RUFDRSwrQkFBQTtBQVJSOztBQWNBO0VBQ0Usa0JBQUE7QUFYRjs7QUFjQTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtBQVhGOztBQWNBO0VBQ0UsZUFBQTtBQVhGIiwiZmlsZSI6ImFkbWluLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiAjNDU1YTY0O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5tYXQtbGlzdC1pdGVtIHtcbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIH1cbn1cblxuLm5hdi1hY2NvcmRpb24ge1xuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQ6ICM0NTVhNjQ7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzNiNGQ1NTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2I0ZDU1O1xuXG4gICAgICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3Ige1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5saXN0LWl0ZW0ge1xuICAgIGEge1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOTksIDE5OSwgMTk5KTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5tYXQtZHJhd2VyLXNpZGUge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICM0NTVhNjQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 8838:
/*!****************************************************!*\
  !*** ./src/app/admin-view/admin-view.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminViewComponent": () => (/* binding */ AdminViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _admin_navigation_admin_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-navigation/admin-navigation.component */ 2868);


class AdminViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminViewComponent.ɵfac = function AdminViewComponent_Factory(t) { return new (t || AdminViewComponent)(); };
AdminViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AdminViewComponent, selectors: [["app-admin-view"]], decls: 1, vars: 0, template: function AdminViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-admin-navigation");
    } }, directives: [_admin_navigation_admin_navigation_component__WEBPACK_IMPORTED_MODULE_0__.AdminNavigationComponent], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUNGIiwiZmlsZSI6ImFkbWluLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4iXX0= */"] });


/***/ }),

/***/ 1546:
/*!************************************************!*\
  !*** ./src/app/admin-view/admin-view.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminViewGuard": () => (/* binding */ AdminViewGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8939);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.state */ 2534);
/* harmony import */ var _states_loading_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../states/loading.state */ 9989);
/* harmony import */ var _user_view_user_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-view/user.state */ 2262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 3394);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/angular-jwt */ 6686);
/* harmony import */ var _user_view_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-view/user.service */ 9620);










class AdminViewGuard {
    constructor(router, store, jwtService, userService) {
        this.router = router;
        this.store = store;
        this.jwtService = jwtService;
        this.userService = userService;
    }
    canActivate(route, state) {
        return this.store.selectOnce(_app_state__WEBPACK_IMPORTED_MODULE_0__.AppState).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_1__.SetLoadingState(true))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)((appState) => {
            if (appState.session.accessToken === '') {
                this.router.navigate(['login']);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
            }
            switch (appState.session.role.id) {
                case 2:
                    this.router.navigate(['profil']);
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
                case 3:
                    this.router.navigate(['penggurus/anggota']);
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
                default:
                    break;
            }
            const userState = this.store.selectSnapshot(_user_view_user_state__WEBPACK_IMPORTED_MODULE_2__.UserState);
            if (!userState.user) {
                const decodedToken = this.jwtService.decodeToken(appState.session.accessToken);
                return this.userService.getById(decodedToken.sub).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((response) => {
                    this.store.dispatch(new _user_view_user_state__WEBPACK_IMPORTED_MODULE_2__.SetUserState(response.user));
                }));
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(userState);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((userState) => {
            if (userState === false) {
                return false;
            }
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.finalize)(() => this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_1__.SetLoadingState(false))));
    }
}
AdminViewGuard.ɵfac = function AdminViewGuard_Factory(t) { return new (t || AdminViewGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__.JwtHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_user_view_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService)); };
AdminViewGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: AdminViewGuard, factory: AdminViewGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1674:
/*!*************************************************!*\
  !*** ./src/app/admin-view/admin-view.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminViewModule": () => (/* binding */ AdminViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _admin_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-view.component */ 8838);
/* harmony import */ var _admin_view_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-view.guard */ 1546);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _admin_navigation_admin_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-navigation/admin-navigation.component */ 2868);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 7746);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 4935);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ 5939);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-material-file-input */ 4904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);























const routes = [
    {
        path: '',
        component: _admin_view_component__WEBPACK_IMPORTED_MODULE_0__.AdminViewComponent,
        canActivate: [_admin_view_guard__WEBPACK_IMPORTED_MODULE_1__.AdminViewGuard],
        children: [
            {
                path: '',
                redirectTo: 'users',
            },
            {
                path: 'users',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_chips_js-node_modules_angular_mat-16f1d3"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin-view_admin-user_admin-user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-user/admin-user.module */ 1586)).then((m) => m.AdminUserModule),
            },
        ],
    },
];
class AdminViewModule {
}
AdminViewModule.ɵfac = function AdminViewModule_Factory(t) { return new (t || AdminViewModule)(); };
AdminViewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AdminViewModule });
AdminViewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_6__.MaterialFileInputModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AdminViewModule, { declarations: [_admin_view_component__WEBPACK_IMPORTED_MODULE_0__.AdminViewComponent, _admin_navigation_admin_navigation_component__WEBPACK_IMPORTED_MODULE_2__.AdminNavigationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, ngx_material_file_input__WEBPACK_IMPORTED_MODULE_6__.MaterialFileInputModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_admin-view_admin-view_module_ts.bf10be461eb167a35f8c.js.map