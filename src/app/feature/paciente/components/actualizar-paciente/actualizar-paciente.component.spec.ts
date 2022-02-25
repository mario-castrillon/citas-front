import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActualizarPacienteComponent } from './actualizar-paciente.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PacienteService } from '../../shared/service/paciente.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Paciente } from '../../shared/model/paciente';
import { ListarPacienteComponent } from '../listar-paciente/listar-paciente.component';

describe('ActualizarPacienteComponent', () => {
  let component: ActualizarPacienteComponent;
  let fixture: ComponentFixture<ActualizarPacienteComponent>;
  let pacienteService: PacienteService;
  const pacienteOriginal: Paciente = new Paciente('Juan', '123');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarPacienteComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'paciente/listar', component: ListarPacienteComponent }]),
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [PacienteService, HttpService],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarPacienteComponent);
    component = fixture.componentInstance;
    component.paciente = pacienteOriginal;
    component.paciente.idPaciente = 1;
    pacienteService = TestBed.inject(PacienteService);
    spyOn(pacienteService, 'actualizar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Actualizar paciente', () => {
    pacienteService.pacienteSeleccionado = pacienteOriginal;
    component.pacienteForm.controls.nombrePaciente.setValue('Pedro');
    component.pacienteForm.controls.cedula.setValue('951');
    component.pacienteForm.controls.idPaciente.setValue(1);
    component.actualizar();
    expect(pacienteService.pacienteSeleccionado.nombrePaciente = 'Pedro');
  });

});
