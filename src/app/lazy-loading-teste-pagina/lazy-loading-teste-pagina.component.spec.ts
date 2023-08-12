import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingTestePaginaComponent } from './lazy-loading-teste-pagina.component';

describe('LazyLoadingTestePaginaComponent', () => {
  let component: LazyLoadingTestePaginaComponent;
  let fixture: ComponentFixture<LazyLoadingTestePaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyLoadingTestePaginaComponent]
    });
    fixture = TestBed.createComponent(LazyLoadingTestePaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
