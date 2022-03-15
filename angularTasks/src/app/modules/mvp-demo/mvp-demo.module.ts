import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvpDemoRoutingModule } from './mvp-demo-routing.module';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserFormPresentationComponent } from './user-form-container/user-form-presentation/user-form-presentation.component';
import { UserListPresentationComponent } from './user-list-container/user-list-presentation/user-list-presentation.component';


@NgModule({
  declarations: [
    UserFormContainerComponent,
    UserListContainerComponent,
    UserFormPresentationComponent,
    UserListPresentationComponent
  ],
  imports: [
    CommonModule,
    MvpDemoRoutingModule
  ]
})
export class MvpDemoModule { }
