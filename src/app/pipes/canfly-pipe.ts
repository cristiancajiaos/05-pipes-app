import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'canflyPipe',
})
export class CanflyPipe implements PipeTransform {
  transform(canFly: boolean): string {
    return canFly ? 'Puede volar' : 'No puede volar';
  }
}
