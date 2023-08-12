import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadaPaginaComponent } from './privada-pagina.component';

describe('PrivadaPaginaComponent', () => {
  let component: PrivadaPaginaComponent;
  let fixture: ComponentFixture<PrivadaPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivadaPaginaComponent]
    });
    fixture = TestBed.createComponent(PrivadaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
