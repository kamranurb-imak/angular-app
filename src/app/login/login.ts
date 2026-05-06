import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  loginRequestmodel: any = {
    username: 'kamran',
    password: 'password**'
  };
  loginCounter = 1;

  login(counter: number, loginRequestmodel: any): void {
    let myname: string = 'kamran';
    console.log('Login button clicked by ' + myname);
    console.log('Login counter is ' + counter);
    console.log('Login request model is ' + JSON.stringify(loginRequestmodel), this.loginRequestmodel.username, this.loginRequestmodel.password);
    this.loginCounter++;
  }
}
