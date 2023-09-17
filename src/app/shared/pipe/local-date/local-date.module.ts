import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalDatePipe } from './local-date.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LocalDatePipe],
  exports: [LocalDatePipe],
  imports: [CommonModule, TranslateModule],
})
export class LocalDateModule {}
