import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Member, MemberCoba, User } from './user.model';

export class SetMemberState {
  static readonly type = '[App] Set Member State';
  constructor(public state: MemberCoba) {}
}
export class SetRegisterStatus {
  static readonly type = '[App] Set Register Status State';
  constructor(public state: number) {}
}

export interface MemberStateModel {
  member: MemberCoba;
}

@State<MemberStateModel>({
  name: 'Member',
  defaults: {
    member: null,
  },
})
@Injectable({
  providedIn: 'root',
})
export class MemberState {
  @Action(SetMemberState)
  SetMemberState(ctx: StateContext<MemberStateModel>, action: SetMemberState) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      member: action.state,
    });
  }

  @Action(SetRegisterStatus)
  SetRegisterStatus(ctx: StateContext<MemberStateModel>, action: SetRegisterStatus) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      member: { ...state.member, registerLastStatus: action.state },
    });
  }
}
