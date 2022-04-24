"use strict";
(self["webpackChunkaptfi"] = self["webpackChunkaptfi"] || []).push([["src_app_pengurus-view_pengurus-view_module_ts"],{

/***/ 131:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pengurus-view/pengurus-member/pengurus-member-detail/pengurus-member-detail.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PengurusMemberDetailComponent": () => (/* binding */ PengurusMemberDetailComponent)
/* harmony export */ });
/* harmony import */ var _states_loading_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../states/loading.state */ 9989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _pengurus_verify_pengurus_verify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pengurus-verify/pengurus-verify.service */ 9499);
/* harmony import */ var ngx_filesaver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-filesaver */ 8283);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);














function PengurusMemberDetailComponent_th_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PengurusMemberDetailComponent_td_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](index_r20 + 1);
} }
function PengurusMemberDetailComponent_th_174_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nama Dosen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PengurusMemberDetailComponent_td_175_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", element_r21.dosenName, " ", element_r21.dosenTitle, "");
} }
function PengurusMemberDetailComponent_th_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "NIDN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PengurusMemberDetailComponent_td_178_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r22.dosenNidn);
} }
function PengurusMemberDetailComponent_th_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Tanggal Lahir");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PengurusMemberDetailComponent_td_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, element_r23.dosenBirthDate));
} }
function PengurusMemberDetailComponent_th_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Jabatan Akademik");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PengurusMemberDetailComponent_td_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r24.dosenPosition);
} }
function PengurusMemberDetailComponent_th_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Bidang Keahlian");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PengurusMemberDetailComponent_td_187_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r25.dosenExpertise);
} }
function PengurusMemberDetailComponent_th_189_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Program Studi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PengurusMemberDetailComponent_td_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r26.dosenProdi);
} }
function PengurusMemberDetailComponent_tr_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 24);
} }
function PengurusMemberDetailComponent_tr_192_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 25);
} }
function PengurusMemberDetailComponent_mat_tab_193_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tab", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Nama Program Studi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Ijin Operasional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Akreditasi Oleh");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "No. SK Akreditasi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Email Prodi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Jumlah Mahasiswa");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Jumlah Mahasiswa per Tahun");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "No. Telepon/Fax");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Nama Ketua Prodi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "No. HP Ketua Prodi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Email ketua Prodi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.s2 == null ? null : ctx_r16.s2.prodiName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.s2 == null ? null : ctx_r16.s2.prodiPermit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.s2 == null ? null : ctx_r16.s2.prodiAccreditedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.s2 == null ? null : ctx_r16.s2.prodiAccreditedNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.s2 == null ? null : ctx_r16.s2.prodiEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.s2 == null ? null : ctx_r16.s2.prodiStudents);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.s2 == null ? null : ctx_r16.s2.prodiStudentsYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.s2 == null ? null : ctx_r16.s2.prodiPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.s2 == null ? null : ctx_r16.s2.prodiHead);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.s2 == null ? null : ctx_r16.s2.prodiHeadPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.s2 == null ? null : ctx_r16.s2.prodiEmail);
} }
function PengurusMemberDetailComponent_mat_tab_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tab", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Nama Program Studi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Ijin Operasional");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Akreditasi Oleh");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "No. SK Akreditasi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Email Prodi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Jumlah Mahasiswa");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Jumlah Mahasiswa per Tahun");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "No. Telepon/Fax");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Nama Ketua Prodi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "No. HP Ketua Prodi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Email ketua Prodi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.pspa == null ? null : ctx_r17.pspa.prodiName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.pspa == null ? null : ctx_r17.pspa.prodiPermit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.pspa == null ? null : ctx_r17.pspa.prodiAccreditedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.pspa == null ? null : ctx_r17.pspa.prodiAccreditedNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.pspa == null ? null : ctx_r17.pspa.prodiEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.pspa == null ? null : ctx_r17.pspa.prodiStudents);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.pspa == null ? null : ctx_r17.pspa.prodiStudentsYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.pspa == null ? null : ctx_r17.pspa.prodiPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.pspa == null ? null : ctx_r17.pspa.prodiHead);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.pspa == null ? null : ctx_r17.pspa.prodiHeadPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.pspa == null ? null : ctx_r17.pspa.prodiEmail);
} }
function PengurusMemberDetailComponent_mat_tab_195_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PengurusMemberDetailComponent_mat_tab_195_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r44 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](index_r44 + 1);
} }
function PengurusMemberDetailComponent_mat_tab_195_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Nama Dosen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PengurusMemberDetailComponent_mat_tab_195_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", element_r45.dosenName, " ", element_r45.dosenTitle, "");
} }
function PengurusMemberDetailComponent_mat_tab_195_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "NIDN");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PengurusMemberDetailComponent_mat_tab_195_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r46.dosenNidn);
} }
function PengurusMemberDetailComponent_mat_tab_195_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Tanggal Lahir");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PengurusMemberDetailComponent_mat_tab_195_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, element_r47.dosenBirthDate));
} }
function PengurusMemberDetailComponent_mat_tab_195_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Jabatan Akademik");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PengurusMemberDetailComponent_mat_tab_195_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r48.dosenPosition);
} }
function PengurusMemberDetailComponent_mat_tab_195_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Bidang Keahlian");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PengurusMemberDetailComponent_mat_tab_195_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r49.dosenExpertise);
} }
function PengurusMemberDetailComponent_mat_tab_195_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Program Studi");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PengurusMemberDetailComponent_mat_tab_195_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r50.dosenProdi);
} }
function PengurusMemberDetailComponent_mat_tab_195_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 24);
} }
function PengurusMemberDetailComponent_mat_tab_195_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 25);
} }
function PengurusMemberDetailComponent_mat_tab_195_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tab", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PengurusMemberDetailComponent_mat_tab_195_th_3_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PengurusMemberDetailComponent_mat_tab_195_td_4_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](5, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PengurusMemberDetailComponent_mat_tab_195_th_6_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PengurusMemberDetailComponent_mat_tab_195_td_7_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PengurusMemberDetailComponent_mat_tab_195_th_9_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PengurusMemberDetailComponent_mat_tab_195_td_10_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, PengurusMemberDetailComponent_mat_tab_195_th_12_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PengurusMemberDetailComponent_mat_tab_195_td_13_Template, 3, 3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, PengurusMemberDetailComponent_mat_tab_195_th_15_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, PengurusMemberDetailComponent_mat_tab_195_td_16_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, PengurusMemberDetailComponent_mat_tab_195_th_18_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, PengurusMemberDetailComponent_mat_tab_195_td_19_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](20, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, PengurusMemberDetailComponent_mat_tab_195_th_21_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, PengurusMemberDetailComponent_mat_tab_195_td_22_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, PengurusMemberDetailComponent_mat_tab_195_tr_23_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, PengurusMemberDetailComponent_mat_tab_195_tr_24_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r18.dosenPSPA);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r18.dosenColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r18.dosenColumns);
} }
function PengurusMemberDetailComponent_mat_tab_196_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-tab", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PengurusMemberDetailComponent_mat_tab_196_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r52.download("dosen_file_sarpra"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Download Data dan Informasi Anggaran, Fasilitas dan Sarana-Prasarana ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class PengurusMemberDetailComponent {
    constructor(pengurusVerifyService, _FileSaverService, route, store, router) {
        this.pengurusVerifyService = pengurusVerifyService;
        this._FileSaverService = _FileSaverService;
        this.route = route;
        this.store = store;
        this.router = router;
        this.dosenColumns = [
            'index',
            'dosen_name',
            'dosen_nidn',
            'dosen_birth_date',
            'dosen_position',
            'dosen_expertise',
            'dosen_prodi',
        ];
        this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(true));
    }
    ngOnInit() {
        this.queryParams = this.route.snapshot.queryParams;
        const uuid = this.route.snapshot.params.uuid;
        this.pengurusVerifyService.getDetailMember(uuid).subscribe((response) => {
            this.member = response.member;
            this.s1 = this.member.prodis.filter((p) => p.prodiType === 's1')[0];
            this.s2 = this.member.prodis.filter((p) => p.prodiType === 's2')[0];
            this.pspa = this.member.prodis.filter((p) => p.prodiType === 'pspa')[0];
            this.dosenS1 = this.member.dosens.filter((p) => p.dosenType === 's1');
            this.dosenPSPA = this.member.dosens.filter((p) => p.dosenType === 'pspa');
            this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(false));
        }, (err) => {
            this.store.dispatch(new _states_loading_state__WEBPACK_IMPORTED_MODULE_0__.SetLoadingState(false));
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
    goBack() {
        if (this.queryParams.origin === 'verify') {
            this.router.navigate(['/pengurus/verify'], {
                queryParams: this.queryParams,
            });
        }
        else {
            this.router.navigate(['/pengurus/anggota'], {
                queryParams: this.queryParams,
            });
        }
    }
}
PengurusMemberDetailComponent.ɵfac = function PengurusMemberDetailComponent_Factory(t) { return new (t || PengurusMemberDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_pengurus_verify_pengurus_verify_service__WEBPACK_IMPORTED_MODULE_1__.PengurusVerifyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_filesaver__WEBPACK_IMPORTED_MODULE_4__.FileSaverService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
PengurusMemberDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PengurusMemberDetailComponent, selectors: [["app-pengurus-member-detail"]], decls: 197, vars: 29, consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "24px"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["label", "Universitas"], ["label", "Fakultas"], ["label", "Prodi S1"], ["label", "Dosen S1"], ["mat-table", "", 1, "mat-elevation-z8", 2, "width", "100%", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "dosen_name"], ["matColumnDef", "dosen_nidn"], ["matColumnDef", "dosen_birth_date"], ["matColumnDef", "dosen_position"], ["matColumnDef", "dosen_expertise"], ["matColumnDef", "dosen_prodi"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "Prodi S2", 4, "ngIf"], ["label", "Prodi PA", 4, "ngIf"], ["label", "Dosen PSPA", 4, "ngIf"], ["label", "Anggaran", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["label", "Prodi S2"], ["label", "Prodi PA"], ["label", "Dosen PSPA"], ["label", "Anggaran"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "width", "100%", "margin-top", "24px"]], template: function PengurusMemberDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PengurusMemberDetailComponent_Template_button_click_2_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Kembali");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Nama Yayasan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Nama Ketua Yayasan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Nama Universitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Nama Rektor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Forum Wialyah");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Alamat Universitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Nama Fakultas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Nama Dekan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Alamat Fakultas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "No. Telepon / Fax");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Website Fakultas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Nama Program Studi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Ijin Operasional");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Akreditasi Oleh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "No. SK Akreditasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "Email Prodi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "Jumlah Mahasiswa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Jumlah Mahasiswa per Tahun");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](139, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "No. Telepon/Fax");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](146, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "Nama Ketua Prodi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](153, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "No. HP Ketua Prodi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "dl");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "dt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "Email ketua Prodi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "dd");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](167, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](170, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](171, PengurusMemberDetailComponent_th_171_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](172, PengurusMemberDetailComponent_td_172_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](173, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](174, PengurusMemberDetailComponent_th_174_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](175, PengurusMemberDetailComponent_td_175_Template, 2, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](176, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](177, PengurusMemberDetailComponent_th_177_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](178, PengurusMemberDetailComponent_td_178_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](179, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](180, PengurusMemberDetailComponent_th_180_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](181, PengurusMemberDetailComponent_td_181_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](182, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](183, PengurusMemberDetailComponent_th_183_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](184, PengurusMemberDetailComponent_td_184_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](185, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](186, PengurusMemberDetailComponent_th_186_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](187, PengurusMemberDetailComponent_td_187_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](188, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](189, PengurusMemberDetailComponent_th_189_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](190, PengurusMemberDetailComponent_td_190_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](191, PengurusMemberDetailComponent_tr_191_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](192, PengurusMemberDetailComponent_tr_192_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](193, PengurusMemberDetailComponent_mat_tab_193_Template, 79, 11, "mat-tab", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](194, PengurusMemberDetailComponent_mat_tab_194_Template, 79, 11, "mat-tab", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](195, PengurusMemberDetailComponent_mat_tab_195_Template, 25, 3, "mat-tab", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](196, PengurusMemberDetailComponent_mat_tab_196_Template, 4, 0, "mat-tab", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.member == null ? null : ctx.member.foundationName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.member == null ? null : ctx.member.headOfFoundation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.member == null ? null : ctx.member.universityName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.member == null ? null : ctx.member.rectorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.member == null ? null : ctx.member.regForum.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.member == null ? null : ctx.member.universityAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.member == null ? null : ctx.member.facultyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.member == null ? null : ctx.member.deanName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.member == null ? null : ctx.member.facultyAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.member == null ? null : ctx.member.facultyPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.member == null ? null : ctx.member.facultyWebsite);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiPermit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiAccreditedBy);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiAccreditedNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiStudents);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiStudentsYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiHead);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiHeadPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.s1 == null ? null : ctx.s1.prodiEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dosenS1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.dosenColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.dosenColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.s2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.pspa);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.dosenPSPA == null ? null : ctx.dosenPSPA.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.member == null ? null : ctx.member.dosenFileSarpra);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutGapDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTab, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRowDef, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: ["dt[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  width: 200px;\n  text-align: left;\n  font-weight: bold;\n  clear: both;\n}\n\ndl[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ndd[_ngcontent-%COMP%]::before {\n  font-weight: bold;\n  padding-right: 8px;\n  content: \":\";\n}\n\ndd[_ngcontent-%COMP%] {\n  display: block;\n}\n\na.hover[_ngcontent-%COMP%]:hover {\n  cursor: pointer !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmd1cnVzLW1lbWJlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7QUFFRjs7QUFDQTtFQUNFLDBCQUFBO0FBRUYiLCJmaWxlIjoicGVuZ3VydXMtbWVtYmVyLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImR0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjbGVhcjogYm90aDtcbn1cblxuZGwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuZGQ6OmJlZm9yZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIGNvbnRlbnQ6IFwiOlwiO1xufVxuZGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYS5ob3Zlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuIl19 */"] });


