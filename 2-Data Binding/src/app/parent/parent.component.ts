import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  parentnasto = 'Pavwa';

  blank = '';

  ngOnInit(): void {
  }
 
  parentFunction(childata:any)
  {
    this.blank = childata.name;
  }

}
