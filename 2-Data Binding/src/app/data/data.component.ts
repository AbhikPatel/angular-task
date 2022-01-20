import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  title = 'task-6';

  Myname = 'Abhishek Kishorbhai Patel';
  Myage = 22;

  colorpro = 'green';

  place = 'Gujarat - 396001';

  myclass = 'text';

  showalert(){
    alert("Aur janab, Kya chal raha hai?")
  }

  truck = '';

  parentnasto = 'Sandwich';

  male = 'boyzz';

  female = 'gl';

  ans = '';

  employee = [
    { id: 12, name : 'Abhishek'},
    { id: 45, name : 'Chirag'},
    { id: 17, name : 'Abloh'},
    { id: 78, name : 'Shreya'},
    { id: 24, name : 'Nirali'},
    { id: 69, name : 'Ankit'},
    { id: 52, name : 'Bachchan'},
    { id: 75, name : 'Bhodo'},
    { id: 36, name : 'Bablu'}
  ]
  ngOnInit(): void {
  }

}
