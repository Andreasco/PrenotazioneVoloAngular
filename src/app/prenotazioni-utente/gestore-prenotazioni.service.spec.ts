import { TestBed } from '@angular/core/testing';

import { GestorePrenotazioniService } from './gestore-prenotazioni.service';

describe('GestorePrenotazioniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestorePrenotazioniService = TestBed.get(GestorePrenotazioniService);
    expect(service).toBeTruthy();
  });
});
