import { Routes } from "@angular/router";
import { LoginComponent } from "../../login/login";
// import {ForgotPassword} from "./forgot-password/forgot-password"
export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];