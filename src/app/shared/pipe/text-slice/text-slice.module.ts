import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextSlicePipe } from './text-slice.pipe';

@NgModule({
  declarations: [TextSlicePipe],
  exports: [TextSlicePipe],
  imports: [CommonModule],
})
export class TextSliceModule {}
