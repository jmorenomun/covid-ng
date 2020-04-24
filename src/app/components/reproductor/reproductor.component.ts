import { Component, OnInit, Input } from '@angular/core';
import { Cancion } from '../../models/Cancion';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css'],
})
export class ReproductorComponent implements OnInit {
  @Input() cancion: Cancion;

  constructor() {}

  ngOnInit(): void {}
}
