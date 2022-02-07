import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'react', 
    loadChildren: () => import('./modules/reactuser/reactuser.module').then(m => m.ReactuserModule) }, 
  { path: 'resume', 
    loadChildren: () => import('./modules/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule) },
  { path:'', redirectTo:'react', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
