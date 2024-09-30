import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from './father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FatherSonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement
    jest.clearAllMocks()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(compiled).toMatchSnapshot()
  })

  it('buttons should not appear if no client', () => {
    const buttons = compiled.querySelectorAll('button')
    expect(buttons.length).toBe(0)
  })

  it('2 buttons should appear if client', () => {
    component.client = {id: 1, name: 'Jose'}
    fixture.detectChanges()

    const buttons = compiled.querySelectorAll('button')
    expect(buttons.length).toBe(2)
  })

  it('should emit ondeleteclient after click on button', () => {
    component.client = {id: 1, name: 'Jose'}
    fixture.detectChanges()

    jest.spyOn(component.onDeleteClient, 'emit')

    const btnDelete: HTMLButtonElement | null = compiled.querySelector('#btn-delete')
    btnDelete?.click()

    expect(component.onDeleteClient.emit).toHaveBeenCalled()
  })

  it('should emit onclientupdated after click on button', () => {
    component.client = {id: 1, name: 'Jose'}
    fixture.detectChanges()

    jest.spyOn(component.onClientUpdated, 'emit')

    const btnChange: HTMLButtonElement | null = compiled.querySelector('#btn-change')
    btnChange?.click()

    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({
      id: 5,
      name: 'Jose'
    })
  })

  it('should emit onclientupdated if there is client', () => {
    jest.spyOn(component.onClientUpdated, 'emit')
    component.onChange(10)

    expect(component.onClientUpdated.emit).not.toHaveBeenCalled()

    component.client = {id: 1, name: 'Jose'}
    fixture.detectChanges()
    component.onChange(10)

    expect(component.onClientUpdated.emit).toHaveBeenCalledWith({
      id: 10, name: 'Jose'
    })

  })
});
