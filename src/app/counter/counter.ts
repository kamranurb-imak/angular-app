import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class CounterComponent {
  counterValue = 0;

  increment(): void {
    this.counterValue++;
  }

  decrement(): void {
    this.counterValue--;
  }

  reset(): void {
    this.counterValue = 0;
  }
  closeDialog(): void {
    // Logic to close the dialog
    console.log('Dialog closed');
  }

  //-----
  onNumberChange(event: any): void {
    console.log('Number change event called:', event.target.value);
  };

  onBlurEvent(event: any): void {
    console.log('Input field lost focus:', event.target.value);
  }

  focusInputField(): void {
    const inputField = document.getElementById('numberInput') as HTMLInputElement;
    console.log('Input field focused:', inputField?.value);
    if (inputField) {
      inputField.focus();
    }
  }

  onMouseEnter(event: any = 1): void {
    console.log('Mouse enter event:', event.target);
  } 

   onMouseLeave(event: any = 1): void {
    console.log('Mouse leave event:', event.target);
  } 

  logInputValue(event: any): void {
    console.log('Input value:', event);
  }

}