/***/ }),

/***/ 7113:
/*!************************************************************************************!*\
  !*** ./src/app/pengurus-view/pengurus-navigation/pengurus-navigation.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PengurusNavigationComponent": () => (/* binding */ PengurusNavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var src_app_app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.state */ 2534);
/* harmony import */ var src_app_user_view_user_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user-view/user.state */ 2262);
/* harmony import */ var _states_loading_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../states/loading.state */ 9989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);




















function PengurusNavigationComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PengurusNavigationComponent_button_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);

      return _r0.toggle();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function PengurusNavigationComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "mat-spinner", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 5);
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

class PengurusNavigationComponent {
  constructor(breakpointObserver, store, router) {
    this.breakpointObserver = breakpointObserver;
    this.store = store;
    this.router = router;
    this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)());
    this.approvalOpened = false;
    this.tagihanOpened = false;
    this.anggotaOpened = false;
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
    const anggotaMenu = ['/pengurus/anggota', '/pengurus/dosen'];

    for (const am of anggotaMenu) {
      if (this.router.url.includes(am)) {
        this.anggotaOpened = true;
      }
    }

    const approvalMenu = ['/pengurus/verify', '/pengurus/sk-member'];

    for (const am of approvalMenu) {
      if (this.router.url.includes(am)) {
        this.approvalOpened = true;
      }
    }

    const tagihanMenu = ['/pengurus/tagihan'];

    for (const am of tagihanMenu) {
      if (this.router.url.includes(am)) {
        this.tagihanOpened = true;
      }
    }

    this.state$ = this.store.select(src_app_user_view_user_state__WEBPACK_IMPORTED_MODULE_1__.UserState);
  }

  onOpened(name) {
    if (name === 'approval') {
      this.approvalOpened = true;
      this.tagihanOpened = false;
      this.anggotaOpened = false;
    } else if (name === 'tagihan') {
      this.approvalOpened = false;
      this.tagihanOpened = true;
      this.anggotaOpened = false;
    } else if (name === 'anggota') {
      this.approvalOpened = false;
      this.tagihanOpened = false;
      this.anggotaOpened = true;
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

PengurusNavigationComponent.ɵfac = function PengurusNavigationComponent_Factory(t) {
  return new (t || PengurusNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
};

PengurusNavigationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PengurusNavigationComponent,
  selectors: [["app-pengurus-navigation"]],
  decls: 57,
  vars: 27,
  consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["color", "primary", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "8px"], ["src", "assets/image/logo.png", "alt", "", 2, "width", "42px"], ["for", ""], ["multi", "", 1, "nav-accordion", 3, "displayMode"], [3, "expanded", "expandedChange", "opened"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "list-item"], ["routerLink", "/pengurus/anggota", 3, "routerLinkActive"], ["routerLink", "/pengurus/verify", 3, "routerLinkActive"], ["routerLink", "/pengurus/sk-member", 3, "routerLinkActive"], ["routerLink", "/pengurus/tagihan", 3, "routerLinkActive"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "width", "100%"], [2, "padding-left", "16px"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "16px", 1, "pointer", 3, "matMenuTriggerFor"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "8px"], [2, "width", "40px"], ["src", "assets/image/profile.png", "alt", "", 2, "width", "100%", "border-radius", "50%"], ["aria-label", "Side nav toggle icon"], ["xPosition", "before"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["style", "\n        position: absolute;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1000;\n        max-height: 100%;\n        background-color: rgba(255, 255, 255, 0.9);\n      ", 4, "ngIf"], [2, "background-color", "#fff", "border", "1px #ddd solid", "margin", "24px", "padding", "24px", "border-radius", "5px", "min-height", "100vh"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], [2, "position", "absolute", "top", "0", "width", "100%", "height", "100%", "z-index", "1000", "max-height", "100%", "background-color", "rgba(255, 255, 255, 0.9)"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 2, "padding-top", "24px"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayoutGap", "8px", 1, "mat-elevation-z8", 2, "background", "#fff", "padding", "12px 16px", "border-radius", "5px"], ["color", "accent", 3, "diameter"]],
  template: function PengurusNavigationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-toolbar", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Pengurus APTFI");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-accordion", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-expansion-panel", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("expandedChange", function PengurusNavigationComponent_Template_mat_expansion_panel_expandedChange_11_listener($event) {
        return ctx.anggotaOpened = $event;
      })("opened", function PengurusNavigationComponent_Template_mat_expansion_panel_opened_11_listener() {
        return ctx.onOpened("anggota");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-expansion-panel-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Anggota");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "List Anggota");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-expansion-panel", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("expandedChange", function PengurusNavigationComponent_Template_mat_expansion_panel_expandedChange_17_listener($event) {
        return ctx.approvalOpened = $event;
      })("opened", function PengurusNavigationComponent_Template_mat_expansion_panel_opened_17_listener() {
        return ctx.onOpened("approval");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-expansion-panel-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Approval");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Verifikasi Pendaftaran");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "SK Anggota");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-expansion-panel", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("expandedChange", function PengurusNavigationComponent_Template_mat_expansion_panel_expandedChange_25_listener($event) {
        return ctx.tagihanOpened = $event;
      })("opened", function PengurusNavigationComponent_Template_mat_expansion_panel_opened_25_listener() {
        return ctx.onOpened("tagihan");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-expansion-panel-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Tagihan");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Rekap Tagihan");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-sidenav-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-toolbar", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, PengurusNavigationComponent_button_33_Template, 3, 0, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](40, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-icon", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "expand_more");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-menu", 22, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PengurusNavigationComponent_Template_button_click_48_listener() {
        return ctx.logout();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Keluar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, PengurusNavigationComponent_div_53_Template, 6, 1, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](54, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](47);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 17, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 19, ctx.isHandset$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 15, ctx.isHandset$) ? "dialog" : "navigation");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("displayMode", "flat");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", ctx.anggotaOpened);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActive", "active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", ctx.approvalOpened);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActive", "active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActive", "active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("expanded", ctx.tagihanOpened);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActive", "active");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 21, ctx.isHandset$));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](40, 23, ctx.state$).user == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](40, 23, ctx.state$).user.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](54, 25, ctx.loadingState$).loading);
    }
  },
  directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenav, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutGapDirective, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatAccordion, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatExpansionPanelHeader, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatSidenavContent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatSpinner],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  background: #455a64;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.mat-list-item.active[_ngcontent-%COMP%] {\n  background-color: #ddd;\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #455a64;\n  border-top: 1px solid #3b4d55;\n  border-bottom: 1px solid #3b4d55;\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]:after {\n  color: #fff;\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 12px;\n  color: rgba(0, 0, 0, 0.87);\n  text-decoration: none;\n  border-bottom: 1px solid #c7c7c7;\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.nav-accordion[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.14);\n}\n\n.mat-drawer-side[_ngcontent-%COMP%] {\n  border-right: none;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  background: #455a64 !important;\n  color: #fff;\n}\n\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmd1cnVzLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBR0U7RUFDRSxzQkFBQTtBQUFKOztBQUtFO0VBQ0UsZ0JBQUE7QUFGSjs7QUFJSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFGTjs7QUFLUTtFQUNFLFdBQUE7QUFIVjs7QUFVSTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFSTjs7QUFTTTtFQUNFLCtCQUFBO0FBUFI7O0FBVU07RUFDRSwrQkFBQTtBQVJSOztBQWNBO0VBQ0Usa0JBQUE7QUFYRjs7QUFjQTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtBQVhGOztBQWNBO0VBQ0UsZUFBQTtBQVhGIiwiZmlsZSI6InBlbmd1cnVzLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiAjNDU1YTY0O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5tYXQtbGlzdC1pdGVtIHtcbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIH1cbn1cblxuLm5hdi1hY2NvcmRpb24ge1xuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQ6ICM0NTVhNjQ7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzNiNGQ1NTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjM2I0ZDU1O1xuXG4gICAgICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3Ige1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5saXN0LWl0ZW0ge1xuICAgIGEge1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOTksIDE5OSwgMTk5KTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5tYXQtZHJhd2VyLXNpZGUge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICM0NTVhNjQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 7151:
