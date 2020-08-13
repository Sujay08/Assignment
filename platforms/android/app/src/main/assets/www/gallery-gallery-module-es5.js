function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGalleryGalleryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>gallery</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"4\" class=\"ion-text-center\" *ngFor=\"let img of data\">\n        <img [src]=\"img.imageData\" />\n        <small>{{img.date | date: 'd MMM yy'}}</small>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/gallery/gallery-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/gallery/gallery-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: GalleryPageRoutingModule */

  /***/
  function srcAppGalleryGalleryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPageRoutingModule", function () {
      return GalleryPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _gallery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./gallery.page */
    "./src/app/gallery/gallery.page.ts");

    var routes = [{
      path: '',
      component: _gallery_page__WEBPACK_IMPORTED_MODULE_3__["GalleryPage"]
    }];

    var GalleryPageRoutingModule = function GalleryPageRoutingModule() {
      _classCallCheck(this, GalleryPageRoutingModule);
    };

    GalleryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GalleryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/gallery/gallery.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/gallery/gallery.module.ts ***!
    \*******************************************/

  /*! exports provided: GalleryPageModule */

  /***/
  function srcAppGalleryGalleryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function () {
      return GalleryPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./gallery-routing.module */
    "./src/app/gallery/gallery-routing.module.ts");
    /* harmony import */


    var _gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gallery.page */
    "./src/app/gallery/gallery.page.ts");

    var GalleryPageModule = function GalleryPageModule() {
      _classCallCheck(this, GalleryPageModule);
    };

    GalleryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__["GalleryPageRoutingModule"]],
      declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]]
    })], GalleryPageModule);
    /***/
  },

  /***/
  "./src/app/gallery/gallery.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/gallery/gallery.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppGalleryGalleryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/gallery/gallery.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/gallery/gallery.page.ts ***!
    \*****************************************/

  /*! exports provided: GalleryPage */

  /***/
  function srcAppGalleryGalleryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPage", function () {
      return GalleryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GalleryPage = /*#__PURE__*/function () {
      function GalleryPage(route, router) {
        _classCallCheck(this, GalleryPage);

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

      _createClass(GalleryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GalleryPage;
    }();

    GalleryPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    GalleryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gallery',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./gallery.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./gallery.page.scss */
      "./src/app/gallery/gallery.page.scss"))["default"]]
    })], GalleryPage);
    /***/
  }
}]);
//# sourceMappingURL=gallery-gallery-module-es5.js.map