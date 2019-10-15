import { Component, OnInit } from '@angular/core';
import {Utente} from './utente';
import {AutenticazioneUtenteService} from './autenticazione-utente.service';

@Component({
  selector: 'app-login-utente',
  templateUrl: './login-utente.component.html',
  styleUrls: ['./login-utente.component.css']
})
export class LoginUtenteComponent implements OnInit {

  private utenteLoggato: Utente;
  private utenteInput: Utente = new Utente();

  constructor(private autenticazione: AutenticazioneUtenteService) { }

  ngOnInit() {
  }

  public registrazioneUtente() {
    console.log('ok');
    console.log(this.utenteInput.username, this.utenteInput.password);
    this.autenticazione.add(this.utenteInput.username, this.utenteInput.password);
    window.location.reload();
  }

  public loginUtente() {
    console.log(this.utenteInput.username, this.utenteInput.password);
    this.autenticazione.verify(this.utenteInput.username, this.utenteInput.password)
      .subscribe(utente => {
        if (utente) {
          console.log('verificato');
          this.utenteLoggato = new Utente();
          this.utenteLoggato.username = this.utenteInput.username;
          this.utenteLoggato.password = this.utenteInput.password;
          this.autenticazione.go(this.utenteLoggato);
        } else {
          alert('Questo utente non esiste');
        }
      });
  }
}
