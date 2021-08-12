import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngxs/store';
import { AppState } from '../app.state';
import { Member } from '../models/member.model';
import { User } from '../models/user.model';
import { UserService } from '../user-view/user.service';
import { UserStateModel, SetUserState, UserState } from '../user-view/user.state';

@Component({
  selector: 'app-pengurus-view',
  templateUrl: './pengurus-view.component.html',
  styleUrls: ['./pengurus-view.component.scss'],
})
export class PengurusViewComponent {
  member: Member;
  user: User;
  userState: UserStateModel;
  constructor(private readonly store: Store, private jwtService: JwtHelperService, private userService: UserService) {}

  ngOnInit(): void {
    const token = this.store.selectSnapshot(AppState);
    const decodedToken = this.jwtService.decodeToken(token.session.accessToken);

    this.userService.getById(decodedToken.sub).subscribe((response) => {
      this.store.dispatch(new SetUserState(response.user));
      this.userState = this.store.selectSnapshot(UserState);
    });
  }
}
