import { Component } from '@angular/core';

@Component({
  selector: 'app-quality-management-system',
  templateUrl: './quality-management-system.component.html',
  styleUrls: ['./quality-management-system.component.css']
})
export class QualityManagementSystemComponent {

  listOfBenefits = [
    {
      title: "Tailored to Your Needs:",
      icon: "photo_filter",
      body: `
        Our custom QMS software is designed to fit your manufacturing company's specific
                requirements and processes. We work closely with you to understand your workflow, quality control procedures, and
                regulatory compliance needs to develop a solution that perfectly aligns with your business.
      `
    },
    {
      title: "Improved Quality Control:",
      icon: "task_alt",
      body: `
      With our QMS software, you gain better control over your manufacturing processes. The
                system allows you to define and enforce quality standards, ensuring consistent product quality, reduced defects, and
                customer satisfaction.
      `
    },
    {
      title: "Real-time Data Analysis:",
      icon: "insights",
      body: `
      Our QMS software provides real-time data collection and analysis, empowering you with
      actionable insights. Monitor key performance indicators (KPIs), track production metrics, and identify areas for
      improvement to make informed decisions quickly.
      `
    },
    {
      title: "Enhanced Traceability:",
      icon: "content_paste_search",
      body: `
      Traceability is crucial in manufacturing, especially for industries with strict
      regulations. Our QMS software enables comprehensive traceability throughout the production lifecycle, helping you
      identify the source of issues, conduct effective recalls if necessary, and maintain compliance with industry standards.
      `
    },
    {
      title: "Compliance Management:",
      icon: "assured_workload",
      body: `
      Meeting regulatory requirements is a priority for manufacturing companies. Our custom QMS
      software incorporates compliance management features, ensuring adherence to industry standards (ISO, FDA, etc.) and
      simplifying the auditing process.
      `
    },
    {
      title: "Supplier Quality Management:",
      icon: "manage_search",
      body: `
      Collaborate more effectively with your suppliers using our QMS software. Monitor
      supplier performance, evaluate their quality records, and build stronger relationships to ensure the delivery of
      high-quality raw materials and components.
      `
    },
    {
      title: "Risk Assessment and Mitigation:",
      icon: "analytics",
      body: `
      Identify potential risks in your manufacturing processes and supply chain with
      our QMS software. Proactively address these risks to prevent costly quality issues and disruptions.
      `
    },
    {

      title: "Efficient Document Management:",
      icon: "task",
      body: `
      Our QMS software provides a centralized platform for document management, making
      it easier to store, organize, and access quality-related documents such as standard operating procedures (SOPs), work
      instructions, and training materials.
      `
    },
    {
      title: "Continuous Improvement:",
      icon: "thumb_up",
      body: `
      Foster a culture of continuous improvement within your manufacturing company using our
      QMS software. Encourage feedback, track corrective actions, and implement preventive measures to drive ongoing quality
      enhancements.
      `
    },
    {
      title: "Cost Savings:",
      icon: "attach_money",
      body: `
      Investing in our custom QMS software can lead to significant cost savings over time. By reducing
      waste, minimizing defects, and optimizing processes, you can improve overall operational efficiency and bottom-line
      performance.
      `
    }
  ]
}
