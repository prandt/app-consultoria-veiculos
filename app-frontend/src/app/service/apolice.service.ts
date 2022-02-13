import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApoliceModel } from '../models/apolice.model';

const api_url = "http://localhost:8080/apolices"

@Injectable({
  providedIn: 'root'
})
export class ApoliceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any[]>{
    return this.http.get<any[]>(api_url)
  }

  save(apolice: ApoliceModel): Observable<any>{
    return this.http.post<any>(api_url, apolice)
  }

  findByNumeroApolice(numero: string): Observable<ApoliceModel>{
    return this.http.get<ApoliceModel>(`${api_url}/${numero}`)
  }

}
