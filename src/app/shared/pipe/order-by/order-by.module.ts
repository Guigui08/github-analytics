import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [OrderByPipe],
  imports: [CommonModule],
  exports: [OrderByPipe],
})
export class OrderByModule {}
