import { Component, OnInit } from '@angular/core';
import { EspecialistaService } from '../../shared/service/especialista.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-crear-especialista',
  templateUrl: './crear-especialista.component.html',
  styleUrls: ['./crear-especialista.component.css']
})
export class CrearEspecialistaComponent implements OnInit {

  especialistaForm: FormGroup;
  mostrarError: boolean;
  mensajeError: string;

  constructor(protected especialistaService: EspecialistaService, protected router: Router) { }

  ngOnInit(): void {
    this.construirFormularioEspecialista();
  }

  private construirFormularioEspecialista(){
    this.especialistaForm = new FormGroup({
      nombreEspecialista: new FormControl('', [Validators.required]),
      especialidad: new FormControl('', [Validators.required]),
      tarifa: new FormControl('', [Validators.required]),
      maximoDiasAgendables: new FormControl('', [Validators.required])
    });
  }

  crear() {
    this.especialistaService.guardar(this.especialistaForm.value)
    .subscribe(() => {this.router.navigateByUrl('/especialista/listar'); }
    , error => {
      this.mensajeError = error.error.mensaje;
      this.mostrarError = true;
    }
    );
    this.mostrarError = false;
  }
}
