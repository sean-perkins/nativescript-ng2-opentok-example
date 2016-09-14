// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { registerElement } from "nativescript-angular/element-registry";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

registerElement("TNSOTPublisher", () => require("nativescript-opentok").TNSOTPublisher);
registerElement("TNSOTSubscriber", () => require("nativescript-opentok").TNSOTSubscriber);

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);