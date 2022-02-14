import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department, User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  // Variable to store the data
  userformgroup:FormGroup;
  tablesize:number = 12
  userlistdata:User[];
  departmentfilter:Department[];
  search:string = '';

  constructor(private service:UserService, private userbuilder:FormBuilder) { 
    // Adding form Buiilder
    this.userformgroup = this.addgroupbuider()

  }

  ngOnInit(): void {
    // For Displaying Data and Department
    this.displaydata()
    this.getdepartment()
  }

  pageing()
  {
    this.tablesize = this.userlistdata.length
  }
  

  // Displaying data on the list
  displaydata()
  {
    this.service.getuserdata().subscribe((listdata) => {
      this.userlistdata = listdata
    })
  }

  // Deleted the selected data from the list
  ondelete(deleteid:number)
  {
    this.service.deleteuserdata(deleteid).subscribe(() => {
      alert('Data deleted')
      this.displaydata()
    })
  }

  // Bringing the department data from the database
  getdepartment(){
    this.service.getdepartment().subscribe((data) => {
      this.departmentfilter = data
    })
  }


  // Start: Address Feild
  addgroupbuider(){
    return  this.userbuilder.group(
      {
        address: this.userbuilder.array(
          [ this.addressfield() ]
        )
      }
    )
  }

  get validatorfunc(){
    return this.userformgroup.controls;
  }

  get address():FormArray{
    return this.userformgroup.controls['address'] as FormArray;
  }

  addressfield():FormGroup{
    return this.userbuilder.group({
      address:['', [Validators.required]]
    })
  }

  addaddress(){
    this.address.push(this.addressfield());
  }

  removeaddress(i: number){
    if(this.addressfield.length != 1){
      this.address.removeAt(i)
    }
  }
  // End: Address Feild
}
