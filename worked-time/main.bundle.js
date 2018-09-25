webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 900px) {\r\n   .delete {\r\n        margin-top:2rem\r\n   }\r\n  \r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n    .horarios {\r\n        margin-top: 3rem;\r\n    }\r\n    \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <meta name=\"description\" content=\"Calcular o tempo trabalhado, informando os dados de entrada e saida você adiciona os intervalos e ele mostra o total de horas\">\n  <meta name=\"author\" content=\"Jean Souza\">\n\n  <title>WorkedTimeApp</title>\n\n\n</head>\n\n<body class=\"bg-light\">\n\n  <div class=\"container\">\n    <div class=\"py-5 text-center\">\n      <img class=\"d-block mx-auto mb-4\" src=\"assets/hourglass.svg\" alt=\"\" width=\"72\" height=\"72\">\n      <h2>WorkedTimeApp</h2>\n      <p class=\"lead\">Informe seus horários de trabalho e veja quantas horas você trabalhou no dia.</p>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-8 order-md-1\">\n        <h4 class=\"mb-3 text-success\">Horário trabalhado</h4>\n        <div class=\"alert alert-danger\" *ngIf=\"errors.length > 0\">\n          <strong>Horário inválido!</strong> Horário de saida deve ser superior ao de entrada.\n        </div>\n        <form class=\"needs-validation\" [formGroup]=\"form\" autocomplete=\"off\">\n          <div class=\"row\">\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"entrada\">Horário de entrada</label>\n              <input type=\"text\" class=\"form-control\" id=\"entrada\" placeholder=\"\" value=\"\" required formControlName=\"entrada\" [textMask]=\"{mask: hourMinuteMask}\"\n                (blur)=\"atualizarHorarios()\">\n            </div>\n            <div class=\"col-md-6 mb-3\">\n              <label for=\"saida\">Horário de saída</label>\n              <input type=\"text\" class=\"form-control\" id=\"saida\" placeholder=\"\" value=\"\" required formControlName=\"saida\" [textMask]=\"{mask: hourMinuteMask}\"\n                (blur)=\"atualizarHorarios()\">\n            </div>\n          </div>\n\n          <hr class=\"mb-4\">\n\n          <h4 class=\"mb-3 text-danger\">Intervalos/Paradas</h4>\n\n          <div formArrayName=\"intervalos\">\n            <div class=\"row\" *ngFor=\"let intervalo of intervalos.controls; let i = index;\" [formGroupName]=\"i\">\n              <div class=\"col-md-4 mb-3\">\n                <label>Nome do intervalo</label>\n                <input type=\"text\" class=\"form-control\" maxlength=\"80\" formControlName=\"nome\" placeholder=\"Ex: café, almoço\" value=\"\" (blur)=\"atualizarHorarios(i)\">\n              </div>\n              <div class=\"col-md-3 mb-3\">\n                <label>Horário de entrada</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"\" [textMask]=\"{mask: hourMinuteMask}\" formControlName=\"entrada\" value=\"\"\n                  required (blur)=\"atualizarHorarios(i)\">\n              </div>\n              <div class=\"col-md-3 mb-3\">\n                <label>Horário de saída</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"\" [textMask]=\"{mask: hourMinuteMask}\" formControlName=\"saida\" value=\"\"\n                  required (blur)=\"atualizarHorarios(i)\">\n              </div>\n\n              <div class=\"col-md-2 mb-3 d-table-cell align-middle\">\n                <button class=\"btn btn-danger btn-sm delete\" (click)=\"deleteIntervalo(i)\">\n                  <span class=\"fa fa-trash-o fa-lg\" aria-hidden=\"true\"></span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row container\">\n            <button class=\"btn btn-primary btn-sm btn-block\" (click)=\"addIntervalo(); $event.preventDefault();\">\n              <span class=\"fa fa-calendar-plus-o fa-lg\" aria-hidden=\"true\"></span> Adicionar intervalo</button>\n          </div>\n        </form>\n      </div>\n\n      <div class=\"col-md-4 order-md-2 mb-4 horarios\" *ngIf=\"horario.entrada && errors.length == 0\">\n        <hr class=\"d-block d-sm-none\">\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n          <span class=\"text-muted\">Horas Trabalhadas</span>\n          <span class=\"badge badge-secondary badge-pill\">{{ intervalos.controls.length + 1 }}</span>\n        </h4>\n        <ul class=\"list-group mb-3\">\n          <li class=\"list-group-item d-flex justify-content-between bg-light\">\n            <div class=\"text-success\">\n              <h6 class=\"my-0\">Tempo de trabalho</h6>\n              <small>Total</small>\n            </div>\n            <span class=\"text-success\">{{ horario.total | date: 'HH:mm' }} Horas</span>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between bg-light\" *ngFor=\"let intervalo of horario.intervalos; let i = index;\">\n            <div class=\"text-danger\">\n              <h6 class=\"my-0\">Intervalo</h6>\n              <small>{{ intervalo.nome }}</small>\n            </div>\n            <span class=\"text-danger\">{{ intervalo.total | date: 'HH:mm' }} Horas</span>\n          </li>\n\n          <li class=\"list-group-item d-flex justify-content-between\">\n            <span>Total</span>\n            <strong>{{ totalHoras | date: 'HH:mm' }} Horas</strong>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <footer class=\"my-5 pt-5 text-muted text-center text-small\">\n      <p class=\"mb-1\">\n        <a href=\"https://jeansouzak.github.io/\">&copy; 2018 Jean Souza</a>\n      </p>\n\n    </footer>\n  </div>\n\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__horario__ = __webpack_require__("./src/app/horario.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.hourMinuteMask = [/[0-2]/, /\d/, ':', /\d/, /\d/];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            entrada: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            saida: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            intervalos: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormArray"]([])
        });
        this.horario = new __WEBPACK_IMPORTED_MODULE_2__horario__["a" /* Horario */]();
        this.horario.entrada = new Date();
        this.horario.saida = new Date();
        this.horario.intervalos = new Array();
        this.errors = new Array();
    };
    Object.defineProperty(AppComponent.prototype, "intervalos", {
        get: function () {
            return this.form.get('intervalos');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.addIntervalo = function (intervalo) {
        var dependenteFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            nome: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null),
            entrada: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            saida: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
        });
        this.intervalos.push(dependenteFormGroup);
    };
    AppComponent.prototype.deleteIntervalo = function (index) {
        this.intervalos.removeAt(index);
        this.atualizarHorarios();
    };
    AppComponent.prototype.atualizarHorarios = function (index) {
        var _this = this;
        var horariosForm = __assign({}, this.form.value);
        this.horario.entrada = this.getDateNowWithCustomHour(horariosForm.entrada);
        this.horario.saida = this.getDateNowWithCustomHour(horariosForm.saida);
        this.validarHorario('horario', this.horario.entrada, this.horario.saida);
        this.horario.total = this.getTotal(this.horario.entrada, this.horario.saida);
        var somaIntervalosHoras = 0;
        var somaIntervalosMinutos = 0;
        var intervalos = new Array();
        horariosForm.intervalos.map(function (intervaloForm) {
            var intervalo = new __WEBPACK_IMPORTED_MODULE_2__horario__["a" /* Horario */]();
            intervalo.index = index;
            intervalo.nome = intervaloForm.nome;
            intervalo.entrada = _this.getDateNowWithCustomHour(intervaloForm.entrada);
            intervalo.saida = _this.getDateNowWithCustomHour(intervaloForm.saida);
            _this.validarHorario(index, intervalo.entrada, intervalo.saida);
            intervalo.total = _this.getTotal(intervalo.entrada, intervalo.saida);
            somaIntervalosHoras += intervalo.total.getHours();
            somaIntervalosMinutos += intervalo.total.getMinutes();
            intervalos.push(intervalo);
        });
        this.horario.intervalos = intervalos;
        this.totalHoras = new Date();
        this.totalHoras.setHours(this.horario.total.getHours() - somaIntervalosHoras);
        this.totalHoras.setMinutes(this.horario.total.getMinutes() - somaIntervalosMinutos);
        console.log(this.errors);
    };
    AppComponent.prototype.validarHorario = function (index, entrada, saida) {
        if (entrada > saida) {
            this.errors.push(index);
        }
        else {
            this.errors.splice(this.errors.indexOf(index));
        }
    };
    AppComponent.prototype.getDateNowWithCustomHour = function (customHour) {
        var dateNow = new Date();
        if (customHour) {
            var explodedHour = customHour.split(':');
            if (explodedHour.length > 1) {
                dateNow.setHours(explodedHour[0], explodedHour[1]);
            }
        }
        return dateNow;
    };
    AppComponent.prototype.getTotal = function (initDate, endDate) {
        var totalDate = new Date();
        var hours = endDate.getHours() - initDate.getHours();
        var minutes = endDate.getMinutes() - initDate.getMinutes();
        totalDate.setHours(hours);
        totalDate.setMinutes(minutes);
        return totalDate;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_text_mask__ = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular2_text_mask__["TextMaskModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/horario.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Horario; });
var Horario = /** @class */ (function () {
    function Horario() {
    }
    return Horario;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map