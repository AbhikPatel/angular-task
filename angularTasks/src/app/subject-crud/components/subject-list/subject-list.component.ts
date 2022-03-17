import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  constructor() { }

  data = [
    {
      fname:'Abhishek',
      lname:'Patel',
      age: 28,
      gender:'Male'
    }
  ]

  ngOnInit(): void {
  }

}
