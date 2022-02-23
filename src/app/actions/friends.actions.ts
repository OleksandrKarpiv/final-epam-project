import { createAction, props} from '@ngrx/store';
import { IFriend } from 'src/models/friendsInterface';


export const loadUsers = createAction('[Friends Page] loadUsers');

export const loadUsersSuccess = createAction('[Friends Page] loadUsersSuccess', props<{friendsListData: Array<IFriend>}>());

export const toggleUserFriend = createAction('[Friends Page] toggleUserFriend', props<{id: number}>());
