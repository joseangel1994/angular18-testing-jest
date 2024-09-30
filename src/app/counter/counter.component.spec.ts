import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(compiled).toMatchSnapshot();
  })

  it('increaseBy should increment according to the argument', () => {
    component.increaseBy(1);
    expect(component.counter).toBe(1);
  })

  it('click on buttons should increment and decrement', () => {
    const buttons = Array.from(compiled.querySelectorAll('button'))
    const [increaseButton, decreaseButton] = buttons

    increaseButton.click()
    expect(component.counter).toBe(1)

    decreaseButton.click()
    expect(component.counter).toBe(0)
  })

  it('update counter should update template', () => {
    component.increaseBy(5)
    fixture.detectChanges()

    const h2 = compiled.querySelector('h2')
    expect(h2?.textContent).toContain('5')
  })
});
