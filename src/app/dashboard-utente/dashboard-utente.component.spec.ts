import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUtenteComponent } from './dashboard-utente.component';

describe('DashboardUtenteComponent', () => {
  let component: DashboardUtenteComponent;
  let fixture: ComponentFixture<DashboardUtenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUtenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
