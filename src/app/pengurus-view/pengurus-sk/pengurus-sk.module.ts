import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PengurusSkComponent } from './pengurus-sk.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";
const routes: Routes = [
  {
    path: '',
    component: PengurusSkComponent,
  },
];

@NgModule({
  declarations: [PengurusSkComponent],
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
    MatProgressSpinnerModule,
    NgxExtendedPdfViewerModule,
  ],
})
export class PengurusSkModule {}
