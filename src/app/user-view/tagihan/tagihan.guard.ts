import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { UserState, UserStateModel } from '../user.state';

@Injectable({ providedIn: 'root' })
export class TagihanGuard implements CanActivate {
  constructor(private store: Store, private router: Router, private snackbar: MatSnackBar) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userState: UserStateModel = this.store.selectSnapshot(UserState);
    if (userState.member?.registerLastStatus !== 0) {
      return true;
    }
    this.snackbar.open('Anda belum melengkapi form pendaftaran', '', {
      duration: 1000,
    });
    this.router.navigate(['daftar']);
    return false;
  }
}
