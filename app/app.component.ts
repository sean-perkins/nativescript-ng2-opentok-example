import {Component, ViewChild, ElementRef, OnInit} from "@angular/core";
import {TNSOTSession, TNSOTPublisher, TNSOTSubscriber} from "nativescript-opentok";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {

    private _apiKey: string = '45644202';
    private _sessionId: string = '1_MX40NTY0NDIwMn5-MTQ3MjIyNzU3NTAwM35FczFWMHdVekNxeXNabWRSTUdIUkpjRmR-fg';
    private _token: string = 'T1==cGFydG5lcl9pZD00NTY0NDIwMiZzaWc9ODMwYzUyMTEwMjk5ODQ1OGQ3YmJlOWY1MDFhOGU2MGQwZGQyMmQyYjpzZXNzaW9uX2lkPTFfTVg0ME5UWTBOREl3TW41LU1UUTNNakl5TnpVM05UQXdNMzVGY3pGV01IZFZla054ZVhOYWJXUlNUVWRJVWtwalJtUi1mZyZjcmVhdGVfdGltZT0xNDcyODQ4NDk1Jm5vbmNlPTAuNjYyMzAzOTA2MTY2OTI2JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE0NzU0NDA0OTU=';

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
