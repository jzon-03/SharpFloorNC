import { Component } from '@angular/core';

export interface MaterialProperty {
  material: string;
  grade: string;
  category: 'steel' | 'aluminum' | 'stainless' | 'titanium' | 'brass' | 'copper' | 'plastic' | 'composite';
  density: number; // lb/in³
  tensile_strength: number; // psi
  yield_strength: number; // psi
  hardness: string;
  machinability_rating: number; // 1-100 scale
  thermal_conductivity: number; // BTU/hr-ft-°F
  melting_point: number; // °F
  modulus_elasticity: number; // psi x 10⁶
  recommended_sfm: {
    hss: number;
    carbide: number;
  };
  applications: string[];
  machining_notes: string;
  cost_index: number; // 1-10 scale (relative)
  availability: 'excellent' | 'good' | 'fair' | 'limited';
}

export interface CuttingFluid {
  name: string;
  type: 'flood' | 'mist' | 'dry' | 'minimum_quantity';
  materials: string[];
  operations: string[];
  advantages: string[];
  disadvantages: string[];
  mixing_ratio?: string;
  temperature_range?: string;
}

@Component({
  selector: 'app-material-charts',
  standalone: false,
  templateUrl: './material-charts.component.html',
  styleUrls: ['./material-charts.component.css']
})
export class MaterialChartsComponent {
  
  // Display columns
  materialColumns: string[] = ['material', 'grade', 'density', 'tensile_strength', 'hardness', 'machinability_rating', 'recommended_sfm', 'applications'];
  fluidColumns: string[] = ['name', 'type', 'materials', 'operations', 'advantages', 'mixing_ratio'];
  
  // Filter options
  selectedCategory: string = 'all';
  selectedAvailability: string = 'all';
  searchTerm: string = '';
  filteredMaterials: MaterialProperty[] = [];

