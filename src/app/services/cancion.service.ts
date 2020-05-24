import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Cancion } from '../models/Cancion';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CancionService {
  cancion: BehaviorSubject<Cancion>;

  constructor(private http: HttpClient, private afDB: AngularFireDatabase) {
    this.cancion = new BehaviorSubject(null);
  }

  getCanciones(): Observable<Cancion[]> {
    return this.afDB.list('/').snapshotChanges().pipe(
      map(res => {
        return res.map(element => {
          let cancion = element.payload.toJSON();
          cancion["$key"] = element.key;
          return cancion as Cancion;
        });
    }));
  }

  uploadSong(song: Cancion): void {
    let ref = '/' + song.id;

    console.log(ref);

    this.afDB.object(ref).update({
      artistName: song.artistName,
      copyright: song.copyright
    });
  }

  getCancion(): Observable<any> {
    return this.cancion.asObservable();
  }

  setCancion(cancion): void {
    this.cancion.next(cancion);
  }
}
