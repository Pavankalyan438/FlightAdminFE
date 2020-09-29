import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminoperationsComponent } from './adminoperations/adminoperations.component';
import { AddflightComponent } from './addflight/addflight.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { AllflightsComponent } from './allflights/allflights.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminoperationsComponent,
    AddflightComponent,
    SearchflightComponent,
    UpdateflightComponent,
    AllflightsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [HttpClient],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
