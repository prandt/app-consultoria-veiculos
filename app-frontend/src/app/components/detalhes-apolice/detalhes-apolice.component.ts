import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApoliceModel } from 'src/app/models/apolice.model';
import { ClienteModel } from 'src/app/models/cliente.model';
import { ApoliceService } from 'src/app/service/apolice.service';

@Component({
  selector: 'app-detalhes-apolice',
  templateUrl: './detalhes-apolice.component.html',
  styleUrls: ['./detalhes-apolice.component.css']
})
export class DetalhesApoliceComponent implements OnInit {

  apolice: ApoliceModel = new ApoliceModel()
  cliente: ClienteModel = new ClienteModel()
  constructor(private route: ActivatedRoute, private service: ApoliceService, private router: Router) { }

  ngOnInit(): void {
    this.apolice.valor = 0
    this.route.paramMap.subscribe(params => {
      if (params.get('id') != params.get('cadastrar')) {
        this.apolice.numeroApolice = params.get('id') || ""
        this.service.findByNumeroApolice(this.apolice.numeroApolice).subscribe(
          obj => {
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

  calcularData(end: any) {
    const now = new Date()
    end = new Date(end)
    const diff = Math.abs(end.getTime() - now.getTime())
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    return days;
  }
  isExpired(data: any) {
    const now = new Date()
    data = new Date(data)
    if (data.getTime() === now.getTime()) {
      return "Vence Hoje"
    }
    return data.getTime() < now.getTime()
  }

}
