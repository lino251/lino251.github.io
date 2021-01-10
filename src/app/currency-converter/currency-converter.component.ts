import { Component, OnInit } from '@angular/core';
import { CurrencyServiceService } from '../currency-service.service'


@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  currency = [];
  object;
  b: any;
  amount1: any;
  amount2: any;
  selectedCurrency1: any;
  selectedCurrency2: any;
  currencyOneIndex: number;
  currencyTwoIndex: number;
  currencyValues: any;
  history = [{currency: null, convertedCurrency: null}];


  constructor(private currencyService: CurrencyServiceService) { }

  ngOnInit(): void {
    this.getCurrency();
  }

  //Get Currencies from API
  getCurrency() {
    this.currencyService.getCurrency().subscribe(
      response => {
        this.object = response;

        this.currency = Object.keys(this.object.rates);

        this.selectedCurrency2 = this.currency[0];

      },
      error => {
        console.log(error);
      })
  }

  // Convert Method
  convert(input) {

    console.log(this.selectedCurrency2)

    this.currencyValues = Object.values(this.object.rates);
    this.currencyOneIndex = Object.keys(this.object.rates).findIndex(x => x == this.selectedCurrency1)
    this.currencyTwoIndex = Object.keys(this.object.rates).findIndex(x => x == this.selectedCurrency2)

    if(this.selectedCurrency1 && this.selectedCurrency2){
    if (input == 1) {
      this.amount2 = +((this.amount1 / this.currencyValues[this.currencyOneIndex]) * this.currencyValues[this.currencyTwoIndex]).toFixed(4)
      this.history.push({currency: this.amount1 + ' (' + this.selectedCurrency1 + ')', convertedCurrency: this.amount2 + ' (' + this.selectedCurrency2 + ')'})
      this.history.reverse();

    } else {
      this.amount1 = +((this.amount2 / this.currencyValues[this.currencyOneIndex]) * this.currencyValues[this.currencyTwoIndex]).toFixed(4)
      this.history.push({currency: this.amount1 + ' (' + this.selectedCurrency2 + ')', convertedCurrency: this.amount1 + ' (' + this.selectedCurrency1 + ')'})
      this.history.reverse();
    }
console.log(this.history)
  }
  }

}
