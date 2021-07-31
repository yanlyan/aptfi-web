import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngxs/store';
import { AppState } from '../app.state';
import { Member, User } from './user.model';
import { UserService } from './user.service';
import { SetUserState, UserState, UserStateModel } from './user.state';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {
  member: Member;
  user: User;
  userState: UserStateModel;

  constructor(
    private readonly store: Store,
    private jwtService: JwtHelperService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = this.store.selectSnapshot(AppState);
    const decodedToken = this.jwtService.decodeToken(token.session.accessToken);

    this.userService.getById(decodedToken.sub).subscribe((response) => {
      this.store.dispatch(
        new SetUserState({
          user: response.user,
          member: response.member,
        })
      );
      this.userState = this.store.selectSnapshot(UserState);

      if (this.userState.member.registerLastStatus === 0) {
        this.router.navigate(['daftar']);
      }
    });
  }
}
