import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { HomeMainComponent } from './components/home/home-main/home-main.component';
import { PrivacyNoticeComponent } from './components/privacy-notice/privacy-notice.component';
import { CustommesComponent } from './components/custommes/custommes.component';
import { CustomInventoryManagementComponent } from './components/custom-inventory-management/custom-inventory-management.component';
import { QualityManagementSystemComponent } from './components/quality-management-system/quality-management-system.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TmsShowcaseComponent } from './components/tms-showcase/tms-showcase.component';
import { PreventiveMaintenanceShowcaseComponent } from './components/preventive-maintenance-showcase/preventive-maintenance-showcase.component';
import { InventoryManagementShowcaseComponent } from './components/inventory-management-showcase/inventory-management-showcase.component';
import { QmsShowcaseComponent } from './components/qms-showcase/qms-showcase.component';
import { ToolsComponent } from './components/tools/tools.component';

const routes: Routes = [
  // Root redirect to home
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  
  // All routes use HomeComponent as layout wrapper
  {
    path: '',
    component: HomeComponent,
    children: [
      // Home page
      {path: 'home', component: HomeMainComponent},
      
      // About & Contact
      {path: 'about', component: AboutComponent},
      {path: 'contact', redirectTo: 'contactus', pathMatch: 'full'},
      {path: 'contactus', component: ContactComponent},
      
      // Products/Services
      {path: 'custommes', component: CustommesComponent},
      {path: 'custominventory', component: CustomInventoryManagementComponent},
      {path: 'qms', component: QualityManagementSystemComponent},
      
      // Demos/Showcases
      {path: 'qms-demo', component: QmsShowcaseComponent},
      {path: 'tms-demo', component: TmsShowcaseComponent},
      {path: 'preventive-maintenance-demo', component: PreventiveMaintenanceShowcaseComponent},
      {path: 'inventory-management-demo', component: InventoryManagementShowcaseComponent},
      
      // Tools
      {path: 'tools', component: ToolsComponent},
      {path: 'tools/tap-drill', component: ToolsComponent, data: {tab: 'tap-drill'}},
      {path: 'tools/speeds-feeds', component: ToolsComponent, data: {tab: 'speeds-feeds'}},
      {path: 'tools/calculators', component: ToolsComponent, data: {tab: 'calculators'}},
      {path: 'tools/material-charts', component: ToolsComponent, data: {tab: 'material-charts'}},
      
      // Content
      {path: 'articles', component: ArticlesComponent},
      {path: 'privacy', component: PrivacyNoticeComponent},
      
      // 404 - Keep commented or uncomment when ready
      // {path: '**', component: PageNotFoundComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
