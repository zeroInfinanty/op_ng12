import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyUnit'
})
export class CurrencyUnitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value === 0)
      return 0;
    else if (!value)
      return null;

    return value / (args ? args : 1000);
  }

}
