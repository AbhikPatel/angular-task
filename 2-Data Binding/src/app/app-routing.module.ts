import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { DirectivesComponent } from './directives/directives.component';



const routes: Routes = [
  {path: 'datalink', component: DataComponent},
  {path: 'directivelink', component: DirectivesComponent},
  {path: '', component: DataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
