import { Component } from '@angular/core';

export interface MaterialData {
  material: string;
  category: 'steel' | 'aluminum' | 'stainless' | 'titanium' | 'plastics' | 'composites';
  hardness: string;
  hss_sfm: number;
  carbide_sfm: number;
  ceramic_sfm: number;
  coating_multiplier: number;
  chipload_range: string;
  description: string;
}

export interface ToolData {
  tool_type: string;
  category: 'endmill' | 'drill' | 'tap' | 'reamer' | 'face';
  flutes: number;
  chipload_factor: number;
  speed_factor: number;
  description: string;
}

export interface CalculationResult {
  material: string;
  tool_diameter: number;
  tool_type: string;
  cutting_speed: number;
  rpm: number;
  feed_rate: number;
  chipload: number;
}

@Component({
  selector: 'app-speeds-feeds',
  standalone: false,
  templateUrl: './speeds-feeds.component.html',
  styleUrls: ['./speeds-feeds.component.css']
})
export class SpeedsFeedsComponent {
  // Form inputs
  selectedMaterial: string = 'aluminum-6061';
  selectedTool: string = 'endmill-4flute';
  toolDiameter: number = 0.5;
  toolMaterial: string = 'carbide';
  hasCoating: boolean = true;
  
  // Results
  calculationResult: CalculationResult | null = null;
  
  // Display columns
  materialColumns: string[] = ['material', 'hardness', 'hss_sfm', 'carbide_sfm', 'ceramic_sfm', 'chipload_range', 'description'];
  toolColumns: string[] = ['tool_type', 'flutes', 'chipload_factor', 'speed_factor', 'description'];

  // Material database
  materials: MaterialData[] = [
    // Steel Materials
    { material: 'Steel - 1018 (Low Carbon)', category: 'steel', hardness: '64 HRB', hss_sfm: 100, carbide_sfm: 300, ceramic_sfm: 500, coating_multiplier: 1.3, chipload_range: '0.002-0.008', description: 'Common mild steel for general machining' },
    { material: 'Steel - 4140 (Medium Carbon)', category: 'steel', hardness: '28-32 HRC', hss_sfm: 80, carbide_sfm: 250, ceramic_sfm: 450, coating_multiplier: 1.4, chipload_range: '0.002-0.006', description: 'Heat treatable alloy steel' },
    { material: 'Steel - 4340 (High Strength)', category: 'steel', hardness: '32-36 HRC', hss_sfm: 60, carbide_sfm: 200, ceramic_sfm: 400, coating_multiplier: 1.5, chipload_range: '0.001-0.005', description: 'High strength aerospace steel' },
    { material: 'Steel - D2 Tool Steel', category: 'steel', hardness: '60-62 HRC', hss_sfm: 30, carbide_sfm: 120, ceramic_sfm: 250, coating_multiplier: 1.8, chipload_range: '0.001-0.003', description: 'Air-hardening tool steel' },
    
    // Aluminum Materials
    { material: 'Aluminum - 6061-T6', category: 'aluminum', hardness: '95 HRB', hss_sfm: 400, carbide_sfm: 1000, ceramic_sfm: 2000, coating_multiplier: 1.2, chipload_range: '0.005-0.020', description: 'Most common aluminum alloy' },
    { material: 'Aluminum - 7075-T6', category: 'aluminum', hardness: '87 HRB', hss_sfm: 350, carbide_sfm: 900, ceramic_sfm: 1800, coating_multiplier: 1.2, chipload_range: '0.004-0.018', description: 'High strength aluminum' },
    { material: 'Aluminum - 2024-T4', category: 'aluminum', hardness: '120 HRB', hss_sfm: 300, carbide_sfm: 800, ceramic_sfm: 1600, coating_multiplier: 1.3, chipload_range: '0.003-0.015', description: 'Aerospace aluminum alloy' },
    
    // Stainless Steel
    { material: 'Stainless - 304', category: 'stainless', hardness: '70 HRB', hss_sfm: 60, carbide_sfm: 180, ceramic_sfm: 350, coating_multiplier: 1.6, chipload_range: '0.002-0.008', description: 'Austenitic stainless steel' },
    { material: 'Stainless - 316', category: 'stainless', hardness: '79 HRB', hss_sfm: 50, carbide_sfm: 150, ceramic_sfm: 300, coating_multiplier: 1.7, chipload_range: '0.002-0.007', description: 'Marine grade stainless' },
    { material: 'Stainless - 17-4 PH', category: 'stainless', hardness: '44 HRC', hss_sfm: 40, carbide_sfm: 120, ceramic_sfm: 250, coating_multiplier: 1.8, chipload_range: '0.001-0.005', description: 'Precipitation hardened SS' },
    
    // Titanium
    { material: 'Titanium - Ti-6Al-4V', category: 'titanium', hardness: '36 HRC', hss_sfm: 30, carbide_sfm: 100, ceramic_sfm: 200, coating_multiplier: 2.0, chipload_range: '0.001-0.004', description: 'Grade 5 titanium alloy' },
    { material: 'Titanium - CP Grade 2', category: 'titanium', hardness: '80 HRB', hss_sfm: 40, carbide_sfm: 120, ceramic_sfm: 250, coating_multiplier: 1.8, chipload_range: '0.002-0.006', description: 'Commercially pure titanium' },
    
    // Plastics & Composites
    { material: 'Delrin (POM)', category: 'plastics', hardness: 'Shore D85', hss_sfm: 500, carbide_sfm: 1200, ceramic_sfm: 2000, coating_multiplier: 1.0, chipload_range: '0.005-0.025', description: 'Acetal plastic' },
    { material: 'PEEK', category: 'plastics', hardness: 'Shore D85', hss_sfm: 300, carbide_sfm: 800, ceramic_sfm: 1500, coating_multiplier: 1.0, chipload_range: '0.003-0.020', description: 'High performance thermoplastic' },
    { material: 'Carbon Fiber', category: 'composites', hardness: 'N/A', hss_sfm: 200, carbide_sfm: 600, ceramic_sfm: 1200, coating_multiplier: 1.1, chipload_range: '0.001-0.008', description: 'Carbon fiber composite' }
  ];

