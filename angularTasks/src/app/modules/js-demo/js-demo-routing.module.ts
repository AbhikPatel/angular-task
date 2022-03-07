import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsDemoComponent } from './js-demo.component';

const routes: Routes = [{ path: '', component: JsDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsDemoRoutingModule { }
