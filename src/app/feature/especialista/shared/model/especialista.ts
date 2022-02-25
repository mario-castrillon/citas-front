export class Especialista {
    idEspecialista!: number;
    nombreEspecialista: string;
    especialidad: string;
    tarifa: number;
    maximoDiasAgendables: number;

    constructor(
        nombreEspecialista: string,
        especialidad: string,
        tarifa: number,
        maximoDiasAgendables: number
    ) {
        this.nombreEspecialista = nombreEspecialista;
        this.especialidad = especialidad;
        this.tarifa = tarifa;
        this.maximoDiasAgendables = maximoDiasAgendables;
    }
}
