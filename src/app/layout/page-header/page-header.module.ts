import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WnbPageHeaderComponent } from './page-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [WnbPageHeaderComponent],
  imports: [CommonModule, TranslateModule, FontAwesomeModule],
  exports: [WnbPageHeaderComponent],
})
export class WmdPageHeaderModule {}
