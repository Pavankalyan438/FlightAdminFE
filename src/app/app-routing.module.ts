import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddflightComponent } from './addflight/addflight.component';

import { AdminoperationsComponent } from './adminoperations/adminoperations.component';
import { AllflightsComponent } from './allflights/allflights.component';
import { LoginComponent } from './login/login.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'adminoperations',component:AdminoperationsComponent},
  {path:'addflight',component:AddflightComponent},
  {path:'searchflight',component:SearchflightComponent},
  {path:'updateflight',component:UpdateflightComponent},
  {path:'allflights',component:AllflightsComponent},
 {path: '',   redirectTo: '/login', pathMatch: 'full'}
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
