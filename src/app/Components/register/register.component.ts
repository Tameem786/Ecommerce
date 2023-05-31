import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  RegisterForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log("Email: " + this.RegisterForm.value.email);
    console.log("Password: " + this.RegisterForm.value.password);
  }
}
