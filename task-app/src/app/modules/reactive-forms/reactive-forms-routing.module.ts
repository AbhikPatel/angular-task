import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms.component';

const routes: Routes = [
  { path: 'reactiveHead', component: ReactiveFormsComponent },
  {path: '', redirectTo:'reactiveHead', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsRoutingModule { }
