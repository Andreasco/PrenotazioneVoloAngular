import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAmministratoreComponent } from './login-amministratore.component';

describe('AreaAmministratoreComponent', () => {
  let component: LoginAmministratoreComponent;
  let fixture: ComponentFixture<LoginAmministratoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAmministratoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAmministratoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
