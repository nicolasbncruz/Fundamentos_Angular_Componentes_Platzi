import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {


  @Input() img: string = '';

  imageDefault = './assets/images/default.jpg';

    ngOnInit(): void {

    }

    imgError(){
      this.img = this.imageDefault;
    }


  }


/**
 https://www.w3schools.com/howto/img_avatar.png
 */
