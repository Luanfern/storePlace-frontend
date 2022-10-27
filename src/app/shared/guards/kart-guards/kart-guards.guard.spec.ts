import { TestBed } from '@angular/core/testing';

import { KartGuardsGuard } from './kart-guards.guard';

describe('KartGuardsGuard', () => {
  let guard: KartGuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(KartGuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
