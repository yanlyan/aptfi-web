import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { UserService } from '../user.service';
import { UserState, UserStateModel } from '../user.state';

@Injectable({
  providedIn: 'root',
})
export class UserRegisterGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router,
    private snackbar: MatSnackBar,
    private jwtService: JwtHelperService,
    private userService: UserService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select(UserState).pipe(
      map((userState: UserStateModel) => {
        if (userState.member?.registerLastStatus === 0 || userState.member?.registerLastStatus === 3) {
          return true;
        }
        this.snackbar.open('Anda sudah melengkapi pendaftaran', '', {
          duration: 1000,
        });
        this.router.navigate(['profil']);
        return false;
      })
    );
  }
}
