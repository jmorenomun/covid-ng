import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Cancion } from '../../models/Cancion';
import { CancionService } from '../../cancion.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css'],
})
export class CancionesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Cancion>(listaCanciones);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // Propiedades
  canciones: Cancion[];

  @Output() cancionSeleccionada = new EventEmitter<Cancion>();
  @Output() cancion = new EventEmitter<Cancion>();

  datos: Cancion[];

  // Estados
  cargado: boolean;
  detalles: boolean = false;

  constructor(private cancionService: CancionService) {
    this.datos = cancionService.getCanciones();
  }

  cancionFiltrada = '';

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.cargado = false;
    this.mostrarTodas();
    this.cargado = true;
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

  reproducir(cancion: Cancion) {
    this.cancion.emit(cancion);
  }

  eliminaEstadoPlay(): void {
    for (let cancion of this.datos) {
      if (cancion.reproduciendo) cancion.reproduciendo = false;
    }
  }
}
