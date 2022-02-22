import { Component } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angularTasks';
  window:boolean;

  constructor(private ser:MainService) {
  }

  ngOnInit(): void {
    this.window = false
  }


}
