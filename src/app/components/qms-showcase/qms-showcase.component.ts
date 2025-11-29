import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-qms-showcase',
  templateUrl: './qms-showcase.component.html',
  styleUrls: ['./qms-showcase.component.css']
})
export class QmsShowcaseComponent {
  @ViewChild('demoFrame') demoFrame!: ElementRef<HTMLIFrameElement>;

  demoUrl = 'https://qms.sharpfloornc.com/';

  features = [
    {
      icon: 'assignment_turned_in',
      title: 'Document Control',
      description: 'Centralized document management with version control, approval workflows, and automated distribution.',
      metrics: [
        { value: '100%', label: 'Document Traceability' },
        { value: '24/7', label: 'Access Control' }
      ]
    },
    {
      icon: 'timeline',
      title: 'Process Management',
      description: 'Streamlined process workflows with real-time monitoring, compliance tracking, and continuous improvement.',
      metrics: [
        { value: '99.9%', label: 'Process Compliance' },
        { value: '50%', label: 'Time Reduction' }
      ]
    },
    {
      icon: 'fact_check',
      title: 'Quality Control',
      description: 'Comprehensive quality control with inspection checklists, non-conformance tracking, and corrective actions.',
      metrics: [
        { value: '95%', label: 'First Pass Yield' },
        { value: '80%', label: 'Defect Reduction' }
      ]
    },
    {
      icon: 'verified_user',
      title: 'Audit Management',
      description: 'Complete audit trail with scheduled audits, finding management, and compliance reporting.',
      metrics: [
        { value: '100%', label: 'Audit Compliance' },
        { value: '60%', label: 'Faster Audits' }
      ]
    },
    {
      icon: 'analytics',
      title: 'Quality Analytics',
      description: 'Advanced analytics and reporting for quality metrics, trends analysis, and performance optimization.',
      metrics: [
        { value: '360°', label: 'Quality View' },
        { value: 'Real-time', label: 'Reporting' }
      ]
    },
    {
      icon: 'settings',
      title: 'CAPA Management',
      description: 'Corrective and Preventive Action management with root cause analysis and effectiveness verification.',
      metrics: [
        { value: '90%', label: 'CAPA Effectiveness' },
        { value: '40%', label: 'Resolution Time' }
      ]
    }
  ];

  techStack = [
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

  benefits = [
    {
      title: 'ISO Compliance Made Easy',
      description: 'Built-in compliance frameworks for ISO 9001, ISO 13485, and other quality standards.',
      points: [
        'Automated compliance tracking',
        'Standard operating procedures',
        'Audit-ready documentation',
        'Regulatory reporting'
      ]
    },
    {
      title: 'Streamlined Operations',
      description: 'Eliminate manual processes and reduce quality-related overhead with automated workflows.',
      points: [
        'Digital workflows',
        'Automated notifications',
        'Electronic signatures',
        'Mobile accessibility'
      ]
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with comprehensive quality analytics and real-time dashboards.',
      points: [
        'Quality KPI tracking',
        'Trend analysis',
        'Predictive analytics',
        'Custom reports'
      ]
    },
    {
      title: 'Scalable Solution',
      description: 'Grow your quality management capabilities as your business expands.',
      points: [
        'Multi-site support',
        'User role management',
        'Integration capabilities',
        'Cloud-based architecture'
      ]
    }
  ];

  openFullDemo(): void {
    window.open(this.demoUrl, '_blank');
  }

  refreshDemo(): void {
    if (this.demoFrame && this.demoFrame.nativeElement) {
      this.demoFrame.nativeElement.src = this.demoUrl;
    }
  }
}