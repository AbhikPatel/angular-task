import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Department, User } from '../../models/ceo.model';
import { CompanyService } from '../../services/company.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  listdata:User[]
  departfilter:Department[]
  useradd:FormGroup[]
  constructor(private ser:CompanyService, private overlay:Overlay) { }

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

  // config of Overlay 

  openform(){ 
    let config = new OverlayConfig();
    config.positionStrategy = this.overlay.position().global().centerHorizontally().right();

    const overlayRef = this.overlay.create(config);

    const component = new ComponentPortal(EmployeeFormComponent);
    const componentRef = overlayRef.attach(component);

  }


}
