import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-pipes',
  templateUrl: './data-pipes.component.html',
  styleUrls: ['./data-pipes.component.scss']
})
export class DataPipesComponent implements OnInit {

  price:number = 2000;

  constructor() { }

  ngOnInit(): void {
  }

}
