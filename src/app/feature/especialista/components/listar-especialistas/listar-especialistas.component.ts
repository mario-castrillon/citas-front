import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EspecialistaService } from '../../shared/service/especialista.service';
import { Especialista } from '../../shared/model/especialista';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listar-especialistas',
  templateUrl: './listar-especialistas.component.html',
  styleUrls: ['./listar-especialistas.component.css']
})
export class ListarEspecialistasComponent implements OnInit {

  public listaEspecialistas: Observable<Especialista[]>;

  constructor(protected especialistaService: EspecialistaService, protected router: Router) { }

  ngOnInit(): void {
    this.listaEspecialistas = this.especialistaService.consultar();
  }

  seleccionarEspecialista(especialista: Especialista, accion: string){
    this.especialistaService.especialistaSeleccionado = especialista;
    if (accion === 'actualizar') {
      this.router.navigateByUrl('/especialista/actualizar');
    }
    if (accion === 'eliminar') {
      this.router.navigateByUrl('/especialista/eliminar');
    }
  }

  mostarDiasAgendables(especialista: Especialista){
    this.especialistaService.especialistaSeleccionado = especialista;
    this.router.navigateByUrl('/especialista/agendables');
  }
}
