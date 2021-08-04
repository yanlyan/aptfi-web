import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReCaptchaModule } from 'angular-recaptcha3';

const routes: Routes = [
  {
    path: '',
    component: AdminLoginComponent,
    canActivate: [],
  },
];

@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    ReCaptchaModule,
  ],
})
export class AdminLoginModule {}
