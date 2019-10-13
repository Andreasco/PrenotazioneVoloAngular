import { Component, OnInit } from '@angular/core';
import {Aeroporto} from './aeroporto';
import {ServizioDashboardAmministratoreService} from './servizio-dashboard-amministratore.service';
import {Tratta} from './tratta';
import {Amministratore} from '../login-amministratore/amministratore';

@Component({
  selector: 'app-dashboard-amministratore',
  templateUrl: './dashboard-amministratore.component.html',
  styleUrls: ['./dashboard-amministratore.component.css']
})
export class DashboardAmministratoreComponent implements OnInit {

  private amministratore: Amministratore;
  private aeroporti: Aeroporto[];
  private tratte: Tratta[];
  private aerInput: Aeroporto;
  private aerPartInput: Aeroporto;
  private aerDestInput: Aeroporto;

  constructor(private servizio: ServizioDashboardAmministratoreService) { }

  ngOnInit() {
    this.servizio.listAllAeroporti().subscribe(aeroporti => this.aeroporti = aeroporti);
    this.servizio.listAllTratte().subscribe(tratte => this.tratte = tratte);
    this.servizio.getAmministratore().subscribe(admin => this.amministratore = admin);
  }

  public aggiungiAeroporto() {
    this.aerInput.amministratore = this.amministratore;
    this.servizio.addAeroporto(this.aerInput);
    window.location.reload();
  }

  public aggiungiTratta() {
    const tratta = new Tratta();
    tratta.aeroportoPartenza = this.aerPartInput;
    tratta.aeroportoDestinazione = this.aerDestInput;
    this.servizio.addTratta(tratta);
    window.location.reload();
  }
}
