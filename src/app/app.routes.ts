import { Routes } from '@angular/router';
import { AuthLayout } from './shared/layout/auth-layout/auth-layout';
import { AppLayout } from './shared/layout/app-layout/app-layout';
// import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthLayout,
    loadChildren: () =>
      import('./features/auth/auth.routes')
        .then(m => m.AUTH_ROUTES)
  },
  {
    path: '',
    component: AppLayout,
    
    loadChildren: () =>
     import('./features/auth/dashboard.routes')
        .then(m => m.DASHBOARD_ROUTES)
  },
  {
    path: '**',
  redirectTo: 'login'
  }
];
