import { TestBed } from '@angular/core/testing';

import { AutenticazioneUtenteService } from './autenticazione-utente.service';

describe('AutenticazioneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticazioneUtenteService = TestBed.get(AutenticazioneUtenteService);
    expect(service).toBeTruthy();
  });
});
