import { by, element } from 'protractor';

export class EspecialistaPage {
    private linkListarEspecialista = element(by.id('linkListarEspecialista'));
    private linkCrearEspecialista = element(by.id('linkCrearEspecialista'));
    private inputNombreEspecialista = element(by.id('nombreEspecialista'));
    private inputEspecialidad = element(by.id('especialidad'));
    private inputTarifa = element(by.id('tarifa'));
    private inputAgendables = element(by.id('maximoDiasAgendables'));
    private btnCrearEspecialista = element(by.id('btnCrearEspecialista'));
    private listaEspecialistas = element.all(by.css('tr.especialistas td.nombres'));

    async clickBotonCrearEspecialista() {
        await this.linkCrearEspecialista.click();
    }

    async clickBotonListarEspecialistas() {
        await this.linkListarEspecialista.click();
    }

    async ingresarNombreEspecialistas(nombreEspecialistas) {
        await this.inputNombreEspecialista.sendKeys(nombreEspecialistas);
    }

    async ingresarEspecialidad(especialidad) {
        await this.inputEspecialidad.sendKeys(especialidad);
    }

    async ingresarTarifa(tarifa) {
        await this.inputTarifa.sendKeys(tarifa);
    }

    async ingresarAgendables(maximoDiasAgendables) {
        await this.inputAgendables.sendKeys(maximoDiasAgendables);
    }

    async contarEspecialistas() {
        return await this.listaEspecialistas.count();
    }

    async crearEspecialistas() {
        await this.btnCrearEspecialista.click();
    }
}
