import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';

export class SetSessionState {
  static readonly type = '[App] Set Session';
  constructor(
    public state: {
      accessToken: string;
      refreshToken: string;
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
  };
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    isOnline: true,
    server: true,
    loginRedirect: null,
    session: null,
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
