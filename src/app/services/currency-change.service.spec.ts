import { TestBed } from '@angular/core/testing';

import { CurrencyChangeService } from './currency-change.service';

describe('CurrencyChangeService', () => {
  let service: CurrencyChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
