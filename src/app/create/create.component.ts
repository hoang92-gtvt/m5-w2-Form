import { Component, OnInit } from '@angular/core';
import {Iproduct} from "../iproduct";
import {ProductServiceService} from "../product-service.service";
import {ListComponent} from "../list/list.component";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product = new FormGroup({
    id : new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  })



  constructor( private productsService:ProductServiceService) {

    }

  ngOnInit(): void {
  }

  creatProduct(){
    console.log(this.product.value);
    let product = this.product.value;
    this.productsService.addProduct(product);
  }



}
