import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  // se agrega en el hijo RECIBE UN VALOR DEL PADRE
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    //code, se ejecuta solo cuando cambia el input
    console.log('change jusst img => ', this.img);
  }

  @Input()
  alt: string = '';

  @Output() // ENVIA INFORMACION DESDE EL HIJO AL PADRE
  loaded = new EventEmitter<String>();

  imageDefault = './assets/images/default.jpg';
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    //before render
    //async -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //before - during render
    //changes inputs -- times
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    //before render
    //async - fetch - promises - api -- once time
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(()=>{
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000)
  }

  ngAfterViewInit(): void {
    //after render
    //handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    //delete
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoad() {
    console.log('log hijo...');
    this.loaded.emit(this.img);
  }
}

/**
 https://www.w3schools.com/howto/img_avatar.png
 */
