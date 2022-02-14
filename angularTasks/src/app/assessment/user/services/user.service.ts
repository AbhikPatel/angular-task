import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // making variable for the http link
  api:string

  constructor(private http:HttpClient) { 

    // transferring link into api
    this.api = environment.baseUrl

  }

  // Post data: Transferring form data to database
  postuserdata(currentvalue:User):Observable<User[]>{
    return this.http.post<User[]>(`${this.api}userdatabase`,currentvalue)
  }

  // Get Date: Displaying data in the list table
  getuserdata():Observable<User[]>{
    return this.http.get<User[]>(`${this.api}userdatabase`)
  }

  // Deleting data from the list 
  deleteuserdata(id:number):Observable<User[]>{
    return this.http.delete<User[]>(`${this.api}userdatabase/${id}`)
  }

  // Getting id for edit
  geteditid(id:number):Observable<User[]>{
    return this.http.get<User[]>(`${this.api}userdatabase/${id}`)
  }

  // Updating value of the current patched value
  updateuserdata(id:number,updatedata:User):Observable<User[]>{
    return this.http.put<User[]>(`${this.api}userdatabase/${id}`,updatedata)
  }

  // Getting Department Values
  getdepartment():Observable<Department[]>
  {
    return this.http.get<Department[]>(`${this.api}department`)
  }
}