/*!**********************************************************!*\
  !*** ./src/app/pengurus-view/pengurus-view.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PengurusViewComponent": () => (/* binding */ PengurusViewComponent)
/* harmony export */ });
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.state */ 2534);
/* harmony import */ var _user_view_user_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-view/user.state */ 2262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var _user_view_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-view/user.service */ 9620);
/* harmony import */ var _pengurus_navigation_pengurus_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pengurus-navigation/pengurus-navigation.component */ 7113);







class PengurusViewComponent {
    constructor(store, jwtService, userService) {
        this.store = store;
        this.jwtService = jwtService;
        this.userService = userService;
    }
    ngOnInit() {
        const token = this.store.selectSnapshot(_app_state__WEBPACK_IMPORTED_MODULE_0__.AppState);
        const decodedToken = this.jwtService.decodeToken(token.session.accessToken);
        this.userService.getById(decodedToken.sub).subscribe((response) => {
            this.store.dispatch(new _user_view_user_state__WEBPACK_IMPORTED_MODULE_1__.SetUserState(response.user));
            this.userState = this.store.selectSnapshot(_user_view_user_state__WEBPACK_IMPORTED_MODULE_1__.UserState);
        });
    }
}
PengurusViewComponent.ɵfac = function PengurusViewComponent_Factory(t) { return new (t || PengurusViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__.JwtHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_user_view_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService)); };
PengurusViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PengurusViewComponent, selectors: [["app-pengurus-view"]], decls: 1, vars: 0, template: function PengurusViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-pengurus-navigation");
    } }, directives: [_pengurus_navigation_pengurus_navigation_component__WEBPACK_IMPORTED_MODULE_4__.PengurusNavigationComponent], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlbmd1cnVzLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUNGIiwiZmlsZSI6InBlbmd1cnVzLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4iXX0= */"] });


