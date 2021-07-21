import { Component, OnInit } from '@angular/core';
import {Iproduct} from "../iproduct";
import {ProductServiceService} from "../product-service.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Array<Iproduct> =[

  ];
  product: Iproduct={};

  constructor(private productService: ProductServiceService) {
    this.products= productService.products;
  }

  ngOnInit(): void {
  }
  getProduct(index:number){
    console.log("onclick");
    let oldProduct = this.productService.getProduct(index);
    this.productService.product = oldProduct;
    console.log(this.productService.product);
  }

}
