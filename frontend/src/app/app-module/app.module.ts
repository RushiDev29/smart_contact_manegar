import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { AddContactComponent } from './user-dashbord/add-contact/add-contact.component';
import { UpdateContactComponent } from './user-dashbord/update-contact/update-contact.component';
import { DeleteContactComponent } from './user-dashbord/delete-contact/delete-contact.component';
import { ShowContactComponent } from './user-dashbord/show-contact/show-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrationComponent,
    HomePageComponent,
    LoginComponent,
    AboutComponent,
    UserDashbordComponent,
    AddContactComponent,
    UpdateContactComponent,
    DeleteContactComponent,
    ShowContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
