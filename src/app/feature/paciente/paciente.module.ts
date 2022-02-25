import { NgModule } from '@angular/core';

import { PacienteRoutingModule } from './paciente-routing.module';
import { SharedModule } from '@shared/shared.module';
import { PacienteService } from './shared/service/paciente.service';
import { PacienteComponent } from './components/paciente/paciente.component';
import { ListarPacienteComponent } from './components/listar-paciente/listar-paciente.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { ActualizarPacienteComponent } from './components/actualizar-paciente/actualizar-paciente.component';
import { EliminarPacienteComponent } from './components/eliminar-paciente/eliminar-paciente.component';

@NgModule({
  declarations: [
    PacienteComponent,
    ListarPacienteComponent,
    CrearPacienteComponent,
    ActualizarPacienteComponent,
    EliminarPacienteComponent
  ],
  imports: [
    PacienteRoutingModule,
    SharedModule
  ],
  providers: [PacienteService]
})
export class PacienteModule { }
