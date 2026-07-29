import { Pipe, type PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero-interface';

@Pipe({
  name: 'heroCreator',
})
export class HeroCreatorPipe implements PipeTransform {
  transform(creator: Creator): string {
    switch (creator) {
      case Creator.DC: {
        return 'DC';
        break;
      }

      case Creator.Marvel: {
        return 'Marvel';
        break;
      }

      default: {
        return 'No definido';
        break;
      }
    }
  }
}
