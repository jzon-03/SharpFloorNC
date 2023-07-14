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
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
