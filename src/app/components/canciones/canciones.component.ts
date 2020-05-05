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
  cancionActual: number;
  canciones: any[];
  filteredResults: number;
  dataSource: MatTableDataSource<any>;
  displayedColumns = ['id', 'name', 'collectionName', 'duration', 'more'];

  // Output
  @Output() cancionSeleccionada = new EventEmitter<Cancion>();
  @Output() cancion = new EventEmitter<any>();

  // Estados
  cargado: boolean;
  detalles: boolean = false;
  muestraHint: boolean = false;
  isFiltered: boolean;

  constructor(
    public audioService: AudioService,
    private cancionService: CancionService
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.cancionService.getCanciones().subscribe((data) => {
      this.canciones = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    // Simula loader
    setTimeout(() => {
      if (this.dataSource.filteredData.length > 0) {
        this.cargado = true;
      }
    }, 1000);
  }

  // Filtra
  filtrarCanciones(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.filteredResults = this.dataSource.filteredData.length;
    this.isFiltered = (filterValue.length === 0) ? false : true;
  }

  // Muestra detalles
  mostrarDetalles(cancion) {
    this.cancionSeleccionada.emit(cancion);
    this.detalles = true;
  }

  // Reproducir
  reproducir(cancion: Cancion) {
    this.cancionService.cancionId.next(cancion.id);

    this.cancionService.cancionId.subscribe((id) => {
      this.cancionActual = id;
    });

    this.cancion.emit(cancion);
  }
}
