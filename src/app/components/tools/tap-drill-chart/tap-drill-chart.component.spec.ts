import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TapDrillChartComponent } from './tap-drill-chart.component';
import { MaterialModule } from '../../../modules/material/material.module';
import { FormsModule } from '@angular/forms';

describe('TapDrillChartComponent', () => {
  let component: TapDrillChartComponent;
  let fixture: ComponentFixture<TapDrillChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TapDrillChartComponent],
      imports: [
        NoopAnimationsModule,
        MaterialModule,
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(TapDrillChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with tap drill data', () => {
    expect(component.tapDrillData.length).toBeGreaterThan(0);
    expect(component.filteredTapData.length).toBeGreaterThan(0);
  });

  it('should filter data by category', () => {
    component.selectedCategory = 'unified';
    component.filterData();
    
    const unifiedItems = component.filteredTapData.filter(item => item.category === 'unified');
    expect(unifiedItems.length).toBe(component.filteredTapData.length);
  });

  it('should filter data by search term', () => {
    component.searchTerm = '1/4';
    component.filterData();
    
    const hasSearchTerm = component.filteredTapData.some(item => 
      item.tapSize.includes('1/4') || 
      item.drillSize.includes('1/4')
    );
    expect(hasSearchTerm).toBeTruthy();
  });

  it('should get correct category color', () => {
    expect(component.getCategoryColor('unified')).toBe('#007bff');
    expect(component.getCategoryColor('metric')).toBe('#28a745');
    expect(component.getCategoryColor('npt')).toBe('#fd7e14');
  });

  it('should export to CSV', () => {
    spyOn(window.URL, 'createObjectURL').and.returnValue('blob-url');
    spyOn(window.URL, 'revokeObjectURL');
    spyOn(document, 'createElement').and.callThrough();
    
    component.exportToCSV();
    
    expect(window.URL.createObjectURL).toHaveBeenCalled();
    expect(document.createElement).toHaveBeenCalledWith('a');
  });
});