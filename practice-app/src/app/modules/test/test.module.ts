import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { Testcompo1Component } from './components/testcompo1/testcompo1.component';
import { Testcompo2Component } from './components/testcompo2/testcompo2.component';


@NgModule({
  declarations: [
    Testcompo1Component,
    Testcompo2Component
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
