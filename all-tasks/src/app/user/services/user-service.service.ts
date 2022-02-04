import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl:string = environment.base;

  constructor(private http: HttpClient) { 

  }

  getAllUser():Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getById(id: number):Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  create(data:User):Observable<User> {
    return this.http.post<User>(this.baseUrl, data);
  }

  update(id: number, data:User):Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number):Observable<number> {
    return this.http.delete<number>(`${this.baseUrl}/${id}`);
  }
}
