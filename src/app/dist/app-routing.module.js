"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var capacitacion_component_1 = require("./capacitacion/capacitacion.component");
var footer_component_1 = require("./footer/footer.component");
var info_personal_component_1 = require("./info-personal/info-personal.component");
var login_component_1 = require("./login/login.component");
var menu_central_component_1 = require("./menu-central/menu-central.component");
var presentacion_component_1 = require("./presentacion/presentacion.component");
var redes_sociales_component_1 = require("./redes-sociales/redes-sociales.component");
var trabajos_component_1 = require("./trabajos/trabajos.component");
var routes = [
    { path: 'capacitacion', component: capacitacion_component_1.CapacitacionComponent },
    { path: 'presentacion', component: presentacion_component_1.PresentacionComponent },
    { path: 'footer', component: footer_component_1.FooterComponent },
    { path: 'info-personal', component: info_personal_component_1.InfoPersonalComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'menu', component: menu_central_component_1.MenuCentralComponent },
    { path: 'redes', component: redes_sociales_component_1.RedesSocialesComponent },
    { path: 'trabajos', component: trabajos_component_1.TrabajosComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
