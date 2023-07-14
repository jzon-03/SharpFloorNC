import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicnavComponent } from './basicnav.component';

describe('BasicnavComponent', () => {
  let component: BasicnavComponent;
  let fixture: ComponentFixture<BasicnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
