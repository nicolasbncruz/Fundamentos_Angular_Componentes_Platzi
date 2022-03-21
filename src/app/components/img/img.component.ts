import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';
  @Input('img')
  set changeImg(newImg: string){
    this.img = newImg;
    //code
    console.log('change just img =>', this.img)
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAD4+Pjy8vLNzc38/PyGhoaysrIzMzPj4+P5+fm7u7sjIyOZmZm2trYtLS3s7OzX19ejo6PKysrS0tLk5OQ6OjpRUVHd3d1AQEB5eXmSkpKAgIAXFxegoKAQEBBpaWlcXFxxcXF6enpJSUkdHR1HR0fCwsJPT08oKChkZGRYWFib3NWGAAALxUlEQVR4nO1d22LiOAydJNxKoYQALRDaEGiHlv7//+1AS262bEn4krI9b7tDiQ+xZVk6kv/8+cUvqojnnSrmse8BGcZhEDSxmvkelEnsBH4nbHwPyxzWUoJB0PM9MFPoAASDYOl7aIbwBDLc+h6aGXRBgsHI99jMYAozvJFpeq9geBs7xkbBMPU9OCOADc2NmJpwomC46voengHcKQgGwS24pzMlw6nv4RlAqmSY+B6eAci97gtuwPvuiuemKla+x3c9IiXBIPA9PjXCWTI+aKzhXMNQ47fFh3EyG5obMg3jrzHulQNINAz7qj8OvxexH3sUlr7KQfGxvYahym8rPdrcw2sMXyvD3Ifg5z40DGFTE1Wt8Kd752dVG+eoA3ws1BAMAmjos+fax55sEQEwXDUHCsRc1Pv9CfI11hVm95PTt1ibot/4kDlgqtPvBTJr2hmJn3M5UYcSgoHMaMwyBMNnYYZ35W/e4UQVpug3Vne1j81zBL8TtvPa3y0fgc99OuIXQgSD6qKKx5j3V2AcFX85hj/lZi3K1mCJ969VNYWCwDD2X385V369i7XY/asZ6VP60lOOEsR7L0nfdd9un2HOGrw57GwT7HsmqHYRTYA3/0wit0sw9s3vHyL9MK+AOnDmBnbDc7fPMHrzzS+YwCc1I9j6Jmg9OrfwTdB+lFzhNTqBg5CNwu92ABcnKL/z1EkmRxcftIkHFwR9Ot9bNwQ9um52HbYKHjwRtH2sqODohaD1o2EF0bN+PMbxZtldq0OlkbEFx9obdWbXBlwLGRViNTv4cExQJ7Ewj7l+SKaROyXo0o5e4HZTdLgVFlg6ZehDO+U2ZOODoVtT40MdppMgiHjM12mSJOk6V6uIZPAg69cpgZpY38elniJc9Kkug3ulwgtleCvJyXXYJ71Jpe7GCgiDe4WEGjMo2SuBc1n/AT20TPXrE1JZ0M9kCzl2YLnazsfoZJZjrwYdcNOL8XvIb8rcbol6IdAXMPYBG7t7sc6qAowQ6IR71LdhF+Od/qtMQacZvQBr4bGZAjc1RN1whs0/4f0QrDZl1wmt7vzDRWe8w29h7/hv7uK/9XGXzhYWYlLd6X3viehNUpYNdmF/Y/LZOxj0xaf9Dd1TDoIx6SHYPaOKwbpvYmX2maHRZ9pjuJGt0dW5GnbUkOopszOv6+sIcibPF6g2j3oaK3FVDSPRAFz1WFUhphrXeAJ0DSX/qVg3QsQ15392zp5RzjRUVWIqcUVuP9IVS4DgiF7YUp1HfrlJJFHM48AJ4LJDzAO+i8NnyNmJ2QvRB8NnzjPZ+4UPhhPW434SQ15lKFf36IPhK+tx3O3CB0PeDsU5wfhiyJul3N3XB8MB63GkMiLPDN84T2OLH7zs+AvG09hJZS8MOUkGfCqkDQxpQZovsE/bVzDUdHxQgFMLqSuKqyGbFMiu6TyRcxkylAV45cMgMRf85gv06ClbbChqYFZawz7k/yU/Chn2XhsO6/MFz1QdGtKSmm8OFn0yGRKyFmfgjJqVkqB575N1rKEJXnEhDGutwaL4kG6pNAeU0YS43IFl/V44S0g0KWFMXGDWScul4fxhh83V4H9xZJ67nPjdeb9Ax3zvmggbgMcGvpHJg/JMVu8rMbKgH0buzm+4GhfsllQk0oTwuIVamhxJEeO8YU9Nk8J0Ca6WhaJEbPQ20+eipV2Gn9+P27whlyppCKeQrXmG+KiRzkGVaRx3s69pFx/yCulyKubNP2DFFBgDk2OrWiSxMNggeKoGCKbFT1nx18S/sSDOoITgE2jv78osVlPcdRGYlT+UxDLZEC5SEvyjRPYe4xfZxioqD6bnrWFf/g+Jk25DX0uLG2XbQ30ihQd5hZ9MWnFuG1WZupIVcqVcQQ7yoWOV9meLKIzuZv0UOgwC2pH587HyX7n4d7w0ggY2OtWA4piwuutIIsdI34IGCzUzOPWP1MjZkC2ar5mpEgz7PYiv1EWAlKwPqdTKoWC8ZqbK6Mwikx+ipctDflRbjlTsdeArfOSoGvzLa9rIdtJc9tfSoMllu+Vp30wX5VcjMOU8HIgHI2D9ix+8KwOFLIrcCBWATEowEKdfFwhwCuKImkCeMVFN7xWVX7lhSQY1M7kEU+FZzXOLGzkC8ls03eAkKxecaCqLNE94n6u+5L00m+ILoFI0PEcrXpdsL/h7fo1xqg0QZZtz4OQul/wbbaIab+BSGFIgZDNZb5AJhsf9HnAJKQFc85t9sdYsdjCiyJjMD6OIyhn/5grwnh226IkAJwzRql6+mBdGcXTILXz5N9ARc37qW4Eijmaxzxa6BIUv31egLJ+01mcLnUaxMUeDarDM9Fb7DbRMq2upNWQZYbPUZwttSK01FSxfopWWImiBD6GMjohKIXNu/tvxmUeLpq70GyOuSBEGXt5jsaFJpVabrXCDQMhN2WwLWWnybLjPFkWDprxE7VqUkZqh2S8maUGt7PcXlPOU1FdEB5oIBykL4aGcTZhw8+rzeMxXCKtEbGWnVxWMVuxfobAIuutp8mQZnQMf3egu0ZWEUYUMGrctPcVKFpzJPEpLv0Nps7OXRhg7TJSeFrkdIXy9bxC8Xhb1MKH5BoO05lYpQnmZtD9GXyFnpqv94LdY843m+E5Sm+ZEgk9oW2DzDmFZ1QddUgRQnDS92wgl5lr1hSw8/Bsq9m7Yn2WEvKUjkB3A9FZ/K3P6wQ6wSiEZaASpStATxLUoyTCckGv4SecceIDS2Axwj+FUezff4gbQe6g3NsAGQOd8bVAXyvixqr3rbxH+cRkEobMFYpzQqmB1YKq8xZ3CWCmaKgP3qYTAPoM64wExkA8WxeV3YHiknDyKoIDUIY7BnQ3lmkCHnyzhlGL9uV+vHneira9/BiQoTLpolmzhcPpR9u0i4NT06vgys9FqCg4sVZ8W349V13efgAwl6eRor+mDYZpDyA0vw3sLTDcFdIkK5vR8NCpOyYGnFJM0Rh1F0Mo1nEbEJEXomFEMGSfqQKticP3ikasaBchdvDiLkPSgDkIhAq7pv0GGkFdz2WOGqGMWwSvBJf8MMoSWGY0hIR6IW4gGGUK1oTSGhHogXPWGSYaA+aYxJPSfw4kmTTIEIhI0hgTrjovLm2QIxHVu6B0CftsNrUOgK8sN2VLgyG5tP8QlcY0ylLdlofk0BDE+riuaWYYL2aG28EtxqTR0zDNEtbowfUNdJGFRZIRwtg8tLVSF5EuYL8q8S3p1JGXkZIrpiIHOcmIi7Y+Ob1b6N7PmyVqXe0WezHVZq+yYHJxd39ZAd/qweYd7RSFLm+CTxeh1/dDxRa5EuASNPcpxA8NCvaV/chfEgDFEmT9oq3DT7BwL6D0gdE1Q3rFdBOG1pLWAkEtqpTzxGoCqHc0JA1yEPm4aUgOMDiuHuoCibE76adAAy74Urg18pnB/C48esG/ZgxxUeCN0e/klEgot9ET6GlXXDnm4DUsPpTf+KHA8KE9gzp1QDHTe5f4Qf0+9YXzQyZM8XA6pB+JENci36/UWc4VbK9+h0ZqEVq5DozrorD0+dwHDKtatbz4CcIEIArj16rYwZF9YAKJl89TCfdGcfqr2YLwW4YQ2uaaWlOQswZAdsC/yUIOjwLQDa1dFO71cUAFLtXknOLxcUAULdvQC06kKJuwRbMlLZPfWx6AdIUXz7kyBN/fXQssAuaSvn8htMnt6Bw4mV9+yZwgyxe3HWacwRVih47lJzUwW1GjLbiGjuLmE1xYvypz/pFc4LmLgrT0ERYq1IIRCaHFfXWfTRjyyTQQbFLcN+xBBmdSmGr8mW20XwSrFZ/HsCtREiZKiTvka20awpHiUnVylSQ1ZaqIoZ2sfwQtF+aFOGoeTx9MOrSX4z2ymxzEQepAaGyAS03059trhylAgPX78PBoqSAha6V/qD5LqLfqVKK2GRI+y0//VT4LEdW1TKM0AHPXz9gmR4W0ZGolXQ7zIvf0QUlNAve3PhaDtaqdfdgWEYm9WHXOrMa9TtHxJkheE/XGB/q0Z0l/84n+F/wBps7GdhwZVpgAAAABJRU5ErkJggg=='
  // counter = 0;
  // counterFn: number | undefined;

  constructor() {
    //before render
    //en el constructor no correr cosas asyncronas
    //por cada componente solo se instancia una vez
    console.log('constructor', 'imgValue =>', this.img);

  }

  ngOnChanges(changes: SimpleChanges): void {
    //corre antes y durante el render
    //changes inputs -- muchas veces va a correr 
    //las veces que se actualicen los inputs
    console.log('ngOnChanges', 'imgVaue =>', this.img);
    console.log('changes', changes);
    //para detectar cada vez que haya cambios en los inputs
  }

  ngOnInit(): void {
    //corre antes del render 
    //async - fetch estan permitidos
    //corre una sola vez
    console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter +=1;
    //   console.log('run counter');
    // }, 1000);
  }

  ngAfterViewInit(): void {
    //corre despues de que todo se este renderizando
    //
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    //corre cuando se elimina este componente
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    //console.log(this.img);
    this.loaded.emit(this.img);//se va al padre mediante decorador @Output

  }

}


/**
 https://www.w3schools.com/howto/img_avatar.png
 */
