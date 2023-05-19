import { Route } from '@angular/router';
import { LoginComponent } from '../login/login.component';

export default [
  {
    path: 'login',
    // Lazy loading component
    loadComponent: () =>
      import('../login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'sign-up',
    // Lazy loading component
    loadComponent: () =>
      import('../sign-up/sign-up.component').then((m) => m.SignUpComponent),
  },
] as Route[];
