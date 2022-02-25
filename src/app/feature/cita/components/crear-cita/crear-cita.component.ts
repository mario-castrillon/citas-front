import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EspecialistaService } from 'src/app/feature/especialista/shared/service/especialista.service';
import { PacienteService } from 'src/app/feature/paciente/shared/service/paciente.service';
import { CitaService } from '../../shared/service/cita.service';
import { Especialista } from 'src/app/feature/especialista/shared/model/especialista';
import { Paciente } from 'src/app/feature/paciente/shared/model/paciente';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  public listaEspecialistas: Observable<Especialista[]>;
  public listaPacientes: Observable<Paciente[]>;
  citaFormulario: FormGroup;

  mostrarError: boolean;
  mensajeError: string;

  constructor(
    protected especialistaService: EspecialistaService,
    protected pacienteService: PacienteService,
    protected citaService: CitaService,
    protected activateRoute: ActivatedRoute,
    protected router: Router) { }

  ngOnInit(): void {
    this.listaEspecialistas = this.especialistaService.consultar();
    this.listaPacientes = this.pacienteService.consultar();
    this.construirFormularioCita();
  }

  private construirFormularioCita() {
    this.citaFormulario = new FormGroup({
      idPaciente: new FormControl('', [Validators.required]),
      idEspecialista: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required])
    });
  }

  crear() {
    this.citaService.crear(this.citaFormulario.value)
    .subscribe(() => {this.router.navigateByUrl('/cita/listar'); }
    , error => {
      this.mensajeError = error.error.mensaje;
      this.mostrarError = true;
    }
    );
    this.mostrarError = false;
  }

}
