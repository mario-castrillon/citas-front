import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../shared/service/paciente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {

  pacienteForm: FormGroup;
  mostrarError: boolean;
  mensajeError: string;

  constructor(protected pacienteService: PacienteService, protected router: Router) { }

  ngOnInit(): void {
    this.construirFormularioPaciente();
  }

  crear() {
    this.pacienteService.guardar(this.pacienteForm.value)
    .subscribe(() => {this.router.navigateByUrl('/paciente/listar'); }
    , error => {
      this.mensajeError = error.error.mensaje;
      this.mostrarError = true;
    }
    );
    this.mostrarError = false;
  }

  private construirFormularioPaciente() {
    this.pacienteForm = new FormGroup({
      nombrePaciente: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required])
    });
  }
}
