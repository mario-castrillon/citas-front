import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCitasFechaComponent } from './listar-citas-fecha.component';

describe('ListarCitasFechaComponent', () => {
  let component: ListarCitasFechaComponent;
  let fixture: ComponentFixture<ListarCitasFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCitasFechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCitasFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
