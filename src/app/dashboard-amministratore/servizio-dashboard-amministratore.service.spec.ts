import { TestBed } from '@angular/core/testing';

import { ServizioDashboardAmministratoreService } from './servizio-dashboard-amministratore.service';

describe('ServizioDashboardAmministratoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServizioDashboardAmministratoreService = TestBed.get(ServizioDashboardAmministratoreService);
    expect(service).toBeTruthy();
  });
});
