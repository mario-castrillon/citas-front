import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

@Component({
  selector: 'app-eliminar-cita',
  templateUrl: './eliminar-cita.component.html',
  styleUrls: ['./eliminar-cita.component.css']
})
export class EliminarCitaComponent implements OnInit {

  cita: Cita = this.citaService.citaSeleccionada;

  constructor(protected citaService: CitaService, protected router: Router) { }

  ngOnInit(): void {
  }

  eliminarCita(id) {
    this.citaService.eliminar(id)
      .subscribe(() => this.router.navigateByUrl('/cita/listar'));
  }
}
