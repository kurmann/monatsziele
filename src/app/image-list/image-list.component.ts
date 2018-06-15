import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image-service/image.service';
import { debounceTime } from 'rxjs/operators';
import { UnsplashImage } from '../image-service/UnsplashResult';


@Component({
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  public readonly defaultSearchTerm = 'Motivation';

  public images: UnsplashImage[];

  constructor(private _imageService: ImageService) { }

  ngOnInit() {
    this._imageService.getImagesBySearchTerm(this.defaultSearchTerm)
      .subscribe(result => {
        this.images = result.results;
      });
  }

  onSearchImagesByInstantSearch(searchString: string): void {
    this._imageService.getImagesBySearchTerm(searchString)
      .pipe(debounceTime(300))
      .subscribe(result => {
        this.images = result.results;
      });
  }

  onSearchImagesByButton(searchString: string): void {
    this._imageService.getImagesBySearchTerm(searchString)
      .subscribe(result => {
        this.images = result.results;
      });
  }

}
