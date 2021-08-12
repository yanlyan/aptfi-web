import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { finalize, map, mergeMap, tap } from 'rxjs/operators';
import { SetLoadingState } from '../admin-view/admin-loading.state';
import { AppState } from '../app.state';
import { MemberState, SetMemberState } from './member.state';
import { UserService } from './user.service';
import { SetUserState } from './user.state';

@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivate {
  constructor(
    private router: Router,
    private readonly store: Store,
    private jwtService: JwtHelperService,
    private userService: UserService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.selectOnce(AppState).pipe(
      tap(() => this.store.dispatch(new SetLoadingState(true))),
      mergeMap((appState) => {
        if (appState.session.accessToken === '') return of(false);
        const memberState = this.store.selectSnapshot(MemberState);
        if (!memberState.member) {
          const decodedToken = this.jwtService.decodeToken(appState.session.accessToken);
          return this.userService.getById(decodedToken.sub).pipe(
            map((response) => {
              this.store.dispatch(new SetUserState(response.user));
              this.store.dispatch(new SetMemberState(response.member));
              return { user: response.user, member: response.member };
            })
          );
        }
        return of(memberState);
      }),
      map((memberState: any) => {
        if (memberState === false) {
          this.router.navigate(['login']);
          return false;
        }
        return true;
      }),
      finalize(() => this.store.dispatch(new SetLoadingState(false)))
    );
  }
}
