import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { CurrenciesValue } from 'src/models/CurrenciesValue';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  @Input() rates: CurrenciesValue | undefined;

  USDRate: number = 0;
  EURRate: number = 0;
  GBPRate: number = 0;

  constructor() {}

  ngOnInit() {}

  ngDoCheck(): void {
    this.USDRate = +(this.rates?.UAH as number).toFixed(3);
    this.EURRate = +(
      (this.rates?.EUR as number) * (this.rates?.UAH as number)
    ).toFixed(3);
    this.GBPRate = +(
      (this.rates?.GBP as number) * (this.rates?.UAH as number)
    ).toFixed(3);
  }
}
