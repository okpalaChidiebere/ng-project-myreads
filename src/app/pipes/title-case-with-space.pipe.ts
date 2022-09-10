import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCaseWithSpace',
})
export class TitleCaseWithSpacePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (value === '') {
      return '';
    }

    const result = value.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
}
