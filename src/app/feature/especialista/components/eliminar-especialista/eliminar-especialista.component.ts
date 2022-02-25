import { Component, OnInit } from '@angular/core';
import { Especialista } from '../../shared/model/especialista';
import { EspecialistaService } from '../../shared/service/especialista.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-especialista',
  templateUrl: './eliminar-especialista.component.html',
  styleUrls: ['./eliminar-especialista.component.css']
})
export class EliminarEspecialistaComponent implements OnInit {

  especialista: Especialista = this.especialistaService.especialistaSeleccionado;

  constructor(protected especialistaService: EspecialistaService, protected router: Router) { }

  ngOnInit(): void {
  }

  eliminarEspecialista(idEspecialista){
    this.especialistaService.eliminar(idEspecialista)
      .subscribe(() => this.router.navigateByUrl('/especialista/listar'));
  }

}
