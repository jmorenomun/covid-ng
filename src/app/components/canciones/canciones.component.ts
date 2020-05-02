import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Cancion } from '../../models/Cancion';
import { CancionService } from '../../cancion.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css'],
  providers: [CancionService]
})
export class CancionesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  datos: Cancion[];
  dataSource: MatTableDataSource<Cancion>;

  displayedColumns: string[] = ['id', 'name', 'collectionName', 'duration'];
  //¿este array son los atributos que vamos a leer del json? ¿por qué está id y no está artistName?


  // Propiedades
  canciones: Cancion[];

  //Outputs
  @Output() cancionSeleccionada = new EventEmitter<Cancion>();
  @Output() cancion = new EventEmitter<Cancion>();

  // Estados
  cargado: boolean;
  detalles: boolean = false;
  muestraHint: boolean = false;

  constructor(private cancionService: CancionService) { }

  cancionFiltrada = '';

  ngOnInit() {
    this.dataSource = new MatTableDataSource(
      this.cancionService.getCanciones()
    );
    this.cargado = false;
    this.cargado = true;
  }

  // Muestra detalles
  mostrarDetalles(cancion) {
    this.cancionSeleccionada.emit(cancion);
    this.detalles = true;
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
