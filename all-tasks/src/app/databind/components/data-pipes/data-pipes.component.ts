import { Component, OnInit } from '@angular/core';
import { TabledataService } from '../../services/tabledata.service';

@Component({
  selector: 'app-data-pipes',
  templateUrl: './data-pipes.component.html',
  styleUrls: ['./data-pipes.component.css']
})
export class DataPipesComponent implements OnInit {
  
  pipetable = this.callkar.Products;
  pipetext:string = this.callkar.serpipe;
  price:number = 5000;
  tarik = new Date();

  constructor(private callkar: TabledataService) { }


  ngOnInit(): void {
  }

  edit()
  {
    this.callkar.saal();
  }

}
