import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userformgroup:FormGroup;
  department: Department[]
  getid:number;
  ineditmode:boolean = false;
  btn:string = '';

  constructor(private userbuilder:FormBuilder, private service:UserService, private route:Router, private active:ActivatedRoute){ 
    // Adding formbuilder via function
    this.userformgroup = this.addbuilder()
  }

  ngOnInit(): void {

    this.departmentvalue()

    // Getting id by Url
    this.getid = this.active.snapshot.params['id'];

    // If its true it will enable Edit Mode
    if(this.getid)
    {
      this.ineditmode = true;
    }


    //If it is in edit mode it will get the id 
    if(this.ineditmode){
      this.service.geteditid(this.getid).subscribe((m) => {
        this.userformgroup.patchValue(m);
      })
      this.btn = 'Update'
    }else{
      this.btn = 'Add'
    }
  }


  // Adding group function for Validation
  addbuilder(){
    return this.userbuilder.group(
      {
        fullname:['',[Validators.required,Validators.pattern('[a-z A-Z]*')]],
        mail:['',[Validators.required,Validators.email]],
        mobile:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(15)]],
        city:['',[Validators.required,Validators.maxLength(15)]],
        gender:['',[Validators.required]],
        department:['',[Validators.required]]
      }
    )
  }

  // validator function
  get validatorfunc(){ return this.userformgroup.controls }

  // ngsubmit function
  onsubmit(){
    
    // if in Edit mode it will update
    if(this.ineditmode)
    {
      this.updatedata();
    }
    // if it is not in Edit mode it will call Save
    else{
      this.postdata();
    }
    
  }


  // Service function: Post Data 
  postdata(){
    this.service.postuserdata(this.userformgroup.value).subscribe(() => {
      alert('Data is Saved')
      this.route.navigate(['/user/userlist'])
    })
  }

  // Service function: Update Data 
  updatedata()
  {
    this.service.updateuserdata(this.getid,this.userformgroup.value).subscribe(() => {
      this.route.navigate(['/user/userlist'])
      alert('Data is Updated')
    })
  }

  // Service function: Department Data 
  departmentvalue()
  {
    this.service.getdepartment().subscribe((data) => {
      this.department = data
    })
  }

}
