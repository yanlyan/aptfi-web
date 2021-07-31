import { TestBed } from '@angular/core/testing';

import { RegForumService } from './reg-forum.service';

describe('RegForumService', () => {
  let service: RegForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
