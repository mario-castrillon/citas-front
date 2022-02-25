export class Paciente {
    idPaciente!: number;
    nombrePaciente: string;
    cedula: string;

    constructor(nombrePaciente: string, cedula: string) {
        this.nombrePaciente = nombrePaciente;
        this.cedula = cedula;
    }
}
