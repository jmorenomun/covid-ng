import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Cancion } from '../../models/Cancion';
import { CancionService } from '../../cancion.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css'],
  providers: [CancionService]
})
export class CancionesComponent implements OnInit {
  @ViewChild(MatPaginatorModule) paginator: MatPaginatorModule;
  @ViewChild(MatSort) sort: MatSort;

  datos: Cancion[]; //data y datos son lo mismo???
  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = ['id', 'name', 'collectionName', 'duration'];

  // Propiedades
  canciones: Cancion[];

  // Output
  @Output() cancionSeleccionada = new EventEmitter<Cancion>();
  @Output() cancion = new EventEmitter<Cancion>();

  // Estados
  cargado: boolean;
  detalles: boolean = false;

  constructor(private cancionService: CancionService) { }

  cancionFiltrada = '';

  ngOnInit() {
    this.dataSource = new MatTableDataSource(
      this.cancionService.getCanciones()
    );
    this.sort = this.dataSource.sort;
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
