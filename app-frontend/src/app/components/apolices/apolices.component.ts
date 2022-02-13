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
  args: string

  constructor(private router: Router, private service: ApoliceService) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll() {
    this.service.findAll().subscribe(obj => this.apolices = obj)
  }

  findByArgs(args: string) {
    if (args === "") {
      this.findAll()
    } else {
      this.service.findByArgs(args).subscribe(obj => this.apolices = obj)
    }
  }

  detail(numero: string) {
    this.router.navigate([`/apolices/${numero}`])
  }

}
