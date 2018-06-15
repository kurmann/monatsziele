import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image-service/image.service';
import { UnsplashImage } from '../image-service/UnsplashImage';
import { debounceTime } from 'rxjs/operators';


@Component({
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  public images: UnsplashImage[];
  constructor(private _imageService: ImageService) { }

  ngOnInit() {
    this._imageService.getCurrentImages().subscribe(images => {
      this.images = images;
    });
  }

  onSearchImages(searchString: string): void {
    this._imageService.getImagesBySearchTerm(searchString)
      .subscribe(result => {
        this.images = result.results;
      });
  }

}
