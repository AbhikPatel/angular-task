import { Component, OnInit } from '@angular/core';
import { User } from '../../models/ceo.model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  listdata:User[]

  constructor(private ser:CompanyService) { }

  ngOnInit(): void {
    
    this.display();
  }

  display()
  {
    this.ser.getdata().subscribe(m => {
      this.listdata = m
    })
  }

  deletedata(id:number)
  {
    this.ser.deldata(id).subscribe(() =>{
      this.display();
    })
  }


}
