import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { PrivacyNoticeComponent } from './components/privacy-notice/privacy-notice.component';
import { CustommesComponent } from './components/custommes/custommes.component';
import { CustomInventoryManagementComponent } from './components/custom-inventory-management/custom-inventory-management.component';
import { QualityManagementSystemComponent } from './components/quality-management-system/quality-management-system.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DemoComponent } from './components/demo/demo.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',
  component:HomeComponent,
  children:[
    {path:'',component:HomeMainComponent},
    {path:'about',component:AboutComponent},
    {path:'custommes',component:CustommesComponent},
    {path:'custominventory',component:CustomInventoryManagementComponent},
    {path:'qms',component:QualityManagementSystemComponent},
    {path:'contact',component:ContactComponent},
    {path:'articles',component:ArticlesComponent},
    // {path:'demo',component:DemoComponent},
    {path:'privacy',component:PrivacyNoticeComponent},
  ]
},
{path:'test', component:TestComponent},
// {path:'**',component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
