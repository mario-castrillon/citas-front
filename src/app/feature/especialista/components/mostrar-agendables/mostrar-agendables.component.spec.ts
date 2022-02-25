import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarAgendablesComponent } from './mostrar-agendables.component';

describe('MostrarAgendablesComponent', () => {
  let component: MostrarAgendablesComponent;
  let fixture: ComponentFixture<MostrarAgendablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarAgendablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarAgendablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
