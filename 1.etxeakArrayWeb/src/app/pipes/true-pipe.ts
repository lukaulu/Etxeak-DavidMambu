import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'true',
})
export class TruePipe implements PipeTransform {
  transform(value: boolean | undefined): string {
    if (value == true) {
      return 'Bai'
    } else {
      return 'Ez'
    }
  }
}
