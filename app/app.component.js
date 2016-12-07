"use strict";
var core_1 = require("@angular/core");
var nativescript_opentok_1 = require("nativescript-opentok");
var AppComponent = (function () {
    function AppComponent() {
        this._apiKey = '45720082';
        this._sessionId = '1_MX40NTcyMDA4Mn5-MTQ3OTQwMDk0NDcyN35XdmdkZjlnazN2UytPYk1mNW1aWVZSZmh-fg';
        this._token = 'T1==cGFydG5lcl9pZD00NTcyMDA4MiZzaWc9YjUxN2NlZmU0MjEyYjU4YTcxMzY0MWU5M2JkZTYyOTIyY2E4OTNhNTpzZXNzaW9uX2lkPTFfTVg0ME5UY3lNREE0TW41LU1UUTNPVFF3TURrME5EY3lOMzVYZG1ka1pqbG5hek4yVXl0UFlrMW1OVzFhV1ZaU1ptaC1mZyZjcmVhdGVfdGltZT0xNDc5NDAwOTU1Jm5vbmNlPTAuOTAzNTUwODk1ODE3Mzk4MyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDgxOTkyOTU0';
        this.session = nativescript_opentok_1.TNSOTSession.initWithApiKeySessionId(this._apiKey, this._sessionId);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.session.subscriber = this.subscriber.nativeElement;
        this.session.connect(this._token);
        var publisher = this.publisher.nativeElement;
        publisher.publish(this.session);
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild("publisher"),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "publisher", void 0);
__decorate([
    core_1.ViewChild("subscriber"),
    __metadata("design:type", core_1.ElementRef)
], AppComponent.prototype, "subscriber", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "app.component.html",
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map