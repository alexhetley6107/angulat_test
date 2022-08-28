import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrenciesValue } from '../models/CurrenciesValue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private url = 'https://cdn.cur.su/api/latest.json';

  public rates: CurrenciesValue = {
    UAH: 0,
    EUR: 0,
    GBP: 0,
    USD: 1,
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe({
      next: (data: any) =>
        (this.rates = new CurrenciesValue(
          data.rates.UAH,
          data.rates.EUR,
          data.rates.GBP
        )),
    });
  }

  ngDoCheck() {
    console.log(this.rates);
  }
  ngOnChanges() {
    console.log(this.rates);
  }
}
