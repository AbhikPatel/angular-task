import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { DirectivesComponent } from './directives/directives.component';



const routes: Routes = [
  {path: 'datalink', component: DataComponent},
  {path: 'directivelink', component: DirectivesComponent},
  {path: 'userform',
    loadChildren: () => import('./user-form/user-form.module').then((m) => m.UserFormModule)},
  {path: '', redirectTo:'/datalink', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
