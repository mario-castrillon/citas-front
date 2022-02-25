import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PacienteService } from '../../shared/service/paciente.service';
import { Paciente } from '../../shared/model/paciente';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})
export class ListarPacienteComponent implements OnInit {

  public listaPacientes: Observable<Paciente[]>;

  constructor(protected pacienteService: PacienteService, protected router: Router) { }

  ngOnInit(): void {
    this.listaPacientes = this.pacienteService.consultar();
  }

  seleccionarPaciente(paciente: Paciente, accion: string) {
    this.pacienteService.pacienteSeleccionado = paciente;
    if (accion === 'actualizar') {
      this.router.navigateByUrl('/paciente/actualizar');
    }
    if (accion === 'eliminar') {
      this.router.navigateByUrl('/paciente/eliminar');
    }
  }
}
