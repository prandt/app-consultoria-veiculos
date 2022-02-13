import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApoliceModel } from 'src/app/models/apolice.model';
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

  constructor(private serviceCliente: ClienteService, private service: ApoliceService, private router: Router) { }

  ngOnInit(): void {

  }

  save(apolice: ApoliceModel) {
    this.serviceCliente.findByCpf(this.cpf).subscribe(obj => {
      apolice.clienteId = obj.id
      this.service.save(apolice).subscribe(x => this.router.navigate(['/apolices']))
    })
  }
}
