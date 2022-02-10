import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../../models/ceo.model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  isedit:boolean = false;
  department: Department[] ;
  getid:number;
  btn:string;
  useradd:FormGroup;
  constructor(private route: Router, private bob:FormBuilder, private ser:CompanyService, private activeroute:ActivatedRoute) { 
    this.useradd = this.garbage();

  }


  ngOnInit(): void {

    this.getdepart()

    this.getid = this.activeroute.snapshot.params['id'];
    if(this.getid)
    {
      this.isedit = true;
    }

    if(this.isedit)
    {
      this.ser.getbyid(this.getid).subscribe((m) => {
        this.useradd.patchValue(m)
      })

      this.btn = 'Update';
    }
    else{
      this.btn = "Save";
    }
  }

  garbage()
  {
    return this.bob.group(
      {
        firstname:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
        lastname:['',[Validators.required,Validators.minLength(5)]],
        phone:['',[Validators.required,Validators.maxLength(10)]],
        elemail:['',[Validators.required,Validators.email]],
        umer:['',[Validators.required,Validators.maxLength(2)]],
        gen:['',[Validators.required]],
        birth:['',[Validators.required]],
        depart:['',[Validators.required]],
      }
    )
  }



  savedata()
  {
    this.ser.postdata(this.useradd.value).subscribe(() => {
      alert('Data is Saved')
      this.route.navigate(['/employee/list']);
    })
  }

  onsubmit(){
    if(this.isedit)
    {
      this.updata();
    }else{
      this.savedata();
    }
  }

  updata(){
    this.ser.updatedata(this.getid,this.useradd.value).subscribe(() =>{
      alert('Data is Updated')
      this.route.navigate(['/employee/list']);
    })
  }



  get firstname() { return this.useradd.get('firstname') }
  get lastname() { return this.useradd.get('lastname') }
  get phone() { return this.useradd.get('phone') }
  get elemail() { return this.useradd.get('elemail') }
  get umer() { return this.useradd.get('umer') }
  get gen() { return this.useradd.get('gen') }
  get birth() { return this.useradd.get('birth') }
  get depart() { return this.useradd.get('depart') }
  get skillfunc() { return this.useradd.get('skillfunc') }


  getdepart()
  {
    this.ser.getdepart().subscribe((m) => {
      this.department = m;
    })  
  }

}
