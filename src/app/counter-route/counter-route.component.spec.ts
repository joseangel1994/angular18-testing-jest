import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRouteComponent } from './counter-route.component';
import {ActivatedRoute, provideRouter} from "@angular/router";

describe('CounterRouteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;
  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get(param: string) {
          return (param === 'initial') ? '10' : undefined
        }
      }
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterRouteComponent],
      providers: [{
        provide: ActivatedRoute, useValue: mockActivatedRoute
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set initial value to 10', () => {
    expect(component.counter).toBe(10)
  })
});
