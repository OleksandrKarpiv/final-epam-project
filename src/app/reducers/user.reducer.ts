import { createReducer, on } from "@ngrx/store"
import { changeUserData } from "../actions/user.actions"

export interface IUserState {
    user: IUserStateDetails
}

export interface IUserStateDetails {
    username: string,
    email: string,
    age: string
}

export const initialState: IUserState = {
    user: {
        username: "username",
        email: "email",
        age: "0"
}
}
export const userReducer = createReducer(
    initialState,

    on(changeUserData, (state, {emailUser, username, age}) => {
        return {
            ...state, 
            user: {
                username,
                email: emailUser,
                age: age
            }
        }
    }),


)

