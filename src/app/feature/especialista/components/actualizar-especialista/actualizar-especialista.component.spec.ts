import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEspecialistaComponent } from './actualizar-especialista.component';

describe('ActualizarEspecialistaComponent', () => {
  let component: ActualizarEspecialistaComponent;
  let fixture: ComponentFixture<ActualizarEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarEspecialistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
