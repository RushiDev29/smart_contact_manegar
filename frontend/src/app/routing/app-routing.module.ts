import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { RegistrationComponent } from './registration/registration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { AddContactComponent } from './user-dashbord/add-contact/add-contact.component';
import { ShowContactComponent } from './user-dashbord/show-contact/show-contact.component';


const routes: Routes = [

  {path:'',component:HomePageComponent},
  {path:'home',component:HomePageComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:RegistrationComponent},
  {path:"userdashbord",component:UserDashbordComponent},
  {path:'addcontact',component:AddContactComponent},
  {path:'showcontact',component:ShowContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
