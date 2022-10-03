import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCurrencyComponent } from './my-currency.component';

describe('MyCurrencyComponent', () => {
  let component: MyCurrencyComponent;
  let fixture: ComponentFixture<MyCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
