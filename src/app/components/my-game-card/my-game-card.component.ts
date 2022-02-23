import { Component, Input, OnInit } from '@angular/core';
import { IGame } from 'src/models/libraryInterface';

@Component({
  selector: 'app-my-game-card',
  templateUrl: './my-game-card.component.html',
  styleUrls: ['./my-game-card.component.css']
})
export class MyGameCardComponent implements OnInit {

  @Input() dataGameItem: IGame = {
    name: "",
    id: 0,
    description: "",
    type: "",
    price: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
