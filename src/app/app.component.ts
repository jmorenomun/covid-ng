import { Component } from '@angular/core';
import { Cancion } from './models/Cancion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AA1';
  cancionSeleccionada?: Cancion;

  // Muestra detalles
  mostrarDetalles(cancion) {
    this.cancionSeleccionada = cancion;
  }
}
