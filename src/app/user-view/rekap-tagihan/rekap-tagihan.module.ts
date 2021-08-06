import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RekapTagihanComponent } from './rekap-tagihan.component';
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

const routes: Routes = [
  {
    path: '',
    component: RekapTagihanComponent,
  },
];

@NgModule({
  declarations: [RekapTagihanComponent],
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
  ],
  providers: [DatePipe],
})
export class RekapTagihanModule {}
