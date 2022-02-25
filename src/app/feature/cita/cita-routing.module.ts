import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitaComponent } from './components/cita/cita.component';
import { ListarCitasComponent } from './components/listar-citas/listar-citas.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { EliminarCitaComponent } from './components/eliminar-cita/eliminar-cita.component';

const routes: Routes = [
  {
    path: '',
    component: CitaComponent,
    children: [
      {
        path: 'listar',
        component: ListarCitasComponent
      },
      {
        path: 'crear',
        component: CrearCitaComponent
      },
      {
        path: 'eliminar',
        component: EliminarCitaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }
