import { createReducer, on } from "@ngrx/store"
import { IFriend } from "src/models/friendsInterface"
import { loadUsersSuccess, toggleUserFriend } from "../actions/friends.actions"
import { changeUserData } from "../actions/user.actions"

export interface IFriendsListState {
    friendsList: Array<IFriend>
}



export const initialState: IFriendsListState = {
    friendsList: []
}

export const friendsReducer = createReducer(
    initialState,

    on(loadUsersSuccess, (state, action) => {
        return {
            ...state, 
           friendsList: action.friendsListData
        }
    }),
    

    on(toggleUserFriend, (state, action) => {
        return {
            ...state, 
           friendsList: state.friendsList.map(friendItem => {
               if (friendItem.id === action.id) {
                   return {
                       ...friendItem,
                       friend: !friendItem.friend
                   }
               }

               return friendItem
           })
        }
    }),



)

