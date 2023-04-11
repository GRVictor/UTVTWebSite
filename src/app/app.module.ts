import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { BlogComponent } from './blog/blog.component';
import { BlogTarjetaComponent } from './blog-tarjeta/blog-tarjeta.component';
import { BlogDetalleComponent } from './blog-detalle/blog-detalle.component';
import { BlogService } from './service/blog.service';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogeditComponent } from './blogedit/blogedit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    VinculacionComponent,
    TramitesComponent,
    DocenteComponent,
    EstudiantesComponent,
    OfertaComponent,
    BlogComponent,
    BlogTarjetaComponent,
    BlogDetalleComponent,
    BlogFormComponent,
    BlogeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BlogService],
  bootstrap: [AppComponent],
})
export class AppModule { }
