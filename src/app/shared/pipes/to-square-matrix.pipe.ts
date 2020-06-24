import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toSquareMatrix'
})
export class ToSquareMatrixPipe implements PipeTransform {

  transform(value: any[]): any[][] {
    const length = value.length;
    const n = Math.ceil(Math.sqrt(length));
    const matrix = [];
    for (let index = 0; index < n; index++) {
      matrix.push(value.slice(index * n, (index * n) + n));
    }
    return matrix;
  }

}
