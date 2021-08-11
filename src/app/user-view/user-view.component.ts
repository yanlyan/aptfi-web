import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { LoadingState, SetLoadingState } from '../admin-view/admin-loading.state';
import { Member, User } from './user.model';
import { UserState, UserStateModel } from './user.state';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {
  member: Member;
  user: User;
  userState: UserStateModel;
  loading$: Observable<boolean>;

  constructor(private readonly store: Store, private router: Router) {
    this.userState = this.store.selectSnapshot(UserState);
    if (this.userState.member.registerLastStatus === 0 || this.userState.member.registerLastStatus === 3) {
      this.router.navigate(['daftar']);
    }

    this.loading$ = this.store.select(LoadingState);
  }

  ngOnInit(): void {}
}
