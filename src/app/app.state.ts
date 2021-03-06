import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Role } from './models/role.model';

export class SetSessionState {
  static readonly type = '[App] Set Session';
  constructor(
    public state: {
      accessToken: string;
      refreshToken: string;
      role: Role;
    }
  ) {}
}

export interface AppStateModel {
  isOnline: boolean;
  server: boolean;
  loginRedirect: any;
  session: {
    accessToken: string;
    refreshToken: string;
    role: Role;
  };
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    isOnline: true,
    server: true,
    loginRedirect: null,
    session: {
      accessToken: '',
      refreshToken: '',
      role: null,
    },
  },
})
@Injectable({
  providedIn: 'root',
})
export class AppState {
  @Action(SetSessionState)
  SetOnlineState(ctx: StateContext<AppStateModel>, action: SetSessionState) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      session: action.state,
    });
  }
}
