import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../models/ceo.model';

@Pipe({
  name: 'idFilter'
})
export class IdFilterPipe implements PipeTransform {

  transform(value: unknown, departname: Department[]): string | undefined{
    return departname?.find(m => m.id == value)?.name
  }

}
