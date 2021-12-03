import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { DriverspageComponent } from './driverspage/driverspage.component';
import { HomeComponent } from './home/home.component';
import { TeampageComponent } from './teampage/teampage.component'
import { DriverformComponent } from './driverform/driverform.component';
const routes: Routes = [
{path:"team", component:TeampageComponent},
{path:"about", component:AboutpageComponent},
{path:"drivers", component:DriverspageComponent},
{path:"driverform", component:DriverformComponent},
{path:"home", component:HomeComponent},
{path:"", redirectTo:"/home", pathMatch:'full'},
{path:"**", redirectTo:"/home", pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
