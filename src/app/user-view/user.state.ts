import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Member, User } from './user.model';

export class SetUserState {
  static readonly type = '[App] Set User State';
  constructor(public state: User) {}
}
export class SetRegisterStatus {
  static readonly type = '[App] Set Register Status State';
  constructor(public state: number) {}
}

export interface UserStateModel {
  user: User;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: null,
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
      user: action.state,
    });
  }
}
