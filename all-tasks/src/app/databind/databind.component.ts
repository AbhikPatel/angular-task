import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  parentnasto:string = 'Pavva';

  constructor() { }

  ngOnInit(): void {
  }

}
