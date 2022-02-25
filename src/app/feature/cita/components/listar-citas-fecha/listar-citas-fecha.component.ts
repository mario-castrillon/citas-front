import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CitaService } from '../../shared/service/cita.service';
import { Cita } from '../../shared/model/cita';

@Component({
  selector: 'app-listar-citas-fecha',
  templateUrl: './listar-citas-fecha.component.html',
  styleUrls: ['./listar-citas-fecha.component.css']
})
export class ListarCitasFechaComponent implements OnInit {

  public listaCitas: Observable<Cita[]>;

  constructor(protected citaService: CitaService, protected router: Router) { }

  ngOnInit(): void {
    this.listaCitas = this.citaService.consultar();
  }

  seleccionarCita(cita: Cita) {
    this.citaService.citaSeleccionada = cita;
    this.router.navigateByUrl('/cita/eliminar');
  }

}
