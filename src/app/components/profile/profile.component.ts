import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeUserData } from 'src/app/actions/user.actions';
import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  email: string;
  age: string = "0";

  
  constructor(private store: Store<any>) {

      const retrievedUserFromStrg = localStorage.getItem('user');

      if (retrievedUserFromStrg) {
        const obj = JSON.parse(retrievedUserFromStrg);
        this.username = obj.username;
        this.age = obj.age;

        if (this.email) {

          const userObj = { 'username': obj.username, 'email': this.email, 'age': obj.age};
          localStorage.setItem('user',JSON.stringify(userObj));

        } else {

          if (localStorage.getItem('user')) {
            const getEmailFromstr = localStorage.getItem('user') || this.email;
         
            const emailSetUp =  JSON.parse(getEmailFromstr) 
            this.email = emailSetUp.email;
          }
          
        }
        
      } else {
        this.store.select('user').subscribe(
          (data) => {
            this.username = data.user.username;
            this.email = data.user.email;
            this.age = data.user.age;
          }
        );
      }
      

   }

  ngOnInit(): void {
  }


  sendData(data: NgForm) {
    const userObj = { 'username': data.value.username, 'email': this.email, 'age': data.value.age};
    localStorage.setItem('user',JSON.stringify(userObj));

    this.store.dispatch(changeUserData({username: data.value.username, emailUser: this.email, age: data.value.age}))
  }

}
