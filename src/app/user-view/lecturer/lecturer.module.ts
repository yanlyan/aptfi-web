import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturerListComponent } from './lecturer-list/lecturer-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  {
    path: '',
    component: LecturerListComponent,
  },
];

@NgModule({
  declarations: [LecturerListComponent],
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
  ],
})
export class LecturerModule {}
