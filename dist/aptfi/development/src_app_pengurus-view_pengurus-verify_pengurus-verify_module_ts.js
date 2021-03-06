"use strict";
(self["webpackChunkaptfi"] = self["webpackChunkaptfi"] || []).push([["src_app_pengurus-view_pengurus-verify_pengurus-verify_module_ts"],{

/***/ 8707:
/*!****************************************************************************!*\
  !*** ./src/app/pengurus-view/pengurus-verify/pengurus-verify.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PengurusVerifyComponent": () => (/* binding */ PengurusVerifyComponent),
/* harmony export */   "DialogConfirmVerify": () => (/* binding */ DialogConfirmVerify),
/* harmony export */   "DialogReject": () => (/* binding */ DialogReject)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _states_loading_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../states/loading.state */ 9989);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _pengurus_verify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pengurus-verify.service */ 9499);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);


























const _c0 = ["filterInput"];
const _c1 = ["matSelect"];
function PengurusVerifyComponent_mat_header_cell_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function PengurusVerifyComponent_mat_cell_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "No:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", element_r18.index, " ");
} }
function PengurusVerifyComponent_mat_header_cell_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Nama Universitas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function PengurusVerifyComponent_mat_cell_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", element_r20.universityName, "");
} }
function PengurusVerifyComponent_mat_header_cell_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Tanggal Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function PengurusVerifyComponent_mat_cell_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](3, 1, element_r21.registerLastAt, "d MMMM y"), "");
} }
function PengurusVerifyComponent_mat_header_cell_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Biaya Pendaftaran");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function PengurusVerifyComponent_mat_cell_32_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Sudah dibayar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function PengurusVerifyComponent_mat_cell_32_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Belum dibayar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function PengurusVerifyComponent_mat_cell_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, PengurusVerifyComponent_mat_cell_32_span_2_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, PengurusVerifyComponent_mat_cell_32_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", element_r22.registerPaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !element_r22.registerPaid);
} }
function PengurusVerifyComponent_mat_header_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Iuran Tahun Pertama");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function PengurusVerifyComponent_mat_cell_35_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Sudah dibayar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function PengurusVerifyComponent_mat_cell_35_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Belum dibayar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function PengurusVerifyComponent_mat_cell_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, PengurusVerifyComponent_mat_cell_35_span_2_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, PengurusVerifyComponent_mat_cell_35_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", element_r25.annualPaid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !element_r25.annualPaid);
} }
function PengurusVerifyComponent_mat_header_cell_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Dokumen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function PengurusVerifyComponent_mat_cell_38_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function PengurusVerifyComponent_mat_cell_38_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r30); const element_r28 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r29.onDetailClick(element_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, " Lihat Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function PengurusVerifyComponent_mat_header_cell_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function PengurusVerifyComponent_mat_cell_41_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function PengurusVerifyComponent_mat_cell_41_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r36); const element_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r34.onVerifyClick(element_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Verifikasi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function PengurusVerifyComponent_mat_cell_41_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function PengurusVerifyComponent_mat_cell_41_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r39); const element_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r37.onRejectClick(element_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Tolak ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function PengurusVerifyComponent_mat_cell_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, PengurusVerifyComponent_mat_cell_41_button_1_Template, 2, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, PengurusVerifyComponent_mat_cell_41_button_2_Template, 2, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", element_r31.registerLastStatus === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", element_r31.registerLastStatus === 2);
} }
function PengurusVerifyComponent_mat_header_row_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-header-row");
} }
function PengurusVerifyComponent_mat_row_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-row");
} }
const _c2 = function () { return [5, 10, 20]; };
function DialogReject_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Tolak");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", !ctx_r0.rejectForm.valid);
} }
function DialogReject_mat_spinner_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-spinner", 9);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("diameter", 20);
} }
class PengurusVerifyComponent {
    constructor(cdref, pengurusVerifyService, store, router, route, dialog, snackbar) {
        this.cdref = cdref;
        this.pengurusVerifyService = pengurusVerifyService;
        this.store = store;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.displayedColumns = [
            'index',
            'university_name',
            'created_at',
            'register_paid',
            'annual_paid',
            'document',
            'action',
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
        this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(true));
    }
    ngOnInit() {
        this.paginator.pageIndex = this.route.snapshot.queryParams.page || 0;
        this.paginator.pageSize = this.route.snapshot.queryParams.size || 10;
        this.paginator.page.next(null);
    }
    ngAfterViewInit() {
        this.statusSelect.value = this.route.snapshot.queryParams.status || '';
        this.filterInput.nativeElement.value = this.route.snapshot.queryParams.search || '';
        this.sort.sort({
            id: 'university_name',
            start: 'asc',
            disableClear: false,
        });
        this.cdref.detectChanges();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.merge)(this.sort.sortChange, this.paginator.page, (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.fromEvent)(this.filterInput.nativeElement, 'keyup'), this.statusSelect.valueChange)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)({}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(() => {
            this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(true));
            return this.loadData();
        }))
            .subscribe();
    }
    loadData() {
        return this.pengurusVerifyService
            .getAllMember(this.paginator.pageIndex + 1, this.paginator.pageSize, this.sort.active, this.sort.direction, this.filterInput.nativeElement.value, this.statusSelect.value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((data) => {
            this.resultsLength = data.pagination.length;
            return data.data;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((data) => {
            setTimeout(() => {
                this.filterInput.nativeElement.focus();
            }, 500);
            this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(false));
            this.dataSource.data = data.map((d, i) => {
                d.index = this.paginator.pageIndex > 0 ? i + this.paginator.pageIndex * this.paginator.pageSize + 1 : i + 1;
                return d;
            });
        }));
    }
    onVerifyClick(member) {
        this.dialog
            .open(DialogConfirmVerify, {
            width: '320px',
            data: {
                member: member,
            },
        })
            .afterClosed()
            .subscribe((result) => {
            if (result) {
                this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(true));
                this.pengurusVerifyService.verifyMember(member.uuid).subscribe(() => {
                    this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(false));
                    this.snackbar
                        .open('Verifikasi berhasil', 'Buat SK', {
                        panelClass: 'snackbar-success',
                        duration: 5000,
                    })
                        .afterDismissed()
                        .subscribe((value) => {
                        if (value) {
                            this.router.navigate(['pengurus/sk-member'], {
                                queryParams: {
                                    member: member.uuid,
                                },
                            });
                        }
                    });
                    this.loadData().subscribe();
                }, (err) => {
                    this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(false));
                });
            }
        });
    }
    onRejectClick(member) {
        this.dialog
            .open(DialogReject, {
            width: '320px',
            data: {
                member,
                type: 'reject',
            },
            closeOnNavigation: false,
            disableClose: true,
        })
            .afterClosed()
            .subscribe((result) => {
            if (result) {
                this.snackbar.open('Penolakan pendaftaran berhasil', 'Tutup', {
                    panelClass: 'snackbar-success',
                    duration: 5000,
                });
                this.loadData().subscribe();
            }
        });
    }
    onDetailClick(member) {
        this.router.navigate([`pengurus/verify/detail/${member.uuid}`], {
            queryParams: {
                page: this.paginator.pageIndex,
                origin: 'verify',
                search: this.filterInput.nativeElement.value,
                size: this.paginator.pageSize,
            },
        });
    }
}
PengurusVerifyComponent.??fac = function PengurusVerifyComponent_Factory(t) { return new (t || PengurusVerifyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_pengurus_verify_service__WEBPACK_IMPORTED_MODULE_1__.PengurusVerifyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar)); };
PengurusVerifyComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: PengurusVerifyComponent, selectors: [["app-pengurus-verify"]], viewQuery: function PengurusVerifyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????viewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.filterInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????loadQuery"]()) && (ctx.statusSelect = _t.first);
    } }, decls: 45, vars: 11, consts: [["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "32px"], ["fxFlex", "70%"], ["matInput", ""], ["filterInput", ""], ["fxFlex", "25%"], ["placeholder", "Status Pendaftaran", "name", "status"], ["matSelect", ""], [3, "value"], [1, "mat-elevation-z8"], ["matSort", "", 3, "dataSource"], ["matColumnDef", "index"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "university_name"], ["mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "created_at"], ["matColumnDef", "register_paid"], ["matColumnDef", "annual_paid"], ["matColumnDef", "document"], ["matColumnDef", "action"], ["fxLayout", "column", "fxLayoutAlign", "start start", "fxLayoutGap", "8px", "style", "padding: 8px 0px", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions", "length"], [1, "mobile-label"], ["mat-sort-header", ""], ["class", "pills success", 4, "ngIf"], ["class", "pills warn", 4, "ngIf"], [1, "pills", "success"], [1, "pills", "warn"], ["mat-flat-button", "", "color", "primary", 1, "button-small", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "start start", "fxLayoutGap", "8px", 2, "padding", "8px 0px"], ["mat-flat-button", "", "color", "accent", "class", "button-small", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "warn", "class", "button-small", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", 1, "button-small", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "button-small", 3, "click"]], template: function PengurusVerifyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "Cari");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-select", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, "Tampilkan Semua");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "Daftar Akun");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "Menunggu Pembayaran");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "Verifikasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18, "Ditolak");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "mat-table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](21, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](22, PengurusVerifyComponent_mat_header_cell_22_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](23, PengurusVerifyComponent_mat_cell_23_Template, 4, 1, "mat-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](24, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](25, PengurusVerifyComponent_mat_header_cell_25_Template, 2, 0, "mat-header-cell", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](26, PengurusVerifyComponent_mat_cell_26_Template, 3, 1, "mat-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](27, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](28, PengurusVerifyComponent_mat_header_cell_28_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](29, PengurusVerifyComponent_mat_cell_29_Template, 4, 4, "mat-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](30, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](31, PengurusVerifyComponent_mat_header_cell_31_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](32, PengurusVerifyComponent_mat_cell_32_Template, 4, 2, "mat-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](33, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](34, PengurusVerifyComponent_mat_header_cell_34_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](35, PengurusVerifyComponent_mat_cell_35_Template, 4, 2, "mat-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](36, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](37, PengurusVerifyComponent_mat_header_cell_37_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](38, PengurusVerifyComponent_mat_cell_38_Template, 4, 0, "mat-cell", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](39, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](40, PengurusVerifyComponent_mat_header_cell_40_Template, 2, 0, "mat-header-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](41, PengurusVerifyComponent_mat_cell_41_Template, 3, 2, "mat-cell", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](42, PengurusVerifyComponent_mat_header_row_42_Template, 1, 0, "mat-header-row", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](43, PengurusVerifyComponent_mat_row_43_Template, 1, 0, "mat-row", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](44, "mat-paginator", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction0"](10, _c2))("length", ctx.resultsLength);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutGapDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%] {\n  background: #8ecf54;\n}\n\n.mobile-label[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.button-small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 28px;\n  padding: 0px 12px;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n@media (max-width: 600px) {\n  .mobile-label[_ngcontent-%COMP%] {\n    width: 80px;\n    display: inline-block;\n    font-weight: bold;\n  }\n\n  .mat-header-row[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mat-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 24px;\n  }\n}\n\n@media (min-width: 600px) {\n  .mat-column-index[_ngcontent-%COMP%] {\n    flex: 0 0 4%;\n  }\n\n  .mat-column-university_name[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n  }\n\n  .mat-column-created_at[_ngcontent-%COMP%] {\n    flex: 0 0 14%;\n  }\n\n  .mat-column-register_paid[_ngcontent-%COMP%] {\n    flex: 0 0 14%;\n  }\n\n  .mat-column-annual_paid[_ngcontent-%COMP%] {\n    flex: 0 0 14%;\n  }\n\n  .mat-column-document[_ngcontent-%COMP%] {\n    flex: 0 0 14%;\n  }\n\n  .mat-column-action[_ngcontent-%COMP%] {\n    flex: 0 0 14%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmd1cnVzLXZlcmlmeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0Usb0JBQUE7QUFFRjs7QUFBQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7RUFHRjs7RUFBQTtJQUNFLGFBQUE7RUFHRjs7RUFBQTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQUdGO0FBQ0Y7O0FBQUE7RUFDRTtJQUNFLFlBQUE7RUFFRjs7RUFDQTtJQUNFLGFBQUE7RUFFRjs7RUFBQTtJQUNFLGFBQUE7RUFHRjs7RUFEQTtJQUNFLGFBQUE7RUFJRjs7RUFGQTtJQUNFLGFBQUE7RUFLRjs7RUFIQTtJQUNFLGFBQUE7RUFNRjs7RUFKQTtJQUNFLGFBQUE7RUFPRjtBQUNGIiwiZmlsZSI6InBlbmd1cnVzLXZlcmlmeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICM4ZWNmNTQ7XG59XG5cbi5tb2JpbGUtbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYnV0dG9uLXNtYWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgcGFkZGluZzogMHB4IDEycHg7XG59XG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vYmlsZS1sYWJlbCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItcm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hdC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAubWF0LWNvbHVtbi1pbmRleCB7XG4gICAgZmxleDogMCAwIDQlO1xuICB9XG5cbiAgLm1hdC1jb2x1bW4tdW5pdmVyc2l0eV9uYW1lIHtcbiAgICBmbGV4OiAwIDAgMjUlO1xuICB9XG4gIC5tYXQtY29sdW1uLWNyZWF0ZWRfYXQge1xuICAgIGZsZXg6IDAgMCAxNCU7XG4gIH1cbiAgLm1hdC1jb2x1bW4tcmVnaXN0ZXJfcGFpZCB7XG4gICAgZmxleDogMCAwIDE0JTtcbiAgfVxuICAubWF0LWNvbHVtbi1hbm51YWxfcGFpZCB7XG4gICAgZmxleDogMCAwIDE0JTtcbiAgfVxuICAubWF0LWNvbHVtbi1kb2N1bWVudCB7XG4gICAgZmxleDogMCAwIDE0JTtcbiAgfVxuICAubWF0LWNvbHVtbi1hY3Rpb24ge1xuICAgIGZsZXg6IDAgMCAxNCU7XG4gIH1cbn1cbiJdfQ== */"] });
class DialogConfirmVerify {
    constructor(dialogRef, data, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    goToSK() {
        this.router.navigate(['pengurus/sk-member']);
    }
}
DialogConfirmVerify.??fac = function DialogConfirmVerify_Factory(t) { return new (t || DialogConfirmVerify)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router)); };
DialogConfirmVerify.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: DialogConfirmVerify, selectors: [["dialog-confirm-verify"]], decls: 16, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "fxLayout", "row", "fxLayoutAlign", "space-around end", 2, "margin-bottom", "0px", "padding", "0"], ["mat-flat-button", "", "color", "primary", "cdkFocusInitial", "", 3, "click"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function DialogConfirmVerify_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Verifikasi Anggota APTFI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4, " Apakah anda yakin untuk melakukan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "verifikasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, " pendaftaran ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, " ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function DialogConfirmVerify_Template_button_click_12_listener() { return ctx.dialogRef.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13, "Tidak");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function DialogConfirmVerify_Template_button_click_14_listener() { return ctx.dialogRef.close(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, "Ya, saya yakin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.data.member.universityName);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogActions, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton], encapsulation: 2 });
class DialogReject {
    constructor(dialogRef, data, pengurusVerifyService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.pengurusVerifyService = pengurusVerifyService;
        this.loading = false;
    }
    ngOnInit() {
        this.rejectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormGroup({
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_24__.Validators.required]),
        });
    }
    onSubmit() {
        if (this.rejectForm.valid) {
            this.loading = true;
            this.pengurusVerifyService.rejectMember(this.data.member.uuid, this.rejectForm.value.reason).subscribe(() => {
                this.dialogRef.close(true);
            }, (err) => {
                this.loading = false;
            });
        }
    }
}
DialogReject.??fac = function DialogReject_Factory(t) { return new (t || DialogReject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_pengurus_verify_service__WEBPACK_IMPORTED_MODULE_1__.PengurusVerifyService)); };
DialogReject.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: DialogReject, selectors: [["dialog-reject"]], decls: 18, vars: 4, consts: [["mat-dialog-title", ""], [2, "width", "100%", 3, "formGroup", "submit"], ["mat-dialog-content", "", "fxLayout", "column", "fxLayoutAlign", "start stretch", 2, "margin", "0"], ["matInput", "", "placeholder", "Alasan Penolakan", "formControlName", "reason", "rows", "5"], ["mat-dialog-actions", "", "fxLayout", "row", "fxLayoutAlign", "space-around end", 2, "margin-bottom", "0px", "padding", "0"], ["mat-flat-button", "", "type", "button", "color", "primary", "cdkFocusInitial", "", 3, "click"], ["mat-flat-button", "", "type", "submit", "color", "warn", 3, "disabled", 4, "ngIf"], [3, "diameter", 4, "ngIf"], ["mat-flat-button", "", "type", "submit", "color", "warn", 3, "disabled"], [3, "diameter"]], template: function DialogReject_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Penolakan Anggota APTFI");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("submit", function DialogReject_Template_form_submit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Berikan alasan penolakan atas pendaftaran ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "Alsan Penolakan harus diisi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function DialogReject_Template_button_click_14_listener() { return ctx.dialogRef.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, " Batal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](16, DialogReject_button_16_Template, 2, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](17, DialogReject_mat_spinner_17_Template, 1, 1, "mat-spinner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.rejectForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.data.member.universityName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormGroupDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutAlignDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatError, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatSpinner], encapsulation: 2 });


/***/ }),

/***/ 4388:
/*!*************************************************************************!*\
  !*** ./src/app/pengurus-view/pengurus-verify/pengurus-verify.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PengurusVerifyModule": () => (/* binding */ PengurusVerifyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pengurus_verify_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pengurus-verify.component */ 8707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _verify_document_verify_document_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-document/verify-document.component */ 6323);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





















const routes = [
    {
        path: '',
        component: _pengurus_verify_component__WEBPACK_IMPORTED_MODULE_0__.PengurusVerifyComponent,
    },
];
class PengurusVerifyModule {
}
PengurusVerifyModule.??fac = function PengurusVerifyModule_Factory(t) { return new (t || PengurusVerifyModule)(); };
PengurusVerifyModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: PengurusVerifyModule });
PengurusVerifyModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](PengurusVerifyModule, { declarations: [_pengurus_verify_component__WEBPACK_IMPORTED_MODULE_0__.PengurusVerifyComponent, _verify_document_verify_document_component__WEBPACK_IMPORTED_MODULE_1__.VerifyDocumentComponent, _pengurus_verify_component__WEBPACK_IMPORTED_MODULE_0__.DialogConfirmVerify, _pengurus_verify_component__WEBPACK_IMPORTED_MODULE_0__.DialogReject], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule] }); })();


/***/ }),

/***/ 6323:
/*!********************************************************************************************!*\
  !*** ./src/app/pengurus-view/pengurus-verify/verify-document/verify-document.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyDocumentComponent": () => (/* binding */ VerifyDocumentComponent)
/* harmony export */ });
/* harmony import */ var _states_loading_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../states/loading.state */ 9989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _pengurus_verify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pengurus-verify.service */ 9499);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-filesaver */ 8283);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);












function VerifyDocumentComponent_section_235_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Program Studi Sarjana (S2)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, "Nama Program Studi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18, "Ijin Operasional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](20, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27, "Akreditasi Oleh");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](29, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](33, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](36, "No. SK Akreditasi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](38, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](42, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](45, "Jumlah mahasiswa");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](47, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](50, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](51, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](52, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](53, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](54, "Jumlah mahasiswa per tahun");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](56, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](59, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](62, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](63, "No. Telpon/Fax Prodi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](65, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](68, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](69, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](70, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](71, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](72, "Nama Ketua Prodi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](73, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](74, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](77, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](78, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](79, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](80, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](81, "No. HP Ketua Prodi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](82, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](83, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](84, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](86, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](87, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](88, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](89, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](90, "E-mail Ketua Prodi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](91, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](92, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.s2 == null ? null : ctx_r1.s2.prodiName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.s2 == null ? null : ctx_r1.s2.prodiPermit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.s2 == null ? null : ctx_r1.s2.prodiAccreditedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.s2 == null ? null : ctx_r1.s2.prodiAccreditedNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.s2 == null ? null : ctx_r1.s2.prodiStudents);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.s2 == null ? null : ctx_r1.s2.prodiStudentsYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.s2 == null ? null : ctx_r1.s2.prodiPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.s2 == null ? null : ctx_r1.s2.prodiHead);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.s2 == null ? null : ctx_r1.s2.prodiHeadPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.s2 == null ? null : ctx_r1.s2.prodiHeadEmail);
} }
function VerifyDocumentComponent_section_237_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Dosen Tetap Prodi Profesi Apoteker");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "mat-divider", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, "File Data Dosen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function VerifyDocumentComponent_section_237_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r5.download("dosen_file_pspa"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, " Unduh File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function VerifyDocumentComponent_section_238_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "Data Informasi Anggaran, Fasilitas dan Sarana-Prasarana");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "mat-divider", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9, "File Data Anggaran");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function VerifyDocumentComponent_section_238_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r7.download("dosen_file_sarpra"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, " Unduh File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function VerifyDocumentComponent_button_246_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function VerifyDocumentComponent_button_246_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r9.onVerifyClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4, "Verifikasi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
class VerifyDocumentComponent {
    constructor(pengurusVerifyService, route, router, store, _FileSaverService, snackbar) {
        this.pengurusVerifyService = pengurusVerifyService;
        this.route = route;
        this.router = router;
        this.store = store;
        this._FileSaverService = _FileSaverService;
        this.snackbar = snackbar;
        this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(true));
    }
    ngOnInit() {
        this.pengurusVerifyService.getDetailMember(this.route.snapshot.params.uuid).subscribe((response) => {
            this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(false));
            this.member = response.member;
            this.s1 = this.member.prodis.filter((prodi) => prodi.prodiType === 's1')[0];
            this.s2 = this.member.prodis.filter((prodi) => prodi.prodiType === 's2')[0];
            this.pspa = this.member.prodis.filter((prodi) => prodi.prodiType === 'pspa')[0];
        });
    }
    download(column) {
        this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(true));
        this.pengurusVerifyService.downloadFile(this.member.uuid, column).subscribe((resp) => {
            let fileName = '';
            if (column === 'dosen_file_S1') {
                fileName = `Data Dosen Tetap S1 ${this.member.universityName}`;
            }
            else if (column === 'dosen_file_pspa') {
                fileName = `Data Dosen Tetap PSPA ${this.member.universityName}`;
            }
            else if (column === 'dosen_file_sarpra') {
                fileName = `Data Anggaran ${this.member.universityName}`;
            }
            this._FileSaverService.save(resp, fileName, 'xlsx');
            this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(false));
        }, (err) => {
            this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(false));
        });
    }
    onVerifyClick() {
        this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(true));
        this.pengurusVerifyService.verifyMember(this.member.uuid).subscribe(() => {
            this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(false));
            this.router.navigate(['pengurus/verify'], {
                queryParams: this.route.snapshot.queryParams,
            });
            this.snackbar.open('Verifikasi Berhasil', '', {
                panelClass: ['snackbar-success'],
                duration: 2000,
            });
        }, (err) => {
            this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(false));
            this.snackbar.open('Verifikasi Gagal', '', {
                panelClass: ['snackbar-warn'],
                duration: 2000,
            });
        });
    }
    back() {
        this.router.navigate(['pengurus/verify'], {
            queryParams: this.route.snapshot.queryParams,
        });
    }
}
VerifyDocumentComponent.??fac = function VerifyDocumentComponent_Factory(t) { return new (t || VerifyDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_pengurus_verify_service__WEBPACK_IMPORTED_MODULE_1__.PengurusVerifyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](ngx_filesaver__WEBPACK_IMPORTED_MODULE_5__.FileSaverService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar)); };
VerifyDocumentComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: VerifyDocumentComponent, selectors: [["app-verify-document"]], decls: 247, vars: 27, consts: [["fxLayout", "column", "fxLayoutAlign", "center stretch", "fxLayoutGap", "16px"], [2, "text-align", "center"], ["title", ""], ["width", "20%"], [2, "margin", "0"], ["width", "5%"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["style", "width: 100%", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["for", ""], ["mat-flat-button", "", "style", "background-color: #8ecf54; color: #fff", 3, "click", 4, "ngIf"], [2, "width", "100%"], [2, "margin-bottom", "16px"], ["width", "30%"], ["mat-flat-button", "", 2, "background-color", "#8ecf54", "color", "#fff", 3, "click"]], template: function VerifyDocumentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "h1", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "Universitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](13, "Nama Yayasan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](15, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22, "Nama Ketua Yayasan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](24, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](28, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](31, "Nama Universitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](32, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](33, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](37, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](38, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](40, "Nama Rektor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](41, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](42, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](46, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](47, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](48, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](49, "Forum Wilayah");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](50, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](51, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](55, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](56, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](58, "Alamat Universitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](59, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](60, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](63, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](65, "Fakultas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](66, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](67, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](69, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](70, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](71, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](72, "Nama Fakultas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](73, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](74, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](77, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](78, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](79, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](80, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](81, "Nama Dekan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](82, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](83, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](84, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](86, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](87, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](88, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](89, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](90, "Alamat Fakultas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](91, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](92, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](95, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](96, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](97, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](98, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](99, "No. HP / Fax Fakultas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](100, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](101, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](104, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](105, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](106, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](107, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](108, "Website Fakultas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](109, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](110, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](111, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](113, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](114, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](115, "Program Studi Sarjana (S1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](116, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](117, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](118, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](119, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](120, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](121, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](122, "Nama Program Studi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](123, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](124, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](127, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](128, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](129, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](130, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](131, "Ijin Operasional");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](132, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](133, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](136, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](137, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](138, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](139, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](140, "Akreditasi Oleh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](141, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](142, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](145, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](146, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](147, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](148, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](149, "No. SK Akreditasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](150, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](151, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](154, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](155, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](156, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](157, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](158, "Email Program Studi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](159, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](160, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](163, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](164, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](165, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](166, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](167, "Jumlah mahasiswa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](168, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](169, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](170, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](172, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](173, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](174, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](175, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](176, "Jumlah mahasiswa per tahun");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](177, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](178, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](180);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](181, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](182, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](183, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](184, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](185, "No. Telpon/Fax Prodi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](186, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](187, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](189);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](190, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](191, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](192, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](193, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](194, "Nama Ketua Prodi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](195, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](196, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](197, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](198);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](199, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](200, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](201, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](202, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](203, "No. HP Ketua Prodi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](204, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](205, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](207);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](208, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](209, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](210, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](211, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](212, "E-mail Ketua Prodi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](213, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](214, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](216);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](217, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](218, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](219, "Dosen Tetap Prodi S1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](220, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](221, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](222, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](223, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](224, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](225, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](226, "File Data Dosen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](227, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](228, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](230, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function VerifyDocumentComponent_Template_button_click_230_listener() { return ctx.download("dosen_file_S1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](231, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](232, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](233, " Unduh File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](234, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](235, VerifyDocumentComponent_section_235_Template, 95, 10, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](236, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](237, VerifyDocumentComponent_section_237_Template, 17, 0, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](238, VerifyDocumentComponent_section_238_Template, 17, 0, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](239, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](240, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](241, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function VerifyDocumentComponent_Template_button_click_241_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](242, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](243, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](244, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](245, "Kembali");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](246, VerifyDocumentComponent_button_246_Template, 5, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("Detail Dokumen ", ctx.member == null ? null : ctx.member.universityName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.member == null ? null : ctx.member.foundationName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.member == null ? null : ctx.member.headOfFoundation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.member == null ? null : ctx.member.universityName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.member == null ? null : ctx.member.rectorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.member == null ? null : ctx.member.regForum.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.member == null ? null : ctx.member.universityAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.member == null ? null : ctx.member.facultyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.member == null ? null : ctx.member.deanName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.member == null ? null : ctx.member.facultyAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.member == null ? null : ctx.member.facultyPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.member == null ? null : ctx.member.facultyWebsite);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiPermit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiAccreditedBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiAccreditedNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiStudents);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiStudentsYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiHead);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiHeadPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiHeadEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.s2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.member == null ? null : ctx.member.dosenFilePspa);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.member == null ? null : ctx.member.dosenFileSarpra);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", (ctx.member == null ? null : ctx.member.annualPaid) && (ctx.member == null ? null : ctx.member.registerPaid));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutGapDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnktZG9jdW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pengurus-view_pengurus-verify_pengurus-verify_module_ts.js.map