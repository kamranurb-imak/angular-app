import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks';
import { LoginComponent } from './login/login';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LoginComponent, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tut');
  isLoginSuccessful: boolean = false;

  handleLogin(loginInfo: {userName: string, isLoggedIn: boolean}) {
    this.isLoginSuccessful = loginInfo.isLoggedIn;
  }

  handleLogout() {
    this.isLoginSuccessful = false;
  }

  // counter: number = 0;
  // CounterIncrease() {
  //   this.counter++;
  // }
}
