import { Pipe, PipeTransform } from '@angular/core';
import {CurrencyChangeService} from "../../../services/currency-change.service";

@Pipe({
  name: 'currencyChange'
})
export class CurrencyChangePipe implements PipeTransform {

  constructor( private currencyService: CurrencyChangeService) {
  }

   transform(value: string| null): string {
     return ''
  }

}
