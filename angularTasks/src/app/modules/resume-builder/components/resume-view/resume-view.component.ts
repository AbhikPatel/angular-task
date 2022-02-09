import { Component, OnInit } from '@angular/core';
import { Resumedata } from '../../models/modeldata.model';
import { ResumeServiceService } from '../../services/resume-service.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss']
})
export class ResumeViewComponent implements OnInit {

  tableadd:Resumedata[]

  constructor(private ser: ResumeServiceService) { }

  ngOnInit(): void {
    this.display()
  }

  display()
  {
    this.ser.getresumedata().subscribe((m) => {
      this.tableadd = m;
    })
  }
}
