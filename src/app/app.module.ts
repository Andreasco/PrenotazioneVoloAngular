import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginAmministratoreComponent } from './login-amministratore/login-amministratore.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {DpDatePickerModule} from 'ng2-date-picker';
import { DashboardAmministratoreComponent } from './dashboard-amministratore/dashboard-amministratore.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardUtenteComponent } from './dashboard-utente/dashboard-utente.component';
import { LoginUtenteComponent } from './login-utente/login-utente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginAmministratoreComponent,
    DashboardAmministratoreComponent,
    PageNotFoundComponent,
    DashboardUtenteComponent,
    LoginUtenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DpDatePickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
