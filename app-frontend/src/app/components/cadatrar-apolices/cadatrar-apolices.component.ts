import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApoliceModel } from 'src/app/models/apolice.model';
import { ClienteModel } from 'src/app/models/cliente.model';
import { ApoliceService } from 'src/app/service/apolice.service';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cadatrar-apolices',
  templateUrl: './cadatrar-apolices.component.html',
  styleUrls: ['./cadatrar-apolices.component.css']
})
export class CadatrarApolicesComponent implements OnInit {

  apolice: ApoliceModel = new ApoliceModel()
  cpf: string = ""
  cliente: ClienteModel
  isEdit: boolean

  constructor(private serviceCliente: ClienteService, private service: ApoliceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isEdit = false
    this.route.paramMap.subscribe(params => {
      if (params.get('id') != params.get('cadastrar')) {
        this.apolice.numeroApolice = params.get('id') || ""
        this.service.findByNumeroApolice(this.apolice.numeroApolice).subscribe(
          obj => {
            this.isEdit = true
            if (obj == null) {
              this.router.navigate(['/not-found'])
            } else {
              this.apolice = obj
              this.cliente = obj.cliente
            }
          }
        )
      }
    })
  }

  save(apolice: ApoliceModel) {
    this.serviceCliente.findByCpf(this.cpf).subscribe(obj => {
      apolice.clienteId = obj.id
      this.service.save(apolice).subscribe(x => this.router.navigate(['/apolices']))
    })
  }

  delete(id: string){
    this.service.delete(id).subscribe(_ => this.router.navigate(['/apolices']))
  }

  update(apolice: ApoliceModel){
    this.service.update(apolice).subscribe(_ => this.router.navigate(['/apolices']))
  }
}
