import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'reactive', 
    loadChildren: () => import('./modules/reactive-forms/reactive-forms.module').then(m => m.ReactiveFormsModule) },
  { path: 'bind', 
    loadChildren: () => import('./modules/data-bind/data-bind.module').then(m => m.DataBindModule) },
  {
    path: '', redirectTo:'reactive', pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
