import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFriend } from 'src/models/friendsInterface';
import { toggleUserFriend } from '../actions/friends.actions';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css']
})
export class FriendCardComponent implements OnInit {


  @Input() userData: IFriend = {
    name: "",
    id: 0,
    friend: false
  };

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  toggleFriend() {
      this.store.dispatch(toggleUserFriend({id: +this.userData.id}))
  }

  
}
