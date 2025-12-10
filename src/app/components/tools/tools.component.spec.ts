import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToolsComponent } from './tools.component';
import { MaterialModule } from '../../modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { TapDrillChartComponent } from './tap-drill-chart/tap-drill-chart.component';

describe('ToolsComponent', () => {
  let component: ToolsComponent;
  let fixture: ComponentFixture<ToolsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsComponent, TapDrillChartComponent],
      imports: [
        NoopAnimationsModule,
        MaterialModule,
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(ToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});