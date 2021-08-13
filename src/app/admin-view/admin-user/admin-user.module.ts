import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserComponent } from './admin-user.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { AdminUserEditComponent } from './admin-user-edit/admin-user-edit.component';
import { AdminUserAddComponent } from './admin-user-add/admin-user-add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';

const routes: Routes = [
  {
    path: '',
    component: AdminUserListComponent,
  },
  {
    path: 'edit/:id',
    component: AdminUserEditComponent,
  },
  {
    path: 'add',
    component: AdminUserAddComponent,
  },
];

@NgModule({
  declarations: [AdminUserComponent, AdminUserListComponent, AdminUserEditComponent, AdminUserAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule,
    MatInputModule,
    MatSortModule,
    FlexLayoutModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
  ],
})
export class AdminUserModule {}
