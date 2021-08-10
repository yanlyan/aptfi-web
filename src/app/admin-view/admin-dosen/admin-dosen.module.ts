import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminDosenComponent } from './admin-dosen.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminDosenComponent,
  },
];

@NgModule({
  declarations: [AdminDosenComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [DatePipe],
})
export class AdminDosenModule {}
