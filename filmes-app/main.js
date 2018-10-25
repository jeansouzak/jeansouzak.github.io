(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _filmes_filmes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filmes/filmes.component */ "./src/app/filmes/filmes.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'filmes', component: _filmes_filmes_component__WEBPACK_IMPORTED_MODULE_2__["FilmesComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _filmes_filmes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filmes/filmes.component */ "./src/app/filmes/filmes.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _filmes_filmes_component__WEBPACK_IMPORTED_MODULE_3__["FilmesComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/filmes/filmes.component.css":
/*!*********************************************!*\
  !*** ./src/app/filmes/filmes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {    \r\n    width: 600px;\r\n    margin: 0 auto;\r\n    padding: 0;    \r\n  }\r\n  \r\n\r\n  h3 {\r\n      text-align: center;\r\n      font-family: \"Lucida Sans\";\r\n      font-stretch: condensed;\r\n      color: rgb(247, 56, 56);\r\n  }\r\n  \r\n\r\n  .list {\r\n      \r\n    color: #68555e;\r\n    font-size: 16pxx;\r\n    padding: 0 !important;    \r\n    font-family: \"Bookman Old Style\";\r\n    border: 1px solid #dedede;\r\n  }\r\n  \r\n\r\n  .list li {\r\n    list-style: none;\r\n    border-bottom: 1px dotted #ccc;\r\n    text-indent: 25px;\r\n    height: auto;\r\n    padding: 10px;\r\n    text-transform: capitalize;\r\n    background-color: #f0f0f0;\r\n  }\r\n  \r\n\r\n  .list li:hover {\r\n    background-color: #c9c9c9;\r\n    -webkit-transition: all 0.2s;\r\n    -moz-transition:    all 0.2s;\r\n    -ms-transition:     all 0.2s;\r\n    -o-transition:      all 0.2s;\r\n    cursor: pointer;\r\n  }\r\n  \r\n\r\n  .lines {\r\n    border-left: 1px solid #ffaa9f;\r\n    border-right: 1px solid #ffaa9f;\r\n    width: 2px;\r\n    float: left;\r\n    height: 600px;\r\n    margin-left: 40px;\r\n  }"

/***/ }),

/***/ "./src/app/filmes/filmes.component.html":
/*!**********************************************!*\
  !*** ./src/app/filmes/filmes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading *ngIf=\"!isLoaded\"></app-loading>  \n<div class=\"centered\" *ngIf=\"isLoaded\">  \n  <h3>♡ Nossos Filmes ♡</h3>\n  <div class=\"lines\"></div>\n  <ul class=\"list\">\n    <li style=\"text-decoration: line-through\">Capitão Fantástico</li>\n    <li style=\"text-decoration: line-through\">Babe, o Porquinho Atrapalhado</li>\n    <li>Submarine</li>\n    <li>Ponyo</li>\n    <li>Sociedade dos Poetas Mortos</li>\n    <li style=\"text-decoration: line-through\">Her</li>\n    <li style=\"text-decoration: line-through\">Clube de Compras Dallas</li>\n    <li>O Operário</li>\n    <li>Fragmentado</li>\n    <li>O Homem Duplicado</li>\n    <li>Precisamos falar sobre o Kevin</li>    \n    <li>O Homem Duplicado</li>\n    <li>Halloween Antigo</li>\n    <li>Halloween 2018</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/filmes/filmes.component.ts":
/*!********************************************!*\
  !*** ./src/app/filmes/filmes.component.ts ***!
  \********************************************/
