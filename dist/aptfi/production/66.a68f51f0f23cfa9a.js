"use strict";(self.webpackChunkaptfi=self.webpackChunkaptfi||[]).push([[66],{8066:(G,v,o)=>{o.r(v),o.d(v,{ResetPasswordModule:()=>Q});var h=o(9808),A=o(5861),n=o(3075);class T{isErrorState(a,e){var s,i,d;const l=!(!(null==a?void 0:a.invalid)||!(null===(s=null==a?void 0:a.parent)||void 0===s?void 0:s.dirty)),c=!(!(null===(i=null==a?void 0:a.parent)||void 0===i?void 0:i.invalid)||!(null===(d=null==a?void 0:a.parent)||void 0===d?void 0:d.dirty));return l||c}}var t=o(5e3),P=o(2340),C=o(7352);let L=(()=>{class r{constructor(e){this.httpClient=e}resetPassword(e){return this.httpClient.post(`${P.N.api}/reset-password`,e)}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(C.Y))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var I=o(7261),m=o(8774),f=o(5876),p=o(7093),u=o(9224),g=o(7322),Z=o(7531),x=o(4834),w=o(7423),y=o(773);function S(r,a){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"Password harus diisi"),t.qZA())}function R(r,a){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"Konfirmasi Password harus diisi"),t.qZA())}function F(r,a){1&r&&(t.TgZ(0,"mat-error"),t._uU(1,"Password tidak sama"),t.qZA())}function k(r,a){1&r&&(t.TgZ(0,"button",17),t._uU(1," Kirim link reset "),t.qZA())}function U(r,a){1&r&&(t.TgZ(0,"div",18),t._UZ(1,"mat-spinner",19),t.TgZ(2,"label",20),t._uU(3,"Loading"),t.qZA(),t.qZA()),2&r&&(t.xp6(1),t.Q6J("diameter",20))}let b=(()=>{class r{constructor(e,s,i,d,l){this.resetPasswordService=e,this.snackbar=s,this.route=i,this.router=d,this.recaptchaService=l,this.loading=!1,this.matcher=new T,this.checkPasswords=c=>c.get("password").value===c.get("passwordConfirmation").value?null:{notSame:!0}}ngOnInit(){this.resetForm=new n.cw({token:new n.NI(null,[n.kI.required]),password:new n.NI(null,[n.kI.required]),passwordConfirmation:new n.NI(null,[n.kI.required])},{validators:this.checkPasswords}),this.route.params.subscribe(e=>{e.token&&this.resetForm.controls.token.setValue(e.token)})}onSubmit(){var e=this;return(0,A.Z)(function*(){if(e.resetForm.valid){e.loading=!0;const s=yield e.recaptchaService.execute({action:"reset"}),i=e.resetForm.value;i.recaptcha=s,console.log(i),e.resetPasswordService.resetPassword(i).subscribe(d=>{e.snackbar.open("Password berhasil diubah","Tutup",{duration:5e3,panelClass:["snackbar-success"]}).afterDismissed().subscribe(l=>{e.router.navigate(["login"])}),e.loading=!1},d=>{e.loading=!1})}})()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(L),t.Y36(I.ux),t.Y36(m.gz),t.Y36(m.F0),t.Y36(f.qu))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-reset-password"]],decls:29,vars:9,consts:[["fxLayout","column","fxLayoutGap","32px","fxLayoutAlign","start center",2,"height","100%","background-color","#ddd","padding-top","64px"],[2,"text-align","center"],["src","assets/image/logo2.png","alt","",2,"width","70%"],["fxLayout","row","fxLayoutAlign","center center"],[2,"margin","24px 0px"],["fxLayout","column","fxLayoutAlign","center stretch"],["fxLayout","column","fxLayoutAlign","start stretch","fxLayoutGap","8px",2,"margin","0px 16px",3,"formGroup","submit"],["matInput","","placeholder","Password","formControlName","password","type","password"],[4,"ngIf"],["matInput","","placeholder","Konfirmasi Password","formControlName","passwordConfirmation","type","password",3,"errorStateMatcher"],["fxLayout","row","fxLayoutAlign","space-around center",2,"margin-top","20px","padding-bottom","20px"],["mat-raised-button","","color","primary","type","submit","fxFlex","33",4,"ngIf"],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","8px",4,"ngIf"],[3,"size","hide"],["fxLayout","row","fxLayoutAlign","space-between center",2,"margin-top","24px","width","100%"],["routerLink","/register"],["routerLink","/login"],["mat-raised-button","","color","primary","type","submit","fxFlex","33"],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","8px"],["color","primary",3,"diameter"],["for",""]],template:function(e,s){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"mat-card"),t.TgZ(4,"mat-card-header",3),t.TgZ(5,"mat-card-title",4),t._uU(6,"Masukkan email anda untuk melakukan reset password"),t.qZA(),t.qZA(),t.TgZ(7,"mat-card-content",5),t.TgZ(8,"form",6),t.NdJ("submit",function(){return s.onSubmit()}),t.TgZ(9,"mat-form-field"),t._UZ(10,"input",7),t.YNc(11,S,2,0,"mat-error",8),t.qZA(),t.TgZ(12,"mat-form-field"),t._UZ(13,"input",9),t.YNc(14,R,2,0,"mat-error",8),t.YNc(15,F,2,0,"mat-error",8),t.qZA(),t.TgZ(16,"div"),t.TgZ(17,"div",10),t.YNc(18,k,2,0,"button",11),t.YNc(19,U,4,1,"div",12),t.qZA(),t._UZ(20,"recaptcha",13),t._UZ(21,"mat-divider"),t.qZA(),t.qZA(),t.TgZ(22,"div",14),t.TgZ(23,"div"),t.TgZ(24,"a",15),t._uU(25,"Daftar akun?"),t.qZA(),t.qZA(),t.TgZ(26,"div"),t.TgZ(27,"a",16),t._uU(28,"Masuk ke Akun"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e){let i,d,l;t.xp6(8),t.Q6J("formGroup",s.resetForm),t.xp6(3),t.Q6J("ngIf",!(null==(i=s.resetForm.get("password"))||!i.hasError("required"))),t.xp6(2),t.Q6J("errorStateMatcher",s.matcher),t.xp6(1),t.Q6J("ngIf",!(null==(d=s.resetForm.get("passwordConfirmation"))||!d.hasError("required"))),t.xp6(1),t.Q6J("ngIf",!(null==(l=s.resetForm.get("passwordConfirmation"))||!l.hasError("notSame"))),t.xp6(3),t.Q6J("ngIf",!s.loading),t.xp6(1),t.Q6J("ngIf",s.loading),t.xp6(1),t.Q6J("size","invisible")("hide",!0)}},directives:[p.xw,p.SQ,p.Wh,u.a8,u.dk,u.n5,u.dn,n._Y,n.JL,n.sg,g.KE,Z.Nt,n.Fj,n.JJ,n.u,h.O5,f.p3,x.d,m.yS,g.TO,w.lW,p.yH,y.$g],styles:[""]}),r})();var J=o(8595),N=o(9764);const Y=[{path:"",component:b,canActivate:[J.i]}];let Q=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[h.ez,m.Bz.forChild(Y),u.QW,w.ot,g.lN,Z.c,N.o9,x.t,n.UX,y.Cq,f.Bt]]}),r})()}}]);