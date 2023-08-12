import { Component } from '@angular/core';
import { Cliente, ClientesService } from '../clientes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-cliente-pagina',
  templateUrl: './detalhes-cliente-pagina.component.html',
  styleUrls: ['./detalhes-cliente-pagina.component.css']
})
export class DetalhesClientePaginaComponent {
  cliente: Cliente | undefined;

  constructor(private clientesService: ClientesService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const id = +params["id"];

      this.cliente = this.clientesService.getClienteById(id);
    });
  }
}
