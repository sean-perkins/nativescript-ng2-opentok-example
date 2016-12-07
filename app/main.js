"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var element_registry_1 = require("nativescript-angular/element-registry");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
element_registry_1.registerElement("TNSOTPublisher", function () { return require("nativescript-opentok").TNSOTPublisher; });
element_registry_1.registerElement("TNSOTSubscriber", function () { return require("nativescript-opentok").TNSOTSubscriber; });
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    return AppComponentModule;
}());
AppComponentModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        imports: [platform_1.NativeScriptModule],
    }),
    __metadata("design:paramtypes", [])
], AppComponentModule);
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=main.js.map