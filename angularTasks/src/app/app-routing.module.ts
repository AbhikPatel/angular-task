import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'employee', pathMatch:'full'},
  { path: 'employee', 
    loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule) }, 
  { path: 'resume', 
    loadChildren: () => import('./modules/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule) },
  { path: 'user', loadChildren: () => import('./assessment/user/user.module').then(m => m.UserModule) },
  { path: 'databind', loadChildren: () => import('./modules/data-binding/data-binding.module').then(m => m.DataBindingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
