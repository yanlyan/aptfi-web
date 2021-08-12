import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { MemberState } from '../member.state';

@Injectable({ providedIn: 'root' })
export class VerifiedGuard implements CanActivate {
  constructor(private store: Store, private router: Router, private snackbar: MatSnackBar) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const memberState = this.store.selectSnapshot(MemberState);
    switch (memberState.member?.registerLastStatus) {
      case 0:
        this.router.navigate(['daftar']);
        return false;
      case 1:
      case 2:
      case 4:
        return true;
      case 3:
        this.snackbar.open('Pengajuan pendaftaran ditolak, perbaiki pengisian form pendaftaran', '', {
          duration: 5000,
        });
        return false;
      default:
        return false;
    }
  }
}
