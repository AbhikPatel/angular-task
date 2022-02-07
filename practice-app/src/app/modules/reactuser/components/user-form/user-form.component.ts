import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  useradd:FormGroup;

  constructor(private bob:FormBuilder) { 

    this.useradd = this.bob.group(
      {
        firstname: ['',[Validators.required, Validators.minLength(5)]],
        lastname: ['',[Validators.required,Validators.minLength(5)]],
        phone: ['',[Validators.required,Validators.minLength(10)]],
        elemail: ['',[Validators.required,Validators.email]]
      }
    )
  }

  ngOnInit(): void {
  
  }

  final()
  {
    alert(this.useradd.value.lastname)
  }
}
