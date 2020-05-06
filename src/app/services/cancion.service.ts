import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Cancion } from '../models/Cancion';

@Injectable({
  providedIn: 'root',
})
export class CancionService {
  cancion: BehaviorSubject<Cancion>;

  constructor(private http: HttpClient) {
    this.cancion = new BehaviorSubject(null);
  }

  getCanciones(): Observable<any> {
    return this.http.get('./assets/canciones.json');
  }

  getCancion(): Observable<any> {
    return this.cancion.asObservable();
  }

  setCancion(cancion): void {
    this.cancion.next(cancion);
  }
}
