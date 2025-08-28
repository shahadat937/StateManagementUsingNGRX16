import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterInputComponent } from './counter-input.component';

describe('CounterInputComponent', () => {
  let component: CounterInputComponent;
  let fixture: ComponentFixture<CounterInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterInputComponent]
    });
    fixture = TestBed.createComponent(CounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
