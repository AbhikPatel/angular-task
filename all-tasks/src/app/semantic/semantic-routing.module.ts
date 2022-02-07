import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemanticTask1Component } from './components/semantic-task1/semantic-task1.component';
import { SemanticTask2Component } from './components/semantic-task2/semantic-task2.component';
import { SemanticTask3Component } from './components/semantic-task3/semantic-task3.component';
import { SemanticTask4Component } from './components/semantic-task4/semantic-task4.component';
import { SemanticComponent } from './semantic.component';

const routes: Routes = [
  {path: 'semanmain', component:SemanticComponent,
    children: [
      {path:'task1', component: SemanticTask1Component},
      {path:'task2', component: SemanticTask2Component},
      {path:'task3', component: SemanticTask3Component},
      {path:'task4', component: SemanticTask4Component},
      {path:'', redirectTo:'task1', pathMatch:'full'},
    ]
  },
  {path: '', redirectTo:'semanmain', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SemanticRoutingModule { }
