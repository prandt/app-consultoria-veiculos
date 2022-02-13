import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApoliceModel } from 'src/app/models/apolice.model';
import { ApoliceService } from 'src/app/service/apolice.service';

@Component({
  selector: 'app-apolices',
  templateUrl: './apolices.component.html',
  styleUrls: ['./apolices.component.css']
})
export class ApolicesComponent implements OnInit {

  apolices: ApoliceModel[]

  constructor(private router: Router ,private service: ApoliceService) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll(){
    this.service.findAll().subscribe(obj => this.apolices = obj)
  }

  detail(numero: string){
    this.router.navigate([`/apolices/${numero}`])
  }

}
