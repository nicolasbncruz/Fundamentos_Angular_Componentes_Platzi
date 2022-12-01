import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = 'valor inicial';


  ngOnInit(): void {
  }



}


/**
 https://www.w3schools.com/howto/img_avatar.png
 */
