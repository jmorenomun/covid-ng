import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CancionService {
  constructor(private http: HttpClient) {}

  public getCanciones(): Observable<any> {
    return this.http.get('./assets/canciones.json');
  }
}
