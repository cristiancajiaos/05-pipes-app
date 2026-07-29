import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero-interface';

@Pipe({
  name: 'heroSortBy',
})
export class HeroSortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy: keyof Hero | null): Hero[] {
    console.log({ sortBy });
    if (!sortBy) {
      return heroes;
    }

    switch (sortBy) {
      case 'name': {
        return heroes.sort((a, b) => a.name.localeCompare(b.name));
      }

      case 'canFly': {
        return heroes.sort((a, b) => (a.canFly ? 1 : -1) - (b.canFly ? 1 : -1));
      }

      case 'color': {
        return heroes.sort((a, b) => a.color - b.color);
      }

      case 'creator': {
        return heroes.sort((a, b) => a.creator - b.creator);
      }

      default: {
        return heroes;
      }
    }
  }
}
