import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {


  @Input() img: string = '';

  @Output() loaded = new EventEmitter<String>();

  imageDefault = './assets/images/default.jpg';

    ngOnInit(): void {

    }

    imgError(){
      this.img = this.imageDefault;
    }

    imgLoad(){
      console.log("log hijo...");
      this.loaded.emit(this.img);
    }


  }


/**
 https://www.w3schools.com/howto/img_avatar.png
 */
