(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>gallery</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"12\">\n        \n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-text-center\" *ngFor=\"let img of data\">\n        \n        <small></small>\n\n        <div class=\"img-card\">\n          <img [src]=\"img.imageData\" />\n          <div class=\"card-content\">\n            <small style=\"margin-bottom: 6px;\"><b>{{img.imageName}}</b></small>\n            <small>{{img.date | date: 'd MMM yy'}}</small>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/gallery/gallery-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/gallery/gallery-routing.module.ts ***!
  \***************************************************/
/*! exports provided: GalleryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageRoutingModule", function() { return GalleryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery.page */ "./src/app/gallery/gallery.page.ts");




const routes = [
    {
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_3__["GalleryPage"]
    }
];
let GalleryPageRoutingModule = class GalleryPageRoutingModule {
};
GalleryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GalleryPageRoutingModule);



/***/ }),

/***/ "./src/app/gallery/gallery.module.ts":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.module.ts ***!
  \*******************************************/
/*! exports provided: GalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function() { return GalleryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery-routing.module */ "./src/app/gallery/gallery-routing.module.ts");
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery.page */ "./src/app/gallery/gallery.page.ts");







let GalleryPageModule = class GalleryPageModule {
};
GalleryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__["GalleryPageRoutingModule"]
        ],
        declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]]
    })
], GalleryPageModule);



/***/ }),

/***/ "./src/app/gallery/gallery.page.scss":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-card {\n  background-color: #fff;\n  box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.img-card .card-content {\n  padding: 18px;\n  text-align: center;\n}\n.img-card .card-content small {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9EOlxcc3VqYXlQcm9qZWN0c1xcQXNzaWdubWVudC9zcmNcXGFwcFxcZ2FsbGVyeVxcZ2FsbGVyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0ksY0FBQTtBQ0daIiwiZmlsZSI6InNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDEzcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLmNhcmQtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBzbWFsbHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmltZy1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW1nLWNhcmQgLmNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWctY2FyZCAuY2FyZC1jb250ZW50IHNtYWxsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/gallery/gallery.page.ts":
/*!*****************************************!*\
  !*** ./src/app/gallery/gallery.page.ts ***!
  \*****************************************/
/*! exports provided: GalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPage", function() { return GalleryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let GalleryPage = class GalleryPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.currentImage = [];
        this.fileDetails = {};
        this.localPhotoArray = [];
        if (this.router.getCurrentNavigation().extras.state) {
            this.data = this.router.getCurrentNavigation().extras.state.user;
            console.log(this.data);
        }
    }
    ngOnInit() {
    }
};
GalleryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
GalleryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./gallery.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./gallery.page.scss */ "./src/app/gallery/gallery.page.scss")).default]
    })
], GalleryPage);



/***/ })

}]);
//# sourceMappingURL=gallery-gallery-module-es2015.js.map