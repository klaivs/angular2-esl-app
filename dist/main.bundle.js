webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vacations_vacations_component__ = __webpack_require__("../../../../../src/app/vacations/vacations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vacations_add_vacations_add_component__ = __webpack_require__("../../../../../src/app/vacations-add/vacations-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_settings_user_settings_component__ = __webpack_require__("../../../../../src/app/user-settings/user-settings.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'vacations', component: __WEBPACK_IMPORTED_MODULE_3__vacations_vacations_component__["a" /* VacationsComponent */] },
    { path: 'vacations/add', component: __WEBPACK_IMPORTED_MODULE_4__vacations_add_vacations_add_component__["a" /* VacationsAddComponent */] },
    { path: 'user-settings', component: __WEBPACK_IMPORTED_MODULE_5__user_settings_user_settings_component__["a" /* UserSettingsComponent */] }
    /*
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent }
    */
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#userDataDiv{\r\n    padding: 12px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<nav class=\"navbar navbar-default\" >\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-expanded=\"false\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n          <a class=\"navbar-brand\" routerLink=\"/dashboard\"><span class=\"title\">{{title}}</span> <span class=\"glyphicon glyphicon-sunglasses\" aria-hidden=\"true\"></span></a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <li role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:\r\n    true}\"><a routerLink=\"/vacations\" >My Vacations</a></li>\r\n            <li role=\"presentation\" class=\"dropdown\" routerLinkActive=\"active\">\r\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                Actions <span class=\"caret\"></span>\r\n              </a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li><a routerLink=\"/vacations/add\">Request new ...</a></li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6 text-right\" id=\"userDataDiv\">\r\n        <div class=\"collapse navbar-collapse\">\r\n            <login-form></login-form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<div class=\"container\">\r\n  <app-msg></app-msg>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ESL Vacations';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppConfig; });

var APP_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* OpaqueToken */]("app.config");
var AppConfig = {
    msgTimeout: 4000
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vacations_vacations_component__ = __webpack_require__("../../../../../src/app/vacations/vacations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__vacations_add_vacations_add_component__ = __webpack_require__("../../../../../src/app/vacations-add/vacations-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_form_component__ = __webpack_require__("../../../../../src/app/login/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__datastore_user_user_datastore__ = __webpack_require__("../../../../../src/app/datastore/user/user.datastore.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__datastore_user_user_service__ = __webpack_require__("../../../../../src/app/datastore/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__msg_msg_service__ = __webpack_require__("../../../../../src/app/msg/msg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__msg_msg_component__ = __webpack_require__("../../../../../src/app/msg/msg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_settings_user_settings_component__ = __webpack_require__("../../../../../src/app/user-settings/user-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_datepicker__ = __webpack_require__("../../../../ng2-datepicker/lib-dist/ng2-datepicker.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__vacations_vacations_component__["a" /* VacationsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__vacations_add_vacations_add_component__["a" /* VacationsAddComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_16__msg_msg_component__["a" /* MsgComponent */],
            __WEBPACK_IMPORTED_MODULE_17__user_settings_user_settings_component__["a" /* UserSettingsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__datastore_user_user_datastore__["a" /* UserDataStore */]),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_18_ng2_datepicker__["a" /* DatePickerModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__datastore_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_15__msg_msg_service__["a" /* MsgService */],
            { provide: __WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* APP_CONFIG */], useValue: __WEBPACK_IMPORTED_MODULE_8__app_config__["b" /* AppConfig */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/datastore/user/user.datastore.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataStore; });
var UserDataStore = (function () {
    function UserDataStore() {
    }
    UserDataStore.prototype.createDb = function () {
        var users = [
            { id: 1, username: "test", password: "test", firstname: "Jānis", lastname: "Testētājs", approver_id: 1, available_vac_days: 20 },
            { id: 2, username: "f1", password: "f1", firstname: "Anna", lastname: "F1", approver_id: 1, available_vac_days: 32 },
            { id: 3, username: "f2", password: "f2", firstname: "Pēteris", lastname: "Liepiņš", approver_id: 1, available_vac_days: 14 }
        ];
        return { users: users };
    };
    return UserDataStore;
}());

//# sourceMappingURL=user.datastore.js.map

/***/ }),

/***/ "../../../../../src/app/datastore/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { UserDataStore } from './user.datastore';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'api/users'; // URL to web api
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    UserService.prototype.login = function (username, password) {
        var _this = this;
        var ret;
        return this.getUser(username)
            .then(function (usr) {
            var isok = false;
            if (typeof usr !== 'undefined') {
                if (usr.password == password) {
                    isok = true;
                    _this.loggedInUser = usr;
                }
                else {
                    throw new Error('Passwords do not match!');
                }
            }
            else {
                throw new Error('User not found!');
            }
            return isok ? usr : null;
        })
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        delete this.loggedInUser;
    };
    UserService.prototype.getUser = function (username) {
        var url = this.apiUrl + "?username=" + username;
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            var users = response.json().data;
            return users[0];
        })
            .catch(this.handleError);
    };
    UserService.prototype.getLoggedInUser = function () {
        return this.loggedInUser;
    };
    UserService.prototype.update = function (user) {
        var url = this.apiUrl + "/" + user.id;
        return this.http
            .put(url, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function () { return user; })
            .catch(this.handleError);
    };
    UserService.prototype.getAllUsers = function () {
        var url = "" + this.apiUrl;
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            var users = response.json().data;
            return users;
        })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#username{\r\n    width: 100px;\r\n    height: 25px;\r\n}\r\n#password{\r\n    width:100px;\r\n    height: 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!userService.getLoggedInUser()\">\n    <form class=\"form-inline\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" id=\"loginForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" required [(ngModel)]=\"username\" name=\"username\" #name=\"ngModel\">\n        <!--div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n          Username is required!\n        </div-->\n      </div>\n      <div class=\"form-group\">    \n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" required [(ngModel)]=\"password\" name=\"password\" #pname=\"ngModel\">\n        <!--div [hidden]=\"pname.valid || pname.pristine\" class=\"alert alert-danger\">\n          Password is required!\n        </div-->\n      </div>\n      \n      <button type=\"submit\" class=\"btn btn-success btn-xs\" [disabled]=\"!loginForm.form.valid\" id=\"btnLoginSubmit\">Login</button>\n      <span class=\"glyphicon glyphicon-info-sign\" aria-hidden=\"true\" title=\"Try 'f1' or 'test' as username and password!\"></span>\n    </form>\n</div>\n<div *ngIf=\"userService.getLoggedInUser()\">\n  <span id=\"user_actions\">Hello {{userService.getLoggedInUser().firstname}} {{userService.getLoggedInUser().lastname}}!</span>\n  <a routerLink=\"/user-settings\"><span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\" title=\"Settings\"></span></a>\n  <a (click)=\"userService.logout()\"><span class=\"glyphicon glyphicon-log-out\" aria-hidden=\"true\" title=\"Logout\"></span></a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__datastore_user_user_service__ = __webpack_require__("../../../../../src/app/datastore/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__msg_msg_service__ = __webpack_require__("../../../../../src/app/msg/msg.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = (function () {
    function LoginFormComponent(userService, msgService) {
        this.userService = userService;
        this.msgService = msgService;
        this.username = "test";
        this.password = "test";
    }
    LoginFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.login(this.username, this.password)
            .then(function (ret) {
            if (ret) {
                console.log("user logged in");
                _this.username = "";
                _this.password = "";
            }
        })
            .catch(function (err) {
            _this.msgService.addMessage(err, 3, "Warning");
        });
    };
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'login-form',
        template: __webpack_require__("../../../../../src/app/login/login-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__datastore_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__datastore_user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__msg_msg_service__["a" /* MsgService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__msg_msg_service__["a" /* MsgService */]) === "function" && _b || Object])
], LoginFormComponent);

