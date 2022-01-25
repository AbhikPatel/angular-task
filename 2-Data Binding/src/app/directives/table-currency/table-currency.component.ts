import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-currency',
  templateUrl: './table-currency.component.html',
  styleUrls: ['./table-currency.component.css']
})
export class TableCurrencyComponent implements OnInit {

  constructor() { }

  price:number = 2000;

  ngOnInit(): void {
  }

}
