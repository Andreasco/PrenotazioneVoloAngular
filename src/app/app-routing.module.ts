import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginAmministratoreComponent} from './login-amministratore/login-amministratore.component';
import {DashboardAmministratoreComponent} from './dashboard-amministratore/dashboard-amministratore.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path : 'amministratore' , component : LoginAmministratoreComponent},
  { path : 'amministratore/:username' , component : DashboardAmministratoreComponent},
  { path : '' , component : HomeComponent},
  { path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