var _a, _b;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/msg/msg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/msg/msg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-{{message.type}}\" *ngIf=\"message\">\n  <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" (click)=\"oncloseMsg()\">&times;</a>\n  <strong>{{message.title}}</strong> {{message.text}}\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/msg/msg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__msg_msg_service__ = __webpack_require__("../../../../../src/app/msg/msg.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MsgComponent = (function () {
    function MsgComponent(msgService) {
        var _this = this;
        this.msgService = msgService;
        this.subscription = this.msgService.getMessage().subscribe(function (message) {
            _this.message = message;
            _this.initMsg(_this.msgService.config.msgTimeout, function () { _this.oncloseMsg(); });
        });
    }
    MsgComponent.prototype.initMsg = function (_timeout, closefunc) {
        window.setTimeout(function () {
            $(".alert").fadeTo(500, 0).slideUp(500, function () {
                closefunc();
                $(this).remove();
            });
        }, _timeout);
    };
    MsgComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    MsgComponent.prototype.oncloseMsg = function () {
        this.msgService.clearMessage();
    };
    return MsgComponent;
}());
MsgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-msg',
        template: __webpack_require__("../../../../../src/app/msg/msg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/msg/msg.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__msg_msg_service__["a" /* MsgService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__msg_msg_service__["a" /* MsgService */]) === "function" && _a || Object])
], MsgComponent);

