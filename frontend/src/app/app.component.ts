import { Component } from '@angular/core';
import { BaseComponent } from "mw-ng2-utils/impl";
import { BaseComponentMetadata } from "mw-ng2-utils/decorators";


@BaseComponentMetadata
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent { }
