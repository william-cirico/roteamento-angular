import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoEncontradaPaginaComponent } from './nao-encontrada-pagina.component';

describe('NaoEncontradaPaginaComponent', () => {
  let component: NaoEncontradaPaginaComponent;
  let fixture: ComponentFixture<NaoEncontradaPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaoEncontradaPaginaComponent]
    });
    fixture = TestBed.createComponent(NaoEncontradaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
