import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesClientePaginaComponent } from './detalhes-cliente-pagina.component';

describe('DetalhesClientePaginaComponent', () => {
  let component: DetalhesClientePaginaComponent;
  let fixture: ComponentFixture<DetalhesClientePaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesClientePaginaComponent]
    });
    fixture = TestBed.createComponent(DetalhesClientePaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
