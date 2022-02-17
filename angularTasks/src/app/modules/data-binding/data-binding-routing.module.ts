import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindComponent } from './components/data-bind/data-bind.component';
import { DataDirectivesComponent } from './components/data-directives/data-directives.component';
import { DataPipesComponent } from './components/data-pipes/data-pipes.component';
import { DataBindingComponent } from './data-binding.component';

const routes: Routes = [
  { path: 'data', component: DataBindingComponent,
    children:[
      { path:'bind', component:DataBindComponent},
      { path:'directive', component:DataDirectivesComponent},
      { path:'pipes', component:DataPipesComponent},
      { path:'', redirectTo:'bind', pathMatch:'full'},
    ]
  },
  { path:'', redirectTo:'data', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingRoutingModule { }
