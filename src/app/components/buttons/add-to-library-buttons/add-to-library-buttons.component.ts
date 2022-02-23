import { Component, Input, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { AddGameToLibrary } from 'src/app/actions/library.actions';
import { State } from 'src/app/reducers';
import { IGame } from 'src/models/libraryInterface';

@Component({
  selector: 'app-add-to-library-buttons',
  templateUrl: './add-to-library-buttons.component.html',
  styleUrls: ['./add-to-library-buttons.component.css']
})
export class AddToLibraryButtonsComponent implements OnInit {

  @Input() dataGameItem: IGame;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
  }

  addToLibrary() {
    this.store.dispatch(AddGameToLibrary({game : this.dataGameItem}))
  }  

}
