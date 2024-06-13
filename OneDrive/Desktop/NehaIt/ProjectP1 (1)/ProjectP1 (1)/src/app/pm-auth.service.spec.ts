import { TestBed } from '@angular/core/testing';

import { PmAuthService } from './pm-auth.service';

describe('PmAuthService', () => {
  let service: PmAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PmAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
