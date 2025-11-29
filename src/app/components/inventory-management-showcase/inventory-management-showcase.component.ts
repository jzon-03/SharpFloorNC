import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Feature {
  icon: string;
  title: string;
  description: string;
  metrics?: { value: string; label: string; }[];
}

interface TechItem {
  name: string;
  icon: string;
  fallbackIcon: string;
}

interface Benefit {
  title: string;
  description: string;
  points: string[];
}

@Component({
  selector: 'app-inventory-management-showcase',
  templateUrl: './inventory-management-showcase.component.html',
  styleUrls: ['./inventory-management-showcase.component.css']
})
export class InventoryManagementShowcaseComponent {
  @ViewChild('demoFrame') demoFrame!: ElementRef<HTMLIFrameElement>;

  demoUrl: string;
  
  features: Feature[] = [
    {
      icon: 'inventory_2',
      title: 'Real-Time Inventory Tracking',
      description: 'Live monitoring of stock levels with automatic updates and instant visibility across all locations.',
      metrics: [
        { value: '2,456', label: 'Items Tracked' },
        { value: '98%', label: 'Accuracy' },
        { value: '15', label: 'Locations' }
      ]
    },
    {
      icon: 'shopping_cart',
      title: 'Purchase Order Management',
      description: 'Streamlined procurement process with automated reorder points and supplier integration.',
      metrics: [
        { value: '145', label: 'Active POs' },
        { value: '25%', label: 'Cost Savings' }
      ]
    },
    {
      icon: 'local_shipping',
      title: 'Supply Chain Integration',
      description: 'Seamless connection with suppliers and logistics providers for optimized supply chain operations.'
    },
    {
      icon: 'trending_up',
      title: 'Demand Forecasting',
      description: 'AI-powered analytics to predict inventory needs and optimize stock levels based on historical data.'
    },
    {
      icon: 'qr_code_scanner',
      title: 'Barcode & RFID Support',
      description: 'Advanced scanning capabilities for quick item identification and efficient warehouse operations.'
    },
    {
      icon: 'analytics',
      title: 'Comprehensive Reporting',
      description: 'Detailed analytics on inventory turnover, costs, and performance metrics with customizable dashboards.'
    }
  ];

  techStack: TechItem[] = [
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', fallbackIcon: 'web' },
    { name: 'Angular Material', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', fallbackIcon: 'design_services' },
    { name: '.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', fallbackIcon: 'code' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', fallbackIcon: 'storage' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', fallbackIcon: 'javascript' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', fallbackIcon: 'style' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', fallbackIcon: 'memory' }
  ];

  onImageError(event: any, fallbackIcon: string): void {
    const imgElement = event.target;
    const fallbackElement = imgElement.nextElementSibling;
    if (fallbackElement) {
      imgElement.style.display = 'none';
      fallbackElement.style.display = 'block';
    }
  }

  benefits: Benefit[] = [
    {
      title: 'Inventory Optimization',
      description: 'Maximize efficiency while minimizing carrying costs',
      points: [
        'Reduce excess inventory by up to 30%',
        'Automated reorder points prevent stockouts',
        'ABC analysis for strategic inventory categorization',
        'Real-time visibility across all warehouse locations'
      ]
    },
    {
      title: 'Cost Control',
      description: 'Comprehensive cost management and procurement optimization',
      points: [
        'Track total cost of ownership for all items',
        'Vendor performance analytics and comparison',
        'Purchase order automation reduces processing time',
        'Eliminate manual counting with automated cycle counts'
      ]
    },
    {
      title: 'Operational Excellence',
      description: 'Streamline warehouse operations and improve accuracy',
      points: [
        '99.8% inventory accuracy with barcode scanning',
        'Automated workflow for receiving and putaway',
        'Pick path optimization reduces fulfillment time',
        'Integration with ERP and accounting systems'
      ]
    }
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.demoUrl = 'https://inventory.sharpfloornc.com/';
  }

  openFullDemo(): void {
    window.open(this.demoUrl, '_blank', 'noopener,noreferrer');
  }

  refreshDemo(): void {
    if (this.demoFrame) {
      this.demoFrame.nativeElement.src = this.demoFrame.nativeElement.src;
    }
  }
}
