import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ReCaptchaService } from 'angular-recaptcha3';
import { SetSessionState } from '../app.state';
import { MustMatch } from '../core/must-match.validator';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;

  constructor(
    private registerService: RegisterService,
    private readonly store: Store,
    private router: Router, // private readonly store: Store
    private fb: FormBuilder,
    private recaptchaService: ReCaptchaService
  ) {
    this.loginForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        passwordConfirmation: ['', [Validators.required]],
      },
      {
        validators: MustMatch('password', 'passwordConfirmation'),
      }
    );
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  ngOnInit(): void {}

  async onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      const token = await this.recaptchaService.execute({ action: 'register' });

      this.registerService
        .register(
          this.loginForm.value.name,
          this.loginForm.value.email,
          this.loginForm.value.password,
          this.loginForm.value.passwordConfirmation,
          token
        )
        .subscribe(
          (response) => {
            this.store.dispatch(
              new SetSessionState({
                accessToken: response.access_token,
                refreshToken: response.refresh_token,
              })
            );
            this.router.navigate(['/']);
            this.loading = false;
          },
          (error) => {
            this.loading = false;
          }
        );
    }
  }

  goToRegister() {
    this.router.navigate(['daftar']);
  }
}
