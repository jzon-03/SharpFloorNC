import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustommesComponent } from './custommes.component';

describe('CustommesComponent', () => {
  let component: CustommesComponent;
  let fixture: ComponentFixture<CustommesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustommesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustommesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