/***/ }),

/***/ 5117:
/*!******************************************************!*\
  !*** ./src/app/pengurus-view/pengurus-view.guard.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PengurusViewGuard": () => (/* binding */ PengurusViewGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2313);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.state */ 2534);
/* harmony import */ var _states_loading_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../states/loading.state */ 9989);
/* harmony import */ var _user_view_user_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-view/user.state */ 2262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/angular-jwt */ 4198);
/* harmony import */ var _user_view_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-view/user.service */ 9620);










class PengurusViewGuard {
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
                case 1:
                    this.router.navigate(['admin/users']);
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
                case 2:
                    this.router.navigate(['profil']);
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
PengurusViewGuard.ɵfac = function PengurusViewGuard_Factory(t) { return new (t || PengurusViewGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__.JwtHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_user_view_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService)); };
PengurusViewGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: PengurusViewGuard, factory: PengurusViewGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4681:
/*!*******************************************************!*\
  !*** ./src/app/pengurus-view/pengurus-view.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PengurusViewModule": () => (/* binding */ PengurusViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pengurus_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pengurus-view.component */ 7151);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-material-file-input */ 7410);
/* harmony import */ var _pengurus_view_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pengurus-view.guard */ 5117);
/* harmony import */ var _pengurus_navigation_pengurus_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pengurus-navigation/pengurus-navigation.component */ 7113);
/* harmony import */ var _pengurus_member_pengurus_member_detail_pengurus_member_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pengurus-member/pengurus-member-detail/pengurus-member-detail.component */ 131);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
























