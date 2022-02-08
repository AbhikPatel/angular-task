import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/reactuser.model';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  api:string
  constructor(private http: HttpClient) { 

    this.api = environment.baseUrl
  }

  // Data Coming From Form
  saveuser(formvalue:User):Observable<User[]>
  {
    return this.http.post<User[]>(`${this.api}/user`,formvalue)
  }

  // Display data into list
  getuser():Observable<User[]>
  {
    return this.http.get<User[]>(`${this.api}/user`)
  }

  delser(id:number):Observable<User[]>
  {
    return this.http.delete<User[]>(`${this.api}/user/${id}`)
  }
}
