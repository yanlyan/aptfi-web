import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { AppState, AppStateModel } from '../app.state';

@Injectable({
  providedIn: 'root',
})
export class AdminViewGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const appState: AppStateModel = this.store.selectSnapshot(AppState);
    if (appState.session.accessToken === '') {
      this.router.navigate(['admin/login']);
      return false;
    }
    if (appState.session.role.id !== 1) {
      this.router.navigate(['']);
      return of(false);
    }
    return of(true);
  }
}
