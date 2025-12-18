import { Routes } from "@angular/router";
import { LoginComponent } from "../../login/login";
import { Dashboard } from "../../dashboard/dashboard";
import { Batches } from "../../batches/batches";
import { Dishes } from "../../dishes/dishes";
import { Reports } from "../../reports/reports";
import { UserManagement } from "../../user-management/user-management";
// import {ForgotPassword} from "./forgot-password/forgot-password"
export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'batches',
    component: Batches
  },
  {
    path: 'dishes',
    component: Dishes
  },
  {
    path: 'reprorts',
    component: Reports
  },
    {
        path: 'users',
        component: UserManagement
    }
];