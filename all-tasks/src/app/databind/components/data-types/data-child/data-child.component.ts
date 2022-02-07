import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-data-child',
  templateUrl: './data-child.component.html',
  styleUrls: ['./data-child.component.css']
})
export class DataChildComponent implements OnInit {

  @Input() childnasto:string = '';

  @Output() childdata = new EventEmitter<string>();

  enter:string = '';

  constructor() { }

  ngOnInit(): void {

  }

}
