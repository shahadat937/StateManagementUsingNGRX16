import { TestBed } from '@angular/core/testing';

import { ComfirmLatitudeService } from './comfirm-latitude.service';

describe('ComfirmLatitudeService', () => {
  let service: ComfirmLatitudeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComfirmLatitudeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
