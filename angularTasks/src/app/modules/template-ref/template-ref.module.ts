import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRefRoutingModule } from './template-ref-routing.module';
import { TemplateRefComponent } from './template-ref.component';


@NgModule({
  declarations: [
    TemplateRefComponent
  ],
  imports: [
    CommonModule,
    TemplateRefRoutingModule
  ]
})
export class TemplateRefModule { }
