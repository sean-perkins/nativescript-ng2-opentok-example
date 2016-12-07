import {Component, ViewChild, ElementRef, OnInit} from "@angular/core";
import {TNSOTSession, TNSOTPublisher, TNSOTSubscriber} from "nativescript-opentok";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {

    private _apiKey:string = '45720082';
    private _sessionId: string = '1_MX40NTcyMDA4Mn5-MTQ3OTQwMDk0NDcyN35XdmdkZjlnazN2UytPYk1mNW1aWVZSZmh-fg';
    private _token: string = 'T1==cGFydG5lcl9pZD00NTcyMDA4MiZzaWc9YjUxN2NlZmU0MjEyYjU4YTcxMzY0MWU5M2JkZTYyOTIyY2E4OTNhNTpzZXNzaW9uX2lkPTFfTVg0ME5UY3lNREE0TW41LU1UUTNPVFF3TURrME5EY3lOMzVYZG1ka1pqbG5hek4yVXl0UFlrMW1OVzFhV1ZaU1ptaC1mZyZjcmVhdGVfdGltZT0xNDc5NDAwOTU1Jm5vbmNlPTAuOTAzNTUwODk1ODE3Mzk4MyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDgxOTkyOTU0';

    private session: TNSOTSession;

    @ViewChild("publisher") publisher: ElementRef;
    @ViewChild("subscriber") subscriber: ElementRef;

    constructor() {
        this.session = TNSOTSession.initWithApiKeySessionId(this._apiKey, this._sessionId);
    }

    ngOnInit() {
        this.session.subscriber = this.subscriber.nativeElement;
        this.session.connect(this._token);
        let publisher:TNSOTPublisher = this.publisher.nativeElement;
        publisher.publish(this.session);
    }
}
