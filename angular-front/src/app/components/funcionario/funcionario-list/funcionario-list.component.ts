import { Router, Routes } from '@angular/router';
import { FuncionarioService } from '../../../service/funcionario.service';
import { Funcionario } from '../../../model/funcionario';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService, private router: Router ) { }

  ngOnInit(): void {
    this.getFuncionario();
  }

  private getFuncionario() {
    this.funcionarioService.getFuncionarioList().subscribe(dados => {
      this.funcionarios = dados;
    });
  }

  funcionarioDetails(id: number){
    this.router.navigate(['details-funcionario', id]);
  }

  funcionarioUpdate(id: number){
    this.router.navigate(['update-funcionario', id]);
  }

  funcionarioDelete(id: number){
    this.funcionarioService.deleteFuncionario(id).subscribe( data => {
      console.log(data);
      this.getFuncionario();
    })
  }
}
