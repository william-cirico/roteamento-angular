import { Injectable } from '@angular/core';

export interface Cliente {
  id: number;
  nome: string;
  cidade: string;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private clientes: Cliente[] = [
    { id: 1, nome: "William", cidade: "Blumenau", estado: "SC" },
    { id: 2, nome: "João", cidade: "Timbó", estado: "SC" },
    { id: 3, nome: "Maria", cidade: "Indaial", estado: "SC" },
  ];

  getClientes(): Cliente[] {
    return this.clientes;
  }

  getClienteById(id: number): Cliente | undefined {
    return this.clientes.find(c => c.id === id);
  }
}
