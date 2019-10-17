import { Component, OnInit } from '@angular/core';
import {Tratta} from '../dashboard-amministratore/tratta';
import {Volo} from '../dashboard-amministratore/volo';
import {Utente} from '../login-utente/utente';
import {ServizioPrenotazioneService} from './servizio-prenotazione.service';
import {Prenotazione} from './prenotazione';

@Component({
  selector: 'app-dashboard-utente',
  templateUrl: './dashboard-utente.component.html',
  styleUrls: ['./dashboard-utente.component.css']
})
export class DashboardUtenteComponent implements OnInit {

  private utenteLoggato: Utente = new Utente();
  private tratteAttuali: Tratta[];
  private aeroportoRicerca: string;
  private trattaSelezionata: Tratta;
  private voliByTratta: Volo[];
  private voloSelezionato: Volo;
  private nPostiScelti = -1;
  private postiDisponibili: number[] = [];

  constructor(private servizio: ServizioPrenotazioneService) { }

  ngOnInit() {
    this.servizio.listAllTratte().subscribe(tratte => this.tratteAttuali = tratte);
    this.servizio.getUtente().subscribe(utente => this.utenteLoggato = utente);
  }

  public convertiTimestamp(timestamp: number) {
    const date = new Date(timestamp);
    return date.toString();
  }

  public selezionaVolo(volo: Volo) {
    this.postiDisponibili = [];
    this.voloSelezionato = volo;
    for (let i = 0; i < this.voloSelezionato.postiDisponibili; i++) {
      this.postiDisponibili.push(i + 1);
    }
    // console.log(this.postiDisponibili);
  }

  public selezionaTratta(tratta: Tratta) {
    this.trattaSelezionata = tratta;
    const aeroportoPartenza = tratta.aeroportoPartenza.nome;
    const aeroportoDestinazione = tratta.aeroportoDestinazione.nome;
    this.servizio.getVoliByTratta(aeroportoPartenza, aeroportoDestinazione).subscribe(voli => this.voliByTratta = voli);
  }

  public cercaTratte() {
    this.servizio.getTratteByAeroportoPartenza(this.aeroportoRicerca).subscribe(tratte => this.tratteAttuali = tratte);
    if (this.aeroportoRicerca === '') {
      this.servizio.listAllTratte().subscribe(tratte => this.tratteAttuali = tratte);
    }
  }

  public prenota() {
    const prenotazione = new Prenotazione();
    prenotazione.volo = this.voloSelezionato;
    prenotazione.numeroPosti = this.nPostiScelti;
    prenotazione.utente = this.utenteLoggato;
    this.servizio.prenota(prenotazione);
    alert('La prenotazione è stata aggiunta, trovi i dettagli e il codice della prenotazione nel tuo elenco prenotazioni');
    window.location.reload();
  }

  public goPrenotazioni() {
    this.servizio.goPrenotazioni();
  }
}
