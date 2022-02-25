import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEspecialistaComponent } from './eliminar-especialista.component';

describe('EliminarEspecialistaComponent', () => {
  let component: EliminarEspecialistaComponent;
  let fixture: ComponentFixture<EliminarEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEspecialistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
