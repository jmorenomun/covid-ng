import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cancion } from '../../models/Cancion';
import { CancionService } from '../../cancion.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css'],
  providers: [CancionService],
})
export class CancionesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Propiedades
  datos: Cancion[];
  canciones: Cancion[];
  dataSource: MatTableDataSource<Cancion>;
  displayedColumns = ['item', 'name', 'collectionName', 'duration', 'more'];

  // Output
  @Output() cancionSeleccionada = new EventEmitter<Cancion>();
  @Output() cancion = new EventEmitter<Cancion>();

  // Estados
  cargado: boolean;
  detalles: boolean = false;

  constructor(private cancionService: CancionService) {
    this.datos = this.cancionService.getCanciones();
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.datos);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Filtra
  filtrarCanciones(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Muestra detalles
  mostrarDetalles(cancion) {
    this.cancionSeleccionada.emit(cancion);
    this.detalles = true;
  }

  // Reproducir
  reproducir(cancion: Cancion) {
    this.cancion.emit(cancion);
  }

  // Elimina estado play de objeto cancion
  eliminaEstadoPlay(): void {
    for (let cancion of this.datos) {
      if (cancion.reproduciendo) cancion.reproduciendo = false;
    }
  }
}
