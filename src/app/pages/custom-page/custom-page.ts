import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case-pipe';
import { heroes } from '../../data/heroes.data';
import { CanflyPipe } from '../../pipes/canfly-pipe';
import { HeroColorPipe } from '../../pipes/hero-color-pipe';
import { ColorMap, Hero } from '../../interfaces/hero-interface';
import { HeroTextColorPipe } from '../../pipes/hero-text-color-pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/hero-creator-pipe';
import { HeroSortByPipe } from '../../pipes/hero-sort-by-pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanflyPipe, HeroColorPipe, HeroTextColorPipe, TitleCasePipe, HeroCreatorPipe, HeroSortByPipe],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class CustomPage {

  name = signal('Cristian Cajiao');

  uppercase = signal(false);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero| null>(null);

  public toggleUppercase(): void {
    if (this.uppercase()) {
      this.uppercase.set(false);
    } else {
      this.uppercase.set(true);
    }
  }
}
