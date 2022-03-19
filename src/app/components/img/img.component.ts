import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = 'valor init';

  imageDefault = 'https://www.w3schools.com/howto/img_avatar2.png'

  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.img = this.imageDefault;
  }

}


