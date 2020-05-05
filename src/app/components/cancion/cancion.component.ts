import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cancion } from '../../models/Cancion';
import { CancionService } from '../../services/cancion.service';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css'],
})
export class CancionComponent implements OnInit {
  @Input() cancion: Cancion;
  defaultData: any;
  cancionActual: number;
  edit: boolean;

  constructor(private cancionService: CancionService) {}

  ngOnInit(): void {
    this.cancionService.getCanciones().subscribe((data) => {
      this.defaultData = data;
    });
  }
}
