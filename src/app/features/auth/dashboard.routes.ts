import { Routes } from "@angular/router";
import { LoginComponent } from "../../login/login";
import { Dashboard } from "../../dashboard/dashboard";
import { Batches } from "../../batches/batches";
import { Dishes } from "../../dishes/dishes";
import { Reports } from "../../reports/reports";
import { UserManagement } from "../../user-management/user-management";
import { Siteconfigeration } from "../../siteconfigeration/siteconfigeration";
import { PrinterSettings } from "../../general/printer-settings/printer-settings";
import { FeatureConfigeration } from "../../general/feature-configeration/feature-configeration";
import { QrCodeView } from "../../general/qr-code-view/qr-code-view";
import { BatchDetails } from "../../batch-details/batch-details";
import { PrintLabels } from "../../print-labels/print-labels";
import { VersionHistory } from "../../version-history/version-history";
import { CreateDish } from "../../create-dish/create-dish";
import { PrintCounter } from "../../print-counter/print-counter";
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
    },
    {
      path: 'site-configuration',
      component: Siteconfigeration
    },
    {
      path: 'printer-settings',
      component: PrinterSettings
    },
    {
      path: 'feature-configuration',
      component: FeatureConfigeration
    },
    {
      path: 'qr-code-view',
      component: QrCodeView
    },
    {
      path: 'batch-details',
      component: BatchDetails
    },
    {
      path: 'print-labels',
      component: PrintLabels
    },
    {path: 'version-history',
    component: VersionHistory
    },
    {path: 'create-dish',
    component: CreateDish
    },
    {path: 'print-counter',
    component: PrintCounter
    }
];