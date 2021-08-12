import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ReCaptchaService } from 'angular-recaptcha3';
import { SetSessionState } from '../app.state';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;

  constructor(
    private loginService: LoginService,
    private readonly store: Store,
    private router: Router,
    private recaptchaService: ReCaptchaService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  async onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      const token = await this.recaptchaService.execute({ action: 'login' });

      this.loginService.login(this.loginForm.value.email, this.loginForm.value.password, token).subscribe(
        (response) => {
          this.store.dispatch(
            new SetSessionState({
              accessToken: response.access_token,
              refreshToken: response.refresh_token,
              role: response.user.role,
            })
          );
          this.loading = false;
          switch (response.user.role.id) {
            case 1:
              this.router.navigate(['admin']);
              break;
            case 2:
              this.router.navigate(['profil']);
              break;
            case 3:
              this.router.navigate(['pengurus']);
              break;

            default:
              break;
          }
        },
        () => {
          this.loading = false;
        }
      );
    }
  }

  goToRegister() {
    this.router.navigate(['daftar']);
  }
}
