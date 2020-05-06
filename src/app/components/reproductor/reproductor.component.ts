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
  @Input() primerCancion: any;

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
  }

  ngOnInit(): void {
    // Cargar datos json
    this.cancionService.getCanciones().subscribe((canciones) => {
      this.canciones = canciones;
    });
  }

  // On Change
  ngOnChanges() {
    if (this.cancion) {
      this.reproducirCancion(this.cancion.id);
    }
  }

  ngDoCheck() {
    if (this.state.playing && this.state.currentTime === this.state.duration) {
      setTimeout(() => {
        this.next();
      }, 1000);
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
    this.cancionService.cancionId.next(id);
  }

  next() {
    const id = this.isLastPlaying() ? 1 : this.cancion.id + 1;
    this.reproducirCancion(id);
    this.cancionService.cancionId.next(id);
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
