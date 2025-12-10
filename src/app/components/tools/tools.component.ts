import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  selectedTabIndex: number = 0;
  
  // Tab mapping for URL parameters
  private tabMap: { [key: string]: number } = {
    'tap-drill': 0,
    'speeds-feeds': 1,
    'calculators': 2,
    'material-charts': 3
  };

  private indexToTab: string[] = [
    'tap-drill',
    'speeds-feeds', 
    'calculators',
    'material-charts'
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Check for tab in route data first (for direct routes like /tools/calculators)
    this.route.data.subscribe(data => {
      if (data['tab']) {
        const tab = data['tab'];
        if (this.tabMap.hasOwnProperty(tab)) {
          this.selectedTabIndex = this.tabMap[tab];
          // Also update the URL to include the query parameter for consistency
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { tab: tab },
            queryParamsHandling: 'merge',
            replaceUrl: true
          });
        }
      }
    });

    // Also check for tab parameter in URL query params (for /home/tools?tab=calculators)
    this.route.queryParams.subscribe(params => {
      const tab = params['tab'];
      if (tab && this.tabMap.hasOwnProperty(tab)) {
        this.selectedTabIndex = this.tabMap[tab];
      }
    });
  }

  onTabChange(index: number): void {
    this.selectedTabIndex = index;
    const tabName = this.indexToTab[index];
    
    // Update URL with tab parameter
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: tabName },
      queryParamsHandling: 'merge'
    });
  }

}