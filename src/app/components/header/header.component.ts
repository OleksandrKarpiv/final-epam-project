import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { authUser } from 'src/app/actions/auth.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  auth: boolean;
  burgerStatus = false;

  constructor(private store: Store<State>, private router: Router) {
    if (localStorage.getItem('auth') === 'true') {
      this.store.dispatch(authUser());
      this.auth = true;
    } else {
      this.auth = false;
    }   
  }

  data = this.store.pipe(
    select('auth')
  ).subscribe(data => {
    this.auth = data.auth;
  });

  ngOnInit(): void {

  }

  logout() {
    this.store.dispatch(authUser());
    this.auth = false;
    localStorage.removeItem('user');
    // localStorage.setItem('auth', 'false');
    localStorage.removeItem('auth');
    this.router.navigate(['/sign']);
  }

  changeBurgerStatus() {
    this.burgerStatus = !this.burgerStatus;
  }
}
