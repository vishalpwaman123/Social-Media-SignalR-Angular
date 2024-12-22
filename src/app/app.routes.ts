import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [ 
    { path : "", component : SigninComponent },
    { path : "signup", component : SignupComponent },
    { path : "dashboard", loadChildren: ()=> import("./dashboard/dashboard.module").then(module => module.DashboardModule) }
];
