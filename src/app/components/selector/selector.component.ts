import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { CurrenciesValue } from 'src/models/CurrenciesValue';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit /* , DoCheck, OnChanges */ {
  public currencyItems: string[] = ['USD', 'UAH', 'EUR', 'GBP'];

  @Input() rates: CurrenciesValue = {
    UAH: 0,
    EUR: 0,
    GBP: 0,
    USD: 1,
  };

  fromCurrency: string = 'UAH';
  toCurrency: string = 'EUR';
  fromPrice: number = 0;
  toPrice: number = 0;

  constructor() {}

  ngOnInit(): void {}

  changeFromCurrency(cur: string) {
    this.fromCurrency = cur;
    this.calcToPrice();
  }
  changeToCurrency(cur: string) {
    this.toCurrency = cur;
    this.calcToPrice();
  }

  calcToPrice() {
    this.toPrice =
      (this.fromPrice /
        this.rates[this.fromCurrency as keyof CurrenciesValue]) *
      this.rates[this.toCurrency as keyof CurrenciesValue];
  }

  calcFromPrice() {
    this.fromPrice =
      (this.toPrice / this.rates[this.toCurrency as keyof CurrenciesValue]) *
      this.rates[this.fromCurrency as keyof CurrenciesValue];
  }
}
