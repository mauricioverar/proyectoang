import { Pipe, PipeTransform } from '@angular/core';

// decorador @Pipe
@Pipe({
  name: 'estados'
})
  // estados
export class EstadosPipe implements PipeTransform {

  // cuando ejecuta pipe value es el nombre, srgs como 'short'
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('func ejecutando')
    const text = value === 0 ? 'PENDIENTE' : 'REGISTRADO'
    // return null;
    return text
  }

}
