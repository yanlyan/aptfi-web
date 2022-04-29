(self["webpackChunkaptfi"] = self["webpackChunkaptfi"] || []).push([["common"],{

/***/ 1781:
/*!**********************************************!*\
  !*** ./src/app/core/must-match.validator.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MustMatch": () => (/* binding */ MustMatch)
/* harmony export */ });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ 8595:
/*!**************************************!*\
  !*** ./src/app/login/login.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGuard": () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.state */ 2534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ 5508);




class LoginGuard {
    constructor(router, store) {
        this.router = router;
        this.store = store;
    }
    canActivate(route, state) {
        const appState = this.store.selectSnapshot(_app_state__WEBPACK_IMPORTED_MODULE_0__.AppState);
        if (appState.session.accessToken !== '') {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_1__.Store)); };
LoginGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 250:
/*!****************************************************************************!*\
  !*** ./src/app/pengurus-view/pengurus-tagihan/pengurus-tagihan.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PengurusTagihanService": () => (/* binding */ PengurusTagihanService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/http-client.service */ 7352);



class PengurusTagihanService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllBills(page, size, sortColumn, sortDirection, search, status, mine) {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/bills/paginate`, {
            params: {
                page: page.toString(),
                size: size.toString(),
                orderBy: sortColumn,
                orderDirection: sortDirection,
                search,
                status: status.toString(),
                mine: mine || 'false',
            },
        });
    }
    deleteBill(id) {
        return this.httpClient.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/bills/${id}`);
    }
}
PengurusTagihanService.ɵfac = function PengurusTagihanService_Factory(t) { return new (t || PengurusTagihanService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_client_service__WEBPACK_IMPORTED_MODULE_1__.HttpClientService)); };
PengurusTagihanService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PengurusTagihanService, factory: PengurusTagihanService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9499:
/*!**************************************************************************!*\
  !*** ./src/app/pengurus-view/pengurus-verify/pengurus-verify.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PengurusVerifyService": () => (/* binding */ PengurusVerifyService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/http-client.service */ 7352);



