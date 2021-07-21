import { Component, OnInit } from '@angular/core';
import {Iproduct} from "../iproduct";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  id: number=1;
  name: String ="";
  price: number=100;
  description: String ="color";

  product: Iproduct ={};
  constructor() { }

  ngOnInit(): void {
  }
  creatProduct(){
    this.product={id:this.id, name: this.name, price:this.price, description: this.description}
    console.log(this.product)
  }
}
