import { Component } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-custommes',
  templateUrl: './custommes.component.html',
  styleUrls: ['./custommes.component.css']
})
export class CustommesComponent {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Custom MES Solutions - Manufacturing Execution System',
      description: 'Custom Manufacturing Execution System (MES) solutions tailored to your production needs. Real-time production tracking, workflow optimization, and seamless IoT integration.',
      keywords: 'custom MES, manufacturing execution system, production tracking, shop floor control, workflow automation, digital manufacturing, MES software',
      type: 'article'
    });
  }

}
