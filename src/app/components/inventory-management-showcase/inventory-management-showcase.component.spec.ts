import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryManagementShowcaseComponent } from './inventory-management-showcase.component';

describe('InventoryManagementShowcaseComponent', () => {
  let component: InventoryManagementShowcaseComponent;
  let fixture: ComponentFixture<InventoryManagementShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryManagementShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryManagementShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
