import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DeletePopupComponent } from 'src/app/shared/components/delete-popup/delete-popup.component';
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
      this.listdata = m;
    })
  }

  getdepartdata(){
    this.ser.getdepart().subscribe((m) => {
      this.departfilter =m;
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

  openform(id?:number){
    let config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().centerHorizontally().right();

    const overlayRef = this.overlay.create(config);

    const component = new ComponentPortal(EmployeeFormComponent);
    const componentRef = overlayRef.attach(component);

    if(id){
      componentRef.instance.overlayid = id;
    }
    componentRef.instance.cancel.subscribe(() => {
      overlayRef.detach();
      this.display();
    });
  }

  public deletepopup(id:number) {
      let config = new OverlayConfig();
  
      config.hasBackdrop = true;
      config.maxWidth = "400px";
      config.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
  
      const overlayRef = this.overlay.create(config);
      const component = new ComponentPortal(DeletePopupComponent);
      const componentRef = overlayRef.attach(component);
  
      componentRef.instance.value.subscribe((value) => {
        if (value) {
          this.deletedata(id);
          overlayRef.detach()
        }
        else {
          overlayRef.detach()
        }
      })
  
      overlayRef.backdropClick().subscribe(() => {
        overlayRef.detach();
      });
    }

  
}
