import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Amministratore} from './amministratore';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AutenticazioneService {

  private urlLogin = 'http://localhost:8080/PrenotazioneVolo/rest/amministratores';
  private amministratore: Amministratore;

  constructor(private http: HttpClient, private router: Router) { }

  public verify(username: string, password: string): Observable<Amministratore> {
    return this.http.get<Amministratore>(this.urlLogin + '/' + username + '-' + password);
  }

  public add(username: string, password: string) {
    this.amministratore = new Amministratore();
    this.amministratore.username = username;
    this.amministratore.password = password;
    this.http.post(this.urlLogin, this.amministratore, httpOptions)
      .subscribe(() => {});
  }

  public go(amministratore: Amministratore) {
    /*console.log(typeof amministratore);
    console.log(typeof amministratore.username);
    console.log(typeof amministratore.password);*/
    this.router.navigate([ '/amministratore', amministratore.username]);
  }

  public listAll(): Observable<Amministratore[]> {
    return this.http.get<Amministratore[]>(this.urlLogin);
  }
}
