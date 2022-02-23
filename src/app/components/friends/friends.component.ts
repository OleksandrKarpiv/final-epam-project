import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { loadUsers } from 'src/app/actions/friends.actions';
import { State } from 'src/app/reducers';
import { IFriend } from 'src/models/friendsInterface';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: Array<IFriend>;
  search: string = '';
  searchFriendsArray: Array<IFriend> = [];

  constructor(private store: Store<State>) {
    this.store.dispatch(loadUsers());
  }

  data = this.store.pipe(
    select('friendsList')
  ).subscribe(data => {
    this.friends = data.friendsList;
    this.searchFriendsArray = data.friendsList;
  })


  ngOnInit(): void {
  }

  findFriends(title: string): any {
    this.searchFriendsArray = this.friends.filter(item => item.name.toLowerCase().indexOf(title.toLowerCase()) !== -1);
}

}
