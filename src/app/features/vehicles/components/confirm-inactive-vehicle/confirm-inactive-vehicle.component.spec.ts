import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmInactiveVehicleComponent } from './confirm-inactive-vehicle.component';

describe('ConfirmInactiveVehicleComponent', () => {
  let component: ConfirmInactiveVehicleComponent;
  let fixture: ComponentFixture<ConfirmInactiveVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmInactiveVehicleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmInactiveVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
