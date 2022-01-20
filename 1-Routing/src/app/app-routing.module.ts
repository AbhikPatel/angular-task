import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Task1Component } from './MyComponents/task1/task1.component';
import { Task2Component } from './MyComponents/task2/task2.component';
import { Task3Component } from './MyComponents/task3/task3.component';
import { Task4Component } from './MyComponents/task4/task4.component';

const routes: Routes = [
  { path: '',   redirectTo: '/task1', pathMatch: 'full' },
  {
    path: 'task1', component : Task1Component
  },
  {
    path: 'task2', component : Task2Component
  },
  {
    path: 'task3', component : Task3Component
  },
  {
    path: 'task4', component : Task4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
