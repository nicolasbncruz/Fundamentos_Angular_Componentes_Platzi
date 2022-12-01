import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

<<<<<<< HEAD


=======
  @Input('myProduct') product: Product = {
    id: '',
    price: 0,
    image: '',
    name: ''
  };
 
>>>>>>> fe10f1ba8df90c75344c1b770ad8792e78fc26d6
  constructor() { }

  ngOnInit(): void {
  }

}
