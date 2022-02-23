import { createAction, props} from '@ngrx/store';
import { IGame } from 'src/models/libraryInterface';


export const loadGames = createAction('[Games Page] loadGames');

export const loadGamesSuccess = createAction('[Games Page] loadGamesSuccess', props<{gamesListData: Array<IGame>}>());

