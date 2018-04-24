import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';


@Injectable()
export class CurrencyService {
  constructor(private http: HttpClient) {

  }

  getCurrency(currencyName) {

    let URL = 'http://localhost:8090/api/'+ currencyName;

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
