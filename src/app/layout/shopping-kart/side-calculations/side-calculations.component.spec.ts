import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCalculationsComponent } from './side-calculations.component';

describe('SideCalculationsComponent', () => {
  let component: SideCalculationsComponent;
  let fixture: ComponentFixture<SideCalculationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideCalculationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideCalculationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
