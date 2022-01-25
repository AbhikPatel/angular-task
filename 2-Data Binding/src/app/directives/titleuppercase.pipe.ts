import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleuppercase'
})
export class TitleuppercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let first = value.substr(0,1).toUpperCase();
    return first + value.substr(1);
  }

}
