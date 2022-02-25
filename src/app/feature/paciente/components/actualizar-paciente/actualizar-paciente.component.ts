import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../shared/service/paciente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Paciente } from '../../shared/model/paciente';
import { Router } from '@angular/router';



@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
  styleUrls: ['./actualizar-paciente.component.css']
})
export class ActualizarPacienteComponent implements OnInit {

  pacienteForm: FormGroup;
  paciente: Paciente = this.pacienteService.pacienteSeleccionado;

  constructor(protected pacienteService: PacienteService, protected router: Router) { }

  ngOnInit(): void {
    this.construirFormularioPaciente();
  }

  actualizar() {
    this.pacienteService.actualizar(this.pacienteForm.value)
      .subscribe(() => this.router.navigateByUrl('/paciente/listar'));
  }

  private construirFormularioPaciente() {
    this.pacienteForm = new FormGroup({
      idPaciente: new FormControl(this.paciente.idPaciente),
      nombrePaciente: new FormControl(this.paciente.nombrePaciente, [Validators.required]),
      cedula: new FormControl(this.paciente.cedula, [Validators.required])
    });
  }
}
