import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero-interface';

@Pipe({
  name: 'heroFilter',
})
export class HeroFilterPipe implements PipeTransform {
  transform(heroes: Hero[], searchQuery: string): Hero[] {
    if (!searchQuery) {
      return heroes;
    }

    searchQuery = searchQuery.toLowerCase();

    return heroes.filter(
      hero => hero.name.toLowerCase().includes(searchQuery)
    )
  }
}
