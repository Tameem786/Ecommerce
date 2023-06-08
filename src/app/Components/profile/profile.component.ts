import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() newUser: User = null!;
  username = '';
  email = '';
  phone = '';
  payment = '';
  address = '';
  buttonOn = false;
  id = localStorage.getItem('userId') || '';
  profileForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl('', Validators.email),
    phone: new FormControl(),
    address: new FormControl(),
    payment: new FormControl(),
  });

  constructor(private profile: ProfileService) {}

  ngOnInit(): void {
    console.log(this.id);
    this.profile.getUserProfile(this.id).subscribe((response: any) => {
      this.username = response.username;
      this.email = response.email;
      this.phone = response.phone;
      this.payment = response.payment;
      this.address = response.address;
    })
    console.log('NgInIt: ', this.username);
  }

  isPaymentSelected(): boolean {
    return this.payment==='';
  }

  getButton() {
    this.buttonOn = true;
  }
  removeButton() {
    this.buttonOn = false;
  }

  onSubmit() {
    const body = {
      "phone": this.profileForm.value.phone || this.phone || '',
      "payment": this.profileForm.value.payment || this.payment || '',
      "address": this.profileForm.value.address || this.address || ''
    }

    this.profile.updateUserProfile(this.id, body).subscribe((response: any) => {
      console.log(response)
    })
    // this.address = this.profileForm.value.address;
    // console.log(this.profileForm.value.email, this.profileForm.value.address)
  }
  
}
