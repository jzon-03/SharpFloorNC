import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AllowCookiesComponent } from './components/allow-cookies/allow-cookies.component';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template';

  constructor(
    private _bottomSheet: MatBottomSheet,
    private seoService: SeoService
  ){}

  ngOnInit(): void {
    // Initialize SEO with structured data
    this.seoService.updateMetaTags({
      title: 'Custom Manufacturing Software Solutions',
      description: 'Customize Your Manufacturing Software with Sharp Floor NC. Expert solutions in MES, Quality Management Systems, Inventory Management, and IoT integration for digital manufacturing transformation.',
      keywords: 'IoT, Smart Manufacturing, Custom Software, Manufacturing Execution System, MES, Inventory Management, Quality Management Software, QMS, Industrial Automation, Digital Manufacturing'
    });

    // Add organization structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Sharp Floor NC",
      "url": "https://sharpfloornc.com",
      "logo": "https://sharpfloornc.com/assets/img/logo.png",
      "description": "Custom Manufacturing Software Solutions including MES, QMS, and Inventory Management systems",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "url": "https://sharpfloornc.com/home/contactus"
      },
      "sameAs": [
        // Add social media links here when available
      ],
      "offers": {
        "@type": "AggregateOffer",
        "offerCount": "4",
        "offers": [
          {
            "@type": "Offer",
            "name": "Custom Manufacturing Execution System (MES)",
            "description": "Custom MES solutions tailored to your manufacturing processes"
          },
          {
            "@type": "Offer",
            "name": "Quality Management System (QMS)",
            "description": "Comprehensive quality management software for manufacturing"
          },
          {
            "@type": "Offer",
            "name": "Inventory Management System",
            "description": "Custom inventory management solutions for manufacturing operations"
          },
          {
            "@type": "Offer",
            "name": "Tool Management System (TMS)",
            "description": "Advanced tool tracking and management for manufacturing"
          }
        ]
      }
    };

    this.seoService.createStructuredData(structuredData);

    // this._bottomSheet.open(AllowCookiesComponent, {
    //   hasBackdrop: true,
    //   disableClose: true
    // })
  }
}
