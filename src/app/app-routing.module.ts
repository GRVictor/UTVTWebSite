import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { VinculacionComponent } from './vinculacion/vinculacion.component';
import { TramitesComponent } from './tramites/tramites.component';
import { DocenteComponent } from './docente/docente.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { OfertaComponent } from './oferta/oferta.component';
import { BlogDetalleComponent } from './blog-detalle/blog-detalle.component';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogeditComponent } from './blogedit/blogedit.component';

const routes: Routes = [
  {
    //cuando se pide la ruta raiz, se muestra el componente BlogComponent
    path: '',
    component: BlogComponent,
  },
  {
    path: 'blog/:id',
    component: BlogDetalleComponent,
  },
  {
    path: 'blog',
    component: BlogFormComponent,
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
    path: 'vinculacion',
    component: VinculacionComponent,
  },
  {
    path: 'oferta',
    component: OfertaComponent,
  },
  {
    path: 'tramites',
    component: TramitesComponent
  },
  {
    path: 'blogedit',
    component: BlogeditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
