import { Component } from "@angular/core";
import { BaseComponent } from "mw-ng2-utils/impl";
import { BaseComponentMetadata } from "mw-ng2-utils/decorators";

@BaseComponentMetadata
@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html"
})
export class ProfileComponent extends BaseComponent { }
