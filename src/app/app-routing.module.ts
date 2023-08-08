import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { AccountmainComponent } from './components/account/accountmain/accountmain.component';
import { DashboardComponent } from './components/account/dashboard/dashboard.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { SettingsComponent } from './components/account/settings/settings.component';
import { ContactComponent } from './components/contact/contact.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { PrivacyNoticeComponent } from './components/privacy-notice/privacy-notice.component';
import { CustommesComponent } from './components/custommes/custommes.component';
import { CustomInventoryManagementComponent } from './components/custom-inventory-management/custom-inventory-management.component';
import { QualityManagementSystemComponent } from './components/quality-management-system/quality-management-system.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
    {path:'privacy',component:PrivacyNoticeComponent},
  ]
},
{path:'**',component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
