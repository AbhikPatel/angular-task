import { Component, OnInit } from '@angular/core';
import { SubjectModel } from '../../models/subject.model';
import { SubjectService } from '../../subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  public listdata:SubjectModel[] = [];
  private activedata:SubjectModel;
  private activeid:number;
  private editmode:boolean;

  constructor(private service:SubjectService) { }

  ngOnInit(): void {
    this.display();
  }

  public display(){
    this.service.subject$.subscribe(data => {
      if(this.editmode){
        this.listdata[this.activeid] = data;
      }
      else{
        this.listdata.push(data)
      }
    })
  }

  public onedit(id:number){
    this.activedata = this.listdata[id];
    this.service.edit$.next(this.activedata);
    this.editmode = true;
    this.activeid = id;
  }

  public ondelete(id:number){
    this.listdata.splice(id,1)
  }

}
