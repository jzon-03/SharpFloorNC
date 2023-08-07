import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvercomingObstaclesComponent } from './overcoming-obstacles.component';

describe('OvercomingObstaclesComponent', () => {
  let component: OvercomingObstaclesComponent;
  let fixture: ComponentFixture<OvercomingObstaclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OvercomingObstaclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvercomingObstaclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
