import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

const appRoutes:Routes=[
  {path:"buy",component:PropertyListComponent},
  //{path:"**",component:PropertyListComponent},
  {path:"rent",component:PropertyListComponent},
  {path:"add-property",component:AddPropertyComponent},
  {path:"detail/:id",component:PropertyDetailComponent},
  {path:"user/login",component:UserLoginComponent},
  {path:"user/register",component:UserRegisterComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyCardComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxGalleryModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
