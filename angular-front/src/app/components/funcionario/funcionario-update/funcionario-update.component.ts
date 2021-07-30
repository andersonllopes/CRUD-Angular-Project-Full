import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/model/funcionario';
import { FuncionarioService } from 'src/app/service/funcionario.service';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {

  id!: number;
  funcionario: Funcionario = new Funcionario();
  constructor(private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.funcionarioService.getFuncionarioById(this.id).subscribe(data => {
      this.funcionario = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.funcionarioService.updateFuncionario(this.id, this.funcionario).subscribe( data =>{
      this.getFuncionarioList();
    }
    , error => console.log(error));
  }

  getFuncionarioList(){
    this.router.navigate(['/funcionarios']);
  }
}
