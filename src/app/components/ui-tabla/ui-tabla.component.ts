import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Cancion } from '../../models/Cancion';
import { CancionService } from '../../cancion.service';

@Component({
  selector: 'app-ui-tabla',
  templateUrl: './ui-tabla.component.html',
  styleUrls: ['./ui-tabla.component.css'],
  providers: [CancionService],
})
export class UiTablaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  data: Cancion[];
  dataSource: MatTableDataSource<any>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'collectionName', 'duration'];

  constructor(private cancionService: CancionService) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(
      this.cancionService.getCanciones()
    );
    this.sort = this.dataSource.sort;
  }
}
