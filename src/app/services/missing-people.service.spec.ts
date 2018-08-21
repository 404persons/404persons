import { TestBed, inject } from '@angular/core/testing';

import { MissingPeopleService } from './missing-people.service';

describe('MissingPeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MissingPeopleService]
    });
  });

  it('should be created', inject([MissingPeopleService], (service: MissingPeopleService) => {
    expect(service).toBeTruthy();
  }));
});
