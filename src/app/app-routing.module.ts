import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./user-view/user-view.module').then((m) => m.UserViewModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-pasword.module').then((m) => m.ForgotPasswordModule),
  },
  {
    path: 'reset-password/:token',
    loadChildren: () => import('./reset-password/reset-password.module').then((m) => m.ResetPasswordModule),
  },
  {
    path: 'pengurus',
    loadChildren: () => import('./pengurus-view/pengurus-view.module').then((m) => m.PengurusViewModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-view/admin-view.module').then((m) => m.AdminViewModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
