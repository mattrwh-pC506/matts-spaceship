import "reflect-metadata";

import { CommonComponent } from "mw-ng2-utils/decorators";


@CommonComponent({
    selector: "app-profile",
    templateUrl: "./profile.component.html"
})
export class ProfileComponent { }
