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

  async ngOnInit() {
    this.images = await this._imageService.getImages();
  }

}
