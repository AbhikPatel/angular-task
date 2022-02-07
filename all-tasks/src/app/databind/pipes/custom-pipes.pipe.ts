import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {

  transform(pipetext:string) {
    return pipetext + ' Custom Pipe added';
  }

}
