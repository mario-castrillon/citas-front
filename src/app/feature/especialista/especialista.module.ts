import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { EspecialistaRoutingModule } from './especialista-routing.module';
import { EspecialistaService } from './shared/service/especialista.service';
import { EspecialistaComponent } from './components/especialista/especialista.component';
import { ListarEspecialistasComponent } from './components/listar-especialistas/listar-especialistas.component';
import { CrearEspecialistaComponent } from './components/crear-especialista/crear-especialista.component';
import { EliminarEspecialistaComponent } from './components/eliminar-especialista/eliminar-especialista.component';
import { ActualizarEspecialistaComponent } from './components/actualizar-especialista/actualizar-especialista.component';
import { MostrarAgendablesComponent } from './components/mostrar-agendables/mostrar-agendables.component';



@NgModule({
  declarations: [
    EspecialistaComponent,
    ListarEspecialistasComponent,
    CrearEspecialistaComponent,
    EliminarEspecialistaComponent,
    ActualizarEspecialistaComponent,
    MostrarAgendablesComponent
  ],
  imports: [
    EspecialistaRoutingModule,
    SharedModule
  ],
  providers: [EspecialistaService]
})
export class EspecialistaModule { }
