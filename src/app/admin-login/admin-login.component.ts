import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngxs/store';
import { ReCaptchaService } from 'angular-recaptcha3';
import { SetSessionState } from '../app.state';
import { UserService } from '../user-view/user.service';
import { SetUserState } from '../user-view/user.state';
import { AdminLoginService } from './admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;

  constructor(
    private loginService: AdminLoginService,
    private readonly store: Store,
    private router: Router,
    private jwtService: JwtHelperService,
    private userService: UserService,
    private recaptchaService: ReCaptchaService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('sekretariat.aptfi@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('NXA3HVtkUh', [Validators.required]),
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
          this.store.dispatch(
            new SetUserState({
              user: response.user,
            })
          );
          this.router.navigate(['admin']);
          this.loading = false;
        },
        (error) => {
          this.loading = false;
        }
      );
    }
  }
}
