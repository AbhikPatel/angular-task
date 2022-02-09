import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/ceo.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  api:string;

  constructor(private http:HttpClient) { 
    this.api = environment.baseUrl;
  }

  postdata(formvalue:User):Observable<User[]>
  {
    return this.http.post<User[]>(`${this.api}employeedb`,formvalue)
  }

  getdata():Observable<User[]>
  {
    return this.http.get<User[]>(`${this.api}employeedb`)
  }

 

  deldata(id:number):Observable<User[]>
  {
    return this.http.delete<User[]>(`${this.api}employeedb/${id}`)
  }

  

  
}
