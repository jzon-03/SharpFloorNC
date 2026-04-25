import { Component } from '@angular/core';

export interface CalculationResult {
  name: string;
  value: number;
  unit: string;
  description: string;
}

@Component({
  selector: 'app-calculators',
  standalone: false,
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.css']
})
export class CalculatorsComponent {
  
  // Surface Footage Calculator
  diameter: number = 1.0;
  rpm: number = 1000;
  surfaceSpeed: number = 0;

  // Feed Rate Calculator  
  feedRpm: number = 1000;
  chipload: number = 0.005;
  flutes: number = 4;
  feedRate: number = 0;

  // Material Removal Rate Calculator
  axialDepth: number = 0.1;
  radialDepth: number = 0.5;
  mrr_feedRate: number = 20;
  materialRemovalRate: number = 0;

  // Cycle Time Calculator
  length: number = 6;
  cycleTime_feedRate: number = 20;
  rapidRate: number = 500;
  cycleTime: number = 0;

  // Thread Pitch Calculator
  threadsPerInch: number = 20;
  threadPitch: number = 0;
  threadPitch_metric: number = 1.5;
  threads_per_inch: number = 0;

  // Taper Calculator
  largeDiameter: number = 2.0;
  smallDiameter: number = 1.0;
  taperLength: number = 4.0;
  taperAngle: number = 0;
  taperPerFoot: number = 0;

  // Torque Calculator
  force: number = 100;
  leverArm: number = 1.0;
  torque: number = 0;

  // Power Calculator
  cuttingForce: number = 200;
  powerFeedRate: number = 20;
  powerRequired: number = 0;

  ngOnInit(): void {
    this.calculateAll();
  }

  calculateAll(): void {
    this.calculateSurfaceSpeed();
    this.calculateFeedRate();
    this.calculateMaterialRemovalRate();
    this.calculateCycleTime();
    this.calculateThreadPitch();
    this.calculateTaper();
    this.calculateTorque();
    this.calculatePower();
  }

  // Surface Speed (SFM) = (π × Diameter × RPM) ÷ 12
  calculateSurfaceSpeed(): void {
    if (this.diameter > 0 && this.rpm > 0) {
      this.surfaceSpeed = (Math.PI * this.diameter * this.rpm) / 12;
      this.surfaceSpeed = Math.round(this.surfaceSpeed * 100) / 100;
    } else {
      this.surfaceSpeed = 0;
    }
  }

  // Feed Rate (IPM) = RPM × Chipload × Number of Flutes
  calculateFeedRate(): void {
    if (this.feedRpm > 0 && this.chipload > 0 && this.flutes > 0) {
      this.feedRate = this.feedRpm * this.chipload * this.flutes;
      this.feedRate = Math.round(this.feedRate * 100) / 100;
    } else {
      this.feedRate = 0;
    }
  }

  // Material Removal Rate (in³/min) = Axial Depth × Radial Depth × Feed Rate
  calculateMaterialRemovalRate(): void {
    if (this.axialDepth > 0 && this.radialDepth > 0 && this.mrr_feedRate > 0) {
      this.materialRemovalRate = this.axialDepth * this.radialDepth * this.mrr_feedRate;
      this.materialRemovalRate = Math.round(this.materialRemovalRate * 1000) / 1000;
    } else {
      this.materialRemovalRate = 0;
    }
  }

  // Cycle Time (min) = Length ÷ Feed Rate + (rapid movements)
  calculateCycleTime(): void {
    if (this.length > 0 && this.cycleTime_feedRate > 0) {
      const cuttingTime = this.length / this.cycleTime_feedRate;
      const rapidTime = (this.length * 0.1) / this.rapidRate; // Assume 10% rapid moves
      this.cycleTime = cuttingTime + rapidTime;
      this.cycleTime = Math.round(this.cycleTime * 100) / 100;
    } else {
      this.cycleTime = 0;
    }
  }

  // Thread Pitch conversions
  calculateThreadPitch(): void {
    if (this.threadsPerInch > 0) {
      this.threadPitch = 1 / this.threadsPerInch;
      this.threadPitch = Math.round(this.threadPitch * 10000) / 10000;
    }
    
    if (this.threadPitch_metric > 0) {
      this.threads_per_inch = 25.4 / this.threadPitch_metric;
      this.threads_per_inch = Math.round(this.threads_per_inch * 100) / 100;
    }
  }

  // Taper calculations
  calculateTaper(): void {
    if (this.largeDiameter > 0 && this.smallDiameter > 0 && this.taperLength > 0) {
      const diameterDiff = this.largeDiameter - this.smallDiameter;
      this.taperAngle = Math.atan(diameterDiff / (2 * this.taperLength)) * (180 / Math.PI);
      this.taperAngle = Math.round(this.taperAngle * 1000) / 1000;
      
      this.taperPerFoot = (diameterDiff / this.taperLength) * 12;
      this.taperPerFoot = Math.round(this.taperPerFoot * 1000) / 1000;
    } else {
      this.taperAngle = 0;
      this.taperPerFoot = 0;
    }
  }

  // Torque = Force × Lever Arm
  calculateTorque(): void {
    if (this.force > 0 && this.leverArm > 0) {
      this.torque = this.force * this.leverArm;
      this.torque = Math.round(this.torque * 100) / 100;
    } else {
      this.torque = 0;
    }
  }

  // Power (HP) = (Cutting Force × Feed Rate) ÷ 33000
  calculatePower(): void {
    if (this.cuttingForce > 0 && this.powerFeedRate > 0) {
      this.powerRequired = (this.cuttingForce * this.powerFeedRate) / 33000;
      this.powerRequired = Math.round(this.powerRequired * 1000) / 1000;
    } else {
      this.powerRequired = 0;
    }
  }

  // Utility methods for form validation
  isValidNumber(value: number): boolean {
    return !isNaN(value) && isFinite(value) && value > 0;
  }

  formatNumber(value: number, decimals: number = 2): string {
    return value.toFixed(decimals);
  }

  // Export calculations to text
  exportCalculations(): void {
    const calculations = [
      'CNC Machining Calculations Export',
      '====================================',
      '',
      `Surface Speed Calculation:`,
      `Diameter: ${this.diameter}" | RPM: ${this.rpm}`,
      `Surface Speed: ${this.surfaceSpeed} SFM`,
      '',
      `Feed Rate Calculation:`,
      `RPM: ${this.feedRpm} | Chipload: ${this.chipload}" | Flutes: ${this.flutes}`,
      `Feed Rate: ${this.feedRate} IPM`,
      '',
      `Material Removal Rate:`,
      `Axial Depth: ${this.axialDepth}" | Radial Depth: ${this.radialDepth}" | Feed Rate: ${this.mrr_feedRate} IPM`,
      `MRR: ${this.materialRemovalRate} in³/min`,
      '',
      `Cycle Time Estimation:`,
      `Length: ${this.length}" | Feed Rate: ${this.cycleTime_feedRate} IPM | Rapid Rate: ${this.rapidRate} IPM`,
      `Cycle Time: ${this.cycleTime} minutes`,
      '',
      `Thread Calculations:`,
      `${this.threadsPerInch} TPI = ${this.threadPitch}" pitch`,
      `${this.threadPitch_metric}mm pitch = ${this.threads_per_inch} TPI`,
      '',
      `Taper Calculations:`,
      `Large Ø: ${this.largeDiameter}" | Small Ø: ${this.smallDiameter}" | Length: ${this.taperLength}"`,
      `Taper Angle: ${this.taperAngle}° | Taper per Foot: ${this.taperPerFoot}"`,
      '',
      `Torque Calculation:`,
      `Force: ${this.force} lbs | Lever Arm: ${this.leverArm}"`,
      `Torque: ${this.torque} ft-lbs`,
      '',
      `Power Calculation:`,
      `Cutting Force: ${this.cuttingForce} lbs | Feed Rate: ${this.powerFeedRate} IPM`,
      `Power Required: ${this.powerRequired} HP`,
      '',
      `Generated: ${new Date().toLocaleString()}`
    ].join('\n');

    const blob = new Blob([calculations], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'machining-calculations.txt';
    link.click();
    window.URL.revokeObjectURL(url);
  }
}