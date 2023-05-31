import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() newUser: User = null!;

  constructor(private auth: AuthenticationService) {
    console.log('In Profile Component: ', this.newUser)
  }

  ngOnInit(): void {
    console.log('NgInIt: ', this.newUser);
  }

  isPaymentSelected(): boolean {
    return this.newUser.getPayment()==='';
  }
}
