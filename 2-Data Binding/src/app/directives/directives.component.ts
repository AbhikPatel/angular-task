import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }


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

  // ngfor Datas
  users = [
    {id: 1, name:'Abhishek' , age: 22, city:'Valsad', country:'India'},
    {id: 2, name:'Ankit' , age: 22, city:'Valsad', country:'India'},
    {id: 3, name:'Chirag' , age: 22, city:'Valsad', country:'India'},
    {id: 4, name:'Shreya' , age: 22, city:'Valsad', country:'India'},
    {id: 5, name:'Bhodo' , age: 22, city:'Valsad', country:'India'},
    {id: 6, name:'Nirali' , age: 22, city:'Valsad', country:'India'},
  ]
}
