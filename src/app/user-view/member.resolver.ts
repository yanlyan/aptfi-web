import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SetLoadingState } from '../admin-view/admin-loading.state';
import { AppState } from '../app.state';
import { Member } from './user.model';
import { UserService } from './user.service';
import { UserStateModel } from './user.state';

@Injectable({
  providedIn: 'root',
})
export class MemberResolver implements Resolve<UserStateModel> {
  constructor(private userService: UserService, private store: Store, private jwtService: JwtHelperService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserStateModel> {
    const token = this.store.selectSnapshot(AppState);
    const decodedToken = this.jwtService.decodeToken(token.session.accessToken);
    return this.userService.getById(decodedToken.sub).pipe(
      map((result) => {
        return {
          user: result.user,
          member: result.member,
        };
      })
    );
  }
}
