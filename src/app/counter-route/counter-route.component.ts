import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-counter-route',
  standalone: true,
  imports: [],
  templateUrl: './counter-route.component.html'
})
export class CounterRouteComponent implements OnInit{
  counter: number = 0;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const initialValue = Number(this.route.snapshot.paramMap.get('initial'))
    this.counter = isNaN(initialValue) ? 100 : initialValue
  }

  increaseBy(value: number) {
    this.counter += value;
  }
}
