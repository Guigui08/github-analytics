import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WnbPageHeaderComponent } from './page-header.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [WnbPageHeaderComponent],
  imports: [CommonModule, TranslateModule],
  exports: [WnbPageHeaderComponent],
})
export class WmdPageHeaderModule {}
