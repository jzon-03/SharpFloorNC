import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsShowcaseComponent } from './tms-showcase.component';

describe('TmsShowcaseComponent', () => {
  let component: TmsShowcaseComponent;
  let fixture: ComponentFixture<TmsShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TmsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});