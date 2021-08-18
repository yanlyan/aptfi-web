import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { finalize, map, mergeMap, tap } from 'rxjs/operators';
import { AppState } from '../app.state';
import { SetLoadingState } from '../states/loading.state';
import { UserService } from '../user-view/user.service';
import { SetUserState, UserState, UserStateModel } from '../user-view/user.state';

@Injectable({
  providedIn: 'root',
})
export class AdminViewGuard implements CanActivate {
  constructor(
    private router: Router,
    private readonly store: Store,
    private jwtService: JwtHelperService,
    private userService: UserService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.selectOnce(AppState).pipe(
      tap(() => this.store.dispatch(new SetLoadingState(true))),
      mergeMap((appState) => {
        if (appState.session.accessToken === '') {
          this.router.navigate(['login']);
          return of(false);
        }
        switch (appState.session.role.id) {
          case 2:
            this.router.navigate(['profil']);
            return of(false);
          case 3:
            this.router.navigate(['pengurus/anggota']);
            return of(false);

          default:
            break;
        }
        const userState: UserStateModel = this.store.selectSnapshot(UserState);
        if (!userState.user) {
          const decodedToken = this.jwtService.decodeToken(appState.session.accessToken);
          return this.userService.getById(decodedToken.sub).pipe(
            map((response: any) => {
              this.store.dispatch(new SetUserState(response.user));
            })
          );
        }
        return of(userState);
      }),
      map((userState: any) => {
        if (userState === false) {
          return false;
        }
        return true;
      }),
      finalize(() => this.store.dispatch(new SetLoadingState(false)))
    );
  }
}
