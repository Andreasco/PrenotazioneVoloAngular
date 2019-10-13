import { Injectable } from '@angular/core';
import {Amministratore} from '../login-amministratore/amministratore';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Aeroporto} from './aeroporto';
import {Tratta} from './tratta';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServizioDashboardAmministratoreService {

  private urlAeroporto = 'http://localhost:8080/PrenotazioneVolo/rest/aeroportos';
  private urlAmministratore = 'http://localhost:8080/PrenotazioneVolo/rest/amministratores';
  private urlTratta = 'http://localhost:8080/PrenotazioneVolo/rest/trattas';

  constructor(private http: HttpClient, private router: Router) { }

  public listAllAeroporti(): Observable<Aeroporto[]> {
    return this.http.get<Aeroporto[]>(this.urlAeroporto);
  }

  public listAllTratte(): Observable<Tratta[]> {
    return this.http.get<Tratta[]>(this.urlTratta);
  }

  public addAeroporto(aeroporto: Aeroporto) {
    this.http.post(this.urlAeroporto, aeroporto, httpOptions)
      .subscribe(() => {});
  }

  public addTratta(tratta: Tratta) {
    this.http.post(this.urlTratta, tratta, httpOptions)
      .subscribe(() => {});
  }

  public getAmministratore() {
    const username = this.router.url.split('/')[2].toString();
    return this.http.get<Amministratore>(this.urlAmministratore + '/' + username);
  }
}
