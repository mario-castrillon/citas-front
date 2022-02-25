import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CitaRoutingModule } from './cita-routing.module';
import { CitaService } from './shared/service/cita.service';
import { CitaComponent } from './components/cita/cita.component';
import { ListarCitasComponent } from './components/listar-citas/listar-citas.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { EliminarCitaComponent } from './components/eliminar-cita/eliminar-cita.component';
import { ListarCitasFechaComponent } from './components/listar-citas-fecha/listar-citas-fecha.component';



@NgModule({
  declarations: [
    CitaComponent,
    ListarCitasComponent,
    CrearCitaComponent,
    EliminarCitaComponent,
    ListarCitasFechaComponent
  ],
  imports: [
    CitaRoutingModule,
    SharedModule
  ],
  providers: [CitaService]
})
export class CitaModule { }
