import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindComponent } from './data-bind.component';

const routes: Routes = [
  { path: 'bindhead', component: DataBindComponent },
  { path: '', redirectTo:'bondhead', pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindRoutingModule { }
