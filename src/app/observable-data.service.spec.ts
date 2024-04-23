import { TestBed } from '@angular/core/testing';

import { ObservableDataService } from './observable-data.service';

describe('ObservableDataService', () => {
  let service: ObservableDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservableDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
