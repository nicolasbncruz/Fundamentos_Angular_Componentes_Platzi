import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  today = new Date();
  date = new Date(2023, 2, 21);
  otherDay = new Date(-0.000002);

  constructor(private storeService: StoreService,
              private productService: ProductsService) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data=>{
      this.products = data;
    });

  }

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.total=this.storeService.getTotal();
  }

}
