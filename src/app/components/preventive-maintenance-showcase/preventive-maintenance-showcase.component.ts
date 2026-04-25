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
  selector: 'app-preventive-maintenance-showcase',
  standalone: false,
  templateUrl: './preventive-maintenance-showcase.component.html',
  styleUrls: ['./preventive-maintenance-showcase.component.css']
})
export class PreventiveMaintenanceShowcaseComponent {
  @ViewChild('demoFrame') demoFrame!: ElementRef<HTMLIFrameElement>;

  demoUrl: string;
  
  features: Feature[] = [
    {
      icon: 'schedule',
      title: 'Scheduled Maintenance',
      description: 'Automated scheduling and tracking of preventive maintenance tasks with calendar integration.',
      metrics: [
        { value: '24', label: 'Active Tasks' },
        { value: '12', label: 'Completed' },
        { value: '3', label: 'Overdue' }
      ]
    },
    {
      icon: 'inventory',
      title: 'Asset Management',
      description: 'Comprehensive asset tracking with maintenance history, documentation, and lifecycle management.',
      metrics: [
        { value: '156', label: 'Total Assets' },
        { value: '89%', label: 'Uptime' }
      ]
    },
    {
      icon: 'notification_important',
      title: 'Smart Alerts',
      description: 'Intelligent notifications for upcoming maintenance, part replacements, and critical issues.'
    },
    {
      icon: 'build',
      title: 'Work Order Management',
      description: 'Digital work orders with step-by-step procedures, parts lists, and completion tracking.'
    },
    {
      icon: 'analytics',
      title: 'Performance Analytics',
      description: 'Real-time dashboards and reports on equipment performance, costs, and maintenance trends.'
    },
    {
      icon: 'mobile_friendly',
      title: 'Mobile Access',
      description: 'Full mobile functionality for technicians to access and update maintenance data in the field.'
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
      title: 'Reduced Downtime',
      description: 'Prevent equipment failures with proactive maintenance scheduling',
      points: [
        'Up to 75% reduction in unplanned downtime',
        'Predictive maintenance based on usage patterns',
        'Early warning system for potential issues',
        'Optimized maintenance windows to minimize disruption'
      ]
    },
    {
      title: 'Cost Optimization',
      description: 'Maximize ROI through intelligent maintenance planning',
      points: [
        'Reduce emergency repair costs by 60%',
        'Extend equipment lifespan through proper care',
        'Optimize inventory with smart parts management',
        'Track and analyze maintenance spending patterns'
      ]
    },
    {
      title: 'Compliance & Safety',
      description: 'Ensure regulatory compliance and workplace safety',
      points: [
        'Automated compliance reporting and documentation',
        'Safety checklist integration for all procedures',
        'Full audit trail with digital signatures',
        'Risk assessment and safety protocol management'
      ]
    }
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.demoUrl = 'https://preventive-maintenance.sharpfloornc.com/';
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
