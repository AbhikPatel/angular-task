import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../models/user.model';

@Pipe({
  name: 'getbyid'
})
export class UserPipe implements PipeTransform {

  transform(value: unknown, departname:Department[]): string | undefined {
    return departname?.find(data => data.id == value)?.name
  }

}
