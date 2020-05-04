import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CancionService {
  cancionId: BehaviorSubject<number>;
  constructor(private http: HttpClient) {
    this.cancionId = new BehaviorSubject(null);
  }

  getCanciones(): Observable<any> {
    return this.http.get('./assets/canciones.json');
  }
}
