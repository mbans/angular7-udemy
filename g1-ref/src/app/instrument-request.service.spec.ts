import { TestBed } from '@angular/core/testing';

import { InstrumentRequestService } from './instrument-request.service';

describe('InstrumentRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstrumentRequestService = TestBed.get(InstrumentRequestService);
    expect(service).toBeTruthy();
  });
});