var _a;
//# sourceMappingURL=msg.component.js.map

/***/ }),

/***/ "../../../../../src/app/msg/msg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsgService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MsgService = (function () {
    function MsgService(_config) {
        this.messages = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.config = _config;
    }
    MsgService.prototype.addMessage = function (_message, _type, _title) {
        var typ;
        switch (_type) {
            case 1: {
                typ = "success";
                break;
            }
            case 2: {
                typ = "info";
                break;
            }
            case 3: {
                typ = "warning";
                break;
            }
            case 4: {
                typ = "danger";
                break;
            }
            default: {
                typ = "info";
                break;
            }
        }
        this.messages.next({ text: _message, type: typ, title: _title });
    };
    MsgService.prototype.clearMessage = function () {
        this.messages.next();
    };
    MsgService.prototype.getMessage = function () {
        return this.messages.asObservable();
    };
    return MsgService;
}());
MsgService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* APP_CONFIG */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_config__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_config__["IAppConfig"]) === "function" && _a || Object])
], MsgService);

var _a;
//# sourceMappingURL=msg.service.js.map

/***/ }),

/***/ "../../../../../src/app/user-settings/user-settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spnAddVacDays{\r\n    margin-left:50px;\r\n    width: 150px;\r\n}\r\n#vac_approver{\r\n    width: 200px;\r\n}\r\n\r\n#addVacDays{\r\n    display: inline;\r\n    width: 40px;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-settings/user-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"userService.getLoggedInUser()\">\n  <h3>User-settings</h3>\n  <form class=\"form-block\" #userSettingsForm=\"ngForm\" id=\"userSettingsForm\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input type=\"text\" class=\"form-control input-sm\" id=\"username\" required name=\"username\" [(ngModel)]=\"userService.getLoggedInUser().username\">\n        </div>\n        <div class=\"form-group\">    \n          <label for=\"password\">Password</label>\n          <input type=\"text\" class=\"form-control input-sm\" id=\"password\" required name=\"password\" [(ngModel)]=\"userService.getLoggedInUser().password\">\n        </div>  \n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <label for=\"firstname\">First name</label>\n          <input type=\"text\" class=\"form-control input-sm\" id=\"firstname\" required name=\"firstname\" [(ngModel)]=\"userService.getLoggedInUser().firstname\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastnamename\">Last name</label>\n          <input type=\"text\" class=\"form-control input-sm\" id=\"lastname\" required  name=\"lastname\" [(ngModel)]=\"userService.getLoggedInUser().lastname\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label for=\"vac_approver\">Vacation Approver:</label>\n          <select id=\"vac_approver\" class=\"form-control input-sm\" required name=\"vac_approver\" [(ngModel)]=\"userService.getLoggedInUser().approver_id\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let usr of all_user_arr\" [value]=\"usr.id\">{{usr.firstname}} {{usr.lastname}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"btnAddVacDays\">Available vacation days:</label> {{userService.getLoggedInUser().available_vac_days}}\n            <span class=\"spnAddVacDays\">Add              \n              <input type=\"text\" class=\"form-control input-sm\" id=\"addVacDays\" name=\"addVacDays\" #adddays maxlength=\"2\"> vacation days\n              <button class=\"btn btn-success btn-xs\" id=\"btnAddVacDays\" (click)=\"addVacDays(adddays.value)\">Add</button>\n            </span> \n        </div>\n      </div>\n    </div>\n    <button class=\"btn btn-success btn-xs\" [disabled]=\"!userSettingsForm.form.valid\" id=\"btnSave\" (click)=\"saveSettings()\">Save</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-settings/user-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datastore_user_user_service__ = __webpack_require__("../../../../../src/app/datastore/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__msg_msg_service__ = __webpack_require__("../../../../../src/app/msg/msg.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var UserSettingsComponent = (function () {
    function UserSettingsComponent(userService, msgService) {
        this.userService = userService;
        this.msgService = msgService;
        this.all_user_arr = [];
    }
    UserSettingsComponent.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var usr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usr = this.userService.getLoggedInUser();
                        return [4 /*yield*/, this.userService.update(usr)];
                    case 1:
                        _a.sent();
                        this.msgService.addMessage("User settings saved!", 1, "");
                        return [2 /*return*/];
                }
            });
        });
    };
    UserSettingsComponent.prototype.addVacDays = function (days) {
        var usr = this.userService.getLoggedInUser();
        usr.available_vac_days += (+days);
    };
    UserSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllUsers()
            .then(function (users) {
            _this.all_user_arr = users;
        });
    };
    return UserSettingsComponent;
}());
UserSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-user-settings',
        template: __webpack_require__("../../../../../src/app/user-settings/user-settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-settings/user-settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__datastore_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__datastore_user_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__msg_msg_service__["a" /* MsgService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__msg_msg_service__["a" /* MsgService */]) === "function" && _b || Object])
], UserSettingsComponent);

