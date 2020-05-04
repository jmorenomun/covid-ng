import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cancion } from '../../models/Cancion';
import { CancionService } from '../../services/cancion.service';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css'],
})
export class CancionesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // Propiedades
  datos: Cancion[];
  canciones: Cancion[];
  currentFile;
  dataSource: MatTableDataSource<Cancion>;
  displayedColumns = ['id', 'name', 'collectionName', 'duration', 'more'];

  // Output
  @Output() cancionSeleccionada = new EventEmitter<Cancion>();
  @Output() cancion = new EventEmitter<any>();

  // Estados
  cargado: boolean;
  detalles: boolean = false;

  constructor(
    public audioService: AudioService,
    private cancionService: CancionService
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.cancionService.getCanciones().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
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
  eliminaEstadoPlay(index): void {
    this.cancionService.getCanciones().subscribe((data) => {
      if (data[index].reproduciendo) {
        data[index].reproduciendo = false;
      }
    });
  }
}
