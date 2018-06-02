import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image-service/image.service';
import { UnsplashImage } from '../image-service/UnsplashImage';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: UnsplashImage[];
  constructor(private _imageService: ImageService) { }

  ngOnInit() {
    this._imageService.getImages().subscribe(images => {
      this.images = images;
      console.log(images[0].id);
    });
  }

}
