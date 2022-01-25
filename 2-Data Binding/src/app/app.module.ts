import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { DemoDirective } from './demo.directive';
import { DirectivesComponent } from './directives/directives.component';
import { TableCurrencyComponent } from './directives/table-currency/table-currency.component';
import { TableUserComponent } from './directives/table-user/table-user.component';
import { BgcolorDirective } from './directives/bgcolor.directive';
import { TitleuppercasePipe } from './directives/titleuppercase.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataComponent,
    ParentComponent,
    ChildComponent,
    DemoDirective,
    DirectivesComponent,
    TableCurrencyComponent,
    TableUserComponent,
    BgcolorDirective,
    TitleuppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
