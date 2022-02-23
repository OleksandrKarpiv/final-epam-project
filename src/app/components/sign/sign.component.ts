import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authUser } from 'src/app/actions/auth.actions';

import {NgForm} from '@angular/forms'
import { changeUserData } from 'src/app/actions/user.actions';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  email: string;
  password: string;
  error: string;
  isError: boolean = false;


  constructor(private userCheck: UserService, private router: Router, 
    
    private store: Store

    ) { }

  ngOnInit(): void {
  }

  sendData(data: NgForm) {

    const { auth, message } = this.userCheck.checkAuthUser({ email: data.value.email, password: data.value.password });
    
    if (auth) {

      this.store.dispatch(authUser());
      localStorage.setItem('auth', "true");

      const userObj = { 'username': "user", 'email': data.value.email, 'age': "age"};
      localStorage.setItem('user',JSON.stringify(userObj));

      this.store.dispatch(changeUserData({emailUser: data.value.email, age: "Enter age", username: "Enter username"}))
      this.router.navigate(['/games']);

    } else {

      localStorage.setItem('auth', "false");

      this.isError = !this.isError;
      this.error = message;
      setTimeout(() => {
        this.isError = false;
      }, 2000)
    }
  }

}
