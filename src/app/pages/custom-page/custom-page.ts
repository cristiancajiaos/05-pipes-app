import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case-pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class CustomPage {

  name = signal('Cristian Cajiao');

  uppercase = signal(false);

  public toggleUppercase(): void {
    if (this.uppercase()) {
      this.uppercase.set(false);
    } else {
      this.uppercase.set(true);
    }
  }
}
