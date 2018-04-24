import {Component, OnInit, Input} from '@angular/core';
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  providers: [CurrencyService]
})

export class CurrencyComponent implements OnInit {

  // @Input()
  public currencies = new Map<string, Object>();
  public newCurrencyId = '';


  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit() {
    // this.currencyService.getCurrency('USD').subscribe(currency => {
    //   this.currencies.set(currency.currencyId, currency);
    //   // console.log(this.currencies.get('USD'));
    // });

    this.currencyService.getCurrency('EUR').subscribe(currency => {
      this.currencies.set(currency.currencyId, currency);
      // console.log(this.currencies.get('EUR'));
    });

    this.currencyService.getCurrency('RUB').subscribe(currency => {
      this.currencies.set(currency.currencyId, currency);
      // console.log(this.currencies.get('RUB'));

    });
  }

  getValues(currencies) {
    return Array.from(currencies.values());
  }

  getCurrency(currencyId) {
    this.currencyService.getCurrency(currencyId).subscribe(currency => {
      this.currencies.set(currency.currencyId, currency);
      this.newCurrencyId = '';
      console.log(this.currencies.get(currencyId));
    });
  }

}

