import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabindRoutingModule } from './databind-routing.module';
import { DatabindComponent } from './databind.component';
import { DataTypesComponent } from './components/data-types/data-types.component';
import { DataDirectivesComponent } from './components/data-directives/data-directives.component';
import { DataCurrencyComponent } from './components/data-currency/data-currency.component';
import { DataPipesComponent } from './components/data-pipes/data-pipes.component';
import { FormsModule } from '@angular/forms';
import { CustomPipesPipe } from './pipes/custom-pipes.pipe';
import { DataChildComponent } from './components/data-types/data-child/data-child.component';
import { TabledataService } from './services/tabledata.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DatabindComponent,
    DataTypesComponent,
    DataDirectivesComponent,
    DataCurrencyComponent,
    DataPipesComponent,
    CustomPipesPipe,
    DataChildComponent,
  ],
  imports: [
    CommonModule,
    DatabindRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    TabledataService
  ]
})
export class DatabindModule { }
