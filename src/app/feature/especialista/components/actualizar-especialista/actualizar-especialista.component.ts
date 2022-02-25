import { Component, OnInit } from '@angular/core';
import { EspecialistaService } from '../../shared/service/especialista.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Especialista } from '../../shared/model/especialista';



@Component({
  selector: 'app-actualizar-especialista',
  templateUrl: './actualizar-especialista.component.html',
  styleUrls: ['./actualizar-especialista.component.css']
})
export class ActualizarEspecialistaComponent implements OnInit {

  especialistaForm: FormGroup;
  especialista: Especialista = this.especialistaService.especialistaSeleccionado;
  mostrarError: boolean;
  mensajeError: string;

  constructor(protected especialistaService: EspecialistaService, protected router: Router) { }

  ngOnInit(): void {
    this.construirFormularioEspecialista();
  }

  private construirFormularioEspecialista() {
    this.especialistaForm = new FormGroup({
      idEspecialista: new FormControl(this.especialista.idEspecialista),
      nombreEspecialista: new FormControl(this.especialista.nombreEspecialista, [Validators.required]),
      especialidad: new FormControl(this.especialista.especialidad, [Validators.required]),
      tarifa: new FormControl(this.especialista.tarifa, [Validators.required]),
      maximoDiasAgendables: new FormControl(this.especialista.maximoDiasAgendables, [Validators.required])
    });
  }

  actualizar() {
    this.especialistaService.actualizar(this.especialistaForm.value)
      .subscribe(() => { this.router.navigateByUrl('/especialista/listar'); }
        , error => {
          this.mensajeError = error.error.mensaje;
          this.mostrarError = true;
        }
      );
    this.mostrarError = false;
  }

}
