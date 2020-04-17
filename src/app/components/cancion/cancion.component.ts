import { Component, OnInit, Input } from '@angular/core';
import { Cancion } from '../../models/Cancion';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css'],
})
export class CancionComponent implements OnInit {
  @Input() cancion: Cancion;

  constructor() {}

  ngOnInit(): void {}
}
