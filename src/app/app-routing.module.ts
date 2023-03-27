import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinculacionComponent } from './vinculacion/vinculacion.component';
import { TramitesComponent } from './tramites/tramites.component';
import { DocenteComponent } from './docente/docente.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { OfertaComponent } from './oferta/oferta.component';

const routes: Routes = [
  {
    path: 'vinculacion',
    component: VinculacionComponent
  },
  {
    path: 'tramites',
    component: TramitesComponent
  },
  {
    path: 'docente',
    component: DocenteComponent
  },
  {
    path: 'estudiantes',
    component: EstudiantesComponent
  },
  {
    path: 'oferta',
    component: OfertaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
