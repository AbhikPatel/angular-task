import { Component, OnInit } from '@angular/core';
import { details } from '../details';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrls: ['./table-user.component.css']
})
export class TableUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ngfor Datas
  currentdata? : details;

  users: details[] = [
    {id: 1, name:'Abhishek' , age: 22, city:'valsad', country:'India'},
    {id: 2, name:'Ankit' , age: 21, city:'vapi', country:'India'},
    {id: 3, name:'Chirag' , age: 2, city:'daman', country:'India'},
    {id: 4, name:'Shreya' , age: 25, city:'kundi', country:'India'},
    {id: 5, name:'Bhodo' , age: 12, city:'billimora', country:'India'},
    {id: 6, name:'Nirali' , age: 20, city:'kosamba', country:'India'},
  ];


  trackBydetailId(index:number, users:details):number{
    return users.id;
  }

  onSelect(users: details){
    this.currentdata = users;
  }
}
