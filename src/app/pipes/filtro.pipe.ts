import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resulCancion = [];
    for (const cancion of value) {
      if (cancion.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resulCancion.push(cancion);
      }
    }
    return resulCancion;
  }
}
