import { Routes, RouterModule } from "@angular/router";
import { Component, ModuleWithProviders } from "@angular/core";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./+home/home.module#HomeModule" },
    { path: "profile", loadChildren: "./+profile/profile.module#ProfileModule" },
    { path: "**", redirectTo: "/home", pathMatch: "full" }
];

export const appRoutingProviders: any[] = [];
export const routerConfig = routes;
