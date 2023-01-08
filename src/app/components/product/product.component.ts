import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input()
  productSon: Product = {
    id:'',
    title:'',
    price:0,
    image:'',
    description:'',
    category:''
  };

  @Output()
  addedProduct = new EventEmitter<Product>();

  constructor() { }

  onAddToCart(){
    this.addedProduct.emit(this.productSon);
  }

}
