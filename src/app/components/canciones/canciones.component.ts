import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import listaCanciones from '../../../assets/canciones.json';
import { Cancion } from '../../models/Cancion';
// import { faPlay } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css'],
})
export class CancionesComponent implements OnInit {
  // Propiedades
  canciones: Cancion[];
  @Output() cancionSeleccionada = new EventEmitter<Cancion>();
  datos: Cancion[] = listaCanciones;

  // Estados
  cargado: boolean;
  detalles: boolean = false;

  constructor() {}

  cancionFiltrada = '';

  ngOnInit() {
    this.cargado = false;
    // Simula un tiempo de carga por consulta http
    setTimeout(() => {
      this.mostrarTodas();
      this.cargado = true;
    }, 1000);
  }

  // Muestra detalles
  mostrarDetalles(cancion) {
    this.cancionSeleccionada.emit(cancion);
    this.detalles = true;
  }

  // Lista todas las canciones
  mostrarTodas(): void {
    this.canciones = this.datos.filter((cancion) => {
      if (cancion) {
        return cancion;
      }
    });
  }
}
