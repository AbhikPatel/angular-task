import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResumeServiceService } from '../../services/resume-service.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {

  resumeadd:FormGroup
  id:number = 1;
  constructor(private bob:FormBuilder, private ser:ResumeServiceService, private link:Router) { 
    this.resumeadd = this.garbage();
  }

  garbage()
  {
    return this.bob.group(
      {
        firstname:['',[Validators.required,Validators.minLength(5)]],
        position:['',[Validators.required]],
        elemail:['',[Validators.required,Validators.email]],
        phone:['',[Validators.required],Validators.maxLength(10)],
      }
    )
  }

  get firstname() { return this.resumeadd.get('firstname') }
  get position() { return this.resumeadd.get('position') }
  get elemail() { return this.resumeadd.get('elemail') }
  get phone() { return this.resumeadd.get('phone') }

  ngOnInit(): void {
  }

  
  
  savedata(){

    this.ser.deleteresumedata(1).subscribe(() => {

      this.ser.postresumedata(this.resumeadd.value).subscribe(() => {
        alert('Data is Saved');
        
        this.link.navigate(['/resume/resumeview'])
      })
    })
      
  }
  
}
