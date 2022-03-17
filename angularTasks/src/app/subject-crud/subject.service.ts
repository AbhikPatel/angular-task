import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubjectModel } from './models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  api:string;
  subject:Subject<SubjectModel>;

  constructor() { 
    this.subject = new Subject<SubjectModel>();
  }
  
}
