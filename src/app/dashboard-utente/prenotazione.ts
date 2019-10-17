import {Volo} from '../dashboard-amministratore/volo';
import {Utente} from '../login-utente/utente';

export class Prenotazione {
  public id: number;
  public volo: Volo;
  public utente: Utente;
  public numeroPosti: number;
  public prezzoPrenotazione: number;
  public codicePrenotazione: string;

  constructor() {
  }
}
