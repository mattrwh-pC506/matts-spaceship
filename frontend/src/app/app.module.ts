import "reflect-metadata";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { combineReducers } from "redux";
import { AttachModuleMetadata } from "mw-ng2-utils/decorators";
import { BaseModule } from "mw-ng2-utils/impl";

import { AppComponent } from './app.component';
import { appRoutingProviders, routerConfig } from "./app.routing";

const declarations = [AppComponent];
const imports = [
    RouterModule.forRoot(routerConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
];
const providers = [appRoutingProviders];

@AttachModuleMetadata
@NgModule({
    declarations: declarations,
    imports: imports,
    providers: providers,
    bootstrap: [AppComponent]
})
export class AppModule extends BaseModule { }
