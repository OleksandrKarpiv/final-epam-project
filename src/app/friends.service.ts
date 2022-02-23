import { Injectable } from '@angular/core';
import { apiService } from 'src/service/service.user';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class FriendsService {

  constructor() { }

   getFriends()  {
     
   return of(apiService.getListFriends());

  }
}
