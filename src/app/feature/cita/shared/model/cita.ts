export class Cita {
    id!: number;
    fecha: Date;
    nombrePaciente: string;
    cedula: string;
    nombreEspecialista: string;
    especialidad: string;
    tarifa: number;

    constructor(
        fecha: Date,
        nombrePaciente: string,
        cedula: string,
        nombreEspecialista: string,
        especialidad: string,
        tarifa: number) {
        this.fecha = fecha;
        this.nombrePaciente = nombrePaciente;
        this.cedula = cedula;
        this.nombreEspecialista = nombreEspecialista;
        this.especialidad = especialidad;
        this.tarifa = tarifa;
    }
}
