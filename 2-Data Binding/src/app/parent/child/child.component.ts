import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childnasto = 'Chocolate';
  @Output() parentFunction: EventEmitter<any> =  new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }
  senddata()
  {

    let childata = {name : 'Data of Parent', age : 22}
    this.parentFunction.emit(childata)
  }
  
}
