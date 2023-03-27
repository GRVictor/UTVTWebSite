import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { VinculacionComponent } from './vinculacion/vinculacion.component';
import { TramitesComponent } from './tramites/tramites.component';
import { DocenteComponent } from './docente/docente.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { OfertaComponent } from './oferta/oferta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VinculacionComponent,
    TramitesComponent,
    DocenteComponent,
    EstudiantesComponent,
    OfertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
