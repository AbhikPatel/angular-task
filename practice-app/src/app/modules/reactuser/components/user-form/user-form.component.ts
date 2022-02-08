import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabledataService } from '../../services/tabledata.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  useradd:FormGroup;

  constructor(private bob:FormBuilder, private ser:TabledataService, private route: Router) { 

    this.useradd = this.bobfunc() ;
    
  }

  ngOnInit(): void {
  
  }

  bobfunc()
  {
    return this.bob.group(
      {
        firstname: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(15)]],
        lastname: ['',[Validators.required,Validators.minLength(5)]],
        phone: ['',[Validators.required,Validators.minLength(10)]],
        elemail: ['',[Validators.required,Validators.email]]
      }
    )
  }

  createuser()
  {
    this.ser.saveuser(this.useradd.value).subscribe(() => {
      alert(this.useradd.value.firstname);
      this.route.navigate(['./react/list'])
    })
}
}
