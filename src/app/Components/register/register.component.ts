import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FeatureService } from 'src/app/services/feature.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private auth: AuthenticationService, private feature: FeatureService) {}

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
    this.feature.setValue('home');
  }
  
}
