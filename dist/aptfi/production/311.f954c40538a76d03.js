"use strict";(self.webpackChunkaptfi=self.webpackChunkaptfi||[]).push([[311],{3311:(Nt,f,i)=>{i.r(f),i.d(f,{PengurusTagihanModule:()=>vt});var u=i(9808),p=i(9062),c=i(4847),s=i(4999),C=i(6451),y=i(4968),P=i(1884),A=i(8372),U=i(8675),N=i(3900),h=i(4004),S=i(2887),g=i(9989),t=i(5e3),Y=i(250),I=i(6633),Q=i(6661),d=i(8774),J=i(1463),M=i(8966),b=i(7261),m=i(7093),_=i(7322),T=i(7531),x=i(4107),w=i(508),Z=i(773),v=i(7423);const B=["matSelect"],D=["filterInput"];function L(e,n){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"No."),t.qZA())}function $(e,n){if(1&e&&(t.TgZ(0,"mat-cell"),t.TgZ(1,"span",25),t._uU(2,"No:"),t.qZA(),t._uU(3),t.qZA()),2&e){const a=n.$implicit;t.xp6(3),t.hij(" ",a.index," ")}}function q(e,n){1&e&&(t.TgZ(0,"mat-header-cell",26),t._uU(1,"Nama Institusi"),t.qZA())}function H(e,n){if(1&e&&(t.TgZ(0,"mat-cell"),t._UZ(1,"span",25),t._uU(2),t.qZA()),2&e){const a=n.$implicit;t.xp6(2),t.hij(" ",a.universityName,"")}}function z(e,n){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Jenis Tagihan"),t.qZA())}function O(e,n){1&e&&(t.TgZ(0,"span"),t._uU(1,"Pendaftaran"),t.qZA())}function R(e,n){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const a=t.oxw().$implicit;t.xp6(1),t.hij("Iuran Tahun ",a.year,"")}}function F(e,n){if(1&e&&(t.TgZ(0,"mat-cell"),t._UZ(1,"span",25),t.YNc(2,O,2,0,"span",27),t.YNc(3,R,2,1,"span",27),t.qZA()),2&e){const a=n.$implicit;t.xp6(2),t.Q6J("ngIf","register"===a.type),t.xp6(1),t.Q6J("ngIf","annual"===a.type)}}function G(e,n){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Bulan"),t.qZA())}function E(e,n){if(1&e&&(t.TgZ(0,"mat-cell"),t._UZ(1,"span",25),t._uU(2),t.ALo(3,"date"),t.qZA()),2&e){const a=n.$implicit;t.xp6(2),t.hij(" ",t.xi3(3,1,a.createdAt,"MMMM")," ")}}function j(e,n){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Nominal"),t.qZA())}function W(e,n){if(1&e&&(t.TgZ(0,"mat-cell"),t._UZ(1,"span",25),t._uU(2),t.ALo(3,"number"),t.qZA()),2&e){const a=n.$implicit;t.xp6(2),t.hij(" Rp. ",t.lcZ(3,1,a.amount+a.fee)," ")}}function k(e,n){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Status"),t.qZA())}function X(e,n){1&e&&(t.TgZ(0,"span",32),t._uU(1,"Belum Bayar"),t.qZA())}function K(e,n){1&e&&(t.TgZ(0,"span",33),t._uU(1,"Menunggu Pembayaran"),t.qZA())}function V(e,n){1&e&&(t.TgZ(0,"span",34),t._uU(1,"Lunas"),t.qZA())}function tt(e,n){1&e&&(t.TgZ(0,"span",35),t._uU(1,"Kadaluarsa"),t.qZA())}function et(e,n){if(1&e&&(t.TgZ(0,"mat-cell"),t._UZ(1,"span",25),t.YNc(2,X,2,0,"span",28),t.YNc(3,K,2,0,"span",29),t.YNc(4,V,2,0,"span",30),t.YNc(5,tt,2,0,"span",31),t.qZA()),2&e){const a=n.$implicit;t.xp6(2),t.Q6J("ngIf",0===a.lastStatus),t.xp6(1),t.Q6J("ngIf",1===a.lastStatus),t.xp6(1),t.Q6J("ngIf",2===a.lastStatus),t.xp6(1),t.Q6J("ngIf",3===a.lastStatus)}}function at(e,n){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Tagihan"),t.qZA())}function nt(e,n){1&e&&(t.TgZ(0,"div",38),t._UZ(1,"mat-spinner",39),t.TgZ(2,"label",40),t._uU(3,"Loading"),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("diameter",20))}function it(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"button",41),t.NdJ("click",function(){t.CHM(a);const o=t.oxw().$implicit;return t.oxw().downloadInvoice(o)}),t._uU(1," Lihat "),t.qZA()}if(2&e){const a=t.oxw().$implicit;t.Q6J("disabled",2!==a.lastStatus)}}function lt(e,n){if(1&e&&(t.TgZ(0,"mat-cell"),t._UZ(1,"span",25),t.YNc(2,nt,4,1,"div",36),t.YNc(3,it,2,1,"button",37),t.qZA()),2&e){const a=n.$implicit;t.xp6(2),t.Q6J("ngIf",a.loading),t.xp6(1),t.Q6J("ngIf",!a.loading)}}function ot(e,n){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Bukti Bayar"),t.qZA())}function st(e,n){1&e&&(t.TgZ(0,"div",38),t._UZ(1,"mat-spinner",39),t.TgZ(2,"label",40),t._uU(3,"Loading"),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("diameter",20))}function ut(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"button",41),t.NdJ("click",function(){t.CHM(a);const o=t.oxw().$implicit;return t.oxw().downloadReceipt(o)}),t._uU(1," Lihat "),t.qZA()}if(2&e){const a=t.oxw().$implicit;t.Q6J("disabled",2!==a.lastStatus)}}function ct(e,n){if(1&e&&(t.TgZ(0,"mat-cell"),t._UZ(1,"span",25),t.YNc(2,st,4,1,"div",36),t.YNc(3,ut,2,1,"button",37),t.qZA()),2&e){const a=n.$implicit;t.xp6(2),t.Q6J("ngIf",a.loading),t.xp6(1),t.Q6J("ngIf",!a.loading)}}function mt(e,n){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Action"),t.qZA())}function rt(e,n){1&e&&(t.TgZ(0,"div",38),t._UZ(1,"mat-spinner",39),t.TgZ(2,"label",40),t._uU(3,"Loading"),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("diameter",20))}function pt(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"button",43),t.NdJ("click",function(){t.CHM(a);const o=t.oxw().$implicit;return t.oxw().delete(o)}),t._uU(1,"Hapus"),t.qZA()}}function gt(e,n){if(1&e&&(t.TgZ(0,"mat-cell"),t._UZ(1,"span",25),t.YNc(2,rt,4,1,"div",36),t.YNc(3,pt,2,0,"button",42),t.qZA()),2&e){const a=n.$implicit;t.xp6(2),t.Q6J("ngIf",a.loading),t.xp6(1),t.Q6J("ngIf",!a.loading)}}function ft(e,n){1&e&&t._UZ(0,"mat-header-row")}function ht(e,n){1&e&&t._UZ(0,"mat-row")}const dt=function(){return[5,10,20]};let _t=(()=>{class e{constructor(a,l,o,r,Ct,yt,Pt,At,Ut){this.cdref=a,this.pengurusTagihanService=l,this.tagihanService=o,this.store=r,this.route=Ct,this._FileSaverService=yt,this.datepipe=Pt,this.dialog=At,this.snackbar=Ut,this.displayedColumns=["index","members.university_name","type","month","amount","last_status","invoice","receipt","action"],this.dataSource=new s.by,this.store.dispatch(new g.z(!0))}ngOnInit(){this.paginator.pageIndex=this.route.snapshot.queryParams.page||0,this.paginator.pageSize=this.route.snapshot.queryParams.size||10,this.paginator.page.next(null)}ngAfterViewInit(){this.statusSelect.value=this.route.snapshot.queryParams.status||"",this.filterInput.nativeElement.value=this.route.snapshot.queryParams.search||"",this.sort.sort({id:"id",start:"asc",disableClear:!1}),this.cdref.detectChanges(),(0,C.T)(this.sort.sortChange,this.paginator.page,(0,y.R)(this.filterInput.nativeElement,"keyup"),this.statusSelect.valueChange).pipe((0,P.x)(),(0,A.b)(500),(0,U.O)({}),(0,N.w)(()=>(this.store.dispatch(new g.z(!0)),this.loadData()))).subscribe()}loadData(){return this.pengurusTagihanService.getAllBills(this.paginator.pageIndex+1,this.paginator.pageSize,this.sort.active,this.sort.direction,this.filterInput.nativeElement.value,this.statusSelect.value,"false").pipe((0,h.U)(a=>(this.resultsLength=a.pagination.length,a.data)),(0,h.U)(a=>{setTimeout(()=>{this.filterInput.nativeElement.focus()},500),this.dataSource.data=a.map((l,o)=>(l.index=this.paginator.pageIndex>0?o+this.paginator.pageIndex*this.paginator.pageSize+1:o+1,l)),this.store.dispatch(new g.z(!1))}))}downloadInvoice(a){a.loading=!0,this.tagihanService.printInvoice(a.token).subscribe(l=>{this._FileSaverService.save(l,`Tagihan ${a.universityName} ${this.datepipe.transform(a.lastStatusAt,"d MMMM y")} .pdf`,"pdf"),a.loading=!1},l=>{a.loading=!1})}downloadReceipt(a){a.loading=!0,this.tagihanService.printReceipt(a.token).subscribe(l=>{this._FileSaverService.save(l,`Bukti Pembayaran ${a.universityName} ${this.datepipe.transform(a.lastStatusAt,"d MMMM y")} .pdf`,"pdf"),a.loading=!1},l=>{a.loading=!1})}delete(a){console.log(a),this.dialog.open(S.$,{closeOnNavigation:!1,disableClose:!0}).afterClosed().subscribe(l=>{l&&this.pengurusTagihanService.deleteBill(a.id).subscribe(o=>{this.snackbar.open("Hapus tagihan berhasil","",{panelClass:["snackbar-success"],duration:5e3}),this.loadData().subscribe()})})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(t.sBO),t.Y36(Y.u),t.Y36(I.F),t.Y36(Q.yh),t.Y36(d.gz),t.Y36(J.m9),t.Y36(u.uU),t.Y36(M.uw),t.Y36(b.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-pengurus-tagihan"]],viewQuery:function(a,l){if(1&a&&(t.Gf(p.NW,7),t.Gf(c.YE,5),t.Gf(B,5),t.Gf(D,7)),2&a){let o;t.iGM(o=t.CRH())&&(l.paginator=o.first),t.iGM(o=t.CRH())&&(l.sort=o.first),t.iGM(o=t.CRH())&&(l.statusSelect=o.first),t.iGM(o=t.CRH())&&(l.filterInput=o.first)}},decls:51,vars:11,consts:[["fxLayout","row","fxLayoutAlign","space-between center","fxLayoutGap","32px"],["fxFlex","70%"],["matInput",""],["filterInput",""],["fxFlex","25%"],["placeholder","Status Pembayaran","name","status"],["matSelect",""],[3,"value"],[1,"mat-elevation-z8"],["matSort","",3,"dataSource"],["matColumnDef","index"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","members.university_name"],["mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","type"],["matColumnDef","month"],["matColumnDef","amount"],["matColumnDef","last_status"],["matColumnDef","invoice"],["matColumnDef","receipt"],["matColumnDef","action"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions","length"],[1,"mobile-label"],["mat-sort-header",""],[4,"ngIf"],["class","pills",4,"ngIf"],["class","pills yellow",4,"ngIf"],["class","pills success",4,"ngIf"],["class","pills warn",4,"ngIf"],[1,"pills"],[1,"pills","yellow"],[1,"pills","success"],[1,"pills","warn"],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","8px",4,"ngIf"],["mat-flat-button","","color","primary",3,"disabled","click",4,"ngIf"],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","8px"],["color","accent",3,"diameter"],["for",""],["mat-flat-button","","color","primary",3,"disabled","click"],["mat-flat-button","","color","warn",3,"click",4,"ngIf"],["mat-flat-button","","color","warn",3,"click"]],template:function(a,l){1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"mat-form-field",1),t.TgZ(2,"mat-label"),t._uU(3,"Cari"),t.qZA(),t._UZ(4,"input",2,3),t.qZA(),t.TgZ(6,"mat-form-field",4),t.TgZ(7,"mat-select",5,6),t.TgZ(9,"mat-option",7),t._uU(10,"Tampilkan Semua"),t.qZA(),t.TgZ(11,"mat-option",7),t._uU(12,"Belum Bayar"),t.qZA(),t.TgZ(13,"mat-option",7),t._uU(14,"Menunggu Pembayaran"),t.qZA(),t.TgZ(15,"mat-option",7),t._uU(16,"Lunas"),t.qZA(),t.TgZ(17,"mat-option",7),t._uU(18,"Kadaluarsa"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",8),t.TgZ(20,"mat-table",9),t.ynx(21,10),t.YNc(22,L,2,0,"mat-header-cell",11),t.YNc(23,$,4,1,"mat-cell",12),t.BQk(),t.ynx(24,13),t.YNc(25,q,2,0,"mat-header-cell",14),t.YNc(26,H,3,1,"mat-cell",12),t.BQk(),t.ynx(27,15),t.YNc(28,z,2,0,"mat-header-cell",11),t.YNc(29,F,4,2,"mat-cell",12),t.BQk(),t.ynx(30,16),t.YNc(31,G,2,0,"mat-header-cell",11),t.YNc(32,E,4,4,"mat-cell",12),t.BQk(),t.ynx(33,17),t.YNc(34,j,2,0,"mat-header-cell",11),t.YNc(35,W,4,3,"mat-cell",12),t.BQk(),t.ynx(36,18),t.YNc(37,k,2,0,"mat-header-cell",11),t.YNc(38,et,6,4,"mat-cell",12),t.BQk(),t.ynx(39,19),t.YNc(40,at,2,0,"mat-header-cell",11),t.YNc(41,lt,4,2,"mat-cell",12),t.BQk(),t.ynx(42,20),t.YNc(43,ot,2,0,"mat-header-cell",11),t.YNc(44,ct,4,2,"mat-cell",12),t.BQk(),t.ynx(45,21),t.YNc(46,mt,2,0,"mat-header-cell",11),t.YNc(47,gt,4,2,"mat-cell",12),t.BQk(),t.YNc(48,ft,1,0,"mat-header-row",22),t.YNc(49,ht,1,0,"mat-row",23),t.qZA(),t._UZ(50,"mat-paginator",24),t.qZA()),2&a&&(t.xp6(9),t.Q6J("value",""),t.xp6(2),t.Q6J("value",0),t.xp6(2),t.Q6J("value",1),t.xp6(2),t.Q6J("value",2),t.xp6(2),t.Q6J("value",3),t.xp6(3),t.Q6J("dataSource",l.dataSource),t.xp6(28),t.Q6J("matHeaderRowDef",l.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",l.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(10,dt))("length",l.resultsLength))},directives:[m.xw,m.Wh,m.SQ,_.KE,m.yH,_.hX,T.Nt,x.gD,w.ey,s.BZ,c.YE,s.w1,s.fO,s.Dz,s.as,s.nj,p.NW,s.ge,s.ev,c.nU,u.O5,Z.$g,v.lW,s.XQ,s.Gk],pipes:[u.uU,u.JJ],styles:[".mobile-label[_ngcontent-%COMP%]{display:none}@media (max-width: 600px){.mobile-label[_ngcontent-%COMP%]{width:80px;display:inline-block;font-weight:700}.mat-header-row[_ngcontent-%COMP%]{display:none}.mat-row[_ngcontent-%COMP%]{flex-direction:column;align-items:start;padding:8px 24px}}@media (min-width: 600px){.mat-column-index[_ngcontent-%COMP%]{flex:0 0 4%}.mat-column-members-university_name[_ngcontent-%COMP%]{flex:0 0 35%}}"]}),e})();var Tt=i(9764),xt=i(6688);const Zt=[{path:"",component:_t}];let vt=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[u.uU],imports:[[u.ez,d.Bz.forChild(Zt),p.TU,s.p0,xt.Hi,T.c,c.JX,Tt.o9,x.LD,v.ot,Z.Cq]]}),e})()}}]);