import { Component, OnInit } from '@angular/core';
import {Iproduct} from "../iproduct";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Array<Iproduct> =[
    {id: 1, name: "Iphone11", price: 500, description: "mau xanh, lam, do"},
    {id: 2, name: "Iphone12", price: 600, description: "mau den, vang, do"}
  ];
  product: Iproduct={};

  constructor() { }

  ngOnInit(): void {
  }
  addProduct(){
    this.products.push(this.product);
  }

}
