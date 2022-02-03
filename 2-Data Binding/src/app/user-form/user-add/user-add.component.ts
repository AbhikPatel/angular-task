import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  groupvalue: FormGroup;

  constructor(private bob: FormBuilder) {
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
      }
    )
  }

}
