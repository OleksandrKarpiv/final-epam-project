import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadGames } from 'src/app/actions/games.actions';
import { State } from 'src/app/reducers';
import { IGame } from 'src/models/libraryInterface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  categories=[
    { cat: "indie", checked: false},
    { cat: "action", checked: false},
    { cat: "adventure", checked: false}]

  games: Array<IGame>;
  searchGamesArray: Array<IGame> = [];
  rangeValue: number = 200;
  // search: string;
  priceDisable: boolean = true;

  constructor(private store: Store<State>) {
    this.store.dispatch(loadGames());
   }


  data = this.store.pipe(
    select('gamesList')
  ).subscribe(data => {
    this.games = data.gamesList;
    this.searchGamesArray = data.gamesList;
  });


  ngOnInit(): void {
  }

  rangeWatch(value: any) {
    this.rangeValue = +value;
  }

  filterChange() {
   const filtered = this.categories.filter(cat => {
      return cat.checked == true;
    }).map(cat => {
      return cat.cat;
    });

    this.searchGamesArray = this.games.filter(game => {
     return filtered.includes(game.type);
    });

    if (!filtered.length) {
      this.searchGamesArray = this.games;
    }

    if (!this.priceDisable) {
      this.searchGamesArray = this.searchGamesArray.filter(game => game.price == this.rangeValue);
    }
  }

  findGames(title: string) {

    
      this.filterChange();
      this.searchGamesArray = this.searchGamesArray.filter(item => item.name.toLowerCase().indexOf(title.toLowerCase()) !== -1);

  }

}