const routes = [
    {
        path: '',
        component: _pengurus_view_component__WEBPACK_IMPORTED_MODULE_0__.PengurusViewComponent,
        canActivate: [_pengurus_view_guard__WEBPACK_IMPORTED_MODULE_1__.PengurusViewGuard],
        children: [
            {
                path: '',
                redirectTo: 'anggota',
            },
            {
                path: 'anggota/detail/:uuid',
                component: _pengurus_member_pengurus_member_detail_pengurus_member_detail_component__WEBPACK_IMPORTED_MODULE_3__.PengurusMemberDetailComponent,
            },
            {
                path: 'anggota',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_chips_mjs-node_modules_angular_material_fesm20-0f8eb4"), __webpack_require__.e("src_app_pengurus-view_pengurus-member_pengurus-member_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pengurus-member/pengurus-member.module */ 9049)).then((m) => m.PengurusMemberModule),
            },
            {
                path: 'verify/detail/:uuid',
                component: _pengurus_member_pengurus_member_detail_pengurus_member_detail_component__WEBPACK_IMPORTED_MODULE_3__.PengurusMemberDetailComponent,
            },
            {
                path: 'verify',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_chips_mjs-node_modules_angular_material_fesm20-0f8eb4"), __webpack_require__.e("src_app_pengurus-view_pengurus-verify_pengurus-verify_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pengurus-verify/pengurus-verify.module */ 4388)).then((m) => m.PengurusVerifyModule),
            },
            {
                path: 'tagihan',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_chips_mjs-node_modules_angular_material_fesm20-0f8eb4"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pengurus-view_pengurus-tagihan_pengurus-tagihan_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pengurus-tagihan/pengurus-tagihan.module */ 8538)).then((m) => m.PengurusTagihanModule),
            },
            {
                path: 'sk-member',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("src_app_pengurus-view_pengurus-sk_pengurus-sk_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pengurus-sk/pengurus-sk.module */ 1127)).then((m) => m.PengurusSkModule),
            },
        ],
    },
];
class PengurusViewModule {
}
PengurusViewModule.ɵfac = function PengurusViewModule_Factory(t) { return new (t || PengurusViewModule)(); };
PengurusViewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PengurusViewModule });
PengurusViewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            ngx_material_file_input__WEBPACK_IMPORTED_MODULE_7__.MaterialFileInputModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexLayoutModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PengurusViewModule, { declarations: [_pengurus_view_component__WEBPACK_IMPORTED_MODULE_0__.PengurusViewComponent, _pengurus_navigation_pengurus_navigation_component__WEBPACK_IMPORTED_MODULE_2__.PengurusNavigationComponent, _pengurus_member_pengurus_member_detail_pengurus_member_detail_component__WEBPACK_IMPORTED_MODULE_3__.PengurusMemberDetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, ngx_material_file_input__WEBPACK_IMPORTED_MODULE_7__.MaterialFileInputModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexLayoutModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pengurus-view_pengurus-view_module_ts.js.map