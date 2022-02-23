import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authReducer, IAuthState } from './auth.reducer';
import { friendsReducer, IFriendsListState } from './friends.reducer';
import { gamesReducer, IGamesListState } from './games.reducer';
import { ILibraryListState, libraryReducer } from './library.reducer';
import { IUserState, userReducer } from './user.reducer';

export interface State {
  user: IUserState
  friendsList: IFriendsListState,
  gamesList: IGamesListState,
  library: ILibraryListState,
  auth: IAuthState
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
  friendsList: friendsReducer,
  gamesList: gamesReducer,
  library: libraryReducer,
  auth: authReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
