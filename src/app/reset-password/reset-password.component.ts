import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ReCaptchaService } from 'angular-recaptcha3';
import { MyErrorStateMatcher } from '../core/error-state.matcher';
import { ResetPasswordService } from './reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup;
  loading: boolean = false;

  matcher = new MyErrorStateMatcher();

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password').value;
    let confirmPass = group.get('passwordConfirmation').value;
    return pass === confirmPass ? null : { notSame: true };
  };

  constructor(
    private resetPasswordService: ResetPasswordService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private recaptchaService: ReCaptchaService
  ) {}

  ngOnInit(): void {
    this.resetForm = new FormGroup(
      {
        token: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required]),
        passwordConfirmation: new FormControl(null, [Validators.required]),
      },
      {
        validators: this.checkPasswords,
      }
    );
    this.route.params.subscribe((params) => {
      if (params.token) {
        this.resetForm.controls['token'].setValue(params.token);
      }
    });
  }

  async onSubmit() {
    if (this.resetForm.valid) {
      this.loading = true;
      const token = await this.recaptchaService.execute({ action: 'reset' });
      const params = this.resetForm.value;
      params.recaptcha = token;
      console.log(params);
      this.resetPasswordService.resetPassword(params).subscribe(
        (response) => {
          this.snackbar
            .open('Password berhasil diubah', 'Tutup', {
              duration: 5000,
              panelClass: ['snackbar-success'],
            })
            .afterDismissed()
            .subscribe((e) => {
              this.router.navigate(['login']);
            });
          this.loading = false;
        },
        (err) => {
          this.loading = false;
        }
      );
    }
  }
}
