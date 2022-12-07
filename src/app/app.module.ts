import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoComponent } from './photo/photo.component';
import { ViewallphotoComponent } from './viewallphoto/viewallphoto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const myroutes:Routes=[
  {path:"",component: PhotoComponent},
  {path:"viewallphoto",component: ViewallphotoComponent}



]

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    ViewallphotoComponent,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
