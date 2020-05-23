import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestdbComponent } from './components/testdb/testdb.component';


const routes: Routes = [
  { path: 'test', component: TestdbComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
