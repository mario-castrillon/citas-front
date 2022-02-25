import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../shared/model/paciente';
import { PacienteService } from '../../shared/service/paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-paciente',
  templateUrl: './eliminar-paciente.component.html',
  styleUrls: ['./eliminar-paciente.component.css']
})
export class EliminarPacienteComponent implements OnInit {

  paciente: Paciente = this.pacienteService.pacienteSeleccionado;

  constructor(protected pacienteService: PacienteService, protected router: Router) { }

  ngOnInit(): void {
  }

  eliminarPaciente(idPaciente: number) {
    this.pacienteService.eliminar(idPaciente)
      .subscribe(() => this.router.navigateByUrl('/paciente/listar'));
  }
}
