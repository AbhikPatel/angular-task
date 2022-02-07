import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  testinput:string = '';

  sername:string = 'Abhishek Patel';
  serpipe:string = 'This text is piped';

  constructor( private http:HttpClient ) { }

  saal()
  {
    alert('Uss ke lia 30 Saal ka toh time de');
  }

  Products = [
    { name:'Laptop', price:80000, cat:'Electronics', stock:true},
    { name:'Mobile', price:11000, cat:'Electronics', stock:false},
    { name:'Mouse', price:500, cat:'Electronics', stock:true},
    { name:'Bottle', price:120, cat:'Plastic', stock:false},
    { name:'Dove Cream', price:1, cat:'Cosmetics', stock:true},
    { name:'RX 100', price:350000, cat:'Motors', stock:true},
    { name:'Antilla', price:150, cat:'Building', stock:false},
  ];

}
