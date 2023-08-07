import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourVisionComponent } from './your-vision.component';

describe('YourVisionComponent', () => {
  let component: YourVisionComponent;
  let fixture: ComponentFixture<YourVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourVisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
