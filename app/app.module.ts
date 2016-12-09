import { NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";

import { registerElement } from 'nativescript-angular/element-registry';

registerElement('TNSOTPublisher', () => require('nativescript-opentok').TNSOTPublisher);
registerElement("TNSOTSubscriber", () => require("nativescript-opentok").TNSOTSubscriber);

@NgModule({
  providers: [],
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(appRoutes),
  ],
  declarations: [
      AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
