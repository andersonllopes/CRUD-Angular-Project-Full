import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioListComponent } from './components/funcionario/funcionario-list/funcionario-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDetailsComponent } from './components/funcionario/funcionario-details/funcionario-details.component';

const routes: Routes = [
  {path: 'funcionarios', component: FuncionarioListComponent},
  {path: 'create-funcionario', component: FuncionarioCreateComponent},
  {path: '', redirectTo: 'funcionarios', pathMatch: 'full'},
  {path: 'update-funcionario/:id', component: FuncionarioUpdateComponent},
  {path: 'details-funcionario/:id', component: FuncionarioDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
