import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.scss']
})
export class DataBindComponent implements OnInit {

  // Variables
  fname:string = 'Abhishek Patel';
  age:number = 22;
  data:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  eventbind(){
    alert('Hello there')
  }

}
