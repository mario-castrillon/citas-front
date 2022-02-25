import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EspecialistaService } from './especialista.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Especialista } from '../model/especialista';
import { HttpResponse } from '@angular/common/http';


describe('EspecialistaService', () => {
  let httpMock: HttpTestingController;
  let service: EspecialistaService;
  const apiEndpointEspecialistaConsulta = `${environment.endpoint}/especialistas`;
  const apiEndpointEspecialista = `${environment.endpoint}/especialistas/`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EspecialistaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(EspecialistaService);
  });

  it('should be created', () => {
    const especialistaService: EspecialistaService = TestBed.inject(EspecialistaService);
    expect(especialistaService).toBeTruthy();
  });

  it('deberia listar especialistas', () => {
    const dummyEspecialistas = [
      new Especialista('Juan Esp1', 'General', 100000, 3), new Especialista('Pedro Espe2', 'Cirj', 200000, 6)
    ];
    service.consultar().subscribe(especialistas => {
      expect(especialistas.length).toBe(2);
      expect(especialistas).toEqual(dummyEspecialistas);
    });
    const req = httpMock.expectOne(apiEndpointEspecialistaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyEspecialistas);
  });

  it('deberia crear un especialista', () => {
    const dummyEspecialista = new Especialista('Juan Dummy', 'General', 100000, 9);
    dummyEspecialista.idEspecialista = 1;
    service.guardar(dummyEspecialista).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointEspecialista);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia eliminar un especialista', () => {
    const dummyEspecialista = new Especialista('Juan Dummy', 'General', 100000, 9);
    dummyEspecialista.idEspecialista = 1;
    service.eliminar(dummyEspecialista.idEspecialista).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointEspecialista}1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('deberia actualizar un especialista', () => {
    const dummyEspecialista = new Especialista('Juan Dummy', 'General', 100000, 9);
    dummyEspecialista.idEspecialista = 1;
    service.actualizar(dummyEspecialista).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointEspecialista}1`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
});
