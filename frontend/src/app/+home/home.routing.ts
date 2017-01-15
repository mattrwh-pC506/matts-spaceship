import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";


let routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
];

export const routerConfig = routes;
