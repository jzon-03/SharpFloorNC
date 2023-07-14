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

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'help',component:HelpComponent},
  {path:'login',component:LoginComponent},
  {
    path:'account',
    component:AccountComponent,
    children:[
    {path:'',redirectTo:'profile',pathMatch:'full'},
    // {path:'main',component:AccountmainComponent},
    {path:'profile',component:ProfileComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'settings',component:SettingsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
