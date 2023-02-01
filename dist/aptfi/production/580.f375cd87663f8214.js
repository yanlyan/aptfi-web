"use strict";(self.webpackChunkaptfi=self.webpackChunkaptfi||[]).push([[580],{3580:(E,x,t)=>{t.r(x),t.d(x,{AdminViewModule:()=>D});var p=t(9808),n=t(5e3),A=t(5113),d=t(8774),u=t(4004),b=t(4782),Z=t(2534),v=t(2262),f=t(9989),y=t(6661),l=t(2638),C=t(4594),h=t(7093),c=t(1125),g=t(2181),T=t(5245),M=t(7423),O=t(773);function P(e,s){if(1&e){const o=n.EpF();n.TgZ(0,"button",26),n.NdJ("click",function(){return n.CHM(o),n.oxw(),n.MAs(2).toggle()}),n.TgZ(1,"mat-icon",20),n._uU(2,"menu"),n.qZA(),n.qZA()}}function L(e,s){1&e&&(n.TgZ(0,"div",27),n.TgZ(1,"div",28),n.TgZ(2,"div",29),n._UZ(3,"mat-spinner",30),n.TgZ(4,"label",31),n._uU(5,"Loading"),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(3),n.Q6J("diameter",20))}let U=(()=>{class e{constructor(o,a,i){this.breakpointObserver=o,this.store=a,this.router=i,this.isHandset$=this.breakpointObserver.observe(A.u3.Handset).pipe((0,u.U)(r=>r.matches),(0,b.d)()),this.masterOpened=!1,this.loadingState$=this.store.select(f.G)}ngOnInit(){this.router.events.subscribe(a=>{a instanceof d.m2&&document.querySelector(".mat-sidenav-content")&&document.querySelector(".mat-sidenav-content").scrollTo({top:0,behavior:"smooth"})});const o=["/admin/users","/admin/roles"];for(const a of o)this.router.url.includes(a)&&(this.masterOpened=!0);this.state$=this.store.select(v.aF)}onOpened(o){"master"===o&&(this.masterOpened=!0)}logout(){this.store.dispatch(new Z.p({accessToken:"",refreshToken:"",role:null})),this.router.navigate(["/login"])}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(A.Yg),n.Y36(y.yh),n.Y36(d.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-admin-navigation"]],decls:47,vars:22,consts:[[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","opened"],["drawer",""],["color","primary","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px"],["src","assets/image/logo.png","alt","",2,"width","42px"],["multi","",1,"nav-accordion",3,"displayMode"],[3,"expanded","expandedChange","opened"],["fxLayout","column","fxLayoutAlign","start stretch",1,"list-item"],["routerLink","/admin/users",3,"routerLinkActive"],["color","primary"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click",4,"ngIf"],["fxLayout","row","fxLayoutAlign","space-between center",2,"width","100%"],[2,"padding-left","16px"],["fxLayout","row","fxLayoutAlign","space-between center","fxLayoutGap","16px",1,"pointer",3,"matMenuTriggerFor"],["fxLayout","column","fxLayoutAlign","center start"],[2,"line-height","24px","font-size","16px"],[2,"font-size","12px","line-height","12px"],["fxLayout","row","fxLayoutAlign","space-between center","fxLayoutGap","8px"],[2,"width","40px"],["src","assets/image/profile.png","alt","",2,"width","100%","border-radius","50%"],["aria-label","Side nav toggle icon"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",3,"click"],["style","\n        position: absolute;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1000;\n        max-height: 100%;\n        background-color: rgba(255, 255, 255, 0.9);\n      ",4,"ngIf"],[2,"background-color","#fff","border","1px #ddd solid","margin","24px","padding","24px","border-radius","5px","min-height","100vh"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"],[2,"position","absolute","top","0","width","100%","height","100%","z-index","1000","max-height","100%","background-color","rgba(255, 255, 255, 0.9)"],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","10px",2,"padding-top","24px"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","8px",1,"mat-elevation-z8",2,"background","#fff","padding","12px 16px","border-radius","5px"],["color","accent",3,"diameter"],["for",""]],template:function(o,a){if(1&o&&(n.TgZ(0,"mat-sidenav-container",0),n.TgZ(1,"mat-sidenav",1,2),n.ALo(3,"async"),n.ALo(4,"async"),n.ALo(5,"async"),n.TgZ(6,"mat-toolbar",3),n._UZ(7,"img",4),n.TgZ(8,"div"),n.TgZ(9,"label"),n._uU(10,"Admin APTFI"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(11,"mat-accordion",5),n.TgZ(12,"mat-expansion-panel",6),n.NdJ("expandedChange",function(r){return a.masterOpened=r})("opened",function(){return a.onOpened("master")}),n.TgZ(13,"mat-expansion-panel-header"),n._uU(14,"Master Data"),n.qZA(),n.TgZ(15,"div",7),n.TgZ(16,"a",8),n._uU(17,"User"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(18,"mat-sidenav-content"),n.TgZ(19,"mat-toolbar",9),n.YNc(20,P,3,0,"button",10),n.ALo(21,"async"),n.TgZ(22,"div",11),n._UZ(23,"span",12),n.TgZ(24,"div",13),n.TgZ(25,"div",14),n.TgZ(26,"label",15),n._uU(27),n.ALo(28,"async"),n.qZA(),n.TgZ(29,"label",16),n._uU(30,"Admin"),n.qZA(),n.qZA(),n.TgZ(31,"div",17),n.TgZ(32,"div",18),n._UZ(33,"img",19),n.qZA(),n.TgZ(34,"mat-icon",20),n._uU(35,"expand_more"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(36,"mat-menu",21,22),n.TgZ(38,"button",23),n.NdJ("click",function(){return a.logout()}),n.TgZ(39,"mat-icon"),n._uU(40,"logout"),n.qZA(),n.TgZ(41,"span"),n._uU(42,"Keluar"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.YNc(43,L,6,1,"div",24),n.ALo(44,"async"),n.TgZ(45,"div",25),n._UZ(46,"router-outlet"),n.qZA(),n.qZA(),n.qZA()),2&o){const i=n.MAs(37);n.xp6(1),n.Q6J("mode",n.lcZ(4,12,a.isHandset$)?"over":"side")("opened",!1===n.lcZ(5,14,a.isHandset$)),n.uIk("role",n.lcZ(3,10,a.isHandset$)?"dialog":"navigation"),n.xp6(10),n.Q6J("displayMode","flat"),n.xp6(1),n.Q6J("expanded",a.masterOpened),n.xp6(4),n.Q6J("routerLinkActive","active"),n.xp6(4),n.Q6J("ngIf",n.lcZ(21,16,a.isHandset$)),n.xp6(4),n.Q6J("matMenuTriggerFor",i),n.xp6(3),n.Oqu(null==n.lcZ(28,18,a.state$).user?null:n.lcZ(28,18,a.state$).user.name),n.xp6(16),n.Q6J("ngIf",n.lcZ(44,20,a.loadingState$).loading)}},directives:[l.TM,l.JX,C.Ye,h.xw,h.Wh,h.SQ,c.pp,c.ib,c.yz,d.yS,d.Od,l.Rh,p.O5,g.p6,T.Hw,g.VK,g.OP,d.lC,M.lW,O.$g],pipes:[p.Ov],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px;background:#455a64}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}.mat-list-item.active[_ngcontent-%COMP%]{background-color:#ddd}.nav-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]{border-radius:0}.nav-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]{color:#fff;background:#455a64;border-top:1px solid #3b4d55;border-bottom:1px solid #3b4d55}.nav-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]:after{color:#fff}.nav-accordion[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:12px;color:#000000de;text-decoration:none;border-bottom:1px solid #c7c7c7}.nav-accordion[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.04)}.nav-accordion[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:rgba(0,0,0,.14)}.mat-drawer-side[_ngcontent-%COMP%]{border-right:none}.mat-toolbar[_ngcontent-%COMP%]{background:#455a64!important;color:#fff}.mat-expansion-panel-content[_ngcontent-%COMP%]{font-size:14px}"]}),e})(),N=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-admin-view"]],decls:1,vars:0,template:function(o,a){1&o&&n._UZ(0,"app-admin-navigation")},directives:[U],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}"]}),e})();var m=t(9646),z=t(8505),F=t(5577),J=t(8746),G=t(4244),S=t(9620);let V=(()=>{class e{constructor(o,a,i,r){this.router=o,this.store=a,this.jwtService=i,this.userService=r}canActivate(o,a){return this.store.selectOnce(Z.a).pipe((0,z.b)(()=>this.store.dispatch(new f.z(!0))),(0,F.z)(i=>{if(""===i.session.accessToken)return this.router.navigate(["login"]),(0,m.of)(!1);switch(i.session.role.id){case 2:return this.router.navigate(["profil"]),(0,m.of)(!1);case 3:return this.router.navigate(["pengurus/anggota"]),(0,m.of)(!1)}const r=this.store.selectSnapshot(v.aF);if(!r.user){const R=this.jwtService.decodeToken(i.session.accessToken);return this.userService.getById(R.sub).pipe((0,u.U)(W=>{this.store.dispatch(new v.eC(W.user))}))}return(0,m.of)(r)}),(0,u.U)(i=>!1!==i),(0,J.x)(()=>this.store.dispatch(new f.z(!1))))}}return e.\u0275fac=function(o){return new(o||e)(n.LFG(d.F0),n.LFG(y.yh),n.LFG(G.N0),n.LFG(S.K))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var I=t(9764),$=t(3075),w=t(7322),Q=t(7531),H=t(4623),Y=t(4107),j=t(4999),X=t(3251),B=t(1385);const K=[{path:"",component:N,canActivate:[V],children:[{path:"",redirectTo:"users"},{path:"users",loadChildren:()=>Promise.all([t.e(131),t.e(592),t.e(250)]).then(t.bind(t,2250)).then(e=>e.AdminUserModule)}]}];let D=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[p.ez,d.Bz.forChild(K),B.Ad,C.g0,M.ot,l.SJ,T.Ps,H.ie,I.o9,g.Tx,c.To,Y.LD,$.UX,w.lN,O.Cq,Q.c,X.Nh,j.p0]]}),e})()}}]);