import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubjectService } from '../../subject.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {

  subjectform:FormGroup;
  

  constructor(private fb:FormBuilder, private ser:SubjectService) { 
    this.subjectform = this.builder();
  }

  ngOnInit(): void {
    this.patch();
  }

  public builder(){
    return this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      age:['',Validators.required],
      gender:['',Validators.required],
    })
  }

  public onsubmit(){
    this.ser.getdata(this.subjectform.value);
    this.subjectform.reset();
  }

  public patch(){
    this.ser.edit$.subscribe(data => {
      this.subjectform.patchValue(data);
    })
  }

}
