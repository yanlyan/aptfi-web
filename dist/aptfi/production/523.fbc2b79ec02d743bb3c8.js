(self.webpackChunkaptfi=self.webpackChunkaptfi||[]).push([[523],{3523:(t,e,n)=>{"use strict";n.r(e),n.d(e,{AdminViewModule:()=>H});var o=n(8583),a=n(7716),i=n(5072),r=n(8909),s=n(8002),c=n(7349),d=n(2534),p=n(2262),g=n(9989),l=n(8645),u=n(3017),m=n(2522),h=n(5618),f=n(171),x=n(3935),Z=n(6627),v=n(1095),b=n(4885);function A(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"button",26),a.NdJ("click",function(){return a.CHM(t),a.oxw(),a.MAs(2).toggle()}),a.TgZ(1,"mat-icon",20),a._uU(2,"menu"),a.qZA(),a.qZA()}}function y(t,e){1&t&&(a.TgZ(0,"div",27),a.TgZ(1,"div",28),a.TgZ(2,"div",29),a._UZ(3,"mat-spinner",30),a.TgZ(4,"label",31),a._uU(5,"Loading"),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(3),a.Q6J("diameter",20))}let O=(()=>{class t{constructor(t,e,n){this.breakpointObserver=t,this.store=e,this.router=n,this.isHandset$=this.breakpointObserver.observe(i.u3.Handset).pipe((0,s.U)(t=>t.matches),(0,c.d)()),this.masterOpened=!1,this.loadingState$=this.store.select(g.G)}ngOnInit(){this.router.events.subscribe(t=>{t instanceof r.m2&&document.querySelector(".mat-sidenav-content")&&document.querySelector(".mat-sidenav-content").scrollTo({top:0,behavior:"smooth"})});const t=["/admin/users","/admin/roles"];for(const e of t)this.router.url.includes(e)&&(this.masterOpened=!0);this.state$=this.store.select(p.aF)}onOpened(t){"master"===t&&(this.masterOpened=!0)}logout(){this.store.dispatch(new d.p({accessToken:"",refreshToken:"",role:null})),this.router.navigate(["/login"])}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(i.Yg),a.Y36(l.yh),a.Y36(r.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-admin-navigation"]],decls:47,vars:22,consts:[[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","opened"],["drawer",""],["color","primary","fxLayout","row","fxLayoutAlign","start center","fxLayoutGap","8px"],["src","assets/image/logo.png","alt","",2,"width","42px"],["multi","",1,"nav-accordion",3,"displayMode"],[3,"expanded","expandedChange","opened"],["fxLayout","column","fxLayoutAlign","start stretch",1,"list-item"],["routerLink","/admin/users",3,"routerLinkActive"],["color","primary"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click",4,"ngIf"],["fxLayout","row","fxLayoutAlign","space-between center",2,"width","100%"],[2,"padding-left","16px"],["fxLayout","row","fxLayoutAlign","space-between center","fxLayoutGap","16px",1,"pointer",3,"matMenuTriggerFor"],["fxLayout","column","fxLayoutAlign","center start"],[2,"line-height","24px","font-size","16px"],[2,"font-size","12px","line-height","12px"],["fxLayout","row","fxLayoutAlign","space-between center","fxLayoutGap","8px"],[2,"width","40px"],["src","assets/image/profile.png","alt","",2,"width","100%","border-radius","50%"],["aria-label","Side nav toggle icon"],["xPosition","before"],["menu","matMenu"],["mat-menu-item","",3,"click"],["style","\n        position: absolute;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        z-index: 1000;\n        max-height: 100%;\n        background-color: rgba(255, 255, 255, 0.9);\n      ",4,"ngIf"],[2,"background-color","#fff","border","1px #ddd solid","margin","24px","padding","24px","border-radius","5px","min-height","100vh"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"],[2,"position","absolute","top","0","width","100%","height","100%","z-index","1000","max-height","100%","background-color","rgba(255, 255, 255, 0.9)"],["fxLayout","row","fxLayoutAlign","center center","fxLayoutGap","10px",2,"padding-top","24px"],["fxLayout","row","fxLayoutAlign","space-around center","fxLayoutGap","8px",1,"mat-elevation-z8",2,"background","#fff","padding","12px 16px","border-radius","5px"],["color","accent",3,"diameter"],["for",""]],template:function(t,e){if(1&t&&(a.TgZ(0,"mat-sidenav-container",0),a.TgZ(1,"mat-sidenav",1,2),a.ALo(3,"async"),a.ALo(4,"async"),a.ALo(5,"async"),a.TgZ(6,"mat-toolbar",3),a._UZ(7,"img",4),a.TgZ(8,"div"),a.TgZ(9,"label"),a._uU(10,"Admin APTFI"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(11,"mat-accordion",5),a.TgZ(12,"mat-expansion-panel",6),a.NdJ("expandedChange",function(t){return e.masterOpened=t})("opened",function(){return e.onOpened("master")}),a.TgZ(13,"mat-expansion-panel-header"),a._uU(14,"Master Data"),a.qZA(),a.TgZ(15,"div",7),a.TgZ(16,"a",8),a._uU(17,"User"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(18,"mat-sidenav-content"),a.TgZ(19,"mat-toolbar",9),a.YNc(20,A,3,0,"button",10),a.ALo(21,"async"),a.TgZ(22,"div",11),a._UZ(23,"span",12),a.TgZ(24,"div",13),a.TgZ(25,"div",14),a.TgZ(26,"label",15),a._uU(27),a.ALo(28,"async"),a.qZA(),a.TgZ(29,"label",16),a._uU(30,"Admin"),a.qZA(),a.qZA(),a.TgZ(31,"div",17),a.TgZ(32,"div",18),a._UZ(33,"img",19),a.qZA(),a.TgZ(34,"mat-icon",20),a._uU(35,"expand_more"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(36,"mat-menu",21,22),a.TgZ(38,"button",23),a.NdJ("click",function(){return e.logout()}),a.TgZ(39,"mat-icon"),a._uU(40,"logout"),a.qZA(),a.TgZ(41,"span"),a._uU(42,"Keluar"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.YNc(43,y,6,1,"div",24),a.ALo(44,"async"),a.TgZ(45,"div",25),a._UZ(46,"router-outlet"),a.qZA(),a.qZA(),a.qZA()),2&t){const t=a.MAs(37);a.xp6(1),a.Q6J("mode",a.lcZ(4,12,e.isHandset$)?"over":"side")("opened",!1===a.lcZ(5,14,e.isHandset$)),a.uIk("role",a.lcZ(3,10,e.isHandset$)?"dialog":"navigation"),a.xp6(10),a.Q6J("displayMode","flat"),a.xp6(1),a.Q6J("expanded",e.masterOpened),a.xp6(4),a.Q6J("routerLinkActive","active"),a.xp6(4),a.Q6J("ngIf",a.lcZ(21,16,e.isHandset$)),a.xp6(4),a.Q6J("matMenuTriggerFor",t),a.xp6(3),a.Oqu(null==a.lcZ(28,18,e.state$).user?null:a.lcZ(28,18,e.state$).user.name),a.xp6(16),a.Q6J("ngIf",a.lcZ(44,20,e.loadingState$).loading)}},directives:[u.TM,u.JX,m.Ye,h.xw,h.Wh,h.SQ,f.pp,f.ib,f.yz,r.yS,r.Od,u.Rh,o.O5,x.p6,Z.Hw,x.VK,x.OP,r.lC,v.lW,b.$g],pipes:[o.Ov],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px;background:#455a64}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}.mat-list-item.active[_ngcontent-%COMP%]{background-color:#ddd}.nav-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]{border-radius:0}.nav-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]{color:#fff;background:#455a64;border-top:1px solid #3b4d55;border-bottom:1px solid #3b4d55}.nav-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]   .mat-expansion-indicator[_ngcontent-%COMP%]:after{color:#fff}.nav-accordion[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:12px;color:#000000de;text-decoration:none;border-bottom:1px solid #c7c7c7}.nav-accordion[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#0000000a}.nav-accordion[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:#00000024}.mat-drawer-side[_ngcontent-%COMP%]{border-right:none}.mat-toolbar[_ngcontent-%COMP%]{background:#455a64!important;color:#fff}.mat-expansion-panel-content[_ngcontent-%COMP%]{font-size:14px}"]}),t})(),_=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-admin-view"]],decls:1,vars:0,template:function(t,e){1&t&&a._UZ(0,"app-admin-navigation")},directives:[O],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}"]}),t})();var T=n(5917),M=n(8307),C=n(9773),w=n(8939),P=n(6686),L=n(9620);let k=(()=>{class t{constructor(t,e,n,o){this.router=t,this.store=e,this.jwtService=n,this.userService=o}canActivate(t,e){return this.store.selectOnce(d.a).pipe((0,M.b)(()=>this.store.dispatch(new g.z(!0))),(0,C.zg)(t=>{if(""===t.session.accessToken)return this.router.navigate(["login"]),(0,T.of)(!1);switch(t.session.role.id){case 2:return this.router.navigate(["profil"]),(0,T.of)(!1);case 3:return this.router.navigate(["pengurus/anggota"]),(0,T.of)(!1)}const e=this.store.selectSnapshot(p.aF);if(!e.user){const e=this.jwtService.decodeToken(t.session.accessToken);return this.userService.getById(e.sub).pipe((0,s.U)(t=>{this.store.dispatch(new p.eC(t.user))}))}return(0,T.of)(e)}),(0,s.U)(t=>!1!==t),(0,w.x)(()=>this.store.dispatch(new g.z(!1))))}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(r.F0),a.LFG(l.yh),a.LFG(P.N0),a.LFG(L.K))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var q=n(3356),U=n(3679),z=n(8295),J=n(9983),S=n(7746),F=n(7441),I=n(2789),$=n(5939),G=n(4904);const Q=[{path:"",component:_,canActivate:[k],children:[{path:"",redirectTo:"users"},{path:"users",loadChildren:()=>Promise.all([n.e(606),n.e(592),n.e(997)]).then(n.bind(n,1997)).then(t=>t.AdminUserModule)}]}];let H=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.ez,r.Bz.forChild(Q),G.Ad,m.g0,v.ot,u.SJ,Z.Ps,S.ie,q.o9,x.Tx,f.To,F.LD,U.UX,z.lN,b.Cq,J.c,$.Nh,I.p0]]}),t})()}}]);