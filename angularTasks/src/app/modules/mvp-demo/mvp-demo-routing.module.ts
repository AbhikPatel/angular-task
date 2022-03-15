import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';

const routes: Routes = [
  { path:'', 

    children: [
      { path:'', redirectTo:'mvplist', pathMatch:'full'},
      { path:'mvpform', component:UserFormContainerComponent},
      { path:'mvplist', component:UserListContainerComponent},
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvpDemoRoutingModule { }
