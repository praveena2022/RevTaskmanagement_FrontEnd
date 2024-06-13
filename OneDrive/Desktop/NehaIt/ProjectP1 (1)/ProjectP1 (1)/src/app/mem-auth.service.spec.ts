import { TestBed } from '@angular/core/testing';

import { MemAuthService } from './mem-auth.service';

describe('MemAuthService', () => {
  let service: MemAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
