import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginAmministratoreComponent} from './login-amministratore/login-amministratore.component';
import {DashboardAmministratoreComponent} from './dashboard-amministratore/dashboard-amministratore.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DashboardUtenteComponent} from './dashboard-utente/dashboard-utente.component';
import {LoginUtenteComponent} from './login-utente/login-utente.component';
import {PrenotazioniUtenteComponent} from './prenotazioni-utente/prenotazioni-utente.component';


const routes: Routes = [
  { path : 'amministratore' , component : LoginAmministratoreComponent},
  { path : 'utente' , component : LoginUtenteComponent},
  { path : 'amministratore/:username' , component : DashboardAmministratoreComponent},
  { path : 'utente/:username' , component : DashboardUtenteComponent},
  { path : 'utente/:username/prenotazioni' , component : PrenotazioniUtenteComponent},
  { path : '' , component : HomeComponent},
  { path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
