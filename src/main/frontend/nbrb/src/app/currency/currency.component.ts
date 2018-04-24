import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})

export class CurrencyComponent implements OnInit {

  public currencies = new Map<string, Object>();


  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrency('USD').subscribe( currency => {
      this.currencies.set(currency.currencyId, currency);
      console.log(this.currencies.get('USD'));
    });

    this.currencyService.getCurrency('EUR').subscribe( currency => {
      this.currencies.set(currency.currencyId, currency);
      console.log(this.currencies.get('EUR'));
    });

    this.currencyService.getCurrency('RUB').subscribe( currency => {
      this.currencies.set(currency.currencyId, currency);
      console.log(this.currencies.get('RUB'));
      console.log(this.getKeys(this.currencies));
    });
  }
  getKeys(currencies){
    return Array.from(currencies.values());
  }
}

