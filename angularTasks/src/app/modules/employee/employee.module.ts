import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './services/company.service';
import { IdFilterPipe } from './pipes/id-filter.pipe';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    IdFilterPipe
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
   CompanyService
  ],
  exports:[
    EmployeeComponent
  ]
})
export class EmployeeModule { }
