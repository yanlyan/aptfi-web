import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LecturerListComponent } from './lecturer-list/lecturer-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LecturerListComponent,
  },
];

@NgModule({
  declarations: [LecturerListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LecturerModule {}
