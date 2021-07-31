import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngxs/store';
import { SetSessionState } from '../app.state';
import { UserService } from '../user-view/user.service';
import { SetUserState } from '../user-view/user.state';
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
    private router: Router, // private readonly store: Store
    private jwtService: JwtHelperService,
    private userService: UserService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('john@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.loginService
        .login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe(
          (response) => {
            this.store.dispatch(
              new SetSessionState({
                accessToken: response.access_token,
                refreshToken: response.refresh_token,
              })
            );
            const decodedToken = this.jwtService.decodeToken(
              response.access_token
            );

            this.userService.getById(decodedToken.sub).subscribe((response) => {
              this.store.dispatch(
                new SetUserState({
                  user: response.user,
                  member: response.member,
                })
              );
            });

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
