import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PacienteService } from './paciente.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Paciente } from '../model/paciente';
import { HttpResponse } from '@angular/common/http';

describe('PacienteService', () => {
  let httpMock: HttpTestingController;
  let service: PacienteService;
  const apiEndpointPacienteConsulta = `${environment.endpoint}/pacientes`;
  const apiEndpointPaciente = `${environment.endpoint}/pacientes/`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PacienteService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PacienteService);
  });

  it('should be created', () => {
    const pacienteService: PacienteService = TestBed.inject(PacienteService);
    expect(pacienteService).toBeTruthy();
  });

  it('deberia listar pacientes', () => {
    const dummyPacientes = [
      new Paciente('Juan Pac1', '123'), new Paciente('Pedro Pac2', '456')
    ];
    service.consultar().subscribe(pacientes => {
      expect(pacientes.length).toBe(2);
      expect(pacientes).toEqual(dummyPacientes);
    });
    const req = httpMock.expectOne(apiEndpointPacienteConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPacientes);
  });

  it('deberia crear un paciente', () => {
    const dummyPaciente = new Paciente('Juan Dummy', '123456');
    dummyPaciente.idPaciente = 1;
    service.guardar(dummyPaciente).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointPaciente);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia eliminar un paciente', () => {
    const dummyPaciente = new Paciente('Juan Dummy', '123456');
    dummyPaciente.idPaciente = 1;
    service.eliminar(dummyPaciente.idPaciente).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointPaciente}1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia actualizar un paciente', () => {
    const dummyPaciente = new Paciente('Juan Dummy', '123456');
    dummyPaciente.idPaciente = 1;
    service.actualizar(dummyPaciente).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointPaciente}1`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
});
