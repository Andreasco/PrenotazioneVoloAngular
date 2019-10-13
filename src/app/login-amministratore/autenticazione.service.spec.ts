import { TestBed } from '@angular/core/testing';

import { AutenticazioneService } from './autenticazione.service';

describe('AutenticazioneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticazioneService = TestBed.get(AutenticazioneService);
    expect(service).toBeTruthy();
  });
});
