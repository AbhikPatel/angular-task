import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './user.component';

const routes: Routes = [

  {path: 'userhead', component:UserComponent,
    children: [
      {path: 'form', component: UserFormComponent},
      {path: 'list', component: UserListComponent},
      {path: '', redirectTo:'list', pathMatch:'full'},
    ],
  },
  // {path: 'edit', component:UserFormComponent},
  { path: '', redirectTo:'userhead', pathMatch:'full'}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
