import {Component, OnInit} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { IGame } from 'src/models/libraryInterface';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  constructor(private store: Store<State>) {

   }

   library: Array<IGame>;

  share: string = "Share";
  download: string = "Download";

    data = this.store.pipe(
    select('library')
  ).subscribe(data => {
    this.library = data.library;
  });


  ngOnInit(): void {
  }

}
