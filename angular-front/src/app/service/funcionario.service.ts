import { environment } from './../../environments/environment';
import { Funcionario } from './../model/funcionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private baseURL = environment.baseURL + "/api/v1/funcionarios";

  constructor(private httpClient: HttpClient) {}

  getFuncionarioList(): Observable<Funcionario[]>{
    return this.httpClient.get<Funcionario[]>(`${this.baseURL}`);
  }

  createFuncionario(funcionario: Funcionario): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, funcionario);
  }

  getFuncionarioById(id: number): Observable<Funcionario>{
    return this.httpClient.get<Funcionario>(`${this.baseURL}/${id}`);
  }

  updateFuncionario(id: number, funcionario: Funcionario): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, funcionario);
  }

  deleteFuncionario(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
