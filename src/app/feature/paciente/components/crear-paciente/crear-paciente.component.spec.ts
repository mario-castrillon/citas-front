import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearPacienteComponent } from './crear-paciente.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PacienteService } from '../../shared/service/paciente.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ListarPacienteComponent } from '../listar-paciente/listar-paciente.component';

describe('CrearPacienteComponent', () => {
  let crearPaciente: CrearPacienteComponent;
  let fixture: ComponentFixture<CrearPacienteComponent>;
  let pacienteService: PacienteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPacienteComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'paciente/listar', component: ListarPacienteComponent}]),
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [PacienteService, HttpService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPacienteComponent);
    crearPaciente = fixture.componentInstance;
    pacienteService = TestBed.inject(PacienteService);
    spyOn(pacienteService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(crearPaciente).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(crearPaciente.pacienteForm.valid).toBeFalsy();
  });

  it('El servicio no debe tener ningún resgistro al empezar', () => {
    expect(pacienteService.consultar.length).toBe(0);
  });

  it('Registrando paciente', () => {
    expect(crearPaciente.pacienteForm.valid).toBeFalsy();
    crearPaciente.pacienteForm.controls.nombrePaciente.setValue('Paciente Nombre');
    crearPaciente.pacienteForm.controls.cedula.setValue('123456789');
    expect(crearPaciente.pacienteForm.valid).toBeTruthy();
    crearPaciente.crear();
    expect(pacienteService.consultar.length > 0);
  });
});
