import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteModel } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {

  cliente: ClienteModel = new ClienteModel()
  isUpdate: boolean

  constructor(private serviceCliente: ClienteService, private route: ActivatedRoute,private router: Router,private service: ClienteService) { }

  ngOnInit(): void {
    this.isUpdate = false
    this.route.paramMap.subscribe(params => {
      if(params.get('id') != params.get('cadastrar')){
        this.cliente.id = params.get('id') || ""
        this.serviceCliente.findById(this.cliente.id).subscribe(
          obj => {
            this.cliente = obj
            this.isUpdate = true
          }
        )
      }
    })
  }

  delete(id: string) {
    this.serviceCliente.delete(id).subscribe(x => this.router.navigate(['/clientes']))
  }

  save(cliente: ClienteModel){
    this.service.save(cliente).subscribe(x => this.router.navigate(['/clientes']));
  }

  update(cliente: ClienteModel){
    this.service.update(cliente).subscribe(x => this.router.navigate(['/clientes']));
  }
  
}
