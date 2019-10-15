import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Utente} from './utente';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AutenticazioneUtenteService {

  private urlLogin = 'http://localhost:8080/PrenotazioneVolo/rest/utentes';
  private utente: Utente;

  constructor(private http: HttpClient, private router: Router) { }

  public verify(username: string, password: string): Observable<Utente> {
    return this.http.get<Utente>(this.urlLogin + '/' + username + '-' + password);
  }

  public add(username: string, password: string) {
    this.utente = new Utente();
    this.utente.username = username;
    this.utente.password = password;
    this.http.post(this.urlLogin, this.utente, httpOptions)
      .subscribe(() => {});
  }

  public go(utente: Utente) {
    /*console.log(typeof amministratore);
    console.log(typeof amministratore.username);
    console.log(typeof amministratore.password);*/
    this.router.navigate([ '/utente', utente.username]);
  }

  public listAll(): Observable<Utente[]> {
    return this.http.get<Utente[]>(this.urlLogin);
  }
}
