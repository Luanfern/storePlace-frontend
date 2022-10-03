import { TestBed } from '@angular/core/testing';

import { MyAccountService } from './my-account.service';

describe('MyCurrencyService', () => {
  let service: MyAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
