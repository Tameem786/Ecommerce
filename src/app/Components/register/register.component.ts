import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private auth: AuthenticationService, private router: Router) {}

  RegisterForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.auth.register(
      this.RegisterForm.value.username || '', 
      this.RegisterForm.value.email || '', 
      this.RegisterForm.value.password || ''
    )
    this.router.navigate([''])
  }
  
}
