import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Member, User } from './user.model';

export class SetUserState {
  static readonly type = '[App] Set User State';
  constructor(public state: any) {}
}

export interface UserStateModel {
  user: User;
  member: Member;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: null,
    member: null,
  },
})
@Injectable({
  providedIn: 'root',
})
export class UserState {
  @Action(SetUserState)
  SetUserState(ctx: StateContext<UserStateModel>, action: SetUserState) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      user: action.state.user,
      member: action.state.member,
    });
  }
}
