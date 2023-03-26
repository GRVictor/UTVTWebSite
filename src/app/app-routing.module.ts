import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinculacionComponent } from './vinculacion/vinculacion.component';

const routes: Routes = [
  {
    path: 'vinculacion',
    component: VinculacionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
