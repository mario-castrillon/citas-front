import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkPaciente = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkEspecialista = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkCita = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));

    async clickBotonPacientes() {
        await this.linkPaciente.click();
    }

    async clickBotonEspecialistas() {
        await this.linkEspecialista.click();
    }

    async clickBotonCitas() {
        await this.linkCita.click();
    }
}
