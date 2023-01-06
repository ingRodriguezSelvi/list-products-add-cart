import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

import { HttpHeaders } from '@angular/common/http';

export type currencyVariant = 'usd' | 'eur' | 'cad';
@Injectable({
  providedIn: 'root'
})
export class CurrencyChangeService {

  constructor( private htt:HttpClient) { }

  currencyActive: currencyVariant = 'cad';

  base_url = 'https://api.currencyapi.com/v3/latest?apikey=xe3bUPcwa15RlUDSYCx1rPLlucg2jeNGTCUqkoPv&currencies=EUR%2CUSD%2CCAD';
    changeCurrency(amount: number) { //TODO: Ver la forma de llamar esto desde un pipe  para hacerlo mas escalable
    return this.htt.get(`${this.base_url}`)
      .pipe(
        map((res: any) => {
          if (this.currencyActive === 'cad') {
            console.log(res.data.CAD.value)
            return amount * res.data.CAD.value;
          }
          return amount * res.data.EUR.value;
        }
    ));
  }
  changeCurrencyActive(currency: currencyVariant) {
    this.currencyActive = currency;
  }

}
