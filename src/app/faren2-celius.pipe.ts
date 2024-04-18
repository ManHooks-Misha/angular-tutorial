import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'faren2Celius'
})
export class Faren2CeliusPipe implements PipeTransform {

  transform(value: number): number {
    return value+5;
  }

}
