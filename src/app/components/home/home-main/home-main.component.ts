import { Component } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Home - Manufacturing Software Solutions',
      description: 'Optimize your manufacturing processes with industry-leading software solutions. Real-time insights, inventory management, quality control, and IoT integration for digital manufacturing.',
      keywords: 'manufacturing software, MES, manufacturing execution system, smart manufacturing, IoT manufacturing, digital transformation',
      type: 'website'
    });
  }

  homeContent = [
    {
      title: "Optimize Your Manufacturing Processes with Industry-Leading Software Solutions",
      body: "Emphasize the ability of your software solutions to optimize and streamline manufacturing processes, improving efficiency, reducing costs, and increasing productivity."
    },
    {
      title: "Take Control of Your Production with Advanced Manufacturing Software",
      body: "Highlight the advanced features and functionalities of your software, showcasing how it enables manufacturers to have full control over their production operations and make data-driven decisions."
    },
    {
      title: "Increase Profitability and Reduce Downtime with our Manufacturing Software Solutions",
      body: "Showcase how your software solutions can help manufacturers maximize profitability by minimizing downtime, improving equipment maintenance, and optimizing resource utilization."
    },
    {
      title: "Achieve Manufacturing Excellence with Tailored Software Solutions",
      body: "Emphasize your ability to provide customized software solutions that cater specifically to the unique needs and challenges of the manufacturing industry, helping businesses achieve operational excellence."
    },
    {
      title: "Real-Time Insights for Smarter Decision-Making in Manufacturing",
      body: "Highlight the real-time data analytics capabilities of your software, showcasing how it provides manufacturers with valuable insights for making informed decisions and driving continuous improvement."
    },
    {
      title: "Efficient Inventory Management with our Manufacturing Software",
      body: "Focus on the inventory management features of your software, emphasizing how it helps manufacturers optimize inventory levels, track materials, and minimize waste, resulting in cost savings."
    },
    {
      title: "Enhance Quality Control and Compliance with our Manufacturing Software Solutions",
      body: "Showcase how your software enables manufacturers to enforce strict quality control standards, ensure regulatory compliance, and maintain product consistency and integrity."
    },
    {
      title: "Connect Your Entire Manufacturing Ecosystem with our Software Integration",
      body: "Highlight the integration capabilities of your software, showcasing how it connects various systems and processes within the manufacturing ecosystem, enabling seamless data flow and collaboration."
    },
    {
      title: "Stay Agile and Responsive to Market Demands with our Manufacturing Software",
      body: "Emphasize how your software solutions enable manufacturers to quickly adapt to changing market demands, optimize production schedules, and meet customer expectations with agility."
    },
    {
      title: "Secure Your Manufacturing Operations with Robust Software Solutions",
      body: "Highlight the robust security features of your software, showcasing how it protects sensitive manufacturing data, intellectual property, and trade secrets from cyber threats and unauthorized access."
    },
  ]
}
