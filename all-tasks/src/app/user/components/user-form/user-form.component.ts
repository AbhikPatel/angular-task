import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  useradd:FormGroup;
  constructor(private bob : FormBuilder) {

    this.useradd = this.control();
  }

  ngOnInit(): void {
  }

  control():FormGroup
  {
    return this.bob.group(
      {
        firstname: [ '', [Validators.required , Validators.minLength(5)]],
        lastname: [ '', Validators.required],
        phone: [ '', Validators.required],
        elemail: [ '', Validators.required],
        gender: [ '', Validators.required],
      }
    )
  }

  final()
  {
    alert(this.useradd.value.gender)
  }
}
