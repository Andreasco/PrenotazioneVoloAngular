import { Component, OnInit } from '@angular/core';
import {Tratta} from '../dashboard-amministratore/tratta';
import {Volo} from '../dashboard-amministratore/volo';

@Component({
  selector: 'app-dashboard-utente',
  templateUrl: './dashboard-utente.component.html',
  styleUrls: ['./dashboard-utente.component.css']
})
export class DashboardUtenteComponent implements OnInit {

  private tratteAttuali: Tratta[];
  private aeroportoRicerca: string;
  private trattaSelezionata: Tratta;
  private showDettaglio: boolean;
  private voloSelezionato: Volo;
  private nPostiScelti = -1;
  private postiDisponibili: number[];

  constructor() { }

  ngOnInit() {
    this.showDettaglio = true;
  }

  public convertiTimestamp(timestamp: number) {
    const date = new Date(timestamp);
    return date.toString();
  }

  public selezionaVolo(volo: Volo) {
    this.voloSelezionato = volo;
    for (let i = 0; i < this.voloSelezionato.postiDisponibili; i++) {
      this.postiDisponibili.push(i);
    }
  }

  // TODO implementare i metodi che ho scritto nel file HTML e creare la visualizzazione dinamica delle tratte
  // in base alla ricerca
}