  // Tool database
  tools: ToolData[] = [
    // End Mills
    { tool_type: '2-Flute End Mill', category: 'endmill', flutes: 2, chipload_factor: 1.0, speed_factor: 1.0, description: 'General purpose, good chip evacuation' },
    { tool_type: '3-Flute End Mill', category: 'endmill', flutes: 3, chipload_factor: 0.8, speed_factor: 1.1, description: 'Balance of finish and material removal' },
    { tool_type: '4-Flute End Mill', category: 'endmill', flutes: 4, chipload_factor: 0.7, speed_factor: 1.2, description: 'Fine finish, lower chipload' },
    { tool_type: '6-Flute End Mill', category: 'endmill', flutes: 6, chipload_factor: 0.5, speed_factor: 1.3, description: 'Finishing operations only' },
    { tool_type: 'Roughing End Mill', category: 'endmill', flutes: 3, chipload_factor: 1.5, speed_factor: 0.8, description: 'High material removal rate' },
    { tool_type: 'Ball End Mill', category: 'endmill', flutes: 2, chipload_factor: 0.6, speed_factor: 1.0, description: '3D contouring and profiling' },
    
    // Drills
    { tool_type: 'Twist Drill', category: 'drill', flutes: 2, chipload_factor: 0.8, speed_factor: 0.8, description: 'Standard drilling operations' },
    { tool_type: 'Carbide Drill', category: 'drill', flutes: 2, chipload_factor: 1.0, speed_factor: 1.2, description: 'High speed drilling' },
    { tool_type: 'Center Drill', category: 'drill', flutes: 2, chipload_factor: 0.3, speed_factor: 1.5, description: 'Centering and chamfering' },
    { tool_type: 'Spot Drill', category: 'drill', flutes: 2, chipload_factor: 0.5, speed_factor: 1.3, description: 'Accurate hole location' },
    
    // Taps and Reamers
    { tool_type: 'Hand Tap', category: 'tap', flutes: 3, chipload_factor: 0.2, speed_factor: 0.3, description: 'Manual threading operations' },
    { tool_type: 'Spiral Tap', category: 'tap', flutes: 2, chipload_factor: 0.3, speed_factor: 0.5, description: 'CNC threading with chip evacuation' },
    { tool_type: 'Straight Reamer', category: 'reamer', flutes: 6, chipload_factor: 0.1, speed_factor: 0.6, description: 'Precision hole sizing' },
    
    // Face Mills
    { tool_type: 'Face Mill (Indexable)', category: 'face', flutes: 8, chipload_factor: 1.2, speed_factor: 0.9, description: 'Large surface facing' },
    { tool_type: 'Fly Cutter', category: 'face', flutes: 1, chipload_factor: 2.0, speed_factor: 0.7, description: 'Single point facing tool' }
  ];

