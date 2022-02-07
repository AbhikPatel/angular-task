import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataCurrencyComponent } from './components/data-currency/data-currency.component';
import { DataDirectivesComponent } from './components/data-directives/data-directives.component';
import { DataPipesComponent } from './components/data-pipes/data-pipes.component';
import { DataTypesComponent } from './components/data-types/data-types.component';
import { DatabindComponent } from './databind.component';

const routes: Routes = [
  {path:'datacompo', component:DatabindComponent,
    children: [
      {path:'type', component: DataTypesComponent},
      {path:'pipes', component: DataPipesComponent},
      {path:'direct', component: DataDirectivesComponent},
      {path:'current', component: DataCurrencyComponent},
      {path:'', redirectTo:'type', pathMatch:''},
    ],
    

  },
  {path:'', redirectTo:'datacompo', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabindRoutingModule { }
