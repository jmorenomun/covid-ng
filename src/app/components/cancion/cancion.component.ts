import { Component, OnInit, Input } from '@angular/core';
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
  startDate: Date;
  activeEditCancion: number;

  constructor(private cancionService: CancionService) {}

  ngOnInit(): void {
    this.cancionService.getCanciones().subscribe((data) => {
      this.defaultData = data;
    });
  }

  ngOnChanges() {
    if (
      this.cancion &&
      this.activeEditCancion != 0 &&
      this.cancion?.id != this.activeEditCancion
    ) {
      this.edit = false;
    }
  }

  editCancion(cancion) {
    this.activeEditCancion = cancion.id;
    if (!cancion.releaseDate) {
      this.startDate = new Date();
    } else {
      let releaseDate = new Date(cancion.releaseDate);
      let day = releaseDate.getDate();
      let month = releaseDate.getMonth();
      let year = releaseDate.getUTCFullYear();
      this.startDate = new Date(year, month, day);
    }
  }

  saveCancion(artistName, copyright) {
    this.cancion.artistName = artistName;
    this.cancion.copyright = copyright;

    this.cancionService.uploadSong(this.cancion);
  }
}
