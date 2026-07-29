import { Pipe, type PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero-interface';

@Pipe({
  name: 'heroColor',
})
export class HeroColorPipe implements PipeTransform {
  transform(color: Color): string {
      switch (color) {
        case Color.red: {
          return 'Rojo';
          break;
        }

        case Color.black: {
          return 'Negro';
          break;
        }

        case Color.blue: {
          return 'Azul';
          break;
        }

        case Color.green: {
          return 'Verde'
          break;
        }

        default: {
          return 'Color no definido';
        }
      }
    }
}
