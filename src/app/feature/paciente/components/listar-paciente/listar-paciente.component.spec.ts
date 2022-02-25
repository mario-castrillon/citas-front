import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ListarPacienteComponent } from './listar-paciente.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PacienteService } from '../../shared/service/paciente.service';
import { Paciente } from '../../shared/model/paciente';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarPacienteComponent', () => {
  let component: ListarPacienteComponent;
  let fixture: ComponentFixture<ListarPacienteComponent>;
  let pacienteService: PacienteService;
  const listaPacientes: Paciente[] = [new Paciente( 'Juan', '123' ),
  new Paciente( 'Pedro', '456' ),
  new Paciente( 'Alejandra', '789' )];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPacienteComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [PacienteService, HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPacienteComponent);
    component = fixture.componentInstance;
    pacienteService = TestBed.inject(PacienteService);
    spyOn(pacienteService, 'consultar').and.returnValue(of(listaPacientes));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaPacientes.subscribe(resultado => {
      expect(3).toBe(resultado.length);
    });
  });
});
