import { createReducer, on } from "@ngrx/store"
import { IGame } from "src/models/libraryInterface"
import { AddGameToLibrary } from "../actions/library.actions"

export interface ILibraryListState {
    library: Array<IGame>
}

export const initialState: ILibraryListState = {
    library: []
}

export const libraryReducer = createReducer(
    initialState,

    on(AddGameToLibrary, (state, action) => {

        const isExist = state.library.find(game => +game.id === +action.game.id);

        if (isExist) {
            return {
                ...state
            }
        }

        return {
            ...state, 
           library: [...state.library, action.game]
        }
    }),
    
)

