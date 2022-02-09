import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Department, User } from '../../models/ceo.model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  listdata:User[]
  departfilter:Department[]
  useradd:FormGroup[]
  constructor(private ser:CompanyService) { }

  ngOnInit(): void {
    this.getdepartdata()
    this.display();
  }

  display()
  {
    this.ser.getdata().subscribe(m => {
      this.listdata = m
    })
  }

  getdepartdata(){
    this.ser.getdepart().subscribe((m) => {
      this.departfilter =m
    })
  }

  deletedata(id:number)
  {
    this.ser.deldata(id).subscribe(() =>{
      alert('Data is Deleted');
      this.display();
    })
  }

 


}
