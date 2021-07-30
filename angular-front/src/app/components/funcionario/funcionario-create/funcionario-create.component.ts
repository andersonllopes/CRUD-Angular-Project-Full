import { Routes, Router } from '@angular/router';
import { Funcionario } from '../../../model/funcionario';
import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'src/app/service/funcionario.service';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionario: Funcionario = new Funcionario();
  constructor(private serviceFuncionaro: FuncionarioService, private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.serviceFuncionaro.createFuncionario(this.funcionario).subscribe( data =>{
      console.log(data);
      this.getFuncionarioList();
    },
    error => console.log(error));
  }

  getFuncionarioList(){
    this.router.navigate(['/funcionarios']);
  }

  onSubmit(){
    console.log(this.funcionario);
    this.saveEmployee();
  }
}
