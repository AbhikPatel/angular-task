import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resumedata } from '../models/modeldata.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeServiceService {


  resumeapi:string
  constructor(private http:HttpClient) { 
    this.resumeapi = environment.baseUrl
  }

  postresumedata(formvalue:Resumedata):Observable<Resumedata>{
    return this.http.post<Resumedata>(`${this.resumeapi}resumedata`,formvalue)
  }

  getresumedata():Observable<Resumedata>{
    return this.http.get<Resumedata>(`${this.resumeapi}resumedata/1`)
  }

  deleteresumedata(id:number):Observable<Resumedata>{
    return this.http.delete<Resumedata>(`${this.resumeapi}resumedata/${id}`)
  }


}
