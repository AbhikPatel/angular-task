import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { UserPipe } from './pipes/user.pipe';
import { SearchuserPipe } from './pipes/searchuser.pipe';
import { EmployeeModule } from 'src/app/modules/employee/employee.module';


@NgModule({
  declarations: [
    UserComponent,
    UserFormComponent,
    UserListComponent,
    UserPipe,
    SearchuserPipe,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    EmployeeModule
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
