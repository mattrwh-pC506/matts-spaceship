import { Component } from "@angular/core";
import { BaseComponent } from "mw-ng2-utils/impl";
import { BaseComponentMetadata } from "mw-ng2-utils/decorators";

@BaseComponentMetadata
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html"
})
export class HomeComponent extends BaseComponent { }
