import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  counter: number = 0;

  increaseBy(value: number) {
    this.counter += value;
  }
}
