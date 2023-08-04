import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInventoryManagementComponent } from './custom-inventory-management.component';

describe('CustomInventoryManagementComponent', () => {
  let component: CustomInventoryManagementComponent;
  let fixture: ComponentFixture<CustomInventoryManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomInventoryManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomInventoryManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
