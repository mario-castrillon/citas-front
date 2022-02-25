import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { EliminarPacienteComponent } from './eliminar-paciente.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PacienteService } from '../../shared/service/paciente.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Paciente } from '../../shared/model/paciente';
import { ListarPacienteComponent } from '../listar-paciente/listar-paciente.component';

describe('EliminarPacienteComponent', () => {
  let component: EliminarPacienteComponent;
  let fixture: ComponentFixture<EliminarPacienteComponent>;
  let pacienteService: PacienteService;
  const paciente: Paciente = new Paciente('Juan', '123');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarPacienteComponent],
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
    fixture = TestBed.createComponent(EliminarPacienteComponent);
    component = fixture.componentInstance;
    component.paciente = paciente;
    component.paciente.idPaciente = 1;
    pacienteService = TestBed.inject(PacienteService);
    spyOn(pacienteService, 'eliminar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Borrar Paciente', () => {
    expect(component.paciente.idPaciente).toBe(1);
    component.eliminarPaciente(component.paciente.idPaciente);
    expect(pacienteService.consultar.length === 0);
  });
});
