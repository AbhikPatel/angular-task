import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { 
    // Data & time 
    setInterval(() => {
      this.date = new Date();
    }, 1);
  }
  date:Date= new Date();


  // ngIf Data 
  truedata:boolean = true;
  showtrue()
  {
    this.truedata = true
  }
  showfalse()
  {
    this.truedata = false
  }

  ngOnInit(): void {
  }

  
}
