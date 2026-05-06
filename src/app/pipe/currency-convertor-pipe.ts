import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor',
})
export class CurrencyConvertorPipe implements PipeTransform {
  transform(value: number, ...args: any[]): any {

    console.log(args);

    if(args.length > 0) {
      const targetCurrency = args[0];
      if(targetCurrency === 'USD') {
        return '$' + (value * 278).toFixed(2); // Example conversion rate from PKR to USD
      }
      else if(targetCurrency === 'EUR') {
        return '€' + (value * 350).toFixed(2); // Example conversion rate from PKR to EUR
      }
      else if(targetCurrency === 'GBP') {
        return '£' + (value * 400).toFixed(2); // Example conversion rate from PKR to GBP
      }
      else if(targetCurrency === 'JPY') {
        return '¥' + (value * 2.5).toFixed(2); // Example conversion rate from PKR to JPY
      }
      else if(targetCurrency === 'AUD') {
        return 'A$' + (value * 200).toFixed(2); // Example conversion rate from PKR to AUD
      }
      else if(targetCurrency === 'CAD') {
        return 'C$' + (value * 220).toFixed(2); // Example conversion rate from PKR to CAD
      }
      else if(targetCurrency === 'YEN') {
        return '¥' + (value * 2.5).toFixed(2); // Example conversion rate from PKR to YEN
      }
      else {
        return '$' + (value * 278).toFixed(2); // Example conversion rate from USD to PKR
      }
  }
}
}
