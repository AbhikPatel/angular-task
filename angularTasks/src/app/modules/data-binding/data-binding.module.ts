import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingRoutingModule } from './data-binding-routing.module';
import { DataBindingComponent } from './data-binding.component';
import { DataBindComponent } from './components/data-bind/data-bind.component';
import { DataDirectivesComponent } from './components/data-directives/data-directives.component';
import { DataPipesComponent } from './components/data-pipes/data-pipes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DataBindingComponent,
    DataBindComponent,
    DataDirectivesComponent,
    DataPipesComponent
  ],
  imports: [
    CommonModule,
    DataBindingRoutingModule,
    FormsModule
  ]
})
export class DataBindingModule { }
