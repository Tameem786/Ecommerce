import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { DatabaseService } from './database.service';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private newUser = new BehaviorSubject<User>(null!);

  constructor(private http: HttpClient) { 
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn === 'true') {
      this.loggedIn.next(true);
    }
  }
  
  login(email: string, password: string): boolean {
    const apiURL = 'http://localhost:3000/api/login'
    const body = {"email": email, "password": password}
    this.http.post(apiURL, body).subscribe((response: any) => {
      if(response) {
        const user = new User(response.id, response.email, response.username, response.phone, response.address, response.payment, response.password);
        this.newUser.next(user);
        this.loggedIn.next(true);
        localStorage.setItem('userId', response._id);
        localStorage.setItem('isLoggedIn', 'true');
        console.log(response._id);
        return true;
      }
      return false;
    })
    return false;
  }

  register(username: string, email: string, password: string): boolean {
    const apiURL = 'http://localhost:3000/api/signup'
    const body = {"username": username, "email": email, "password": password}
    this.http.post(apiURL, body).subscribe((response: any) => {
      if(response) {
        const user = new User(response.id, response.email, response.username, response.phone, response.address, response.payment, response.password);
        this.newUser.next(user);
        this.loggedIn.next(true);
        localStorage.setItem('userId', response._id);
        localStorage.setItem('isLoggedIn', 'true');
        console.log(response);
        return true;
      }
      return false;
    })
    return false;
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