var _a, _b;
//# sourceMappingURL=user-settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/vacations-add/vacations-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#left {\r\n    width: 100px;\r\n    float: left;\r\n}\r\n#right {\r\n    margin-left: 100px;\r\n      /* Change this to whatever the width of your left column is*/\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vacations-add/vacations-add.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>\r\n  Add new vacation request\r\n</h4>\r\n<hr>\r\n<br>\r\n<div id=\"container\">\r\n  <div id=\"left\">\r\n    <p>Start date</p>\r\n    <br>\r\n    <p>End date</p>\r\n    <br>\r\n    <p>Duration: <span id=\"DurationDays\">10</span></p>\r\n  </div>\r\n  <div id=\"right\">\r\n    <ng2-datepicker [options]=\"options\" [(ngModel)]=\"date\"></ng2-datepicker>\r\n    <br>\r\n    <br>\r\n    <ng2-datepicker [options]=\"options\" [(ngModel)]=\"date\"></ng2-datepicker>\r\n  </div>\r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n<button type=\"button\" class=\"btn\">Add</button>"

/***/ }),

/***/ "../../../../../src/app/vacations-add/vacations-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_datepicker__ = __webpack_require__("../../../../ng2-datepicker/lib-dist/ng2-datepicker.module.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacationsAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VacationsAddComponent = (function () {
    function VacationsAddComponent() {
        this.options = new __WEBPACK_IMPORTED_MODULE_1_ng2_datepicker__["b" /* DatePickerOptions */]();
    }
    VacationsAddComponent.prototype.ngOnInit = function () {
        this.options = new __WEBPACK_IMPORTED_MODULE_1_ng2_datepicker__["b" /* DatePickerOptions */](this.options);
    };
    return VacationsAddComponent;
}());
VacationsAddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-vacations-add',
        template: __webpack_require__("../../../../../src/app/vacations-add/vacations-add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vacations-add/vacations-add.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VacationsAddComponent);

//# sourceMappingURL=vacations-add.component.js.map

/***/ }),

/***/ "../../../../../src/app/vacations/vacations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vacations/vacations.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  vacations works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/vacations/vacations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VacationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VacationsComponent = (function () {
    function VacationsComponent() {
    }
    VacationsComponent.prototype.ngOnInit = function () {
    };
    return VacationsComponent;
}());
VacationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-vacations',
        template: __webpack_require__("../../../../../src/app/vacations/vacations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vacations/vacations.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VacationsComponent);

//# sourceMappingURL=vacations.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map