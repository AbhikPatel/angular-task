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
        umer:['',[Validators.required,Validators.maxLength(2)]],
        gen:['',[Validators.required]],
      }
    )
  }

  nav()
  {
    this.ser.postdata(this.useradd.value).subscribe(() => {
      alert('Data is Saved')
      this.route.navigate(['/employee/list']);
    })
  }


  get firstname() { return this.useradd.get('firstname') }
  get lastname() { return this.useradd.get('lastname') }
  get phone() { return this.useradd.get('phone') }
  get elemail() { return this.useradd.get('elemail') }
  get umer() { return this.useradd.get('umer') }
}
