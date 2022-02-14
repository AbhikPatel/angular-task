import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'searchuser'
})
export class SearchuserPipe implements PipeTransform {

  transform(userdata: User[], search:string): User[] {
    if(search == ''){
      return userdata;
    }
    return userdata.filter((text:User) =>{
      return text.fullname.toLowerCase().match(search.toLowerCase())
  })
  }

}
