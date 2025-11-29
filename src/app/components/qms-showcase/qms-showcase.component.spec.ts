import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QmsShowcaseComponent } from './qms-showcase.component';

describe('QmsShowcaseComponent', () => {
  let component: QmsShowcaseComponent;
  let fixture: ComponentFixture<QmsShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QmsShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QmsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});