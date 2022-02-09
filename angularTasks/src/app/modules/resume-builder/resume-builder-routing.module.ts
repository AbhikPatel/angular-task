import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeFormComponent } from './components/resume-form/resume-form.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { ResumeBuilderComponent } from './resume-builder.component';

const routes: Routes = [
    { path: '', 
      children: [
        {path: '', redirectTo:'resumeform', pathMatch:'full'},
        {path:'resumeform', component: ResumeFormComponent},
        {path:'resumeview', component: ResumeViewComponent},
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeBuilderRoutingModule { }
