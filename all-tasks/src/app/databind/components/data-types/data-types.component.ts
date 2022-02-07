import { Component, OnInit } from '@angular/core';
import { TabledataService } from '../../services/tabledata.service';

@Component({
  selector: 'app-data-types',
  templateUrl: './data-types.component.html',
  styleUrls: ['./data-types.component.css']
})
export class DataTypesComponent implements OnInit {

  age:number = 22;
  menu:string = '';
  parentshow:string = '';
  model:string = '';
  fname:string = this.callkar.sername;
  parentnasto:string = 'Pavva';
  testdata:string = this.callkar.testinput;

  constructor(private callkar: TabledataService) { }

  ngOnInit(): void {
  }

  setvalue()
  {
    alert("Aur janab, Kya Chal Raha hai?");
  }

  parentdata(menu:string)
  {
    this.parentshow = this.menu;
    
  }

}
