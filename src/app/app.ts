import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-tut');

  // counter: number = 0;
  // CounterIncrease() {
  //   this.counter++;
  // }
}
