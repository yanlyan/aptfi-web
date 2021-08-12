import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';

export class SetLoadingState {
  static readonly type = '[Loading] Set Loading';
  constructor(public state: boolean) {}
}

export interface LoadingStateModel {
  loading: boolean;
}

@State<LoadingStateModel>({
  name: 'loading',
  defaults: {
    loading: false,
  },
})
@Injectable({
  providedIn: 'root',
})
export class LoadingState {
  @Action(SetLoadingState)
  SetLoadingState(ctx: StateContext<LoadingStateModel>, action: SetLoadingState) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: action.state,
    });
  }
}
