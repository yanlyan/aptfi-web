import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoadingState } from '../states/loading.state';
import { MemberState, MemberStateModel } from './member.state';
import { User } from '../models/user.model';
import { Member } from '../models/member.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent implements OnInit {
  member: Member;
  user: User;
  memberState: MemberStateModel;
  loading$: Observable<boolean>;

  constructor(private readonly store: Store, private router: Router) {
    this.memberState = this.store.selectSnapshot(MemberState);
    if (this.memberState.member.registerLastStatus === 0 || this.memberState.member.registerLastStatus === 3) {
      this.router.navigate(['daftar']);
    }

    this.loading$ = this.store.select(LoadingState);
  }

  ngOnInit(): void {}
}
