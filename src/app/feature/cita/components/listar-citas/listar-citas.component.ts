import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CitaService } from '../../shared/service/cita.service';
import { Cita } from '../../shared/model/cita';



@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-citas.component.html',
  styleUrls: ['./listar-citas.component.css']
})
export class ListarCitasComponent implements OnInit {

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
