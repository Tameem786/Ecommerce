import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.scss']
})
export class LoginBodyComponent{

  content: string = 'login';
  buttonToogle: boolean = true;

  
  onClick(value: string) {
    this.content = value;
    this.buttonToogle = !this.buttonToogle;
    console.log(this.content);
  }
}
