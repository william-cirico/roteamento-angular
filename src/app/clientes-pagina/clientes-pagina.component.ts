import { Component, OnInit } from '@angular/core';
import { Cliente, ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-pagina',
  templateUrl: './clientes-pagina.component.html',
  styleUrls: ['./clientes-pagina.component.css']
})
export class ClientesPaginaComponent implements OnInit {
  constructor(private clientesService: ClientesService) {}

  clientes: Cliente[] = [];

  ngOnInit(): void {
    this.clientes = this.clientesService.getClientes();
  }
}
