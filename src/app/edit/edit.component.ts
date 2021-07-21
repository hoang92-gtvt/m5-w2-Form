import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductServiceService} from "../product-service.service";
import {Iproduct} from "../iproduct";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  product: Iproduct ={};
  id:number=0
  name:String ="";
  price :number=100;
  description:String ="";


  constructor(private productsService: ProductServiceService) {
    this.product=productsService.product
  }

  ngOnInit(): void {
  }

  editProduct(){
    this.product={
      id: this.id,
      name: this.name,
      price: this.price,
      description: this.description,

    }
    let product = this.product;
    let index =  this.id;
    // this.productsService.editProduct(product,index);
    this.product={};
  }



}
