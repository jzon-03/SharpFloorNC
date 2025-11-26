import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventiveMaintenanceShowcaseComponent } from './preventive-maintenance-showcase.component';

describe('PreventiveMaintenanceShowcaseComponent', () => {
  let component: PreventiveMaintenanceShowcaseComponent;
  let fixture: ComponentFixture<PreventiveMaintenanceShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventiveMaintenanceShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreventiveMaintenanceShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
