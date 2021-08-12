import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PengurusViewComponent } from './pengurus-view.component';
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
import { PengurusViewGuard } from './pengurus-view.guard';
import { PengurusNavigationComponent } from './pengurus-navigation/pengurus-navigation.component';
import { PengurusMemberDetailComponent } from './pengurus-member/pengurus-member-detail/pengurus-member-detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: '',
    component: PengurusViewComponent,
    canActivate: [PengurusViewGuard],
    children: [
      {
        path: '',
        redirectTo: 'anggota',
      },
      {
        path: 'anggota/detail/:uuid',
        component: PengurusMemberDetailComponent,
      },
      {
        path: 'anggota',
        loadChildren: () => import('./pengurus-member/pengurus-member.module').then((m) => m.PengurusMemberModule),
      },
      {
        path: 'verify/detail/:uuid',
        component: PengurusMemberDetailComponent,
      },
      {
        path: 'verify',
        loadChildren: () => import('./pengurus-verify/pengurus-verify.module').then((m) => m.PengurusVerifyModule),
      },

      {
        path: 'tagihan',
        loadChildren: () => import('./pengurus-tagihan/pengurus-tagihan.module').then((m) => m.PengurusTagihanModule),
      },
      {
        path: 'sk-member',
        loadChildren: () => import('./pengurus-sk/pengurus-sk.module').then((m) => m.PengurusSkModule),
      },
    ],
  },
];

@NgModule({
  declarations: [PengurusViewComponent, PengurusNavigationComponent, PengurusMemberDetailComponent],
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
    MatTabsModule,
    MatTableModule,
  ],
  exports: [],
  providers: [],
})
export class PengurusViewModule {}
