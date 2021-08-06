import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTagihanComponent } from './admin-tagihan.component';
import { RouterModule, Routes } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: AdminTagihanComponent,
  },
];

@NgModule({
  declarations: [AdminTagihanComponent],
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
  ],
})
export class AdminTagihanModule {}
