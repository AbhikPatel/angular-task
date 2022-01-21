import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path: 'data', component: DataComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'direct', component: DirectivesComponent},
  {path: '**', component: DataComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
