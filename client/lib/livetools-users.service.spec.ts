import { TestBed } from '@angular/core/testing';

import { LivetoolsUsersService } from './livetools-users.service';

describe('LivetoolsUsersService', () => {
  let service: LivetoolsUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivetoolsUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
