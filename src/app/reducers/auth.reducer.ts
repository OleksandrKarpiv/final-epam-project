import { createReducer, on } from "@ngrx/store"
import { IGame } from "src/models/libraryInterface"
import { authUser } from "../actions/auth.actions"
import { AddGameToLibrary } from "../actions/library.actions"

export interface IAuthState {
    auth: boolean
}

export const initialState: IAuthState = {
    auth: false
}

export const authReducer = createReducer(
    initialState,
    on(authUser, (state, action) => {

        return {
            ...state,
            auth: !state.auth
        }
    }),
    
)

