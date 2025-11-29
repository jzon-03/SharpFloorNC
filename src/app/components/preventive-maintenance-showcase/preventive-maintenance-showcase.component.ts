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
}

interface Benefit {
  title: string;
  description: string;
  points: string[];
}

@Component({
  selector: 'app-preventive-maintenance-showcase',
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
    { name: 'Angular', icon: 'assets/img/tech/angular.svg' },
    { name: 'Angular Material', icon: 'assets/img/tech/material.svg' },
    { name: '.NET Core', icon: 'assets/img/tech/dotnet.svg' },
    { name: 'MySQL', icon: 'assets/img/tech/mysql.svg' },
    { name: 'TypeScript', icon: 'assets/img/tech/typescript.svg' },
    { name: 'Bootstrap', icon: 'assets/img/tech/bootstrap.svg' },
    { name: 'Node.js', icon: 'assets/img/tech/nodejs.svg' }
  ];

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
