import { Routes } from '@angular/router';
import { LoginComponent } from '../../login/login';
import { SignupComponent } from '../../signup/signup';
import { ForgotPasswordComponent } from '../../forgot-password/forgot-password';
export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];
