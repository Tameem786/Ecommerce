import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // @Output() status = new EventEmitter<boolean>();
  loggedIn: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private auth: AuthenticationService, 
    private router: Router, 
    ) {}

  ngOnInit(): void {
    this.auth.isLoggedIn().subscribe((value: boolean) => {
      this.loggedIn = value; 
      console.log('Logged In Status Change! ', this.loggedIn);
    })
  }
 
  onSubmit() {
    console.log(this.auth.login(this.loginForm.value.email || '', this.loginForm.value.password || ''))
    this.router.navigate([''])
  }

  // getUsers(): void {
    
  // }
}
