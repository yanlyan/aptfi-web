import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view.component';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './user.guard';
import { UserNavigationComponent } from './user-navigation/user-navigation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserRegisterComponent } from './user-register/user-register.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserRegisterGuard } from './user-register/user-register.guard';

const routes: Routes = [
  {
    path: '',
    component: UserViewComponent,
    canActivate: [UserGuard],
    children: [
      {
        path: 'profil',
        loadChildren: () => import('./user-profile/user-profile.module').then((m) => m.UserProfileModule),
      },
      {
        path: 'dosen',
        loadChildren: () => import('./lecturer/lecturer.module').then((m) => m.LecturerModule),
      },
      {
        path: 'tagihan',
        loadChildren: () => import('./tagihan/tagihan.module').then((m) => m.TagihanModule),
      },
      {
        path: 'daftar',
        component: UserRegisterComponent,
        canActivate: [UserRegisterGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [UserViewComponent, UserNavigationComponent, UserRegisterComponent],

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialFileInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatMenuModule,
    MatExpansionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
  ],
})
export class UserViewModule {}
