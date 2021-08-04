import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngxs/store';
import { AppState } from '../app.state';
import { Member, User } from '../user-view/user.model';
import { UserService } from '../user-view/user.service';
import { UserStateModel, SetUserState, UserState } from '../user-view/user.state';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
})
export class AdminViewComponent {
  member: Member;
  user: User;
  userState: UserStateModel;

  constructor(
    private readonly store: Store,
    private jwtService: JwtHelperService,
    private userService: UserService,
    private router: Router,
    private viewPortScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    const token = this.store.selectSnapshot(AppState);
    const decodedToken = this.jwtService.decodeToken(token.session.accessToken);

    this.userService.getById(decodedToken.sub).subscribe((response) => {
      this.store.dispatch(
        new SetUserState({
          user: response.user,
        })
      );
      this.userState = this.store.selectSnapshot(UserState);
    });
  }
}