/*! exports provided: FilmesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmesComponent", function() { return FilmesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilmesComponent = /** @class */ (function () {
    function FilmesComponent() {
        this.isLoaded = false;
    }
    FilmesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filmes = new Array();
        setTimeout(function () {
            _this.isLoaded = true;
        }, 3000);
    };
    FilmesComponent.prototype.loadFilmes = function () {
    };
    FilmesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filmes',
            template: __webpack_require__(/*! ./filmes.component.html */ "./src/app/filmes/filmes.component.html"),
            styles: [__webpack_require__(/*! ./filmes.component.css */ "./src/app/filmes/filmes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FilmesComponent);
    return FilmesComponent;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.css":
/*!***********************************************!*\
  !*** ./src/app/loading/loading.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mypopcorn {\r\n  padding:20px;\r\n}\r\n\r\n.popcorn{\r\n  margin: auto;\r\n  position: absolute;\r\n  width:85px;\r\n  top: 30%; \r\n  left: 0; \r\n  bottom: 0; \r\n  right: 0;  \r\n}\r\n\r\ncircle#popcrncirlce {\r\n  fill: #FFE477;\r\n  transform-origin: 0 0;\r\n  -webkit-transform-origin: 0 0;\r\n  -webkit-animation: rotate 1.5s cubic-bezier(.49,.05,.32,1.04) infinite alternate;\r\n  animation: rotate 1.5s cubic-bezier(.49,.05,.32,1.04) infinite alternate;\r\n}\r\n\r\n@-webkit-keyframes rotate {\r\n  50% {\r\n    -webkit-transform: translate(0px, 100px);\r\n  }\r\n}\r\n\r\n@keyframes rotate {\r\n  50% {\r\n    -webkit-transform: translate(0px, 100px);\r\n            transform: translate(0px, 100px);\r\n  }\r\n}\r\n\r\n#position{\r\n\tposition:fixed;\r\n\tbottom:180px;\r\n\tleft:25px;\r\n}\r\n\r\n.sunflower{\r\n  position:relative;\r\n  height:30px;\r\n  width:30px;\r\n}\r\n\r\n.head {\r\n  -webkit-animation: hmove 2s infinite linear;\r\n          animation: hmove 2s infinite linear;\r\n  height: 50px;\r\n  width: 62px;\r\n  position: relative;\r\n  left:8px;\r\n  top:39px;\r\n  -webkit-transform-origin: 50% -7px;\r\n          transform-origin: 50% -7px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n.head .eye {\r\n  background: #43699a;\r\n  border-radius: 10px;\r\n  height: 5px;\r\n  position: absolute;\r\n  top: 30px;\r\n  width: 5px;\r\n}\r\n\r\n.head .eye#eye-1 {\r\n  left: 17px;\r\n   -webkit-animation: eye 4s linear infinite normal 0.5s;\r\n           animation: eye 4s linear infinite normal 0.5s;\r\n}\r\n\r\n.head .eye#eye-2 {\r\n  right: 17px;\r\n  -webkit-animation: eye 4s linear infinite normal 0.5s;\r\n          animation: eye 4s linear infinite normal 0.5s;\r\n}\r\n\r\n.head .mouth {\r\n  background: #ecf0f1;\r\n  border-radius: 30px;\r\n  bottom: 2px;\r\n  clip: rect(8px, 15px, 16px, 0);\r\n  height: 16px;\r\n  margin-left: -7.5px;\r\n  position: absolute;\r\n  left: 50%;\r\n  width: 15px;\r\n}\r\n\r\n.petals {\r\n  z-index:-1;\r\n  border-radius:100%;\r\n  display:inline-block;\r\n  background-color:#faaa18;\r\n  height:50px;\r\n  width:50px;\r\n  position:absolute;\r\n  -webkit-animation:petals 2s infinite linear;\r\n          animation:petals 2s infinite linear;\r\n  box-shadow:15px 17px #ffe000,\r\n    -15px 17px #ffe000,\r\n    -22px -7px #ffe000,\r\n    0px -22px #ffe000,\r\n    22px -7px #ffe000;\r\n}\r\n\r\n.trunk{\r\n\theight: 65px; width: 5px;\r\n\tbackground:#77b039;\r\n\tleft: 37px;top:100px;\r\n\tposition:absolute;\r\n\tz-index:-2;\r\n\t-webkit-animation:trunk 2s infinite linear;\r\n\t        animation:trunk 2s infinite linear;\r\n}\r\n\r\n.left-branch{\r\n\tbackground: #77b039;\r\n\theight: 35px; width: 9px;\r\n\tposition: absolute; left: -12px; top: 24px;\r\n\tborder-radius:100% 0% 0% 0%;\r\n\t-webkit-border-radius:100% 0% 0% 0%;\r\n\t-moz-border-radius:100% 0% 0% 0%;\r\n\t-ms-border-radius:100% 0% 0% 0%;\r\n\t-o-border-radius:100% 0% 0% 0%;\r\n\t\r\n\ttransform: rotate(-50deg);\r\n\t-webkit-transform: rotate(-50deg);\r\n\t-moz-transform: rotate(-50deg);\r\n\t-ms-transform: rotate(-50deg);\r\n\t-o-transform: rotate(-50deg);\r\n}\r\n\r\n.right-branch{\r\n\tbackground: #77b039;\r\n\theight: 35px; width: 9px;\r\n\tposition: absolute; top: 24px; left: 10px;\r\n\tborder-radius:0% 100% 0% 0%;\r\n\t-webkit-border-radius:0% 100% 0% 0%;\r\n\t-moz-border-radius:0% 100% 0% 0%;\r\n\t-ms-border-radius:0% 100% 0% 0%;\r\n\t-o-border-radius:0% 100% 0% 0%;\r\n\t\r\n\ttransform: rotate(50deg);\r\n\t-webkit-transform: rotate(50deg);\r\n\t-moz-transform: rotate(50deg);\r\n\t-ms-transform: rotate(50deg);\r\n\t-o-transform: rotate(50deg);\r\n}\r\n\r\n.vase{\r\nposition:absolute;\r\n   top:165px;\r\n   left:13px;\r\n   height: 0; \r\n   width: 38px;\r\n   border-top: 45px solid #faaa18;\r\n   border-left: 8px solid transparent;\r\n   border-right: 8px solid transparent;\r\n}\r\n\r\n.vase:before,.vase:after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tbackground: #faa118;\r\n}\r\n\r\n.vase:before{\r\n\tbackground: #f9a018;\r\n\twidth: 58px; height: 20px;\r\n\ttop: -50px; left: -10px;\r\n\tposition:absolute;\r\n\tbox-shadow: 0 5px 10px -9px black;\r\n\t-moz-transform: 0 5px 10px -9px black;\r\n\t-ms-transform: 0 5px 10px -9px black;\r\n\t-o-transform: 0 5px 10px -9px black;\r\n}\r\n\r\n@-webkit-keyframes petals {\r\n\t0% {-webkit-transform: rotate(0);transform: rotate(0);left:10px;}\r\n\t25% {left:20px;}\r\n\t50% {left:10px;}\r\n\t75% {left:20px;}\r\n\t100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);left:10px;}\r\n}\r\n\r\n@keyframes petals {\r\n\t0% {-webkit-transform: rotate(0);transform: rotate(0);left:10px;}\r\n\t25% {left:20px;}\r\n\t50% {left:10px;}\r\n\t75% {left:20px;}\r\n\t100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);left:10px;}\r\n}\r\n\r\n@-webkit-keyframes hmove {\r\n\t0% {left:5px;}\r\n\t25% {left:15px;}\r\n\t50% {left:5px;}\r\n\t75% {left:15px;}\r\n\t100% {left:5px;}\r\n}\r\n\r\n@keyframes hmove {\r\n\t0% {left:5px;}\r\n\t25% {left:15px;}\r\n\t50% {left:5px;}\r\n\t75% {left:15px;}\r\n\t100% {left:5px;}\r\n}\r\n\r\n@-webkit-keyframes eye{\r\n\tfrom { }\r\n    79% {height:5px;}\r\n\t80% {height:0px;}\r\n\t85%{height:5px;}\r\n\tto {height:5px;}\r\n}\r\n\r\n@keyframes eye{\r\n\tfrom { }\r\n    79% {height:5px;}\r\n\t80% {height:0px;}\r\n\t85%{height:5px;}\r\n\tto {height:5px;}\r\n}\r\n\r\n@-webkit-keyframes trunk {\r\n\t0% {left:34px;-webkit-transform:rotate(-5deg);transform:rotate(-5deg);}\r\n\t25% {left:40px;-webkit-transform:rotate(5deg);transform:rotate(5deg);}\r\n\t50% {left:34px;-webkit-transform:rotate(-5deg);transform:rotate(-5deg);}\r\n\t75% {left:40px;-webkit-transform:rotate(5deg);transform:rotate(5deg);}\r\n\t100% {left:34px;-webkit-transform:rotate(-5deg);transform:rotate(-5deg);}\r\n}\r\n\r\n@keyframes trunk {\r\n\t0% {left:34px;-webkit-transform:rotate(-5deg);transform:rotate(-5deg);}\r\n\t25% {left:40px;-webkit-transform:rotate(5deg);transform:rotate(5deg);}\r\n\t50% {left:34px;-webkit-transform:rotate(-5deg);transform:rotate(-5deg);}\r\n\t75% {left:40px;-webkit-transform:rotate(5deg);transform:rotate(5deg);}\r\n\t100% {left:34px;-webkit-transform:rotate(-5deg);transform:rotate(-5deg);}\r\n}\r\n"

/***/ }),

/***/ "./src/app/loading/loading.component.html":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<div id=\"position\" class=\"sunflower\">\n    <div class=\"head\">\n        <div id=\"eye-1\" class=\"eye\"></div>\n        <div id=\"eye-2\" class=\"eye\"></div>\n        <div class=\"mouth\"></div>\n    </div>\n    <div class=\"petals\"></div>\n    <div class=\"trunk\">\n      <div class=\"left-branch\"></div>\n      <div class=\"right-branch\"></div>\n    </div>\n    <div class=\"vase\"></div>\n  </div>-->\n<div class=\"popcorn\">\n    <svg class=\"mypopcorn animated fadeIn\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n       viewBox=\"0 0 354.461 354.461\" style=\"enable-background:new 0 0 354.461 354.461;\" xml:space=\"preserve\">\n    <g id=\"XMLID_484_\"></g>\n      \n      <circle id=\"popcrncirlce\" class=\"firstcirle\" cx=\"260.426\" cy=\"22.695\" r=\"22.695\"/>\n      \n      <circle id=\"popcrncirlce\" class=\"firstcirle\" cx=\"163.426\" cy=\"-16.695\" r=\"22.695\"/>\n      \n      <circle id=\"popcrncirlce\" class=\"firstcirle\" cx=\"65.426\" cy=\"22.695\" r=\"22.695\"/>\n      \n      <path id=\"XMLID_488_\" style=\"fill:#FFEB99;\" d=\"M278.375,128.664c-0.05,0-0.099,0.007-0.149,0.008\n        c0.092-0.831,0.149-1.673,0.149-2.529c0-12.534-10.161-22.695-22.695-22.695c-0.05,0-0.099,0.007-0.149,0.008\n        c0.092-0.831,0.149-1.673,0.149-2.529c0-12.534-10.161-22.695-22.695-22.695c-0.752,0-1.495,0.041-2.228,0.112\n        c0.1-0.866,0.165-1.742,0.165-2.634c0-12.099-9.475-21.958-21.406-22.63C208.895,41.1,199.014,31.57,186.88,31.57\n        c-12.136,0-22.018,9.533-22.635,21.515c-0.04-0.002-0.08-0.004-0.119-0.006C163.505,41.1,153.624,31.57,141.491,31.57\n        c-12.136,0-22.018,9.533-22.635,21.515c-0.468-0.029-0.933-0.071-1.408-0.071c-12.534,0-22.695,10.161-22.695,22.695\n        c0,0.887,0.064,1.757,0.162,2.618C83.272,79.295,74.12,89.034,74.12,100.926c0,0.856,0.057,1.698,0.149,2.529\n        c-0.05,0-0.099-0.008-0.149-0.008c-12.534,0-22.695,10.161-22.695,22.695c0,0.856,0.057,1.698,0.149,2.529\n        c-0.05,0-0.099-0.008-0.149-0.008c-12.534,0-22.695,10.161-22.695,22.695c0,12.534,10.161,22.695,22.695,22.695\n        c12.534,0,22.695-10.161,22.695-22.695c0-0.856-0.057-1.698-0.149-2.529c0.05,0,0.099,0.008,0.149,0.008s0.099-0.007,0.149-0.008\n        c-0.092,0.831-0.149,1.673-0.149,2.529c0,12.534,10.161,22.695,22.695,22.695s22.695-10.161,22.695-22.695\n        c0-0.856-0.057-1.698-0.149-2.529c0.05,0,0.099,0.008,0.149,0.008c0.05,0,0.099-0.007,0.149-0.008\n        c-0.092,0.831-0.149,1.673-0.149,2.529c0,12.534,10.161,22.695,22.695,22.695c12.534,0,22.695-10.161,22.695-22.695\n        c0-0.856-0.057-1.698-0.149-2.529c0.05,0,0.099,0.008,0.149,0.008s0.099-0.007,0.149-0.008c-0.092,0.831-0.149,1.673-0.149,2.529\n        c0,12.534,10.161,22.695,22.695,22.695c12.534,0,22.695-10.161,22.695-22.695c0-0.856-0.057-1.698-0.149-2.529\n        c0.05,0,0.099,0.008,0.149,0.008s0.099-0.007,0.149-0.008c-0.092,0.831-0.149,1.673-0.149,2.529\n        c0,12.534,10.161,22.695,22.695,22.695s22.695-10.161,22.695-22.695c0-0.856-0.057-1.698-0.149-2.529\n        c0.05,0,0.099,0.008,0.149,0.008c0.05,0,0.099-0.007,0.149-0.008c-0.092,0.831-0.149,1.673-0.149,2.529\n        c0,12.534,10.161,22.695,22.695,22.695c12.534,0,22.695-10.161,22.695-22.695C301.07,138.825,290.909,128.664,278.375,128.664z\n         M185.473,76.889c0.04,0.002,0.08,0.004,0.119,0.006c0.025,0.48,0.048,0.96,0.103,1.432c-0.108,0.009-0.22,0.006-0.328,0.017\n        C185.423,77.864,185.447,77.377,185.473,76.889z M140.083,76.889c0.04,0.002,0.08,0.004,0.119,0.006\n        c0.025,0.48,0.048,0.96,0.103,1.432c-0.108,0.009-0.22,0.006-0.328,0.017C140.033,77.864,140.057,77.377,140.083,76.889z\n         M96.666,128.672c0.092-0.831,0.149-1.673,0.149-2.529c0-0.856-0.057-1.698-0.149-2.529c0.05,0,0.099,0.008,0.149,0.008\n        c0.05,0,0.099-0.007,0.149-0.008c-0.092,0.831-0.149,1.673-0.149,2.529c0,0.856,0.057,1.698,0.149,2.529\n        c-0.05,0-0.099-0.008-0.149-0.008C96.765,128.664,96.717,128.671,96.666,128.672z M119.361,103.455\n        c0.092-0.831,0.149-1.673,0.149-2.529c0-0.887-0.064-1.757-0.162-2.618c0.108-0.009,0.22-0.006,0.328-0.017\n        c-0.1,0.866-0.165,1.742-0.165,2.634c0,0.856,0.057,1.698,0.149,2.529c-0.05,0-0.099-0.008-0.149-0.008\n        C119.46,103.448,119.412,103.455,119.361,103.455z M142.056,128.672c0.092-0.831,0.149-1.673,0.149-2.529\n        c0-0.856-0.057-1.698-0.149-2.529c0.05,0,0.099,0.008,0.149,0.008s0.099-0.007,0.149-0.008c-0.092,0.831-0.149,1.673-0.149,2.529\n        c0,0.856,0.057,1.698,0.149,2.529c-0.05,0-0.099-0.008-0.149-0.008S142.106,128.671,142.056,128.672z M164.751,103.455\n        c0.092-0.831,0.149-1.673,0.149-2.529c0-0.887-0.064-1.757-0.162-2.618c0.108-0.009,0.22-0.006,0.328-0.017\n        c-0.1,0.866-0.165,1.742-0.165,2.634c0,0.856,0.057,1.698,0.149,2.529c-0.05,0-0.099-0.008-0.149-0.008\n        S164.802,103.455,164.751,103.455z M187.446,128.672c0.092-0.831,0.149-1.673,0.149-2.529c0-0.856-0.057-1.698-0.149-2.529\n        c0.05,0,0.099,0.008,0.149,0.008s0.099-0.007,0.149-0.008c-0.092,0.831-0.149,1.673-0.149,2.529c0,0.856,0.057,1.698,0.149,2.529\n        c-0.05,0-0.099-0.008-0.149-0.008S187.496,128.671,187.446,128.672z M210.141,103.455c0.092-0.831,0.149-1.673,0.149-2.529\n        c0-0.887-0.064-1.757-0.162-2.618c0.108-0.009,0.22-0.006,0.328-0.017c-0.1,0.866-0.165,1.742-0.165,2.634\n        c0,0.856,0.057,1.698,0.149,2.529c-0.05,0-0.099-0.008-0.149-0.008S210.191,103.455,210.141,103.455z M232.836,128.672\n        c0.092-0.831,0.149-1.673,0.149-2.529c0-0.856-0.057-1.698-0.149-2.529c0.05,0,0.099,0.008,0.149,0.008s0.099-0.007,0.149-0.008\n        c-0.092,0.831-0.149,1.673-0.149,2.529c0,0.856,0.057,1.698,0.149,2.529c-0.05,0-0.099-0.008-0.149-0.008\n        S232.886,128.671,232.836,128.672z\"/>\n      <path id=\"XMLID_44_\" style=\"fill:#D77258;\" d=\"M34.376,159.361c2.49-22.257,21.497-39.711,44.39-39.711h0\n        c22.893,0,41.9,17.454,44.39,39.711h0.285v4.964v59.567v130.569H53.947L34.092,164.325v-4.964H34.376z\"/>\n      <path id=\"XMLID_501_\" style=\"fill:#DEDFE8;\" d=\"M209.291,159.361c-2.49-22.257-21.497-39.711-44.39-39.711h0\n        c-22.893,0-41.9,17.454-44.39,39.711h-0.285v4.964v59.567v130.569h89.35V223.892v-59.567v-4.964H209.291z\"/>\n      <path id=\"XMLID_502_\" style=\"fill:#FFE477;\" d=\"M278.375,128.664c-0.05,0-0.099,0.007-0.149,0.008\n        c0.092-0.831,0.149-1.673,0.149-2.529c0-12.534-10.161-22.695-22.695-22.695c-0.05,0-0.099,0.007-0.149,0.008\n        c0.092-0.831,0.149-1.673,0.149-2.529c0-12.534-10.161-22.695-22.695-22.695c-0.752,0-1.495,0.041-2.228,0.112\n        c0.1-0.866,0.165-1.742,0.165-2.634c0-12.099-9.475-21.958-21.406-22.63C208.895,41.1,199.014,31.57,186.88,31.57\n        c-10.615,0-19.505,7.294-21.98,17.14V98.3c0.055-0.002,0.111-0.003,0.165-0.008c-0.1,0.866-0.165,1.742-0.165,2.634\n        c0,0.856,0.057,1.698,0.149,2.529c-0.05,0-0.099-0.008-0.149-0.008v45.39c0.05,0,0.099-0.007,0.149-0.008\n        c-0.092,0.831-0.149,1.673-0.149,2.529c0,12.534,10.161,22.695,22.695,22.695c12.534,0,22.695-10.161,22.695-22.695\n        c0-0.856-0.057-1.698-0.149-2.529c0.05,0,0.099,0.008,0.149,0.008s0.099-0.007,0.149-0.008c-0.092,0.831-0.149,1.673-0.149,2.529\n        c0,12.534,10.161,22.695,22.695,22.695s22.695-10.161,22.695-22.695c0-0.856-0.057-1.698-0.149-2.529\n        c0.05,0,0.099,0.008,0.149,0.008c0.05,0,0.099-0.007,0.149-0.008c-0.092,0.831-0.149,1.673-0.149,2.529\n        c0,12.534,10.161,22.695,22.695,22.695c12.534,0,22.695-10.161,22.695-22.695C301.07,138.825,290.909,128.664,278.375,128.664z\n         M185.367,78.344c0.055-0.479,0.08-0.966,0.105-1.454c0.04,0.002,0.08,0.004,0.119,0.006c0.025,0.48,0.048,0.96,0.103,1.432\n        C185.586,78.336,185.475,78.333,185.367,78.344z M187.744,128.672c-0.05,0-0.099-0.008-0.149-0.008s-0.099,0.007-0.149,0.008\n        c0.092-0.831,0.149-1.673,0.149-2.529c0-0.856-0.057-1.698-0.149-2.529c0.05,0,0.099,0.008,0.149,0.008s0.099-0.007,0.149-0.008\n        c-0.092,0.831-0.149,1.673-0.149,2.529C187.595,126.999,187.652,127.84,187.744,128.672z M210.439,103.455\n        c-0.05,0-0.099-0.008-0.149-0.008s-0.099,0.007-0.149,0.008c0.092-0.831,0.149-1.673,0.149-2.529c0-0.887-0.064-1.757-0.162-2.618\n        c0.108-0.009,0.22-0.006,0.328-0.017c-0.1,0.866-0.165,1.742-0.165,2.634C210.29,101.782,210.347,102.624,210.439,103.455z\n         M233.134,128.672c-0.05,0-0.099-0.008-0.149-0.008s-0.099,0.007-0.149,0.008c0.092-0.831,0.149-1.673,0.149-2.529\n        c0-0.856-0.057-1.698-0.149-2.529c0.05,0,0.099,0.008,0.149,0.008s0.099-0.007,0.149-0.008c-0.092,0.831-0.149,1.673-0.149,2.529\n        C232.985,126.999,233.042,127.84,233.134,128.672z\"/>\n      <path id=\"XMLID_510_\" style=\"fill:#C9C7D7;\" d=\"M209.291,159.361c-2.49-22.257-21.497-39.711-44.39-39.711h0v234.811h44.675\n        V223.892v-59.567v-4.964H209.291z\"/>\n      <path id=\"XMLID_515_\" style=\"fill:#D14F4E;\" d=\"M295.424,159.361c-2.49-22.257-21.497-39.711-44.39-39.711h0\n        c-22.893,0-41.9,17.454-44.39,39.711h-0.285v4.964v59.567v130.569h69.495l19.856-190.136v-4.964H295.424z\"/>\n    </svg>\n      \n    </div>\n      \n       "

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\r\n@import url(\"https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css\");\r\n/deep/ body {    \r\n    background-image: url('/filmes-app/assets/large.jpg') !important;            \r\n    background-color: #f9faf0;    \r\n    background-position: center;\r\n    background-repeat: no-repeat;    \r\n    background-size: cover;\r\n    height: 600px;\r\n}\r\n.owl {\r\n  margin: auto;\r\n  width: 211px;\r\n  height: 108px;\r\n  background-image: url('/filmes-app/assets/owl-login.png');\r\n  position: relative;\r\n}\r\n.owl .hand {\r\n  width: 34px;\r\n  height: 34px;\r\n  border-radius: 40px;\r\n  background-color: #472d20;\r\n  -webkit-transform: scaleY(0.6);\r\n          transform: scaleY(0.6);\r\n  position: absolute;\r\n  left: 14px;\r\n  bottom: -8px;\r\n  transition: 0.3s ease-out;\r\n}\r\n.owl .hand.password {\r\n  -webkit-transform: translateX(42px) translateY(-15px) scale(0.7);\r\n          transform: translateX(42px) translateY(-15px) scale(0.7);\r\n}\r\n.owl .hand.hand-r {\r\n  left: 170px;\r\n}\r\n.owl .hand.hand-r.password {\r\n  -webkit-transform: translateX(-42px) translateY(-15px) scale(0.7);\r\n          transform: translateX(-42px) translateY(-15px) scale(0.7);\r\n}\r\n.owl .arms {\r\n  position: absolute;\r\n  top: 58px;\r\n  height: 41px;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n.owl .arms .arm {\r\n  width: 40px;\r\n  height: 65px;\r\n  background-image: url(\"/filmes-app/assets/owl-login-arm.png\");\r\n  position: absolute;\r\n  left: 20px;\r\n  top: 40px;\r\n  transition: 0.3s ease-out;\r\n}\r\n.owl .arms .arm.password {\r\n  -webkit-transform: translateX(40px) translateY(-40px);\r\n          transform: translateX(40px) translateY(-40px);\r\n}\r\n.owl .arms .arm.arm-r {\r\n  left: 158px;\r\n  -webkit-transform: scaleX(-1);\r\n          transform: scaleX(-1);\r\n}\r\n.owl .arms .arm.arm-r.password {\r\n  -webkit-transform: translateX(-40px) translateY(-40px) scaleX(-1);\r\n          transform: translateX(-40px) translateY(-40px) scaleX(-1);\r\n}\r\n.form {\r\n  margin: auto;\r\n  margin-top: -9px;\r\n  padding: 30px;\r\n  padding-top: 10px;\r\n  background-color: #f2eeb3;\r\n  width: 200px;\r\n}\r\n.form a {\r\n  margin: 10px;  \r\n  padding: 10px;   \r\n}\r\n.form a i{\r\n  margin-bottom: 10px;   \r\n  opacity: 1;   \r\n}\r\n.form a i:hover{\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n}\r\n.form .selected {\r\n  margin-top: 10px;\r\n}\r\n.form .selected i {\r\n  border: dotted 1px;\r\n  padding: 10px;\r\n  padding-left:22px;\r\n  margin: 15px;  \r\n  background-color: #ffff;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n.form .selected .em {\r\n  padding: 8px !important;\r\n  padding-left: 0 !important;\r\n}\r\nh3 {\r\n  font-family: 'Yanone Kaffeesatz', sans-serif;\r\n  font-size: 13px;\r\n  color: #260126;\r\n  text-align: center;\r\n}\r\n.form .error i {  \r\n  border: solid red 2px !important; \r\n}\r\n#heart {\r\n  position: relative;\r\n  width: 100px;\r\n  height: 90px;\r\n  -webkit-animation: heartbeat 1s infinite;\r\n          animation: heartbeat 1s infinite;\r\n  margin:0 auto\r\n}\r\n#heart:before,\r\n#heart:after {\r\n  position: absolute;\r\n  content: \"\";\r\n  left: 50px;\r\n  top: 0;\r\n  width: 50px;\r\n  height: 80px;\r\n  background: #c33;\r\n  border-radius: 50px 50px 0 0;\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n  -webkit-transform-origin: 0 100%;\r\n          transform-origin: 0 100%;\r\n}\r\n#heart:after {\r\n  left: 0;\r\n  -webkit-transform: rotate(45deg);\r\n          transform: rotate(45deg);\r\n  -webkit-transform-origin: 100% 100%;\r\n          transform-origin :100% 100%;\r\n}\r\n@-webkit-keyframes heartbeat\r\n{\r\n0%\r\n{\r\n  -webkit-transform: scale( .75 );\r\n          transform: scale( .75 );\r\n}\r\n20%\r\n{\r\n  -webkit-transform: scale( 1 );\r\n          transform: scale( 1 );\r\n}\r\n40%\r\n{\r\n  -webkit-transform: scale( .75 );\r\n          transform: scale( .75 );\r\n}\r\n60%\r\n{\r\n  -webkit-transform: scale( 1 );\r\n          transform: scale( 1 );\r\n}\r\n80%\r\n{\r\n  -webkit-transform: scale( .75 );\r\n          transform: scale( .75 );\r\n}\r\n100%\r\n{\r\n  -webkit-transform: scale( .75 );\r\n          transform: scale( .75 );\r\n}\r\n}\r\n@keyframes heartbeat\r\n{\r\n0%\r\n{\r\n  -webkit-transform: scale( .75 );\r\n          transform: scale( .75 );\r\n}\r\n20%\r\n{\r\n  -webkit-transform: scale( 1 );\r\n          transform: scale( 1 );\r\n}\r\n40%\r\n{\r\n  -webkit-transform: scale( .75 );\r\n          transform: scale( .75 );\r\n}\r\n60%\r\n{\r\n  -webkit-transform: scale( 1 );\r\n          transform: scale( 1 );\r\n}\r\n80%\r\n{\r\n  -webkit-transform: scale( .75 );\r\n          transform: scale( .75 );\r\n}\r\n100%\r\n{\r\n  -webkit-transform: scale( .75 );\r\n          transform: scale( .75 );\r\n}\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered\">\r\n  <div class=\"owl\">\r\n    <div class=\"hand\" [ngClass]=\"{'password': closeLook}\"></div>\r\n    <div class=\"hand hand-r\" [ngClass]=\"{'password': closeLook}\"></div>\r\n    <div class=\"arms\" [ngClass]=\"{'password': closeLook}\">\r\n      <div class=\"arm\" [ngClass]=\"{'password': closeLook}\"></div>\r\n      <div class=\"arm arm-r\" [ngClass]=\"{'password': closeLook}\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form\" [ngClass]=\"{'password': closeLook}\">\r\n    <h3>Acessar Lista</h3>\r\n    <div class=\"emojis\" *ngIf=\"!isLogged\">\r\n      <a (click)=\"addSelected('em em-baby_chick fade-in')\">\r\n        <i class=\"em em-baby_chick\"></i>\r\n      </a>\r\n      <a (click)=\"addSelected('em em-blowfish fade-in')\">\r\n        <i class=\"em em-blowfish\"></i>\r\n      </a>\r\n      <a (click)=\"addSelected('em em-shark fade-in')\">\r\n        <i class=\"em em-shark\"></i>\r\n      </a>\r\n      <a (click)=\"addSelected('em em-bear fade-in')\">\r\n        <i class=\"em em-bear\"></i>\r\n      </a>\r\n      <a (click)=\"addSelected('em em-heart fade-in')\">\r\n        <i class=\"em em-heart\"></i>\r\n      </a>\r\n      <a (click)=\"addSelected('em em-cat2 fade-in')\">\r\n        <i class=\"em em-cat2\"></i>\r\n      </a>\r\n      <a (click)=\"addSelected('em em-duck fade-in')\">\r\n        <i class=\"em em-duck\"></i>\r\n      </a>\r\n      <a (click)=\"addSelected('em em-dog fade-in')\">\r\n        <i class=\"em em-dog\"></i>\r\n      </a>\r\n      <a (click)=\"addSelected('em em-zebra_face fade-in')\">\r\n        <i class=\"em em-zebra_face\"></i>\r\n      </a>\r\n      <a (click)=\"addSelected('em em-whale fade-in')\">\r\n        <i class=\"em em-whale\"></i>\r\n      </a>\r\n      <a (click)=\"addSelected('em em-t-rex fade-in')\">\r\n        <i class=\"em em-t-rex\"></i>\r\n      </a>\r\n      <a (click)=\"addSelected('em em-tiger fade-in')\">\r\n        <i class=\"em em-tiger\"></i>\r\n      </a>\r\n    </div>\r\n    <div id=\"heart\" *ngIf=\"isLogged\">\r\n\r\n    </div>\r\n    <div class=\"selected\" [ngClass]=\"{'error' : hasError}\">\r\n      <i [ngClass]=\"selected[0]\"></i>\r\n      <i [ngClass]=\"selected[1]\"></i>\r\n      <i [ngClass]=\"selected[2]\"></i>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.hasError = false;
        this.closeLook = true;
        this.selected = new Array();
        this.isLogged = false;
    };
    LoginComponent.prototype.addSelected = function (name) {
        var _this = this;
        if (this.selected.length > 2) {
            this.selected = new Array();
            this.hasError = false;
        }
        this.selected.push(name);
        if (this.selected.length == 3) {
            this.closeLook = false;
            if (this.selected.indexOf("em em-t-rex fade-in") == -1 ||
                this.selected.indexOf("em em-heart fade-in") == -1 ||
                this.selected.indexOf("em em-shark fade-in") == -1) {
                this.hasError = true;
                setTimeout(function () {
                    _this.closeLook = true;
                    alert('Você errou a combinação para acessar a lista de filmes. Tente novamente.');
                }, 600);
            }
            else {
                this.isLogged = true;
                setTimeout(function () {
                    window.location.href = '/filmes';
                }, 1500);
            }
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projetos\EmpresaNova\Clientes\filmes-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map