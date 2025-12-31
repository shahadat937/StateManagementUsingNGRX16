import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmLatitudeLongitudeComponent } from './comfirm-latitude-longitude.component';

describe('ComfirmLatitudeLongitudeComponent', () => {
  let component: ComfirmLatitudeLongitudeComponent;
  let fixture: ComponentFixture<ComfirmLatitudeLongitudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComfirmLatitudeLongitudeComponent]
    });
    fixture = TestBed.createComponent(ComfirmLatitudeLongitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
