import { Routes } from "@angular/router";
import { ProfileComponent } from "./profile.component";


let routes: Routes = [
    {
        path: "",
        component: ProfileComponent,
    },
];

export const routerConfig = routes;
