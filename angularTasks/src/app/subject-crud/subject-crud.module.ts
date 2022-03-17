import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectCrudRoutingModule } from './subject-crud-routing.module';
import { SubjectCrudComponent } from './subject-crud.component';
import { SubjectFormComponent } from './components/subject-form/subject-form.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubjectService } from './subject.service';


@NgModule({
  declarations: [
    SubjectCrudComponent,
    SubjectFormComponent,
    SubjectListComponent
  ],
  imports: [
    CommonModule,
    SubjectCrudRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    SubjectService
  ]
})
export class SubjectCrudModule { }
