import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreHeaderComponent } from './components/core-header/core-header.component';
import { RouterModule} from '@angular/router';
import { CoreSidebarComponent } from './components/core-sidebar/core-sidebar.component';



@NgModule({
  declarations: [
    CoreHeaderComponent,
    CoreSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CoreHeaderComponent,
    CoreSidebarComponent
  ]
})
export class CoreModule { }
