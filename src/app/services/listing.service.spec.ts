import { TestBed } from '@angular/core/testing';

import { ListingService } from './listing.service';

describe('TutorialService', () => {
  let service: ListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
