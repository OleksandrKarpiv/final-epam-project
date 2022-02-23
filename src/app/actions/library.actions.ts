import { createAction, props } from '@ngrx/store';
import { IGame } from 'src/models/libraryInterface';


export const AddGameToLibrary = createAction('[Library Page] AddGameToLibrary', props<{game: IGame}>());
