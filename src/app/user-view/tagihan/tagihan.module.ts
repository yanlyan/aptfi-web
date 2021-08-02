import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagihanComponent } from './tagihan.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TagihanGuard } from './tagihan.guard';

const routes: Routes = [
  {
    path: '',
    component: TagihanComponent,
    canActivate: [TagihanGuard],
  },
];

@NgModule({
  declarations: [TagihanComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule,
  ],
})
export class TagihanModule {}
