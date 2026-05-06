import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConvertorPipe } from '../pipe/currency-convertor-pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, CurrencyConvertorPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class PipesComponent {
  title = 'Angular Pipes Example';
  date = new Date();
  amount: number = 20;

}
