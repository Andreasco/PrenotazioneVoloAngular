import { TestBed } from '@angular/core/testing';

import { ServizioPrenotazioneService } from './servizio-prenotazione.service';

describe('ServizioPrenotazioneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServizioPrenotazioneService = TestBed.get(ServizioPrenotazioneService);
    expect(service).toBeTruthy();
  });
});
