import { TestBed } from '@angular/core/testing';

import { TagihanService } from './tagihan.service';

describe('TagihanService', () => {
  let service: TagihanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagihanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
