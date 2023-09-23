import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'localDate',
  pure: false,
})
export class LocalDatePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(value: any, pattern = 'mediumDate'): string {
    const datePipe = new DatePipe(this.translateService.currentLang);
    if (!value) {
      console.warn('Invalid date provided to date pipe');
      return 'Invalid date';
    }
    return <string>datePipe.transform(value, pattern);
  }
}
