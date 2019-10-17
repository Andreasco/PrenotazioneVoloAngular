import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Utente} from '../login-utente/utente';
import {Observable} from 'rxjs';
import {Tratta} from '../dashboard-amministratore/tratta';
import {Volo} from '../dashboard-amministratore/volo';
import {Prenotazione} from './prenotazione';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServizioPrenotazioneService {

  private urlUtente = 'http://localhost:8080/PrenotazioneVolo/rest/utentes';
  private urlTratta = 'http://localhost:8080/PrenotazioneVolo/rest/trattas';
  private urlVolo = 'http://localhost:8080/PrenotazioneVolo/rest/volos';
  private urlPrenotazione = 'http://localhost:8080/PrenotazioneVolo/rest/prenotaziones';

  constructor(private http: HttpClient, private router: Router) { }

  public getUsernameUtente(): string {
    return this.router.url.split('/')[2].toString();
  }

  public getUtente() {
    const username = this.router.url.split('/')[2].toString();
    return this.http.get<Utente>(this.urlUtente + '/' + username);
  }

  public listAllTratte(): Observable<Tratta[]> {
    return this.http.get<Tratta[]>(this.urlTratta);
  }

  public getVoliByTratta(aeroportoPartenza: string, aeroportoDestinazione: string): Observable<Volo[]> {
    return this.http.get<Volo[]>(this.urlVolo + '/' + aeroportoPartenza + '-' + aeroportoDestinazione);
  }

  public getTratteByAeroportoPartenza(aeroportoPartenza: string) {
    return this.http.get<Tratta[]>(this.urlTratta + '/aeroportoPartenza=' + aeroportoPartenza);
  }

  public prenota(prenotazione: Prenotazione) {
    this.http.post(this.urlPrenotazione, prenotazione, httpOptions).subscribe(() => {});
  }

  public goPrenotazioni() {
    const utente = this.getUsernameUtente();
    this.router.navigate(['/utente', utente, 'prenotazioni']);
  }
}
