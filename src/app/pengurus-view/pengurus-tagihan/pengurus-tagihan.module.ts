import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PengurusTagihanComponent } from './pengurus-tagihan.component';
import { RouterModule, Routes } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [
  {
    path: '',
    component: PengurusTagihanComponent,
  },
];

@NgModule({
  declarations: [PengurusTagihanComponent],
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
export class PengurusTagihanModule {}
