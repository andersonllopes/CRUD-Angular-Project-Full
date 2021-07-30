import { Funcionario } from './../../../model/funcionario';
import { FuncionarioService } from 'src/app/service/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-funcionario-details',
  templateUrl: './funcionario-details.component.html',
  styleUrls: ['./funcionario-details.component.css']
})
export class FuncionarioDetailsComponent implements OnInit {

  id!: number;
  funcionario!: Funcionario;

  constructor(private route: ActivatedRoute, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.funcionario = new Funcionario();
    this.funcionarioService.getFuncionarioById(this.id).subscribe( data => {
      this.funcionario = data;
    });
  }

}
