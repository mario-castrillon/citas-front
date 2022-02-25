import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/cita';



@Injectable()
export class CitaService {

  citaSeleccionada: Cita;

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Cita[]>(`${environment.endpoint}`,
      this.http.optsName('Consultar Citas'));
  }

  public consultarPorFecha(fecha: Date): Observable<Cita[]> {
    return this.http.doGet<Cita[]>(`${environment.endpoint}/fecha` + fecha, this.http.optsName('consultar citas por fecha'));
  }

  public consultarPorEspecialistas(idEspecialista: number): Observable<Cita[]> {
    return this.http.doGet<Cita[]>(`${environment.endpoint}/especialista` + idEspecialista, this.http.optsName('consultar citas por especialista'));
  }

  public eliminar(id: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/${id}`,
      this.http.optsName('eliminar cita'));
  }

  public crear(cita: Cita) {
    return this.http.doPost<Cita, boolean>(`${environment.endpoint}/`, cita, this.http.optsName('crear cita'));
  }

  public actualizar(cita: Cita) {
    return this.http.doPut<Cita, boolean>(`${environment.endpoint}`
      + this.citaSeleccionada.id, cita, this.http.optsName('actualizar cita'));
  }
}
