import { Component } from '@angular/core';
import {CurrencyService} from "../services/currency.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CurrencyService]
})
export class AppComponent{
  title = 'app';
  }

}
