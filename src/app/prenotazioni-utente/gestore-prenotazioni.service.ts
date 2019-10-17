import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Prenotazione} from '../dashboard-utente/prenotazione';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestorePrenotazioniService {

  private urlPrenotazione = 'http://localhost:8080/PrenotazioneVolo/rest/prenotaziones';

  constructor(private http: HttpClient, private router: Router) { }

  public getUsernameUtente(): string {
    return this.router.url.split('/')[2].toString();
  }

  public getPrenotazioniUtente(): Observable<Prenotazione[]> {
    const username = this.getUsernameUtente();
    return this.http.get<Prenotazione[]>(this.urlPrenotazione + '/' + username);
  }

  public cancellaPrenotazione(idPrenotazione: number) {
    this.http.delete(this.urlPrenotazione + '/' + idPrenotazione).subscribe(() => {});
  }
}
