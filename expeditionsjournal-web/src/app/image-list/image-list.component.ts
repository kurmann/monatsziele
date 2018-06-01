import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image-service/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  constructor(private _imageService: ImageService) { }

  ngOnInit() {
    this._imageService.getImages();
  }

}
