function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-home-gallery-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery-home/gallery-home.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery-home/gallery-home.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGalleryHomeGalleryHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content>\n  <div class=\"container-height\">\n    <div class=\"container-content\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-button (click)=\"takePictiure()\" expand=\"block\" fill=\"solid\" shape=\"round\">\n              Take picture\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button (click)=\"ViewGallery()\" expand=\"block\" fill=\"solid\" shape=\"round\">\n             View Gallery\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/gallery-home/gallery-home-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/gallery-home/gallery-home-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: GalleryHomePageRoutingModule */

  /***/
  function srcAppGalleryHomeGalleryHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryHomePageRoutingModule", function () {
      return GalleryHomePageRoutingModule;
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


    var _gallery_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./gallery-home.page */
    "./src/app/gallery-home/gallery-home.page.ts");

    var routes = [{
      path: '',
      component: _gallery_home_page__WEBPACK_IMPORTED_MODULE_3__["GalleryHomePage"]
    }];

    var GalleryHomePageRoutingModule = function GalleryHomePageRoutingModule() {
      _classCallCheck(this, GalleryHomePageRoutingModule);
    };

    GalleryHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GalleryHomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/gallery-home/gallery-home.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/gallery-home/gallery-home.module.ts ***!
    \*****************************************************/

  /*! exports provided: GalleryHomePageModule */

  /***/
  function srcAppGalleryHomeGalleryHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryHomePageModule", function () {
      return GalleryHomePageModule;
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


    var _gallery_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./gallery-home-routing.module */
    "./src/app/gallery-home/gallery-home-routing.module.ts");
    /* harmony import */


    var _gallery_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gallery-home.page */
    "./src/app/gallery-home/gallery-home.page.ts");

    var GalleryHomePageModule = function GalleryHomePageModule() {
      _classCallCheck(this, GalleryHomePageModule);
    };

    GalleryHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _gallery_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["GalleryHomePageRoutingModule"]],
      declarations: [_gallery_home_page__WEBPACK_IMPORTED_MODULE_6__["GalleryHomePage"]]
    })], GalleryHomePageModule);
    /***/
  },

  /***/
  "./src/app/gallery-home/gallery-home.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/gallery-home/gallery-home.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGalleryHomeGalleryHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  width: 100%;\n}\n\n.container-height {\n  height: 100vh;\n  width: 100%;\n  display: table;\n}\n\n.container-height .container-content {\n  background-color: #4995BE;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.container-height .container-content ion-grid {\n  padding: 40px 15px;\n  border-radius: 15px;\n  background-color: #fff;\n  max-width: 356px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS1ob21lL0Q6XFxzdWpheVByb2plY3RzXFxBc3NpZ25tZW50L3NyY1xcYXBwXFxnYWxsZXJ5LWhvbWVcXGdhbGxlcnktaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2dhbGxlcnktaG9tZS9nYWxsZXJ5LWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQUk7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNFUjs7QUREUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5LWhvbWUvZ2FsbGVyeS1ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWhlaWdodHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgLmNvbnRhaW5lci1jb250ZW50e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTk1QkU7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIGlvbi1ncmlke1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzU2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXItaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLmNvbnRhaW5lci1oZWlnaHQgLmNvbnRhaW5lci1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTVCRTtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jb250YWluZXItaGVpZ2h0IC5jb250YWluZXItY29udGVudCBpb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDQwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWF4LXdpZHRoOiAzNTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/gallery-home/gallery-home.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/gallery-home/gallery-home.page.ts ***!
    \***************************************************/

  /*! exports provided: GalleryHomePage */

  /***/
  function srcAppGalleryHomeGalleryHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryHomePage", function () {
      return GalleryHomePage;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GalleryHomePage = /*#__PURE__*/function () {
      function GalleryHomePage(camera, router) {
        _classCallCheck(this, GalleryHomePage);

        this.camera = camera;
        this.router = router;
        this.imgDataArray = [];
        this.imgDataObj = {};
      }

      _createClass(GalleryHomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "takePictiure",
        value: function takePictiure() {
          var _this = this;

          var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          };
          this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;

            if (_this.imgDataArray.length == 0) {
              _this.imgDataObj.id = 1;
            } else {
              _this.imgDataObj.id = _this.imgDataArray.length + 1;
            }

            _this.imgDataObj.imageName = 'my Image ' + _this.imgDataObj.id;
            _this.imgDataObj.imageData = base64Image;
            _this.imgDataObj.date = new Date();
            console.log('imgDataObj', _this.imgDataObj);

            _this.imgDataArray.push(JSON.parse(JSON.stringify(_this.imgDataObj)));

            console.log(_this.imgDataArray);
          }, function (err) {// Handle error
          });
        }
      }, {
        key: "ViewGallery",
        value: function ViewGallery() {
          var navigationExtras = {
            state: {
              user: this.imgDataArray
            }
          };
          this.router.navigate(['gallery'], navigationExtras);
        }
      }]);

      return GalleryHomePage;
    }();

    GalleryHomePage.ctorParameters = function () {
      return [{
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    GalleryHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gallery-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./gallery-home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery-home/gallery-home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./gallery-home.page.scss */
      "./src/app/gallery-home/gallery-home.page.scss"))["default"]]
    })], GalleryHomePage); //id
    //imageName
    //imageData
    //date

    /***/
  }
}]);
//# sourceMappingURL=gallery-home-gallery-home-module-es5.js.map