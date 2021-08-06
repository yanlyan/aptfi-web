import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Member } from '../user.model';
import { UserState, UserStateModel } from '../user.state';

@Injectable({
  providedIn: 'root',
})
export class UserRegisterGuard implements CanActivate {
  constructor(private store: Store, private router: Router, private snackbar: MatSnackBar) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const userState: UserStateModel = this.store.selectSnapshot(UserState);
    if (userState.member?.registerLastStatus === 0) {
      return true;
    }
    this.snackbar.open('Anda sudah melengkapi pendaftaran', '', {
      duration: 1000,
    });
    this.router.navigate(['profil']);
    return false;
  }
}
