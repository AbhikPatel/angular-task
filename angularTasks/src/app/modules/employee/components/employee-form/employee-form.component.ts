import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  useradd:FormGroup
  constructor(private route: Router, private bob:FormBuilder) { 
    this.useradd = this.garbage();
  }


  ngOnInit(): void {
  }

  garbage()
  {
    return this.bob.group(
      {
        firstname:['',[Validators.required,Validators.minLength(5)]],
        lastname:['',[Validators.required,Validators.minLength(5)]],
        phone:['',[Validators.required,Validators.minLength(10)]],
        elemail:['',[Validators.required,Validators.email]],
        age:['',[Validators.required,Validators.maxLength(2)]],
        gen:['',[Validators.required]],
      }
    )
  }

  nav()
  {
    this.route.navigate(['/employee/list']);
  }
}
