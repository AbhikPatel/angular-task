import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'seman',
    loadChildren: () => import('./semantic/semantic.module').then((a) => a.SemanticModule)
  },
  { path: '', redirectTo:'seman', pathMatch:'full'},
  {path:'react',
    loadChildren: () => import('./user/user.module').then((a) => a.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
