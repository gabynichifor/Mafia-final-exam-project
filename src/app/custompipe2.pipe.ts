import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe2'
})
export class Custompipe2Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
