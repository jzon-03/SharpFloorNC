import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private defaultTitle = 'Sharp Floor NC - Custom Manufacturing Software Solutions';
  private defaultDescription = 'Customize Your Manufacturing Software. Adapt to IoT and Digital Manufacturing with our custom MES, Inventory Management, and Quality Management solutions.';
  private defaultKeywords = 'IoT, Smart Manufacturing, Custom Software, Manufacturing Execution System, MES, Inventory Management, Quality Management Software, Industrial Automation, Digital Manufacturing';
  private defaultImage = 'https://sharpfloornc.com/assets/img/logo.png';
  private siteUrl = 'https://sharpfloornc.com';

  constructor(
    private meta: Meta,
    private titleService: Title,
    private router: Router
  ) {
    // Update canonical URL on route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateCanonicalUrl(event.urlAfterRedirects);
    });
  }

  updateTitle(title: string): void {
    const fullTitle = title ? `${title} | Sharp Floor NC` : this.defaultTitle;
    this.titleService.setTitle(fullTitle);
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
  }

  updateMetaTags(config: SEOConfig): void {
    // Update title
    if (config.title) {
      this.updateTitle(config.title);
    }

    // Update description
    const description = config.description || this.defaultDescription;
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    // Update keywords
    const keywords = config.keywords || this.defaultKeywords;
    this.meta.updateTag({ name: 'keywords', content: keywords });

    // Update Open Graph image
    const image = config.image || this.defaultImage;
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    // Update Open Graph URL
    const url = config.url || this.siteUrl + this.router.url;
    this.meta.updateTag({ property: 'og:url', content: url });

    // Update Open Graph type
    const type = config.type || 'website';
    this.meta.updateTag({ property: 'og:type', content: type });

    // Update article specific tags
    if (config.author) {
      this.meta.updateTag({ name: 'author', content: config.author });
      this.meta.updateTag({ property: 'article:author', content: config.author });
    }

    if (config.publishedTime) {
      this.meta.updateTag({ property: 'article:published_time', content: config.publishedTime });
    }

    if (config.modifiedTime) {
      this.meta.updateTag({ property: 'article:modified_time', content: config.modifiedTime });
    }
  }

  updateCanonicalUrl(url: string = ''): void {
    const canonicalUrl = this.siteUrl + url;
    
    // Remove existing canonical link if present
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.setAttribute('href', canonicalUrl);
    } else {
      // Create new canonical link
      const link: HTMLLinkElement = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonicalUrl);
      document.head.appendChild(link);
    }
  }

  createStructuredData(data: any): void {
    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.text = JSON.stringify(data);
  }
}
