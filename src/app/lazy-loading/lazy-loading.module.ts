import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyLoadingComponent } from './lazy-loading.component';
import { LazyLoadingTestePaginaComponent } from '../lazy-loading-teste-pagina/lazy-loading-teste-pagina.component';


@NgModule({
  declarations: [
    LazyLoadingComponent,
    LazyLoadingTestePaginaComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule
  ]
})
export class LazyLoadingModule { }
