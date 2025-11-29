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
  selector: 'app-tms-showcase',
  templateUrl: './tms-showcase.component.html',
  styleUrls: ['./tms-showcase.component.css']
})
export class TmsShowcaseComponent {
  @ViewChild('demoFrame') demoFrame!: ElementRef<HTMLIFrameElement>;

  demoUrl: string;
  
  features: Feature[] = [
    {
      icon: 'dashboard',
      title: 'Real-Time Dashboard',
      description: 'Live overview of all tools with instant status updates and availability tracking.',
      metrics: [
        { value: '16', label: 'Total Tools' },
        { value: '11', label: 'Available' },
        { value: '4', label: 'In Use' }
      ]
    },
    {
      icon: 'inventory_2',
      title: 'Smart Inventory Control',
      description: 'Automated tool categorization with location tracking and usage analytics.',
      metrics: [
        { value: '8', label: 'Standard Tools' },
        { value: '1', label: 'In Maintenance' }
      ]
    },
    {
      icon: 'swap_horiz',
      title: 'Quick Check-In/Out',
      description: 'Streamlined tool assignment process with user tracking and time logging.'
    },
    {
      icon: 'build',
      title: 'Maintenance Scheduling',
      description: 'Proactive maintenance alerts and scheduling to minimize downtime.'
    },
    {
      icon: 'analytics',
      title: 'Usage Analytics',
      description: 'Comprehensive reporting on tool utilization, patterns, and optimization opportunities.'
    },
    {
      icon: 'qr_code_scanner',
      title: 'QR Code Integration',
      description: 'Fast tool identification and processing with mobile-friendly QR scanning.'
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
      title: 'Eliminate Tool Loss & Misplacement',
      description: 'Digital tracking ensures every tool is accounted for with real-time location updates.',
      points: [
        'Reduce tool replacement costs by up to 40%',
        'Instant location tracking for any tool',
        'Automated alerts for missing or overdue tools',
        'Complete audit trail for accountability'
      ]
    },
    {
      title: 'Optimize Tool Utilization',
      description: 'Data-driven insights help maximize tool efficiency and identify optimization opportunities.',
      points: [
        'Usage analytics reveal underutilized tools',
        'Predictive maintenance prevents unexpected failures',
        'Load balancing across similar tools',
        'ROI tracking for tool investments'
      ]
    },
    {
      title: 'Streamline Operations',
      description: 'Automated workflows and instant access reduce administrative overhead.',
      points: [
        'Self-service check-in/out reduces wait times',
        'Mobile-friendly interface for shop floor use',
        'Integrated with existing manufacturing systems',
        'Customizable alerts and notifications'
      ]
    },
    {
      title: 'Ensure Compliance & Quality',
      description: 'Maintain regulatory compliance with complete documentation and traceability.',
      points: [
        'Full maintenance history and calibration records',
        'Quality control checkpoints and validations',
        'Regulatory compliance reporting',
        'Integration with quality management systems'
      ]
    }
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.demoUrl = 'https://tms.sharpfloornc.com/';
  }

  openFullDemo(): void {
    window.open('https://tms.sharpfloornc.com/', '_blank', 'noopener,noreferrer');
  }

  refreshDemo(): void {
    if (this.demoFrame?.nativeElement) {
      this.demoFrame.nativeElement.src = this.demoFrame.nativeElement.src;
    }
  }
}