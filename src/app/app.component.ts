import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImage = true;
  onLoaded(img: String){
    console.log('log padre : ', img);
  }


  showImg = true;


  toggleImg(){
    this.showImg = !this.showImg;
  }

}
