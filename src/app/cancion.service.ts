import { Injectable } from '@angular/core';
import listaCanciones from '../assets/canciones.json';
import { Cancion } from './models/Cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  constructor() { }

  getCanciones():Cancion[] {
    return listaCanciones;
  }
}
