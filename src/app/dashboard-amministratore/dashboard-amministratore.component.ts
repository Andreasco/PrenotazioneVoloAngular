import {Component, OnInit} from '@angular/core';
import {Aeroporto} from './aeroporto';
import {ServizioDashboardAmministratoreService} from './servizio-dashboard-amministratore.service';
import {Tratta} from './tratta';
import {Amministratore} from '../login-amministratore/amministratore';
import {Volo} from './volo';
import {ECalendarValue, IDatePickerConfig} from 'ng2-date-picker';

@Component({
  selector: 'app-dashboard-amministratore',
  templateUrl: './dashboard-amministratore.component.html',
  styleUrls: ['./dashboard-amministratore.component.css']
})
export class DashboardAmministratoreComponent implements OnInit {
  /*
   * La console darà diversi errori sul fatto che trattaSelezionata.aeroportoPartenza(o destinazione).nome
   * non è definito perchè giustamente trattaSelezionata non ha nessun aeroporto all'interno al momento dell'inizializzazione
   * ma se provo a sistemare questo problema non si vede bene il datepicker, grazie Angular.
   */

  private amministratore: Amministratore = new Amministratore();
  private aeroporti: Aeroporto[];
  private tratte: Tratta[];
  private voliByTratta: Volo[];
  private aerInput: Aeroporto = new Aeroporto();
  private aerPartInput: Aeroporto = new Aeroporto();
  private aerDestInput: Aeroporto = new Aeroporto();
  private dataPartenzaVolo: string;
  private dataArrivoVolo: string;
  private voloInput: Volo = new Volo();
  private showVoli: boolean; // non funziona se lo uso con ngif
  private trattaSelezionata: Tratta = new Tratta();
  private traSelezionata: boolean;
  private aeroportoSelezionato: Aeroporto = new Aeroporto();
  private voloSelezionato: Volo = new Volo();
  private config: IDatePickerConfig = {
    format: 'DD-MM-YYYY HH:MM:SS',
    returnedValueType: ECalendarValue.String,
  };

  constructor(private servizio: ServizioDashboardAmministratoreService) { }

  ngOnInit() {
    this.servizio.listAllAeroporti().subscribe(aeroporti => this.aeroporti = aeroporti);
    this.servizio.listAllTratte().subscribe(tratte => this.tratte = tratte);
    this.servizio.getAmministratore().subscribe(admin => this.amministratore = admin);
    this.traSelezionata = false;
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
    // alert(this.aerPartInput.nome + '-' + this.aerPartInput.citta);
  }

  public getVoliByTratta(tratta: Tratta) {
    this.trattaSelezionata = tratta;
    this.traSelezionata = true;
    const aP = tratta.aeroportoPartenza.nome;
    const aD = tratta.aeroportoDestinazione.nome;
    this.servizio.findVoliByTratta(aP, aD).subscribe(voli => this.voliByTratta = voli);
    this.showVoli = true;
  }

  public cancellaAeroporto() {
    this.servizio.cancellaAeroporto(this.aeroportoSelezionato.nome);
    window.location.reload();
  }

  public cancellaTratta() {
    if (this.traSelezionata) {
      this.servizio.cancellaTratta(this.trattaSelezionata.aeroportoPartenza.nome, this.trattaSelezionata.aeroportoDestinazione.nome);
      window.location.reload();
    }
  }

  public aggiungiVolo() {
    const volo = new Volo();
    volo.prezzo = this.voloInput.prezzo;
    volo.tratta = this.trattaSelezionata;

    const arrayDataPartenza = this.dataPartenzaVolo.split(' ');
    const partenzaDDMMYYY = arrayDataPartenza[0].split('-');
    const partenzaHHMMSS = arrayDataPartenza[1].split(':');
    const dataPartenza = new Date(+partenzaDDMMYYY[2], +partenzaDDMMYYY[1] - 1, +partenzaDDMMYYY[0], +partenzaHHMMSS[0],
                                  +partenzaHHMMSS[1], +partenzaHHMMSS[2]);

    const arrayDataArrivo = this.dataArrivoVolo.split(' ');
    const arrivoDDMMYYY = arrayDataArrivo[0].split('-');
    const arrivoHHMMSS = arrayDataArrivo[1].split(':');
    const dataArrivo = new Date(+arrivoDDMMYYY[2], +arrivoDDMMYYY[1] - 1, +arrivoDDMMYYY[0], +arrivoHHMMSS[0],
                                +arrivoHHMMSS[1], +arrivoHHMMSS[2]);

    volo.dataPartenza = dataPartenza.getTime();
    volo.dataArrivo = dataArrivo.getTime();
    this.servizio.addVolo(volo);
    window.location.reload();
  }

  public convertiTimestamp(timestamp: number) {
    const date = new Date(timestamp);
    return date.toString();
  }

  public selezionaVolo(volo: Volo) {
    this.voloSelezionato = volo;
  }

  public cancellaVolo() {
    this.servizio.cancellaVolo(this.voloSelezionato.id);
    window.location.reload();
  }
}
