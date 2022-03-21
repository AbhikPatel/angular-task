import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubjectModel } from './models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subject$:Subject<SubjectModel>;
  edit$:Subject<SubjectModel>;

  constructor() { 
    this.subject$ = new Subject<SubjectModel>()
    this.edit$ = new Subject<SubjectModel>()
  }

  public getdata(data:SubjectModel){
    this.subject$.next(data);
  }
  
}
