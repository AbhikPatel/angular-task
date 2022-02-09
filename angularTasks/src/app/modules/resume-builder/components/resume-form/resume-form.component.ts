import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
        phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]],
        technical: this.bob.array([]),
        experience: this.bob.array([]),
      }
    )
  }

  
  get firstname() { return this.resumeadd.get('firstname') }
  get position() { return this.resumeadd.get('position') }
  get elemail() { return this.resumeadd.get('elemail') }
  get phone() { return this.resumeadd.get('phone') }
  // get technical() { return this.resumeadd.get('technical') }

  ngOnInit(): void {

    this.addfield();
    this.addexgroup();
  }
  
  formarr(arrname:string):FormArray{
    return this.resumeadd.controls[arrname] as FormArray;
  }
  

  addfield(){
    this.formarr('technical').push(
      this.bob.control('',)
    )
  }

  addexgroup()
  {
    this.formarr('experience').push(
      this.bob.group(
        {
          company:['',[Validators.required]],
          role:['',[Validators.required]],
          startyear:['',[Validators.required,Validators.maxLength(4)]],
          endyear:['',[Validators.required,Validators.maxLength(4)]],
        }
      )
    )
  }

  removefield(index: number){
    this.formarr('technical').removeAt(index);
  }

  removeexgroup(index: number){
    this.formarr('experience').removeAt(index);
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
