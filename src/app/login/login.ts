import { NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Output, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserParentComponent } from '../user-parent-component/user-parent-component';

@Component({
  selector: 'app-login',
  imports: [NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  
  @Output() getLoginInfo = new EventEmitter<{ userName: string, isLoggedIn: boolean }>();

  private router = inject(Router);
  jwtToken: string = '';
  loginSuccessful: boolean = false;
  showValidationMessage: boolean = false;
  private cdr = inject(ChangeDetectorRef);

  loginRequestmodel: any = {
    username: 'kamran',
    password: 'password**'
  };
  loginCounter = 1;

  ngOnInit(): void {
    console.log('login init...')
    this.showValidationMessage = false;  
    this.cdr.detectChanges(); // Manually trigger change detection    
  }

  getLoginInformation(userName: string, isLoggedIn: boolean ) {
    this.getLoginInfo.emit({userName, isLoggedIn});
  }

  login(counter: number, loginRequestmodel: any): void {
    let myname: string = 'kamran';
    console.log('Login button clicked by ' + myname);
    console.log('Login counter is ' + counter);
    console.log('Login request model is ' + JSON.stringify(loginRequestmodel), this.loginRequestmodel.username, this.loginRequestmodel.password);
    this.loginCounter++;
  }

  loginUser(username: string, password: string): void {
    console.log('Login button clicked with username: ' + username + ' and password: ' + password);

    // Here you can call your authentication API with the provided username and password
    // For example:
    // this.authService.login(username, password).subscribe(response => {
    //   // Handle successful login, store token, etc.
      if(username === 'kamran' && password === 'kamran') {
         this.jwtToken = "fake-jwt-token-for-" + username; // Replace with actual token from response
         localStorage.setItem('token', this.jwtToken); // Store token in local storage
         this.loginSuccessful = true;
         this.showValidationMessage = false;
         console.log('User authenticated successfully, token stored in local storage:', this.jwtToken);
         this.router.navigate(['/todo-list']); // Navigate to todo list page after successful login
         this.getLoginInformation(username, this.loginSuccessful);
      } else {
         this.loginSuccessful = false;
         this.showValidationMessage = true;
      }
    // }, error => {
    //   // Handle login error
    //   console.error('Login failed:', error);
    //   alert('Login failed. Please check your credentials and try again.');
    // });
  }

  // provide login functionality here, call api to authenticate user and get token, store token in local storage  
  authenticateUser(): void {
    // Implementation for user authentication
    this.authenticateUser();
  } 
}
