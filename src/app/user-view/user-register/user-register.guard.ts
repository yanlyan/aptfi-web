import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MemberState, MemberStateModel } from '../member.state';

@Injectable({
  providedIn: 'root',
})
export class UserRegisterGuard implements CanActivate {
  constructor(private store: Store, private router: Router, private snackbar: MatSnackBar) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.selectOnce(MemberState).pipe(
      map((memberState: MemberStateModel) => {
        switch (memberState.member?.registerLastStatus) {
          case 0:
          case 3:
            return true;
          case 1:
            this.snackbar.open('Segera lunasi tagihan anda', '', {
              duration: 1000,
            });
            this.router.navigate(['tagihan']);
            return false;
          case 2:
            this.snackbar.open('Anda sudah melengkapi pendaftaran', '', {
              duration: 1000,
            });
            this.router.navigate(['profil']);
            return false;
          case 4:
            this.snackbar.open('Anda telah aktif menjadi anggota', '', {
              duration: 1000,
            });
            this.router.navigate(['profil']);
            return false;
          default:
            return true;
        }
      })
    );
  }
}
