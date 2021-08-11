import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { finalize, map, mergeMap, tap } from 'rxjs/operators';
import { SetLoadingState } from '../admin-view/admin-loading.state';
import { AppLoadingService } from '../app-loading.service';
import { AppState } from '../app.state';
import { UserService } from './user.service';
import { SetUserState, UserState, UserStateModel } from './user.state';

@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivate {
  constructor(
    private router: Router,
    private readonly store: Store,
    private jwtService: JwtHelperService,
    private userService: UserService,
    private appLoadingService: AppLoadingService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(AppState).pipe(
      tap(() => this.appLoadingService.setLoading(true)),
      tap(() => this.store.dispatch(new SetLoadingState(true))),
      mergeMap((appState) => {
        if (appState.session.accessToken === '') return of(false);
        const userState = this.store.selectSnapshot(UserState);
        if (!userState.member) {
          const decodedToken = this.jwtService.decodeToken(appState.session.accessToken);
          return this.userService
            .getById(decodedToken.sub)
            .pipe(map((response) => ({ user: response.user, member: response.member })));
        }
        return of(userState);
      }),
      map((userState: UserStateModel) => {
        if (!userState) {
          this.router.navigate(['login']);
          return false;
        }
        if (userState.user.role.id !== 2) {
          this.router.navigate(['admin']);
          return false;
        }
        const us = this.store.selectSnapshot(UserState);
        if (!us.member) {
          this.store.dispatch(new SetUserState(userState));
        }

        return true;
      }),
      finalize(() => this.appLoadingService.setLoading(false)),
      finalize(() => this.store.dispatch(new SetLoadingState(false)))
    );
  }
}
