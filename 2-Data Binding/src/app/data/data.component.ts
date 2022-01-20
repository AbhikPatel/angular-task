import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  title = 'task-6';

  // Interpolation Section 
  Myname = 'Abhishek Kishorbhai Patel';
  Myage = 22;

  // Property Binding  
  colorpro = 'green';
  place = 'Gujarat - 396001';

  // Event Binding 
  showalert(){
    alert("Aur janab, Kya chal raha hai?")
  }

  // Two Way Binding 
  truck = '';
  parentnasto = 'Sandwich';

  ngOnInit(): void {
  }

}
