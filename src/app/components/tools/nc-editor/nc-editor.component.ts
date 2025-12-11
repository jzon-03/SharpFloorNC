import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-gcode';

@Component({
  selector: 'app-nc-editor',
  templateUrl: './nc-editor.component.html',
  styleUrls: ['./nc-editor.component.css']
})
export class NcEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('codeEditor', { static: false }) codeEditor!: ElementRef;
  @ViewChild('lineNumbers', { static: false }) lineNumbers!: ElementRef;

  ncCode = `; Sample G-Code Program
; Tool: 1/2" End Mill
; Material: Aluminum 6061

N10 G90 G54 G17 G49 G40 G80
N20 T1 M6 (1/2" END MILL)
N30 G0 Z1.0
N40 S2000 M3
N50 G0 X0 Y0
N60 G0 Z0.1
N70 G1 Z-0.1 F10.0
N80 G1 X1.0 F20.0
N90 G1 Y1.0
N100 G1 X0
N110 G1 Y0
N120 G0 Z1.0
N130 M5
N140 M30`;

  highlightedCode = '';
  currentLine = 1;

  constructor() { }

  ngOnInit(): void {
    this.highlightCode();
  }

  ngAfterViewInit(): void {
    this.updateLineNumbers();
    this.highlightCode();
  }

  highlightCode(): void {
    // Define G-code grammar if not already defined
    if (!Prism.languages.gcode) {
      Prism.languages.gcode = {
        'comment': /;.*/,
        'address': /[ABCDEFGHIJKLMNPQRSTUVWXYZ]\d*\.?\d*/,
        'number': /\d+\.?\d*/,
        'operator': /[+\-*/]/,
        'punctuation': /[()]/
      };
    }

    this.highlightedCode = Prism.highlight(this.ncCode, Prism.languages.gcode, 'gcode');
  }

  onCodeInput(event: any): void {
    this.ncCode = event.target.value;
    this.highlightCode();
    this.updateLineNumbers();
  }

  updateLineNumbers(): void {
    const lines = this.ncCode.split('\n');
    const lineNumbersEl = this.lineNumbers?.nativeElement;
    if (lineNumbersEl) {
      lineNumbersEl.innerHTML = lines.map((_, i) => i + 1).join('\n');
    }
  }

  downloadCode(): void {
    const blob = new Blob([this.ncCode], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'program.nc';
    a.click();
    window.URL.revokeObjectURL(url);
  }

  loadSample(sampleType: string): void {
    if (!sampleType) return;
    
    switch (sampleType) {
      case 'pocket':
        this.ncCode = `; Pocket Milling Program
; Tool: 1/4" End Mill
; Depth: 0.125"

N10 G90 G54 G17 G49 G40 G80
N20 T1 M6 (1/4" END MILL)
N30 G0 Z1.0
N40 S3000 M3
N50 G0 X0.25 Y0.25
N60 G0 Z0.1
N70 G1 Z-0.125 F5.0
N80 G1 X1.75 F15.0
N90 G1 Y0.75
N100 G1 X0.25
N110 G1 Y0.25
N120 G0 Z1.0
N130 M5
N140 M30`;
        break;
      case 'drilling':
        this.ncCode = `; Drilling Program
; Tool: #7 Drill (0.201")
; Holes: 4 places

N10 G90 G54 G17 G49 G40 G80
N20 T2 M6 (#7 DRILL)
N30 G0 Z1.0
N40 S1200 M3
N50 G81 X0.5 Y0.5 Z-0.25 R0.1 F5.0
N60 X1.5
N70 Y1.5
N80 X0.5
N90 G80
N100 G0 Z1.0
N110 M5
N120 M30`;
        break;
      case 'contour':
        this.ncCode = `; Contour Milling
; Tool: 1/8" Ball End Mill
; Finish Pass

N10 G90 G54 G17 G49 G40 G80
N20 T3 M6 (1/8" BALL END MILL)
N30 G0 Z1.0
N40 S4000 M3
N50 G0 X0 Y0
N60 G0 Z0.1
N70 G1 Z-0.05 F3.0
N80 G2 X1.0 Y0 I0.5 J0 F12.0
N90 G1 Y1.0
N100 G2 X0 Y1.0 I-0.5 J0
N110 G1 Y0
N120 G0 Z1.0
N130 M5
N140 M30`;
        break;
      default:
        this.ncCode = this.ncCode;
    }
    this.highlightCode();
    this.updateLineNumbers();
  }

  clearEditor(): void {
    this.ncCode = '';
    this.highlightCode();
    this.updateLineNumbers();
  }

  loadFile(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.ncCode = e.target?.result as string;
        this.highlightCode();
        this.updateLineNumbers();
      };
      reader.readAsText(file);
    }
  }
}
