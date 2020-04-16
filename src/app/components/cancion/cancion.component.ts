import { Component, OnInit } from '@angular/core';
import { Cancion } from '../../models/Cancion';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {
  cancion: Cancion;
  constructor() { }

  ngOnInit(): void {
    this.cancion = {
        artistName: 'Black Eyed Peas, Ozuna & J. Rey Soul',
        id: '1506255186',
        releaseDate: '2020-04-10',
        name: 'MAMACITA',
        duration: 249142,
        collectionName: 'MAMACITA - Single',
        kind: 'song',
        copyright: '℗ 2020 BEP Music, LLC, under exclusive license to Epic Records, a division of Sony Music Entertainment',
        artistId: '360391',
        contentAdvisoryRating: 'Explicit',
        artistUrl: 'https://music.apple.com/WebObjects/MZStore.woa/wa/viewCollaboration?cc=es&ids=360391-283578837-1506254853&app=itunes',
        artworkUrl: 'https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/81/dc/5e/81dc5e66-7211-d066-0a82-386f719f22cf/886448348825.jpg/200x200bb.png',
        genres: [
          {
            genreId: '14',
            name: 'Pop'
          },
          {
            genreId: '34',
            name: 'Música'
          }
        ],
        url: 'https://p.scdn.co/mp3-preview/13f5bac06aaa574b88d0bf452d8d04f5f64be3b1?cid=774b29d4f13844c495f206cafdad9c86'
      };
  }

}

