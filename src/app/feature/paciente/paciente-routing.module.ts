import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteComponent } from './components/paciente/paciente.component';
import { ListarPacienteComponent } from './components/listar-paciente/listar-paciente.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { ActualizarPacienteComponent } from './components/actualizar-paciente/actualizar-paciente.component';
import { EliminarPacienteComponent } from './components/eliminar-paciente/eliminar-paciente.component';

const routes: Routes = [
  {
    path: '',
    component: PacienteComponent,
    children: [
      {
        path: 'listar',
        component: ListarPacienteComponent
      },
      {
        path: 'crear',
        component: CrearPacienteComponent
      },
      {
        path: 'actualizar',
        component: ActualizarPacienteComponent
      },
      {
        path: 'eliminar',
        component: EliminarPacienteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
