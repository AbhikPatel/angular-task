import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateRefComponent } from './template-ref.component';

const routes: Routes = [{ path: '', component: TemplateRefComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRefRoutingModule { }
