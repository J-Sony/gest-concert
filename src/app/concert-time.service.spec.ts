import { TestBed } from '@angular/core/testing';

import { ConcertTimeService } from './concert-time.service';

describe('ConcertTimeService', () => {
  let service: ConcertTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcertTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
