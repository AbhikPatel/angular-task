import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  showMsg: boolean = false;

  constructor() {
    // Data & time 
    setInterval(() => {
      this.date = new Date();
    }, 1);
  }
  date: Date = new Date();


  // ngIf Data 
  truedata: boolean = true;
  showtrue() {
    this.showMsg = !this.showMsg;
  }

  ngOnInit(): void {
  }


  displaytrue: boolean = true;
  displayfalse: boolean = false;

}
