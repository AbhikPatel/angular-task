import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'seman',
    loadChildren: () => import('./semantic/semantic.module').then((a) => a.SemanticModule)
  },
  {
    path: 'react',
    loadChildren: () => import('./user/user.module').then((a) => a.UserModule)
  },
  {
    path: 'databind',
    loadChildren: () => import('./databind/databind.module').then((c) => c.DatabindModule)
  },
  { path: '', redirectTo: 'seman', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
