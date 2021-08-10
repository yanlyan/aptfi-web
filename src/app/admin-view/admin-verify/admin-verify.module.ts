import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminVerifyComponent, DialogConfirmVerify, DialogVerify } from './admin-verify.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VerifyDocumentComponent } from './verify-document/verify-document.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  {
    path: '',
    component: AdminVerifyComponent,
  },
  {
    path: 'detail/:uuid',
    component: VerifyDocumentComponent,
  },
];

@NgModule({
  declarations: [AdminVerifyComponent, VerifyDocumentComponent, DialogVerify, DialogConfirmVerify],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
})
export class AdminVerifyModule {}
