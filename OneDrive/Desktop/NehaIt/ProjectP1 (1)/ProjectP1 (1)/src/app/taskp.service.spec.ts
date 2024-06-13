import { TestBed } from '@angular/core/testing';

import { TaskpService } from './taskp.service';

describe('TaskpService', () => {
  let service: TaskpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
