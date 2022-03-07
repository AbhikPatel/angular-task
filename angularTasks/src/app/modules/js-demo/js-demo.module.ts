import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsDemoRoutingModule } from './js-demo-routing.module';
import { JsDemoComponent } from './js-demo.component';


@NgModule({
  declarations: [
    JsDemoComponent
  ],
  imports: [
    CommonModule,
    JsDemoRoutingModule
  ]
})
export class JsDemoModule { }
