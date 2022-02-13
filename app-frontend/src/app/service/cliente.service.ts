import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteModel } from '../models/cliente.model';

const api_url = "http://localhost:8080/clientes"

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  findById(id: string): Observable<ClienteModel>{
    return this.http.get<ClienteModel>(`${api_url}/${id}`)
  }

  find(nome: string): Observable<any[]>{
    if(nome === ""){
      return this.http.get<any[]>(api_url)
    }
    return this.http.get<any[]>(`${api_url}/search/${nome}`)
  }

  save(cliente: ClienteModel): Observable<any>{
    return this.http.post<ClienteModel>(api_url, cliente)
  }

  update(cliente: ClienteModel): Observable<ClienteModel>{
    return this.http.put<ClienteModel>(api_url, cliente)
  }

  delete(id: string): Observable<any>{
    return this.http.delete<any>(`${api_url}/${id}`)
  }

  findByCpf(cpf: string): Observable<ClienteModel>{
    return this.http.get<ClienteModel>(`${api_url}/cpf/${cpf}`)
  }

}
