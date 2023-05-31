import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private userData: User[] = [
    new User(1, 'tanvir@gmail.com', 'Tanvir Sakline', '6011XXXXXX', 'Johor, UTM, 81310', '', 'tanvir'),
    new User(2, 'tameem@gmail.com', 'Tameem Zaman', '6019XXXXXX', 'Subang Jaya, KL, 54300', '', 'tameem'),
  ];

  constructor() { }

  isUserExists(email: string, password: string): User {
    for(let i=0; i<this.userData.length; i++) {
      if(this.userData[i].email === email && this.userData[i].password === password) {
        return this.userData[i];
      }
    }
    return null!;
  }
}
