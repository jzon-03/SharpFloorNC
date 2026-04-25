import { Component, OnInit } from '@angular/core';

export interface TapDrillData {
  tapSize: string;
  threadsPerInch: number;
  drillSize: string;
  drillDecimal: number;
  percentThread: number;
  category: 'unified' | 'metric' | 'npt' | 'bspt' | 'sti';
  description: string;
  buyLink?: string;
}

@Component({
  selector: 'app-tap-drill-chart',
  standalone: false,
  templateUrl: './tap-drill-chart.component.html',
  styleUrls: ['./tap-drill-chart.component.css']
})
export class TapDrillChartComponent implements OnInit {

  searchTerm: string = '';
  selectedCategory: string = 'all';
  filteredTapData: TapDrillData[] = [];
  displayedColumns: string[] = ['category', 'tapSize', 'drillInfo', 'description', 'buyLink'];

  tapDrillData: TapDrillData[] = [
    // Unified Thread Standard (UNC/UNF)
    { tapSize: '#4-40', threadsPerInch: 40, drillSize: '#43', drillDecimal: 0.089, percentThread: 75, category: 'unified', description: 'Machine Screw', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~43/' },
    { tapSize: '#4-48', threadsPerInch: 48, drillSize: '#42', drillDecimal: 0.093, percentThread: 75, category: 'unified', description: 'Machine Screw (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~42/' },
    { tapSize: '#6-32', threadsPerInch: 32, drillSize: '#36', drillDecimal: 0.106, percentThread: 75, category: 'unified', description: 'Machine Screw', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~36/' },
    { tapSize: '#6-40', threadsPerInch: 40, drillSize: '#33', drillDecimal: 0.113, percentThread: 75, category: 'unified', description: 'Machine Screw (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~33/' },
    { tapSize: '#8-32', threadsPerInch: 32, drillSize: '#29', drillDecimal: 0.136, percentThread: 75, category: 'unified', description: 'Machine Screw', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~29/' },
    { tapSize: '#8-36', threadsPerInch: 36, drillSize: '#29', drillDecimal: 0.136, percentThread: 75, category: 'unified', description: 'Machine Screw (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~29/' },
    { tapSize: '#10-24', threadsPerInch: 24, drillSize: '#25', drillDecimal: 0.149, percentThread: 75, category: 'unified', description: 'Machine Screw', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~25/' },
    { tapSize: '#10-32', threadsPerInch: 32, drillSize: '#21', drillDecimal: 0.159, percentThread: 75, category: 'unified', description: 'Machine Screw (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~21/' },
    { tapSize: '#12-24', threadsPerInch: 24, drillSize: '#16', drillDecimal: 0.177, percentThread: 75, category: 'unified', description: 'Machine Screw', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~16/' },
    { tapSize: '#12-28', threadsPerInch: 28, drillSize: '#14', drillDecimal: 0.182, percentThread: 75, category: 'unified', description: 'Machine Screw (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~14/' },
    { tapSize: '1/4"-20', threadsPerInch: 20, drillSize: '#7', drillDecimal: 0.201, percentThread: 75, category: 'unified', description: 'Cap Screw (Coarse)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~7/' },
    { tapSize: '1/4"-28', threadsPerInch: 28, drillSize: '#3', drillDecimal: 0.213, percentThread: 75, category: 'unified', description: 'Cap Screw (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~3/' },
    { tapSize: '5/16"-18', threadsPerInch: 18, drillSize: 'F', drillDecimal: 0.257, percentThread: 75, category: 'unified', description: 'Cap Screw (Coarse)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~f/' },
    { tapSize: '5/16"-24', threadsPerInch: 24, drillSize: 'I', drillDecimal: 0.272, percentThread: 75, category: 'unified', description: 'Cap Screw (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~i/' },
    { tapSize: '3/8"-16', threadsPerInch: 16, drillSize: '5/16"', drillDecimal: 0.312, percentThread: 75, category: 'unified', description: 'Cap Screw (Coarse)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~5-16/' },
    { tapSize: '3/8"-24', threadsPerInch: 24, drillSize: 'Q', drillDecimal: 0.332, percentThread: 75, category: 'unified', description: 'Cap Screw (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~q/' },
    { tapSize: '7/16"-14', threadsPerInch: 14, drillSize: 'U', drillDecimal: 0.368, percentThread: 75, category: 'unified', description: 'Cap Screw (Coarse)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~u/' },
    { tapSize: '7/16"-20', threadsPerInch: 20, drillSize: '25/64"', drillDecimal: 0.391, percentThread: 75, category: 'unified', description: 'Cap Screw (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~25-64/' },
    { tapSize: '1/2"-13', threadsPerInch: 13, drillSize: '27/64"', drillDecimal: 0.422, percentThread: 75, category: 'unified', description: 'Cap Screw (Coarse)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~27-64/' },
    { tapSize: '1/2"-20', threadsPerInch: 20, drillSize: '29/64"', drillDecimal: 0.453, percentThread: 75, category: 'unified', description: 'Cap Screw (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~29-64/' },
    { tapSize: '9/16"-12', threadsPerInch: 12, drillSize: '31/64"', drillDecimal: 0.484, percentThread: 75, category: 'unified', description: 'Cap Screw (Coarse)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~31-64/' },
    { tapSize: '9/16"-18', threadsPerInch: 18, drillSize: '33/64"', drillDecimal: 0.516, percentThread: 75, category: 'unified', description: 'Cap Screw (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~33-64/' },
    { tapSize: '5/8"-11', threadsPerInch: 11, drillSize: '17/32"', drillDecimal: 0.531, percentThread: 75, category: 'unified', description: 'Cap Screw (Coarse)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~17-32/' },
    { tapSize: '5/8"-18', threadsPerInch: 18, drillSize: '37/64"', drillDecimal: 0.578, percentThread: 75, category: 'unified', description: 'Cap Screw (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~37-64/' },
    { tapSize: '3/4"-10', threadsPerInch: 10, drillSize: '21/32"', drillDecimal: 0.656, percentThread: 75, category: 'unified', description: 'Cap Screw (Coarse)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~21-32/' },
    { tapSize: '3/4"-16', threadsPerInch: 16, drillSize: '11/16"', drillDecimal: 0.688, percentThread: 75, category: 'unified', description: 'Cap Screw (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~11-16/' },

    // Metric Thread Standard
    { tapSize: 'M3x0.5', threadsPerInch: 50.8, drillSize: '2.5mm', drillDecimal: 0.098, percentThread: 75, category: 'metric', description: 'Fine Pitch', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~2-5-mm/' },
    { tapSize: 'M4x0.7', threadsPerInch: 36.3, drillSize: '3.3mm', drillDecimal: 0.130, percentThread: 75, category: 'metric', description: 'Standard Pitch', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~3-3-mm/' },
    { tapSize: 'M5x0.8', threadsPerInch: 31.8, drillSize: '4.2mm', drillDecimal: 0.165, percentThread: 75, category: 'metric', description: 'Standard Pitch', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~4-2-mm/' },
    { tapSize: 'M6x1.0', threadsPerInch: 25.4, drillSize: '5.0mm', drillDecimal: 0.197, percentThread: 75, category: 'metric', description: 'Standard Pitch', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~5-mm/' },
    { tapSize: 'M8x1.25', threadsPerInch: 20.3, drillSize: '6.8mm', drillDecimal: 0.268, percentThread: 75, category: 'metric', description: 'Standard Pitch', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~6-8-mm/' },
    { tapSize: 'M10x1.5', threadsPerInch: 16.9, drillSize: '8.5mm', drillDecimal: 0.335, percentThread: 75, category: 'metric', description: 'Standard Pitch', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~8-5-mm/' },
    { tapSize: 'M12x1.75', threadsPerInch: 14.5, drillSize: '10.25mm', drillDecimal: 0.404, percentThread: 75, category: 'metric', description: 'Standard Pitch', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~10-25-mm/' },
    { tapSize: 'M14x2.0', threadsPerInch: 12.7, drillSize: '12.0mm', drillDecimal: 0.472, percentThread: 75, category: 'metric', description: 'Standard Pitch', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~12-mm/' },
    { tapSize: 'M16x2.0', threadsPerInch: 12.7, drillSize: '14.0mm', drillDecimal: 0.551, percentThread: 75, category: 'metric', description: 'Standard Pitch', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~14-mm/' },
    { tapSize: 'M20x2.5', threadsPerInch: 10.2, drillSize: '17.5mm', drillDecimal: 0.689, percentThread: 75, category: 'metric', description: 'Standard Pitch', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~17-5-mm/' },

    // STI (Screw Thread Insert) - Helical thread inserts
    { tapSize: 'STI #4-40', threadsPerInch: 40, drillSize: '#21', drillDecimal: 0.159, percentThread: 100, category: 'sti', description: 'Helicoil Insert', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~21/' },
    { tapSize: 'STI #6-32', threadsPerInch: 32, drillSize: '#14', drillDecimal: 0.182, percentThread: 100, category: 'sti', description: 'Helicoil Insert', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~14/' },
    { tapSize: 'STI #8-32', threadsPerInch: 32, drillSize: '#7', drillDecimal: 0.201, percentThread: 100, category: 'sti', description: 'Helicoil Insert', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~7/' },
    { tapSize: 'STI #10-24', threadsPerInch: 24, drillSize: '#3', drillDecimal: 0.213, percentThread: 100, category: 'sti', description: 'Helicoil Insert', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~3/' },
    { tapSize: 'STI #10-32', threadsPerInch: 32, drillSize: 'F', drillDecimal: 0.257, percentThread: 100, category: 'sti', description: 'Helicoil Insert', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~f/' },
    { tapSize: 'STI 1/4"-20', threadsPerInch: 20, drillSize: 'I', drillDecimal: 0.272, percentThread: 100, category: 'sti', description: 'Helicoil Insert', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~i/' },
    { tapSize: 'STI 1/4"-28', threadsPerInch: 28, drillSize: '17/64"', drillDecimal: 0.266, percentThread: 100, category: 'sti', description: 'Helicoil Insert (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~17-64/' },
    { tapSize: 'STI 5/16"-18', threadsPerInch: 18, drillSize: 'Q', drillDecimal: 0.332, percentThread: 100, category: 'sti', description: 'Helicoil Insert', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~q/' },
    { tapSize: 'STI 5/16"-24', threadsPerInch: 24, drillSize: '21/64"', drillDecimal: 0.328, percentThread: 100, category: 'sti', description: 'Helicoil Insert (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~21-64/' },
    { tapSize: 'STI 3/8"-16', threadsPerInch: 16, drillSize: 'U', drillDecimal: 0.368, percentThread: 100, category: 'sti', description: 'Helicoil Insert', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~u/' },
    { tapSize: 'STI 3/8"-24', threadsPerInch: 24, drillSize: '25/64"', drillDecimal: 0.391, percentThread: 100, category: 'sti', description: 'Helicoil Insert (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~25-64/' },
    { tapSize: 'STI 7/16"-14', threadsPerInch: 14, drillSize: '27/64"', drillDecimal: 0.422, percentThread: 100, category: 'sti', description: 'Helicoil Insert', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~27-64/' },
    { tapSize: 'STI 7/16"-20', threadsPerInch: 20, drillSize: '29/64"', drillDecimal: 0.453, percentThread: 100, category: 'sti', description: 'Helicoil Insert (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~29-64/' },
    { tapSize: 'STI 1/2"-13', threadsPerInch: 13, drillSize: '31/64"', drillDecimal: 0.484, percentThread: 100, category: 'sti', description: 'Helicoil Insert', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~31-64/' },
    { tapSize: 'STI 1/2"-20', threadsPerInch: 20, drillSize: '33/64"', drillDecimal: 0.516, percentThread: 100, category: 'sti', description: 'Helicoil Insert (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~33-64/' },
    { tapSize: 'STI 5/8"-11', threadsPerInch: 11, drillSize: '39/64"', drillDecimal: 0.609, percentThread: 100, category: 'sti', description: 'Helicoil Insert', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~39-64/' },
    { tapSize: 'STI 5/8"-18', threadsPerInch: 18, drillSize: '41/64"', drillDecimal: 0.641, percentThread: 100, category: 'sti', description: 'Helicoil Insert (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~41-64/' },
    { tapSize: 'STI 3/4"-10', threadsPerInch: 10, drillSize: '47/64"', drillDecimal: 0.734, percentThread: 100, category: 'sti', description: 'Helicoil Insert', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~47-64/' },
    { tapSize: 'STI 3/4"-16', threadsPerInch: 16, drillSize: '49/64"', drillDecimal: 0.766, percentThread: 100, category: 'sti', description: 'Helicoil Insert (Fine)', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~49-64/' },

    // NPT (National Pipe Thread) - Tapered
    { tapSize: '1/8"-27', threadsPerInch: 27, drillSize: 'R', drillDecimal: 0.339, percentThread: 75, category: 'npt', description: 'Pipe Thread', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~r/' },
    { tapSize: '1/4"-18', threadsPerInch: 18, drillSize: '7/16"', drillDecimal: 0.438, percentThread: 75, category: 'npt', description: 'Pipe Thread', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~7-16/' },
    { tapSize: '3/8"-18', threadsPerInch: 18, drillSize: '37/64"', drillDecimal: 0.578, percentThread: 75, category: 'npt', description: 'Pipe Thread', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~37-64/' },
    { tapSize: '1/2"-14', threadsPerInch: 14, drillSize: '23/32"', drillDecimal: 0.719, percentThread: 75, category: 'npt', description: 'Pipe Thread', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~23-32/' },
    { tapSize: '3/4"-14', threadsPerInch: 14, drillSize: '59/64"', drillDecimal: 0.922, percentThread: 75, category: 'npt', description: 'Pipe Thread', buyLink: 'https://www.mcmaster.com/drill-bits/material~high-speed-steel/drill-bit-size~59-64/' }
  ];

  ngOnInit(): void {
    this.filterData();
  }

  filterData(): void {
    this.filteredTapData = this.tapDrillData.filter(item => {
      const matchesSearch = this.searchTerm === '' || 
        item.tapSize.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.drillSize.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesCategory = this.selectedCategory === 'all' || item.category === this.selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }

  getCategoryColor(category: string): string {
    switch (category) {
      case 'unified': return '#007bff';
      case 'metric': return '#28a745';
      case 'npt': return '#fd7e14';
      case 'bspt': return '#6f42c1';
      case 'sti': return '#e83e8c';
      default: return '#6c757d';
    }
  }

  getCategoryIcon(category: string): string {
    switch (category) {
      case 'unified': return 'flag';
      case 'metric': return 'public';
      case 'npt': return 'plumbing';
      case 'bspt': return 'engineering';
      case 'sti': return 'settings';
      default: return 'build';
    }
  }

  exportToCSV(): void {
    let csv = 'Tap Size,Threads Per Inch,Drill Size,Drill Decimal,Percent Thread,Category,Description\n';
    
    for (const item of this.filteredTapData) {
      csv += `"${item.tapSize}","${item.threadsPerInch}","${item.drillSize}","${item.drillDecimal}","${item.percentThread}%","${item.category}","${item.description}"\n`;
    }

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tap-drill-chart.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  openBuyLink(link: string): void {
    if (link) {
      window.open(link, '_blank');
    }
  }

  getThreadPitch(item: TapDrillData): string {
    if (item.category === 'metric') {
      const pitch = item.tapSize.split('x')[1];
      return pitch ? `${pitch}mm` : 'N/A';
    } else {
      return `${item.threadsPerInch} TPI`;
    }
  }

  getUnifiedCount(): number {
    return this.filteredTapData.filter(item => item.category === 'unified').length;
  }

  getMetricCount(): number {
    return this.filteredTapData.filter(item => item.category === 'metric').length;
  }

  getNptCount(): number {
    return this.filteredTapData.filter(item => item.category === 'npt').length;
  }

  getStiCount(): number {
    return this.filteredTapData.filter(item => item.category === 'sti').length;
  }

  getTotalCount(): number {
    return this.filteredTapData.length;
  }
}
