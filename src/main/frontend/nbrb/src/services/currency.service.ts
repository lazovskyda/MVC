import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';


@Injectable()
export class CurrencyService {
  constructor(private http: HttpClient) {

  }

  getCurrency(currencyName) {

    let URL = 'http://www.nbrb.by/API/ExRates/Rates/'+ currencyName +'?ParamMode=2';

    return this.http.get(URL)
      .map(currency => {
        return {
          currencyId: currency.Cur_Abbreviation,
          date: currency.Date,
          currencyName: currency.Cur_Name,
          rate: currency.Cur_OfficialRate
        }
      })
  }
}
