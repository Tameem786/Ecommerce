import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if(this.loginForm.invalid) {
      return;
    }
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;

    // if(email==='tanvir.sakline@gmail.com' && password==='12345') {
    //   this.router.navigate(['./'])
    //   // this.home.setLoginStatus(true)
    // } else {
    //   console.log('Incorrect Password');
    // }
    this.router.navigate(['./'])
    // console.log('Email: ', email);
    // console.log('Password: ', password);
  }

}
