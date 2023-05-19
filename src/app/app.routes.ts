import { Route } from '@angular/router';
import { HomeComponent } from './home/features/home.component';
import { LoginComponent } from './auth/features/login/login.component';

export const APP_ROUTE: Route[] = [
  // {
  //   path: 'login',
  //   // Лениво загружаем компонент
  //   loadComponent: () =>
  //     import('../app/auth/features/login/login.component').then(
  //       (m) => m.LoginComponent
  //     ),
  // },
  {
    path: 'auth',
    loadChildren: () => import('./auth/features/auth-shell/auth.route'),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
