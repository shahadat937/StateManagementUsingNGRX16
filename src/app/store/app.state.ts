import { ActionReducer, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { authReducer } from '../auth/states/auth.reducer';
import { AuthState } from '../auth/states/auth.state';

import { sharedReducer } from '../shared/shared.reducer';
import { SharedState } from '../shared/shared.state';


// Root App State
export interface AppState {
  auth: AuthState;
  shared: SharedState;
  router: RouterReducerState;
}


// Root Reducers
export const appReducer = {
  auth: authReducer,
  shared: sharedReducer,
  router: routerReducer
};


// Logger Meta Reducer
export function logger(
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
  return (state, action) => {
    console.log('state before:', state);
    console.log('action:', action);

    return reducer(state, action);
  };
}


// Meta Reducers
export const metaReducers: MetaReducer<AppState>[] = [logger];
