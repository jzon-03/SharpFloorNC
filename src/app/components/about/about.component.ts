import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'About Us - Sharp Floor NC Manufacturing Software',
      description: 'Learn about Sharp Floor NC and our mission to provide custom manufacturing software solutions. Expert MES, QMS, and inventory management systems tailored to your needs.',
      keywords: 'about sharp floor nc, manufacturing software company, custom software development, manufacturing solutions provider',
      type: 'website'
    });
  }

}
