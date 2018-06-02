import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config-service/config.service';
import { Config } from '../config-service/Config';
import { UnsplashImage } from './UnsplashImage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  _config: Config;
  _images: Observable<UnsplashImage[]> = new Observable<UnsplashImage[]>();

  constructor(private _httpClient: HttpClient, private _configService: ConfigService) { }

  getImages(): Observable<UnsplashImage[]> {

    this._configService.getConfig().subscribe(
      config => this._config = config,
      error => console.log(error),
      () => {
        const url = this._config.connections.unsplash.url + '/photos/?client_id=' + this._config.connections.unsplash.clientId;
        this._images = this._httpClient.get<UnsplashImage[]>(url);
      }
    );

    return this._images;
  }
}
