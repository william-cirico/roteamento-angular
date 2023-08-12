import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesPaginaComponent } from './clientes-pagina.component';

describe('ClientesPaginaComponent', () => {
  let component: ClientesPaginaComponent;
  let fixture: ComponentFixture<ClientesPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesPaginaComponent]
    });
    fixture = TestBed.createComponent(ClientesPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
