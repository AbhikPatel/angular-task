import { Component, OnInit } from '@angular/core';
import { TabledataService } from '../../services/tabledata.service';

@Component({
  selector: 'app-data-directives',
  templateUrl: './data-directives.component.html',
  styleUrls: ['./data-directives.component.css']
})
export class DataDirectivesComponent implements OnInit {

  direct = this.service.Products;

  constructor( private service:TabledataService) { }

  ngOnInit(): void {

  }

  
}
