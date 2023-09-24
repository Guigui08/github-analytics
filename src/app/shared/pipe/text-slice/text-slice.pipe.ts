import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textSlice',
})
export class TextSlicePipe implements PipeTransform {
  transform(value?: string, ...args: unknown[]): string {
    if (!value) {
      return '';
    }

    if (value.length <= 30) {
      return value;
    }

    const sentences = value.split('.');
    if (sentences?.length > 0) {
      return sentences[0] + '.';
    }

    return value.slice(0, 30) + '...';
  }
}
