import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngxs/store';
import { AppState, AppStateModel } from '../app.state';

@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivate {
  constructor(private router: Router, private readonly store: Store) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const appState: AppStateModel = this.store.selectSnapshot(AppState);
    if (appState.session.accessToken === '') {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
