import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testdb',
  templateUrl: './testdb.component.html',
  styleUrls: ['./testdb.component.css']
})

export class TestdbComponent implements OnInit {
  items$: AngularFireList<any[]>;

  constructor(private afDB: AngularFireDatabase) { }

  ngOnInit(): void {
    this.items$ = this.afDB.list('/');

  }

  // Muestra detalles
  mostrarLog() {
/*
    this.items$.subscribe(value=> {
      console.log(this.items$);
    });
    */
  }
}
