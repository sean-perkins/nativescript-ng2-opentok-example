"use strict";
var core_1 = require("@angular/core");
var nativescript_opentok_1 = require("nativescript-opentok");
var AppComponent = (function () {
    function AppComponent() {
        this._apiKey = '45743242';
        this._sessionId = '1_MX40NTc0MzI0Mn5-MTQ4MzQwMzM1NzM5N34rUTZFS1JSY0E0Z3hXMXhlYlZYblk5amh-fg';
        this._token = 'T1==cGFydG5lcl9pZD00NTc0MzI0MiZzaWc9Y2VkNjE3YmM4NzA0ZWY0M2FjOGNjOWNlMGM3ZWI0MGRjZDI4OWQ1YzpzZXNzaW9uX2lkPTFfTVg0ME5UYzBNekkwTW41LU1UUTRNelF3TXpNMU56TTVOMzRyVVRaRlMxSlNZMEUwWjNoWE1YaGxZbFpZYmxrNWFtaC1mZyZjcmVhdGVfdGltZT0xNDgzNDAzMzY1Jm5vbmNlPTAuMTM1MzI5MjkzNzEwNzEzNTYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTQ4NTk5NTM2Ng==';
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
        selector: "sd-main",
        template: "\n  <GridLayout rows=\"*,auto,auto\">\n    <GridLayout>\n        <TNSOTSubscriber #subscriber id=\"subscriber\" width=\"100%\" height=\"100%\"></TNSOTSubscriber>\n        <TNSOTPublisher #publisher id=\"publisher\" verticalAlignment=\"top\" horizontalAlignment=\"right\" margin=\"10\" width=\"100\" height=\"100\"></TNSOTPublisher>\n    </GridLayout>\n  </GridLayout>"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
