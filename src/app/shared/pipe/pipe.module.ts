import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { CustomDatePipe } from './custom-date.pipe';
import { CurrencyUnitPipe } from './currency-unit.pipe';
import { DateFormat } from './dateformat.detepipe';
import { DefaultValuePipe } from './default-value.pipe';

@NgModule({
  declarations: [
    CustomDatePipe,
    CurrencyUnitPipe,
    DateFormat,
    DefaultValuePipe
  ],
  imports: [CommonModule],
  exports: [
    CustomDatePipe,
    CurrencyUnitPipe,
    DateFormat,
    DefaultValuePipe
  ]
})

export class MainPipeModule { }
