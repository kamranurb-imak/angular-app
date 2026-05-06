import { afterNextRender, afterRenderEffect, Component, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  imports: [],
  standalone: true,
  templateUrl: './life-cycle-hooks.html',
  styleUrl: './life-cycle-hooks.css',
})
export class LifeCycleHooksComponent {
@Input() counter: number = 0;

  constructor() {
    console.log('Constructor called');
  }

  changeCounter() {
    this.counter++;
  } 

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnChanges() {
    console.log('ngOnChanges execute every time when there is a change in @Input properties');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

   ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit called');
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked called');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit called');
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked called');
  // }

 
}
