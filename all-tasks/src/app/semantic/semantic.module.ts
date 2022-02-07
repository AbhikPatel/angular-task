import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemanticRoutingModule } from './semantic-routing.module';
import { SemanticHeaderComponent } from './components/semantic-header/semantic-header.component';
import { SemanticFooterComponent } from './components/semantic-footer/semantic-footer.component';
import { SemanticTask1Component } from './components/semantic-task1/semantic-task1.component';
import { SemanticTask2Component } from './components/semantic-task2/semantic-task2.component';
import { SemanticTask3Component } from './components/semantic-task3/semantic-task3.component';
import { SemanticTask4Component } from './components/semantic-task4/semantic-task4.component';
import { SemanticComponent } from './semantic.component';


@NgModule({
  declarations: [
    SemanticHeaderComponent,
    SemanticFooterComponent,
    SemanticTask1Component,
    SemanticTask2Component,
    SemanticTask3Component,
    SemanticTask4Component,
    SemanticComponent
  ],
  imports: [
    CommonModule,
    SemanticRoutingModule
  ]
})
export class SemanticModule { }
