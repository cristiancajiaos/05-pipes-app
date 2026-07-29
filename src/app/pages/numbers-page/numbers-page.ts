import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './numbers-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class NumbersPage {

  totalSells = signal(24_233_232.5567);
  percent = signal(0.4856);
}
