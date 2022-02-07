import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactuserRoutingModule } from './reactuser-routing.module';
import { ReactuserComponent } from './reactuser.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReactuserComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    ReactuserRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactuserModule { }
