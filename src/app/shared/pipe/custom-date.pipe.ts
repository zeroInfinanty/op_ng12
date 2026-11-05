import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) { }
  transform(value: any, args?: any): any {
    if(!value)
      return null;
    if (value.length >= 4 && args.toLowerCase() === 'YYYY/MM'.toLowerCase()) {
      return [value.slice(0, 4), '/', value.slice(4)].join('');
    }
    else
      return value;
  }

}
