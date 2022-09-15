import { TestBed } from '@angular/core/testing';

import { MovieTvDiscoverService } from './movie-tv-discover.service';

describe('MovieTvDiscoverService', () => {
  let service: MovieTvDiscoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieTvDiscoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
