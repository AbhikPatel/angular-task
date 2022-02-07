import { Component, OnInit } from '@angular/core';
import { TabledataService } from '../../services/tabledata.service';

@Component({
  selector: 'app-data-currency',
  templateUrl: './data-currency.component.html',
  styleUrls: ['./data-currency.component.css']
})
export class DataCurrencyComponent implements OnInit {

  testdata:string = '';
  
  constructor( private ser:TabledataService) { }

  ngOnInit(): void {

    this.ser.testinput = this.testdata;
  }

}
