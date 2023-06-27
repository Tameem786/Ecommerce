import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ecommerce';
  loadedFeature = '';
  newUser: User = null!;
  
  // newUser: User = new User(2, '', '', '', '', '','');

  constructor(private auth: AuthenticationService) {
  }

  ngOnInit(): void {
    this.auth.getNewuser().subscribe((value: User) => {
      if(value != null) {
        this.newUser = value;
        localStorage.setItem('username', this.newUser.getName());
        console.log('User Fetched: ', this.newUser.getName());
      } else {
        console.log('No User Found!');
      }
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
    console.log(this.loadedFeature);
  }

}
