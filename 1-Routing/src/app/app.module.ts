import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './MyComponents/task1/task1.component';
import { Task2Component } from './MyComponents/task2/task2.component';
import { Task3Component } from './MyComponents/task3/task3.component';
import { Task4Component } from './MyComponents/task4/task4.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { HeaderComponent } from './MyComponents/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
