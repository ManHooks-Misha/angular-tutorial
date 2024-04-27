import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'faren2Celius'
})
export class Faren2CeliusPipe implements PipeTransform {

  transform(value: number): number {
    // Fahrenheit to Celsius conversion: C = (F - 32) * 5/9
    return ((value - 32) * 5) / 9;
  }

}
