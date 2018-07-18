import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {
  img_is_loaded=false;
  img;
  src='https://picsum.photos/720/1080/?random';

  constructor(private element:ElementRef) { }

  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://picsum.photos/720/1080/?random',
    fontsize: 40
  };

  ngOnInit() {
    this.generateSrc();
  }

  generateSrc(): void {
    this.img = this.element.nativeElement.getElementsByTagName('img')[0]
    if(this.img != undefined){
      this.img.onload = (e)=>{
        this.img_is_loaded=true;
        console.log(this.img_is_loaded);
      }
  }

    this.src = this.image.api + String(Math.ceil(Math.random()*1084));
    this.img_is_loaded=false;
    console.log(this.img_is_loaded);

}
}

class CatImage {
  message: string;
  api: string;
  fontsize: number;
}
