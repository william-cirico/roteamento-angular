import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { ClientesPaginaComponent } from './clientes-pagina/clientes-pagina.component';
import { DetalhesClientePaginaComponent } from './detalhes-cliente-pagina/detalhes-cliente-pagina.component';
import { NaoEncontradaPaginaComponent } from './nao-encontrada-pagina/nao-encontrada-pagina.component';
import { LoginPaginaComponent } from './login-pagina/login-pagina.component';
import { PrivadaPaginaComponent } from './privada-pagina/privada-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiraPaginaComponent,
    SegundaPaginaComponent,
    ClientesPaginaComponent,
    DetalhesClientePaginaComponent,
    NaoEncontradaPaginaComponent,
    LoginPaginaComponent,
    PrivadaPaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
