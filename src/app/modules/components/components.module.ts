import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../components/home/home.component';
import { AboutComponent } from '../../components/about/about.component';
import { HelpComponent } from '../../components/help/help.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { BasicnavComponent } from '../../components/basicnav/basicnav.component';
import { RouterModule } from '@angular/router';
import { AccountmainComponent } from '../../components/account/accountmain/accountmain.component';
import { SettingsComponent } from '../../components/account/settings/settings.component';
import { DashboardComponent } from '../../components/account/dashboard/dashboard.component';
import { ProfileComponent } from '../../components/account/profile/profile.component';
import { AccountComponent } from '../../components/account/account.component';
import { MaterialModule } from '../material/material.module';
import { LoginComponent } from '../../components/login/login.component';
import { CategoriesComponent } from '../../components/home/categories/categories.component';
import { CalculatorComponent } from '../../components/calculator/calculator.component';
import { BlogComponent } from '../../components/blog/blog.component';
import { HomeMainComponent } from '../../components/home/home-main/home-main.component';
import { PrivacyNoticeComponent } from '../../components/privacy-notice/privacy-notice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustommesComponent } from '../../components/custommes/custommes.component';
import { CustomInventoryManagementComponent } from '../../components/custom-inventory-management/custom-inventory-management.component';
import { QualityManagementSystemComponent } from '../../components/quality-management-system/quality-management-system.component';
import { YourVisionComponent } from '../../components/your-vision/your-vision.component';
import { OvercomingObstaclesComponent } from '../../components/overcoming-obstacles/overcoming-obstacles.component';
import { AllowCookiesComponent } from '../../components/allow-cookies/allow-cookies.component';
import { ArticlesComponent } from '../../components/articles/articles.component';
import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';
import { DemoComponent } from 'src/app/components/demo/demo.component';
import { TestComponent } from '../../components/test/test.component';
import { HomeSection1Component } from '../../components/home/home-section1/home-section1.component';
import { AboutSection1Component } from '../../components/about/about-section1/about-section1.component';
import { AboutSection2Component } from '../../components/about/about-section2/about-section2.component';
import { AboutSection3Component } from '../../components/about/about-section3/about-section3.component';
import { HomeSection2Component } from '../../components/home/home-section2/home-section2.component';
import { TmsShowcaseComponent } from '../../components/tms-showcase/tms-showcase.component';
import { PreventiveMaintenanceShowcaseComponent } from '../../components/preventive-maintenance-showcase/preventive-maintenance-showcase.component';
import { InventoryManagementShowcaseComponent } from '../../components/inventory-management-showcase/inventory-management-showcase.component';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    HelpComponent,
    ContactComponent,
    BasicnavComponent,
    AccountmainComponent,
    SettingsComponent,
    DashboardComponent,
    ProfileComponent,
    AccountComponent,
    LoginComponent,
    CategoriesComponent,
    CalculatorComponent,
    BlogComponent,
    HomeMainComponent,
    PrivacyNoticeComponent,
    CustommesComponent,
    CustomInventoryManagementComponent,
    QualityManagementSystemComponent,
    YourVisionComponent,
    OvercomingObstaclesComponent,
    AllowCookiesComponent,
    ArticlesComponent,
    PageNotFoundComponent,
    DemoComponent,
    TestComponent,
    HomeSection1Component,
    AboutSection1Component,
    AboutSection2Component,
    AboutSection3Component,
    HomeSection2Component,
    TmsShowcaseComponent,
    PreventiveMaintenanceShowcaseComponent,
    InventoryManagementShowcaseComponent,
    SafeUrlPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
