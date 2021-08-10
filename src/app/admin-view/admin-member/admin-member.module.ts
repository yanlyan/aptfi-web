import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminMemberComponent } from './admin-member.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AdminMemberDetailComponent } from './admin-member-detail/admin-member-detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  {
    path: '',
    component: AdminMemberComponent,
  },
  {
    path: 'detail/:uuid',
    component: AdminMemberDetailComponent,
  },
];

@NgModule({
  declarations: [AdminMemberComponent, AdminMemberDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    MatTableModule,
    MatChipsModule,
    MatInputModule,
    MatSortModule,
    FlexLayoutModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
  ],
  providers: [DatePipe],
})
export class AdminMemberModule {}