  calculateSpeedsFeedsValues(): void {
    const material = this.materials.find(m => 
      m.material.toLowerCase().replace(/[^a-z0-9]/g, '-') === this.selectedMaterial
    );
    const tool = this.tools.find(t => 
      t.tool_type.toLowerCase().replace(/[^a-z0-9]/g, '-') === this.selectedTool
    );

    if (!material || !tool || this.toolDiameter <= 0) {
      this.calculationResult = null;
      return;
    }

    // Determine cutting speed based on tool material
    let cuttingSpeed = 0;
    switch (this.toolMaterial) {
      case 'hss':
        cuttingSpeed = material.hss_sfm;
        break;
      case 'carbide':
        cuttingSpeed = material.carbide_sfm;
        break;
      case 'ceramic':
        cuttingSpeed = material.ceramic_sfm;
        break;
    }

    // Apply coating multiplier
    if (this.hasCoating) {
      cuttingSpeed *= material.coating_multiplier;
    }

    // Apply tool speed factor
    cuttingSpeed *= tool.speed_factor;

    // Calculate RPM: RPM = (SFM × 12) / (π × Diameter)
    const rpm = Math.round((cuttingSpeed * 12) / (Math.PI * this.toolDiameter));

    // Calculate chipload (middle of range for the material)
    const chiploadRange = material.chipload_range.split('-');
    const minChipload = parseFloat(chiploadRange[0]);
    const maxChipload = parseFloat(chiploadRange[1]);
    const baseChipload = (minChipload + maxChipload) / 2;
    
    // Apply tool chipload factor
    const chipload = baseChipload * tool.chipload_factor;

    // Calculate feed rate: Feed Rate = RPM × Chipload × Number of Flutes
    const feedRate = Math.round(rpm * chipload * tool.flutes * 10) / 10;

    this.calculationResult = {
      material: material.material,
      tool_diameter: this.toolDiameter,
      tool_type: tool.tool_type,
      cutting_speed: Math.round(cuttingSpeed),
      rpm: rpm,
      feed_rate: feedRate,
      chipload: Math.round(chipload * 1000) / 1000
    };
  }

  getMaterialSelectId(material: MaterialData): string {
    return material.material.toLowerCase().replace(/[^a-z0-9]/g, '-');
  }

  getToolSelectId(tool: ToolData): string {
    return tool.tool_type.toLowerCase().replace(/[^a-z0-9]/g, '-');
  }

  getCategoryColor(category: string): string {
    const colors = {
      'steel': '#607d8b',
      'aluminum': '#2196f3',
      'stainless': '#9c27b0',
      'titanium': '#ff5722',
      'plastics': '#4caf50',
      'composites': '#ff9800'
    };
    return colors[category as keyof typeof colors] || '#666666';
  }

  getCategoryIcon(category: string): string {
    const icons = {
      'steel': 'build',
      'aluminum': 'flight',
      'stainless': 'kitchen',
      'titanium': 'rocket_launch',
      'plastics': 'polymer',
      'composites': 'fiber_manual_record'
    };
    return icons[category as keyof typeof icons] || 'category';
  }

  getToolCategoryIcon(category: string): string {
    const icons = {
      'endmill': 'precision_manufacturing',
      'drill': 'construction',
      'tap': 'settings',
      'reamer': 'straighten',
      'face': 'crop_square'
    };
    return icons[category as keyof typeof icons] || 'build';
  }

  exportToCSV(): void {
    const csvContent = [
      ['Material', 'Category', 'Hardness', 'HSS SFM', 'Carbide SFM', 'Ceramic SFM', 'Coating Mult.', 'Chipload Range', 'Description'],
      ...this.materials.map(material => [
        material.material,
        material.category,
        material.hardness,
        material.hss_sfm.toString(),
        material.carbide_sfm.toString(),
        material.ceramic_sfm.toString(),
        material.coating_multiplier.toString(),
        material.chipload_range,
        material.description
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'speeds-feeds-data.csv';
    link.click();
    window.URL.revokeObjectURL(url);
  }

  ngOnInit(): void {
    // Set initial values
    this.calculateSpeedsFeedsValues();
  }
}