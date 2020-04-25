import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionComponent } from './components/cancion/cancion.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { FormsModule } from '@angular/forms';
import { ReproductorComponent } from './components/reproductor/reproductor.component';

@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    CancionesComponent,
    FiltroPipe,
    ReproductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
