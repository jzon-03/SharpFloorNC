import { Component } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-custom-inventory-management',
  templateUrl: './custom-inventory-management.component.html',
  styleUrls: ['./custom-inventory-management.component.css'],
})
export class CustomInventoryManagementComponent {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Custom Inventory Management - Manufacturing Inventory Software',
      description: 'Custom inventory management software for manufacturing. Real-time stock tracking, automated reordering, enhanced production planning, and optimal resource allocation.',
      keywords: 'inventory management, manufacturing inventory, stock control, inventory tracking, warehouse management, material management, inventory optimization',
      type: 'article'
    });
  }

  listOfBenefits = [
    {
      title: `1. Improved Inventory Control:`,
      description: `
      Custom inventory management software allows you to gain complete control over your inventory. You can track stock levels
      in real-time, monitor usage patterns, and set automatic re-ordering thresholds. This level of precision minimizes the
      risk of overstocking or stockouts, ensuring you always have the right materials at the right time.`,
    },
    {
      title: `2. Enhanced Production Planning:`,
      description: `
      With an integrated inventory management system, you can accurately forecast demand based on historical data and customer
      trends. This data-driven approach enables your manufacturing company to plan production schedules more effectively,
      reducing lead times, and improving overall production efficiency.`,
    },
    {
      title: `3. Optimal Resource Allocation:`,
      description: `
      The software allows you to identify slow-moving or obsolete inventory, thus optimizing resource allocation. You can make
      informed decisions on how to allocate resources to the most profitable products, maximizing operational efficiency and
      minimizing waste.`,
    },
    {
      title: `4. Real-time Inventory Visibility:`,
      description: `
      Custom inventory management software provides real-time visibility into your entire inventory network. From raw
      materials to finished goods, you can monitor each item's status, location, and movement within the supply chain. This
      transparency enables you to respond quickly to changes in demand or supply disruptions, ensuring uninterrupted
      production.`,
    },
    {
      title: `5. Inventory Cost Reduction:`,
      description: `
      By streamlining inventory processes and minimizing inventory holding costs, your manufacturing company can achieve
      significant cost reductions. With better inventory control, you can reduce the need for safety stock and eliminate
      unnecessary stockpiling, ultimately freeing up valuable capital for other business investments.`,
    },
    {
      title: `6. Seamless Integration with Other Systems:`,
      description: `
      Custom inventory management software can be tailored to seamlessly integrate with your existing ERP (Enterprise Resource
      Planning) or MRP (Material Requirements Planning) systems. This integration ensures a smooth flow of information across
      departments, reducing data duplication and enhancing overall organizational efficiency.`,
    },

    {
      title: `7. Enhanced Quality Control:`,
      description: `
      The software can include quality control checkpoints at different stages of the production process, ensuring that only
      high-quality products are delivered to customers. This proactive approach minimizes defects and rework, resulting in
      improved customer satisfaction and reduced returns.`,
    },
    {
      title: `8. Scalability and Flexibility:`,
      description: `
      As your manufacturing company grows, the custom inventory management software can be easily scaled up to accommodate
      increased inventory volumes and additional manufacturing facilities. The flexibility of the solution ensures it can
      adapt to your evolving business needs without major disruptions.`,
    },
  ];
}
