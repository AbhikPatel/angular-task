import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-demo',
  templateUrl: './js-demo.component.html',
  styleUrls: ['./js-demo.component.scss']
})
export class JsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Employee = [
    { emp_id : 1, emp_name : 'Abhishek', salary: 15000, company: '1Rivet', city:'Valsad' },
    { emp_id : 2, emp_name : 'Ankit', salary: 25000, company: 'Google', city:'Vapi' },
    { emp_id : 2, emp_name : 'Ankit', salary: 25000, company: '1Rivet', city:'Vapi' },
    { emp_id : 3, emp_name : 'Aman', salary: 35000, company: '1Rivet', city:'Vapi' },
    { emp_id : 4, emp_name : 'Chirag', salary: 150, company: '1Rivet', city:'Daman' },
    { emp_id : 5, emp_name : 'Varun', salary: 25000, company: 'Logicwind', city:'Surat' },
    { emp_id : 6, emp_name : 'Pravin', salary: 10000, company: 'logicwind', city:'Surat' },
    { emp_id : 7, emp_name : 'Pranav', salary: 5000, company: 'Coruscate', city:'Surat' },
    { emp_id : 8, emp_name : 'Viral', salary: 5000, company: 'Coruscate', city:'Maghod' },
];

}
