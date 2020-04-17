import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionComponent } from './components/cancion/cancion.component';
import { CancionesComponent } from './components/canciones/canciones.component';

@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    CancionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
