import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  useradd:FormGroup
  constructor(private route: Router, private bob:FormBuilder, private ser:CompanyService) { 
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
        umer:['',[Validators.required]]
      }
    )
  }

  nav()
  {
    this.ser.postdata(this.useradd.value).subscribe(() => {
      alert('Data is Saved go to list')
    })
    this.route.navigate(['/employee/list']);
  }
}
