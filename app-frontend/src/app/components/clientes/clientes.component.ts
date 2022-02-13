import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteModel } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: ClienteModel[]

  constructor(private router: Router, private serviceCliente: ClienteService) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll() {
    this.serviceCliente.findAll().subscribe(obj => this.clientes = obj)
  }

  detail(id: string) {
    this.router.navigate([`/clientes/${id}`])
  }

  cadastrar(){
    this.router.navigate(['/clientes/cadastrar'])
  }

}
