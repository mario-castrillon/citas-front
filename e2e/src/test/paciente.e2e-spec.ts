import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { PacientePage } from '../page/paciente/paciente.po';

describe('workspace-project Paciente', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let paciente: PacientePage;
    let numero: number;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        paciente = new PacientePage();
    });

    it('Deberia crear PACIENTE', async () => {
        const NOMBRE_PACIENTE = 'Juan';
        const CEDULA = '123456789';
        page.navigateTo();
        navBar.clickBotonPacientes();
        paciente.clickBotonListarPacientes();
        numero = await paciente.contarPacientes();
        await paciente.clickBotonCrearPaciente();
        await paciente.ingresarNombrePaciente(NOMBRE_PACIENTE);
        await paciente.ingresarCedula(CEDULA);
        await paciente.crearPaciente();
        await paciente.clickBotonListarPacientes();
        expect(numero + 1).toBe(await paciente.contarPacientes());
    });

    it('Deberia listar PACIENTES', () => {
        page.navigateTo();
        navBar.clickBotonPacientes();
        paciente.clickBotonListarPacientes();
        expect(10).toBe(paciente.contarPacientes());
    });
});
