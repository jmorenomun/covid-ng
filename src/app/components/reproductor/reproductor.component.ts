import { Component, OnInit, Input } from '@angular/core';
import { Cancion } from '../../models/Cancion';
import { AudioService } from '../../services/audio.service';
import { CancionService } from '../../services/cancion.service';
import { StreamState } from '../../models/StreamState';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css'],
})
export class ReproductorComponent implements OnInit {
  @Input() cancion: any;

  canciones: Cancion[];
  state: StreamState;

  constructor(
    public audioService: AudioService,
    public cancionService: CancionService
  ) {}

  ngOnInit(): void {
    // Cargar datos json
    this.cancionService.getCanciones().subscribe((canciones) => {
      this.canciones = canciones;
    });

    // listen to stream state
    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });
  }

  // On Change
  ngOnChanges() {
    if (this.cancion) {
      this.playStream(this.cancion.url);
      // this.cancionActual = this.cancion;
    }
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe((events) => {});
  }

  reproducirCancion(id) {
    this.cancion = this.canciones.find((cancion) => cancion.id === id);
    this.audioService.stop();
    this.playStream(this.cancion.url);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  previous() {
    const id = this.cancion.id - 1;
    this.reproducirCancion(id);
  }

  next() {
    const id = this.cancion.id + 1;
    this.reproducirCancion(id);
  }

  isFirstPlaying() {
    return this.cancion.id === 1;
  }

  isLastPlaying() {
    return this.cancion.id === this.canciones.length;
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }
}
