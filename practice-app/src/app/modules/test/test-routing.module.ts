import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Testcompo1Component } from './components/testcompo1/testcompo1.component';
import { Testcompo2Component } from './components/testcompo2/testcompo2.component';

const routes: Routes = [

  { path: '',
  
  children:[
    { path: 'compo1', component: Testcompo1Component },
    { path: 'compo2', component: Testcompo2Component },
    { path: '', redirectTo: 'compo1', pathMatch: 'full' }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
