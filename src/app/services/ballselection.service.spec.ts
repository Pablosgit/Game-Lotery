import { TestBed } from '@angular/core/testing';

import { BallselectionService } from './ballselection.service';

describe('BallselectionService', () => {
  let service: BallselectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BallselectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
