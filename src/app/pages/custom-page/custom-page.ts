import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case-pipe';
import { heroes } from '../../data/heroes.data';
import { CanflyPipe } from '../../pipes/canfly-pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, CanflyPipe],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class CustomPage {

  name = signal('Cristian Cajiao');

  uppercase = signal(false);

  heroes = signal(heroes);

  public toggleUppercase(): void {
    if (this.uppercase()) {
      this.uppercase.set(false);
    } else {
      this.uppercase.set(true);
    }
  }
}
