"use strict";
var core_1 = require("@angular/core");
var nativescript_opentok_1 = require("nativescript-opentok");
var AppComponent = (function () {
    function AppComponent() {
        this._apiKey = '45644202';
        this._sessionId = '1_MX40NTY0NDIwMn5-MTQ3MjIyNzU3NTAwM35FczFWMHdVekNxeXNabWRSTUdIUkpjRmR-fg';
        this._token = 'T1==cGFydG5lcl9pZD00NTY0NDIwMiZzaWc9ODMwYzUyMTEwMjk5ODQ1OGQ3YmJlOWY1MDFhOGU2MGQwZGQyMmQyYjpzZXNzaW9uX2lkPTFfTVg0ME5UWTBOREl3TW41LU1UUTNNakl5TnpVM05UQXdNMzVGY3pGV01IZFZla054ZVhOYWJXUlNUVWRJVWtwalJtUi1mZyZjcmVhdGVfdGltZT0xNDcyODQ4NDk1Jm5vbmNlPTAuNjYyMzAzOTA2MTY2OTI2JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE0NzU0NDA0OTU=';
        this.session = nativescript_opentok_1.TNSOTSession.initWithApiKeySessionId(this._apiKey, this._sessionId);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.session.subscriber = this.subscriber.nativeElement;
        this.session.connect(this._token);
        var publisher = this.publisher.nativeElement;
        publisher.publish(this.session);
    };
    __decorate([
        core_1.ViewChild("publisher"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "publisher", void 0);
    __decorate([
        core_1.ViewChild("subscriber"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "subscriber", void 0);
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