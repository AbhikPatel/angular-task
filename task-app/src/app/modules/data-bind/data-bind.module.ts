import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindRoutingModule } from './data-bind-routing.module';
import { DataBindComponent } from './data-bind.component';


@NgModule({
  declarations: [
    DataBindComponent
  ],
  imports: [
    CommonModule,
    DataBindRoutingModule
  ]
})
export class DataBindModule { }
