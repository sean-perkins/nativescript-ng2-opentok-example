"use strict";
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("TNSOTPublisher", function () { return require("nativescript-opentok").TNSOTPublisher; });
var AppComponent = (function () {
    function AppComponent() {
        this.api = '45644202';
        this.sessionId = '1_MX40NTY0NDIwMn5-MTQ3MjIyNzU3NTAwM35FczFWMHdVekNxeXNabWRSTUdIUkpjRmR-fg';
        this.token = 'T1==cGFydG5lcl9pZD00NTY0NDIwMiZzaWc9NTkwNmVhZWZjNDMzNWRlNDY5ZTZmZTkwMjg0Yjk0ODJlZmE4NjFjODpzZXNzaW9uX2lkPTFfTVg0ME5UWTBOREl3TW41LU1UUTNNakl5TnpVM05UQXdNMzVGY3pGV01IZFZla054ZVhOYWJXUlNUVWRJVWtwalJtUi1mZyZjcmVhdGVfdGltZT0xNDcyMjI3NTg4Jm5vbmNlPTAuNzY3MTczMTA0Njg2NjYyNiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDc0ODE5NTg3';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map