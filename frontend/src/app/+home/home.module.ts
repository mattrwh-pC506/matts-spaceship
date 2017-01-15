import "reflect-metadata";

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AttachModuleMetadata } from "mw-ng2-utils/decorators";
import { BaseMetadata } from "mw-ng2-utils/impl";

import { HomeComponent } from "./home.component";
import { routerConfig } from "./home.routing";

const declarations = [HomeComponent];
const imports = [RouterModule.forChild(routerConfig)];
const providers = [];

@AttachModuleMetadata
@NgModule({
    declarations: declarations,
    imports: imports,
    providers: providers,
})
export class HomeModule extends BaseMetadata { }
