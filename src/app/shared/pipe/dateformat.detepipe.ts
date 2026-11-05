import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({ providedIn: 'root' })

@Pipe({
  name: 'dateFormat'
})

/**
 * User 要求的時間格式為 : yyyy/MM/dd  EX: 2019/11/12
 * 部份時間格式不出現年 : MM/dd ex: 10/21
 */

export class DateFormat implements PipeTransform {
  constructor(private datePipe: DatePipe) { }

  transform(value: string, args?: any): any {
    if (value) {
      let yearStr = parseInt(value.substring(0, 4), 10);
      let monthStr = parseInt(value.substring(4, 6), 10);
      let dayStr = parseInt(value.substring(6, 8), 10);
      let returnValue = new Date(yearStr, monthStr - 1, dayStr);
      return this.datePipe.transform(returnValue, "yyyy/MM/dd");
    }
    return '';
  }
}
