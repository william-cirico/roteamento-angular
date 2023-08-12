import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesPaginaComponent } from './clientes-pagina/clientes-pagina.component';
import { DetalhesClientePaginaComponent } from './detalhes-cliente-pagina/detalhes-cliente-pagina.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { NaoEncontradaPaginaComponent } from './nao-encontrada-pagina/nao-encontrada-pagina.component';
import { LoginPaginaComponent } from './login-pagina/login-pagina.component';
import { PrivadaPaginaComponent } from './privada-pagina/privada-pagina.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "/primeira-pagina", pathMatch: "full" },
  { path: "primeira-pagina", component: PrimeiraPaginaComponent },
  { path: "segunda-pagina", component: SegundaPaginaComponent },
  { path: "clientes", component: ClientesPaginaComponent },
  { path: "clientes/:id", component: DetalhesClientePaginaComponent },
  { path: "lazy-loading", loadChildren: () => import("./lazy-loading/lazy-loading.module").then(m => m.LazyLoadingModule) },
  { path: "login", component: LoginPaginaComponent },
  { path: "pagina-privada", component: PrivadaPaginaComponent, canActivate: [authGuard] },
  { path: "**", component: NaoEncontradaPaginaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
