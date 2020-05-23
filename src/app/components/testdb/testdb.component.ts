import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, ActivatedRoute, Router } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testdb',
  templateUrl: './testdb.component.html',
  styleUrls: ['./testdb.component.css']
})

export class TestdbComponent implements OnInit {
  items$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;

  constructor() {
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFireDatabase
  }

  ngOnInit(): void {
    this.items$ = this.db.list("/", {
      query: {
        orderByChild: 'id'
      }
    });

  }

  // Muestra detalles
  mostrarLog() {
    console.log("Número de canciones en la db: " + this.items$.length);
  }
}
