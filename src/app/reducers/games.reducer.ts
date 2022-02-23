import { createReducer, on } from "@ngrx/store"
import { IGame } from "src/models/libraryInterface"
import { loadUsersSuccess, toggleUserFriend } from "../actions/friends.actions"
import { loadGamesSuccess } from "../actions/games.actions"

export interface IGamesListState {
    gamesList: Array<IGame>
}



export const initialState: IGamesListState = {
    gamesList: []
}

export const gamesReducer = createReducer(
    initialState,

    on(loadGamesSuccess, (state, action) => {
        return {
            ...state, 
           gamesList: action.gamesListData
        }
    }),
    


)

