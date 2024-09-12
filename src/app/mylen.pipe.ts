import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mylen'
})
export class MylenPipe implements PipeTransform {

  transform(value: string): number {
    return value.length;
  }

}
