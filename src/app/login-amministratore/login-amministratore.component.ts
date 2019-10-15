import { Component, OnInit } from '@angular/core';
import {Amministratore} from './amministratore';
import {AutenticazioneAmministratoreService} from './autenticazione-amministratore.service';

@Component({
  selector: 'app-login-amministratore',
  templateUrl: './login-amministratore.component.html',
  styleUrls: ['./login-amministratore.component.css']
})
export class LoginAmministratoreComponent implements OnInit {

  private amministratoreLoggato: Amministratore;
  // private amministratori: Amministratore[];
  private ammInput: Amministratore = new Amministratore();

  constructor(private autenticazione: AutenticazioneAmministratoreService) { }

  ngOnInit() {
    // this.autenticazione.listAll().subscribe(admins => this.amministratori = admins);
  }

  public registrazioneAdmin() {
    console.log('ok');
    console.log(this.ammInput.username, this.ammInput.password);
    this.autenticazione.add(this.ammInput.username, this.ammInput.password);
    window.location.reload();
  }

  public loginAdmin() {
    console.log(this.ammInput.username, this.ammInput.password);
    this.autenticazione.verify(this.ammInput.username, this.ammInput.password)
      .subscribe(amministratore => {
        if (amministratore) {
          console.log('verificato');
          this.amministratoreLoggato = new Amministratore();
          this.amministratoreLoggato.username = this.ammInput.username;
          this.amministratoreLoggato.password = this.ammInput.password;
          this.autenticazione.go(this.amministratoreLoggato);
        } else {
          alert('Questo amministratore non esiste');
        }
      });
  }
}
