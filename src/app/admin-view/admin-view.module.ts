import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminViewComponent } from './admin-view.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AdminViewGuard } from './admin-view.guard';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: AdminViewComponent,
    canActivate: [AdminViewGuard],
    children: [
      {
        path: 'verify',
        loadChildren: () => import('./admin-verify/admin-verify.module').then((m) => m.AdminVerifyModule),
      },
      {
        path: 'tagihan',
        loadChildren: () => import('./admin-tagihan/admin-tagihan.module').then((m) => m.AdminTagihanModule),
      },
      {
        path: 'sk-member',
        loadChildren: () => import('./admin-sk/admin-sk.module').then((m) => m.AdminSkModule),
      },
    ],
  },
];

@NgModule({
  declarations: [AdminViewComponent, AdminNavigationComponent],
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
  exports: [],
  providers: [],
})
export class AdminViewModule {}
