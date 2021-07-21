import { Injectable } from '@angular/core';
import {Iproduct} from "./iproduct";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Array<Iproduct>=[
    {id: 1, name: "Iphone11", price: 500, description: "mau xanh, lam, do"},
    {id: 2, name: "Iphone12", price: 600, description: "mau den, vang, do"}
  ]
  product: Iproduct={}
  constructor() { }

  addProduct(product: Iproduct){
    this.products.push(product);
  }
  editProduct(product: Iproduct, index:number){
    this.products.splice(index, 1, product);
  }
  getProduct(index: number){
    this.product= this.products[index];
    return this.product;
  }

}
