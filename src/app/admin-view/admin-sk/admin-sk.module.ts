import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSkComponent } from './admin-sk.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
const routes: Routes = [
  {
    path: '',
    component: AdminSkComponent,
  },
];

@NgModule({
  declarations: [AdminSkComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    PdfViewerModule,
    MatProgressSpinnerModule,
  ],
})
export class AdminSkModule {}
