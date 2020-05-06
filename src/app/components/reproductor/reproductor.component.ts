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
  @Input() primerCancion: any;
  cancion: Cancion;
  canciones: Cancion[];
  state: StreamState;

  constructor(
    public audioService: AudioService,
    public cancionService: CancionService
  ) {
    // listen to stream state
    this.audioService.getState().subscribe((state) => {
      this.state = state;
    });
    // listen to cancion actual
    this.cancionService.getCancion().subscribe((cancion) => {
      this.cancion = cancion;
    });
  }

  ngOnInit(): void {
    // Cargar datos json
    this.cancionService.getCanciones().subscribe((canciones) => {
      this.canciones = canciones;
    });

    this.cancionService.getCancion().subscribe((cancion) => {
      if (cancion) {
        this.reproducirCancion(cancion);
      }
    });
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe((events) => {
      if (events['type'] === 'ended') {
        setTimeout(() => {
          this.next();
        }, 1000);
      }
    });
  }

  reproducirCancion(cancion) {
    this.audioService.stop();
    this.playStream(cancion.url);
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
    const nextCancion = this.canciones.find((cancion) => cancion.id === id);
    this.cancionService.setCancion(nextCancion);
  }

  next() {
    const id = this.isLastPlaying() ? 1 : this.cancion.id + 1;
    const nextCancion = this.canciones.find((cancion) => cancion.id === id);
    this.cancionService.setCancion(nextCancion);
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
