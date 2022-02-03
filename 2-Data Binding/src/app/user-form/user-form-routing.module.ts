import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: '', component: DashboardComponent,
    children: [
      {path: '', component: UserListComponent},
      {path: 'add', component: UserAddComponent},
      {path: 'list', component: UserListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFormRoutingModule { }
