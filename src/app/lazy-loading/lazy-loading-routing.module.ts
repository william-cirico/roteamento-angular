import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading.component';
import { LazyLoadingTestePaginaComponent } from '../lazy-loading-teste-pagina/lazy-loading-teste-pagina.component';

const routes: Routes = [
  { path: '', component: LazyLoadingComponent },
  { path: 'teste', component: LazyLoadingTestePaginaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
