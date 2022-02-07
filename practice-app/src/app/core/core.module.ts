import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreSidebarComponent } from './components/core-sidebar/core-sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CoreSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CoreSidebarComponent
  ]
})
export class CoreModule { }
