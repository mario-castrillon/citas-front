import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Especialista } from '../../shared/model/especialista';
import { EspecialistaService } from '../../shared/service/especialista.service';



@Component({
  selector: 'app-mostrar-agendables',
  templateUrl: './mostrar-agendables.component.html',
  styleUrls: ['./mostrar-agendables.component.css']
})
export class MostrarAgendablesComponent implements OnInit {

  public diasAgendables: Date[] = [];
  public especialista: Especialista = this.especialistaService.especialistaSeleccionado;

  constructor(protected especialistaService: EspecialistaService, protected router: Router) { }

  ngOnInit(): void {
    this.especialistaService.consultarDiasAgendables(this.especialistaService.especialistaSeleccionado.idEspecialista)
      .subscribe(diasAgendables => {
        this.diasAgendables = diasAgendables;
      });
  }
}
