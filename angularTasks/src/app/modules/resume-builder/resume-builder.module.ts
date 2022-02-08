import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeBuilderComponent } from './resume-builder.component';


@NgModule({
  declarations: [
    ResumeBuilderComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule
  ]
})
export class ResumeBuilderModule { }