  // Material database
  materials: MaterialProperty[] = [
    // Steel Materials
    {
      material: 'Low Carbon Steel',
      grade: '1018',
      category: 'steel',
      density: 0.284,
      tensile_strength: 64000,
      yield_strength: 54000,
      hardness: '64 HRB',
      machinability_rating: 78,
      thermal_conductivity: 32,
      melting_point: 2700,
      modulus_elasticity: 30,
      recommended_sfm: { hss: 100, carbide: 300 },
      applications: ['General machining', 'Shafts', 'Gears', 'Structural components'],
      machining_notes: 'Excellent machinability, prone to built-up edge at low speeds',
      cost_index: 2,
      availability: 'excellent'
    },
    {
      material: 'Medium Carbon Steel',
      grade: '1045',
      category: 'steel',
      density: 0.284,
      tensile_strength: 82000,
      yield_strength: 45000,
      hardness: '85 HRB',
      machinability_rating: 72,
      thermal_conductivity: 32,
      melting_point: 2700,
      modulus_elasticity: 30,
      recommended_sfm: { hss: 80, carbide: 250 },
      applications: ['Crankshafts', 'Connecting rods', 'Axles', 'Bolts'],
      machining_notes: 'Good machinability, heat treatment improves properties',
      cost_index: 3,
      availability: 'excellent'
    },
    {
      material: 'Alloy Steel',
      grade: '4140',
      category: 'steel',
      density: 0.284,
      tensile_strength: 95000,
      yield_strength: 60000,
      hardness: '28 HRC',
      machinability_rating: 65,
      thermal_conductivity: 28,
      melting_point: 2700,
      modulus_elasticity: 30,
      recommended_sfm: { hss: 60, carbide: 200 },
      applications: ['Aircraft parts', 'Automotive components', 'Machinery parts', 'Tools'],
      machining_notes: 'Heat treatable, requires sharp tools and proper coolant',
      cost_index: 5,
      availability: 'good'
    },
    {
      material: 'Tool Steel',
      grade: 'D2',
      category: 'steel',
      density: 0.284,
      tensile_strength: 120000,
      yield_strength: 100000,
      hardness: '60 HRC',
      machinability_rating: 45,
      thermal_conductivity: 18,
      melting_point: 2700,
      modulus_elasticity: 30,
      recommended_sfm: { hss: 30, carbide: 120 },
      applications: ['Dies', 'Punches', 'Cutting tools', 'Wear plates'],
      machining_notes: 'Difficult to machine, requires carbide tools and flood coolant',
      cost_index: 8,
      availability: 'good'
    },

    // Aluminum Materials
    {
      material: 'Aluminum Alloy',
      grade: '6061-T6',
      category: 'aluminum',
      density: 0.098,
      tensile_strength: 45000,
      yield_strength: 40000,
      hardness: '95 HRB',
      machinability_rating: 90,
      thermal_conductivity: 167,
      melting_point: 1220,
      modulus_elasticity: 10,
      recommended_sfm: { hss: 400, carbide: 1000 },
      applications: ['Aircraft structures', 'Automotive parts', 'Marine fittings', 'General machining'],
      machining_notes: 'Excellent machinability, use sharp tools to prevent galling',
      cost_index: 4,
      availability: 'excellent'
    },
    {
      material: 'Aluminum Alloy',
      grade: '7075-T6',
      category: 'aluminum',
      density: 0.101,
      tensile_strength: 83000,
      yield_strength: 73000,
      hardness: '87 HRB',
      machinability_rating: 85,
      thermal_conductivity: 130,
      melting_point: 1220,
      modulus_elasticity: 10.4,
      recommended_sfm: { hss: 350, carbide: 900 },
      applications: ['Aircraft structures', 'High-strength applications', 'Racing components'],
      machining_notes: 'High strength aluminum, excellent for aerospace applications',
      cost_index: 6,
      availability: 'good'
    },
    {
      material: 'Aluminum Alloy',
      grade: '2024-T4',
      category: 'aluminum',
      density: 0.100,
      tensile_strength: 68000,
      yield_strength: 47000,
      hardness: '120 HRB',
      machinability_rating: 80,
      thermal_conductivity: 120,
      melting_point: 1220,
      modulus_elasticity: 10.5,
      recommended_sfm: { hss: 300, carbide: 800 },
      applications: ['Aircraft skin', 'Structural components', 'Truck wheels'],
      machining_notes: 'Good machinability, copper content provides strength',
      cost_index: 5,
      availability: 'good'
    },

    // Stainless Steel
    {
      material: 'Stainless Steel',
      grade: '304',
      category: 'stainless',
      density: 0.290,
      tensile_strength: 85000,
      yield_strength: 35000,
      hardness: '70 HRB',
      machinability_rating: 55,
      thermal_conductivity: 9.4,
      melting_point: 2550,
      modulus_elasticity: 28,
      recommended_sfm: { hss: 60, carbide: 180 },
      applications: ['Food equipment', 'Chemical processing', 'Architectural', 'Kitchen equipment'],
      machining_notes: 'Work hardens rapidly, maintain constant feed and sharp tools',
      cost_index: 6,
      availability: 'excellent'
    },
    {
      material: 'Stainless Steel',
      grade: '316',
      category: 'stainless',
      density: 0.290,
      tensile_strength: 85000,
      yield_strength: 35000,
      hardness: '79 HRB',
      machinability_rating: 50,
      thermal_conductivity: 9.4,
      melting_point: 2550,
      modulus_elasticity: 28,
      recommended_sfm: { hss: 50, carbide: 150 },
      applications: ['Marine equipment', 'Medical devices', 'Chemical processing', 'Food grade'],
      machining_notes: 'Superior corrosion resistance, difficult to machine',
      cost_index: 7,
      availability: 'excellent'
    },

    // Titanium
    {
      material: 'Titanium Alloy',
      grade: 'Ti-6Al-4V',
      category: 'titanium',
      density: 0.160,
      tensile_strength: 130000,
      yield_strength: 120000,
      hardness: '36 HRC',
      machinability_rating: 25,
      thermal_conductivity: 4.0,
      melting_point: 3040,
      modulus_elasticity: 16.5,
      recommended_sfm: { hss: 30, carbide: 100 },
      applications: ['Aerospace', 'Medical implants', 'Racing components', 'Chemical processing'],
      machining_notes: 'Very difficult to machine, requires flood coolant and sharp carbide tools',
      cost_index: 10,
      availability: 'limited'
    },

    // Brass & Copper
    {
      material: 'Brass',
      grade: '360',
      category: 'brass',
      density: 0.307,
      tensile_strength: 57000,
      yield_strength: 32000,
      hardness: '62 HRB',
      machinability_rating: 100,
      thermal_conductivity: 67,
      melting_point: 1750,
      modulus_elasticity: 15,
      recommended_sfm: { hss: 200, carbide: 500 },
      applications: ['Fittings', 'Valves', 'Decorative items', 'Electrical components'],
      machining_notes: 'Excellent machinability, standard for comparison',
      cost_index: 4,
      availability: 'good'
    },
    {
      material: 'Copper',
      grade: 'C101',
      category: 'copper',
      density: 0.323,
      tensile_strength: 32000,
      yield_strength: 28000,
      hardness: '45 HRB',
      machinability_rating: 85,
      thermal_conductivity: 223,
      melting_point: 1980,
      modulus_elasticity: 17,
      recommended_sfm: { hss: 150, carbide: 400 },
      applications: ['Electrical conductors', 'Heat exchangers', 'Plumbing', 'Decorative'],
      machining_notes: 'Soft and ductile, use sharp tools to prevent galling',
      cost_index: 5,
      availability: 'good'
    },

    // Plastics
    {
      material: 'Delrin (POM)',
      grade: 'Acetal',
      category: 'plastic',
      density: 0.051,
      tensile_strength: 10000,
      yield_strength: 8500,
      hardness: 'Shore D85',
      machinability_rating: 95,
      thermal_conductivity: 0.13,
      melting_point: 347,
      modulus_elasticity: 0.5,
      recommended_sfm: { hss: 500, carbide: 1200 },
      applications: ['Gears', 'Bearings', 'Electrical components', 'Precision parts'],
      machining_notes: 'Excellent machinability, minimal tool wear',
      cost_index: 3,
      availability: 'good'
    },
    {
      material: 'PEEK',
      grade: 'Polyetheretherketone',
      category: 'plastic',
      density: 0.047,
      tensile_strength: 14500,
      yield_strength: 13800,
      hardness: 'Shore D85',
      machinability_rating: 80,
      thermal_conductivity: 0.14,
      melting_point: 645,
      modulus_elasticity: 0.55,
      recommended_sfm: { hss: 300, carbide: 800 },
      applications: ['Aerospace', 'Medical devices', 'Chemical processing', 'High-temp applications'],
      machining_notes: 'High-performance thermoplastic, excellent chemical resistance',
      cost_index: 9,
      availability: 'fair'
    }
  ];

