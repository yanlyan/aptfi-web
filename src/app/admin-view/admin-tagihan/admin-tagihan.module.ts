import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTagihanComponent } from './admin-tagihan.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminTagihanComponent,
  },
];

@NgModule({
  declarations: [AdminTagihanComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminTagihanModule {}