class PengurusVerifyService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllMember(page, size, sortColumn, sortDirection, search, status) {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/members/paginate-verify`, {
            params: {
                page: page.toString(),
                size: size.toString(),
                orderBy: sortColumn,
                orderDirection: sortDirection,
                search,
                status: status.toString(),
            },
        });
    }
    getDetailMember(uuid = '') {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/members/${uuid}`);
    }
    downloadFile(uuid, column) {
        return this.httpClient.download(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/members/file/download/${uuid}/${column}`, {
            responseType: 'blob',
        });
    }
    verifyMember(uuid) {
        return this.httpClient.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/members/verify/${uuid}`, {});
    }
    rejectMember(uuid, reason) {
        return this.httpClient.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/members/reject/${uuid}`, {
            reason,
        });
    }
}
PengurusVerifyService.ɵfac = function PengurusVerifyService_Factory(t) { return new (t || PengurusVerifyService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_core_http_client_service__WEBPACK_IMPORTED_MODULE_1__.HttpClientService)); };
PengurusVerifyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PengurusVerifyService, factory: PengurusVerifyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6633:
/*!******************************************************!*\
  !*** ./src/app/user-view/tagihan/tagihan.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagihanService": () => (/* binding */ TagihanService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_http_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/http-client.service */ 7352);




class TagihanService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    createOrder(type) {
        return this.httpClient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/bills`, {
            type,
        });
    }
    getOrder() {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/bills`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            response.bills.map((b) => {
                b.isExpired = new Date(b.expiredDate).getTime() <= Date.now();
            });
            return response;
        }));
    }
    check(orderId) {
        return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/bills/check/${orderId}`);
    }
    retry(token) {
        return this.httpClient.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/bills/retry/${token}`, {});
    }
    printInvoice(token) {
        return this.httpClient.download(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/bills/print-invoice/${token}`, { responseType: 'blob' });
    }
    printReceipt(token) {
        return this.httpClient.download(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api}/bills/print/${token}`, { responseType: 'blob' });
    }
}
TagihanService.ɵfac = function TagihanService_Factory(t) { return new (t || TagihanService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_core_http_client_service__WEBPACK_IMPORTED_MODULE_1__.HttpClientService)); };
TagihanService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TagihanService, factory: TagihanService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5226:
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});



/***/ }),

/***/ 8283:
/*!***************************************************************!*\
  !*** ./node_modules/ngx-filesaver/fesm2015/ngx-filesaver.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileSaverDirective": () => (/* binding */ FileSaverDirective),
/* harmony export */   "FileSaverModule": () => (/* binding */ FileSaverModule),
/* harmony export */   "FileSaverService": () => (/* binding */ FileSaverService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 5226);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);






class FileSaverService {
  get isFileSaverSupported() {
    try {
      return !!new Blob();
    } catch (e) {
      return false;
    }
  }

  genType(fileName) {
    if (!fileName || fileName.lastIndexOf('.') === -1) {
      return 'text/plain';
    }

    const type = fileName.substr(fileName.lastIndexOf('.') + 1);

    switch (type) {
      case 'txt':
        return 'text/plain';

      case 'xml':
      case 'html':
        return `text/${type}`;

      case 'json':
        return 'octet/stream';

      default:
        return `application/${type}`;
    }
  }

  save(blob, fileName, filtType, option) {
    if (!blob) {
      throw new Error('Data argument should be a blob instance');
    }

    const file = new Blob([blob], {
      type: filtType || blob.type || this.genType(fileName)
    });
    (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(file, decodeURI(fileName || 'download'), option);
  }

  saveText(txt, fileName, option) {
    const blob = new Blob([txt]);
    this.save(blob, fileName, undefined, option);
  }

}

FileSaverService.ɵfac = function FileSaverService_Factory(t) {
  return new (t || FileSaverService)();
};

FileSaverService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FileSaverService,
  factory: FileSaverService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileSaverService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

class FileSaverDirective {
  constructor(el, fss, httpClient) {
    this.el = el;
    this.fss = fss;
    this.httpClient = httpClient;
    this.method = 'GET';
    this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();

    if (!fss.isFileSaverSupported) {
      el.nativeElement.classList.add(`filesaver__not-support`);
    }
  }

  getName(res) {
    return decodeURI(this.fileName || res.headers.get('filename') || res.headers.get('x-filename') || '');
  }

  _click() {
    if (!this.fss.isFileSaverSupported) {
      return;
    }

    let req = this.http;

    if (!req) {
      let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
      const query = this.query || {}; // tslint:disable-next-line:forin

      for (const item in query) {
        params = params.set(item, query[item]);
      }

      req = this.httpClient.request(this.method, this.url, {
        observe: 'response',
        responseType: 'blob',
        headers: this.header,
        params
      });
    }

    this.setDisabled(true);
    req.subscribe(res => {
      if (res.status !== 200 || res.body.size <= 0) {
        this.error.emit(res);
        return;
      }

      this.fss.save(res.body, this.getName(res), undefined, this.fsOptions);
      this.success.emit(res);
    }, err => this.error.emit(err), () => this.setDisabled(false));
  }

  setDisabled(status) {
    const el = this.el.nativeElement;
    el.disabled = status;
    el.classList[status ? 'add' : 'remove'](`filesaver__disabled`);
  }

}

FileSaverDirective.ɵfac = function FileSaverDirective_Factory(t) {
  return new (t || FileSaverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FileSaverService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};

FileSaverDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: FileSaverDirective,
  selectors: [["", "fileSaver", ""]],
  hostBindings: function FileSaverDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FileSaverDirective_click_HostBindingHandler() {
        return ctx._click();
      });
    }
  },
  inputs: {
    method: "method",
    http: "http",
    query: "query",
    header: "header",
    url: "url",
    fileName: "fileName",
    fsOptions: "fsOptions"
  },
  outputs: {
    success: "success",
    error: "error"
  },
  exportAs: ["fileSaver"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileSaverDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[fileSaver]',
      exportAs: 'fileSaver'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: FileSaverService
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
    }];
  }, {
    method: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    http: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    query: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    fileName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    fsOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    success: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    error: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    _click: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
      args: ['click']
    }]
  });
})();

class FileSaverModule {}

FileSaverModule.ɵfac = function FileSaverModule_Factory(t) {
  return new (t || FileSaverModule)();
};

FileSaverModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: FileSaverModule
});
FileSaverModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FileSaverModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [FileSaverDirective],
      exports: [FileSaverDirective]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 1670:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

}]);
//# sourceMappingURL=common.js.map