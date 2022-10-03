import { TestBed } from '@angular/core/testing';

import { ShoppingKartService } from './shopping-kart.service';

describe('ShoppingKartService', () => {
  let service: ShoppingKartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingKartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
