import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DatabaseService } from './database.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private newUser = new BehaviorSubject<User>(null!);

  constructor(private user: DatabaseService, private router: Router) { 
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn === 'true') {
      this.loggedIn.next(true);
    }
  }
  
  login(username: string, password: string): void {
    if(this.user.isUserExists(username, password) != null) {
      this.newUser.next(this.user.isUserExists(username, password))
      this.loggedIn.next(true);
      localStorage.setItem('isLoggedIn', 'true');
      // localStorage.setItem('user', JSON.stringify(this.user.isUserExists(username, password)));
      console.log('Login Successfull!!!');
    } else {
      console.log('Login Failed!!!');
      localStorage.removeItem('isLoggedIn');
      this.loggedIn.next(false);
    }
  }

  logout(): void {
    console.log('Logging Out!!!');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    this.loggedIn.next(false);
  }

  isLoggedIn(): BehaviorSubject<boolean> {
    return this.loggedIn;
  }

  getNewuser(): BehaviorSubject<User> {
    return this.newUser;
  }
}
