import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { EspecialistaPage } from '../page/especialista/especialista.po';

describe('workspace-project Especialista', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let especialista: EspecialistaPage;
    let numero: number;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        especialista = new EspecialistaPage();
    });

    it('Deberia crear PACIENTE', async () => {
        const NOMBRE_ESPECIALISTA = 'Pedro';
        const ESPECIALIDAD = '987654321';
        const TARIFA = 333000;
        const AGENDABLES = 6;

        page.navigateTo();
        navBar.clickBotonEspecialistas();
        especialista.clickBotonListarEspecialistas();
        numero = await especialista.contarEspecialistas();
        await especialista.clickBotonCrearEspecialista();
        await especialista.ingresarNombreEspecialistas(NOMBRE_ESPECIALISTA);
        await especialista.ingresarEspecialidad(ESPECIALIDAD);
        await especialista.ingresarTarifa(TARIFA);
        await especialista.ingresarAgendables(AGENDABLES);
        await especialista.crearEspecialistas();
        await especialista.clickBotonListarEspecialistas();
        expect(numero + 1).toBe(await especialista.contarEspecialistas());
    });

    it('Deberia listar ESPECIALISTAS', () => {
        page.navigateTo();
        navBar.clickBotonEspecialistas();
        especialista.clickBotonListarEspecialistas();
        expect(8).toBe(especialista.contarEspecialistas());
    });
});