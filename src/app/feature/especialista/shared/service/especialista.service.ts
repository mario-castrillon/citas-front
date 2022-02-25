import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Especialista } from '../model/especialista';



@Injectable()
export class EspecialistaService {

  especialistaSeleccionado: Especialista;

  constructor(protected http: HttpService) { }

  public consultar(){
    return this.http.doGet<Especialista[]>(`${environment.endpoint}/especialistas`,
    this.http.optsName('consultar especialistas'));
  }

  public guardar(especialista: Especialista){
    return this.http.doPost<Especialista, boolean>(`${environment.endpoint}/especialistas/`, especialista,
    this.http.optsName('crear especialista'));
  }

  public consultarDiasAgendables(idEspecialista: number): Observable<Date[]>{
    return this.http.doGet<Date[]>(`${environment.endpoint}/especialistas/` + idEspecialista + `/agendables`,
    this.http.optsName('consultar agendables de especialista'));
  }

  public actualizar(especialista: Especialista) {
    return this.http.doPut<Especialista, boolean>(`${environment.endpoint}/especialistas/` +
    especialista.idEspecialista, especialista,
    this.http.optsName('actualizar paciente'));
  }

  public eliminar(idEspecialista: number){
    return this.http.doDelete<boolean>(`${environment.endpoint}/especialistas/${idEspecialista}`,
    this.http.optsName('Eliminar especialista'));
  }

}
