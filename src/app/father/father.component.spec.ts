import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FatherComponent} from './father.component';
import {FatherSonComponent} from "../father-son/father-son.component";
import {By} from "@angular/platform-browser";

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FatherComponent, FatherSonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(compiled).toMatchSnapshot()
  })

  it('should set the client with the correct name', () => {
    component.onSetClient('Jose')
    fixture.detectChanges()

    const code = compiled.querySelector('#client-code')
    expect(code?.textContent).toContain('"name"')
    expect(code?.textContent).toContain('Jose')
  })

  it('should delete the client if onDeleteClient emitted', () => {
    component.client = {id: 1, name: 'Jose'}
    fixture.detectChanges()

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent))
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance

    sonComponent.onDeleteClient.emit()
    expect(component.client).toBe(undefined)
  })

  it('should change the client if onClientUpdated emitted', () => {
    component.client = {id: 1, name: 'Jose'}
    fixture.detectChanges()

    const sonDebugElement = fixture.debugElement.query(By.directive(FatherSonComponent))
    const sonComponent: FatherSonComponent = sonDebugElement.componentInstance

    sonComponent.onClientUpdated.emit({id: 10, name: 'Jose'})
    expect(component.client).toEqual({id: 10, name: 'Jose'})
  })
});
