import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { PdfViewerModule } from 'ng2-pdf-viewer';
const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
  },
];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatStepperModule,
    MatDividerModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatTableModule,
    PdfViewerModule,
  ],
})
export class UserProfileModule {}
