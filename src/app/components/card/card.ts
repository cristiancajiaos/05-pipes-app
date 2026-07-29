import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class Card {

  title = input.required();
}
