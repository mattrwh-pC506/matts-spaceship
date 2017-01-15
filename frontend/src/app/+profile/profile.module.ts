import "reflect-metadata";

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AttachModuleMetadata } from "mw-ng2-utils/decorators";
import { BaseModule } from "mw-ng2-utils/impl";

import { ProfileComponent } from "./profile.component";
import { routerConfig } from "./profile.routing";

const declarations = [ProfileComponent];
const imports = [RouterModule.forChild(routerConfig)];
const providers = [];

@AttachModuleMetadata
@NgModule({
    declarations: declarations,
    imports: imports,
    providers: providers,
})
export class ProfileModule extends BaseModule { }
