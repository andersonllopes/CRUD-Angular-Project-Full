import { getTestBed } from '@angular/core/testing';
import { Funcionario } from './../model/funcionario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  //private baseURL = "https://api.opendota.com/api/heroes";

  private baseURL = "http://localhost:8080/api/v1/funcionarios";

  //private baseURL = "https://servicodados.ibge.gov.br/api/v2/censos/nomes";

  constructor(private httpCliente: HttpClient) {}

  getFuncionarioList(): Observable<Funcionario[]>{
    return this.httpCliente.get<Funcionario[]>(`${this.baseURL}`);
  }
}
