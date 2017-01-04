import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { TNSOTSession, TNSOTPublisher, TNSOTSubscriber } from "nativescript-opentok";

@Component({
  selector: "sd-main",
  template: `
  <GridLayout rows="*,auto,auto">
    <GridLayout>
        <TNSOTSubscriber #subscriber id="subscriber" width="100%" height="100%"></TNSOTSubscriber>
        <TNSOTPublisher #publisher id="publisher" verticalAlignment="top" horizontalAlignment="right" margin="10" width="100" height="100"></TNSOTPublisher>
    </GridLayout>
  </GridLayout>`
})

export class AppComponent implements OnInit {

  private _apiKey:string = '45743242';
  private _sessionId: string = '1_MX40NTc0MzI0Mn5-MTQ4MzQwMzM1NzM5N34rUTZFS1JSY0E0Z3hXMXhlYlZYblk5amh-fg';
  private _token: string = 'T1==cGFydG5lcl9pZD00NTc0MzI0MiZzaWc9Y2VkNjE3YmM4NzA0ZWY0M2FjOGNjOWNlMGM3ZWI0MGRjZDI4OWQ1YzpzZXNzaW9uX2lkPTFfTVg0ME5UYzBNekkwTW41LU1UUTRNelF3TXpNMU56TTVOMzRyVVRaRlMxSlNZMEUwWjNoWE1YaGxZbFpZYmxrNWFtaC1mZyZjcmVhdGVfdGltZT0xNDgzNDAzMzY1Jm5vbmNlPTAuMTM1MzI5MjkzNzEwNzEzNTYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTQ4NTk5NTM2Ng==';

  private session: TNSOTSession;

  @ViewChild("publisher") publisher: ElementRef;
  @ViewChild("subscriber") subscriber: ElementRef;

  constructor() {
    this.session = TNSOTSession.initWithApiKeySessionId(this._apiKey, this._sessionId);
  }

  ngOnInit() {
    this.session.subscriber = this.subscriber.nativeElement;
    this.session.connect(this._token);
    let publisher: TNSOTPublisher = this.publisher.nativeElement;
    publisher.publish(this.session);
  }
}
