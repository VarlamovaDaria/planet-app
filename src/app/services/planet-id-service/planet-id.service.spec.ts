import { TestBed } from '@angular/core/testing';

import { PlanetIdService } from './planet-id.service';

describe('PlanetIdService', () => {
  let service: PlanetIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanetIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
