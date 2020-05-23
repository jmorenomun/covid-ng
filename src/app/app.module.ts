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
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';


//Services
import { CancionService } from './services/cancion.service';
import { AudioService } from './services/audio.service';

//Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    CancionComponent,
    CancionesComponent,
    FiltroPipe,
    ReproductorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSliderModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    NgxSkeletonLoaderModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [CancionService, AudioService, AngularFireDatabase],
  bootstrap: [AppComponent],
})
export class AppModule {}
