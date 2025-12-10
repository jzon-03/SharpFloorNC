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
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',
  component:HomeComponent,
  children:[
    {path:'',component:HomeMainComponent},
    {path:'contact', redirectTo:'contactus', pathMatch:'prefix'},
    {path:'about',component:AboutComponent},
    {path:'custommes',component:CustommesComponent},
    {path:'custominventory',component:CustomInventoryManagementComponent},
    {path:'qms',component:QualityManagementSystemComponent},
    {path:'qms-demo',component:QmsShowcaseComponent},
    {path:'tms-demo',component:TmsShowcaseComponent},
    {path:'preventive-maintenance-demo',component:PreventiveMaintenanceShowcaseComponent},
    {path:'inventory-management-demo',component:InventoryManagementShowcaseComponent},
    {path:'contactus',component:ContactComponent},
    {path:'articles',component:ArticlesComponent},
    {path:'privacy',component:PrivacyNoticeComponent},
    {path:'tools',component:ToolsComponent},
  ]
},
// {path:'**',component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
