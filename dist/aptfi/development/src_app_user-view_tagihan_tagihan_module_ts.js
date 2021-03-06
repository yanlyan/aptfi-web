"use strict";
(self["webpackChunkaptfi"] = self["webpackChunkaptfi"] || []).push([["src_app_user-view_tagihan_tagihan_module_ts"],{

/***/ 3076:
/*!********************************************************!*\
  !*** ./src/app/user-view/tagihan/tagihan.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagihanComponent": () => (/* binding */ TagihanComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var src_app_states_loading_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/states/loading.state */ 9989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _tagihan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tagihan.service */ 6633);
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-filesaver */ 8283);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7317);













function TagihanComponent_mat_card_2_mat_card_title_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const bill_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("Iuran Anggota Tahun ", bill_r1.year, "");
} }
function TagihanComponent_mat_card_2_mat_card_title_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Biaya Pendaftaran Anggota");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function TagihanComponent_mat_card_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "fiber_manual_record");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4, "Belum dibayar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function TagihanComponent_mat_card_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "fiber_manual_record");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4, "Menunggu pembayaran");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function TagihanComponent_mat_card_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "fiber_manual_record");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4, "Lunas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function TagihanComponent_mat_card_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "fiber_manual_record");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4, "Pembayaran Kadaluarsa");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function TagihanComponent_mat_card_2_label_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Pendaftaran Anggota");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function TagihanComponent_mat_card_2_label_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const bill_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("Iuran Tahunan (", bill_r1.year, ")");
} }
function TagihanComponent_mat_card_2_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "mat-spinner", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "Loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("diameter", 20);
} }
function TagihanComponent_mat_card_2_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function TagihanComponent_mat_card_2_button_40_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r18); const bill_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r16.onPayButtonClick(bill_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "credit_card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, " Bayar Sekarang ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function TagihanComponent_mat_card_2_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function TagihanComponent_mat_card_2_button_41_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r21); const bill_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r19.onRetryClick(bill_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "credit_card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, " Bayar Sekarang ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function TagihanComponent_mat_card_2_button_42_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function TagihanComponent_mat_card_2_button_42_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r24); const bill_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r22.onPrintClick(bill_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, " Cetak Bukti Bayar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function TagihanComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-card-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, TagihanComponent_mat_card_2_mat_card_title_2_Template, 2, 1, "mat-card-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, TagihanComponent_mat_card_2_mat_card_title_3_Template, 2, 0, "mat-card-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, TagihanComponent_mat_card_2_div_6_Template, 5, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, TagihanComponent_mat_card_2_div_7_Template, 5, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](8, TagihanComponent_mat_card_2_div_8_Template, 5, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](9, TagihanComponent_mat_card_2_div_9_Template, 5, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](13, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "ID Transaksi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "strong", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22, "Pembayaran");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](23, TagihanComponent_mat_card_2_label_23_Template, 2, 0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](24, TagihanComponent_mat_card_2_label_24_Template, 2, 1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "strong", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27, "Nominal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](31, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "strong", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](33, "Nama Institusi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](37, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](39, TagihanComponent_mat_card_2_div_39_Template, 4, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](40, TagihanComponent_mat_card_2_button_40_Template, 4, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](41, TagihanComponent_mat_card_2_button_41_Template, 4, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](42, TagihanComponent_mat_card_2_button_42_Template, 4, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const bill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", bill_r1.type === "annual");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", bill_r1.type === "register");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", bill_r1.lastStatus === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", bill_r1.lastStatus === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", bill_r1.lastStatus === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", bill_r1.lastStatus === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](12, 16, bill_r1.lastStatusAt, "short"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](bill_r1.token.substr(24, 12));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", bill_r1.type === "register");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", bill_r1.type === "annual");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("Rp. ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](30, 19, bill_r1.amount + bill_r1.fee), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](bill_r1.member.universityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", bill_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", bill_r1.lastStatus === 0 || bill_r1.lastStatus === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", bill_r1.lastStatus === 3 && !bill_r1.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", bill_r1.lastStatus === 2 && !bill_r1.loading);
} }
class TagihanComponent {
    constructor(tagihanService, _FileSaverService, store // private cdr: ChangeDetectorRef
    ) {
        this.tagihanService = tagihanService;
        this._FileSaverService = _FileSaverService;
        this.store = store;
        this.store.dispatch(new src_app_states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(true));
        this.getBills();
    }
    ngOnInit() { }
    getBills() {
        this.tagihanService
            .getOrder()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => {
            this.store.dispatch(new src_app_states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(false));
        }))
            .subscribe((response) => {
            this.bills = response.bills;
        });
    }
    onPayButtonClick(bill) {
        // check status
        this.tagihanService.check(bill.orderId).subscribe((response) => {
            this.getBills();
        });
        window.snap.pay(bill.token);
    }
    onPrintClick(bill) {
        bill.loading = true;
        this.tagihanService.printReceipt(bill.token).subscribe((response) => {
            this._FileSaverService.save(response, 'Bukti Pembayaran.pdf', 'pdf');
            bill.loading = false;
        }, (err) => {
            bill.loading = false;
        });
    }
    onRetryClick(bill) {
        bill.loading = true;
        this.tagihanService.retry(bill.token).subscribe((response) => {
            window.snap.pay(response.bill.token, {
                onClose: () => {
                    this.getBills();
                },
            });
            bill.loading = false;
        }, (err) => {
            bill.loading = false;
        });
    }
}
TagihanComponent.??fac = function TagihanComponent_Factory(t) { return new (t || TagihanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_tagihan_service__WEBPACK_IMPORTED_MODULE_1__.TagihanService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](ngx_filesaver__WEBPACK_IMPORTED_MODULE_5__.FileSaverService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
TagihanComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: TagihanComponent, selectors: [["app-tagihan"]], decls: 3, vars: 1, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start start", "fxLayoutGap", "16px"], ["fxFlex.lg", "20%", "fxFlex.md", "45%", "fxFlex.sm", "45%", "style", "margin-top: 8px", 4, "ngFor", "ngForOf"], ["fxFlex.lg", "20%", "fxFlex.md", "45%", "fxFlex.sm", "45%", 2, "margin-top", "8px"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "8px", 2, "padding-bottom", "8px"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "8px", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 2, "padding", "8px"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "8px", 2, "padding", "8px 0"], ["for", ""], ["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "8px", 2, "margin", "8px 0"], [2, "color", "#ccc", "text-transform", "uppercase"], ["style", "font-size: 20px", 4, "ngIf"], [2, "font-size", "20px"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "padding-top", "8px"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "8px", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "8px"], [2, "color", "#ddd"], [2, "color", "#ffc957"], [2, "color", "#b9ea81"], [2, "color", "#ea5455"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "8px"], ["color", "primary", 3, "diameter"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function TagihanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, TagihanComponent_mat_card_2_Template, 43, 21, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.bills);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutGapDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardHeader, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatSpinner, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe], styles: [".mat-card[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.mat-card-header[_ngcontent-%COMP%] {\n  padding: 8px;\n  background-color: #ffca27;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n\n.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 16px;\n}\n\n.mat-card-content[_ngcontent-%COMP%] {\n  padding: 8px;\n  margin-bottom: 0;\n}\n\n.mat-card-actions[_ngcontent-%COMP%] {\n  padding: 16px !important;\n}\n\n.mat-card[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZ2loYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0Usd0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUYiLCJmaWxlIjoidGFnaWhhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNhMjc7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcblxuICAubWF0LWNhcmQtdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5tYXQtY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubWF0LWNhcmQtYWN0aW9ucyB7XG4gIHBhZGRpbmc6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1jYXJkIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 3648:
/*!*****************************************************!*\
  !*** ./src/app/user-view/tagihan/tagihan.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagihanModule": () => (/* binding */ TagihanModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _tagihan_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagihan.component */ 3076);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);











const routes = [
    {
        path: '',
        component: _tagihan_component__WEBPACK_IMPORTED_MODULE_0__.TagihanComponent,
    },
];
class TagihanModule {
}
TagihanModule.??fac = function TagihanModule_Factory(t) { return new (t || TagihanModule)(); };
TagihanModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: TagihanModule });
TagihanModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes),
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDividerModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](TagihanModule, { declarations: [_tagihan_component__WEBPACK_IMPORTED_MODULE_0__.TagihanComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__.FlexLayoutModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDividerModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_user-view_tagihan_tagihan_module_ts.js.map