import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  groupvalue: FormGroup;

  constructor(private bob: FormBuilder, private service: UserServiceService) {
    this.groupvalue = this.adduser();
   }

  ngOnInit(): void {
  }

  adduser():FormGroup{
    return this.bob.group(
      {
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        mail:['',Validators.required],
        pnum:[],
        dob:[],
        gender:[]
      }
    )
  }

  createuser(){
    this.service.create(this.groupvalue.value).subscribe(() =>{
      alert(" Data Saved ho chuka")
    })
  }

}
