import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType,  } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { loadUsers, loadUsersSuccess } from './actions/friends.actions';
import { loadGames, loadGamesSuccess } from './actions/games.actions';
import { FriendsService } from './friends.service';
import { GamesService } from './games.service';

@Injectable()
export class AppEffects {


  friendsList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsers),

      mergeMap(() =>
      this.friendService.getFriends().pipe(
        map((data) => {
          return loadUsersSuccess({friendsListData: data})
        })
      )
    )
    )
  })

  gamesList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadGames),

      mergeMap(() =>
      this.gamesService.getGames().pipe(
        map((data) => {
          return loadGamesSuccess({gamesListData: data})
        })
      )
    )
    )
  })

  constructor(private actions$: Actions, private friendService: FriendsService, private gamesService: GamesService) {}


}
