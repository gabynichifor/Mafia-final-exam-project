import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPIPE3'
})
export class CustomPIPE3Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
