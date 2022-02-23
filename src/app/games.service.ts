import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { apiGames } from 'src/service/service.games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getGames()  {
    return of(apiGames.getAllGames());
 
   }
}
