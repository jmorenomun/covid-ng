import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CancionComponent } from './components/cancion/cancion.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { FormsModule } from '@angular/forms';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSort,
    MatTableDataSource
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
