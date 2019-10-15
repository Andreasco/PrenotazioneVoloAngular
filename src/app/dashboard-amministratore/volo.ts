import {Tratta} from './tratta';

export class Volo {
  public id: number;
  public tratta: Tratta;
  public dataPartenza: number;
  public dataArrivo: number;
  public durata: number;
  public prezzo: number;
  public postiDisponibili: number;


  constructor() {
  }
}
