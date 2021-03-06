import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'paciente', loadChildren: () => import('./feature/paciente/paciente.module').then(mod => mod.PacienteModule) },
  { path: 'especialista', loadChildren: () => import('./feature/especialista/especialista.module').then(mod => mod.EspecialistaModule) },
  { path: 'cita', loadChildren: () => import('./feature/cita/cita.module').then(mod => mod.CitaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
