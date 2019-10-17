import { Component, OnInit } from '@angular/core';
import {Prenotazione} from '../dashboard-utente/prenotazione';
import {GestorePrenotazioniService} from './gestore-prenotazioni.service';

@Component({
  selector: 'app-prenotazioni-utente',
  templateUrl: './prenotazioni-utente.component.html',
  styleUrls: ['./prenotazioni-utente.component.css']
})
export class PrenotazioniUtenteComponent implements OnInit {

  private prenotazioni: Prenotazione[];
  private prenotazioneSelezionata: Prenotazione;
  private utente: string;

  constructor(private servizio: GestorePrenotazioniService) { }

  ngOnInit() {
    this.servizio.getPrenotazioniUtente().subscribe(prenotazioni => this.prenotazioni = prenotazioni);
    this.utente = this.servizio.getUsernameUtente();
  }

  public convertiTimestamp(timestamp: number) {
    const date = new Date(timestamp);
    return date.toString();
  }

  public cancellaPrenotazione() {
    this.servizio.cancellaPrenotazione(this.prenotazioneSelezionata.id);
    window.location.reload();
  }
}
