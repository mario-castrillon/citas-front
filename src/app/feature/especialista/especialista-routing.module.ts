import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualizarEspecialistaComponent } from './components/actualizar-especialista/actualizar-especialista.component';
import { CrearEspecialistaComponent } from './components/crear-especialista/crear-especialista.component';
import { EliminarEspecialistaComponent } from './components/eliminar-especialista/eliminar-especialista.component';
import { EspecialistaComponent } from './components/especialista/especialista.component';
import { ListarEspecialistasComponent } from './components/listar-especialistas/listar-especialistas.component';
import { MostrarAgendablesComponent } from './components/mostrar-agendables/mostrar-agendables.component';

const routes: Routes = [
  {
    path: '',
    component: EspecialistaComponent,
    children: [
      {
        path: 'listar',
        component: ListarEspecialistasComponent
      },
      {
        path: 'crear',
        component: CrearEspecialistaComponent
      },
      {
        path: 'actualizar',
        component: ActualizarEspecialistaComponent
      },
      {
        path: 'eliminar',
        component: EliminarEspecialistaComponent
      },
      {
        path: 'agendables',
        component: MostrarAgendablesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialistaRoutingModule { }
