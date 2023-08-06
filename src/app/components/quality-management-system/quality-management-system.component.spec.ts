import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityManagementSystemComponent } from './quality-management-system.component';

describe('QualityManagementSystemComponent', () => {
  let component: QualityManagementSystemComponent;
  let fixture: ComponentFixture<QualityManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualityManagementSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
