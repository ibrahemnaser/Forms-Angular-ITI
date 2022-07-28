import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceString',
})
export class SliceStringPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length >= 30) {
      return value.slice(0, 30);
    }
    return value;
  }
}
