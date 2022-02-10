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
        education: this.bob.array([]),
      }
    )
  }

  
  // get test()
  // {
  //   return this.resumeadd.controls
  // }

  get firstname() { return this.resumeadd.get('firstname')}
  get position() { return this.resumeadd.get('position')}
  get elemail() { return this.resumeadd.get('elemail')}
  get phone() { return this.resumeadd.get('phone')}
  get tech() { return this.resumeadd.get('techical')}
  get company() { return this.resumeadd.get('experience')}
  get role() { return this.resumeadd.get('experience')}
  get startyear() { return this.resumeadd.get('experience')}
  get endyear() { return this.resumeadd.get('experience')}
  get school() { return this.resumeadd.get('education')}
  get gpa() { return this.resumeadd.get('education')}


  ngOnInit(): void {

    this.addfield();
    this.addexgroup();
  }
  
  formarr(arrname:string):FormArray{
    return this.resumeadd.controls[arrname] as FormArray;
  }
  

  addfield(){
    this.formarr('technical').push(
      this.bob.group({
        tech: ['',[Validators.required]]
      })
    )
  }

  addexgroup()
  {
    this.formarr('experience').push(
      this.bob.group(
        {
          company:['',[Validators.required]],
          role:['',[Validators.required]],
          startyear:['',[Validators.required,Validators.minLength(4)]],
          endyear:['',[Validators.required,Validators.minLength(4)]],
        }
      )
    )
  }

  addedu()
  {
    this.formarr('education').push(
      this.bob.group(
        {
          school:['',[Validators.required]],
          gpa:['',[Validators.required,Validators.maxLength(3)]],
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

  removeedu(index: number){
    this.formarr('education').removeAt(index);
  }
  
  savedata(){

    this.ser.deleteresumedata(1).subscribe(() => {

      this.ser.postresumedata(this.resumeadd.value).subscribe(() => {
        alert('Data is Saved');
        
        this.link.navigate(['/resume/resumeview'])
      })
    })
      
    console.log(this.resumeadd.value);
    
  }

  
}