  // Cutting fluids database
  cuttingFluids: CuttingFluid[] = [
    {
      name: 'Water-based coolant',
      type: 'flood',
      materials: ['Steel', 'Cast iron', 'Aluminum'],
      operations: ['Turning', 'Milling', 'Drilling', 'Grinding'],
      advantages: ['Excellent cooling', 'Low cost', 'Good chip evacuation'],
      disadvantages: ['Rust concerns', 'Bacterial growth', 'Limited lubrication'],
      mixing_ratio: '5-10%',
      temperature_range: '70-120°F'
    },
    {
      name: 'Synthetic coolant',
      type: 'flood',
      materials: ['Aluminum', 'Stainless steel', 'Titanium'],
      operations: ['High-speed machining', 'Grinding', 'EDM'],
      advantages: ['No oil residue', 'Long sump life', 'Excellent cooling'],
      disadvantages: ['Higher cost', 'Foam issues', 'Skin irritation'],
      mixing_ratio: '3-8%',
      temperature_range: '70-110°F'
    },
    {
      name: 'Cutting oil',
      type: 'flood',
      materials: ['Steel', 'Tool steel', 'Hard materials'],
      operations: ['Threading', 'Broaching', 'Deep hole drilling'],
      advantages: ['Excellent lubrication', 'Superior surface finish', 'Tool life'],
      disadvantages: ['Fire hazard', 'Disposal issues', 'Smoke generation'],
      mixing_ratio: 'Neat (100%)',
      temperature_range: '70-200°F'
    },
    {
      name: 'MQL (Minimum Quantity)',
      type: 'minimum_quantity',
      materials: ['Aluminum', 'Steel', 'Cast iron'],
      operations: ['Milling', 'Drilling', 'Turning'],
      advantages: ['Environmentally friendly', 'No disposal', 'Clean operation'],
      disadvantages: ['Limited cooling', 'Not for heavy cuts', 'Equipment cost'],
      mixing_ratio: '0.1-1 ml/min',
      temperature_range: 'Ambient'
    },
    {
      name: 'Air blast',
      type: 'dry',
      materials: ['Cast iron', 'Plastics', 'Composites'],
      operations: ['Light cuts', 'Finishing', 'Non-ferrous'],
      advantages: ['No contamination', 'Clean parts', 'No disposal'],
      disadvantages: ['Poor cooling', 'Dust issues', 'Limited applications'],
      mixing_ratio: 'N/A',
      temperature_range: 'Ambient'
    }
  ];

  ngOnInit(): void {
    this.filterMaterials();
  }

  filterMaterials(): void {
    this.filteredMaterials = this.materials.filter(material => {
      const categoryMatch = this.selectedCategory === 'all' || material.category === this.selectedCategory;
      const availabilityMatch = this.selectedAvailability === 'all' || material.availability === this.selectedAvailability;
      const searchMatch = this.searchTerm === '' || 
        material.material.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        material.grade.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        material.applications.some(app => app.toLowerCase().includes(this.searchTerm.toLowerCase()));
      
      return categoryMatch && availabilityMatch && searchMatch;
    });
  }

  getCategoryColor(category: string): string {
    const colors = {
      'steel': '#607d8b',
      'aluminum': '#2196f3',
      'stainless': '#9c27b0',
      'titanium': '#ff5722',
      'brass': '#ff9800',
      'copper': '#795548',
      'plastic': '#4caf50',
      'composite': '#9e9e9e'
    };
    return colors[category as keyof typeof colors] || '#666666';
  }

  getCategoryIcon(category: string): string {
    const icons = {
      'steel': 'build',
      'aluminum': 'flight',
      'stainless': 'kitchen',
      'titanium': 'rocket_launch',
      'brass': 'star',
      'copper': 'cable',
      'plastic': 'polymer',
      'composite': 'fiber_manual_record'
    };
    return icons[category as keyof typeof icons] || 'category';
  }

  getAvailabilityColor(availability: string): string {
    const colors = {
      'excellent': '#4caf50',
      'good': '#8bc34a',
      'fair': '#ff9800',
      'limited': '#f44336'
    };
    return colors[availability as keyof typeof colors] || '#666666';
  }

  getMachinabilityColor(rating: number): string {
    if (rating >= 80) return '#4caf50';
    if (rating >= 60) return '#8bc34a';
    if (rating >= 40) return '#ff9800';
    return '#f44336';
  }

  getCostColor(cost: number): string {
    if (cost <= 3) return '#4caf50';
    if (cost <= 6) return '#ff9800';
    return '#f44336';
  }

  exportMaterialData(): void {
    const csvContent = [
      ['Material', 'Grade', 'Category', 'Density (lb/in³)', 'Tensile Strength (psi)', 'Yield Strength (psi)', 'Hardness', 'Machinability Rating', 'HSS SFM', 'Carbide SFM', 'Applications', 'Machining Notes', 'Cost Index', 'Availability'],
      ...this.filteredMaterials.map(material => [
        material.material,
        material.grade,
        material.category,
        material.density.toString(),
        material.tensile_strength.toString(),
        material.yield_strength.toString(),
        material.hardness,
        material.machinability_rating.toString(),
        material.recommended_sfm.hss.toString(),
        material.recommended_sfm.carbide.toString(),
        material.applications.join('; '),
        material.machining_notes,
        material.cost_index.toString(),
        material.availability
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'material-properties.csv';
    link.click();
    window.URL.revokeObjectURL(url);
  }

  exportFluidData(): void {
    const csvContent = [
      ['Cutting Fluid', 'Type', 'Materials', 'Operations', 'Advantages', 'Disadvantages', 'Mixing Ratio', 'Temperature Range'],
      ...this.cuttingFluids.map(fluid => [
        fluid.name,
        fluid.type,
        fluid.materials.join('; '),
        fluid.operations.join('; '),
        fluid.advantages.join('; '),
        fluid.disadvantages.join('; '),
        fluid.mixing_ratio || 'N/A',
        fluid.temperature_range || 'N/A'
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cutting-fluids.csv';
    link.click();
    window.URL.revokeObjectURL(url);
  }
}