import {Component} from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

registerElement("TNSOTPublisher", () => require("nativescript-opentok").TNSOTPublisher);

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    public api:string = '45644202';
    public sessionId: string = '1_MX40NTY0NDIwMn5-MTQ3MjIyNzU3NTAwM35FczFWMHdVekNxeXNabWRSTUdIUkpjRmR-fg';
    public token: string = 'T1==cGFydG5lcl9pZD00NTY0NDIwMiZzaWc9NTkwNmVhZWZjNDMzNWRlNDY5ZTZmZTkwMjg0Yjk0ODJlZmE4NjFjODpzZXNzaW9uX2lkPTFfTVg0ME5UWTBOREl3TW41LU1UUTNNakl5TnpVM05UQXdNMzVGY3pGV01IZFZla054ZVhOYWJXUlNUVWRJVWtwalJtUi1mZyZjcmVhdGVfdGltZT0xNDcyMjI3NTg4Jm5vbmNlPTAuNzY3MTczMTA0Njg2NjYyNiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDc0ODE5NTg3';

}
