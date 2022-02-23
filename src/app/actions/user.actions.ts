import { createAction, props } from '@ngrx/store';


export const setUserData = createAction('[User Page] SetUserData', props<{emailUser: string}>());

export const changeUserData = createAction('[User Page] ChangeUserData', props<{emailUser: string, username: string, age: string}>());

