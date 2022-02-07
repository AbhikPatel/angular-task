import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  useradd: FormGroup;
  namebol:string = '';
  constructor( private bob: FormBuilder) {

    this.useradd = bob.group(
      // {
      //   firstname : new FormControl(),
      //   lastname : new FormControl(),
      //   phone : new FormControl(),
      //   elemail : new FormControl(),
      // }
      {
        firstname : ['', Validators.required],
        lastname : ['', Validators.required],
        phone : ['', [Validators.required]],
        elemail : ['', [Validators.required, Validators.email]],
      }
    )
  }

  ngOnInit(): void {
  }

  final()
  {
    this.namebol = this.useradd.value.firstname;
  }
}
